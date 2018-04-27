using ServiceCatalog.Core.Models;

namespace ServiceCatalog.Web.ViewModels
{
    public class OrderViewModel
    {
        public int Id { get; set; }
        public string Description { get; set; }
        public string CreatedAt { get; set; }
        public string CreatedBy { get; set; }

        public OrderViewModel(Order x)
        {
            Id = x.Id;
            Description = x.Description;
            CreatedBy = x.CreatedBy;
            CreatedAt = x.CreatedAt.ToString("d");
        }
    }
}
