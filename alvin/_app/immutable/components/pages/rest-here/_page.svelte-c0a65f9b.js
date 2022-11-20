import{S as me,i as _e,s as ve,o as ge,k as g,a as $,v as ye,q as se,H as be,l as E,h,c as F,m as b,w as we,r as ne,n as o,I as ie,p as ae,F as p,b as Z,x as Re,u as ce,f as ke,t as Se,y as De,A as de,J as Ee}from"../../../chunks/index-03aa718b.js";import{b as Q}from"../../../chunks/paths-47524592.js";function Pe(u){return ge(()=>{var n=n||{};n.Widget=function(l){function a(v){if(c[v])return c[v].exports;var i=c[v]={exports:{},id:v,loaded:!1};return l[v].call(i.exports,i,i.exports,a),i.loaded=!0,i.exports}var c={};return a.m=l,a.c=c,a.p="",a(0)}([function(l,a,c){function v(e){return!!(e===""||e&&e.charCodeAt&&e.substr)}function i(e){return!!(e&&e.constructor&&e.call&&e.apply)}function m(e){return!(!e||e.nodeType!==1||e.nodeName.toUpperCase()!=="IFRAME")}function L(e){var t,r=!1;for(t in M)if(M.hasOwnProperty(t)&&M[t]===e){r=!0;break}return r}function f(e){var t,r,s;for(t=0,r=k.length;t<r&&(s=e(k[t]),s!==!1);t++);}function w(e){var t,r,s,d="";for(e.substr(0,2)==="//"&&(e=window.location.protocol+e),s=e.split("/"),t=0,r=s.length;t<r&&t<3;t++)d+=s[t],t<2&&(d+="/");return d}function T(e){return e.contentWindow?e.contentWindow:e.contentDocument&&"parentWindow"in e.contentDocument?e.contentDocument.parentWindow:null}function P(e){var t,r=[];for(t in e)e.hasOwnProperty(t)&&r.push(e[t]);return r}function N(e,t,r){r.callbacks[e]=r.callbacks[e]||[],r.callbacks[e].push(t)}function q(e,t){var r,s=!0;return t.callbacks[e]=[],f(function(d){if(r=d.callbacks[e]||[],r.length)return s=!1,!1}),s}function R(e,t,r){var s,d,_=T(r);return!!_.postMessage&&(s=r.getAttribute("src").split("?")[0],d=JSON.stringify({method:e,value:t}),s.substr(0,2)==="//"&&(s=window.location.protocol+s),s=s.replace(/http:\/\/(w|wt).soundcloud.com/,"https://$1.soundcloud.com"),void _.postMessage(d,s))}function A(e){var t;return f(function(r){if(r.instance===e)return t=r,!1}),t}function J(e){var t;return f(function(r){if(T(r.element)===e)return t=r,!1}),t}function x(e,t){return function(r){var s=i(r),d=A(this),_=!s&&t?r:null,O=s&&!t?r:null;return O&&N(e,O,d),R(e,_,d.element),this}}function S(e,t,r){var s,d,_;for(s=0,d=t.length;s<d;s++)_=t[s],e[_]=x(_,r)}function ee(e,t,r){return e+"?url="+t+"&"+te(r)}function te(e){var t,r,s=[];for(t in e)e.hasOwnProperty(t)&&(r=e[t],s.push(t+"="+(t==="start_track"?parseInt(r,10):r?"true":"false")));return s.join("&")}function I(e,t,r){var s,d,_=e.callbacks[t]||[];for(s=0,d=_.length;s<d;s++)_[s].apply(e.instance,r);(L(t)||t===y.READY)&&(e.callbacks[t]=[])}function V(e){var t,r,s,d,_;try{r=JSON.parse(e.data)}catch{return!1}return t=J(e.source),s=r.method,d=r.value,(!t||K(e.origin)===K(t.domain))&&(t?(s===y.READY&&(t.isReady=!0,I(t,X),q(X,t)),s!==y.PLAY||t.playEventFired||(t.playEventFired=!0),s!==y.PLAY_PROGRESS||t.playEventFired||(t.playEventFired=!0,I(t,y.PLAY,[d])),_=[],d!==void 0&&_.push(d),void I(t,s,_)):(s===y.READY&&B.push(e.source),!1))}function K(e){return e.replace(D,"")}var Y,U,C,W=c(1),M=c(2),G=c(3),y=W.api,j=W.bridge,B=[],k=[],X="__LATE_BINDING__",z="http://wt.soundcloud.test:9200/",D=/^http(?:s?)/;window.addEventListener?window.addEventListener("message",V,!1):window.attachEvent("onmessage",V),l.exports=C=function(e,t,r){if(v(e)&&(e=document.getElementById(e)),!m(e))throw new Error("SC.Widget function should be given either iframe element or a string specifying id attribute of iframe element.");t&&(r=r||{},e.src=ee(z,t,r));var s,d,_=J(T(e));return _&&_.instance?_.instance:(s=B.indexOf(T(e))>-1,d=new Y(e),k.push(new U(d,e,s)),d)},C.Events=y,window.SC=window.SC||{},window.SC.Widget=C,U=function(e,t,r){this.instance=e,this.element=t,this.domain=w(t.getAttribute("src")),this.isReady=!!r,this.callbacks={}},Y=function(){},Y.prototype={constructor:Y,load(e,t){if(e){t=t||{};var r=this,s=A(this),d=s.element,_=d.src,O=_.substr(0,_.indexOf("?"));s.isReady=!1,s.playEventFired=!1,d.onload=function(){r.bind(y.READY,function(){var H,re=s.callbacks;for(H in re)re.hasOwnProperty(H)&&H!==y.READY&&R(j.ADD_LISTENER,H,s.element);t.callback&&t.callback()})},d.src=ee(O,e,t)}},bind(e,t){var r=this,s=A(this);return s&&s.element&&(e===y.READY&&s.isReady?setTimeout(t,1):s.isReady?(N(e,t,s),R(j.ADD_LISTENER,e,s.element)):N(X,function(){r.bind(e,t)},s)),this},unbind(e){var t,r=A(this);r&&r.element&&(t=q(e,r),e!==y.READY&&t&&R(j.REMOVE_LISTENER,e,r.element))}},S(Y.prototype,P(M)),S(Y.prototype,P(G),!0)},function(l,a){a.api={LOAD_PROGRESS:"loadProgress",PLAY_PROGRESS:"playProgress",PLAY:"play",PAUSE:"pause",FINISH:"finish",SEEK:"seek",READY:"ready",OPEN_SHARE_PANEL:"sharePanelOpened",CLICK_DOWNLOAD:"downloadClicked",CLICK_BUY:"buyClicked",ERROR:"error"},a.bridge={REMOVE_LISTENER:"removeEventListener",ADD_LISTENER:"addEventListener"}},function(l,a){l.exports={GET_VOLUME:"getVolume",GET_DURATION:"getDuration",GET_POSITION:"getPosition",GET_SOUNDS:"getSounds",GET_CURRENT_SOUND:"getCurrentSound",GET_CURRENT_SOUND_INDEX:"getCurrentSoundIndex",IS_PAUSED:"isPaused"}},function(l,a){l.exports={PLAY:"play",PAUSE:"pause",TOGGLE:"toggle",SEEK_TO:"seekTo",SET_VOLUME:"setVolume",NEXT:"next",PREV:"prev",SKIP:"skip"}}])}),[]}class Ae extends me{constructor(n){super(),_e(this,n,Pe,null,ve,{})}}var oe=(u=>(u.LOAD_PROGRESS="loadProgress",u.PLAY_PROGRESS="playProgress",u.PLAY="play",u.PAUSE="pause",u.FINISH="finish",u.SEEK="seek",u.ERROR="error",u.READY="ready",u))(oe||{});const ue=u=>{const n=new Date(u),l=n.getMinutes(),a=n.getSeconds();return a<10?`${l}:0${a}`:`${l}:${a}`};function Ie(u){let n,l;return{c(){n=g("p"),l=se("Loading..."),this.h()},l(a){n=E(a,"P",{class:!0});var c=b(n);l=ne(c,"Loading..."),c.forEach(h),this.h()},h(){o(n,"class","svelte-1qxpme9")},m(a,c){Z(a,n,c),p(n,l)},p:de,d(a){a&&h(n)}}}function Oe(u){let n,l,a=u[3].title+"",c,v,i,m=u[3].title+"",L;return{c(){n=g("div"),l=g("p"),c=se(a),v=$(),i=g("p"),L=se(m),this.h()},l(f){n=E(f,"DIV",{class:!0});var w=b(n);l=E(w,"P",{class:!0});var T=b(l);c=ne(T,a),T.forEach(h),v=F(w),i=E(w,"P",{class:!0});var P=b(i);L=ne(P,m),P.forEach(h),w.forEach(h),this.h()},h(){o(l,"class","svelte-1qxpme9"),o(i,"class","svelte-1qxpme9"),o(n,"class","svelte-1qxpme9")},m(f,w){Z(f,n,w),p(n,l),p(l,c),p(n,v),p(n,i),p(i,L)},p(f,w){w&8&&a!==(a=f[3].title+"")&&ce(c,a),w&8&&m!==(m=f[3].title+"")&&ce(L,m)},d(f){f&&h(n)}}}function Le(u){let n,l,a,c,v;return{c(){n=g("button"),l=g("img"),this.h()},l(i){n=E(i,"BUTTON",{type:!0,class:!0});var m=b(n);l=E(m,"IMG",{src:!0,class:!0,alt:!0}),m.forEach(h),this.h()},h(){ie(l.src,a=Q+"/pause-button.png")||o(l,"src",a),o(l,"class","pause-play-btn svelte-1qxpme9"),o(l,"alt","pause"),o(n,"type","button"),o(n,"class","svelte-1qxpme9")},m(i,m){Z(i,n,m),p(n,l),c||(v=Ee(n,"click",u[4]),c=!0)},p:de,d(i){i&&h(n),c=!1,v()}}}function Te(u){let n,l,a,c,v;return{c(){n=g("button"),l=g("img"),this.h()},l(i){n=E(i,"BUTTON",{type:!0,class:!0});var m=b(n);l=E(m,"IMG",{src:!0,class:!0,alt:!0}),m.forEach(h),this.h()},h(){ie(l.src,a=Q+"/play-button.png")||o(l,"src",a),o(l,"class","pause-play-btn svelte-1qxpme9"),o(l,"alt","play"),o(n,"type","button"),o(n,"class","svelte-1qxpme9")},m(i,m){Z(i,n,m),p(n,l),c||(v=Ee(n,"click",u[4]),c=!0)},p:de,d(i){i&&h(n),c=!1,v()}}}function Ne(u){let n,l,a,c,v,i,m,L,f,w,T,P,N,q,R,A,J,x,S,ee,te,I,V,K,Y,U,C=(u[3]?ue(u[3].duration):"0:00")+"",W,M,G,y;m=new Ae({});function j(e,t){return e[3]?Oe:Ie}let B=j(u),k=B(u);function X(e,t){return e[0]?Te:Le}let z=X(u),D=z(u);return{c(){n=g("link"),l=g("link"),a=g("link"),c=g("link"),v=$(),i=g("div"),ye(m.$$.fragment),L=$(),f=g("iframe"),T=$(),P=g("div"),N=g("div"),q=g("div"),R=g("div"),A=g("div"),k.c(),J=$(),x=g("div"),S=g("img"),te=$(),I=g("div"),V=g("p"),K=se(u[2]),Y=$(),U=g("p"),W=se(C),M=$(),G=g("div"),D.c(),this.h()},l(e){const t=be('[data-svelte="svelte-131klwc"]',document.head);n=E(t,"LINK",{rel:!0,href:!0}),l=E(t,"LINK",{rel:!0,href:!0,crossorigin:!0}),a=E(t,"LINK",{href:!0,rel:!0}),c=E(t,"LINK",{rel:!0,as:!0,href:!0}),t.forEach(h),v=F(e),i=E(e,"DIV",{class:!0});var r=b(i);we(m.$$.fragment,r),L=F(r),f=E(r,"IFRAME",{id:!0,width:!0,height:!0,scrolling:!0,frameborder:!0,title:!0,allow:!0,src:!0,class:!0}),b(f).forEach(h),T=F(r),P=E(r,"DIV",{class:!0});var s=b(P);N=E(s,"DIV",{class:!0,style:!0});var d=b(N);q=E(d,"DIV",{class:!0});var _=b(q);R=E(_,"DIV",{class:!0});var O=b(R);A=E(O,"DIV",{class:!0});var H=b(A);k.l(H),H.forEach(h),J=F(O),x=E(O,"DIV",{class:!0,style:!0});var re=b(x);S=E(re,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0,style:!0}),re.forEach(h),te=F(O),I=E(O,"DIV",{class:!0});var le=b(I);V=E(le,"P",{});var pe=b(V);K=ne(pe,u[2]),pe.forEach(h),Y=F(le),U=E(le,"P",{});var fe=b(U);W=ne(fe,C),fe.forEach(h),le.forEach(h),O.forEach(h),M=F(_),G=E(_,"DIV",{class:!0});var he=b(G);D.l(he),he.forEach(h),_.forEach(h),d.forEach(h),s.forEach(h),r.forEach(h),this.h()},h(){o(n,"rel","preconnect"),o(n,"href","https://fonts.googleapis.com"),o(l,"rel","preconnect"),o(l,"href","https://fonts.gstatic.com"),o(l,"crossorigin","anonymous"),o(a,"href","https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap"),o(a,"rel","stylesheet"),o(c,"rel","preload"),o(c,"as","image"),o(c,"href",Q+"/pause-button.png"),o(f,"id","soundcloud"),o(f,"width","100%"),o(f,"height","166"),o(f,"scrolling","no"),o(f,"frameborder","no"),o(f,"title","SoundCloud"),o(f,"allow","autoplay"),ie(f.src,w="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1528939585&color=0066CC&show_artwork=true&buying=false&sharing=false&show_playcount=false&download=false")||o(f,"src",w),o(f,"class","svelte-1qxpme9"),o(A,"class","song-title svelte-1qxpme9"),o(S,"class","track-thumb svelte-1qxpme9"),ie(S.src,ee=Q+"/track-thumb.png")||o(S,"src",ee),o(S,"alt","track thumb"),o(S,"width","28px"),o(S,"height","28px"),ae(S,"left",u[1]+"%"),o(x,"class","track svelte-1qxpme9"),ae(x,"background-image","url('"+Q+"/track.png')"),o(I,"class","timestamp svelte-1qxpme9"),o(R,"class","time-info svelte-1qxpme9"),o(G,"class","button-wrapper svelte-1qxpme9"),o(q,"class","player-controls svelte-1qxpme9"),o(N,"class","music-player svelte-1qxpme9"),ae(N,"background-image","url('"+Q+"/rest-here.jpg')"),o(P,"class","music-player-wrapper svelte-1qxpme9"),o(i,"class","container svelte-1qxpme9")},m(e,t){p(document.head,n),p(document.head,l),p(document.head,a),p(document.head,c),Z(e,v,t),Z(e,i,t),Re(m,i,null),p(i,L),p(i,f),p(i,T),p(i,P),p(P,N),p(N,q),p(q,R),p(R,A),k.m(A,null),p(R,J),p(R,x),p(x,S),p(R,te),p(R,I),p(I,V),p(V,K),p(I,Y),p(I,U),p(U,W),p(q,M),p(q,G),D.m(G,null),y=!0},p(e,[t]){B===(B=j(e))&&k?k.p(e,t):(k.d(1),k=B(e),k&&(k.c(),k.m(A,null))),(!y||t&2)&&ae(S,"left",e[1]+"%"),(!y||t&4)&&ce(K,e[2]),(!y||t&8)&&C!==(C=(e[3]?ue(e[3].duration):"0:00")+"")&&ce(W,C),z===(z=X(e))&&D?D.p(e,t):(D.d(1),D=z(e),D&&(D.c(),D.m(G,null)))},i(e){y||(ke(m.$$.fragment,e),y=!0)},o(e){Se(m.$$.fragment,e),y=!1},d(e){h(n),h(l),h(a),h(c),e&&h(v),e&&h(i),De(m),k.d(),D.d()}}}function qe(u,n,l){let a,c=!0,v=0,i="0:00",m;return ge(async()=>(a=window.SC.Widget("soundcloud"),a.bind(oe.PLAY_PROGRESS,f=>{const w=f;l(1,v=w.relativePosition||0),l(2,i=ue(w.currentPosition))}),a.bind(oe.READY,()=>{a.getCurrentSound(f=>{l(3,m=f)})}),()=>{a.unbind(oe.PLAY_PROGRESS),l(0,c=!0)})),[c,v,i,m,()=>{a.toggle(),l(0,c=!c)}]}class Ce extends me{constructor(n){super(),_e(this,n,qe,Ne,ve,{})}}export{Ce as default};
