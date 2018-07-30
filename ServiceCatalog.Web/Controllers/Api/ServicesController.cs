using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ServiceCatalog.Core.DbContext;
using ServiceCatalog.Web.ViewModels;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ServiceCatalog.Web.Controllers.Api
{
    [Route("api/[controller]")]
    public class ServicesController : Controller
    {
        private readonly ServiceCatalogDbContext _context;

        public ServicesController(ServiceCatalogDbContext context)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
        }

        [HttpGet]
        public ServiceSearchResult Search(string valueToSearch, int skip = 0, int take = 5 )
        {
            System.Threading.Thread.Sleep(3000);

            var result = new ServiceSearchResult();

            var query = _context.Services.Where(s =>
                !s.IsDeleted
                && (
                    string.IsNullOrEmpty(valueToSearch)
                    || s.Name.Contains(valueToSearch, StringComparison.InvariantCultureIgnoreCase)
                    || s.Tags.Any(tag => tag.Contains(valueToSearch, StringComparison.InvariantCultureIgnoreCase)
                   )
                )).OrderBy(s => s.Name);

            result.TotalCount = query.Count();

            result.Services.AddRange(
                query.Skip(skip).Take(take).Select(s => new ServiceSearchResult.Service(s)).ToList()
                );

            return result;
        }

        [HttpGet, Route("Statistics")]
        public Statistics GetServicesStatistics()
        {
            var stats = new Statistics();

            stats.ServiceCategoryCounts = _context.Services.GroupBy(s => s.ServiceCategory)
                .Select(group => new Statistics.ServiceCategoryCount(group.Key, group.Count())).ToList();

            return stats;
        }

    }
}
