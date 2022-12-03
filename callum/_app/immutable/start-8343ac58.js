import{S as tt,i as nt,s as rt,a as at,e as V,c as ot,b as z,g as fe,t as F,d as ue,f as B,h as J,j as st,o as Oe,k as it,l as lt,m as ct,n as be,p as D,q as ft,r as ut,u as dt,v as H,w as je,x as M,y as Y,z as ie}from"./chunks/index-ba8e8c5b.js";import{S as Qe,I as q,g as ze,f as ve,s as K,a as Ie,i as ht,P as We,b as pt,c as mt,d as _t}from"./chunks/singletons-f4ffccb4.js";function gt(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function wt(n){return n.split("%25").map(decodeURI).join("%25")}function yt(n){for(const e in n)n[e]=decodeURIComponent(n[e]);return n}const bt=["href","pathname","search","searchParams","toString","toJSON"];function vt(n,e){const t=new URL(n);for(const s of bt){let o=t[s];Object.defineProperty(t,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return Et(t),t}function Et(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const kt="/__data.json";function St(n){return n.replace(/\/$/,"")+kt}function Rt(n){let e=5381;if(typeof n=="string"){let t=n.length;for(;t;)e=e*33^n.charCodeAt(--t)}else if(ArrayBuffer.isView(n)){const t=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let s=t.length;for(;s;)e=e*33^t[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const de=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;te.delete(s)}return de(n,e)};const te=new Map;function Ot(n,e){const t=xe(n,e),s=document.querySelector(t);if(s!=null&&s.textContent){const{body:o,...u}=JSON.parse(s.textContent),r=s.getAttribute("data-ttl");return r&&te.set(t,{body:o,init:u,ttl:1e3*Number(r)}),Promise.resolve(new Response(o,u))}return de(n,e)}function It(n,e,t){if(te.size>0){const s=xe(n,t),o=te.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);te.delete(s)}}return de(e,t)}function xe(n,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(n instanceof Request?n.url:n)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Rt(e.body)}"]`),s}const $t=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Lt(n){const e=[];return{pattern:n==="/"?/^\/$/:new RegExp(`^${jt(n).map(s=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const u=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(u)return e.push({name:u[1],matcher:u[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const r=s.split(/\[(.+?)\](?!\])/),f=r.map((m,_)=>{if(_%2){if(m.startsWith("x+"))return Ee(String.fromCharCode(parseInt(m.slice(2),16)));if(m.startsWith("u+"))return Ee(String.fromCharCode(...m.slice(2).split("-").map(C=>parseInt(C,16))));const w=$t.exec(m);if(!w)throw new Error(`Invalid param: ${m}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,E,S,N,P]=w;return e.push({name:N,matcher:P,optional:!!E,rest:!!S,chained:S?_===1&&r[0]==="":!1}),S?"(.*?)":E?"([^/]*)?":"([^/]+?)"}return Ee(m)}).join("");return"/"+f}).join("")}/?$`),params:e}}function Pt(n){return!/^\([^)]+\)$/.test(n)}function jt(n){return n.slice(1).split("/").filter(Pt)}function At(n,e,t){const s={},o=n.slice(1);let u="";for(let r=0;r<e.length;r+=1){const f=e[r];let m=o[r];if(f.chained&&f.rest&&u&&(m=m?u+"/"+m:u),u="",m===void 0)f.rest&&(s[f.name]="");else{if(f.matcher&&!t[f.matcher](m)){if(f.optional&&f.chained){let _=o.indexOf(void 0,r);if(_===-1){const w=e[r+1];if((w==null?void 0:w.rest)&&w.chained)u=m;else return}for(;_>=r;)o[_]=o[_-1],_-=1;continue}return}s[f.name]=m}}if(!u)return s}function Ee(n){return n.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Ut(n,e,t,s){const o=new Set(e);return Object.entries(t).map(([f,[m,_,w]])=>{const{pattern:E,params:S}=Lt(f),N={id:f,exec:P=>{const C=E.exec(P);if(C)return At(C,S,s)},errors:[1,...w||[]].map(P=>n[P]),layouts:[0,..._||[]].map(r),leaf:u(m)};return N.errors.length=N.layouts.length=Math.max(N.errors.length,N.layouts.length),N});function u(f){const m=f<0;return m&&(f=~f),[m,n[f]]}function r(f){return f===void 0?f:[o.has(f),n[f]]}}function Nt(n){let e,t,s;var o=n[0][0];function u(r){return{props:{data:r[2],form:r[1]}}}return o&&(e=new o(u(n))),{c(){e&&H(e.$$.fragment),t=V()},l(r){e&&je(e.$$.fragment,r),t=V()},m(r,f){e&&M(e,r,f),z(r,t,f),s=!0},p(r,f){const m={};if(f&4&&(m.data=r[2]),f&2&&(m.form=r[1]),o!==(o=r[0][0])){if(e){fe();const _=e;F(_.$$.fragment,1,0,()=>{Y(_,1)}),ue()}o?(e=new o(u(r)),H(e.$$.fragment),B(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(r){s||(e&&B(e.$$.fragment,r),s=!0)},o(r){e&&F(e.$$.fragment,r),s=!1},d(r){r&&J(t),e&&Y(e,r)}}}function Tt(n){let e,t,s;var o=n[0][0];function u(r){return{props:{data:r[2],$$slots:{default:[Dt]},$$scope:{ctx:r}}}}return o&&(e=new o(u(n))),{c(){e&&H(e.$$.fragment),t=V()},l(r){e&&je(e.$$.fragment,r),t=V()},m(r,f){e&&M(e,r,f),z(r,t,f),s=!0},p(r,f){const m={};if(f&4&&(m.data=r[2]),f&523&&(m.$$scope={dirty:f,ctx:r}),o!==(o=r[0][0])){if(e){fe();const _=e;F(_.$$.fragment,1,0,()=>{Y(_,1)}),ue()}o?(e=new o(u(r)),H(e.$$.fragment),B(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(r){s||(e&&B(e.$$.fragment,r),s=!0)},o(r){e&&F(e.$$.fragment,r),s=!1},d(r){r&&J(t),e&&Y(e,r)}}}function Dt(n){let e,t,s;var o=n[0][1];function u(r){return{props:{data:r[3],form:r[1]}}}return o&&(e=new o(u(n))),{c(){e&&H(e.$$.fragment),t=V()},l(r){e&&je(e.$$.fragment,r),t=V()},m(r,f){e&&M(e,r,f),z(r,t,f),s=!0},p(r,f){const m={};if(f&8&&(m.data=r[3]),f&2&&(m.form=r[1]),o!==(o=r[0][1])){if(e){fe();const _=e;F(_.$$.fragment,1,0,()=>{Y(_,1)}),ue()}o?(e=new o(u(r)),H(e.$$.fragment),B(e.$$.fragment,1),M(e,t.parentNode,t)):e=null}else o&&e.$set(m)},i(r){s||(e&&B(e.$$.fragment,r),s=!0)},o(r){e&&F(e.$$.fragment,r),s=!1},d(r){r&&J(t),e&&Y(e,r)}}}function He(n){let e,t=n[5]&&Me(n);return{c(){e=it("div"),t&&t.c(),this.h()},l(s){e=lt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=ct(e);t&&t.l(o),o.forEach(J),this.h()},h(){be(e,"id","svelte-announcer"),be(e,"aria-live","assertive"),be(e,"aria-atomic","true"),D(e,"position","absolute"),D(e,"left","0"),D(e,"top","0"),D(e,"clip","rect(0 0 0 0)"),D(e,"clip-path","inset(50%)"),D(e,"overflow","hidden"),D(e,"white-space","nowrap"),D(e,"width","1px"),D(e,"height","1px")},m(s,o){z(s,e,o),t&&t.m(e,null)},p(s,o){s[5]?t?t.p(s,o):(t=Me(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(s){s&&J(e),t&&t.d()}}}function Me(n){let e;return{c(){e=ft(n[6])},l(t){e=ut(t,n[6])},m(t,s){z(t,e,s)},p(t,s){s&64&&dt(e,t[6])},d(t){t&&J(e)}}}function qt(n){let e,t,s,o,u;const r=[Tt,Nt],f=[];function m(w,E){return w[0][1]?0:1}e=m(n),t=f[e]=r[e](n);let _=n[4]&&He(n);return{c(){t.c(),s=at(),_&&_.c(),o=V()},l(w){t.l(w),s=ot(w),_&&_.l(w),o=V()},m(w,E){f[e].m(w,E),z(w,s,E),_&&_.m(w,E),z(w,o,E),u=!0},p(w,[E]){let S=e;e=m(w),e===S?f[e].p(w,E):(fe(),F(f[S],1,1,()=>{f[S]=null}),ue(),t=f[e],t?t.p(w,E):(t=f[e]=r[e](w),t.c()),B(t,1),t.m(s.parentNode,s)),w[4]?_?_.p(w,E):(_=He(w),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null)},i(w){u||(B(t),u=!0)},o(w){F(t),u=!1},d(w){f[e].d(w),w&&J(s),_&&_.d(w),w&&J(o)}}}function Ct(n,e,t){let{stores:s}=e,{page:o}=e,{components:u}=e,{form:r}=e,{data_0:f=null}=e,{data_1:m=null}=e;st(s.page.notify);let _=!1,w=!1,E=null;return Oe(()=>{const S=s.page.subscribe(()=>{_&&(t(5,w=!0),t(6,E=document.title||"untitled page"))});return t(4,_=!0),S}),n.$$set=S=>{"stores"in S&&t(7,s=S.stores),"page"in S&&t(8,o=S.page),"components"in S&&t(0,u=S.components),"form"in S&&t(1,r=S.form),"data_0"in S&&t(2,f=S.data_0),"data_1"in S&&t(3,m=S.data_1)},n.$$.update=()=>{n.$$.dirty&384&&s.page.set(o)},[u,r,f,m,_,w,E,s,o]}class Vt extends tt{constructor(e){super(),nt(this,e,Ct,qt,rt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ft="modulepreload",Bt=function(n,e){return new URL(n,e).href},Ye={},x=function(e,t,s){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=Bt(o,s),o in Ye)return;Ye[o]=!0;const u=o.endsWith(".css"),r=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const f=document.createElement("link");if(f.rel=u?"stylesheet":Ft,u||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),u)return new Promise((m,_)=>{f.addEventListener("load",m),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},Jt={},he=[()=>x(()=>import("./chunks/0-aa7f373e.js"),["chunks/0-aa7f373e.js","chunks/_layout-1daba58d.js","components/pages/_layout.svelte-3d29a2fc.js","assets/_layout-8d43bf82.css","chunks/index-ba8e8c5b.js"],import.meta.url),()=>x(()=>import("./chunks/1-06845a9d.js"),["chunks/1-06845a9d.js","components/error.svelte-4f5e9707.js","chunks/index-ba8e8c5b.js","chunks/singletons-f4ffccb4.js"],import.meta.url),()=>x(()=>import("./chunks/2-2bb55a4c.js"),["chunks/2-2bb55a4c.js","components/pages/_page.svelte-b30ea92e.js","chunks/index-ba8e8c5b.js"],import.meta.url),()=>x(()=>import("./chunks/3-8ed6e2b6.js"),["chunks/3-8ed6e2b6.js","components/pages/corrosion/_page.svelte-dfacba1b.js","assets/_page-29eaebe5.css","chunks/index-ba8e8c5b.js","chunks/isObject-fe408183.js"],import.meta.url),()=>x(()=>import("./chunks/4-6ea1a835.js"),["chunks/4-6ea1a835.js","components/pages/weave-my-reality/_page.svelte-92c35356.js","assets/_page-baaf7bf0.css","chunks/index-ba8e8c5b.js","chunks/isObject-fe408183.js"],import.meta.url)],Gt=[],Kt={"/":[2],"/corrosion":[3],"/weave-my-reality":[4]},zt={handleError:({error:n})=>{console.error(n)}};class $e{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(e,t){this.status=e,this.location=t}}async function Wt(n){var e;for(const t in n)if(typeof((e=n[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(n).map(async([s,o])=>[s,await o])));return n}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Ht=-1,Mt=-2,Yt=-3,Xt=-4,Zt=-5,Qt=-6;function xt(n){if(typeof n=="number")return s(n,!0);if(!Array.isArray(n)||n.length===0)throw new Error("Invalid input");const e=n,t=Array(e.length);function s(o,u=!1){if(o===Ht)return;if(o===Yt)return NaN;if(o===Xt)return 1/0;if(o===Zt)return-1/0;if(o===Qt)return-0;if(u)throw new Error("Invalid input");if(o in t)return t[o];const r=e[o];if(!r||typeof r!="object")t[o]=r;else if(Array.isArray(r))if(typeof r[0]=="string")switch(r[0]){case"Date":t[o]=new Date(r[1]);break;case"Set":const m=new Set;t[o]=m;for(let E=1;E<r.length;E+=1)m.add(s(r[E]));break;case"Map":const _=new Map;t[o]=_;for(let E=1;E<r.length;E+=2)_.set(s(r[E]),s(r[E+1]));break;case"RegExp":t[o]=new RegExp(r[1],r[2]);break;case"Object":t[o]=Object(r[1]);break;case"BigInt":t[o]=BigInt(r[1]);break;case"null":const w=Object.create(null);t[o]=w;for(let E=1;E<r.length;E+=2)w[r[E]]=s(r[E+1]);break}else{const f=new Array(r.length);t[o]=f;for(let m=0;m<r.length;m+=1){const _=r[m];_!==Mt&&(f[m]=s(_))}}else{const f={};t[o]=f;for(const m in r){const _=r[m];f[m]=s(_)}}return t[o]}return s(0)}const ke=Ut(he,Gt,Kt,Jt),Le=he[0],Pe=he[1];Le();Pe();let ne={};try{ne=JSON.parse(sessionStorage[Qe])}catch{}function Se(n){ne[n]=Ie()}function en({target:n,base:e}){var Je;const t=[];let s=null;const o={before_navigate:[],after_navigate:[]};let u={branch:[],error:null,url:null},r=!1,f=!1,m=!0,_=!1,w=!1,E=!1,S=!1,N,P=(Je=history.state)==null?void 0:Je[q];P||(P=Date.now(),history.replaceState({...history.state,[q]:P},"",location.href));const C=ne[P];C&&(history.scrollRestoration="manual",scrollTo(C.x,C.y));let G,Ae,re;async function Ue(){re=re||Promise.resolve(),await re,re=null;const a=new URL(location.href),i=ge(a,!0);s=null,await Te(i,a,[])}async function pe(a,{noScroll:i=!1,replaceState:l=!1,keepFocus:c=!1,state:d={},invalidateAll:p=!1},h,b){return typeof a=="string"&&(a=new URL(a,ze(document))),we({url:a,scroll:i?Ie():null,keepfocus:c,redirect_chain:h,details:{state:d,replaceState:l},nav_token:b,accepted:()=>{p&&(S=!0)},blocked:()=>{},type:"goto"})}async function Ne(a){const i=ge(a,!1);if(!i)throw new Error(`Attempted to preload a URL that does not belong to this app: ${a}`);return s={id:i.id,promise:Ce(i).then(l=>(l.type==="loaded"&&l.state.error&&(s=null),l))},s.promise}async function ae(...a){const l=ke.filter(c=>a.some(d=>c.exec(d))).map(c=>Promise.all([...c.layouts,c.leaf].map(d=>d==null?void 0:d[1]())));await Promise.all(l)}async function Te(a,i,l,c,d={},p){var b,v;Ae=d;let h=a&&await Ce(a);if(h||(h=await Be(i,{id:null},await ee(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(a==null?void 0:a.url)||i,Ae!==d)return!1;if(h.type==="redirect")if(l.length>10||l.includes(i.pathname))h=await oe({status:500,error:await ee(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return pe(new URL(h.location,i).href,{},[...l,i.pathname],d),!1;else((v=(b=h.props)==null?void 0:b.page)==null?void 0:v.status)>=400&&await K.updated.check()&&await se(i);if(t.length=0,S=!1,_=!0,c&&c.details){const{details:y}=c,k=y.replaceState?0:1;y.state[q]=P+=k,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(s=null,f){u=h.state,h.props.page&&(h.props.page.url=i);const y=ce();N.$set(h.props),y()}else De(h);if(c){const{scroll:y,keepfocus:k}=c;if(k||Re(),await ie(),m){const O=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):O?O.scrollIntoView():scrollTo(0,0)}}else await ie();m=!0,h.props.page&&(G=h.props.page),p&&p(),_=!1}function De(a){var d,p;u=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),G=a.props.page;const l=ce();N=new Vt({target:n,props:{...a.props,stores:K},hydrate:!0}),l();const c={from:null,to:le("to",{params:u.params,route:{id:(p=(d=u.route)==null?void 0:d.id)!=null?p:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};o.after_navigate.forEach(h=>h(c)),f=!0}async function X({url:a,params:i,branch:l,status:c,error:d,route:p,form:h}){var A;const b=l.filter(Boolean);let v="never";for(const I of l)(I==null?void 0:I.slash)!==void 0&&(v=I.slash);a.pathname=gt(a.pathname,v),a.search=a.search;const y={type:"loaded",state:{url:a,params:i,branch:l,error:d,route:p},props:{components:b.map(I=>I.node.component)}};h!==void 0&&(y.props.form=h);let k={},O=!G;for(let I=0;I<b.length;I+=1){const j=b[I];k={...k,...j.data},(O||!u.branch.some(T=>T===j))&&(y.props[`data_${I}`]=k,O=O||Object.keys((A=j.data)!=null?A:{}).length>0)}if(O||(O=Object.keys(G.data).length!==Object.keys(k).length),!u.url||a.href!==u.url.href||u.error!==d||h!==void 0||O){y.props.page={error:d,params:i,route:p,status:c,url:new URL(a),form:h,data:O?k:G.data},Object.defineProperty(y.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const I=(j,T)=>{Object.defineProperty(y.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${T}`)}})};I("origin","origin"),I("path","pathname"),I("query","searchParams")}return y}async function me({loader:a,parent:i,url:l,params:c,route:d,server_data_node:p}){var y,k,O,U,A,I,j;let h=null;const b={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await a();if((y=v.shared)!=null&&y.load){let T=function(...g){for(const R of g){const{href:$}=new URL(R,l);b.dependencies.add($)}};const Z={route:{get id(){return b.route=!0,d.id}},params:new Proxy(c,{get:(g,R)=>(b.params.add(R),g[R])}),data:(k=p==null?void 0:p.data)!=null?k:null,url:vt(l,()=>{b.url=!0}),async fetch(g,R){let $;g instanceof Request?($=g.url,R={body:g.method==="GET"||g.method==="HEAD"?void 0:await g.blob(),cache:g.cache,credentials:g.credentials,headers:g.headers,integrity:g.integrity,keepalive:g.keepalive,method:g.method,mode:g.mode,redirect:g.redirect,referrer:g.referrer,referrerPolicy:g.referrerPolicy,signal:g.signal,...R}):$=g;const L=new URL($,l).href;return T(L),f?It($,L,R):Ot($,R)},setHeaders:()=>{},depends:T,parent(){return b.parent=!0,i()}};Object.defineProperties(Z,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(O=await v.shared.load.call(null,Z))!=null?O:null,h=h?await Wt(h):null}return{node:v,loader:a,server:p,shared:(U=v.shared)!=null&&U.load?{type:"data",data:h,uses:b}:null,data:(A=h!=null?h:p==null?void 0:p.data)!=null?A:null,slash:(j=(I=v.shared)==null?void 0:I.trailingSlash)!=null?j:p==null?void 0:p.slash}}function qe(a,i,l,c,d){if(S)return!0;if(!c)return!1;if(c.parent&&a||c.route&&i||c.url&&l)return!0;for(const p of c.params)if(d[p]!==u.params[p])return!0;for(const p of c.dependencies)if(t.some(h=>h(new URL(p))))return!0;return!1}function _e(a,i){var l,c;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((l=a.uses.dependencies)!=null?l:[]),params:new Set((c=a.uses.params)!=null?c:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url},slash:a.slash}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function Ce({id:a,invalidating:i,url:l,params:c,route:d}){var Z;if((s==null?void 0:s.id)===a)return s.promise;const{errors:p,layouts:h,leaf:b}=d,v=[...h,b];p.forEach(g=>g==null?void 0:g().catch(()=>{})),v.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let y=null;const k=u.url?a!==u.url.pathname+u.url.search:!1,O=u.route?a!==u.route.id:!1,U=v.reduce((g,R,$)=>{var Q;const L=u.branch[$],W=!!(R!=null&&R[0])&&((L==null?void 0:L.loader)!==R[1]||qe(g.some(Boolean),O,k,(Q=L.server)==null?void 0:Q.uses,c));return g.push(W),g},[]);if(U.some(Boolean)){try{y=await Ze(l,U)}catch(g){return oe({status:500,error:await ee(g,{url:l,params:c,route:{id:d.id}}),url:l,route:d})}if(y.type==="redirect")return y}const A=y==null?void 0:y.nodes;let I=!1;const j=v.map(async(g,R)=>{var Q;if(!g)return;const $=u.branch[R],L=A==null?void 0:A[R];if((!L||L.type==="skip")&&g[1]===($==null?void 0:$.loader)&&!qe(I,O,k,(Q=$.shared)==null?void 0:Q.uses,c))return $;if(I=!0,(L==null?void 0:L.type)==="error")throw L;return me({loader:g[1],url:l,params:c,route:d,parent:async()=>{var Ke;const Ge={};for(let ye=0;ye<R;ye+=1)Object.assign(Ge,(Ke=await j[ye])==null?void 0:Ke.data);return Ge},server_data_node:_e(L===void 0&&g[0]?{type:"skip"}:L!=null?L:null,$==null?void 0:$.server)})});for(const g of j)g.catch(()=>{});const T=[];for(let g=0;g<v.length;g+=1)if(v[g])try{T.push(await j[g])}catch(R){if(R instanceof Xe)return{type:"redirect",location:R.location};let $=500,L;A!=null&&A.includes(R)?($=(Z=R.status)!=null?Z:$,L=R.error):R instanceof $e?($=R.status,L=R.body):L=await ee(R,{params:c,url:l,route:{id:d.id}});const W=await Ve(g,T,p);return W?await X({url:l,params:c,branch:T.slice(0,W.idx).concat(W.node),status:$,error:L,route:d}):await Be(l,{id:d.id},L,$)}else T.push(void 0);return await X({url:l,params:c,branch:T,status:200,error:null,route:d,form:i?void 0:null})}async function Ve(a,i,l){for(;a--;)if(l[a]){let c=a;for(;!i[c];)c-=1;try{return{idx:c+1,node:{node:await l[a](),loader:l[a],data:{},server:null,shared:null}}}catch{continue}}}async function oe({status:a,error:i,url:l,route:c}){var y;const d={},p=await Le();let h=null;if(p.server)try{const k=await Ze(l,[!0]);if(k.type!=="data"||k.nodes[0]&&k.nodes[0].type!=="data")throw 0;h=(y=k.nodes[0])!=null?y:null}catch{(l.origin!==location.origin||l.pathname!==location.pathname||r)&&await se(l)}const b=await me({loader:Le,url:l,params:d,route:c,parent:()=>Promise.resolve({}),server_data_node:_e(h)}),v={node:await Pe(),loader:Pe,shared:null,server:null,data:null};return await X({url:l,params:d,branch:[b,v],status:a,error:i,route:null})}function ge(a,i){if(ht(a,e))return;const l=wt(a.pathname.slice(e.length)||"/");for(const c of ke){const d=c.exec(l);if(d)return{id:a.pathname+a.search,invalidating:i,route:c,params:yt(d),url:a}}}function Fe({url:a,type:i,intent:l,delta:c}){var b,v,y,k,O;let d=!1;const p={from:le("from",{params:u.params,route:{id:(v=(b=u.route)==null?void 0:b.id)!=null?v:null},url:u.url}),to:le("to",{params:(y=l==null?void 0:l.params)!=null?y:null,route:{id:(O=(k=l==null?void 0:l.route)==null?void 0:k.id)!=null?O:null},url:a}),willUnload:!l,type:i};c!==void 0&&(p.delta=c);const h={...p,cancel:()=>{d=!0}};return w||o.before_navigate.forEach(U=>U(h)),d?null:p}async function we({url:a,scroll:i,keepfocus:l,redirect_chain:c,details:d,type:p,delta:h,nav_token:b,accepted:v,blocked:y}){const k=ge(a,!1),O=Fe({url:a,type:p,delta:h,intent:k});if(!O){y();return}Se(P),v(),w=!0,f&&K.navigating.set(O),await Te(k,a,c,{scroll:i,keepfocus:l,details:d},b,()=>{w=!1,o.after_navigate.forEach(U=>U(O)),K.navigating.set(null)})}async function Be(a,i,l,c){return a.origin===location.origin&&a.pathname===location.pathname&&!r?await oe({status:c,error:l,url:a,route:i}):await se(a)}function se(a){return location.href=a.href,new Promise(()=>{})}function et(){let a;n.addEventListener("mousemove",p=>{const h=p.target;clearTimeout(a),a=setTimeout(()=>{c(h,2)},20)});function i(p){c(p.composedPath()[0],1)}n.addEventListener("mousedown",i),n.addEventListener("touchstart",i,{passive:!0});const l=new IntersectionObserver(p=>{for(const h of p)h.isIntersecting&&(ae(new URL(h.target.href).pathname),l.unobserve(h.target))},{threshold:0});function c(p,h){const{url:b,options:v,external:y}=ve(p,e);y||(h<=v.preload_data?Ne(b):h<=v.preload_code&&ae(b.pathname))}function d(){l.disconnect();for(const p of n.querySelectorAll("a")){const{url:h,external:b,options:v}=ve(p,e);b||(v.preload_code===We.viewport&&l.observe(p),v.preload_code===We.eager&&ae(h.pathname))}}o.after_navigate.push(d),d()}return{after_navigate:a=>{Oe(()=>(o.after_navigate.push(a),()=>{const i=o.after_navigate.indexOf(a);o.after_navigate.splice(i,1)}))},before_navigate:a=>{Oe(()=>(o.before_navigate.push(a),()=>{const i=o.before_navigate.indexOf(a);o.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(_||!f)&&(m=!1)},goto:(a,i={})=>{if("keepfocus"in i&&!("keepFocus"in i))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in i&&!("noScroll"in i))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return pe(a,i,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")t.push(a);else{const{href:i}=new URL(a,location.href);t.push(l=>l.href===i)}return Ue()},invalidateAll:()=>(S=!0,Ue()),preload_data:async a=>{const i=new URL(a,ze(document));await Ne(i)},preload_code:ae,apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:l,route:c}=u;if(!c)return;const d=await Ve(u.branch.length,l,c.errors);if(d){const p=await X({url:i,params:u.params,branch:l.slice(0,d.idx).concat(d.node),status:500,error:a.error,route:c});u=p.state;const h=ce();N.$set(p.props),h(),ie().then(Re)}}else if(a.type==="redirect")pe(a.location,{invalidateAll:!0},[]);else{const i={form:a.data,page:{...G,form:a.data,status:a.status}},l=ce();N.$set(i),l(),a.type==="success"&&ie().then(Re)}},_start_router:()=>{var a;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var c,d;let l=!1;if(!w){const p={from:le("from",{params:u.params,route:{id:(d=(c=u.route)==null?void 0:c.id)!=null?d:null},url:u.url}),to:null,willUnload:!0,type:"leave",cancel:()=>l=!0};o.before_navigate.forEach(h=>h(p))}l?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Se(P);try{sessionStorage[Qe]=JSON.stringify(ne)}catch{}}}),(a=navigator.connection)!=null&&a.saveData||et(),n.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:l,url:c,options:d,has:p}=ve(i.composedPath()[0],e);if(!l||!c||!(l instanceof SVGAElement)&&c.protocol!==location.protocol&&!(c.protocol==="https:"||c.protocol==="http:")||p.download)return;if(d.reload||p.rel_external||p.target){Fe({url:c,type:"link"})||i.preventDefault(),w=!0;return}const[b,v]=c.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){E=!0,Se(P),u.url=c,K.page.set({...G,url:c}),K.page.notify();return}we({url:c,scroll:d.noscroll?Ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:c.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{var l;if((l=i.state)!=null&&l[q]){if(i.state[q]===P)return;const c=i.state[q]-P;we({url:new URL(location.href),scroll:ne[i.state[q]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{P=i.state[q]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{E&&(E=!1,history.replaceState({...history.state,[q]:++P},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:l,params:c,route:d,data:p,form:h})=>{var y;r=!0;const b=new URL(location.href);let v;try{const k=l.map(async(O,U)=>{const A=p[U];return me({loader:he[O],url:b,params:c,route:d,parent:async()=>{const I={};for(let j=0;j<U;j+=1)Object.assign(I,(await k[j]).data);return I},server_data_node:_e(A)})});v=await X({url:b,params:c,branch:await Promise.all(k),status:a,error:i,form:h,route:(y=ke.find(({id:O})=>O===d.id))!=null?y:null})}catch(k){if(k instanceof Xe){await se(new URL(k.location,location.href));return}v=await oe({status:k instanceof $e?k.status:500,error:await ee(k,{url:b,params:c,route:d}),url:b,route:d})}De(v)}}}async function Ze(n,e){var u;const t=new URL(n);t.pathname=St(n.pathname);const s=await de(t.href,{headers:{"x-sveltekit-invalidated":e.map(r=>r?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(u=o.nodes)==null||u.forEach(r=>{var f,m;(r==null?void 0:r.type)==="data"&&(r.data=xt(r.data),r.uses={dependencies:new Set((f=r.uses.dependencies)!=null?f:[]),params:new Set((m=r.uses.params)!=null?m:[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url})}),o}function ee(n,e){var t;return n instanceof $e?n.body:(t=zt.handleError({error:n,event:e}))!=null?t:{message:e.route.id!=null?"Internal Error":"Not Found"}}const tn=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function le(n,e){for(const t of tn)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${n}.routeId should now be ${n}.route.id`)},enumerable:!1}),e}function ce(){return()=>{}}function Re(){const n=document.querySelector("[autofocus]");if(n)n.focus();else{const e=document.body,t=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),t!==null?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")}}async function an({env:n,hydrate:e,paths:t,target:s,version:o}){pt(t),_t(o);const u=en({target:s,base:t.base});mt({client:u}),e?await u._hydrate(e):u.goto(location.href,{replaceState:!0}),u._start_router()}export{an as start};
