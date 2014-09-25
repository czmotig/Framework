﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.FileSystems
{
    /// <summary>
    /// Virtual file system implemented as stadart file system.
    /// </summary>
    public class StaticFileSystem : IFileSystem
    {
        /// <summary>
        /// File system root directory.
        /// </summary>
        public IReadOnlyDirectory RootDirectory { get; private set; }

        public bool IsReadOnly { get; private set; }

        /// <summary>
        /// Creates new instance with <paramref name="rootPaht"/> as root directory.
        /// </summary>
        /// <param name="rootPath">Path to root directory.</param>
        public StaticFileSystem(string rootPath, bool isReadOnly)
        {
            if (!Path.IsPathRooted(rootPath))
                throw new ArgumentException("Path to file system must be rooted.", "rootPath");

            RootDirectory = new StaticDirectory(rootPath);
            IsReadOnly = isReadOnly;
        }

        public bool IsWriteable(IDirectory directory)
        {
            return IsReadOnly;
        }

        public IDirectory AsWriteable(IReadOnlyDirectory directory)
        {
            Guard.NotNull(directory, "directory");

            if (!IsReadOnly)
                throw new FileSystemException(String.Format("File system rooted by '{0}' is read only.", RootDirectory.FullPath));

            StaticDirectory staticDirectory = directory as StaticDirectory;
            if (staticDirectory == null)
            {
                throw new FileSystemException(String.Format(
                    "Passed instance of '{0}' into static file system. Static file system operates only on directories of type '{1}'.", 
                    directory.GetType().FullName, 
                    typeof(StaticDirectory).FullName
                ));
            }

            return staticDirectory;
        }

        /// <summary>
        /// Creates static file for <paramref name="filePath"/> of standart file system.
        /// </summary>
        /// <param name="filePath">Path to existing file.</param>
        /// <returns>Static file for <paramref name="filePath"/>.</returns>
        /// <exception cref="FileSystemException">When <paramref name="filePath"/> doesn't point to existing file.</exception>
        public static IReadOnlyFile FromFilePath(string filePath)
        {
            Guard.NotNullOrEmpty(filePath, "filePath");

            if (!File.Exists(filePath))
                throw new FileSystemException(String.Format("Can't create static file for path '{0}', because is doesn't point to existing file.", filePath));

            return new StaticFile(filePath);
        }

        /// <summary>
        /// Creates static file for <paramref name="directoryPath"/> of standart file system.
        /// </summary>
        /// <param name="directoryPath">Path to existing directory.</param>
        /// <returns>Static file for <paramref name="directoryPath"/>.</returns>
        /// <exception cref="FileSystemException">When <paramref name="directoryPath"/> doesn't point to existing directory.</exception>
        public static IReadOnlyDirectory FromDirectoryPath(string directoryPath)
        {
            Guard.NotNullOrEmpty(directoryPath, "directoryPath");

            if(!Directory.Exists(directoryPath))
                throw new FileSystemException(String.Format("Can't create static directory for path '{0}', because is doesn't point to existing directory.", directoryPath));

            return new StaticDirectory(directoryPath);
        }
    }
}
