﻿using Neptuo.Bootstrap.Handlers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Bootstrap
{
    public class SequenceBootstrapper : ManualBootstrapper
    {
        public SequenceBootstrapper(Func<Type, IBootstrapHandler> factory)
            : base(factory)
        { }

        public override void Register(Type type)
        {
            base.Register(new ProxyBootstrapHandler(() => CreateInstance(type)));
        }
    }
}
