using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServiceCatalog.Core.Models;
using ServiceCatalog.Core.Utils;

namespace ServiceCatalog.Web.ViewModels
{
    public class Statistics
    {
        public List<ServiceCategoryCount> ServiceCategoryCounts { get; set; } = new List<ServiceCategoryCount>();


        public class ServiceCategoryCount
        {
            public ServiceCategory Category { get; set; }
            public string CategoryDisplayName => this.Category.GetDescription();
            public int Count { get; set; }

            public ServiceCategoryCount(ServiceCategory category, int count)
            {
                Category = category;
                Count = count;
            }
        }
    }

}
