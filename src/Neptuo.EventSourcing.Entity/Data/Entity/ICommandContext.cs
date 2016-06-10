﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Data.Entity
{
    /// <summary>
    /// Db context contract for storing commands.
    /// </summary>
    public interface ICommandContext
    {
        /// <summary>
        /// The stream of all commands.
        /// </summary>
        IDbSet<CommandEntity> Commands { get; }

        /// <summary>
        /// The stream of commands that needs to be published on the dispatcher.
        /// </summary>
        IDbSet<UnPublishedCommandEntity> UnPublishedCommands { get; }

        /// <summary>
        /// Saves changes to the storage.
        /// </summary>
        void Save();

        /// <summary>
        /// Saves changes to the storage asynchronously.
        /// </summary>
        Task SaveAsync();
    }
}
