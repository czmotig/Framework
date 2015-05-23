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
var Neptuo$PresentationModels$Binding$BindingConverterCollection = {
    fullname: "Neptuo.PresentationModels.Binding.BindingConverterCollection",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Binding",
    interfaceNames: ["Neptuo.PresentationModels.Binding.IBindingConverterCollection"],
    Kind: "Class",
    definition: {
        ctor: function (previousCollection){
            this._PreviousCollection = null;
            this._Storage = null;
            System.Object.ctor.call(this);
            this.set_Storage(new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, System.Collections.Generic.List$1.ctor));
            this.set_PreviousCollection(previousCollection);
        },
        PreviousCollection$$: "Neptuo.PresentationModels.Binding.BindingConverterCollection",
        get_PreviousCollection: function (){
            return this._PreviousCollection;
        },
        set_PreviousCollection: function (value){
            this._PreviousCollection = value;
        },
        Storage$$: "System.Collections.Generic.Dictionary`2[[System.String],[System.Collections.Generic.List`1[[Neptuo.PresentationModels.Binding.IBindingConverter]]]]",
        get_Storage: function (){
            return this._Storage;
        },
        set_Storage: function (value){
            this._Storage = value;
        },
        Add: function (fieldType, converter){
            Neptuo.Ensure.NotNull$$Object$$String(fieldType, "fieldType");
            Neptuo.Ensure.NotNull$$Object$$String(converter, "converter");
            var key = this.GetKey(fieldType);
            var list;
            if (!(function (){
                var $1 = {
                    Value: list
                };
                var $res = this.get_Storage().TryGetValue(key, $1);
                list = $1.Value;
                return $res;
            }).call(this)){
                list = new System.Collections.Generic.List$1.ctor(Neptuo.PresentationModels.Binding.IBindingConverter.ctor);
                this.get_Storage().Add(key, list);
            }
            list.Add(converter);
            return this;
        },
        TryConvert: function (sourceValue, targetField, targetValue){
            var converters;
            if ((function (){
                var $1 = {
                    Value: converters
                };
                var $res = this.TryGetConverters(targetField, $1);
                converters = $1.Value;
                return $res;
            }).call(this)){
                var $it1 = converters.GetEnumerator();
                while ($it1.MoveNext()){
                    var converter = $it1.get_Current();
                    if (converter.TryConvert(sourceValue, targetField, targetValue))
                        return true;
                }
            }
            targetValue.Value = null;
            return false;
        },
        TryGetConverters: function (targetField, converters){
            var key = this.GetKey(targetField.get_FieldType());
            var storageValue;
            if ((function (){
                var $1 = {
                    Value: storageValue
                };
                var $res = this.get_Storage().TryGetValue(key, $1);
                storageValue = $1.Value;
                return $res;
            }).call(this)){
                if (this.get_PreviousCollection() != null){
                    var previousConverters;
                    if ((function (){
                        var $1 = {
                            Value: previousConverters
                        };
                        var $res = this.get_PreviousCollection().TryGetConverters(targetField, $1);
                        previousConverters = $1.Value;
                        return $res;
                    }).call(this))
                        storageValue.AddRange(previousConverters);
                }
                converters.Value = storageValue;
                return true;
            }
            if (this.get_PreviousCollection() != null)
                return this.get_PreviousCollection().TryGetConverters(targetField, converters);
            converters.Value = null;
            return false;
        },
        GetKey: function (fieldType){
            return fieldType.ToString();
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.PresentationModels.Binding.BindingConverterCollection"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Binding$BindingConverterCollection);
var Neptuo$PresentationModels$Binding$BindingDictionaryValueStorage = {
    fullname: "Neptuo.PresentationModels.Binding.BindingDictionaryValueStorage",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Binding",
    interfaceNames: ["Neptuo.PresentationModels.Binding.IBindingModelValueStorage"],
    Kind: "Class",
    definition: {
        ctor: function (storage){
            this._Storage = null;
            System.Object.ctor.call(this);
            if (storage == null)
                storage = new System.Collections.Generic.Dictionary$2.ctor(System.String.ctor, System.String.ctor);
            this.set_Storage(storage);
        },
        Storage$$: "System.Collections.Generic.Dictionary`2[[System.String],[System.String]]",
        get_Storage: function (){
            return this._Storage;
        },
        set_Storage: function (value){
            this._Storage = value;
        },
        Add: function (key, value){
            this.get_Storage().Add(key, value);
            return this;
        },
        TryGetValue: function (identifier, targetValue){
            if (identifier != null)
                return this.get_Storage().TryGetValue(identifier, targetValue);
            targetValue.Value = null;
            return false;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.Collections.Generic.Dictionary"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Binding$BindingDictionaryValueStorage);
var Neptuo$PresentationModels$Binding$BindingModelValueGetter = {
    fullname: "Neptuo.PresentationModels.Binding.BindingModelValueGetter",
    baseTypeName: "Neptuo.ComponentModel.DisposableBase",
    assemblyName: "Neptuo.PresentationModels.Binding",
    interfaceNames: ["Neptuo.PresentationModels.IModelValueGetter"],
    Kind: "Class",
    definition: {
        ctor: function (storage, converterCollection, modelDefinition){
            this._Storage = null;
            this._ConverterCollection = null;
            this._ModelDefinition = null;
            Neptuo.ComponentModel.DisposableBase.ctor.call(this);
            Neptuo.Ensure.NotNull$$Object$$String(storage, "storage");
            Neptuo.Ensure.NotNull$$Object$$String(converterCollection, "converterCollection");
            Neptuo.Ensure.NotNull$$Object$$String(modelDefinition, "modelDefinition");
            this.set_Storage(storage);
            this.set_ConverterCollection(converterCollection);
            this.set_ModelDefinition(modelDefinition);
        },
        Storage$$: "Neptuo.PresentationModels.Binding.IBindingModelValueStorage",
        get_Storage: function (){
            return this._Storage;
        },
        set_Storage: function (value){
            this._Storage = value;
        },
        ConverterCollection$$: "Neptuo.PresentationModels.Binding.IBindingConverterCollection",
        get_ConverterCollection: function (){
            return this._ConverterCollection;
        },
        set_ConverterCollection: function (value){
            this._ConverterCollection = value;
        },
        ModelDefinition$$: "Neptuo.PresentationModels.IModelDefinition",
        get_ModelDefinition: function (){
            return this._ModelDefinition;
        },
        set_ModelDefinition: function (value){
            this._ModelDefinition = value;
        },
        TryGetValue: function (identifier, value){
            var targetField = System.Linq.Enumerable.FirstOrDefault$1$$IEnumerable$1$$Func$2(Neptuo.PresentationModels.IFieldDefinition.ctor, this.get_ModelDefinition().get_Fields(), $CreateAnonymousDelegate(this, function (f){
                return f.get_Identifier() == identifier;
            }));
            if (targetField == null)
                throw $CreateException(Neptuo._EnsureArgumentExtensions.ArgumentOutOfRange(Neptuo.Ensure.Exception, "identifier", "Unnable to find field \'{0}\' in model \'{1}\'.", identifier, this.get_ModelDefinition().get_Identifier()), new Error());
            var sourceValue;
            if ((function (){
                var $1 = {
                    Value: sourceValue
                };
                var $res = this.get_Storage().TryGetValue(identifier, $1);
                sourceValue = $1.Value;
                return $res;
            }).call(this)){
                if (this.get_ConverterCollection().TryConvert(sourceValue, targetField, value))
                    return true;
            }
            value.Value = null;
            return false;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.PresentationModels.Binding.IBindingModelValueStorage", "Neptuo.PresentationModels.Binding.IBindingConverterCollection", "Neptuo.PresentationModels.IModelDefinition"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Binding$BindingModelValueGetter);
var Neptuo$PresentationModels$Binding$Converters$BindingConverterBase$1 = {
    fullname: "Neptuo.PresentationModels.Binding.Converters.BindingConverterBase$1",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Binding",
    interfaceNames: ["Neptuo.PresentationModels.Binding.IBindingConverter"],
    Kind: "Class",
    definition: {
        ctor: function (T){
            this.T = T;
            System.Object.ctor.call(this);
        },
        TryConvert: function (sourceValue, targetField, targetValue){
            var target;
            if ((function (){
                var $1 = {
                    Value: target
                };
                var $res = this.TryConvertTo(sourceValue, targetField, $1);
                target = $1.Value;
                return $res;
            }).call(this)){
                targetValue.Value = target;
                return true;
            }
            targetValue.Value = Default(this.T);
            return false;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Binding$Converters$BindingConverterBase$1);
var Neptuo$PresentationModels$Binding$Converters$_BindingConverterCollectionExtensions = {
    fullname: "Neptuo.PresentationModels.Binding.Converters._BindingConverterCollectionExtensions",
    baseTypeName: "System.Object",
    staticDefinition: {
        AddStandart: function (bindingConverters){
            return bindingConverters.Add(Typeof(System.Boolean.ctor), new Neptuo.PresentationModels.Binding.Converters.BoolBindingConverter.ctor()).Add(Typeof(System.Int32.ctor), new Neptuo.PresentationModels.Binding.Converters.IntBindingConverter.ctor()).Add(Typeof(System.Double.ctor), new Neptuo.PresentationModels.Binding.Converters.DoubleBindingConverter.ctor()).Add(Typeof(System.String.ctor), new Neptuo.PresentationModels.Binding.Converters.StringBindingConverter.ctor(false, true, true)).Add(Typeof(System.Nullable$1.ctor), new Neptuo.PresentationModels.Binding.Converters.NullBindingConverter$1.ctor(System.Boolean.ctor, new Neptuo.PresentationModels.Binding.Converters.BoolBindingConverter.ctor())).Add(Typeof(System.Nullable$1.ctor), new Neptuo.PresentationModels.Binding.Converters.NullBindingConverter$1.ctor(System.Int32.ctor, new Neptuo.PresentationModels.Binding.Converters.IntBindingConverter.ctor())).Add(Typeof(System.Nullable$1.ctor), new Neptuo.PresentationModels.Binding.Converters.NullBindingConverter$1.ctor(System.Double.ctor, new Neptuo.PresentationModels.Binding.Converters.DoubleBindingConverter.ctor())).Add(Typeof(System.Collections.Generic.IEnumerable$1.ctor), new Neptuo.PresentationModels.Binding.Converters.ListBindingConverter$1.ctor(System.Boolean.ctor, ",", new Neptuo.PresentationModels.Binding.Converters.BoolBindingConverter.ctor())).Add(Typeof(System.Collections.Generic.IEnumerable$1.ctor), new Neptuo.PresentationModels.Binding.Converters.ListBindingConverter$1.ctor(System.Int32.ctor, ",", new Neptuo.PresentationModels.Binding.Converters.IntBindingConverter.ctor())).Add(Typeof(System.Collections.Generic.IEnumerable$1.ctor), new Neptuo.PresentationModels.Binding.Converters.ListBindingConverter$1.ctor(System.Double.ctor, ",", new Neptuo.PresentationModels.Binding.Converters.DoubleBindingConverter.ctor())).Add(Typeof(System.Collections.Generic.IEnumerable$1.ctor), new Neptuo.PresentationModels.Binding.Converters.ListBindingConverter$1.ctor(System.String.ctor, ",", new Neptuo.PresentationModels.Binding.Converters.StringBindingConverter.ctor(false, true, true)));
        }
    },
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    },
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Binding$Converters$_BindingConverterCollectionExtensions);
var Neptuo$PresentationModels$Binding$Converters$BoolBindingConverter = {
    fullname: "Neptuo.PresentationModels.Binding.Converters.BoolBindingConverter",
    baseTypeName: "Neptuo.PresentationModels.Binding.Converters.BindingConverterBase$1",
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.Binding.Converters.BindingConverterBase$1.ctor.call(this, System.Boolean.ctor);
        },
        TryConvertTo: function (sourceValue, targetField, targetValue){
            if (sourceValue == null){
                targetValue.Value = false;
                return false;
            }
            var result;
            if ((function (){
                var $1 = {
                    Value: result
                };
                var $res = System.Boolean.TryParse(sourceValue, $1);
                result = $1.Value;
                return $res;
            }).call(this)){
                targetValue.Value = result;
                return true;
            }
            if (sourceValue.ToLowerInvariant() == "on"){
                targetValue.Value = true;
                return true;
            }
            targetValue.Value = false;
            return false;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Binding$Converters$BoolBindingConverter);
var Neptuo$PresentationModels$Binding$Converters$DoubleBindingConverter = {
    fullname: "Neptuo.PresentationModels.Binding.Converters.DoubleBindingConverter",
    baseTypeName: "Neptuo.PresentationModels.Binding.Converters.FuncBindingConverter$1",
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.Binding.Converters.FuncBindingConverter$1.ctor.call(this, System.Double.ctor, System.Double.TryParse$$String$$Double);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Binding$Converters$DoubleBindingConverter);
var Neptuo$PresentationModels$Binding$Converters$FuncBindingConverter$1 = {
    fullname: "Neptuo.PresentationModels.Binding.Converters.FuncBindingConverter$1",
    baseTypeName: "Neptuo.PresentationModels.Binding.Converters.BindingConverterBase$1",
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Class",
    definition: {
        ctor: function (T, converter){
            this.T = T;
            this._Converter = null;
            Neptuo.PresentationModels.Binding.Converters.BindingConverterBase$1.ctor.call(this, this.T);
            Neptuo.Ensure.NotNull$$Object$$String(converter, "converter");
            this.set_Converter(converter);
        },
        Converter$$: "Neptuo.OutFunc`3[[System.String],[`0],[System.Boolean]]",
        get_Converter: function (){
            return this._Converter;
        },
        set_Converter: function (value){
            this._Converter = value;
        },
        TryConvertTo: function (sourceValue, targetField, targetValue){
            return this.get_Converter()(sourceValue, targetValue);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.OutFunc"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Binding$Converters$FuncBindingConverter$1);
var Neptuo$PresentationModels$Binding$Converters$IntBindingConverter = {
    fullname: "Neptuo.PresentationModels.Binding.Converters.IntBindingConverter",
    baseTypeName: "Neptuo.PresentationModels.Binding.Converters.FuncBindingConverter$1",
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.Binding.Converters.FuncBindingConverter$1.ctor.call(this, System.Int32.ctor, System.Int32.TryParse$$String$$Int32);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Binding$Converters$IntBindingConverter);
var Neptuo$PresentationModels$Binding$Converters$ListBindingConverter$1 = {
    fullname: "Neptuo.PresentationModels.Binding.Converters.ListBindingConverter$1",
    baseTypeName: "Neptuo.PresentationModels.Binding.Converters.BindingConverterBase$1",
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Class",
    definition: {
        ctor: function (T, separator, converter){
            this.T = T;
            this._Separator = null;
            this._Converter = null;
            Neptuo.PresentationModels.Binding.Converters.BindingConverterBase$1.ctor.call(this, System.Collections.Generic.IEnumerable$1.ctor);
            Neptuo.Ensure.NotNullOrEmpty(separator, "separator");
            Neptuo.Ensure.NotNull$$Object$$String(converter, "converter");
            this.set_Separator(separator);
            this.set_Converter(converter);
        },
        Separator$$: "System.String",
        get_Separator: function (){
            return this._Separator;
        },
        set_Separator: function (value){
            this._Separator = value;
        },
        Converter$$: "Neptuo.PresentationModels.Binding.Converters.BindingConverterBase`1[[`0]]",
        get_Converter: function (){
            return this._Converter;
        },
        set_Converter: function (value){
            this._Converter = value;
        },
        TryConvertTo: function (sourceValue, targetField, targetValue){
            if (System.String.IsNullOrEmpty(sourceValue)){
                targetValue.Value = null;
                return true;
            }
            var parts = sourceValue.Split$$String$Array$$StringSplitOptions([this.get_Separator()], 1);
            var result = new System.Collections.Generic.List$1.ctor(this.T);
            var $it2 = parts.GetEnumerator();
            while ($it2.MoveNext()){
                var part = $it2.get_Current();
                var notNullValue;
                if ((function (){
                    var $1 = {
                        Value: notNullValue
                    };
                    var $res = this.get_Converter().TryConvertTo(part, targetField, $1);
                    notNullValue = $1.Value;
                    return $res;
                }).call(this))
                    result.Add(notNullValue);
            }
            targetValue.Value = result;
            return true;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.String", "Neptuo.PresentationModels.Binding.Converters.BindingConverterBase"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Binding$Converters$ListBindingConverter$1);
var Neptuo$PresentationModels$Binding$Converters$NullBindingConverter$1 = {
    fullname: "Neptuo.PresentationModels.Binding.Converters.NullBindingConverter$1",
    baseTypeName: "Neptuo.PresentationModels.Binding.Converters.BindingConverterBase$1",
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Class",
    definition: {
        ctor: function (T, converter){
            this.T = T;
            this._Converter = null;
            Neptuo.PresentationModels.Binding.Converters.BindingConverterBase$1.ctor.call(this, System.Nullable$1.ctor);
            Neptuo.Ensure.NotNull$$Object$$String(converter, "converter");
            this.set_Converter(converter);
        },
        Converter$$: "Neptuo.PresentationModels.Binding.Converters.BindingConverterBase`1[[`0]]",
        get_Converter: function (){
            return this._Converter;
        },
        set_Converter: function (value){
            this._Converter = value;
        },
        TryConvertTo: function (sourceValue, targetField, targetValue){
            if (System.String.IsNullOrEmpty(sourceValue)){
                targetValue.Value = null;
                return true;
            }
            var notNullValue;
            if ((function (){
                var $1 = {
                    Value: notNullValue
                };
                var $res = this.get_Converter().TryConvertTo(sourceValue, targetField, $1);
                notNullValue = $1.Value;
                return $res;
            }).call(this)){
                targetValue.Value = notNullValue;
                return true;
            }
            targetValue.Value = null;
            return false;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["Neptuo.PresentationModels.Binding.Converters.BindingConverterBase"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Binding$Converters$NullBindingConverter$1);
var Neptuo$PresentationModels$Binding$IBindingConverter = {
    fullname: "Neptuo.PresentationModels.Binding.IBindingConverter",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Binding$IBindingConverter);
var Neptuo$PresentationModels$Binding$IBindingConverterCollection = {
    fullname: "Neptuo.PresentationModels.Binding.IBindingConverterCollection",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Binding$IBindingConverterCollection);
var Neptuo$PresentationModels$Binding$IBindingModelValueStorage = {
    fullname: "Neptuo.PresentationModels.Binding.IBindingModelValueStorage",
    baseTypeName: "System.Object",
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Interface",
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Binding$IBindingModelValueStorage);
var Neptuo$PresentationModels$Binding$Converters$StringBindingConverter = {
    fullname: "Neptuo.PresentationModels.Binding.Converters.StringBindingConverter",
    baseTypeName: "Neptuo.PresentationModels.Binding.Converters.BindingConverterBase$1",
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Class",
    definition: {
        ctor: function (allowConvertNull, allowConvertEmpty, allowConvertWhitespace){
            this._AllowConvertNull = false;
            this._AllowConvertEmpty = false;
            this._AllowConvertWhitespace = false;
            Neptuo.PresentationModels.Binding.Converters.BindingConverterBase$1.ctor.call(this, System.String.ctor);
            this.set_AllowConvertNull(allowConvertNull);
            this.set_AllowConvertEmpty(allowConvertEmpty);
            this.set_AllowConvertWhitespace(allowConvertWhitespace);
        },
        AllowConvertNull$$: "System.Boolean",
        get_AllowConvertNull: function (){
            return this._AllowConvertNull;
        },
        set_AllowConvertNull: function (value){
            this._AllowConvertNull = value;
        },
        AllowConvertEmpty$$: "System.Boolean",
        get_AllowConvertEmpty: function (){
            return this._AllowConvertEmpty;
        },
        set_AllowConvertEmpty: function (value){
            this._AllowConvertEmpty = value;
        },
        AllowConvertWhitespace$$: "System.Boolean",
        get_AllowConvertWhitespace: function (){
            return this._AllowConvertWhitespace;
        },
        set_AllowConvertWhitespace: function (value){
            this._AllowConvertWhitespace = value;
        },
        TryConvertTo: function (sourceValue, targetField, targetValue){
            if (!this.get_AllowConvertNull() && sourceValue == null){
                targetValue.Value = null;
                return false;
            }
            if (!this.get_AllowConvertEmpty() && System.String.IsNullOrEmpty(sourceValue)){
                targetValue.Value = null;
                return false;
            }
            if (!this.get_AllowConvertWhitespace() && System.String.IsNullOrWhiteSpace(sourceValue)){
                targetValue.Value = null;
                return false;
            }
            targetValue.Value = sourceValue;
            return true;
        }
    },
    ctors: [{
        name: "ctor",
        parameters: ["System.Boolean", "System.Boolean", "System.Boolean"]
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$Binding$Converters$StringBindingConverter);
var Neptuo$PresentationModels$Binding$VersionInfo = {
    fullname: "Neptuo.PresentationModels.Binding.VersionInfo",
    baseTypeName: "System.Object",
    staticDefinition: {
        cctor: function (){
            Neptuo.PresentationModels.Binding.VersionInfo.Version = "6.0.0";
        },
        GetVersion: function (){
            return new System.Version.ctor$$String("6.0.0");
        }
    },
    assemblyName: "Neptuo.PresentationModels.Binding",
    Kind: "Class",
    definition: {
        ctor: function (){
            System.Object.ctor.call(this);
        }
    },
    ctors: [],
    IsAbstract: true
};
JsTypes.push(Neptuo$PresentationModels$Binding$VersionInfo);

