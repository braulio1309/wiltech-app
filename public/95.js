(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{1864:function(t,e,a){"use strict";a.r(e);a(1216),a(1218);var r=a(747),n=a(16),s=a(522),i=a(206),o=a(36),l=a.n(o).a.extend({mixins:[{data:function(){return{}},methods:{removeData:function(t){i.a.collection("users").doc(t).delete(),n.c.showSnackbar("success","User has been remove successfully.")}}}]}),u=a(8),c=Object(u.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"user-actions",attrs:{id:this.params.data.id}},[a("router-link",{attrs:{to:{name:"user.edit",params:{id:this.params.data.id}}}},[a("button",{staticClass:"btn btn-default text-success",attrs:{type:"button",attr:this.params.data.id,"data-action-type":"edit"}},[a("i",{staticClass:"fa fa-pencil"}),t._v(" Edit\n    ")])]),t._v(" "),a("button",{staticClass:"btn btn-default text-danger",attrs:{type:"button",attr:this.params.data.id,"data-action-type":"remove"},on:{click:function(e){return t.removeData(t.params.data.id)}}},[a("i",{staticClass:"fa fa-trash"}),t._v(" Delete\n  ")])],1)}),[],!1,null,null,null).exports,d={name:"UserList",mounted:function(){n.c.index()},data:function(){return{columnDefs:null,rowData:[],modules:r.a}},firestore:function(){return{rowData:i.a.collection("users")}},components:{AgGridVue:s.AgGridVue,ActionUser:c},beforeMount:function(){this.columnDefs=[{headerName:"Name",field:"name",sortable:!0,filter:"agTextColumnFilter"},{headerName:"Company",field:"company",sortable:!0,filter:!0},{headerName:"Email",field:"email",sortable:!0,filter:!0},{headerName:"Country",field:"country",sortable:!0,filter:!0},{headerName:"Role",field:"role",sortable:!0,filter:!0},{headerName:"Actions",cellRendererFramework:c}]},method:{}},m=Object(u.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{sm:"12"}},[a("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[t._v("User List")])]},proxy:!0},{key:"headerAction",fn:function(){return[a("b-button",{attrs:{variant:"primary",to:{name:"user.add"}}},[t._v("Add User")])]},proxy:!0},{key:"body",fn:function(){return[a("ag-grid-vue",{staticClass:"ag-theme-material border height-500",attrs:{id:"ag-grid",columnDefs:t.columnDefs,rowData:t.rowData,floatingFilter:!0,modules:t.modules,rowSelection:"multiple"}})]},proxy:!0}])})],1)],1)],1)}),[],!1,null,null,null);e.default=m.exports}}]);
//# sourceMappingURL=95.js.map