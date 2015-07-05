﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Activators
{
    [TestClass]
    public class TestActivator
    {
        [TestMethod]
        public void InstanceActivator()
        {
            int count = 0;
            IActivator<string> activator = new InstanceActivator<string>(() =>
            {
                if (count > 0)
                    Assert.Fail("Method must be called only once.");

                count++;
                return "S";
            });

            Assert.AreEqual("S", activator.Create());
            Assert.AreEqual("S", activator.Create());
        }

        [TestMethod]
        public void GetterActivator()
        {
            int count = 0;
            IActivator<string> activator = new GetterActivator<string>(() => String.Format("S{0}", count++));

            Assert.AreEqual("S0", activator.Create());
            Assert.AreEqual("S1", activator.Create());
            Assert.AreEqual("S2", activator.Create());
            Assert.AreEqual("S3", activator.Create());
            Assert.AreEqual("S4", activator.Create());
            Assert.AreEqual("S5", activator.Create());
        }

        [TestMethod]
        public void GetterActivatorWithContext()
        {
            IActivator<string, int> activator = new GetterActivator<string, int>((context) => String.Format("S{0}", context));

            Assert.AreEqual("S0", activator.Create(0));
            Assert.AreEqual("S1", activator.Create(1));
            Assert.AreEqual("S2", activator.Create(2));
            Assert.AreEqual("S3", activator.Create(3));
            Assert.AreEqual("S4", activator.Create(4));
            Assert.AreEqual("S5", activator.Create(5));
        }
    }
}
