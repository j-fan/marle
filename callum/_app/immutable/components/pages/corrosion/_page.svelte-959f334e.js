import{H as at,S as nt,i as st,s as ot,k as y,a as B,q as O,l as x,m as D,h as v,c as F,r as G,n as r,I as lt,b as W,F as f,J as Q,K as H,u as rt,A as X,L as it,o as ct,M as ut,N as dt,O as ht}from"../../../chunks/index-55255086.js";const mt=(i,c)=>{const d=setInterval(i,c);at(()=>{clearInterval(d)})},{window:Y}=ut;function ft(i){let c,d,a,n,o,w,l,g,I,R,b,p,E,P,_,V,q,L;return{c(){c=y("canvas"),d=B(),a=y("div"),n=y("div"),o=y("input"),w=B(),l=y("label"),g=O("Mask "),I=O(i[1]),R=O("%"),b=B(),p=y("h2"),E=O("I can feel my mind expanding..."),P=B(),_=y("img"),this.h()},l(t){c=x(t,"CANVAS",{id:!0,class:!0}),D(c).forEach(v),d=F(t),a=x(t,"DIV",{class:!0});var e=D(a);n=x(e,"DIV",{id:!0,class:!0});var s=D(n);o=x(s,"INPUT",{id:!0,type:!0,name:!0,min:!0,max:!0}),w=F(s),l=x(s,"LABEL",{for:!0});var u=D(l);g=G(u,"Mask "),I=G(u,i[1]),R=G(u,"%"),u.forEach(v),s.forEach(v),b=F(e),p=x(e,"H2",{class:!0});var M=D(p);E=G(M,"I can feel my mind expanding..."),M.forEach(v),P=F(e),_=x(e,"IMG",{id:!0,class:!0,alt:!0,src:!0}),e.forEach(v),this.h()},h(){r(c,"id","canvas"),r(c,"class","fixed"),r(o,"id","mask"),r(o,"type","range"),r(o,"name","mask"),r(o,"min",0),r(o,"max",100),r(l,"for","mask"),r(n,"id","debug"),r(n,"class","hidden"),r(p,"class","relative italic font-serif text-4xl weight font-black mx-32 my-32"),r(_,"id","silhouette"),r(_,"class","fixed bottom-0 m-auto left-0 right-0 opacity-70 hue-rotate-30"),r(_,"alt","silhouette"),lt(_.src,V="https://raw.githubusercontent.com/CallumHoward/marle-media/main/silhouette.png")||r(_,"src",V),r(a,"class","absolute")},m(t,e){W(t,c,e),i[6](c),W(t,d,e),W(t,a,e),f(a,n),f(n,o),Q(o,i[1]),f(n,w),f(n,l),f(l,g),f(l,I),f(l,R),f(a,b),f(a,p),f(p,E),f(a,P),f(a,_),q||(L=[H(Y,"mousemove",i[2]),H(Y,"resize",i[5]),H(c,"click",i[4]),H(o,"change",i[7]),H(o,"input",i[7])],q=!0)},p(t,[e]){e&2&&Q(o,t[1]),e&2&&rt(I,t[1])},i:X,o:X,d(t){t&&v(c),i[6](null),t&&v(d),t&&v(a),q=!1,it(L)}}}const Z="^|&";function pt(i,c,d){let a,n,o,w,l=80,g={x:0,y:0};const I=t=>{g.x=t.clientX,g.y=t.clientY,d(1,l-=.05)},R=()=>{if(!a){console.log("Canvas not initialized!");return}n=a.getContext("2d"),b()},b=()=>{o=d(0,a.width=window.innerWidth,a),w=d(0,a.height=window.innerHeight,a)},p=()=>{n.fillStyle="white",n.fillRect(0,0,o,w),n.fillStyle="black";const t=30,e=Math.ceil(o/t),s=Math.ceil(w/t),u=9,M=Math.pow(2,u*2),h=Math.round(Math.random()*M),m=Math.floor(Math.random()*Z.length),A=e*l/100/2,J=e-A,k=s*l/100/2,K=s-k,C=e*(100-l)/100/2,T=Math.ceil(g.x/t),j=Math.ceil(g.y/t),N=5;for(let S=A;S<J;S++){const U=Math.round((Math.random()-.5)*N);for(let z=k+U;z<K-U;z++){const $=Math.round((Math.random()-.5)*N);if(!_(T,j,C,S+$,z+U))continue;const tt=S*t,et=z*t;E(tt,et,t,h,m,u)}}},E=(t,e,s,u,M,h)=>{n.save(),n.translate(t+s/2,e+s/2);const m=s/h,A=u.toString(2),J=Math.floor(Math.random()*4)*Math.PI/2;n.rotate(J);for(let k=0;k<h;k++){const K=A[k];for(let C=0;C<h;C++){const T=A[C+h];if(P(K,T,M)){const N=-s/2+k*m,S=-s/2+C*m;n.fillRect(N,S,m,m)}}}n.restore()},P=(t,e,s)=>{const u=Z[s];return{"^":(h,m)=>h^m,"&":(h,m)=>h&m,"|":(h,m)=>h|m}[u](t,e)},_=(t,e,s,u,M)=>(t-u)*(t-u)+(e-M)*(e-M)<=s*s;ct(()=>{R(),p(),mt(()=>{p()},100)});const V=()=>{b(),p()};function q(t){dt[t?"unshift":"push"](()=>{a=t,d(0,a)})}function L(){l=ht(this.value),d(1,l)}return[a,l,I,b,p,V,q,L]}class Mt extends nt{constructor(c){super(),st(this,c,pt,ft,ot,{})}}export{Mt as default};
