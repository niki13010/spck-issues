!function(e){if("object"==typeof module&&"object"==typeof module.exports){var o=e(require,exports);void 0!==o&&(module.exports=o)}else"function"==typeof define&&define.amd&&define(["require","exports"],e)}(function(e,o){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";function t(){var e={a:["asp-action","asp-controller","asp-fragment","asp-host","asp-protocol","asp-route"],div:["asp-validation-summary"],form:["asp-action","asp-controller","asp-anti-forgery"],input:["asp-for","asp-format"],label:["asp-for"],select:["asp-for","asp-items"],span:["asp-validation-for"]};return{getId:function(){return"razor"},isApplicable:function(e){return"razor"===e},collectTags:function(e){},collectAttributes:function(o,t){if(o){var r=e[o];r&&r.forEach(function(e){return t(e)})}},collectValues:function(e,o,t){}}}Object.defineProperty(o,"__esModule",{value:!0}),o.getRazorTagProvider=t});