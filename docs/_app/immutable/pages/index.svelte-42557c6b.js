import{K as re,S as R,i as A,s as G,e as y,c as k,a as L,d as h,b,g as m,o as D,p as g,q as C,r as p,l as P,x as z,y as j,z as S,A as oe,B as ie,C as V,t as B,h as O,J as E,j as se,n as q,D as ae,f as ce,L as fe,F as ue,k as N,m as T,G as de,H as _e,I as he,M as pe,N as ge,O as me,P as be}from"../chunks/index-ca111bab.js";import{a as ve}from"../chunks/paths-c0fc83a9.js";var ye=["peri.png","pero.png","noi.png","eri.png","poi.png","ron.png","poni.png","proni.png","peni.png","aero.png","eroi.png","per.png","perni.png","pro.png","eoni.png"];function ke(o,{delay:e=0,duration:l=400,easing:t=re}={}){const r=+getComputedStyle(o).opacity;return{delay:e,duration:l,easing:t,css:s=>`opacity: ${s*r}`}}function J(o){let e,l,t,r,s;const u=[Le,we],f=[];function i(a,n){return n&1&&(l=null),typeof a[0]=="string"?0:(l==null&&(l=!!["function","object"].includes(typeof a[0])),l?1:-1)}return~(t=i(o,-1))&&(r=f[t]=u[t](o)),{c(){e=y("div"),r&&r.c(),this.h()},l(a){e=k(a,"DIV",{class:!0});var n=L(e);r&&r.l(n),n.forEach(h),this.h()},h(){b(e,"class",Pe)},m(a,n){m(a,e,n),~t&&f[t].m(e,null),s=!0},p(a,n){let c=t;t=i(a,n),t===c?~t&&f[t].p(a,n):(r&&(D(),g(f[c],1,1,()=>{f[c]=null}),C()),~t?(r=f[t],r?r.p(a,n):(r=f[t]=u[t](a),r.c()),p(r,1),r.m(e,null)):r=null)},i(a){s||(p(r),s=!0)},o(a){g(r),s=!1},d(a){a&&h(e),~t&&f[t].d()}}}function we(o){let e,l,t;const r=[o[1]];var s=o[0];function u(f){let i={};for(let a=0;a<r.length;a+=1)i=ae(i,r[a]);return{props:i}}return s&&(e=new s(u())),{c(){e&&z(e.$$.fragment),l=P()},l(f){e&&j(e.$$.fragment,f),l=P()},m(f,i){e&&S(e,f,i),m(f,l,i),t=!0},p(f,i){const a=i&2?oe(r,[ie(f[1])]):{};if(s!==(s=f[0])){if(e){D();const n=e;g(n.$$.fragment,1,0,()=>{V(n,1)}),C()}s?(e=new s(u()),z(e.$$.fragment),p(e.$$.fragment,1),S(e,l.parentNode,l)):e=null}else s&&e.$set(a)},i(f){t||(e&&p(e.$$.fragment,f),t=!0)},o(f){e&&g(e.$$.fragment,f),t=!1},d(f){f&&h(l),e&&V(e,f)}}}function Le(o){let e,l;return{c(){e=y("div"),l=B(o[0])},l(t){e=k(t,"DIV",{});var r=L(e);l=O(r,o[0]),r.forEach(h)},m(t,r){m(t,e,r),E(e,l)},p(t,r){r&1&&se(l,t[0])},i:q,o:q,d(t){t&&h(e)}}}function Ee(o){let e,l,t=o[0]&&J(o);return{c(){t&&t.c(),e=P()},l(r){t&&t.l(r),e=P()},m(r,s){t&&t.m(r,s),m(r,e,s),l=!0},p(r,[s]){r[0]?t?(t.p(r,s),s&1&&p(t,1)):(t=J(r),t.c(),p(t,1),t.m(e.parentNode,e)):t&&(D(),g(t,1,1,()=>{t=null}),C())},i(r){l||(p(t),l=!0)},o(r){g(t),l=!1},d(r){t&&t.d(r),r&&h(e)}}}const Pe="svelte-lazy-placeholder";function De(o,e,l){let{placeholder:t=null}=e,{placeholderProps:r=null}=e;return o.$$set=s=>{"placeholder"in s&&l(0,t=s.placeholder),"placeholderProps"in s&&l(1,r=s.placeholderProps)},[t,r]}class X extends R{constructor(e){super(),A(this,e,De,Ee,G,{placeholder:0,placeholderProps:1})}}function Ce(o){let e,l;return e=new X({props:{placeholder:o[1],placeholderProps:o[2]}}),{c(){z(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){S(e,t,r),l=!0},p(t,r){const s={};r&2&&(s.placeholder=t[1]),r&4&&(s.placeholderProps=t[2]),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function He(o){let e,l,t,r,s;const u=o[15].default,f=ue(u,o,o[14],null),i=f||Ie();let a=!o[3]&&o[1]&&K(o);return{c(){e=y("div"),i&&i.c(),t=N(),a&&a.c(),r=P(),this.h()},l(n){e=k(n,"DIV",{class:!0,style:!0});var c=L(e);i&&i.l(c),c.forEach(h),t=T(n),a&&a.l(n),r=P(),this.h()},h(){b(e,"class",Se),b(e,"style",o[5])},m(n,c){m(n,e,c),i&&i.m(e,null),m(n,t,c),a&&a.m(n,c),m(n,r,c),s=!0},p(n,c){o=n,f&&f.p&&(!s||c&16384)&&de(f,u,o,o[14],s?he(u,o[14],c,null):_e(o[14]),null),(!s||c&32)&&b(e,"style",o[5]),!o[3]&&o[1]?a?(a.p(o,c),c&10&&p(a,1)):(a=K(o),a.c(),p(a,1),a.m(r.parentNode,r)):a&&(D(),g(a,1,1,()=>{a=null}),C())},i(n){s||(p(i,n),l||pe(()=>{l=ge(e,ke,o[0]||{}),l.start()}),p(a),s=!0)},o(n){g(i,n),g(a),s=!1},d(n){n&&h(e),i&&i.d(n),n&&h(t),a&&a.d(n),n&&h(r)}}}function Ie(o){let e;return{c(){e=B("Lazy load content")},l(l){e=O(l,"Lazy load content")},m(l,t){m(l,e,t)},d(l){l&&h(e)}}}function K(o){let e,l;return e=new X({props:{placeholder:o[1],placeholderProps:o[2]}}),{c(){z(e.$$.fragment)},l(t){j(e.$$.fragment,t)},m(t,r){S(e,t,r),l=!0},p(t,r){const s={};r&2&&(s.placeholder=t[1]),r&4&&(s.placeholderProps=t[2]),e.$set(s)},i(t){l||(p(e.$$.fragment,t),l=!0)},o(t){g(e.$$.fragment,t),l=!1},d(t){V(e,t)}}}function ze(o){let e,l,t,r,s,u;const f=[He,Ce],i=[];function a(n,c){return n[4]?0:n[1]?1:-1}return~(l=a(o))&&(t=i[l]=f[l](o)),{c(){e=y("div"),t&&t.c(),this.h()},l(n){e=k(n,"DIV",{class:!0,style:!0});var c=L(e);t&&t.l(c),c.forEach(h),this.h()},h(){b(e,"class",o[6]),ce(e,"height",o[7])},m(n,c){m(n,e,c),~l&&i[l].m(e,null),r=!0,s||(u=fe(o[8].call(null,e)),s=!0)},p(n,[c]){let _=l;l=a(n),l===_?~l&&i[l].p(n,c):(t&&(D(),g(i[_],1,1,()=>{i[_]=null}),C()),~l?(t=i[l],t?t.p(n,c):(t=i[l]=f[l](n),t.c()),p(t,1),t.m(e,null)):t=null)},i(n){r||(p(t),r=!0)},o(n){g(t),r=!1},d(n){n&&h(e),~l&&i[l].d(),s=!1,u()}}}const Se="svelte-lazy-content";function Ve(o){document.addEventListener("scroll",o,!0),window.addEventListener("resize",o)}function Q(o){document.removeEventListener("scroll",o,!0),window.removeEventListener("resize",o)}function Ne(o){return o&&o.target&&o.target.getBoundingClientRect?o.target.getBoundingClientRect().bottom:window.innerHeight}function Te(o,e,l){let t,r,s,u=null,f=0;l||(l={});const i=function(){f=l.leading===!1?0:new Date,u=null,s=o.apply(t,r),u||(t=r=null)};return function(a){const n=new Date;!f&&l.leading===!1&&(f=n);const c=e-(n-f);return t=this,r=arguments,c<=0||c>e?(u&&(clearTimeout(u),u=null),f=n,s=o.apply(t,r),u||(t=r=null)):!u&&l.trailing!==!1&&(u=setTimeout(i,c)),s}}function je(o,e,l){let t,{$$slots:r={},$$scope:s}=e,{height:u=0}=e,{offset:f=150}=e,{fadeOption:i={delay:0,duration:400}}=e,{resetHeightDelay:a=0}=e,{onload:n=null}=e,{placeholder:c=null}=e,{placeholderProps:_=null}=e,{class:v=""}=e;const H="svelte-lazy"+(v?" "+v:""),Y=F();let M=!1,I=!0;function Z(d){x(d);const w=Te(te=>{const le=d.getBoundingClientRect().top,ne=Ne(te)+f;le<=ne&&(l(4,M=!0),$(d),n&&n(d),Q(w))},200);return Ve(w),setTimeout(()=>{w()}),{destroy:()=>{Q(w)}}}function F(){return typeof u=="number"?u+"px":u}function x(d){u&&(d.style.height=F())}function $(d){setTimeout(()=>{ee(d)||(d.style.height="auto")},a)}function ee(d){const w=d.querySelector("img");return w?w.complete?w.naturalHeight===0:(l(3,I=!1),d.addEventListener("load",()=>{l(3,I=!0),d.style.height="auto"},{capture:!0,once:!0}),d.addEventListener("error",()=>{l(3,I=!0)},{capture:!0,once:!0}),!0):!1}return o.$$set=d=>{"height"in d&&l(9,u=d.height),"offset"in d&&l(10,f=d.offset),"fadeOption"in d&&l(0,i=d.fadeOption),"resetHeightDelay"in d&&l(11,a=d.resetHeightDelay),"onload"in d&&l(12,n=d.onload),"placeholder"in d&&l(1,c=d.placeholder),"placeholderProps"in d&&l(2,_=d.placeholderProps),"class"in d&&l(13,v=d.class),"$$scope"in d&&l(14,s=d.$$scope)},o.$$.update=()=>{o.$$.dirty&8&&l(5,t=I?"":"display: none")},[i,c,_,I,M,t,H,Y,Z,u,f,a,n,v,s,r]}class Be extends R{constructor(e){super(),A(this,e,je,ze,G,{height:9,offset:10,fadeOption:0,resetHeightDelay:11,onload:12,placeholder:1,placeholderProps:2,class:13})}}function U(o,e,l){const t=o.slice();return t[2]=e[l],t}function Oe(o){let e,l;return{c(){e=y("img"),this.h()},l(t){e=k(t,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){b(e,"class","flex h-60"),be(e.src,l=ve+"/"+o[2].file)||b(e,"src",l),b(e,"alt","")},m(t,r){m(t,e,r)},p:q,d(t){t&&h(e)}}}function W(o){let e,l,t,r,s=o[2].word+"",u,f,i;return l=new Be({props:{height:240,$$slots:{default:[Oe]},$$scope:{ctx:o}}}),{c(){e=y("div"),z(l.$$.fragment),t=N(),r=y("p"),u=B(s),f=N(),this.h()},l(a){e=k(a,"DIV",{class:!0});var n=L(e);j(l.$$.fragment,n),t=T(n),r=k(n,"P",{class:!0});var c=L(r);u=O(c,s),c.forEach(h),f=T(n),n.forEach(h),this.h()},h(){b(r,"class","bg-gray-300 font-mono p-2 text-center"),b(e,"class","flex flex-col flex-nowrap justify-between border-2 border-gray-300")},m(a,n){m(a,e,n),S(l,e,null),E(e,t),E(e,r),E(r,u),E(e,f),i=!0},p(a,n){const c={};n&32&&(c.$$scope={dirty:n,ctx:a}),l.$set(c)},i(a){i||(p(l.$$.fragment,a),i=!0)},o(a){g(l.$$.fragment,a),i=!1},d(a){a&&h(e),V(l)}}}function qe(o){let e,l,t,r,s,u,f=o[0],i=[];for(let n=0;n<f.length;n+=1)i[n]=W(U(o,f,n));const a=n=>g(i[n],1,1,()=>{i[n]=null});return{c(){e=y("nav"),l=y("div"),t=B("paroleperoni"),r=N(),s=y("div");for(let n=0;n<i.length;n+=1)i[n].c();this.h()},l(n){e=k(n,"NAV",{class:!0});var c=L(e);l=k(c,"DIV",{class:!0});var _=L(l);t=O(_,"paroleperoni"),_.forEach(h),c.forEach(h),r=T(n),s=k(n,"DIV",{class:!0});var v=L(s);for(let H=0;H<i.length;H+=1)i[H].l(v);v.forEach(h),this.h()},h(){b(l,"class","px-4 py-2 container mx-auto font-mono text-white"),b(e,"class","sticky top-0 flex bg-red-800 border-b-2 border-white"),b(s,"class","container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 items-stretch")},m(n,c){m(n,e,c),E(e,l),E(l,t),m(n,r,c),m(n,s,c);for(let _=0;_<i.length;_+=1)i[_].m(s,null);u=!0},p(n,[c]){if(c&1){f=n[0];let _;for(_=0;_<f.length;_+=1){const v=U(n,f,_);i[_]?(i[_].p(v,c),p(i[_],1)):(i[_]=W(v),i[_].c(),p(i[_],1),i[_].m(s,null))}for(D(),_=f.length;_<i.length;_+=1)a(_);C()}},i(n){if(!u){for(let c=0;c<f.length;c+=1)p(i[c]);u=!0}},o(n){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)g(i[c]);u=!1},d(n){n&&h(e),n&&h(r),n&&h(s),me(i,n)}}}function Re(o){const e=ye,l=[];for(let t of e)l.push({word:t.replace(".png",""),file:`labels/${t}`});return l.sort((t,r)=>t.word.toLowerCase().localeCompare(r.word.toLowerCase())),[l]}class Me extends R{constructor(e){super(),A(this,e,Re,qe,G,{})}}export{Me as default};