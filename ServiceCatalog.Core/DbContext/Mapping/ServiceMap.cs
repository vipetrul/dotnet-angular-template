using System;
using System.Collections.Generic;
using System.Text;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using ServiceCatalog.Core.Models;

namespace ServiceCatalog.Core.DbContext.Mapping
{
    public class ServiceMap : IEntityTypeConfiguration<Service>
    {
        public void Configure(EntityTypeBuilder<Service> builder)
        {
            builder.ToTable("Services");
            builder.Ignore(p => p.Tags); builder.Property("_tagsDelimited").HasColumnName("Tags"); //field with backing field
        }
    }
}
