webpackJsonp([1],{"2W1J":function(t,e){},"2mV7":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("gNcp"),n={};a.keys().forEach(function(t){"./index.js"!==t&&(n[t.replace(/(\.\/|\.js)/g,"")]=a(t).default)}),e.default=n},F0YQ:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("/5sW"),n=s("Dd8w"),i=s.n(n),r=s("NYxO"),o={data:function(){return{title:"TheLaxis"}},computed:i()({},Object(r.b)(["isFrench"])),methods:{onFrench:function(){this.$store.dispatch("setFrench",!0)},onEnglish:function(){this.$store.dispatch("setFrench",!1)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t.isFrench?a("nav",{staticClass:"navbar navbar-expand-sm navbar-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{tag:"div",to:"/"}},[a("div",{staticClass:"d-flex flex-row align-items-center pointer"},[a("img",{staticClass:"_image",attrs:{src:s("SW01"),alt:""}}),t._v(" "),a("h3",{staticClass:"brand pl-3 d-none d-sm-block"},[a("strong",[t._v("LaxisList.")])])])]),t._v(" "),a("ul",{staticClass:"navbar-nav d-flex flex-row align-items-center ml-auto"},[a("li",{staticClass:"nav-item pr-4"},[a("a",{staticClass:"nav-link pointer text-white d-flex flex-row align-items-center",on:{click:t.onEnglish}},[a("i",{staticClass:"em em-gb mr-2"}),t._v("EN")])]),t._v(" "),a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link _btn pointer",attrs:{tag:"a",activeClass:"active",to:"/fr/get-started"}},[t._v("Commander")])],1)])],1):a("nav",{staticClass:"navbar navbar-expand-sm navbar-dark"},[a("router-link",{staticClass:"navbar-brand",attrs:{tag:"div",to:"/"}},[a("div",{staticClass:"d-flex flex-row align-items-center pointer"},[a("img",{staticClass:"_image",attrs:{src:s("SW01"),alt:""}}),t._v(" "),a("h3",{staticClass:"brand pl-3 d-none d-sm-block"},[a("strong",[t._v("LaxisList.")])])])]),t._v(" "),a("ul",{staticClass:"navbar-nav d-flex flex-row align-items-center ml-auto"},[a("li",{staticClass:"nav-item pr-4"},[a("a",{staticClass:"nav-link pointer text-white d-flex flex-row align-items-center",on:{click:t.onFrench}},[a("i",{staticClass:"em em-flag-cp mr-2"}),t._v("FR")])]),t._v(" "),a("li",{staticClass:"nav-item active"},[a("router-link",{staticClass:"nav-link _btn pointer",attrs:{tag:"a",activeClass:"active",to:"/get-started"}},[t._v("Book now")])],1)])],1)])},staticRenderFns:[]};var c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"footer"},[e("div",{staticClass:"container text-white"},[e("div",{staticClass:"row font-weight-light"},[e("div",{staticClass:"col-12 py-2 d-flex flex-row align-items-center justify-content-between"},[e("div",{staticClass:"d-flex flex-row align-items-center"},[e("span",[this._v("© "+this._s((new Date).getFullYear())+".")]),this._v(" "),this._m(0)]),this._v(" "),this._m(1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"pl-2 brand"},[e("strong",[this._v("LaxisList.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"d-flex flex-row align-items-center"},[e("span",{staticClass:"pointer"},[e("i",{staticClass:"fa fa-twitter mr-3",attrs:{"aria-label":"true"}})]),this._v(" "),e("span",{staticClass:"pointer"},[e("i",{staticClass:"fa fa-facebook-official",attrs:{"aria-label":"true"}})])])}]};var m={name:"App",components:{Header:s("VU/8")(o,l,!1,function(t){s("qKvc")},"data-v-3e11c3b8",null).exports,Footer:s("VU/8")(null,c,!1,function(t){s("jnmC")},"data-v-7d86c0b5",null).exports}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view",{staticClass:"main"}),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var d=s("VU/8")(m,u,!1,function(t){s("2W1J")},null,null).exports,v=s("/ocq"),f={data:function(){return{showmore:!1}},computed:i()({},Object(r.b)(["isFrench"])),components:{}},p={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isFrench?s("section",{staticClass:"container-fluid text-white"},[t._m(3),t._v(" "),s("div",{staticClass:"row pt-4 pb-5"},[t._m(4),t._v(" "),s("div",{staticClass:"col-12 col-md-10 offset-md-1 font-weight-light"},[t._m(5),t._v(" "),t.showmore?s("div",{staticClass:"text-justify font-18 pt-2"},[t._v("\n        Nous concevons "),s("i",[t._v("gratuitement")]),t._v(", si vous êtes satisfé puis vous payez. Notre "),s("i",[t._v("offre")]),t._v(" inclus la conception du "),s("i",[t._v("site internet")]),t._v(" et "),s("i",[t._v("applications mobiles")]),t._v(", le nom de domaine, l'hébergement et les déploiements sur AppStore, Playstore et Web.\n        ")]):t._e(),t._v(" "),s("div",{staticClass:"my-3 pointer d-flex flex-row align-items-center justify-content-center show",staticStyle:{"font-size":"14px !important"},on:{click:function(e){t.showmore=!t.showmore}}},[s("strong",[t._v(t._s(t.showmore?"Voir moins":"Voir plus"))]),t._v(" "),s("div",[s("i",{staticClass:"fa pl-2",class:{"fa-angle-down":!t.showmore,"fa-angle-up":t.showmore},staticStyle:{"font-size":"19px"},attrs:{"aria-label":"true"}})])])]),t._v(" "),s("div",{staticClass:"col-12 d-flex flex-row justify-content-center pt-2"},[s("router-link",{staticClass:"btn _button text-dark pointer d-flex flex-row align-items-center",attrs:{tag:"button",to:"/fr/get-started"}},[t._v("Commander")])],1)])]):s("section",{staticClass:"container-fluid text-white"},[t._m(0),t._v(" "),s("div",{staticClass:"row pt-4 pb-5"},[t._m(1),t._v(" "),s("div",{staticClass:"col-12 col-md-10 offset-md-1 font-weight-light"},[t._m(2),t._v(" "),t.showmore?s("div",{staticClass:"text-justify font-18 pt-2"},[t._v("\n            We build for "),s("i",[t._v("free")]),t._v(", if you are satisfied then you pay. Our "),s("i",[t._v("offer")]),t._v(" includes website and mobile apps design, domain name, hosting and deployments on AppStore, Playstore and Web.\n          ")]):t._e(),t._v(" "),s("div",{staticClass:"my-3 pointer d-flex flex-row align-items-center justify-content-center show",staticStyle:{"font-size":"14px !important"},on:{click:function(e){t.showmore=!t.showmore}}},[s("strong",[t._v(t._s(t.showmore?"Show less":"Show more"))]),t._v(" "),s("div",[s("i",{staticClass:"fa pl-2",class:{"fa-angle-down":!t.showmore,"fa-angle-up":t.showmore},staticStyle:{"font-size":"19px"},attrs:{"aria-label":"true"}})])])]),t._v(" "),s("div",{staticClass:"col-12 d-flex flex-row justify-content-center pt-2"},[s("router-link",{staticClass:"btn _button text-dark pointer d-flex flex-row align-items-center",attrs:{tag:"button",to:"/get-started"}},[t._v("Book now")])],1)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center pt-4"},[e("div",{staticClass:"d-flex flex-row align-items-center"},[e("i",{staticClass:"icons fa fa-android px-4",attrs:{"aria-label":"true"}}),this._v(" "),e("i",{staticClass:"icons fa fa-apple px-4",attrs:{"aria-label":"true"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-8 offset-md-2 text-center pb-4"},[e("h1",[this._v("Get an Android & iPhone app and a Website in your name.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-justify font-18"},[t._v("\n            Do you want to have your personal "),s("strong",[t._v("Android")]),t._v(" & "),s("strong",[t._v("iPhone")]),t._v(" app and "),s("strong",[t._v("Website")]),t._v(" in your name as your own social network? Well, you will be able to post your photos, videos "),s("i",[t._v("(even Youtube)")]),t._v(", events and notes that can be "),s("strong",[t._v("liked")]),t._v(", "),s("strong",[t._v("commented")]),t._v(" and "),s("strong",[t._v("shared")]),t._v(" by your followers as on Instagram.\n          ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-center pt-4"},[e("div",{staticClass:"d-flex flex-row align-items-center"},[e("i",{staticClass:"icons fa fa-android px-4",attrs:{"aria-label":"true"}}),this._v(" "),e("i",{staticClass:"icons fa fa-apple px-4",attrs:{"aria-label":"true"}})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center pb-4"},[e("h1",[this._v("Posséder une application Android & iPhone et un site web à votre nom.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-justify font-18"},[t._v("Voulez-vous avoir une application "),s("strong",[t._v("Android")]),t._v(", "),s("strong",[t._v("iPhone")]),t._v(" et "),s("strong",[t._v("Site web")]),t._v(" personnel à votre nom comme votre propre réseau social? Bien, vous serez à mesure de publier vos photos, vidéos "),s("i",[t._v("(même Youtube)")]),t._v(", événements et notes qui peuvent être "),s("strong",[t._v("liker")]),t._v(", "),s("strong",[t._v("commenter")]),t._v(" et "),s("strong",[t._v("partager")]),t._v(" par vos abonnés et amis comme sur Instagram.")])}]};var _=s("VU/8")(f,p,!1,function(t){s("rTVV")},"data-v-b54ccb54",null).exports,h=s("Xxa5"),g=s.n(h),b=s("exGp"),x=s.n(b),C={data:function(){return{username:"",email:"",phone:"",message:"",formSubmitted:!1,loading:!1}},computed:i()({},Object(r.b)(["isFrench"])),watch:{isFrench:function(t){if(!0!==t)return this.$router.push("/get-started")}},methods:{onForm:function(){var t=this;return x()(g.a.mark(function e(){var s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.username.length&&t.email.length){e.next=3;break}return e.abrupt("return");case 3:return t.loading=!0,s={username:t.username,email:t.email,phone:t.phone,message:t.message},e.next=7,W.collection("message").add(s).then(function(){t.username="",t.email="",t.phone="",t.message="",t.formSubmitted=!0,t.loading=!1});case 7:e.sent,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t.loading=!1,console.log(e.t0);case 14:case"end":return e.stop()}},e,t,[[0,10]])}))()}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container text-white mt-4"},[s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-md-10 offset-md-1 col-lg-8 offset-lg-2"},[t.formSubmitted?s("div",{staticClass:"text-center"},[s("h2",{staticClass:"mb-4"},[t._v("Thank you for your order.")]),t._v(" "),s("h4",{staticClass:"font-weight-light"},[t._v("We will contact you as soon as possible.")]),t._v(" "),s("router-link",{staticClass:"_button mx-auto mt-5 btn pointer text-dark",attrs:{tag:"button",to:"/"}},[t._v("Home")])],1):s("div",[s("h1",{staticClass:"text-center mb-2"},[t._v("Please place your order.")]),t._v(" "),t._m(0),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.onForm(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Your name",require:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Your email address",require:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.phone,expression:"phone",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"phone",placeholder:"Your phone number (Optional)"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.message,expression:"message",modifiers:{trim:!0}}],staticClass:"form-control",staticStyle:{resize:"none"},attrs:{name:"",id:"message",cols:"4",rows:"2",placeholder:"Message (Optional)"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("button",{staticClass:"mt-3 _button btn text-dark pointer d-flex flex-row align-items-center",attrs:{type:"submit",disabled:t.loading}},[t.loading?s("i",{staticClass:"fa fa-circle-o-notch fa-pulse fa-3x fa-fw mr-2",staticStyle:{"font-size":"18px"},attrs:{"aria-hidden":"true"}}):t._e(),t._v("\n                  Continue\n                ")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mb-5 text-center"},[s("span",{staticClass:"h5"},[t._v("Website, Android and iPhone apps for only $350 ")]),s("br"),s("br"),t._v(" "),s("span",{staticClass:"font-weight-light"},[t._v("We build for "),s("i",[t._v("free")]),t._v(", if you are satisfied then you pay. Our "),s("i",[t._v("offer")]),t._v(" includes "),s("i",[t._v("website")]),t._v(" and "),s("i",[t._v("mobile apps")]),t._v(" design, domain name, hosting and deployments on AppStore, Playstore and Web.")])])}]};var y=s("VU/8")(C,w,!1,function(t){s("ziml")},"data-v-26da821d",null).exports,k={data:function(){return{username:"",email:"",phone:"",message:"",formSubmitted:!1,loading:!1}},computed:i()({},Object(r.b)(["isFrench"])),watch:{isFrench:function(t){if(!0!==t)return this.$router.push("/get-started")}},methods:{onForm:function(){var t=this;return x()(g.a.mark(function e(){var s;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t.username.length&&t.email.length){e.next=3;break}return e.abrupt("return");case 3:return t.loading=!0,s={username:t.username,email:t.email,phone:t.phone,message:t.message},e.next=7,W.collection("message").add(s).then(function(){t.username="",t.email="",t.phone="",t.message="",t.formSubmitted=!0,t.loading=!1});case 7:e.sent,e.next=14;break;case 10:e.prev=10,e.t0=e.catch(0),t.loading=!1,console.log(e.t0);case 14:case"end":return e.stop()}},e,t,[[0,10]])}))()}}},F={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container text-white mt-4"},[s("div",{staticClass:"row mb-5"},[s("div",{staticClass:"col-md-10 offset-md-1 col-lg-8 offset-lg-2"},[t.formSubmitted?s("div",{staticClass:"text-center"},[s("h2",{staticClass:"mb-4"},[t._v("Merci pour votre commande.")]),t._v(" "),s("h4",{staticClass:"font-weight-light"},[t._v("Nous vous contacterons le plus tôt possible.")]),t._v(" "),s("router-link",{staticClass:"_button mx-auto mt-5 btn pointer text-dark",attrs:{tag:"button",to:"/fr"}},[t._v("Accueil")])],1):s("div",[s("h1",{staticClass:"text-center mb-2"},[t._v("Veuillez passer votre commande.")]),t._v(" "),t._m(0),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.onForm(e)}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.username,expression:"username",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"username",placeholder:"Votre nom",require:""},domProps:{value:t.username},on:{input:function(e){e.target.composing||(t.username=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.email,expression:"email",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"email",placeholder:"Votre adresse email",require:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.phone,expression:"phone",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"phone",placeholder:"Votre téléphone (Facultatif)"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("div",{staticClass:"form-group"},[s("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.message,expression:"message",modifiers:{trim:!0}}],staticClass:"form-control",staticStyle:{resize:"none"},attrs:{name:"",id:"message",cols:"4",rows:"2",placeholder:"Message (Facultatif)"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),s("button",{staticClass:"mt-3 _button btn text-dark pointer d-flex flex-row align-items-center",attrs:{type:"submit",disabled:t.loading}},[t.loading?s("i",{staticClass:"fa fa-circle-o-notch fa-pulse fa-3x fa-fw mr-2",staticStyle:{"font-size":"18px"},attrs:{"aria-hidden":"true"}}):t._e(),t._v("\n                  Continue\n                ")])])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",{staticClass:"mb-5 text-center"},[s("span",{staticClass:"h5"},[t._v("Site web, applications Android et iPhone pour seulement "),s("strong",[t._v("$350")])]),s("br"),s("br"),t._v(" "),s("span",{staticClass:"font-weight-light"},[t._v("Nous concevons "),s("i",[t._v("gratuitement")]),t._v(", si vous êtes satisfé puis vous payez. Notre "),s("i",[t._v("offre")]),t._v(" inclus la conception du "),s("i",[t._v("site web")]),t._v(" et "),s("i",[t._v("applications mobiles")]),t._v(", le nom de domaine, l'hébergement et les déploiements sur AppStore, Playstore et Web.")])])}]};var S=s("VU/8")(k,F,!1,function(t){s("F0YQ")},"data-v-50b62240",null).exports;a.a.use(v.a);var $=new v.a({routes:[{path:"/",name:"Home",component:_},{path:"/get-started",name:"GetStarted",component:y},{path:"/fr/get-started",name:"GetStartedFr",component:S},{path:"**",redirect:"/"}],mode:"history"}),j=s("2mV7");a.a.use(r.a);var E=new r.a.Store({modules:j.default,strict:!1}),P=s("1mcD"),N=s.n(P),V=s("It2I"),z=s.n(V);s("3VHS");s.d(e,"db",function(){return W}),a.a.config.productionTip=!1,a.a.use(N.a),z.a.initializeApp({apiKey:"AIzaSyCbhJUP15DcQLoE9E_ekFgQjJT9RLwSCzM",authDomain:"laxislist.firebaseapp.com",databaseURL:"https://laxislist.firebaseio.com",projectId:"laxislist",storageBucket:"laxislist.appspot.com",messagingSenderId:"339938237754"});var W=z.a.firestore();new a.a({el:"#app",router:$,store:E,render:function(t){return t(d)}})},SW01:function(t,e,s){t.exports=s.p+"static/img/myLaxis.a6e1b82.png"},gNcp:function(t,e,s){var a={"./index.js":"2mV7","./shared.js":"ofn5"};function n(t){return s(i(t))}function i(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(a)},n.resolve=i,t.exports=n,n.id="gNcp"},jnmC:function(t,e){},ofn5:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Sazm");s.n(a);e.default={state:{isFrench:!1},getters:{isFrench:function(t){return t.isFrench}},mutations:{SET_FRENCH:function(t,e){return t.isFrench=e}},actions:{setFrench:function(t,e){(0,t.commit)("SET_FRENCH",e)}}}},qKvc:function(t,e){},rTVV:function(t,e){},ziml:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.582fbbc2bbdf96df9bf3.js.map