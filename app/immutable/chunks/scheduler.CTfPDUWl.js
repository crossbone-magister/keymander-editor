function D(){}function S(t,n){for(const e in n)t[e]=n[e];return t}function T(t){return t()}function J(){return Object.create(null)}function q(t){t.forEach(T)}function K(t){return typeof t=="function"}function Q(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function V(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function X(t){return Object.keys(t).length===0}function H(t,...n){if(t==null){for(const i of n)i(void 0);return D}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function Y(t,n,e){t.$$.on_destroy.push(H(n,e))}function Z(t,n,e,i){if(t){const c=w(t,n,e,i);return t[0](c)}}function w(t,n,e,i){return t[1]&&i?S(e.ctx.slice(),t[1](i(n))):e.ctx}function $(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const u=[],r=Math.max(n.dirty.length,c.length);for(let s=0;s<r;s+=1)u[s]=n.dirty[s]|c[s];return u}return n.dirty|c}return n.dirty}function tt(t,n,e,i,c,u){if(c){const r=w(n,e,i,u);t.p(r,c)}}function nt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function et(t,n,e){return t.set(e),n}let b=!1;function it(){b=!0}function ct(){b=!1}function O(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function P(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let a=0;a<n.length;a++){const o=n[a];o.claim_order!==void 0&&l.push(o)}n=l}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let l=0;l<n.length;l++){const a=n[l].claim_order,o=(c>0&&n[e[c]].claim_order<=a?c+1:O(1,c,C=>n[e[C]].claim_order,a))-1;i[l]=e[o]+1;const k=o+1;e[k]=l,c=Math.max(k,c)}const u=[],r=[];let s=n.length-1;for(let l=e[c]+1;l!=0;l=i[l-1]){for(u.push(n[l-1]);s>=l;s--)r.push(n[s]);s--}for(;s>=0;s--)r.push(n[s]);u.reverse(),r.sort((l,a)=>l.claim_order-a.claim_order);for(let l=0,a=0;l<r.length;l++){for(;a<u.length&&r[l].claim_order>=u[a].claim_order;)a++;const o=a<u.length?u[a]:null;t.insertBefore(r[l],o)}}function B(t,n){if(b){for(P(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function rt(t,n,e){b&&!e?B(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function st(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function L(t){return document.createElement(t)}function v(t){return document.createTextNode(t)}function ut(){return v(" ")}function at(){return v("")}function ot(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function ft(t){return function(n){return n.preventDefault(),t.call(this,n)}}function _t(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function dt(t){return t.dataset.svelteH}function ht(t){let n;return{p(...e){n=e,n.forEach(i=>t.push(i))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function mt(t){return Array.from(t.childNodes)}function M(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,n,e,i,c=!1){M(t);const u=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const s=t[r];if(n(s)){const l=e(s);return l===void 0?t.splice(r,1):t[r]=l,c||(t.claim_info.last_index=r),s}}for(let r=t.claim_info.last_index-1;r>=0;r--){const s=t[r];if(n(s)){const l=e(s);return l===void 0?t.splice(r,1):t[r]=l,c?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function z(t,n,e,i){return A(t,c=>c.nodeName===n,c=>{const u=[];for(let r=0;r<c.attributes.length;r++){const s=c.attributes[r];e[s.name]||u.push(s.name)}u.forEach(r=>c.removeAttribute(r))},()=>i(n))}function pt(t,n,e){return z(t,n,e,L)}function F(t,n){return A(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>v(n),!0)}function bt(t){return F(t," ")}function yt(t,n){n=""+n,t.data!==n&&(t.data=n)}function gt(t,n){t.value=n??""}function xt(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,"")}function Et(t,n,e){t.classList.toggle(n,!!e)}function I(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}function vt(t,n){const e=[];let i=0;for(const c of n.childNodes)if(c.nodeType===8){const u=c.textContent.trim();u===`HEAD_${t}_END`?(i-=1,e.push(c)):u===`HEAD_${t}_START`&&(i+=1,e.push(c))}else i>0&&e.push(c);return e}function kt(t,n){return new t(n)}let p;function y(t){p=t}function h(){if(!p)throw new Error("Function called outside component initialization");return p}function Nt(t){h().$$.on_mount.push(t)}function wt(t){h().$$.after_update.push(t)}function At(){const t=h();return(n,e,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[n];if(c){const u=I(n,e,{cancelable:i});return c.slice().forEach(r=>{r.call(t,u)}),!u.defaultPrevented}return!0}}function jt(t,n){return h().$$.context.set(t,n),n}function Ct(t){return h().$$.context.get(t)}function Dt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],N=[];let _=[];const x=[],j=Promise.resolve();let E=!1;function R(){E||(E=!0,j.then(W))}function St(){return R(),j}function U(t){_.push(t)}function Tt(t){x.push(t)}const g=new Set;let f=0;function W(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const n=d[f];f++,y(n),G(n.$$)}}catch(n){throw d.length=0,f=0,n}for(y(null),d.length=0,f=0;N.length;)N.pop()();for(let n=0;n<_.length;n+=1){const e=_[n];g.has(e)||(g.add(e),e())}_.length=0}while(d.length);for(;x.length;)x.pop()();E=!1,g.clear(),y(t)}function G(t){if(t.fragment!==null){t.update(),q(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(U)}}function qt(t){const n=[],e=[];_.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),_=n}export{ht as $,Nt as A,xt as B,N as C,kt as D,St as E,q as F,J as G,W as H,K as I,X as J,U as K,qt as L,p as M,y as N,T as O,d as P,R as Q,it as R,ct as S,vt as T,jt as U,At as V,V as W,Et as X,st as Y,Tt as Z,gt as _,ut as a,et as a0,mt as b,pt as c,F as d,L as e,lt as f,bt as g,B as h,rt as i,yt as j,Y as k,dt as l,_t as m,D as n,ot as o,ft as p,Ct as q,Z as r,Q as s,v as t,tt as u,nt as v,$ as w,Dt as x,at as y,wt as z};