﻿using Neptuo;
using Neptuo.Activators;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TestConsole.DependencyContainers
{
    public class SimpleDependencyProvider : DisposableBase, IDependencyProvider, IObjectFactoryContext
    {
        private Dictionary<Type, IObjectFactory<object>> factories = new Dictionary<Type, IObjectFactory<object>>();
        private Stack<Type> parentTypes = new Stack<Type>();

        public string ScopeName
        {
            get { throw new NotImplementedException(); }
        }

        public SimpleDependencyProvider()
        {
            factories[typeof(Service)] = new Factory_Service();
            factories[typeof(Loader)] = new Factory_Loader();
            factories[typeof(Saver)] = new Factory_Saver();
        }

        public IDependencyContainer Scope(string scopeName)
        {
            throw new NotImplementedException();
        }

        public object Resolve(Type targetType)
        {
            return Build(targetType);
        }

        private IObjectFactory<object> GetFactory(Type targetType)
        {
            return factories[targetType];
        }

        public Type ParentType
        {
            get
            {
                if (!parentTypes.Any())
                    return null;

                return parentTypes.Peek();
            }
        }

        private object Build(Type targetType)
        {
            parentTypes.Push(targetType);

            IObjectFactory<object> factory = GetFactory(targetType);
            object instance = factory.GetInstance(this);

            parentTypes.Pop();
            return instance;
        }

        public T Build<T>()
        {
            Type type = typeof(T);
            return (T)Build(type);
        }


        public IDependencyDefinitionReadOnlyCollection Definitions
        {
            get { throw new NotImplementedException(); }
        }
    }


    public interface IObjectFactoryContext
    {
        Type ParentType { get; }

        T Build<T>();
    }

    public interface IObjectFactory<out T>
    {
        T GetInstance(IObjectFactoryContext context);
    }

    class Factory_Service : IObjectFactory<Service>
    {
        public Service GetInstance(IObjectFactoryContext context)
        {
            return new Service(context.Build<Loader>(), context.Build<Saver>());
        }
    }

    public class Factory_Loader : IObjectFactory<Loader>
    {
        public Loader GetInstance(IObjectFactoryContext context)
        {
            return new Loader();
        }
    }

    public class Factory_Saver : IObjectFactory<Saver>
    {
        public Saver GetInstance(IObjectFactoryContext context)
        {
            return new Saver();
        }
    }

    public class Loader
    { }

    public class Saver
    { }

    public class Service
    {
        public Service(Loader loader, Saver saver)
        { }
    }
}
