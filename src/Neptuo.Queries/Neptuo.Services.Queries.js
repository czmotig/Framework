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

if (typeof ($CreateAnonymousDelegate) == 'undefined') {
    var $CreateAnonymousDelegate = function (target, func) {
        if (target == null || func == null)
            return func;
        var delegate = function () {
            return func.apply(target, arguments);
        };
        delegate.func = func;
        delegate.target = target;
        delegate.isDelegate = true;
        return delegate;
    }
}


if (typeof(JsTypes) == "undefined")
    var JsTypes = [];
var Neptuo$Services$Queries$DefaultQueryDispatcher = {
    fullname: "Neptuo.Services.Queries.DefaultQueryDispatcher",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Queries",
    interfaceNames: ["Neptuo.Services.Queries.IQueryHandlerCollection", "Neptuo.Services.Queries.IQueryDispatcher"],
    Kind: "Class",
    definition: {
        ctor: function (){
            this.storage = new System.Collections.Generic.Dictionary$2.ctor(System.Type.ctor, Neptuo.Services.Queries.Internals.DefaultQueryHandlerDefinition.ctor);
            System.Object.ctor.call(this);
        },
        Add$2: function (TQuery, TOutput, handler){
            Neptuo.Ensure.NotNull$$Object$$String(handler, "handler");
            var definition = new Neptuo.Services.Queries.Internals.DefaultQueryHandlerDefinition$1.ctor(TOutput, handler, $CreateAnonymousDelegate(this, function (query){
                return handler.HandleAsync(Cast(query, TQuery));
            }));
            this.storage.set_Item$$TKey(Typeof(TQuery), definition);
            return this;
        },
        TryGet$2: function (TQuery, TOutput, handler){
            var definition;
            if ((function (){
                var $1 = {
                    Value: definition
                };
                var $res = this.storage.TryGetValue(Typeof(TQuery), $1);
                definition = $1.Value;
                return $res;
            }).call(this)){
                handler.Value = Cast(definition.get_QueryHandler(), Neptuo.Services.Queries.Handlers.IQueryHandler$2.ctor);
                return true;
            }
            handler.Value = null;
            return false;
        },
        QueryAsync$1: function (TOutput, query){
            Neptuo.Ensure.NotNull$$Object$$String(query, "query");
            var definition;
            var queryType = query.GetType();
            if ((function (){
                var $1 = {
                    Value: definition
                };
                var $res = this.storage.TryGetValue(queryType, $1);
                definition = $1.Value;
                return $res;
            }).call(this)){
                var target = Cast(definition, Neptuo.Services.Queries.Internals.DefaultQueryHandlerDefinition$1.ctor);
                return target.HandleAsync(query);
            }
            throw $CreateException(Neptuo._EnsureArgumentExtensions.ArgumentOutOfRange(Neptuo.Ensure.Exception, "query", "There isn\'t query handler for query of type \'{0}\'.", queryType.get_FullName()), new Error());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Queries$DefaultQueryDispatcher);
var Neptuo$Services$Queries$Handlers$IQueryHandler$2 = {
    fullname: "Neptuo.Services.Queries.Handlers.IQueryHandler$2",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Queries",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Queries$Handlers$IQueryHandler$2);
var Neptuo$Services$Queries$Handlers$AutoExports$QueryHandlerAttribute = {
    fullname: "Neptuo.Services.Queries.Handlers.AutoExports.QueryHandlerAttribute",
    baseTypeName: "System.Attribute",
    assemblyName: "Neptuo.Services.Queries",
    Kind: "Class",
    definition: {
        ctor: function (){
            this._QueryType = null;
            this._HasTypeDefined = false;
            System.Attribute.ctor.call(this);
        },
        QueryType$$: "System.Type",
        get_QueryType: function (){
            return this._QueryType;
        },
        set_QueryType: function (value){
            this._QueryType = value;
        },
        HasTypeDefined$$: "System.Boolean",
        get_HasTypeDefined: function (){
            return this._HasTypeDefined;
        },
        set_HasTypeDefined: function (value){
            this._HasTypeDefined = value;
        },
        ctor$$Type: function (queryType){
            this._QueryType = null;
            this._HasTypeDefined = false;
            System.Attribute.ctor.call(this);
            this.set_QueryType(queryType);
            this.set_HasTypeDefined(true);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }, {
        name: "ctor$$Type",
        parameters: ["System.Type"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Queries$Handlers$AutoExports$QueryHandlerAttribute);
var Neptuo$Services$Queries$Internals$Constant = {
    fullname: "Neptuo.Services.Queries.Internals.Constant",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            Neptuo.Services.Queries.Internals.Constant.QueryHandlerCollectionAddMethodName = "Add";
        }
    },
    assemblyName: "Neptuo.Services.Queries",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Queries$Internals$Constant);
var Neptuo$Services$Queries$Internals$DefaultQueryHandlerDefinition = {
    fullname: "Neptuo.Services.Queries.Internals.DefaultQueryHandlerDefinition",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Queries",
    Kind: "Class",
    definition: {
        ctor: function (queryHandler){
            this._QueryHandler = null;
            System.Object.ctor.call(this);
            this.set_QueryHandler(queryHandler);
        },
        QueryHandler$$: "System.Object",
        get_QueryHandler: function (){
            return this._QueryHandler;
        },
        set_QueryHandler: function (value){
            this._QueryHandler = value;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.Object"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Queries$Internals$DefaultQueryHandlerDefinition);
var Neptuo$Services$Queries$Internals$DefaultQueryHandlerDefinition$1 = {
    fullname: "Neptuo.Services.Queries.Internals.DefaultQueryHandlerDefinition$1",
    baseTypeName: "Neptuo.Services.Queries.Internals.DefaultQueryHandlerDefinition",
    assemblyName: "Neptuo.Services.Queries",
    Kind: "Class",
    definition: {
        ctor: function (TOutput, queryHandler, handleMethod){
            this.TOutput = TOutput;
            this._HandleMethod = null;
            Neptuo.Services.Queries.Internals.DefaultQueryHandlerDefinition.ctor.call(this, queryHandler);
            this.set_HandleMethod(handleMethod);
        },
        HandleMethod$$: "System.Func`2[[System.Object],[System.Threading.Tasks.Task`1[[`0]]]]",
        get_HandleMethod: function (){
            return this._HandleMethod;
        },
        set_HandleMethod: function (value){
            this._HandleMethod = value;
        },
        HandleAsync: function (query){
            return this.get_HandleMethod()(query);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.Object", "System.Func"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$Services$Queries$Internals$DefaultQueryHandlerDefinition$1);
var Neptuo$Services$Queries$IQuery$1 = {
    fullname: "Neptuo.Services.Queries.IQuery$1",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Queries",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Queries$IQuery$1);
var Neptuo$Services$Queries$IQueryDispatcher = {
    fullname: "Neptuo.Services.Queries.IQueryDispatcher",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Queries",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Queries$IQueryDispatcher);
var Neptuo$Services$Queries$IQueryHandlerCollection = {
    fullname: "Neptuo.Services.Queries.IQueryHandlerCollection",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.Services.Queries",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Queries$IQueryHandlerCollection);
var Neptuo$Services$Queries$VersionInfo = {
    fullname: "Neptuo.Services.Queries.VersionInfo",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            Neptuo.Services.Queries.VersionInfo.Version = "1.0.0";
        },
        GetVersion: function (){
            return new System.Version.ctor$$String("1.0.0");
        }
    },
    assemblyName: "Neptuo.Services.Queries",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    },
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Queries$VersionInfo);
var Neptuo$Services$Queries$Handlers$AutoExports$_TypeExecutorServiceExtensions = {
    fullname: "Neptuo.Services.Queries.Handlers.AutoExports._TypeExecutorServiceExtensions",
    baseTypeName: "System.Object",
    staticDefinition: {
        AddQueryHandlers$$ITypeExecutorService$$IDependencyContainer$$Boolean: function (service, dependencyContainer, isExecutedForLatelyLoadedAssemblies){
            Neptuo.Ensure.NotNull$$Object$$String(service, "service");
            Neptuo.Ensure.NotNull$$Object$$String(dependencyContainer, "dependencyContainer");
            Neptuo.Reflection.Enumerators.Executors._TypeDelegateCollectionExtensions.AddFilterHasAttribute$1$$ITypeDelegateCollection(Neptuo.Services.Queries.Handlers.AutoExports.QueryHandlerAttribute.ctor, Neptuo.Reflection.Enumerators.Executors._TypeDelegateCollectionExtensions.AddFilterNotAbstract$$ITypeDelegateCollection(Neptuo.Reflection.Enumerators.Executors._TypeDelegateCollectionExtensions.AddFilterNotInterface$$ITypeDelegateCollection(Neptuo.Reflection._TypeExecutorServiceExtensions.AddFiltered(service, isExecutedForLatelyLoadedAssemblies)))).AddHandler(function (t){
                Neptuo.Services.Queries.Handlers.AutoExports._TypeExecutorServiceExtensions.AddQueryHandler$$IDependencyContainer$$Type(dependencyContainer, t);
            });
            return service;
        },
        AddQueryHandler$$IDependencyContainer$$Type: function (dependencyContainer, queryHandlerType){
            var allAttributes = queryHandlerType.GetCustomAttributes$$Boolean(true);
            var lifetimeAttribute = System.Linq.Enumerable.FirstOrDefault$1$$IEnumerable$1(Neptuo.Activators.AutoExports.ExportLifetimeAttribute.ctor, System.Linq.Enumerable.OfType$1(Neptuo.Activators.AutoExports.ExportLifetimeAttribute.ctor, allAttributes));
            var lifetime = lifetimeAttribute != null ? lifetimeAttribute.GetLifetime() : Neptuo.Activators.DependencyLifetime.Transient;
            var attributes = System.Linq.Enumerable.OfType$1(Neptuo.Services.Queries.Handlers.AutoExports.QueryHandlerAttribute.ctor, allAttributes);
            var $it1 = Neptuo.Services.Queries.Handlers.AutoExports._TypeExecutorServiceExtensions.GetHandlerInterfaces(queryHandlerType, attributes).GetEnumerator();
            while ($it1.MoveNext()){
                var queryHandlerInterfaceType = $it1.get_Current();
                dependencyContainer.get_Definitions().Add(queryHandlerInterfaceType, lifetime, queryHandlerType);
            }
        },
        AddQueryHandlers$$ITypeExecutorService$$IQueryHandlerCollection$$Boolean: function (service, collection, isExecutedForLatelyLoadedAssemblies){
            Neptuo.Ensure.NotNull$$Object$$String(service, "service");
            Neptuo.Ensure.NotNull$$Object$$String(collection, "collection");
            Neptuo.Reflection.Enumerators.Executors._TypeDelegateCollectionExtensions.AddFilterHasAttribute$1$$ITypeDelegateCollection(Neptuo.Services.Queries.Handlers.AutoExports.QueryHandlerAttribute.ctor, Neptuo.Reflection.Enumerators.Executors._TypeDelegateCollectionExtensions.AddFilterHasDefaultConstructor$$ITypeDelegateCollection(Neptuo.Reflection.Enumerators.Executors._TypeDelegateCollectionExtensions.AddFilterNotAbstract$$ITypeDelegateCollection(Neptuo.Reflection.Enumerators.Executors._TypeDelegateCollectionExtensions.AddFilterNotInterface$$ITypeDelegateCollection(Neptuo.Reflection._TypeExecutorServiceExtensions.AddFiltered(service, isExecutedForLatelyLoadedAssemblies))))).AddHandler(function (t){
                Neptuo.Services.Queries.Handlers.AutoExports._TypeExecutorServiceExtensions.AddQueryHandler$$IQueryHandlerCollection$$Type(collection, t);
            });
            return service;
        },
        AddQueryHandler$$IQueryHandlerCollection$$Type: function (collection, queryHandlerType){
            var attributes = queryHandlerType.GetCustomAttributes$$Type$$Boolean(Typeof(Neptuo.Services.Queries.Handlers.AutoExports.QueryHandlerAttribute.ctor), true);
            var handler = System.Activator.CreateInstance$$Type(queryHandlerType);
            var $it2 = Neptuo.Services.Queries.Handlers.AutoExports._TypeExecutorServiceExtensions.GetHandlerInterfaces(queryHandlerType, attributes).GetEnumerator();
            while ($it2.MoveNext()){
                var queryHandlerInterfaceType = $it2.get_Current();
                var addMethod = collection.GetType().GetMethod$$String(Neptuo.Services.Queries.Internals.Constant.QueryHandlerCollectionAddMethodName).MakeGenericMethod(queryHandlerInterfaceType.GetGenericArguments());
                addMethod.Invoke$$Object$$Object$Array(collection, [handler]);
            }
        },
        GetHandlerInterfaces: function (queryHandlerType, queryHandlerAttributes){
            var result = new System.Collections.Generic.List$1.ctor(System.Type.ctor);
            var $it3 = queryHandlerAttributes.GetEnumerator();
            while ($it3.MoveNext()){
                var attribute = $it3.get_Current();
                if (attribute.get_HasTypeDefined()){
                    var queryType = attribute.get_QueryType();
                    var queryInterfaceTypes = queryType.GetInterfaces();
                    var $it4 = queryInterfaceTypes.GetEnumerator();
                    while ($it4.MoveNext()){
                        var queryInterfaceType = $it4.get_Current();
                        if (queryInterfaceType.get_IsGenericType()){
                            var parameters = queryInterfaceType.GetGenericArguments();
                            if (parameters.get_Length() == 1){
                                var queryResultType = parameters[0];
                                var queryHandlerInterfaceType = Typeof(Neptuo.Services.Queries.Handlers.IQueryHandler$2.ctor).MakeGenericType(queryType, queryResultType);
                                result.Add(queryHandlerInterfaceType);
                            }
                        }
                    }
                }
                else {
                    var interfaceTypes = queryHandlerType.GetInterfaces();
                    var $it5 = interfaceTypes.GetEnumerator();
                    while ($it5.MoveNext()){
                        var interfaceType = $it5.get_Current();
                        if (interfaceType.get_IsGenericType() && System.Type.op_Equality$$Type$$Type(Typeof(Neptuo.Services.Queries.Handlers.IQueryHandler$2.ctor), interfaceType.GetGenericTypeDefinition())){
                            var parameters = interfaceType.GetGenericArguments();
                            var queryHandlerInterfaceType = Typeof(Neptuo.Services.Queries.Handlers.IQueryHandler$2.ctor).MakeGenericType(parameters[0], parameters[1]);
                            result.Add(queryHandlerInterfaceType);
                        }
                    }
                }
            }
            return result;
        }
    },
    assemblyName: "Neptuo.Services.Queries",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    },
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Queries$Handlers$AutoExports$_TypeExecutorServiceExtensions);
var Neptuo$Services$Queries$_QueryHandlerCollectionExtensions = {
    fullname: "Neptuo.Services.Queries._QueryHandlerCollectionExtensions",
    baseTypeName: "System.Object",
    staticDefinition: {
        AddAll: function (collection, handler){
            Neptuo.Ensure.NotNull$$Object$$String(collection, "collection");
            Neptuo.Ensure.NotNull$$Object$$String(handler, "handler");
            var $it6 = handler.GetType().GetInterfaces().GetEnumerator();
            while ($it6.MoveNext()){
                var interfaceType = $it6.get_Current();
                if (interfaceType.get_IsGenericType() && System.Type.op_Equality$$Type$$Type(Typeof(Neptuo.Services.Queries.Handlers.IQueryHandler$2.ctor), interfaceType.GetGenericTypeDefinition())){
                    var addMethod = collection.GetType().GetMethod$$String(Neptuo.Services.Queries.Internals.Constant.QueryHandlerCollectionAddMethodName).MakeGenericMethod(interfaceType.GetGenericArguments());
                    addMethod.Invoke$$Object$$Object$Array(collection, [handler]);
                }
            }
            return collection;
        }
    },
    assemblyName: "Neptuo.Services.Queries",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    },
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$Services$Queries$_QueryHandlerCollectionExtensions);
