(function(e){function t(t){for(var a,i,s=t[0],c=t[1],p=t[2],l=0,d=[];l<s.length;l++)i=s[l],o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,p||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},o={app:0},r=[];function s(e){return c.p+"js/"+({Agent:"Agent",Home:"Home",Option:"Option",OptionEntity:"OptionEntity",OptionIntent:"OptionIntent",OptionTrain:"OptionTrain",User:"User"}[e]||e)+"."+{Agent:"6314867a",Home:"71ad22f8",Option:"8d9bbc28",OptionEntity:"ea114395",OptionIntent:"01ac977a",OptionTrain:"b7bd431f",User:"93d61b6d"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={Agent:1,Option:1,OptionEntity:1,OptionIntent:1,User:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var a="css/"+({Agent:"Agent",Home:"Home",Option:"Option",OptionEntity:"OptionEntity",OptionIntent:"OptionIntent",OptionTrain:"OptionTrain",User:"User"}[e]||e)+"."+{Agent:"4740113b",Home:"31d6cfe0",Option:"fa63c578",OptionEntity:"8129db5b",OptionIntent:"9cf8d03e",OptionTrain:"31d6cfe0",User:"14368ca9"}[e]+".css",i=c.p+a,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var s=o[r],p=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(p===a||p===i))return t()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){s=l[r],p=s.getAttribute("data-href");if(p===a||p===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,n(o)},d.href=i;var u=document.getElementsByTagName("head")[0];u.appendChild(d)}).then(function(){i[e]=0}));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise(function(t,n){a=o[e]=[t,n]});t.push(a[2]=r);var p,l=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e),p=function(t){d.onerror=d.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,r=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");r.type=a,r.request=i,n[1](r)}o[e]=void 0}};var u=setTimeout(function(){p({type:"timeout",target:d})},12e4);d.onerror=d.onload=p,l.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-chatbot/dist/",c.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],l=p.push.bind(p);p.push=t,p=p.slice();for(var d=0;d<p.length;d++)t(p[d]);var u=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0af1":function(e,t,n){},"186d":function(e,t,n){"use strict";var a=n("8e27"),i=n.n(a);i.a},"567b":function(e,t,n){const a=n("96eb");a.mock(RegExp("http://api/agent$"),"post",e=>{console.debug(JSON.parse(e.body))}),a.mock(RegExp("http://api/agent/[^/]*$"),"put",e=>{console.debug(JSON.parse(e.body))}),a.mock(RegExp("http://api/agent/[^/]*$"),"get",e=>{const t={id:e.url.split("/").pop(),name:"@name",description:"@paragraph",webhook:"webhook"};return a.mock(t)}),a.mock(RegExp("http://api/agent/[^/]*$"),"delete",e=>{console.debug(`Delete agent: ${e.url.split("/").pop()}`)}),a.mock(RegExp("http://api/agent$"),"get",{"list|5-14":[{id:"@guid",name:"@name",description:"@paragraph",webhook:"webhook"}]})},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-container",[n("el-header",[n("el-row",{attrs:{type:"flex",gutter:20}},[n("el-col",{attrs:{offset:4,span:6}},[n("logo")],1),n("el-col",{attrs:{span:2}},[n("el-menu",{attrs:{router:"","default-active":e.$route.path,mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"/"+this.$route.params.lang+"/agent/index"}},[e._v(e._s(e.$t("nav.agent")))])],1)],1),n("el-col",{attrs:{offset:5}},[n("el-menu",{attrs:{router:"","default-active":e.$route.path,mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"lang"}},[n("el-select",{on:{change:e.langChange},model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}},[n("el-option",{attrs:{value:"zh-CN",label:"简体中文"}}),n("el-option",{attrs:{value:"en-US",label:"English"}})],1)],1),n("el-menu-item",{attrs:{index:"/"+this.$route.params.lang+"/login"}},[e._v(e._s(e.$t("nav.login")))]),n("el-menu-item",{attrs:{index:"/"+this.$route.params.lang+"/regist"}},[e._v(e._s(e.$t("nav.regist")))])],1)],1)],1)],1),n("router-view")],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{on:{click:e.goHome}},[e._m(0)])},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("span",{staticClass:"chat"},[e._v("Chat")]),n("span",{staticClass:"bot"},[e._v("Bot")])])}],c={name:"Logo",methods:{goHome(){this.$router.push({name:"home"})}}},p=c,l=(n("186d"),n("2877")),d=Object(l["a"])(p,r,s,!1,null,null,null);d.options.__file="Logo.vue";var u=d.exports,g={name:"App",components:{Logo:u},watch:{$route(){this.lang=this.$route.params.lang,this.$i18n.locale=this.lang}},data(){return{lang:"en-US"}},methods:{langChange(){this.$router.push({name:this.$route.name,params:{lang:this.lang}})}}},m=g,h=(n("7faf"),Object(l["a"])(m,i,o,!1,null,null,null));h.options.__file="App.vue";var f=h.exports,y=n("a925"),v=n("f0d9"),b=n.n(v),w={...b.a,common:{create:"创建",save:"保存",delete:"删除",cancel:"取消",saved:"已保存",canceled:"已取消",required:"请输入{0}"},header:{testMessage:"你好，世界~！"},nav:{agent:"代理",login:"登录",regist:"注册"},aside:{setting:"设置",entities:"实体",intents:"兴趣",train:"训练"},user:{username:"用户名",password:"密码",confirm:"确认密码",display:"显示名",requirePassword:"请输入密码",requireConfirm:"请再次输入密码",confirmFail:"两次输入密码不一致"},agent:{name:"代理名称",description:"描述",webhook:"回调URL",index:{create:"创建代理"},edit:{dangerZone:{name:"危险区域",title:"删除代理",info:'确定要删除代理"{0}"吗？这将删除代理所包含的全部数据，且不能被撤销！',confirm:"删除这个代理",placeholder:"输入DELETE并点击删除",errorMessage:"你可以在上面输入DELETE并点击删除来删除代理，或者点击取消撤销本操作"}}},entity:{name:"实体类型",value:"实体",description:"描述",upload:{name:"上传实体",start:"拖拽TXT文件到这里，或者",mid:"点击",end:"上传",tip:"只能上传TXT文件，每行包含一个值"},content:"实体值列表",addContent:"添加实体值",index:{create:"创建实体"},delete:{title:"删除实体",info:'确定要删除实体"{0}"吗？'}}},E=n("b2d6"),O=n.n(E),$={...O.a,common:{create:"CREATE",save:"SAVE",delete:"DELETE",cancel:"CANCEL",saved:"Saved",canceled:"Canceled",required:"Please enter {0}"},header:{testMessage:"Hello, world~!"},nav:{agent:"Agent",login:"Login",regist:"Regist"},aside:{setting:"Setting",entities:"Entities",intents:"Intents",train:"Train"},user:{username:"Username",password:"Password",confirm:"Confirm Password",display:"Display Name",requirePassword:"Please enter password",requireConfirm:"Please enter password again",confirmFail:"Confirm password does not match the password"},agent:{name:"Agent Name",description:"Description",webhook:"Webhook",index:{create:"Create Agent"},edit:{dangerZone:{name:"DANGER ZONE",title:"Delete Agent",info:'Are you sure you want to delete agent "{0}"? This will destroy the agent with all corresponding data and cannot be undone!',confirm:"DELETE THIS AGENT",placeholder:"Type DELETE here and click DELETE button",errorMessage:"You can type DELETE above and click DELETE button to delete, or click CANCEL button to cancel"}}},entity:{name:"Entity Type",value:"Entity",description:"Description",upload:{name:"Upload Entities",start:"Drag and drop txt files there, or ",mid:"click",end:" to upload",tip:"Can only upload txt file, each line contains a value"},content:"Entity List",addContent:"Add Entity",index:{create:"Create Entity"},delete:{title:"Delete Entity",info:'Are you sure you would like to delete entity "{0}"?'}}};a["default"].use(y["a"]);var x=new y["a"]({locale:"en-US",messages:{"zh-CN":w,"en-US":$}}),k=n("8c4f");a["default"].use(k["a"]);const I=new k["a"]({routes:[{path:"/:lang",name:"home",component:()=>n.e("Home").then(n.bind(null,"bb51"))},{path:"/:lang/regist",name:"regist",component:()=>n.e("User").then(n.bind(null,"879c"))},{path:"/:lang/login",name:"login",component:()=>n.e("User").then(n.bind(null,"a55b"))},{path:"/:lang/agent",name:"agent",component:()=>n.e("Agent").then(n.bind(null,"0391")),children:[{path:"index",name:"agentIndex",component:()=>n.e("Agent").then(n.bind(null,"5686"))},{path:"create",name:"agentCreate",component:()=>n.e("Agent").then(n.bind(null,"3def"))},{path:"view/:agentId",name:"agentEdit",components:{aside:()=>n.e("Option").then(n.bind(null,"c38c")),default:()=>n.e("Option").then(n.bind(null,"51c5"))}},{path:"view/:agentId/entity/index",name:"optionEntityIndex",components:{aside:()=>n.e("Option").then(n.bind(null,"c38c")),default:()=>n.e("OptionEntity").then(n.bind(null,"4046"))}},{path:"view/:agentId/entity/create",name:"optionEntityCreate",components:{aside:()=>n.e("Option").then(n.bind(null,"c38c")),default:()=>n.e("OptionEntity").then(n.bind(null,"401f"))}},{path:"view/:agentId/entity/edit/:entityId",name:"optionEntityEdit",components:{aside:()=>n.e("Option").then(n.bind(null,"c38c")),default:()=>n.e("OptionEntity").then(n.bind(null,"3595"))}},{path:"view/:agentId/intent/index",name:"optionIntentIndex",components:{aside:()=>n.e("Option").then(n.bind(null,"c38c")),default:()=>n.e("OptionIntent").then(n.bind(null,"0806"))}},{path:"view/:agentId/intent/create",name:"optionIntentCreate",components:{aside:()=>n.e("Option").then(n.bind(null,"c38c")),default:()=>n.e("OptionIntent").then(n.bind(null,"0cbd"))}},{path:"view/:agentId/intent/edit/:intentId",name:"optionIntentEdit",components:{aside:()=>n.e("Option").then(n.bind(null,"c38c")),default:()=>n.e("OptionIntent").then(n.bind(null,"eb87"))}},{path:"view/:agentId/intent/menu/:intentId",name:"optionIntentMenu",components:{aside:()=>n.e("Option").then(n.bind(null,"c38c")),default:()=>n.e("OptionIntent").then(n.bind(null,"3ab6"))}},{path:"view/:agentId/train/index",name:"optionTrainIndex",components:{aside:()=>n.e("Option").then(n.bind(null,"c38c")),default:()=>n.e("OptionTrain").then(n.bind(null,"4533"))}}]}]});I.beforeEach((e,t,n)=>{void 0===e.params.lang?n({name:"home",params:{lang:"en-US"}}):n()});var T=I,S=n("2f62"),C=n("bc3a"),A=n.n(C);const R=A.a.create({baseURL:"http://api"});var _=R;async function N(e){await _.post("/agent",e)}async function P(e,t){await _.put(`/agent/${e}`,t)}async function U(e){return await _.get(`/agent/${e}`).then(e=>{return e.data})}async function L(e){await _.delete(`/agent/${e}`)}async function D(){return await _.get("/agent").then(e=>{return e.data})}var j={create:N,edit:P,view:U,remove:L,list:D};const H={create:async(e,t)=>{await j.create(t)},edit:async(e,{id:t,data:n})=>{await j.edit(t,n)},view:async(e,t)=>{return await j.view(t)},remove:async(e,t)=>{await j.remove(t)},list:async()=>{return await j.list()}};var J={namespaced:!0,actions:H};async function M(e,t){await _.post(`/agent/${e}/entity`,t)}async function q(e,t,n){await _.put(`/agent/${e}/entity/${t}`,n)}async function B(e,t){return await _.get(`/agent/${e}/entity/${t}`).then(e=>{return e.data})}async function z(e,t){await _.delete(`/agent/${e}/entity/${t}`)}async function Z(e){return await _.get(`/agent/${e}/entity`).then(e=>{return e.data.list})}var F={create:M,edit:q,view:B,remove:z,list:Z};const G={async create(e,{agentId:t,data:n}){await F.create(t,n)},async edit(e,{agentId:t,id:n,data:a}){await F.edit(t,n,a)},async view(e,{agentId:t,id:n}){return await F.view(t,n)},async remove(e,{agentId:t,id:n}){await F.remove(t,n)},async list(e,{agentId:t}){return await F.list(t)}};var V={namespaced:!0,actions:G};async function X(e,t){await _.post(`/agent/view/${e}/intent/create`,t)}async function W(e,t,n){await _.put(`/agent/view/${e}/intent/edit/${t}`,n)}async function Y(e,t,n){await _.put(`/agent/view/${e}/intent/setting/${t}`,n)}async function K(e,t){return await _.get(`/agent/view/${e}/intent/view/${t}`).then(e=>{return e.data})}async function Q(e,t){await _.delete(`/agent/view/${e}/intent/remove/${t}`)}async function ee(e,t){return await _.get(`/agent/view/${e}/intent/page?id=${t}`).then(e=>{return e.data})}var te={create:X,edit:W,setting:Y,view:K,remove:Q,page:ee};const ne={create:async(e,{agentId:t,data:n})=>{await te.create(t,n)},edit:async(e,{agentId:t,id:n,data:a})=>{await te.edit(t,n,a)},setting:async(e,{agentId:t,id:n,data:a})=>{await te.setting(t,n,a)},view:async(e,{agentId:t,id:n})=>{return await te.view(t,n)},remove:async(e,{agentId:t,id:n})=>{await te.remove(t,n)},page:async(e,{agentId:t,id:n})=>{return await te.page(t,n)}};var ae={namespaced:!0,actions:ne};async function ie(e){await _.post("/user",e)}var oe={regist:ie};const re={regist:async(e,t)=>{await oe.regist(t)}};var se={namespaced:!0,actions:re};a["default"].use(S["b"]);const ce=!1;var pe=new S["b"].Store({modules:{agent:J,entity:V,intent:ae,user:se},strict:ce}),le=n("5c96"),de=n.n(le);n("0fae"),n("b42c"),n("567b"),n("e140"),n("da23");a["default"].config.productionTip=!1,"undefined"===typeof String.prototype.trim&&(String.prototype.trim=function(){return String(this).replace(/^\s+|\s+$/g,"")}),"undefined"===typeof String.prototype.getParam&&(String.prototype.getParam=function(e){const t=new RegExp(`[?&]${e}=([^&]+)`,"g"),n=t.exec(String(this));let a=null;if(null!=n)try{a=decodeURIComponent(decodeURIComponent(n[1]))}catch(e){try{a=decodeURIComponent(n[1])}catch(e){a=n[1]}}return a}),a["default"].use(de.a,{i18n:(e,t)=>x.t(e,t)}),new a["default"]({i18n:x,router:T,store:pe,render:e=>e(f)}).$mount("#app")},"7faf":function(e,t,n){"use strict";var a=n("0af1"),i=n.n(a);i.a},"8e27":function(e,t,n){},b42c:function(e,t,n){const a=n("96eb");a.mock(RegExp("http://api/user$"),"post",e=>{console.debug(JSON.parse(e.body))}),a.mock(RegExp("http://api/user/[^/]*$"),"put",e=>{console.debug(JSON.parse(e.body))}),a.mock(RegExp("http://api/agent/[^/]*$"),"get",e=>{const t={id:e.url.split("/").pop(),name:"@name",description:"@paragraph",webhook:"webhook"};return a.mock(t)}),a.mock(RegExp("http://api/user/login"),"get",{"list|5-14":[{id:"@guid",name:"@name",description:"@paragraph",webhook:"webhook"}]})},da23:function(e,t,n){const a=n("96eb");a.mock(RegExp("http://api/agent/view/[^/]*/intent/create$"),"post",e=>{console.debug(JSON.parse(e.body))}),a.mock(RegExp("http://api/agent/view/[^/]*/intent/edit/[^/]*$"),"put",e=>{console.debug(JSON.parse(e.body))}),a.mock(RegExp("http://api/agent/view/[^/]*/intent/setting/[^/]*$"),"put",e=>{console.debug(JSON.parse(e.body))}),a.mock(RegExp("http://api/agent/view/[^/]*/intent/view/[^/]*$"),"get",e=>{const t={id:e.url.split("/").pop(),root:{type:"intent",intent:"@name","weight|1-10.2":1,children:[{type:"holder",children:[]}]}};return a.mock(t)}),a.mock(RegExp("http://api/agent/view/[^/]*/intent/remove/[^/]*$"),"delete",e=>{console.debug(`Delete intent: ${e.url.split("/").pop()}`)}),a.mock(RegExp("http://api/agent/view/[^/]*/intent/page[^/]*$"),"get",e=>{const t=parseInt(e.url.getParam("id"),10),n=5,i=73,o=15;let r={totalItems:i,totalPage:o};return t<o?r={totalItems:i,totalPage:o,"list|5":[{"index|+1":(t-1)*n+1,id:"@guid",name:"@title(1)","weight|1-10.2":1}]}:t===o&&(r={totalItems:i,totalPage:o,"list|1-4":[{"index|+1":(t-1)*n+1,id:"@guid",name:"@title(1)","weight|1-10.2":1}]}),a.mock(r)})},e140:function(e,t,n){const a=n("96eb");a.mock(RegExp("http://api/agent/[^/]*/entity$"),"post",e=>{console.debug(JSON.parse(e.body))}),a.mock(RegExp("http://api/agent/[^/]*/entity/[^/]*$"),"put",e=>{console.debug(JSON.parse(e.body))}),a.mock(RegExp("http://api/agent/[^/]*/entity/[^/]*$"),"get",e=>{const t={id:e.url.split("/").pop(),name:"@title(1)",description:"@paragraph","entries|5-25":["SomeValue"]};return a.mock(t)}),a.mock(RegExp("http://api/agent/[^/]*/entity/[^/]*$"),"delete",e=>{console.debug(`Delete entity: ${e.url.split("/").pop()}`)}),a.mock(RegExp("http://api/agent/[^/]*/entity$"),"get",()=>{const e=a.mock({"list|12-16":[{id:"@guid",name:"@title(1)",description:"@paragraph"}]});return e})}});
//# sourceMappingURL=app.c208d96e.js.map