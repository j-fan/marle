function w(){}const Q=t=>t;function _t(t,e){for(const n in e)t[n]=e[n];return t}function dt(t){return t&&typeof t=="object"&&typeof t.then=="function"}function U(t){return t()}function G(){return Object.create(null)}function k(t){t.forEach(U)}function F(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ht(t){return Object.keys(t).length===0}function V(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Bt(t){let e;return V(t,n=>e=n)(),e}function Lt(t,e,n){t.$$.on_destroy.push(V(e,n))}function Ft(t,e,n,r){if(t){const i=X(t,e,n,r);return t[0](i)}}function X(t,e,n,r){return t[1]&&r?_t(n.ctx.slice(),t[1](r(e))):n.ctx}function Ht(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const l=[],s=Math.max(e.dirty.length,i.length);for(let o=0;o<s;o+=1)l[o]=e.dirty[o]|i[o];return l}return e.dirty|i}return e.dirty}function It(t,e,n,r,i,l){if(i){const s=X(e,n,r,l);t.p(s,i)}}function Wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const Y=typeof window<"u";let Z=Y?()=>window.performance.now():()=>Date.now(),H=Y?t=>requestAnimationFrame(t):w;const v=new Set;function tt(t){v.forEach(e=>{e.c(t)||(v.delete(e),e.f())}),v.size!==0&&H(tt)}function et(t){let e;return v.size===0&&H(tt),{promise:new Promise(n=>{v.add(e={c:t,f:n})}),abort(){v.delete(e)}}}let q=!1;function mt(){q=!0}function pt(){q=!1}function yt(t,e,n,r){for(;t<e;){const i=t+(e-t>>1);n(i)<=r?t=i+1:e=i}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let i=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(i>0&&e[n[i]].claim_order<=u?i+1:yt(1,i,a=>e[n[a]].claim_order,u))-1;r[c]=n[_]+1;const f=_+1;n[f]=c,i=Math.max(f,i)}const l=[],s=[];let o=e.length-1;for(let c=n[i]+1;c!=0;c=r[c-1]){for(l.push(e[c-1]);o>=c;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);l.reverse(),s.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<s.length;c++){for(;u<l.length&&s[c].claim_order>=l[u].claim_order;)u++;const _=u<l.length?l[u]:null;t.insertBefore(s[c],_)}}function bt(t,e){t.appendChild(e)}function nt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=it("style");return $t(nt(t),e),e.sheet}function $t(t,e){return bt(t.head||t,e),e.sheet}function vt(t,e){if(q){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Gt(t,e,n){q&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode.removeChild(t)}function Jt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function it(t){return document.createElement(t)}function I(t){return document.createTextNode(t)}function Kt(){return I(" ")}function Qt(){return I("")}function Ut(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function wt(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function st(t,e,n,r,i=!1){kt(t);const l=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,i||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const c=n(o);return c===void 0?t.splice(s,1):t[s]=c,i?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function Et(t,e,n,r){return st(t,i=>i.nodeName===e,i=>{const l=[];for(let s=0;s<i.attributes.length;s++){const o=i.attributes[s];n[o.name]||l.push(o.name)}l.forEach(s=>i.removeAttribute(s))},()=>r(e))}function Xt(t,e,n){return Et(t,e,n,it)}function Nt(t,e){return st(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>I(e),!0)}function Yt(t){return Nt(t," ")}function Zt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function te(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function At(t,e,{bubbles:n=!1,cancelable:r=!1}={}){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,r,e),i}function ee(t,e=document.body){return Array.from(e.querySelectorAll(t))}const O=new Map;let P=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function St(t,e){const n={stylesheet:xt(e),rules:{}};return O.set(t,n),n}function z(t,e,n,r,i,l,s,o=0){const c=16.666/r;let u=`{
`;for(let m=0;m<=1;m+=c){const b=e+(n-e)*l(m);u+=m*100+`%{${s(b,1-b)}}
`}const _=u+`100% {${s(n,1-n)}}
}`,f=`__svelte_${Ct(_)}_${o}`,a=nt(t),{stylesheet:h,rules:d}=O.get(a)||St(a,t);d[f]||(d[f]=!0,h.insertRule(`@keyframes ${f} ${_}`,h.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${f} ${r}ms linear ${i}ms 1 both`,P+=1,f}function B(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),i=n.length-r.length;i&&(t.style.animation=r.join(", "),P-=i,P||jt())}function jt(){H(()=>{P||(O.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),O.clear())})}let C;function y(t){C=t}function R(){if(!C)throw new Error("Function called outside component initialization");return C}function ne(t){R().$$.on_mount.push(t)}function re(t){R().$$.after_update.push(t)}function ie(t){R().$$.on_destroy.push(t)}function se(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const N=[],J=[],M=[],K=[],ct=Promise.resolve();let L=!1;function lt(){L||(L=!0,ct.then(W))}function ce(){return lt(),ct}function S(t){M.push(t)}const T=new Set;let j=0;function W(){const t=C;do{for(;j<N.length;){const e=N[j];j++,y(e),Mt(e.$$)}for(y(null),N.length=0,j=0;J.length;)J.pop()();for(let e=0;e<M.length;e+=1){const n=M[e];T.has(n)||(T.add(n),n())}M.length=0}while(N.length);for(;K.length;)K.pop()();L=!1,T.clear(),y(t)}function Mt(t){if(t.fragment!==null){t.update(),k(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}let E;function ut(){return E||(E=Promise.resolve(),E.then(()=>{E=null})),E}function A(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const D=new Set;let g;function Dt(){g={r:0,c:[],p:g}}function Ot(){g.r||k(g.c),g=g.p}function ot(t,e){t&&t.i&&(D.delete(t),t.i(e))}function Pt(t,e,n,r){if(t&&t.o){if(D.has(t))return;D.add(t),g.c.push(()=>{D.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}const at={duration:0};function le(t,e,n){let r=e(t,n),i=!1,l,s,o=0;function c(){l&&B(t,l)}function u(){const{delay:f=0,duration:a=300,easing:h=Q,tick:d=w,css:p}=r||at;p&&(l=z(t,0,1,a,f,h,p,o++)),d(0,1);const m=Z()+f,b=m+a;s&&s.abort(),i=!0,S(()=>A(t,!0,"start")),s=et(x=>{if(i){if(x>=b)return d(1,0),A(t,!0,"end"),c(),i=!1;if(x>=m){const $=h((x-m)/a);d($,1-$)}}return i})}let _=!1;return{start(){_||(_=!0,B(t),F(r)?(r=r(),ut().then(u)):u())},invalidate(){_=!1},end(){i&&(c(),i=!1)}}}function ue(t,e,n,r){let i=e(t,n),l=r?0:1,s=null,o=null,c=null;function u(){c&&B(t,c)}function _(a,h){const d=a.b-l;return h*=Math.abs(d),{a:l,b:a.b,d,duration:h,start:a.start,end:a.start+h,group:a.group}}function f(a){const{delay:h=0,duration:d=300,easing:p=Q,tick:m=w,css:b}=i||at,x={start:Z()+h,b:a};a||(x.group=g,g.r+=1),s||o?o=x:(b&&(u(),c=z(t,l,a,d,h,p,b)),a&&m(0,1),s=_(x,d),S(()=>A(t,a,"start")),et($=>{if(o&&$>o.start&&(s=_(o,d),o=null,A(t,s.b,"start"),b&&(u(),c=z(t,l,s.b,s.duration,0,p,i.css))),s){if($>=s.end)m(l=s.b,1-l),A(t,s.b,"end"),o||(s.b?u():--s.group.r||k(s.group.c)),s=null;else if($>=s.start){const ft=$-s.start;l=s.a+s.d*p(ft/s.duration),m(l,1-l)}}return!!(s||o)}))}return{run(a){F(i)?ut().then(()=>{i=i(),f(a)}):f(a)},end(){u(),s=o=null}}}function oe(t,e){const n=e.token={};function r(i,l,s,o){if(e.token!==n)return;e.resolved=o;let c=e.ctx;s!==void 0&&(c=c.slice(),c[s]=o);const u=i&&(e.current=i)(c);let _=!1;e.block&&(e.blocks?e.blocks.forEach((f,a)=>{a!==l&&f&&(Dt(),Pt(f,1,1,()=>{e.blocks[a]===f&&(e.blocks[a]=null)}),Ot())}):e.block.d(1),u.c(),ot(u,1),u.m(e.mount(),e.anchor),_=!0),e.block=u,e.blocks&&(e.blocks[l]=u),_&&W()}if(dt(t)){const i=R();if(t.then(l=>{y(i),r(e.then,1,e.value,l),y(null)},l=>{if(y(i),r(e.catch,2,e.error,l),y(null),!e.hasCatch)throw l}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function ae(t,e,n){const r=e.slice(),{resolved:i}=t;t.current===t.then&&(r[t.value]=i),t.current===t.catch&&(r[t.error]=i),t.block.p(r,n)}function fe(t){t&&t.c()}function _e(t,e){t&&t.l(e)}function qt(t,e,n,r){const{fragment:i,on_mount:l,on_destroy:s,after_update:o}=t.$$;i&&i.m(e,n),r||S(()=>{const c=l.map(U).filter(F);s?s.push(...c):k(c),t.$$.on_mount=[]}),o.forEach(S)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(k(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Tt(t,e){t.$$.dirty[0]===-1&&(N.push(t),lt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function de(t,e,n,r,i,l,s,o=[-1]){const c=C;y(t);const u=t.$$={fragment:null,ctx:null,props:l,update:w,not_equal:i,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};s&&s(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...h)=>{const d=h.length?h[0]:a;return u.ctx&&i(u.ctx[f],u.ctx[f]=d)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](d),_&&Tt(t,f)),a}):[],u.update(),_=!0,k(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){mt();const f=wt(e.target);u.fragment&&u.fragment.l(f),f.forEach(rt)}else u.fragment&&u.fragment.c();e.intro&&ot(t.$$.fragment),qt(t,e.target,e.anchor,e.customElement),pt(),W()}y(c)}class he{$destroy(){Rt(this,1),this.$destroy=w}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{w as A,V as B,k as C,F as D,Ft as E,It as F,Wt as G,Ht as H,vt as I,Lt as J,S as K,ue as L,ee as M,ie as N,Ut as O,Q as P,se as Q,le as R,he as S,Jt as T,oe as U,ae as V,J as W,Bt as X,_t as Y,Z,et as _,Kt as a,Gt as b,Yt as c,Ot as d,Qt as e,ot as f,Dt as g,rt as h,de as i,re as j,it as k,Xt as l,wt as m,Vt as n,ne as o,te as p,I as q,Nt as r,zt as s,Pt as t,Zt as u,fe as v,_e as w,qt as x,Rt as y,ce as z};
