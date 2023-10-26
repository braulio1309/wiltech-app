(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{1935:function(e,r,a){"use strict";a.r(r);var t=a(16),s=a(206),l={name:"AddUser",mounted:function(){t.c.index()},data:function(){return{user:{fname:"",lname:"",name:"",username:"",email:"",password:"",address1:"",address2:"",company_name:"",profile_image:a(274),mobile_no:"",country:"",city:"",pincode:"",role:""},roles:[{text:"Web Designer",value:"Web Designer"},{text:"Web Developer",value:"Web Developer"},{text:"Tester",value:"Tester"},{text:"Php Developer",value:"Php Developer"},{text:"Ios Developer",value:"Ios Developer"}],countries:[{value:"Canada",text:"Canada"},{value:"Niada",text:"Niada"},{value:"USA",text:"USA"},{value:"India",text:"India"},{value:"Africa",text:"Africa"}],users:[]}},computed:{fullName:function(){return this.user.fname+" "+this.user.lname}},methods:{onSubmit:function(){this.user.name=this.fullName,s.a.collection("users").add(this.user),t.c.showSnackbar("success","User has been updated successfully."),this.$router.replace("/user/user-list")},previewImage:function(e){var r=this,a=e.target;if(a.files&&a.files[0]){var t=new FileReader;t.onload=function(e){r.user.profile_image=e.target.result},t.readAsDataURL(a.files[0])}}}},o=a(8),i=Object(o.a)(l,(function(){var e=this,r=e.$createElement,a=e._self._c||r;return a("b-container",{attrs:{fluid:""}},[a("ValidationObserver",{scopedSlots:e._u([{key:"default",fn:function(r){var t=r.handleSubmit;return[a("form",{on:{submit:function(r){return r.preventDefault(),t(e.onSubmit)}}},[a("b-row",[a("b-col",{attrs:{lg:"3"}},[a("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[e._v("Add New User")])]},proxy:!0},{key:"body",fn:function(){return[a("b-form-group",[a("div",{staticClass:"add-img-user profile-img-edit"},[a("b-img",{staticClass:"profile-pic height-150 width-150",attrs:{fluid:"",src:e.user.profile_image,alt:"profile-pic"}}),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.user.profile_image,expression:"user.profile_image"}],attrs:{type:"hidden"},domProps:{value:e.user.profile_image},on:{input:function(r){r.target.composing||e.$set(e.user,"profile_image",r.target.value)}}}),e._v(" "),a("div",{staticClass:"p-image"},[a("b-button",{staticClass:"upload-button iq-bg-primary position-relative",attrs:{variant:"none"}},[a("input",{staticClass:"h-100 position-absolute",staticStyle:{opacity:"0"},attrs:{type:"file",accept:"image/*"},on:{change:e.previewImage}}),e._v("\n                      File Upload\n                    ")])],1)],1),e._v(" "),a("div",{staticClass:"img-extension mt-3"},[a("div",{staticClass:"d-inline-block align-items-center"},[a("span",[e._v("Only")]),e._v(" "),a("b-link",{attrs:{href:"javascript:void();"}},[e._v(".jpg")]),e._v(" "),a("b-link",{attrs:{href:"javascript:void();"}},[e._v(".png")]),e._v(" "),a("b-link",{attrs:{href:"javascript:void();"}},[e._v(".jpeg")]),e._v(" "),a("span",[e._v("allowed")])],1)])]),e._v(" "),a("b-form-group",{attrs:{label:"Facebook Url:","label-for":"furl"}},[a("b-form-input",{attrs:{id:"furl",name:"furl",placeholder:"Facebook Url"},model:{value:e.user.facebook_url,callback:function(r){e.$set(e.user,"facebook_url",r)},expression:"user.facebook_url"}})],1),e._v(" "),a("b-form-group",{attrs:{label:"Twitter Url:","label-for":"turl"}},[a("b-form-input",{attrs:{id:"turl",name:"turl",placeholder:"Twitter Url"},model:{value:e.user.twitter_url,callback:function(r){e.$set(e.user,"twitter_url",r)},expression:"user.twitter_url"}})],1),e._v(" "),a("b-form-group",{attrs:{label:"Instagram Url:","label-for":"turl"}},[a("b-form-input",{attrs:{id:"instaurl",name:"instaurl",placeholder:"Instagram Url"}})],1),e._v(" "),a("b-form-group",{attrs:{label:"Linkedin Url:","label-for":"lurl"}},[a("b-form-input",{attrs:{id:"lurl",placeholder:"Linkedin Url"}})],1)]},proxy:!0}],null,!0)})],1),e._v(" "),a("b-col",{attrs:{lg:"9"}},[a("iq-card",{scopedSlots:e._u([{key:"headerTitle",fn:function(){return[a("h4",{staticClass:"card-title"},[e._v("New User Information")])]},proxy:!0},{key:"body",fn:function(){return[a("div",{staticClass:"new-user-info"},[a("b-row",[a("b-form-group",{staticClass:"col-md-6",attrs:{label:"First Name:","label-for":"fname"}},[a("ValidationProvider",{attrs:{name:"First name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("b-form-input",{class:t.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"First Name"},model:{value:e.user.fname,callback:function(r){e.$set(e.user,"fname",r)},expression:"user.fname"}}),e._v(" "),a("div",{staticClass:"invalid-feedback"},[a("span",[e._v(e._s(t[0]))])])]}}],null,!0)})],1),e._v(" "),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Last Name:","label-for":"lname"}},[a("ValidationProvider",{attrs:{name:"Last name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("b-form-input",{class:t.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Last Name"},model:{value:e.user.lname,callback:function(r){e.$set(e.user,"lname",r)},expression:"user.lname"}}),e._v(" "),a("div",{staticClass:"invalid-feedback"},[a("span",[e._v(e._s(t[0]))])])]}}],null,!0)})],1),e._v(" "),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Street Address 1:","label-for":"add1"}},[a("b-form-input",{attrs:{type:"text",name:"add1",id:"add1",placeholder:"Street Address 1"},model:{value:e.user.address1,callback:function(r){e.$set(e.user,"address1",r)},expression:"user.address1"}})],1),e._v(" "),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Street Address 2:","label-for":"add2"}},[a("b-form-input",{attrs:{type:"text",name:"add2",id:"add2",placeholder:"Street Address 2"},model:{value:e.user.address2,callback:function(r){e.$set(e.user,"address2",r)},expression:"user.address2"}})],1),e._v(" "),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Company Name:","label-for":"cname"}},[a("b-form-input",{attrs:{type:"text",name:"cname",id:"cname",placeholder:"Company Name"},model:{value:e.user.company_name,callback:function(r){e.$set(e.user,"company_name",r)},expression:"user.company_name"}})],1),e._v(" "),a("b-form-group",{staticClass:"col-sm-6",attrs:{"label-for":"selectcountry",label:"Country:"}},[a("b-form-select",{attrs:{plain:"",options:e.countries,id:"selectcountry"},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[e._v("Select Country")])]},proxy:!0}],null,!0),model:{value:e.user.country,callback:function(r){e.$set(e.user,"country",r)},expression:"user.country"}})],1),e._v(" "),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Town/City:","label-for":"city"}},[a("b-form-input",{attrs:{type:"text",name:"city",id:"city",placeholder:"Town/City"},model:{value:e.user.city,callback:function(r){e.$set(e.user,"city",r)},expression:"user.city"}})],1),e._v(" "),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Pin Code:","label-for":"pno"}},[a("b-form-input",{attrs:{type:"text",name:"pno",id:"pno",placeholder:"Pin Code"},model:{value:e.user.pincode,callback:function(r){e.$set(e.user,"pincode",r)},expression:"user.pincode"}})],1)],1),e._v(" "),a("hr"),e._v(" "),a("h5",{staticClass:"mb-3"},[e._v("Security")]),e._v(" "),a("b-row",[a("b-form-group",{staticClass:"col-md-6",attrs:{label:"User Name:","label-for":"uname"}},[a("ValidationProvider",{attrs:{name:"User Name",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("b-form-input",{class:t.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"User Name"},model:{value:e.user.username,callback:function(r){e.$set(e.user,"username",r)},expression:"user.username"}}),e._v(" "),a("div",{staticClass:"invalid-feedback"},[a("span",[e._v(e._s(t[0]))])])]}}],null,!0)})],1),e._v(" "),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Email:","label-for":"uname"}},[a("ValidationProvider",{attrs:{name:"Email",rules:"required|email"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("b-form-input",{class:t.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Email"},model:{value:e.user.email,callback:function(r){e.$set(e.user,"email",r)},expression:"user.email"}}),e._v(" "),a("div",{staticClass:"invalid-feedback"},[a("span",[e._v(e._s(t[0]))])])]}}],null,!0)})],1),e._v(" "),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"User Role:","label-for":"selectuserrole"}},[a("b-form-select",{attrs:{plain:"",options:e.roles,id:"selectuserrole"},scopedSlots:e._u([{key:"first",fn:function(){return[a("b-form-select-option",{attrs:{value:null}},[e._v("Select")])]},proxy:!0}],null,!0),model:{value:e.user.role,callback:function(r){e.$set(e.user,"role",r)},expression:"user.role"}})],1),e._v(" "),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Mobile Number:","label-for":"mobno"}},[a("ValidationProvider",{attrs:{name:"Mobile Number",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("b-form-input",{class:t.length>0?" is-invalid":"",attrs:{type:"text",placeholder:"Mobile Number"},model:{value:e.user.mobile_no,callback:function(r){e.$set(e.user,"mobile_no",r)},expression:"user.mobile_no"}}),e._v(" "),a("div",{staticClass:"invalid-feedback"},[a("span",[e._v(e._s(t[0]))])])]}}],null,!0)})],1),e._v(" "),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Password:","label-for":"pass"}},[a("ValidationProvider",{attrs:{name:"Password",rules:"required|confirmed:repeat_password"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("b-form-input",{class:t.length>0?" is-invalid":"",attrs:{type:"password",placeholder:"Password"},model:{value:e.user.password,callback:function(r){e.$set(e.user,"password",r)},expression:"user.password"}}),e._v(" "),a("div",{staticClass:"invalid-feedback"},[a("span",[e._v(e._s(t[0]))])])]}}],null,!0)})],1),e._v(" "),a("b-form-group",{staticClass:"col-md-6",attrs:{label:"Repeat Password:","label-for":"rpass"}},[a("ValidationProvider",{attrs:{vid:"repeat_password",name:"Repeat Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(r){var t=r.errors;return[a("b-form-input",{class:t.length>0?" is-invalid":"",attrs:{type:"password",placeholder:"Repeat Password"},model:{value:e.user.repeat_password,callback:function(r){e.$set(e.user,"repeat_password",r)},expression:"user.repeat_password"}}),e._v(" "),a("div",{staticClass:"invalid-feedback"},[a("span",[e._v(e._s(t[0]))])])]}}],null,!0)})],1)],1),e._v(" "),a("div",{staticClass:"checkbox"},[a("label",[a("input",{staticClass:"mr-2",attrs:{type:"checkbox"}}),e._v("I agree terms & conditions.")])]),e._v(" "),a("b-button",{attrs:{variant:"primary",type:"submit"}},[e._v("Add New User")])],1)]},proxy:!0}],null,!0)})],1)],1)],1)]}}])})],1)}),[],!1,null,null,null);r.default=i.exports},274:function(e,r){e.exports="/images/user-11.png?889f24898432556cb37f2241a522210a"}}]);
//# sourceMappingURL=59.js.map