using System;
using System.IO;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Serilog;
using Serilog.Events;

namespace ServiceCatalog.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var loggerConfig = new LoggerConfiguration()
                .MinimumLevel.Override("Microsoft", LogEventLevel.Warning)
                .Enrich.FromLogContext()
                .WriteTo.RollingFile("./App_Data/logs/log.txt", restrictedToMinimumLevel: LogEventLevel.Information,
                    outputTemplate:
                    "{Timestamp:yyyy-MM-dd HH:mm:ss} [{Level:u4}] [{SourceContext:l}] {Message:lj}{NewLine}{Exception}");
            var environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
            if (environment != EnvironmentName.Development)
            {
                // todo:: Add Rollbar here
                //loggerConfig.WriteTo.Rollbar("0494a3e99f2b42ad9bafdf1eebbda1f1", environment);
            }
            Log.Logger = loggerConfig.CreateLogger();

            try
            {
                Log.Information("====================================================================");
                Log.Information($"Application Starts. Version: {System.Reflection.Assembly.GetEntryAssembly().GetName().Version}");
                BuildWebHost(args).Run();
            }
            catch (Exception e)
            {
                Log.Fatal(e, "Host terminated unexpectedly");
            }
            finally
            {
                Log.CloseAndFlush();
            }
        }

        public static IWebHost BuildWebHost(string[] args) =>
            WebHost.CreateDefaultBuilder(args)
                .UseStartup<Startup>()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .ConfigureAppConfiguration((builderContext, config) =>
                {
                    config.Sources.Clear();
                    config.AddEnvironmentVariables();
                    var env = builderContext.HostingEnvironment;
                    Log.Information($"Hosting Environment: {env.EnvironmentName}");
                    config.AddJsonFile("config/appsettings.json", optional: false, reloadOnChange: true)
                        .AddJsonFile($"config/appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: true)
                        .AddJsonFile($"config/{Environment.MachineName}/appsettings.json", optional: true, reloadOnChange: true);
                })
                .UseSerilog()
                .Build();
    }
}
