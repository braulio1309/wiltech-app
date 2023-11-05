(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1126:function(t,e,i){"use strict";i(670)},1127:function(t,e,i){var a=i(28),r=i(208),n=i(273);(e=a(!1)).i(r),e.i(n),e.push([t.i,"",""]),t.exports=e},138:function(t,e,i){"use strict";var a=i(16),r={name:"Loader",props:{dark:{type:Boolean,default:!1}},watch:{$route:function(t,e){var i=document.getElementById("loading");a.b.fadeIn(i,{duration:150}),i.classList.remove("d-none")}},computed:{},mounted:function(){}},n=i(8),s=Object(n.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"loading"}},[e("div",{attrs:{id:"loading-center"}})])}],!1,null,null,null);e.a=s.exports},151:function(t,e,i){"use strict";var a=i(628),r=i.n(a),n=i(629),s=i.n(n),o=i(44);function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){d(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function d(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var u={name:"FloatingButton",data:function(){return{rtl:!1,dark:!1}},computed:c({},Object(o.c)({darkMode:"Setting/darkModeState",rtlMode:"Setting/rtlModeState",colors:"Setting/colorState"})),methods:c({changeColor:function(t){document.documentElement.style.setProperty("--iq-primary",t.primary),document.documentElement.style.setProperty("--iq-primary-light",t.primaryLight),document.documentElement.style.setProperty("--iq-primary-dark",t.primaryDark)},reset:function(){this.changeColor({primary:"#827af3",primaryLight:"#b47af3",bodyBgLight:"#efeefd",bodyBgDark:"#1d203f"}),this.themeMode(!1),this.rtlChange(!1)},rtlChange:function(t){this.rtl=t,this.modeChange({rtl:this.rtl,dark:this.dark})},darkChange:function(t){this.dark=t,this.logo=t?r.a:s.a,this.$emit("onLogo",this.logo),this.modeChange({rtl:this.rtl,dark:this.dark})}},Object(o.b)({modeChange:"Setting/layoutModeAction"}))},m=i(8),p=Object(m.a)(u,(function(){var t=this.$createElement;return(this._self._c||t)("div")}),[],!1,null,null,null).exports,v=i(16),g={name:"LayoutFooter",components:{FloatingButton:p},data:function(){return{appName:v.a}}},f=Object(m.a)(g,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("footer",{staticClass:"iq-footer"},[i("div",{staticClass:"container-fluid"},[i("div",{staticClass:"row"},[t._m(0),t._v(" "),i("div",{staticClass:"col-lg-6 text-right"},[t._v("\n          Copyright 2020 "),i("a",{attrs:{href:"#"}},[t._v(t._s(t.appName))]),t._v(" All Rights Reserved.\n        ")])])])]),t._v(" "),i("FloatingButton")],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-lg-6"},[e("ul",{staticClass:"list-inline mb-0"},[e("li",{staticClass:"list-inline-item"},[e("a",{attrs:{href:"#"}},[this._v("Privacy Policy")])]),this._v(" "),e("li",{staticClass:"list-inline-item"},[e("a",{attrs:{href:"#"}},[this._v("Terms of Use")])])])])}],!1,null,null,null);e.a=f.exports},152:function(t,e,i){"use strict";var a=i(16),r={name:"List",props:{items:Array,className:{type:String,default:"iq-menu"},open:{type:Boolean,default:!1},idName:{type:String,default:"sidebar"},accordianName:{type:String,default:"sidebar"},sidebarGroupTitle:{type:Boolean,default:!0}},components:{List:o},computed:{hideListMenuTitle:function(){return this.sidebarGroupTitle}},mounted:function(){},methods:{activeLink:function(t){return a.c.getActiveLink(t,this.$route.name)}}},n=i(8),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-collapse",{class:t.className,attrs:{tag:"ul",visible:t.open,id:t.idName,accordion:t.accordianName}},t._l(t.items,(function(e,a){return i("li",{key:a,class:t.hideListMenuTitle?e.is_heading?"iq-menu-title":t.activeLink(e)&&e.children||t.activeLink(e)?"active":"":"p-0"},[e.is_heading&&t.hideListMenuTitle?i("i",{staticClass:"ri-subtract-line"}):t._e(),t._v(" "),e.is_heading&&t.hideListMenuTitle?i("span",[t._v(t._s(t.$t(e.name)))]):t._e(),t._v(" "),e.is_heading?t._e():i("router-link",{directives:[{name:"b-toggle",rawName:"v-b-toggle",value:e.name,expression:"item.name"}],class:"iq-waves-effect "+(t.activeLink(e)&&e.children||t.activeLink(e)?"active":""),attrs:{to:e.link}},[e.is_icon_class?i("i",{class:e.icon}):void 0,t._v(" "),i("span",[t._v(t._s(t.$t(e.name)))]),t._v(" "),e.children?i("i",{staticClass:"ri-arrow-right-s-line iq-arrow-right"}):t._e(),t._v(" "),t.hideListMenuTitle?i("small",{class:e.append_class,domProps:{innerHTML:t._s(e.append)}}):t._e()],2),t._v(" "),e.children?i("List",{attrs:{items:e.children,sidebarGroupTitle:t.hideListMenuTitle,open:!(""===e.link.name||!t.activeLink(e)||!e.children)||!(""===e.link.name||!t.activeLink(e)),idName:e.name,accordianName:"sidebar-accordion-"+e.class_name,className:"iq-submenu "+e.class_name}}):t._e()],1)})),0)}),[],!1,null,null,null),o=e.a=s.exports},1888:function(t,e,i){"use strict";i.r(e);var a=i(223),r=i(16),n=i(44),s=i(152),o=i(281);function l(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function c(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var d={name:"SidebarStyle1",props:{logoClass:{type:String,default:""}},components:{CollapseMenu:s.a},mounted:function(){r.c.SmoothScrollbar()},data:function(){return{appName:r.a,SideBarItems:o}},computed:function(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?l(Object(i),!0).forEach((function(e){c(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}({},Object(n.c)({bookmark:"Setting/bookmarkState"})),methods:{sidebarMini:function(){r.c.triggerSet()}}},u=i(8),m=Object(u.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"iq-sidebar-small bg-primary"},[a("div",{staticClass:"sidebar-top"},[a("div",{staticClass:"iq-sidebar-small-logo"},[a("router-link",{attrs:{to:"/"}},[a("img",{class:"img-fluid "+t.logoClass,attrs:{src:i(631),alt:""}})])],1),t._v(" "),a("div",{staticClass:"sidebar-menu-icon"},t._l(t.bookmark,(function(t,e){return a("router-link",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.right.hover",modifiers:{right:!0,hover:!0}}],key:e,staticClass:"iq-waves-effect",attrs:{to:t.link,title:t.title}},[a("i",{class:""+t.icon})])})),1)]),t._v(" "),a("div",{staticClass:"sidebar-bottom"},[a("div",{staticClass:"sidebar-menu-icon"},[t._m(0),t._v(" "),a("div",{staticClass:"iq-menu-bt align-self-center"},[a("div",{staticClass:"wrapper-menu",on:{click:t.sidebarMini}},[t._m(1),t._v(" "),t._m(2)])])])])]),t._v(" "),a("div",{staticClass:"iq-sidebar"},[a("div",{staticClass:"iq-sidebar-logo d-flex justify-content-between"},[a("router-link",{attrs:{to:{name:"dashboard.home-1"}}},[a("span",[t._v(t._s(t.appName))])])],1),t._v(" "),a("div",{attrs:{id:"sidebar-scrollbar"}},[a("nav",{staticClass:"iq-sidebar-menu"},[a("CollapseMenu",{attrs:{items:t.SideBarItems,open:!0,sidebarGroupTitle:!0}})],1),t._v(" "),a("div",{staticClass:"p-3"})])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"iq-waves-effect",attrs:{href:"account-setting.html","data-toggle":"tooltip","data-placement":"right",title:"","data-original-title":"Setting"}},[e("i",{staticClass:"ri-settings-2-fill"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-close"},[e("i",{staticClass:"ri-arrow-left-line"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"menu-open"},[e("i",{staticClass:"ri-arrow-right-line"})])}],!1,null,null,null).exports,p=i(151),v={name:"Layout5",components:{Loader:i(138).a,HeaderStyle:a.a,SidebarStyle1:m,LayoutFooter:p.a},mounted:function(){document.body.classList="two-sidebar"},destroyed:function(){document.body.classList=""}},g=(i(1126),Object(u.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Loader"),this._v(" "),e("div",{staticClass:"wrapper"},[e("SidebarStyle1",{attrs:{logoClass:"w-75"}}),this._v(" "),e("HeaderStyle"),this._v(" "),e("div",{staticClass:"content-page",attrs:{id:"content-page"}},[e("transition",{attrs:{name:"router-anim","enter-active-class":"animated  fadeInUp",mode:"out-in","leave-active-class":"animated fadeOut"}},[e("router-view")],1)],1)],1),this._v(" "),e("LayoutFooter")],1)}),[],!1,null,null,null));e.default=g.exports},223:function(t,e,i){"use strict";var a=i(44);function r(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function n(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?r(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function s(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var o={name:"GlobalSearch",props:{search:{type:String,default:""},show:{type:Boolean,default:!1}},computed:n(n({},Object(a.c)({sidebar:"Setting/globalSearchState"})),{},{filteredList:function(){var t=this;return this.sidebar.filter((function(e){return e.title.toLowerCase().includes(t.search.toLowerCase())}))}}),mounted:function(){},data:function(){return{globalSearch:""}},methods:{removeClass:function(){document.getElementById("searchbox-datalink").classList.remove("show-data"),this.$emit("closeSearch",!0)}}},l=i(8),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{class:"searchbox-datalink",attrs:{id:"searchbox-datalink"}},[i("h6",{staticClass:"pl-3 pt-3 pb-3"},[t._v("Pages")]),t._v(" "),i("ul",{staticClass:"m-0 pl-3 pr-3 pb-3"},[t.filteredList.length>0?t._l(t.filteredList,(function(e,a){return i("li",{key:a,staticClass:"iq-bg-primary-hover rounded",on:{click:t.removeClass}},[e.is_heading||e.children?t._e():[e.is_heading?t._e():i("router-link",{staticClass:"nav-link  pr-2",attrs:{to:e.link},on:{click:t.removeClass}},[e.is_icon_class?i("i",{class:e.icon+" pr-2"}):void 0,t._v(" "),i("span",[t._v(t._s(e.title))]),t._v(" "),e.children?i("i",{staticClass:"ri-arrow-right-s-line iq-arrow-right"}):t._e()],2)]],2)})):[i("li",{staticClass:"nav-link"},[t._v("Search Not Found")])]],2)])}),[],!1,null,null,null).exports,d=i(16),u=i(278),m=i(545);function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function v(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){g(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var f={name:"HeaderStyle",mixins:[u.a],components:{GlobalSearch:c,Lottie:m.default},data:function(){return{appName:d.a,globalSearch:"",user:""}},mounted:function(){this.me(),this.horizontal||document.addEventListener("click",this.closeSearch,!0)},methods:v({sidebarMini:function(){d.c.triggerSet()},removeClass:function(){this.showSearch=!1,this.showMenu="",this.globalSearch="",null!==document.getElementById("searchbox-datalink")&&void 0!==document.getElementById("searchbox-datalink")&&document.getElementById("searchbox-datalink").classList.remove("show-data")},logout:function(){localStorage.removeItem("user"),localStorage.removeItem("access_token"),this.$router.push({name:"auth1.sign-in1"})},me:function(){this.user=JSON.parse(localStorage.getItem("user")),console.log(this.user)}},Object(a.b)({removeToCart:"Ecommerce/removeToCartAction",langChangeState:"Setting/setLangAction",rtlAdd:"Setting/setRtlAction",rtlRemove:"Setting/removeRtlAction"})),computed:v({},Object(a.c)({cartCount:"Ecommerce/cartCountState",cartItems:"Ecommerce/cartState",bookmark:"Setting/bookmarkState",langsOptions:"Setting/langOptionState",selectedLang:"Setting/langState"}))},h=Object(l.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"iq-top-navbar"},[a("div",{staticClass:"iq-navbar-custom"},[a("div",{staticClass:"iq-sidebar-logo"},[a("div",{staticClass:"top-logo"},[a("router-link",{staticClass:"logo",attrs:{to:{name:"dashboard.home-1"}}},[a("div",{staticClass:"iq-light-logo"},[a("img",{staticClass:"img-fluid",attrs:{src:i(627),alt:"logo"}})]),t._v(" "),a("div",{staticClass:"iq-dark-logo"},[a("img",{staticClass:"img-fluid",attrs:{src:i(333),alt:"logo"}})]),t._v(" "),a("span",[t._v(t._s(t.appName))])])],1)]),t._v(" "),a("nav",{staticClass:"navbar navbar-expand-lg navbar-light p-0"},["two-sidebar"!==t.$route.meta.layout?a("div",{staticClass:"iq-menu-bt align-self-center"},[a("div",{staticClass:"wrapper-menu",on:{click:t.sidebarMini}},[t._m(0)])]):t._e(),t._v(" "),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("ul",{staticClass:"navbar-nav ml-auto navbar-list"})]),t._v(" "),a("ul",{staticClass:"navbar-list"},[a("li",{directives:[{name:"nav-toggle",rawName:"v-nav-toggle"}],staticClass:"rounded"},[a("a",{staticClass:"search-toggle iq-waves-effect d-flex align-items-center bg-primary rounded",attrs:{href:"#"}},[a("img",{staticClass:"img-fluid rounded mr-3",attrs:{src:i(533),alt:"user"}}),t._v(" "),a("div",{staticClass:"caption"},[a("h6",{staticClass:"mb-0 line-height text-white"},[t._v(t._s(this.user.name))])])]),t._v(" "),a("div",{staticClass:"iq-sub-dropdown iq-user-dropdown"},[a("div",{staticClass:"iq-card shadow-none m-0"},[a("div",{staticClass:"iq-card-body p-0 "},[a("div",{staticClass:"bg-primary p-3"},[a("h5",{staticClass:"mb-0 text-white line-height"},[t._v("Hola "+t._s(this.user.name))])]),t._v(" "),a("router-link",{staticClass:"iq-sub-card iq-bg-primary-hover",attrs:{to:{name:"user.edit"}}},[a("div",{staticClass:"media align-items-center"},[a("div",{staticClass:"rounded iq-card-icon iq-bg-primary"},[a("i",{staticClass:"ri-profile-line"})]),t._v(" "),a("div",{staticClass:"media-body ml-3"},[a("h6",{staticClass:"mb-0 "},[t._v("Editar perfil")]),t._v(" "),a("p",{staticClass:"mb-0 font-size-12"},[t._v("Modifica tu información")])])])]),t._v(" "),a("div",{staticClass:"d-inline-block w-100 text-center p-3"},[a("a",{staticClass:"btn btn-primary dark-btn-primary",attrs:{href:"javascript:void(0)",role:"button"},on:{click:t.logout}},[t._v("Cerrar sesión"),a("i",{staticClass:"ri-login-box-line ml-2"})])])],1)])])])])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main-circle"},[e("i",{staticClass:"ri-menu-3-line"})])}],!1,null,null,null);e.a=h.exports},273:function(t,e,i){(e=i(28)(!1)).push([t.i,".vue-slider {\n  display: flex;\n  justify-content: center;\n  margin-top: 1.5rem;\n}\n.vue-slider-rail {\n  background-color: rgba(65, 66, 71, 0.08);\n  border-radius: 3px;\n  cursor: pointer;\n  height: 4px;\n  width: calc(100% - 10px);\n}\n.vue-slider-process {\n  background-color: var(--iq-primary);\n  border-radius: 3px;\n  height: 3px !important;\n}\n.vue-slider-dot-tooltip {\n  cursor: grab;\n  display: flex;\n  font-size: 0.75rem;\n  font-weight: bold;\n  margin-top: 5px;\n}\n.vue-slider-dot-tooltip::before {\n  color: var(--iq-primary);\n  content: '$';\n  margin-right: 4px;\n}\n.vue-slider-dot-tooltip-text .vue-slider-dot-tooltip-inner {\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  text-align: center;\n  white-space: nowrap;\n}\n.vue-slider-dot-handle {\n  background-image: linear-gradient(to top, #f5f5fa, #fff);\n  border-radius: 50%;\n  box-shadow: 0 4px 11px 0 rgba(37, 44, 97, 0.15),\n    0 2px 3px 0 rgba(93, 100, 148, 0.2);\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  height: 100%;\n  width: 100%;\n}\n@media (max-width: 899px) {\n.vue-slider-dot {\n    height: 24px !important;\n    width: 24px !important;\n}\n}\n",""]),t.exports=e},278:function(t,e,i){"use strict";e.a={methods:{langChange:function(t){this.langChangeState(t),this.$i18n.locale=t.value,document.getElementsByClassName("iq-show")[0].classList.remove("iq-show"),"ar"===t.value?this.rtlAdd(t):this.rtlRemove(t)}}}},281:function(t){t.exports=JSON.parse('[{"title":"Dashboard","name":"Escritorio","is_heading":false,"is_active":false,"link":{"name":"dashboard.home-1"},"class_name":"","is_icon_class":true,"icon":"ri-home-4-line"},{"title":"Registrar reparación","name":"Registrar reparación","is_heading":false,"is_active":false,"link":{"name":"reparation.create"},"class_name":"","is_icon_class":true,"icon":"ri-phone-line"},{"title":"Reparaciones documentadas","name":"Reparaciones documentadas","is_heading":false,"is_active":false,"link":{"name":"reparation.list"},"class_name":"","is_icon_class":true,"icon":"ri-file-list-3-line"},{"title":"Buscar reparación","name":"Buscar reparación","is_heading":false,"is_active":false,"link":{"name":"reparation.filters"},"class_name":"","is_icon_class":true,"icon":"ri-zoom-in-line"},{"title":"Diagnostico Tool","name":"Diagnostico Tool","is_heading":false,"is_active":false,"link":{"name":"reparation.filters"},"class_name":"","is_icon_class":true,"icon":"ri-check-line"}]')},533:function(t,e){t.exports="/images/1.jpg?9a2674872255e266e06ba6d0a05935dd"},627:function(t,e){t.exports="/images/logofix.png?3251a31d750843037892c86a7cb0da92"},628:function(t,e){t.exports="/images/dark-logo.gif?5fed16f5c9130057ef15a31d26faf5b4"},629:function(t,e){t.exports="/images/logo-wil.png?ca1161e0a717d959fcbe8732844f6e43"},631:function(t,e){t.exports="/images/logo-2.png?369a7ce41eb50177a6fe213bb377ea2d"},670:function(t,e,i){var a=i(1127);"string"==typeof a&&(a=[[t.i,a,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(40)(a,r);a.locals&&(t.exports=a.locals)}}]);
//# sourceMappingURL=27.js.map