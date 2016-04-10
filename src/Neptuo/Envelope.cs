﻿using Neptuo.Collections.Specialized;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo
{
    /// <summary>
    /// The factory helper for creating envelopes.
    /// </summary>
    public static class Envelope
    {
        /// <summary>
        /// Creates new instance of <see cref="Envelope{T}"/> with body.
        /// </summary>
        /// <typeparam name="T">Type of the body.</typeparam>
        /// <param name="body">The body of the evelope.</param>
        /// <returns>New instance of <see cref="Envelope{T}"/> with <paramref name="body"/>.</returns>
        public static Envelope<T> Create<T>(T body)
        {
            return new Envelope<T>(body);
        }
    }
    
    /// <summary>
    /// The wrapper around body of <typeparamref name="T"/> with metadata.
    /// </summary>
    /// <typeparam name="T">The type of envelope body.</typeparam>
    public class Envelope<T>
    {
        /// <summary>
        /// The body of the evelope.
        /// </summary>
        public T Body { get; private set; }

        /// <summary>
        /// The collection of metadata.
        /// </summary>
        public IKeyValueCollection Metadata { get; private set; }

        /// <summary>
        /// Creates new instance with the <paramref name="body"/>.
        /// </summary>
        /// <param name="body">The body of the evelope.</param>
        public Envelope(T body)
        {
            Ensure.NotNull(body, "body");
            Body = body;
            Metadata = new KeyValueCollection();
        }

        /// <summary>
        /// Creates new instance with the <paramref name="body"/> and the <paramref name="metadata"/>.
        /// </summary>
        /// <param name="body">The body of the evelope.</param>
        /// <param name="metadata">The collection of the metadata. Reference is used (instead of copying items).</param>
        public Envelope(T body, IKeyValueCollection metadata)
        {
            Ensure.NotNull(body, "body");
            Ensure.NotNull(metadata, "metadata");
            Body = body;
            Metadata = metadata;
        }
    }
}
