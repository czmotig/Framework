﻿using System;

namespace Neptuo.Behaviors
{
    public static class VersionInfo
    {
        internal const string Version = "1.0.2";

        public static Version GetVersion()
        {
            return new Version(Version);
        }
    }
}
