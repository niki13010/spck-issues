var __extends=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports"],t)}(function(t,e){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";function r(t,e){var r=null;return!t||e<t.offset||e>t.end?null:(t.accept(function(t){return-1===t.offset&&-1===t.length||t.offset<=e&&t.end>=e&&(r?t.length<=r.length&&(r=t):r=t,!0)}),r)}function n(t,e){for(var n=r(t,e),i=[];n;)i.unshift(n),n=n.parent;return i}function i(t){var e=t.findParent(o.Declaration);return e&&e.getValue()&&e.getValue().encloses(t)?e:null}Object.defineProperty(e,"__esModule",{value:!0});var o;!function(t){t[t.Undefined=0]="Undefined",t[t.Identifier=1]="Identifier",t[t.Stylesheet=2]="Stylesheet",t[t.Ruleset=3]="Ruleset",t[t.Selector=4]="Selector",t[t.SimpleSelector=5]="SimpleSelector",t[t.SelectorInterpolation=6]="SelectorInterpolation",t[t.SelectorCombinator=7]="SelectorCombinator",t[t.SelectorCombinatorParent=8]="SelectorCombinatorParent",t[t.SelectorCombinatorSibling=9]="SelectorCombinatorSibling",t[t.SelectorCombinatorAllSiblings=10]="SelectorCombinatorAllSiblings",t[t.SelectorCombinatorShadowPiercingDescendant=11]="SelectorCombinatorShadowPiercingDescendant",t[t.Page=12]="Page",t[t.PageBoxMarginBox=13]="PageBoxMarginBox",t[t.ClassSelector=14]="ClassSelector",t[t.IdentifierSelector=15]="IdentifierSelector",t[t.ElementNameSelector=16]="ElementNameSelector",t[t.PseudoSelector=17]="PseudoSelector",t[t.AttributeSelector=18]="AttributeSelector",t[t.Declaration=19]="Declaration",t[t.Declarations=20]="Declarations",t[t.Property=21]="Property",t[t.Expression=22]="Expression",t[t.BinaryExpression=23]="BinaryExpression",t[t.Term=24]="Term",t[t.Operator=25]="Operator",t[t.Value=26]="Value",t[t.StringLiteral=27]="StringLiteral",t[t.URILiteral=28]="URILiteral",t[t.EscapedValue=29]="EscapedValue",t[t.Function=30]="Function",t[t.NumericValue=31]="NumericValue",t[t.HexColorValue=32]="HexColorValue",t[t.MixinDeclaration=33]="MixinDeclaration",t[t.MixinReference=34]="MixinReference",t[t.VariableName=35]="VariableName",t[t.VariableDeclaration=36]="VariableDeclaration",t[t.Prio=37]="Prio",t[t.Interpolation=38]="Interpolation",t[t.NestedProperties=39]="NestedProperties",t[t.ExtendsReference=40]="ExtendsReference",t[t.SelectorPlaceholder=41]="SelectorPlaceholder",t[t.Debug=42]="Debug",t[t.If=43]="If",t[t.Else=44]="Else",t[t.For=45]="For",t[t.Each=46]="Each",t[t.While=47]="While",t[t.MixinContent=48]="MixinContent",t[t.Media=49]="Media",t[t.Keyframe=50]="Keyframe",t[t.FontFace=51]="FontFace",t[t.Import=52]="Import",t[t.Namespace=53]="Namespace",t[t.Invocation=54]="Invocation",t[t.FunctionDeclaration=55]="FunctionDeclaration",t[t.ReturnStatement=56]="ReturnStatement",t[t.MediaQuery=57]="MediaQuery",t[t.FunctionParameter=58]="FunctionParameter",t[t.FunctionArgument=59]="FunctionArgument",t[t.KeyframeSelector=60]="KeyframeSelector",t[t.ViewPort=61]="ViewPort",t[t.Document=62]="Document",t[t.AtApplyRule=63]="AtApplyRule",t[t.CustomPropertyDeclaration=64]="CustomPropertyDeclaration",t[t.CustomPropertySet=65]="CustomPropertySet",t[t.ListEntry=66]="ListEntry",t[t.Supports=67]="Supports",t[t.SupportsCondition=68]="SupportsCondition",t[t.NamespacePrefix=69]="NamespacePrefix",t[t.GridLine=70]="GridLine"}(o=e.NodeType||(e.NodeType={}));!function(t){t[t.Mixin=0]="Mixin",t[t.Rule=1]="Rule",t[t.Variable=2]="Variable",t[t.Function=3]="Function",t[t.Keyframe=4]="Keyframe",t[t.Unknown=5]="Unknown"}(e.ReferenceType||(e.ReferenceType={})),e.getNodeAtOffset=r,e.getNodePath=n,e.getParentDeclaration=i;var u=function(){function t(t,e,r){void 0===t&&(t=-1),void 0===e&&(e=-1),this.parent=null,this.offset=t,this.length=e,r&&(this.nodeType=r)}return Object.defineProperty(t.prototype,"end",{get:function(){return this.offset+this.length},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this.nodeType||o.Undefined},set:function(t){this.nodeType=t},enumerable:!0,configurable:!0}),t.prototype.getTextProvider=function(){for(var t=this;t&&!t.textProvider;)t=t.parent;return t?t.textProvider:function(){return"unknown"}},t.prototype.getText=function(){return this.getTextProvider()(this.offset,this.length)},t.prototype.matches=function(t){return this.length===t.length&&this.getTextProvider()(this.offset,this.length)===t},t.prototype.startsWith=function(t){return this.length>=t.length&&this.getTextProvider()(this.offset,t.length)===t},t.prototype.endsWith=function(t){return this.length>=t.length&&this.getTextProvider()(this.end-t.length,t.length)===t},t.prototype.accept=function(t){if(t(this)&&this.children)for(var e=0,r=this.children;e<r.length;e++){var n=r[e];n.accept(t)}},t.prototype.acceptVisitor=function(t){this.accept(t.visitNode.bind(t))},t.prototype.adoptChild=function(t,e){if(void 0===e&&(e=-1),t.parent&&t.parent.children){var r=t.parent.children.indexOf(t);r>=0&&t.parent.children.splice(r,1)}t.parent=this;var n=this.children;return n||(n=this.children=[]),-1!==e?n.splice(e,0,t):n.push(t),t},t.prototype.attachTo=function(t,e){return void 0===e&&(e=-1),t&&t.adoptChild(this,e),this},t.prototype.collectIssues=function(t){this.issues&&t.push.apply(t,this.issues)},t.prototype.addIssue=function(t){this.issues||(this.issues=[]),this.issues.push(t)},t.prototype.hasIssue=function(t){return this.issues&&this.issues.some(function(e){return e.getRule()===t})},t.prototype.isErroneous=function(t){return void 0===t&&(t=!1),!!(this.issues&&this.issues.length>0)||t&&this.children&&this.children.some(function(t){return t.isErroneous(!0)})},t.prototype.setNode=function(t,e,r){return void 0===r&&(r=-1),!!e&&(e.attachTo(this,r),this[t]=e,!0)},t.prototype.addChild=function(t){return!!t&&(this.children||(this.children=[]),t.attachTo(this),this.updateOffsetAndLength(t),!0)},t.prototype.updateOffsetAndLength=function(t){(t.offset<this.offset||-1===this.offset)&&(this.offset=t.offset);var e=t.end;(e>this.end||-1===this.length)&&(this.length=e-this.offset)},t.prototype.hasChildren=function(){return this.children&&this.children.length>0},t.prototype.getChildren=function(){return this.children?this.children.slice(0):[]},t.prototype.getChild=function(t){return this.children&&t<this.children.length?this.children[t]:null},t.prototype.addChildren=function(t){for(var e=0,r=t;e<r.length;e++){var n=r[e];this.addChild(n)}},t.prototype.findFirstChildBeforeOffset=function(t){if(this.children)for(var e=null,r=this.children.length-1;r>=0;r--)if(e=this.children[r],e.offset<=t)return e;return null},t.prototype.findChildAtOffset=function(t,e){var r=this.findFirstChildBeforeOffset(t);return r&&r.end>=t?e?r.findChildAtOffset(t,!0)||r:r:null},t.prototype.encloses=function(t){return this.offset<=t.offset&&this.offset+this.length>=t.offset+t.length},t.prototype.getParent=function(){for(var t=this.parent;t instanceof s;)t=t.parent;return t},t.prototype.findParent=function(t){for(var e=this;e&&e.type!==t;)e=e.parent;return e},t.prototype.setData=function(t,e){this.options||(this.options={}),this.options[t]=e},t.prototype.getData=function(t){return this.options&&this.options.hasOwnProperty(t)?this.options[t]:null},t}();e.Node=u;var s=function(t){function e(e,r){void 0===r&&(r=-1);var n=t.call(this,-1,-1)||this;return n.attachTo(e,r),n.offset=-1,n.length=-1,n}return __extends(e,t),e}(u);e.Nodelist=s;var c=function(t){function e(e,r){var n=t.call(this,e,r)||this;return n.isCustomProperty=!1,n}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Identifier},enumerable:!0,configurable:!0}),e.prototype.containsInterpolation=function(){return this.hasChildren()},e}(u);e.Identifier=c;var a=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Stylesheet},enumerable:!0,configurable:!0}),e.prototype.setName=function(t){this.name=t},e}(u);e.Stylesheet=a;var p=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Declarations},enumerable:!0,configurable:!0}),e}(u);e.Declarations=p;var f=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),e.prototype.getDeclarations=function(){return this.declarations},e.prototype.setDeclarations=function(t){return this.setNode("declarations",t)},e}(u);e.BodyDeclaration=f;var l=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Ruleset},enumerable:!0,configurable:!0}),e.prototype.getSelectors=function(){return this.selectors||(this.selectors=new s(this)),this.selectors},e.prototype.isNested=function(){return this.parent&&null!==this.parent.findParent(o.Declarations)},e}(f);e.RuleSet=l;var h=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Selector},enumerable:!0,configurable:!0}),e}(u);e.Selector=h;var d=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.SimpleSelector},enumerable:!0,configurable:!0}),e}(u);e.SimpleSelector=d;var y=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.AtApplyRule},enumerable:!0,configurable:!0}),e.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},e.prototype.getIdentifier=function(){return this.identifier},e.prototype.getName=function(){return this.identifier?this.identifier.getText():""},e}(u);e.AtApplyRule=y;var g=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),e}(u);e.AbstractDeclaration=g;var b=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.CustomPropertyDeclaration},enumerable:!0,configurable:!0}),e.prototype.setProperty=function(t){return this.setNode("property",t)},e.prototype.getProperty=function(){return this.property},e.prototype.setValue=function(t){return this.setNode("value",t)},e.prototype.getValue=function(){return this.value},e.prototype.setPropertySet=function(t){return this.setNode("propertySet",t)},e.prototype.getPropertySet=function(){return this.propertySet},e}(g);e.CustomPropertyDeclaration=b;var m=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.CustomPropertySet},enumerable:!0,configurable:!0}),e}(f);e.CustomPropertySet=m;var P=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Declaration},enumerable:!0,configurable:!0}),e.prototype.setProperty=function(t){return this.setNode("property",t)},e.prototype.getProperty=function(){return this.property},e.prototype.getFullPropertyName=function(){var t=this.property?this.property.getName():"unknown";if(this.parent instanceof p&&this.parent.getParent()instanceof F){var r=this.parent.getParent().getParent();if(r instanceof e)return r.getFullPropertyName()+t}return t},e.prototype.getNonPrefixedPropertyName=function(){var t=this.getFullPropertyName();if(t&&"-"===t.charAt(0)){var e=t.indexOf("-",1);if(-1!==e)return t.substring(e+1)}return t},e.prototype.setValue=function(t){return this.setNode("value",t)},e.prototype.getValue=function(){return this.value},e.prototype.setNestedProperties=function(t){return this.setNode("nestedProprties",t)},e.prototype.getNestedProperties=function(){return this.nestedProprties},e}(g);e.Declaration=P;var x=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Property},enumerable:!0,configurable:!0}),e.prototype.setIdentifier=function(t){return this.setNode("identifier",t)},e.prototype.getIdentifier=function(){return this.identifier},e.prototype.getName=function(){return this.getText()},e.prototype.isCustomProperty=function(){return this.identifier.isCustomProperty},e}(u);e.Property=x;var v=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Invocation},enumerable:!0,configurable:!0}),e.prototype.getArguments=function(){return this.arguments||(this.arguments=new s(this)),this.arguments},e}(u);e.Invocation=v;var _=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Function},enumerable:!0,configurable:!0}),e.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},e.prototype.getIdentifier=function(){return this.identifier},e.prototype.getName=function(){return this.identifier?this.identifier.getText():""},e}(v);e.Function=_;var N=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.FunctionParameter},enumerable:!0,configurable:!0}),e.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},e.prototype.getIdentifier=function(){return this.identifier},e.prototype.getName=function(){return this.identifier?this.identifier.getText():""},e.prototype.setDefaultValue=function(t){return this.setNode("defaultValue",t,0)},e.prototype.getDefaultValue=function(){return this.defaultValue},e}(u);e.FunctionParameter=N;var S=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.FunctionArgument},enumerable:!0,configurable:!0}),e.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},e.prototype.getIdentifier=function(){return this.identifier},e.prototype.getName=function(){return this.identifier?this.identifier.getText():""},e.prototype.setValue=function(t){return this.setNode("value",t,0)},e.prototype.getValue=function(){return this.value},e}(u);e.FunctionArgument=S;var O=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.If},enumerable:!0,configurable:!0}),e.prototype.setExpression=function(t){return this.setNode("expression",t,0)},e.prototype.setElseClause=function(t){return this.setNode("elseClause",t)},e}(f);e.IfStatement=O;var C=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.For},enumerable:!0,configurable:!0}),e.prototype.setVariable=function(t){return this.setNode("variable",t,0)},e}(f);e.ForStatement=C;var j=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Each},enumerable:!0,configurable:!0}),e.prototype.getVariables=function(){return this.variables||(this.variables=new s(this)),this.variables},e}(f);e.EachStatement=j;var I=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.While},enumerable:!0,configurable:!0}),e}(f);e.WhileStatement=I;var V=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Else},enumerable:!0,configurable:!0}),e}(f);e.ElseStatement=V;var D=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.FunctionDeclaration},enumerable:!0,configurable:!0}),e.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},e.prototype.getIdentifier=function(){return this.identifier},e.prototype.getName=function(){return this.identifier?this.identifier.getText():""},e.prototype.getParameters=function(){return this.parameters||(this.parameters=new s(this)),this.parameters},e}(f);e.FunctionDeclaration=D;var E=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.ViewPort},enumerable:!0,configurable:!0}),e}(f);e.ViewPort=E;var T=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.FontFace},enumerable:!0,configurable:!0}),e}(f);e.FontFace=T;var F=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.NestedProperties},enumerable:!0,configurable:!0}),e}(f);e.NestedProperties=F;var A=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Keyframe},enumerable:!0,configurable:!0}),e.prototype.setKeyword=function(t){return this.setNode("keyword",t,0)},e.prototype.getKeyword=function(){return this.keyword},e.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},e.prototype.getIdentifier=function(){return this.identifier},e.prototype.getName=function(){return this.identifier?this.identifier.getText():""},e}(f);e.Keyframe=A;var M=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.KeyframeSelector},enumerable:!0,configurable:!0}),e}(f);e.KeyframeSelector=M;var w=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Import},enumerable:!0,configurable:!0}),e.prototype.setMedialist=function(t){return!!t&&(t.attachTo(this),this.medialist=t,!0)},e}(u);e.Import=w;var R=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Namespace},enumerable:!0,configurable:!0}),e}(u);e.Namespace=R;var L=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Media},enumerable:!0,configurable:!0}),e}(f);e.Media=L;var B=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Supports},enumerable:!0,configurable:!0}),e}(f);e.Supports=B;var K=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Document},enumerable:!0,configurable:!0}),e}(f);e.Document=K;var W=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),e.prototype.getMediums=function(){return this.mediums||(this.mediums=new s(this)),this.mediums},e}(u);e.Medialist=W;var k=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.MediaQuery},enumerable:!0,configurable:!0}),e}(u);e.MediaQuery=k;var U=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.SupportsCondition},enumerable:!0,configurable:!0}),e}(u);e.SupportsCondition=U;var G=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Page},enumerable:!0,configurable:!0}),e}(f);e.Page=G;var H=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.PageBoxMarginBox},enumerable:!0,configurable:!0}),e}(f);e.PageBoxMarginBox=H;var Q=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Expression},enumerable:!0,configurable:!0}),e}(u);e.Expression=Q;var q=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.BinaryExpression},enumerable:!0,configurable:!0}),e.prototype.setLeft=function(t){return this.setNode("left",t)},e.prototype.getLeft=function(){return this.left},e.prototype.setRight=function(t){return this.setNode("right",t)},e.prototype.getRight=function(){return this.right},e.prototype.setOperator=function(t){return this.setNode("operator",t)},e.prototype.getOperator=function(){return this.operator},e}(u);e.BinaryExpression=q;var z=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Term},enumerable:!0,configurable:!0}),e.prototype.setOperator=function(t){return this.setNode("operator",t)},e.prototype.getOperator=function(){return this.operator},e.prototype.setExpression=function(t){return this.setNode("expression",t)},e.prototype.getExpression=function(){return this.expression},e}(u);e.Term=z;var J=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.AttributeSelector},enumerable:!0,configurable:!0}),e.prototype.setExpression=function(t){return this.setNode("expression",t)},e.prototype.getExpression=function(){return this.expression},e.prototype.setNamespacePrefix=function(t){return this.setNode("namespacePrefix",t)},e.prototype.getNamespacePrefix=function(){return this.namespacePrefix},e}(u);e.AttributeSelector=J;var X=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Operator},enumerable:!0,configurable:!0}),e}(u);e.Operator=X;var Y=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.HexColorValue},enumerable:!0,configurable:!0}),e}(u);e.HexColorValue=Y;var Z=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.NumericValue},enumerable:!0,configurable:!0}),e.prototype.getValue=function(){for(var t,e=this.getText(),r=0,n=".".charCodeAt(0),i="0".charCodeAt(0),o="9".charCodeAt(0),u=0,s=e.length;u<s&&(t=e.charCodeAt(u),i<=t&&t<=o||t===n);u++)r+=1;return{value:e.substring(0,r),unit:r<e.length?e.substring(r):void 0}},e}(u);e.NumericValue=Z;var $=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.VariableDeclaration},enumerable:!0,configurable:!0}),e.prototype.setVariable=function(t){return!!t&&(t.attachTo(this),this.variable=t,!0)},e.prototype.getVariable=function(){return this.variable},e.prototype.getName=function(){return this.variable?this.variable.getName():""},e.prototype.setValue=function(t){return!!t&&(t.attachTo(this),this.value=t,!0)},e.prototype.getValue=function(){return this.value},e}(g);e.VariableDeclaration=$;var tt=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.Interpolation},enumerable:!0,configurable:!0}),e}(u);e.Interpolation=tt;var et=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.VariableName},enumerable:!0,configurable:!0}),e.prototype.getName=function(){return this.getText()},e}(u);e.Variable=et;var rt=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.ExtendsReference},enumerable:!0,configurable:!0}),e.prototype.getSelectors=function(){return this.selectors||(this.selectors=new s(this)),this.selectors},e}(u);e.ExtendsReference=rt;var nt=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.MixinReference},enumerable:!0,configurable:!0}),e.prototype.getNamespaces=function(){return this.namespaces||(this.namespaces=new s(this)),this.namespaces},e.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},e.prototype.getIdentifier=function(){return this.identifier},e.prototype.getName=function(){return this.identifier?this.identifier.getText():""},e.prototype.getArguments=function(){return this.arguments||(this.arguments=new s(this)),this.arguments},e.prototype.setContent=function(t){return this.setNode("content",t)},e.prototype.getContent=function(){return this.content},e}(u);e.MixinReference=nt;var it=function(t){function e(e,r){return t.call(this,e,r)||this}return __extends(e,t),Object.defineProperty(e.prototype,"type",{get:function(){return o.MixinDeclaration},enumerable:!0,configurable:!0}),e.prototype.setIdentifier=function(t){return this.setNode("identifier",t,0)},e.prototype.getIdentifier=function(){return this.identifier},e.prototype.getName=function(){return this.identifier?this.identifier.getText():""},e.prototype.getParameters=function(){return this.parameters||(this.parameters=new s(this)),this.parameters},e.prototype.setGuard=function(t){return t&&(t.attachTo(this),this.guard=t),!1},e}(f);e.MixinDeclaration=it;var ot=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.getConditions=function(){return this.conditions||(this.conditions=new s(this)),this.conditions},e}(u);e.LessGuard=ot;var ut=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return __extends(e,t),e.prototype.setVariable=function(t){return this.setNode("variable",t)},e}(u);e.GuardCondition=ut;!function(t){t[t.Ignore=1]="Ignore",t[t.Warning=2]="Warning",t[t.Error=4]="Error"}(e.Level||(e.Level={}));var st=function(){function t(t,e,r,n,i,o){void 0===i&&(i=t.offset),void 0===o&&(o=t.length),this.node=t,this.rule=e,this.level=r,this.message=n||e.message,this.offset=i,this.length=o}return t.prototype.getRule=function(){return this.rule},t.prototype.getLevel=function(){return this.level},t.prototype.getOffset=function(){return this.offset},t.prototype.getLength=function(){return this.length},t.prototype.getNode=function(){return this.node},t.prototype.getMessage=function(){return this.message},t}();e.Marker=st;var ct=function(){function t(){this.entries=[]}return t.entries=function(e){var r=new t;return e.acceptVisitor(r),r.entries},t.prototype.visitNode=function(t){return t.isErroneous()&&t.collectIssues(this.entries),!0},t}();e.ParseErrorCollector=ct});