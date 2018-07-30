using Microsoft.EntityFrameworkCore;
using ServiceCatalog.Core.DbContext.Mapping;
using ServiceCatalog.Core.Models;

namespace ServiceCatalog.Core.DbContext
{
    public class ServiceCatalogDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public ServiceCatalogDbContext(DbContextOptions options) : base(options)
        {
        }

        public virtual DbSet<Service> Services { get; protected set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ServiceMap());

            
        }
    }
}