﻿using Neptuo.Collections.Specialized;
using Neptuo.Events;
using Neptuo.Models.Keys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Formatters
{
    /// <summary>
    /// Stores/Loads all-events-shared properties with internal setters.
    /// </summary>
    public class EventExtender
    {
        protected static class Name
        {
            public const string Key = "Key";
            public const string AggregateKey = "AggregateKey";
            public const string AggregateVersion = "AggregateVersion";
        }

        /// <summary>
        /// Stores <paramref name="payload"/> properties to the <paramref name="storage"/>.
        /// </summary>
        /// <param name="storage">The storage to save values to.</param>
        /// <param name="payload">The event payload to store.</param>
        public void Store(IKeyValueCollection storage, Event payload)
        {
            storage.Add(Name.Key, payload.Key);
            storage.Add(Name.AggregateKey, payload.AggregateKey);
            storage.Add(Name.AggregateVersion, payload.Version);
        }

        /// <summary>
        /// Loads <paramref name="payload"/> properties from the <paramref name="storage"/>.
        /// </summary>
        /// <param name="storage">The storage to load values from.</param>
        /// <param name="payload">The event payload to load.</param>
        public void Load(IReadOnlyKeyValueCollection storage, Event payload)
        

           payload.Key = storage.Get<IKey>(Name.Key);
           payload.AggregateKey = storage.Get<IKey>(Name.AggregateKey);
           payload.Version = storage.Get<int>(Name.AggregateVersion);
        
    }
}
