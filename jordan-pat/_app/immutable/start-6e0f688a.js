import{S as et,i as tt,s as nt,a as rt,e as J,c as at,b as M,g as he,t as z,d as me,f as G,h as K,j as ot,o as Oe,k as st,l as it,m as lt,n as ke,p as V,q as ct,r as ft,u as ut,v as X,w as Ae,x as Z,y as Q,z as ce}from"./chunks/index-b96455f2.js";import{g as Ke,f as We,s as W,a as Ie,i as pt}from"./chunks/singletons-81ab16e2.js";import{s as dt}from"./chunks/paths-892d14f1.js";function ht(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function mt(r){return r.split("%25").map(decodeURI).join("%25")}function gt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const _t=["href","pathname","search","searchParams","toString","toJSON"];function wt(r,e){const n=new URL(r);for(const s of _t){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return yt(n),n}function yt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const bt="/__data.json";function vt(r){return r.replace(/\/$/,"")+bt}function Et(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let s=n.length;for(;s;)e=e*33^n[--s]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const ge=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const s=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;re.delete(s)}return ge(r,e)};const re=new Map;function kt(r,e){const n=Qe(r,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:o,...m}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&re.set(n,{body:o,init:m,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,m))}return ge(r,e)}function St(r,e,n){if(re.size>0){const s=Qe(r,n),o=re.get(s);if(o){if(performance.now()<o.ttl)return new Response(o.body,o.init);re.delete(s)}}return ge(e,n)}function Qe(r,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;return(e==null?void 0:e.body)&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&(s+=`[data-hash="${Et(e.body)}"]`),s}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function $t(r){const e=[],n=[],s=[];let o=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${It(r).map((t,f,g)=>{const h=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(t);if(h)return e.push(h[1]),n.push(h[2]),s.push(!1),"(?:/(.*))?";const _=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(t);if(_)return e.push(_[1]),n.push(_[2]),s.push(!0),"(?:/([^/]+))?";const b=f===g.length-1;if(!t)return;const F=t.split(/\[(.+?)\](?!\])/).map((A,j)=>{if(j%2){if(A.startsWith("x+"))return Se(String.fromCharCode(parseInt(A.slice(2),16)));if(A.startsWith("u+"))return Se(String.fromCharCode(...A.slice(2).split("-").map(x=>parseInt(x,16))));const q=Rt.exec(A);if(!q)throw new Error(`Invalid param: ${A}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,oe,H,se]=q;return e.push(H),n.push(se),s.push(!!D),oe?"(.*?)":D?"([^/]*)?":"([^/]+?)"}return b&&A.includes(".")&&(o=!1),Se(A)}).join("");return"/"+F}).join("")}${o?"/?":""}$`),names:e,types:n,optional:s}}function Ot(r){return!/^\([^)]+\)$/.test(r)}function It(r){return r.slice(1).split("/").filter(Ot)}function Lt(r,{names:e,types:n,optional:s},o){const m={};for(let t=0;t<e.length;t+=1){const f=e[t],g=n[t];let h=r[t+1];if(h||!s[t]){if(g){const _=o[g];if(!_)throw new Error(`Missing "${g}" param matcher`);if(!_(h))return}m[f]=h!=null?h:""}}return m}function Se(r){return r.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function jt(r,e,n,s){const o=new Set(e);return Object.entries(n).map(([f,[g,h,_]])=>{const{pattern:b,names:R,types:F,optional:A}=$t(f),j={id:f,exec:q=>{const D=b.exec(q);if(D)return Lt(D,{names:R,types:F,optional:A},s)},errors:[1,..._||[]].map(q=>r[q]),layouts:[0,...h||[]].map(t),leaf:m(g)};return j.errors.length=j.layouts.length=Math.max(j.errors.length,j.layouts.length),j});function m(f){const g=f<0;return g&&(f=~f),[g,r[f]]}function t(f){return f===void 0?f:[o.has(f),r[f]]}}function Pt(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],form:t[1]}}}return o&&(e=new o(m(r))),{c(){e&&X(e.$$.fragment),n=J()},l(t){e&&Ae(e.$$.fragment,t),n=J()},m(t,f){e&&Z(e,t,f),M(t,n,f),s=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&2&&(g.form=t[1]),o!==(o=t[0][0])){if(e){he();const h=e;z(h.$$.fragment,1,0,()=>{Q(h,1)}),me()}o?(e=new o(m(t)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&z(e.$$.fragment,t),s=!1},d(t){t&&K(n),e&&Q(e,t)}}}function At(r){let e,n,s;var o=r[0][0];function m(t){return{props:{data:t[2],$$slots:{default:[Ut]},$$scope:{ctx:t}}}}return o&&(e=new o(m(r))),{c(){e&&X(e.$$.fragment),n=J()},l(t){e&&Ae(e.$$.fragment,t),n=J()},m(t,f){e&&Z(e,t,f),M(t,n,f),s=!0},p(t,f){const g={};if(f&4&&(g.data=t[2]),f&523&&(g.$$scope={dirty:f,ctx:t}),o!==(o=t[0][0])){if(e){he();const h=e;z(h.$$.fragment,1,0,()=>{Q(h,1)}),me()}o?(e=new o(m(t)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&z(e.$$.fragment,t),s=!1},d(t){t&&K(n),e&&Q(e,t)}}}function Ut(r){let e,n,s;var o=r[0][1];function m(t){return{props:{data:t[3],form:t[1]}}}return o&&(e=new o(m(r))),{c(){e&&X(e.$$.fragment),n=J()},l(t){e&&Ae(e.$$.fragment,t),n=J()},m(t,f){e&&Z(e,t,f),M(t,n,f),s=!0},p(t,f){const g={};if(f&8&&(g.data=t[3]),f&2&&(g.form=t[1]),o!==(o=t[0][1])){if(e){he();const h=e;z(h.$$.fragment,1,0,()=>{Q(h,1)}),me()}o?(e=new o(m(t)),X(e.$$.fragment),G(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else o&&e.$set(g)},i(t){s||(e&&G(e.$$.fragment,t),s=!0)},o(t){e&&z(e.$$.fragment,t),s=!1},d(t){t&&K(n),e&&Q(e,t)}}}function Me(r){let e,n=r[5]&&He(r);return{c(){e=st("div"),n&&n.c(),this.h()},l(s){e=it(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=lt(e);n&&n.l(o),o.forEach(K),this.h()},h(){ke(e,"id","svelte-announcer"),ke(e,"aria-live","assertive"),ke(e,"aria-atomic","true"),V(e,"position","absolute"),V(e,"left","0"),V(e,"top","0"),V(e,"clip","rect(0 0 0 0)"),V(e,"clip-path","inset(50%)"),V(e,"overflow","hidden"),V(e,"white-space","nowrap"),V(e,"width","1px"),V(e,"height","1px")},m(s,o){M(s,e,o),n&&n.m(e,null)},p(s,o){s[5]?n?n.p(s,o):(n=He(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&K(e),n&&n.d()}}}function He(r){let e;return{c(){e=ct(r[6])},l(n){e=ft(n,r[6])},m(n,s){M(n,e,s)},p(n,s){s&64&&ut(e,n[6])},d(n){n&&K(e)}}}function Nt(r){let e,n,s,o,m;const t=[At,Pt],f=[];function g(_,b){return _[0][1]?0:1}e=g(r),n=f[e]=t[e](r);let h=r[4]&&Me(r);return{c(){n.c(),s=rt(),h&&h.c(),o=J()},l(_){n.l(_),s=at(_),h&&h.l(_),o=J()},m(_,b){f[e].m(_,b),M(_,s,b),h&&h.m(_,b),M(_,o,b),m=!0},p(_,[b]){let R=e;e=g(_),e===R?f[e].p(_,b):(he(),z(f[R],1,1,()=>{f[R]=null}),me(),n=f[e],n?n.p(_,b):(n=f[e]=t[e](_),n.c()),G(n,1),n.m(s.parentNode,s)),_[4]?h?h.p(_,b):(h=Me(_),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i(_){m||(G(n),m=!0)},o(_){z(n),m=!1},d(_){f[e].d(_),_&&K(s),h&&h.d(_),_&&K(o)}}}function Tt(r,e,n){let{stores:s}=e,{page:o}=e,{components:m}=e,{form:t}=e,{data_0:f=null}=e,{data_1:g=null}=e;ot(s.page.notify);let h=!1,_=!1,b=null;return Oe(()=>{const R=s.page.subscribe(()=>{h&&(n(5,_=!0),n(6,b=document.title||"untitled page"))});return n(4,h=!0),R}),r.$$set=R=>{"stores"in R&&n(7,s=R.stores),"page"in R&&n(8,o=R.page),"components"in R&&n(0,m=R.components),"form"in R&&n(1,t=R.form),"data_0"in R&&n(2,f=R.data_0),"data_1"in R&&n(3,g=R.data_1)},r.$$.update=()=>{r.$$.dirty&384&&s.page.set(o)},[m,t,f,g,h,_,b,s,o]}class Dt extends et{constructor(e){super(),tt(this,e,Tt,Nt,nt,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ct="modulepreload",qt=function(r,e){return new URL(r,e).href},Ye={},fe=function(e,n,s){return!n||n.length===0?e():Promise.all(n.map(o=>{if(o=qt(o,s),o in Ye)return;Ye[o]=!0;const m=o.endsWith(".css"),t=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${t}`))return;const f=document.createElement("link");if(f.rel=m?"stylesheet":Ct,m||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),m)return new Promise((g,h)=>{f.addEventListener("load",g),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())},Vt={},_e=[()=>fe(()=>import("./chunks/0-e3dff9ec.js"),["chunks/0-e3dff9ec.js","chunks/_layout-1daba58d.js","components/pages/_layout.svelte-0c9d94a8.js","assets/_layout-4ec5dac1.css","chunks/index-b96455f2.js"],import.meta.url),()=>fe(()=>import("./chunks/1-b34c6eae.js"),["chunks/1-b34c6eae.js","components/error.svelte-62fcc46b.js","chunks/index-b96455f2.js","chunks/singletons-81ab16e2.js","chunks/paths-892d14f1.js"],import.meta.url),()=>fe(()=>import("./chunks/2-69d1c979.js"),["chunks/2-69d1c979.js","components/pages/_page.svelte-ef5cc892.js","chunks/index-b96455f2.js","chunks/paths-892d14f1.js"],import.meta.url),()=>fe(()=>import("./chunks/3-671684ac.js"),["chunks/3-671684ac.js","components/pages/video/_page.svelte-030efe65.js","assets/_page-ea7f4369.css","chunks/index-b96455f2.js"],import.meta.url)],Ft=[],Bt={"/":[2],"/video":[3]},Jt={handleError:({error:r})=>{console.error(r)}};class Le{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class Xe{constructor(e,n){this.status=e,this.location=n}}async function zt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([s,o])=>[s,await o])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Gt=-1,Kt=-2,Wt=-3,Mt=-4,Ht=-5,Yt=-6;function Xt(r){if(typeof r=="number")return s(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function s(o,m=!1){if(o===Gt)return;if(o===Wt)return NaN;if(o===Mt)return 1/0;if(o===Ht)return-1/0;if(o===Yt)return-0;if(m)throw new Error("Invalid input");if(o in n)return n[o];const t=e[o];if(!t||typeof t!="object")n[o]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[o]=new Date(t[1]);break;case"Set":const g=new Set;n[o]=g;for(let b=1;b<t.length;b+=1)g.add(s(t[b]));break;case"Map":const h=new Map;n[o]=h;for(let b=1;b<t.length;b+=2)h.set(s(t[b]),s(t[b+1]));break;case"RegExp":n[o]=new RegExp(t[1],t[2]);break;case"Object":n[o]=Object(t[1]);break;case"BigInt":n[o]=BigInt(t[1]);break;case"null":const _=Object.create(null);n[o]=_;for(let b=1;b<t.length;b+=2)_[t[b]]=s(t[b+1]);break}else{const f=new Array(t.length);n[o]=f;for(let g=0;g<t.length;g+=1){const h=t[g];h!==Kt&&(f[g]=s(h))}}else{const f={};n[o]=f;for(const g in t){const h=t[g];f[g]=s(h)}}return n[o]}return s(0)}const xe="sveltekit:scroll",B="sveltekit:index",ue=jt(_e,Ft,Bt,Vt),je=_e[0],Pe=_e[1];je();Pe();let ae={};try{ae=JSON.parse(sessionStorage[xe])}catch{}function Re(r){ae[r]=Ie()}function Zt({target:r,base:e,trailing_slash:n}){var Je;const s=[];let o=null;const m={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,g=!1,h=!0,_=!1,b=!1,R=!1,F=!1,A,j=(Je=history.state)==null?void 0:Je[B];j||(j=Date.now(),history.replaceState({...history.state,[B]:j},"",location.href));const q=ae[j];q&&(history.scrollRestoration="manual",scrollTo(q.x,q.y));let D,oe,H;async function se(){H=H||Promise.resolve(),await H,H=null;const a=new URL(location.href),l=be(a,!0);o=null,await Ne(l,a,[])}async function x(a,{noScroll:l=!1,replaceState:c=!1,keepFocus:i=!1,state:u={},invalidateAll:p=!1},d,v){return typeof a=="string"&&(a=new URL(a,Ke(document))),ve({url:a,scroll:l?Ie():null,keepfocus:i,redirect_chain:d,details:{state:u,replaceState:c},nav_token:v,accepted:()=>{p&&(F=!0)},blocked:()=>{},type:"goto"})}async function Ue(a){const l=be(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return o={id:l.id,promise:Ce(l).then(c=>(c.type==="loaded"&&c.state.error&&(o=null),c))},o.promise}async function Ne(a,l,c,i,u={},p){var v,E;oe=u;let d=a&&await Ce(a);if(d||(d=await Be(l,{id:null},ne(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,oe!==u)return!1;if(d.type==="redirect")if(c.length>10||c.includes(l.pathname))d=await ie({status:500,error:ne(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return x(new URL(d.location,l).href,{},[...c,l.pathname],u),!1;else((E=(v=d.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await W.updated.check()&&await le(l);if(s.length=0,F=!1,_=!0,i&&i.details){const{details:w}=i,y=w.replaceState?0:1;w.state[B]=j+=y,history[w.replaceState?"replaceState":"pushState"](w.state,"",l)}if(o=null,g){t=d.state,d.props.page&&(d.props.page.url=l);const w=de();A.$set(d.props),w()}else Te(d);if(i){const{scroll:w,keepfocus:y}=i;if(y||$e(),await ce(),h){const O=l.hash&&document.getElementById(l.hash.slice(1));w?scrollTo(w.x,w.y):O?O.scrollIntoView():scrollTo(0,0)}}else await ce();h=!0,d.props.page&&(D=d.props.page),p&&p(),_=!1}function Te(a){var u,p;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),D=a.props.page;const c=de();A=new Dt({target:r,props:{...a.props,stores:W},hydrate:!0}),c();const i={from:null,to:pe("to",{params:t.params,route:{id:(p=(u=t.route)==null?void 0:u.id)!=null?p:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};m.after_navigate.forEach(d=>d(i)),g=!0}async function ee({url:a,params:l,branch:c,status:i,error:u,route:p,form:d}){var U;const v=c.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:c,error:u,route:p},props:{components:v.map($=>$.node.component)}};d!==void 0&&(E.props.form=d);let w={},y=!D;for(let $=0;$<v.length;$+=1){const N=v[$];w={...w,...N.data},(y||!t.branch.some(T=>T===N))&&(E.props[`data_${$}`]=w,y=y||Object.keys((U=N.data)!=null?U:{}).length>0)}if(y||(y=Object.keys(D.data).length!==Object.keys(w).length),!t.url||a.href!==t.url.href||t.error!==u||d!==void 0||y){E.props.page={error:u,params:l,route:p,status:i,url:a,form:d,data:y?w:D.data},Object.defineProperty(E.props.page,"routeId",{get(){throw new Error("$page.routeId has been replaced by $page.route.id")},enumerable:!1});const $=(N,T)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${T}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function we({loader:a,parent:l,url:c,params:i,route:u,server_data_node:p}){var w,y,O,U,$;let d=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((w=E.shared)!=null&&w.load){let N=function(...S){for(const C of S){const{href:k}=new URL(C,c);v.dependencies.add(k)}};const T={route:{get id(){return v.route=!0,u.id}},params:new Proxy(i,{get:(S,C)=>(v.params.add(C),S[C])}),data:(y=p==null?void 0:p.data)!=null?y:null,url:wt(c,()=>{v.url=!0}),async fetch(S,C){let k;S instanceof Request?(k=S.url,C={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...C}):k=S;const I=new URL(k,c).href;return N(I),g?St(k,I,C):kt(k,C)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,l()}};Object.defineProperties(T,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),d=(O=await E.shared.load.call(null,T))!=null?O:null,d=d?await zt(d):null}return{node:E,loader:a,server:p,shared:(U=E.shared)!=null&&U.load?{type:"data",data:d,uses:v}:null,data:($=d!=null?d:p==null?void 0:p.data)!=null?$:null}}function De(a,l,c,i,u){if(F)return!0;if(!i)return!1;if(i.parent&&a||i.route&&l||i.url&&c)return!0;for(const p of i.params)if(u[p]!==t.params[p])return!0;for(const p of i.dependencies)if(s.some(d=>d(new URL(p))))return!0;return!1}function ye(a,l){var c,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((c=a.uses.dependencies)!=null?c:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Ce({id:a,invalidating:l,url:c,params:i,route:u}){var C;if((o==null?void 0:o.id)===a)return o.promise;const{errors:p,layouts:d,leaf:v}=u,E=[...d,v];p.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const y=t.url?a!==t.url.pathname+t.url.search:!1,O=t.route?a!==t.route.id:!1,U=E.reduce((k,I,P)=>{var te;const L=t.branch[P],Y=!!(I!=null&&I[0])&&((L==null?void 0:L.loader)!==I[1]||De(k.some(Boolean),O,y,(te=L.server)==null?void 0:te.uses,i));return k.push(Y),k},[]);if(U.some(Boolean)){try{w=await Ze(c,U)}catch(k){return ie({status:500,error:ne(k,{url:c,params:i,route:{id:u.id}}),url:c,route:u})}if(w.type==="redirect")return w}const $=w==null?void 0:w.nodes;let N=!1;const T=E.map(async(k,I)=>{var te;if(!k)return;const P=t.branch[I],L=$==null?void 0:$[I];if((!L||L.type==="skip")&&k[1]===(P==null?void 0:P.loader)&&!De(N,O,y,(te=P.shared)==null?void 0:te.uses,i))return P;if(N=!0,(L==null?void 0:L.type)==="error")throw L;return we({loader:k[1],url:c,params:i,route:u,parent:async()=>{var Ge;const ze={};for(let Ee=0;Ee<I;Ee+=1)Object.assign(ze,(Ge=await T[Ee])==null?void 0:Ge.data);return ze},server_data_node:ye(L===void 0&&k[0]?{type:"skip"}:L!=null?L:null,P==null?void 0:P.server)})});for(const k of T)k.catch(()=>{});const S=[];for(let k=0;k<E.length;k+=1)if(E[k])try{S.push(await T[k])}catch(I){if(I instanceof Xe)return{type:"redirect",location:I.location};let P=500,L;$!=null&&$.includes(I)?(P=(C=I.status)!=null?C:P,L=I.error):I instanceof Le?(P=I.status,L=I.body):L=ne(I,{params:i,url:c,route:{id:u.id}});const Y=await qe(k,S,p);return Y?await ee({url:c,params:i,branch:S.slice(0,Y.idx).concat(Y.node),status:P,error:L,route:u}):await Be(c,{id:u.id},L,P)}else S.push(void 0);return await ee({url:c,params:i,branch:S,status:200,error:null,route:u,form:l?void 0:null})}async function qe(a,l,c){for(;a--;)if(c[a]){let i=a;for(;!l[i];)i-=1;try{return{idx:i+1,node:{node:await c[a](),loader:c[a],data:{},server:null,shared:null}}}catch{continue}}}async function ie({status:a,error:l,url:c,route:i}){var w;const u={},p=await je();let d=null;if(p.server)try{const y=await Ze(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;d=(w=y.nodes[0])!=null?w:null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await le(c)}const v=await we({loader:je,url:c,params:u,route:i,parent:()=>Promise.resolve({}),server_data_node:ye(d)}),E={node:await Pe(),loader:Pe,shared:null,server:null,data:null};return await ee({url:c,params:u,branch:[v,E],status:a,error:l,route:null})}function be(a,l){if(Ve(a))return;const c=mt(a.pathname.slice(e.length)||"/");for(const i of ue){const u=i.exec(c);if(u){const p=new URL(a.origin+ht(a.pathname,n)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:l,route:i,params:gt(u),url:p}}}}function Ve(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Fe({url:a,type:l,intent:c,delta:i}){var v,E,w,y,O;let u=!1;const p={from:pe("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:pe("to",{params:(w=c==null?void 0:c.params)!=null?w:null,route:{id:(O=(y=c==null?void 0:c.route)==null?void 0:y.id)!=null?O:null},url:a}),willUnload:!c,type:l};i!==void 0&&(p.delta=i);const d={...p,cancel:()=>{u=!0}};return b||m.before_navigate.forEach(U=>U(d)),u?null:p}async function ve({url:a,scroll:l,keepfocus:c,redirect_chain:i,details:u,type:p,delta:d,nav_token:v,accepted:E,blocked:w}){const y=be(a,!1),O=Fe({url:a,type:p,delta:d,intent:y});if(!O){w();return}Re(j),E(),b=!0,g&&W.navigating.set(O),await Ne(y,a,i,{scroll:l,keepfocus:c,details:u},v,()=>{b=!1,m.after_navigate.forEach(U=>U(O)),W.navigating.set(null)})}async function Be(a,l,c,i){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await ie({status:i,error:c,url:a,route:l}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Oe(()=>(m.after_navigate.push(a),()=>{const l=m.after_navigate.indexOf(a);m.after_navigate.splice(l,1)}))},before_navigate:a=>{Oe(()=>(m.before_navigate.push(a),()=>{const l=m.before_navigate.indexOf(a);m.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(_||!g)&&(h=!1)},goto:(a,l={})=>{if("keepfocus"in l&&!("keepFocus"in l))throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l&&!("noScroll"in l))throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return x(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")s.push(a);else{const{href:l}=new URL(a,location.href);s.push(c=>c.href===l)}return se()},invalidateAll:()=>(F=!0,se()),prefetch:async a=>{const l=new URL(a,Ke(document));await Ue(l)},prefetch_routes:async a=>{const c=(a?ue.filter(i=>a.some(u=>i.exec(u))):ue).map(i=>Promise.all([...i.layouts,i.leaf].map(u=>u==null?void 0:u[1]())));await Promise.all(c)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:c,route:i}=t;if(!i)return;const u=await qe(t.branch.length,c,i.errors);if(u){const p=await ee({url:l,params:t.params,branch:c.slice(0,u.idx).concat(u.node),status:500,error:a.error,route:i});t=p.state;const d=de();A.$set(p.props),d(),ce().then($e)}}else if(a.type==="redirect")x(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...D,form:a.data,status:a.status}},c=de();A.$set(l),c(),a.type==="success"&&ce().then($e)}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var p,d;let u=!1;if(!b){const v={from:pe("from",{params:t.params,route:{id:(d=(p=t.route)==null?void 0:p.id)!=null?d:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>u=!0};m.before_navigate.forEach(E=>E(v))}u?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){Re(j);try{sessionStorage[xe]=JSON.stringify(ae)}catch{}}});const a=i=>{const{url:u,options:p,has:d}=We(i);if(u&&p.prefetch&&!Ve(u)){if(p.reload||d.rel_external||d.target||d.download)return;Ue(u)}};let l;const c=i=>{clearTimeout(l),l=setTimeout(()=>{var u;(u=i.target)==null||u.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",c),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:u,url:p,options:d,has:v}=We(i);if(!u||!p||!(u instanceof SVGAElement)&&p.protocol!==location.protocol&&!(p.protocol==="https:"||p.protocol==="http:")||v.download)return;if(d.reload||v.rel_external||v.target){Fe({url:p,type:"link"})||i.preventDefault(),b=!0;return}const[w,y]=p.href.split("#");if(y!==void 0&&w===location.href.split("#")[0]){R=!0,Re(j),t.url=p,W.page.set({...D,url:p}),W.page.notify();return}ve({url:p,scroll:d.noscroll?Ie():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[B]===j)return;const u=i.state[B]-j;ve({url:new URL(location.href),scroll:ae[i.state[B]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{j=i.state[B]},blocked:()=>{history.go(-u)},type:"popstate",delta:u})}}),addEventListener("hashchange",()=>{R&&(R=!1,history.replaceState({...history.state,[B]:++j},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&W.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:c,params:i,route:u,data:p,form:d})=>{var w;f=!0;const v=new URL(location.href);let E;try{const y=c.map(async(O,U)=>{const $=p[U];return we({loader:_e[O],url:v,params:i,route:u,parent:async()=>{const N={};for(let T=0;T<U;T+=1)Object.assign(N,(await y[T]).data);return N},server_data_node:ye($)})});E=await ee({url:v,params:i,branch:await Promise.all(y),status:a,error:l,form:d,route:(w=ue.find(({id:O})=>O===u.id))!=null?w:null})}catch(y){if(y instanceof Xe){await le(new URL(y.location,location.href));return}E=await ie({status:y instanceof Le?y.status:500,error:ne(y,{url:v,params:i,route:u}),url:v,route:u})}Te(E)}}}async function Ze(r,e){var m;const n=new URL(r);n.pathname=vt(r.pathname);const s=await ge(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),o=await s.json();if(!s.ok)throw new Error(o);return(m=o.nodes)==null||m.forEach(t=>{var f,g;(t==null?void 0:t.type)==="data"&&(t.data=Xt(t.data),t.uses={dependencies:new Set((f=t.uses.dependencies)!=null?f:[]),params:new Set((g=t.uses.params)!=null?g:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function ne(r,e){var n;return r instanceof Le?r.body:(n=Jt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const Qt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function pe(r,e){for(const n of Qt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function de(){return()=>{}}function $e(){const r=document.querySelector("[autofocus]");if(r)r.focus();else{const e=document.body,n=e.getAttribute("tabindex");e.tabIndex=-1,e.focus({preventScroll:!0}),setTimeout(()=>{var s;(s=getSelection())==null||s.removeAllRanges()}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex")}}async function nn({env:r,hydrate:e,paths:n,target:s,trailing_slash:o}){dt(n);const m=Zt({target:s,base:n.base,trailing_slash:o});pt({client:m}),e?await m._hydrate(e):m.goto(location.href,{replaceState:!0}),m._start_router()}export{nn as start};
