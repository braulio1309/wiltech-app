(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{1877:function(t,e,a){"use strict";a.r(e);var r=a(308),i=a(475),s=a(44),o=a(142),n=a.n(o);function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function u(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var c={name:"SignIn1Form",components:{SocialLoginForm:i.a},props:["formType","email","password"],data:function(){return{user:{email:"",password:""}}},mounted:function(){this.user.email=this.$props.email,this.user.password=this.$props.password},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){u(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},Object(s.c)({stateUsers:"Setting/usersState"})),methods:{onSubmit:function(){"passport"===this.formType?this.passportLogin():"jwt"===this.formType?this.jwtLogin():"firebase"===this.formType&&this.firebaseLogin()},jwtLogin:function(){var t=this,e={email:this.user.email,password:this.user.password};n.a.post("https://fixtool.co/api/auth/login",e).then((function(e){t.$store.dispatch("Setting/authUserAction",{auth:!0,authType:"jwt",user:{id:JSON.parse(e.data.data).id,name:JSON.parse(e.data.data).name,mobileNo:null,email:JSON.parse(e.data.data).email,profileImage:null}}),localStorage.setItem("user",e.data.data),localStorage.setItem("access_token",e.data.access_token),t.$router.push({name:"dashboard.home-1"})})).catch((function(t){console.error("Error de inicio de sesión",t)}))}}},d=a(8),p=Object(d.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ValidationObserver",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit;return[a("form",{staticClass:"mt-4",attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),r(t.onSubmit)}}},[a("ValidationProvider",{attrs:{vid:"email",name:"E-mail",rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"emailInput"}},[t._v("Email ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],class:"form-control mb-0"+(r.length>0?" is-invalid":""),attrs:{type:"email",id:"emailInput","aria-describedby":"emailHelp",placeholder:"Enter email",required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(r[0]))])])])]}}],null,!0)}),t._v(" "),a("ValidationProvider",{attrs:{vid:"password",name:"Password",rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors;return[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"passwordInput"}},[t._v("Contraseña")]),t._v(" "),a("router-link",{staticClass:"float-right",attrs:{to:"/auth/password-reset1"}},[t._v("\n          Forgot password?\n        ")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],class:"form-control mb-0"+(r.length>0?" is-invalid":""),attrs:{type:"password",id:"passwordInput",placeholder:"Password",required:""},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),a("div",{staticClass:"invalid-feedback"},[a("span",[t._v(t._s(r[0]))])])],1)]}}],null,!0)}),t._v(" "),a("div",{staticClass:"d-inline-block w-100"},[a("div",{staticClass:"custom-control custom-checkbox d-inline-block mt-2 pt-1"},[a("label",{staticClass:"custom-control-label",attrs:{for:t.formType}},[t._v("Recuerdame")])]),t._v(" "),a("button",{staticClass:"btn btn-primary float-right",attrs:{type:"submit"}},[t._v("Iniciar sesión")])])],1)]}}])})}),[],!1,null,null,null).exports,m=a(192),f={name:"SignIn1",components:{SignIn1Form:p},data:function(){return{}},mounted:function(){var t=localStorage.getItem("access_token");null!=t&&this.$router.push({name:"mini.dashboard.home-2"})},methods:{loginOAuth0:function(){new r.a.WebAuth(m.a.auth0Config).authorize()}}},v=Object(d.a)(f,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",{staticClass:"mb-0"},[t._v("Inicio de sesión")]),t._v(" "),a("p",[t._v("Ingresa al panel administrativo.")]),t._v(" "),a("tab-nav",{staticClass:"nav-fill mb-3",attrs:{pills:!0,id:"pills-tab-1"}}),t._v(" "),a("tab-content",{staticClass:"mt-0",attrs:{id:"pills-tabContent-1"}},[a("tab-content-item",{attrs:{active:!0,id:"pills-jwt-fill","aria-labelled-by":"pills-jwt-tab-fill"}},[a("sign-in1-form",{attrs:{formType:"jwt",email:"admin@demo.com",password:"admin123"}})],1),t._v(" "),a("tab-content-item",{attrs:{active:!1,id:"pills-firebase-fill","aria-labelled-by":"pills-firebase-tab-fill"}},[a("sign-in1-form",{attrs:{formType:"firebase",email:"admin@vito.com",password:"admin123"}})],1),t._v(" "),a("tab-content-item",{attrs:{active:!1,id:"pills-oauth0-fill","aria-labelled-by":"pills-oauth0-tab-fill"}},[a("div",{staticClass:"height-300 pb-4 d-flex justify-content-center"},[a("a",{staticClass:"btn btn-danger align-self-center",attrs:{href:"javascript:void(0)"},on:{click:function(e){return t.loginOAuth0()}}},[t._v("\n          OAuth0 Login\n        ")])])])],1)],1)}),[],!1,null,null,null);e.default=v.exports},475:function(t,e,a){"use strict";var r=a(194),i=a.n(r),s={name:"SocialLoginForm",data:function(){return{socialProviders:[{type:"google",icon:"ri-google-line"},{type:"facebook",icon:"ri-facebook-box-line"}]}},methods:{socialLogin:function(t){var e=this,a=new i.a.auth.GoogleAuthProvider;"facebook"===t?a=new i.a.auth.FacebookAuthProvider:"twitter"===t&&(a=new i.a.auth.TwitterAuthProvider),i.a.auth().signInWithPopup(a).then((function(t){var a=i.a.auth().currentUser.providerData[0];e.$store.dispatch("Setting/authUserAction",{auth:!0,authType:"firebase",user:{id:a.uid,name:a.displayName,mobileNo:a.phoneNumber,email:a.email,profileImage:a.photoURL}}),localStorage.setItem("user",JSON.stringify(a)),e.$router.push({name:"dashboard.home-1"})})).catch()}}},o=a(8),n=Object(o.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"iq-social-media"},t._l(t.socialProviders,(function(e,r){return a("li",{key:r},[a("a",{attrs:{href:"javascript:void(0)"},on:{click:function(a){return t.socialLogin(e.type)}}},[a("i",{class:e.icon})])])})),0)}),[],!1,null,null,null);e.a=n.exports}}]);
//# sourceMappingURL=63.js.map