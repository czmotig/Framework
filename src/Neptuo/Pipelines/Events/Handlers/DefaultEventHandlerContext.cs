﻿using Neptuo.ComponentModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Pipelines.Events.Handlers
{
    /// <summary>
    /// Default implmentation of <see cref="IEventHandlerContext{TEvent}"/>.
    /// </summary>
    /// <typeparam name="TEvent">Type of event data.</typeparam>
    public class DefaultEventHandlerContext<TEvent> : IEventHandlerContext<TEvent>
    {
        public Envelope<TEvent> Payload { get; private set; }
        public IEventRegistry Registry { get; private set; }
        public IEventDispatcher Dispatcher { get; private set; }

        /// <summary>
        /// Creates context from event data and wraps it into <see cref="Envelope{TEvent}"/>.
        /// </summary>
        /// <param name="payload">Event data.</param>
        /// <param name="registry">Current registry of event subscriptions.</param>
        /// <param name="dispatcher">Current event dispatcher.</param>
        public DefaultEventHandlerContext(TEvent payload, IEventRegistry registry, IEventDispatcher dispatcher)
            : this(Envelope.Create(payload), registry, dispatcher)
        { }

        /// <summary>
        /// Creates context from event data envelope.
        /// </summary>
        /// <param name="payload">Event data wrapped in envelope.</param>
        /// <param name="registry">Current registry of event subscriptions.</param>
        /// <param name="dispatcher">Current event dispatcher.</param>
        public DefaultEventHandlerContext(Envelope<TEvent> payload, IEventRegistry registry, IEventDispatcher dispatcher)
        {
            Guard.NotNull(payload, "payload");
            Guard.NotNull(registry, "registry");
            Guard.NotNull(dispatcher, "dispatcher");
            Payload = payload;
            Registry = registry;
            Dispatcher = dispatcher;
        }
    }
}
