﻿using Neptuo.Events;
using Neptuo.Models.Domains;
using Neptuo.Models.Keys;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Activators
{
    /// <summary>
    /// Reflection based implementation of <see cref="IAggregateRootFactory{T}"/>.
    /// The <typeparamref name="T"/> must have constructor with <see cref="GuidKey"/> and <see cref="IEnumerable{object}"/>.
    /// </summary>
    /// <typeparam name="T">The type of the aggregate root.</typeparam>
    public class ReflectionAggregateRootFactory<T> : IAggregateRootFactory<T>
        where T : AggregateRoot
    {
        private readonly ConstructorInfo constructorInfo;

        /// <summary>
        /// Creates new instance and checks constructor.
        /// </summary>
        public ReflectionAggregateRootFactory()
        {
            constructorInfo = typeof(T).GetConstructor(new Type[] { typeof(IKey), typeof(IEnumerable<IEvent>) });
            if (constructorInfo == null)
                throw Ensure.Exception.InvalidOperation("Reflection aggregate factory can operate only on types which have constructor with IKey and IEnumerable<IEvent> parameters, '{0}' doesn't have.", typeof(T).FullName);
        }

        public T Create(IKey aggregateKey, IEnumerable<object> events)
        {
            Ensure.Condition.NotEmptyKey(aggregateKey, "aggregateKey");
            Ensure.NotNull(events, "events");
            return (T)constructorInfo.Invoke(new object[] { aggregateKey, events });
        }
    }
}