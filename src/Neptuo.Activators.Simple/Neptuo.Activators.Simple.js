/* Generated by SharpKit 5 v5.4.4 */
if (typeof($CreateException)=='undefined') 
{
    var $CreateException = function(ex, error) 
    {
        if(error==null)
            error = new Error();
        if(ex==null)
            ex = new System.Exception.ctor();       
        error.message = ex.message;
        for (var p in ex)
           error[p] = ex[p];
        return error;
    }
}


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];
var Neptuo$Activators$Internals$DependencyException = {
    fullname: "Neptuo.Activators.Internals.DependencyException",
    baseTypeName: "System.Exception",
    assemblyName: "Neptuo.Activators.Simple",
    Kind: "Class",
    definition: {
        ctor: function (message){
            System.Exception.ctor$$String.call(this, message);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.String"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Activators$Internals$DependencyException);
var Neptuo$Activators$Internals$DependencyRegistry = {
    fullname: "Neptuo.Activators.Internals.DependencyRegistry",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Activators.Simple",
    Kind: "Class",
    definition: {
        ctor: function (){
            this.registries = null;
            Neptuo.Activators.Internals.DependencyRegistry.ctor$$Dictionary$2$String$DependencyRegistryItem.call(this, new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, Neptuo.Activators.Internals.DependencyRegistryItem.ctor));
        },
        ctor$$Dictionary$2$String$DependencyRegistryItem: function (registries){
            this.registries = null;
            System.Object.ctor.call(this);
            Neptuo.Ensure.NotNull$$Object$$String(registries, "registries");
            this.registries = registries;
        },
        GetByKey: function (key){
            Neptuo.Ensure.NotNullOrEmpty(key, "key");
            var item;
            if ((function (){
                var $1 = {
                    Value: item
                };
                var $res = this.registries.TryGetValue(key, $1);
                item = $1.Value;
                return $res;
            }).call(this))
                return item;
            return null;
        },
        Add: function (key, item){
            Neptuo.Ensure.NotNullOrEmpty(key, "key");
            Neptuo.Ensure.NotNull$$Object$$String(item, "item");
            this.registries.set_Item$$TKey(key, item);
        },
        CopyRegistries: function (){
            var result = new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, Neptuo.Activators.Internals.DependencyRegistryItem.ctor);
            var $it1 = this.registries.GetEnumerator();
            while ($it1.MoveNext()){
                var item = $it1.get_Current();
                result.Add(item.get_Key(), item.get_Value());
            }
            return result;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }, {
        name: "ctor$$Dictionary",
        parameters: ["System.Collections.Generic.Dictionary"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Activators$Internals$DependencyRegistry);
var Neptuo$Activators$Internals$DependencyRegistryItem = {
    fullname: "Neptuo.Activators.Internals.DependencyRegistryItem",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Activators.Simple",
    Kind: "Class",
    definition: {
        ctor$$Type$$DependencyLifetime: function (requiredType, lifetime){
            this._RequiredType = null;
            this._Lifetime = new Neptuo.Activators.DependencyLifetime.ctor();
            this._ConstructorInfo = null;
            System.Object.ctor.call(this);
            Neptuo.Ensure.NotNull$$Object$$String(requiredType, "requiredType");
            this.set_RequiredType(requiredType);
            this.set_Lifetime(lifetime);
        },
        RequiredType$$: "System.Type",
        get_RequiredType: function (){
            return this._RequiredType;
        },
        set_RequiredType: function (value){
            this._RequiredType = value;
        },
        Lifetime$$: "Neptuo.Activators.DependencyLifetime",
        get_Lifetime: function (){
            return this._Lifetime;
        },
        set_Lifetime: function (value){
            this._Lifetime = value;
        },
        ConstructorInfo$$: "System.Reflection.ConstructorInfo",
        get_ConstructorInfo: function (){
            return this._ConstructorInfo;
        },
        set_ConstructorInfo: function (value){
            this._ConstructorInfo = value;
        },
        HasConstructorInfo$$: "System.Boolean",
        get_HasConstructorInfo: function (){
            return System.Reflection.ConstructorInfo.op_Inequality$$ConstructorInfo$$ConstructorInfo(this.get_ConstructorInfo(), null);
        },
        ctor$$Type$$DependencyLifetime$$ConstructorInfo: function (requiredType, lifetime, constructorInfo){
            this._RequiredType = null;
            this._Lifetime = new Neptuo.Activators.DependencyLifetime.ctor();
            this._ConstructorInfo = null;
            Neptuo.Activators.Internals.DependencyRegistryItem.ctor$$Type$$DependencyLifetime.call(this, requiredType, lifetime);
            Neptuo.Ensure.NotNull$$Object$$String(constructorInfo, "constructorInfo");
            this.set_ConstructorInfo(constructorInfo);
        }
    },
    ctors: [{
        name: "ctor$$Type$$DependencyLifetime",
        parameters: ["System.Type", "Neptuo.Activators.DependencyLifetime"]
    }, {
        name: "ctor$$Type$$DependencyLifetime$$ConstructorInfo",
        parameters: ["System.Type", "Neptuo.Activators.DependencyLifetime", "System.Reflection.ConstructorInfo"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Activators$Internals$DependencyRegistryItem);
var Neptuo$Activators$Internals$InstanceStorage = {
    fullname: "Neptuo.Activators.Internals.InstanceStorage",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Activators.Simple",
    Kind: "Class",
    definition: {
        ctor: function (){
            this.objectStorage = null;
            this.activatorStorage = null;
            Neptuo.Activators.Internals.InstanceStorage.ctor$$Dictionary$2$String$Object$$Dictionary$2.call(this, new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, System.Object.ctor), new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, Neptuo.Activators.IActivator$1.ctor));
        },
        ctor$$Dictionary$2$String$Object$$Dictionary$2: function (storage, activatorStorage){
            this.objectStorage = null;
            this.activatorStorage = null;
            System.Object.ctor.call(this);
            Neptuo.Ensure.NotNull$$Object$$String(storage, "storage");
            Neptuo.Ensure.NotNull$$Object$$String(activatorStorage, "activatorStorage");
            this.objectStorage = storage;
            this.activatorStorage = activatorStorage;
        },
        AddObject: function (key, instance){
            Neptuo.Ensure.NotNullOrEmpty(key, "key");
            Neptuo.Ensure.NotNull$$Object$$String(instance, "instance");
            this.objectStorage.set_Item$$TKey(key, instance);
            return this;
        },
        AddActivator: function (key, activator){
            Neptuo.Ensure.NotNullOrEmpty(key, "key");
            Neptuo.Ensure.NotNull$$Object$$String(activator, "activator");
            this.activatorStorage.set_Item$$TKey(key, activator);
            return this;
        },
        TryGetObject: function (key){
            Neptuo.Ensure.NotNullOrEmpty(key, "key");
            return this.objectStorage.get_Item$$TKey(key);
        },
        TryGetActivator: function (key){
            Neptuo.Ensure.NotNullOrEmpty(key, "key");
            return this.activatorStorage.get_Item$$TKey(key);
        },
        CopyObjects: function (keysToSkip){
            var result = new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, System.Object.ctor);
            var $it2 = this.objectStorage.GetEnumerator();
            while ($it2.MoveNext()){
                var item = $it2.get_Current();
                if (!System.Linq.Enumerable.Contains$1$$IEnumerable$1$$TSource(System.String.ctor, keysToSkip, item.get_Key()))
                    result.Add(item.get_Key(), item.get_Value());
            }
            return result;
        },
        CopyActivators: function (keysToSkip){
            var result = new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, Neptuo.Activators.IActivator$1.ctor);
            var $it3 = this.activatorStorage.GetEnumerator();
            while ($it3.MoveNext()){
                var item = $it3.get_Current();
                if (!System.Linq.Enumerable.Contains$1$$IEnumerable$1$$TSource(System.String.ctor, keysToSkip, item.get_Key()))
                    result.Add(item.get_Key(), item.get_Value());
            }
            return result;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }, {
        name: "ctor$$Dictionary$$Dictionary",
        parameters: ["System.Collections.Generic.Dictionary", "System.Collections.Generic.Dictionary"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Activators$Internals$InstanceStorage);
var Neptuo$Activators$Simple$VersionInfo = {
    fullname: "Neptuo.Activators.Simple.VersionInfo",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            Neptuo.Activators.Simple.VersionInfo.Version = "0.1.0";
        },
        GetVersion: function (){
            return new System.Version.ctor$$String("0.1.0");
        }
    },
    assemblyName: "Neptuo.Activators.Simple",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    },
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Activators$Simple$VersionInfo);
var Neptuo$Activators$SimpleDependencyContainer = {
    fullname: "Neptuo.Activators.SimpleDependencyContainer",
    baseTypeName: "Neptuo.ComponentModel.DisposableBase",
    assemblyName: "Neptuo.Activators.Simple",
    interfaceNames: ["Neptuo.Activators.IDependencyContainer"],
    Kind: "Class",
    definition: {
        ctor: function (){
            this.registry = null;
            this.instances = null;
            this.scopeName = null;
            Neptuo.Activators.SimpleDependencyContainer.ctor$$String$$DependencyRegistry$$InstanceStorage.call(this, "Root", new Neptuo.Activators.Internals.DependencyRegistry.ctor(), new Neptuo.Activators.Internals.InstanceStorage.ctor());
        },
        ScopeName$$: "System.String",
        get_ScopeName: function (){
            return this.scopeName;
        },
        ctor$$String$$DependencyRegistry$$InstanceStorage: function (scopeName, registry, instances){
            this.registry = null;
            this.instances = null;
            this.scopeName = null;
            Neptuo.ComponentModel.DisposableBase.ctor.call(this);
            Neptuo.Ensure.NotNullOrEmpty(scopeName, "scopeName");
            Neptuo.Ensure.NotNull$$Object$$String(registry, "registry");
            Neptuo.Ensure.NotNull$$Object$$String(instances, "instances");
            this.scopeName = scopeName;
            this.registry = registry;
            this.instances = instances;
            this.Map(Typeof(Neptuo.Activators.IDependencyContainer.ctor), Neptuo.Activators.DependencyLifetime.NamedScope(scopeName), this);
            this.Map(Typeof(Neptuo.Activators.IDependencyProvider.ctor), Neptuo.Activators.DependencyLifetime.NamedScope(scopeName), this);
        },
        Map: function (requiredType, lifetime, target){
            var targetType = As(target, System.Type.ctor);
            if (System.Type.op_Inequality$$Type$$Type(targetType, null)){
                if (requiredType.get_IsInterface())
                    throw $CreateException(new Neptuo.Activators.Internals.DependencyException.ctor(System.String.Format$$String$$Object$$Object("Target can\'t be interface. Mapping \'{0}\' to \'{1}\'.", requiredType.get_FullName(), targetType.get_FullName())), new Error());
                if (requiredType.get_IsAbstract())
                    throw $CreateException(new Neptuo.Activators.Internals.DependencyException.ctor(System.String.Format$$String$$Object$$Object("Target can\'t be abstract class. Mapping \'{0}\' to \'{1}\'.", requiredType.get_FullName(), targetType.get_FullName())), new Error());
                this.registry.Add(this.GetKey(requiredType), new Neptuo.Activators.Internals.DependencyRegistryItem.ctor$$Type$$DependencyLifetime$$ConstructorInfo(requiredType, lifetime, this.FindBestConstructor(targetType)));
                return this;
            }
            var targetActivator = As(target, Neptuo.Activators.IActivator$1.ctor);
            if (targetActivator != null){
                this.instances.AddActivator(this.GetKey(requiredType), targetActivator);
                this.registry.Add(this.GetKey(requiredType), new Neptuo.Activators.Internals.DependencyRegistryItem.ctor$$Type$$DependencyLifetime(requiredType, lifetime));
                return this;
            }
            targetType = target.GetType();
            if (requiredType.IsAssignableFrom(targetType)){
                this.instances.AddObject(this.GetKey(requiredType), target);
                this.registry.Add(this.GetKey(requiredType), new Neptuo.Activators.Internals.DependencyRegistryItem.ctor$$Type$$DependencyLifetime(requiredType, lifetime));
                return this;
            }
            throw $CreateException(Neptuo._EnsureSystemExtensions.InvalidOperation(Neptuo.Ensure.Exception, "Not supported target type \'{0}\'.", target.GetType().get_FullName()), new Error());
        },
        Scope: function (scopeName){
            return new Neptuo.Activators.SimpleDependencyContainer.ctor$$String$$DependencyRegistry$$InstanceStorage(scopeName, new Neptuo.Activators.Internals.DependencyRegistry.ctor$$Dictionary$2$String$DependencyRegistryItem(this.registry.CopyRegistries()), new Neptuo.Activators.Internals.InstanceStorage.ctor$$Dictionary$2$String$Object$$Dictionary$2(this.instances.CopyObjects(new System.Collections.Generic.List$1.ctor(System.String.ctor)), this.instances.CopyActivators(new System.Collections.Generic.List$1.ctor(System.String.ctor))));
        },
        Resolve: function (requiredType){
            var key = this.GetKey(requiredType);
            var item = this.registry.GetByKey(key);
            if (item == null){
                this.Map(requiredType, Neptuo.Activators.DependencyLifetime.Transient, requiredType);
                item = this.registry.GetByKey(key);
            }
            return this.Build(item);
        },
        GetKey: function (t){
            return t.get_FullName();
        },
        Build: function (item){
            throw $CreateException(new System.NotImplementedException.ctor(), new Error());
        },
        CreateInstance: function (constructorInfo){
            Neptuo.Ensure.NotNull$$Object$$String(constructorInfo, "constructorInfo");
            var instance;
            var parameterDefinitions = constructorInfo.GetParameters();
            var parameters = new Array(parameterDefinitions.get_Length());
            for (var i = 0; i < parameterDefinitions.get_Length(); i++)
                parameters[i] = this.Resolve(parameterDefinitions[i].get_ParameterType());
            instance = constructorInfo.Invoke$$Object$Array(parameters);
            return instance;
        },
        FindBestConstructor: function (type){
            var result = null;
            var $it4 = type.GetConstructors().GetEnumerator();
            while ($it4.MoveNext()){
                var ctor = $it4.get_Current();
                if (System.Reflection.ConstructorInfo.op_Equality$$ConstructorInfo$$ConstructorInfo(result, null))
                    result = ctor;
                else if (result.GetParameters().get_Length() < ctor.GetParameters().get_Length())
                    result = ctor;
            }
            return result;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }, {
        name: "ctor$$String$$DependencyRegistry$$InstanceStorage",
        parameters: ["System.String", "Neptuo.Activators.Internals.DependencyRegistry", "Neptuo.Activators.Internals.InstanceStorage"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Activators$SimpleDependencyContainer);

