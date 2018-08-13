!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports","./parser/htmlScanner","./parser/htmlParser","./services/htmlCompletion","./services/htmlHover","./services/htmlLinks","./services/htmlHighlighting","./services/htmlSymbolsProvider","vscode-languageserver-types"],t)}(function(t,e){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";function n(){return{createScanner:i.createScanner,parseHTMLDocument:function(t){return o.parse(t.getText())},doComplete:r.doComplete,doHover:a.doHover,findDocumentHighlights:s.findDocumentHighlights,findDocumentLinks:m.findDocumentLinks,findDocumentSymbols:g.findDocumentSymbols,doTagComplete:r.doTagComplete}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("./parser/htmlScanner"),o=t("./parser/htmlParser"),r=t("./services/htmlCompletion"),a=t("./services/htmlHover"),m=t("./services/htmlLinks"),s=t("./services/htmlHighlighting"),g=t("./services/htmlSymbolsProvider"),l=t("vscode-languageserver-types");e.TextDocument=l.TextDocument,e.Position=l.Position,e.CompletionItem=l.CompletionItem,e.CompletionList=l.CompletionList,e.Range=l.Range,e.SymbolInformation=l.SymbolInformation,e.Diagnostic=l.Diagnostic,e.TextEdit=l.TextEdit,e.DocumentHighlight=l.DocumentHighlight,e.FormattingOptions=l.FormattingOptions,e.MarkedString=l.MarkedString,e.DocumentLink=l.DocumentLink;!function(t){t[t.StartCommentTag=0]="StartCommentTag",t[t.Comment=1]="Comment",t[t.EndCommentTag=2]="EndCommentTag",t[t.StartTagOpen=3]="StartTagOpen",t[t.StartTagClose=4]="StartTagClose",t[t.StartTagSelfClose=5]="StartTagSelfClose",t[t.StartTag=6]="StartTag",t[t.EndTagOpen=7]="EndTagOpen",t[t.EndTagClose=8]="EndTagClose",t[t.EndTag=9]="EndTag",t[t.DelimiterAssign=10]="DelimiterAssign",t[t.AttributeName=11]="AttributeName",t[t.AttributeValue=12]="AttributeValue",t[t.StartDoctypeTag=13]="StartDoctypeTag",t[t.Doctype=14]="Doctype",t[t.EndDoctypeTag=15]="EndDoctypeTag",t[t.Content=16]="Content",t[t.Whitespace=17]="Whitespace",t[t.Unknown=18]="Unknown",t[t.Script=19]="Script",t[t.Styles=20]="Styles",t[t.EOS=21]="EOS"}(e.TokenType||(e.TokenType={}));!function(t){t[t.WithinContent=0]="WithinContent",t[t.AfterOpeningStartTag=1]="AfterOpeningStartTag",t[t.AfterOpeningEndTag=2]="AfterOpeningEndTag",t[t.WithinDoctype=3]="WithinDoctype",t[t.WithinTag=4]="WithinTag",t[t.WithinEndTag=5]="WithinEndTag",t[t.WithinComment=6]="WithinComment",t[t.WithinScriptContent=7]="WithinScriptContent",t[t.WithinStyleContent=8]="WithinStyleContent",t[t.AfterAttributeName=9]="AfterAttributeName",t[t.BeforeAttributeValue=10]="BeforeAttributeValue"}(e.ScannerState||(e.ScannerState={})),e.getLanguageService=n});