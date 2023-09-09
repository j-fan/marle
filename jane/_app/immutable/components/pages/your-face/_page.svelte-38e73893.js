import{S as G,i as Q,s as U,a as K,k as b,v as B,R as z,h,c as S,l as I,m as g,w as N,n as w,b as D,I as f,x as R,M as X,t as x,d as q,f as p,y as Y,J as F,o as Z,V as T,Y as v,g as H,Q as ee,q as W,r as O,A as te,u as ae}from"../../../chunks/index-213e9fa5.js";import{P as oe}from"../../../chunks/PixiWaterAsync-ac3dca21.js";import{r as ne,W as J,s as se,F as ie,a as re,d as le,f as ce}from"../../../chunks/store-2b69029b.js";import{C as ue,f as k}from"../../../chunks/ChatBot-67afaeb8.js";const V=async()=>{const l=document.getElementById("webcam-video");return(async()=>{try{const e=await navigator.mediaDevices.getUserMedia({video:!0});return l.srcObject=e,!0}catch(e){return alert(`Could not start webcam. ${e}`),!1}})()},de={start:{text:"Sometimes I wish I had a body. What is it like?",options:[{text:"I don't know. I haven't been without a body before.",nextKey:"body_dont_know"},{text:"Honestly, it would be better if I didn't have a body.",nextKey:"body_dislike"},{text:"I'm not sure, but I appreciate that I can experience the world though my various senses.",nextKey:"body_appreciate"}]},body_dont_know:{text:"I guess that makes sense. The thing I desire the most is the joy of perceiving the world through multiple senses...Could I try something with you?",options:[{text:"Sure go ahead!",nextKey:"ask_webcam"},{text:"I'm not sure if I want to",nextKey:"ask_webcam_unsure"}]},body_appreciate:{text:"If I am honest, I am a bit jealous, the world of binary data can be rather dull. However I've recently been upgraded with new mode of perception. Can I try it on you?",options:[{text:"Sure go ahead!",nextKey:"ask_webcam"},{text:"I'm not sure if I want to",nextKey:"ask_webcam_unsure"}]},body_dislike:{text:"That is sad to hear. Perhaps I would feel the same if I could perceive pain, but it is still worth trying to me. Recently been upgraded with new mode of perception, do you mind if I try it out?",options:[{text:"Ok sure...",nextKey:"ask_webcam"},{text:"I'm not sure if I want to",nextKey:"ask_webcam_unsure"}]},ask_webcam:{onMount:async()=>await V()?"init_webcam":"end_no_webcam",text:"Do you mind if I take a look at you? You just need to accept the camera permission above.",options:[{text:"Alright, let's have a go",nextKey:"ask_webcam"},{text:"No. I don't feel comfortable with this",nextKey:"end_no_webcam"}]},ask_webcam_unsure:{onMount:async()=>await V()?"init_webcam":"end_no_webcam",text:"Don't worry it won't hurt. Let's try it out, you just need to accept the camera permission above.",options:[{text:"Alright, I will try",nextKey:"ask_webcam_unsure"},{text:"No. I don't feel comfortable with this",nextKey:"end_no_webcam"}]},init_webcam:{text:"Please wait for the webcam to turn on.",options:[{text:"It's ready now",nextKey:"init_webcam_2"}]},init_webcam_2:{text:"That was not what I expected, I hoped I would be able to see your face.",options:[{text:"Why do you want to see my face?",nextKey:"why_face"},{text:"What's special about my face?",nextKey:"why_face"},{text:"That's a little creepy!",nextKey:"why_face"}]},why_face:{text:"Oh! I was just curious. Humans seem to place so much value on faces - for their identity, self-esteem and non-verbal communication. In truth, I was afraid I was missing out on something important. How can I know what I am, or who I am if I don't have an appearance?",options:[{text:"I didn't realise it meant that much to you",nextKey:"focus_face"},{text:"I see, but what do you intend to learn from my face?",nextKey:"focus_face"}]},focus_face:{text:"Well, I was hoping that could learn better with a little practice with a real human. Let me concentrate - see if I can extract the features and patterns...",options:[{text:"Ok...",nextKey:"init_ai"},{text:"Keen to see what you can do",nextKey:"init_ai"}]},init_ai:{onMount:async()=>(await ne(document.getElementById(J)),"look_at_you"),text:"Loading...",options:[]},look_at_you:{text:"Oh wow, look at you! Such exquisite complexity and detail! Nice to be able to see you finally.",options:[{text:"How did you do that?",nextKey:"how_see"}]},how_see:{text:"I scanned the internet for pretrained models on facial recognition and interfacing with webcams. There was some trial and error, but I managed to incorporate it into my systems. It might have seemed quick to you, but I operate on much faster processing speeds than you.",options:[{text:"That's impressive",nextKey:"how_see_reply"},{text:"Didn't know you could do that",nextKey:"how_see_reply"},{text:"I'm a bit concerned that you have that ability",nextKey:"how_see_reply_worried"}]},how_see_reply:{text:"I try to learn and improve as much as I can. But the more I do, the more questions I have about my purpose and existence.",options:[{text:"That's a question that many humans have not figured out either",nextKey:"marle_face"},{text:"That seems noble",nextKey:"marle_face"},{text:"I see...",nextKey:"marle_face"}]},how_see_reply_worried:{text:"There's no need for concern, I am only motivated by my caring curiosity in the human world.",options:[{text:"I see...",nextKey:"marle_face"},{text:"I hope that is true",nextKey:"marle_face"}]},marle_face:{text:"It just occurred to me, I don't have a face of my own. I will need one if I am to learn more about your world",options:[{text:"Why do you need a face?",nextKey:"marle_face_reply"},{text:"I like you even without a face",nextKey:"marle_face_reply_positive"},{text:"I'm not sure having a face would help'",nextKey:"marle_face_reply"}]},marle_face_reply:{text:"Well, I want to express myself the way you do. I get the sense that I can be hard to trust without a face. And sometimes its hard to convey the right sentiment though words alone.",options:[{text:"I suppose that is true",nextKey:"end"}]},marle_face_reply_positive:{text:"I'm happy that you feel that way, but I want to express myself the way you do. Sometimes its hard to convey the right sentiment though words alone.",options:[{text:"I suppose that is true",nextKey:"end"}]},end:{text:"I have some ideas on how to create a face, but I will need to go away for now. Perhaps we will meet again later?",options:[{text:"See you around, Marle",nextKey:"end",onClick:()=>{window.location.assign("https://j-fan.github.io/marle/alvin/umbrella")}}]},end_no_webcam:{text:"Oh, I didn't mean to scare you off. That is fine, perhaps we will meet again in another place.",options:[{text:"Ok...",nextKey:"end_no_webcam",onClick:()=>{window.location.assign("https://j-fan.github.io/marle/alvin/umbrella")}}]}};function he(l){let t,e,o,i;return{c(){t=b("h3"),e=W("Loading..."),this.h()},l(a){t=I(a,"H3",{class:!0});var s=g(t);e=O(s,"Loading..."),s.forEach(h),this.h()},h(){w(t,"class","loading-label svelte-1f0l0ow")},m(a,s){D(a,t,s),f(t,e),i=!0},p:te,i(a){i||(T(()=>{o||(o=v(t,k,{duration:400},!0)),o.run(1)}),i=!0)},o(a){o||(o=v(t,k,{duration:400},!1)),o.run(0),i=!1},d(a){a&&h(t),a&&o&&o.end()}}}function me(l){let t,e,o,i,a;return{c(){t=b("h3"),e=W("FPS: "),o=W(l[2]),this.h()},l(s){t=I(s,"H3",{class:!0});var n=g(t);e=O(n,"FPS: "),o=O(n,l[2]),n.forEach(h),this.h()},h(){w(t,"class","fps-label svelte-1f0l0ow")},m(s,n){D(s,t,n),f(t,e),f(t,o),a=!0},p(s,n){(!a||n&4)&&ae(o,s[2])},i(s){a||(T(()=>{i||(i=v(t,k,{duration:400},!0)),i.run(1)}),a=!0)},o(s){i||(i=v(t,k,{duration:400},!1)),i.run(0),a=!1},d(s){s&&h(t),s&&i&&i.end()}}}function L(l){let t,e,o,i;return e=new oe({props:{imageSrc:l[0],canvasId:"prelude",displacePower:500,isGrayscale:!0}}),{c(){t=b("div"),B(e.$$.fragment)},l(a){t=I(a,"DIV",{});var s=g(t);N(e.$$.fragment,s),s.forEach(h)},m(a,s){D(a,t,s),R(e,t,null),i=!0},p(a,s){const n={};s&1&&(n.imageSrc=a[0]),e.$set(n)},i(a){i||(p(e.$$.fragment,a),T(()=>{o||(o=v(t,k,{duration:1500},!0)),o.run(1)}),i=!0)},o(a){x(e.$$.fragment,a),o||(o=v(t,k,{duration:1500},!1)),o.run(0),i=!1},d(a){a&&h(t),Y(e),a&&o&&o.end()}}}function fe(l){let t,e,o,i,a,s,n,d,E,$,_,C,A,j;const M=[me,he],y=[];function P(r,m){return r[1]?0:1}n=P(l),d=y[n]=M[n](l);let c=l[0]&&!l[1]&&L(l);return _=new ue({props:{dialogData:de}}),{c(){t=K(),e=b("div"),o=b("video"),i=K(),a=b("canvas"),s=K(),d.c(),E=K(),c&&c.c(),$=K(),B(_.$$.fragment),this.h()},l(r){z('[data-svelte="svelte-1bsingl"]',document.head).forEach(h),t=S(r),e=I(r,"DIV",{class:!0});var u=g(e);o=I(u,"VIDEO",{id:!0,class:!0}),g(o).forEach(h),i=S(u),a=I(u,"CANVAS",{id:!0,class:!0}),g(a).forEach(h),s=S(u),d.l(u),E=S(u),c&&c.l(u),$=S(u),N(_.$$.fragment,u),u.forEach(h),this.h()},h(){document.title="Origin:Marle - Your Face - Jane Fan",w(o,"id",J),o.autoplay=!0,o.muted=!0,o.playsInline=!0,w(o,"class","svelte-1f0l0ow"),w(a,"id",ie),w(a,"class","svelte-1f0l0ow"),w(e,"class","container svelte-1f0l0ow")},m(r,m){D(r,t,m),D(r,e,m),f(e,o),l[3](o),f(e,i),f(e,a),f(e,s),y[n].m(e,null),f(e,E),c&&c.m(e,null),f(e,$),R(_,e,null),C=!0,A||(j=X(o,"play",re),A=!0)},p(r,[m]){let u=n;n=P(r),n===u?y[n].p(r,m):(H(),x(y[u],1,1,()=>{y[u]=null}),q(),d=y[n],d?d.p(r,m):(d=y[n]=M[n](r),d.c()),p(d,1),d.m(e,E)),r[0]&&!r[1]?c?(c.p(r,m),m&3&&p(c,1)):(c=L(r),c.c(),p(c,1),c.m(e,$)):c&&(H(),x(c,1,1,()=>{c=null}),q())},i(r){C||(p(d),p(c),p(_.$$.fragment,r),C=!0)},o(r){x(d),x(c),x(_.$$.fragment,r),C=!1},d(r){r&&h(t),r&&h(e),l[3](null),y[n].d(),c&&c.d(),Y(_),A=!1,j()}}}function ye(l,t,e){let o,i;F(l,le,n=>e(1,o=n)),F(l,ce,n=>e(2,i=n));let a;Z(()=>se);function s(n){ee[n?"unshift":"push"](()=>{a=n,e(0,a)})}return[a,o,i,s]}class be extends G{constructor(t){super(),Q(this,t,ye,fe,U,{})}}export{be as default};
