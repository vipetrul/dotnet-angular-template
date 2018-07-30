using System;
using System.Collections.Generic;
using System.Text;

namespace ServiceCatalog.Core.Models
{
    public class Service
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public ServiceCategory ServiceCategory { get; set; }

        private string _tagsDelimited = "";

        public string[] Tags
        {
            get => (_tagsDelimited ?? "").Split('|', StringSplitOptions.RemoveEmptyEntries);
            set => string.Join('|', value);

        }
        public string Owner { get; set; }

        public bool IsDeleted { get; set; }
    }
}
