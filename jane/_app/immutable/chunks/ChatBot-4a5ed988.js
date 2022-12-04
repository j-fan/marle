import{Q as ce,S as x,i as ee,s as A,e as F,b as D,g as M,t as k,d as S,f as g,h as d,R as te,E as le,k as y,l as w,m as E,n as b,p as W,M as $,F as ne,G as se,H as oe,I as v,o as ue,T as R,U as ie,C as fe,V as _e,A as he,W as G,q as T,a as H,r as U,c as P,u as re,N as de,D as me,v as pe,w as ge,x as be,y as ke}from"./index-b840aef8.js";function ve(s){const e=.36363636363636365,l=8/11,t=9/10,i=4356/361,a=35442/1805,n=16061/1805,o=s*s;return s<e?7.5625*o:s<l?9.075*o-9.9*s+3.4:s<t?i*o-a*s+n:10.8*s*s-20.52*s+10.72}function ye(s){const e=s-1;return e*e*e+1}function je(s){return-.5*(Math.cos(Math.PI*s)-1)}function we(s,{delay:e=0,duration:l=400,easing:t=ce}={}){const i=+getComputedStyle(s).opacity;return{delay:e,duration:l,easing:t,css:a=>`opacity: ${a*i}`}}function q(s,{delay:e=0,duration:l=400,easing:t=ye,x:i=0,y:a=0,opacity:n=0}={}){const o=getComputedStyle(s),r=+o.opacity,c=o.transform==="none"?"":o.transform,u=r*(1-n);return{delay:e,duration:l,easing:t,css:(C,I)=>`
			transform: ${c} translate(${(1-C)*i}px, ${(1-C)*a}px);
			opacity: ${r-u*I}`}}function Ee(s){let e,l,t,i;const a=s[4].default,n=le(a,s,s[3],null);return{c(){e=y("button"),n&&n.c(),this.h()},l(o){e=w(o,"BUTTON",{type:!0,style:!0,class:!0});var r=E(e);n&&n.l(r),r.forEach(d),this.h()},h(){b(e,"type","button"),W(e,"width",s[1]),b(e,"class","svelte-1rsnc9j")},m(o,r){D(o,e,r),n&&n.m(e,null),l=!0,t||(i=$(e,"click",s[5]),t=!0)},p(o,r){n&&n.p&&(!l||r&8)&&ne(n,a,o,o[3],l?oe(a,o[3],r,null):se(o[3]),null)},i(o){l||(g(n,o),l=!0)},o(o){k(n,o),l=!1},d(o){o&&d(e),n&&n.d(o),t=!1,i()}}}function Ce(s){let e,l,t;const i=s[4].default,a=le(i,s,s[3],null);return{c(){e=y("a"),l=y("button"),a&&a.c(),this.h()},l(n){e=w(n,"A",{href:!0,style:!0,class:!0});var o=E(e);l=w(o,"BUTTON",{type:!0,style:!0,class:!0});var r=E(l);a&&a.l(r),r.forEach(d),o.forEach(d),this.h()},h(){b(l,"type","button"),W(l,"width",s[1]),b(l,"class","svelte-1rsnc9j"),b(e,"href",s[0]),W(e,"width",s[1]),b(e,"class","svelte-1rsnc9j")},m(n,o){D(n,e,o),v(e,l),a&&a.m(l,null),t=!0},p(n,o){a&&a.p&&(!t||o&8)&&ne(a,i,n,n[3],t?oe(i,n[3],o,null):se(n[3]),null),(!t||o&1)&&b(e,"href",n[0])},i(n){t||(g(a,n),t=!0)},o(n){k(a,n),t=!1},d(n){n&&d(e),a&&a.d(n)}}}function De(s){let e,l,t,i;const a=[Ce,Ee],n=[];function o(r,c){return r[0]?0:1}return e=o(s),l=n[e]=a[e](s),{c(){l.c(),t=F()},l(r){l.l(r),t=F()},m(r,c){n[e].m(r,c),D(r,t,c),i=!0},p(r,[c]){let u=e;e=o(r),e===u?n[e].p(r,c):(M(),k(n[u],1,1,()=>{n[u]=null}),S(),l=n[e],l?l.p(r,c):(l=n[e]=a[e](r),l.c()),g(l,1),l.m(t.parentNode,t))},i(r){i||(g(l),i=!0)},o(r){k(l),i=!1},d(r){n[e].d(r),r&&d(t)}}}function Ie(s,e,l){let{$$slots:t={},$$scope:i}=e,{isFullWidth:a=!1}=e,{href:n=void 0}=e;const o=a?"100%":"auto";function r(c){te.call(this,s,c)}return s.$$set=c=>{"isFullWidth"in c&&l(2,a=c.isFullWidth),"href"in c&&l(0,n=c.href),"$$scope"in c&&l(3,i=c.$$scope)},[n,o,a,i,t,r]}class Oe extends x{constructor(e){super(),ee(this,e,Ie,De,A,{isFullWidth:2,href:0})}}const K=(s,e)=>{const l=s[e];return l===void 0?(console.error(`Dialog key ${String(e)} is unknown in dialogData`),{text:`Something went wrong with the dialog logic: "${String(e)}" key is unknown`,options:[]}):l};function Q(s,e,l){const t=s.slice();return t[7]=e[l],t}function z(s){let e,l,t,i,a,n=s[1]&&J(s);return{c(){e=y("div"),n&&n.c(),this.h()},l(o){e=w(o,"DIV",{class:!0,style:!0});var r=E(e);n&&n.l(r),r.forEach(d),this.h()},h(){b(e,"class","marle-icon svelte-1k1r9r8"),W(e,"background-image","url('https://raw.githubusercontent.com/j-fan/marle-images/main/jane/img/marle_green.jpg')")},m(o,r){D(o,e,r),n&&n.m(e,null),t=!0,i||(a=[$(e,"introend",s[3]),$(e,"click",s[3])],i=!0)},p(o,r){s=o,s[1]?n?(n.p(s,r),r&2&&g(n,1)):(n=J(s),n.c(),g(n,1),n.m(e,null)):n&&(M(),k(n,1,1,()=>{n=null}),S())},i(o){t||(g(n),l||R(()=>{l=ie(e,q,{y:40,duration:1e3,easing:ve}),l.start()}),t=!0)},o(o){k(n),t=!1},d(o){o&&d(e),n&&n.d(),i=!1,fe(a)}}}function J(s){let e,l=s[2],t,i,a,n,o=Z(s);return{c(){e=y("div"),o.c(),this.h()},l(r){e=w(r,"DIV",{class:!0});var c=E(e);o.l(c),c.forEach(d),this.h()},h(){b(e,"class","chat-wrapper svelte-1k1r9r8")},m(r,c){D(r,e,c),o.m(e,null),i=!0,a||(n=$(e,"click",_e(s[6])),a=!0)},p(r,c){c&4&&A(l,l=r[2])?(M(),k(o,1,1,he),S(),o=Z(r),o.c(),g(o,1),o.m(e,null)):o.p(r,c)},i(r){i||(g(o),R(()=>{t||(t=G(e,q,{y:20,duration:300,delay:500},!0)),t.run(1)}),i=!0)},o(r){k(o),t||(t=G(e,q,{y:20,duration:300,delay:500},!1)),t.run(0),i=!1},d(r){r&&d(e),o.d(r),r&&t&&t.end(),a=!1,n()}}}function L(s){let e,l;return{c(){e=y("h4"),l=T("YOU"),this.h()},l(t){e=w(t,"H4",{class:!0});var i=E(e);l=U(i,"YOU"),i.forEach(d),this.h()},h(){b(e,"class","svelte-1k1r9r8")},m(t,i){D(t,e,i),v(e,l)},d(t){t&&d(e)}}}function Ve(s){let e=s[7].text+"",l;return{c(){l=T(e)},l(t){l=U(t,e)},m(t,i){D(t,l,i)},p(t,i){i&4&&e!==(e=t[7].text+"")&&re(l,e)},d(t){t&&d(l)}}}function X(s){let e,l;return e=new Oe({props:{isFullWidth:!0,$$slots:{default:[Ve]},$$scope:{ctx:s}}}),e.$on("click",function(){me(s[4](s[7]))&&s[4](s[7]).apply(this,arguments)}),{c(){pe(e.$$.fragment)},l(t){ge(e.$$.fragment,t)},m(t,i){be(e,t,i),l=!0},p(t,i){s=t;const a={};i&1028&&(a.$$scope={dirty:i,ctx:s}),e.$set(a)},i(t){l||(g(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){ke(e,t)}}}function Z(s){let e,l,t,i,a,n,o=s[2].text+"",r,c,u,C,I,O,m=s[2].options.length>0&&L(),V=s[2].options,h=[];for(let f=0;f<V.length;f+=1)h[f]=X(Q(s,V,f));const ae=f=>k(h[f],1,1,()=>{h[f]=null});return{c(){e=y("div"),l=y("div"),t=y("h4"),i=T("Marle"),a=H(),n=y("p"),r=T(o),c=H(),u=y("div"),m&&m.c(),C=H();for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){e=w(f,"DIV",{class:!0});var p=E(e);l=w(p,"DIV",{class:!0});var _=E(l);t=w(_,"H4",{class:!0});var B=E(t);i=U(B,"Marle"),B.forEach(d),a=P(_),n=w(_,"P",{});var Y=E(n);r=U(Y,o),Y.forEach(d),_.forEach(d),c=P(p),u=w(p,"DIV",{class:!0});var j=E(u);m&&m.l(j),C=P(j);for(let N=0;N<h.length;N+=1)h[N].l(j);j.forEach(d),p.forEach(d),this.h()},h(){b(t,"class","svelte-1k1r9r8"),b(l,"class","dialog-item left svelte-1k1r9r8"),b(u,"class","dialog-item right svelte-1k1r9r8"),b(e,"class","chat-content svelte-1k1r9r8")},m(f,p){D(f,e,p),v(e,l),v(l,t),v(t,i),v(l,a),v(l,n),v(n,r),v(e,c),v(e,u),m&&m.m(u,null),v(u,C);for(let _=0;_<h.length;_+=1)h[_].m(u,null);O=!0},p(f,p){if((!O||p&4)&&o!==(o=f[2].text+"")&&re(r,o),f[2].options.length>0?m||(m=L(),m.c(),m.m(u,C)):m&&(m.d(1),m=null),p&20){V=f[2].options;let _;for(_=0;_<V.length;_+=1){const B=Q(f,V,_);h[_]?(h[_].p(B,p),g(h[_],1)):(h[_]=X(B),h[_].c(),g(h[_],1),h[_].m(u,null))}for(M(),_=V.length;_<h.length;_+=1)ae(_);S()}},i(f){if(!O){for(let p=0;p<V.length;p+=1)g(h[p]);I||R(()=>{I=ie(e,we,{duration:400}),I.start()}),O=!0}},o(f){h=h.filter(Boolean);for(let p=0;p<h.length;p+=1)k(h[p]);O=!1},d(f){f&&d(e),m&&m.d(),de(h,f)}}}function Be(s){let e,l,t=s[0]&&z(s);return{c(){t&&t.c(),e=F()},l(i){t&&t.l(i),e=F()},m(i,a){t&&t.m(i,a),D(i,e,a),l=!0},p(i,[a]){i[0]?t?(t.p(i,a),a&1&&g(t,1)):(t=z(i),t.c(),g(t,1),t.m(e.parentNode,e)):t&&(M(),k(t,1,1,()=>{t=null}),S())},i(i){l||(g(t),l=!0)},o(i){k(t),l=!1},d(i){t&&t.d(i),i&&d(e)}}}function Me(s,e,l){let{dialogData:t}=e,i=!1,a=!1,n=t.start;ue(()=>{l(0,i=!0)});const o=()=>{l(1,a=!a)},r=u=>async C=>{var O,m;C.stopPropagation(),l(2,n=K(t,u.nextKey));const I=await((O=n.onMount)==null?void 0:O.call(n));I&&l(2,n=K(t,I)),(m=u.onClick)==null||m.call(u)};function c(u){te.call(this,s,u)}return s.$$set=u=>{"dialogData"in u&&l(5,t=u.dialogData)},[i,a,n,o,r,t,c]}class Fe extends x{constructor(e){super(),ee(this,e,Me,Be,A,{dialogData:5})}}export{Fe as C,we as f,je as s};