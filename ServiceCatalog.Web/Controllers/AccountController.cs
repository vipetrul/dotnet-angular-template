using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ServiceCatalog.Core.DbContext;
using ServiceCatalog.Web.Infrastructure;
using Uiowa.Common.ActiveDirectory;

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
        public IActionResult GetUser()
        {
            var hawkId = User?.Identity?.Name;

            var result = new ApplicationUserViewModel();

            if (string.IsNullOrEmpty(hawkId))
            {
                return Ok(result);
            }

            result.HawkId = hawkId;
            result.UnivId = User.FindFirst(ClaimTypes.NameIdentifier)?.Value;
            result.OriginalUser = User.FindFirst("OriginalUser")?.Value;

            var userProperties = AD_Utility.GetUserProperties(hawkId, "GivenName", "sn");
            if (userProperties != null)
            {
                result.FullName = $"{userProperties[0]} {userProperties[1]}";
            }

            return Ok(result);
        }

        [HttpGet, Route("impersonate/{hawkIdToImpersonate}")]
        public async Task<IActionResult> Impersonate(string hawkIdToImpersonate, string returnUrl)
        {
            var currentUserHawkId = User.Identity.Name;
            var originalUser = User.Claims.FirstOrDefault(c => c.Type == "OriginalUser")?.Value;
            _logger.LogInformation($"User {currentUserHawkId} is trying to impersonate {hawkIdToImpersonate}");

            if (await _authorizationPolicy.CanImpersonate(this.User) == false)
            {
                _logger.LogInformation($"User {currentUserHawkId} has no permissions to impersonate.");
                return BadRequest($"You don't have permissions to impersonate");
            }

            var userProperties = AD_Utility.GetUserProperties(hawkIdToImpersonate, "uiowaMRUID", "extensionAttribute12");

            if (userProperties == null)
            {
                return BadRequest($"HawkId '{hawkIdToImpersonate}' doesn't exist.");
            }

            var mruid = userProperties[0] ?? userProperties[1];

            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, hawkIdToImpersonate),
                new Claim(ClaimTypes.NameIdentifier, mruid),
                new Claim(ClaimTypes.Role, await _authorizationPolicy.GetRole(hawkIdToImpersonate)),
                new Claim("OriginalUser", string.IsNullOrEmpty(originalUser) ? currentUserHawkId : originalUser) //if it is chain impersonation, keep original user
            };

            var claimsIdentity = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);
            await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(claimsIdentity));

            return Redirect(string.IsNullOrEmpty(returnUrl) ? Url.Content("~/") : returnUrl);
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
