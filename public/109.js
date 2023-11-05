(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{1925:function(t,o,i){"use strict";i.r(o);var e=i(16),a={name:"UiTooltips",mounted:function(){e.c.index()}},s=i(8),r=Object(s.a)(a,(function(){var t=this,o=t.$createElement,i=t._self._c||o;return i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{lg:"6",sm:"12"}},[i("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[i("h4",{staticClass:"card-title"},[t._v("Tooltips")])]},proxy:!0},{key:"headerAction",fn:function(){return[i("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[i("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[i("p",[t._v("Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left. The data-placement attribute specifies the tooltip position.")]),t._v(" "),i("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-1"}},[i("div",{staticClass:"card"},[i("kbd",{staticClass:"bg-dark"},[i("pre",{staticClass:"text-white",attrs:{id:"tooltips-1"}},[t._v("                    "),i("code",[t._v('\n<b-button v-b-tooltip.top="\'Tooltip on top\'" variant="secondary" class="mt-3 mr-1">Tooltip on top</b-button>\n<b-button v-b-tooltip.right="\'Tooltip on right\'" variant="secondary" class="mt-3 mr-1">Tooltip on right</b-button>\n<b-button v-b-tooltip.bottom="\'Tooltip on bottom\'" variant="secondary" class="mt-3 mr-1">Tooltip on bottom</b-button>\n<b-button v-b-tooltip.left="\'Tooltip on left\'" variant="secondary" class="mt-3 mr-1">Tooltip on left</b-button>\n')])])])])]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.top",value:"Tooltip on top",expression:"'Tooltip on top'",modifiers:{top:!0}}],staticClass:"mt-3 mr-1",attrs:{variant:"secondary"}},[t._v("Tooltip on top")]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.right",value:"Tooltip on right",expression:"'Tooltip on right'",modifiers:{right:!0}}],staticClass:"mt-3 mr-1",attrs:{variant:"secondary"}},[t._v("Tooltip on right")]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom",value:"Tooltip on bottom",expression:"'Tooltip on bottom'",modifiers:{bottom:!0}}],staticClass:"mt-3 mr-1",attrs:{variant:"secondary"}},[t._v("Tooltip on bottom")]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.left",value:"Tooltip on left",expression:"'Tooltip on left'",modifiers:{left:!0}}],staticClass:"mt-3 mr-1",attrs:{variant:"secondary"}},[t._v("Tooltip on left")])]},proxy:!0}])}),t._v(" "),i("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[i("h4",{staticClass:"card-title"},[t._v("Disabled elements")])]},proxy:!0},{key:"headerAction",fn:function(){return[i("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[i("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[i("p",[t._v("Elements with the "),i("code",[t._v("disabled")]),t._v(" attribute aren’t interactive, meaning users cannot focus, hover, or click them to trigger a tooltip (or popover). As a workaround, you’ll want to trigger the tooltip from a wrapper "),i("code",[t._v("<div>")]),t._v(" or "),i("code",[t._v("<span>")]),t._v(", ideally made keyboard-focusable using "),i("code",[t._v('tabindex="0"')]),t._v(", and override the "),i("code",[t._v("pointer-events")]),t._v(" on the disabled element.")]),t._v(" "),i("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-2"}},[i("div",{staticClass:"card"},[i("kbd",{staticClass:"bg-dark"},[i("pre",{staticClass:"text-white",attrs:{id:"disabled-1"}},[t._v("                    "),i("code",[t._v('\n<span class="d-inline-block" tabindex="0" v-b-tooltip.top title="Disabled tooltip">\n  <b-button variant="primary" style="pointer-events: none;" disabled>Disabled button</b-button>\n</span>\n')])])])])]),t._v(" "),i("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.top",modifiers:{top:!0}}],staticClass:"d-inline-block",attrs:{tabindex:"0",title:"Disabled tooltip"}},[i("b-button",{staticStyle:{"pointer-events":"none"},attrs:{variant:"primary",disabled:""}},[t._v("Disabled button")])],1)]},proxy:!0}])})],1),t._v(" "),i("b-col",{attrs:{lg:"6",sm:"12"}},[i("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[i("h4",{staticClass:"card-title"},[t._v("Tooltips")])]},proxy:!0},{key:"headerAction",fn:function(){return[i("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[i("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[i("p",[t._v("Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left Using background colors")]),t._v(" "),i("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-3"}},[i("div",{staticClass:"card"},[i("kbd",{staticClass:"bg-dark"},[i("pre",{staticClass:"text-white",attrs:{id:"tooltips-2"}},[t._v("                    "),i("code",[t._v('\n <b-button v-b-tooltip.top="\'Tooltip on top\'" variant="primary" class="mt-3 mr-1">Tooltip on top</b-button>\n<b-button v-b-tooltip.right="\'Tooltip on right\'" variant="success" class="mt-3 mr-1">Tooltip on right</b-button>\n<b-button v-b-tooltip.bottom="\'Tooltip on bottom\'" variant="danger" class="mt-3 mr-1">Tooltip on bottom</b-button>\n<b-button v-b-tooltip.left="\'Tooltip on left\'" variant="info" class="mt-3 mr-1">Tooltip on left</b-button>\n')])])])])]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.top",value:"Tooltip on top",expression:"'Tooltip on top'",modifiers:{top:!0}}],staticClass:"mt-3 mr-1",attrs:{variant:"primary"}},[t._v("Tooltip on top")]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.right",value:"Tooltip on right",expression:"'Tooltip on right'",modifiers:{right:!0}}],staticClass:"mt-3 mr-1",attrs:{variant:"success"}},[t._v("Tooltip on right")]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom",value:"Tooltip on bottom",expression:"'Tooltip on bottom'",modifiers:{bottom:!0}}],staticClass:"mt-3 mr-1",attrs:{variant:"danger"}},[t._v("Tooltip on bottom")]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.left",value:"Tooltip on left",expression:"'Tooltip on left'",modifiers:{left:!0}}],staticClass:"mt-3 mr-1",attrs:{variant:"info"}},[t._v("Tooltip on left")])]},proxy:!0}])}),t._v(" "),i("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[i("h4",{staticClass:"card-title"},[t._v("Tooltips")])]},proxy:!0},{key:"headerAction",fn:function(){return[i("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4",modifiers:{"collapse-4":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[i("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[i("p",[t._v("Hover over the buttons below to see the four tooltips directions: top, right, bottom, and left Using Light background colors")]),t._v(" "),i("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-4"}},[i("div",{staticClass:"card"},[i("kbd",{staticClass:"bg-dark"},[i("pre",{staticClass:"text-white",attrs:{id:"tooltips-2"}},[t._v("                    "),i("code",[t._v('\n<b-button v-b-tooltip.top="\'Tooltip on top\'" variant="none" class="iq-bg-primary mt-3">Tooltip on top</b-button>\n<b-button v-b-tooltip.right="\'Tooltip on right\'" variant="none" class="iq-bg-success mt-3">Tooltip on right</b-button>\n<b-button v-b-tooltip.bottom="\'Tooltip on bottom\'" variant="none" class="iq-bg-danger mt-3">Tooltip on bottom</b-button>\n<b-button v-b-tooltip.left="\'Tooltip on left\'" variant="none" class="iq-bg-info mt-3">Tooltip on left</b-button>\n')])])])])]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.top",value:"Tooltip on top",expression:"'Tooltip on top'",modifiers:{top:!0}}],staticClass:"iq-bg-primary mt-3 mr-1",attrs:{variant:"none"}},[t._v("Tooltip on top")]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.right",value:"Tooltip on right",expression:"'Tooltip on right'",modifiers:{right:!0}}],staticClass:"iq-bg-success mt-3  mr-1",attrs:{variant:"none"}},[t._v("Tooltip on right")]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.bottom",value:"Tooltip on bottom",expression:"'Tooltip on bottom'",modifiers:{bottom:!0}}],staticClass:"iq-bg-danger mt-3  mr-1",attrs:{variant:"none"}},[t._v("Tooltip on bottom")]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.left",value:"Tooltip on left",expression:"'Tooltip on left'",modifiers:{left:!0}}],staticClass:"iq-bg-info mt-3  mr-1",attrs:{variant:"none"}},[t._v("Tooltip on left")])]},proxy:!0}])})],1),t._v(" "),i("b-col",{attrs:{lg:"12"}},[i("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[i("h4",{staticClass:"card-title"},[t._v("Hover elements")])]},proxy:!0},{key:"headerAction",fn:function(){return[i("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5",modifiers:{"collapse-5":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[i("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[i("p",[t._v("Hover over the buttons below to see the tooltip.")]),t._v(" "),i("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-5"}},[i("div",{staticClass:"card"},[i("kbd",{staticClass:"bg-dark"},[i("pre",{staticClass:"text-white",attrs:{id:"tooltips-5"}},[t._v("                    "),i("code",[t._v('\n<b-button href="#" v-b-tooltip.hover="\'Some tooltip text!\'" variant="link" >Hover over me</b-button>\n')])])])])]),t._v(" "),i("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:"Some tooltip text!",expression:"'Some tooltip text!'",modifiers:{hover:!0}}],attrs:{href:"#",variant:"link"}},[t._v("Hover over me")])]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);o.default=r.exports}}]);
//# sourceMappingURL=109.js.map