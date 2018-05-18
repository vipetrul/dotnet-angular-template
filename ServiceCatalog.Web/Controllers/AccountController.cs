using System;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ServiceCatalog.Core.DbContext;
using ServiceCatalog.Web.Infrastructure;

namespace ServiceCatalog.Web.Controllers
{
    [Route("[controller]")]
    public class AccountController : Controller
    {
        private readonly ILogger<AccountController> _logger;
        private readonly ServiceCatalogDbContext _dbContext;
        private readonly IAuthorizationPolicy _authorizationPolicy;

        public AccountController(ServiceCatalogDbContext dbContext, IAuthorizationPolicy authorizationPolicy, ILogger<AccountController> logger)
        {
            _dbContext = dbContext;
            _authorizationPolicy = authorizationPolicy;
            _logger = logger;
        }

        [HttpGet, Route("user"), ProducesResponseType(typeof(ApplicationUserViewModel), StatusCodes.Status200OK)]
        public async Task<ApplicationUserViewModel> GetUser()
        {
            var hawkId = User?.Identity?.Name;
            if (string.IsNullOrEmpty(hawkId))
            {
                return null;
            }
            
            return new ApplicationUserViewModel
            {
                HawkId = hawkId,
                UnivId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value,
                OriginalUser = User.FindFirst("OriginalUser")?.Value,
                FullName = "Valerij Petrulevich"
            };
        }

        [HttpGet, Route("AccessDenied"), ProducesResponseType(StatusCodes.Status401Unauthorized)]
        public IActionResult AccessDenied()
        {
            var currentUserHawkId = User.Identity.Name;
            var returnUri = Request.Query["ReturnUrl"];
            _logger.LogInformation($"User {currentUserHawkId} tried to access {returnUri}, but failed.");
            throw new UnauthorizedAccessException($"Not Authorized Access to {returnUri}");
        }
    }

    public class ApplicationUserViewModel
    {
        public string HawkId { get; set; }
        public string UnivId { get; set; }
        public string OriginalUser { get; set; }
        public string FullName { get; set; }
    }
}
