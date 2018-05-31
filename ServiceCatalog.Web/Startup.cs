using System;
using System.Security.Claims;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using ServiceCatalog.Core.DbContext;
using ServiceCatalog.Web.Infrastructure;
using Swashbuckle.AspNetCore.Swagger;
using Uiowa.Common.ActiveDirectory;
using Uiowa.Login.Core.UIP;

namespace ServiceCatalog.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            var connString = Configuration.GetValue<string>("ConnectionStrings:ServiceCatalog");
            services.AddDbContext<ServiceCatalogDbContext>(options => options.UseSqlServer(connString));
            
            services.AddMvc();
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
                .AddCookie();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "Trainer Tools", Version = "v1" });
            });

            services.AddScoped<IAuthorizationPolicy, AuthorizationPolicy>();
            services.AddMemoryCache();
        }

        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseDatabaseErrorPage();
                app.UseSwagger();

                app.UseSwaggerUI(c =>
                {
                    c.SwaggerEndpoint("/swagger/v1/swagger.json", "Trainer Tools API V1");
                });
            }

            app.UseAuthentication();
            app.UseHawkIdUipLogin(setup =>
            {
                setup.Events.OnSignedIn = async context =>
                {
                    var authorizationPolicy = context.HttpContext.RequestServices.GetRequiredService<IAuthorizationPolicy>();
                    var role = await authorizationPolicy.GetRole(context.HawkId) ?? "";
                    context.AddClaim(new Claim(ClaimTypes.Role, role));

                    var userProperties = AD_Utility.GetUserProperties(context.HawkId, "uiowaMRUID", "extensionAttribute12");

                    if (userProperties == null) new ArgumentException($"HawkId '{context.HawkId}' doesn't exist.");

                    var mruid = userProperties[0] ?? userProperties[1];
                    context.AddClaim(new Claim("mruid", mruid));
                };
            });
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseErrorHandling();
            app.UseMvcWithDefaultRoute();

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "Angular";
                if (env.IsDevelopment())
                {
                    spa.UseAngularCliServer(npmScript: "start");
                }
            });
        }
    }
}
