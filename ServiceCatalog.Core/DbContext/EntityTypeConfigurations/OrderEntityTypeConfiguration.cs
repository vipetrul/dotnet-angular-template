using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ServiceCatalog.Core.Models;

namespace ServiceCatalog.Core.DbContext.EntityTypeConfigurations
{
    internal class OrderEntityTypeConfiguration : IEntityTypeConfiguration<Order>
    {
        public void Configure(EntityTypeBuilder<Order> builder)
        {
            builder.ToTable("Orders");
            builder.HasKey(x => x.Id);

            builder.Property(x => x.Id).HasColumnName("ID").ValueGeneratedOnAdd();
            builder.Property(x => x.Description).HasColumnName("Description").HasMaxLength(100).IsRequired();
            builder.Property(x => x.CreatedAt).HasColumnName("CreatedAt").IsRequired();
            builder.Property(x => x.CreatedBy).HasColumnName("CreatedBy").HasMaxLength(50).IsRequired();
        }
    }
}
