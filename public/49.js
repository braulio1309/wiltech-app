(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1181:function(t,s,a){"use strict";a(677)},1182:function(t,s,a){(s=a(28)(!1)).push([t.i,".b-toast .toast{opacity:1!important}",""]),t.exports=s},1912:function(t,s,a){"use strict";a.r(s);var e=a(16),i={name:"UiNotifications",mounted:function(){e.c.index()},methods:{makeToast:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.$bvToast.toast("This is toast numbe",{title:"BootstrapVue Toast",autoHideDelay:5e3,appendToast:t})}}},o=(a(1181),a(8)),l=Object(o.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{lg:"6",sm:"12"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Notifications")])]},proxy:!0},{key:"headerAction",fn:function(){return[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-1",modifiers:{"collapse-1":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[a("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[a("p",[t._v("Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.")]),t._v(" "),a("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-1"}},[a("div",{staticClass:"card"},[a("kbd",{staticClass:"bg-dark"},[a("pre",{staticClass:"text-white",attrs:{id:"notification-1"}},[t._v("                    "),a("code",[t._v('\n<b-toast visible static no-auto-hide no-close-button>\n  <template v-slot:toast-title>\n    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\n      <rect width="100%" height="100%" fill="#007aff"></rect>\n    </svg>\n    <strong class="mr-auto">Bootstrap</strong>\n    <small>11 mins ago</small>\n    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">\n      <span aria-hidden="true">×</span>\n    </button>\n  </template>\n  Hello, world! This is a toast message.\n</b-toast>\n')])])])])]),t._v(" "),a("b-toast",{attrs:{visible:"",static:"","no-auto-hide":"","no-close-button":""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("svg",{staticClass:"bd-placeholder-img rounded mr-2",attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"}},[a("rect",{attrs:{width:"100%",height:"100%",fill:"#007aff"}})]),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Bootstrap")]),t._v(" "),a("small",[t._v("11 mins ago")]),t._v(" "),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]},proxy:!0}])},[t._v("\n              Hello, world! This is a toast message.\n            ")])]},proxy:!0}])}),t._v(" "),a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Stacking")])]},proxy:!0},{key:"headerAction",fn:function(){return[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-2",modifiers:{"collapse-2":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[a("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[a("p",[t._v("When you have multiple toasts, we default to vertically stacking them in a readable manner.")]),t._v(" "),a("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-2"}},[a("div",{staticClass:"card"},[a("kbd",{staticClass:"bg-dark"},[a("pre",{staticClass:"text-white",attrs:{id:"notification-2"}},[t._v("                    "),a("code",[t._v('\n<b-toast visible static no-auto-hide no-close-button>\n  <template v-slot:toast-title>\n    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\n      <rect width="100%" height="100%" fill="#007aff"></rect>\n    </svg>\n    <strong class="mr-auto">Bootstrap</strong>\n    <small class="text-muted">just now</small>\n    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">\n      <span aria-hidden="true">×</span>\n    </button>\n  </template>\n  See? Just like this.\n</b-toast>\n<b-toast visible static no-auto-hide no-close-button>\n  <template v-slot:toast-title>\n    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\n      <rect width="100%" height="100%" fill="#007aff"></rect>\n    </svg>\n    <strong class="mr-auto">Bootstrap</strong>\n    <small class="text-muted">2 seconds ago</small>\n    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">\n      <span aria-hidden="true">×</span>\n    </button>\n  </template>\n  Heads up, toasts will stack automatically\n</b-toast>\n')])])])])]),t._v(" "),a("b-toast",{attrs:{visible:"",static:"","no-auto-hide":"","no-close-button":""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("svg",{staticClass:"bd-placeholder-img rounded mr-2",attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"}},[a("rect",{attrs:{width:"100%",height:"100%",fill:"#007aff"}})]),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Bootstrap")]),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("just now")]),t._v(" "),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]},proxy:!0}])},[t._v("\n              See? Just like this.\n            ")]),t._v(" "),a("b-toast",{attrs:{visible:"",static:"","no-auto-hide":"","no-close-button":""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("svg",{staticClass:"bd-placeholder-img rounded mr-2",attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"}},[a("rect",{attrs:{width:"100%",height:"100%",fill:"#007aff"}})]),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Bootstrap")]),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("2 seconds ago")]),t._v(" "),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]},proxy:!0}])},[t._v("\n              Heads up, toasts will stack automatically\n            ")])]},proxy:!0}])}),t._v(" "),a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Notifications horizontally and/or vertically")])]},proxy:!0},{key:"headerAction",fn:function(){return[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-3",modifiers:{"collapse-3":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[a("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[a("p",[t._v("You can also get fancy with flexbox utilities to align toasts horizontally and/or vertically.")]),t._v(" "),a("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-3"}},[a("div",{staticClass:"card"},[a("kbd",{staticClass:"bg-dark"},[a("pre",{staticClass:"text-white",attrs:{id:"notification-3"}},[t._v("                    "),a("code",[t._v('\n<div class="p-3 bg-dark">\n  <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center" style="min-height: 200px;">\n    <b-toast visible static no-auto-hide no-close-button>\n      <template v-slot:toast-title>\n        <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\n          <rect width="100%" height="100%" fill="#007aff"></rect>\n        </svg>\n        <strong class="mr-auto">Bootstrap</strong>\n        <small>11 mins ago</small>\n        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">\n          <span aria-hidden="true">×</span>\n        </button>\n      </template>\n      Hello, world! This is a toast message.\n    </b-toast>\n  </div>\n</div>\n')])])])])]),t._v(" "),a("div",{staticClass:"p-3 bg-dark"},[a("div",{staticClass:"d-flex justify-content-center align-items-center",staticStyle:{"min-height":"200px"},attrs:{"aria-live":"polite","aria-atomic":"true"}},[a("b-toast",{attrs:{visible:"",static:"","no-auto-hide":"","no-close-button":""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("svg",{staticClass:"bd-placeholder-img rounded mr-2",attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"}},[a("rect",{attrs:{width:"100%",height:"100%",fill:"#007aff"}})]),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Bootstrap")]),t._v(" "),a("small",[t._v("11 mins ago")]),t._v(" "),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]},proxy:!0}])},[t._v("\n                  Hello, world! This is a toast message.\n                ")])],1)])]},proxy:!0}])})],1),t._v(" "),a("b-col",{attrs:{lg:"6",sm:"12"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Notifications")])]},proxy:!0},{key:"headerAction",fn:function(){return[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-4",modifiers:{"collapse-4":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[a("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[a("p",[t._v("Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.")]),t._v(" "),a("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-4"}},[a("div",{staticClass:"card"},[a("kbd",{staticClass:"bg-dark"},[a("pre",{staticClass:"text-white",attrs:{id:"notification-4"}},[t._v("                    "),a("code",[t._v('\n<div class="p-3 bg-dark">\n  <b-toast visible static no-auto-hide no-close-button>\n    <template v-slot:toast-title>\n      <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\n        <rect width="100%" height="100%" fill="#007aff"></rect>\n      </svg>\n      <strong class="mr-auto">Bootstrap</strong>\n      <small>11 mins ago</small>\n      <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">\n        <span aria-hidden="true">×</span>\n      </button>\n    </template>\n    Hello, world! This is a toast message.\n  </b-toast>\n</div>\n')])])])])]),t._v(" "),a("div",{staticClass:"p-3 bg-dark"},[a("b-toast",{attrs:{visible:"",static:"","no-auto-hide":"","no-close-button":""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("svg",{staticClass:"bd-placeholder-img rounded mr-2",attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"}},[a("rect",{attrs:{width:"100%",height:"100%",fill:"#007aff"}})]),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Bootstrap")]),t._v(" "),a("small",[t._v("11 mins ago")]),t._v(" "),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]},proxy:!0}])},[t._v("\n                  Hello, world! This is a toast message.\n                ")])],1)]},proxy:!0}])}),t._v(" "),a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Stacking Placement")])]},proxy:!0},{key:"headerAction",fn:function(){return[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-5",modifiers:{"collapse-5":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[a("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[a("p",[t._v("Place toasts with custom CSS as you need them. The top right is often used for notifications, as is the top middle. If you’re only ever going to show one toast at a time, put the positioning styles right on the "),a("code",[t._v(".toast")]),t._v(".")]),t._v(" "),a("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-5"}},[a("div",{staticClass:"card"},[a("kbd",{staticClass:"bg-dark"},[a("pre",{staticClass:"text-white",attrs:{id:"notification-5"}},[t._v("                    "),a("code",[t._v('\n<div class="p-3 bg-dark">\n  <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">\n    <b-toast visible static no-auto-hide no-close-button toast-class="position-absolute">\n      <template v-slot:toast-title>\n        <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\n          <rect width="100%" height="100%" fill="#007aff"></rect>\n        </svg>\n        <strong class="mr-auto">Bootstrap</strong>\n        <small>11 mins ago</small>\n        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">\n          <span aria-hidden="true">×</span>\n        </button>\n      </template>\n      Hello, world! This is a toast message.\n    </b-toast>\n  </div>\n</div>\n<p class="mt-3">For systems that generate more notifications, consider using a wrapping element so they can easily stack.</p>\n<div class="bg-dark p-3 mt-3">\n  <div aria-live="polite" aria-atomic="true" style="position: relative; min-height: 200px;">\n    <div style="position: absolute; top: 0; right: 0;">\n    <b-toast visible static no-auto-hide no-close-button>\n      <template v-slot:toast-title>\n        <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\n          <rect width="100%" height="100%" fill="#007aff"></rect>\n        </svg>\n        <strong class="mr-auto">Bootstrap</strong>\n        <small class="text-muted">just now</small>\n        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">\n          <span aria-hidden="true">×</span>\n        </button>\n      </template>\n      See? Just like this.\n    </b-toast>\n    <b-toast visible static no-auto-hide no-close-button>\n      <template v-slot:toast-title>\n        <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\n          <rect width="100%" height="100%" fill="#007aff"></rect>\n        </svg>\n        <strong class="mr-auto">Bootstrap</strong>\n        <small class="text-muted">2 seconds ago</small>\n        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">\n          <span aria-hidden="true">×</span>\n        </button>\n      </template>\n      Heads up, toasts will stack automatically\n    </b-toast>\n    </div>\n  </div>\n</div>\n')])])])])]),t._v(" "),a("div",{staticClass:"p-3 bg-dark"},[a("div",{staticStyle:{position:"relative","min-height":"200px"},attrs:{"aria-live":"polite","aria-atomic":"true"}},[a("b-toast",{attrs:{visible:"",static:"","no-auto-hide":"","no-close-button":"","toast-class":"position-absolute"},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("svg",{staticClass:"bd-placeholder-img rounded mr-2",attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"}},[a("rect",{attrs:{width:"100%",height:"100%",fill:"#007aff"}})]),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Bootstrap")]),t._v(" "),a("small",[t._v("11 mins ago")]),t._v(" "),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]},proxy:!0}])},[t._v("\n                  Hello, world! This is a toast message.\n                ")])],1)]),t._v(" "),a("p",{staticClass:"mt-3"},[t._v("For systems that generate more notifications, consider using a wrapping element so they can easily stack.")]),t._v(" "),a("div",{staticClass:"bg-dark p-3 mt-3"},[a("div",{staticStyle:{position:"relative","min-height":"200px"},attrs:{"aria-live":"polite","aria-atomic":"true"}},[a("div",{staticStyle:{position:"absolute",top:"0",right:"0"}},[a("b-toast",{attrs:{visible:"",static:"","no-auto-hide":"","no-close-button":""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("svg",{staticClass:"bd-placeholder-img rounded mr-2",attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"}},[a("rect",{attrs:{width:"100%",height:"100%",fill:"#007aff"}})]),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Bootstrap")]),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("just now")]),t._v(" "),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]},proxy:!0}])},[t._v("\n                  See? Just like this.\n                ")]),t._v(" "),a("b-toast",{attrs:{visible:"",static:"","no-auto-hide":"","no-close-button":""},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("svg",{staticClass:"bd-placeholder-img rounded mr-2",attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"}},[a("rect",{attrs:{width:"100%",height:"100%",fill:"#007aff"}})]),t._v(" "),a("strong",{staticClass:"mr-auto"},[t._v("Bootstrap")]),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("2 seconds ago")]),t._v(" "),a("button",{staticClass:"ml-2 mb-1 close",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]},proxy:!0}])},[t._v("\n                  Heads up, toasts will stack automatically\n                ")])],1)])])]},proxy:!0}])})],1),t._v(" "),a("b-col",{attrs:{sm:"12"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("Notifications")])]},proxy:!0},{key:"headerAction",fn:function(){return[a("a",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse-6",modifiers:{"collapse-6":!0}}],staticClass:"text-primary float-right",attrs:{role:"button"}},[a("i",{staticClass:"ri-code-s-slash-line"})])]},proxy:!0},{key:"body",fn:function(){return[a("p",[t._v("Toasts are as flexible as you need and have very little required markup. At a minimum, we require a single element to contain your “toasted” content and strongly encourage a dismiss button.")]),t._v(" "),a("b-collapse",{staticClass:"mb-2",attrs:{id:"collapse-6"}},[a("div",{staticClass:"card"},[a("kbd",{staticClass:"bg-dark"},[a("pre",{staticClass:"text-white",attrs:{id:"notification-6"}},[t._v("                    "),a("code",[t._v('\n<b-toast visible static no-auto-hide no-close-button toast-class="bg-primary" body-class="text-white"  header-class="bg-primary text-white">\n  <template v-slot:toast-title>\n    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\n      <rect width="100%" height="100%" fill="#fff"></rect>\n    </svg>\n    <strong class="mr-auto text-white">Bootstrap</strong>\n    <small class="text-white">11 mins ago</small>\n    <button type="button" class="ml-2 mb-1 close text-white" data-dismiss="toast" aria-label="Close">\n      <span aria-hidden="true">×</span>\n    </button>\n  </template>\n  See? Just like this.\n</b-toast>\n<b-toast variant="success" visible static no-auto-hide no-close-button toast-class="bg-success mt-3" body-class="text-white"  header-class="bg-success text-white">\n  <template v-slot:toast-title>\n    <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img">\n      <rect width="100%" height="100%" fill="#fff"></rect>\n    </svg>\n    <strong class="mr-auto text-white">Bootstrap</strong>\n    <small class="text-white">11 mins ago</small>\n    <button type="button" class="ml-2 mb-1 close text-white" data-dismiss="toast" aria-label="Close">\n      <span aria-hidden="true">×</span>\n    </button>\n  </template>\n  Heads up, toasts will stack automatically\n</b-toast>\n')])])])])]),t._v(" "),a("b-toast",{attrs:{visible:"",static:"","no-auto-hide":"","no-close-button":"","toast-class":"bg-primary","body-class":"text-white","header-class":"bg-primary text-white"},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("svg",{staticClass:"bd-placeholder-img rounded mr-2",attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"}},[a("rect",{attrs:{width:"100%",height:"100%",fill:"#fff"}})]),t._v(" "),a("strong",{staticClass:"mr-auto text-white"},[t._v("Bootstrap")]),t._v(" "),a("small",{staticClass:"text-white"},[t._v("11 mins ago")]),t._v(" "),a("button",{staticClass:"ml-2 mb-1 close text-white",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]},proxy:!0}])},[t._v("\n              See? Just like this.\n            ")]),t._v(" "),a("b-toast",{attrs:{variant:"success",visible:"",static:"","no-auto-hide":"","no-close-button":"","toast-class":"bg-success mt-3","body-class":"text-white","header-class":"bg-success text-white"},scopedSlots:t._u([{key:"toast-title",fn:function(){return[a("svg",{staticClass:"bd-placeholder-img rounded mr-2",attrs:{width:"20",height:"20",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid slice",focusable:"false",role:"img"}},[a("rect",{attrs:{width:"100%",height:"100%",fill:"#fff"}})]),t._v(" "),a("strong",{staticClass:"mr-auto text-white"},[t._v("Bootstrap")]),t._v(" "),a("small",{staticClass:"text-white"},[t._v("11 mins ago")]),t._v(" "),a("button",{staticClass:"ml-2 mb-1 close text-white",attrs:{type:"button","data-dismiss":"toast","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]},proxy:!0}])},[t._v("\n              Heads up, toasts will stack automatically\n            ")])]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);s.default=l.exports},677:function(t,s,a){var e=a(1182);"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a(40)(e,i);e.locals&&(t.exports=e.locals)}}]);
//# sourceMappingURL=49.js.map