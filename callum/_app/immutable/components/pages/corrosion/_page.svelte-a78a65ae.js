import{H as ge,S as ue,i as fe,s as me,k as S,l as R,m as G,h as p,I as ee,n as h,p as j,b as O,F as x,A as re,a as D,q as X,e as ae,J as ye,c as q,r as z,K as ie,L as V,u as pe,f as J,t as te,d as ve,M as be,o as Me,N as xe,v as Ie,w as we,x as ke,y as Ee,g as Te,O as Ce,P as Pe}from"../../../chunks/index-ec3a9296.js";import{i as Se,b as Re,a as K,r as Ae}from"../../../chunks/isObject-fe408183.js";const Oe=(e,n)=>{const t=setInterval(e,n);ge(()=>{clearInterval(t)})};var Ne="[object Symbol]";function Le(e){return typeof e=="symbol"||Se(e)&&Re(e)==Ne}var We=/\s/;function je(e){for(var n=e.length;n--&&We.test(e.charAt(n)););return n}var De=/^\s+/;function qe(e){return e&&e.slice(0,je(e)+1).replace(De,"")}var se=0/0,Ge=/^[-+]0x[0-9a-f]+$/i,He=/^0b[01]+$/i,Be=/^0o[0-7]+$/i,Ve=parseInt;function oe(e){if(typeof e=="number")return e;if(Le(e))return se;if(K(e)){var n=typeof e.valueOf=="function"?e.valueOf():e;e=K(n)?n+"":n}if(typeof e!="string")return e===0?e:+e;e=qe(e);var t=He.test(e);return t||Be.test(e)?Ve(e.slice(2),t?2:8):Ge.test(e)?se:+e}var Fe=function(){return Ae.Date.now()};const Z=Fe;var Ue="Expected a function",Xe=Math.max,ze=Math.min;function Je(e,n,t){var a,i,f,m,l,c,b=0,d=!1,E=!1,I=!0;if(typeof e!="function")throw new TypeError(Ue);n=oe(n)||0,K(t)&&(d=!!t.leading,E="maxWait"in t,f=E?Xe(oe(t.maxWait)||0,n):f,I="trailing"in t?!!t.trailing:I);function w(s){var _=a,v=i;return a=i=void 0,b=s,m=e.apply(v,_),m}function W(s){return b=s,l=setTimeout(C,n),d?w(s):m}function T(s){var _=s-c,v=s-b,o=n-_;return E?ze(o,f-v):o}function N(s){var _=s-c,v=s-b;return c===void 0||_>=n||_<0||E&&v>=f}function C(){var s=Z();if(N(s))return M(s);l=setTimeout(C,T(s))}function M(s){return l=void 0,I&&a?w(s):(a=i=void 0,m)}function H(){l!==void 0&&clearTimeout(l),b=0,a=c=i=l=void 0}function u(){return l===void 0?m:M(Z())}function g(){var s=Z(),_=N(s);if(a=arguments,i=this,c=s,_){if(l===void 0)return W(c);if(E)return clearTimeout(l),l=setTimeout(C,n),w(c)}return l===void 0&&(l=setTimeout(C,n)),m}return g.cancel=H,g.flush=u,g}var Ke="Expected a function";function Ye(e,n,t){var a=!0,i=!0;if(typeof e!="function")throw new TypeError(Ke);return K(t)&&(a="leading"in t?!!t.leading:a,i="trailing"in t?!!t.trailing:i),Je(e,n,{leading:a,maxWait:n,trailing:i})}function Qe(e){let n,t,a;return{c(){n=S("a"),t=S("img"),this.h()},l(i){n=R(i,"A",{href:!0});var f=G(n);t=R(f,"IMG",{src:!0,alt:!0,style:!0,class:!0}),f.forEach(p),this.h()},h(){ee(t.src,a=e[4])||h(t,"src",a),h(t,"alt","gylph to click"),j(t,"--colour",e[3]),j(t,"--random-anim-delay",e[5]+"s"),j(t,"--x",e[1]+"%"),j(t,"--y",e[2]+"%"),h(t,"class","svelte-129x1q3"),h(n,"href",e[0])},m(i,f){O(i,n,f),x(n,t)},p(i,[f]){f&16&&!ee(t.src,a=i[4])&&h(t,"src",a),f&8&&j(t,"--colour",i[3]),f&2&&j(t,"--x",i[1]+"%"),f&4&&j(t,"--y",i[2]+"%"),f&1&&h(n,"href",i[0])},i:re,o:re,d(i){i&&p(n)}}}function Ze(e,n,t){let a,{href:i}=n,{glyphId:f=1}=n,{xPos:m}=n,{yPos:l}=n,{colour:c="#00ff00"}=n,b=-Math.random()*3;return e.$$set=d=>{"href"in d&&t(0,i=d.href),"glyphId"in d&&t(6,f=d.glyphId),"xPos"in d&&t(1,m=d.xPos),"yPos"in d&&t(2,l=d.yPos),"colour"in d&&t(3,c=d.colour)},e.$$.update=()=>{e.$$.dirty&64&&t(4,a=`https://raw.githubusercontent.com/j-fan/marle-images/main/glyph/g${f}.png`)},[i,m,l,c,a,b,f]}class $e extends ue{constructor(n){super(),fe(this,n,Ze,Qe,me,{href:0,glyphId:6,xPos:1,yPos:2,colour:3})}}const{window:$}=xe;function le(e){let n,t;return n=new $e({props:{href:"https://j-fan.github.io/marle/jordan-pat/video",xPos:3,yPos:50,glyphId:4,colour:"#9EA9E9"}}),{c(){Ie(n.$$.fragment)},l(a){we(n.$$.fragment,a)},m(a,i){ke(n,a,i),t=!0},i(a){t||(J(n.$$.fragment,a),t=!0)},o(a){te(n.$$.fragment,a),t=!1},d(a){Ee(n,a)}}}function et(e){let n,t,a,i,f,m,l,c,b,d,E,I,w,W,T,N,C,M,H,u,g,s,_,v,o=e[2]&&le();return{c(){n=D(),t=S("canvas"),a=D(),i=S("div"),f=D(),m=S("div"),l=S("div"),c=S("input"),b=D(),d=S("label"),E=X("Mask "),I=X(e[1]),w=X("%"),W=D(),T=S("h2"),N=X("I can feel my mind expanding..."),C=D(),M=S("img"),u=D(),o&&o.c(),g=ae(),this.h()},l(r){ye('[data-svelte="svelte-1wyrjnx"]',document.head).forEach(p),n=q(r),t=R(r,"CANVAS",{id:!0,class:!0}),G(t).forEach(p),a=q(r),i=R(r,"DIV",{class:!0}),G(i).forEach(p),f=q(r),m=R(r,"DIV",{class:!0});var P=G(m);l=R(P,"DIV",{id:!0,class:!0});var k=G(l);c=R(k,"INPUT",{id:!0,type:!0,name:!0,min:!0,max:!0}),b=q(k),d=R(k,"LABEL",{for:!0});var L=G(d);E=z(L,"Mask "),I=z(L,e[1]),w=z(L,"%"),L.forEach(p),k.forEach(p),W=q(P),T=R(P,"H2",{class:!0});var A=G(T);N=z(A,"I can feel my mind expanding..."),A.forEach(p),C=q(P),M=R(P,"IMG",{id:!0,class:!0,alt:!0,src:!0}),P.forEach(p),u=q(r),o&&o.l(r),g=ae(),this.h()},h(){document.title="Origin:Marle - Corrosion - Callum Howard",h(t,"id","canvas"),h(t,"class","fixed"),h(i,"class","fixed top-0 left-0 w-full h-full vignette svelte-55c46d"),h(c,"id","mask"),h(c,"type","range"),h(c,"name","mask"),h(c,"min",0),h(c,"max",100),h(d,"for","mask"),h(l,"id","debug"),h(l,"class","hidden"),h(T,"class","fixed italic font-serif text-4xl font-black mx-32 my-32 select-none expand-text svelte-55c46d"),h(M,"id","silhouette"),h(M,"class","fixed bottom-0 m-auto left-0 right-0 opacity-70 hue-rotate-30 select-none"),h(M,"alt","silhouette"),ee(M.src,H="https://raw.githubusercontent.com/CallumHoward/marle-media/main/silhouette.png")||h(M,"src",H),h(m,"class","absolute w-screen h-full")},m(r,y){O(r,n,y),O(r,t,y),e[7](t),O(r,a,y),O(r,i,y),O(r,f,y),O(r,m,y),x(m,l),x(l,c),ie(c,e[1]),x(l,b),x(l,d),x(d,E),x(d,I),x(d,w),x(m,W),x(m,T),x(T,N),x(m,C),x(m,M),O(r,u,y),o&&o.m(r,y),O(r,g,y),s=!0,_||(v=[V($,"mousemove",e[3]),V($,"touchmove",e[3]),V($,"resize",e[6]),V(t,"click",e[5]),V(c,"change",e[8]),V(c,"input",e[8])],_=!0)},p(r,[y]){y&2&&ie(c,r[1]),(!s||y&2)&&pe(I,r[1]),r[2]?o?y&4&&J(o,1):(o=le(),o.c(),J(o,1),o.m(g.parentNode,g)):o&&(Te(),te(o,1,1,()=>{o=null}),ve())},i(r){s||(J(o),s=!0)},o(r){te(o),s=!1},d(r){r&&p(n),r&&p(t),e[7](null),r&&p(a),r&&p(i),r&&p(f),r&&p(m),r&&p(u),o&&o.d(r),r&&p(g),_=!1,be(v)}}}const ce="^|&";function tt(e,n,t){let a,i,f,m,l=80,c={x:0,y:0},b=!1;const d=u=>{u instanceof MouseEvent?(c.x=u.clientX,c.y=u.clientY):(c.x=u.touches[0].clientX,c.y=u.touches[0].clientY),t(1,l-=.05)},E=()=>{if(!a){console.error("Canvas not initialized!");return}i=a.getContext("2d"),I()},I=()=>{f=t(0,a.width=window.innerWidth,a),m=t(0,a.height=window.innerHeight,a)},w=()=>{i.fillStyle="white",i.fillRect(0,0,f,m),i.fillStyle="black";const u=30,g=Math.ceil(f/u),s=Math.ceil(m/u),_=9,v=Math.pow(2,_*2),o=Math.round(Math.random()*v),r=Math.floor(Math.random()*ce.length),y=g*l/100/2,P=g-y,k=s*l/100/2,L=s-k,A=g*(100-l)/100/2,Y=Math.ceil(c.x/u),ne=Math.ceil(c.y/u),F=5;for(let B=y;B<P;B++){const Q=Math.round((Math.random()-.5)*F);for(let U=k+Q;U<L-Q;U++){const de=Math.round((Math.random()-.5)*F);if(!N(Y,ne,A,B+de,U+Q))continue;const he=B*u,_e=U*u;W(he,_e,u,o,r,_)}}},W=(u,g,s,_,v,o)=>{i.save(),i.translate(u+s/2,g+s/2);const r=s/o,y=_.toString(2),P=Math.floor(Math.random()*4)*Math.PI/2;i.rotate(P);for(let k=0;k<o;k++){const L=y[k];for(let A=0;A<o;A++){const Y=y[A+o];if(T(L,Y,v)){const F=-s/2+k*r,B=-s/2+A*r;i.fillRect(F,B,r,r)}}}i.restore()},T=(u,g,s)=>{const _=ce[s];return{"^":(o,r)=>o^r,"&":(o,r)=>o&r,"|":(o,r)=>o|r}[_](u,g)},N=(u,g,s,_,v)=>(u-_)*(u-_)+(g-v)*(g-v)<=s*s;Me(()=>{E(),w(),setTimeout(()=>{t(2,b=!0)},3e4),Oe(w,100)});const C=()=>{I(),Ye(w,100,{leading:!0})};function M(u){Ce[u?"unshift":"push"](()=>{a=u,t(0,a)})}function H(){l=Pe(this.value),t(1,l)}return[a,l,b,d,I,w,C,M,H]}class at extends ue{constructor(n){super(),fe(this,n,tt,et,me,{})}}export{at as default};
