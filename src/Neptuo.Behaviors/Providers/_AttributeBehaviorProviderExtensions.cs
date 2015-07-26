﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Behaviors.Providers
{
    /// <summary>
    /// Common extensions for <see cref="AttributeBehaviorProvider"/>.
    /// </summary>
    public static class _AttributeBehaviorProviderExtensions
    {
        /// <summary>
        /// Adds mapping with <typeparamref name="TBehaviorContract"/> as contract and <typeparamref name="TBehaviorImplementation"/> as implementation type.
        /// </summary>
        /// <typeparam name="TBehaviorContract">Behavior attribute contract.</typeparam>
        /// <typeparam name="TBehaviorImplementation">Behavior contract implementor.</typeparam>
        /// <returns>Self (for fluency).</returns>>
        public static AttributeBehaviorProvider Add<TBehaviorContract, TBehaviorImplementation>(this AttributeBehaviorProvider provider)
            where TBehaviorImplementation : IBehavior<TBehaviorContract>
        {
            Ensure.NotNull(provider, "provider");
            return provider.Add(typeof(TBehaviorContract), typeof(TBehaviorImplementation));
        }

        /// <summary>
        /// Adds mapping with <typeparamref name="TBehaviorContract"/> as contract and <typeparamref name="TBehaviorImplementation"/> as implementation type.
        /// </summary>
        /// <typeparam name="TBehaviorContract">Behavior attribute contract.</typeparam>
        /// <typeparam name="TBehaviorImplementation">Behavior contract implementor.</typeparam>
        /// <returns>Self (for fluency).</returns>>
        public static AttributeBehaviorProvider Insert<TBehaviorContract, TBehaviorImplementation>(this AttributeBehaviorProvider provider, int index)
            where TBehaviorContract : Attribute
            where TBehaviorImplementation : IBehavior<TBehaviorContract>
        {
            Ensure.NotNull(provider, "provider");
            return provider.Insert(index, typeof(TBehaviorContract), typeof(TBehaviorImplementation));
        }
    }
}
