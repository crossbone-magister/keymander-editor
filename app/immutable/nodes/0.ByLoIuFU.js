import{s as z,e as $,c as b,b as J,B as E,i as m,f as c,q as F,k as G,a as k,t as v,l as T,g as C,d as y,h as _,j as Q,r as W,T as X,m as L,u as Z,v as ee,w as te,U as w}from"../chunks/scheduler.CTfPDUWl.js";import{S as B,i as H,c as K,a as P,m as A,t as x,b as R,d as U}from"../chunks/index.m6TkT-m_.js";import{M as se,K as V}from"../chunks/KeymanderDeck.BkDwpDlk.js";import{w as j,v as q}from"../chunks/environment.EwxzNuSb.js";const re=!0,$e=Object.freeze(Object.defineProperty({__proto__:null,prerender:re},Symbol.toStringTag,{value:"Module"}));function oe(e){let s,o="<b>ERROR OCCURRED</b>",n,t,r=(e[0]?e[0].message:"You should see a message here. This means something went wrong.")+"",u;return{c(){s=$("p"),s.innerHTML=o,n=k(),t=$("p"),u=v(r)},l(i){s=b(i,"P",{"data-svelte-h":!0}),T(s)!=="svelte-152zuxf"&&(s.innerHTML=o),n=C(i),t=b(i,"P",{});var l=J(t);u=y(l,r),l.forEach(c)},m(i,l){m(i,s,l),m(i,n,l),m(i,t,l),_(t,u)},p(i,l){l&1&&r!==(r=(i[0]?i[0].message:"You should see a message here. This means something went wrong.")+"")&&Q(u,r)},d(i){i&&(c(s),c(n),c(t))}}}function ne(e){let s,o,n;return s=new se({props:{visible:e[1],$$slots:{default:[oe]},$$scope:{ctx:e}}}),s.$on("close",e[3]),{c(){o=$("div"),K(s.$$.fragment),this.h()},l(t){o=b(t,"DIV",{style:!0});var r=J(o);P(s.$$.fragment,r),this.h()},h(){E(o,"display","contents"),E(o,"--modal-background-image","linear-gradient(45deg, red, crimson)"),E(o,"--modal-opacity","0.75")},m(t,r){m(t,o,r),A(s,o,null),n=!0},p(t,[r]){const u={};r&2&&(u.visible=t[1]),r&17&&(u.$$scope={dirty:r,ctx:t}),s.$set(u)},i(t){n||(x(s.$$.fragment,t),n=!0)},o(t){R(s.$$.fragment,t),n=!1},d(t){t&&s&&c(o),U(s,t)}}}function ae(e,s,o){let n,t;const r=F("errorMessage");G(e,r,i=>o(0,t=i));function u(){r.set(void 0)}return e.$$.update=()=>{e.$$.dirty&1&&o(1,n=t!==void 0)},[t,n,r,u]}class ie extends B{constructor(s){super(),H(this,s,ae,ne,z,{})}}function I(e,s,o,n){var t;return typeof window<"u"?(t=j(sessionStorage.getItem(e)?o(sessionStorage.getItem(e)):s),t.subscribe(r=>{sessionStorage&&sessionStorage.setItem(e,n(r))})):t=j(s),t}function le(e,s){return I(e,s,o=>{if(o!=null)return JSON.parse(o);throw console.error(`Storage value for ${e} is null.`),Error(`Storage value for ${Y} is null.`)},o=>JSON.stringify(o))}const ue=j(void 0),Y=le("decks",[]),fe=I("keymanderDeck",V.empty(),e=>{if(e!=null)return V.fromJson(JSON.parse(e));throw console.error("Storage value for keymanderDeck is null."),Error("Storage value for keymanderDeck is null.")},e=>JSON.stringify(e)),ce=I("dataLoaded",!1,e=>(e==null?void 0:e.toLocaleLowerCase())==="true",e=>String(e));function de(e){let s,o,n,t,r,u="Crossbone Magister",i,l,N="GitHub",M,O,S,g,h;const D=e[1].default,f=W(D,e,e[0],null);return g=new ie({}),{c(){s=k(),f&&f.c(),o=k(),n=$("footer"),t=v("Created by "),r=$("a"),r.textContent=u,i=v(` -\r
	View on `),l=$("a"),l.textContent=N,M=v(` -\r
	Version `),O=v(q),S=k(),K(g.$$.fragment),this.h()},l(a){X("svelte-ekvpgx",document.head).forEach(c),s=C(a),f&&f.l(a),o=C(a),n=b(a,"FOOTER",{class:!0});var p=J(n);t=y(p,"Created by "),r=b(p,"A",{href:!0,"data-svelte-h":!0}),T(r)!=="svelte-1gq53wt"&&(r.textContent=u),i=y(p,` -\r
	View on `),l=b(p,"A",{href:!0,"data-svelte-h":!0}),T(l)!=="svelte-uufzs7"&&(l.textContent=N),M=y(p,` -\r
	Version `),O=y(p,q),p.forEach(c),S=C(a),P(g.$$.fragment,a),this.h()},h(){document.title="Keymander Editor",L(r,"href","https://github.com/crossbone-magister"),L(l,"href","https://github.com/crossbone-magister/keymander-editor"),L(n,"class","footer svelte-1b5iyf6")},m(a,d){m(a,s,d),f&&f.m(a,d),m(a,o,d),m(a,n,d),_(n,t),_(n,r),_(n,i),_(n,l),_(n,M),_(n,O),m(a,S,d),A(g,a,d),h=!0},p(a,[d]){f&&f.p&&(!h||d&1)&&Z(f,D,a,a[0],h?te(D,a[0],d,null):ee(a[0]),null)},i(a){h||(x(f,a),x(g.$$.fragment,a),h=!0)},o(a){R(f,a),R(g.$$.fragment,a),h=!1},d(a){a&&(c(s),c(o),c(n),c(S)),f&&f.d(a),U(g,a)}}}function me(e,s,o){let{$$slots:n={},$$scope:t}=s;return w("decks",Y),w("keymanderDeck",fe),w("errorMessage",ue),w("dataLoaded",ce),e.$$set=r=>{"$$scope"in r&&o(0,t=r.$$scope)},[t,n]}class be extends B{constructor(s){super(),H(this,s,me,de,z,{})}}export{be as component,$e as universal};
