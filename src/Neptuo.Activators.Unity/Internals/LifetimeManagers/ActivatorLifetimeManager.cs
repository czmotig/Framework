﻿using Microsoft.Practices.Unity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Activators.Internals.LifetimeManagers
{
    internal class ActivatorLifetimeManager : LifetimeManager
    {
        private readonly IFactory<object> activator;
        private readonly LifetimeManager innerLifetime;

        public ActivatorLifetimeManager(IFactory<object> activator, LifetimeManager innerLifetime)
        {
            Ensure.NotNull(activator, "activator");
            Ensure.NotNull(innerLifetime, "innerLifetime");
            this.activator = activator;
            this.innerLifetime = innerLifetime;
        }

        public override object GetValue()
        {
            object value = innerLifetime.GetValue();
            if (value == null)
            {
                value = activator.Create();
                SetValue(value);
            }

            return value;
        }

        public override void RemoveValue()
        {
            innerLifetime.RemoveValue();
        }

        public override void SetValue(object newValue)
        {
            innerLifetime.SetValue(newValue);
        }
    }
}
