﻿using System;

namespace Neptuo.Data
{
    public static class VersionInfo
    {
        internal const string Version = "1.7.1";

        public static Version GetVersion()
        {
            return new Version(Version);
        }
    }
}
