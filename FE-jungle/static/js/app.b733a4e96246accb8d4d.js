webpackJsonp([1,0],[function(t,s,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}var e=a(50),l=i(e),n=a(21),r=i(n),v=a(49),c=i(v),o=a(27),_=i(o),f=a(25),d=i(f),u=a(28),p=i(u),C=a(29),m=i(C),b=a(23),w=i(b),h=a(24),k=i(h),y=a(33),g=i(y),x=a(22),F=i(x),R=a(34),j=i(R),S=a(26),E=i(S),O=a(31),M=i(O),P=a(30),$=i(P);l.default.use(c.default),l.default.directive("img",{bind:function(t,s){t.style.backgroundColor="#f2f2f2";var a=new Image;a.src=s.value,a.onload=function(){t.style.backgroundImage="url("+s.value+")"}}});var T=new c.default({routes:[{path:"/",component:j.default},{path:"/guide",component:E.default},{path:"/html",component:_.default},{path:"/css",component:d.default},{path:"/http",component:p.default},{path:"/performance",component:M.default},{path:"/others",component:$.default},{path:"/js",component:m.default,children:[{path:"basic",component:w.default},{path:"client",component:k.default},{path:"principle",component:g.default},{path:"application",component:F.default}]}]});new l.default({el:"#app",render:function(t){return t(r.default)},router:T})},function(t,s,a){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(s,"__esModule",{value:!0});var e=a(32),l=i(e);s.default={data:function(){return{show:!1}},components:{popbox:l.default},mounted:function(){document.body.addEventListener("click",this.hide,!0)},methods:{hide:function(){this.show=!1},showPopbox:function(){this.$refs.contribute.show=!0}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"http"}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"language"}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"application"}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"css"}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"http"}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"html"}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"http"}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"js"}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"http"}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"http"}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={props:["title","id","content","size"],data:function(){return{show:!1}},methods:{close:function(){this.show=!1}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{n:null}}}},function(t,s){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{msg:"http"}},directives:{height:{bind:function(t){var s=window.innerHeight;t.style.height=s-60+"px"}}}}},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s){},function(t,s,a){t.exports=a.p+"static/img/1.889ad7d.jpg"},function(t,s,a){var i,e;a(16),i=a(1);var l=a(39);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,t.exports=i},function(t,s,a){var i,e;i=a(2);var l=a(42);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,t.exports=i},function(t,s,a){var i,e;i=a(3);var l=a(41);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,t.exports=i},function(t,s,a){var i,e;i=a(4);var l=a(43);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,t.exports=i},function(t,s,a){var i,e;i=a(5);var l=a(38);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,t.exports=i},function(t,s,a){var i,e;a(19),i=a(6);var l=a(47);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,e._scopeId="data-v-81f07710",t.exports=i},function(t,s,a){var i,e;a(17),i=a(7);var l=a(44);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,e._scopeId="data-v-71dd0b5f",t.exports=i},function(t,s,a){var i,e;i=a(8);var l=a(46);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,t.exports=i},function(t,s,a){var i,e;i=a(9);var l=a(40);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,t.exports=i},function(t,s,a){var i,e;i=a(10);var l=a(37);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,t.exports=i},function(t,s,a){var i,e;i=a(11);var l=a(48);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,t.exports=i},function(t,s,a){var i,e;a(18),i=a(12);var l=a(45);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,e._scopeId="data-v-7d6d09e4",t.exports=i},function(t,s,a){var i,e;i=a(13);var l=a(35);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,t.exports=i},function(t,s,a){var i,e;a(15),i=a(14);var l=a(36);e=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(e=i=i.default),"function"==typeof e&&(e=e.options),e.render=l.render,e.staticRenderFns=l.staticRenderFns,e._scopeId="data-v-138e4e44",t.exports=i},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c||s;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"作用域"}},[t._v("Scope")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("作用域的工作原理是什么？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"闭包"}},[t._v("Closure")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("什么是闭包？有什么用？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"异步"}},[t._v("Async")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("同步与异步的区别？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("setTimeout(func, 0)？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("Promise？\n          "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("请用 Promise 实现一个 Lazyman")])])])])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"原型"}},[t._v("Prototype")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("原型的工作原理？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("如何实现继承？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("如何实现 Mixin？jQuery extend 怎么实现的？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"模块化"}},[t._v("Modulization")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("IIFE？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("CommonJS/AMD/CMD？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("Webpack？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("ES6 module？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"垃圾回收"}},[t._v("Garbage Collection")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("What？How？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("内存泄漏？")])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{directives:[{name:"height",rawName:"v-height"},{name:"img",rawName:"v-img",value:"./static/img/1.jpg",expression:"'./static/img/1.jpg'"}],staticClass:"banner"},[t._m(0)])])},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("h1",{staticClass:"slogan"},[t._v("FRONTEND"),a("br"),t._v("JUNGLE")])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c||s;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("Others")]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",[t._v("Safety")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("XSS？CSRF？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",[t._v("*")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("单页应用的实现原理？优点？缺点？")])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c||s;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("CSS")]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"选择器"}},[t._v("Selector")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("层叠规则？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"值和单位"}},[t._v("Values&Units")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("px？\n          "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("1px 究竟是多大？")]),t._v(" "),a("li",[t._v("和分辨率有什么关系？")]),t._v(" "),a("li",[t._v("移动端是怎么规定 1px 的？")]),t._v(" "),a("li",[t._v("<meta name='viewport'> 的工作原理是什么？")])])])])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"盒模型"}},[t._v("Box Model")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("上下 magin 重叠合并？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("\n          margin 和 padding 百分比相对于谁计算？\n          "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("包含块的 width，上下左右都是")])])])]),t._v(" "),a("li",{staticClass:"row"},[t._v("BFC（Block Formatting Context）？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"布局"}},[t._v("Layout")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("\n          有哪些用于布局的技术？\n          "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("正常流")]),t._v(" "),a("li",[t._v("浮动")]),t._v(" "),a("li",[t._v("定位")]),t._v(" "),a("li",[t._v("列表")]),t._v(" "),a("li",[t._v("表格")]),t._v(" "),a("li",[t._v("分列 column")]),t._v(" "),a("li",[t._v("伸缩盒 flex")]),t._v(" "),a("li",[t._v("网格 grid")])])])]),t._v(" "),a("li",{staticClass:"row"},[t._v("居中？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("包含块？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("响应式与自适应的区别？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("\n          响应式和自适应设计相关技术有哪些？\n          "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v('<meta name="viewport">')]),t._v(" "),a("li",[t._v("CSS Media Query")]),t._v(" "),a("li",[t._v("栅格，如bootstrap")]),t._v(" "),a("li",[t._v("响应式图形（icon-font/svg/<picture>/image-set/srcset）")]),t._v(" "),a("li",[t._v("@media (-webkit-min-device-pixel-ratio:1.5)")]),t._v(" "),a("li",[t._v("var retina = window.devicePixelRatio > 1")]),t._v(" "),a("li",[t._v("相对单位：rem、vw")]),t._v(" "),a("li",[t._v("伸缩盒 flex")]),t._v(" "),a("li",[t._v("网格 grid")])])])]),t._v(" "),a("li",{staticClass:"row"},[t._v("z 轴层叠次序？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"方法论"}},[t._v("Methodology ")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("\n          CSS 的方法论和新技术？\n          "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("参考：\n                "),a("a",{staticClass:"fa fa-anchor",attrs:{href:"http://www.cnblogs.com/kidney/p/6197037.html"}})])])])])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"兼容性"}},[t._v("Compatibility")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"})])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"杂项"}},[t._v("Others")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("line-height: 1.5 和 line-height: 150% 的区别？")])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"nav"},[a("router-link",{staticClass:"logo",attrs:{to:"/"}},[a("i",{staticClass:"fa fa-bug"}),t._v("\n      Frontend Jungle\n    ")]),t._v(" "),a("router-link",{staticClass:"navlink",attrs:{to:"/guide"}},[t._v("Guide")]),t._v(" "),a("router-link",{staticClass:"navlink",attrs:{to:"/html"}},[t._v("HTML")]),t._v(" "),a("router-link",{staticClass:"navlink",attrs:{to:"/css"}},[t._v("CSS")]),t._v(" "),a("router-link",{staticClass:"navlink",attrs:{to:"/js"}},[t._v("JavaScript")]),t._v(" "),a("router-link",{staticClass:"navlink",attrs:{to:"/http"}},[t._v("HTTP")]),t._v(" "),a("router-link",{staticClass:"navlink",attrs:{to:"/performance"}},[t._v("Performance")]),t._v(" "),a("router-link",{staticClass:"navlink",attrs:{to:"/others"}},[t._v("Others")])],1),t._v(" "),a("div",{staticClass:"mobile-nav"},[a("i",{staticClass:"fa fa-navicon",on:{click:function(s){t.show=!0}}}),t._v(" "),a("ul",{staticClass:"mobile-nav-link",class:{"nav-show":t.show}},[a("router-link",{attrs:{tag:"li",to:"/html"}},[t._v("HTML")]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/css"}},[t._v("CSS")]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/js"}},[t._v("JavaScript")]),t._v(" "),a("router-link",{attrs:{tag:"li",to:"/http"}},[t._v("HTTP")]),t._v(" "),a("router-link",{staticClass:"navlink",attrs:{to:"/others"}},[t._v("Others")])],1)]),t._v(" "),a("div",{staticClass:"contribute",on:{click:t.showPopbox}},[a("i",{staticClass:"fa fa-envelope"})]),t._v(" "),a("popbox",{ref:"contribute",attrs:{title:"推荐"}},[a("div",[a("ul",{staticStyle:{"list-style-type":"circle","padding-left":"20px","margin-bottom":"10px"}},[a("li",[t._v("容易忽略的知识点（重在细节，而非生僻）")]),t._v(" "),a("li",[t._v("针对性强的代码题目（重在知识，而非难度）")]),t._v(" "),a("li",[t._v("曾经让你不堪回首的面试问题")]),t._v(" "),a("li",[t._v("非常系统、深入的知识总结性文章的链接")]),t._v(" "),a("li",[t._v("勘误信息、优化建议")])]),t._v(" "),a("p",{staticStyle:{"padding-left":"20px"}},[t._v("你可以点击下方链接，在 github issue 或微博评论中推荐")]),t._v(" "),a("p",{staticStyle:{"padding-left":"20px"}},[t._v("我会定期筛选、整理和更新")]),t._v(" "),a("p",{staticStyle:{"padding-left":"20px"}},[t._v("请勿推荐 "),a("router-link",{staticStyle:{color:"#00695C"},attrs:{to:"/guide"}},[t._v("Guide")]),t._v(" 中指出的不包含的信息类型")],1),t._v(" "),a("p",{staticStyle:{"text-align":"center"}},[a("a",{attrs:{target:"_blank",href:"http://weibo.com/2616320402/ErKpAnBUD?from=page_1005052616320402_profile&wvr=6&mod=weibotime&type=comment"}},[a("i",{staticClass:"fa fa-weibo"})]),t._v(" "),a("a",{attrs:{href:"https://github.com/bison1994/FE-jungle",target:"_blank"}},[a("i",{staticClass:"fa fa-github"})])])])]),t._v(" "),a("div",{staticClass:"view"},[a("router-view")],1)],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("JS")]),t._v(" "),a("div",{staticClass:"sub-nav"},[a("router-link",{attrs:{to:"/js/basic"}},[t._v("Basic")]),t._v(" "),a("router-link",{attrs:{to:"/js/client"}},[t._v("Client")]),t._v(" "),a("router-link",{attrs:{to:"/js/principle"}},[t._v("Principle")]),t._v(" "),a("router-link",{attrs:{to:"/js/application"}},[t._v("Application")])],1),t._v(" "),a("router-view")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c||s;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"值"}},[t._v("Value")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("基本类型/引用类型？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("类型转换？隐式？显式？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("\n            类型检测？\n            "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("typeof")]),t._v(" "),a("li",[t._v("Object.prototype.toString()")]),t._v(" "),a("li",[t._v("is*型，如 Array.isArray")]),t._v(" "),a("li",[t._v("instanceof")])])])])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"变量"}},[t._v("Variable")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("hoisting？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"操作符"}},[t._v("Operators")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("&& 和 || 解析规则？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"语句"}},[t._v("Statements")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"})])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"函数"}},[t._v("Function")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("函数声明与函数表达式的区别？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("参数？\n            "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("实参、形参、按值传递、arguments")]),t._v(" "),a("li",[t._v("参数的校验、默认值的设置")]),t._v(" "),a("li",[t._v("用对象形式定义参数的好处")]),t._v(" "),a("li",[t._v("ES6 对参数的扩展")])])])]),t._v(" "),a("li",{staticClass:"row"},[t._v("this 的指向？")]),t._v(" "),a("li",{staticClass:"row"},[a("pre",[a("code",[t._v("var obj = {\n  name: 'hi',\n  m: function () {\n    console.log(this.name);\n    foo();\n    function foo () { console.log(this.name) }\n  }\n}\nobj.m(); // ?")])])]),t._v(" "),a("li",{staticClass:"row"},[t._v("new 的执行过程？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("call/apply/bind 有什么用？怎么用？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"对象"}},[t._v("Object")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("深复制/浅复制？\n            "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("注意循环引用的处理")])])])]),t._v(" "),a("li",{staticClass:"row"},[t._v("存储器属性怎么用？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"正则"}},[t._v("RegExp")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"})])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"杂项"}},[t._v("Others")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("严格模式？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("JSON？")])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c||s;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"递归"}},[t._v("Recursion")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"})])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c||s;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",[t._v("DOM")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("如何获取一个元素的位置和大小？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("如何获取一个元素的 CSS 属性？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"事件"}},[t._v("Event")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("事件注册？事件委托？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("事件流？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("事件循环？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("自定义事件？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",[t._v("Ajax")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("ajax 的优缺点？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("同源政策？跨域？CORS？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("怎么获取进度？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("FormData 有什么用？怎么用？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"存储"}},[t._v("Storage")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("cookie？localStorage？sessionStorage？")])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c||s;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("HTML")]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"元素和属性"}},[t._v("Element&Attribution")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("id 有什么用？\n          "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("作为选择器")]),t._v(" "),a("li",[t._v("用于锚链接")]),t._v(" "),a("li",[t._v("一个 id 实质是创建了一个全局变量")])])])])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",[t._v("DOM")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("DOM 构建的流程？\n      \t\t"),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("解析 parse")]),t._v(" "),a("li",[t._v("渲染 render")]),t._v(" "),a("li",[t._v("布局 layout")]),t._v(" "),a("li",[t._v("绘制 paint")])])])]),t._v(" "),a("li",{staticClass:"row"},[t._v("\n          哪些资源会阻塞 DOM 构建？\n          "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("参考：\n                "),a("a",{staticClass:"fa fa-anchor",attrs:{href:"https://gold.xitu.io/post/587f4afb61ff4b00651b3c18",target:"_blank"}})])])])]),t._v(" "),a("li",{staticClass:"row"},[t._v("\n          重绘？回流？\n          "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("是什么？")]),t._v(" "),a("li",[t._v("有何影响？")]),t._v(" "),a("li",[t._v("何时发生？")]),t._v(" "),a("li",[t._v("如何避免？")])])])])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",[t._v("H5")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("H5 引入了哪些新东西？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"杂项"}},[t._v("Others")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("语义？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("渐进增强/优雅降级？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("doctype 的作用？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("XHTML 是啥？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("<script>、<script async> 和 <script defer> 的区别？")])])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return t.show?a("div",{staticClass:"mask",on:{click:t.close}},[a("div",{staticClass:"box"},[a("div",{staticClass:"top"},[a("span",[t._v(t._s(t.title))]),t._v(" "),a("i",{staticClass:"fa fa-times r",on:{click:t.close}})]),t._v(" "),a("div",{staticClass:"body"},[t._t("default",[t._v(t._s(t.content))])],2)])]):t._e()},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c||s;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("HTTP")]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",[t._v("HTTP")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("从输入 url 到页面加载的过程？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("POST 与 GET 的区别？")])])])]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",[t._v("HTTPS")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("四次握手的过程？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("对称加密和非对称加密？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("如何优化 SSL 层？")])])])])])}]}},function(t,s,a){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c||s;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"wrap"},[i("h1",[t._v("说明")]),t._v(" "),i("ul",{staticStyle:{"list-style-type":"circle","padding-left":"20px"}},[i("li",[i("em",[t._v("系统的")]),t._v("整理前端相关的知识点，以"),i("em",[t._v("硬知识")]),t._v("为主，面向面试")]),t._v(" "),i("li",[t._v("仅针对 "),i("em",[t._v("1 ~ 2")]),t._v(" 年经验的前端，段位太低看不懂，段位太高看不上")]),t._v(" "),i("li",[t._v("知识点不包含API，不包含工具的用法，不包含框架，不包含开放性的问题，不包含编程思想，不包含项目管理")]),t._v(" "),i("li",[t._v("不包含过于简单、没有"),i("em",[t._v("挖掘性")]),t._v("的知识点，因为你会")]),t._v(" "),i("li",[i("em",[t._v("不提供详解和答案")]),t._v("，仅少数知识点有提示或参考链接")]),t._v(" "),i("li",[t._v("如果你不知道每个知识点该怎么学才算掌握了，可以参考下方的提示")])])]),t._v(" "),i("div",{staticClass:"wrap"},[i("h1",[t._v("知识体系")]),t._v(" "),i("img",{attrs:{src:a(20),width:"100%"}})]),t._v(" "),i("div",{staticClass:"wrap"},[i("h1",[t._v("方法论")]),t._v(" "),i("h2",[t._v("做任何一件事至少需要回答以下四个问题才算真正想清楚了")]),t._v(" "),i("ul",{staticStyle:{"list-style-type":"circle","padding-left":"20px"}},[i("li",[t._v("我为什么要做这件事？真的有必要吗？我真的有充分的理由吗？")]),t._v(" "),i("li",[t._v("我要做到什么程度？达到什么目标？")]),t._v(" "),i("li",[t._v("我要做哪些事来实现目标？哪些事才是真正有效的？")]),t._v(" "),i("li",[t._v("我如何做这些事？计划是什么？")])])]),t._v(" "),i("div",{staticClass:"wrap"},[i("h2",[t._v("学习任何知识至少需要回答以下四个问题才算真正掌握了")]),t._v(" "),i("ul",{staticStyle:{"list-style-type":"circle","padding-left":"20px"}},[i("li",[t._v("它到底是什么？做什么用的？")]),t._v(" "),i("li",[t._v("它被创造出来到底为了解决什么样的问题或局限？")]),t._v(" "),i("li",[t._v("怎么用？适用场景？")]),t._v(" "),i("li",[t._v("有什么优势？有什么缺陷？")])])])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c||s;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("h1",[t._v("Performance")]),t._v(" "),a("div",{staticClass:"wrap"},[a("div",{staticClass:"mb20"},[a("i",{staticClass:"fa fa-bookmark"}),t._v(" "),a("span",{attrs:{title:"优化"}},[t._v("Optimization")])]),t._v(" "),a("div",[a("ul",[a("li",{staticClass:"row"},[t._v("性能优化的方案？\n          "),a("div",{staticClass:"tip"},[a("i",{staticClass:"fa fa-bell"}),t._v(" "),a("ul",{staticClass:"tip-content"},[a("li",[t._v("先弄清楚什么是性能，衡量性能的标准是什么，然后再谈优化方案")])])])]),t._v(" "),a("li",{staticClass:"row"},[t._v("提高加载速度的方案？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("FOUC（无样式内容闪烁）？产生原因？如何避免？")]),t._v(" "),a("li",{staticClass:"row"},[t._v("渐进式渲染？")])])])])])}]}}]);
//# sourceMappingURL=app.b733a4e96246accb8d4d.js.map