using System;
using ServiceCatalog.Core.Commands;
using ServiceCatalog.Core.Utils;

namespace ServiceCatalog.Core.Models
{
    public class Order
    {
        public int Id { get; protected set; }
        public string Description { get; protected set; }
        public DateTime CreatedAt { get; protected set; }
        public string CreatedBy { get; protected set; }

        protected Order()
        {
            CreatedAt = SystemTime.Now();
        }

        public Order(CreateOrderCommand cmd) : this()
        {
            Description = cmd.Description;
            CreatedBy = cmd.HawkId;
        }
    }
}
