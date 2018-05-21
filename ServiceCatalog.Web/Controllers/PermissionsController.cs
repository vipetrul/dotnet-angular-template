using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using ServiceCatalog.Core.Commands;
using ServiceCatalog.Core.DbContext;
using ServiceCatalog.Core.Models;
using ServiceCatalog.Web.Infrastructure;
using ServiceCatalog.Web.Requests;
using ServiceCatalog.Web.ViewModels;

namespace ServiceCatalog.Web.Controllers
{
    [Route("api/[controller]")]
    public class PermissionsController : Controller
    {
        private readonly ILogger<OrdersController> _logger;
        private readonly ServiceCatalogDbContext _dbContext;
        private readonly IAuthorizationPolicy _authorizationPolicy;
        private readonly IAuthorizationService _authorizationService;

        public PermissionsController(ILogger<OrdersController> logger, ServiceCatalogDbContext dbContext, IAuthorizationPolicy authorizationPolicy)
        {
            _logger = logger;
            _dbContext = dbContext;
            _authorizationPolicy = authorizationPolicy;
        }

        [HttpGet, ProducesResponseType(typeof(IEnumerable<PermissionsViewModel>), StatusCodes.Status200OK)]
        public async Task<PermissionsViewModel> Get()
        {
            var result = new PermissionsViewModel()
            {
                CanImpersonate = await _authorizationPolicy.CanImpersonate(this.User)
            };

            return result;
        }

        public class PermissionsViewModel
        {
            public bool CanImpersonate { get; set; }
            // CanPlaceOrders
            // CanRunReports
            //TODO: update for your project
        }
    }
}
