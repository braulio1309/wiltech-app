(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1134:function(t,e){t.exports="/images/01.png?691d6235d4fcb3d23625f046278c14bf"},1136:function(t,e,a){"use strict";a(674)},1137:function(t,e,a){(e=a(28)(!1)).push([t.i,".iq-card-body{flex:unset}",""]),t.exports=e},1861:function(t,e,a){"use strict";a.r(e);var i=a(16),r=a(184),o=a(216),n={name:"ChartistChart",props:{data:{type:Object,default:function(){return{}}},eventHandlers:{type:Array,default:function(){return[]}},options:{type:Object,default:function(){return{}}},ratio:{type:String,default:void 0},responsiveOptions:{type:Array,default:function(){return[]}},type:{type:String,required:!0},id:{type:String,required:!0}}},s=a(8),c=Object(s.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("chartist",{staticStyle:{height:"250px",overflow:"hidden"},attrs:{data:this.data,"event-handlers":this.eventHandlers,options:this.options,ratio:this.ratio,"responsive-options":this.responsiveOptions,type:this.type,id:this.id}})}),[],!1,null,null,null).exports,l={name:"Dashboard1",components:{AmChart:r.default,ApexChart:o.a,ChartistChart:c},mounted:function(){i.c.index()},data:function(){return{items:[{client:"Ira Membrit",date:"18/10/2019",invoice:"20156",amount:"1500.0",status:{name:"paid",color:"success"},action:""},{client:"Pete Sariya",date:"26/10/2019",invoice:"7859",amount:"2000.00",status:{name:"paid",color:"success"},action:""},{client:"Cliff Hanger",date:"18/11/2019",invoice:"6396",amount:"250.00",status:{name:"past due",color:"danger"},action:""},{client:"Terry Aki",date:"14/12/2019",invoice:"7854",amount:"5000.00",status:{name:"paid",color:"success"},action:""},{client:"Anna Mull",date:"24/12/2019",invoice:"568569",amount:"10000.00",status:{name:"paid",color:"success"},action:""}],monthlyInvocie:[{title:"Camelun ios",spaces:"mb-4",color:"success",amount:"16,634.00",paid_month:"17/23 ",total_month:" months paid"},{title:"React",spaces:"mb-4",color:"warning",amount:"6,000.00",paid_month:"12 weeks ",total_month:"Due"},{title:"Camelun ios",spaces:"mb-4",color:"success",amount:"11,230.00",paid_month:"16/23 ",total_month:" months paid"},{title:"Camelun ios",spaces:"mb-1",color:"danger",amount:"10,050.00",paid_month:"15/23",total_month:" months paid"}],paymentHistory:[{title:"Deposit from ATL",space:"mb-4",amount:"- $1,470",icon:"ri-refresh-line",color:"secondary",date:"5 march, 18:33",CurrencyColor:"info"},{title:"Deposit PayPal",space:"mb-4",amount:"+ $2,220",icon:"ri-paypal-line",color:"primary",date:"5 march, 18:33",CurrencyColor:"primary"},{title:"Deposit from ATL",space:"mb-4",amount:"+ $250",icon:"ri-check-line",color:"primary",date:"5 march, 18:33",CurrencyColor:"primary"},{title:"Cancelled",space:"mb-4",amount:"$0",icon:"ri-close-line",color:"info",date:"5 march, 18:33",CurrencyColor:"info"},{title:"Refund",space:"mb-4",amount:"- $500",icon:"ri-arrow-go-back-fill",color:"info",date:"5 march, 18:33",CurrencyColor:"info"},{title:"Deposit from ATL",space:"mb-4",amount:"$169",icon:"ri-bar-chart-grouped-fill",color:"secondary",date:"5 march, 18:33",CurrencyColor:"primary"},{title:"Deposit from Paypal",space:"mb-4",amount:"- $1,470",icon:"ri-qr-scan-line",color:"warning",date:"5 march, 18:33",CurrencyColor:"info"},{title:"Refund Amount",space:"mb-0",amount:"+ $9,480",icon:"ri-mail-send-fill",color:"danger",date:"5 march, 18:33",CurrencyColor:"info"}],chart1:{series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}],chart:{type:"bar",height:300,toolbar:{show:!1}},colors:["#827af3","#6ce6f4"],plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:4}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"]},yaxis:{},fill:{opacity:1},tooltip:{y:{formatter:function(t){return"$ "+t+" thousands"}}}},chart2:{series:[{name:"Desktops",data:[5,10,8,15]}],chart:{height:150,type:"line",zoom:{enabled:!1}},colors:["#827af3"],dataLabels:{enabled:!1},stroke:{curve:"straight"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr"]}},darkChart2:{series:[{name:"Desktops",data:[5,10,8,15]}],chart:{height:150,type:"line",foreColor:"#8c91b6",zoom:{enabled:!1}},colors:["#827af3"],dataLabels:{enabled:!1},stroke:{curve:"straight"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr"]}},chart3:{series:[44,55,13,33],chart:{width:380,height:180,type:"donut"},dataLabels:{enabled:!1},colors:["#827af3","#6ce6f4","#a09e9e","#fbc647"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{show:!1}}}],legend:{position:"right",offsetY:0,height:150}},darkChart3:{series:[44,55,13,33],chart:{width:380,height:180,foreColor:"#8c91b6",type:"donut"},dataLabels:{enabled:!1},colors:["#827af3","#6ce6f4","#a09e9e","#fbc647"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{show:!1}}}],legend:{position:"right",offsetY:0,height:150}},chart4:{type:"Line",id:"home-chart-01",data:{labels:["Mon","Tue","Wed","Thu","Fri"],series:[[12,9,7,8,5],[2,1,3.5,7,3]]},options:{height:220,fullWidth:!0}}}}},d=(a(1136),Object(s.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{md:"6",sm:"6",lg:"3"}},[i("iq-card",{scopedSlots:t._u([{key:"body",fn:function(){return[i("div",{staticClass:"d-flex d-flex align-items-center justify-content-between"},[i("div",[i("h2",[t._v("352")]),t._v(" "),i("p",{staticClass:"fontsize-sm m-0"},[t._v("Reparaciones reportadas")])]),t._v(" "),i("div",{staticClass:"rounded-circle iq-card-icon  dark-icon-light iq-bg-primary "},[i("i",{staticClass:"ri-inbox-fill"})])])]},proxy:!0}])})],1),t._v(" "),i("b-col",{attrs:{md:"6",sm:"6",lg:"3"}},[i("iq-card",{scopedSlots:t._u([{key:"body",fn:function(){return[i("div",{staticClass:"d-flex d-flex align-items-center justify-content-between"},[i("div",[i("h2",[t._v("37k")]),t._v(" "),i("p",{staticClass:"fontsize-sm m-0"},[t._v("Marcas registradas")])]),t._v(" "),i("div",{staticClass:"rounded-circle iq-card-icon iq-bg-danger"},[i("i",{staticClass:"ri-radar-line"})])])]},proxy:!0}])})],1),t._v(" "),i("b-col",{attrs:{md:"6",sm:"6",lg:"3"}},[i("iq-card",{scopedSlots:t._u([{key:"body",fn:function(){return[i("div",{staticClass:"d-flex d-flex align-items-center justify-content-between"},[i("div",[i("h2",[t._v("32")]),t._v(" "),i("p",{staticClass:"fontsize-sm m-0"},[t._v("Usuarios registrados")])]),t._v(" "),i("div",{staticClass:"rounded-circle iq-card-icon iq-bg-warning "},[i("i",{staticClass:"ri-price-tag-3-line"})])])]},proxy:!0}])})],1),t._v(" "),i("b-col",{attrs:{md:"6",sm:"6",lg:"3"}},[i("iq-card",{scopedSlots:t._u([{key:"body",fn:function(){return[i("div",{staticClass:"d-flex d-flex align-items-center justify-content-between"},[i("div",[i("h2",[t._v("27")]),t._v(" "),i("p",{staticClass:"fontsize-sm m-0"},[t._v("Modelos registrados")])]),t._v(" "),i("div",{staticClass:"rounded-circle iq-card-icon iq-bg-info "},[i("i",{staticClass:"ri-refund-line"})])])]},proxy:!0}])})],1)],1),t._v(" "),i("b-row",[i("b-col",{attrs:{md:"6",lg:"7"}},[i("iq-card",{attrs:{"class-name":"iq-card-block iq-card-stretch iq-card-height overflow-hidden"},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[i("h4",{staticClass:"card-title"},[t._v("Reparaciones mensuales")])]},proxy:!0},{key:"headerAction",fn:function(){return[i("b-dropdown",{attrs:{id:"dropdownMenuButton1",right:"",variant:"none p-0","data-toggle":"dropdown"},scopedSlots:t._u([{key:"button-content",fn:function(){return[i("i",{staticClass:"ri-more-fill p-0"})]},proxy:!0}])},[t._v(" "),i("b-dropdown-item",[i("i",{staticClass:"ri-eye-fill mr-2"}),t._v(t._s(t.$t("dropdown.view")))]),t._v(" "),i("b-dropdown-item",[i("i",{staticClass:"ri-delete-bin-6-fill mr-2"}),t._v(t._s(t.$t("dropdown.delete")))]),t._v(" "),i("b-dropdown-item",[i("i",{staticClass:"ri-pencil-fill mr-2"}),t._v(t._s(t.$t("dropdown.edit")))]),t._v(" "),i("b-dropdown-item",[i("i",{staticClass:"ri-printer-fill mr-2"}),t._v(t._s(t.$t("dropdown.print")))]),t._v(" "),i("b-dropdown-item",[i("i",{staticClass:"ri-file-download-fill mr-2"}),t._v(t._s(t.$t("dropdown.download")))])],1)]},proxy:!0},{key:"body",fn:function(){return[i("ApexChart",{staticStyle:{"min-height":"300px"},attrs:{element:"home-chart-02",chartOption:t.chart1}})]},proxy:!0}])})],1),t._v(" "),i("b-col",{attrs:{md:"6",lg:"5"}},[i("div",{staticClass:"iq-card iq-card-block iq-card-stretch iq-card-height",staticStyle:{background:"transparent"}},[i("div",{staticClass:"iq-card-body rounded p-0",style:"background: url("+a(1134)+") no-repeat;    background-size: cover; height: 415px;"},[i("div",{staticClass:"iq-caption"},[i("h1",[t._v("450")]),t._v(" "),i("p",[t._v("Invoice")])])])])])],1)],1)}),[],!1,null,null,null));e.default=d.exports},216:function(t,e,a){"use strict";var i=a(632),r=a.n(i),o={name:"ApexChart",props:["element","chartOption","isLive"],mounted:function(){var t=this,e="#"+t.element,a=new r.a(document.querySelector(e),t.chartOption);setTimeout((function(){a.render(),t.isLive&&setInterval((function(){t.getNewSeries(t.lastDate,{min:10,max:90}),a.updateSeries([{data:t.data}])}),1e3)}),500)},data:function(){return{lastDate:0,data:[],TICKINTERVAL:864e5,XAXISRANGE:7776e5}},methods:{getNewSeries:function(t,e){var a=t+this.TICKINTERVAL;this.lastDate=a;for(var i=0;i<this.data.length-10;i++)this.data[i].x=a-this.XAXISRANGE-this.TICKINTERVAL,this.data[i].y=0;this.data.push({x:a,y:Math.floor(Math.random()*(e.max-e.min+1))+e.min})}}},n=a(8),s=Object(n.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.element}})}),[],!1,null,null,null);e.a=s.exports},674:function(t,e,a){var i=a(1137);"string"==typeof i&&(i=[[t.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(40)(i,r);i.locals&&(t.exports=i.locals)}}]);
//# sourceMappingURL=39.js.map