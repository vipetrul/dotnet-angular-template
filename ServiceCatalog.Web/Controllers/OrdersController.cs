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
using ServiceCatalog.Web.Requests;
using ServiceCatalog.Web.ViewModels;

namespace ServiceCatalog.Web.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class OrdersController : Controller
    {
        private readonly ILogger<OrdersController> _logger;
        private readonly ServiceCatalogDbContext _dbContext;

        public OrdersController(ILogger<OrdersController> logger, ServiceCatalogDbContext dbContext)
        {
            _logger = logger;
            _dbContext = dbContext;
        }

        [HttpGet, ProducesResponseType(typeof(IEnumerable<OrderViewModel>), StatusCodes.Status200OK)]
        public async Task<IEnumerable<OrderViewModel>> Get()
        {
            return await _dbContext.Orders.OrderByDescending(x => x.CreatedAt).Select(x => new OrderViewModel(x)).ToListAsync();
        }

        [HttpPost, Route(""), ProducesResponseType(typeof(OrderViewModel), StatusCodes.Status200OK)]
        public async Task<OrderViewModel> Create([FromBody] CreateOrderRequest request)
        {
            _logger.LogInformation($"User [{User.Identity.Name}] is adding an order");
            var cmd = new CreateOrderCommand(request.Description, User.Identity.Name);
            var newOrder = new Order(cmd);
            await _dbContext.Orders.AddAsync(newOrder);
            await _dbContext.SaveChangesAsync();
            return new OrderViewModel(newOrder);
        }

        [HttpDelete, Route("{id:int}"), ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        public async Task<bool> Delete(int id)
        {
            _logger.LogInformation($"User [{User.Identity.Name}] is deleting an order");
            var order = await _dbContext.Orders.FindAsync(id);
            _dbContext.Orders.Remove(order);
            await _dbContext.SaveChangesAsync();
            return true;
        }
    }
}
