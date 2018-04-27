using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Uiowa.Common.ActiveDirectory;

namespace ServiceCatalog.Web.Infrastructure
{
    public interface IAuthorizationPolicy
    {
        Task<string> GetRole(string hawkId);
        Task<ImpersonateResult> CanImpersonate(string currentUserRole, string hawkIdToBeImpersonated);
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
            _logger.LogInformation($"Get User Role for {hawkId}");
            if (AD_Utility.IsUserInGroup(hawkId, "FBIS-Role_Developer-Parking-Admin"))
            {
                return AppRoles.WebMaster;
            }
            if (AD_Utility.IsUserInGroup(hawkId, "FBIS-Role_Developer"))
            {
                return AppRoles.BasicUser;
            }
            return null;
        }

        public async Task<ImpersonateResult> CanImpersonate(string currentUserRole, string hawkIdToBeImpersonated)
        {
            if (currentUserRole != AppRoles.WebMaster)
            {
                return new ImpersonateResult(false);
            }
            var impersonatedUserRole = await GetRole(hawkIdToBeImpersonated);
            if (impersonatedUserRole == AppRoles.WebMaster)
            {
                return new ImpersonateResult(false); 
            }
            return new ImpersonateResult(true, impersonatedUserRole);
        }
    }

    public static class AppRoles
    {
        public const string BasicUser = nameof(BasicUser);
        public const string Admin = nameof(Admin);
        public const string WebMaster = nameof(WebMaster);
    }

    public class ImpersonateResult
    {
        public bool CanImpersonate { get; protected set; }
        public string ImpersonatedUserRole { get; protected set; }

        public ImpersonateResult(bool canImpersonate, string impersonatedUserRole = "")
        {
            CanImpersonate = canImpersonate;
            ImpersonatedUserRole = impersonatedUserRole;
        }
    }
}
