﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Data.Entity
{
    /// <summary>
    /// The default implementation of <see cref="IEventContext"/>.
    /// </summary>
    public class EventSourcingContext : DbContext, IEventContext, ICommandContext
    {
        public IDbSet<EventEntity> Events { get; private set; }
        public IDbSet<UnPublishedEventEntity> UnPublishedEvents { get; private set; }

        public IDbSet<CommandEntity> Commands { get; private set; }
        public IDbSet<UnPublishedCommandEntity> UnPublishedCommands { get; private set; }

        static EventSourcingContext()
        {
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges<EventSourcingContext>());
        }

        public EventSourcingContext(string nameOrConnectionString)
            : base(nameOrConnectionString)
        {
            Events = Set<EventEntity>();
            UnPublishedEvents = Set<UnPublishedEventEntity>();

            Commands = Set<CommandEntity>();
            UnPublishedCommands = Set<UnPublishedCommandEntity>();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<EventEntity>()
                .ToTable("Event");

            modelBuilder.Entity<EventPublishedToHandlerEntity>()
                .ToTable("EventPublishedToHandler");

            modelBuilder.Entity<UnPublishedEventEntity>()
                .ToTable("UnPublishedEvent");

            modelBuilder.Entity<CommandEntity>()
                .ToTable("Command");

            modelBuilder.Entity<UnPublishedCommandEntity>()
                .ToTable("UnPublishedCommand");
        }

        public void Save()
        {
            base.SaveChanges();
        }

        public Task SaveAsync()
        {
            return base.SaveChangesAsync();
        }
    }
}
