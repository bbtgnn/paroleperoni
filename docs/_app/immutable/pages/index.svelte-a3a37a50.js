import{S as C,i as D,s as M,F as U,e as p,c as v,a as y,d as h,b as m,g as b,G as W,H as X,I as Y,r as d,p as I,w as S,K as A,L as N,M as O,n as x,x as B,k as E,t as F,y as H,m as V,h as J,z as K,J as k,C as P,q as R,N as Z,o as Q,l as j}from"../chunks/index-bd56bf45.js";import{a as $}from"../chunks/paths-c0fc83a9.js";var ee=["peri.png","pero.png","noi.png","eri.png","poi.png","ron.png","poni.png","proni.png","peni.png","aero.png","eroi.png","per.png","perni.png","pro.png","eoni.png"];const te=i=>({intersecting:i&1}),q=i=>({intersecting:i[0]});function se(i){let e,s;const n=i[8].default,t=U(n,i,i[7],q);return{c(){e=p("div"),t&&t.c(),this.h()},l(l){e=v(l,"DIV",{class:!0});var c=y(e);t&&t.l(c),c.forEach(h),this.h()},h(){m(e,"class","svelte-1w46syp")},m(l,c){b(l,e,c),t&&t.m(e,null),i[9](e),s=!0},p(l,[c]){t&&t.p&&(!s||c&129)&&W(t,n,l,l[7],s?Y(n,l[7],c,te):X(l[7]),q)},i(l){s||(d(t,l),s=!0)},o(l){I(t,l),s=!1},d(l){l&&h(e),t&&t.d(l),i[9](null)}}}function ne(i,e,s){let{$$slots:n={},$$scope:t}=e,{once:l=!1}=e,{top:c=0}=e,{bottom:g=0}=e,{left:o=0}=e,{right:_=0}=e,r=!1,a;S(()=>{if(typeof IntersectionObserver!="undefined"){const u=`${g}px ${o}px ${c}px ${_}px`,w=new IntersectionObserver(T=>{s(0,r=T[0].isIntersecting),r&&l&&w.unobserve(a)},{rootMargin:u});return w.observe(a),()=>w.unobserve(a)}});function f(u){A[u?"unshift":"push"](()=>{a=u,s(1,a)})}return i.$$set=u=>{"once"in u&&s(2,l=u.once),"top"in u&&s(3,c=u.top),"bottom"in u&&s(4,g=u.bottom),"left"in u&&s(5,o=u.left),"right"in u&&s(6,_=u.right),"$$scope"in u&&s(7,t=u.$$scope)},[r,a,l,c,g,o,_,t,n,f]}class le extends C{constructor(e){super(),D(this,e,ne,se,M,{once:2,top:3,bottom:4,left:5,right:6})}}function re(i){let e,s;return{c(){e=p("img"),this.h()},l(n){e=v(n,"IMG",{src:!0,alt:!0,loading:!0,class:!0}),this.h()},h(){N(e.src,s=i[0])||m(e,"src",s),m(e,"alt",i[1]),m(e,"loading","lazy"),m(e,"class","svelte-cf8i2e"),O(e,"loaded",i[2])},m(n,t){b(n,e,t),i[4](e)},p(n,[t]){t&1&&!N(e.src,s=n[0])&&m(e,"src",s),t&2&&m(e,"alt",n[1]),t&4&&O(e,"loaded",n[2])},i:x,o:x,d(n){n&&h(e),i[4](null)}}}function oe(i,e,s){let{src:n}=e,{alt:t}=e,l=!1,c;S(()=>{s(3,c.onload=()=>{s(2,l=!0)},c)});function g(o){A[o?"unshift":"push"](()=>{c=o,s(3,c)})}return i.$$set=o=>{"src"in o&&s(0,n=o.src),"alt"in o&&s(1,t=o.alt)},[n,t,l,c,g]}class ie extends C{constructor(e){super(),D(this,e,oe,re,M,{src:0,alt:1})}}function z(i,e,s){const n=i.slice();return n[2]=e[s],n}function L(i){let e,s,n;return s=new ie({props:{src:`${$}/${i[2].file}`,alt:i[2].word}}),{c(){e=p("div"),B(s.$$.fragment),this.h()},l(t){e=v(t,"DIV",{class:!0});var l=y(e);H(s.$$.fragment,l),l.forEach(h),this.h()},h(){m(e,"class","w-full h-full flex flex-row flex-nowrap justify-center")},m(t,l){b(t,e,l),K(s,e,null),n=!0},p:x,i(t){n||(d(s.$$.fragment,t),n=!0)},o(t){I(s.$$.fragment,t),n=!1},d(t){t&&h(e),P(s)}}}function ae(i){let e,s,n=i[5]&&L(i);return{c(){n&&n.c(),e=j()},l(t){n&&n.l(t),e=j()},m(t,l){n&&n.m(t,l),b(t,e,l),s=!0},p(t,l){t[5]?n?(n.p(t,l),l&32&&d(n,1)):(n=L(t),n.c(),d(n,1),n.m(e.parentNode,e)):n&&(Q(),I(n,1,1,()=>{n=null}),R())},i(t){s||(d(n),s=!0)},o(t){I(n),s=!1},d(t){n&&n.d(t),t&&h(e)}}}function G(i){let e,s,n,t,l=i[2].word+"",c,g,o;return s=new le({props:{once:!0,$$slots:{default:[ae,({intersecting:_})=>({5:_}),({intersecting:_})=>_?32:0]},$$scope:{ctx:i}}}),{c(){e=p("div"),B(s.$$.fragment),n=E(),t=p("p"),c=F(l),g=E(),this.h()},l(_){e=v(_,"DIV",{class:!0});var r=y(e);H(s.$$.fragment,r),n=V(r),t=v(r,"P",{class:!0});var a=y(t);c=J(a,l),a.forEach(h),g=V(r),r.forEach(h),this.h()},h(){m(t,"class","bg-gray-300 font-mono p-2 text-center"),m(e,"class","flex flex-col flex-nowrap justify-between border-2 border-gray-300")},m(_,r){b(_,e,r),K(s,e,null),k(e,n),k(e,t),k(t,c),k(e,g),o=!0},p(_,r){const a={};r&96&&(a.$$scope={dirty:r,ctx:_}),s.$set(a)},i(_){o||(d(s.$$.fragment,_),o=!0)},o(_){I(s.$$.fragment,_),o=!1},d(_){_&&h(e),P(s)}}}function ce(i){let e,s,n,t,l,c,g=i[0],o=[];for(let r=0;r<g.length;r+=1)o[r]=G(z(i,g,r));const _=r=>I(o[r],1,1,()=>{o[r]=null});return{c(){e=p("nav"),s=p("div"),n=F("paroleperoni"),t=E(),l=p("div");for(let r=0;r<o.length;r+=1)o[r].c();this.h()},l(r){e=v(r,"NAV",{class:!0});var a=y(e);s=v(a,"DIV",{class:!0});var f=y(s);n=J(f,"paroleperoni"),f.forEach(h),a.forEach(h),t=V(r),l=v(r,"DIV",{class:!0});var u=y(l);for(let w=0;w<o.length;w+=1)o[w].l(u);u.forEach(h),this.h()},h(){m(s,"class","px-4 py-2 container mx-auto font-mono text-white"),m(e,"class","sticky top-0 flex bg-red-800 border-b-2 border-white z-50"),m(l,"class","container mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 items-stretch")},m(r,a){b(r,e,a),k(e,s),k(s,n),b(r,t,a),b(r,l,a);for(let f=0;f<o.length;f+=1)o[f].m(l,null);c=!0},p(r,[a]){if(a&33){g=r[0];let f;for(f=0;f<g.length;f+=1){const u=z(r,g,f);o[f]?(o[f].p(u,a),d(o[f],1)):(o[f]=G(u),o[f].c(),d(o[f],1),o[f].m(l,null))}for(Q(),f=g.length;f<o.length;f+=1)_(f);R()}},i(r){if(!c){for(let a=0;a<g.length;a+=1)d(o[a]);c=!0}},o(r){o=o.filter(Boolean);for(let a=0;a<o.length;a+=1)I(o[a]);c=!1},d(r){r&&h(e),r&&h(t),r&&h(l),Z(o,r)}}}function fe(i){const e=ee,s=[];for(let n of e)s.push({word:n.replace(".png",""),file:`labels/${n}`});return s.sort((n,t)=>n.word.toLowerCase().localeCompare(t.word.toLowerCase())),[s]}class ge extends C{constructor(e){super(),D(this,e,fe,ce,M,{})}}export{ge as default};