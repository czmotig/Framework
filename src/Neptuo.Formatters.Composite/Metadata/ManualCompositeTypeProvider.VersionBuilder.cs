﻿using Neptuo.Linq.Expressions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Neptuo.Formatters.Metadata
{
    partial class ManualCompositeTypeProvider
    {
        internal class BuilderState
        {
            internal ManualCompositeTypeProvider Provider { get; set; }
            internal Type Type { get; set; }
            internal string TypeName { get; set; }
            internal int Version { get; set; }
            internal CompositeProperty VersionProperty { get; set; }
            internal List<CompositeProperty> Properties { get; private set; }

            public BuilderState()
            {
                Properties = new List<CompositeProperty>();
            }
        }

        public class Builder
        {
            internal BuilderState State { get; set; }

            protected Type Type
            {
                get { return State.Type; }
            }

            protected int Version
            {
                get { return State.Version; }
            }

            protected List<CompositeProperty> Properties
            {
                get { return State.Properties; }
            }

            internal Builder()
            {
                State = new BuilderState();
            }

            internal Builder(BuilderState state)
            {
                State = state;
            }

            protected void AddProperty<T, TValue>(Expression<Func<T, TValue>> getter)
            {
                Ensure.NotNull(getter, "getter");
                PropertyInfo propertyInfo = Type.GetProperty(TypeHelper.PropertyName(getter));
                if (propertyInfo == null)
                    throw Ensure.Exception.NotSupported();

                Properties.Add(new CompositeProperty(Properties.Count, propertyInfo.Name, propertyInfo.PropertyType, instance => propertyInfo.GetValue(instance)));
            }

            protected void SetVersionProperty<T>(Expression<Func<T, int>> getter)
            {
                Ensure.NotNull(getter, "getter");
                PropertyInfo propertyInfo = Type.GetProperty(TypeHelper.PropertyName(getter));
                if (propertyInfo == null)
                    throw Ensure.Exception.NotSupported();

                State.VersionProperty = new CompositeProperty(0, propertyInfo.Name, propertyInfo.PropertyType, instance => propertyInfo.GetValue(instance));
            }

            protected void CreateVersion(LambdaExpression factoryExpression)
            {
                Delegate factoryDelegate = factoryExpression.Compile();

                CompositeVersion version = new CompositeVersion(
                    Version,
                    new CompositeConstructor(parameters => factoryDelegate.DynamicInvoke(parameters)),
                    Properties
                );
                State.Provider.TryAddVersion(Type, State.TypeName, version, State.VersionProperty);
            }
        }

        public interface ITypeBuilder<T>
        {
            IVersionBuilder<T> AddVersion(int version);
            IVersionBuilder<TOther> Add<TOther>(int version);
        }

        public interface IVersionBuilder<T>
        {
            IVersionBuilder<T, TValue> WithProperty<TValue>(Expression<Func<T, TValue>> getter);
        }

        public interface IVersionBuilder<T, TValue1>
        {
            IVersionBuilder<T, TValue1, TValue> WithProperty<TValue>(Expression<Func<T, TValue1, TValue>> getter);
            ITypeBuilder<T> WithConstructor(Expression<Func<TValue1, T>> factory);
        }

        public interface IVersionBuilder<T, TValue1, TValue2>
        {
            IVersionBuilder<T, TValue1, TValue2, TValue> WithProperty<TValue>(Expression<Func<T, TValue1, TValue>> getter);
            ITypeBuilder<T> WithConstructor(Expression<Func<TValue1, TValue2, T>> factory);
        }

        public interface IVersionBuilder<T, TValue1, TValue2, TValue3>
        {
            IVersionBuilder<T, TValue1, TValue2, TValue3, TValue> WithProperty<TValue>(Expression<Func<T, TValue1, TValue>> getter);
            ITypeBuilder<T> WithConstructor(Expression<Func<TValue1, TValue2, TValue3, T>> factory);
        }

        public interface IVersionBuilder<T, TValue1, TValue2, TValue3, TValue4>
        {
            IVersionBuilder<T, TValue1, TValue2, TValue3, TValue4, TValue> WithProperty<TValue>(Expression<Func<T, TValue1, TValue>> getter);
            ITypeBuilder<T> WithConstructor(Expression<Func<TValue1, TValue2, TValue3, TValue4, T>> factory);
        }

        public interface IVersionBuilder<T, TValue1, TValue2, TValue3, TValue4, TValue5>
        {
            IVersionBuilder<T, TValue1, TValue2, TValue3, TValue4, TValue> WithProperty<TValue>(Expression<Func<T, TValue1, TValue>> getter);
            ITypeBuilder<T> WithConstructor(Expression<Func<TValue1, TValue2, TValue3, TValue4, TValue5, T>> factory);
        }

        public interface IVersionBuilder<T, TValue1, TValue2, TValue3, TValue4, TValue5, TValue6>
        {
            IVersionBuilder<T, TValue1, TValue2, TValue3, TValue4, TValue> WithProperty<TValue>(Expression<Func<T, TValue1, TValue>> getter);
            ITypeBuilder<T> WithConstructor(Expression<Func<TValue1, TValue2, TValue3, TValue4, TValue5, TValue6, T>> factory);
        }

        public class VersionBuilder<T> : Builder
        {
            private ManualCompositeTypeProvider manualCompositeTypeProvider;
            private Expression<Func<T, int>> versionGetter;

            internal VersionBuilder(ManualCompositeTypeProvider provider, int version, CompositeProperty versionProperty)
            {
                State.Provider = provider;
                State.Version = version;
                State.VersionProperty = versionProperty;
            }

            public VersionBuilder<T, TValue> WithProperty<TValue>(Expression<Func<T, TValue>> getter)
            {
                AddProperty(getter);
                return new VersionBuilder<T, TValue>(State);
            }
        }

        public class VersionBuilder<T, TValue1> : Builder
        {
            internal VersionBuilder(BuilderState state)
                : base(state)
            { }

            public VersionBuilder<T, TValue1, TValue> WithProperty<TValue>(Expression<Func<T, TValue>> getter)
            {
                AddProperty(getter);
                return new VersionBuilder<T, TValue1, TValue>(State);
            }

            public TypeBuilder<T> WithConstructor(Expression<Func<TValue1, T>> factory)
            {
                Ensure.NotNull(factory, "factory");
                CreateVersion(factory);
                return new TypeBuilder<T>(State);
            }
        }

        public class VersionBuilder<T, TValue1, TValue2> : Builder
        {
            internal VersionBuilder(BuilderState state)
                : base(state)
            { }

            public VersionBuilder<T, TValue1, TValue2, TValue> WithProperty<TValue>(Expression<Func<T, TValue>> getter)
            {
                AddProperty(getter);
                return new VersionBuilder<T, TValue1, TValue2, TValue>(State);
            }

            public TypeBuilder<T> WithConstructor(Expression<Func<TValue1, TValue2, T>> factory)
            {
                Ensure.NotNull(factory, "factory");
                CreateVersion(factory);
                return new TypeBuilder<T>(State);
            }
        }

        public class VersionBuilder<T, TValue1, TValue2, TValue3> : Builder
        {
            internal VersionBuilder(BuilderState state)
                : base(state)
            { }

            public TypeBuilder<T> WithConstructor(Expression<Func<TValue1, TValue2, TValue3, T>> factory)
            {
                Ensure.NotNull(factory, "factory");
                CreateVersion(factory);
                return new TypeBuilder<T>(State);
            }
        }

        public class TypeBuilder<T> : Builder
        {
            internal TypeBuilder(BuilderState state)
                : base(state)
            { }

            internal TypeBuilder(ManualCompositeTypeProvider provider, Expression<Func<T, int>> versionGetter, string typeName = null)
            {
                State.Provider = provider;
                State.Type = typeof(T);
                State.TypeName = typeName ?? typeof(T).FullName;
                SetVersionProperty(versionGetter);
            }

            public VersionBuilder<T> AddVersion(int version)
            {
                return new VersionBuilder<T>(State.Provider, version, State.VersionProperty);
            }

            public TypeBuilder<TOther> Add<TOther>(Expression<Func<TOther, int>> versionGetter)
            {
                TypeBuilder<TOther> builder = new TypeBuilder<TOther>(State.Provider, versionGetter);
                return builder;
            }

            public TypeBuilder<TOther> Add<TOther>(string typeName, Expression<Func<TOther, int>> versionGetter)
            {
                TypeBuilder<TOther> builder = new TypeBuilder<TOther>(State.Provider, versionGetter, typeName);
                return builder;
            }
        }
    }
}
