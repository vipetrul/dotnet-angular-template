using System.Security.Claims;
using System.Security.Principal;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Uiowa.Common.ActiveDirectory;

namespace ServiceCatalog.Web.Infrastructure
{
    public interface IAuthorizationPolicy
    {
        Task<string> GetRole(string hawkId);
        Task<bool> CanImpersonate(ClaimsPrincipal currentUser);
    }

    public class AuthorizationPolicy : IAuthorizationPolicy
    {
        private readonly ILogger<AuthorizationPolicy> _logger;

        public AuthorizationPolicy(ILogger<AuthorizationPolicy> logger)
        {
            _logger = logger;
        }

        public async Task<string> GetRole(string hawkId)
        {
            //TODO: update for your project
            _logger.LogInformation($"Get User Role for {hawkId}");

            return AppRoles.BasicUser;
            /* 
            if (AD_Utility.IsUserInGroup(hawkId, "FBIS-Role_Developer-Parking-Admin"))
            {
                return AppRoles.WebMaster;
            }
            if (AD_Utility.IsUserInGroup(hawkId, "FBIS-Role_Developer"))
            {
                return AppRoles.BasicUser;
            }
            */
        }


        public async Task<bool> CanImpersonate(ClaimsPrincipal currentUser)
        {
            //TODO: update for your project
            return (currentUser?.Identity?.Name ?? "").Contains("_");
        }
    }

    public static class AppRoles
    {
        public const string BasicUser = nameof(BasicUser);
        public const string Admin = nameof(Admin);
        public const string WebMaster = nameof(WebMaster);
    }

}
