import{S as H,i as J,s as N,u as O,e as U,a as k,d as j,g as p,c as w,f as S,k as h,v as y,l as K,m as B,w as L,x as M,y as m,z as P,A as _,B as q,C as Q,D as R,E as V,F as E,G as T,H as A,I as D,J as W}from"./index.30eb3621.js";import{I as F}from"./Icon.88caa09a.js";import"./VennDiagram.svelte_svelte_type_style_lang.57471357.js";function I(t){let e,s;return e=new F({props:{src:t[1],class:z[t[4]]}}),{c(){E(e.$$.fragment)},l(i){T(e.$$.fragment,i)},m(i,c){A(e,i,c),s=!0},p(i,c){const f={};c&2&&(f.src=i[1]),c&16&&(f.class=z[i[4]]),e.$set(f)},i(i){s||(m(e.$$.fragment,i),s=!0)},o(i){_(e.$$.fragment,i),s=!1},d(i){D(e,i)}}}function v(t){let e,s;return e=new F({props:{src:t[1],class:z[t[4]]}}),{c(){E(e.$$.fragment)},l(i){T(e.$$.fragment,i)},m(i,c){A(e,i,c),s=!0},p(i,c){const f={};c&2&&(f.src=i[1]),c&16&&(f.class=z[i[4]]),e.$set(f)},i(i){s||(m(e.$$.fragment,i),s=!0)},o(i){_(e.$$.fragment,i),s=!1},d(i){D(e,i)}}}function X(t){let e,s,i,c,f,g,d,a=t[2]==="left"&&t[1]&&I(t);const b=t[10].default,r=O(b,t,t[9],null);let o=t[2]==="right"&&t[1]&&v(t);return{c(){e=U("button"),a&&a.c(),s=k(),r&&r.c(),i=k(),o&&o.c(),this.h()},l(n){e=j(n,"BUTTON",{type:!0,formaction:!0,class:!0});var l=p(e);a&&a.l(l),s=w(l),r&&r.l(l),i=w(l),o&&o.l(l),l.forEach(S),this.h()},h(){h(e,"type",t[0]),e.disabled=t[7],h(e,"formaction",t[8]),h(e,"class",c="flex items-center transition-colors rounded variant-"+t[5]+" "+C[t[3]]+" svelte-rhn4zq"),y(e,"outlined",t[6])},m(n,l){K(n,e,l),a&&a.m(e,null),B(e,s),r&&r.m(e,null),B(e,i),o&&o.m(e,null),f=!0,g||(d=L(e,"click",M(t[11])),g=!0)},p(n,[l]){n[2]==="left"&&n[1]?a?(a.p(n,l),l&6&&m(a,1)):(a=I(n),a.c(),m(a,1),a.m(e,s)):a&&(P(),_(a,1,1,()=>{a=null}),q()),r&&r.p&&(!f||l&512)&&Q(r,b,n,n[9],f?V(b,n[9],l,null):R(n[9]),null),n[2]==="right"&&n[1]?o?(o.p(n,l),l&6&&m(o,1)):(o=v(n),o.c(),m(o,1),o.m(e,null)):o&&(P(),_(o,1,1,()=>{o=null}),q()),(!f||l&1)&&h(e,"type",n[0]),(!f||l&128)&&(e.disabled=n[7]),(!f||l&256)&&h(e,"formaction",n[8]),(!f||l&40&&c!==(c="flex items-center transition-colors rounded variant-"+n[5]+" "+C[n[3]]+" svelte-rhn4zq"))&&h(e,"class",c),(!f||l&104)&&y(e,"outlined",n[6])},i(n){f||(m(a),m(r,n),m(o),f=!0)},o(n){_(a),_(r,n),_(o),f=!1},d(n){n&&S(e),a&&a.d(),r&&r.d(n),o&&o.d(),g=!1,d()}}}const C={base:"px-2 py-1 mx-1 gap-2",md:"px-2 py-1 mx-1 gap-2 text-xs",sm:"px-1 py-0.5 mx-0.5 gap-1 text-xs",lg:"px-4 py-2 mx-2 gap-4"},z={base:"w-4",md:"w-4",sm:"w-3",lg:"w-5"};function Y(t,e,s){let{$$slots:i={},$$scope:c}=e,{icon:f=void 0}=e,{iconPosition:g="right"}=e,{size:d="base"}=e,{iconSize:a=d}=e,{variant:b="info"}=e,{outline:r=!1}=e,{disabled:o=!1}=e,{formaction:n=void 0}=e,{type:l="button"}=e;function G(u){W.call(this,t,u)}return t.$$set=u=>{"icon"in u&&s(1,f=u.icon),"iconPosition"in u&&s(2,g=u.iconPosition),"size"in u&&s(3,d=u.size),"iconSize"in u&&s(4,a=u.iconSize),"variant"in u&&s(5,b=u.variant),"outline"in u&&s(6,r=u.outline),"disabled"in u&&s(7,o=u.disabled),"formaction"in u&&s(8,n=u.formaction),"type"in u&&s(0,l=u.type),"$$scope"in u&&s(9,c=u.$$scope)},t.$$.update=()=>{t.$$.dirty&256&&n&&s(0,l="submit")},[l,f,g,d,a,b,r,o,n,c,i,G]}class ee extends H{constructor(e){super(),J(this,e,Y,X,N,{icon:1,iconPosition:2,size:3,iconSize:4,variant:5,outline:6,disabled:7,formaction:8,type:0})}}export{ee as B};