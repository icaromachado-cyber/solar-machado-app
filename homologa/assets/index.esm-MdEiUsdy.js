import{F as Td,v as Tt,L as Ed,G as Xt,y as qs,N as wd,l as vd,e as fc,O as Ad,i as Rd,z as Rs,P as Pd,Q as mc,S as Sd,h as Vd,K as bd,r as ru}from"./index.esm2017-DgZOZcI_.js";var su=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Oe,gc;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(T,p){function I(){}I.prototype=p.prototype,T.D=p.prototype,T.prototype=new I,T.prototype.constructor=T,T.C=function(E,w,R){for(var y=Array(arguments.length-2),Ht=2;Ht<arguments.length;Ht++)y[Ht-2]=arguments[Ht];return p.prototype[w].apply(E,y)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,p,I){I||(I=0);var E=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)E[w]=p.charCodeAt(I++)|p.charCodeAt(I++)<<8|p.charCodeAt(I++)<<16|p.charCodeAt(I++)<<24;else for(w=0;16>w;++w)E[w]=p[I++]|p[I++]<<8|p[I++]<<16|p[I++]<<24;p=T.g[0],I=T.g[1],w=T.g[2];var R=T.g[3],y=p+(R^I&(w^R))+E[0]+3614090360&4294967295;p=I+(y<<7&4294967295|y>>>25),y=R+(w^p&(I^w))+E[1]+3905402710&4294967295,R=p+(y<<12&4294967295|y>>>20),y=w+(I^R&(p^I))+E[2]+606105819&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(p^w&(R^p))+E[3]+3250441966&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(R^I&(w^R))+E[4]+4118548399&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(w^p&(I^w))+E[5]+1200080426&4294967295,R=p+(y<<12&4294967295|y>>>20),y=w+(I^R&(p^I))+E[6]+2821735955&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(p^w&(R^p))+E[7]+4249261313&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(R^I&(w^R))+E[8]+1770035416&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(w^p&(I^w))+E[9]+2336552879&4294967295,R=p+(y<<12&4294967295|y>>>20),y=w+(I^R&(p^I))+E[10]+4294925233&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(p^w&(R^p))+E[11]+2304563134&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(R^I&(w^R))+E[12]+1804603682&4294967295,p=I+(y<<7&4294967295|y>>>25),y=R+(w^p&(I^w))+E[13]+4254626195&4294967295,R=p+(y<<12&4294967295|y>>>20),y=w+(I^R&(p^I))+E[14]+2792965006&4294967295,w=R+(y<<17&4294967295|y>>>15),y=I+(p^w&(R^p))+E[15]+1236535329&4294967295,I=w+(y<<22&4294967295|y>>>10),y=p+(w^R&(I^w))+E[1]+4129170786&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(p^I))+E[6]+3225465664&4294967295,R=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(R^p))+E[11]+643717713&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(w^R))+E[0]+3921069994&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(w^R&(I^w))+E[5]+3593408605&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(p^I))+E[10]+38016083&4294967295,R=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(R^p))+E[15]+3634488961&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(w^R))+E[4]+3889429448&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(w^R&(I^w))+E[9]+568446438&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(p^I))+E[14]+3275163606&4294967295,R=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(R^p))+E[3]+4107603335&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(w^R))+E[8]+1163531501&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(w^R&(I^w))+E[13]+2850285829&4294967295,p=I+(y<<5&4294967295|y>>>27),y=R+(I^w&(p^I))+E[2]+4243563512&4294967295,R=p+(y<<9&4294967295|y>>>23),y=w+(p^I&(R^p))+E[7]+1735328473&4294967295,w=R+(y<<14&4294967295|y>>>18),y=I+(R^p&(w^R))+E[12]+2368359562&4294967295,I=w+(y<<20&4294967295|y>>>12),y=p+(I^w^R)+E[5]+4294588738&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^w)+E[8]+2272392833&4294967295,R=p+(y<<11&4294967295|y>>>21),y=w+(R^p^I)+E[11]+1839030562&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^p)+E[14]+4259657740&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(I^w^R)+E[1]+2763975236&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^w)+E[4]+1272893353&4294967295,R=p+(y<<11&4294967295|y>>>21),y=w+(R^p^I)+E[7]+4139469664&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^p)+E[10]+3200236656&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(I^w^R)+E[13]+681279174&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^w)+E[0]+3936430074&4294967295,R=p+(y<<11&4294967295|y>>>21),y=w+(R^p^I)+E[3]+3572445317&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^p)+E[6]+76029189&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(I^w^R)+E[9]+3654602809&4294967295,p=I+(y<<4&4294967295|y>>>28),y=R+(p^I^w)+E[12]+3873151461&4294967295,R=p+(y<<11&4294967295|y>>>21),y=w+(R^p^I)+E[15]+530742520&4294967295,w=R+(y<<16&4294967295|y>>>16),y=I+(w^R^p)+E[2]+3299628645&4294967295,I=w+(y<<23&4294967295|y>>>9),y=p+(w^(I|~R))+E[0]+4096336452&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~w))+E[7]+1126891415&4294967295,R=p+(y<<10&4294967295|y>>>22),y=w+(p^(R|~I))+E[14]+2878612391&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~p))+E[5]+4237533241&4294967295,I=w+(y<<21&4294967295|y>>>11),y=p+(w^(I|~R))+E[12]+1700485571&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~w))+E[3]+2399980690&4294967295,R=p+(y<<10&4294967295|y>>>22),y=w+(p^(R|~I))+E[10]+4293915773&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~p))+E[1]+2240044497&4294967295,I=w+(y<<21&4294967295|y>>>11),y=p+(w^(I|~R))+E[8]+1873313359&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~w))+E[15]+4264355552&4294967295,R=p+(y<<10&4294967295|y>>>22),y=w+(p^(R|~I))+E[6]+2734768916&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~p))+E[13]+1309151649&4294967295,I=w+(y<<21&4294967295|y>>>11),y=p+(w^(I|~R))+E[4]+4149444226&4294967295,p=I+(y<<6&4294967295|y>>>26),y=R+(I^(p|~w))+E[11]+3174756917&4294967295,R=p+(y<<10&4294967295|y>>>22),y=w+(p^(R|~I))+E[2]+718787259&4294967295,w=R+(y<<15&4294967295|y>>>17),y=I+(R^(w|~p))+E[9]+3951481745&4294967295,T.g[0]=T.g[0]+p&4294967295,T.g[1]=T.g[1]+(w+(y<<21&4294967295|y>>>11))&4294967295,T.g[2]=T.g[2]+w&4294967295,T.g[3]=T.g[3]+R&4294967295}n.prototype.u=function(T,p){p===void 0&&(p=T.length);for(var I=p-this.blockSize,E=this.B,w=this.h,R=0;R<p;){if(w==0)for(;R<=I;)s(this,T,R),R+=this.blockSize;if(typeof T=="string"){for(;R<p;)if(E[w++]=T.charCodeAt(R++),w==this.blockSize){s(this,E),w=0;break}}else for(;R<p;)if(E[w++]=T[R++],w==this.blockSize){s(this,E),w=0;break}}this.h=w,this.o+=p},n.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var p=1;p<T.length-8;++p)T[p]=0;var I=8*this.o;for(p=T.length-8;p<T.length;++p)T[p]=I&255,I/=256;for(this.u(T),T=Array(16),p=I=0;4>p;++p)for(var E=0;32>E;E+=8)T[I++]=this.g[p]>>>E&255;return T};function i(T,p){var I=u;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=p(T)}function a(T,p){this.h=p;for(var I=[],E=!0,w=T.length-1;0<=w;w--){var R=T[w]|0;E&&R==p||(I[w]=R,E=!1)}this.g=I}var u={};function l(T){return-128<=T&&128>T?i(T,function(p){return new a([p|0],0>p?-1:0)}):new a([T|0],0>T?-1:0)}function d(T){if(isNaN(T)||!isFinite(T))return g;if(0>T)return b(d(-T));for(var p=[],I=1,E=0;T>=I;E++)p[E]=T/I|0,I*=4294967296;return new a(p,0)}function f(T,p){if(T.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(T.charAt(0)=="-")return b(f(T.substring(1),p));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=d(Math.pow(p,8)),E=g,w=0;w<T.length;w+=8){var R=Math.min(8,T.length-w),y=parseInt(T.substring(w,w+R),p);8>R?(R=d(Math.pow(p,R)),E=E.j(R).add(d(y))):(E=E.j(I),E=E.add(d(y)))}return E}var g=l(0),_=l(1),P=l(16777216);r=a.prototype,r.m=function(){if(N(this))return-b(this).m();for(var T=0,p=1,I=0;I<this.g.length;I++){var E=this.i(I);T+=(0<=E?E:4294967296+E)*p,p*=4294967296}return T},r.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(D(this))return"0";if(N(this))return"-"+b(this).toString(T);for(var p=d(Math.pow(T,6)),I=this,E="";;){var w=Q(I,p).g;I=U(I,w.j(p));var R=((0<I.g.length?I.g[0]:I.h)>>>0).toString(T);if(I=w,D(I))return R+E;for(;6>R.length;)R="0"+R;E=R+E}},r.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function D(T){if(T.h!=0)return!1;for(var p=0;p<T.g.length;p++)if(T.g[p]!=0)return!1;return!0}function N(T){return T.h==-1}r.l=function(T){return T=U(this,T),N(T)?-1:D(T)?0:1};function b(T){for(var p=T.g.length,I=[],E=0;E<p;E++)I[E]=~T.g[E];return new a(I,~T.h).add(_)}r.abs=function(){return N(this)?b(this):this},r.add=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0,w=0;w<=p;w++){var R=E+(this.i(w)&65535)+(T.i(w)&65535),y=(R>>>16)+(this.i(w)>>>16)+(T.i(w)>>>16);E=y>>>16,R&=65535,y&=65535,I[w]=y<<16|R}return new a(I,I[I.length-1]&-2147483648?-1:0)};function U(T,p){return T.add(b(p))}r.j=function(T){if(D(this)||D(T))return g;if(N(this))return N(T)?b(this).j(b(T)):b(b(this).j(T));if(N(T))return b(this.j(b(T)));if(0>this.l(P)&&0>T.l(P))return d(this.m()*T.m());for(var p=this.g.length+T.g.length,I=[],E=0;E<2*p;E++)I[E]=0;for(E=0;E<this.g.length;E++)for(var w=0;w<T.g.length;w++){var R=this.i(E)>>>16,y=this.i(E)&65535,Ht=T.i(w)>>>16,Un=T.i(w)&65535;I[2*E+2*w]+=y*Un,G(I,2*E+2*w),I[2*E+2*w+1]+=R*Un,G(I,2*E+2*w+1),I[2*E+2*w+1]+=y*Ht,G(I,2*E+2*w+1),I[2*E+2*w+2]+=R*Ht,G(I,2*E+2*w+2)}for(E=0;E<p;E++)I[E]=I[2*E+1]<<16|I[2*E];for(E=p;E<2*p;E++)I[E]=0;return new a(I,0)};function G(T,p){for(;(T[p]&65535)!=T[p];)T[p+1]+=T[p]>>>16,T[p]&=65535,p++}function q(T,p){this.g=T,this.h=p}function Q(T,p){if(D(p))throw Error("division by zero");if(D(T))return new q(g,g);if(N(T))return p=Q(b(T),p),new q(b(p.g),b(p.h));if(N(p))return p=Q(T,b(p)),new q(b(p.g),p.h);if(30<T.g.length){if(N(T)||N(p))throw Error("slowDivide_ only works with positive integers.");for(var I=_,E=p;0>=E.l(T);)I=X(I),E=X(E);var w=K(I,1),R=K(E,1);for(E=K(E,2),I=K(I,2);!D(E);){var y=R.add(E);0>=y.l(T)&&(w=w.add(I),R=y),E=K(E,1),I=K(I,1)}return p=U(T,w.j(p)),new q(w,p)}for(w=g;0<=T.l(p);){for(I=Math.max(1,Math.floor(T.m()/p.m())),E=Math.ceil(Math.log(I)/Math.LN2),E=48>=E?1:Math.pow(2,E-48),R=d(I),y=R.j(p);N(y)||0<y.l(T);)I-=E,R=d(I),y=R.j(p);D(R)&&(R=_),w=w.add(R),T=U(T,y)}return new q(w,T)}r.A=function(T){return Q(this,T).h},r.and=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)&T.i(E);return new a(I,this.h&T.h)},r.or=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)|T.i(E);return new a(I,this.h|T.h)},r.xor=function(T){for(var p=Math.max(this.g.length,T.g.length),I=[],E=0;E<p;E++)I[E]=this.i(E)^T.i(E);return new a(I,this.h^T.h)};function X(T){for(var p=T.g.length+1,I=[],E=0;E<p;E++)I[E]=T.i(E)<<1|T.i(E-1)>>>31;return new a(I,T.h)}function K(T,p){var I=p>>5;p%=32;for(var E=T.g.length-I,w=[],R=0;R<E;R++)w[R]=0<p?T.i(R+I)>>>p|T.i(R+I+1)<<32-p:T.i(R+I);return new a(w,T.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,gc=n,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=d,a.fromString=f,Oe=a}).apply(typeof su<"u"?su:typeof self<"u"?self:typeof window<"u"?window:{});var us=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var pc,_c,lr,yc,gs,Oi,Ic,Tc,Ec;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,h){return o==Array.prototype||o==Object.prototype||(o[c]=h.value),o};function e(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof us=="object"&&us];for(var c=0;c<o.length;++c){var h=o[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var n=e(this);function s(o,c){if(c)t:{var h=n;o=o.split(".");for(var m=0;m<o.length-1;m++){var A=o[m];if(!(A in h))break t;h=h[A]}o=o[o.length-1],m=h[o],c=c(m),c!=m&&c!=null&&t(h,o,{configurable:!0,writable:!0,value:c})}}function i(o,c){o instanceof String&&(o+="");var h=0,m=!1,A={next:function(){if(!m&&h<o.length){var V=h++;return{value:c(V,o[V]),done:!1}}return m=!0,{done:!0,value:void 0}}};return A[Symbol.iterator]=function(){return A},A}s("Array.prototype.values",function(o){return o||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},u=this||self;function l(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function d(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,h){return o.call.apply(o.bind,arguments)}function g(o,c,h){if(!o)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var A=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(A,m),o.apply(c,A)}}return function(){return o.apply(c,arguments)}}function _(o,c,h){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:g,_.apply(null,arguments)}function P(o,c){var h=Array.prototype.slice.call(arguments,1);return function(){var m=h.slice();return m.push.apply(m,arguments),o.apply(this,m)}}function D(o,c){function h(){}h.prototype=c.prototype,o.aa=c.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(m,A,V){for(var k=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)k[nt-2]=arguments[nt];return c.prototype[A].apply(m,k)}}function N(o){const c=o.length;if(0<c){const h=Array(c);for(let m=0;m<c;m++)h[m]=o[m];return h}return[]}function b(o,c){for(let h=1;h<arguments.length;h++){const m=arguments[h];if(l(m)){const A=o.length||0,V=m.length||0;o.length=A+V;for(let k=0;k<V;k++)o[A+k]=m[k]}else o.push(m)}}class U{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function G(o){return/^[\s\xa0]*$/.test(o)}function q(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function Q(o){return Q[" "](o),o}Q[" "]=function(){};var X=q().indexOf("Gecko")!=-1&&!(q().toLowerCase().indexOf("webkit")!=-1&&q().indexOf("Edge")==-1)&&!(q().indexOf("Trident")!=-1||q().indexOf("MSIE")!=-1)&&q().indexOf("Edge")==-1;function K(o,c,h){for(const m in o)c.call(h,o[m],m,o)}function T(o,c){for(const h in o)c.call(void 0,o[h],h,o)}function p(o){const c={};for(const h in o)c[h]=o[h];return c}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function E(o,c){let h,m;for(let A=1;A<arguments.length;A++){m=arguments[A];for(h in m)o[h]=m[h];for(let V=0;V<I.length;V++)h=I[V],Object.prototype.hasOwnProperty.call(m,h)&&(o[h]=m[h])}}function w(o){var c=1;o=o.split(":");const h=[];for(;0<c&&o.length;)h.push(o.shift()),c--;return o.length&&h.push(o.join(":")),h}function R(o){u.setTimeout(()=>{throw o},0)}function y(){var o=ui;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class Ht{constructor(){this.h=this.g=null}add(c,h){const m=Un.get();m.set(c,h),this.h?this.h.next=m:this.g=m,this.h=m}}var Un=new U(()=>new qh,o=>o.reset());class qh{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Gn,zn=!1,ui=new Ht,ra=()=>{const o=u.Promise.resolve(void 0);Gn=()=>{o.then(Bh)}};var Bh=()=>{for(var o;o=y();){try{o.h.call(o.g)}catch(h){R(h)}var c=Un;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}zn=!1};function oe(){this.s=this.s,this.C=this.C}oe.prototype.s=!1,oe.prototype.ma=function(){this.s||(this.s=!0,this.N())},oe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Pt(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Pt.prototype.h=function(){this.defaultPrevented=!0};var Uh=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,c),u.removeEventListener("test",h,c)}catch{}return o}();function jn(o,c){if(Pt.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,m=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(X){t:{try{Q(c.nodeName);var A=!0;break t}catch{}A=!1}A||(c=null)}}else h=="mouseover"?c=o.fromElement:h=="mouseout"&&(c=o.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Gh[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&jn.aa.h.call(this)}}D(jn,Pt);var Gh={2:"touch",3:"pen",4:"mouse"};jn.prototype.h=function(){jn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var jr="closure_listenable_"+(1e6*Math.random()|0),zh=0;function jh(o,c,h,m,A){this.listener=o,this.proxy=null,this.src=c,this.type=h,this.capture=!!m,this.ha=A,this.key=++zh,this.da=this.fa=!1}function Kr(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function Qr(o){this.src=o,this.g={},this.h=0}Qr.prototype.add=function(o,c,h,m,A){var V=o.toString();o=this.g[V],o||(o=this.g[V]=[],this.h++);var k=li(o,c,m,A);return-1<k?(c=o[k],h||(c.fa=!1)):(c=new jh(c,this.src,V,!!m,A),c.fa=h,o.push(c)),c};function ci(o,c){var h=c.type;if(h in o.g){var m=o.g[h],A=Array.prototype.indexOf.call(m,c,void 0),V;(V=0<=A)&&Array.prototype.splice.call(m,A,1),V&&(Kr(c),o.g[h].length==0&&(delete o.g[h],o.h--))}}function li(o,c,h,m){for(var A=0;A<o.length;++A){var V=o[A];if(!V.da&&V.listener==c&&V.capture==!!h&&V.ha==m)return A}return-1}var hi="closure_lm_"+(1e6*Math.random()|0),di={};function sa(o,c,h,m,A){if(Array.isArray(c)){for(var V=0;V<c.length;V++)sa(o,c[V],h,m,A);return null}return h=aa(h),o&&o[jr]?o.K(c,h,d(m)?!!m.capture:!1,A):Kh(o,c,h,!1,m,A)}function Kh(o,c,h,m,A,V){if(!c)throw Error("Invalid event type");var k=d(A)?!!A.capture:!!A,nt=mi(o);if(nt||(o[hi]=nt=new Qr(o)),h=nt.add(c,h,m,k,V),h.proxy)return h;if(m=Qh(),h.proxy=m,m.src=o,m.listener=h,o.addEventListener)Uh||(A=k),A===void 0&&(A=!1),o.addEventListener(c.toString(),m,A);else if(o.attachEvent)o.attachEvent(oa(c.toString()),m);else if(o.addListener&&o.removeListener)o.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return h}function Qh(){function o(h){return c.call(o.src,o.listener,h)}const c=$h;return o}function ia(o,c,h,m,A){if(Array.isArray(c))for(var V=0;V<c.length;V++)ia(o,c[V],h,m,A);else m=d(m)?!!m.capture:!!m,h=aa(h),o&&o[jr]?(o=o.i,c=String(c).toString(),c in o.g&&(V=o.g[c],h=li(V,h,m,A),-1<h&&(Kr(V[h]),Array.prototype.splice.call(V,h,1),V.length==0&&(delete o.g[c],o.h--)))):o&&(o=mi(o))&&(c=o.g[c.toString()],o=-1,c&&(o=li(c,h,m,A)),(h=-1<o?c[o]:null)&&fi(h))}function fi(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[jr])ci(c.i,o);else{var h=o.type,m=o.proxy;c.removeEventListener?c.removeEventListener(h,m,o.capture):c.detachEvent?c.detachEvent(oa(h),m):c.addListener&&c.removeListener&&c.removeListener(m),(h=mi(c))?(ci(h,o),h.h==0&&(h.src=null,c[hi]=null)):Kr(o)}}}function oa(o){return o in di?di[o]:di[o]="on"+o}function $h(o,c){if(o.da)o=!0;else{c=new jn(c,this);var h=o.listener,m=o.ha||o.src;o.fa&&fi(o),o=h.call(m,c)}return o}function mi(o){return o=o[hi],o instanceof Qr?o:null}var gi="__closure_events_fn_"+(1e9*Math.random()>>>0);function aa(o){return typeof o=="function"?o:(o[gi]||(o[gi]=function(c){return o.handleEvent(c)}),o[gi])}function St(){oe.call(this),this.i=new Qr(this),this.M=this,this.F=null}D(St,oe),St.prototype[jr]=!0,St.prototype.removeEventListener=function(o,c,h,m){ia(this,o,c,h,m)};function kt(o,c){var h,m=o.F;if(m)for(h=[];m;m=m.F)h.push(m);if(o=o.M,m=c.type||c,typeof c=="string")c=new Pt(c,o);else if(c instanceof Pt)c.target=c.target||o;else{var A=c;c=new Pt(m,o),E(c,A)}if(A=!0,h)for(var V=h.length-1;0<=V;V--){var k=c.g=h[V];A=$r(k,m,!0,c)&&A}if(k=c.g=o,A=$r(k,m,!0,c)&&A,A=$r(k,m,!1,c)&&A,h)for(V=0;V<h.length;V++)k=c.g=h[V],A=$r(k,m,!1,c)&&A}St.prototype.N=function(){if(St.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var h=o.g[c],m=0;m<h.length;m++)Kr(h[m]);delete o.g[c],o.h--}}this.F=null},St.prototype.K=function(o,c,h,m){return this.i.add(String(o),c,!1,h,m)},St.prototype.L=function(o,c,h,m){return this.i.add(String(o),c,!0,h,m)};function $r(o,c,h,m){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var A=!0,V=0;V<c.length;++V){var k=c[V];if(k&&!k.da&&k.capture==h){var nt=k.listener,wt=k.ha||k.src;k.fa&&ci(o.i,k),A=nt.call(wt,m)!==!1&&A}}return A&&!m.defaultPrevented}function ua(o,c,h){if(typeof o=="function")h&&(o=_(o,h));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:u.setTimeout(o,c||0)}function ca(o){o.g=ua(()=>{o.g=null,o.i&&(o.i=!1,ca(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class Wh extends oe{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ca(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Kn(o){oe.call(this),this.h=o,this.g={}}D(Kn,oe);var la=[];function ha(o){K(o.g,function(c,h){this.g.hasOwnProperty(h)&&fi(c)},o),o.g={}}Kn.prototype.N=function(){Kn.aa.N.call(this),ha(this)},Kn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var pi=u.JSON.stringify,Hh=u.JSON.parse,Jh=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function _i(){}_i.prototype.h=null;function da(o){return o.h||(o.h=o.i())}function fa(){}var Qn={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function yi(){Pt.call(this,"d")}D(yi,Pt);function Ii(){Pt.call(this,"c")}D(Ii,Pt);var Pe={},ma=null;function Wr(){return ma=ma||new St}Pe.La="serverreachability";function ga(o){Pt.call(this,Pe.La,o)}D(ga,Pt);function $n(o){const c=Wr();kt(c,new ga(c))}Pe.STAT_EVENT="statevent";function pa(o,c){Pt.call(this,Pe.STAT_EVENT,o),this.stat=c}D(pa,Pt);function Mt(o){const c=Wr();kt(c,new pa(c,o))}Pe.Ma="timingevent";function _a(o,c){Pt.call(this,Pe.Ma,o),this.size=c}D(_a,Pt);function Wn(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},c)}function Hn(){this.g=!0}Hn.prototype.xa=function(){this.g=!1};function Yh(o,c,h,m,A,V){o.info(function(){if(o.g)if(V)for(var k="",nt=V.split("&"),wt=0;wt<nt.length;wt++){var Y=nt[wt].split("=");if(1<Y.length){var Vt=Y[0];Y=Y[1];var bt=Vt.split("_");k=2<=bt.length&&bt[1]=="type"?k+(Vt+"="+Y+"&"):k+(Vt+"=redacted&")}}else k=null;else k=V;return"XMLHTTP REQ ("+m+") [attempt "+A+"]: "+c+`
`+h+`
`+k})}function Xh(o,c,h,m,A,V,k){o.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+A+"]: "+c+`
`+h+`
`+V+" "+k})}function Xe(o,c,h,m){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+td(o,h)+(m?" "+m:"")})}function Zh(o,c){o.info(function(){return"TIMEOUT: "+c})}Hn.prototype.info=function(){};function td(o,c){if(!o.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var m=h[o];if(!(2>m.length)){var A=m[1];if(Array.isArray(A)&&!(1>A.length)){var V=A[0];if(V!="noop"&&V!="stop"&&V!="close")for(var k=1;k<A.length;k++)A[k]=""}}}}return pi(h)}catch{return c}}var Hr={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ya={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ti;function Jr(){}D(Jr,_i),Jr.prototype.g=function(){return new XMLHttpRequest},Jr.prototype.i=function(){return{}},Ti=new Jr;function ae(o,c,h,m){this.j=o,this.i=c,this.l=h,this.R=m||1,this.U=new Kn(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Ia}function Ia(){this.i=null,this.g="",this.h=!1}var Ta={},Ei={};function wi(o,c,h){o.L=1,o.v=ts(Jt(c)),o.m=h,o.P=!0,Ea(o,null)}function Ea(o,c){o.F=Date.now(),Yr(o),o.A=Jt(o.v);var h=o.A,m=o.R;Array.isArray(m)||(m=[String(m)]),Ma(h.i,"t",m),o.C=0,h=o.j.J,o.h=new Ia,o.g=Za(o.j,h?c:null,!o.m),0<o.O&&(o.M=new Wh(_(o.Y,o,o.g),o.O)),c=o.U,h=o.g,m=o.ca;var A="readystatechange";Array.isArray(A)||(A&&(la[0]=A.toString()),A=la);for(var V=0;V<A.length;V++){var k=sa(h,A[V],m||c.handleEvent,!1,c.h||c);if(!k)break;c.g[k.key]=k}c=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),$n(),Yh(o.i,o.u,o.A,o.l,o.R,o.m)}ae.prototype.ca=function(o){o=o.target;const c=this.M;c&&Yt(o)==3?c.j():this.Y(o)},ae.prototype.Y=function(o){try{if(o==this.g)t:{const bt=Yt(this.g);var c=this.g.Ba();const en=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Ga(this.g)))){this.J||bt!=4||c==7||(c==8||0>=en?$n(3):$n(2)),vi(this);var h=this.g.Z();this.X=h;e:if(wa(this)){var m=Ga(this.g);o="";var A=m.length,V=Yt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Se(this),Jn(this);var k="";break e}this.h.i=new u.TextDecoder}for(c=0;c<A;c++)this.h.h=!0,o+=this.h.i.decode(m[c],{stream:!(V&&c==A-1)});m.length=0,this.h.g+=o,this.C=0,k=this.h.g}else k=this.g.oa();if(this.o=h==200,Xh(this.i,this.u,this.A,this.l,this.R,bt,h),this.o){if(this.T&&!this.K){e:{if(this.g){var nt,wt=this.g;if((nt=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!G(nt)){var Y=nt;break e}}Y=null}if(h=Y)Xe(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ai(this,h);else{this.o=!1,this.s=3,Mt(12),Se(this),Jn(this);break t}}if(this.P){h=!0;let Gt;for(;!this.J&&this.C<k.length;)if(Gt=ed(this,k),Gt==Ei){bt==4&&(this.s=4,Mt(14),h=!1),Xe(this.i,this.l,null,"[Incomplete Response]");break}else if(Gt==Ta){this.s=4,Mt(15),Xe(this.i,this.l,k,"[Invalid Chunk]"),h=!1;break}else Xe(this.i,this.l,Gt,null),Ai(this,Gt);if(wa(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||k.length!=0||this.h.h||(this.s=1,Mt(16),h=!1),this.o=this.o&&h,!h)Xe(this.i,this.l,k,"[Invalid Chunked Response]"),Se(this),Jn(this);else if(0<k.length&&!this.W){this.W=!0;var Vt=this.j;Vt.g==this&&Vt.ba&&!Vt.M&&(Vt.j.info("Great, no buffering proxy detected. Bytes received: "+k.length),Ci(Vt),Vt.M=!0,Mt(11))}}else Xe(this.i,this.l,k,null),Ai(this,k);bt==4&&Se(this),this.o&&!this.J&&(bt==4?Ha(this.j,this):(this.o=!1,Yr(this)))}else yd(this.g),h==400&&0<k.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),Se(this),Jn(this)}}}catch{}finally{}};function wa(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ed(o,c){var h=o.C,m=c.indexOf(`
`,h);return m==-1?Ei:(h=Number(c.substring(h,m)),isNaN(h)?Ta:(m+=1,m+h>c.length?Ei:(c=c.slice(m,m+h),o.C=m+h,c)))}ae.prototype.cancel=function(){this.J=!0,Se(this)};function Yr(o){o.S=Date.now()+o.I,va(o,o.I)}function va(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Wn(_(o.ba,o),c)}function vi(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ae.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Zh(this.i,this.A),this.L!=2&&($n(),Mt(17)),Se(this),this.s=2,Jn(this)):va(this,this.S-o)};function Jn(o){o.j.G==0||o.J||Ha(o.j,o)}function Se(o){vi(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,ha(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function Ai(o,c){try{var h=o.j;if(h.G!=0&&(h.g==o||Ri(h.h,o))){if(!o.K&&Ri(h.h,o)&&h.G==3){try{var m=h.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var A=m;if(A[0]==0){t:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)is(h),rs(h);else break t;bi(h),Mt(18)}}else h.za=A[1],0<h.za-h.T&&37500>A[2]&&h.F&&h.v==0&&!h.C&&(h.C=Wn(_(h.Za,h),6e3));if(1>=Pa(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else be(h,11)}else if((o.K||h.g==o)&&is(h),!G(c))for(A=h.Da.g.parse(c),c=0;c<A.length;c++){let Y=A[c];if(h.T=Y[0],Y=Y[1],h.G==2)if(Y[0]=="c"){h.K=Y[1],h.ia=Y[2];const Vt=Y[3];Vt!=null&&(h.la=Vt,h.j.info("VER="+h.la));const bt=Y[4];bt!=null&&(h.Aa=bt,h.j.info("SVER="+h.Aa));const en=Y[5];en!=null&&typeof en=="number"&&0<en&&(m=1.5*en,h.L=m,h.j.info("backChannelRequestTimeoutMs_="+m)),m=h;const Gt=o.g;if(Gt){const as=Gt.g?Gt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(as){var V=m.h;V.g||as.indexOf("spdy")==-1&&as.indexOf("quic")==-1&&as.indexOf("h2")==-1||(V.j=V.l,V.g=new Set,V.h&&(Pi(V,V.h),V.h=null))}if(m.D){const xi=Gt.g?Gt.g.getResponseHeader("X-HTTP-Session-Id"):null;xi&&(m.ya=xi,st(m.I,m.D,xi))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),m=h;var k=o;if(m.qa=Xa(m,m.J?m.ia:null,m.W),k.K){Sa(m.h,k);var nt=k,wt=m.L;wt&&(nt.I=wt),nt.B&&(vi(nt),Yr(nt)),m.g=k}else $a(m);0<h.i.length&&ss(h)}else Y[0]!="stop"&&Y[0]!="close"||be(h,7);else h.G==3&&(Y[0]=="stop"||Y[0]=="close"?Y[0]=="stop"?be(h,7):Vi(h):Y[0]!="noop"&&h.l&&h.l.ta(Y),h.v=0)}}$n(4)}catch{}}var nd=class{constructor(o,c){this.g=o,this.map=c}};function Aa(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ra(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Pa(o){return o.h?1:o.g?o.g.size:0}function Ri(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function Pi(o,c){o.g?o.g.add(c):o.h=c}function Sa(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}Aa.prototype.cancel=function(){if(this.i=Va(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Va(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const h of o.g.values())c=c.concat(h.D);return c}return N(o.i)}function rd(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(l(o)){for(var c=[],h=o.length,m=0;m<h;m++)c.push(o[m]);return c}c=[],h=0;for(m in o)c[h++]=o[m];return c}function sd(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(l(o)||typeof o=="string"){var c=[];o=o.length;for(var h=0;h<o;h++)c.push(h);return c}c=[],h=0;for(const m in o)c[h++]=m;return c}}}function ba(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(l(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var h=sd(o),m=rd(o),A=m.length,V=0;V<A;V++)c.call(void 0,m[V],h&&h[V],o)}var Ca=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function id(o,c){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var m=o[h].indexOf("="),A=null;if(0<=m){var V=o[h].substring(0,m);A=o[h].substring(m+1)}else V=o[h];c(V,A?decodeURIComponent(A.replace(/\+/g," ")):"")}}}function Ve(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof Ve){this.h=o.h,Xr(this,o.j),this.o=o.o,this.g=o.g,Zr(this,o.s),this.l=o.l;var c=o.i,h=new Zn;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),xa(this,h),this.m=o.m}else o&&(c=String(o).match(Ca))?(this.h=!1,Xr(this,c[1]||"",!0),this.o=Yn(c[2]||""),this.g=Yn(c[3]||"",!0),Zr(this,c[4]),this.l=Yn(c[5]||"",!0),xa(this,c[6]||"",!0),this.m=Yn(c[7]||"")):(this.h=!1,this.i=new Zn(null,this.h))}Ve.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Xn(c,Da,!0),":");var h=this.g;return(h||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Xn(c,Da,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(Xn(h,h.charAt(0)=="/"?ud:ad,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",Xn(h,ld)),o.join("")};function Jt(o){return new Ve(o)}function Xr(o,c,h){o.j=h?Yn(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Zr(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function xa(o,c,h){c instanceof Zn?(o.i=c,hd(o.i,o.h)):(h||(c=Xn(c,cd)),o.i=new Zn(c,o.h))}function st(o,c,h){o.i.set(c,h)}function ts(o){return st(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function Yn(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Xn(o,c,h){return typeof o=="string"?(o=encodeURI(o).replace(c,od),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function od(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Da=/[#\/\?@]/g,ad=/[#\?:]/g,ud=/[#\?]/g,cd=/[#\?@]/g,ld=/#/g;function Zn(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function ue(o){o.g||(o.g=new Map,o.h=0,o.i&&id(o.i,function(c,h){o.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}r=Zn.prototype,r.add=function(o,c){ue(this),this.i=null,o=Ze(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(c),this.h+=1,this};function Na(o,c){ue(o),c=Ze(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function ka(o,c){return ue(o),c=Ze(o,c),o.g.has(c)}r.forEach=function(o,c){ue(this),this.g.forEach(function(h,m){h.forEach(function(A){o.call(c,A,m,this)},this)},this)},r.na=function(){ue(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let m=0;m<c.length;m++){const A=o[m];for(let V=0;V<A.length;V++)h.push(c[m])}return h},r.V=function(o){ue(this);let c=[];if(typeof o=="string")ka(this,o)&&(c=c.concat(this.g.get(Ze(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)c=c.concat(o[h])}return c},r.set=function(o,c){return ue(this),this.i=null,o=Ze(this,o),ka(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},r.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Ma(o,c,h){Na(o,c),0<h.length&&(o.i=null,o.g.set(Ze(o,c),N(h)),o.h+=h.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var m=c[h];const V=encodeURIComponent(String(m)),k=this.V(m);for(m=0;m<k.length;m++){var A=V;k[m]!==""&&(A+="="+encodeURIComponent(String(k[m]))),o.push(A)}}return this.i=o.join("&")};function Ze(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function hd(o,c){c&&!o.j&&(ue(o),o.i=null,o.g.forEach(function(h,m){var A=m.toLowerCase();m!=A&&(Na(this,m),Ma(this,A,h))},o)),o.j=c}function dd(o,c){const h=new Hn;if(u.Image){const m=new Image;m.onload=P(ce,h,"TestLoadImage: loaded",!0,c,m),m.onerror=P(ce,h,"TestLoadImage: error",!1,c,m),m.onabort=P(ce,h,"TestLoadImage: abort",!1,c,m),m.ontimeout=P(ce,h,"TestLoadImage: timeout",!1,c,m),u.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=o}else c(!1)}function fd(o,c){const h=new Hn,m=new AbortController,A=setTimeout(()=>{m.abort(),ce(h,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:m.signal}).then(V=>{clearTimeout(A),V.ok?ce(h,"TestPingServer: ok",!0,c):ce(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(A),ce(h,"TestPingServer: error",!1,c)})}function ce(o,c,h,m,A){try{A&&(A.onload=null,A.onerror=null,A.onabort=null,A.ontimeout=null),m(h)}catch{}}function md(){this.g=new Jh}function gd(o,c,h){const m=h||"";try{ba(o,function(A,V){let k=A;d(A)&&(k=pi(A)),c.push(m+V+"="+encodeURIComponent(k))})}catch(A){throw c.push(m+"type="+encodeURIComponent("_badmap")),A}}function tr(o){this.l=o.Ub||null,this.j=o.eb||!1}D(tr,_i),tr.prototype.g=function(){return new es(this.l,this.j)},tr.prototype.i=function(o){return function(){return o}}({});function es(o,c){St.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(es,St),r=es.prototype,r.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,nr(this)},r.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||u).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=0},r.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,nr(this)),this.g&&(this.readyState=3,nr(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fa(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fa(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}r.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?er(this):nr(this),this.readyState==3&&Fa(this)}},r.Ra=function(o){this.g&&(this.response=this.responseText=o,er(this))},r.Qa=function(o){this.g&&(this.response=o,er(this))},r.ga=function(){this.g&&er(this)};function er(o){o.readyState=4,o.l=null,o.j=null,o.v=null,nr(o)}r.setRequestHeader=function(o,c){this.u.append(o,c)},r.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=c.next();return o.join(`\r
`)};function nr(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(es.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function Oa(o){let c="";return K(o,function(h,m){c+=m,c+=":",c+=h,c+=`\r
`}),c}function Si(o,c,h){t:{for(m in h){var m=!1;break t}m=!0}m||(h=Oa(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):st(o,c,h))}function lt(o){St.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(lt,St);var pd=/^https?$/i,_d=["POST","PUT"];r=lt.prototype,r.Ha=function(o){this.J=o},r.ea=function(o,c,h,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ti.g(),this.v=this.o?da(this.o):da(Ti),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(V){La(this,V);return}if(o=h||"",h=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var A in m)h.set(A,m[A]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const V of m.keys())h.set(V,m.get(V));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(h.keys()).find(V=>V.toLowerCase()=="content-type"),A=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(_d,c,void 0))||m||A||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[V,k]of h)this.g.setRequestHeader(V,k);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ua(this),this.u=!0,this.g.send(o),this.u=!1}catch(V){La(this,V)}};function La(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,qa(o),ns(o)}function qa(o){o.A||(o.A=!0,kt(o,"complete"),kt(o,"error"))}r.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,kt(this,"complete"),kt(this,"abort"),ns(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ns(this,!0)),lt.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ba(this):this.bb())},r.bb=function(){Ba(this)};function Ba(o){if(o.h&&typeof a<"u"&&(!o.v[1]||Yt(o)!=4||o.Z()!=2)){if(o.u&&Yt(o)==4)ua(o.Ea,0,o);else if(kt(o,"readystatechange"),Yt(o)==4){o.h=!1;try{const k=o.Z();t:switch(k){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break t;default:c=!1}var h;if(!(h=c)){var m;if(m=k===0){var A=String(o.D).match(Ca)[1]||null;!A&&u.self&&u.self.location&&(A=u.self.location.protocol.slice(0,-1)),m=!pd.test(A?A.toLowerCase():"")}h=m}if(h)kt(o,"complete"),kt(o,"success");else{o.m=6;try{var V=2<Yt(o)?o.g.statusText:""}catch{V=""}o.l=V+" ["+o.Z()+"]",qa(o)}}finally{ns(o)}}}}function ns(o,c){if(o.g){Ua(o);const h=o.g,m=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||kt(o,"ready");try{h.onreadystatechange=m}catch{}}}function Ua(o){o.I&&(u.clearTimeout(o.I),o.I=null)}r.isActive=function(){return!!this.g};function Yt(o){return o.g?o.g.readyState:0}r.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),Hh(c)}};function Ga(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function yd(o){const c={};o=(o.g&&2<=Yt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<o.length;m++){if(G(o[m]))continue;var h=w(o[m]);const A=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const V=c[A]||[];c[A]=V,V.push(h)}T(c,function(m){return m.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function rr(o,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||c}function za(o){this.Aa=0,this.i=[],this.j=new Hn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=rr("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=rr("baseRetryDelayMs",5e3,o),this.cb=rr("retryDelaySeedMs",1e4,o),this.Wa=rr("forwardChannelMaxRetries",2,o),this.wa=rr("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Aa(o&&o.concurrentRequestLimit),this.Da=new md,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=za.prototype,r.la=8,r.G=1,r.connect=function(o,c,h,m){Mt(0),this.W=o,this.H=c||{},h&&m!==void 0&&(this.H.OSID=h,this.H.OAID=m),this.F=this.X,this.I=Xa(this,null,this.W),ss(this)};function Vi(o){if(ja(o),o.G==3){var c=o.U++,h=Jt(o.I);if(st(h,"SID",o.K),st(h,"RID",c),st(h,"TYPE","terminate"),sr(o,h),c=new ae(o,o.j,c),c.L=2,c.v=ts(Jt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=c.v,h=!0),h||(c.g=Za(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Yr(c)}Ya(o)}function rs(o){o.g&&(Ci(o),o.g.cancel(),o.g=null)}function ja(o){rs(o),o.u&&(u.clearTimeout(o.u),o.u=null),is(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function ss(o){if(!Ra(o.h)&&!o.s){o.s=!0;var c=o.Ga;Gn||ra(),zn||(Gn(),zn=!0),ui.add(c,o),o.B=0}}function Id(o,c){return Pa(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Wn(_(o.Ga,o,c),Ja(o,o.B)),o.B++,!0)}r.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const A=new ae(this,this.j,o);let V=this.o;if(this.S&&(V?(V=p(V),E(V,this.S)):V=this.S),this.m!==null||this.O||(A.H=V,V=null),this.P)t:{for(var c=0,h=0;h<this.i.length;h++){e:{var m=this.i[h];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break e}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=h;break t}if(c===4096||h===this.i.length-1){c=h+1;break t}}c=1e3}else c=1e3;c=Qa(this,A,c),h=Jt(this.I),st(h,"RID",o),st(h,"CVER",22),this.D&&st(h,"X-HTTP-Session-Id",this.D),sr(this,h),V&&(this.O?c="headers="+encodeURIComponent(String(Oa(V)))+"&"+c:this.m&&Si(h,this.m,V)),Pi(this.h,A),this.Ua&&st(h,"TYPE","init"),this.P?(st(h,"$req",c),st(h,"SID","null"),A.T=!0,wi(A,h,null)):wi(A,h,c),this.G=2}}else this.G==3&&(o?Ka(this,o):this.i.length==0||Ra(this.h)||Ka(this))};function Ka(o,c){var h;c?h=c.l:h=o.U++;const m=Jt(o.I);st(m,"SID",o.K),st(m,"RID",h),st(m,"AID",o.T),sr(o,m),o.m&&o.o&&Si(m,o.m,o.o),h=new ae(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Qa(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Pi(o.h,h),wi(h,m,c)}function sr(o,c){o.H&&K(o.H,function(h,m){st(c,m,h)}),o.l&&ba({},function(h,m){st(c,m,h)})}function Qa(o,c,h){h=Math.min(o.i.length,h);var m=o.l?_(o.l.Na,o.l,o):null;t:{var A=o.i;let V=-1;for(;;){const k=["count="+h];V==-1?0<h?(V=A[0].g,k.push("ofs="+V)):V=0:k.push("ofs="+V);let nt=!0;for(let wt=0;wt<h;wt++){let Y=A[wt].g;const Vt=A[wt].map;if(Y-=V,0>Y)V=Math.max(0,A[wt].g-100),nt=!1;else try{gd(Vt,k,"req"+Y+"_")}catch{m&&m(Vt)}}if(nt){m=k.join("&");break t}}}return o=o.i.splice(0,h),c.D=o,m}function $a(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Gn||ra(),zn||(Gn(),zn=!0),ui.add(c,o),o.v=0}}function bi(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Wn(_(o.Fa,o),Ja(o,o.v)),o.v++,!0)}r.Fa=function(){if(this.u=null,Wa(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Wn(_(this.ab,this),o)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),rs(this),Wa(this))};function Ci(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Wa(o){o.g=new ae(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=Jt(o.qa);st(c,"RID","rpc"),st(c,"SID",o.K),st(c,"AID",o.T),st(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&st(c,"TO",o.ja),st(c,"TYPE","xmlhttp"),sr(o,c),o.m&&o.o&&Si(c,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=ts(Jt(c)),h.m=null,h.P=!0,Ea(h,o)}r.Za=function(){this.C!=null&&(this.C=null,rs(this),bi(this),Mt(19))};function is(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Ha(o,c){var h=null;if(o.g==c){is(o),Ci(o),o.g=null;var m=2}else if(Ri(o.h,c))h=c.D,Sa(o.h,c),m=1;else return;if(o.G!=0){if(c.o)if(m==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var A=o.B;m=Wr(),kt(m,new _a(m,h)),ss(o)}else $a(o);else if(A=c.s,A==3||A==0&&0<c.X||!(m==1&&Id(o,c)||m==2&&bi(o)))switch(h&&0<h.length&&(c=o.h,c.i=c.i.concat(h)),A){case 1:be(o,5);break;case 4:be(o,10);break;case 3:be(o,6);break;default:be(o,2)}}}function Ja(o,c){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*c}function be(o,c){if(o.j.info("Error code "+c),c==2){var h=_(o.fb,o),m=o.Xa;const A=!m;m=new Ve(m||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||Xr(m,"https"),ts(m),A?dd(m.toString(),h):fd(m.toString(),h)}else Mt(2);o.G=0,o.l&&o.l.sa(c),Ya(o),ja(o)}r.fb=function(o){o?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function Ya(o){if(o.G=0,o.ka=[],o.l){const c=Va(o.h);(c.length!=0||o.i.length!=0)&&(b(o.ka,c),b(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Xa(o,c,h){var m=h instanceof Ve?Jt(h):new Ve(h);if(m.g!="")c&&(m.g=c+"."+m.g),Zr(m,m.s);else{var A=u.location;m=A.protocol,c=c?c+"."+A.hostname:A.hostname,A=+A.port;var V=new Ve(null);m&&Xr(V,m),c&&(V.g=c),A&&Zr(V,A),h&&(V.l=h),m=V}return h=o.D,c=o.ya,h&&c&&st(m,h,c),st(m,"VER",o.la),sr(o,m),m}function Za(o,c,h){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new lt(new tr({eb:h})):new lt(o.pa),c.Ha(o.J),c}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function tu(){}r=tu.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function os(){}os.prototype.g=function(o,c){return new qt(o,c)};function qt(o,c){St.call(this),this.g=new za(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!G(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!G(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new tn(this)}D(qt,St),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Vi(this.g)},qt.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=pi(o),o=h);c.i.push(new nd(c.Ya++,o)),c.G==3&&ss(c)},qt.prototype.N=function(){this.g.l=null,delete this.j,Vi(this.g),delete this.g,qt.aa.N.call(this)};function eu(o){yi.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){t:{for(const h in c){o=h;break t}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}D(eu,yi);function nu(){Ii.call(this),this.status=1}D(nu,Ii);function tn(o){this.g=o}D(tn,tu),tn.prototype.ua=function(){kt(this.g,"a")},tn.prototype.ta=function(o){kt(this.g,new eu(o))},tn.prototype.sa=function(o){kt(this.g,new nu)},tn.prototype.ra=function(){kt(this.g,"b")},os.prototype.createWebChannel=os.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,Ec=function(){return new os},Tc=function(){return Wr()},Ic=Pe,Oi={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Hr.NO_ERROR=0,Hr.TIMEOUT=8,Hr.HTTP_ERROR=6,gs=Hr,ya.COMPLETE="complete",yc=ya,fa.EventType=Qn,Qn.OPEN="a",Qn.CLOSE="b",Qn.ERROR="c",Qn.MESSAGE="d",St.prototype.listen=St.prototype.K,lr=fa,_c=tr,lt.prototype.listenOnce=lt.prototype.L,lt.prototype.getLastError=lt.prototype.Ka,lt.prototype.getLastErrorCode=lt.prototype.Ba,lt.prototype.getStatus=lt.prototype.Z,lt.prototype.getResponseJson=lt.prototype.Oa,lt.prototype.getResponseText=lt.prototype.oa,lt.prototype.send=lt.prototype.ea,lt.prototype.setWithCredentials=lt.prototype.Ha,pc=lt}).apply(typeof us<"u"?us:typeof self<"u"?self:typeof window<"u"?window:{});const iu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}It.UNAUTHENTICATED=new It(null),It.GOOGLE_CREDENTIALS=new It("google-credentials-uid"),It.FIRST_PARTY=new It("first-party-uid"),It.MOCK_USER=new It("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn="10.12.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new Ed("@firebase/firestore");function an(){return pe.logLevel}function up(r){pe.setLogLevel(r)}function C(r,...t){if(pe.logLevel<=Xt.DEBUG){const e=t.map(io);pe.debug(`Firestore (${Cn}): ${r}`,...e)}}function dt(r,...t){if(pe.logLevel<=Xt.ERROR){const e=t.map(io);pe.error(`Firestore (${Cn}): ${r}`,...e)}}function Bt(r,...t){if(pe.logLevel<=Xt.WARN){const e=t.map(io);pe.warn(`Firestore (${Cn}): ${r}`,...e)}}function io(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(e){return JSON.stringify(e)}(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(r="Unexpected state"){const t=`FIRESTORE (${Cn}) INTERNAL ASSERTION FAILED: `+r;throw dt(t),new Error(t)}function L(r,t){r||O()}function cp(r,t){r||O()}function M(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Td{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Cd{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(It.UNAUTHENTICATED))}shutdown(){}}class xd{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class Dd{constructor(t){this.t=t,this.currentUser=It.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const s=l=>this.i!==n?(n=this.i,e(l)):Promise.resolve();let i=new pt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pt,t.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},u=l=>{C("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(l=>u(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?u(l):(C("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pt)}},0),a()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(n=>this.i!==t?(C("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(L(typeof n.accessToken=="string"),new wc(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return L(t===null||typeof t=="string"),new It(t)}}class Nd{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=It.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class kd{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new Nd(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(It.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vc{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Md{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=i=>{i.error!=null&&C("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.R;return this.R=i.token,C("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?e(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>n(i))};const s=i=>{C("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):C("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(L(typeof e.token=="string"),this.R=e.token,new vc(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class lp{getToken(){return Promise.resolve(new vc(""))}invalidateToken(){}start(t,e){}shutdown(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const s=Fd(40);for(let i=0;i<s.length;++i)n.length<20&&s[i]<e&&(n+=t.charAt(s[i]%t.length))}return n}}function z(r,t){return r<t?-1:r>t?1:0}function fn(r,t,e){return r.length===t.length&&r.every((n,s)=>e(n,t[s]))}function Rc(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new x(S.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new x(S.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return ut.fromMillis(Date.now())}static fromDate(t){return ut.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new ut(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?z(this.nanoseconds,t.nanoseconds):z(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.timestamp=t}static fromTimestamp(t){return new B(t)}static min(){return new B(new ut(0,0))}static max(){return new B(new ut(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e,n){e===void 0?e=0:e>t.length&&O(),n===void 0?n=t.length-e:n>t.length-e&&O(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ir.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ir?t.forEach(n=>{e.push(n)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let s=0;s<n;s++){const i=t.get(s),a=e.get(s);if(i<a)return-1;if(i>a)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class W extends Ir{construct(t,e,n){return new W(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(s=>s.length>0))}return new W(e)}static emptyPath(){return new W([])}}const Od=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ot extends Ir{construct(t,e,n){return new ot(t,e,n)}static isValidIdentifier(t){return Od.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ot(["__name__"])}static fromServerFormat(t){const e=[];let n="",s=0;const i=()=>{if(n.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let a=!1;for(;s<t.length;){const u=t[s];if(u==="\\"){if(s+1===t.length)throw new x(S.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(S.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=l,s+=2}else u==="`"?(a=!a,s++):u!=="."||a?(n+=u,s++):(i(),s++)}if(i(),a)throw new x(S.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ot(e)}static emptyPath(){return new ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(t){this.path=t}static fromPath(t){return new F(W.fromString(t))}static fromName(t){return new F(W.fromString(t).popFirst(5))}static empty(){return new F(W.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&W.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return W.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new W(t.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(t,e,n,s){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=s}}function Li(r){return r.fields.find(t=>t.kind===2)}function xe(r){return r.fields.filter(t=>t.kind!==2)}function Ld(r,t){let e=z(r.collectionGroup,t.collectionGroup);if(e!==0)return e;for(let n=0;n<Math.min(r.fields.length,t.fields.length);++n)if(e=qd(r.fields[n],t.fields[n]),e!==0)return e;return z(r.fields.length,t.fields.length)}mn.UNKNOWN_ID=-1;class Le{constructor(t,e){this.fieldPath=t,this.kind=e}}function qd(r,t){const e=ot.comparator(r.fieldPath,t.fieldPath);return e!==0?e:z(r.kind,t.kind)}class gn{constructor(t,e){this.sequenceNumber=t,this.offset=e}static empty(){return new gn(0,Ut.min())}}function Pc(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,s=B.fromTimestamp(n===1e9?new ut(e+1,0):new ut(e,n));return new Ut(s,F.empty(),t)}function Sc(r){return new Ut(r.readTime,r.key,-1)}class Ut{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Ut(B.min(),F.empty(),-1)}static max(){return new Ut(B.max(),F.empty(),-1)}}function oo(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=F.comparator(r.documentKey,t.documentKey),e!==0?e:z(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ee(r){if(r.code!==S.FAILED_PRECONDITION||r.message!==Vc)throw r;C("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new v((n,s)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(n,s)},this.catchCallback=i=>{this.wrapFailure(e,i).next(n,s)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof v?e:v.resolve(e)}catch(e){return v.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):v.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):v.reject(e)}static resolve(t){return new v((e,n)=>{e(t)})}static reject(t){return new v((e,n)=>{n(t)})}static waitFor(t){return new v((e,n)=>{let s=0,i=0,a=!1;t.forEach(u=>{++s,u.next(()=>{++i,a&&i===s&&e()},l=>n(l))}),a=!0,i===s&&e()})}static or(t){let e=v.resolve(!1);for(const n of t)e=e.next(s=>s?v.resolve(s):n());return e}static forEach(t,e){const n=[];return t.forEach((s,i)=>{n.push(e.call(this,s,i))}),this.waitFor(n)}static mapArray(t,e){return new v((n,s)=>{const i=t.length,a=new Array(i);let u=0;for(let l=0;l<i;l++){const d=l;e(t[d]).next(f=>{a[d]=f,++u,u===i&&n(a)},f=>s(f))}})}static doWhile(t,e){return new v((n,s)=>{const i=()=>{t()===!0?e().next(()=>{i()},s):n()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.V=new pt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{e.error?this.V.reject(new mr(t,e.error)):this.V.resolve()},this.transaction.onerror=n=>{const s=ao(n.target.error);this.V.reject(new mr(t,s))}}static open(t,e,n,s){try{return new Bs(e,t.transaction(s,n))}catch(i){throw new mr(e,i)}}get m(){return this.V.promise}abort(t){t&&this.V.reject(t),this.aborted||(C("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const t=this.transaction;this.aborted||typeof t.commit!="function"||t.commit()}store(t){const e=this.transaction.objectStore(t);return new Ud(e)}}class Kt{constructor(t,e,n){this.name=t,this.version=e,this.p=n,Kt.S(Rs())===12.2&&dt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return C("SimpleDb","Removing database:",t),De(window.indexedDB.deleteDatabase(t)).toPromise()}static D(){if(!Pd())return!1;if(Kt.C())return!0;const t=Rs(),e=Kt.S(t),n=0<e&&e<10,s=Cc(t),i=0<s&&s<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static C(){var t;return typeof process<"u"&&((t=process.__PRIVATE_env)===null||t===void 0?void 0:t.v)==="YES"}static F(t,e){return t.store(e)}static S(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}async M(t){return this.db||(C("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const a=i.target.result;e(a)},s.onblocked=()=>{n(new mr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const a=i.target.error;a.name==="VersionError"?n(new x(S.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?n(new x(S.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):n(new mr(t,a))},s.onupgradeneeded=i=>{C("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const a=i.target.result;this.p.O(a,s.transaction,i.oldVersion,this.version).next(()=>{C("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=e=>this.N(e)),this.db}L(t){this.N=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,s){const i=e==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(t);const u=Bs.open(this.db,t,i?"readonly":"readwrite",n),l=s(u).next(d=>(u.g(),d)).catch(d=>(u.abort(d),v.reject(d))).toPromise();return l.catch(()=>{}),await u.m,l}catch(u){const l=u,d=l.name!=="FirebaseError"&&a<3;if(C("SimpleDb","Transaction failed with error:",l.message,"Retrying:",d),this.close(),!d)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}function Cc(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}class Bd{constructor(t){this.B=t,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(t){this.B=t}done(){this.k=!0}$(t){this.q=t}delete(){return De(this.B.delete())}}class mr extends x{constructor(t,e){super(S.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function we(r){return r.name==="IndexedDbTransactionError"}class Ud{constructor(t){this.store=t}put(t,e){let n;return e!==void 0?(C("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(C("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),De(n)}add(t){return C("SimpleDb","ADD",this.store.name,t,t),De(this.store.add(t))}get(t){return De(this.store.get(t)).next(e=>(e===void 0&&(e=null),C("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return C("SimpleDb","DELETE",this.store.name,t),De(this.store.delete(t))}count(){return C("SimpleDb","COUNT",this.store.name),De(this.store.count())}U(t,e){const n=this.options(t,e),s=n.index?this.store.index(n.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(n.range);return new v((a,u)=>{i.onerror=l=>{u(l.target.error)},i.onsuccess=l=>{a(l.target.result)}})}{const i=this.cursor(n),a=[];return this.W(i,(u,l)=>{a.push(l)}).next(()=>a)}}G(t,e){const n=this.store.getAll(t,e===null?void 0:e);return new v((s,i)=>{n.onerror=a=>{i(a.target.error)},n.onsuccess=a=>{s(a.target.result)}})}j(t,e){C("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.H=!1;const s=this.cursor(n);return this.W(s,(i,a,u)=>u.delete())}J(t,e){let n;e?n=t:(n={},e=t);const s=this.cursor(n);return this.W(s,e)}Y(t){const e=this.cursor({});return new v((n,s)=>{e.onerror=i=>{const a=ao(i.target.error);s(a)},e.onsuccess=i=>{const a=i.target.result;a?t(a.primaryKey,a.value).next(u=>{u?a.continue():n()}):n()}})}W(t,e){const n=[];return new v((s,i)=>{t.onerror=a=>{i(a.target.error)},t.onsuccess=a=>{const u=a.target.result;if(!u)return void s();const l=new Bd(u),d=e(u.primaryKey,u.value,l);if(d instanceof v){const f=d.catch(g=>(l.done(),v.reject(g)));n.push(f)}l.isDone?s():l.K===null?u.continue():u.continue(l.K)}}).next(()=>v.waitFor(n))}options(t,e){let n;return t!==void 0&&(typeof t=="string"?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.H?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function De(r){return new v((t,e)=>{r.onsuccess=n=>{const s=n.target.result;t(s)},r.onerror=n=>{const s=ao(n.target.error);e(s)}})}let ou=!1;function ao(r){const t=Kt.S(Rs());if(t>=12.2&&t<13){const e="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(e)>=0){const n=new x("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ou||(ou=!0,setTimeout(()=>{throw n},0)),n}}return r}class Gd{constructor(t,e){this.asyncQueue=t,this.Z=e,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(t){C("IndexBackfiller",`Scheduled in ${t}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",t,async()=>{this.task=null;try{C("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(e){we(e)?C("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",e):await Ee(e)}await this.X(6e4)})}}class zd{constructor(t,e){this.localStore=t,this.persistence=e}async ee(t=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",e=>this.te(e,t))}te(t,e){const n=new Set;let s=e,i=!0;return v.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(t).next(a=>{if(a!==null&&!n.has(a))return C("IndexBackfiller",`Processing collection: ${a}`),this.ne(t,a,s).next(u=>{s-=u,n.add(a)});i=!1})).next(()=>e-s)}ne(t,e,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(t,e).next(s=>this.localStore.localDocuments.getNextDocuments(t,e,s,n).next(i=>{const a=i.changes;return this.localStore.indexManager.updateIndexEntries(t,a).next(()=>this.re(s,i)).next(u=>(C("IndexBackfiller",`Updating offset: ${u}`),this.localStore.indexManager.updateCollectionGroup(t,e,u))).next(()=>a.size)}))}re(t,e){let n=t;return e.changes.forEach((s,i)=>{const a=Sc(i);oo(a,n)>0&&(n=a)}),new Ut(n.readTime,n.documentKey,Math.max(e.batchId,t.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this.ie(n),this.se=n=>e.writeSequenceNumber(n))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}Ft.oe=-1;function Cr(r){return r==null}function Tr(r){return r===0&&1/r==-1/0}function xc(r){return typeof r=="number"&&Number.isInteger(r)&&!Tr(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dt(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=au(t)),t=jd(r.get(e),t);return au(t)}function jd(r,t){let e=t;const n=r.length;for(let s=0;s<n;s++){const i=r.charAt(s);switch(i){case"\0":e+="";break;case"":e+="";break;default:e+=i}}return e}function au(r){return r+""}function zt(r){const t=r.length;if(L(t>=2),t===2)return L(r.charAt(0)===""&&r.charAt(1)===""),W.emptyPath();const e=t-2,n=[];let s="";for(let i=0;i<t;){const a=r.indexOf("",i);switch((a<0||a>e)&&O(),r.charAt(a+1)){case"":const u=r.substring(i,a);let l;s.length===0?l=u:(s+=u,l=s,s=""),n.push(l);break;case"":s+=r.substring(i,a),s+="\0";break;case"":s+=r.substring(i,a+1);break;default:O()}i=a+2}return new W(n)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uu=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(r,t){return[r,Dt(t)]}function Dc(r,t,e){return[r,Dt(t),e]}const Kd={},Qd=["prefixPath","collectionGroup","readTime","documentId"],$d=["prefixPath","collectionGroup","documentId"],Wd=["collectionGroup","readTime","prefixPath","documentId"],Hd=["canonicalId","targetId"],Jd=["targetId","path"],Yd=["path","targetId"],Xd=["collectionId","parent"],Zd=["indexId","uid"],tf=["uid","sequenceNumber"],ef=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],nf=["indexId","uid","orderedDocumentKey"],rf=["userId","collectionPath","documentId"],sf=["userId","collectionPath","largestBatchId"],of=["userId","collectionGroup","largestBatchId"],Nc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],af=[...Nc,"documentOverlays"],kc=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Mc=kc,Fc=[...Mc,"indexConfiguration","indexState","indexEntries"],uf=Fc;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends bc{constructor(t,e){super(),this._e=t,this.currentSequenceNumber=e}}function Et(r,t){const e=M(r);return Kt.F(e._e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function ve(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function Oc(r,t){const e=[];for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.push(t(r[n],n,r));return e}function Lc(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(t,e){this.comparator=t,this.root=e||vt.EMPTY}insert(t,e){return new rt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,vt.BLACK,null,null))}remove(t){return new rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,vt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return e+n.left.size;s<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new cs(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new cs(this.root,t,this.comparator,!1)}getReverseIterator(){return new cs(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new cs(this.root,t,this.comparator,!0)}}class cs{constructor(t,e,n,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&s&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class vt{constructor(t,e,n,s,i){this.key=t,this.value=e,this.color=n??vt.RED,this.left=s??vt.EMPTY,this.right=i??vt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,s,i){return new vt(t??this.key,e??this.value,n??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let s=this;const i=n(t,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(t,e,n),null):i===0?s.copy(null,e,null,null,null):s.copy(null,null,null,null,s.right.insert(t,e,n)),s.fixUp()}removeMin(){if(this.left.isEmpty())return vt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,s=this;if(e(t,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(t,e),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),e(t,s.key)===0){if(s.right.isEmpty())return vt.EMPTY;n=s.right.min(),s=s.copy(n.key,n.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(t,e))}return s.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,vt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,vt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();const t=this.left.check();if(t!==this.right.check())throw O();return t+(this.isRed()?0:1)}}vt.EMPTY=null,vt.RED=!0,vt.BLACK=!1;vt.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(t,e,n,s,i){return this}insert(t,e,n){return new vt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(t){this.comparator=t,this.data=new rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const s=n.getNext();if(this.comparator(s.key,t[1])>=0)return;e(s.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new lu(this.data.getIterator())}getIteratorFrom(t){return new lu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(n=>{e=e.add(n)}),e}isEqual(t){if(!(t instanceof tt)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new tt(this.comparator);return e.data=t,e}}class lu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function nn(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(t){this.fields=t,t.sort(ot.comparator)}static empty(){return new Ot([])}unionWith(t){let e=new tt(ot.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new Ot(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return fn(this.fields,t.fields,(e,n)=>e.isEqual(n))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new qc("Invalid base64 string: "+i):i}}(t);return new _t(e)}static fromUint8Array(t){const e=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(t);return new _t(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return z(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}_t.EMPTY_BYTE_STRING=new _t("");const cf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function te(r){if(L(!!r),typeof r=="string"){let t=0;const e=cf.exec(r);if(L(!!e),e[1]){let s=e[1];s=(s+"000000000").substr(0,9),t=Number(s)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:ht(r.seconds),nanos:ht(r.nanos)}}function ht(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ee(r){return typeof r=="string"?_t.fromBase64String(r):_t.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(r){var t,e;return((e=(((t=r==null?void 0:r.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Gs(r){const t=r.mapValue.fields.__previous_value__;return Us(t)?Gs(t):t}function Er(r){const t=te(r.mapValue.fields.__local_write_time__.timestampValue);return new ut(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lf{constructor(t,e,n,s,i,a,u,l,d){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=u,this.longPollingOptions=l,this.useFetchStreams=d}}class qe{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new qe("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof qe&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},_s={nullValue:"NULL_VALUE"};function _e(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Us(r)?4:Bc(r)?9007199254740991:10:O()}function Wt(r,t){if(r===t)return!0;const e=_e(r);if(e!==_e(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Er(r).isEqual(Er(t));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=te(s.timestampValue),u=te(i.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(r,t);case 5:return r.stringValue===t.stringValue;case 6:return function(s,i){return ee(s.bytesValue).isEqual(ee(i.bytesValue))}(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return function(s,i){return ht(s.geoPointValue.latitude)===ht(i.geoPointValue.latitude)&&ht(s.geoPointValue.longitude)===ht(i.geoPointValue.longitude)}(r,t);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ht(s.integerValue)===ht(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=ht(s.doubleValue),u=ht(i.doubleValue);return a===u?Tr(a)===Tr(u):isNaN(a)&&isNaN(u)}return!1}(r,t);case 9:return fn(r.arrayValue.values||[],t.arrayValue.values||[],Wt);case 10:return function(s,i){const a=s.mapValue.fields||{},u=i.mapValue.fields||{};if(cu(a)!==cu(u))return!1;for(const l in a)if(a.hasOwnProperty(l)&&(u[l]===void 0||!Wt(a[l],u[l])))return!1;return!0}(r,t);default:return O()}}function wr(r,t){return(r.values||[]).find(e=>Wt(e,t))!==void 0}function ye(r,t){if(r===t)return 0;const e=_e(r),n=_e(t);if(e!==n)return z(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return z(r.booleanValue,t.booleanValue);case 2:return function(i,a){const u=ht(i.integerValue||i.doubleValue),l=ht(a.integerValue||a.doubleValue);return u<l?-1:u>l?1:u===l?0:isNaN(u)?isNaN(l)?0:-1:1}(r,t);case 3:return hu(r.timestampValue,t.timestampValue);case 4:return hu(Er(r),Er(t));case 5:return z(r.stringValue,t.stringValue);case 6:return function(i,a){const u=ee(i),l=ee(a);return u.compareTo(l)}(r.bytesValue,t.bytesValue);case 7:return function(i,a){const u=i.split("/"),l=a.split("/");for(let d=0;d<u.length&&d<l.length;d++){const f=z(u[d],l[d]);if(f!==0)return f}return z(u.length,l.length)}(r.referenceValue,t.referenceValue);case 8:return function(i,a){const u=z(ht(i.latitude),ht(a.latitude));return u!==0?u:z(ht(i.longitude),ht(a.longitude))}(r.geoPointValue,t.geoPointValue);case 9:return function(i,a){const u=i.values||[],l=a.values||[];for(let d=0;d<u.length&&d<l.length;++d){const f=ye(u[d],l[d]);if(f)return f}return z(u.length,l.length)}(r.arrayValue,t.arrayValue);case 10:return function(i,a){if(i===ge.mapValue&&a===ge.mapValue)return 0;if(i===ge.mapValue)return 1;if(a===ge.mapValue)return-1;const u=i.fields||{},l=Object.keys(u),d=a.fields||{},f=Object.keys(d);l.sort(),f.sort();for(let g=0;g<l.length&&g<f.length;++g){const _=z(l[g],f[g]);if(_!==0)return _;const P=ye(u[l[g]],d[f[g]]);if(P!==0)return P}return z(l.length,f.length)}(r.mapValue,t.mapValue);default:throw O()}}function hu(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return z(r,t);const e=te(r),n=te(t),s=z(e.seconds,n.seconds);return s!==0?s:z(e.nanos,n.nanos)}function pn(r){return Bi(r)}function Bi(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?function(e){const n=te(e);return`time(${n.seconds},${n.nanos})`}(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?function(e){return ee(e).toBase64()}(r.bytesValue):"referenceValue"in r?function(e){return F.fromName(e).toString()}(r.referenceValue):"geoPointValue"in r?function(e){return`geo(${e.latitude},${e.longitude})`}(r.geoPointValue):"arrayValue"in r?function(e){let n="[",s=!0;for(const i of e.values||[])s?s=!1:n+=",",n+=Bi(i);return n+"]"}(r.arrayValue):"mapValue"in r?function(e){const n=Object.keys(e.fields||{}).sort();let s="{",i=!0;for(const a of n)i?i=!1:s+=",",s+=`${a}:${Bi(e.fields[a])}`;return s+"}"}(r.mapValue):O()}function ys(r){switch(_e(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Gs(r);return t?16+ys(t):16;case 5:return 2*r.stringValue.length;case 6:return ee(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return function(n){return(n.values||[]).reduce((s,i)=>s+ys(i),0)}(r.arrayValue);case 10:return function(n){let s=0;return ve(n.fields,(i,a)=>{s+=i.length+ys(a)}),s}(r.mapValue);default:throw O()}}function Be(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Ui(r){return!!r&&"integerValue"in r}function vr(r){return!!r&&"arrayValue"in r}function du(r){return!!r&&"nullValue"in r}function fu(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Is(r){return!!r&&"mapValue"in r}function gr(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return ve(r.mapValue.fields,(e,n)=>t.mapValue.fields[e]=gr(n)),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=gr(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Bc(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function hf(r){return"nullValue"in r?_s:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Be(qe.empty(),F.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?{mapValue:{}}:O()}function df(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Be(qe.empty(),F.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?{mapValue:{}}:"mapValue"in r?ge:O()}function mu(r,t){const e=ye(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?-1:!r.inclusive&&t.inclusive?1:0}function gu(r,t){const e=ye(r.value,t.value);return e!==0?e:r.inclusive&&!t.inclusive?1:!r.inclusive&&t.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t){this.value=t}static empty(){return new At({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Is(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=gr(e)}setAll(t){let e=ot.emptyPath(),n={},s=[];t.forEach((a,u)=>{if(!e.isImmediateParentOf(u)){const l=this.getFieldsMap(e);this.applyChanges(l,n,s),n={},s=[],e=u.popLast()}a?n[u.lastSegment()]=gr(a):s.push(u.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,s)}delete(t){const e=this.field(t.popLast());Is(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Wt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let s=e.mapValue.fields[t.get(n)];Is(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=s),e=s}return e.mapValue.fields}applyChanges(t,e,n){ve(e,(s,i)=>t[s]=i);for(const s of n)delete t[s]}clone(){return new At(gr(this.value))}}function Uc(r){const t=[];return ve(r.fields,(e,n)=>{const s=new ot([e]);if(Is(n)){const i=Uc(n.mapValue).fields;if(i.length===0)t.push(s);else for(const a of i)t.push(s.child(a))}else t.push(s)}),new Ot(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(t,e,n,s,i,a,u){this.key=t,this.documentType=e,this.version=n,this.readTime=s,this.createTime=i,this.data=a,this.documentState=u}static newInvalidDocument(t){return new it(t,0,B.min(),B.min(),B.min(),At.empty(),0)}static newFoundDocument(t,e,n,s){return new it(t,1,e,B.min(),n,s,0)}static newNoDocument(t,e){return new it(t,2,e,B.min(),B.min(),At.empty(),0)}static newUnknownDocument(t,e){return new it(t,3,e,B.min(),B.min(),At.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(B.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=B.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof it&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{constructor(t,e){this.position=t,this.inclusive=e}}function pu(r,t,e){let n=0;for(let s=0;s<r.position.length;s++){const i=t[s],a=r.position[s];if(i.field.isKeyField()?n=F.comparator(F.fromName(a.referenceValue),e.key):n=ye(a,e.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function _u(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!Wt(r.position[e],t.position[e]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e="asc"){this.field=t,this.dir=e}}function ff(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{}class H extends Gc{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new mf(t,e,n):e==="array-contains"?new _f(t,n):e==="in"?new Wc(t,n):e==="not-in"?new yf(t,n):e==="array-contains-any"?new If(t,n):new H(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new gf(t,n):new pf(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(ye(e,this.value)):e!==null&&_e(this.value)===_e(e)&&this.matchesComparison(ye(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Z extends Gc{constructor(t,e){super(),this.filters=t,this.op=e,this.ae=null}static create(t,e){return new Z(t,e)}matches(t){return _n(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function _n(r){return r.op==="and"}function Gi(r){return r.op==="or"}function uo(r){return zc(r)&&_n(r)}function zc(r){for(const t of r.filters)if(t instanceof Z)return!1;return!0}function zi(r){if(r instanceof H)return r.field.canonicalString()+r.op.toString()+pn(r.value);if(uo(r))return r.filters.map(t=>zi(t)).join(",");{const t=r.filters.map(e=>zi(e)).join(",");return`${r.op}(${t})`}}function jc(r,t){return r instanceof H?function(n,s){return s instanceof H&&n.op===s.op&&n.field.isEqual(s.field)&&Wt(n.value,s.value)}(r,t):r instanceof Z?function(n,s){return s instanceof Z&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,a,u)=>i&&jc(a,s.filters[u]),!0):!1}(r,t):void O()}function Kc(r,t){const e=r.filters.concat(t);return Z.create(e,r.op)}function Qc(r){return r instanceof H?function(e){return`${e.field.canonicalString()} ${e.op} ${pn(e.value)}`}(r):r instanceof Z?function(e){return e.op.toString()+" {"+e.getFilters().map(Qc).join(" ,")+"}"}(r):"Filter"}class mf extends H{constructor(t,e,n){super(t,e,n),this.key=F.fromName(n.referenceValue)}matches(t){const e=F.comparator(t.key,this.key);return this.matchesComparison(e)}}class gf extends H{constructor(t,e){super(t,"in",e),this.keys=$c("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class pf extends H{constructor(t,e){super(t,"not-in",e),this.keys=$c("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function $c(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(n=>F.fromName(n.referenceValue))}class _f extends H{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return vr(e)&&wr(e.arrayValue,this.value)}}class Wc extends H{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&wr(this.value.arrayValue,e)}}class yf extends H{constructor(t,e){super(t,"not-in",e)}matches(t){if(wr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!wr(this.value.arrayValue,e)}}class If extends H{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!vr(e)||!e.arrayValue.values)&&e.arrayValue.values.some(n=>wr(this.value.arrayValue,n))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(t,e=null,n=[],s=[],i=null,a=null,u=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=s,this.limit=i,this.startAt=a,this.endAt=u,this.ue=null}}function ji(r,t=null,e=[],n=[],s=null,i=null,a=null){return new Tf(r,t,e,n,s,i,a)}function Ue(r){const t=M(r);if(t.ue===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(n=>zi(n)).join(","),e+="|ob:",e+=t.orderBy.map(n=>function(i){return i.field.canonicalString()+i.dir}(n)).join(","),Cr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(n=>pn(n)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(n=>pn(n)).join(",")),t.ue=e}return t.ue}function xr(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!ff(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!jc(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!_u(r.startAt,t.startAt)&&_u(r.endAt,t.endAt)}function Ps(r){return F.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function Ss(r,t){return r.filters.filter(e=>e instanceof H&&e.field.isEqual(t))}function yu(r,t,e){let n=_s,s=!0;for(const i of Ss(r,t)){let a=_s,u=!0;switch(i.op){case"<":case"<=":a=hf(i.value);break;case"==":case"in":case">=":a=i.value;break;case">":a=i.value,u=!1;break;case"!=":case"not-in":a=_s}mu({value:n,inclusive:s},{value:a,inclusive:u})<0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];mu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})<0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}function Iu(r,t,e){let n=ge,s=!0;for(const i of Ss(r,t)){let a=ge,u=!0;switch(i.op){case">=":case">":a=df(i.value),u=!1;break;case"==":case"in":case"<=":a=i.value;break;case"<":a=i.value,u=!1;break;case"!=":case"not-in":a=ge}gu({value:n,inclusive:s},{value:a,inclusive:u})>0&&(n=a,s=u)}if(e!==null){for(let i=0;i<r.orderBy.length;++i)if(r.orderBy[i].field.isEqual(t)){const a=e.position[i];gu({value:n,inclusive:s},{value:a,inclusive:e.inclusive})>0&&(n=a,s=e.inclusive);break}}return{value:n,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(t,e=null,n=[],s=[],i=null,a="F",u=null,l=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=s,this.limit=i,this.limitType=a,this.startAt=u,this.endAt=l,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Hc(r,t,e,n,s,i,a,u){return new ne(r,t,e,n,s,i,a,u)}function xn(r){return new ne(r)}function Tu(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function co(r){return r.collectionGroup!==null}function hn(r){const t=M(r);if(t.ce===null){t.ce=[];const e=new Set;for(const i of t.explicitOrderBy)t.ce.push(i),e.add(i.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(a){let u=new tt(ot.comparator);return a.filters.forEach(l=>{l.getFlattenedFilters().forEach(d=>{d.isInequality()&&(u=u.add(d.field))})}),u})(t).forEach(i=>{e.has(i.canonicalString())||i.isKeyField()||t.ce.push(new Ar(i,n))}),e.has(ot.keyField().canonicalString())||t.ce.push(new Ar(ot.keyField(),n))}return t.ce}function Nt(r){const t=M(r);return t.le||(t.le=Yc(t,hn(r))),t.le}function Jc(r){const t=M(r);return t.he||(t.he=Yc(t,r.explicitOrderBy)),t.he}function Yc(r,t){if(r.limitType==="F")return ji(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Ar(s.field,i)});const e=r.endAt?new Ie(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new Ie(r.startAt.position,r.startAt.inclusive):null;return ji(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function Ki(r,t){const e=r.filters.concat([t]);return new ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),e,r.limit,r.limitType,r.startAt,r.endAt)}function Vs(r,t,e){return new ne(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function Dr(r,t){return xr(Nt(r),Nt(t))&&r.limitType===t.limitType}function Xc(r){return`${Ue(Nt(r))}|lt:${r.limitType}`}function un(r){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Qc(s)).join(", ")}]`),Cr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>pn(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>pn(s)).join(",")),`Target(${n})`}(Nt(r))}; limitType=${r.limitType})`}function Nr(r,t){return t.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):F.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(r,t)&&function(n,s){for(const i of hn(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(r,t)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(r,t)&&function(n,s){return!(n.startAt&&!function(a,u,l){const d=pu(a,u,l);return a.inclusive?d<=0:d<0}(n.startAt,hn(n),s)||n.endAt&&!function(a,u,l){const d=pu(a,u,l);return a.inclusive?d>=0:d>0}(n.endAt,hn(n),s))}(r,t)}function Zc(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function tl(r){return(t,e)=>{let n=!1;for(const s of hn(r)){const i=Ef(s,t,e);if(i!==0)return i;n=n||s.field.isKeyField()}return 0}}function Ef(r,t,e){const n=r.field.isKeyField()?F.comparator(t.key,e.key):function(i,a,u){const l=a.data.field(i),d=u.data.field(i);return l!==null&&d!==null?ye(l,d):O()}(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return O()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[s,i]of n)if(this.equalsFn(s,t))return i}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],t))return void(s[i]=[t,e]);s.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let s=0;s<n.length;s++)if(this.equalsFn(n[s][0],t))return n.length===1?delete this.inner[e]:n.splice(s,1),this.innerSize--,!0;return!1}forEach(t){ve(this.inner,(e,n)=>{for(const[s,i]of n)t(s,i)})}isEmpty(){return Lc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf=new rt(F.comparator);function Lt(){return wf}const el=new rt(F.comparator);function hr(...r){let t=el;for(const e of r)t=t.insert(e.key,e);return t}function nl(r){let t=el;return r.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function jt(){return pr()}function rl(){return pr()}function pr(){return new re(r=>r.toString(),(r,t)=>r.isEqual(t))}const vf=new rt(F.comparator),Af=new tt(F.comparator);function j(...r){let t=Af;for(const e of r)t=t.add(e);return t}const Rf=new tt(z);function lo(){return Rf}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Tr(t)?"-0":t}}function il(r){return{integerValue:""+r}}function ol(r,t){return xc(t)?il(t):sl(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this._=void 0}}function Pf(r,t,e){return r instanceof yn?function(s,i){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Us(i)&&(i=Gs(i)),i&&(a.fields.__previous_value__=i),{mapValue:a}}(e,t):r instanceof Ge?ul(r,t):r instanceof ze?cl(r,t):function(s,i){const a=al(s,i),u=Eu(a)+Eu(s.Pe);return Ui(a)&&Ui(s.Pe)?il(u):sl(s.serializer,u)}(r,t)}function Sf(r,t,e){return r instanceof Ge?ul(r,t):r instanceof ze?cl(r,t):e}function al(r,t){return r instanceof In?function(n){return Ui(n)||function(i){return!!i&&"doubleValue"in i}(n)}(t)?t:{integerValue:0}:null}class yn extends zs{}class Ge extends zs{constructor(t){super(),this.elements=t}}function ul(r,t){const e=ll(t);for(const n of r.elements)e.some(s=>Wt(s,n))||e.push(n);return{arrayValue:{values:e}}}class ze extends zs{constructor(t){super(),this.elements=t}}function cl(r,t){let e=ll(t);for(const n of r.elements)e=e.filter(s=>!Wt(s,n));return{arrayValue:{values:e}}}class In extends zs{constructor(t,e){super(),this.serializer=t,this.Pe=e}}function Eu(r){return ht(r.integerValue||r.doubleValue)}function ll(r){return vr(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e){this.field=t,this.transform=e}}function Vf(r,t){return r.field.isEqual(t.field)&&function(n,s){return n instanceof Ge&&s instanceof Ge||n instanceof ze&&s instanceof ze?fn(n.elements,s.elements,Wt):n instanceof In&&s instanceof In?Wt(n.Pe,s.Pe):n instanceof yn&&s instanceof yn}(r.transform,t.transform)}class bf{constructor(t,e){this.version=t,this.transformResults=e}}class at{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new at}static exists(t){return new at(void 0,t)}static updateTime(t){return new at(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Ts(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class js{}function hl(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new Nn(r.key,at.none()):new Dn(r.key,r.data,at.none());{const e=r.data,n=At.empty();let s=new tt(ot.comparator);for(let i of t.fields)if(!s.has(i)){let a=e.field(i);a===null&&i.length>1&&(i=i.popLast(),a=e.field(i)),a===null?n.delete(i):n.set(i,a),s=s.add(i)}return new se(r.key,n,new Ot(s.toArray()),at.none())}}function Cf(r,t,e){r instanceof Dn?function(s,i,a){const u=s.value.clone(),l=vu(s.fieldTransforms,i,a.transformResults);u.setAll(l),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(r,t,e):r instanceof se?function(s,i,a){if(!Ts(s.precondition,i))return void i.convertToUnknownDocument(a.version);const u=vu(s.fieldTransforms,i,a.transformResults),l=i.data;l.setAll(dl(s)),l.setAll(u),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(r,t,e):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,t,e)}function _r(r,t,e,n){return r instanceof Dn?function(i,a,u,l){if(!Ts(i.precondition,a))return u;const d=i.value.clone(),f=Au(i.fieldTransforms,l,a);return d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),null}(r,t,e,n):r instanceof se?function(i,a,u,l){if(!Ts(i.precondition,a))return u;const d=Au(i.fieldTransforms,l,a),f=a.data;return f.setAll(dl(i)),f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),u===null?null:u.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(r,t,e,n):function(i,a,u){return Ts(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(r,t,e)}function xf(r,t){let e=null;for(const n of r.fieldTransforms){const s=t.data.field(n.field),i=al(n.transform,s||null);i!=null&&(e===null&&(e=At.empty()),e.set(n.field,i))}return e||null}function wu(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&fn(n,s,(i,a)=>Vf(i,a))}(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class Dn extends js{constructor(t,e,n,s=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class se extends js{constructor(t,e,n,s,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function dl(r){const t=new Map;return r.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}}),t}function vu(r,t,e){const n=new Map;L(r.length===e.length);for(let s=0;s<e.length;s++){const i=r[s],a=i.transform,u=t.data.field(i.field);n.set(i.field,Sf(a,u,e[s]))}return n}function Au(r,t,e){const n=new Map;for(const s of r){const i=s.transform,a=e.data.field(s.field);n.set(s.field,Pf(i,a,t))}return n}class Nn extends js{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ho extends js{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t,e,n,s){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=s}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(t.key)&&Cf(i,t,n[s])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=_r(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=_r(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=rl();return this.mutations.forEach(s=>{const i=t.get(s.key),a=i.overlayedDocument;let u=this.applyToLocalView(a,i.mutatedFields);u=e.has(s.key)?null:u;const l=hl(a,u);l!==null&&n.set(s.key,l),a.isValidDocument()||a.convertToNoDocument(B.min())}),n}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),j())}isEqual(t){return this.batchId===t.batchId&&fn(this.mutations,t.mutations,(e,n)=>wu(e,n))&&fn(this.baseMutations,t.baseMutations,(e,n)=>wu(e,n))}}class mo{constructor(t,e,n,s){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=s}static from(t,e,n){L(t.mutations.length===n.length);let s=function(){return vf}();const i=t.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,n[a].version);return new mo(t,e,n,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(t,e,n){this.alias=t,this.aggregateType=e,this.fieldPath=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var gt,J;function ml(r){switch(r){default:return O();case S.CANCELLED:case S.UNKNOWN:case S.DEADLINE_EXCEEDED:case S.RESOURCE_EXHAUSTED:case S.INTERNAL:case S.UNAVAILABLE:case S.UNAUTHENTICATED:return!1;case S.INVALID_ARGUMENT:case S.NOT_FOUND:case S.ALREADY_EXISTS:case S.PERMISSION_DENIED:case S.FAILED_PRECONDITION:case S.ABORTED:case S.OUT_OF_RANGE:case S.UNIMPLEMENTED:case S.DATA_LOSS:return!0}}function gl(r){if(r===void 0)return dt("GRPC error has no .code"),S.UNKNOWN;switch(r){case gt.OK:return S.OK;case gt.CANCELLED:return S.CANCELLED;case gt.UNKNOWN:return S.UNKNOWN;case gt.DEADLINE_EXCEEDED:return S.DEADLINE_EXCEEDED;case gt.RESOURCE_EXHAUSTED:return S.RESOURCE_EXHAUSTED;case gt.INTERNAL:return S.INTERNAL;case gt.UNAVAILABLE:return S.UNAVAILABLE;case gt.UNAUTHENTICATED:return S.UNAUTHENTICATED;case gt.INVALID_ARGUMENT:return S.INVALID_ARGUMENT;case gt.NOT_FOUND:return S.NOT_FOUND;case gt.ALREADY_EXISTS:return S.ALREADY_EXISTS;case gt.PERMISSION_DENIED:return S.PERMISSION_DENIED;case gt.FAILED_PRECONDITION:return S.FAILED_PRECONDITION;case gt.ABORTED:return S.ABORTED;case gt.OUT_OF_RANGE:return S.OUT_OF_RANGE;case gt.UNIMPLEMENTED:return S.UNIMPLEMENTED;case gt.DATA_LOSS:return S.DATA_LOSS;default:return O()}}(J=gt||(gt={}))[J.OK=0]="OK",J[J.CANCELLED=1]="CANCELLED",J[J.UNKNOWN=2]="UNKNOWN",J[J.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",J[J.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",J[J.NOT_FOUND=5]="NOT_FOUND",J[J.ALREADY_EXISTS=6]="ALREADY_EXISTS",J[J.PERMISSION_DENIED=7]="PERMISSION_DENIED",J[J.UNAUTHENTICATED=16]="UNAUTHENTICATED",J[J.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",J[J.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",J[J.ABORTED=10]="ABORTED",J[J.OUT_OF_RANGE=11]="OUT_OF_RANGE",J[J.UNIMPLEMENTED=12]="UNIMPLEMENTED",J[J.INTERNAL=13]="INTERNAL",J[J.UNAVAILABLE=14]="UNAVAILABLE",J[J.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bs=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pl(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nf=new Oe([4294967295,4294967295],0);function Ru(r){const t=pl().encode(r),e=new gc;return e.update(t),new Uint8Array(e.digest())}function Pu(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new Oe([e,n],0),new Oe([s,i],0)]}class po{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new dr(`Invalid padding: ${e}`);if(n<0)throw new dr(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new dr(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new dr(`Invalid padding when bitmap length is 0: ${e}`);this.Ie=8*t.length-e,this.Te=Oe.fromNumber(this.Ie)}Ee(t,e,n){let s=t.add(e.multiply(Oe.fromNumber(n)));return s.compare(Nf)===1&&(s=new Oe([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Ie===0)return!1;const e=Ru(t),[n,s]=Pu(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);if(!this.de(a))return!1}return!0}static create(t,e,n){const s=t%8==0?0:8-t%8,i=new Uint8Array(Math.ceil(t/8)),a=new po(i,s,e);return n.forEach(u=>a.insert(u)),a}insert(t){if(this.Ie===0)return;const e=Ru(t),[n,s]=Pu(e);for(let i=0;i<this.hashCount;i++){const a=this.Ee(n,s,i);this.Ae(a)}}Ae(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class dr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t,e,n,s,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const s=new Map;return s.set(t,Fr.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new Mr(B.min(),s,new rt(z),Lt(),j())}}class Fr{constructor(t,e,n,s,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new Fr(n,e,j(),j(),j())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(t,e,n,s){this.Re=t,this.removedTargetIds=e,this.key=n,this.Ve=s}}class _l{constructor(t,e){this.targetId=t,this.me=e}}class yl{constructor(t,e,n=_t.EMPTY_BYTE_STRING,s=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=s}}class Su{constructor(){this.fe=0,this.ge=bu(),this.pe=_t.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(t){t.approximateByteSize()>0&&(this.we=!0,this.pe=t)}Ce(){let t=j(),e=j(),n=j();return this.ge.forEach((s,i)=>{switch(i){case 0:t=t.add(s);break;case 2:e=e.add(s);break;case 1:n=n.add(s);break;default:O()}}),new Fr(this.pe,this.ye,t,e,n)}ve(){this.we=!1,this.ge=bu()}Fe(t,e){this.we=!0,this.ge=this.ge.insert(t,e)}Me(t){this.we=!0,this.ge=this.ge.remove(t)}xe(){this.fe+=1}Oe(){this.fe-=1,L(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class kf{constructor(t){this.Le=t,this.Be=new Map,this.ke=Lt(),this.qe=Vu(),this.Qe=new rt(z)}Ke(t){for(const e of t.Re)t.Ve&&t.Ve.isFoundDocument()?this.$e(e,t.Ve):this.Ue(e,t.key,t.Ve);for(const e of t.removedTargetIds)this.Ue(e,t.key,t.Ve)}We(t){this.forEachTarget(t,e=>{const n=this.Ge(e);switch(t.state){case 0:this.ze(e)&&n.De(t.resumeToken);break;case 1:n.Oe(),n.Se||n.ve(),n.De(t.resumeToken);break;case 2:n.Oe(),n.Se||this.removeTarget(e);break;case 3:this.ze(e)&&(n.Ne(),n.De(t.resumeToken));break;case 4:this.ze(e)&&(this.je(e),n.De(t.resumeToken));break;default:O()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Be.forEach((n,s)=>{this.ze(s)&&e(s)})}He(t){const e=t.targetId,n=t.me.count,s=this.Je(e);if(s){const i=s.target;if(Ps(i))if(n===0){const a=new F(i.path);this.Ue(e,a,it.newNoDocument(a,B.min()))}else L(n===1);else{const a=this.Ye(e);if(a!==n){const u=this.Ze(t),l=u?this.Xe(u,t,a):1;if(l!==0){this.je(e);const d=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(e,d)}bs==null||bs.et(function(f,g,_,P,D){var N,b,U,G,q,Q;const X={localCacheCount:f,existenceFilterCount:g.count,databaseId:_.database,projectId:_.projectId},K=g.unchangedNames;return K&&(X.bloomFilter={applied:D===0,hashCount:(N=K==null?void 0:K.hashCount)!==null&&N!==void 0?N:0,bitmapLength:(G=(U=(b=K==null?void 0:K.bits)===null||b===void 0?void 0:b.bitmap)===null||U===void 0?void 0:U.length)!==null&&G!==void 0?G:0,padding:(Q=(q=K==null?void 0:K.bits)===null||q===void 0?void 0:q.padding)!==null&&Q!==void 0?Q:0,mightContain:T=>{var p;return(p=P==null?void 0:P.mightContain(T))!==null&&p!==void 0&&p}}),X}(a,t.me,this.Le.tt(),u,l))}}}}Ze(t){const e=t.me.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:s=0},hashCount:i=0}=e;let a,u;try{a=ee(n).toUint8Array()}catch(l){if(l instanceof qc)return Bt("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{u=new po(a,s,i)}catch(l){return Bt(l instanceof dr?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return u.Ie===0?null:u}Xe(t,e,n){return e.me.count===n-this.nt(t,e.targetId)?0:2}nt(t,e){const n=this.Le.getRemoteKeysForTarget(e);let s=0;return n.forEach(i=>{const a=this.Le.tt(),u=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;t.mightContain(u)||(this.Ue(e,i,null),s++)}),s}rt(t){const e=new Map;this.Be.forEach((i,a)=>{const u=this.Je(a);if(u){if(i.current&&Ps(u.target)){const l=new F(u.target.path);this.ke.get(l)!==null||this.it(a,l)||this.Ue(a,l,it.newNoDocument(l,t))}i.be&&(e.set(a,i.Ce()),i.ve())}});let n=j();this.qe.forEach((i,a)=>{let u=!0;a.forEachWhile(l=>{const d=this.Je(l);return!d||d.purpose==="TargetPurposeLimboResolution"||(u=!1,!1)}),u&&(n=n.add(i))}),this.ke.forEach((i,a)=>a.setReadTime(t));const s=new Mr(t,e,this.Qe,this.ke,n);return this.ke=Lt(),this.qe=Vu(),this.Qe=new rt(z),s}$e(t,e){if(!this.ze(t))return;const n=this.it(t,e.key)?2:0;this.Ge(t).Fe(e.key,n),this.ke=this.ke.insert(e.key,e),this.qe=this.qe.insert(e.key,this.st(e.key).add(t))}Ue(t,e,n){if(!this.ze(t))return;const s=this.Ge(t);this.it(t,e)?s.Fe(e,1):s.Me(e),this.qe=this.qe.insert(e,this.st(e).delete(t)),n&&(this.ke=this.ke.insert(e,n))}removeTarget(t){this.Be.delete(t)}Ye(t){const e=this.Ge(t).Ce();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}xe(t){this.Ge(t).xe()}Ge(t){let e=this.Be.get(t);return e||(e=new Su,this.Be.set(t,e)),e}st(t){let e=this.qe.get(t);return e||(e=new tt(z),this.qe=this.qe.insert(t,e)),e}ze(t){const e=this.Je(t)!==null;return e||C("WatchChangeAggregator","Detected inactive target",t),e}Je(t){const e=this.Be.get(t);return e&&e.Se?null:this.Le.ot(t)}je(t){this.Be.set(t,new Su),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.Ue(t,e,null)})}it(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Vu(){return new rt(F.comparator)}function bu(){return new rt(F.comparator)}const Mf={asc:"ASCENDING",desc:"DESCENDING"},Ff={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Of={and:"AND",or:"OR"};class Lf{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function Qi(r,t){return r.useProto3Json||Cr(t)?t:{value:t}}function Tn(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Il(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function qf(r,t){return Tn(r,t.toTimestamp())}function ft(r){return L(!!r),B.fromTimestamp(function(e){const n=te(e);return new ut(n.seconds,n.nanos)}(r))}function _o(r,t){return $i(r,t).canonicalString()}function $i(r,t){const e=function(s){return new W(["projects",s.projectId,"databases",s.database])}(r).child("documents");return t===void 0?e:e.child(t)}function Tl(r){const t=W.fromString(r);return L(Cl(t)),t}function Rr(r,t){return _o(r.databaseId,t.path)}function Qt(r,t){const e=Tl(t);if(e.get(1)!==r.databaseId.projectId)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new x(S.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new F(vl(e))}function El(r,t){return _o(r.databaseId,t)}function wl(r){const t=Tl(r);return t.length===4?W.emptyPath():vl(t)}function Wi(r){return new W(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function vl(r){return L(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function Cu(r,t,e){return{name:Rr(r,t),fields:e.value.mapValue.fields}}function Al(r,t,e){const n=Qt(r,t.name),s=ft(t.updateTime),i=t.createTime?ft(t.createTime):B.min(),a=new At({mapValue:{fields:t.fields}}),u=it.newFoundDocument(n,s,i,a);return e&&u.setHasCommittedMutations(),e?u.setHasCommittedMutations():u}function Bf(r,t){return"found"in t?function(n,s){L(!!s.found),s.found.name,s.found.updateTime;const i=Qt(n,s.found.name),a=ft(s.found.updateTime),u=s.found.createTime?ft(s.found.createTime):B.min(),l=new At({mapValue:{fields:s.found.fields}});return it.newFoundDocument(i,a,u,l)}(r,t):"missing"in t?function(n,s){L(!!s.missing),L(!!s.readTime);const i=Qt(n,s.missing),a=ft(s.readTime);return it.newNoDocument(i,a)}(r,t):O()}function Uf(r,t){let e;if("targetChange"in t){t.targetChange;const n=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:O()}(t.targetChange.targetChangeType||"NO_CHANGE"),s=t.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(L(f===void 0||typeof f=="string"),_t.fromBase64String(f||"")):(L(f===void 0||f instanceof Buffer||f instanceof Uint8Array),_t.fromUint8Array(f||new Uint8Array))}(r,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(d){const f=d.code===void 0?S.UNKNOWN:gl(d.code);return new x(f,d.message||"")}(a);e=new yl(n,s,i,u||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const s=Qt(r,n.document.name),i=ft(n.document.updateTime),a=n.document.createTime?ft(n.document.createTime):B.min(),u=new At({mapValue:{fields:n.document.fields}}),l=it.newFoundDocument(s,i,a,u),d=n.targetIds||[],f=n.removedTargetIds||[];e=new Es(d,f,l.key,l)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const s=Qt(r,n.document),i=n.readTime?ft(n.readTime):B.min(),a=it.newNoDocument(s,i),u=n.removedTargetIds||[];e=new Es([],u,a.key,a)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const s=Qt(r,n.document),i=n.removedTargetIds||[];e=new Es([],i,s,null)}else{if(!("filter"in t))return O();{t.filter;const n=t.filter;n.targetId;const{count:s=0,unchangedNames:i}=n,a=new Df(s,i),u=n.targetId;e=new _l(u,a)}}return e}function Pr(r,t){let e;if(t instanceof Dn)e={update:Cu(r,t.key,t.value)};else if(t instanceof Nn)e={delete:Rr(r,t.key)};else if(t instanceof se)e={update:Cu(r,t.key,t.data),updateMask:$f(t.fieldMask)};else{if(!(t instanceof ho))return O();e={verify:Rr(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(n=>function(i,a){const u=a.transform;if(u instanceof yn)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Ge)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof ze)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof In)return{fieldPath:a.field.canonicalString(),increment:u.Pe};throw O()}(0,n))),t.precondition.isNone||(e.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:qf(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:O()}(r,t.precondition)),e}function Hi(r,t){const e=t.currentDocument?function(i){return i.updateTime!==void 0?at.updateTime(ft(i.updateTime)):i.exists!==void 0?at.exists(i.exists):at.none()}(t.currentDocument):at.none(),n=t.updateTransforms?t.updateTransforms.map(s=>function(a,u){let l=null;if("setToServerValue"in u)L(u.setToServerValue==="REQUEST_TIME"),l=new yn;else if("appendMissingElements"in u){const f=u.appendMissingElements.values||[];l=new Ge(f)}else if("removeAllFromArray"in u){const f=u.removeAllFromArray.values||[];l=new ze(f)}else"increment"in u?l=new In(a,u.increment):O();const d=ot.fromServerFormat(u.fieldPath);return new kr(d,l)}(r,s)):[];if(t.update){t.update.name;const s=Qt(r,t.update.name),i=new At({mapValue:{fields:t.update.fields}});if(t.updateMask){const a=function(l){const d=l.fieldPaths||[];return new Ot(d.map(f=>ot.fromServerFormat(f)))}(t.updateMask);return new se(s,i,a,e,n)}return new Dn(s,i,e,n)}if(t.delete){const s=Qt(r,t.delete);return new Nn(s,e)}if(t.verify){const s=Qt(r,t.verify);return new ho(s,e)}return O()}function Gf(r,t){return r&&r.length>0?(L(t!==void 0),r.map(e=>function(s,i){let a=s.updateTime?ft(s.updateTime):ft(i);return a.isEqual(B.min())&&(a=ft(i)),new bf(a,s.transformResults||[])}(e,t))):[]}function Rl(r,t){return{documents:[El(r,t.path)]}}function Ks(r,t){const e={structuredQuery:{}},n=t.path;let s;t.collectionGroup!==null?(s=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=El(r,s);const i=function(d){if(d.length!==0)return bl(Z.create(d,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const a=function(d){if(d.length!==0)return d.map(f=>function(_){return{field:de(_.field),direction:jf(_.dir)}}(f))}(t.orderBy);a&&(e.structuredQuery.orderBy=a);const u=Qi(r,t.limit);return u!==null&&(e.structuredQuery.limit=u),t.startAt&&(e.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(t.endAt)),{_t:e,parent:s}}function Pl(r,t,e,n){const{_t:s,parent:i}=Ks(r,t),a={},u=[];let l=0;return e.forEach(d=>{const f=n?d.alias:"aggregate_"+l++;a[f]=d.alias,d.aggregateType==="count"?u.push({alias:f,count:{}}):d.aggregateType==="avg"?u.push({alias:f,avg:{field:de(d.fieldPath)}}):d.aggregateType==="sum"&&u.push({alias:f,sum:{field:de(d.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:u,structuredQuery:s.structuredQuery},parent:s.parent},ut:a,parent:i}}function Sl(r){let t=wl(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let s=null;if(n>0){L(n===1);const f=e.from[0];f.allDescendants?s=f.collectionId:t=t.child(f.collectionId)}let i=[];e.where&&(i=function(g){const _=Vl(g);return _ instanceof Z&&uo(_)?_.getFilters():[_]}(e.where));let a=[];e.orderBy&&(a=function(g){return g.map(_=>function(D){return new Ar(cn(D.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(_))}(e.orderBy));let u=null;e.limit&&(u=function(g){let _;return _=typeof g=="object"?g.value:g,Cr(_)?null:_}(e.limit));let l=null;e.startAt&&(l=function(g){const _=!!g.before,P=g.values||[];return new Ie(P,_)}(e.startAt));let d=null;return e.endAt&&(d=function(g){const _=!g.before,P=g.values||[];return new Ie(P,_)}(e.endAt)),Hc(t,s,a,i,u,"F",l,d)}function zf(r,t){const e=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return O()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Vl(r){return r.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=cn(e.unaryFilter.field);return H.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=cn(e.unaryFilter.field);return H.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=cn(e.unaryFilter.field);return H.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=cn(e.unaryFilter.field);return H.create(a,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(r):r.fieldFilter!==void 0?function(e){return H.create(cn(e.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value)}(r):r.compositeFilter!==void 0?function(e){return Z.create(e.compositeFilter.filters.map(n=>Vl(n)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op))}(r):O()}function jf(r){return Mf[r]}function Kf(r){return Ff[r]}function Qf(r){return Of[r]}function de(r){return{fieldPath:r.canonicalString()}}function cn(r){return ot.fromServerFormat(r.fieldPath)}function bl(r){return r instanceof H?function(e){if(e.op==="=="){if(fu(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NAN"}};if(du(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(fu(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NAN"}};if(du(e.value))return{unaryFilter:{field:de(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:de(e.field),op:Kf(e.op),value:e.value}}}(r):r instanceof Z?function(e){const n=e.getFilters().map(s=>bl(s));return n.length===1?n[0]:{compositeFilter:{op:Qf(e.op),filters:n}}}(r):O()}function $f(r){const t=[];return r.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Cl(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(t,e,n,s,i=B.min(),a=B.min(),u=_t.EMPTY_BYTE_STRING,l=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=u,this.expectedCount=l}withSequenceNumber(t){return new Zt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Zt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(t){this.ct=t}}function Wf(r,t){let e;if(t.document)e=Al(r.ct,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const n=F.fromSegments(t.noDocument.path),s=Ke(t.noDocument.readTime);e=it.newNoDocument(n,s),t.hasCommittedMutations&&e.setHasCommittedMutations()}else{if(!t.unknownDocument)return O();{const n=F.fromSegments(t.unknownDocument.path),s=Ke(t.unknownDocument.version);e=it.newUnknownDocument(n,s)}}return t.readTime&&e.setReadTime(function(s){const i=new ut(s[0],s[1]);return B.fromTimestamp(i)}(t.readTime)),e}function xu(r,t){const e=t.key,n={prefixPath:e.getCollectionPath().popLast().toArray(),collectionGroup:e.collectionGroup,documentId:e.path.lastSegment(),readTime:Cs(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())n.document=function(i,a){return{name:Rr(i,a.key),fields:a.data.value.mapValue.fields,updateTime:Tn(i,a.version.toTimestamp()),createTime:Tn(i,a.createTime.toTimestamp())}}(r.ct,t);else if(t.isNoDocument())n.noDocument={path:e.path.toArray(),readTime:je(t.version)};else{if(!t.isUnknownDocument())return O();n.unknownDocument={path:e.path.toArray(),version:je(t.version)}}return n}function Cs(r){const t=r.toTimestamp();return[t.seconds,t.nanoseconds]}function je(r){const t=r.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Ke(r){const t=new ut(r.seconds,r.nanoseconds);return B.fromTimestamp(t)}function Ne(r,t){const e=(t.baseMutations||[]).map(i=>Hi(r.ct,i));for(let i=0;i<t.mutations.length-1;++i){const a=t.mutations[i];if(i+1<t.mutations.length&&t.mutations[i+1].transform!==void 0){const u=t.mutations[i+1];a.updateTransforms=u.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const n=t.mutations.map(i=>Hi(r.ct,i)),s=ut.fromMillis(t.localWriteTimeMs);return new fo(t.batchId,s,e,n)}function fr(r){const t=Ke(r.readTime),e=r.lastLimboFreeSnapshotVersion!==void 0?Ke(r.lastLimboFreeSnapshotVersion):B.min();let n;return n=function(i){return i.documents!==void 0}(r.query)?function(i){return L(i.documents.length===1),Nt(xn(wl(i.documents[0])))}(r.query):function(i){return Nt(Sl(i))}(r.query),new Zt(n,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,t,e,_t.fromBase64String(r.resumeToken))}function Dl(r,t){const e=je(t.snapshotVersion),n=je(t.lastLimboFreeSnapshotVersion);let s;s=Ps(t.target)?Rl(r.ct,t.target):Ks(r.ct,t.target)._t;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ue(t.target),readTime:e,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:n,query:s}}function yo(r){const t=Sl({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Vs(t,t.limit,"L"):t}function Di(r,t){return new go(t.largestBatchId,Hi(r.ct,t.overlayMutation))}function Du(r,t){const e=t.path.lastSegment();return[r,Dt(t.path.popLast()),e]}function Nu(r,t,e,n){return{indexId:r,uid:t,sequenceNumber:e,readTime:je(n.readTime),documentKey:Dt(n.documentKey.path),largestBatchId:n.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{getBundleMetadata(t,e){return ku(t).get(e).next(n=>{if(n)return function(i){return{id:i.bundleId,createTime:Ke(i.createTime),version:i.version}}(n)})}saveBundleMetadata(t,e){return ku(t).put(function(s){return{bundleId:s.id,createTime:je(ft(s.createTime)),version:s.version}}(e))}getNamedQuery(t,e){return Mu(t).get(e).next(n=>{if(n)return function(i){return{name:i.name,query:yo(i.bundledQuery),readTime:Ke(i.readTime)}}(n)})}saveNamedQuery(t,e){return Mu(t).put(function(s){return{name:s.name,readTime:je(ft(s.readTime)),bundledQuery:s.bundledQuery}}(e))}}function ku(r){return Et(r,"bundles")}function Mu(r){return Et(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(t,e){this.serializer=t,this.userId=e}static lt(t,e){const n=e.uid||"";return new Qs(t,n)}getOverlay(t,e){return ir(t).get(Du(this.userId,e)).next(n=>n?Di(this.serializer,n):null)}getOverlays(t,e){const n=jt();return v.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){const s=[];return n.forEach((i,a)=>{const u=new go(e,a);s.push(this.ht(t,u))}),v.waitFor(s)}removeOverlaysForBatchId(t,e,n){const s=new Set;e.forEach(a=>s.add(Dt(a.getCollectionPath())));const i=[];return s.forEach(a=>{const u=IDBKeyRange.bound([this.userId,a,n],[this.userId,a,n+1],!1,!0);i.push(ir(t).j("collectionPathOverlayIndex",u))}),v.waitFor(i)}getOverlaysForCollection(t,e,n){const s=jt(),i=Dt(e),a=IDBKeyRange.bound([this.userId,i,n],[this.userId,i,Number.POSITIVE_INFINITY],!0);return ir(t).U("collectionPathOverlayIndex",a).next(u=>{for(const l of u){const d=Di(this.serializer,l);s.set(d.getKey(),d)}return s})}getOverlaysForCollectionGroup(t,e,n,s){const i=jt();let a;const u=IDBKeyRange.bound([this.userId,e,n],[this.userId,e,Number.POSITIVE_INFINITY],!0);return ir(t).J({index:"collectionGroupOverlayIndex",range:u},(l,d,f)=>{const g=Di(this.serializer,d);i.size()<s||g.largestBatchId===a?(i.set(g.getKey(),g),a=g.largestBatchId):f.done()}).next(()=>i)}ht(t,e){return ir(t).put(function(s,i,a){const[u,l,d]=Du(i,a.mutation.key);return{userId:i,collectionPath:l,documentId:d,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Pr(s.ct,a.mutation)}}(this.serializer,this.userId,e))}}function ir(r){return Et(r,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(ht(t.integerValue));else if("doubleValue"in t){const n=ht(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),Tr(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Et(e,20),typeof n=="string"&&(n=te(n)),e.At(`${n.seconds||""}`),e.dt(n.nanos||0)}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(ee(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?Bc(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):O()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const s of Object.keys(n))this.Rt(s,e),this.It(n[s],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const s of n)this.It(s,e)}gt(t,e){this.Et(e,37),F.fromName(t).path.forEach(n=>{this.Et(e,60),this.St(n,e)})}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}ke.bt=new ke;function Jf(r){if(r===0)return 8;let t=0;return!(r>>4)&&(t+=4,r<<=4),!(r>>6)&&(t+=2,r<<=2),!(r>>7)&&(t+=1),t}function Fu(r){const t=64-function(n){let s=0;for(let i=0;i<8;++i){const a=Jf(255&n[i]);if(s+=a,a!==8)break}return s}(r);return Math.ceil(t/8)}class Yf{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Ct(n.value),n=e.next();this.vt()}Ft(t){const e=t[Symbol.iterator]();let n=e.next();for(;!n.done;)this.Mt(n.value),n=e.next();this.xt()}Ot(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Ct(n);else if(n<2048)this.Ct(960|n>>>6),this.Ct(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Ct(480|n>>>12),this.Ct(128|63&n>>>6),this.Ct(128|63&n);else{const s=e.codePointAt(0);this.Ct(240|s>>>18),this.Ct(128|63&s>>>12),this.Ct(128|63&s>>>6),this.Ct(128|63&s)}}this.vt()}Nt(t){for(const e of t){const n=e.charCodeAt(0);if(n<128)this.Mt(n);else if(n<2048)this.Mt(960|n>>>6),this.Mt(128|63&n);else if(e<"\uD800"||"\uDBFF"<e)this.Mt(480|n>>>12),this.Mt(128|63&n>>>6),this.Mt(128|63&n);else{const s=e.codePointAt(0);this.Mt(240|s>>>18),this.Mt(128|63&s>>>12),this.Mt(128|63&s>>>6),this.Mt(128|63&s)}}this.xt()}Lt(t){const e=this.Bt(t),n=Fu(e);this.kt(1+n),this.buffer[this.position++]=255&n;for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=255&e[s]}qt(t){const e=this.Bt(t),n=Fu(e);this.kt(1+n),this.buffer[this.position++]=~(255&n);for(let s=e.length-n;s<e.length;++s)this.buffer[this.position++]=~(255&e[s])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(t){this.kt(t.length),this.buffer.set(t,this.position),this.position+=t.length}Wt(){return this.buffer.slice(0,this.position)}Bt(t){const e=function(i){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,i,!1),new Uint8Array(a.buffer)}(t),n=(128&e[0])!=0;e[0]^=n?255:128;for(let s=1;s<e.length;++s)e[s]^=n?255:0;return e}Ct(t){const e=255&t;e===0?(this.Kt(0),this.Kt(255)):e===255?(this.Kt(255),this.Kt(0)):this.Kt(e)}Mt(t){const e=255&t;e===0?(this.Ut(0),this.Ut(255)):e===255?(this.Ut(255),this.Ut(0)):this.Ut(t)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(t){this.kt(1),this.buffer[this.position++]=t}Ut(t){this.kt(1),this.buffer[this.position++]=~t}kt(t){const e=t+this.position;if(e<=this.buffer.length)return;let n=2*this.buffer.length;n<e&&(n=e);const s=new Uint8Array(n);s.set(this.buffer),this.buffer=s}}class Xf{constructor(t){this.Gt=t}ft(t){this.Gt.Dt(t)}At(t){this.Gt.Ot(t)}dt(t){this.Gt.Lt(t)}Tt(){this.Gt.Qt()}}class Zf{constructor(t){this.Gt=t}ft(t){this.Gt.Ft(t)}At(t){this.Gt.Nt(t)}dt(t){this.Gt.qt(t)}Tt(){this.Gt.$t()}}class or{constructor(){this.Gt=new Yf,this.zt=new Xf(this.Gt),this.jt=new Zf(this.Gt)}seed(t){this.Gt.seed(t)}Ht(t){return t===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e,n,s){this.indexId=t,this.documentKey=e,this.arrayValue=n,this.directionalValue=s}Jt(){const t=this.directionalValue.length,e=t===0||this.directionalValue[t-1]===255?t+1:t,n=new Uint8Array(e);return n.set(this.directionalValue,0),e!==t?n.set([0],this.directionalValue.length):++n[n.length-1],new Me(this.indexId,this.documentKey,this.arrayValue,n)}}function le(r,t){let e=r.indexId-t.indexId;return e!==0?e:(e=Ou(r.arrayValue,t.arrayValue),e!==0?e:(e=Ou(r.directionalValue,t.directionalValue),e!==0?e:F.comparator(r.documentKey,t.documentKey)))}function Ou(r,t){for(let e=0;e<r.length&&e<t.length;++e){const n=r[e]-t[e];if(n!==0)return n}return r.length-t.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(t){this.Yt=new tt((e,n)=>ot.comparator(e.field,n.field)),this.collectionId=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment(),this.Zt=t.orderBy,this.Xt=[];for(const e of t.filters){const n=e;n.isInequality()?this.Yt=this.Yt.add(n):this.Xt.push(n)}}get en(){return this.Yt.size>1}tn(t){if(L(t.collectionGroup===this.collectionId),this.en)return!1;const e=Li(t);if(e!==void 0&&!this.nn(e))return!1;const n=xe(t);let s=new Set,i=0,a=0;for(;i<n.length&&this.nn(n[i]);++i)s=s.add(n[i].fieldPath.canonicalString());if(i===n.length)return!0;if(this.Yt.size>0){const u=this.Yt.getIterator().getNext();if(!s.has(u.field.canonicalString())){const l=n[i];if(!this.rn(u,l)||!this.sn(this.Zt[a++],l))return!1}++i}for(;i<n.length;++i){const u=n[i];if(a>=this.Zt.length||!this.sn(this.Zt[a++],u))return!1}return!0}on(){if(this.en)return null;let t=new tt(ot.comparator);const e=[];for(const n of this.Xt)if(!n.field.isKeyField())if(n.op==="array-contains"||n.op==="array-contains-any")e.push(new Le(n.field,2));else{if(t.has(n.field))continue;t=t.add(n.field),e.push(new Le(n.field,0))}for(const n of this.Zt)n.field.isKeyField()||t.has(n.field)||(t=t.add(n.field),e.push(new Le(n.field,n.dir==="asc"?0:1)));return new mn(mn.UNKNOWN_ID,this.collectionId,e,gn.empty())}nn(t){for(const e of this.Xt)if(this.rn(e,t))return!0;return!1}rn(t,e){if(t===void 0||!t.field.isEqual(e.fieldPath))return!1;const n=t.op==="array-contains"||t.op==="array-contains-any";return e.kind===2===n}sn(t,e){return!!t.field.isEqual(e.fieldPath)&&(e.kind===0&&t.dir==="asc"||e.kind===1&&t.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(r){var t,e;if(L(r instanceof H||r instanceof Z),r instanceof H){if(r instanceof Wc){const s=((e=(t=r.value.arrayValue)===null||t===void 0?void 0:t.values)===null||e===void 0?void 0:e.map(i=>H.create(r.field,"==",i)))||[];return Z.create(s,"or")}return r}const n=r.filters.map(s=>Nl(s));return Z.create(n,r.op)}function tm(r){if(r.getFilters().length===0)return[];const t=Xi(Nl(r));return L(kl(t)),Ji(t)||Yi(t)?[t]:t.getFilters()}function Ji(r){return r instanceof H}function Yi(r){return r instanceof Z&&uo(r)}function kl(r){return Ji(r)||Yi(r)||function(e){if(e instanceof Z&&Gi(e)){for(const n of e.getFilters())if(!Ji(n)&&!Yi(n))return!1;return!0}return!1}(r)}function Xi(r){if(L(r instanceof H||r instanceof Z),r instanceof H)return r;if(r.filters.length===1)return Xi(r.filters[0]);const t=r.filters.map(n=>Xi(n));let e=Z.create(t,r.op);return e=xs(e),kl(e)?e:(L(e instanceof Z),L(_n(e)),L(e.filters.length>1),e.filters.reduce((n,s)=>Io(n,s)))}function Io(r,t){let e;return L(r instanceof H||r instanceof Z),L(t instanceof H||t instanceof Z),e=r instanceof H?t instanceof H?function(s,i){return Z.create([s,i],"and")}(r,t):qu(r,t):t instanceof H?qu(t,r):function(s,i){if(L(s.filters.length>0&&i.filters.length>0),_n(s)&&_n(i))return Kc(s,i.getFilters());const a=Gi(s)?s:i,u=Gi(s)?i:s,l=a.filters.map(d=>Io(d,u));return Z.create(l,"or")}(r,t),xs(e)}function qu(r,t){if(_n(t))return Kc(t,r.getFilters());{const e=t.filters.map(n=>Io(r,n));return Z.create(e,"or")}}function xs(r){if(L(r instanceof H||r instanceof Z),r instanceof H)return r;const t=r.getFilters();if(t.length===1)return xs(t[0]);if(zc(r))return r;const e=t.map(s=>xs(s)),n=[];return e.forEach(s=>{s instanceof H?n.push(s):s instanceof Z&&(s.op===r.op?n.push(...s.filters):n.push(s))}),n.length===1?n[0]:Z.create(n,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class em{constructor(){this._n=new To}addToCollectionParentIndex(t,e){return this._n.add(e),v.resolve()}getCollectionParents(t,e){return v.resolve(this._n.getEntries(e))}addFieldIndex(t,e){return v.resolve()}deleteFieldIndex(t,e){return v.resolve()}deleteAllFieldIndexes(t){return v.resolve()}createTargetIndexes(t,e){return v.resolve()}getDocumentsMatchingTarget(t,e){return v.resolve(null)}getIndexType(t,e){return v.resolve(0)}getFieldIndexes(t,e){return v.resolve([])}getNextCollectionGroupToUpdate(t){return v.resolve(null)}getMinOffset(t,e){return v.resolve(Ut.min())}getMinOffsetFromCollectionGroup(t,e){return v.resolve(Ut.min())}updateCollectionGroup(t,e,n){return v.resolve()}updateIndexEntries(t,e){return v.resolve()}}class To{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e]||new tt(W.comparator),i=!s.has(n);return this.index[e]=s.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),s=this.index[e];return s&&s.has(n)}getEntries(t){return(this.index[t]||new tt(W.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls=new Uint8Array(0);class nm{constructor(t,e){this.databaseId=e,this.an=new To,this.un=new re(n=>Ue(n),(n,s)=>xr(n,s)),this.uid=t.uid||""}addToCollectionParentIndex(t,e){if(!this.an.has(e)){const n=e.lastSegment(),s=e.popLast();t.addOnCommittedListener(()=>{this.an.add(e)});const i={collectionId:n,parent:Dt(s)};return Bu(t).put(i)}return v.resolve()}getCollectionParents(t,e){const n=[],s=IDBKeyRange.bound([e,""],[Rc(e),""],!1,!0);return Bu(t).U(s).next(i=>{for(const a of i){if(a.collectionId!==e)break;n.push(zt(a.parent))}return n})}addFieldIndex(t,e){const n=ar(t),s=function(u){return{indexId:u.indexId,collectionGroup:u.collectionGroup,fields:u.fields.map(l=>[l.fieldPath.canonicalString(),l.kind])}}(e);delete s.indexId;const i=n.add(s);if(e.indexState){const a=sn(t);return i.next(u=>{a.put(Nu(u,this.uid,e.indexState.sequenceNumber,e.indexState.offset))})}return i.next()}deleteFieldIndex(t,e){const n=ar(t),s=sn(t),i=rn(t);return n.delete(e.indexId).next(()=>s.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([e.indexId],[e.indexId+1],!1,!0)))}deleteAllFieldIndexes(t){const e=ar(t),n=rn(t),s=sn(t);return e.j().next(()=>n.j()).next(()=>s.j())}createTargetIndexes(t,e){return v.forEach(this.cn(e),n=>this.getIndexType(t,n).next(s=>{if(s===0||s===1){const i=new Lu(n).on();if(i!=null)return this.addFieldIndex(t,i)}}))}getDocumentsMatchingTarget(t,e){const n=rn(t);let s=!0;const i=new Map;return v.forEach(this.cn(e),a=>this.ln(t,a).next(u=>{s&&(s=!!u),i.set(a,u)})).next(()=>{if(s){let a=j();const u=[];return v.forEach(i,(l,d)=>{C("IndexedDbIndexManager",`Using index ${function(q){return`id=${q.indexId}|cg=${q.collectionGroup}|f=${q.fields.map(Q=>`${Q.fieldPath}:${Q.kind}`).join(",")}`}(l)} to execute ${Ue(e)}`);const f=function(q,Q){const X=Li(Q);if(X===void 0)return null;for(const K of Ss(q,X.fieldPath))switch(K.op){case"array-contains-any":return K.value.arrayValue.values||[];case"array-contains":return[K.value]}return null}(d,l),g=function(q,Q){const X=new Map;for(const K of xe(Q))for(const T of Ss(q,K.fieldPath))switch(T.op){case"==":case"in":X.set(K.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return X.set(K.fieldPath.canonicalString(),T.value),Array.from(X.values())}return null}(d,l),_=function(q,Q){const X=[];let K=!0;for(const T of xe(Q)){const p=T.kind===0?yu(q,T.fieldPath,q.startAt):Iu(q,T.fieldPath,q.startAt);X.push(p.value),K&&(K=p.inclusive)}return new Ie(X,K)}(d,l),P=function(q,Q){const X=[];let K=!0;for(const T of xe(Q)){const p=T.kind===0?Iu(q,T.fieldPath,q.endAt):yu(q,T.fieldPath,q.endAt);X.push(p.value),K&&(K=p.inclusive)}return new Ie(X,K)}(d,l),D=this.hn(l,d,_),N=this.hn(l,d,P),b=this.Pn(l,d,g),U=this.In(l.indexId,f,D,_.inclusive,N,P.inclusive,b);return v.forEach(U,G=>n.G(G,e.limit).next(q=>{q.forEach(Q=>{const X=F.fromSegments(Q.documentKey);a.has(X)||(a=a.add(X),u.push(X))})}))}).next(()=>u)}return v.resolve(null)})}cn(t){let e=this.un.get(t);return e||(t.filters.length===0?e=[t]:e=tm(Z.create(t.filters,"and")).map(n=>ji(t.path,t.collectionGroup,t.orderBy,n.getFilters(),t.limit,t.startAt,t.endAt)),this.un.set(t,e),e)}In(t,e,n,s,i,a,u){const l=(e!=null?e.length:1)*Math.max(n.length,i.length),d=l/(e!=null?e.length:1),f=[];for(let g=0;g<l;++g){const _=e?this.Tn(e[g/d]):ls,P=this.En(t,_,n[g%d],s),D=this.dn(t,_,i[g%d],a),N=u.map(b=>this.En(t,_,b,!0));f.push(...this.createRange(P,D,N))}return f}En(t,e,n,s){const i=new Me(t,F.empty(),e,n);return s?i:i.Jt()}dn(t,e,n,s){const i=new Me(t,F.empty(),e,n);return s?i.Jt():i}ln(t,e){const n=new Lu(e),s=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment();return this.getFieldIndexes(t,s).next(i=>{let a=null;for(const u of i)n.tn(u)&&(!a||u.fields.length>a.fields.length)&&(a=u);return a})}getIndexType(t,e){let n=2;const s=this.cn(e);return v.forEach(s,i=>this.ln(t,i).next(a=>{a?n!==0&&a.fields.length<function(l){let d=new tt(ot.comparator),f=!1;for(const g of l.filters)for(const _ of g.getFlattenedFilters())_.field.isKeyField()||(_.op==="array-contains"||_.op==="array-contains-any"?f=!0:d=d.add(_.field));for(const g of l.orderBy)g.field.isKeyField()||(d=d.add(g.field));return d.size+(f?1:0)}(i)&&(n=1):n=0})).next(()=>function(a){return a.limit!==null}(e)&&s.length>1&&n===2?1:n)}An(t,e){const n=new or;for(const s of xe(t)){const i=e.data.field(s.fieldPath);if(i==null)return null;const a=n.Ht(s.kind);ke.bt.Pt(i,a)}return n.Wt()}Tn(t){const e=new or;return ke.bt.Pt(t,e.Ht(0)),e.Wt()}Rn(t,e){const n=new or;return ke.bt.Pt(Be(this.databaseId,e),n.Ht(function(i){const a=xe(i);return a.length===0?0:a[a.length-1].kind}(t))),n.Wt()}Pn(t,e,n){if(n===null)return[];let s=[];s.push(new or);let i=0;for(const a of xe(t)){const u=n[i++];for(const l of s)if(this.Vn(e,a.fieldPath)&&vr(u))s=this.mn(s,a,u);else{const d=l.Ht(a.kind);ke.bt.Pt(u,d)}}return this.fn(s)}hn(t,e,n){return this.Pn(t,e,n.position)}fn(t){const e=[];for(let n=0;n<t.length;++n)e[n]=t[n].Wt();return e}mn(t,e,n){const s=[...t],i=[];for(const a of n.arrayValue.values||[])for(const u of s){const l=new or;l.seed(u.Wt()),ke.bt.Pt(a,l.Ht(e.kind)),i.push(l)}return i}Vn(t,e){return!!t.filters.find(n=>n instanceof H&&n.field.isEqual(e)&&(n.op==="in"||n.op==="not-in"))}getFieldIndexes(t,e){const n=ar(t),s=sn(t);return(e?n.U("collectionGroupIndex",IDBKeyRange.bound(e,e)):n.U()).next(i=>{const a=[];return v.forEach(i,u=>s.get([u.indexId,this.uid]).next(l=>{a.push(function(f,g){const _=g?new gn(g.sequenceNumber,new Ut(Ke(g.readTime),new F(zt(g.documentKey)),g.largestBatchId)):gn.empty(),P=f.fields.map(([D,N])=>new Le(ot.fromServerFormat(D),N));return new mn(f.indexId,f.collectionGroup,P,_)}(u,l))})).next(()=>a)})}getNextCollectionGroupToUpdate(t){return this.getFieldIndexes(t).next(e=>e.length===0?null:(e.sort((n,s)=>{const i=n.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:z(n.collectionGroup,s.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(t,e,n){const s=ar(t),i=sn(t);return this.gn(t).next(a=>s.U("collectionGroupIndex",IDBKeyRange.bound(e,e)).next(u=>v.forEach(u,l=>i.put(Nu(l.indexId,this.uid,a,n)))))}updateIndexEntries(t,e){const n=new Map;return v.forEach(e,(s,i)=>{const a=n.get(s.collectionGroup);return(a?v.resolve(a):this.getFieldIndexes(t,s.collectionGroup)).next(u=>(n.set(s.collectionGroup,u),v.forEach(u,l=>this.pn(t,s,l).next(d=>{const f=this.yn(i,l);return d.isEqual(f)?v.resolve():this.wn(t,i,l,d,f)}))))})}Sn(t,e,n,s){return rn(t).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.Rn(n,e.key),documentKey:e.key.path.toArray()})}bn(t,e,n,s){return rn(t).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.Rn(n,e.key),e.key.path.toArray()])}pn(t,e,n){const s=rn(t);let i=new tt(le);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.Rn(n,e)])},(a,u)=>{i=i.add(new Me(n.indexId,e,u.arrayValue,u.directionalValue))}).next(()=>i)}yn(t,e){let n=new tt(le);const s=this.An(e,t);if(s==null)return n;const i=Li(e);if(i!=null){const a=t.data.field(i.fieldPath);if(vr(a))for(const u of a.arrayValue.values||[])n=n.add(new Me(e.indexId,t.key,this.Tn(u),s))}else n=n.add(new Me(e.indexId,t.key,ls,s));return n}wn(t,e,n,s,i){C("IndexedDbIndexManager","Updating index entries for document '%s'",e.key);const a=[];return function(l,d,f,g,_){const P=l.getIterator(),D=d.getIterator();let N=nn(P),b=nn(D);for(;N||b;){let U=!1,G=!1;if(N&&b){const q=f(N,b);q<0?G=!0:q>0&&(U=!0)}else N!=null?G=!0:U=!0;U?(g(b),b=nn(D)):G?(_(N),N=nn(P)):(N=nn(P),b=nn(D))}}(s,i,le,u=>{a.push(this.Sn(t,e,n,u))},u=>{a.push(this.bn(t,e,n,u))}),v.waitFor(a)}gn(t){let e=1;return sn(t).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(n,s,i)=>{i.done(),e=s.sequenceNumber+1}).next(()=>e)}createRange(t,e,n){n=n.sort((a,u)=>le(a,u)).filter((a,u,l)=>!u||le(a,l[u-1])!==0);const s=[];s.push(t);for(const a of n){const u=le(a,t),l=le(a,e);if(u===0)s[0]=t.Jt();else if(u>0&&l<0)s.push(a),s.push(a.Jt());else if(l>0)break}s.push(e);const i=[];for(let a=0;a<s.length;a+=2){if(this.Dn(s[a],s[a+1]))return[];const u=[s[a].indexId,this.uid,s[a].arrayValue,s[a].directionalValue,ls,[]],l=[s[a+1].indexId,this.uid,s[a+1].arrayValue,s[a+1].directionalValue,ls,[]];i.push(IDBKeyRange.bound(u,l))}return i}Dn(t,e){return le(t,e)>0}getMinOffsetFromCollectionGroup(t,e){return this.getFieldIndexes(t,e).next(Uu)}getMinOffset(t,e){return v.mapArray(this.cn(e),n=>this.ln(t,n).next(s=>s||O())).next(Uu)}}function Bu(r){return Et(r,"collectionParents")}function rn(r){return Et(r,"indexEntries")}function ar(r){return Et(r,"indexConfiguration")}function sn(r){return Et(r,"indexState")}function Uu(r){L(r.length!==0);let t=r[0].indexState.offset,e=t.largestBatchId;for(let n=1;n<r.length;n++){const s=r[n].indexState.offset;oo(s,t)<0&&(t=s),e<s.largestBatchId&&(e=s.largestBatchId)}return new Ut(t.readTime,t.documentKey,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class xt{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new xt(t,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ml(r,t,e){const n=r.store("mutations"),s=r.store("documentMutations"),i=[],a=IDBKeyRange.only(e.batchId);let u=0;const l=n.J({range:a},(f,g,_)=>(u++,_.delete()));i.push(l.next(()=>{L(u===1)}));const d=[];for(const f of e.mutations){const g=Dc(t,f.key.path,e.batchId);i.push(s.delete(g)),d.push(f.key)}return v.waitFor(i).next(()=>d)}function Ds(r){if(!r)return 0;let t;if(r.document)t=r.document;else if(r.unknownDocument)t=r.unknownDocument;else{if(!r.noDocument)throw O();t=r.noDocument}return JSON.stringify(t).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xt.DEFAULT_COLLECTION_PERCENTILE=10,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,xt.DEFAULT=new xt(41943040,xt.DEFAULT_COLLECTION_PERCENTILE,xt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),xt.DISABLED=new xt(-1,0,0);class $s{constructor(t,e,n,s){this.userId=t,this.serializer=e,this.indexManager=n,this.referenceDelegate=s,this.Cn={}}static lt(t,e,n,s){L(t.uid!=="");const i=t.isAuthenticated()?t.uid:"";return new $s(i,e,n,s)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return he(t).J({index:"userMutationsIndex",range:n},(s,i,a)=>{e=!1,a.done()}).next(()=>e)}addMutationBatch(t,e,n,s){const i=ln(t),a=he(t);return a.add({}).next(u=>{L(typeof u=="number");const l=new fo(u,e,n,s),d=function(P,D,N){const b=N.baseMutations.map(G=>Pr(P.ct,G)),U=N.mutations.map(G=>Pr(P.ct,G));return{userId:D,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:b,mutations:U}}(this.serializer,this.userId,l),f=[];let g=new tt((_,P)=>z(_.canonicalString(),P.canonicalString()));for(const _ of s){const P=Dc(this.userId,_.key.path,u);g=g.add(_.key.path.popLast()),f.push(a.put(d)),f.push(i.put(P,Kd))}return g.forEach(_=>{f.push(this.indexManager.addToCollectionParentIndex(t,_))}),t.addOnCommittedListener(()=>{this.Cn[u]=l.keys()}),v.waitFor(f).next(()=>l)})}lookupMutationBatch(t,e){return he(t).get(e).next(n=>n?(L(n.userId===this.userId),Ne(this.serializer,n)):null)}vn(t,e){return this.Cn[e]?v.resolve(this.Cn[e]):this.lookupMutationBatch(t,e).next(n=>{if(n){const s=n.keys();return this.Cn[e]=s,s}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return he(t).J({index:"userMutationsIndex",range:s},(a,u,l)=>{u.userId===this.userId&&(L(u.batchId>=n),i=Ne(this.serializer,u)),l.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return he(t).J({index:"userMutationsIndex",range:e,reverse:!0},(s,i,a)=>{n=i.batchId,a.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return he(t).U("userMutationsIndex",e).next(n=>n.map(s=>Ne(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=ps(this.userId,e.path),s=IDBKeyRange.lowerBound(n),i=[];return ln(t).J({range:s},(a,u,l)=>{const[d,f,g]=a,_=zt(f);if(d===this.userId&&e.path.isEqual(_))return he(t).get(g).next(P=>{if(!P)throw O();L(P.userId===this.userId),i.push(Ne(this.serializer,P))});l.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(z);const s=[];return e.forEach(i=>{const a=ps(this.userId,i.path),u=IDBKeyRange.lowerBound(a),l=ln(t).J({range:u},(d,f,g)=>{const[_,P,D]=d,N=zt(P);_===this.userId&&i.path.isEqual(N)?n=n.add(D):g.done()});s.push(l)}),v.waitFor(s).next(()=>this.Fn(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1,i=ps(this.userId,n),a=IDBKeyRange.lowerBound(i);let u=new tt(z);return ln(t).J({range:a},(l,d,f)=>{const[g,_,P]=l,D=zt(_);g===this.userId&&n.isPrefixOf(D)?D.length===s&&(u=u.add(P)):f.done()}).next(()=>this.Fn(t,u))}Fn(t,e){const n=[],s=[];return e.forEach(i=>{s.push(he(t).get(i).next(a=>{if(a===null)throw O();L(a.userId===this.userId),n.push(Ne(this.serializer,a))}))}),v.waitFor(s).next(()=>n)}removeMutationBatch(t,e){return Ml(t._e,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.Mn(e.batchId)}),v.forEach(n,s=>this.referenceDelegate.markPotentiallyOrphaned(t,s))))}Mn(t){delete this.Cn[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return v.resolve();const n=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),s=[];return ln(t).J({range:n},(i,a,u)=>{if(i[0]===this.userId){const l=zt(i[1]);s.push(l)}else u.done()}).next(()=>{L(s.length===0)})})}containsKey(t,e){return Fl(t,this.userId,e)}xn(t){return Ol(t).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Fl(r,t,e){const n=ps(t,e.path),s=n[1],i=IDBKeyRange.lowerBound(n);let a=!1;return ln(r).J({range:i,H:!0},(u,l,d)=>{const[f,g,_]=u;f===t&&g===s&&(a=!0),d.done()}).next(()=>a)}function he(r){return Et(r,"mutations")}function ln(r){return Et(r,"documentMutations")}function Ol(r){return Et(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.On=t}next(){return this.On+=2,this.On}static Nn(){return new Qe(0)}static Ln(){return new Qe(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm{constructor(t,e){this.referenceDelegate=t,this.serializer=e}allocateTargetId(t){return this.Bn(t).next(e=>{const n=new Qe(e.highestTargetId);return e.highestTargetId=n.next(),this.kn(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.Bn(t).next(e=>B.fromTimestamp(new ut(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.Bn(t).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.Bn(t).next(s=>(s.highestListenSequenceNumber=e,n&&(s.lastRemoteSnapshotVersion=n.toTimestamp()),e>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=e),this.kn(t,s)))}addTargetData(t,e){return this.qn(t,e).next(()=>this.Bn(t).next(n=>(n.targetCount+=1,this.Qn(e,n),this.kn(t,n))))}updateTargetData(t,e){return this.qn(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>on(t).delete(e.targetId)).next(()=>this.Bn(t)).next(n=>(L(n.targetCount>0),n.targetCount-=1,this.kn(t,n)))}removeTargets(t,e,n){let s=0;const i=[];return on(t).J((a,u)=>{const l=fr(u);l.sequenceNumber<=e&&n.get(l.targetId)===null&&(s++,i.push(this.removeTargetData(t,l)))}).next(()=>v.waitFor(i)).next(()=>s)}forEachTarget(t,e){return on(t).J((n,s)=>{const i=fr(s);e(i)})}Bn(t){return zu(t).get("targetGlobalKey").next(e=>(L(e!==null),e))}kn(t,e){return zu(t).put("targetGlobalKey",e)}qn(t,e){return on(t).put(Dl(this.serializer,e))}Qn(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.Bn(t).next(e=>e.targetCount)}getTargetData(t,e){const n=Ue(e),s=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return on(t).J({range:s,index:"queryTargetsIndex"},(a,u,l)=>{const d=fr(u);xr(e,d.target)&&(i=d,l.done())}).next(()=>i)}addMatchingKeys(t,e,n){const s=[],i=fe(t);return e.forEach(a=>{const u=Dt(a.path);s.push(i.put({targetId:n,path:u})),s.push(this.referenceDelegate.addReference(t,n,a))}),v.waitFor(s)}removeMatchingKeys(t,e,n){const s=fe(t);return v.forEach(e,i=>{const a=Dt(i.path);return v.waitFor([s.delete([n,a]),this.referenceDelegate.removeReference(t,n,i)])})}removeMatchingKeysForTargetId(t,e){const n=fe(t),s=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(s)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),s=fe(t);let i=j();return s.J({range:n,H:!0},(a,u,l)=>{const d=zt(a[1]),f=new F(d);i=i.add(f)}).next(()=>i)}containsKey(t,e){const n=Dt(e.path),s=IDBKeyRange.bound([n],[Rc(n)],!1,!0);let i=0;return fe(t).J({index:"documentTargetsIndex",H:!0,range:s},([a,u],l,d)=>{a!==0&&(i++,d.done())}).next(()=>i>0)}ot(t,e){return on(t).get(e).next(n=>n?fr(n):null)}}function on(r){return Et(r,"targets")}function zu(r){return Et(r,"targetGlobal")}function fe(r){return Et(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju([r,t],[e,n]){const s=z(r,e);return s===0?z(t,n):s}class sm{constructor(t){this.Kn=t,this.buffer=new tt(ju),this.$n=0}Un(){return++this.$n}Wn(t){const e=[t,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();ju(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ll{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(t){C("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){we(e)?C("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Ee(e)}await this.zn(3e5)})}}class im{constructor(t,e){this.jn=t,this.params=e}calculateTargetCount(t,e){return this.jn.Hn(t).next(n=>Math.floor(e/100*n))}nthSequenceNumber(t,e){if(e===0)return v.resolve(Ft.oe);const n=new sm(e);return this.jn.forEachTarget(t,s=>n.Wn(s.sequenceNumber)).next(()=>this.jn.Jn(t,s=>n.Wn(s))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.jn.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.jn.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(C("LruGarbageCollector","Garbage collection skipped; disabled"),v.resolve(Gu)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(C("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Gu):this.Yn(t,e))}getCacheSize(t){return this.jn.getCacheSize(t)}Yn(t,e){let n,s,i,a,u,l,d;const f=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(C("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(t,s))).next(g=>(n=g,u=Date.now(),this.removeTargets(t,n,e))).next(g=>(i=g,l=Date.now(),this.removeOrphanedDocuments(t,n))).next(g=>(d=Date.now(),an()<=Xt.DEBUG&&C("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-f}ms
	Determined least recently used ${s} in `+(u-a)+`ms
	Removed ${i} targets in `+(l-u)+`ms
	Removed ${g} documents in `+(d-l)+`ms
Total Duration: ${d-f}ms`),v.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function ql(r,t){return new im(r,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(t,e){this.db=t,this.garbageCollector=ql(this,e)}Hn(t){const e=this.Zn(t);return this.db.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}Zn(t){let e=0;return this.Jn(t,n=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}Jn(t,e){return this.Xn(t,(n,s)=>e(s))}addReference(t,e,n){return hs(t,n)}removeReference(t,e,n){return hs(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return hs(t,e)}er(t,e){return function(s,i){let a=!1;return Ol(s).Y(u=>Fl(s,u,i).next(l=>(l&&(a=!0),v.resolve(!l)))).next(()=>a)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Xn(t,(a,u)=>{if(u<=e){const l=this.er(t,a).next(d=>{if(!d)return i++,n.getEntry(t,a).next(()=>(n.removeEntry(a,B.min()),fe(t).delete(function(g){return[0,Dt(g.path)]}(a))))});s.push(l)}}).next(()=>v.waitFor(s)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return hs(t,e)}Xn(t,e){const n=fe(t);let s,i=Ft.oe;return n.J({index:"documentTargetsIndex"},([a,u],{path:l,sequenceNumber:d})=>{a===0?(i!==Ft.oe&&e(new F(zt(s)),i),i=d,s=l):i=Ft.oe}).next(()=>{i!==Ft.oe&&e(new F(zt(s)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function hs(r,t){return fe(r).put(function(n,s){return{targetId:0,path:Dt(n.path),sequenceNumber:s}}(t,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bl{constructor(){this.changes=new re(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,it.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?v.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class am{constructor(t){this.serializer=t}setIndexManager(t){this.indexManager=t}addEntry(t,e,n){return Ce(t).put(n)}removeEntry(t,e,n){return Ce(t).delete(function(i,a){const u=i.path.toArray();return[u.slice(0,u.length-2),u[u.length-2],Cs(a),u[u.length-1]]}(e,n))}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.tr(t,n)))}getEntry(t,e){let n=it.newInvalidDocument(e);return Ce(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(ur(e))},(s,i)=>{n=this.nr(e,i)}).next(()=>n)}rr(t,e){let n={size:0,document:it.newInvalidDocument(e)};return Ce(t).J({index:"documentKeyIndex",range:IDBKeyRange.only(ur(e))},(s,i)=>{n={document:this.nr(e,i),size:Ds(i)}}).next(()=>n)}getEntries(t,e){let n=Lt();return this.ir(t,e,(s,i)=>{const a=this.nr(s,i);n=n.insert(s,a)}).next(()=>n)}sr(t,e){let n=Lt(),s=new rt(F.comparator);return this.ir(t,e,(i,a)=>{const u=this.nr(i,a);n=n.insert(i,u),s=s.insert(i,Ds(a))}).next(()=>({documents:n,_r:s}))}ir(t,e,n){if(e.isEmpty())return v.resolve();let s=new tt($u);e.forEach(l=>s=s.add(l));const i=IDBKeyRange.bound(ur(s.first()),ur(s.last())),a=s.getIterator();let u=a.getNext();return Ce(t).J({index:"documentKeyIndex",range:i},(l,d,f)=>{const g=F.fromSegments([...d.prefixPath,d.collectionGroup,d.documentId]);for(;u&&$u(u,g)<0;)n(u,null),u=a.getNext();u&&u.isEqual(g)&&(n(u,d),u=a.hasNext()?a.getNext():null),u?f.$(ur(u)):f.done()}).next(()=>{for(;u;)n(u,null),u=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(t,e,n,s,i){const a=e.path,u=[a.popLast().toArray(),a.lastSegment(),Cs(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],l=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Ce(t).U(IDBKeyRange.bound(u,l,!0)).next(d=>{i==null||i.incrementDocumentReadCount(d.length);let f=Lt();for(const g of d){const _=this.nr(F.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);_.isFoundDocument()&&(Nr(e,_)||s.has(_.key))&&(f=f.insert(_.key,_))}return f})}getAllFromCollectionGroup(t,e,n,s){let i=Lt();const a=Qu(e,n),u=Qu(e,Ut.max());return Ce(t).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,u,!0)},(l,d,f)=>{const g=this.nr(F.fromSegments(d.prefixPath.concat(d.collectionGroup,d.documentId)),d);i=i.insert(g.key,g),i.size===s&&f.done()}).next(()=>i)}newChangeBuffer(t){return new um(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(e=>e.byteSize)}getMetadata(t){return Ku(t).get("remoteDocumentGlobalKey").next(e=>(L(!!e),e))}tr(t,e){return Ku(t).put("remoteDocumentGlobalKey",e)}nr(t,e){if(e){const n=Wf(this.serializer,e);if(!(n.isNoDocument()&&n.version.isEqual(B.min())))return n}return it.newInvalidDocument(t)}}function Ul(r){return new am(r)}class um extends Bl{constructor(t,e){super(),this.ar=t,this.trackRemovals=e,this.ur=new re(n=>n.toString(),(n,s)=>n.isEqual(s))}applyChanges(t){const e=[];let n=0,s=new tt((i,a)=>z(i.canonicalString(),a.canonicalString()));return this.changes.forEach((i,a)=>{const u=this.ur.get(i);if(e.push(this.ar.removeEntry(t,i,u.readTime)),a.isValidDocument()){const l=xu(this.ar.serializer,a);s=s.add(i.path.popLast());const d=Ds(l);n+=d-u.size,e.push(this.ar.addEntry(t,i,l))}else if(n-=u.size,this.trackRemovals){const l=xu(this.ar.serializer,a.convertToNoDocument(B.min()));e.push(this.ar.addEntry(t,i,l))}}),s.forEach(i=>{e.push(this.ar.indexManager.addToCollectionParentIndex(t,i))}),e.push(this.ar.updateMetadata(t,n)),v.waitFor(e)}getFromCache(t,e){return this.ar.rr(t,e).next(n=>(this.ur.set(e,{size:n.size,readTime:n.document.readTime}),n.document))}getAllFromCache(t,e){return this.ar.sr(t,e).next(({documents:n,_r:s})=>(s.forEach((i,a)=>{this.ur.set(i,{size:a,readTime:n.get(i).readTime})}),n))}}function Ku(r){return Et(r,"remoteDocumentGlobal")}function Ce(r){return Et(r,"remoteDocumentsV14")}function ur(r){const t=r.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function Qu(r,t){const e=t.documentKey.path.toArray();return[r,Cs(t.readTime),e.slice(0,e.length-2),e.length>0?e[e.length-1]:""]}function $u(r,t){const e=r.path.toArray(),n=t.path.toArray();let s=0;for(let i=0;i<e.length-2&&i<n.length-2;++i)if(s=z(e[i],n[i]),s)return s;return s=z(e.length,n.length),s||(s=z(e[e.length-2],n[n.length-2]),s||z(e[e.length-1],n[n.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,e,n,s){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=s}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next(s=>(n=s,this.remoteDocumentCache.getEntry(t,e))).next(s=>(n!==null&&_r(n.mutation,s,Ot.empty(),ut.now()),s))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.getLocalViewOfDocuments(t,n,j()).next(()=>n))}getLocalViewOfDocuments(t,e,n=j()){const s=jt();return this.populateOverlays(t,s,e).next(()=>this.computeViews(t,e,s,n).next(i=>{let a=hr();return i.forEach((u,l)=>{a=a.insert(u,l.overlayedDocument)}),a}))}getOverlayedDocuments(t,e){const n=jt();return this.populateOverlays(t,n,e).next(()=>this.computeViews(t,e,n,j()))}populateOverlays(t,e,n){const s=[];return n.forEach(i=>{e.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(t,s).next(i=>{i.forEach((a,u)=>{e.set(a,u)})})}computeViews(t,e,n,s){let i=Lt();const a=pr(),u=function(){return pr()}();return e.forEach((l,d)=>{const f=n.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof se)?i=i.insert(d.key,d):f!==void 0?(a.set(d.key,f.mutation.getFieldMask()),_r(f.mutation,d,f.mutation.getFieldMask(),ut.now())):a.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((d,f)=>a.set(d,f)),e.forEach((d,f)=>{var g;return u.set(d,new cm(f,(g=a.get(d))!==null&&g!==void 0?g:null))}),u))}recalculateAndSaveOverlays(t,e){const n=pr();let s=new rt((a,u)=>a-u),i=j();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(a=>{for(const u of a)u.keys().forEach(l=>{const d=e.get(l);if(d===null)return;let f=n.get(l)||Ot.empty();f=u.applyToLocalView(d,f),n.set(l,f);const g=(s.get(u.batchId)||j()).add(l);s=s.insert(u.batchId,g)})}).next(()=>{const a=[],u=s.getReverseIterator();for(;u.hasNext();){const l=u.getNext(),d=l.key,f=l.value,g=rl();f.forEach(_=>{if(!i.has(_)){const P=hl(e.get(_),n.get(_));P!==null&&g.set(_,P),i=i.add(_)}}),a.push(this.documentOverlayCache.saveOverlays(t,d,g))}return v.waitFor(a)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(n=>this.recalculateAndSaveOverlays(t,n))}getDocumentsMatchingQuery(t,e,n,s){return function(a){return F.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):co(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,s):this.getDocumentsMatchingCollectionQuery(t,e,n,s)}getNextDocuments(t,e,n,s){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,s-i.size):v.resolve(jt());let u=-1,l=i;return a.next(d=>v.forEach(d,(f,g)=>(u<g.largestBatchId&&(u=g.largestBatchId),i.get(f)?v.resolve():this.remoteDocumentCache.getEntry(t,f).next(_=>{l=l.insert(f,_)}))).next(()=>this.populateOverlays(t,d,i)).next(()=>this.computeViews(t,l,d,j())).next(f=>({batchId:u,changes:nl(f)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new F(e)).next(n=>{let s=hr();return n.isFoundDocument()&&(s=s.insert(n.key,n)),s})}getDocumentsMatchingCollectionGroupQuery(t,e,n,s){const i=e.collectionGroup;let a=hr();return this.indexManager.getCollectionParents(t,i).next(u=>v.forEach(u,l=>{const d=function(g,_){return new ne(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(e,l.child(i));return this.getDocumentsMatchingCollectionQuery(t,d,n,s).next(f=>{f.forEach((g,_)=>{a=a.insert(g,_)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(t,e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,i,s))).next(a=>{i.forEach((l,d)=>{const f=d.getKey();a.get(f)===null&&(a=a.insert(f,it.newInvalidDocument(f)))});let u=hr();return a.forEach((l,d)=>{const f=i.get(l);f!==void 0&&_r(f.mutation,d,Ot.empty(),ut.now()),Nr(e,d)&&(u=u.insert(l,d))}),u})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t){this.serializer=t,this.cr=new Map,this.lr=new Map}getBundleMetadata(t,e){return v.resolve(this.cr.get(e))}saveBundleMetadata(t,e){return this.cr.set(e.id,function(s){return{id:s.id,version:s.version,createTime:ft(s.createTime)}}(e)),v.resolve()}getNamedQuery(t,e){return v.resolve(this.lr.get(e))}saveNamedQuery(t,e){return this.lr.set(e.name,function(s){return{name:s.name,query:yo(s.bundledQuery),readTime:ft(s.readTime)}}(e)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(){this.overlays=new rt(F.comparator),this.hr=new Map}getOverlay(t,e){return v.resolve(this.overlays.get(e))}getOverlays(t,e){const n=jt();return v.forEach(e,s=>this.getOverlay(t,s).next(i=>{i!==null&&n.set(s,i)})).next(()=>n)}saveOverlays(t,e,n){return n.forEach((s,i)=>{this.ht(t,e,i)}),v.resolve()}removeOverlaysForBatchId(t,e,n){const s=this.hr.get(n);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(n)),v.resolve()}getOverlaysForCollection(t,e,n){const s=jt(),i=e.length+1,a=new F(e.child("")),u=this.overlays.getIteratorFrom(a);for(;u.hasNext();){const l=u.getNext().value,d=l.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===i&&l.largestBatchId>n&&s.set(l.getKey(),l)}return v.resolve(s)}getOverlaysForCollectionGroup(t,e,n,s){let i=new rt((d,f)=>d-f);const a=this.overlays.getIterator();for(;a.hasNext();){const d=a.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let f=i.get(d.largestBatchId);f===null&&(f=jt(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const u=jt(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((d,f)=>u.set(d,f)),!(u.size()>=s)););return v.resolve(u)}ht(t,e,n){const s=this.overlays.get(n.key);if(s!==null){const a=this.hr.get(s.largestBatchId).delete(n.key);this.hr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(n.key,new go(e,n));let i=this.hr.get(e);i===void 0&&(i=j(),this.hr.set(e,i)),this.hr.set(e,i.add(n.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(){this.Pr=new tt(yt.Ir),this.Tr=new tt(yt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(t,e){const n=new yt(t,e);this.Pr=this.Pr.add(n),this.Tr=this.Tr.add(n)}dr(t,e){t.forEach(n=>this.addReference(n,e))}removeReference(t,e){this.Ar(new yt(t,e))}Rr(t,e){t.forEach(n=>this.removeReference(n,e))}Vr(t){const e=new F(new W([])),n=new yt(e,t),s=new yt(e,t+1),i=[];return this.Tr.forEachInRange([n,s],a=>{this.Ar(a),i.push(a.key)}),i}mr(){this.Pr.forEach(t=>this.Ar(t))}Ar(t){this.Pr=this.Pr.delete(t),this.Tr=this.Tr.delete(t)}gr(t){const e=new F(new W([])),n=new yt(e,t),s=new yt(e,t+1);let i=j();return this.Tr.forEachInRange([n,s],a=>{i=i.add(a.key)}),i}containsKey(t){const e=new yt(t,0),n=this.Pr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class yt{constructor(t,e){this.key=t,this.pr=e}static Ir(t,e){return F.comparator(t.key,e.key)||z(t.pr,e.pr)}static Er(t,e){return z(t.pr,e.pr)||F.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.yr=1,this.wr=new tt(yt.Ir)}checkEmpty(t){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fo(i,e,n,s);this.mutationQueue.push(a);for(const u of s)this.wr=this.wr.add(new yt(u.key,i)),this.indexManager.addToCollectionParentIndex(t,u.key.path.popLast());return v.resolve(a)}lookupMutationBatch(t,e){return v.resolve(this.Sr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,s=this.br(n),i=s<0?0:s;return v.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(t){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new yt(e,0),s=new yt(e,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([n,s],a=>{const u=this.Sr(a.pr);i.push(u)}),v.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new tt(z);return e.forEach(s=>{const i=new yt(s,0),a=new yt(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,a],u=>{n=n.add(u.pr)})}),v.resolve(this.Dr(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,s=n.length+1;let i=n;F.isDocumentKey(i)||(i=i.child(""));const a=new yt(new F(i),0);let u=new tt(z);return this.wr.forEachWhile(l=>{const d=l.key.path;return!!n.isPrefixOf(d)&&(d.length===s&&(u=u.add(l.pr)),!0)},a),v.resolve(this.Dr(u))}Dr(t){const e=[];return t.forEach(n=>{const s=this.Sr(n);s!==null&&e.push(s)}),e}removeMutationBatch(t,e){L(this.Cr(e.batchId,"removed")===0),this.mutationQueue.shift();let n=this.wr;return v.forEach(e.mutations,s=>{const i=new yt(s.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,s.key)}).next(()=>{this.wr=n})}Mn(t){}containsKey(t,e){const n=new yt(e,0),s=this.wr.firstAfterOrEqual(n);return v.resolve(e.isEqual(s&&s.key))}performConsistencyCheck(t){return this.mutationQueue.length,v.resolve()}Cr(t,e){return this.br(t)}br(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Sr(t){const e=this.br(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(t){this.vr=t,this.docs=function(){return new rt(F.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,s=this.docs.get(n),i=s?s.size:0,a=this.vr(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return v.resolve(n?n.document.mutableCopy():it.newInvalidDocument(e))}getEntries(t,e){let n=Lt();return e.forEach(s=>{const i=this.docs.get(s);n=n.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))}),v.resolve(n)}getDocumentsMatchingQuery(t,e,n,s){let i=Lt();const a=e.path,u=new F(a.child("")),l=this.docs.getIteratorFrom(u);for(;l.hasNext();){const{key:d,value:{document:f}}=l.getNext();if(!a.isPrefixOf(d.path))break;d.path.length>a.length+1||oo(Sc(f),n)<=0||(s.has(f.key)||Nr(e,f))&&(i=i.insert(f.key,f.mutableCopy()))}return v.resolve(i)}getAllFromCollectionGroup(t,e,n,s){O()}Fr(t,e){return v.forEach(this.docs,n=>e(n))}newChangeBuffer(t){return new mm(this)}getSize(t){return v.resolve(this.size)}}class mm extends Bl{constructor(t){super(),this.ar=t}applyChanges(t){const e=[];return this.changes.forEach((n,s)=>{s.isValidDocument()?e.push(this.ar.addEntry(t,s)):this.ar.removeEntry(n)}),v.waitFor(e)}getFromCache(t,e){return this.ar.getEntry(t,e)}getAllFromCache(t,e){return this.ar.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(t){this.persistence=t,this.Mr=new re(e=>Ue(e),xr),this.lastRemoteSnapshotVersion=B.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Eo,this.targetCount=0,this.Lr=Qe.Nn()}forEachTarget(t,e){return this.Mr.forEach((n,s)=>e(s)),v.resolve()}getLastRemoteSnapshotVersion(t){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return v.resolve(this.Or)}allocateTargetId(t){return this.highestTargetId=this.Lr.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Or&&(this.Or=e),v.resolve()}qn(t){this.Mr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Lr=new Qe(e),this.highestTargetId=e),t.sequenceNumber>this.Or&&(this.Or=t.sequenceNumber)}addTargetData(t,e){return this.qn(e),this.targetCount+=1,v.resolve()}updateTargetData(t,e){return this.qn(e),v.resolve()}removeTargetData(t,e){return this.Mr.delete(e.target),this.Nr.Vr(e.targetId),this.targetCount-=1,v.resolve()}removeTargets(t,e,n){let s=0;const i=[];return this.Mr.forEach((a,u)=>{u.sequenceNumber<=e&&n.get(u.targetId)===null&&(this.Mr.delete(a),i.push(this.removeMatchingKeysForTargetId(t,u.targetId)),s++)}),v.waitFor(i).next(()=>s)}getTargetCount(t){return v.resolve(this.targetCount)}getTargetData(t,e){const n=this.Mr.get(e)||null;return v.resolve(n)}addMatchingKeys(t,e,n){return this.Nr.dr(e,n),v.resolve()}removeMatchingKeys(t,e,n){this.Nr.Rr(e,n);const s=this.persistence.referenceDelegate,i=[];return s&&e.forEach(a=>{i.push(s.markPotentiallyOrphaned(t,a))}),v.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Nr.Vr(e),v.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Nr.gr(e);return v.resolve(n)}containsKey(t,e){return v.resolve(this.Nr.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(t,e){this.Br={},this.overlays={},this.kr=new Ft(0),this.qr=!1,this.qr=!0,this.referenceDelegate=t(this),this.Qr=new gm(this),this.indexManager=new em,this.remoteDocumentCache=function(s){return new fm(s)}(n=>this.referenceDelegate.Kr(n)),this.serializer=new xl(e),this.$r=new lm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new hm,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.Br[t.toKey()];return n||(n=new dm(e,this.referenceDelegate),this.Br[t.toKey()]=n),n}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(t,e,n){C("MemoryPersistence","Starting transaction:",t);const s=new pm(this.kr.next());return this.referenceDelegate.Ur(),n(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(t,e){return v.or(Object.values(this.Br).map(n=>()=>n.containsKey(t,e)))}}class pm extends bc{constructor(t){super(),this.currentSequenceNumber=t}}class Ws{constructor(t){this.persistence=t,this.zr=new Eo,this.jr=null}static Hr(t){return new Ws(t)}get Jr(){if(this.jr)return this.jr;throw O()}addReference(t,e,n){return this.zr.addReference(n,e),this.Jr.delete(n.toString()),v.resolve()}removeReference(t,e,n){return this.zr.removeReference(n,e),this.Jr.add(n.toString()),v.resolve()}markPotentiallyOrphaned(t,e){return this.Jr.add(e.toString()),v.resolve()}removeTarget(t,e){this.zr.Vr(e.targetId).forEach(s=>this.Jr.add(s.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>n.removeTargetData(t,e))}Ur(){this.jr=new Set}Wr(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Jr,n=>{const s=F.fromPath(n);return this.Yr(t,s).next(i=>{i||e.removeEntry(s,B.min())})}).next(()=>(this.jr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Yr(t,e).next(n=>{n?this.Jr.delete(e.toString()):this.Jr.add(e.toString())})}Kr(t){return 0}Yr(t,e){return v.or([()=>v.resolve(this.zr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Gr(t,e)])}}class Ns{constructor(t,e){this.persistence=t,this.Zr=new re(n=>Dt(n.path),(n,s)=>n.isEqual(s)),this.garbageCollector=ql(this,e)}static Hr(t,e){return new Ns(t,e)}Ur(){}Wr(t){return v.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}Hn(t){const e=this.Zn(t);return this.persistence.getTargetCache().getTargetCount(t).next(n=>e.next(s=>n+s))}Zn(t){let e=0;return this.Jn(t,n=>{e++}).next(()=>e)}Jn(t,e){return v.forEach(this.Zr,(n,s)=>this.er(t,n,s).next(i=>i?v.resolve():e(s)))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Fr(t,a=>this.er(t,a,e).next(u=>{u||(n++,i.removeEntry(a,B.min()))})).next(()=>i.apply(t)).next(()=>n)}markPotentiallyOrphaned(t,e){return this.Zr.set(e,t.currentSequenceNumber),v.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.Zr.set(n,t.currentSequenceNumber),v.resolve()}removeReference(t,e,n){return this.Zr.set(n,t.currentSequenceNumber),v.resolve()}updateLimboDocument(t,e){return this.Zr.set(e,t.currentSequenceNumber),v.resolve()}Kr(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=ys(t.data.value)),e}er(t,e,n){return v.or([()=>this.persistence.Gr(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const s=this.Zr.get(e);return v.resolve(s!==void 0&&s>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(t){this.serializer=t}O(t,e,n,s){const i=new Bs("createOrUpgrade",e);n<1&&s>=1&&(function(l){l.createObjectStore("owner")}(t),function(l){l.createObjectStore("mutationQueues",{keyPath:"userId"}),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",uu,{unique:!0}),l.createObjectStore("documentMutations")}(t),Wu(t),function(l){l.createObjectStore("remoteDocuments")}(t));let a=v.resolve();return n<3&&s>=3&&(n!==0&&(function(l){l.deleteObjectStore("targetDocuments"),l.deleteObjectStore("targets"),l.deleteObjectStore("targetGlobal")}(t),Wu(t)),a=a.next(()=>function(l){const d=l.store("targetGlobal"),f={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:B.min().toTimestamp(),targetCount:0};return d.put("targetGlobalKey",f)}(i))),n<4&&s>=4&&(n!==0&&(a=a.next(()=>function(l,d){return d.store("mutations").U().next(f=>{l.deleteObjectStore("mutations"),l.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",uu,{unique:!0});const g=d.store("mutations"),_=f.map(P=>g.put(P));return v.waitFor(_)})}(t,i))),a=a.next(()=>{(function(l){l.createObjectStore("clientMetadata",{keyPath:"clientId"})})(t)})),n<5&&s>=5&&(a=a.next(()=>this.Xr(i))),n<6&&s>=6&&(a=a.next(()=>(function(l){l.createObjectStore("remoteDocumentGlobal")}(t),this.ei(i)))),n<7&&s>=7&&(a=a.next(()=>this.ti(i))),n<8&&s>=8&&(a=a.next(()=>this.ni(t,i))),n<9&&s>=9&&(a=a.next(()=>{(function(l){l.objectStoreNames.contains("remoteDocumentChanges")&&l.deleteObjectStore("remoteDocumentChanges")})(t)})),n<10&&s>=10&&(a=a.next(()=>this.ri(i))),n<11&&s>=11&&(a=a.next(()=>{(function(l){l.createObjectStore("bundles",{keyPath:"bundleId"})})(t),function(l){l.createObjectStore("namedQueries",{keyPath:"name"})}(t)})),n<12&&s>=12&&(a=a.next(()=>{(function(l){const d=l.createObjectStore("documentOverlays",{keyPath:rf});d.createIndex("collectionPathOverlayIndex",sf,{unique:!1}),d.createIndex("collectionGroupOverlayIndex",of,{unique:!1})})(t)})),n<13&&s>=13&&(a=a.next(()=>function(l){const d=l.createObjectStore("remoteDocumentsV14",{keyPath:Qd});d.createIndex("documentKeyIndex",$d),d.createIndex("collectionGroupIndex",Wd)}(t)).next(()=>this.ii(t,i)).next(()=>t.deleteObjectStore("remoteDocuments"))),n<14&&s>=14&&(a=a.next(()=>this.si(t,i))),n<15&&s>=15&&(a=a.next(()=>function(l){l.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),l.createObjectStore("indexState",{keyPath:Zd}).createIndex("sequenceNumberIndex",tf,{unique:!1}),l.createObjectStore("indexEntries",{keyPath:ef}).createIndex("documentKeyIndex",nf,{unique:!1})}(t))),n<16&&s>=16&&(a=a.next(()=>{e.objectStore("indexState").clear()}).next(()=>{e.objectStore("indexEntries").clear()})),a}ei(t){let e=0;return t.store("remoteDocuments").J((n,s)=>{e+=Ds(s)}).next(()=>{const n={byteSize:e};return t.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)})}Xr(t){const e=t.store("mutationQueues"),n=t.store("mutations");return e.U().next(s=>v.forEach(s,i=>{const a=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return n.U("userMutationsIndex",a).next(u=>v.forEach(u,l=>{L(l.userId===i.userId);const d=Ne(this.serializer,l);return Ml(t,i.userId,d).next(()=>{})}))}))}ti(t){const e=t.store("targetDocuments"),n=t.store("remoteDocuments");return t.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return n.J((a,u)=>{const l=new W(a),d=function(g){return[0,Dt(g)]}(l);i.push(e.get(d).next(f=>f?v.resolve():(g=>e.put({targetId:0,path:Dt(g),sequenceNumber:s.highestListenSequenceNumber}))(l)))}).next(()=>v.waitFor(i))})}ni(t,e){t.createObjectStore("collectionParents",{keyPath:Xd});const n=e.store("collectionParents"),s=new To,i=a=>{if(s.add(a)){const u=a.lastSegment(),l=a.popLast();return n.put({collectionId:u,parent:Dt(l)})}};return e.store("remoteDocuments").J({H:!0},(a,u)=>{const l=new W(a);return i(l.popLast())}).next(()=>e.store("documentMutations").J({H:!0},([a,u,l],d)=>{const f=zt(u);return i(f.popLast())}))}ri(t){const e=t.store("targets");return e.J((n,s)=>{const i=fr(s),a=Dl(this.serializer,i);return e.put(a)})}ii(t,e){const n=e.store("remoteDocuments"),s=[];return n.J((i,a)=>{const u=e.store("remoteDocumentsV14"),l=function(g){return g.document?new F(W.fromString(g.document.name).popFirst(5)):g.noDocument?F.fromSegments(g.noDocument.path):g.unknownDocument?F.fromSegments(g.unknownDocument.path):O()}(a).path.toArray(),d={prefixPath:l.slice(0,l.length-2),collectionGroup:l[l.length-2],documentId:l[l.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};s.push(u.put(d))}).next(()=>v.waitFor(s))}si(t,e){const n=e.store("mutations"),s=Ul(this.serializer),i=new wo(Ws.Hr,this.serializer.ct);return n.U().next(a=>{const u=new Map;return a.forEach(l=>{var d;let f=(d=u.get(l.userId))!==null&&d!==void 0?d:j();Ne(this.serializer,l).keys().forEach(g=>f=f.add(g)),u.set(l.userId,f)}),v.forEach(u,(l,d)=>{const f=new It(d),g=Qs.lt(this.serializer,f),_=i.getIndexManager(f),P=$s.lt(f,this.serializer,_,i.referenceDelegate);return new Gl(s,P,g,_).recalculateAndSaveOverlaysForDocumentKeys(new qi(e,Ft.oe),l).next()})})}}function Wu(r){r.createObjectStore("targetDocuments",{keyPath:Jd}).createIndex("documentTargetsIndex",Yd,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Hd,{unique:!0}),r.createObjectStore("targetGlobal")}const Ni="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class vo{constructor(t,e,n,s,i,a,u,l,d,f,g=16){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.oi=i,this.window=a,this.document=u,this._i=d,this.ai=f,this.ui=g,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=_=>Promise.resolve(),!vo.D())throw new x(S.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new om(this,s),this.Ti=e+"main",this.serializer=new xl(l),this.Ei=new Kt(this.Ti,this.ui,new _m(this.serializer)),this.Qr=new rm(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Ul(this.serializer),this.$r=new Hf,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,f===!1&&dt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new x(S.FAILED_PRECONDITION,Ni);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.Qr.getHighestSequenceNumber(t))}).then(t=>{this.kr=new Ft(t,this._i)}).then(()=>{this.qr=!0}).catch(t=>(this.Ei&&this.Ei.close(),Promise.reject(t)))}fi(t){return this.Ii=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.Ei.L(async e=>{e.newVersion===null&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>ds(t).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(t).next(e=>{e||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(t)).next(e=>this.isPrimary&&!e?this.yi(t).next(()=>!1):!!e&&this.wi(t).next(()=>!0))).catch(t=>{if(we(t))return C("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return C("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.oi.enqueueRetryable(()=>this.Ii(t)),this.isPrimary=t})}gi(t){return cr(t).get("owner").next(e=>v.resolve(this.Si(e)))}bi(t){return ds(t).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const n=Et(e,"clientMetadata");return n.U().next(s=>{const i=this.vi(s,18e5),a=s.filter(u=>i.indexOf(u)===-1);return v.forEach(a,u=>n.delete(u.clientId)).next(()=>a)})}).catch(()=>[]);if(this.di)for(const e of t)this.di.removeItem(this.Fi(e.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(t){return!!t&&t.ownerId===this.clientId}pi(t){return this.ai?v.resolve(!0):cr(t).get("owner").next(e=>{if(e!==null&&this.Ci(e.leaseTimestampMs,5e3)&&!this.Mi(e.ownerId)){if(this.Si(e)&&this.networkEnabled)return!0;if(!this.Si(e)){if(!e.allowTabSynchronization)throw new x(S.FAILED_PRECONDITION,Ni);return!1}}return!(!this.networkEnabled||!this.inForeground)||ds(t).U().next(n=>this.vi(n,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,a=!this.inForeground&&s.inForeground,u=this.networkEnabled===s.networkEnabled;if(i||a&&u)return!0}return!1})===void 0)}).next(e=>(this.isPrimary!==e&&C("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],t=>{const e=new qi(t,Ft.oe);return this.yi(e).next(()=>this.bi(e))}),this.Ei.close(),this.Li()}vi(t,e){return t.filter(n=>this.Ci(n.updateTimeMs,e)&&!this.Mi(n.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",t=>ds(t).U().next(e=>this.vi(e,18e5).map(n=>n.clientId)))}get started(){return this.qr}getMutationQueue(t,e){return $s.lt(t,this.serializer,e,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(t){return new nm(t,this.serializer.ct.databaseId)}getDocumentOverlayCache(t){return Qs.lt(this.serializer,t)}getBundleCache(){return this.$r}runTransaction(t,e,n){C("IndexedDbPersistence","Starting transaction:",t);const s=e==="readonly"?"readonly":"readwrite",i=function(l){return l===16?uf:l===15?Fc:l===14?Mc:l===13?kc:l===12?af:l===11?Nc:void O()}(this.ui);let a;return this.Ei.runTransaction(t,s,i,u=>(a=new qi(u,this.kr?this.kr.next():Ft.oe),e==="readwrite-primary"?this.gi(a).next(l=>!!l||this.pi(a)).next(l=>{if(!l)throw dt(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new x(S.FAILED_PRECONDITION,Vc);return n(a)}).next(l=>this.wi(a).next(()=>l)):this.ki(a).next(()=>n(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}ki(t){return cr(t).get("owner").next(e=>{if(e!==null&&this.Ci(e.leaseTimestampMs,5e3)&&!this.Mi(e.ownerId)&&!this.Si(e)&&!(this.ai||this.allowTabSynchronization&&e.allowTabSynchronization))throw new x(S.FAILED_PRECONDITION,Ni)})}wi(t){const e={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return cr(t).put("owner",e)}static D(){return Kt.D()}yi(t){const e=cr(t);return e.get("owner").next(n=>this.Si(n)?(C("IndexedDbPersistence","Releasing primary lease."),e.delete("owner")):v.resolve())}Ci(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(dt(`Detected an update time that is in the future: ${t} > ${n}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var t;typeof((t=this.window)===null||t===void 0?void 0:t.addEventListener)=="function"&&(this.ci=()=>{this.xi();const e=/(?:Version|Mobile)\/1[456]/;mc()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(t){var e;try{const n=((e=this.di)===null||e===void 0?void 0:e.getItem(this.Fi(t)))!==null;return C("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return dt("IndexedDbPersistence","Failed to get zombied client id.",n),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(t){dt("Failed to set zombie client id.",t)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function cr(r){return Et(r,"owner")}function ds(r){return Et(r,"clientMetadata")}function Ao(r,t){let e=r.projectId;return r.isDefaultDatabase||(e+="."+r.database),"firestore/"+t+"/"+e+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t,e,n,s){this.targetId=t,this.fromCache=e,this.qi=n,this.Qi=s}static Ki(t,e){let n=j(),s=j();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ro(t,e.fromCache,n,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return mc()?8:Cc(Rs())>0?6:4}()}initialize(t,e){this.zi=t,this.indexManager=e,this.$i=!0}getDocumentsMatchingQuery(t,e,n,s){const i={result:null};return this.ji(t,e).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.Hi(t,e,s,n).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new ym;return this.Ji(t,e,a).next(u=>{if(i.result=u,this.Ui)return this.Yi(t,e,a,u.size)})}).next(()=>i.result)}Yi(t,e,n,s){return n.documentReadCount<this.Wi?(an()<=Xt.DEBUG&&C("QueryEngine","SDK will not create cache indexes for query:",un(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),v.resolve()):(an()<=Xt.DEBUG&&C("QueryEngine","Query:",un(e),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.Gi*s?(an()<=Xt.DEBUG&&C("QueryEngine","The SDK decides to create cache indexes for query:",un(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Nt(e))):v.resolve())}ji(t,e){if(Tu(e))return v.resolve(null);let n=Nt(e);return this.indexManager.getIndexType(t,n).next(s=>s===0?null:(e.limit!==null&&s===1&&(e=Vs(e,null,"F"),n=Nt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next(i=>{const a=j(...i);return this.zi.getDocuments(t,a).next(u=>this.indexManager.getMinOffset(t,n).next(l=>{const d=this.Zi(e,u);return this.Xi(e,d,a,l.readTime)?this.ji(t,Vs(e,null,"F")):this.es(t,d,e,l)}))})))}Hi(t,e,n,s){return Tu(e)||s.isEqual(B.min())?v.resolve(null):this.zi.getDocuments(t,n).next(i=>{const a=this.Zi(e,i);return this.Xi(e,a,n,s)?v.resolve(null):(an()<=Xt.DEBUG&&C("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),un(e)),this.es(t,a,e,Pc(s,-1)).next(u=>u))})}Zi(t,e){let n=new tt(tl(t));return e.forEach((s,i)=>{Nr(t,i)&&(n=n.add(i))}),n}Xi(t,e,n,s){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const i=t.limitType==="F"?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(t,e,n){return an()<=Xt.DEBUG&&C("QueryEngine","Using full collection scan to execute query:",un(e)),this.zi.getDocumentsMatchingQuery(t,e,Ut.min(),n)}es(t,e,n,s){return this.zi.getDocumentsMatchingQuery(t,n,s).next(i=>(e.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t,e,n,s){this.persistence=t,this.ts=e,this.serializer=s,this.ns=new rt(z),this.rs=new re(i=>Ue(i),xr),this.ss=new Map,this.os=t.getRemoteDocumentCache(),this.Qr=t.getTargetCache(),this.$r=t.getBundleCache(),this._s(n)}_s(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Gl(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ns))}}function jl(r,t,e,n){return new Im(r,t,e,n)}async function Kl(r,t){const e=M(r);return await e.persistence.runTransaction("Handle user change","readonly",n=>{let s;return e.mutationQueue.getAllMutationBatches(n).next(i=>(s=i,e._s(t),e.mutationQueue.getAllMutationBatches(n))).next(i=>{const a=[],u=[];let l=j();for(const d of s){a.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}for(const d of i){u.push(d.batchId);for(const f of d.mutations)l=l.add(f.key)}return e.localDocuments.getDocuments(n,l).next(d=>({us:d,removedBatchIds:a,addedBatchIds:u}))})})}function Tm(r,t){const e=M(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",n=>{const s=t.batch.keys(),i=e.os.newChangeBuffer({trackRemovals:!0});return function(u,l,d,f){const g=d.batch,_=g.keys();let P=v.resolve();return _.forEach(D=>{P=P.next(()=>f.getEntry(l,D)).next(N=>{const b=d.docVersions.get(D);L(b!==null),N.version.compareTo(b)<0&&(g.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),f.addEntry(N)))})}),P.next(()=>u.mutationQueue.removeMutationBatch(l,g))}(e,n,t,i).next(()=>i.apply(n)).next(()=>e.mutationQueue.performConsistencyCheck(n)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(n,s,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,function(u){let l=j();for(let d=0;d<u.mutationResults.length;++d)u.mutationResults[d].transformResults.length>0&&(l=l.add(u.batch.mutations[d].key));return l}(t))).next(()=>e.localDocuments.getDocuments(n,s))})}function Ql(r){const t=M(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Qr.getLastRemoteSnapshotVersion(e))}function Em(r,t){const e=M(r),n=t.snapshotVersion;let s=e.ns;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=e.os.newChangeBuffer({trackRemovals:!0});s=e.ns;const u=[];t.targetChanges.forEach((f,g)=>{const _=s.get(g);if(!_)return;u.push(e.Qr.removeMatchingKeys(i,f.removedDocuments,g).next(()=>e.Qr.addMatchingKeys(i,f.addedDocuments,g)));let P=_.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.get(g)!==null?P=P.withResumeToken(_t.EMPTY_BYTE_STRING,B.min()).withLastLimboFreeSnapshotVersion(B.min()):f.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(f.resumeToken,n)),s=s.insert(g,P),function(N,b,U){return N.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:U.addedDocuments.size+U.modifiedDocuments.size+U.removedDocuments.size>0}(_,P,f)&&u.push(e.Qr.updateTargetData(i,P))});let l=Lt(),d=j();if(t.documentUpdates.forEach(f=>{t.resolvedLimboDocuments.has(f)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,f))}),u.push($l(i,a,t.documentUpdates).next(f=>{l=f.cs,d=f.ls})),!n.isEqual(B.min())){const f=e.Qr.getLastRemoteSnapshotVersion(i).next(g=>e.Qr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(f)}return v.waitFor(u).next(()=>a.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,l,d)).next(()=>l)}).then(i=>(e.ns=s,i))}function $l(r,t,e){let n=j(),s=j();return e.forEach(i=>n=n.add(i)),t.getEntries(r,n).next(i=>{let a=Lt();return e.forEach((u,l)=>{const d=i.get(u);l.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(u)),l.isNoDocument()&&l.version.isEqual(B.min())?(t.removeEntry(u,l.readTime),a=a.insert(u,l)):!d.isValidDocument()||l.version.compareTo(d.version)>0||l.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(l),a=a.insert(u,l)):C("LocalStore","Ignoring outdated watch update for ",u,". Current version:",d.version," Watch version:",l.version)}),{cs:a,ls:s}})}function wm(r,t){const e=M(r);return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}function En(r,t){const e=M(r);return e.persistence.runTransaction("Allocate target","readwrite",n=>{let s;return e.Qr.getTargetData(n,t).next(i=>i?(s=i,v.resolve(s)):e.Qr.allocateTargetId(n).next(a=>(s=new Zt(t,a,"TargetPurposeListen",n.currentSequenceNumber),e.Qr.addTargetData(n,s).next(()=>s))))}).then(n=>{const s=e.ns.get(n.targetId);return(s===null||n.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(e.ns=e.ns.insert(n.targetId,n),e.rs.set(t,n.targetId)),n})}async function wn(r,t,e){const n=M(r),s=n.ns.get(t),i=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",i,a=>n.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!we(a))throw a;C("LocalStore",`Failed to update sequence numbers for target ${t}: ${a}`)}n.ns=n.ns.remove(t),n.rs.delete(s.target)}function ks(r,t,e){const n=M(r);let s=B.min(),i=j();return n.persistence.runTransaction("Execute query","readwrite",a=>function(l,d,f){const g=M(l),_=g.rs.get(f);return _!==void 0?v.resolve(g.ns.get(_)):g.Qr.getTargetData(d,f)}(n,a,Nt(t)).next(u=>{if(u)return s=u.lastLimboFreeSnapshotVersion,n.Qr.getMatchingKeysForTargetId(a,u.targetId).next(l=>{i=l})}).next(()=>n.ts.getDocumentsMatchingQuery(a,t,e?s:B.min(),e?i:j())).next(u=>(Jl(n,Zc(t),u),{documents:u,hs:i})))}function Wl(r,t){const e=M(r),n=M(e.Qr),s=e.ns.get(t);return s?Promise.resolve(s.target):e.persistence.runTransaction("Get target data","readonly",i=>n.ot(i,t).next(a=>a?a.target:null))}function Hl(r,t){const e=M(r),n=e.ss.get(t)||B.min();return e.persistence.runTransaction("Get new document changes","readonly",s=>e.os.getAllFromCollectionGroup(s,t,Pc(n,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Jl(e,t,s),s))}function Jl(r,t,e){let n=r.ss.get(t)||B.min();e.forEach((s,i)=>{i.readTime.compareTo(n)>0&&(n=i.readTime)}),r.ss.set(t,n)}async function vm(r,t,e,n){const s=M(r);let i=j(),a=Lt();for(const d of e){const f=t.Ps(d.metadata.name);d.document&&(i=i.add(f));const g=t.Is(d);g.setReadTime(t.Ts(d.metadata.readTime)),a=a.insert(f,g)}const u=s.os.newChangeBuffer({trackRemovals:!0}),l=await En(s,function(f){return Nt(xn(W.fromString(`__bundle__/docs/${f}`)))}(n));return s.persistence.runTransaction("Apply bundle documents","readwrite",d=>$l(d,u,a).next(f=>(u.apply(d),f)).next(f=>s.Qr.removeMatchingKeysForTargetId(d,l.targetId).next(()=>s.Qr.addMatchingKeys(d,i,l.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(d,f.cs,f.ls)).next(()=>f.cs)))}async function Am(r,t,e=j()){const n=await En(r,Nt(yo(t.bundledQuery))),s=M(r);return s.persistence.runTransaction("Save named query","readwrite",i=>{const a=ft(t.readTime);if(n.snapshotVersion.compareTo(a)>=0)return s.$r.saveNamedQuery(i,t);const u=n.withResumeToken(_t.EMPTY_BYTE_STRING,a);return s.ns=s.ns.insert(u.targetId,u),s.Qr.updateTargetData(i,u).next(()=>s.Qr.removeMatchingKeysForTargetId(i,n.targetId)).next(()=>s.Qr.addMatchingKeys(i,e,n.targetId)).next(()=>s.$r.saveNamedQuery(i,t))})}function Hu(r,t){return`firestore_clients_${r}_${t}`}function Ju(r,t,e){let n=`firestore_mutations_${r}_${e}`;return t.isAuthenticated()&&(n+=`_${t.uid}`),n}function ki(r,t){return`firestore_targets_${r}_${t}`}class Ms{constructor(t,e,n,s){this.user=t,this.batchId=e,this.state=n,this.error=s}static Es(t,e,n){const s=JSON.parse(n);let i,a=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return a&&s.error&&(a=typeof s.error.message=="string"&&typeof s.error.code=="string",a&&(i=new x(s.error.code,s.error.message))),a?new Ms(t,e,s.state,i):(dt("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}ds(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class yr{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Es(t,e){const n=JSON.parse(e);let s,i=typeof n=="object"&&["not-current","current","rejected"].indexOf(n.state)!==-1&&(n.error===void 0||typeof n.error=="object");return i&&n.error&&(i=typeof n.error.message=="string"&&typeof n.error.code=="string",i&&(s=new x(n.error.code,n.error.message))),i?new yr(t,n.state,s):(dt("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}ds(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class Fs{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Es(t,e){const n=JSON.parse(e);let s=typeof n=="object"&&n.activeTargetIds instanceof Array,i=lo();for(let a=0;s&&a<n.activeTargetIds.length;++a)s=xc(n.activeTargetIds[a]),i=i.add(n.activeTargetIds[a]);return s?new Fs(t,i):(dt("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Po{constructor(t,e){this.clientId=t,this.onlineState=e}static Es(t){const e=JSON.parse(t);return typeof e=="object"&&["Unknown","Online","Offline"].indexOf(e.onlineState)!==-1&&typeof e.clientId=="string"?new Po(e.clientId,e.onlineState):(dt("SharedClientState",`Failed to parse online state: ${t}`),null)}}class Zi{constructor(){this.activeTargetIds=lo()}As(t){this.activeTargetIds=this.activeTargetIds.add(t)}Rs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}ds(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Mi{constructor(t,e,n,s,i){this.window=t,this.oi=e,this.persistenceKey=n,this.Vs=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new rt(z),this.started=!1,this.ys=[];const a=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.ws=Hu(this.persistenceKey,this.Vs),this.Ss=function(l){return`firestore_sequence_number_${l}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new Zi),this.bs=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.vs=function(l){return`firestore_online_state_${l}`}(this.persistenceKey),this.Fs=function(l){return`firestore_bundle_loaded_v2_${l}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Bi();for(const n of t){if(n===this.Vs)continue;const s=this.getItem(Hu(this.persistenceKey,n));if(s){const i=Fs.Es(n,s);i&&(this.ps=this.ps.insert(i.clientId,i))}}this.Ms();const e=this.storage.getItem(this.vs);if(e){const n=this.xs(e);n&&this.Os(n)}for(const n of this.ys)this.gs(n);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Ss,JSON.stringify(t))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(t){let e=!1;return this.ps.forEach((n,s)=>{s.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.Ls(t,"pending")}updateMutationState(t,e,n){this.Ls(t,e,n),this.Bs(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(ki(this.persistenceKey,t));if(n){const s=yr.Es(t,n);s&&(e=s.state)}}return this.ks.As(t),this.Ms(),e}removeLocalQueryTarget(t){this.ks.Rs(t),this.Ms()}isLocalQueryTarget(t){return this.ks.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(ki(this.persistenceKey,t))}updateQueryState(t,e,n){this.qs(t,e,n)}handleUserChange(t,e,n){e.forEach(s=>{this.Bs(s)}),this.currentUser=t,n.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(t){this.Qs(t)}notifyBundleLoaded(t){this.Ks(t)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return C("SharedClientState","READ",t,e),e}setItem(t,e){C("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){C("SharedClientState","REMOVE",t),this.storage.removeItem(t)}gs(t){const e=t;if(e.storageArea===this.storage){if(C("SharedClientState","EVENT",e.key,e.newValue),e.key===this.ws)return void dt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(e.key!==null){if(this.bs.test(e.key)){if(e.newValue==null){const n=this.$s(e.key);return this.Us(n,null)}{const n=this.Ws(e.key,e.newValue);if(n)return this.Us(n.clientId,n)}}else if(this.Ds.test(e.key)){if(e.newValue!==null){const n=this.Gs(e.key,e.newValue);if(n)return this.zs(n)}}else if(this.Cs.test(e.key)){if(e.newValue!==null){const n=this.js(e.key,e.newValue);if(n)return this.Hs(n)}}else if(e.key===this.vs){if(e.newValue!==null){const n=this.xs(e.newValue);if(n)return this.Os(n)}}else if(e.key===this.Ss){const n=function(i){let a=Ft.oe;if(i!=null)try{const u=JSON.parse(i);L(typeof u=="number"),a=u}catch(u){dt("SharedClientState","Failed to read sequence number from WebStorage",u)}return a}(e.newValue);n!==Ft.oe&&this.sequenceNumberHandler(n)}else if(e.key===this.Fs){const n=this.Js(e.newValue);await Promise.all(n.map(s=>this.syncEngine.Ys(s)))}}}else this.ys.push(e)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(t,e,n){const s=new Ms(this.currentUser,t,e,n),i=Ju(this.persistenceKey,this.currentUser,t);this.setItem(i,s.ds())}Bs(t){const e=Ju(this.persistenceKey,this.currentUser,t);this.removeItem(e)}Qs(t){const e={clientId:this.Vs,onlineState:t};this.storage.setItem(this.vs,JSON.stringify(e))}qs(t,e,n){const s=ki(this.persistenceKey,t),i=new yr(t,e,n);this.setItem(s,i.ds())}Ks(t){const e=JSON.stringify(Array.from(t));this.setItem(this.Fs,e)}$s(t){const e=this.bs.exec(t);return e?e[1]:null}Ws(t,e){const n=this.$s(t);return Fs.Es(n,e)}Gs(t,e){const n=this.Ds.exec(t),s=Number(n[1]),i=n[2]!==void 0?n[2]:null;return Ms.Es(new It(i),s,e)}js(t,e){const n=this.Cs.exec(t),s=Number(n[1]);return yr.Es(s,e)}xs(t){return Po.Es(t)}Js(t){return JSON.parse(t)}async zs(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.Zs(t.batchId,t.state,t.error);C("SharedClientState",`Ignoring mutation for non-active user ${t.user.uid}`)}Hs(t){return this.syncEngine.Xs(t.targetId,t.state,t.error)}Us(t,e){const n=e?this.ps.insert(t,e):this.ps.remove(t),s=this.Ns(this.ps),i=this.Ns(n),a=[],u=[];return i.forEach(l=>{s.has(l)||a.push(l)}),s.forEach(l=>{i.has(l)||u.push(l)}),this.syncEngine.eo(a,u).then(()=>{this.ps=n})}Os(t){this.ps.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}Ns(t){let e=lo();return t.forEach((n,s)=>{e=e.unionWith(s.activeTargetIds)}),e}}class Yl{constructor(){this.no=new Zi,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.no.As(t),this.ro[t]||"not-current"}updateQueryState(t,e,n){this.ro[t]=e}removeLocalQueryTarget(t){this.no.Rs(t)}isLocalQueryTarget(t){return this.no.activeTargetIds.has(t)}clearQueryState(t){delete this.ro[t]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(t){return this.no.activeTargetIds.has(t)}start(){return this.no=new Zi,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{io(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(t){this.uo.push(t)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){C("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.uo)t(0)}ao(){C("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.uo)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fs=null;function Fi(){return fs===null?fs=function(){return 268435456+Math.round(2147483648*Math.random())}():fs++,"0x"+fs.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(t){this.lo=t.lo,this.ho=t.ho}Po(t){this.Io=t}To(t){this.Eo=t}Ao(t){this.Ro=t}onMessage(t){this.Vo=t}close(){this.ho()}send(t){this.lo(t)}mo(){this.Io()}fo(){this.Eo()}po(t){this.Ro(t)}yo(t){this.Vo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct="WebChannelConnection";class Vm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.wo=n+"://"+e.host,this.So=`projects/${s}/databases/${i}`,this.bo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Do(){return!1}Co(e,n,s,i,a){const u=Fi(),l=this.vo(e,n.toUriEncodedString());C("RestConnection",`Sending RPC '${e}' ${u}:`,l,s);const d={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(d,i,a),this.Mo(e,l,d,s).then(f=>(C("RestConnection",`Received RPC '${e}' ${u}: `,f),f),f=>{throw Bt("RestConnection",`RPC '${e}' ${u} failed with error: `,f,"url: ",l,"request:",s),f})}xo(e,n,s,i,a,u){return this.Co(e,n,s,i,a)}Fo(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Cn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,a)=>e[a]=i),s&&s.headers.forEach((i,a)=>e[a]=i)}vo(e,n){const s=Pm[e];return`${this.wo}/v1/${n}:${s}`}terminate(){}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Mo(t,e,n,s){const i=Fi();return new Promise((a,u)=>{const l=new pc;l.setWithCredentials(!0),l.listenOnce(yc.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case gs.NO_ERROR:const f=l.getResponseJson();C(Ct,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(f)),a(f);break;case gs.TIMEOUT:C(Ct,`RPC '${t}' ${i} timed out`),u(new x(S.DEADLINE_EXCEEDED,"Request time out"));break;case gs.HTTP_ERROR:const g=l.getStatus();if(C(Ct,`RPC '${t}' ${i} failed with status:`,g,"response text:",l.getResponseText()),g>0){let _=l.getResponseJson();Array.isArray(_)&&(_=_[0]);const P=_==null?void 0:_.error;if(P&&P.status&&P.message){const D=function(b){const U=b.toLowerCase().replace(/_/g,"-");return Object.values(S).indexOf(U)>=0?U:S.UNKNOWN}(P.status);u(new x(D,P.message))}else u(new x(S.UNKNOWN,"Server responded with status "+l.getStatus()))}else u(new x(S.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{C(Ct,`RPC '${t}' ${i} completed.`)}});const d=JSON.stringify(s);C(Ct,`RPC '${t}' ${i} sending request:`,s),l.send(e,"POST",d,n,15)})}Oo(t,e,n){const s=Fi(),i=[this.wo,"/","google.firestore.v1.Firestore","/",t,"/channel"],a=Ec(),u=Tc(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(l.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(l.xmlHttpFactory=new _c({})),this.Fo(l.initMessageHeaders,e,n),l.encodeInitMessageHeaders=!0;const f=i.join("");C(Ct,`Creating RPC '${t}' stream ${s}: ${f}`,l);const g=a.createWebChannel(f,l);let _=!1,P=!1;const D=new Sm({lo:b=>{P?C(Ct,`Not sending because RPC '${t}' stream ${s} is closed:`,b):(_||(C(Ct,`Opening RPC '${t}' stream ${s} transport.`),g.open(),_=!0),C(Ct,`RPC '${t}' stream ${s} sending:`,b),g.send(b))},ho:()=>g.close()}),N=(b,U,G)=>{b.listen(U,q=>{try{G(q)}catch(Q){setTimeout(()=>{throw Q},0)}})};return N(g,lr.EventType.OPEN,()=>{P||(C(Ct,`RPC '${t}' stream ${s} transport opened.`),D.mo())}),N(g,lr.EventType.CLOSE,()=>{P||(P=!0,C(Ct,`RPC '${t}' stream ${s} transport closed`),D.po())}),N(g,lr.EventType.ERROR,b=>{P||(P=!0,Bt(Ct,`RPC '${t}' stream ${s} transport errored:`,b),D.po(new x(S.UNAVAILABLE,"The operation could not be completed")))}),N(g,lr.EventType.MESSAGE,b=>{var U;if(!P){const G=b.data[0];L(!!G);const q=G,Q=q.error||((U=q[0])===null||U===void 0?void 0:U.error);if(Q){C(Ct,`RPC '${t}' stream ${s} received error:`,Q);const X=Q.status;let K=function(I){const E=gt[I];if(E!==void 0)return gl(E)}(X),T=Q.message;K===void 0&&(K=S.INTERNAL,T="Unknown error status: "+X+" with message "+Q.message),P=!0,D.po(new x(K,T)),g.close()}else C(Ct,`RPC '${t}' stream ${s} received:`,G),D.yo(G)}}),N(u,Ic.STAT_EVENT,b=>{b.stat===Oi.PROXY?C(Ct,`RPC '${t}' stream ${s} detected buffering proxy`):b.stat===Oi.NOPROXY&&C(Ct,`RPC '${t}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.fo()},0),D}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xl(){return typeof window<"u"?window:null}function ws(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(r){return new Lf(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,e,n=1e3,s=1.5,i=6e4){this.oi=t,this.timerId=e,this.No=n,this.Lo=s,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),s=Math.max(0,e-n);s>0&&C("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Qo=Date.now(),t())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(t,e,n,s,i,a,u,l){this.oi=t,this.Go=n,this.zo=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=u,this.listener=l,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new So(t,e)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(t){this.s_(),this.stream.send(t)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(t,e){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,t!==4?this.Yo.reset():e&&e.code===S.RESOURCE_EXHAUSTED?(dt(e.toString()),dt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):e&&e.code===S.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ao(e)}__(){}auth(){this.state=1;const t=this.a_(this.jo),e=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([n,s])=>{this.jo===e&&this.u_(n,s)},n=>{t(()=>{const s=new x(S.UNKNOWN,"Fetching auth token failed: "+n.message);return this.c_(s)})})}u_(t,e){const n=this.a_(this.jo);this.stream=this.l_(t,e),this.stream.Po(()=>{n(()=>this.listener.Po())}),this.stream.To(()=>{n(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(s=>{n(()=>this.c_(s))}),this.stream.onMessage(s=>{n(()=>this.onMessage(s))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(t){return C("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}a_(t){return e=>{this.oi.enqueueAndForget(()=>this.jo===t?e():(C("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class bm extends Zl{constructor(t,e,n,s,i,a){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i}l_(t,e){return this.connection.Oo("Listen",t,e)}onMessage(t){this.Yo.reset();const e=Uf(this.serializer,t),n=function(i){if(!("targetChange"in i))return B.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?B.min():a.readTime?ft(a.readTime):B.min()}(t);return this.listener.h_(e,n)}P_(t){const e={};e.database=Wi(this.serializer),e.addTarget=function(i,a){let u;const l=a.target;if(u=Ps(l)?{documents:Rl(i,l)}:{query:Ks(i,l)._t},u.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){u.resumeToken=Il(i,a.resumeToken);const d=Qi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}else if(a.snapshotVersion.compareTo(B.min())>0){u.readTime=Tn(i,a.snapshotVersion.toTimestamp());const d=Qi(i,a.expectedCount);d!==null&&(u.expectedCount=d)}return u}(this.serializer,t);const n=zf(this.serializer,t);n&&(e.labels=n),this.i_(e)}I_(t){const e={};e.database=Wi(this.serializer),e.removeTarget=t,this.i_(e)}}class Cm extends Zl{constructor(t,e,n,s,i,a){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,s,a),this.serializer=i,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(t,e){return this.connection.Oo("Write",t,e)}onMessage(t){if(L(!!t.streamToken),this.lastStreamToken=t.streamToken,this.T_){this.Yo.reset();const e=Gf(t.writeResults,t.commitTime),n=ft(t.commitTime);return this.listener.A_(n,e)}return L(!t.writeResults||t.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const t={};t.database=Wi(this.serializer),this.i_(t)}d_(t){const e={streamToken:this.lastStreamToken,writes:t.map(n=>Pr(this.serializer,n))};this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm extends class{}{constructor(t,e,n,s){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=s,this.m_=!1}f_(){if(this.m_)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}Co(t,e,n,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Co(t,$i(e,n),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(S.UNKNOWN,i.toString())})}xo(t,e,n,s,i){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.xo(t,$i(e,n),s,a,u,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===S.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new x(S.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class Dm{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(t){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.S_("Offline")))}set(t){this.C_(),this.g_=0,t==="Online"&&(this.y_=!1),this.S_(t)}S_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}b_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(dt(e),this.y_=!1):C("OnlineStateTracker",e)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm{constructor(t,e,n,s,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=i,this.O_.io(a=>{n.enqueueAndForget(async()=>{Ae(this)&&(C("RemoteStore","Restarting streams for network reachability change."),await async function(l){const d=M(l);d.M_.add(4),await kn(d),d.N_.set("Unknown"),d.M_.delete(4),await Lr(d)}(this))})}),this.N_=new Dm(n,s)}}async function Lr(r){if(Ae(r))for(const t of r.x_)await t(!0)}async function kn(r){for(const t of r.x_)await t(!1)}function Hs(r,t){const e=M(r);e.F_.has(t.targetId)||(e.F_.set(t.targetId,t),Co(e)?bo(e):Fn(e).Xo()&&Vo(e,t))}function vn(r,t){const e=M(r),n=Fn(e);e.F_.delete(t),n.Xo()&&th(e,t),e.F_.size===0&&(n.Xo()?n.n_():Ae(e)&&e.N_.set("Unknown"))}function Vo(r,t){if(r.L_.xe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(B.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Fn(r).P_(t)}function th(r,t){r.L_.xe(t),Fn(r).I_(t)}function bo(r){r.L_=new kf({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),ot:t=>r.F_.get(t)||null,tt:()=>r.datastore.serializer.databaseId}),Fn(r).start(),r.N_.w_()}function Co(r){return Ae(r)&&!Fn(r).Zo()&&r.F_.size>0}function Ae(r){return M(r).M_.size===0}function eh(r){r.L_=void 0}async function km(r){r.N_.set("Online")}async function Mm(r){r.F_.forEach((t,e)=>{Vo(r,t)})}async function Fm(r,t){eh(r),Co(r)?(r.N_.D_(t),bo(r)):r.N_.set("Unknown")}async function Om(r,t,e){if(r.N_.set("Online"),t instanceof yl&&t.state===2&&t.cause)try{await async function(s,i){const a=i.cause;for(const u of i.targetIds)s.F_.has(u)&&(await s.remoteSyncer.rejectListen(u,a),s.F_.delete(u),s.L_.removeTarget(u))}(r,t)}catch(n){C("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Os(r,n)}else if(t instanceof Es?r.L_.Ke(t):t instanceof _l?r.L_.He(t):r.L_.We(t),!e.isEqual(B.min()))try{const n=await Ql(r.localStore);e.compareTo(n)>=0&&await function(i,a){const u=i.L_.rt(a);return u.targetChanges.forEach((l,d)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.F_.get(d);f&&i.F_.set(d,f.withResumeToken(l.resumeToken,a))}}),u.targetMismatches.forEach((l,d)=>{const f=i.F_.get(l);if(!f)return;i.F_.set(l,f.withResumeToken(_t.EMPTY_BYTE_STRING,f.snapshotVersion)),th(i,l);const g=new Zt(f.target,l,d,f.sequenceNumber);Vo(i,g)}),i.remoteSyncer.applyRemoteEvent(u)}(r,e)}catch(n){C("RemoteStore","Failed to raise snapshot:",n),await Os(r,n)}}async function Os(r,t,e){if(!we(t))throw t;r.M_.add(1),await kn(r),r.N_.set("Offline"),e||(e=()=>Ql(r.localStore)),r.asyncQueue.enqueueRetryable(async()=>{C("RemoteStore","Retrying IndexedDB access"),await e(),r.M_.delete(1),await Lr(r)})}function nh(r,t){return t().catch(e=>Os(r,e,t))}async function Mn(r){const t=M(r),e=Te(t);let n=t.v_.length>0?t.v_[t.v_.length-1].batchId:-1;for(;Lm(t);)try{const s=await wm(t.localStore,n);if(s===null){t.v_.length===0&&e.n_();break}n=s.batchId,qm(t,s)}catch(s){await Os(t,s)}rh(t)&&sh(t)}function Lm(r){return Ae(r)&&r.v_.length<10}function qm(r,t){r.v_.push(t);const e=Te(r);e.Xo()&&e.E_&&e.d_(t.mutations)}function rh(r){return Ae(r)&&!Te(r).Zo()&&r.v_.length>0}function sh(r){Te(r).start()}async function Bm(r){Te(r).V_()}async function Um(r){const t=Te(r);for(const e of r.v_)t.d_(e.mutations)}async function Gm(r,t,e){const n=r.v_.shift(),s=mo.from(n,t,e);await nh(r,()=>r.remoteSyncer.applySuccessfulWrite(s)),await Mn(r)}async function zm(r,t){t&&Te(r).E_&&await async function(n,s){if(function(a){return ml(a)&&a!==S.ABORTED}(s.code)){const i=n.v_.shift();Te(n).t_(),await nh(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Mn(n)}}(r,t),rh(r)&&sh(r)}async function Xu(r,t){const e=M(r);e.asyncQueue.verifyOperationInProgress(),C("RemoteStore","RemoteStore received new credentials");const n=Ae(e);e.M_.add(3),await kn(e),n&&e.N_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.M_.delete(3),await Lr(e)}async function to(r,t){const e=M(r);t?(e.M_.delete(2),await Lr(e)):t||(e.M_.add(2),await kn(e),e.N_.set("Unknown"))}function Fn(r){return r.B_||(r.B_=function(e,n,s){const i=M(e);return i.f_(),new bm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Po:km.bind(null,r),To:Mm.bind(null,r),Ao:Fm.bind(null,r),h_:Om.bind(null,r)}),r.x_.push(async t=>{t?(r.B_.t_(),Co(r)?bo(r):r.N_.set("Unknown")):(await r.B_.stop(),eh(r))})),r.B_}function Te(r){return r.k_||(r.k_=function(e,n,s){const i=M(e);return i.f_(),new Cm(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:Bm.bind(null,r),Ao:zm.bind(null,r),R_:Um.bind(null,r),A_:Gm.bind(null,r)}),r.x_.push(async t=>{t?(r.k_.t_(),await Mn(r)):(await r.k_.stop(),r.v_.length>0&&(C("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))})),r.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t,e,n,s,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=s,this.removalCallback=i,this.deferred=new pt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,s,i){const a=Date.now()+n,u=new xo(t,e,a,s,i);return u.start(n),u}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(S.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function On(r,t){if(dt("AsyncQueue",`${t}: ${r}`),we(r))return new x(S.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t){this.comparator=t?(e,n)=>t(e,n)||F.comparator(e.key,n.key):(e,n)=>F.comparator(e.key,n.key),this.keyedMap=hr(),this.sortedSet=new rt(this.comparator)}static emptySet(t){return new dn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof dn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const s=e.getNext().key,i=n.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new dn;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.q_=new rt(F.comparator)}track(t){const e=t.doc.key,n=this.q_.get(e);n?t.type!==0&&n.type===3?this.q_=this.q_.insert(e,t):t.type===3&&n.type!==1?this.q_=this.q_.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.q_=this.q_.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.q_=this.q_.remove(e):t.type===1&&n.type===2?this.q_=this.q_.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.q_=this.q_.insert(e,{type:2,doc:t.doc}):O():this.q_=this.q_.insert(e,t)}Q_(){const t=[];return this.q_.inorderTraversal((e,n)=>{t.push(n)}),t}}class An{constructor(t,e,n,s,i,a,u,l,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=u,this.excludesMetadataChanges=l,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,s,i){const a=[];return e.forEach(u=>{a.push({type:0,doc:u})}),new An(t,e,dn.emptySet(e),a,n,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Dr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let s=0;s<e.length;s++)if(e[s].type!==n[s].type||!e[s].doc.isEqual(n[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(t=>t.G_())}}class Km{constructor(){this.queries=new re(t=>Xc(t),Dr),this.onlineState="Unknown",this.z_=new Set}}async function Do(r,t){const e=M(r);let n=3;const s=t.query;let i=e.queries.get(s);i?!i.W_()&&t.G_()&&(n=2):(i=new jm,n=t.G_()?0:1);try{switch(n){case 0:i.K_=await e.onListen(s,!0);break;case 1:i.K_=await e.onListen(s,!1);break;case 2:await e.onFirstRemoteStoreListen(s)}}catch(a){const u=On(a,`Initialization of query '${un(t.query)}' failed`);return void t.onError(u)}e.queries.set(s,i),i.U_.push(t),t.j_(e.onlineState),i.K_&&t.H_(i.K_)&&ko(e)}async function No(r,t){const e=M(r),n=t.query;let s=3;const i=e.queries.get(n);if(i){const a=i.U_.indexOf(t);a>=0&&(i.U_.splice(a,1),i.U_.length===0?s=t.G_()?0:1:!i.W_()&&t.G_()&&(s=2))}switch(s){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Qm(r,t){const e=M(r);let n=!1;for(const s of t){const i=s.query,a=e.queries.get(i);if(a){for(const u of a.U_)u.H_(s)&&(n=!0);a.K_=s}}n&&ko(e)}function $m(r,t,e){const n=M(r),s=n.queries.get(t);if(s)for(const i of s.U_)i.onError(e);n.queries.delete(t)}function ko(r){r.z_.forEach(t=>{t.next()})}var eo,tc;(tc=eo||(eo={})).J_="default",tc.Cache="cache";class Mo{constructor(t,e,n){this.query=t,this.Y_=e,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=n||{}}H_(t){if(!this.options.includeMetadataChanges){const n=[];for(const s of t.docChanges)s.type!==3&&n.push(s);t=new An(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.Z_?this.ea(t)&&(this.Y_.next(t),e=!0):this.ta(t,this.onlineState)&&(this.na(t),e=!0),this.X_=t,e}onError(t){this.Y_.error(t)}j_(t){this.onlineState=t;let e=!1;return this.X_&&!this.Z_&&this.ta(this.X_,t)&&(this.na(this.X_),e=!0),e}ta(t,e){if(!t.fromCache||!this.G_())return!0;const n=e!=="Offline";return(!this.options.ra||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}ea(t){if(t.docChanges.length>0)return!0;const e=this.X_&&this.X_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}na(t){t=An.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Z_=!0,this.Y_.next(t)}G_(){return this.options.source!==eo.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(t,e){this.ia=t,this.byteLength=e}sa(){return"metadata"in this.ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t){this.serializer=t}Ps(t){return Qt(this.serializer,t)}Is(t){return t.metadata.exists?Al(this.serializer,t.document,!1):it.newNoDocument(this.Ps(t.metadata.name),this.Ts(t.metadata.readTime))}Ts(t){return ft(t)}}class Hm{constructor(t,e,n){this.oa=t,this.localStore=e,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=ih(t)}_a(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;if(t.ia.namedQuery)this.queries.push(t.ia.namedQuery);else if(t.ia.documentMetadata){this.documents.push({metadata:t.ia.documentMetadata}),t.ia.documentMetadata.exists||++e;const n=W.fromString(t.ia.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else t.ia.document&&(this.documents[this.documents.length-1].document=t.ia.document,++e);return e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}aa(t){const e=new Map,n=new ec(this.serializer);for(const s of t)if(s.metadata.queries){const i=n.Ps(s.metadata.name);for(const a of s.metadata.queries){const u=(e.get(a)||j()).add(i);e.set(a,u)}}return e}async complete(){const t=await vm(this.localStore,new ec(this.serializer),this.documents,this.oa.id),e=this.aa(this.documents);for(const n of this.queries)await Am(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:t}}}function ih(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(t){this.key=t}}class ah{constructor(t){this.key=t}}class uh{constructor(t,e){this.query=t,this.la=e,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=j(),this.mutatedKeys=j(),this.Ia=tl(t),this.Ta=new dn(this.Ia)}get Ea(){return this.la}da(t,e){const n=e?e.Aa:new Zu,s=e?e.Ta:this.Ta;let i=e?e.mutatedKeys:this.mutatedKeys,a=s,u=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(t.inorderTraversal((f,g)=>{const _=s.get(f),P=Nr(this.query,g)?g:null,D=!!_&&this.mutatedKeys.has(_.key),N=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let b=!1;_&&P?_.data.isEqual(P.data)?D!==N&&(n.track({type:3,doc:P}),b=!0):this.Ra(_,P)||(n.track({type:2,doc:P}),b=!0,(l&&this.Ia(P,l)>0||d&&this.Ia(P,d)<0)&&(u=!0)):!_&&P?(n.track({type:0,doc:P}),b=!0):_&&!P&&(n.track({type:1,doc:_}),b=!0,(l||d)&&(u=!0)),b&&(P?(a=a.add(P),i=N?i.add(f):i.delete(f)):(a=a.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const f=this.query.limitType==="F"?a.last():a.first();a=a.delete(f.key),i=i.delete(f.key),n.track({type:1,doc:f})}return{Ta:a,Aa:n,Xi:u,mutatedKeys:i}}Ra(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,s){const i=this.Ta;this.Ta=t.Ta,this.mutatedKeys=t.mutatedKeys;const a=t.Aa.Q_();a.sort((f,g)=>function(P,D){const N=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return O()}};return N(P)-N(D)}(f.type,g.type)||this.Ia(f.doc,g.doc)),this.Va(n),s=s!=null&&s;const u=e&&!s?this.ma():[],l=this.Pa.size===0&&this.current&&!s?1:0,d=l!==this.ha;return this.ha=l,a.length!==0||d?{snapshot:new An(this.query,t.Ta,i,a,t.mutatedKeys,l===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),fa:u}:{fa:u}}j_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new Zu,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(t){return!this.la.has(t)&&!!this.Ta.has(t)&&!this.Ta.get(t).hasLocalMutations}Va(t){t&&(t.addedDocuments.forEach(e=>this.la=this.la.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.la=this.la.delete(e)),this.current=t.current)}ma(){if(!this.current)return[];const t=this.Pa;this.Pa=j(),this.Ta.forEach(n=>{this.ga(n.key)&&(this.Pa=this.Pa.add(n.key))});const e=[];return t.forEach(n=>{this.Pa.has(n)||e.push(new ah(n))}),this.Pa.forEach(n=>{t.has(n)||e.push(new oh(n))}),e}pa(t){this.la=t.hs,this.Pa=j();const e=this.da(t.documents);return this.applyChanges(e,!0)}ya(){return An.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class Jm{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Ym{constructor(t){this.key=t,this.wa=!1}}class Xm{constructor(t,e,n,s,i,a){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new re(u=>Xc(u),Dr),this.Da=new Map,this.Ca=new Set,this.va=new rt(F.comparator),this.Fa=new Map,this.Ma=new Eo,this.xa={},this.Oa=new Map,this.Na=Qe.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function Zm(r,t,e=!0){const n=Js(r);let s;const i=n.ba.get(t);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ya()):s=await ch(n,t,e,!0),s}async function tg(r,t){const e=Js(r);await ch(e,t,!0,!1)}async function ch(r,t,e,n){const s=await En(r.localStore,Nt(t)),i=s.targetId,a=e?r.sharedClientState.addLocalQueryTarget(i):"not-current";let u;return n&&(u=await Fo(r,t,i,a==="current",s.resumeToken)),r.isPrimaryClient&&e&&Hs(r.remoteStore,s),u}async function Fo(r,t,e,n,s){r.Ba=(g,_,P)=>async function(N,b,U,G){let q=b.view.da(U);q.Xi&&(q=await ks(N.localStore,b.query,!1).then(({documents:T})=>b.view.da(T,q)));const Q=G&&G.targetChanges.get(b.targetId),X=G&&G.targetMismatches.get(b.targetId)!=null,K=b.view.applyChanges(q,N.isPrimaryClient,Q,X);return no(N,b.targetId,K.fa),K.snapshot}(r,g,_,P);const i=await ks(r.localStore,t,!0),a=new uh(t,i.hs),u=a.da(i.documents),l=Fr.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",s),d=a.applyChanges(u,r.isPrimaryClient,l);no(r,e,d.fa);const f=new Jm(t,e,a);return r.ba.set(t,f),r.Da.has(e)?r.Da.get(e).push(t):r.Da.set(e,[t]),d.snapshot}async function eg(r,t,e){const n=M(r),s=n.ba.get(t),i=n.Da.get(s.targetId);if(i.length>1)return n.Da.set(s.targetId,i.filter(a=>!Dr(a,t))),void n.ba.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await wn(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),e&&vn(n.remoteStore,s.targetId),Rn(n,s.targetId)}).catch(Ee)):(Rn(n,s.targetId),await wn(n.localStore,s.targetId,!0))}async function ng(r,t){const e=M(r),n=e.ba.get(t),s=e.Da.get(n.targetId);e.isPrimaryClient&&s.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),vn(e.remoteStore,n.targetId))}async function rg(r,t,e){const n=Bo(r);try{const s=await function(a,u){const l=M(a),d=ut.now(),f=u.reduce((P,D)=>P.add(D.key),j());let g,_;return l.persistence.runTransaction("Locally write mutations","readwrite",P=>{let D=Lt(),N=j();return l.os.getEntries(P,f).next(b=>{D=b,D.forEach((U,G)=>{G.isValidDocument()||(N=N.add(U))})}).next(()=>l.localDocuments.getOverlayedDocuments(P,D)).next(b=>{g=b;const U=[];for(const G of u){const q=xf(G,g.get(G.key).overlayedDocument);q!=null&&U.push(new se(G.key,q,Uc(q.value.mapValue),at.exists(!0)))}return l.mutationQueue.addMutationBatch(P,d,U,u)}).next(b=>{_=b;const U=b.applyToLocalDocumentSet(g,N);return l.documentOverlayCache.saveOverlays(P,b.batchId,U)})}).then(()=>({batchId:_.batchId,changes:nl(g)}))}(n.localStore,t);n.sharedClientState.addPendingMutation(s.batchId),function(a,u,l){let d=a.xa[a.currentUser.toKey()];d||(d=new rt(z)),d=d.insert(u,l),a.xa[a.currentUser.toKey()]=d}(n,s.batchId,e),await ie(n,s.changes),await Mn(n.remoteStore)}catch(s){const i=On(s,"Failed to persist write");e.reject(i)}}async function lh(r,t){const e=M(r);try{const n=await Em(e.localStore,t);t.targetChanges.forEach((s,i)=>{const a=e.Fa.get(i);a&&(L(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?a.wa=!0:s.modifiedDocuments.size>0?L(a.wa):s.removedDocuments.size>0&&(L(a.wa),a.wa=!1))}),await ie(e,n,t)}catch(n){await Ee(n)}}function nc(r,t,e){const n=M(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const s=[];n.ba.forEach((i,a)=>{const u=a.view.j_(t);u.snapshot&&s.push(u.snapshot)}),function(a,u){const l=M(a);l.onlineState=u;let d=!1;l.queries.forEach((f,g)=>{for(const _ of g.U_)_.j_(u)&&(d=!0)}),d&&ko(l)}(n.eventManager,t),s.length&&n.Sa.h_(s),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function sg(r,t,e){const n=M(r);n.sharedClientState.updateQueryState(t,"rejected",e);const s=n.Fa.get(t),i=s&&s.key;if(i){let a=new rt(F.comparator);a=a.insert(i,it.newNoDocument(i,B.min()));const u=j().add(i),l=new Mr(B.min(),new Map,new rt(z),a,u);await lh(n,l),n.va=n.va.remove(i),n.Fa.delete(t),qo(n)}else await wn(n.localStore,t,!1).then(()=>Rn(n,t,e)).catch(Ee)}async function ig(r,t){const e=M(r),n=t.batch.batchId;try{const s=await Tm(e.localStore,t);Lo(e,n,null),Oo(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await ie(e,s)}catch(s){await Ee(s)}}async function og(r,t,e){const n=M(r);try{const s=await function(a,u){const l=M(a);return l.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return l.mutationQueue.lookupMutationBatch(d,u).next(g=>(L(g!==null),f=g.keys(),l.mutationQueue.removeMutationBatch(d,g))).next(()=>l.mutationQueue.performConsistencyCheck(d)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(d,f,u)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>l.localDocuments.getDocuments(d,f))})}(n.localStore,t);Lo(n,t,e),Oo(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await ie(n,s)}catch(s){await Ee(s)}}async function ag(r,t){const e=M(r);Ae(e.remoteStore)||C("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const n=await function(a){const u=M(a);return u.persistence.runTransaction("Get highest unacknowledged batch id","readonly",l=>u.mutationQueue.getHighestUnacknowledgedBatchId(l))}(e.localStore);if(n===-1)return void t.resolve();const s=e.Oa.get(n)||[];s.push(t),e.Oa.set(n,s)}catch(n){const s=On(n,"Initialization of waitForPendingWrites() operation failed");t.reject(s)}}function Oo(r,t){(r.Oa.get(t)||[]).forEach(e=>{e.resolve()}),r.Oa.delete(t)}function Lo(r,t,e){const n=M(r);let s=n.xa[n.currentUser.toKey()];if(s){const i=s.get(t);i&&(e?i.reject(e):i.resolve(),s=s.remove(t)),n.xa[n.currentUser.toKey()]=s}}function Rn(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Da.get(t))r.ba.delete(n),e&&r.Sa.ka(n,e);r.Da.delete(t),r.isPrimaryClient&&r.Ma.Vr(t).forEach(n=>{r.Ma.containsKey(n)||hh(r,n)})}function hh(r,t){r.Ca.delete(t.path.canonicalString());const e=r.va.get(t);e!==null&&(vn(r.remoteStore,e),r.va=r.va.remove(t),r.Fa.delete(e),qo(r))}function no(r,t,e){for(const n of e)n instanceof oh?(r.Ma.addReference(n.key,t),ug(r,n)):n instanceof ah?(C("SyncEngine","Document no longer in limbo: "+n.key),r.Ma.removeReference(n.key,t),r.Ma.containsKey(n.key)||hh(r,n.key)):O()}function ug(r,t){const e=t.key,n=e.path.canonicalString();r.va.get(e)||r.Ca.has(n)||(C("SyncEngine","New document in limbo: "+e),r.Ca.add(n),qo(r))}function qo(r){for(;r.Ca.size>0&&r.va.size<r.maxConcurrentLimboResolutions;){const t=r.Ca.values().next().value;r.Ca.delete(t);const e=new F(W.fromString(t)),n=r.Na.next();r.Fa.set(n,new Ym(e)),r.va=r.va.insert(e,n),Hs(r.remoteStore,new Zt(Nt(xn(e.path)),n,"TargetPurposeLimboResolution",Ft.oe))}}async function ie(r,t,e){const n=M(r),s=[],i=[],a=[];n.ba.isEmpty()||(n.ba.forEach((u,l)=>{a.push(n.Ba(l,t,e).then(d=>{if((d||e)&&n.isPrimaryClient&&n.sharedClientState.updateQueryState(l.targetId,d!=null&&d.fromCache?"not-current":"current"),d){s.push(d);const f=Ro.Ki(l.targetId,d);i.push(f)}}))}),await Promise.all(a),n.Sa.h_(s),await async function(l,d){const f=M(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>v.forEach(d,_=>v.forEach(_.qi,P=>f.persistence.referenceDelegate.addReference(g,_.targetId,P)).next(()=>v.forEach(_.Qi,P=>f.persistence.referenceDelegate.removeReference(g,_.targetId,P)))))}catch(g){if(!we(g))throw g;C("LocalStore","Failed to update sequence numbers: "+g)}for(const g of d){const _=g.targetId;if(!g.fromCache){const P=f.ns.get(_),D=P.snapshotVersion,N=P.withLastLimboFreeSnapshotVersion(D);f.ns=f.ns.insert(_,N)}}}(n.localStore,i))}async function cg(r,t){const e=M(r);if(!e.currentUser.isEqual(t)){C("SyncEngine","User change. New user:",t.toKey());const n=await Kl(e.localStore,t);e.currentUser=t,function(i,a){i.Oa.forEach(u=>{u.forEach(l=>{l.reject(new x(S.CANCELLED,a))})}),i.Oa.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await ie(e,n.us)}}function lg(r,t){const e=M(r),n=e.Fa.get(t);if(n&&n.wa)return j().add(n.key);{let s=j();const i=e.Da.get(t);if(!i)return s;for(const a of i){const u=e.ba.get(a);s=s.unionWith(u.view.Ea)}return s}}async function hg(r,t){const e=M(r),n=await ks(e.localStore,t.query,!0),s=t.view.pa(n);return e.isPrimaryClient&&no(e,t.targetId,s.fa),s}async function dg(r,t){const e=M(r);return Hl(e.localStore,t).then(n=>ie(e,n))}async function fg(r,t,e,n){const s=M(r),i=await function(u,l){const d=M(u),f=M(d.mutationQueue);return d.persistence.runTransaction("Lookup mutation documents","readonly",g=>f.vn(g,l).next(_=>_?d.localDocuments.getDocuments(g,_):v.resolve(null)))}(s.localStore,t);i!==null?(e==="pending"?await Mn(s.remoteStore):e==="acknowledged"||e==="rejected"?(Lo(s,t,n||null),Oo(s,t),function(u,l){M(M(u).mutationQueue).Mn(l)}(s.localStore,t)):O(),await ie(s,i)):C("SyncEngine","Cannot apply mutation batch with id: "+t)}async function mg(r,t){const e=M(r);if(Js(e),Bo(e),t===!0&&e.La!==!0){const n=e.sharedClientState.getAllActiveQueryTargets(),s=await rc(e,n.toArray());e.La=!0,await to(e.remoteStore,!0);for(const i of s)Hs(e.remoteStore,i)}else if(t===!1&&e.La!==!1){const n=[];let s=Promise.resolve();e.Da.forEach((i,a)=>{e.sharedClientState.isLocalQueryTarget(a)?n.push(a):s=s.then(()=>(Rn(e,a),wn(e.localStore,a,!0))),vn(e.remoteStore,a)}),await s,await rc(e,n),function(a){const u=M(a);u.Fa.forEach((l,d)=>{vn(u.remoteStore,d)}),u.Ma.mr(),u.Fa=new Map,u.va=new rt(F.comparator)}(e),e.La=!1,await to(e.remoteStore,!1)}}async function rc(r,t,e){const n=M(r),s=[],i=[];for(const a of t){let u;const l=n.Da.get(a);if(l&&l.length!==0){u=await En(n.localStore,Nt(l[0]));for(const d of l){const f=n.ba.get(d),g=await hg(n,f);g.snapshot&&i.push(g.snapshot)}}else{const d=await Wl(n.localStore,a);u=await En(n.localStore,d),await Fo(n,dh(d),a,!1,u.resumeToken)}s.push(u)}return n.Sa.h_(i),s}function dh(r){return Hc(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function gg(r){return function(e){return M(M(e).persistence).Bi()}(M(r).localStore)}async function pg(r,t,e,n){const s=M(r);if(s.La)return void C("SyncEngine","Ignoring unexpected query state notification.");const i=s.Da.get(t);if(i&&i.length>0)switch(e){case"current":case"not-current":{const a=await Hl(s.localStore,Zc(i[0])),u=Mr.createSynthesizedRemoteEventForCurrentChange(t,e==="current",_t.EMPTY_BYTE_STRING);await ie(s,a,u);break}case"rejected":await wn(s.localStore,t,!0),Rn(s,t,n);break;default:O()}}async function _g(r,t,e){const n=Js(r);if(n.La){for(const s of t){if(n.Da.has(s)&&n.sharedClientState.isActiveQueryTarget(s)){C("SyncEngine","Adding an already active target "+s);continue}const i=await Wl(n.localStore,s),a=await En(n.localStore,i);await Fo(n,dh(i),a.targetId,!1,a.resumeToken),Hs(n.remoteStore,a)}for(const s of e)n.Da.has(s)&&await wn(n.localStore,s,!1).then(()=>{vn(n.remoteStore,s),Rn(n,s)}).catch(Ee)}}function Js(r){const t=M(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=lh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=lg.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=sg.bind(null,t),t.Sa.h_=Qm.bind(null,t.eventManager),t.Sa.ka=$m.bind(null,t.eventManager),t}function Bo(r){const t=M(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ig.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=og.bind(null,t),t}function yg(r,t,e){const n=M(r);(async function(i,a,u){try{const l=await a.getMetadata();if(await function(P,D){const N=M(P),b=ft(D.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",U=>N.$r.getBundleMetadata(U,D.id)).then(U=>!!U&&U.createTime.compareTo(b)>=0)}(i.localStore,l))return await a.close(),u._completeWith(function(P){return{taskState:"Success",documentsLoaded:P.totalDocuments,bytesLoaded:P.totalBytes,totalDocuments:P.totalDocuments,totalBytes:P.totalBytes}}(l)),Promise.resolve(new Set);u._updateProgress(ih(l));const d=new Hm(l,i.localStore,a.serializer);let f=await a.qa();for(;f;){const _=await d._a(f);_&&u._updateProgress(_),f=await a.qa()}const g=await d.complete();return await ie(i,g.ca,void 0),await function(P,D){const N=M(P);return N.persistence.runTransaction("Save bundle","readwrite",b=>N.$r.saveBundleMetadata(b,D))}(i.localStore,l),u._completeWith(g.progress),Promise.resolve(g.ua)}catch(l){return Bt("SyncEngine",`Loading bundle failed with ${l}`),u._failWith(l),Promise.resolve(new Set)}})(n,t,e).then(s=>{n.sharedClientState.notifyBundleLoaded(s)})}class Pn{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=Or(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return jl(this.persistence,new zl,t.initialUser,this.serializer)}createPersistence(t){return new wo(Ws.Hr,this.serializer)}createSharedClientState(t){return new Yl}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ig extends Pn{constructor(t){super(),this.cacheSizeBytes=t}createGarbageCollectionScheduler(t,e){L(this.persistence.referenceDelegate instanceof Ns);const n=this.persistence.referenceDelegate.garbageCollector;return new Ll(n,t.asyncQueue,e)}createPersistence(t){const e=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new wo(n=>Ns.Hr(n,e),this.serializer)}}class Uo extends Pn{constructor(t,e,n){super(),this.Qa=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await this.Qa.initialize(this,t),await Bo(this.Qa.syncEngine),await Mn(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(t){return jl(this.persistence,new zl,t.initialUser,this.serializer)}createGarbageCollectionScheduler(t,e){const n=this.persistence.referenceDelegate.garbageCollector;return new Ll(n,t.asyncQueue,e)}createIndexBackfillerScheduler(t,e){const n=new zd(e,this.persistence);return new Gd(t.asyncQueue,n)}createPersistence(t){const e=Ao(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=this.cacheSizeBytes!==void 0?xt.withCacheSize(this.cacheSizeBytes):xt.DEFAULT;return new vo(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Xl(),ws(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(t){return new Yl}}class fh extends Uo{constructor(t,e){super(t,e,!1),this.Qa=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.Qa.syncEngine;this.sharedClientState instanceof Mi&&(this.sharedClientState.syncEngine={Zs:fg.bind(null,e),Xs:pg.bind(null,e),eo:_g.bind(null,e),Bi:gg.bind(null,e),Ys:dg.bind(null,e)},await this.sharedClientState.start()),await this.persistence.fi(async n=>{await mg(this.Qa.syncEngine,n),this.gcScheduler&&(n&&!this.gcScheduler.started?this.gcScheduler.start():n||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(n&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():n||this.indexBackfillerScheduler.stop())})}createSharedClientState(t){const e=Xl();if(!Mi.D(e))throw new x(S.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Ao(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Mi(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class Ln{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>nc(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=cg.bind(null,this.syncEngine),await to(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new Km}()}createDatastore(t){const e=Or(t.databaseInfo.databaseId),n=function(i){return new Vm(i)}(t.databaseInfo);return function(i,a,u,l){return new xm(i,a,u,l)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return function(n,s,i,a,u){return new Nm(n,s,i,a,u)}(this.localStore,this.datastore,t.asyncQueue,e=>nc(this.syncEngine,e,0),function(){return Yu.D()?new Yu:new Rm}())}createSyncEngine(t,e){return function(s,i,a,u,l,d,f){const g=new Xm(s,i,a,u,l,d);return f&&(g.La=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t;await async function(n){const s=M(n);C("RemoteStore","RemoteStore shutting down."),s.M_.add(5),await kn(s),s.O_.shutdown(),s.N_.set("Unknown")}(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(r,t=10240){let e=0;return{async read(){if(e<r.byteLength){const n={value:r.slice(e,e+t),done:!1};return e+=t,n}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Ka(this.observer.next,t)}error(t){this.observer.error?this.Ka(this.observer.error,t):dt("Uncaught Error in snapshot listener:",t.toString())}$a(){this.muted=!0}Ka(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t,e){this.Ua=t,this.serializer=e,this.metadata=new pt,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(n=>{n&&n.sa()?this.metadata.resolve(n.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(n==null?void 0:n.ia)}`))},n=>this.metadata.reject(n))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const t=await this.za();if(t===null)return null;const e=this.Wa.decode(t),n=Number(e);isNaN(n)&&this.ja(`length string (${e}) is not valid number`);const s=await this.Ha(n);return new Wm(JSON.parse(s),t.length+n)}Ja(){return this.buffer.findIndex(t=>t===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const t=this.Ja();t<0&&this.ja("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async Ha(t){for(;this.buffer.length<t;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const e=this.Wa.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}ja(t){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${t}`)}async Ya(){const t=await this.Ua.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new x(S.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const e=await async function(s,i){const a=M(s),u={documents:i.map(g=>Rr(a.serializer,g))},l=await a.xo("BatchGetDocuments",a.serializer.databaseId,W.emptyPath(),u,i.length),d=new Map;l.forEach(g=>{const _=Bf(a.serializer,g);d.set(_.key.toString(),_)});const f=[];return i.forEach(g=>{const _=d.get(g.toString());L(!!_),f.push(_)}),f}(this.datastore,t);return e.forEach(n=>this.recordVersion(n)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(t.toString())}delete(t){this.write(new Nn(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,n)=>{const s=F.fromPath(n);this.mutations.push(new ho(s,this.precondition(s)))}),await async function(n,s){const i=M(n),a={writes:s.map(u=>Pr(i.serializer,u))};await i.Co("Commit",i.serializer.databaseId,W.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw O();e=B.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new x(S.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(B.min())?at.exists(!1):at.updateTime(e):at.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(B.min()))throw new x(S.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return at.updateTime(e)}return at.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wg{constructor(t,e,n,s,i){this.asyncQueue=t,this.datastore=e,this.options=n,this.updateFunction=s,this.deferred=i,this.Za=n.maxAttempts,this.Yo=new So(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const t=new Eg(this.datastore),e=this.tu(t);e&&e.then(n=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(n)}).catch(s=>{this.nu(s)}))}).catch(n=>{this.nu(n)})})}tu(t){try{const e=this.updateFunction(t);return!Cr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}nu(t){this.Za>0&&this.ru(t)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(t)}ru(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!ml(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(t,e,n,s){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=s,this.user=It.UNAUTHENTICATED,this.clientId=Ac.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async i=>{C("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(n,i=>(C("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(S.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new pt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=On(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function vs(r,t){r.asyncQueue.verifyOperationInProgress(),C("FirestoreClient","Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener(async s=>{n.isEqual(s)||(await Kl(t.localStore,s),n=s)}),t.persistence.setDatabaseDeletedListener(()=>r.terminate()),r._offlineComponents=t}async function ro(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Go(r);C("FirestoreClient","Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener(n=>Xu(t.remoteStore,n)),r.setAppCheckTokenChangeListener((n,s)=>Xu(t.remoteStore,s)),r._onlineComponents=t}function mh(r){return r.name==="FirebaseError"?r.code===S.FAILED_PRECONDITION||r.code===S.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function Go(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){C("FirestoreClient","Using user provided OfflineComponentProvider");try{await vs(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!mh(e))throw e;Bt("Error using user provided cache. Falling back to memory cache: "+e),await vs(r,new Pn)}}else C("FirestoreClient","Using default OfflineComponentProvider"),await vs(r,new Pn);return r._offlineComponents}async function Xs(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(C("FirestoreClient","Using user provided OnlineComponentProvider"),await ro(r,r._uninitializedComponentsProvider._online)):(C("FirestoreClient","Using default OnlineComponentProvider"),await ro(r,new Ln))),r._onlineComponents}function gh(r){return Go(r).then(t=>t.persistence)}function qn(r){return Go(r).then(t=>t.localStore)}function ph(r){return Xs(r).then(t=>t.remoteStore)}function zo(r){return Xs(r).then(t=>t.syncEngine)}function _h(r){return Xs(r).then(t=>t.datastore)}async function Sn(r){const t=await Xs(r),e=t.eventManager;return e.onListen=Zm.bind(null,t.syncEngine),e.onUnlisten=eg.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=tg.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=ng.bind(null,t.syncEngine),e}function Ag(r){return r.asyncQueue.enqueue(async()=>{const t=await gh(r),e=await ph(r);return t.setNetworkEnabled(!0),function(s){const i=M(s);return i.M_.delete(0),Lr(i)}(e)})}function Rg(r){return r.asyncQueue.enqueue(async()=>{const t=await gh(r),e=await ph(r);return t.setNetworkEnabled(!1),async function(s){const i=M(s);i.M_.add(0),await kn(i),i.N_.set("Offline")}(e)})}function Pg(r,t){const e=new pt;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await function(d,f){const g=M(d);return g.persistence.runTransaction("read document","readonly",_=>g.localDocuments.getDocument(_,f))}(s,i);u.isFoundDocument()?a.resolve(u):u.isNoDocument()?a.resolve(null):a.reject(new x(S.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(u){const l=On(u,`Failed to get document '${i} from cache`);a.reject(l)}}(await qn(r),t,e)),e.promise}function yh(r,t,e={}){const n=new pt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const f=new Ys({next:_=>{a.enqueueAndForget(()=>No(i,g));const P=_.docs.has(u);!P&&_.fromCache?d.reject(new x(S.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&_.fromCache&&l&&l.source==="server"?d.reject(new x(S.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Mo(xn(u.path),f,{includeMetadataChanges:!0,ra:!0});return Do(i,g)}(await Sn(r),r.asyncQueue,t,e,n)),n.promise}function Sg(r,t){const e=new pt;return r.asyncQueue.enqueueAndForget(async()=>async function(s,i,a){try{const u=await ks(s,i,!0),l=new uh(i,u.hs),d=l.da(u.documents),f=l.applyChanges(d,!1);a.resolve(f.snapshot)}catch(u){const l=On(u,`Failed to execute query '${i} against cache`);a.reject(l)}}(await qn(r),t,e)),e.promise}function Ih(r,t,e={}){const n=new pt;return r.asyncQueue.enqueueAndForget(async()=>function(i,a,u,l,d){const f=new Ys({next:_=>{a.enqueueAndForget(()=>No(i,g)),_.fromCache&&l.source==="server"?d.reject(new x(S.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(_)},error:_=>d.reject(_)}),g=new Mo(u,f,{includeMetadataChanges:!0,ra:!0});return Do(i,g)}(await Sn(r),r.asyncQueue,t,e,n)),n.promise}function Vg(r,t,e){const n=new pt;return r.asyncQueue.enqueueAndForget(async()=>{try{const s=await _h(r);n.resolve(async function(a,u,l){var d;const f=M(a),{request:g,ut:_,parent:P}=Pl(f.serializer,Jc(u),l);f.connection.Do||delete g.parent;const D=(await f.xo("RunAggregationQuery",f.serializer.databaseId,P,g,1)).filter(b=>!!b.result);L(D.length===1);const N=(d=D[0].result)===null||d===void 0?void 0:d.aggregateFields;return Object.keys(N).reduce((b,U)=>(b[_[U]]=N[U],b),{})}(s,t,e))}catch(s){n.reject(s)}}),n.promise}function bg(r,t){const e=new Ys(t);return r.asyncQueue.enqueueAndForget(async()=>function(s,i){M(s).z_.add(i),i.next()}(await Sn(r),e)),()=>{e.$a(),r.asyncQueue.enqueueAndForget(async()=>function(s,i){M(s).z_.delete(i)}(await Sn(r),e))}}function Cg(r,t,e,n){const s=function(a,u){let l;return l=typeof a=="string"?pl().encode(a):a,function(f,g){return new Tg(f,g)}(function(f,g){if(f instanceof Uint8Array)return sc(f,g);if(f instanceof ArrayBuffer)return sc(new Uint8Array(f),g);if(f instanceof ReadableStream)return f.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(l),u)}(e,Or(t));r.asyncQueue.enqueueAndForget(async()=>{yg(await zo(r),s,n)})}function xg(r,t){return r.asyncQueue.enqueue(async()=>function(n,s){const i=M(n);return i.persistence.runTransaction("Get named query","readonly",a=>i.$r.getNamedQuery(a,s))}(await qn(r),t))}function Dg(r,t){return r.asyncQueue.enqueue(async()=>async function(n,s){const i=M(n),a=i.indexManager,u=[];return i.persistence.runTransaction("Configure indexes","readwrite",l=>a.getFieldIndexes(l).next(d=>function(g,_,P,D,N){g=[...g],_=[..._],g.sort(P),_.sort(P);const b=g.length,U=_.length;let G=0,q=0;for(;G<U&&q<b;){const Q=P(g[q],_[G]);Q<0?N(g[q++]):Q>0?D(_[G++]):(G++,q++)}for(;G<U;)D(_[G++]);for(;q<b;)N(g[q++])}(d,s,Ld,f=>{u.push(a.addFieldIndex(l,f))},f=>{u.push(a.deleteFieldIndex(l,f))})).next(()=>v.waitFor(u)))}(await qn(r),t))}function Ng(r,t){return r.asyncQueue.enqueue(async()=>function(n,s){M(n).ts.Ui=s}(await qn(r),t))}function kg(r){return r.asyncQueue.enqueue(async()=>function(e){const n=M(e),s=n.indexManager;return n.persistence.runTransaction("Delete All Indexes","readwrite",i=>s.deleteAllFieldIndexes(i))}(await qn(r)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(r,t,e){if(!e)throw new x(S.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Mg(r,t,e,n){if(t===!0&&n===!0)throw new x(S.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function oc(r){if(!F.isDocumentKey(r))throw new x(S.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function ac(r){if(F.isDocumentKey(r))throw new x(S.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function Zs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":O()}function $(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new x(S.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Zs(r);throw new x(S.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}function Eh(r,t){if(t<=0)throw new x(S.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${t}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uc{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new x(S.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Mg("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Th((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new x(S.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(n,s){return n.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class qr{constructor(t,e,n,s){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new uc({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(S.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new uc(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new Cd;switch(n.type){case"firstParty":return new kd(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new x(S.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=ic.get(e);n&&(C("ComponentProvider","Removing Datastore"),ic.delete(e),n.terminate())}(this),Promise.resolve()}}function Fg(r,t,e,n={}){var s;const i=(r=$(r,qr))._getSettings(),a=`${t}:${e}`;if(i.host!=="firestore.googleapis.com"&&i.host!==a&&Bt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},i),{host:a,ssl:!1})),n.mockUserToken){let u,l;if(typeof n.mockUserToken=="string")u=n.mockUserToken,l=It.MOCK_USER;else{u=wd(n.mockUserToken,(s=r._app)===null||s===void 0?void 0:s.options.projectId);const d=n.mockUserToken.sub||n.mockUserToken.user_id;if(!d)throw new x(S.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new It(d)}r._authCredentials=new xd(new wc(u,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Rt(this.firestore,t,this._query)}}class mt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new $t(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new mt(this.firestore,t,this._key)}}class $t extends Rt{constructor(t,e,n){super(t,e,xn(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new mt(this.firestore,null,new F(t))}withConverter(t){return new $t(this.firestore,t,this._path)}}function gp(r,t,...e){if(r=Tt(r),jo("collection","path",t),r instanceof qr){const n=W.fromString(t,...e);return ac(n),new $t(r,null,n)}{if(!(r instanceof mt||r instanceof $t))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return ac(n),new $t(r.firestore,null,n)}}function pp(r,t){if(r=$(r,qr),jo("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new x(S.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Rt(r,null,function(n){return new ne(W.emptyPath(),n)}(t))}function Og(r,t,...e){if(r=Tt(r),arguments.length===1&&(t=Ac.newId()),jo("doc","path",t),r instanceof qr){const n=W.fromString(t,...e);return oc(n),new mt(r,null,new F(n))}{if(!(r instanceof mt||r instanceof $t))throw new x(S.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(W.fromString(t,...e));return oc(n),new mt(r.firestore,r instanceof $t?r.converter:null,new F(n))}}function _p(r,t){return r=Tt(r),t=Tt(t),(r instanceof mt||r instanceof $t)&&(t instanceof mt||t instanceof $t)&&r.firestore===t.firestore&&r.path===t.path&&r.converter===t.converter}function wh(r,t){return r=Tt(r),t=Tt(t),r instanceof Rt&&t instanceof Rt&&r.firestore===t.firestore&&Dr(r._query,t._query)&&r.converter===t.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lg{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new So(this,"async_queue_retry"),this.hu=()=>{const e=ws();e&&C("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Yo.Wo()};const t=ws();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=ws();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise(()=>{});const e=new pt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.su.push(t),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!we(t))throw t;C("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(t){const e=this.iu.then(()=>(this.uu=!0,t().catch(n=>{this.au=n,this.uu=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(n);throw dt("INTERNAL UNHANDLED ERROR: ",s),n}).then(n=>(this.uu=!1,n))));return this.iu=e,e}enqueueAfterDelay(t,e,n){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const s=xo.createAndSchedule(this,t,e,n,i=>this.Eu(i));return this._u.push(s),s}Pu(){this.au&&O()}verifyOperationInProgress(){}async du(){let t;do t=this.iu,await t;while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then(()=>{this._u.sort((e,n)=>e.targetTimeMs-n.targetTimeMs);for(const e of this._u)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.du()})}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}function so(r){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(r,["next","error","complete"])}class qg{constructor(){this._progressObserver={},this._taskCompletionResolver=new pt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yp=-1;class et extends qr{constructor(t,e,n,s){super(t,e,n,s),this.type="firestore",this._queue=function(){return new Lg}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||vh(this),this._firestoreClient.terminate()}}function Ip(r,t,e){e||(e="(default)");const n=fc(r,"firestore");if(n.isInitialized(e)){const s=n.getImmediate({identifier:e}),i=n.getOptions(e);if(qs(i,t))return s;throw new x(S.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(t.cacheSizeBytes!==void 0&&t.localCache!==void 0)throw new x(S.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(t.cacheSizeBytes!==void 0&&t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new x(S.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return n.initialize({options:t,instanceIdentifier:e})}function Tp(r,t){const e=typeof r=="object"?r:vd(),n=typeof r=="string"?r:t||"(default)",s=fc(e,"firestore").getImmediate({identifier:n});if(!s._initialized){const i=Ad("firestore");i&&Fg(s,...i)}return s}function ct(r){return r._firestoreClient||vh(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function vh(r){var t,e,n;const s=r._freezeSettings(),i=function(u,l,d,f){return new lf(u,l,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Th(f.experimentalLongPollingOptions),f.useFetchStreams)}(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,s);r._firestoreClient=new vg(r._authCredentials,r._appCheckCredentials,r._queue,i),!((e=s.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=s.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}function Ep(r,t){Rh(r=$(r,et));const e=ct(r);if(e._uninitializedComponentsProvider)throw new x(S.FAILED_PRECONDITION,"SDK cache is already specified.");Bt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=r._freezeSettings(),s=new Ln;return Ah(e,s,new Uo(s,n.cacheSizeBytes,t==null?void 0:t.forceOwnership))}function wp(r){Rh(r=$(r,et));const t=ct(r);if(t._uninitializedComponentsProvider)throw new x(S.FAILED_PRECONDITION,"SDK cache is already specified.");Bt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=r._freezeSettings(),n=new Ln;return Ah(t,n,new fh(n,e.cacheSizeBytes))}function Ah(r,t,e){const n=new pt;return r.asyncQueue.enqueue(async()=>{try{await vs(r,e),await ro(r,t),n.resolve()}catch(s){const i=s;if(!mh(i))throw i;Bt("Error enabling indexeddb cache. Falling back to memory cache: "+i),n.reject(i)}}).then(()=>n.promise)}function vp(r){if(r._initialized&&!r._terminated)throw new x(S.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new pt;return r._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!Kt.D())return Promise.resolve();const s=n+"main";await Kt.delete(s)}(Ao(r._databaseId,r._persistenceKey)),t.resolve()}catch(e){t.reject(e)}}),t.promise}function Ap(r){return function(e){const n=new pt;return e.asyncQueue.enqueueAndForget(async()=>ag(await zo(e),n)),n.promise}(ct(r=$(r,et)))}function Rp(r){return Ag(ct(r=$(r,et)))}function Pp(r){return Rg(ct(r=$(r,et)))}function Sp(r){return Rd(r.app,"firestore",r._databaseId.database),r._delete()}function Vp(r,t){const e=ct(r=$(r,et)),n=new qg;return Cg(e,r._databaseId,t,n),n}function bp(r,t){return xg(ct(r=$(r,et)),t).then(e=>e?new Rt(r,null,e.query):null)}function Rh(r){if(r._initialized||r._terminated)throw new x(S.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t="count",e){this._internalFieldPath=e,this.type="AggregateField",this.aggregateType=t}}class Bg{constructor(t,e,n){this._userDataWriter=e,this._data=n,this.type="AggregateQuerySnapshot",this.query=t}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t){this._byteString=t}static fromBase64String(t){try{return new $e(_t.fromBase64String(t))}catch(e){throw new x(S.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new $e(_t.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new x(S.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}function Cp(){return new We("__name__")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ko{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new x(S.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new x(S.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return z(this._lat,t._lat)||z(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=/^__.*__$/;class Gg{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new se(t,this.data,this.fieldMask,e,this.fieldTransforms):new Dn(t,this.data,e,this.fieldTransforms)}}class Ph{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new se(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Sh(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}class ti{constructor(t,e,n,s,i,a){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=s,i===void 0&&this.mu(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(t){return new ti(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:n,yu:!1});return s.wu(t),s}Su(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),s=this.gu({path:n,yu:!1});return s.mu(),s}bu(t){return this.gu({path:void 0,yu:!0})}Du(t){return Ls(t,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}mu(){if(this.path)for(let t=0;t<this.path.length;t++)this.wu(this.path.get(t))}wu(t){if(t.length===0)throw this.Du("Document fields must not be empty");if(Sh(this.fu)&&Ug.test(t))throw this.Du('Document fields cannot begin and end with "__"')}}class zg{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Or(t)}Fu(t,e,n,s=!1){return new ti({fu:t,methodName:e,vu:n,path:ot.emptyPath(),yu:!1,Cu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Je(r){const t=r._freezeSettings(),e=Or(r._databaseId);return new zg(r._databaseId,!!t.ignoreUndefinedProperties,e)}function ei(r,t,e,n,s,i={}){const a=r.Fu(i.merge||i.mergeFields?2:0,t,e,s);Xo("Data must be an object, but it was:",a,n);const u=Ch(n,a);let l,d;if(i.merge)l=new Ot(a.fieldMask),d=a.fieldTransforms;else if(i.mergeFields){const f=[];for(const g of i.mergeFields){const _=Vr(t,g,e);if(!a.contains(_))throw new x(S.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Dh(f,_)||f.push(_)}l=new Ot(f),d=a.fieldTransforms.filter(g=>l.covers(g.field))}else l=null,d=a.fieldTransforms;return new Gg(new At(u),l,d)}class Br extends He{_toFieldTransform(t){if(t.fu!==2)throw t.fu===1?t.Du(`${this._methodName}() can only appear at the top level of your update data`):t.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Br}}function Vh(r,t,e){return new ti({fu:3,vu:t.settings.vu,methodName:r._methodName,yu:e},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Qo extends He{_toFieldTransform(t){return new kr(t.path,new yn)}isEqual(t){return t instanceof Qo}}class $o extends He{constructor(t,e){super(t),this.Mu=e}_toFieldTransform(t){const e=Vh(this,t,!0),n=this.Mu.map(i=>Ye(i,e)),s=new Ge(n);return new kr(t.path,s)}isEqual(t){return t instanceof $o&&qs(this.Mu,t.Mu)}}class Wo extends He{constructor(t,e){super(t),this.Mu=e}_toFieldTransform(t){const e=Vh(this,t,!0),n=this.Mu.map(i=>Ye(i,e)),s=new ze(n);return new kr(t.path,s)}isEqual(t){return t instanceof Wo&&qs(this.Mu,t.Mu)}}class Ho extends He{constructor(t,e){super(t),this.xu=e}_toFieldTransform(t){const e=new In(t.serializer,ol(t.serializer,this.xu));return new kr(t.path,e)}isEqual(t){return t instanceof Ho&&this.xu===t.xu}}function Jo(r,t,e,n){const s=r.Fu(1,t,e);Xo("Data must be an object, but it was:",s,n);const i=[],a=At.empty();ve(n,(l,d)=>{const f=ni(t,l,e);d=Tt(d);const g=s.Su(f);if(d instanceof Br)i.push(f);else{const _=Ye(d,g);_!=null&&(i.push(f),a.set(f,_))}});const u=new Ot(i);return new Ph(a,u,s.fieldTransforms)}function Yo(r,t,e,n,s,i){const a=r.Fu(1,t,e),u=[Vr(t,n,e)],l=[s];if(i.length%2!=0)throw new x(S.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)u.push(Vr(t,i[_])),l.push(i[_+1]);const d=[],f=At.empty();for(let _=u.length-1;_>=0;--_)if(!Dh(d,u[_])){const P=u[_];let D=l[_];D=Tt(D);const N=a.Su(P);if(D instanceof Br)d.push(P);else{const b=Ye(D,N);b!=null&&(d.push(P),f.set(P,b))}}const g=new Ot(d);return new Ph(f,g,a.fieldTransforms)}function bh(r,t,e,n=!1){return Ye(e,r.Fu(n?4:3,t))}function Ye(r,t){if(xh(r=Tt(r)))return Xo("Unsupported field value:",t,r),Ch(r,t);if(r instanceof He)return function(n,s){if(!Sh(s.fu))throw s.Du(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Du(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.yu&&t.fu!==4)throw t.Du("Nested arrays are not supported");return function(n,s){const i=[];let a=0;for(const u of n){let l=Ye(u,s.bu(a));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),a++}return{arrayValue:{values:i}}}(r,t)}return function(n,s){if((n=Tt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return ol(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=ut.fromDate(n);return{timestampValue:Tn(s.serializer,i)}}if(n instanceof ut){const i=new ut(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Tn(s.serializer,i)}}if(n instanceof Ko)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof $e)return{bytesValue:Il(s.serializer,n._byteString)};if(n instanceof mt){const i=s.databaseId,a=n.firestore._databaseId;if(!a.isEqual(i))throw s.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:_o(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.Du(`Unsupported field value: ${Zs(n)}`)}(r,t)}function Ch(r,t){const e={};return Lc(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ve(r,(n,s)=>{const i=Ye(s,t.pu(n));i!=null&&(e[n]=i)}),{mapValue:{fields:e}}}function xh(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ut||r instanceof Ko||r instanceof $e||r instanceof mt||r instanceof He)}function Xo(r,t,e){if(!xh(e)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(e)){const n=Zs(e);throw n==="an object"?t.Du(r+" a custom object"):t.Du(r+" "+n)}}function Vr(r,t,e){if((t=Tt(t))instanceof We)return t._internalPath;if(typeof t=="string")return ni(r,t);throw Ls("Field path arguments must be of type string or ",r,!1,void 0,e)}const jg=new RegExp("[~\\*/\\[\\]]");function ni(r,t,e){if(t.search(jg)>=0)throw Ls(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new We(...t.split("."))._internalPath}catch{throw Ls(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function Ls(r,t,e,n,s){const i=n&&!n.isEmpty(),a=s!==void 0;let u=`Function ${t}() called with invalid data`;e&&(u+=" (via `toFirestore()`)"),u+=". ";let l="";return(i||a)&&(l+=" (found",i&&(l+=` in field ${n}`),a&&(l+=` in document ${s}`),l+=")"),new x(S.INVALID_ARGUMENT,u+r+l)}function Dh(r,t){return r.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(t,e,n,s,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Kg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ri("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Kg extends br{data(){return super.data()}}function ri(r,t){return typeof t=="string"?ni(r,t):t instanceof We?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new x(S.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zo{}class Ur extends Zo{}function xp(r,t,...e){let n=[];t instanceof Zo&&n.push(t),n=n.concat(e),function(i){const a=i.filter(l=>l instanceof Bn).length,u=i.filter(l=>l instanceof Gr).length;if(a>1||a>0&&u>0)throw new x(S.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(n);for(const s of n)r=s._apply(r);return r}class Gr extends Ur{constructor(t,e,n){super(),this._field=t,this._op=e,this._value=n,this.type="where"}static _create(t,e,n){return new Gr(t,e,n)}_apply(t){const e=this._parse(t);return Mh(t._query,e),new Rt(t.firestore,t.converter,Ki(t._query,e))}_parse(t){const e=Je(t.firestore);return function(i,a,u,l,d,f,g){let _;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new x(S.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){lc(g,f);const P=[];for(const D of g)P.push(cc(l,i,D));_={arrayValue:{values:P}}}else _=cc(l,i,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||lc(g,f),_=bh(u,a,g,f==="in"||f==="not-in");return H.create(d,f,_)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}function Dp(r,t,e){const n=t,s=ri("where",r);return Gr._create(s,n,e)}class Bn extends Zo{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Bn(t,e)}_parse(t){const e=this._queryConstraints.map(n=>n._parse(t)).filter(n=>n.getFilters().length>0);return e.length===1?e[0]:Z.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(s,i){let a=s;const u=i.getFlattenedFilters();for(const l of u)Mh(a,l),a=Ki(a,l)}(t._query,e),new Rt(t.firestore,t.converter,Ki(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Np(...r){return r.forEach(t=>Fh("or",t)),Bn._create("or",r)}function kp(...r){return r.forEach(t=>Fh("and",t)),Bn._create("and",r)}class ta extends Ur{constructor(t,e){super(),this._field=t,this._direction=e,this.type="orderBy"}static _create(t,e){return new ta(t,e)}_apply(t){const e=function(s,i,a){if(s.startAt!==null)throw new x(S.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new x(S.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Ar(i,a)}(t._query,this._field,this._direction);return new Rt(t.firestore,t.converter,function(s,i){const a=s.explicitOrderBy.concat([i]);return new ne(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,e))}}function Mp(r,t="asc"){const e=t,n=ri("orderBy",r);return ta._create(n,e)}class si extends Ur{constructor(t,e,n){super(),this.type=t,this._limit=e,this._limitType=n}static _create(t,e,n){return new si(t,e,n)}_apply(t){return new Rt(t.firestore,t.converter,Vs(t._query,this._limit,this._limitType))}}function Fp(r){return Eh("limit",r),si._create("limit",r,"F")}function Op(r){return Eh("limitToLast",r),si._create("limitToLast",r,"L")}class ii extends Ur{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new ii(t,e,n)}_apply(t){const e=kh(t,this.type,this._docOrFields,this._inclusive);return new Rt(t.firestore,t.converter,function(s,i){return new ne(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(t._query,e))}}function Lp(...r){return ii._create("startAt",r,!0)}function qp(...r){return ii._create("startAfter",r,!1)}class oi extends Ur{constructor(t,e,n){super(),this.type=t,this._docOrFields=e,this._inclusive=n}static _create(t,e,n){return new oi(t,e,n)}_apply(t){const e=kh(t,this.type,this._docOrFields,this._inclusive);return new Rt(t.firestore,t.converter,function(s,i){return new ne(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(t._query,e))}}function Bp(...r){return oi._create("endBefore",r,!1)}function Up(...r){return oi._create("endAt",r,!0)}function kh(r,t,e,n){if(e[0]=Tt(e[0]),e[0]instanceof br)return function(i,a,u,l,d){if(!l)throw new x(S.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${u}().`);const f=[];for(const g of hn(i))if(g.field.isKeyField())f.push(Be(a,l.key));else{const _=l.data.field(g.field);if(Us(_))throw new x(S.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+g.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(_===null){const P=g.field.canonicalString();throw new x(S.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}f.push(_)}return new Ie(f,d)}(r._query,r.firestore._databaseId,t,e[0]._document,n);{const s=Je(r.firestore);return function(a,u,l,d,f,g){const _=a.explicitOrderBy;if(f.length>_.length)throw new x(S.INVALID_ARGUMENT,`Too many arguments provided to ${d}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let D=0;D<f.length;D++){const N=f[D];if(_[D].field.isKeyField()){if(typeof N!="string")throw new x(S.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${d}(), but got a ${typeof N}`);if(!co(a)&&N.indexOf("/")!==-1)throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${d}() must be a plain document ID, but '${N}' contains a slash.`);const b=a.path.child(W.fromString(N));if(!F.isDocumentKey(b))throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${d}() must result in a valid document path, but '${b}' is not because it contains an odd number of segments.`);const U=new F(b);P.push(Be(u,U))}else{const b=bh(l,d,N);P.push(b)}}return new Ie(P,g)}(r._query,r.firestore._databaseId,s,t,e,n)}}function cc(r,t,e){if(typeof(e=Tt(e))=="string"){if(e==="")throw new x(S.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!co(t)&&e.indexOf("/")!==-1)throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const n=t.path.child(W.fromString(e));if(!F.isDocumentKey(n))throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${n}' is not because it has an odd number of segments (${n.length}).`);return Be(r,new F(n))}if(e instanceof mt)return Be(r,e._key);throw new x(S.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Zs(e)}.`)}function lc(r,t){if(!Array.isArray(r)||r.length===0)throw new x(S.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Mh(r,t){const e=function(s,i){for(const a of s)for(const u of a.getFlattenedFilters())if(i.indexOf(u.op)>=0)return u.op;return null}(r.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new x(S.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new x(S.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}function Fh(r,t){if(!(t instanceof Gr||t instanceof Bn))throw new x(S.INVALID_ARGUMENT,`Function ${r}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Oh{convertValue(t,e="none"){switch(_e(t)){case 0:return null;case 1:return t.booleanValue;case 2:return ht(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ee(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw O()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return ve(t,(s,i)=>{n[s]=this.convertValue(i,e)}),n}convertGeoPoint(t){return new Ko(ht(t.latitude),ht(t.longitude))}convertArray(t,e){return(t.values||[]).map(n=>this.convertValue(n,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=Gs(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(Er(t));default:return null}}convertTimestamp(t){const e=te(t);return new ut(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=W.fromString(t);L(Cl(n));const s=new qe(n.get(1),n.get(3)),i=new F(n.popFirst(5));return s.isEqual(e)||dt(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class Qg extends Oh{constructor(t){super(),this.firestore=t}convertBytes(t){return new $e(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gp(r){return new Sr("sum",Vr("sum",r))}function zp(r){return new Sr("avg",Vr("average",r))}function $g(){return new Sr("count")}function jp(r,t){var e,n;return r instanceof Sr&&t instanceof Sr&&r.aggregateType===t.aggregateType&&((e=r._internalFieldPath)===null||e===void 0?void 0:e.canonicalString())===((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())}function Kp(r,t){return wh(r.query,t.query)&&qs(r.data(),t.data())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Vn extends br{constructor(t,e,n,s,i,a){super(t,e,n,s,a),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new As(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ri("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class As extends Vn{data(t={}){return super.data(t)}}class bn{constructor(t,e,n,s){this._firestore=t,this._userDataWriter=e,this._snapshot=s,this.metadata=new Fe(s.hasPendingWrites,s.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new As(this._firestore,this._userDataWriter,n.key,n,new Fe(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new x(S.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(u=>{const l=new As(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Fe(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);return u.doc,{type:"added",doc:l,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(u=>i||u.type!==3).map(u=>{const l=new As(s._firestore,s._userDataWriter,u.doc.key,u.doc,new Fe(s._snapshot.mutatedKeys.has(u.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return u.type!==0&&(d=a.indexOf(u.doc.key),a=a.delete(u.doc.key)),u.type!==1&&(a=a.add(u.doc),f=a.indexOf(u.doc.key)),{type:Wg(u.type),doc:l,oldIndex:d,newIndex:f}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Wg(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return O()}}function Qp(r,t){return r instanceof Vn&&t instanceof Vn?r._firestore===t._firestore&&r._key.isEqual(t._key)&&(r._document===null?t._document===null:r._document.isEqual(t._document))&&r._converter===t._converter:r instanceof bn&&t instanceof bn&&r._firestore===t._firestore&&wh(r.query,t.query)&&r.metadata.isEqual(t.metadata)&&r._snapshot.isEqual(t._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(r){r=$(r,mt);const t=$(r.firestore,et);return yh(ct(t),r._key).then(e=>ea(t,r,e))}class Re extends Oh{constructor(t){super(),this.firestore=t}convertBytes(t){return new $e(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new mt(this.firestore,null,e)}}function Wp(r){r=$(r,mt);const t=$(r.firestore,et),e=ct(t),n=new Re(t);return Pg(e,r._key).then(s=>new Vn(t,n,r._key,s,new Fe(s!==null&&s.hasLocalMutations,!0),r.converter))}function Hp(r){r=$(r,mt);const t=$(r.firestore,et);return yh(ct(t),r._key,{source:"server"}).then(e=>ea(t,r,e))}function Jp(r){r=$(r,Rt);const t=$(r.firestore,et),e=ct(t),n=new Re(t);return Nh(r._query),Ih(e,r._query).then(s=>new bn(t,n,r,s))}function Yp(r){r=$(r,Rt);const t=$(r.firestore,et),e=ct(t),n=new Re(t);return Sg(e,r._query).then(s=>new bn(t,n,r,s))}function Xp(r){r=$(r,Rt);const t=$(r.firestore,et),e=ct(t),n=new Re(t);return Ih(e,r._query,{source:"server"}).then(s=>new bn(t,n,r,s))}function Zp(r,t,e){r=$(r,mt);const n=$(r.firestore,et),s=ai(r.converter,t,e);return zr(n,[ei(Je(n),"setDoc",r._key,s,r.converter!==null,e).toMutation(r._key,at.none())])}function t_(r,t,e,...n){r=$(r,mt);const s=$(r.firestore,et),i=Je(s);let a;return a=typeof(t=Tt(t))=="string"||t instanceof We?Yo(i,"updateDoc",r._key,t,e,n):Jo(i,"updateDoc",r._key,t),zr(s,[a.toMutation(r._key,at.exists(!0))])}function e_(r){return zr($(r.firestore,et),[new Nn(r._key,at.none())])}function n_(r,t){const e=$(r.firestore,et),n=Og(r),s=ai(r.converter,t);return zr(e,[ei(Je(r.firestore),"addDoc",n._key,s,r.converter!==null,{}).toMutation(n._key,at.exists(!1))]).then(()=>n)}function r_(r,...t){var e,n,s;r=Tt(r);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof t[a]!="object"||so(t[a])||(i=t[a],a++);const u={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(so(t[a])){const g=t[a];t[a]=(e=g.next)===null||e===void 0?void 0:e.bind(g),t[a+1]=(n=g.error)===null||n===void 0?void 0:n.bind(g),t[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let l,d,f;if(r instanceof mt)d=$(r.firestore,et),f=xn(r._key.path),l={next:g=>{t[a]&&t[a](ea(d,r,g))},error:t[a+1],complete:t[a+2]};else{const g=$(r,Rt);d=$(g.firestore,et),f=g._query;const _=new Re(d);l={next:P=>{t[a]&&t[a](new bn(d,_,g,P))},error:t[a+1],complete:t[a+2]},Nh(r._query)}return function(_,P,D,N){const b=new Ys(N),U=new Mo(P,b,D);return _.asyncQueue.enqueueAndForget(async()=>Do(await Sn(_),U)),()=>{b.$a(),_.asyncQueue.enqueueAndForget(async()=>No(await Sn(_),U))}}(ct(d),f,u,l)}function s_(r,t){return bg(ct(r=$(r,et)),so(t)?t:{next:t})}function zr(r,t){return function(n,s){const i=new pt;return n.asyncQueue.enqueueAndForget(async()=>rg(await zo(n),s,i)),i.promise}(ct(r),t)}function ea(r,t,e){const n=e.docs.get(t._key),s=new Re(r);return new Vn(r,s,t._key,n,new Fe(e.hasPendingWrites,e.fromCache),t.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_(r){return Hg(r,{count:$g()})}function Hg(r,t){const e=$(r.firestore,et),n=ct(e),s=Oc(t,(i,a)=>new fl(a,i.aggregateType,i._internalFieldPath));return Vg(n,r._query,s).then(i=>function(u,l,d){const f=new Re(u);return new Bg(l,f,d)}(e,r,i))}class Jg{constructor(t){this.kind="memory",this._onlineComponentProvider=new Ln,t!=null&&t.garbageCollector?this._offlineComponentProvider=t.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=new Pn}toJSON(){return{kind:this.kind}}}class Yg{constructor(t){let e;this.kind="persistent",t!=null&&t.tabManager?(t.tabManager._initialize(t),e=t.tabManager):(e=np(void 0),e._initialize(t)),this._onlineComponentProvider=e._onlineComponentProvider,this._offlineComponentProvider=e._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class Xg{constructor(){this.kind="memoryEager",this._offlineComponentProvider=new Pn}toJSON(){return{kind:this.kind}}}class Zg{constructor(t){this.kind="memoryLru",this._offlineComponentProvider=new Ig(t)}toJSON(){return{kind:this.kind}}}function o_(){return new Xg}function a_(r){return new Zg(r==null?void 0:r.cacheSizeBytes)}function u_(r){return new Jg(r)}function c_(r){return new Yg(r)}class tp{constructor(t){this.forceOwnership=t,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new Ln,this._offlineComponentProvider=new Uo(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes,this.forceOwnership)}}class ep{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(t){this._onlineComponentProvider=new Ln,this._offlineComponentProvider=new fh(this._onlineComponentProvider,t==null?void 0:t.cacheSizeBytes)}}function np(r){return new tp(r==null?void 0:r.forceOwnership)}function l_(){return new ep}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sp{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Je(t)}set(t,e,n){this._verifyNotCommitted();const s=me(t,this._firestore),i=ai(s.converter,e,n),a=ei(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,n);return this._mutations.push(a.toMutation(s._key,at.none())),this}update(t,e,n,...s){this._verifyNotCommitted();const i=me(t,this._firestore);let a;return a=typeof(e=Tt(e))=="string"||e instanceof We?Yo(this._dataReader,"WriteBatch.update",i._key,e,n,s):Jo(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(a.toMutation(i._key,at.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=me(t,this._firestore);return this._mutations=this._mutations.concat(new Nn(e._key,at.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new x(S.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function me(r,t){if((r=Tt(r)).firestore!==t)throw new x(S.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Je(e)}get(e){const n=me(e,this._firestore),s=new Qg(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return O();const a=i[0];if(a.isFoundDocument())return new br(this._firestore,s,a.key,a,n.converter);if(a.isNoDocument())return new br(this._firestore,s,n._key,null,n.converter);throw O()})}set(e,n,s){const i=me(e,this._firestore),a=ai(i.converter,n,s),u=ei(this._dataReader,"Transaction.set",i._key,a,i.converter!==null,s);return this._transaction.set(i._key,u),this}update(e,n,s,...i){const a=me(e,this._firestore);let u;return u=typeof(n=Tt(n))=="string"||n instanceof We?Yo(this._dataReader,"Transaction.update",a._key,n,s,i):Jo(this._dataReader,"Transaction.update",a._key,n),this._transaction.update(a._key,u),this}delete(e){const n=me(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=me(t,this._firestore),n=new Re(this._firestore);return super.get(t).then(s=>new Vn(this._firestore,n,e._key,s._document,new Fe(!1,!1),e.converter))}}function d_(r,t,e){r=$(r,et);const n=Object.assign(Object.assign({},rp),e);return function(i){if(i.maxAttempts<1)throw new x(S.INVALID_ARGUMENT,"Max attempts must be at least 1")}(n),function(i,a,u){const l=new pt;return i.asyncQueue.enqueueAndForget(async()=>{const d=await _h(i);new wg(i.asyncQueue,d,u,a,l).Xa()}),l.promise}(ct(r),s=>t(new ip(r,s)),n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f_(){return new Br("deleteField")}function m_(){return new Qo("serverTimestamp")}function g_(...r){return new $o("arrayUnion",r)}function p_(...r){return new Wo("arrayRemove",r)}function __(r){return new Ho("increment",r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y_(r){return ct(r=$(r,et)),new sp(r,t=>zr(r,t))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I_(r,t){var e;const n=ct(r=$(r,et));if(!n._uninitializedComponentsProvider||((e=n._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offlineKind)==="memory")return Bt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const s=function(a){const u=typeof a=="string"?function(f){try{return JSON.parse(f)}catch(g){throw new x(S.INVALID_ARGUMENT,"Failed to parse JSON: "+(g==null?void 0:g.message))}}(a):a,l=[];if(Array.isArray(u.indexes))for(const d of u.indexes){const f=hc(d,"collectionGroup"),g=[];if(Array.isArray(d.fields))for(const _ of d.fields){const P=ni("setIndexConfiguration",hc(_,"fieldPath"));_.arrayConfig==="CONTAINS"?g.push(new Le(P,2)):_.order==="ASCENDING"?g.push(new Le(P,0)):_.order==="DESCENDING"&&g.push(new Le(P,1))}l.push(new mn(mn.UNKNOWN_ID,f,g,gn.empty()))}return l}(t);return Dg(n,s)}function hc(r,t){if(typeof r[t]!="string")throw new x(S.INVALID_ARGUMENT,"Missing string value for: "+t);return r[t]}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t){this._client=t,this.type="PersistentCacheIndexManager"}}function T_(r){var t;r=$(r,et);const e=dc.get(r);if(e)return e;const n=ct(r);if(((t=n._uninitializedComponentsProvider)===null||t===void 0?void 0:t._offlineKind)!=="persistent")return null;const s=new op(n);return dc.set(r,s),s}function E_(r){Lh(r,!0)}function w_(r){Lh(r,!1)}function v_(r){r._client.verifyNotTerminated(),kg(r._client).then(t=>C("deleting all persistent cache indexes succeeded")).catch(t=>Bt("deleting all persistent cache indexes failed",t))}function Lh(r,t){r._client.verifyNotTerminated(),Ng(r._client,t).then(e=>C(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>Bt(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}const dc=new WeakMap;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(r){var t;const e=(t=ct($(r.firestore,et))._onlineComponents)===null||t===void 0?void 0:t.datastore.serializer;return e===void 0?null:Ks(e,Nt(r._query))._t}function R_(r,t){var e;const n=Oc(t,(i,a)=>new fl(a,i.aggregateType,i._internalFieldPath)),s=(e=ct($(r.firestore,et))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return s===void 0?null:Pl(s,Jc(r._query),n,!0).request}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(t){return na.instance.onExistenceFilterMismatch(t)}}class na{constructor(){this.Ou=new Map}static get instance(){return ms||(ms=new na,function(e){if(bs)throw new Error("a TestingHooksSpi instance is already set");bs=e}(ms)),ms}et(t){this.Ou.forEach(e=>e(t))}onExistenceFilterMismatch(t){const e=Symbol(),n=this.Ou;return n.set(e,t),()=>n.delete(e)}}let ms=null;(function(t,e=!0){(function(s){Cn=s})(Sd),Vd(new bd("firestore",(n,{instanceIdentifier:s,options:i})=>{const a=n.getProvider("app").getImmediate(),u=new et(new Dd(n.getProvider("auth-internal")),new Md(n.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new x(S.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qe(d.options.projectId,f)}(a,s),a);return i=Object.assign({useFetchStreams:e},i),u._setSettings(i),u},"PUBLIC").setMultipleInstances(!0)),ru(iu,"4.6.2",t),ru(iu,"4.6.2","esm2017")})();export{Oh as AbstractUserDataWriter,Sr as AggregateField,Bg as AggregateQuerySnapshot,$e as Bytes,yp as CACHE_SIZE_UNLIMITED,$t as CollectionReference,mt as DocumentReference,Vn as DocumentSnapshot,We as FieldPath,He as FieldValue,et as Firestore,x as FirestoreError,Ko as GeoPoint,qg as LoadBundleTask,op as PersistentCacheIndexManager,Rt as Query,Bn as QueryCompositeFilterConstraint,Ur as QueryConstraint,As as QueryDocumentSnapshot,oi as QueryEndAtConstraint,Gr as QueryFieldFilterConstraint,si as QueryLimitConstraint,ta as QueryOrderByConstraint,bn as QuerySnapshot,ii as QueryStartAtConstraint,Fe as SnapshotMetadata,ut as Timestamp,ip as Transaction,sp as WriteBatch,Ac as _AutoId,_t as _ByteString,qe as _DatabaseId,F as _DocumentKey,lp as _EmptyAppCheckTokenProvider,Cd as _EmptyAuthCredentialsProvider,ot as _FieldPath,P_ as _TestingHooks,$ as _cast,cp as _debugAssert,R_ as _internalAggregationQueryToProtoRunAggregationQueryRequest,A_ as _internalQueryToProtoQueryTarget,dp as _isBase64Available,Bt as _logWarn,Mg as _validateIsNotUsedTogether,n_ as addDoc,jp as aggregateFieldEqual,Kp as aggregateQuerySnapshotEqual,kp as and,p_ as arrayRemove,g_ as arrayUnion,zp as average,vp as clearIndexedDbPersistence,gp as collection,pp as collectionGroup,Fg as connectFirestoreEmulator,$g as count,v_ as deleteAllPersistentCacheIndexes,e_ as deleteDoc,f_ as deleteField,Pp as disableNetwork,w_ as disablePersistentCacheIndexAutoCreation,Og as doc,Cp as documentId,Ep as enableIndexedDbPersistence,wp as enableMultiTabIndexedDbPersistence,Rp as enableNetwork,E_ as enablePersistentCacheIndexAutoCreation,Up as endAt,Bp as endBefore,ct as ensureFirestoreConfigured,zr as executeWrite,Hg as getAggregateFromServer,i_ as getCountFromServer,$p as getDoc,Wp as getDocFromCache,Hp as getDocFromServer,Jp as getDocs,Yp as getDocsFromCache,Xp as getDocsFromServer,Tp as getFirestore,T_ as getPersistentCacheIndexManager,__ as increment,Ip as initializeFirestore,Fp as limit,Op as limitToLast,Vp as loadBundle,o_ as memoryEagerGarbageCollector,u_ as memoryLocalCache,a_ as memoryLruGarbageCollector,bp as namedQuery,r_ as onSnapshot,s_ as onSnapshotsInSync,Np as or,Mp as orderBy,c_ as persistentLocalCache,l_ as persistentMultipleTabManager,np as persistentSingleTabManager,xp as query,wh as queryEqual,_p as refEqual,d_ as runTransaction,m_ as serverTimestamp,Zp as setDoc,I_ as setIndexConfiguration,up as setLogLevel,Qp as snapshotEqual,qp as startAfter,Lp as startAt,Gp as sum,Sp as terminate,t_ as updateDoc,Ap as waitForPendingWrites,Dp as where,y_ as writeBatch};
