import{S as Xe,i as Ze,s as Qe,a as xe,e as B,c as et,b as H,g as de,t as F,d as he,f as J,h as G,j as tt,o as Re,k as nt,l as rt,m as at,n as Ee,p as q,q as ot,r as st,u as it,v as X,w as je,x as Z,y as Q,z as Je}from"./chunks/index-54603ac6.js";import{g as Ge,f as Ke,s as z,a as Se,i as lt}from"./chunks/singletons-471e64eb.js";import{_ as re}from"./chunks/preload-helper-b21cceae.js";import{s as ct}from"./chunks/paths-e0f500b8.js";function ft(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ut(r){return r.split("%25").map(decodeURI).join("%25")}function pt(r){for(const e in r)r[e]=decodeURIComponent(r[e]);return r}const dt=["href","pathname","search","searchParams","toString","toJSON"];function ht(r,e){const n=new URL(r);for(const i of dt){let s=n[i];Object.defineProperty(n,i,{get(){return e(),s},enumerable:!0,configurable:!0})}return mt(n),n}function mt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const _t="/__data.json";function gt(r){return r.replace(/\/$/,"")+_t}function wt(r){let e=5381;if(typeof r=="string"){let n=r.length;for(;n;)e=e*33^r.charCodeAt(--n)}else if(ArrayBuffer.isView(r)){const n=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let i=n.length;for(;i;)e=e*33^n[--i]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const me=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const i=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;pe.delete(i)}return me(r,e)};const pe=new Map;function yt(r,e,n){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(n==null?void 0:n.body)&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&(s+=`[data-hash="${wt(n.body)}"]`);const _=document.querySelector(s);if(_!=null&&_.textContent){const{body:t,...u}=JSON.parse(_.textContent),m=_.getAttribute("data-ttl");return m&&pe.set(e,{body:t,init:u,ttl:1e3*Number(m)}),Promise.resolve(new Response(t,u))}return me(r,n)}function bt(r,e){const n=pe.get(r);if(n){if(performance.now()<n.ttl)return new Response(n.body,n.init);pe.delete(r)}return me(r,e)}const vt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Et(r){const e=[],n=[],i=[];let s=!0;return{pattern:r==="/"?/^\/$/:new RegExp(`^${Rt(r).map((t,u,m)=>{const d=decodeURIComponent(t),g=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(d);if(g)return e.push(g[1]),n.push(g[2]),i.push(!1),"(?:/(.*))?";const b=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(d);if(b)return e.push(b[1]),n.push(b[2]),i.push(!0),"(?:/([^/]+))?";const O=u===m.length-1;return d?"/"+d.split(/\[(.+?)\](?!\])/).map((I,V)=>{if(V%2){const T=vt.exec(I);if(!T)throw new Error(`Invalid param: ${I}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,x,Y,se,ee]=T;return e.push(se),n.push(ee),i.push(!!x),Y?"(.*?)":x?"([^/]*)?":"([^/]+?)"}return O&&I.includes(".")&&(s=!1),I.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join(""):void 0}).join("")}${s?"/?":""}$`),names:e,types:n,optional:i}}function kt(r){return!/^\([^)]+\)$/.test(r)}function Rt(r){return r.slice(1).split("/").filter(kt)}function St(r,{names:e,types:n,optional:i},s){const _={};for(let t=0;t<e.length;t+=1){const u=e[t],m=n[t];let d=r[t+1];if(d||!i[t]){if(m){const g=s[m];if(!g)throw new Error(`Missing "${m}" param matcher`);if(!g(d))return}_[u]=d!=null?d:""}}return _}function Ot(r,e,n,i){const s=new Set(e);return Object.entries(n).map(([u,[m,d,g]])=>{const{pattern:b,names:O,types:K,optional:M}=Et(u),I={id:u,exec:V=>{const T=b.exec(V);if(T)return St(T,{names:O,types:K,optional:M},i)},errors:[1,...g||[]].map(V=>r[V]),layouts:[0,...d||[]].map(t),leaf:_(m)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function _(u){const m=u<0;return m&&(u=~u),[m,r[u]]}function t(u){return u===void 0?u:[s.has(u),r[u]]}}function $t(r){let e,n,i;var s=r[0][0];function _(t){return{props:{data:t[2],form:t[1]}}}return s&&(e=new s(_(r))),{c(){e&&X(e.$$.fragment),n=B()},l(t){e&&je(e.$$.fragment,t),n=B()},m(t,u){e&&Z(e,t,u),H(t,n,u),i=!0},p(t,u){const m={};if(u&4&&(m.data=t[2]),u&2&&(m.form=t[1]),s!==(s=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Q(d,1)}),he()}s?(e=new s(_(t)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Q(e,t)}}}function It(r){let e,n,i;var s=r[0][0];function _(t){return{props:{data:t[2],$$slots:{default:[jt]},$$scope:{ctx:t}}}}return s&&(e=new s(_(r))),{c(){e&&X(e.$$.fragment),n=B()},l(t){e&&je(e.$$.fragment,t),n=B()},m(t,u){e&&Z(e,t,u),H(t,n,u),i=!0},p(t,u){const m={};if(u&4&&(m.data=t[2]),u&523&&(m.$$scope={dirty:u,ctx:t}),s!==(s=t[0][0])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Q(d,1)}),he()}s?(e=new s(_(t)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Q(e,t)}}}function jt(r){let e,n,i;var s=r[0][1];function _(t){return{props:{data:t[3],form:t[1]}}}return s&&(e=new s(_(r))),{c(){e&&X(e.$$.fragment),n=B()},l(t){e&&je(e.$$.fragment,t),n=B()},m(t,u){e&&Z(e,t,u),H(t,n,u),i=!0},p(t,u){const m={};if(u&8&&(m.data=t[3]),u&2&&(m.form=t[1]),s!==(s=t[0][1])){if(e){de();const d=e;F(d.$$.fragment,1,0,()=>{Q(d,1)}),he()}s?(e=new s(_(t)),X(e.$$.fragment),J(e.$$.fragment,1),Z(e,n.parentNode,n)):e=null}else s&&e.$set(m)},i(t){i||(e&&J(e.$$.fragment,t),i=!0)},o(t){e&&F(e.$$.fragment,t),i=!1},d(t){t&&G(n),e&&Q(e,t)}}}function Me(r){let e,n=r[5]&&ze(r);return{c(){e=nt("div"),n&&n.c(),this.h()},l(i){e=rt(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=at(e);n&&n.l(s),s.forEach(G),this.h()},h(){Ee(e,"id","svelte-announcer"),Ee(e,"aria-live","assertive"),Ee(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(i,s){H(i,e,s),n&&n.m(e,null)},p(i,s){i[5]?n?n.p(i,s):(n=ze(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&G(e),n&&n.d()}}}function ze(r){let e;return{c(){e=ot(r[6])},l(n){e=st(n,r[6])},m(n,i){H(n,e,i)},p(n,i){i&64&&it(e,n[6])},d(n){n&&G(e)}}}function Lt(r){let e,n,i,s,_;const t=[It,$t],u=[];function m(g,b){return g[0][1]?0:1}e=m(r),n=u[e]=t[e](r);let d=r[4]&&Me(r);return{c(){n.c(),i=xe(),d&&d.c(),s=B()},l(g){n.l(g),i=et(g),d&&d.l(g),s=B()},m(g,b){u[e].m(g,b),H(g,i,b),d&&d.m(g,b),H(g,s,b),_=!0},p(g,[b]){let O=e;e=m(g),e===O?u[e].p(g,b):(de(),F(u[O],1,1,()=>{u[O]=null}),he(),n=u[e],n?n.p(g,b):(n=u[e]=t[e](g),n.c()),J(n,1),n.m(i.parentNode,i)),g[4]?d?d.p(g,b):(d=Me(g),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(g){_||(J(n),_=!0)},o(g){F(n),_=!1},d(g){u[e].d(g),g&&G(i),d&&d.d(g),g&&G(s)}}}function At(r,e,n){let{stores:i}=e,{page:s}=e,{components:_}=e,{form:t}=e,{data_0:u=null}=e,{data_1:m=null}=e;tt(i.page.notify);let d=!1,g=!1,b=null;return Re(()=>{const O=i.page.subscribe(()=>{d&&(n(5,g=!0),n(6,b=document.title||"untitled page"))});return n(4,d=!0),O}),r.$$set=O=>{"stores"in O&&n(7,i=O.stores),"page"in O&&n(8,s=O.page),"components"in O&&n(0,_=O.components),"form"in O&&n(1,t=O.form),"data_0"in O&&n(2,u=O.data_0),"data_1"in O&&n(3,m=O.data_1)},r.$$.update=()=>{r.$$.dirty&384&&i.page.set(s)},[_,t,u,m,d,g,b,i,s]}class Pt extends Xe{constructor(e){super(),Ze(this,e,At,Lt,Qe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Nt={},_e=[()=>re(()=>import("./chunks/0-3ed918d5.js"),["./chunks/0-3ed918d5.js","./chunks/_layout-1daba58d.js","./components/pages/_layout.svelte-9f1a6c4b.js","./chunks/index-54603ac6.js","./assets/_layout-3fdd5cd0.css"],import.meta.url),()=>re(()=>import("./chunks/1-048074a3.js"),["./chunks/1-048074a3.js","./components/error.svelte-4b0cf4e1.js","./chunks/index-54603ac6.js","./chunks/singletons-471e64eb.js","./chunks/index-8b9fe784.js","./chunks/paths-e0f500b8.js"],import.meta.url),()=>re(()=>import("./chunks/2-cb2c9414.js"),["./chunks/2-cb2c9414.js","./components/pages/_page.svelte-93f08c96.js","./chunks/index-54603ac6.js","./chunks/paths-e0f500b8.js"],import.meta.url),()=>re(()=>import("./chunks/3-aeb66636.js"),["./chunks/3-aeb66636.js","./chunks/_page-5a19cf55.js","./chunks/index-54603ac6.js","./chunks/paths-e0f500b8.js","./chunks/preload-helper-b21cceae.js","./chunks/index-8b9fe784.js","./assets/_page-73f633e0.css"],import.meta.url),()=>re(()=>import("./chunks/4-440ebad2.js"),["./chunks/4-440ebad2.js","./components/pages/your-face/_page.svelte-6f2a5e41.js","./chunks/index-54603ac6.js","./assets/_page-cbef2450.css"],import.meta.url)],Ut=[],Tt={"/":[2],"/fabric-of-dreams":[3],"/your-face":[4]},Dt={handleError:({error:r})=>{console.error(r)}};class Oe{constructor(e,n){this.status=e,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class He{constructor(e,n){this.status=e,this.location=n}}async function Vt(r){var e;for(const n in r)if(typeof((e=r[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([i,s])=>[i,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const qt=-1,Ct=-2,Bt=-3,Ft=-4,Jt=-5,Gt=-6;function Kt(r){if(typeof r=="number")return i(r,!0);if(!Array.isArray(r)||r.length===0)throw new Error("Invalid input");const e=r,n=Array(e.length);function i(s,_=!1){if(s===qt)return;if(s===Bt)return NaN;if(s===Ft)return 1/0;if(s===Jt)return-1/0;if(s===Gt)return-0;if(_)throw new Error("Invalid input");if(s in n)return n[s];const t=e[s];if(!t||typeof t!="object")n[s]=t;else if(Array.isArray(t))if(typeof t[0]=="string")switch(t[0]){case"Date":n[s]=new Date(t[1]);break;case"Set":const m=new Set;n[s]=m;for(let b=1;b<t.length;b+=1)m.add(i(t[b]));break;case"Map":const d=new Map;n[s]=d;for(let b=1;b<t.length;b+=2)d.set(i(t[b]),i(t[b+1]));break;case"RegExp":n[s]=new RegExp(t[1],t[2]);break;case"Object":n[s]=Object(t[1]);break;case"BigInt":n[s]=BigInt(t[1]);break;case"null":const g=Object.create(null);n[s]=g;for(let b=1;b<t.length;b+=2)g[t[b]]=i(t[b+1]);break}else{const u=new Array(t.length);n[s]=u;for(let m=0;m<t.length;m+=1){const d=t[m];d!==Ct&&(u[m]=i(d))}}else{const u={};n[s]=u;for(const m in t){const d=t[m];u[m]=i(d)}}return n[s]}return i(0)}const We="sveltekit:scroll",C="sveltekit:index",ce=Ot(_e,Ut,Tt,Nt),$e=_e[0],Ie=_e[1];$e();Ie();let oe={};try{oe=JSON.parse(sessionStorage[We])}catch{}function ke(r){oe[r]=Se()}function Mt({target:r,base:e,trailing_slash:n}){var Ce;const i=[];let s=null;const _={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},u=!1,m=!1,d=!0,g=!1,b=!1,O=!1,K=!1,M,I=(Ce=history.state)==null?void 0:Ce[C];I||(I=Date.now(),history.replaceState({...history.state,[C]:I},"",location.href));const V=oe[I];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let T,x,Y;async function se(){Y=Y||Promise.resolve(),await Y,Y=null;const a=new URL(location.href),l=ye(a,!0);s=null,await Ae(l,a,[])}async function ee(a,{noScroll:l=!1,replaceState:f=!1,keepFocus:o=!1,state:c={},invalidateAll:p=!1},h,v){return typeof a=="string"&&(a=new URL(a,Ge(document))),be({url:a,scroll:l?Se():null,keepfocus:o,redirect_chain:h,details:{state:c,replaceState:f},nav_token:v,accepted:()=>{p&&(K=!0)},blocked:()=>{},type:"goto"})}async function Le(a){const l=ye(a,!1);if(!l)throw new Error(`Attempted to prefetch a URL that does not belong to this app: ${a}`);return s={id:l.id,promise:Ue(l)},s.promise}async function Ae(a,l,f,o,c={},p){var v,E;x=c;let h=a&&await Ue(a);if(h||(h=await qe(l,{id:null},ae(new Error(`Not found: ${l.pathname}`),{url:l,params:{},route:{id:null}}),404)),l=(a==null?void 0:a.url)||l,x!==c)return!1;if(h.type==="redirect")if(f.length>10||f.includes(l.pathname))h=await ie({status:500,error:ae(new Error("Redirect loop"),{url:l,params:{},route:{id:null}}),url:l,route:{id:null}});else return ee(new URL(h.location,l).href,{},[...f,l.pathname],c),!1;else((E=(v=h.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await z.updated.check()&&await le(l);if(i.length=0,K=!1,g=!0,o&&o.details){const{details:w}=o,y=w.replaceState?0:1;w.state[C]=I+=y,history[w.replaceState?"replaceState":"pushState"](w.state,"",l)}if(s=null,m){t=h.state,h.props.page&&(h.props.page.url=l);const w=ue();M.$set(h.props),w()}else Pe(h);if(o){const{scroll:w,keepfocus:y}=o;if(!y){const R=document.body,A=R.getAttribute("tabindex");R.tabIndex=-1,R.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),A!==null?R.setAttribute("tabindex",A):R.removeAttribute("tabindex")}if(await Je(),d){const R=l.hash&&document.getElementById(l.hash.slice(1));w?scrollTo(w.x,w.y):R?R.scrollIntoView():scrollTo(0,0)}}else await Je();d=!0,h.props.page&&(T=h.props.page),p&&p(),g=!1}function Pe(a){var c,p;t=a.state;const l=document.querySelector("style[data-sveltekit]");l&&l.remove(),T=a.props.page;const f=ue();M=new Pt({target:r,props:{...a.props,stores:z},hydrate:!0}),f();const o={from:null,to:fe("to",{params:t.params,route:{id:(p=(c=t.route)==null?void 0:c.id)!=null?p:null},url:new URL(location.href)}),willUnload:!1,type:"enter"};_.after_navigate.forEach(h=>h(o)),m=!0}async function te({url:a,params:l,branch:f,status:o,error:c,route:p,form:h}){var A;const v=f.filter(Boolean),E={type:"loaded",state:{url:a,params:l,branch:f,error:c,route:p},props:{components:v.map($=>$.node.component)}};h!==void 0&&(E.props.form=h);let w={},y=!T;for(let $=0;$<v.length;$+=1){const N=v[$];w={...w,...N.data},(y||!t.branch.some(U=>U===N))&&(E.props[`data_${$}`]=w,y=y||Object.keys((A=N.data)!=null?A:{}).length>0)}if(y||(y=Object.keys(T.data).length!==Object.keys(w).length),!t.url||a.href!==t.url.href||t.error!==c||h!==void 0||y){E.props.page={error:c,params:l,route:p,status:o,url:a,form:h,data:y?w:T.data};const $=(N,U)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${U}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function ge({loader:a,parent:l,url:f,params:o,route:c,server_data_node:p}){var w,y,R,A,$;let h=null;const v={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},E=await a();if((w=E.shared)!=null&&w.load){let N=function(...S){for(const D of S){const{href:k}=new URL(D,f);v.dependencies.add(k)}};const U={route:{get id(){return v.route=!0,c.id}},params:new Proxy(o,{get:(S,D)=>(v.params.add(D),S[D])}),data:(y=p==null?void 0:p.data)!=null?y:null,url:ht(f,()=>{v.url=!0}),async fetch(S,D){let k;S instanceof Request?(k=S.url,D={body:S.method==="GET"||S.method==="HEAD"?void 0:await S.blob(),cache:S.cache,credentials:S.credentials,headers:S.headers,integrity:S.integrity,keepalive:S.keepalive,method:S.method,mode:S.mode,redirect:S.redirect,referrer:S.referrer,referrerPolicy:S.referrerPolicy,signal:S.signal,...D}):k=S;const j=new URL(k,f).href;return N(j),m?bt(j,D):yt(k,j,D)},setHeaders:()=>{},depends:N,parent(){return v.parent=!0,l()}};Object.defineProperties(U,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},routeId:{get(){throw new Error("routeId has been replaced by route.id")},enumerable:!1}}),h=(R=await E.shared.load.call(null,U))!=null?R:null,h=h?await Vt(h):null}return{node:E,loader:a,server:p,shared:(A=E.shared)!=null&&A.load?{type:"data",data:h,uses:v}:null,data:($=h!=null?h:p==null?void 0:p.data)!=null?$:null}}function Ne(a,l,f,o,c){if(K)return!0;if(!o)return!1;if(o.parent&&a||o.route&&l||o.url&&f)return!0;for(const p of o.params)if(c[p]!==t.params[p])return!0;for(const p of o.dependencies)if(i.some(h=>h(new URL(p))))return!0;return!1}function we(a,l){var f,o;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((f=a.uses.dependencies)!=null?f:[]),params:new Set((o=a.uses.params)!=null?o:[]),parent:!!a.uses.parent,route:!!a.uses.route,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&l!=null?l:null}async function Ue({id:a,invalidating:l,url:f,params:o,route:c}){var D;if((s==null?void 0:s.id)===a)return s.promise;const{errors:p,layouts:h,leaf:v}=c,E=[...h,v];p.forEach(k=>k==null?void 0:k().catch(()=>{})),E.forEach(k=>k==null?void 0:k[1]().catch(()=>{}));let w=null;const y=t.url?a!==t.url.pathname+t.url.search:!1,R=t.route?a!==t.route.id:!1,A=E.reduce((k,j,P)=>{var ne;const L=t.branch[P],W=!!(j!=null&&j[0])&&((L==null?void 0:L.loader)!==j[1]||Ne(k.some(Boolean),R,y,(ne=L.server)==null?void 0:ne.uses,o));return k.push(W),k},[]);if(A.some(Boolean)){try{w=await Ye(f,A)}catch(k){return ie({status:500,error:ae(k,{url:f,params:o,route:{id:c.id}}),url:f,route:c})}if(w.type==="redirect")return w}const $=w==null?void 0:w.nodes;let N=!1;const U=E.map(async(k,j)=>{var ne;if(!k)return;const P=t.branch[j],L=$==null?void 0:$[j];if((!L||L.type==="skip")&&k[1]===(P==null?void 0:P.loader)&&!Ne(N,R,y,(ne=P.shared)==null?void 0:ne.uses,o))return P;if(N=!0,(L==null?void 0:L.type)==="error")throw L;return ge({loader:k[1],url:f,params:o,route:c,parent:async()=>{var Fe;const Be={};for(let ve=0;ve<j;ve+=1)Object.assign(Be,(Fe=await U[ve])==null?void 0:Fe.data);return Be},server_data_node:we(L===void 0&&k[0]?{type:"skip"}:L!=null?L:null,P==null?void 0:P.server)})});for(const k of U)k.catch(()=>{});const S=[];for(let k=0;k<E.length;k+=1)if(E[k])try{S.push(await U[k])}catch(j){if(j instanceof He)return{type:"redirect",location:j.location};let P=500,L;$!=null&&$.includes(j)?(P=(D=j.status)!=null?D:P,L=j.error):j instanceof Oe?(P=j.status,L=j.body):L=ae(j,{params:o,url:f,route:{id:c.id}});const W=await Te(k,S,p);return W?await te({url:f,params:o,branch:S.slice(0,W.idx).concat(W.node),status:P,error:L,route:c}):await qe(f,{id:c.id},L,P)}else S.push(void 0);return await te({url:f,params:o,branch:S,status:200,error:null,route:c,form:l?void 0:null})}async function Te(a,l,f){for(;a--;)if(f[a]){let o=a;for(;!l[o];)o-=1;try{return{idx:o+1,node:{node:await f[a](),loader:f[a],data:{},server:null,shared:null}}}catch{continue}}}async function ie({status:a,error:l,url:f,route:o}){var w;const c={},p=await $e();let h=null;if(p.server)try{const y=await Ye(f,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;h=(w=y.nodes[0])!=null?w:null}catch{(f.origin!==location.origin||f.pathname!==location.pathname||u)&&await le(f)}const v=await ge({loader:$e,url:f,params:c,route:o,parent:()=>Promise.resolve({}),server_data_node:we(h)}),E={node:await Ie(),loader:Ie,shared:null,server:null,data:null};return await te({url:f,params:c,branch:[v,E],status:a,error:l,route:null})}function ye(a,l){if(De(a))return;const f=ut(a.pathname.slice(e.length)||"/");for(const o of ce){const c=o.exec(f);if(c){const p=new URL(a.origin+ft(a.pathname,n)+a.search+a.hash);return{id:p.pathname+p.search,invalidating:l,route:o,params:pt(c),url:p}}}}function De(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}function Ve({url:a,type:l,intent:f,delta:o}){var v,E,w,y,R;let c=!1;const p={from:fe("from",{params:t.params,route:{id:(E=(v=t.route)==null?void 0:v.id)!=null?E:null},url:t.url}),to:fe("to",{params:(w=f==null?void 0:f.params)!=null?w:null,route:{id:(R=(y=f==null?void 0:f.route)==null?void 0:y.id)!=null?R:null},url:a}),willUnload:!f,type:l};o!==void 0&&(p.delta=o);const h={...p,cancel:()=>{c=!0}};return _.before_navigate.forEach(A=>A(h)),c?null:p}async function be({url:a,scroll:l,keepfocus:f,redirect_chain:o,details:c,type:p,delta:h,nav_token:v,accepted:E,blocked:w}){const y=ye(a,!1),R=Ve({url:a,type:p,delta:h,intent:y});if(!R){w();return}ke(I),E(),b=!0,m&&z.navigating.set(R),await Ae(y,a,o,{scroll:l,keepfocus:f,details:c},v,()=>{b=!1,_.after_navigate.forEach(A=>A(R)),z.navigating.set(null)})}async function qe(a,l,f,o){return a.origin===location.origin&&a.pathname===location.pathname&&!u?await ie({status:o,error:f,url:a,route:l}):await le(a)}function le(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{Re(()=>(_.after_navigate.push(a),()=>{const l=_.after_navigate.indexOf(a);_.after_navigate.splice(l,1)}))},before_navigate:a=>{Re(()=>(_.before_navigate.push(a),()=>{const l=_.before_navigate.indexOf(a);_.before_navigate.splice(l,1)}))},disable_scroll_handling:()=>{(g||!m)&&(d=!1)},goto:(a,l={})=>{if("keepfocus"in l)throw new Error("`keepfocus` has been renamed to `keepFocus` (note the difference in casing)");if("noscroll"in l)throw new Error("`noscroll` has been renamed to `noScroll` (note the difference in casing)");return ee(a,l,[])},invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")i.push(a);else{const{href:l}=new URL(a,location.href);i.push(f=>f.href===l)}return se()},invalidateAll:()=>(K=!0,se()),prefetch:async a=>{const l=new URL(a,Ge(document));await Le(l)},prefetch_routes:async a=>{const f=(a?ce.filter(o=>a.some(c=>o.exec(c))):ce).map(o=>Promise.all([...o.layouts,o.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(f)},apply_action:async a=>{if(a.type==="error"){const l=new URL(location.href),{branch:f,route:o}=t;if(!o)return;const c=await Te(t.branch.length,f,o.errors);if(c){const p=await te({url:l,params:t.params,branch:f.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:o});t=p.state;const h=ue();M.$set(p.props),h()}}else if(a.type==="redirect")ee(a.location,{invalidateAll:!0},[]);else{const l={form:a.data,page:{...T,form:a.data,status:a.status}},f=ue();M.$set(l),f()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",o=>{var p,h;let c=!1;if(!b){const v={from:fe("from",{params:t.params,route:{id:(h=(p=t.route)==null?void 0:p.id)!=null?h:null},url:t.url}),to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};_.before_navigate.forEach(E=>E(v))}c?(o.preventDefault(),o.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ke(I);try{sessionStorage[We]=JSON.stringify(oe)}catch{}}});const a=o=>{const{url:c,options:p}=Ke(o);if(c&&p.prefetch){if(De(c))return;Le(c)}};let l;const f=o=>{clearTimeout(l),l=setTimeout(()=>{var c;(c=o.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",f),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",o=>{if(o.button||o.which!==1||o.metaKey||o.ctrlKey||o.shiftKey||o.altKey||o.defaultPrevented)return;const{a:c,url:p,options:h}=Ke(o);if(!c||!p)return;const v=c instanceof SVGAElement;if(!v&&p.protocol!==location.protocol&&!(p.protocol==="https:"||p.protocol==="http:")||c.hasAttribute("download"))return;if((c.getAttribute("rel")||"").split(/\s+/).includes("external")||h.reload||(v?c.target.baseVal:c.target)){Ve({url:p,type:"link"})||o.preventDefault(),b=!0;return}const[w,y]=p.href.split("#");if(y!==void 0&&w===location.href.split("#")[0]){O=!0,ke(I),t.url=p,z.page.set({...T,url:p}),z.page.notify();return}be({url:p,scroll:h.noscroll?Se():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:p.href===location.href},accepted:()=>o.preventDefault(),blocked:()=>o.preventDefault(),type:"link"})}),addEventListener("popstate",o=>{if(o.state){if(o.state[C]===I)return;const c=o.state[C]-I;be({url:new URL(location.href),scroll:oe[o.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=o.state[C]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{O&&(O=!1,history.replaceState({...history.state,[C]:++I},"",location.href))});for(const o of document.querySelectorAll("link"))o.rel==="icon"&&(o.href=o.href);addEventListener("pageshow",o=>{o.persisted&&z.navigating.set(null)})},_hydrate:async({status:a,error:l,node_ids:f,params:o,route:c,data:p,form:h})=>{var w;u=!0;const v=new URL(location.href);let E;try{const y=f.map(async(R,A)=>{const $=p[A];return ge({loader:_e[R],url:v,params:o,route:c,parent:async()=>{const N={};for(let U=0;U<A;U+=1)Object.assign(N,(await y[U]).data);return N},server_data_node:we($)})});E=await te({url:v,params:o,branch:await Promise.all(y),status:a,error:l,form:h,route:(w=ce.find(({id:R})=>R===c.id))!=null?w:null})}catch(y){if(y instanceof He){await le(new URL(y.location,location.href));return}E=await ie({status:y instanceof Oe?y.status:500,error:ae(y,{url:v,params:o,route:c}),url:v,route:c})}Pe(E)}}}async function Ye(r,e){var _;const n=new URL(r);n.pathname=gt(r.pathname);const i=await me(n.href,{headers:{"x-sveltekit-invalidated":e.map(t=>t?"1":"").join(",")}}),s=await i.json();if(!i.ok)throw new Error(s);return(_=s.nodes)==null||_.forEach(t=>{var u,m;(t==null?void 0:t.type)==="data"&&(t.data=Kt(t.data),t.uses={dependencies:new Set((u=t.uses.dependencies)!=null?u:[]),params:new Set((m=t.uses.params)!=null?m:[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),s}function ae(r,e){var n;return r instanceof Oe?r.body:(n=Dt.handleError({error:r,event:e}))!=null?n:{message:e.route.id!=null?"Internal Error":"Not Found"}}const zt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function fe(r,e){for(const n of zt)Object.defineProperty(e,n,{get(){throw new Error(`The navigation shape changed - ${r}.${n} should now be ${r}.url.${n}`)},enumerable:!1});return Object.defineProperty(e,"routeId",{get(){throw new Error(`The navigation shape changed - ${r}.routeId should now be ${r}.route.id`)},enumerable:!1}),e}function ue(){return()=>{}}async function Zt({env:r,hydrate:e,paths:n,target:i,trailing_slash:s}){ct(n);const _=Mt({target:i,base:n.base,trailing_slash:s});lt({client:_}),e?await _._hydrate(e):_.goto(location.href,{replaceState:!0}),_._start_router()}export{Zt as start};
