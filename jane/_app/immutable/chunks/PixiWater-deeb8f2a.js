import{V as _,W as C,X as E,K as k,S as v,i as D,s as j,k as I,l as T,m as O,h as b,n as x,b as W,M as q,A as P,J as M,o as F,L as N}from"./index-54603ac6.js";import{A as R,S,W as V,f as z,C as J,s as K}from"./_page-a76fdcb4.js";import{b as L}from"./paths-47524592.js";import{w as X}from"./index-8b9fe784.js";function A(e){return Object.prototype.toString.call(e)==="[object Date]"}function h(e,t){if(e===t||e!==e)return()=>e;const s=typeof e;if(s!==typeof t||Array.isArray(e)!==Array.isArray(t))throw new Error("Cannot interpolate values of different type");if(Array.isArray(e)){const i=t.map((a,r)=>h(e[r],a));return a=>i.map(r=>r(a))}if(s==="object"){if(!e||!t)throw new Error("Object cannot be null");if(A(e)&&A(t)){e=e.getTime(),t=t.getTime();const r=t-e;return n=>new Date(e+n*r)}const i=Object.keys(t),a={};return i.forEach(r=>{a[r]=h(e[r],t[r])}),r=>{const n={};return i.forEach(c=>{n[c]=a[c](r)}),n}}if(s==="number"){const i=t-e;return a=>e+a*i}throw new Error(`Cannot interpolate ${s} values`)}function B(e,t={}){const s=X(e);let i,a=e;function r(n,c){if(e==null)return s.set(e=n),Promise.resolve();a=n;let o=i,d=!1,{delay:u=0,duration:f=400,easing:l=k,interpolate:p=h}=_(_({},t),c);if(f===0)return o&&(o.abort(),o=null),s.set(e=a),Promise.resolve();const m=C()+u;let y;return i=E(g=>{if(g<m)return!0;d||(y=p(e,n),typeof f=="function"&&(f=f(e,n)),d=!0),o&&(o.abort(),o=null);const w=g-m;return w>f?(s.set(e=n),!1):(s.set(e=y(l(w/f))),!0)}),i.promise}return{set:r,update:(n,c)=>r(n(a,e),c),subscribe:s.subscribe}}function G(e){let t,s,i,a;return{c(){t=I("div"),this.h()},l(r){t=T(r,"DIV",{class:!0}),O(t).forEach(b),this.h()},h(){x(t,"class",s=e[0]+" pixi-canvas svelte-1k5qfmg")},m(r,n){W(r,t,n),i||(a=q(t,"click",e[5]),i=!0)},p(r,[n]){n&1&&s!==(s=r[0]+" pixi-canvas svelte-1k5qfmg")&&x(t,"class",s)},i:P,o:P,d(r){r&&b(t),i=!1,a()}}}function H(e,t,s){let i,{imageSrc:a}=t,{displacePower:r=20}=t,{canvasId:n}=t;const c=new R({resizeTo:document.body}),o=S.from(`${L}/img/displacement_map.jpeg`);o.texture.baseTexture.wrapMode=V.REPEAT;const d=new z.DisplacementFilter(o),u=B(0,{duration:600,easing:K});M(e,u,l=>s(4,i=l)),F(()=>{document.querySelector(`.${n}`).appendChild(c.view),c.stage.interactive=!0;const p=new J;c.stage.addChild(p);const m=S.from(a);return p.addChild(m),c.stage.addChild(o),m.filters=[d],d.padding=10,d.scale.x=r,d.scale.y=r,c.ticker.add(()=>{o.x++,o.x>o.width&&(o.x=0)}),()=>{c.destroy(!0)}});function f(l){N.call(this,e,l)}return e.$$set=l=>{"imageSrc"in l&&s(2,a=l.imageSrc),"displacePower"in l&&s(3,r=l.displacePower),"canvasId"in l&&s(0,n=l.canvasId)},e.$$.update=()=>{e.$$.dirty&8&&u.set(r),e.$$.dirty&16&&(d.scale.x=i,d.scale.y=i)},[n,u,a,r,i,f]}class $ extends v{constructor(t){super(),D(this,t,H,G,j,{imageSrc:2,displacePower:3,canvasId:0})}}export{$ as default};
