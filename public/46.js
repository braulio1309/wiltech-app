(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1050:function(t,e,i){"use strict";i(662)},1051:function(t,e,i){var s=i(28),a=i(208),n=i(273);(e=s(!1)).i(a),e.i(n),e.push([t.i,"",""]),t.exports=e},1890:function(t,e,i){"use strict";i.r(e);var s=i(223),a=i(490),n=i(151),o=i(138),r={name:"LayoutFixRightside",components:{AmChart:function(){return Promise.all([i.e(1),i.e(2)]).then(i.bind(null,184))}},data:function(){return{projectList:[{title:"Adding Item",subtitle:"Development",color:"danger",code:"G"},{title:"Admin Panel",subtitle:"Development",color:"warning",code:"B"}],country:[{title:"USA",percentage:95,color:"primary"},{title:"India",percentage:75,color:"success"},{title:"Australia",percentage:55,color:"warning"}]}}},l=i(8),c=Object(l.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"iq-right-fixed"},[i("iq-card",{attrs:{"body-class":"pb-0","class-name":"shadow-none"},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[i("h4",{staticClass:"card-title"},[t._v(t._s(t.$t("rightSide.projectStatistic")))])]},proxy:!0},{key:"body",fn:function(){return[i("ul",{staticClass:"suggestions-lists m-0 p-0"},t._l(t.projectList,(function(e,s){return i("li",{key:s,staticClass:"d-flex mb-4 align-items-center"},[i("div",{class:"profile-icon iq-bg-"+e.color},[i("span",[t._v(t._s(e.code))])]),t._v(" "),i("div",{staticClass:"media-support-info ml-3"},[i("h6",[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"mb-0"},[t._v(t._s(e.subtitle))])]),t._v(" "),i("div",{staticClass:"iq-card-header-toolbar d-flex align-items-center"},[i("b-dropdown",{attrs:{id:"dropdownMenuButton41",right:"",variant:"none","data-toggle":"dropdown"},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("span",{staticClass:"text-primary"},[i("i",{staticClass:"ri-more-fill"})])]},proxy:!0}],null,!0)},[t._v(" "),i("b-dropdown-item",{attrs:{href:"#"}},[i("i",{staticClass:"ri-user-unfollow-line mr-2"}),t._v(t._s(t.$t("dropdown.unfollow")))]),t._v(" "),i("b-dropdown-item",{attrs:{href:"#"}},[i("i",{staticClass:"ri-close-circle-line mr-2"}),t._v(t._s(t.$t("dropdown.follow")))]),t._v(" "),i("b-dropdown-item",{attrs:{href:"#"}},[i("i",{staticClass:"ri-lock-line mr-2"}),t._v(t._s(t.$t("dropdown.block")))])],1)],1)])})),0)]},proxy:!0}])}),t._v(" "),i("iq-card",{attrs:{"class-name":"wow fadeInUp shadow-none"},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[i("h4",{staticClass:"card-title"},[t._v(t._s(t.$t("rightSide.countries")))])]},proxy:!0},{key:"headerAction",fn:function(){},proxy:!0},{key:"body",fn:function(){return[i("b-row",[i("b-col",{attrs:{lg:"12"}},t._l(t.country,(function(e,s){return i("div",{key:s,staticClass:"iq-details",class:{"mt-4":0!=s}},[i("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),i("div",{staticClass:"percentage float-right text-primary"},[t._v(t._s(e.percentage)+" "),i("span",[t._v("%")])]),t._v(" "),i("div",{staticClass:"iq-progress-bar-linear d-inline-block w-100"},[i("Progressbar",{attrs:{value:e.percentage,color:e.color}})],1)])})),0)],1)]},proxy:!0}])})],1)}),[],!1,null,null,null).exports,d={name:"Layout1",components:{Loader:o.a,HeaderStyle:s.a,SidebarStyle:a.a,LayoutFixRightSide:c,LayoutFooter:n.a},mounted:function(){document.body.classList="sidebar-main-active right-column-fixed header-top-bgcolor"},destroyed:function(){document.body.classList=""},methods:{}},u=(i(1050),Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Loader"),this._v(" "),e("div",{staticClass:"wrapper"},[e("SidebarStyle"),this._v(" "),e("HeaderStyle"),this._v(" "),e("div",{staticClass:"content-page",attrs:{id:"content-page"}},[e("transition",{attrs:{name:"router-anim","enter-active-class":"animated  fadeInUp",mode:"out-in","leave-active-class":"animated fadeOut"}},[e("router-view")],1)],1)],1),this._v(" "),e("LayoutFooter")],1)}),[],!1,null,null,null));e.default=u.exports},662:function(t,e,i){var s=i(1051);"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};i(40)(s,a);s.locals&&(t.exports=s.locals)}}]);
//# sourceMappingURL=46.js.map