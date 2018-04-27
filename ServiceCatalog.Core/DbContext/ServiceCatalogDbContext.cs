using Microsoft.EntityFrameworkCore;
using ServiceCatalog.Core.DbContext.EntityTypeConfigurations;
using ServiceCatalog.Core.Models;

namespace ServiceCatalog.Core.DbContext
{
    public class ServiceCatalogDbContext : Microsoft.EntityFrameworkCore.DbContext
    {
        public virtual DbSet<Order> Orders { get; protected set; }
        public ServiceCatalogDbContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new OrderEntityTypeConfiguration());
        }
    }
}
