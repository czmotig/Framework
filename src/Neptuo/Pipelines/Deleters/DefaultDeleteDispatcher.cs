﻿using Neptuo.Collections.Generic;
using Neptuo.ComponentModel;
using Neptuo.DomainModels;
using Neptuo.Pipelines.Deleters.Handlers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Pipelines.Deleters
{
    /// <summary>
    /// Default implementation of <see cref="IDeleteDispatcher"/>.
    /// </summary>
    public class DefaultDeleteDispatcher : IDeleteDispatcher
    {
        private IDictionary<string, IDeleteHandler> handlers = ConcurrentAwareDictionaryActivator<string, IDeleteHandler>.Instance.Create();
        private OutFuncCollection<string, IDeleteHandler, bool> onSearchHandler = new OutFuncCollection<string, IDeleteHandler, bool>();

        /// <summary>
        /// Registers <paramref name="handler"/> to be executed for keys with type <paramref name="objectType"/>.
        /// </summary>
        /// <param name="objectType">Type of object to be handled by <paramref name="handler"/>.</param>
        /// <param name="handler">Handler to be executed for keys with type <paramref name="objectType"/>.</param>
        /// <returns>Self (for fluency).</returns>
        public DefaultDeleteDispatcher Add(string objectType, IDeleteHandler handler)
        {
            Ensure.NotNull(objectType, "objectType");
            Ensure.NotNull(handler, "handler");
            handlers[objectType] = handler;
            return this;
        }

        /// <summary>
        /// Registers search handler when non handler was found for key.
        /// </summary>
        /// <param name="searchHandler">Search handler.</param>
        /// <returns>Self (for fluency).</returns>
        public DefaultDeleteDispatcher AddSearchHandler(OutFunc<string, IDeleteHandler, bool> searchHandler)
        {
            Ensure.NotNull(searchHandler, "searchHandler");
            onSearchHandler.Add(searchHandler);
            return this;
        }

        public IDeleteContext PrepareContext(IKey key)
        {
            Ensure.NotNull(key, "key");

            IDeleteHandler handler;
            if (handlers.TryGetValue(key.Type, out handler))
                return handler.Handle(key);

            if (onSearchHandler.TryExecute(key.Type, out handler))
                return handler.Handle(key);

            return new MissingHandlerContext(key);
        }
    }
}
