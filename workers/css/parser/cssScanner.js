!function(t){if("object"==typeof module&&"object"==typeof module.exports){var e=t(require,exports);void 0!==e&&(module.exports=e)}else"function"==typeof define&&define.amd&&define(["require","exports"],t)}(function(t,e){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r;!function(t){t[t.Ident=0]="Ident",t[t.AtKeyword=1]="AtKeyword",t[t.String=2]="String",t[t.BadString=3]="BadString",t[t.UnquotedString=4]="UnquotedString",t[t.Hash=5]="Hash",t[t.Num=6]="Num",t[t.Percentage=7]="Percentage",t[t.Dimension=8]="Dimension",t[t.UnicodeRange=9]="UnicodeRange",t[t.CDO=10]="CDO",t[t.CDC=11]="CDC",t[t.Colon=12]="Colon",t[t.SemiColon=13]="SemiColon",t[t.CurlyL=14]="CurlyL",t[t.CurlyR=15]="CurlyR",t[t.ParenthesisL=16]="ParenthesisL",t[t.ParenthesisR=17]="ParenthesisR",t[t.BracketL=18]="BracketL",t[t.BracketR=19]="BracketR",t[t.Whitespace=20]="Whitespace",t[t.Includes=21]="Includes",t[t.Dashmatch=22]="Dashmatch",t[t.SubstringOperator=23]="SubstringOperator",t[t.PrefixOperator=24]="PrefixOperator",t[t.SuffixOperator=25]="SuffixOperator",t[t.Delim=26]="Delim",t[t.EMS=27]="EMS",t[t.EXS=28]="EXS",t[t.Length=29]="Length",t[t.Angle=30]="Angle",t[t.Time=31]="Time",t[t.Freq=32]="Freq",t[t.Exclamation=33]="Exclamation",t[t.Resolution=34]="Resolution",t[t.Comma=35]="Comma",t[t.Charset=36]="Charset",t[t.EscapedJavaScript=37]="EscapedJavaScript",t[t.BadEscapedJavaScript=38]="BadEscapedJavaScript",t[t.Comment=39]="Comment",t[t.SingleLineComment=40]="SingleLineComment",t[t.EOF=41]="EOF",t[t.CustomToken=42]="CustomToken"}(r=e.TokenType||(e.TokenType={}));var i=function(){function t(t){this.source=t,this.len=t.length,this.position=0}return t.prototype.substring=function(t,e){return void 0===e&&(e=this.position),this.source.substring(t,e)},t.prototype.eos=function(){return this.len<=this.position},t.prototype.pos=function(){return this.position},t.prototype.goBackTo=function(t){this.position=t},t.prototype.goBack=function(t){this.position-=t},t.prototype.advance=function(t){this.position+=t},t.prototype.nextChar=function(){return this.source.charCodeAt(this.position++)||0},t.prototype.peekChar=function(t){return void 0===t&&(t=0),this.source.charCodeAt(this.position+t)||0},t.prototype.lookbackChar=function(t){return void 0===t&&(t=0),this.source.charCodeAt(this.position-t)||0},t.prototype.advanceIfChar=function(t){return t===this.source.charCodeAt(this.position)&&(this.position++,!0)},t.prototype.advanceIfChars=function(t){var e;if(this.position+t.length>this.source.length)return!1;for(e=0;e<t.length;e++)if(this.source.charCodeAt(this.position+e)!==t[e])return!1;return this.advance(e),!0},t.prototype.advanceWhileChar=function(t){for(var e=this.position;this.position<this.len&&t(this.source.charCodeAt(this.position));)this.position++;return this.position-e},t}();e.MultiLineStream=i;var n="a".charCodeAt(0),s="f".charCodeAt(0),a="z".charCodeAt(0),o="A".charCodeAt(0),h="F".charCodeAt(0),c="Z".charCodeAt(0),u="0".charCodeAt(0),p="9".charCodeAt(0),C="~".charCodeAt(0),m="^".charCodeAt(0),d="=".charCodeAt(0),f="|".charCodeAt(0),v="-".charCodeAt(0),g="_".charCodeAt(0),k="%".charCodeAt(0),l="*".charCodeAt(0),A="(".charCodeAt(0),y=")".charCodeAt(0),S="<".charCodeAt(0),T=">".charCodeAt(0),_="@".charCodeAt(0),x="#".charCodeAt(0),L="$".charCodeAt(0),b="\\".charCodeAt(0),B="/".charCodeAt(0),D="\n".charCodeAt(0),I="\r".charCodeAt(0),E="\f".charCodeAt(0),O='"'.charCodeAt(0),R="'".charCodeAt(0),q=" ".charCodeAt(0),P="\t".charCodeAt(0),w=";".charCodeAt(0),F=":".charCodeAt(0),W="{".charCodeAt(0),j="}".charCodeAt(0),U="[".charCodeAt(0),M="]".charCodeAt(0),N=",".charCodeAt(0),J=".".charCodeAt(0),z="!".charCodeAt(0),H={};H[w]=r.SemiColon,H[F]=r.Colon,H[W]=r.CurlyL,H[j]=r.CurlyR,H[M]=r.BracketR,H[U]=r.BracketL,H[A]=r.ParenthesisL,H[y]=r.ParenthesisR,H[N]=r.Comma;var K={};K.em=r.EMS,K.ex=r.EXS,K.px=r.Length,K.cm=r.Length,K.mm=r.Length,K.in=r.Length,K.pt=r.Length,K.pc=r.Length,K.deg=r.Angle,K.rad=r.Angle,K.grad=r.Angle,K.ms=r.Time,K.s=r.Time,K.hz=r.Freq,K.khz=r.Freq,K["%"]=r.Percentage,K.dpi=r.Resolution,K.dpcm=r.Resolution;var X=function(){function t(){this.ignoreComment=!0,this.ignoreWhitespace=!0,this.inURL=!1}return t.prototype.setSource=function(t){this.stream=new i(t)},t.prototype.finishToken=function(t,e,r){return{offset:t,len:this.stream.pos()-t,type:e,text:r||this.stream.substring(t)}},t.prototype.substring=function(t,e){return this.stream.substring(t,t+e)},t.prototype.pos=function(){return this.stream.pos()},t.prototype.goBackTo=function(t){this.stream.goBackTo(t)},t.prototype.scanUnquotedString=function(){var t=this.stream.pos(),e=[];return this._unquotedString(e)?this.finishToken(t,r.UnquotedString,e.join("")):null},t.prototype.scan=function(){var t=this.trivia();if(null!==t)return t;var e=this.stream.pos();return this.stream.eos()?this.finishToken(e,r.EOF):this.scanNext(e)},t.prototype.scanNext=function(t){if(this.stream.advanceIfChars([S,z,v,v]))return this.finishToken(t,r.CDO);if(this.stream.advanceIfChars([v,v,T]))return this.finishToken(t,r.CDC);var e=[];if(this.ident(e))return this.finishToken(t,r.Ident,e.join(""));if(this.stream.advanceIfChar(_)){if(e=["@"],this._name(e)){var i=e.join("");return"@charset"===i?this.finishToken(t,r.Charset,i):this.finishToken(t,r.AtKeyword,i)}return this.finishToken(t,r.Delim)}if(this.stream.advanceIfChar(x))return e=["#"],this._name(e)?this.finishToken(t,r.Hash,e.join("")):this.finishToken(t,r.Delim);if(this.stream.advanceIfChar(z))return this.finishToken(t,r.Exclamation);if(this._number()){var n=this.stream.pos();if(e=[this.stream.substring(t,n)],this.stream.advanceIfChar(k))return this.finishToken(t,r.Percentage);if(this.ident(e)){var s=this.stream.substring(n).toLowerCase(),a=K[s];return void 0!==a?this.finishToken(t,a,e.join("")):this.finishToken(t,r.Dimension,e.join(""))}return this.finishToken(t,r.Num)}e=[];var o=this._string(e);return null!==o?this.finishToken(t,o,e.join("")):void 0!==(o=H[this.stream.peekChar()])?(this.stream.advance(1),this.finishToken(t,o)):this.stream.peekChar(0)===C&&this.stream.peekChar(1)===d?(this.stream.advance(2),this.finishToken(t,r.Includes)):this.stream.peekChar(0)===f&&this.stream.peekChar(1)===d?(this.stream.advance(2),this.finishToken(t,r.Dashmatch)):this.stream.peekChar(0)===l&&this.stream.peekChar(1)===d?(this.stream.advance(2),this.finishToken(t,r.SubstringOperator)):this.stream.peekChar(0)===m&&this.stream.peekChar(1)===d?(this.stream.advance(2),this.finishToken(t,r.PrefixOperator)):this.stream.peekChar(0)===L&&this.stream.peekChar(1)===d?(this.stream.advance(2),this.finishToken(t,r.SuffixOperator)):(this.stream.nextChar(),this.finishToken(t,r.Delim))},t.prototype._matchWordAnyCase=function(t){var e=0;return this.stream.advanceWhileChar(function(r){var i=t[e]===r||t[e+1]===r;return i&&(e+=2),i}),e===t.length||(this.stream.goBack(e/2),!1)},t.prototype.trivia=function(){for(;;){var t=this.stream.pos();if(this._whitespace()){if(!this.ignoreWhitespace)return this.finishToken(t,r.Whitespace)}else{if(!this.comment())return null;if(!this.ignoreComment)return this.finishToken(t,r.Comment)}}},t.prototype.comment=function(){if(this.stream.advanceIfChars([B,l])){var t=!1,e=!1;return this.stream.advanceWhileChar(function(r){return e&&r===B?(t=!0,!1):(e=r===l,!0)}),t&&this.stream.advance(1),!0}return!1},t.prototype._number=function(){var t,e=0;return this.stream.peekChar()===J&&(e=1),(t=this.stream.peekChar(e))>=u&&t<=p&&(this.stream.advance(e+1),this.stream.advanceWhileChar(function(t){return t>=u&&t<=p||0===e&&t===J}),!0)},t.prototype._newline=function(t){var e=this.stream.peekChar();switch(e){case I:case E:case D:return this.stream.advance(1),t.push(String.fromCharCode(e)),e===I&&this.stream.advanceIfChar(D)&&t.push("\n"),!0}return!1},t.prototype._escape=function(t,e){var r=this.stream.peekChar();if(r===b){this.stream.advance(1),r=this.stream.peekChar();for(var i=0;i<6&&(r>=u&&r<=p||r>=n&&r<=s||r>=o&&r<=h);)this.stream.advance(1),r=this.stream.peekChar(),i++;if(i>0){try{var a=parseInt(this.stream.substring(this.stream.pos()-i),16);a&&t.push(String.fromCharCode(a))}catch(t){}return r===q||r===P?this.stream.advance(1):this._newline([]),!0}if(r!==I&&r!==E&&r!==D)return this.stream.advance(1),t.push(String.fromCharCode(r)),!0;if(e)return this._newline(t)}return!1},t.prototype._stringChar=function(t,e){var r=this.stream.peekChar();return 0!==r&&r!==t&&r!==b&&r!==I&&r!==E&&r!==D&&(this.stream.advance(1),e.push(String.fromCharCode(r)),!0)},t.prototype._string=function(t){if(this.stream.peekChar()===R||this.stream.peekChar()===O){var e=this.stream.nextChar();for(t.push(String.fromCharCode(e));this._stringChar(e,t)||this._escape(t,!0););return this.stream.peekChar()===e?(this.stream.nextChar(),t.push(String.fromCharCode(e)),r.String):r.BadString}return null},t.prototype._unquotedChar=function(t){var e=this.stream.peekChar();return 0!==e&&e!==b&&e!==R&&e!==O&&e!==A&&e!==y&&e!==q&&e!==P&&e!==D&&e!==E&&e!==I&&(this.stream.advance(1),t.push(String.fromCharCode(e)),!0)},t.prototype._unquotedString=function(t){for(var e=!1;this._unquotedChar(t)||this._escape(t);)e=!0;return e},t.prototype._whitespace=function(){return this.stream.advanceWhileChar(function(t){return t===q||t===P||t===D||t===E||t===I})>0},t.prototype._name=function(t){for(var e=!1;this._identChar(t)||this._escape(t);)e=!0;return e},t.prototype.ident=function(t){var e=this.stream.pos();if(this._minus(t)&&this._minus(t)){if(this._identFirstChar(t)||this._escape(t)){for(;this._identChar(t)||this._escape(t););return!0}}else if(this._identFirstChar(t)||this._escape(t)){for(;this._identChar(t)||this._escape(t););return!0}return this.stream.goBackTo(e),!1},t.prototype._identFirstChar=function(t){var e=this.stream.peekChar();return(e===g||e>=n&&e<=a||e>=o&&e<=c||e>=128&&e<=65535)&&(this.stream.advance(1),t.push(String.fromCharCode(e)),!0)},t.prototype._minus=function(t){var e=this.stream.peekChar();return e===v&&(this.stream.advance(1),t.push(String.fromCharCode(e)),!0)},t.prototype._identChar=function(t){var e=this.stream.peekChar();return(e===g||e===v||e>=n&&e<=a||e>=o&&e<=c||e>=u&&e<=p||e>=128&&e<=65535)&&(this.stream.advance(1),t.push(String.fromCharCode(e)),!0)},t}();e.Scanner=X});