﻿using System;

namespace Neptuo.Events
{
    public static class VersionInfo
    {
        internal const string Version = "1.2.0";

        public static Version GetVersion()
        {
            return new Version(Version);
        }
    }
}
