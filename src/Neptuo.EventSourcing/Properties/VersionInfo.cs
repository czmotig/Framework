﻿using System;

namespace Neptuo.EventSourcing
{
    public static class VersionInfo
    {
        internal const string Version = "0.5.5";

        public static Version GetVersion()
        {
            return new Version(Version);
        }
    }
}
