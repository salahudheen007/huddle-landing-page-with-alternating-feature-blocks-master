(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&f.push(n[s][0]),n[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(f.length)f.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,o=1;o<a.length;o++){var c=a[o];0!==n[c]&&(i=!1)}i&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var i={},n={app:0},r=[];function s(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=i,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(a,i,function(e){return t[e]}.bind(null,i));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/huddle-landing-page-with-alternating-feature-blocks-master/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"09f0":function(t,e,a){t.exports=a.p+"img/illustration-grow-together.bb27da81.svg"},1751:function(t,e,a){},1777:function(t,e,a){"use strict";a("c07c")},"19d0":function(t,e,a){t.exports=a.p+"img/icon-email.f0f5b24a.svg"},"20c8":function(t,e,a){t.exports=a.p+"img/illustration-flowing-conversation.6641e825.svg"},"2c3f":function(t,e,a){"use strict";a("f698")},"2d8b":function(t,e,a){t.exports=a.p+"img/illustration-mockups.88090ace.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("my-header"),a("div",{staticClass:"body"},[t._l(t.data,(function(t){return a("card",{key:t.imp,attrs:{image:t.cardimg,heading:t.cardHeading,txt:t.cardTxt,imp:t.imp}})})),a("float")],2),a("my-footer")],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"floating"},[a("h2",[t._v("Ready To Build Your Community?")]),a("div",{staticClass:"btn-div"},[a("my-button",{staticClass:"btn"})],1)])},o=[],c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",[t._v("Get Started For Free")])},l=[],u={name:"MyButton"},d=u,f=(a("a261"),a("2877")),m=Object(f["a"])(d,c,l,!1,null,"53dea422",null),p=m.exports,g={name:"Float",components:{MyButton:p}},v=g,h=(a("1777"),Object(f["a"])(v,s,o,!1,null,"11ee68d7",null)),_=h.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",class:t.imp},[a("div",{staticClass:"card-img"},[a("img",{attrs:{src:t.image,alt:""}})]),a("div",{staticClass:"card-body"},[a("h2",[t._v(t._s(t.heading))]),a("p",[t._v(t._s(t.txt))])])])},y=[],C={name:"card",props:["image","heading","txt","imp"]},x=C,w=(a("5fea"),Object(f["a"])(x,b,y,!1,null,"31f52ccd",null)),O=w.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[a("div",{staticClass:"navbar",attrs:{role:"navbar"}},[a("div",{staticClass:"logo"},[a("img",{attrs:{src:t.logo_img,alt:""}})]),t._m(0)]),a("div",{staticClass:"header-content"},[a("div",{staticClass:"header-txt"},[a("h2",{staticClass:"header-title"},[t._v("Build The Community Your Fans Will Love")]),a("p",{staticClass:"header-text"},[t._v(" Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion. ")]),a("my-button",{staticClass:"btn"})],1),a("div",{staticClass:"header-img"},[a("img",{attrs:{src:t.header_img,alt:""}})])])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("button",{staticClass:"try-it"},[t._v("Try It Free")])])}],E={name:"MyHeader",data:function(){return{logo_img:a("9b19"),header_img:a("2d8b")}},components:{MyButton:p}},T=E,M=(a("b63b"),Object(f["a"])(T,j,$,!1,null,"48eb9ca3",null)),k=M.exports,F=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"logo"},[a("img",{staticClass:"logo-img",attrs:{src:t.logo_img,alt:""}}),a("div",{staticClass:"location"},[a("tr",[a("td",[a("img",{staticClass:"loc-img icons",attrs:{src:t.loc_img,alt:"location"}})]),t._m(0)]),a("tr",[a("td",[a("img",{staticClass:"icons",attrs:{src:t.phone_img,alt:"phone"}})]),t._m(1)]),a("tr",[a("td",[a("img",{staticClass:"icons",attrs:{src:t.gmail_img,alt:"email"}})]),t._m(2)])])]),t._m(3),t._m(4),t._m(5)])},H=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("p",{staticClass:"p"},[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("p",{staticClass:"p"},[t._v("+1-543-123-4567")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("td",[a("p",{staticClass:"p"},[t._v("example@fylo.com")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("tr",[a("td",[a("p",[t._v("About Us")])])]),a("tr",[a("td",[a("p",[t._v("What We Do")])])]),a("tr",[a("td",[a("p",[t._v("FAQ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"about"},[a("tr",[a("td",[a("p",[t._v("Career")])])]),a("tr",[a("td",[a("p",[t._v("Blog")])])]),a("tr",[a("td",[a("p",[t._v("Contact Us")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"social"},[a("div",{staticClass:"icon-tr"},[a("td",{staticClass:"social-td"},[a("i",{staticClass:"fa fa-facebook-f icons socail-i"})]),a("td",{staticClass:"social-td"},[a("i",{staticClass:"fa fa-twitter icons socail-i"})]),a("td",{staticClass:"social-td"},[a("i",{staticClass:"fa fa-instagram icons socail-i"})])]),a("tr",[a("td",[a("p",{staticClass:"copy"},[t._v("© Copyright 2018 Huddle. All rights reserved.")])])])])}],P={name:"MyFooter",data:function(){return{logo_img:a("9b19"),loc_img:a("bb27"),phone_img:a("6ab6"),gmail_img:a("19d0")}}},B=P,S=(a("f7d6"),Object(f["a"])(B,F,H,!1,null,"23708963",null)),Y=S.exports,A={name:"App",components:{MyHeader:k,Card:O,Float:_,MyFooter:Y},data:function(){return{data:[{cardimg:a("09f0"),cardHeading:"Grow Together",cardTxt:"Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful converstions you miss out on wuth a feedback form",imp:"card-rv"},{cardimg:a("20c8"),cardHeading:"Flowing Conversations",cardTxt:"You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.",imp:"card-dr"},{cardimg:a("9a39"),cardHeading:"Your Users",cardTxt:"It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.",imp:"card-rv"}]}}},G=A,U=(a("2c3f"),Object(f["a"])(G,n,r,!1,null,"441c6837",null)),W=U.exports;i["a"].config.productionTip=!1,new i["a"]({render:function(t){return t(W)}}).$mount("#app")},"5fea":function(t,e,a){"use strict";a("1751")},"61d3":function(t,e,a){},"6ab6":function(t,e,a){t.exports=a.p+"img/icon-phone.47e54a44.svg"},"9a39":function(t,e,a){t.exports=a.p+"img/illustration-your-users.8a5af995.svg"},"9b19":function(t,e,a){t.exports=a.p+"img/logo.3cb86730.svg"},a222:function(t,e,a){},a261:function(t,e,a){"use strict";a("a222")},b63b:function(t,e,a){"use strict";a("b8a2")},b8a2:function(t,e,a){},bb27:function(t,e,a){t.exports=a.p+"img/icon-location.0f65814b.svg"},c07c:function(t,e,a){},f698:function(t,e,a){},f7d6:function(t,e,a){"use strict";a("61d3")}});
//# sourceMappingURL=app.90b03e9f.js.map