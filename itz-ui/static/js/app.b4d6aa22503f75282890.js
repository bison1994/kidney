webpackJsonp([0],[,,function(t,e,n){!function(t){"object"==typeof window&&window||"object"==typeof self&&self;t(e)}(function(t){function e(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function n(t){return t.nodeName.toLowerCase()}function a(t,e){var n=t&&t.exec(e);return n&&0===n.index}function s(t){return R.test(t)}function i(t){var e,n,a,i,r=t.className+" ";if(r+=t.parentNode?t.parentNode.className:"",n=M.exec(r))return C(n[1])?n[1]:"no-highlight";for(r=r.split(/\s+/),e=0,a=r.length;e<a;e++)if(i=r[e],s(i)||C(i))return i}function r(t){var e,n={},a=Array.prototype.slice.call(arguments,1);for(e in t)n[e]=t[e];return a.forEach(function(t){for(e in t)n[e]=t[e]}),n}function l(t){var e=[];return function t(a,s){for(var i=a.firstChild;i;i=i.nextSibling)3===i.nodeType?s+=i.nodeValue.length:1===i.nodeType&&(e.push({event:"start",offset:s,node:i}),s=t(i,s),n(i).match(/br|hr|img|input/)||e.push({event:"stop",offset:s,node:i}));return s}(t,0),e}function c(t,a,s){function i(){return t.length&&a.length?t[0].offset!==a[0].offset?t[0].offset<a[0].offset?t:a:"start"===a[0].event?t:a:t.length?t:a}function r(t){function a(t){return" "+t.nodeName+'="'+e(t.value).replace('"',"&quot;")+'"'}v+="<"+n(t)+x.map.call(t.attributes,a).join("")+">"}function l(t){v+="</"+n(t)+">"}function c(t){("start"===t.event?r:l)(t.node)}for(var o=0,v="",u=[];t.length||a.length;){var _=i();if(v+=e(s.substring(o,_[0].offset)),o=_[0].offset,_===t){u.reverse().forEach(l);do{c(_.splice(0,1)[0]),_=i()}while(_===t&&_.length&&_[0].offset===o);u.reverse().forEach(r)}else"start"===_[0].event?u.push(_[0].node):u.pop(),c(_.splice(0,1)[0])}return v+e(s.substr(o))}function o(t){return t.variants&&!t.cached_variants&&(t.cached_variants=t.variants.map(function(e){return r(t,{variants:null},e)})),t.cached_variants||t.endsWithParent&&[r(t)]||[t]}function v(t){function e(t){return t&&t.source||t}function n(n,a){return new RegExp(e(n),"m"+(t.case_insensitive?"i":"")+(a?"g":""))}function a(s,i){if(!s.compiled){if(s.compiled=!0,s.keywords=s.keywords||s.beginKeywords,s.keywords){var r={},l=function(e,n){t.case_insensitive&&(n=n.toLowerCase()),n.split(" ").forEach(function(t){var n=t.split("|");r[n[0]]=[e,n[1]?Number(n[1]):1]})};"string"==typeof s.keywords?l("keyword",s.keywords):w(s.keywords).forEach(function(t){l(t,s.keywords[t])}),s.keywords=r}s.lexemesRe=n(s.lexemes||/\w+/,!0),i&&(s.beginKeywords&&(s.begin="\\b("+s.beginKeywords.split(" ").join("|")+")\\b"),s.begin||(s.begin=/\B|\b/),s.beginRe=n(s.begin),s.end||s.endsWithParent||(s.end=/\B|\b/),s.end&&(s.endRe=n(s.end)),s.terminator_end=e(s.end)||"",s.endsWithParent&&i.terminator_end&&(s.terminator_end+=(s.end?"|":"")+i.terminator_end)),s.illegal&&(s.illegalRe=n(s.illegal)),null==s.relevance&&(s.relevance=1),s.contains||(s.contains=[]),s.contains=Array.prototype.concat.apply([],s.contains.map(function(t){return o("self"===t?s:t)})),s.contains.forEach(function(t){a(t,s)}),s.starts&&a(s.starts,i);var c=s.contains.map(function(t){return t.beginKeywords?"\\.?("+t.begin+")\\.?":t.begin}).concat([s.terminator_end,s.illegal]).map(e).filter(Boolean);s.terminators=c.length?n(c.join("|"),!0):{exec:function(){return null}}}}a(t)}function u(t,n,s,i){function r(t,e){var n,s;for(n=0,s=e.contains.length;n<s;n++)if(a(e.contains[n].beginRe,t))return e.contains[n]}function l(t,e){if(a(t.endRe,e)){for(;t.endsParent&&t.parent;)t=t.parent;return t}if(t.endsWithParent)return l(t.parent,e)}function c(t,e){return!s&&a(e.illegalRe,t)}function o(t,e){var n=g.case_insensitive?e[0].toLowerCase():e[0];return t.keywords.hasOwnProperty(n)&&t.keywords[n]}function d(t,e,n,a){var s=a?"":S.classPrefix,i='<span class="'+s,r=n?"":z;return(i+=t+'">')+e+r}function p(){var t,n,a,s;if(!x.keywords)return e(R);for(s="",n=0,x.lexemesRe.lastIndex=0,a=x.lexemesRe.exec(R);a;)s+=e(R.substring(n,a.index)),t=o(x,a),t?(M+=t[1],s+=d(t[0],e(a[0]))):s+=e(a[0]),n=x.lexemesRe.lastIndex,a=x.lexemesRe.exec(R);return s+e(R.substr(n))}function f(){var t="string"==typeof x.subLanguage;if(t&&!y[x.subLanguage])return e(R);var n=t?u(x.subLanguage,R,!0,w[x.subLanguage]):_(R,x.subLanguage.length?x.subLanguage:void 0);return x.relevance>0&&(M+=n.relevance),t&&(w[x.subLanguage]=n.top),d(n.language,n.value,!1,!0)}function h(){N+=null!=x.subLanguage?f():p(),R=""}function b(t){N+=t.className?d(t.className,"",!0):"",x=Object.create(t,{parent:{value:x}})}function m(t,e){if(R+=t,null==e)return h(),0;var n=r(e,x);if(n)return n.skip?R+=e:(n.excludeBegin&&(R+=e),h(),n.returnBegin||n.excludeBegin||(R=e)),b(n,e),n.returnBegin?0:e.length;var a=l(x,e);if(a){var s=x;s.skip?R+=e:(s.returnEnd||s.excludeEnd||(R+=e),h(),s.excludeEnd&&(R=e));do{x.className&&(N+=z),x.skip||(M+=x.relevance),x=x.parent}while(x!==a.parent);return a.starts&&b(a.starts,""),s.returnEnd?0:e.length}if(c(e,x))throw new Error('Illegal lexeme "'+e+'" for mode "'+(x.className||"<unnamed>")+'"');return R+=e,e.length||1}var g=C(t);if(!g)throw new Error('Unknown language: "'+t+'"');v(g);var E,x=i||g,w={},N="";for(E=x;E!==g;E=E.parent)E.className&&(N=d(E.className,"",!0)+N);var R="",M=0;try{for(var O,j,k=0;;){if(x.terminators.lastIndex=k,!(O=x.terminators.exec(n)))break;j=m(n.substring(k,O.index),O[0]),k=O.index+j}for(m(n.substr(k)),E=x;E.parent;E=E.parent)E.className&&(N+=z);return{relevance:M,value:N,language:t,top:x}}catch(t){if(t.message&&-1!==t.message.indexOf("Illegal"))return{relevance:0,value:e(n)};throw t}}function _(t,n){n=n||S.languages||w(y);var a={relevance:0,value:e(t)},s=a;return n.filter(C).forEach(function(e){var n=u(e,t,!1);n.language=e,n.relevance>s.relevance&&(s=n),n.relevance>a.relevance&&(s=a,a=n)}),s.language&&(a.second_best=s),a}function d(t){return S.tabReplace||S.useBR?t.replace(O,function(t,e){return S.useBR&&"\n"===t?"<br>":S.tabReplace?e.replace(/\t/g,S.tabReplace):""}):t}function p(t,e,n){var a=e?N[e]:n,s=[t.trim()];return t.match(/\bhljs\b/)||s.push("hljs"),-1===t.indexOf(a)&&s.push(a),s.join(" ").trim()}function f(t){var e,n,a,r,o,v=i(t);s(v)||(S.useBR?(e=document.createElementNS("http://www.w3.org/1999/xhtml","div"),e.innerHTML=t.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):e=t,o=e.textContent,a=v?u(v,o,!0):_(o),n=l(e),n.length&&(r=document.createElementNS("http://www.w3.org/1999/xhtml","div"),r.innerHTML=a.value,a.value=c(n,l(r),o)),a.value=d(a.value),t.innerHTML=a.value,t.className=p(t.className,v,a.language),t.result={language:a.language,re:a.relevance},a.second_best&&(t.second_best={language:a.second_best.language,re:a.second_best.relevance}))}function h(t){S=r(S,t)}function b(){if(!b.called){b.called=!0;var t=document.querySelectorAll("pre code");x.forEach.call(t,f)}}function m(){addEventListener("DOMContentLoaded",b,!1),addEventListener("load",b,!1)}function g(e,n){var a=y[e]=n(t);a.aliases&&a.aliases.forEach(function(t){N[t]=e})}function E(){return w(y)}function C(t){return t=(t||"").toLowerCase(),y[t]||y[N[t]]}var x=[],w=Object.keys,y={},N={},R=/^(no-?highlight|plain|text)$/i,M=/\blang(?:uage)?-([\w-]+)\b/i,O=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,z="</span>",S={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return t.highlight=u,t.highlightAuto=_,t.fixMarkup=d,t.highlightBlock=f,t.configure=h,t.initHighlighting=b,t.initHighlightingOnLoad=m,t.registerLanguage=g,t.listLanguages=E,t.getLanguage=C,t.inherit=r,t.IDENT_RE="[a-zA-Z]\\w*",t.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",t.NUMBER_RE="\\b\\d+(\\.\\d+)?",t.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",t.BINARY_NUMBER_RE="\\b(0b[01]+)",t.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",t.BACKSLASH_ESCAPE={begin:"\\\\[\\s\\S]",relevance:0},t.APOS_STRING_MODE={className:"string",begin:"'",end:"'",illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]},t.QUOTE_STRING_MODE={className:"string",begin:'"',end:'"',illegal:"\\n",contains:[t.BACKSLASH_ESCAPE]},t.PHRASAL_WORDS_MODE={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},t.COMMENT=function(e,n,a){var s=t.inherit({className:"comment",begin:e,end:n,contains:[]},a||{});return s.contains.push(t.PHRASAL_WORDS_MODE),s.contains.push({className:"doctag",begin:"(?:TODO|FIXME|NOTE|BUG|XXX):",relevance:0}),s},t.C_LINE_COMMENT_MODE=t.COMMENT("//","$"),t.C_BLOCK_COMMENT_MODE=t.COMMENT("/\\*","\\*/"),t.HASH_COMMENT_MODE=t.COMMENT("#","$"),t.NUMBER_MODE={className:"number",begin:t.NUMBER_RE,relevance:0},t.C_NUMBER_MODE={className:"number",begin:t.C_NUMBER_RE,relevance:0},t.BINARY_NUMBER_MODE={className:"number",begin:t.BINARY_NUMBER_RE,relevance:0},t.CSS_NUMBER_MODE={className:"number",begin:t.NUMBER_RE+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",relevance:0},t.REGEXP_MODE={className:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[t.BACKSLASH_ESCAPE,{begin:/\[/,end:/\]/,relevance:0,contains:[t.BACKSLASH_ESCAPE]}]},t.TITLE_MODE={className:"title",begin:t.IDENT_RE,relevance:0},t.UNDERSCORE_TITLE_MODE={className:"title",begin:t.UNDERSCORE_IDENT_RE,relevance:0},t.METHOD_GUARD={begin:"\\.\\s*"+t.UNDERSCORE_IDENT_RE,relevance:0},t})},function(t,e){t.exports=function(t){var e="[A-Za-z$_][0-9A-Za-z$_]*",n={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={className:"number",variants:[{begin:"\\b(0[bB][01]+)"},{begin:"\\b(0[oO][0-7]+)"},{begin:t.C_NUMBER_RE}],relevance:0},s={className:"subst",begin:"\\$\\{",end:"\\}",keywords:n,contains:[]},i={className:"string",begin:"`",end:"`",contains:[t.BACKSLASH_ESCAPE,s]};s.contains=[t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,i,a,t.REGEXP_MODE];var r=s.contains.concat([t.C_BLOCK_COMMENT_MODE,t.C_LINE_COMMENT_MODE]);return{aliases:["js","jsx"],keywords:n,contains:[{className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},{className:"meta",begin:/^#!/,end:/$/},t.APOS_STRING_MODE,t.QUOTE_STRING_MODE,i,t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,a,{begin:/[{,]\s*/,relevance:0,contains:[{begin:e+"\\s*:",returnBegin:!0,relevance:0,contains:[{className:"attr",begin:e,relevance:0}]}]},{begin:"("+t.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",contains:[t.C_LINE_COMMENT_MODE,t.C_BLOCK_COMMENT_MODE,t.REGEXP_MODE,{className:"function",begin:"(\\(.*?\\)|"+e+")\\s*=>",returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e},{begin:/\(\s*\)/},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:n,contains:r}]}]},{begin:/</,end:/(\/\w+|\w+\/)>/,subLanguage:"xml",contains:[{begin:/<\w+\s*\/>/,skip:!0},{begin:/<\w+/,end:/(\/\w+|\w+\/)>/,skip:!0,contains:[{begin:/<\w+\s*\/>/,skip:!0},"self"]}]}],relevance:0},{className:"function",beginKeywords:"function",end:/\{/,excludeEnd:!0,contains:[t.inherit(t.TITLE_MODE,{begin:e}),{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,contains:r}],illegal:/\[|%/},{begin:/\$[(.]/},t.METHOD_GUARD,{className:"class",beginKeywords:"class",end:/[{;=]/,excludeEnd:!0,illegal:/[:"\[\]]/,contains:[{beginKeywords:"extends"},t.UNDERSCORE_TITLE_MODE]},{beginKeywords:"constructor",end:/\{/,excludeEnd:!0}],illegal:/#(?!!)/}}},function(t,e,n){function a(t){n(22)}var s=n(0)(n(28),n(16),a,null,null);t.exports=s.exports},function(t,e,n){"use strict";var a=n(1),s=n(25),i=n(6),r=n.n(i),l=n(7),c=n.n(l),o=n(8),v=n.n(o),u=n(11),_=n.n(u),d=n(9),p=n.n(d),f=n(10),h=n.n(f),b=n(12),m=n.n(b);a.a.use(s.a),e.a=new s.a({mode:"history",routes:[{path:"/",redirect:"/instruction"},{path:"/instruction",component:r.a},{path:"/pc/button",component:c.a},{path:"/pc/form",component:v.a},{path:"/pc/tab",component:_.a},{path:"/pc/pagination",component:p.a},{path:"/pc/popbox",component:h.a},{path:"/pc/utility",component:m.a}]})},function(t,e,n){function a(t){n(21)}var s=n(0)(null,n(14),a,"data-v-454c591f",null);t.exports=s.exports},function(t,e,n){var a=n(0)(null,n(13),null,null,null);t.exports=a.exports},function(t,e,n){function a(t){n(24)}var s=n(0)(null,n(20),a,"data-v-d31d00de",null);t.exports=s.exports},function(t,e,n){var a=n(0)(null,n(18),null,null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(29),n(17),null,null,null);t.exports=a.exports},function(t,e,n){function a(t){n(23)}var s=n(0)(null,n(19),a,"data-v-d27b7a50",null);t.exports=s.exports},function(t,e,n){var a=n(0)(n(30),n(15),null,null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-holder"},[n("section",[n("h3",[t._v("按钮样式")]),t._v(" "),t._m(0),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"html"},[t._v('<div class="btn btn-main">按钮主样式</div>\n<div class="btn btn-sub">按钮副样式</div>\n<div class="btn btn-main disabled">主按钮禁用</div>\n<div class="btn btn-sub disabled">副按钮禁用</div>')])])]),t._v(" "),n("section",[n("h3",[t._v("按钮大小")]),t._v(" "),n("h4",[t._v("宽度默认由内容决定。除默认大小外，提供三种可选尺寸：小中大，其它尺寸请自行定义")]),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"html"},[t._v('<div class="btn btn-main btn-sm">小按钮</div>\n<div class="btn btn-main btn-md">中按钮</div>\n<div class="btn btn-main btn-lg">大按钮</div>')])])]),t._v(" "),n("section",[n("h3",[t._v("加载状态")]),t._v(" "),n("h4",[t._v("该加载图标只适合于白色、灰色的背景")]),t._v(" "),n("h4",[t._v("IE8 上做了降级处理，不显示加载图标")]),t._v(" "),t._m(2),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"html"},[t._v('<div class="btn btn-sub">\n  加载中<i class="btn-spinner"></i>\n</div>\n<div class="btn btn-sub btn-sm">\n  加载中<i class="btn-spinner"></i>\n</div>')])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"btn btn-main"},[t._v("按钮主样式")]),t._v(" "),n("div",{staticClass:"btn btn-sub ml30"},[t._v("按钮副样式")]),t._v(" "),n("div",{staticClass:"btn btn-main ml30 disabled"},[t._v("主按钮禁用")]),t._v(" "),n("div",{staticClass:"btn btn-sub ml30 disabled"},[t._v("副按钮禁用")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"btn btn-main btn-lg"},[t._v("大按钮 large")]),t._v(" "),n("div",{staticClass:"btn btn-main btn-md ml30"},[t._v("中按钮 middle")]),t._v(" "),n("div",{staticClass:"btn btn-main btn-sm ml30"},[t._v("小按钮 small")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"btn btn-sub"},[t._v("\n          加载中\n          "),n("i",{staticClass:"btn-spinner"})]),t._v(" "),n("div",{staticClass:"btn btn-sub btn-sm ml30"},[t._v("\n          加载中\n          "),n("i",{staticClass:"btn-spinner"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-holder"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("section",[n("h3",[t._v("样式与逻辑分离")]),t._v(" "),n("h4",{staticClass:"p"},[t._v("widget 原件由样式和逻辑组成，由于采用 jQuery，选择器既会用于设置样式，又会用于 js 调用，从而形成一种糟糕的耦合关系。出于解耦的考虑，所有供 js 调用的 class 类名均以 js- 为前缀，并且仅供 js 调用，不得用于设置样式。这样做的好处是，样式可以自由定义，完全不影响组件内部的逻辑")]),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"html"},[t._v('<div class="js-widget widget-style"></div>\n<div class="js-widget widget-another-style"></div>')])])]),t._v(" "),t._m(2),t._v(" "),t._m(3)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v("组件分类")]),t._v(" "),n("h4",[t._v("• style 类：只有样式，没有内部逻辑，仅由 HTML + CSS 实现，如按钮")]),t._v(" "),n("h4",[t._v("• widget 类：既有样式，也有内部逻辑，由 HTML + CSS + js 实现，如分页")]),t._v(" "),n("h4",[t._v("• utility 类：特殊的 widget，由纯 js 实现，如 toast 和 tip")]),t._v(" "),n("h4",[t._v("思路：是否为纯样式组件？如否，用纯 js 实现是否合理？如否，则为 widget")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v("基本用法")]),t._v(" "),n("h4",[t._v("直接引入源文件即可，源文件在该项目 static 文件夹下，"),n("a",{staticClass:"g-link",attrs:{href:"https://github.com/itouzigithub/itz-UIkit",target:"_blank"}},[t._v("地址")])]),t._v(" "),n("h4",[t._v("• style 组件，只需引入 itz-ui.css 文件，其中的某些功能如需 js 实现，则需引入 itz-ui.js")]),t._v(" "),n("h4",[t._v("• widget 组件，需同时引入 itz-ui.css 和 itz-ui.js")]),t._v(" "),n("h4",[t._v("• utility 组件，只需引入 static/utility/ 下的相应 js 文件，然后调用相关方法即可")]),t._v(" "),n("h4",[t._v('itz-ui.js 依赖 jQuery，utility 中的组件，如果文件名含 "jquery"，则依赖 jQuery，不含，则不依赖')])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v("优雅降级")]),t._v(" "),n("h4",[t._v("由于 IE8 属于逐步放弃支持的浏览器，当遇到 IE8 不支持的、常规兼容手段成本较大的情况，通常采用以下处理方式")]),t._v(" "),n("pre",[n("code",[t._v("display: none\\9;")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v("开发注意")]),t._v(" "),n("h4",{staticClass:"p"},[t._v("main.js 中，itz-ui.js 被注册为一个全局函数 f，每次路由切换，都会执行 f（参见 App.vue），原因是随着路由切换，DOM 节点会不断销毁与重建，必须重新执行 f 才能使 jQuery 组件生效")]),t._v(" "),n("h4",{staticClass:"p"},[t._v("尽管如此，由于热更新，组件 DOM 更新了，但是相应的 js 却没有重新加载，也会导致组件失效。解决办法是刷新页面")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-holder"},[n("section",[n("h3",[t._v("Toast 提示")]),t._v(" "),n("h4",[t._v("两个参数，第一个为提示内容，默认为“操作成功”；第二个为样式类型，true 表示成功，false 表示失败，默认为 true")]),t._v(" "),n("h4",[t._v("提示框 z-index: 999")]),t._v(" "),n("div",{staticClass:"btn btn-sub",on:{click:function(e){t.toast("操作成功",!0)}}},[t._v("成功")]),t._v(" "),n("div",{staticClass:"btn btn-sub",on:{click:function(e){t.toast("操作失败",!1)}}},[t._v("失败")]),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}]},[t._v("itz.toast()\nitz.toast('操作失败', false)")])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app flex flex-col"},[n("header",[n("span",{staticClass:"rel"},[t._v("\n      ITOUZI-UIkit\n      "),n("span",{staticClass:"badge"},[t._v(t._s(0===t.status?"PC":"H5"))])])]),t._v(" "),n("main",{staticClass:"flex flex-grow"},[n("aside",[n("h2",[t._v("Doc")]),t._v(" "),n("ul",[n("router-link",{attrs:{tag:"li",to:"/instruction"}},[t._v("Instruction")])],1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0===t.status,expression:"status === 0"}]},[n("h2",[t._v("Style")]),t._v(" "),n("ul",[n("router-link",{attrs:{tag:"li",to:"/pc/button"}},[t._v("Button")]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"/pc/form"}},[t._v("Form")]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"/pc/pagination"}},[t._v("Pagination")])],1),t._v(" "),n("h2",[t._v("Widget")]),t._v(" "),n("ul",[n("router-link",{attrs:{tag:"li",to:"/pc/tab"}},[t._v("Tab")]),t._v(" "),n("router-link",{attrs:{tag:"li",to:"/pc/popbox"}},[t._v("Popbox")])],1),t._v(" "),n("h2",[t._v("Utility")]),t._v(" "),n("ul",[n("router-link",{attrs:{tag:"li",to:"/pc/utility"}},[t._v("utils")])],1)]),t._v(" "),n("div",{staticClass:"menu-toggle flex"},[n("div",{class:{active:0===t.status},on:{click:function(e){t.status=0}}},[t._v("PC")]),t._v(" "),n("div",{class:{active:1===t.status},on:{click:function(e){t.status=1}}},[t._v("Mobile")])])]),t._v(" "),n("article",[n("router-view")],1)])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-holder"},[n("section",[n("h3",[t._v("弹框")]),t._v(" "),n("h4",[t._v("弹框遮罩 z-index: 9")]),t._v(" "),n("h4",[t._v("上中下三行布局，尺寸均为固定值，中部内容自定义，超出高度时显示滚动条")]),t._v(" "),n("div",{staticClass:"btn btn-sub",on:{click:t.show}},[t._v("普通弹框")]),t._v(" "),n("div",{staticClass:"btn btn-sub",on:{click:function(e){t.show("big")}}},[t._v("大弹框")]),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"html"},[t._v('\x3c!-- 普通弹框 --\x3e\n<div class="popbox" id="pop1">\n  <div class="popbox-mask"></div>\n  <div class="popbox-box">\n    <div class="popbox-hd">\n      <span>标题</span>\n      <i class="popbox-close-icon js-pop-close"></i>\n    </div>\n    <div class="popbox-bd"></div>\n    <div class="popbox-ft">\n      <div class="btn btn-main" style="width: 120px; float: right">确定</div>\n      <div class="btn btn-sub js-pop-close" style="width: 120px; float: right; margin-right: 10px">取消</div>\n    </div>\n  </div>\n</div>\n\x3c!-- 大弹框 --\x3e\n<div class="popbox" id="pop2">\n  <div class="popbox-mask"></div>\n  <div class="popbox-box popbox-lg">\n    <div class="popbox-hd">\n      <span>标题</span>\n      <i class="popbox-close-icon js-pop-close"></i>\n    </div>\n    <div class="popbox-bd"></div>\n    <div class="popbox-ft">\n      <div class="btn btn-main" style="width: 120px; float: right">确定</div>\n    </div>\n  </div>\n</div>')])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-holder"},[n("section",[n("h3",[t._v("分页")]),t._v(" "),n("h4",[t._v("目前主站分页采用第三方 jquery 插件，DOM 节点是自动生成的，因此只需引入 itz-ui.css 替换掉原来的样式并调整 js 配置即可")]),t._v(" "),n("h4",[t._v("此处仅供展示样式，没有交互")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"js"},[t._v("// 配置项调整\n$('#pageContainer').pagination(PAGE_DATA.total, {\n  num_display_entries: 5,\n  first_show_always: false,\n  last_show_always: false,\n  prev_show_always: false,\n  next_show_always: true,\n  next_text: '<span class=\"pagination-next\">下一页</span>',\n  prev_text: '<span class=\"pagination-prev\">上一页</span>'\n});")])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination mb20"},[n("span",{staticClass:"current prev",attrs:{rel:"prev"}},[n("span",{staticClass:"pagination-prev"},[t._v("上一页")])]),t._v(" "),n("span",{staticClass:"current"},[t._v("1")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("2")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("3")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("4")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("5")]),t._v(" "),n("span",[t._v("...")]),t._v(" "),n("a",{staticClass:"ep",attrs:{href:"#"}},[t._v("247")]),t._v(" "),n("a",{staticClass:"next",attrs:{href:"#",rel:"next"}},[n("span",{staticClass:"pagination-next"},[t._v("下一页")])]),t._v(" "),n("span",{staticClass:"pagination-all"},[t._v("共3693条")]),t._v(" "),n("span",{staticClass:"pagination-random-link"},[n("span",[t._v("到第")]),t._v(" "),n("input",{staticClass:"pagination-random-input",attrs:{type:"text"}}),t._v(" "),n("span",[t._v("页")])]),t._v(" "),n("a",{staticClass:"pagination-random-go"},[t._v("确定")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination"},[n("a",{staticClass:"prev",attrs:{href:"#",rel:"prev"}},[n("span",{staticClass:"pagination-prev"},[t._v("上一页")])]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("1")]),t._v(" "),n("span",{staticClass:"current"},[t._v("2")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("3")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("4")]),t._v(" "),n("a",{attrs:{href:"#"}},[t._v("5")]),t._v(" "),n("span",[t._v("...")]),t._v(" "),n("a",{staticClass:"ep",attrs:{href:"#"}},[t._v("247")]),t._v(" "),n("a",{staticClass:"next",attrs:{href:"#",rel:"next"}},[n("span",{staticClass:"pagination-next"},[t._v("下一页"),n("i")])]),t._v(" "),n("span",{staticClass:"pagination-all"},[t._v("共3693条")]),t._v(" "),n("span",{staticClass:"pagination-random-link"},[n("span",[t._v("到第")]),t._v(" "),n("input",{staticClass:"pagination-random-input",attrs:{type:"text"}}),t._v(" "),n("span",[t._v("页")])]),t._v(" "),n("a",{staticClass:"pagination-random-go"},[t._v("确定")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-holder"},[t._m(0),t._v(" "),n("section",[n("h3",[t._v("常规标签页")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"html"},[t._v('<ul class="js-tab itz-tab-normal">\n  <li class="itz-tab-item itz-tab-active">标签一</li>\n  <li class="itz-tab-item">标签二</li>\n  <li class="itz-tab-item">标签三</li>\n</ul>\n<div>\n  <div class="itz-tab-content">内容一</div>\n  <div class="itz-tab-content">内容二</div>\n  <div class="itz-tab-content">内容三</div>\n</div>')])])]),t._v(" "),t._m(3),t._v(" "),t._m(4)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v("标签页")]),t._v(" "),n("h4",[t._v("标签部分和内容部分的最外层节点必须是相邻节点")]),t._v(" "),n("h4",[t._v("各类标签 html 结构均一致，样式由一个类名控制，常规型：itz-tab-normal，方格型：itz-tab-square，线型：itz-tab-line")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"js-tab itz-tab-normal"},[n("li",{staticClass:"itz-tab-item itz-tab-active"},[t._v("标签一")]),t._v(" "),n("li",{staticClass:"itz-tab-item"},[t._v("标签二")]),t._v(" "),n("li",{staticClass:"itz-tab-item"},[t._v("标签三")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"itz-tab-content"},[t._v("内容一")]),t._v(" "),n("div",{staticClass:"itz-tab-content"},[t._v("内容二")]),t._v(" "),n("div",{staticClass:"itz-tab-content"},[t._v("内容三")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v("方格型标签页")]),t._v(" "),n("h4",[t._v("将上述代码中 itz-tab-normal 换成 itz-tab-square 即可")]),t._v(" "),n("ul",{staticClass:"js-tab itz-tab-square"},[n("li",{staticClass:"itz-tab-item itz-tab-active"},[t._v("标签一")]),t._v(" "),n("li",{staticClass:"itz-tab-item"},[t._v("标签二")]),t._v(" "),n("li",{staticClass:"itz-tab-item"},[t._v("标签三")])]),t._v(" "),n("div",[n("div",{staticClass:"itz-tab-content"},[t._v("内容一")]),t._v(" "),n("div",{staticClass:"itz-tab-content"},[t._v("内容二")]),t._v(" "),n("div",{staticClass:"itz-tab-content"},[t._v("内容三")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h3",[t._v("线型标签页")]),t._v(" "),n("h4",[t._v("将上述代码中 itz-tab-normal 换成 itz-tab-line 即可")]),t._v(" "),n("ul",{staticClass:"js-tab itz-tab-line"},[n("li",{staticClass:"itz-tab-item itz-tab-active"},[t._v("标签一")]),t._v(" "),n("li",{staticClass:"itz-tab-item"},[t._v("标签二")]),t._v(" "),n("li",{staticClass:"itz-tab-item"},[t._v("标签三")])]),t._v(" "),n("div",[n("div",{staticClass:"itz-tab-content"},[t._v("内容一")]),t._v(" "),n("div",{staticClass:"itz-tab-content"},[t._v("内容二")]),t._v(" "),n("div",{staticClass:"itz-tab-content"},[t._v("内容三")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"g-holder"},[n("section",[n("h3",[t._v("输入框")]),t._v(" "),n("h4",[t._v("输入框尺寸具有高度不确定性，因此请自行按需设置。预设宽度300px，预设高度40px")]),t._v(" "),t._m(0),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"html"},[t._v('<input type="text" class="ipt" placeholder="提示信息">\n<input type="text" class="ipt" placeholder="禁用样式" disabled>')])])]),t._v(" "),n("section",[n("h3",[t._v("输入框单元")]),t._v(" "),n("h4",[t._v("单元格可用于放置文字单位或清除图标，清除图标功能需引入 itz-ui.js")]),t._v(" "),n("h4",[t._v("清除图标的显示与隐藏由 CSS 实现，严重依赖 HTML 结构，请保持 span 与 input 节点的相邻关系，并且 ipt-wrap 中不可放置其它节点")]),t._v(" "),t._m(1),t._v(" "),n("br"),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"html"},[t._v('<div class="ipt-wrap">\n  <input class="ipt" type="text" placeholder="文字单位">\n  <span class="ipt-cell">万元</span>\n</div>\n<div class="ipt-wrap js-ipt-clear">\n  <input class="ipt" type="text" placeholder="清除按钮">\n  <span class="ipt-cell">\n    <i class="ipt-clear"></i>\n  </span>\n</div>')])])]),t._v(" "),n("section",[n("h3",[t._v("输入框后置按钮")]),t._v(" "),t._m(4),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"html"},[t._v('<div class="ipt-container">\n  <div class="ipt-wrap">\n    <input class="ipt" type="text" placeholder="文字单位">\n    <span class="ipt-cell">万元</span>\n  </div>\n  <div class="btn btn-main">按钮</div>\n</div>')])])]),t._v(" "),n("section",[n("h3",[t._v("输入域")]),t._v(" "),n("h4",[t._v("默认宽度 100%")]),t._v(" "),n("textarea",{staticClass:"txt",attrs:{placeholder:"请输入",rows:"3"}}),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"html"},[t._v('<textarea class="txt" placeholder="请输入" rows="3"></textarea>')])])]),t._v(" "),n("section",[n("h3",[t._v("输入域字数限制")]),t._v(" "),t._m(5),t._v(" "),n("pre",[n("code",{directives:[{name:"hl",rawName:"v-hl"}],staticClass:"html"},[t._v('<div class="txt-wrap js-maxlength">\n  <textarea placeholder="请输入" rows="3" maxlength="140"></textarea>\n</div>')])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("input",{staticClass:"ipt",attrs:{type:"text",placeholder:"提示信息"}}),t._v(" "),n("input",{staticClass:"ipt ml30",attrs:{type:"text",placeholder:"禁用样式",disabled:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ipt-wrap mb20"},[n("input",{staticClass:"ipt",attrs:{type:"text",placeholder:"提示信息"}}),t._v(" "),n("span",{staticClass:"ipt-cell cell"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ipt-wrap"},[n("input",{staticClass:"ipt",attrs:{type:"text",placeholder:"文字单位"}}),t._v(" "),n("span",{staticClass:"ipt-cell"},[t._v("万元")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ipt-wrap ml30 js-ipt-clear"},[n("input",{staticClass:"ipt",attrs:{type:"text",placeholder:"清除按钮，获取焦点时显示"}}),t._v(" "),n("span",{staticClass:"ipt-cell"},[n("i",{staticClass:"ipt-clear"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ipt-container"},[n("div",{staticClass:"ipt-wrap"},[n("input",{staticClass:"ipt",attrs:{type:"text",placeholder:"文字单位"}}),t._v(" "),n("span",{staticClass:"ipt-cell"},[t._v("万元")])]),t._v(" "),n("div",{staticClass:"btn btn-main"},[t._v("按钮")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"txt-wrap js-maxlength"},[n("textarea",{staticClass:"txt",attrs:{placeholder:"请输入",rows:"3",maxlength:"140"}})])}]}},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{status:0}},mounted:function(){window.f=n(32)},watch:{$route:function(){setTimeout(f,0)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{show:function(t){"big"===t?$("#pop2").fadeIn():$("#pop1").fadeIn()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{toast:function(t,e){itz.toast(t,e)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(1),s=n(4),i=n.n(s),r=n(5),l=n(2),c=n.n(l),o=n(3);n.n(o);a.a.config.productionTip=!1,a.a.directive("hl",function(t){c.a.highlightBlock(t)}),new a.a({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},function(t,e,n){!function(e){e(),t.exports=e}(function(){$(".js-tab").each(function(t,e){!function(){var t=$(e).next();$(e).on("click","li",function(){if(!$(this).hasClass("itz-tab-active")){var e=$(this).index();$(this).addClass("itz-tab-active").siblings().removeClass("itz-tab-active"),t.children().hide().eq(e).show()}})}()}),$(".js-ipt-clear").each(function(t,e){!function(){var t=$(e).find("input");$(e).find(".ipt-clear").click(function(){t.val("").focus()})}()}),$(".js-maxlength").each(function(t,e){!function(){var t=$('<div class="txt-limiter"></div>'),n=$(e).find("textarea"),a=n.attr("maxlength");t.text("0/"+a),$(e).append(t),n.keydown(function(){var e=$(this);setTimeout(function(){var s=e.val().length;if(t.text(s+"/"+a),t.css({color:"#999"}),s>=a){t.css({color:"#ee5555"});var i=n.val().slice(0,140);n.val(i)}},0)})}()}),$(".js-pop-close").each(function(t,e){!function(){var t=$(e).parents(".popbox");$(e).click(function(){t.fadeOut()})}()})})}],[31]);