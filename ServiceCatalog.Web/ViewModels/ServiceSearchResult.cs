using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ServiceCatalog.Core.Models;
using StackExchange.Redis;


namespace ServiceCatalog.Web.ViewModels
{
    public class ServiceSearchResult
    {
        public int TotalCount { get; set; }
        public List<Service> Services { get; set; } = new List<Service>();

        public class Service
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
            public ServiceCategory ServiceCategory { get; set; }
            public string[] Tags { get; set; }
            public string Owner { get; set; }

            protected Service()
            {
            }

            public Service(Core.Models.Service service) : this()
            {
                this.Id = service.Id;
                this.Name = service.Name;
                this.Description = service.Description;
                this.ServiceCategory = service.ServiceCategory;
                this.Tags = service.Tags;
                this.Owner = service.Owner;
            }
        }
    }


}
