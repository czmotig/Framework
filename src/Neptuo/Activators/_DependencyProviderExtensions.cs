﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Neptuo.Activators
{
    public static class _DependencyProviderExtensions
    {
        public static T Resolve<T>(this IDependencyProvider dependencyProvider)
        {
            Ensure.NotNull(dependencyProvider, "dependencyProvider");
            return (T)dependencyProvider.Resolve(typeof(T));
        }

        public static T Resolve<T>(this IDependencyProvider dependencyProvider, Type requiredType)
        {
            Ensure.NotNull(dependencyProvider, "dependencyProvider");
            return (T)dependencyProvider.Resolve(requiredType);
        }
    }
}
