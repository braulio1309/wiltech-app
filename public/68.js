(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1919:function(e,t,n){"use strict";n.r(t);var s=n(308),a=n(192),o={name:"Callback",mounted:function(){var e=new s.a.WebAuth(a.a.auth0Config),t=this.$route.hash;e.parseHash({hash:t},(function(t,n){e.client.userInfo(n.accessToken,(function(e,t){localStorage.setItem("user",t),localStorage.setItem("access_token",n.accessToken),this.$router.push({name:"dashboard.home-1"})}))})),this.$router.push("/")}},u=n(8),c=Object(u.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=c.exports}}]);
//# sourceMappingURL=68.js.map