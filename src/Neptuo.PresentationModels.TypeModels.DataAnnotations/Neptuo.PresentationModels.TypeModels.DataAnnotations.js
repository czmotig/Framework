/* Generated by SharpKit 5 v5.4.4 */

if (typeof(JsTypes) == "undefined")
    var JsTypes = [];
var Neptuo$PresentationModels$TypeModels$DataAnnotations$CompareMetadataReader = {
    fullname: "Neptuo.PresentationModels.TypeModels.DataAnnotations.CompareMetadataReader",
    baseTypeName: "Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1",
    assemblyName: "Neptuo.PresentationModels.TypeModels.DataAnnotations",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1.ctor.call(this, System.ComponentModel.DataAnnotations.CompareAttribute.ctor);
        },
        ApplyInternal: function (attribute, builder){
            builder.Add("MatchProperty", attribute.get_OtherProperty());
            builder.Add("MatchProperty.ErrorMessage", attribute.get_ErrorMessage());
            builder.Add("MatchProperty.Attribute", attribute);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$DataAnnotations$CompareMetadataReader);
var Neptuo$PresentationModels$TypeModels$DataAnnotations$DataTypeMetadataReader = {
    fullname: "Neptuo.PresentationModels.TypeModels.DataAnnotations.DataTypeMetadataReader",
    baseTypeName: "Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1",
    assemblyName: "Neptuo.PresentationModels.TypeModels.DataAnnotations",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1.ctor.call(this, System.ComponentModel.DataAnnotations.DataTypeAttribute.ctor);
        },
        ApplyInternal: function (attribute, builder){
            builder.Add("DataType", attribute.get_DataType());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$DataAnnotations$DataTypeMetadataReader);
var Neptuo$PresentationModels$TypeModels$DataAnnotations$DefaultValueMetadataReader = {
    fullname: "Neptuo.PresentationModels.TypeModels.DataAnnotations.DefaultValueMetadataReader",
    baseTypeName: "Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1",
    assemblyName: "Neptuo.PresentationModels.TypeModels.DataAnnotations",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1.ctor.call(this, System.ComponentModel.DefaultValueAttribute.ctor);
        },
        ApplyInternal: function (attribute, builder){
            builder.Add("DefaultValue", attribute.get_Value());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$DataAnnotations$DefaultValueMetadataReader);
var Neptuo$PresentationModels$TypeModels$DataAnnotations$DescriptionMetadataReader = {
    fullname: "Neptuo.PresentationModels.TypeModels.DataAnnotations.DescriptionMetadataReader",
    baseTypeName: "Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1",
    assemblyName: "Neptuo.PresentationModels.TypeModels.DataAnnotations",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1.ctor.call(this, System.ComponentModel.DescriptionAttribute.ctor);
        },
        ApplyInternal: function (attribute, builder){
            if (!Neptuo.Collections.Specialized._ReadOnlyKeyValueCollectionExtensions.Has(builder, "Description"))
                builder.Add("Description", attribute.get_Description());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$DataAnnotations$DescriptionMetadataReader);
var Neptuo$PresentationModels$TypeModels$DataAnnotations$DisplayMetadataReader = {
    fullname: "Neptuo.PresentationModels.TypeModels.DataAnnotations.DisplayMetadataReader",
    baseTypeName: "Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1",
    assemblyName: "Neptuo.PresentationModels.TypeModels.DataAnnotations",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1.ctor.call(this, System.ComponentModel.DataAnnotations.DisplayAttribute.ctor);
        },
        ApplyInternal: function (attribute, builder){
            builder.Add("Display.Name", attribute.get_Name());
            builder.Add("Display.ShortName", attribute.get_ShortName());
            if (!Neptuo.Collections.Specialized._ReadOnlyKeyValueCollectionExtensions.Has(builder, "Description"))
                builder.Add("Description", attribute.get_Description());
            builder.Add("Display.Order", attribute.get_Order());
            builder.Add("Display.Watermark", attribute.get_Prompt());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$DataAnnotations$DisplayMetadataReader);
var Neptuo$PresentationModels$TypeModels$DataAnnotations$RequiredMetadataReader = {
    fullname: "Neptuo.PresentationModels.TypeModels.DataAnnotations.RequiredMetadataReader",
    baseTypeName: "Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1",
    assemblyName: "Neptuo.PresentationModels.TypeModels.DataAnnotations",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1.ctor.call(this, System.ComponentModel.DataAnnotations.RequiredAttribute.ctor);
        },
        ApplyInternal: function (attribute, builder){
            builder.Add("Required", true);
            builder.Add("Required.AllowEmptyStrings", attribute.get_AllowEmptyStrings());
            builder.Add("Required.ErrorMessage", attribute.get_ErrorMessage());
            builder.Add("Required.Attribute", attribute);
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$DataAnnotations$RequiredMetadataReader);
var Neptuo$PresentationModels$TypeModels$DataAnnotations$StringLengthMetadataReader = {
    fullname: "Neptuo.PresentationModels.TypeModels.DataAnnotations.StringLengthMetadataReader",
    baseTypeName: "Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1",
    assemblyName: "Neptuo.PresentationModels.TypeModels.DataAnnotations",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.TypeModels.AttributeMetadataReaderBase$1.ctor.call(this, System.ComponentModel.DataAnnotations.StringLengthAttribute.ctor);
        },
        ApplyInternal: function (attribute, builder){
            builder.Add("StringLength.ErrorMessage", attribute.get_ErrorMessage());
            builder.Add("StringLength.Minimum", attribute.get_MinimumLength());
            builder.Add("StringLength.Maximum", attribute.get_MaximumLength());
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$DataAnnotations$StringLengthMetadataReader);
var Neptuo$PresentationModels$TypeModels$DataAnnotations$Validators$MatchPropertyMetadataValidator = {
    fullname: "Neptuo.PresentationModels.TypeModels.DataAnnotations.Validators.MatchPropertyMetadataValidator",
    baseTypeName: "Neptuo.PresentationModels.Validators.FieldMetadataValidatorBase$2",
    assemblyName: "Neptuo.PresentationModels.TypeModels.DataAnnotations",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.Validators.FieldMetadataValidatorBase$2.ctor.call(this, System.String.ctor, System.Object.ctor, "MatchProperty");
        },
        Validate$$Object$$String$$FieldMetadataValidatorContext: function (fieldValue, metadataValue, context){
            var errorMessage = Neptuo.Collections.Specialized._ReadOnlyKeyValueCollectionExtensions.Get$1$$IReadOnlyKeyValueCollection$$String$$T(System.String.ctor, context.get_FieldDefinition().get_Metadata(), "MatchProperty.ErrorMessage", System.String.Format$$String$$Object$$Object("\'{0}\' and \'{1}\' must match!", context.get_FieldDefinition().get_Identifier(), metadataValue));
            var otherProperty = null;
            if ((function (){
                var $1 = {
                    Value: otherProperty
                };
                var $res = context.get_Getter().TryGetValue(metadataValue, $1);
                otherProperty = $1.Value;
                return $res;
            }).call(this)){
                if ((fieldValue == null && otherProperty != null) || !fieldValue.Equals$$Object(otherProperty))
                    Neptuo.Pipelines.Validators._ValidationResultBuilderExtensions.AddTextMessage(context.get_ResultBuilder(), context.get_FieldDefinition().get_Identifier(), errorMessage);
            }
            else {
                if (fieldValue != null)
                    Neptuo.Pipelines.Validators._ValidationResultBuilderExtensions.AddTextMessage(context.get_ResultBuilder(), context.get_FieldDefinition().get_Identifier(), errorMessage);
            }
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$DataAnnotations$Validators$MatchPropertyMetadataValidator);
var Neptuo$PresentationModels$TypeModels$DataAnnotations$Validators$RequiredMetadataValidator = {
    fullname: "Neptuo.PresentationModels.TypeModels.DataAnnotations.Validators.RequiredMetadataValidator",
    baseTypeName: "Neptuo.PresentationModels.Validators.FieldMetadataValidatorBase$2",
    assemblyName: "Neptuo.PresentationModels.TypeModels.DataAnnotations",
    Kind: "Class",
    definition: {
        ctor: function (){
            Neptuo.PresentationModels.Validators.FieldMetadataValidatorBase$2.ctor.call(this, System.Boolean.ctor, System.Object.ctor, "Required");
        },
        Validate$$Object$$Boolean$$FieldMetadataValidatorContext: function (fieldValue, metadataValue, context){
            if (fieldValue == null){
                context.get_ResultBuilder().Add$$IValidationMessage(new Neptuo.Pipelines.Validators.Messages.TextValidationMessage.ctor(context.get_FieldDefinition().get_Identifier(), Neptuo.Collections.Specialized._ReadOnlyKeyValueCollectionExtensions.Get$1$$IReadOnlyKeyValueCollection$$String$$T(System.String.ctor, context.get_FieldDefinition().get_Metadata(), "Required.ErrorMessage", System.String.Format$$String$$Object("Missing value for required field \'{0}\'!", context.get_FieldDefinition().get_Identifier()))));
                return;
            }
            var targetValue = fieldValue.ToString();
            if (!Neptuo.Collections.Specialized._ReadOnlyKeyValueCollectionExtensions.Get$1$$IReadOnlyKeyValueCollection$$String$$T(System.Boolean.ctor, context.get_FieldDefinition().get_Metadata(), "Required.AllowEmptyStrings", false) && System.String.IsNullOrEmpty(targetValue)){
                context.get_ResultBuilder().Add$$IValidationMessage(new Neptuo.Pipelines.Validators.Messages.TextValidationMessage.ctor(context.get_FieldDefinition().get_Identifier(), Neptuo.Collections.Specialized._ReadOnlyKeyValueCollectionExtensions.Get$1$$IReadOnlyKeyValueCollection$$String$$T(System.String.ctor, context.get_FieldDefinition().get_Metadata(), "Required.ErrorMessage", System.String.Format$$String$$Object("Missing value for required field \'{0}\'!", context.get_FieldDefinition().get_Identifier()))));
            }
        }
    },
    ctors: [{
        name: "ctor",
        parameters: []
    }
    ],
    IsAbstract: false
};
JsTypes.push(Neptuo$PresentationModels$TypeModels$DataAnnotations$Validators$RequiredMetadataValidator);

