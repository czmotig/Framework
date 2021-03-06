﻿using Microsoft.VisualStudio.TestTools.UnitTesting;
using Neptuo;
using Neptuo.Activators;
using Neptuo.Formatters;
using Neptuo.Formatters.Converters;
using Neptuo.Formatters.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using UnitTest.Formatters.Composite;

namespace UnitTest.Formatters.Composite
{
    [TestClass]
    public class T_Formatters_CompositeModel
    {
        private void AssertUserModel(CompositeType compositeType)
        {
            Assert.IsNotNull(compositeType);

            Assert.AreEqual("Test.UserModel", compositeType.Name);
            Assert.AreEqual(typeof(UserModel), compositeType.Type);

            Assert.IsNotNull(compositeType.VersionProperty);
            Assert.IsNull(compositeType.VersionProperty.Setter);

            Assert.AreEqual(2, compositeType.Versions.Count());

            IEnumerator<CompositeVersion> versionEnumerator = compositeType.Versions.GetEnumerator();

            Assert.AreEqual(true, versionEnumerator.MoveNext());
            CompositeVersion version = versionEnumerator.Current;
            Assert.AreEqual(1, version.Version);
            Assert.AreEqual(2, version.Properties.Count());

            Assert.AreEqual(true, versionEnumerator.MoveNext());
            version = versionEnumerator.Current;
            Assert.AreEqual(2, version.Version);
            Assert.AreEqual(3, version.Properties.Count());
        }

        [TestMethod]
        public void Reflection_Reflection_FullyDefined()
        {
            ReflectionCompositeTypeProvider provider = new ReflectionCompositeTypeProvider(new ReflectionCompositeDelegateFactory());
            CompositeType compositeType;
            Assert.AreEqual(true, provider.TryGet(typeof(UserModel), out compositeType));
            AssertUserModel(compositeType);
        }

        [TestMethod]
        public void Reflection_SingleModel()
        {
            ReflectionCompositeTypeProvider provider = new ReflectionCompositeTypeProvider(new ReflectionCompositeDelegateFactory(), BindingFlags.Instance | BindingFlags.NonPublic | BindingFlags.Public);
            CompositeType compositeType;
            Assert.AreEqual(true, provider.TryGet(typeof(SingleModel), out compositeType));

            Assert.AreEqual(typeof(SingleModel), compositeType.Type);
            Assert.AreEqual(1, compositeType.Versions.Count());

            IEnumerator<CompositeVersion> versionEnumerator = compositeType.Versions.GetEnumerator();

            Assert.AreEqual(true, versionEnumerator.MoveNext());
            CompositeVersion version = versionEnumerator.Current;
            Assert.AreEqual(1, version.Version);
            Assert.AreEqual(1, version.Properties.Count());
        }

        private void AssertSingleVersion(CompositeType compositeType)
        {
            Assert.IsNotNull(compositeType);

            Assert.AreEqual(typeof(SingleVersion), compositeType.Type);
            Assert.AreEqual(1, compositeType.Versions.Count());

            IEnumerator<CompositeVersion> versionEnumerator = compositeType.Versions.GetEnumerator();

            Assert.AreEqual(true, versionEnumerator.MoveNext());
            CompositeVersion version = versionEnumerator.Current;
            Assert.AreEqual(1, version.Version);
            Assert.AreEqual(1, version.Properties.Count());
        }

        [TestMethod]
        public void Reflection_SingleVersion()
        {
            ReflectionCompositeTypeProvider provider = new ReflectionCompositeTypeProvider(new ReflectionCompositeDelegateFactory());
            CompositeType compositeType;
            Assert.AreEqual(true, provider.TryGet(typeof(SingleVersion), out compositeType));
            AssertSingleVersion(compositeType);
        }

        [TestMethod]
        public void Reflection_TwoVersionWithFirstImplied()
        {
            ReflectionCompositeTypeProvider provider = new ReflectionCompositeTypeProvider(new ReflectionCompositeDelegateFactory());
            CompositeType compositeType;
            Assert.AreEqual(true, provider.TryGet(typeof(TwoVersionWithFirstImplied), out compositeType));

            Assert.AreEqual(typeof(TwoVersionWithFirstImplied), compositeType.Type);
            Assert.AreEqual(2, compositeType.Versions.Count());

            IEnumerator<CompositeVersion> versionEnumerator = compositeType.Versions.GetEnumerator();

            Assert.AreEqual(true, versionEnumerator.MoveNext());
            CompositeVersion version = versionEnumerator.Current;
            Assert.AreEqual(1, version.Version);
            Assert.AreEqual(1, version.Properties.Count());

            Assert.AreEqual(true, versionEnumerator.MoveNext());
            version = versionEnumerator.Current;
            Assert.AreEqual(2, version.Version);
            Assert.AreEqual(2, version.Properties.Count());
        }

        [TestMethod]
        [ExpectedException(typeof(MismatchVersionConstructorException))]
        public void Reflection_MisspelledParameterName()
        {
            Converts.Repository
                .AddJsonPrimitivesSearchHandler()
                .AddJsonObjectSearchHandler();

            ReflectionCompositeTypeProvider provider = new ReflectionCompositeTypeProvider(new ReflectionCompositeDelegateFactory());
            CompositeType compositeType;
            Assert.AreEqual(false, provider.TryGet(typeof(MisspelledParameterName), out compositeType));
        }

        [TestMethod]
        [ExpectedException(typeof(MismatchVersionConstructorException))]
        public void Reflection_DefaultConstructorExplicitProperties()
        {
            Converts.Repository
                .AddJsonPrimitivesSearchHandler()
                .AddJsonObjectSearchHandler();

            ReflectionCompositeTypeProvider provider = new ReflectionCompositeTypeProvider(new ReflectionCompositeDelegateFactory());
            CompositeType compositeType;
            Assert.AreEqual(false, provider.TryGet(typeof(MisspelledParameterName), out compositeType));
        }

        [TestMethod]
        public void Manual_FullTest()
        {
            ManualCompositeTypeProvider provider = new ManualCompositeTypeProvider();
            provider
                .Add<UserModel>("Test.UserModel", u => u.Version)
                    .AddVersion(1)
                        .WithProperty(u => u.UserName)
                        .WithProperty(u => u.Password)
                        .WithConstructor((u, p) => new UserModel(u, p))
                    .AddVersion(2)
                        .WithProperty(u => u.Id)
                        .WithProperty(u => u.UserName)
                        .WithProperty(u => u.Password)
                        .WithConstructor((id, userName, password) => new UserModel(id, userName, password))
                .Add<SingleVersion>(s => s.Version)
                    .AddVersion(1)
                        .WithProperty(s => s.FullName)
                        .WithConstructor(f => new SingleVersion(f));

            CompositeType compositeType;
            Assert.AreEqual(true, provider.TryGet(typeof(UserModel), out compositeType));
            AssertUserModel(compositeType);

            Assert.AreEqual(true, provider.TryGet(typeof(SingleVersion), out compositeType));
            AssertSingleVersion(compositeType);
        }
    }
}
