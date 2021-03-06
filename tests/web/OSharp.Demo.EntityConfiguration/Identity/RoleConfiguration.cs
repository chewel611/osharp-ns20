﻿// -----------------------------------------------------------------------
//  <copyright file="RoleConfiguration.cs" company="OSharp开源团队">
//      Copyright (c) 2014-2017 OSharp. All rights reserved.
//  </copyright>
//  <site>http://www.osharp.org</site>
//  <last-editor>郭明锋</last-editor>
//  <last-date>2017-09-11 11:21</last-date>
// -----------------------------------------------------------------------

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

using OSharp.Demo.Identity.Entities;
using OSharp.Entity;


namespace OSharp.Demo.EntityConfiguration.Identity
{
    public class RoleConfiguration : EntityTypeConfigurationBase<Role, int>
    {
        /// <summary>
        /// 重写以实现实体类型各个属性的数据库配置
        /// </summary>
        /// <param name="builder">实体类型创建器</param>
        public override void Configure(EntityTypeBuilder<Role> builder)
        {
            builder.HasIndex(m => m.NormalizedName).HasName("RoleNameIndex").IsUnique();

            builder.Property(m => m.ConcurrencyStamp).IsConcurrencyToken();

            builder.HasMany<RoleClaim>().WithOne().HasForeignKey(rc => rc.RoleId).IsRequired();
            builder.HasMany<UserRole>().WithOne().HasForeignKey(ur => ur.RoleId).IsRequired();
        }
    }
}