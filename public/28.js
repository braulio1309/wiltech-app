(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{107:function(t,a){t.exports="/images/user-02.jpg?db1fcba8d6e6510718cae7307174f939"},1144:function(t,a){t.exports="/images/41.png?eb19f2f869f39a52f5e781eb046e2572"},132:function(t,a){t.exports="/images/user-06.jpg?e2faac12d39ef217c5ffd95727b6df5b"},133:function(t,a){t.exports="/images/user-07.jpg?77bf1d915d5a80f385cd5d12a2120ed7"},147:function(t,a){t.exports="/images/user-08.jpg?a7d840500508551d7fe5ad49c9bb191c"},172:function(t,a){t.exports="/images/user-09.jpg?0309b6a2ee12b69fa2fc49ffbd73f28c"},1877:function(t,a,e){"use strict";e.r(a);var s=e(16),i=e(216),r=e(471),l={name:"Dashboard3",mounted:function(){s.c.index()},components:{ApexChart:i.a,Counter:r.a},data:function(){return{chart1:{series:[{name:"This Week",data:[31,40,28,51,42,109,100]},{name:"Last Week",data:[11,32,45,32,34,52,41]}],chart:{height:335,type:"area"},colors:["#827af3","#00ca00"],dataLabels:{enabled:!1},stroke:{curve:"smooth"},xaxis:{type:"datetime",categories:["2018-09-19T00:00:00.000Z","2018-09-19T01:30:00.000Z","2018-09-19T02:30:00.000Z","2018-09-19T03:30:00.000Z","2018-09-19T04:30:00.000Z","2018-09-19T05:30:00.000Z","2018-09-19T06:30:00.000Z"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},chart2:{chart:{height:280,type:"radialBar"},plotOptions:{hollow:{margin:10,size:"30%",background:"transparent",image:void 0,imageWidth:64,imageHeight:64},radialBar:{startAngle:-135,endAngle:135,dataLabels:{name:{fontSize:"16px",color:void 0,offsetY:120},value:{offsetY:76,fontSize:"22px",color:void 0,formatter:function(t){return t+"%"}}}}},fill:{},stroke:{dashArray:5},series:[67],labels:["Median Ratio"],colors:["#0084ff"]},chart3:{chart:{height:80,type:"area",sparkline:{enabled:!0},group:"sparklines"},dataLabels:{enabled:!1},stroke:{width:3,curve:"smooth"},fill:{type:"gradient",gradient:{shadeIntensity:1,opacityFrom:.5,opacityTo:0}},series:[{name:"series1",data:[60,40,60,40,70]}],colors:["#fbc647"],xaxis:{type:"datetime",categories:["2018-08-19T00:00:00","2018-09-19T01:30:00","2018-10-19T02:30:00","2018-11-19T01:30:00","2018-12-19T01:30:00"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}},chart4:{chart:{height:150,type:"area",animations:{enabled:!0,easing:"linear",dynamicAnimation:{speed:1e3}},toolbar:{show:!1},sparkline:{enabled:!0},group:"sparklines"},colors:["#827af3"],dataLabels:{enabled:!1},stroke:{curve:"straight",width:3},series:[{data:[80,90,60,90,44,50,98,80,90]}],markers:{size:4},yaxis:{max:100},fill:{type:"gradient",gradient:{shadeIntensity:1,inverseColors:!1,opacityFrom:.5,opacityTo:0,stops:[0,90,100]}},legend:{show:!1}},timelineItems:[{color:"primary",title:"Client Login",right:"24 November 2019",description:"Bonbon macaroon jelly beans gummi bears jelly lollipop apple",child:{type:"img",items:[]}},{color:"success",title:"Scheduled Maintenance",right:"23 November 2019",description:"Bonbon macaroon jelly beans gummi bears jelly lollipop apple",child:{type:"img",items:[]}},{color:"danger",title:"Dev Meetup",right:"20 November 2019",description:'Bonbon macaroon jelly <a href="">beans gummi</a> bears jelly lollipop apple',child:{type:"img",items:[e(78),e(132),e(133),e(147),e(172),e(240)]}},{color:"primary",title:"Client Call",right:"19 November 2019",description:"Bonbon macaroon jelly beans gummi bears jelly lollipop apple",child:{type:"img",items:[]}},{color:"warning",title:"Mega Event",right:"15 November 2019",description:"Bonbon macaroon jelly beans gummi bears jelly lollipop apple",child:{type:"img",items:[]}}]}}},c=e(8),n=Object(c.a)(l,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-container",{attrs:{fluid:""}},[s("b-row",[s("b-col",{attrs:{lg:"3"}},[s("iq-card",{staticClass:"iq-card iq-card-block iq-card-stretch iq-card-height",scopedSlots:t._u([{key:"cardImage",fn:function(){return[s("img",{staticClass:"img-fluid iq-image-full w-100",attrs:{src:e(1144)}})]},proxy:!0},{key:"body",fn:function(){return[s("TimeLine",{attrs:{items:t.timelineItems}})]},proxy:!0}])},[t._v(" "),t._v(" "),[s("div",{staticClass:"iq-card-header d-flex justify-content-between"},[s("div",{staticClass:"iq-header-title"},[s("h4",{staticClass:"card-title"},[t._v("Country")])])]),t._v(" "),s("div",{staticClass:"iq-card-body"},[s("div",{staticClass:"iq-details"},[s("span",{staticClass:"title"},[t._v("United States")]),t._v(" "),s("div",{staticClass:"percentage float-right text-primary"},[t._v("95 "),s("span",[t._v("%")])]),t._v(" "),s("div",{staticClass:"iq-progress-bar-linear d-inline-block w-100"},[s("Progressbar",{attrs:{value:95}})],1)]),t._v(" "),s("div",{staticClass:"iq-details mt-3"},[s("span",{staticClass:"title"},[t._v("India")]),t._v(" "),s("div",{staticClass:"percentage float-right text-success"},[t._v("75 "),s("span",[t._v("%")])]),t._v(" "),s("div",{staticClass:"iq-progress-bar-linear d-inline-block w-100"},[s("Progressbar",{attrs:{value:80,color:"success"}})],1)]),t._v(" "),s("div",{staticClass:"iq-details mt-3"},[s("span",{staticClass:"title"},[t._v("Australia")]),t._v(" "),s("div",{staticClass:"percentage float-right text-info"},[t._v("72 "),s("span",[t._v("%")])]),t._v(" "),s("div",{staticClass:"iq-progress-bar-linear d-inline-block w-100"},[s("Progressbar",{attrs:{value:72,color:"info"}})],1)])])]],2)],1),t._v(" "),s("b-col",{attrs:{lg:"9"}},[s("b-row",[s("b-col",{attrs:{xl:"9"}},[s("b-row",[s("b-col",{attrs:{sm:"12"}},[s("iq-card",{staticClass:" iq-card-block iq-card-stretch iq-card-height",scopedSlots:t._u([{key:"body",fn:function(){return[s("b-row",[s("b-col",{attrs:{md:"6",lg:"3"}},[s("div",{staticClass:"d-flex align-items-center mb-3 mb-lg-0"},[s("div",{staticClass:"rounded-circle iq-card-icon iq-bg-primary  dark-icon-light mr-3"},[s("i",{staticClass:"ri-mail-open-line"})]),t._v(" "),s("div",{staticClass:"text-left"},[s("h4",[t._v("425")]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Mails")])])])]),t._v(" "),s("b-col",{attrs:{md:"6",lg:"3"}},[s("div",{staticClass:"d-flex align-items-center mb-3 mb-lg-0"},[s("div",{staticClass:"rounded-circle iq-card-icon iq-bg-info mr-3"},[s("i",{staticClass:"ri-message-3-line"})]),t._v(" "),s("div",{staticClass:"text-left"},[s("h4",[t._v("110")]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Message")])])])]),t._v(" "),s("b-col",{attrs:{md:"6",lg:"3"}},[s("div",{staticClass:"d-flex align-items-center mb-3 mb-md-0"},[s("div",{staticClass:"rounded-circle iq-card-icon iq-bg-danger mr-3"},[s("i",{staticClass:"ri-group-line"})]),t._v(" "),s("div",{staticClass:"text-left"},[s("h4",[t._v("8000")]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Users")])])])]),t._v(" "),s("b-col",{attrs:{md:"6",lg:"3"}},[s("div",{staticClass:"d-flex align-items-center mb-3 mb-md-0"},[s("div",{staticClass:"rounded-circle iq-card-icon iq-bg-warning mr-3"},[s("i",{staticClass:"ri-task-line"})]),t._v(" "),s("div",{staticClass:"text-left"},[s("h4",[t._v("690")]),t._v(" "),s("p",{staticClass:"mb-0"},[t._v("Task")])])])])],1)]},proxy:!0}])})],1),t._v(" "),s("b-col",{attrs:{lg:"8"}},[s("iq-card",{staticClass:"iq-card-block iq-card-stretch",attrs:{bodyClass:"rounded pb-primary"},scopedSlots:t._u([{key:"headerTitle",fn:function(){return[s("h4",{staticClass:"card-title"},[t._v("Monthly sales trend ")])]},proxy:!0},{key:"headerAction",fn:function(){return[s("div",{staticClass:"custom-control custom-switch custom-switch-text custom-control-inline  m-0"},[s("div",{staticClass:"custom-switch-inner"},[s("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"switch-title",checked:""}}),t._v(" "),s("label",{staticClass:"custom-control-label",attrs:{for:"switch-title","data-on-label":"On","data-off-label":"Off"}})])])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"d-flex justify-content-around"},[s("div",{staticClass:"price-week-box mr-5"},[s("span",[t._v("This Week")]),t._v(" "),s("h3",[t._v("$"),s("Counter",{attrs:{value:35e3}}),t._v(" "),s("i",{staticClass:"ri-funds-line text-success font-size-18"})],1)]),t._v(" "),s("div",{staticClass:"price-week-box"},[s("span",[t._v("Last Week")]),t._v(" "),s("h3",[t._v("$"),s("Counter",{attrs:{value:35e3}}),t._v(" "),s("i",{staticClass:"ri-funds-line text-danger font-size-18"})],1)])]),t._v(" "),s("ApexChart",{attrs:{element:"menu-chart-02",chartOption:t.chart1}})]},proxy:!0}])})],1),t._v(" "),s("b-col",{attrs:{lg:"4"}},[s("iq-card",{staticClass:"iq-card-block iq-card-stretch",attrs:{bodyClass:"p-2"},scopedSlots:t._u([{key:"body",fn:function(){return[s("ApexChart",{attrs:{element:"menu-chart-03",chartOption:t.chart2}})]},proxy:!0}])}),t._v(" "),s("iq-card",{staticClass:"iq-card-block iq-card-stretch"},[s("div",{staticClass:"iq-card-body  rounded"},[s("p",[t._v("Online sells")]),t._v(" "),s("h5",[t._v("6,000")]),t._v(" "),s("ApexChart",{attrs:{element:"chart-3",chartOption:t.chart3}})],1)])],1)],1)],1),t._v(" "),s("b-col",{attrs:{xl:"3"}},[s("iq-card",{staticClass:"iq-card-block iq-card-stretch",scopedSlots:t._u([{key:"body",fn:function(){return[s("h2",{staticClass:"mb-1"},[s("span",[t._v("$")]),s("Counter",{attrs:{value:3450}})],1),t._v(" "),s("p",{staticClass:"mb-2"},[t._v("Your Current Balance")]),t._v(" "),s("h6",{staticClass:"mb-4"},[s("span",{staticClass:"text-success"},[t._v("20%")]),t._v(" ($520)")]),t._v(" "),s("a",{staticClass:"btn btn-danger d-block mt-5 mb-5",attrs:{href:"javascript:void();"}},[t._v(" Add Credit")]),t._v(" "),s("hr"),t._v(" "),s("div",{staticClass:"row  align-items-center justify-content-between"},[s("div",{staticClass:"col-sm-6"},[s("span",{staticClass:"title"},[t._v("Sales: 75%")]),t._v(" "),s("div",{staticClass:"iq-progress-bar-linear d-inline-block w-100"},[s("Progressbar",{attrs:{value:75}})],1)]),t._v(" "),s("b-col",{attrs:{sm:"6"}},[s("span",{staticClass:"title"},[t._v("Referal: 25%")]),t._v(" "),s("div",{staticClass:"iq-progress-bar-linear d-inline-block w-100"},[s("Progressbar",{attrs:{value:25,color:"warning"}})],1)])],1)]},proxy:!0}])}),t._v(" "),s("iq-card",{staticClass:"iq-card-block iq-card-stretch",scopedSlots:t._u([{key:"body",fn:function(){return[s("h2",{staticClass:"d-inline-block"},[t._v("75%")]),s("span",{staticClass:"d-inline-block ml-2"},[t._v("5% up")]),t._v(" "),s("p",[t._v("From the Last Month")])]},proxy:!0}])},[t._v(" "),s("div",{attrs:{id:"chart-8"}},[s("ApexChart",{attrs:{element:"chart-8",chartOption:t.chart4}})],1)])],1),t._v(" "),s("b-col",{attrs:{lg:"6"}},[s("iq-card",{staticClass:" iq-card-block iq-card-stretch iq-card-height",scopedSlots:t._u([{key:"headerTitle",fn:function(){return[s("h4",{staticClass:"card-title"},[t._v("Recent Order ")])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table mb-0 table-borderless"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}}),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("User")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Invoice")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Status")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticClass:"text-center"},[s("img",{staticClass:"rounded-circle img-fluid avatar-40",attrs:{src:e(79),alt:"profile"}})]),t._v(" "),s("td",[t._v("Anna Sthesia")]),t._v(" "),s("td",[t._v("#1456")]),t._v(" "),s("td",[s("div",{staticClass:"badge badge-pill badge-success"},[t._v("Paid")])])]),t._v(" "),s("tr",[s("td",{staticClass:"text-center"},[s("img",{staticClass:"rounded-circle img-fluid avatar-40",attrs:{src:e(107),alt:"profile"}})]),t._v(" "),s("td",[t._v("Brock Lee")]),t._v(" "),s("td",[t._v("#8965")]),t._v(" "),s("td",[s("div",{staticClass:"badge badge-pill badge-primary"},[t._v("Shipped")])])]),t._v(" "),s("tr",[s("td",{staticClass:"text-center"},[s("img",{staticClass:"rounded-circle img-fluid avatar-40",attrs:{src:e(98),alt:"profile"}})]),t._v(" "),s("td",[t._v("Dan Druff")]),t._v(" "),s("td",[t._v("#6325")]),t._v(" "),s("td",[s("div",{staticClass:"badge badge-pill badge-danger"},[t._v("Pending")])])]),t._v(" "),s("tr",[s("td",{staticClass:"text-center"},[s("img",{staticClass:"rounded-circle img-fluid avatar-40",attrs:{src:e(99),alt:"profile"}})]),t._v(" "),s("td",[t._v("Lynn Guini")]),t._v(" "),s("td",[t._v("#4875")]),t._v(" "),s("td",[s("div",{staticClass:"badge badge-pill badge-warning text-white"},[t._v("stoped")])])]),t._v(" "),s("tr",[s("td",{staticClass:"text-center"},[s("img",{staticClass:"rounded-circle img-fluid avatar-40",attrs:{src:e(78),alt:"profile"}})]),t._v(" "),s("td",[t._v("Eric Shun")]),t._v(" "),s("td",[t._v("#8956")]),t._v(" "),s("td",[s("div",{staticClass:"badge badge-pill badge-success"},[t._v("Paid")])])])])])])]},proxy:!0}])})],1),t._v(" "),s("b-col",{attrs:{lg:"6"}},[s("iq-card",{scopedSlots:t._u([{key:"headerTitle",fn:function(){return[s("h4",{staticClass:"card-title"},[t._v("Top Selling ")])]},proxy:!0},{key:"body",fn:function(){return[s("div",{staticClass:"table-responsive"},[s("table",{staticClass:"table mb-0 table-borderless"},[s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[t._v("Product")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Price")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Discount")]),t._v(" "),s("th",{attrs:{scope:"col"}},[t._v("Sold")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Speakers")]),t._v(" "),s("td",[t._v("$80")]),t._v(" "),s("td",[t._v("$15")]),t._v(" "),s("td",[t._v("300")])]),t._v(" "),s("tr",[s("td",[t._v("DSLR")]),t._v(" "),s("td",[t._v("$500")]),t._v(" "),s("td",[t._v("$30")]),t._v(" "),s("td",[t._v("1200")])]),t._v(" "),s("tr",[s("td",[t._v("Headphone")]),t._v(" "),s("td",[t._v("$30")]),t._v(" "),s("td",[t._v("#08")]),t._v(" "),s("td",[t._v("600")])]),t._v(" "),s("tr",[s("td",[t._v("Desktop")]),t._v(" "),s("td",[t._v("$300")]),t._v(" "),s("td",[t._v("$20")]),t._v(" "),s("td",[t._v("200")])]),t._v(" "),s("tr",[s("td",[t._v("Watch")]),t._v(" "),s("td",[t._v("$150")]),t._v(" "),s("td",[t._v("$10")]),t._v(" "),s("td",[t._v("300")])]),t._v(" "),s("tr",[s("td",[t._v("Mobile")]),t._v(" "),s("td",[t._v("$350")]),t._v(" "),s("td",[t._v("$05")]),t._v(" "),s("td",[t._v("300")])]),t._v(" "),s("tr",[s("td",{staticClass:"pb-0"},[t._v("Tablet")]),t._v(" "),s("td",{staticClass:"pb-0"},[t._v("$400")]),t._v(" "),s("td",{staticClass:"pb-0"},[t._v("$10")]),t._v(" "),s("td",{staticClass:"pb-0"},[t._v("300")])])])])])]},proxy:!0}])})],1)],1)],1)],1)],1)}),[],!1,null,null,null);a.default=n.exports},216:function(t,a,e){"use strict";var s=e(632),i=e.n(s),r={name:"ApexChart",props:["element","chartOption","isLive"],mounted:function(){var t=this,a="#"+t.element,e=new i.a(document.querySelector(a),t.chartOption);setTimeout((function(){e.render(),t.isLive&&setInterval((function(){t.getNewSeries(t.lastDate,{min:10,max:90}),e.updateSeries([{data:t.data}])}),1e3)}),500)},data:function(){return{lastDate:0,data:[],TICKINTERVAL:864e5,XAXISRANGE:7776e5}},methods:{getNewSeries:function(t,a){var e=t+this.TICKINTERVAL;this.lastDate=e;for(var s=0;s<this.data.length-10;s++)this.data[s].x=e-this.XAXISRANGE-this.TICKINTERVAL,this.data[s].y=0;this.data.push({x:e,y:Math.floor(Math.random()*(a.max-a.min+1))+a.min})}}},l=e(8),c=Object(l.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:this.element}})}),[],!1,null,null,null);a.a=c.exports},240:function(t,a){t.exports="/images/user10.jpg?db6dc4655055421dfdbae689fa57e821"},471:function(t,a,e){"use strict";var s=e(16),i={name:"Counter",props:{value:{type:Number,default:10}},mounted:function(){s.c.counterInit(this.$refs.counter)}},r=e(8),l=Object(r.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("span",{ref:"counter",staticClass:"counter"},[this._v(this._s(this.value))])}),[],!1,null,null,null);a.a=l.exports},78:function(t,a){t.exports="/images/user-05.jpg?1c0efd4bac21364863911f337fcd51cf"},79:function(t,a){t.exports="/images/user-01.jpg?22e5a82300637450aa1b4f2de5871337"},98:function(t,a){t.exports="/images/user-03.jpg?a25e92f09c9354a61dbcc1150101a9f5"},99:function(t,a){t.exports="/images/user-04.jpg?ac29a2570bc401ae27a4ce915817eaf5"}}]);
//# sourceMappingURL=28.js.map