var it=Object.defineProperty;var at=(e,t,n)=>t in e?it(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ae=(e,t,n)=>(at(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function S(){}function et(e){return e()}function De(){return Object.create(null)}function Y(e){e.forEach(et)}function Oe(e){return typeof e=="function"}function Q(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function ct(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function C(e,t,n){e.insertBefore(t,n||null)}function P(e){e.parentNode&&e.parentNode.removeChild(e)}function we(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function f(e){return document.createElement(e)}function Ke(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function j(e){return document.createTextNode(e)}function y(){return j(" ")}function tt(){return j("")}function R(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ut(e){return Array.from(e.childNodes)}function xe(e,t){t=""+t,e.data!==t&&(e.data=t)}function q(e,t){e.value=t??""}function dt(e,t,n,l){n==null?e.style.removeProperty(t):e.style.setProperty(t,n,l?"important":"")}function ge(e,t,n){for(let l=0;l<e.options.length;l+=1){const o=e.options[l];if(o.__value===t){o.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function He(e){const t=e.querySelector(":checked");return t&&t.__value}function ze(e,t){return new e(t)}let re;function oe(e){re=e}function ft(){if(!re)throw new Error("Function called outside component initialization");return re}function Ie(e){ft().$$.on_mount.push(e)}const Z=[],Fe=[];let X=[];const We=[],pt=Promise.resolve();let Te=!1;function ht(){Te||(Te=!0,pt.then(nt))}function se(e){X.push(e)}const Me=new Set;let J=0;function nt(){if(J!==0)return;const e=re;do{try{for(;J<Z.length;){const t=Z[J];J++,oe(t),mt(t.$$)}}catch(t){throw Z.length=0,J=0,t}for(oe(null),Z.length=0,J=0;Fe.length;)Fe.pop()();for(let t=0;t<X.length;t+=1){const n=X[t];Me.has(n)||(Me.add(n),n())}X.length=0}while(Z.length);for(;We.length;)We.pop()();Te=!1,Me.clear(),oe(e)}function mt(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(se)}}function bt(e){const t=[],n=[];X.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),X=t}const _e=new Set;let D;function lt(){D={r:0,c:[],p:D}}function ot(){D.r||Y(D.c),D=D.p}function H(e,t){e&&e.i&&(_e.delete(e),e.i(t))}function ie(e,t,n,l){if(e&&e.o){if(_e.has(e))return;_e.add(e),D.c.push(()=>{_e.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function K(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Ee(e){e&&e.c()}function ye(e,t,n){const{fragment:l,after_update:o}=e.$$;l&&l.m(t,n),se(()=>{const s=e.$$.on_mount.map(et).filter(Oe);e.$$.on_destroy?e.$$.on_destroy.push(...s):Y(s),e.$$.on_mount=[]}),o.forEach(se)}function $e(e,t){const n=e.$$;n.fragment!==null&&(bt(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function vt(e,t){e.$$.dirty[0]===-1&&(Z.push(e),ht(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ae(e,t,n,l,o,s,r=null,d=[-1]){const p=re;oe(e);const i=e.$$={fragment:null,ctx:[],props:s,update:S,not_equal:o,bound:De(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:De(),dirty:d,skip_bound:!1,root:t.target||p.$$.root};r&&r(i.root);let v=!1;if(i.ctx=n?n(e,t.props||{},(m,w,...h)=>{const k=h.length?h[0]:w;return i.ctx&&o(i.ctx[m],i.ctx[m]=k)&&(!i.skip_bound&&i.bound[m]&&i.bound[m](k),v&&vt(e,m)),w}):[],i.update(),v=!0,Y(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const m=ut(t.target);i.fragment&&i.fragment.l(m),m.forEach(P)}else i.fragment&&i.fragment.c();t.intro&&H(e.$$.fragment),ye(e,t.target,t.anchor),nt()}oe(p)}class ce{constructor(){Ae(this,"$$");Ae(this,"$$set")}$destroy(){$e(this,1),this.$destroy=S}$on(t,n){if(!Oe(n))return S;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const o=l.indexOf(n);o!==-1&&l.splice(o,1)}}$set(t){this.$$set&&!ct(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gt);const rt=[{name:"Arduino Mega 2560",usbVendorId:9025,usbProductId:66},{name:"Arduino Leonardo",usbVendorId:9025,usbProductId:32822},{name:"Arduino Micro",usbVendorId:9025,usbProductId:32823},{name:"Arduino/Genuino Zero",usbVendorId:9025,usbProductId:32845},{name:"Arduino/Genuino MKR1000",usbVendorId:9025,usbProductId:32846},{name:"Arduino MKRZERO",usbVendorId:9025,usbProductId:32847},{name:"Arduino MKR FOX 1200",usbVendorId:9025,usbProductId:32848},{name:"Arduino MKR GSM 1400",usbVendorId:9025,usbProductId:32850},{name:"Arduino MKR WAN 1300",usbVendorId:9025,usbProductId:32851},{name:"Arduino MKR WiFi 1010",usbVendorId:9025,usbProductId:32852},{name:"Arduino MKR NB 1500",usbVendorId:9025,usbProductId:32853},{name:"Arduino MKR Vidor 4000",usbVendorId:9025,usbProductId:32854},{name:"Arduino NANO 33 IoT",usbVendorId:9025,usbProductId:32855},{name:"Adafruit ItsyBitsy 32u4",usbVendorId:9114,usbProductId:14},{name:"Adafruit ItsyBitsy 32u4",usbVendorId:9114,usbProductId:32781}],U=[];function _t(e,t=S){let n;const l=new Set;function o(d){if(Q(e,d)&&(e=d,n)){const p=!U.length;for(const i of l)i[1](),U.push(i,e);if(p){for(let i=0;i<U.length;i+=2)U[i][0](U[i+1]);U.length=0}}}function s(d){o(d(e))}function r(d,p=S){const i=[d,p];return l.add(i),l.size===1&&(n=t(o,s)||S),d(e),()=>{l.delete(i),l.size===0&&n&&(n(),n=null)}}return{set:o,update:s,subscribe:r}}const wt=null,st=_t(wt);function xt(e){st.set(e)}function yt(){let e=null;return st.subscribe(n=>{e=n})(),e}function $t(e,t,n){const l=e.slice();return l[23]=t[n],l}function It(e){let t;return{c(){t=f("option"),t.textContent=`${e[23].name} `,t.__value=e[23].usbProductId,q(t,t.__value)},m(n,l){C(n,t,l)},p:S,d(n){n&&P(t)}}}function kt(e){let t,n,l,o,s,r,d,p,i,v,m,w,h,k,b,g,u,A,T,E,O,ue,z,de,$,_,I,F,L,fe=e[1]?"Connected":"Not Avaliable",ke,pe,Ve,V,N,W,je,Pe,he,Le,Se,Ne,G,ee,te,me,Be,ne,le,be,Ce,Re,qe=K(rt),B=[];for(let x=0;x<qe.length;x+=1)B[x]=It($t(e,qe,x));return{c(){t=f("div"),n=f("div"),n.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
    Sorry, <b>Web Serial</b> is not supported on this device, make sure you&#39;re
    running Chrome 78 or later and have enabled the
    <code>#enable-experimental-web-platform-features</code> flag in
    <code>chrome://flags</code>`,l=y(),o=f("div"),s=y(),r=f("div"),d=f("label"),p=f("div"),p.innerHTML='<span class="label-text">Board</span>',i=y(),v=f("select"),m=f("option"),m.textContent="Pick a board";for(let x=0;x<B.length;x+=1)B[x].c();w=y(),h=f("label"),k=f("div"),k.innerHTML='<span class="label-text">Baud Rate</span>',b=y(),g=f("select"),u=f("option"),u.textContent="Pick the baudRate",A=f("option"),A.textContent="9600",T=f("option"),T.textContent="19200",E=f("option"),E.textContent="57600",O=f("option"),O.textContent="115200",ue=y(),z=f("div"),z.textContent="Connection State",de=y(),$=f("div"),_=f("div"),I=f("div"),I.textContent="Connection",F=y(),L=f("div"),ke=j(fe),Ve=y(),V=f("div"),N=Ke("svg"),W=Ke("path"),je=y(),Pe=f("span"),Pe.innerHTML="Sorry,<b>It looks</b> the device is being used by <code>another program</code>",Le=y(),Se=f("div"),Ne=y(),G=f("div"),ee=f("div"),te=f("button"),te.textContent="Close Port",Be=y(),ne=f("div"),le=f("button"),le.textContent="Reconnect",c(n,"id","notSupported"),c(n,"class","alert alert-error hidden"),c(o,"class","menu-section-bg"),c(p,"class","label"),m.__value="",q(m,m.__value),m.disabled=!0,m.selected=!0,c(v,"class","select select-bordered"),e[2]===void 0&&se(()=>e[7].call(v)),c(d,"class","form-control w-full max-w-xs"),c(k,"class","label"),u.__value="",q(u,u.__value),u.disabled=!0,u.selected=!0,A.__value=9600,q(A,A.__value),T.__value=19200,q(T,T.__value),E.__value=57600,q(E,E.__value),O.__value=115200,q(O,O.__value),c(g,"class","select select-bordered"),e[0]===void 0&&se(()=>e[8].call(g)),c(h,"class","form-control w-full max-w-xs"),c(r,"class","flex lg:flex-row flex-col p-2"),c(z,"class","divider label-text text-s"),c(I,"class","label-text text-xs "),c(L,"class",pe="badge mt-2 "+(e[1]?"badge-accent":"badge-ghost")),c(_,"class","flex flex-col shadow w-full p-2 items-center"),c(W,"stroke-linecap","round"),c(W,"stroke-linejoin","round"),c(W,"stroke-width","2"),c(W,"d","M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"),c(N,"xmlns","http://www.w3.org/2000/svg"),c(N,"class","stroke-current shrink-0 h-6 w-6"),c(N,"fill","none"),c(N,"viewBox","0 0 24 24"),c(V,"role","alert"),c(V,"class",he="alert alert-error "+(e[3]?"":"hidden")),c($,"class","section-stats w-full flex flex-col"),c(Se,"class","divider label-text text-s"),c(te,"class","btn-sm"),c(ee,"class",me=e[1]?"":"hidden"),c(le,"class","btn-sm"),c(ne,"class",be=e[1]==null&&e[0]!=null&&e[2]!=null?"":"hidden"),c(G,"class","w-full flex justify-between items-center p-4"),c(t,"class","menu-section relative")},m(x,M){C(x,t,M),a(t,n),a(t,l),a(t,o),a(t,s),a(t,r),a(r,d),a(d,p),a(d,i),a(d,v),a(v,m);for(let ve=0;ve<B.length;ve+=1)B[ve]&&B[ve].m(v,null);ge(v,e[2],!0),a(r,w),a(r,h),a(h,k),a(h,b),a(h,g),a(g,u),a(g,A),a(g,T),a(g,E),a(g,O),ge(g,e[0],!0),a(t,ue),a(t,z),a(t,de),a(t,$),a($,_),a(_,I),a(_,F),a(_,L),a(L,ke),a($,Ve),a($,V),a(V,N),a(N,W),a(V,je),a(V,Pe),a(t,Le),a(t,Se),a(t,Ne),a(t,G),a(G,ee),a(ee,te),a(G,Be),a(G,ne),a(ne,le),Ce||(Re=[R(v,"change",e[7]),R(v,"change",e[4]),R(g,"change",e[8]),R(g,"change",e[6]),R(te,"click",e[5]),R(le,"click",e[4])],Ce=!0)},p(x,[M]){M&4&&ge(v,x[2]),M&1&&ge(g,x[0]),M&2&&fe!==(fe=x[1]?"Connected":"Not Avaliable")&&xe(ke,fe),M&2&&pe!==(pe="badge mt-2 "+(x[1]?"badge-accent":"badge-ghost"))&&c(L,"class",pe),M&8&&he!==(he="alert alert-error "+(x[3]?"":"hidden"))&&c(V,"class",he),M&2&&me!==(me=x[1]?"":"hidden")&&c(ee,"class",me),M&7&&be!==(be=x[1]==null&&x[0]!=null&&x[2]!=null?"":"hidden")&&c(ne,"class",be)},i:S,o:S,d(x){x&&P(t),we(B,x),Ce=!1,Y(Re)}}}function Pt(e){const t=e.match(/(\w+):-?\d+(\.\d+)?/g);return t?t.map(l=>{const[o,s]=l.split(":");return{[o]:parseFloat(s)}}):(console.log("No key-value pairs found in the text."),null)}function St(e,t,n){let l=null,o="",s=null,r=null,d=null,p,i,v,m,w,h=!1;Ie(async()=>{document.getElementById("notSupported").classList.toggle("hidden","serial"in navigator)});function k($){const _=rt.find(I=>I.usbProductId===$);return _?_.usbVendorId:null}async function b(){let $=[{usbVendorId:k(d),usbProductId:d}];if(l!=null&&d!=null)try{n(1,r=await navigator.serial.requestPort({filters:$})),await r.open({baudRate:l});let _=new TextDecoderStream;p=r.readable.pipeTo(_.writable),v=_.readable.pipeThrough(new TransformStream(new E)).pipeThrough(new TransformStream(new O)),w=v.getReader(),A();const I=new TextEncoderStream;i=I.readable.pipeTo(r.writable),m=I.writable,T("","echo(false);"),n(3,h=!1)}catch(_){n(3,h=!0),console.error("Error opening port:",_),n(1,r=null)}}async function g(){if(r){console.log(r),console.log("disconnect"),await u();return}console.log("connect"),await b()}async function u(){w&&(await w.cancel(),await p.catch(()=>{}),w=null,p=null),m&&(await m.getWriter().close(),await i,m=null,i=null),await r.close(),n(1,r=null)}async function A(){for(;;){const{value:$,done:_}=await w.read();if($&&(o=$,s=Pt(o),xt(s)),_){console.log("[readLoop] DONE",_),w.releaseLock();break}}}function T(...$){const _=m.getWriter();$.forEach(I=>{console.log("[SEND]",I),_.write(I+`
`)}),_.releaseLock()}class E{constructor(){this.container=""}transform(_,I){this.container+=_;const F=this.container.split(`\r
`);this.container=F.pop(),F.forEach(L=>I.enqueue(L))}flush(_){_.enqueue(this.container)}}class O{transform(_,I){try{I.enqueue(JSON.parse(_))}catch{I.enqueue(_)}}}async function ue($){n(0,l=parseInt($.target.value)),await g()}function z(){d=He(this),n(2,d)}function de(){l=He(this),n(0,l)}return[l,r,d,h,g,u,ue,z,de]}class Ct extends ce{constructor(t){super(),ae(this,t,St,kt,Q,{})}}function Ge(e,t,n){const l=e.slice();return l[6]=t[n],l}function Je(e){let t,n=K(Object.keys(e[0])),l=[];for(let o=0;o<n.length;o+=1)l[o]=Ue(Ge(e,n,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();t=tt()},m(o,s){for(let r=0;r<l.length;r+=1)l[r]&&l[r].m(o,s);C(o,t,s)},p(o,s){if(s&1){n=K(Object.keys(o[0]));let r;for(r=0;r<n.length;r+=1){const d=Ge(o,n,r);l[r]?l[r].p(d,s):(l[r]=Ue(d),l[r].c(),l[r].m(t.parentNode,t))}for(;r<l.length;r+=1)l[r].d(1);l.length=n.length}},d(o){o&&P(t),we(l,o)}}}function Ue(e){let t,n,l,o,s=e[6]+"",r,d,p,i,v=e[0][e[6]].val+"",m,w;return{c(){t=f("div"),n=f("div"),l=f("h2"),o=j("cc"),r=j(s),d=j(":"),p=y(),i=f("div"),m=j(v),w=y(),c(l,"class","card-title justify-center pb-5"),c(i,"class","radial-progress text-primary"),dt(i,"--value",100),c(i,"role","progressbar"),c(n,"class","p-2"),c(t,"class","card !p-2 bg-base-100 shadow-xl w-[110px] m-2")},m(h,k){C(h,t,k),a(t,n),a(n,l),a(l,o),a(l,r),a(l,d),a(n,p),a(n,i),a(i,m),a(t,w)},p(h,k){k&1&&s!==(s=h[6]+"")&&xe(r,s),k&1&&v!==(v=h[0][h[6]].val+"")&&xe(m,v)},d(h){h&&P(t)}}}function At(e){let t,n,l,o=e[0]!==null&&e[0]!==void 0&&Je(e);return{c(){t=f("div"),t.textContent="Properties Manipulable",n=y(),l=f("div"),o&&o.c(),c(t,"class","divider label-text text-s"),c(l,"class","flex flex-wrap")},m(s,r){C(s,t,r),C(s,n,r),C(s,l,r),o&&o.m(l,null)},p(s,[r]){s[0]!==null&&s[0]!==void 0?o?o.p(s,r):(o=Je(s),o.c(),o.m(l,null)):o&&(o.d(1),o=null)},i:S,o:S,d(s){s&&(P(t),P(n),P(l)),o&&o.d()}}}function Mt(e,t,n){let l=null,o=null,s={},r={},d=null;Ie(()=>{window.addEventListener("message",({data:i,source:v})=>{i&&(d===null&&(d=v),o=i,l=yt(),p())})});function p(){if(s={},n(0,r={}),o!==null&&l!==null){for(const i in o)l[i]!==null&&l[i]!==void 0&&(s[i]=l[i].cc,n(0,r[i]={val:l[i].cc},r));d!==null&&d.postMessage(s,"*")}}return[r]}class Tt extends ce{constructor(t){super(),ae(this,t,Mt,At,Q,{})}}function Et(e){let t,n,l;return{c(){t=f("div"),t.textContent="How to use it",n=y(),l=f("div"),l.innerHTML='<div class="menu-section-bg"></div> <div class="flex lg:flex-row flex-col p-2"><div class="label font-bold"><span class="label-text">Example code</span></div> <div class="w-full"><div class="code-head flex text-xs justify-between items-center p-3 bg-gray-800"><span>Javascript</span> <div class="flex flex-row items-center"></div></div> <div id="example-code" class="code-section bg-black"><pre data-prefix="1" class="whitespace-pre-wrap break-words"><code>// Add the extension on top</code></pre> <pre data-prefix="2" class="whitespace-pre-wrap break-words text-lime-500"><code>await loadScript(&quot;https://vicjomaa.github.io/addIframe.js&quot;)</code></pre> <pre data-prefix="4" class="whitespace-pre-wrap break-words"><code>// Add a variable</code></pre> <pre data-prefix="5" class="whitespace-pre-wrap break-words"><code>// Map analog pin 0, with values ranging from 0 to 8</code></pre> <pre data-prefix="6" class="whitespace-pre-wrap break-words text-lime-500"><code>var edges = new sCC(0, 0, 8)</code></pre> <pre data-prefix="7" class="whitespace-pre-wrap break-words"><code>// Update edges in real time, by using the () =&gt; </code></pre> <pre data-prefix="8" class="whitespace-pre-wrap break-words text-lime-500"><code>shape(() =&gt; edges.getVal()).out()</code></pre></div></div></div>',c(t,"class","divider label-text text-s"),c(l,"class","menu-section relative")},m(o,s){C(o,t,s),C(o,n,s),C(o,l,s)},p:S,i:S,o:S,d(o){o&&(P(t),P(n),P(l))}}}function Ot(e){return Ie(async()=>{}),[]}class Vt extends ce{constructor(t){super(),ae(this,t,Ot,Et,Q,{})}}function Ze(e,t,n){const l=e.slice();return l[3]=t[n],l}function Xe(e,t,n){const l=e.slice();return l[3]=t[n],l}function Ye(e){let t,n,l=e[3].label+"",o,s,r,d,p;return{c(){t=f("a"),n=f("span"),o=j(l),s=y(),c(t,"role","tab"),c(t,"class",r="tab text-center !rounded-none "+(e[0]===e[3].value?"tab-active":""))},m(i,v){C(i,t,v),a(t,n),a(n,o),a(t,s),d||(p=R(t,"click",function(){Oe(e[2](e[3].value))&&e[2](e[3].value).apply(this,arguments)}),d=!0)},p(i,v){e=i,v&2&&l!==(l=e[3].label+"")&&xe(o,l),v&3&&r!==(r="tab text-center !rounded-none "+(e[0]===e[3].value?"tab-active":""))&&c(t,"class",r)},d(i){i&&P(t),d=!1,p()}}}function Qe(e){let t,n,l,o,s;var r=e[3].component;function d(p,i){return{}}return r&&(n=ze(r,d())),{c(){t=f("div"),n&&Ee(n.$$.fragment),l=y(),c(t,"class","box"),c(t,"style",o=e[0]===e[3].value?"":"display: none;")},m(p,i){C(p,t,i),n&&ye(n,t,null),a(t,l),s=!0},p(p,i){if(i&2&&r!==(r=p[3].component)){if(n){lt();const v=n;ie(v.$$.fragment,1,0,()=>{$e(v,1)}),ot()}r?(n=ze(r,d()),Ee(n.$$.fragment),H(n.$$.fragment,1),ye(n,t,l)):n=null}(!s||i&3&&o!==(o=p[0]===p[3].value?"":"display: none;"))&&c(t,"style",o)},i(p){s||(n&&H(n.$$.fragment,p),s=!0)},o(p){n&&ie(n.$$.fragment,p),s=!1},d(p){p&&P(t),n&&$e(n)}}}function jt(e){let t,n,l,o,s,r,d,p,i,v=K(e[1]),m=[];for(let b=0;b<v.length;b+=1)m[b]=Ye(Xe(e,v,b));let w=K(e[1]),h=[];for(let b=0;b<w.length;b+=1)h[b]=Qe(Ze(e,w,b));const k=b=>ie(h[b],1,1,()=>{h[b]=null});return{c(){t=f("div"),n=f("div"),l=y(),o=f("div"),o.textContent="HYDRA OSC",s=y(),r=f("div");for(let b=0;b<m.length;b+=1)m[b].c();d=y();for(let b=0;b<h.length;b+=1)h[b].c();p=tt(),c(n,"class","menu-section-bg"),c(o,"class","menu-header text-lg"),c(r,"role","tablist"),c(r,"class","tabs tabs-boxed p-0 "),c(t,"class","menu-section relative ")},m(b,g){C(b,t,g),a(t,n),a(t,l),a(t,o),a(t,s),a(t,r);for(let u=0;u<m.length;u+=1)m[u]&&m[u].m(r,null);C(b,d,g);for(let u=0;u<h.length;u+=1)h[u]&&h[u].m(b,g);C(b,p,g),i=!0},p(b,[g]){if(g&7){v=K(b[1]);let u;for(u=0;u<v.length;u+=1){const A=Xe(b,v,u);m[u]?m[u].p(A,g):(m[u]=Ye(A),m[u].c(),m[u].m(r,null))}for(;u<m.length;u+=1)m[u].d(1);m.length=v.length}if(g&3){w=K(b[1]);let u;for(u=0;u<w.length;u+=1){const A=Ze(b,w,u);h[u]?(h[u].p(A,g),H(h[u],1)):(h[u]=Qe(A),h[u].c(),H(h[u],1),h[u].m(p.parentNode,p))}for(lt(),u=w.length;u<h.length;u+=1)k(u);ot()}},i(b){if(!i){for(let g=0;g<w.length;g+=1)H(h[g]);i=!0}},o(b){h=h.filter(Boolean);for(let g=0;g<h.length;g+=1)ie(h[g]);i=!1},d(b){b&&(P(t),P(d),P(p)),we(m,b),we(h,b)}}}function Lt(e,t,n){let{items:l=[{label:"Code",value:1,component:Vt,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"},{label:"Connect",value:2,component:Ct,d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"},{label:"PlayG",value:3,component:Tt,d:"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}]}=t,{activeTabValue:o=1}=t;const s=r=>()=>n(0,o=r);return Ie(async()=>{document.getElementById("notSupported").classList.toggle("hidden","serial"in navigator)}),e.$$set=r=>{"items"in r&&n(1,l=r.items),"activeTabValue"in r&&n(0,o=r.activeTabValue)},[o,l,s]}class Nt extends ce{constructor(t){super(),ae(this,t,Lt,jt,Q,{items:1,activeTabValue:0})}}function Bt(e){let t,n;return t=new Nt({}),{c(){Ee(t.$$.fragment)},m(l,o){ye(t,l,o),n=!0},p:S,i(l){n||(H(t.$$.fragment,l),n=!0)},o(l){ie(t.$$.fragment,l),n=!1},d(l){$e(t,l)}}}class Rt extends ce{constructor(t){super(),ae(this,t,null,Bt,Q,{})}}new Rt({target:document.getElementById("app")});
