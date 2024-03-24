var Ae=Object.defineProperty;var Ve=(e,t,n)=>t in e?Ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ne=(e,t,n)=>(Ve(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function N(){}function _e(e){return e()}function de(){return Object.create(null)}function H(e){e.forEach(_e)}function be(e){return typeof e=="function"}function we(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Ee(e){return Object.keys(e).length===0}function i(e,t){e.appendChild(t)}function se(e,t,n){e.insertBefore(t,n||null)}function Q(e){e.parentNode&&e.parentNode.removeChild(e)}function Me(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function C(e){return document.createTextNode(e)}function $(){return C(" ")}function q(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function k(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Oe(e){return Array.from(e.childNodes)}function ce(e,t){t=""+t,e.data!==t&&(e.data=t)}function D(e,t){e.value=t??""}function Z(e,t,n){for(let o=0;o<e.options.length;o+=1){const r=e.options[o];if(r.__value===t){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function fe(e){const t=e.querySelector(":checked");return t&&t.__value}let W;function F(e){W=e}function ke(){if(!W)throw new Error("Function called outside component initialization");return W}function Ce(e){ke().$$.on_mount.push(e)}const R=[],he=[];let K=[];const pe=[],Ne=Promise.resolve();let re=!1;function Le(){re||(re=!0,Ne.then(xe))}function G(e){K.push(e)}const oe=new Set;let T=0;function xe(){if(T!==0)return;const e=W;do{try{for(;T<R.length;){const t=R[T];T++,F(t),Be(t.$$)}}catch(t){throw R.length=0,T=0,t}for(F(null),R.length=0,T=0;he.length;)he.pop()();for(let t=0;t<K.length;t+=1){const n=K[t];oe.has(n)||(oe.add(n),n())}K.length=0}while(R.length);for(;pe.length;)pe.pop()();re=!1,oe.clear(),F(e)}function Be(e){if(e.fragment!==null){e.update(),H(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(G)}}function Te(e){const t=[],n=[];K.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),K=t}const X=new Set;let Re;function ye(e,t){e&&e.i&&(X.delete(e),e.i(t))}function Ke(e,t,n,o){if(e&&e.o){if(X.has(e))return;X.add(e),Re.c.push(()=>{X.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function me(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function je(e){e&&e.c()}function Ie(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),G(()=>{const s=e.$$.on_mount.map(_e).filter(be);e.$$.on_destroy?e.$$.on_destroy.push(...s):H(s),e.$$.on_mount=[]}),r.forEach(G)}function $e(e,t){const n=e.$$;n.fragment!==null&&(Te(n.after_update),H(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function qe(e,t){e.$$.dirty[0]===-1&&(R.push(e),Le(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function Pe(e,t,n,o,r,s,d=null,P=[-1]){const _=W;F(e);const l=e.$$={fragment:null,ctx:[],props:s,update:N,not_equal:r,bound:de(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(_?_.$$.context:[])),callbacks:de(),dirty:P,skip_bound:!1,root:t.target||_.$$.root};d&&d(l.root);let b=!1;if(l.ctx=n?n(e,t.props||{},(u,w,...S)=>{const x=S.length?S[0]:w;return l.ctx&&r(l.ctx[u],l.ctx[u]=x)&&(!l.skip_bound&&l.bound[u]&&l.bound[u](x),b&&qe(e,u)),w}):[],l.update(),b=!0,H(l.before_update),l.fragment=o?o(l.ctx):!1,t.target){if(t.hydrate){const u=Oe(t.target);l.fragment&&l.fragment.l(u),u.forEach(Q)}else l.fragment&&l.fragment.c();t.intro&&ye(e.$$.fragment),Ie(e,t.target,t.anchor),xe()}F(_)}class Se{constructor(){ne(this,"$$");ne(this,"$$set")}$destroy(){$e(this,1),this.$destroy=N}$on(t,n){if(!be(n))return N;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!Ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const De="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(De);function ge(e,t,n){const o=e.slice();return o[22]=t[n],o}function ve(e){let t,n=e[22].name+"",o,r;return{c(){t=f("option"),o=C(n),r=$(),t.__value=e[22].usbProductId,D(t,t.__value)},m(s,d){se(s,t,d),i(t,o),i(t,r)},p:N,d(s){s&&Q(t)}}}function Fe(e){let t,n,o,r,s,d,P,_,l,b,u,w,S,x,j,v,A,V,E,M,J,y,z,h=e[2]?"Connected ":"Offline",a,m,O,L,ie,Y,ee,ue,U,te,le,B=me(e[4]),g=[];for(let c=0;c<B.length;c+=1)g[c]=ve(ge(e,B,c));return{c(){t=f("main"),n=f("div"),n.innerHTML=`Sorry, <b>Web Serial</b> is not supported on this device, make sure you&#39;re 
    running Chrome 78 or later and have enabled the 
    <code>#enable-experimental-web-platform-features</code> flag in
    <code>chrome://flags</code>`,o=$(),r=f("h1"),r.textContent="Hydra OSC",s=$(),d=f("button"),d.textContent="Close Port",P=$(),_=f("div"),l=f("label"),b=C(`Board:
    `),u=f("select");for(let c=0;c<g.length;c+=1)g[c].c();w=$(),S=f("div"),x=f("label"),j=C(`Baudrate:
      `),v=f("select"),A=f("option"),A.textContent="9600",V=f("option"),V.textContent="19200",E=f("option"),E.textContent="57600",M=f("option"),M.textContent="115200",J=$(),y=f("div"),z=C(`Connection Status:
    `),a=C(h),m=$(),O=f("i"),ie=$(),Y=f("pre"),ee=C(e[1]),ue=$(),U=f("div"),U.innerHTML='<div class="stat"><div class="stat-figure text-secondary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div> <div class="stat-title">Downloads</div> <div class="stat-value">31K</div> <div class="stat-desc">Jan 1st - Feb 1st</div></div> <div class="stat"><div class="stat-figure text-secondary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg></div> <div class="stat-title">New Users</div> <div class="stat-value">4,200</div> <div class="stat-desc">↗︎ 400 (22%)</div></div> <div class="stat"><div class="stat-figure text-secondary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg></div> <div class="stat-title">New Registers</div> <div class="stat-value">1,200</div> <div class="stat-desc">↘︎ 90 (14%)</div></div>',k(n,"id","notSupported"),k(n,"class","hidden"),e[3]===void 0&&G(()=>e[8].call(u)),A.__value=9600,D(A,A.__value),V.__value=19200,D(V,V.__value),E.__value=57600,D(E,E.__value),M.__value=115200,D(M,M.__value),e[0]===void 0&&G(()=>e[9].call(v)),k(O,"class",L=e[2]?"fas fa-check-circle":"fas fa-times-circle"),k(y,"class","board-status"),k(U,"class","stats shadow")},m(c,I){se(c,t,I),i(t,n),i(t,o),i(t,r),i(t,s),i(t,d),i(t,P),i(t,_),i(_,l),i(l,b),i(l,u);for(let p=0;p<g.length;p+=1)g[p]&&g[p].m(u,null);Z(u,e[3],!0),i(t,w),i(t,S),i(S,x),i(x,j),i(x,v),i(v,A),i(v,V),i(v,E),i(v,M),Z(v,e[0],!0),i(t,J),i(t,y),i(y,z),i(y,a),i(y,m),i(y,O),i(t,ie),i(t,Y),i(Y,ee),i(t,ue),i(t,U),te||(le=[q(d,"click",e[6]),q(u,"change",e[8]),q(u,"change",e[5]),q(v,"change",e[9]),q(v,"change",e[7])],te=!0)},p(c,[I]){if(I&16){B=me(c[4]);let p;for(p=0;p<B.length;p+=1){const ae=ge(c,B,p);g[p]?g[p].p(ae,I):(g[p]=ve(ae),g[p].c(),g[p].m(u,null))}for(;p<g.length;p+=1)g[p].d(1);g.length=B.length}I&24&&Z(u,c[3]),I&1&&Z(v,c[0]),I&4&&h!==(h=c[2]?"Connected ":"Offline")&&ce(a,h),I&4&&L!==(L=c[2]?"fas fa-check-circle":"fas fa-times-circle")&&k(O,"class",L),I&2&&ce(ee,c[1])},i:N,o:N,d(c){c&&Q(t),Me(g,c),te=!1,H(le)}}}function We(e,t,n){let o=115200,r="",s=null,d=null,P,_,l,b,u;document.getElementById("log");const w=[{name:"Arduino Mega 2560",usbVendorId:9025,usbProductId:66},{name:"Arduino Leonardo",usbVendorId:9025,usbProductId:32822},{name:"Arduino Micro",usbVendorId:9025,usbProductId:32823},{name:"Arduino/Genuino Zero",usbVendorId:9025,usbProductId:32845},{name:"Arduino/Genuino MKR1000",usbVendorId:9025,usbProductId:32846},{name:"Arduino MKRZERO",usbVendorId:9025,usbProductId:32847},{name:"Arduino MKR FOX 1200",usbVendorId:9025,usbProductId:32848},{name:"Arduino MKR GSM 1400",usbVendorId:9025,usbProductId:32850},{name:"Arduino MKR WAN 1300",usbVendorId:9025,usbProductId:32851},{name:"Arduino MKR WiFi 1010",usbVendorId:9025,usbProductId:32852},{name:"Arduino MKR NB 1500",usbVendorId:9025,usbProductId:32853},{name:"Arduino MKR Vidor 4000",usbVendorId:9025,usbProductId:32854},{name:"Arduino NANO 33 IoT",usbVendorId:9025,usbProductId:32855},{name:"Adafruit ItsyBitsy 32u4",usbVendorId:9114,usbProductId:14},{name:"Adafruit ItsyBitsy 32u4",usbVendorId:9114,usbProductId:32781}];Ce(async()=>{document.getElementById("notSupported").classList.toggle("hidden","serial"in navigator)});function S(h){const a=w.find(m=>m.usbProductId===h);return a?a.usbVendorId:null}async function x(){let h=[{usbVendorId:S(d),usbProductId:d}];n(2,s=await navigator.serial.requestPort({filters:h})),await s.open({baudRate:o});let a=new TextDecoderStream;P=s.readable.pipeTo(a.writable),l=a.readable.pipeThrough(new TransformStream(new E)).pipeThrough(new TransformStream(new M)),u=l.getReader(),A();const m=new TextEncoderStream;_=m.readable.pipeTo(s.writable),b=m.writable,V("","echo(false);")}async function j(){if(s){await v();return}await x()}async function v(){u&&(await u.cancel(),await P.catch(()=>{}),u=null,P=null),b&&(await b.getWriter().close(),await _,b=null,_=null),await s.close(),n(2,s=null)}async function A(){for(;;){const{value:h,done:a}=await u.read();if(h&&n(1,r=h+`
`),a){console.log("[readLoop] DONE",a),u.releaseLock();break}}}function V(...h){const a=b.getWriter();h.forEach(m=>{console.log("[SEND]",m),a.write(m+`
`)}),a.releaseLock()}class E{constructor(){this.container=""}transform(a,m){this.container+=a;const O=this.container.split(`\r
`);this.container=O.pop(),O.forEach(L=>m.enqueue(L))}flush(a){a.enqueue(this.container)}}class M{transform(a,m){try{m.enqueue(JSON.parse(a))}catch{m.enqueue(a)}}}async function J(h){n(0,o=parseInt(h.target.value)),await j()}function y(){d=fe(this),n(3,d),n(4,w)}function z(){o=fe(this),n(0,o)}return[o,r,s,d,w,j,v,J,y,z]}class Ge extends Se{constructor(t){super(),Pe(this,t,We,Fe,we,{})}}function He(e){let t,n,o,r;return o=new Ge({}),{c(){t=f("main"),n=f("div"),je(o.$$.fragment),k(n,"class","card")},m(s,d){se(s,t,d),i(t,n),Ie(o,n,null),r=!0},p:N,i(s){r||(ye(o.$$.fragment,s),r=!0)},o(s){Ke(o.$$.fragment,s),r=!1},d(s){s&&Q(t),$e(o)}}}class Je extends Se{constructor(t){super(),Pe(this,t,null,He,we,{})}}new Je({target:document.getElementById("app")});
