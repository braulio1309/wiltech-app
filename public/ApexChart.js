(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{1960:function(e,t,a){"use strict";a.r(t);var n=a(16),r={name:"ApexCharts",mounted:function(){n.c.index()},components:{ApexChart:a(213).a},methods:{generateData:function(e,t,a){for(var n=0,r=[];n<t;){var i=Math.floor(Math.random()*(a.max-a.min+1))+a.min,o=Math.floor(61*Math.random())+15;r.push([e,i,o]),e+=864e5,n++}return r}},data:function(){return{charts:[{title:"Line Chart",type:"line",bodyData:{chart:{height:350,type:"line",zoom:{enabled:!1}},series:[{name:"Desktops",data:[10,41,35,51,49,62,69,91,148]}],dataLabels:{enabled:!1},stroke:{curve:"straight"},title:{text:"Product Trends by Month",align:"left"},grid:{row:{colors:["#f3f3f3","transparent"],opacity:.5}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"]}}},{title:"Column Chart",type:"column",bodyData:{chart:{height:350,type:"bar"},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",borderRadius:4}},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},colors:["#0084ff","#00ca00","#ffc107"],series:[{name:"Net Profit",data:[44,55,57,56,61,58]},{name:"Revenue",data:[76,85,101,98,87,105]},{name:"Free Cash Flow",data:[35,41,36,26,45,48]}],xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"]},yaxis:{title:{text:"$ (thousands)"}},fill:{opacity:1},tooltip:{y:{formatter:function(e){return"$ "+e+" thousands"}}}}},{title:"Mixes Chart",type:"mixes",bodyData:{chart:{height:350,type:"line",stacked:!1},stroke:{width:[0,2,5],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},colors:["#ffc107","#00ca00","#0084ff"],series:[{name:"Facebook",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Vine",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Dribbble",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],fill:{opacity:[.85,.25,1],gradient:{inverseColors:!1,shade:"light",type:"vertical",opacityFrom:.85,opacityTo:.55,stops:[0,100,100,100]}},labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],markers:{size:0},xaxis:{type:"datetime"},yaxis:{min:0},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return void 0!==e?e.toFixed(0)+" views":e}}},legend:{labels:{useSeriesColors:!0},markers:{customHTML:[function(){return""},function(){return""},function(){return""}]}}}},{title:"Bubble Charts",type:"bubble",bodyData:{chart:{height:350,type:"bubble"},dataLabels:{enabled:!1},series:[{name:"Product1",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:40})},{name:"Product2",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:40})},{name:"Product3",data:this.generateData(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:40})}],fill:{type:"gradient"},colors:["#0084ff","#00ca00","#e64141"],title:{text:"3D Bubble Chart"},xaxis:{tickAmount:12,type:"datetime",labels:{rotate:0}},yaxis:{max:40},theme:{palette:"palette2"}}},{title:"Pie Charts",type:"pie",bodyData:{chart:{width:380,type:"pie"},labels:["Team A","Team B","Team C","Team D","Team E"],series:[44,55,13,43,22],colors:["#0084ff","#00ca00","#e64141","#ffd400","#00d0ff"],responsive:[{breakpoint:480,options:{chart:{width:200},legend:{position:"bottom"}}}]}},{title:"Line Area Chart",type:"line-area",bodyData:{chart:{height:350,type:"area"},dataLabels:{enabled:!1},stroke:{curve:"smooth"},colors:["#0084ff","#00ca00"],series:[{name:"series1",data:[31,40,28,51,42,109,100]},{name:"series2",data:[11,32,45,32,34,52,41]}],xaxis:{type:"datetime",categories:["2018-09-19T00:00:00","2018-09-19T01:30:00","2018-09-19T02:30:00","2018-09-19T03:30:00","2018-09-19T04:30:00","2018-09-19T05:30:00","2018-09-19T06:30:00"]},tooltip:{x:{format:"dd/MM/yy HH:mm"}}}},{title:"Bar Chart",type:"bar",bodyData:{chart:{height:350,type:"bar"},plotOptions:{bar:{horizontal:!0}},dataLabels:{enabled:!1},series:[{data:[470,540,580,690,1100,1200,1380]}],xaxis:{categories:["Netherlands","Italy","France","Japan","United States","China","Germany"]}}},{title:"Candlestick Charts",type:"candlestick",bodyData:{chart:{height:350,type:"candlestick"},series:[{data:[{x:new Date(15387786e5),y:[6629.81,6650.5,6623.04,6633.33]},{x:new Date(15387804e5),y:[6632.01,6643.59,6620,6630.11]},{x:new Date(15387822e5),y:[6630.71,6648.95,6623.34,6635.65]},{x:new Date(1538784e6),y:[6635.65,6651,6629.67,6638.24]},{x:new Date(15387858e5),y:[6638.24,6640,6620,6624.47]},{x:new Date(15387876e5),y:[6624.53,6636.03,6621.68,6624.31]},{x:new Date(15387894e5),y:[6624.61,6632.2,6617,6626.02]},{x:new Date(15387912e5),y:[6627,6627.62,6584.22,6603.02]},{x:new Date(1538793e6),y:[6605,6608.03,6598.95,6604.01]},{x:new Date(15387948e5),y:[6604.5,6614.4,6602.26,6608.02]},{x:new Date(15387966e5),y:[6608.02,6610.68,6601.99,6608.91]},{x:new Date(15387984e5),y:[6608.91,6618.99,6608.01,6612]},{x:new Date(15388002e5),y:[6612,6615.13,6605.09,6612]},{x:new Date(1538802e6),y:[6612,6624.12,6608.43,6622.95]},{x:new Date(15388038e5),y:[6623.91,6623.91,6615,6615.67]},{x:new Date(15388056e5),y:[6618.69,6618.74,6610,6610.4]},{x:new Date(15388074e5),y:[6611,6622.78,6610.4,6614.9]},{x:new Date(15388092e5),y:[6614.9,6626.2,6613.33,6623.45]},{x:new Date(1538811e6),y:[6623.48,6627,6618.38,6620.35]},{x:new Date(15388128e5),y:[6619.43,6620.35,6610.05,6615.53]},{x:new Date(15388146e5),y:[6615.53,6617.93,6610,6615.19]},{x:new Date(15388164e5),y:[6615.19,6621.6,6608.2,6620]},{x:new Date(15388182e5),y:[6619.54,6625.17,6614.15,6620]},{x:new Date(153882e7),y:[6620.33,6634.15,6617.24,6624.61]},{x:new Date(15388218e5),y:[6625.95,6626,6611.66,6617.58]},{x:new Date(15388236e5),y:[6619,6625.97,6595.27,6598.86]},{x:new Date(15388254e5),y:[6598.86,6598.88,6570,6587.16]},{x:new Date(15388272e5),y:[6588.86,6600,6580,6593.4]},{x:new Date(1538829e6),y:[6593.99,6598.89,6585,6587.81]},{x:new Date(15388308e5),y:[6587.81,6592.73,6567.14,6578]},{x:new Date(15388326e5),y:[6578.35,6581.72,6567.39,6579]},{x:new Date(15388344e5),y:[6579.38,6580.92,6566.77,6575.96]},{x:new Date(15388362e5),y:[6575.96,6589,6571.77,6588.92]},{x:new Date(1538838e6),y:[6588.92,6594,6577.55,6589.22]},{x:new Date(15388398e5),y:[6589.3,6598.89,6589.1,6596.08]},{x:new Date(15388416e5),y:[6597.5,6600,6588.39,6596.25]},{x:new Date(15388434e5),y:[6598.03,6600,6588.73,6595.97]},{x:new Date(15388452e5),y:[6595.97,6602.01,6588.17,6602]},{x:new Date(1538847e6),y:[6602,6607,6596.51,6599.95]},{x:new Date(15388488e5),y:[6600.63,6601.21,6590.39,6591.02]},{x:new Date(15388506e5),y:[6591.02,6603.08,6591,6591]},{x:new Date(15388524e5),y:[6591,6601.32,6585,6592]},{x:new Date(15388542e5),y:[6593.13,6596.01,6590,6593.34]},{x:new Date(1538856e6),y:[6593.34,6604.76,6582.63,6593.86]},{x:new Date(15388578e5),y:[6593.86,6604.28,6586.57,6600.01]},{x:new Date(15388596e5),y:[6601.81,6603.21,6592.78,6596.25]},{x:new Date(15388614e5),y:[6596.25,6604.2,6590,6602.99]},{x:new Date(15388632e5),y:[6602.99,6606,6584.99,6587.81]},{x:new Date(1538865e6),y:[6587.81,6595,6583.27,6591.96]},{x:new Date(15388668e5),y:[6591.97,6596.07,6585,6588.39]},{x:new Date(15388686e5),y:[6587.6,6598.21,6587.6,6594.27]},{x:new Date(15388704e5),y:[6596.44,6601,6590,6596.55]},{x:new Date(15388722e5),y:[6598.91,6605,6596.61,6600.02]},{x:new Date(1538874e6),y:[6600.55,6605,6589.14,6593.01]},{x:new Date(15388758e5),y:[6593.15,6605,6592,6603.06]}]}],title:{text:"CandleStick Chart",align:"left"},xaxis:{type:"datetime"},yaxis:{tooltip:{enabled:!0}}}},{title:"Scatter Charts",type:"scatter",bodyData:{chart:{height:350,type:"scatter",zoom:{enabled:!0,type:"xy"}},series:[{name:"SAMPLE A",data:[[16.4,5.4],[21.7,2],[10.9,0],[10.9,8.2],[16.4,0],[16.4,1.8],[13.6,.3],[13.6,0],[29.9,0],[27.1,2.3],[16.4,0],[13.6,3.7],[10.9,5.2],[16.4,6.5],[10.9,0],[24.5,7.1],[10.9,0],[8.1,4.7]]},{name:"SAMPLE B",data:[[36.4,13.4],[1.7,11],[1.9,9],[1.9,13.2],[1.4,7],[6.4,8.8],[3.6,4.3],[1.6,10],[9.9,2],[7.1,15],[1.4,0],[3.6,13.7],[1.9,15.2],[6.4,16.5],[.9,10],[4.5,17.1],[10.9,10],[.1,14.7]]},{name:"SAMPLE C",data:[[21.7,3],[23.6,3.5],[28,4],[27.1,.3],[16.4,4],[13.6,0],[19,5],[22.4,3],[24.5,3],[32.6,3],[27.1,4],[29.6,6],[31.6,8],[21.6,5],[20.9,4],[22.4,0],[32.6,10.3],[29.7,20.8]]}],xaxis:{tickAmount:5,labels:{formatter:function(e){return parseFloat(e).toFixed(1)}}},yaxis:{tickAmount:5}}},{title:"Radial Bar Charts",type:"radial",bodyData:{chart:{height:350,type:"radialBar"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(e){return 249}}}}},series:[44,55,67,83],labels:["Apples","Oranges","Bananas","Berries"],colors:["#0084ff","#00ca00","#e64141","#ffd400"]}}]}}},i=a(8),o=Object(i.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-container",{attrs:{fluid:""}},[a("b-row",e._l(e.charts,(function(t,n){return a("b-col",{key:n,attrs:{lg:"6"}},[a("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[a("h4",[e._v(e._s(t.title))])]},proxy:!0},{key:"body",fn:function(){return[a("ApexChart",{attrs:{element:t.type,chartOption:t.bodyData}})]},proxy:!0}],null,!0)})],1)})),1)],1)}),[],!1,null,null,null);t.default=o.exports},213:function(e,t,a){"use strict";var n=a(633),r=a.n(n),i={name:"ApexChart",props:["element","chartOption","isLive"],mounted:function(){var e=this,t="#"+e.element,a=new r.a(document.querySelector(t),e.chartOption);setTimeout((function(){a.render(),e.isLive&&setInterval((function(){e.getNewSeries(e.lastDate,{min:10,max:90}),a.updateSeries([{data:e.data}])}),1e3)}),500)},data:function(){return{lastDate:0,data:[],TICKINTERVAL:864e5,XAXISRANGE:7776e5}},methods:{getNewSeries:function(e,t){var a=e+this.TICKINTERVAL;this.lastDate=a;for(var n=0;n<this.data.length-10;n++)this.data[n].x=a-this.XAXISRANGE-this.TICKINTERVAL,this.data[n].y=0;this.data.push({x:a,y:Math.floor(Math.random()*(t.max-t.min+1))+t.min})}}},o=a(8),s=Object(o.a)(i,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:this.element}})}),[],!1,null,null,null);t.a=s.exports}}]);
//# sourceMappingURL=ApexChart.js.map