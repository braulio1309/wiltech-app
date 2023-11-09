(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1902:function(t,e,a){"use strict";a.r(e);var i=a(132),n=a(747),s=a(462).a,r=a(8),o={name:"VideoCall",components:{AgoraVideoCall:Object(r.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"ag-canvas"}},[a("div",{staticClass:"ag-btn-group"},[a("span",{staticClass:"ag-btn exitBtn",class:{disabled:!t.readyState},attrs:{title:"Exit"},on:{click:t.handleExit}},[a("i",{staticClass:"ri-logout-box-line ag-icon ag-icon-leave"})]),t._v(" "),"video"===t.attendeeMode?a("span",{staticClass:"ag-btn videoControlBtn",attrs:{title:"Enable/Disable Video"},on:{click:t.handleCamera}},[a("i",{staticClass:"ri-camera-line ag-icon-camera"}),t._v(" "),a("i",{staticClass:"ri-camera-off-line ag-icon-camera-off"})]):t._e(),t._v(" "),"audience"!==t.attendeeMode?a("span",{staticClass:"ag-btn audioControlBtn",attrs:{title:"Enable/Disable Audio"},on:{click:t.handleMic}},[a("i",{staticClass:"ri-mic-2-fill ag-icon-mic"}),t._v(" "),a("i",{staticClass:"ri-mic-off-line ag-icon-mic-off"})]):t._e(),t._v(" "),a("span",{staticClass:"ag-btn displayModeBtn",class:{disabled:t.streamList.length>4},attrs:{title:"Switch Display Mode"},on:{click:t.switchDisplay}},[a("i",{staticClass:"ri-tv-2-line ag-icon-switch-display"})]),t._v(" "),a("span",{staticClass:"ag-btn disableRemoteBtn",class:{disabled:t.streamList.length>4||"pip"!==t.displayMode},attrs:{title:"Hide Remote Stream"},on:{click:t.hideRemote}},[a("i",{staticClass:"ri-base-station-line ag-icon-remove-pip"})])])])}),[],!1,null,null,null).exports},data:function(){return{videoProfile:i.get("videoProfile").split(",")[0]||"480p_4",channel:i.get("channel")||"test",transcode:i.get("transcode")||"interop",attendeeMode:i.get("attendeeMode")||"video",baseMode:i.get("baseMode")||"avc",uid:void 0}},mounted:function(){},created:function(){if(this.appId=n.a,!this.appId)return alert("Get App ID first!")}},l=Object(r.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{staticClass:"wrapper meeting iq-card mb-0",scopedSlots:t._u([{key:"header",fn:function(){return[t._v("\n    Room: "),a("span",{attrs:{id:"room-name"}},[t._v(t._s(t.channel))])]},proxy:!0}])},[t._v(" "),a("div",{staticClass:"ag-main"},[a("div",{staticClass:"ag-container"},[a("AgoraVideoCall",{attrs:{videoProfile:t.videoProfile,channel:t.channel,transcode:t.transcode,attendeeMode:t.attendeeMode,baseMode:t.baseMode,appId:t.appId,uid:t.uid}})],1)])])}),[],!1,null,null,null);e.default=l.exports},462:function(t,e,a){"use strict";(function(t){var i=a(554),n=a(132);function s(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}var o={1:["span 12/span 24"],2:["span 12/span 12/13/25","span 12/span 12/13/13"],3:["span 6/span 12","span 6/span 12","span 6/span 12/7/19"],4:["span 6/span 12","span 6/span 12","span 6/span 12","span 6/span 12/7/13"],5:["span 3/span 4/13/9","span 3/span 4/13/13","span 3/span 4/13/17","span 3/span 4/13/21","span 9/span 16/10/21"],6:["span 3/span 4/13/7","span 3/span 4/13/11","span 3/span 4/13/15","span 3/span 4/13/19","span 3/span 4/13/23","span 9/span 16/10/21"],7:["span 3/span 4/13/5","span 3/span 4/13/9","span 3/span 4/13/13","span 3/span 4/13/17","span 3/span 4/13/21","span 3/span 4/13/25","span 9/span 16/10/21"]};e.a={data:function(){return{client:{},localStream:{},shareClient:{},shareStream:{},displayMode:"pip",streamList:[],readyState:!1}},props:["transcode","attendeeMode","videoProfile","channel","baseMode","appId","uid"],methods:{streamInit:function(t,e,a,n){var s={streamID:t,audio:!0,video:!0,screen:!1};switch(e){case"audio-only":s.video=!1;break;case"audience":s.video=!1,s.audio=!1;break;default:case"video":}var r=AgoraRTC.createStream(Object(i.merge)(s,n));return r.setVideoProfile(a),r},subscribeStreamEvents:function(){var t=this;t.client.on("stream-added",(function(e){var a=e.stream;t.client.subscribe(a,(function(t){}))})),t.client.on("peer-leave",(function(e){t.removeStream(e.uid)})),t.client.on("stream-subscribed",(function(e){var a=e.stream;t.addStream(a)})),t.client.on("stream-removed",(function(e){var a=e.stream;t.removeStream(a.getId())}))},removeStream:function(t){var e=this;this.streamList.map((function(a,i){if(a.getId()===t){a.close();var n=document.querySelector("#ag-item-"+t);n&&n.parentNode.removeChild(n);var r=s(e.streamList);r.splice(i,1),e.streamList=r}}))},addStream:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=this.streamList.some((function(e){return e.getId()===t.getId()}));a||(this.streamList=e?this.streamList.concat([t]):[t].concat(this.streamList))},handleCamera:function(t){t.currentTarget.classList.toggle("off"),this.localStream.isVideoOn()?this.localStream.disableVideo():this.localStream.enableVideo()},handleMic:function(t){t.currentTarget.classList.toggle("off"),this.localStream.isAudioOn()?this.localStream.disableAudio():this.localStream.enableAudio()},switchDisplay:function(t){t.currentTarget.classList.contains("disabled")||this.streamList.length<=1||("pip"===this.displayMode?this.displayMode="tile":"tile"===this.displayMode?this.displayMode="pip":this.displayMode)},hideRemote:function(t){if(!(t.currentTarget.classList.contains("disabled")||this.streamList.length<=1)){var e=this.streamList[this.streamList.length-1].getId();Array.from(document.querySelectorAll(".ag-item:not(#ag-item-".concat(e,")"))).map((function(t){"none"!==t.style.display?t.style.display="none":t.style.display="block"}))}},handleExit:function(t){if(!t.currentTarget.classList.contains("disabled"))try{this.client&&this.client.unpublish(this.localStream),this.localStream&&this.localStream.close(),this.client&&this.client.leave((function(){}),(function(){}))}finally{this.readyState=!1,this.client=null,this.localStream=null,n.set("channel",void 0),this.$store.dispatch("Chat/videoCallAction",!1)}}},created:function(){var t=this,e=this;e.client=AgoraRTC.createClient({mode:e.transcode}),e.client.init(e.appId,(function(){e.subscribeStreamEvents(),e.client.join(e.appId,e.channel,e.uid,(function(a){e.localStream=t.streamInit(a,e.attendeeMode,e.videoProfile),e.localStream.init((function(){"audience"!==e.attendeeMode&&(e.addStream(e.localStream,!0),e.client.publish(e.localStream,(function(t){}))),e.readyState=!0}),(function(t){e.readyState=!0}))}))}))},mounted:function(){this.$nextTick((function(){var e=document.querySelector("#ag-canvas"),a=document.querySelector(".ag-btn-group");e.addEventListener("mousemove",(function(){t._toolbarToggle&&clearTimeout(t._toolbarToggle),a.classList.add("active"),t._toolbarToggle=setTimeout((function(){a.classList.remove("active")}),2e3)}))}))},beforeUpdate:function(){var t=this,e=document.querySelector("#ag-canvas");if("pip"===t.displayMode){var a=t.streamList.length;if(a>4)return void(t.displayMode="tile");t.streamList.map((function(t,i){var n=t.getId(),s=document.querySelector("#ag-item-"+n);s||((s=document.createElement("section")).setAttribute("id","ag-item-"+n),s.setAttribute("class","ag-item"),e.appendChild(s),t.play("ag-item-"+n)),i===a-1?s.setAttribute("style","grid-area: span 12/span 24/13/25"):s.setAttribute("style","grid-area: span 3/span 4/".concat(4+3*i,"/25;\n          z-index:1;width:calc(100% - 20px);height:calc(100% - 20px)")),t.player.resize&&t.player.resize()}))}else if("tile"===t.displayMode){var i=t.streamList.length;t.streamList.map((function(t,a){var n=t.getId(),s=document.querySelector("#ag-item-"+n);s||((s=document.createElement("section")).setAttribute("id","ag-item-"+n),s.setAttribute("class","ag-item"),e.appendChild(s),t.play("ag-item-"+n)),s.setAttribute("style","grid-area: ".concat(o[i][a])),t.player.resize&&t.player.resize()}))}else t.displayMode},beforeDestroy:function(){this.client&&this.client.unpublish(this.localStream),this.localStream&&this.localStream.close(),this.client&&this.client.leave((function(){}),(function(){}))}}}).call(this,a(74))},747:function(t,e,a){"use strict";(function(t){a.d(e,"a",(function(){return i}));var i=t.env.VUE_APP_AGORA_KEY}).call(this,a(113))}}]);
//# sourceMappingURL=54.js.map