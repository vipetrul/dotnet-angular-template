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
using ServiceCatalog.Core.Models;
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
            services.AddDbContext<ServiceCatalogDbContext>(options => options.UseInMemoryDatabase("InMemoryDatabase")); //.UseSqlServer(connString)

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

                app.UseMiddleware<StackifyMiddleware.RequestTracerMiddleware>();
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

            SeedData(app.ApplicationServices);
        }

        private static void SeedData(IServiceProvider appApplicationServices)
        {
            //TODO: this should be removed once we use real database
            using (var scope = appApplicationServices.CreateScope())
            {
                var context = scope.ServiceProvider.GetService<ServiceCatalogDbContext>();

                context.Services.AddRange(
                    new Service
                    {
                        Id = 1,
                        Name = "Large Poster Printer",
                        ServiceCategory = ServiceCategory.ClassroomLabsAndPrinting,
                        Description =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet sem sit amet faucibus sodales. Fusce sed placerat leo, id interdum est. Ut vestibulum velit ac elit lobortis dignissim. Nam sagittis sit amet elit et posuere. In rutrum enim at erat pretium ultrices. Phasellus dui enim, luctus sit amet consequat et, pretium a arcu. Ut ex eros, dictum eget tellus et, cursus rutrum metus. Vestibulum cursus gravida eleifend. Maecenas fringilla dolor quam. Suspendisse potenti.",
                        Owner = "Printing Department",
                        Tags = new[] { "Printing", "Posters", "Presenatation" },
                    }, new Service
                    {
                        Id = 2,
                        Name = "ETS Desktop Support",
                        ServiceCategory = ServiceCategory.DesktopServices,
                        Description =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet sem sit amet faucibus sodales. Fusce sed placerat leo, id interdum est. Ut vestibulum velit ac elit lobortis dignissim. Nam sagittis sit amet elit et posuere. In rutrum enim at erat pretium ultrices. Phasellus dui enim, luctus sit amet consequat et, pretium a arcu. Ut ex eros, dictum eget tellus et, cursus rutrum metus. Vestibulum cursus gravida eleifend. Maecenas fringilla dolor quam. Suspendisse potenti.",
                        Owner = "ITS",
                        Tags = new[] { "Desktop", "Computer", "Laptop", "IPad", "Windows", "Help desk", "Backup" },
                    }, new Service
                    {
                        Id = 3,
                        Name = "Clickers",
                        ServiceCategory = ServiceCategory.EducationalTechnology,
                        Description =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet sem sit amet faucibus sodales. Fusce sed placerat leo, id interdum est. Ut vestibulum velit ac elit lobortis dignissim. Nam sagittis sit amet elit et posuere. In rutrum enim at erat pretium ultrices. Phasellus dui enim, luctus sit amet consequat et, pretium a arcu. Ut ex eros, dictum eget tellus et, cursus rutrum metus. Vestibulum cursus gravida eleifend. Maecenas fringilla dolor quam. Suspendisse potenti.",
                        Owner = "ITS",
                        Tags = new[] { "Polling", "Feedback", "Student", "Classroom" },
                    }, new Service
                    {
                        Id = 4,
                        Name = "Panopto",
                        ServiceCategory = ServiceCategory.EducationalTechnology,
                        Description =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet sem sit amet faucibus sodales. Fusce sed placerat leo, id interdum est. Ut vestibulum velit ac elit lobortis dignissim. Nam sagittis sit amet elit et posuere. In rutrum enim at erat pretium ultrices. Phasellus dui enim, luctus sit amet consequat et, pretium a arcu. Ut ex eros, dictum eget tellus et, cursus rutrum metus. Vestibulum cursus gravida eleifend. Maecenas fringilla dolor quam. Suspendisse potenti.",
                        Owner = "Tippie School of Business",
                        Tags = new[] { "Video", "Stream", "Online", "Lectures" },
                    }, new Service
                    {
                        Id = 5,
                        Name = "Matlab",
                        ServiceCategory = ServiceCategory.EducationalTechnology,
                        Description =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet sem sit amet faucibus sodales. Fusce sed placerat leo, id interdum est. Ut vestibulum velit ac elit lobortis dignissim. Nam sagittis sit amet elit et posuere. In rutrum enim at erat pretium ultrices. Phasellus dui enim, luctus sit amet consequat et, pretium a arcu. Ut ex eros, dictum eget tellus et, cursus rutrum metus. Vestibulum cursus gravida eleifend. Maecenas fringilla dolor quam. Suspendisse potenti.",
                        Owner = "Printing Department",
                        Tags = new[] { "Software" },
                    }, new Service
                    {
                        Id = 6,
                        Name = "Confluence (Wiki)",
                        ServiceCategory = ServiceCategory.EmailAndCollaboration,
                        Description =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet sem sit amet faucibus sodales. Fusce sed placerat leo, id interdum est. Ut vestibulum velit ac elit lobortis dignissim. Nam sagittis sit amet elit et posuere. In rutrum enim at erat pretium ultrices. Phasellus dui enim, luctus sit amet consequat et, pretium a arcu. Ut ex eros, dictum eget tellus et, cursus rutrum metus. Vestibulum cursus gravida eleifend. Maecenas fringilla dolor quam. Suspendisse potenti.",
                        Owner = "Printing Department",
                        Tags = new[] { "Collaborate", "Documentation" },
                    }, new Service
                    {
                        Id = 7,
                        Name = "Virtual Desktop Infrastructure (VDI)",
                        ServiceCategory = ServiceCategory.SoftwareAndBusinessApplications,
                        Description =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet sem sit amet faucibus sodales. Fusce sed placerat leo, id interdum est. Ut vestibulum velit ac elit lobortis dignissim. Nam sagittis sit amet elit et posuere. In rutrum enim at erat pretium ultrices. Phasellus dui enim, luctus sit amet consequat et, pretium a arcu. Ut ex eros, dictum eget tellus et, cursus rutrum metus. Vestibulum cursus gravida eleifend. Maecenas fringilla dolor quam. Suspendisse potenti.",
                        Owner = "College of Engineering",
                        Tags = new[] { "Windows", "Linux", "Virtual", "VDI" },
                    }, new Service
                    {
                        Id = 8,
                        Name = "JIRA",
                        ServiceCategory = ServiceCategory.SoftwareAndBusinessApplications,
                        Description =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet sem sit amet faucibus sodales. Fusce sed placerat leo, id interdum est. Ut vestibulum velit ac elit lobortis dignissim. Nam sagittis sit amet elit et posuere. In rutrum enim at erat pretium ultrices. Phasellus dui enim, luctus sit amet consequat et, pretium a arcu. Ut ex eros, dictum eget tellus et, cursus rutrum metus. Vestibulum cursus gravida eleifend. Maecenas fringilla dolor quam. Suspendisse potenti.",
                        Owner = "Bussiness Services",
                        Tags = new[] { "Issue Tracker", "Tickets", "Workflow" },
                    }, new Service
                    {
                        Id = 9,
                        Name = "JIRA Cloud",
                        ServiceCategory = ServiceCategory.SoftwareAndBusinessApplications,
                        Description =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet sem sit amet faucibus sodales. Fusce sed placerat leo, id interdum est. Ut vestibulum velit ac elit lobortis dignissim. Nam sagittis sit amet elit et posuere. In rutrum enim at erat pretium ultrices. Phasellus dui enim, luctus sit amet consequat et, pretium a arcu. Ut ex eros, dictum eget tellus et, cursus rutrum metus. Vestibulum cursus gravida eleifend. Maecenas fringilla dolor quam. Suspendisse potenti.",
                        Owner = "Human Resources",
                        Tags = new[] { "Issue Tracker", "Tickts", "Workflow" },
                    }, new Service
                    {
                        Id = 10,
                        Name = "JIRA",
                        ServiceCategory = ServiceCategory.SoftwareAndBusinessApplications,
                        Description =
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur laoreet sem sit amet faucibus sodales. Fusce sed placerat leo, id interdum est. Ut vestibulum velit ac elit lobortis dignissim. Nam sagittis sit amet elit et posuere. In rutrum enim at erat pretium ultrices. Phasellus dui enim, luctus sit amet consequat et, pretium a arcu. Ut ex eros, dictum eget tellus et, cursus rutrum metus. Vestibulum cursus gravida eleifend. Maecenas fringilla dolor quam. Suspendisse potenti.",
                        Owner = "ITS",
                        Tags = new[] { "Issue Tracker", "Tickts", "Workflow" },
                    });

                context.SaveChanges();

            }

        }


    }
}
