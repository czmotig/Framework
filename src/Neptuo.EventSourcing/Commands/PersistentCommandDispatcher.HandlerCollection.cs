﻿using Neptuo;
using Neptuo.Commands.Handlers;
using Neptuo.Internals;
using Neptuo.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Commands
{
    partial class PersistentCommandDispatcher
    {
        private class HandlerCollection : ICommandHandlerCollection
        {
            private readonly object storageLock = new object();

            private readonly ILog log;
            private readonly Dictionary<Type, HandlerDescriptor> storage = new Dictionary<Type, HandlerDescriptor>();
            private readonly HandlerDescriptorProvider descriptorProvider;

            public HandlerCollection(ILogFactory logFactory, HandlerDescriptorProvider descriptorProvider)
            {
                Ensure.NotNull(logFactory, "logFactory");
                Ensure.NotNull(descriptorProvider, "descriptorProvider");
                this.log = logFactory.Scope("Handlers");
                this.descriptorProvider = descriptorProvider;
            }

            public ICommandHandlerCollection Add<TCommand>(ICommandHandler<TCommand> handler)
            {
                Ensure.NotNull(handler, "handler");
                HandlerDescriptor descriptor = descriptorProvider.Get(handler, typeof(TCommand));
                lock (storageLock)
                    storage[descriptor.ArgumentType] = descriptor;

                if (log.IsDebugEnabled())
                    log.Debug($"Added handler '{descriptor.HandlerIdentifier ?? descriptor.Handler.GetType().FullName}'.");

                return this;
            }

            public bool TryGet<TCommand>(out ICommandHandler<TCommand> handler)
            {
                ArgumentDescriptor argument = descriptorProvider.Get(typeof(TCommand));

                HandlerDescriptor descriptor;
                if (storage.TryGetValue(argument.ArgumentType, out descriptor))
                {
                    handler = (ICommandHandler<TCommand>)descriptor.Handler;
                    return true;
                }

                handler = null;
                return false;
            }

            internal bool TryGet(Type argumentType, out HandlerDescriptor handler)
            {
                return storage.TryGetValue(argumentType, out handler);
            }
        }

    }
}
