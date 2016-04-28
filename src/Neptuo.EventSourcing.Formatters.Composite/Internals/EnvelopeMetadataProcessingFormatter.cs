﻿using Neptuo.Activators;
using Neptuo.Collections.Specialized;
using Neptuo.Commands;
using Neptuo.Formatters.Metadata;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Formatters.Internals
{
    internal abstract class EnvelopeMetadataProcessingFormatter : CompositeTypeFormatter
    {
        public const string MetadataKey = "Metadata";

        public EnvelopeMetadataProcessingFormatter(ICompositeTypeProvider provider, IFactory<ICompositeStorage> storageFactory)
            : base(provider, storageFactory)
        { }

        protected override bool TryLoad(Stream input, IDeserializerContext context, CompositeType type, ICompositeStorage storage)
        {
            if (base.TryLoad(input, context, type, storage))
            {
                TryLoad(GetOrAddPayloadStorage(storage), context.Output);

                IKeyValueCollection metadata;
                ICompositeStorage metadataStorage;
                if (context.TryGetEnvelopeMetadata(out metadata) && storage.TryGet(MetadataKey, out metadataStorage))
                {
                    foreach (string key in metadataStorage.Keys)
                        metadata.Add(key, metadataStorage.Get<object>(key));
                }

                return true;
            }

            return false;
        }

        protected abstract void TryLoad(ICompositeStorage payloadStorage, object output);

        protected override bool TryStore(object input, ISerializerContext context, CompositeType type, CompositeVersion typeVersion, ICompositeStorage storage)
        {
            if (base.TryStore(input, context, type, typeVersion, storage))
            {
                TryStore(GetOrAddPayloadStorage(storage), input);

                IReadOnlyKeyValueCollection metadata;
                if (context.TryGetEnvelopeMetadata(out metadata))
                {
                    ICompositeStorage metadataStorage = storage.Add(MetadataKey);
                    foreach (string key in metadata.Keys)
                        metadataStorage.Add(key, metadata.Get<object>(key));
                }

                return true;
            }

            return false;
        }

        protected abstract void TryStore(ICompositeStorage payloadStorage, object input);

        private ICompositeStorage GetOrAddPayloadStorage(ICompositeStorage storage)
        {
            ICompositeStorage payloadStorage;
            if (storage.TryGet(CompositeTypeFormatter.Name.Payload, out payloadStorage))
                return payloadStorage;

            return storage.Add(CompositeTypeFormatter.Name.Payload);
        }
    }
}
