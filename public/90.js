(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1910:function(t,o,a){"use strict";a.r(o);var e=a(16),i=(a(117),{name:"Filters",data:function(){return{brand:"",model:"",fail:""}},mounted:function(){e.c.index()},methods:{send:function(){this.$router.push({name:"reparation.list",params:{brand:this.brand,model:this.model,fail:this.fail}})}}}),n=a(8),r=Object(n.a)(i,(function(){var t=this,o=t.$createElement,a=t._self._c||o;return a("b-container",{attrs:{fluid:""}},[a("b-row",[a("b-col",{attrs:{lg:"12",sm:"12"}},[a("iq-card",[a("div",{staticClass:"container"},[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("h4",[t._v("Selecciona la marca, el modelo y su falla")]),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("b-form-group",{attrs:{label:"Marca","label-for":"email1"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.brand,expression:"brand"}],staticClass:"form-control",attrs:{id:"brandSelect"},on:{change:function(o){var a=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.brand=o.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"iPhone",selected:""}},[t._v("iPhone")])])])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("h4"),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("b-form-group",{attrs:{label:"Modelo","label-for":"email1"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],staticClass:"form-control",attrs:{id:"iphoneModels"},on:{change:function(o){var a=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.model=o.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"iPhone 7"}},[t._v("iPhone 7")]),t._v(" "),a("option",{attrs:{value:"iPhone 8"}},[t._v("iPhone 8")]),t._v(" "),a("option",{attrs:{value:"iPhone 8 Plus"}},[t._v("iPhone 8 Plus")]),t._v(" "),a("option",{attrs:{value:"iPhone X"}},[t._v("iPhone X")]),t._v(" "),a("option",{attrs:{value:"iPhone XR"}},[t._v("iPhone XR")]),t._v(" "),a("option",{attrs:{value:"iPhone XS"}},[t._v("iPhone XS")]),t._v(" "),a("option",{attrs:{value:"iPhone XS Max"}},[t._v("iPhone XS Max")]),t._v(" "),a("option",{attrs:{value:"iPhone 11"}},[t._v("iPhone 11")]),t._v(" "),a("option",{attrs:{value:"iPhone 11 Pro"}},[t._v("iPhone 11 Pro")]),t._v(" "),a("option",{attrs:{value:"iPhone 11 Pro Max"}},[t._v("iPhone 11 Pro Max")]),t._v(" "),a("option",{attrs:{value:"iPhone SE"}},[t._v("iPhone SE")]),t._v(" "),a("option",{attrs:{value:"iPhone 12"}},[t._v("iPhone 12")]),t._v(" "),a("option",{attrs:{value:"iPhone 12 Mini"}},[t._v("iPhone 12 Mini")]),t._v(" "),a("option",{attrs:{value:"iPhone 12 Pro"}},[t._v("iPhone 12 Pro")]),t._v(" "),a("option",{attrs:{value:"iPhone 12 Pro Max"}},[t._v("iPhone 12 Pro Max")]),t._v(" "),a("option",{attrs:{value:"iPhone 13"}},[t._v("iPhone 13")]),t._v(" "),a("option",{attrs:{value:"iPhone 13 Mini"}},[t._v("iPhone 13 Mini")]),t._v(" "),a("option",{attrs:{value:"iPhone 13 Pro"}},[t._v("iPhone 13 Pro")]),t._v(" "),a("option",{attrs:{value:"iPhone 13 Pro Max"}},[t._v("iPhone 13 Pro Max")]),t._v(" "),a("option",{attrs:{value:"iPhone 14"}},[t._v("iPhone 14")]),t._v(" "),a("option",{attrs:{value:"iPhone 14 Plus"}},[t._v("iPhone 14 Plus")]),t._v(" "),a("option",{attrs:{value:"iPhone 14 Pro"}},[t._v("iPhone 14 Pro")]),t._v(" "),a("option",{attrs:{value:"iPhone 14 Pro Max"}},[t._v("iPhone 14 Pro Max")]),t._v(" "),a("option",{attrs:{value:"iPhone 15 Pro Max"}},[t._v("iPhone 15 Pro Max")])])])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("h4"),t._v(" "),a("div",{staticClass:"col-sm-12"},[a("b-form-group",{attrs:{label:"Falla","label-for":"email1"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.fail,expression:"fail"}],staticClass:"form-control",attrs:{id:"iphoneModels"},on:{change:function(o){var a=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.fail=o.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"Encendido"}},[t._v("Encendido")]),t._v(" "),a("option",{attrs:{value:"Imagen"}},[t._v("Imagen")]),t._v(" "),a("option",{attrs:{value:"Audio"}},[t._v("Audio")]),t._v(" "),a("option",{attrs:{value:"Carga"}},[t._v("Carga")]),t._v(" "),a("option",{attrs:{value:"Wifi"}},[t._v("Wifi")]),t._v(" "),a("option",{attrs:{value:"Señal"}},[t._v("Señal")]),t._v(" "),a("option",{attrs:{value:"Touch"}},[t._v("Touch")]),t._v(" "),a("option",{attrs:{value:"Camaras"}},[t._v("Camaras")]),t._v(" "),a("option",{attrs:{value:"Botones"}},[t._v("Botones")]),t._v(" "),a("option",{attrs:{value:"Itunes"}},[t._v("Itunes")]),t._v(" "),a("option",{attrs:{value:"DFV"}},[t._v("DFV")])])])],1)]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-12"},[a("button",{staticClass:"btn btn-primary",on:{click:function(o){return t.send()}}},[t._v("Buscar")])])])])])])],1)],1)],1)}),[],!1,null,null,null);o.default=r.exports}}]);
//# sourceMappingURL=90.js.map