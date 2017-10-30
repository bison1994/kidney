webpackJsonp([6],{"5f5d":function(e,r,t){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var v=t("DmzR"),i=t("46Yf"),_=i(null,v.a,!1,null,null,null);r.default=_.exports},DmzR:function(e,r,t){"use strict";var v=function(){var e=this,r=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("section",[t("h3",[e._v("头发丝")]),e._v(" "),t("br"),e._v(" "),t("p",[e._v("在设置了 `viewport width=device-width` 后，如何在高清屏上画出真正的 1px 细线是移动端开发的一个常见问题")]),e._v(" "),t("p",[e._v("淘宝 flexible 方案的做法是根据 dpr 动态设置 viewport 缩放比例，确保 1 个 CSS 像素永远对应 1 个物理像素")]),e._v(" "),t("p",[e._v("然而这个方案至少有四个已知的问题")]),e._v(" "),t("p",[e._v("1. px 单位大小不固定，几乎所有尺寸单位都不得不换用 rem")]),e._v(" "),t("p",[e._v("2. 与第三方组件不兼容")]),e._v(" "),t("p",[e._v("3. 字体大小设置比较麻烦")]),e._v(" "),t("p",[e._v("4. 仅照顾了 IOS，未兼顾安卓，因为安卓的 dpr 检测存在兼容性问题")]),e._v(" "),t("p",[e._v("因此 flexible 比较适合小型的活动页，对于大中型项目而言风险太高")]),e._v(" "),t("p",[e._v("经过项目实践，要画出 1px 细线或边框，最简单、适用范围最广的方法是使用 scale 缩放")]),e._v(" "),t("p",[e._v("hairline 就是用 CSS 封装的一套基础样式组件，使用起来很方便")]),e._v(" "),t("p",[e._v("hair-top | hair-right | hair-bottom | hair-left | hair-border")]),e._v(" "),t("p",{staticClass:"hair-top hair-bottom",staticStyle:{height:"50px",position:"relative"}}),e._v(" "),t("pre",[t("code",[e._v('<div style="position: relative" class="hair-top hair-bottom"></div>\n')])]),e._v(" "),t("br"),e._v(" "),t("p",{staticClass:"hair-border",staticStyle:{height:"50px",position:"relative"}}),e._v(" "),t("pre",[t("code",[e._v('<div style="position: relative" class="hair-border"></div>\n')])]),e._v(" "),t("p",[e._v("注意点：")]),e._v(" "),t("p",[e._v("1. 父组件必须有定位属性")]),e._v(" "),t("p",[e._v("2. top、left、border 占用了 ::bofore 伪元素，right、bottom 占用了 ::after 伪元素")]),e._v(" "),t("br"),e._v(" "),t("p",[e._v("已知的问题：")]),e._v(" "),t("p",[e._v("1. 修改边框颜色略有些麻烦")]),e._v(" "),t("pre",[t("code",[e._v(".el:before {\n  border-color: ...\n}\n")])]),e._v(" "),t("p",[e._v("2. hairline 可能会遮住 border，例如在 tab 导航组件使用 border-bottom 或 border-top 作为选中效果，为避免 hairline 遮住 border，需要手动给 hairline 设置 z-index: -1")]),e._v(" "),t("pre",[t("code",[e._v(".el:before {\n  z-index: -1\n}\n")])])])}],_={render:v,staticRenderFns:i};r.a=_}});