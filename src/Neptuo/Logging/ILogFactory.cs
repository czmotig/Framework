﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Logging
{
    /// <summary>
    /// Factory for child scopes.
    /// </summary>
    public interface ILogFactory
    {
        /// <summary>
        /// Dot separated log scope.
        /// </summary>
        string ScopeName { get; }

        /// <summary>
        /// Creates child log with <paramref name="scopeName"/> in it's scope path.
        /// </summary>
        /// <param name="scopeName"></param>
        /// <returns></returns>
        ILog Scope(string scopeName);

        /// <summary>
        /// Adds <paramref name="writer"/> to be output of current log.
        /// </summary>
        /// <param name="writer">New log writer to be added.</param>
        /// <returns>Self (for fluency).</returns>
        ILogFactory AddWriter(ILogWriter writer);
    }
}
