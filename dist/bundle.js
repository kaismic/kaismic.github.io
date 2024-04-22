(()=>{"use strict";function t(t){return"number"==typeof t}function n(t){return"string"==typeof t}function e(t){return"boolean"==typeof t}function r(t){return"[object Object]"===Object.prototype.toString.call(t)}function o(t){return Math.abs(t)}function i(t){return Math.sign(t)}function c(t,n){return o(t-n)}function s(t){return f(t).map(Number)}function u(t){return t[a(t)]}function a(t){return Math.max(0,t.length-1)}function l(t,n){return n===a(t)}function d(t,n=0){return Array.from(Array(t),((t,e)=>n+e))}function f(t){return Object.keys(t)}function p(t,n){return[t,n].reduce(((t,n)=>(f(n).forEach((e=>{const o=t[e],i=n[e],c=r(o)&&r(i);t[e]=c?p(o,i):i})),t)),{})}function m(t,n){return void 0!==n.MouseEvent&&t instanceof n.MouseEvent}function g(){let t=[];const n={add:function(e,r,o,i={passive:!0}){let c;if("addEventListener"in e)e.addEventListener(r,o,i),c=()=>e.removeEventListener(r,o,i);else{const t=e;t.addListener(o),c=()=>t.removeListener(o)}return t.push(c),n},clear:function(){t=t.filter((t=>t()))}};return n}function h(t=0,n=0){const e=o(t-n);function r(n){return n<t}function i(t){return t>n}function c(t){return r(t)||i(t)}return{length:e,max:n,min:t,constrain:function(e){return c(e)?r(e)?t:n:e},reachedAny:c,reachedMax:i,reachedMin:r,removeOffset:function(t){return e?t-e*Math.ceil((t-n)/e):t}}}function x(t,n,e){const{constrain:r}=h(0,t),i=t+1;let c=s(n);function s(t){return e?o((i+t)%i):r(t)}function u(){return c}function a(){return x(t,u(),e)}const l={get:u,set:function(t){return c=s(t),l},add:function(t){return a().set(u()+t)},clone:a};return l}function y(t,n,r,s,u,a,l,d,f,p,x,y,v,b,w,S,E,L,A){const{cross:D,direction:M}=t,I=["INPUT","SELECT","TEXTAREA"],T={passive:!1},N=g(),O=g(),P=h(50,225).constrain(b.measure(20)),k={mouse:300,touch:400},z={mouse:500,touch:600},F=w?43:25;let H=!1,C=0,_=0,B=!1,V=!1,R=!1,j=!1;function q(t){const n=a.readPoint(t),e=a.readPoint(t,D),r=c(n,C),o=c(e,_);if(!V&&!j){if(!t.cancelable)return W(t);if(V=r>o,!V)return W(t)}const i=a.pointerMove(t);r>S&&(R=!0),p.useFriction(.3).useDuration(1),d.start(),u.add(M(i)),t.preventDefault()}function W(t){const n=x.byDistance(0,!1).index!==y.get(),e=a.pointerUp(t)*(w?z:k)[j?"mouse":"touch"],r=function(t,n){const e=y.add(-1*i(t)),r=x.byDistance(t,!w).distance;return w||o(t)<P?r:E&&n?.5*r:x.byIndex(e.get(),0).distance}(M(e),n),s=function(t,n){if(0===t||0===n)return 0;if(o(t)<=o(n))return 0;const e=c(o(t),o(n));return o(e/t)}(e,r),u=F-10*s,l=L+s/50;V=!1,B=!1,O.clear(),p.useDuration(u).useFriction(l),f.distance(r,!w),j=!1,v.emit("pointerUp")}function G(t){R&&(t.stopPropagation(),t.preventDefault(),R=!1)}return{init:function(t){if(!A)return;function o(o){(e(A)||A(t,o))&&function(t){const e=m(t,s);j=e,R=w&&e&&!t.buttons&&H,H=c(u.get(),l.get())>=2,e&&0!==t.button||function(t){const n=t.nodeName||"";return I.includes(n)}(t.target)||(B=!0,a.pointerDown(t),p.useFriction(0).useDuration(0),u.set(l),function(){const t=j?r:n;O.add(t,"touchmove",q,T).add(t,"touchend",W).add(t,"mousemove",q,T).add(t,"mouseup",W)}(),C=a.readPoint(t),_=a.readPoint(t,D),v.emit("pointerDown"))}(o)}const i=n;N.add(i,"dragstart",(t=>t.preventDefault()),T).add(i,"touchmove",(()=>{}),T).add(i,"touchend",(()=>{})).add(i,"touchstart",o).add(i,"mousedown",o).add(i,"touchcancel",W).add(i,"contextmenu",W).add(i,"click",G,!0)},pointerDown:function(){return B},destroy:function(){N.clear(),O.clear()}}}function v(t,n){let e,r;function i(t){return t.timeStamp}function c(e,r){const o="client"+("x"===(r||t.scroll)?"X":"Y");return(m(e,n)?e:e.touches[0])[o]}return{pointerDown:function(t){return e=t,r=t,c(t)},pointerMove:function(t){const n=c(t)-c(r),o=i(t)-i(e)>170;return r=t,o&&(e=t),n},pointerUp:function(t){if(!e||!r)return 0;const n=c(r)-c(e),s=i(t)-i(e),u=i(t)-i(r)>170,a=n/s;return s&&!u&&o(a)>.1?a:0},readPoint:c}}function b(t,n,r,i,c,s,u){let a,l,d=[],f=!1;function p(t){return c.measureSize(u.measure(t))}return{init:function(c){s&&(l=p(t),d=i.map(p),a=new ResizeObserver((u=>{f||(e(s)||s(c,u))&&function(e){for(const s of e){const e=s.target===t,u=i.indexOf(s.target),a=e?l:d[u];if(o(p(e?t:i[u])-a)>=.5){r.requestAnimationFrame((()=>{c.reInit(),n.emit("resize")}));break}}}(u)})),[t].concat(i).forEach((t=>a.observe(t))))},destroy:function(){a&&a.disconnect(),f=!0}}}function w(t,n,e,r,i){const c=i.measure(10),s=i.measure(50),u=h(.1,.99);let a=!1;return{constrain:function(i){if(a||!t.reachedAny(e.get())||!t.reachedAny(n.get()))return;const l=t.reachedMin(n.get())?"min":"max",d=o(t[l]-n.get()),f=e.get()-n.get(),p=u.constrain(d/s);e.subtract(f*p),!i&&o(f)<c&&(e.set(t.constrain(e.get())),r.useDuration(25).useBaseFriction())},toggleActive:function(t){a=!t}}}function S(t,n,e,r){const o=n.min+.1,i=n.max+.1,{reachedMin:c,reachedMax:s}=h(o,i);return{loop:function(n){if(!function(t){return 1===t?s(e.get()):-1===t&&c(e.get())}(n))return;const o=t*(-1*n);r.forEach((t=>t.add(o)))}}}function E(n){let e=n;function r(n){return t(n)?n:n.get()}return{get:function(){return e},set:function(t){e=r(t)},add:function(t){e+=r(t)},subtract:function(t){e-=r(t)}}}function L(t,n){const e="x"===t.scroll?function(t){return`translate3d(${t}px,0px,0px)`}:function(t){return`translate3d(0px,${t}px,0px)`},r=n.style;let o=!1;return{clear:function(){o||(r.transform="",n.getAttribute("style")||n.removeAttribute("style"))},to:function(n){o||(r.transform=e(t.direction(n)))},toggleActive:function(t){o=!t}}}function A(t,n,e,r,o,i,c,u,a){const l=s(o),d=s(o).reverse(),f=function(){const t=c[0];return g(m(d,t),e,!1)}().concat(function(){const t=n-c[0]-1;return g(m(l,t),-e,!0)}());function p(t,n){return t.reduce(((t,n)=>t-o[n]),n)}function m(t,n){return t.reduce(((t,e)=>p(t,n)>0?t.concat([e]):t),[])}function g(o,c,s){const l=function(t){return i.map(((e,o)=>({start:e-r[o]+.5+t,end:e+n-.5+t})))}(c);return o.map((n=>{const r=s?0:-e,o=s?e:0,i=s?"end":"start",c=l[n][i];return{index:n,loopPoint:c,slideLocation:E(-1),translate:L(t,a[n]),target:()=>u.get()>c?r:o}}))}return{canLoop:function(){return f.every((({index:t})=>p(l.filter((n=>n!==t)),n)<=.1))},clear:function(){f.forEach((t=>t.translate.clear()))},loop:function(){f.forEach((t=>{const{target:n,translate:e,slideLocation:r}=t,o=n();o!==r.get()&&(e.to(o),r.set(o))}))},loopPoints:f}}function D(t,n,r){let o,i=!1;return{init:function(c){r&&(o=new MutationObserver((t=>{i||(e(r)||r(c,t))&&function(t){for(const e of t)if("childList"===e.type){c.reInit(),n.emit("slidesChanged");break}}(t)})),o.observe(t,{childList:!0}))},destroy:function(){o&&o.disconnect(),i=!0}}}function M(e,r,p,m,M,I,T){const{align:N,axis:O,direction:P,startIndex:k,loop:z,duration:F,dragFree:H,dragThreshold:C,inViewThreshold:_,slidesToScroll:B,skipSnaps:V,containScroll:R,watchResize:j,watchSlides:q,watchDrag:W}=I,G={measure:function(t){const{offsetTop:n,offsetLeft:e,offsetWidth:r,offsetHeight:o}=t;return{top:n,right:e+r,bottom:n+o,left:e,width:r,height:o}}},U=G.measure(r),$=p.map(G.measure),Q=function(t,n){const e="rtl"===n,r="y"===t,o=!r&&e?-1:1;return{scroll:r?"y":"x",cross:r?"x":"y",startEdge:r?"top":e?"right":"left",endEdge:r?"bottom":e?"left":"right",measureSize:function(t){const{height:n,width:e}=t;return r?n:e},direction:function(t){return t*o}}}(O,P),X=Q.measureSize(U),Y=function(t){return{measure:function(n){return t*(n/100)}}}(X),J=function(t,e){const r={start:function(){return 0},center:function(t){return o(t)/2},end:o};function o(t){return e-t}return{measure:function(o,i){return n(t)?r[t](o):t(e,o,i)}}}(N,X),K=!z&&!!R,Z=z||!!R,{slideSizes:tt,slideSizesWithGaps:nt,startGap:et,endGap:rt}=function(t,n,e,r,i,c){const{measureSize:s,startEdge:a,endEdge:d}=t,f=e[0]&&i,p=function(){if(!f)return 0;const t=e[0];return o(n[a]-t[a])}(),m=function(){if(!f)return 0;const t=c.getComputedStyle(u(r));return parseFloat(t.getPropertyValue(`margin-${d}`))}(),g=e.map(s),h=e.map(((t,n,e)=>{const r=!n,o=l(e,n);return r?g[n]+p:o?g[n]+m:e[n+1][a]-t[a]})).map(o);return{slideSizes:g,slideSizesWithGaps:h,startGap:p,endGap:m}}(Q,U,$,p,Z,M),ot=function(n,e,r,i,c,l,d,f,p){const{startEdge:m,endEdge:g,direction:h}=n,x=t(r);return{groupSlides:function(t){return x?function(t,n){return s(t).filter((t=>t%n==0)).map((e=>t.slice(e,e+n)))}(t,r):function(t){return t.length?s(t).reduce(((n,r,s)=>{const x=u(n)||0,y=0===x,v=r===a(t),b=c[m]-l[x][m],w=c[m]-l[r][g],S=!i&&y?h(d):0,E=o(w-(!i&&v?h(f):0)-(b+S));return s&&E>e+p&&n.push(r),v&&n.push(t.length),n}),[]).map(((n,e,r)=>{const o=Math.max(r[e-1]||0);return t.slice(o,n)})):[]}(t)}}}(Q,X,B,z,U,$,et,rt,2),{snaps:it,snapsAligned:ct}=function(t,n,e,r,i){const{startEdge:c,endEdge:s}=t,{groupSlides:a}=i,l=a(r).map((t=>u(t)[s]-t[0][c])).map(o).map(n.measure),d=r.map((t=>e[c]-t[c])).map((t=>-o(t))),f=a(d).map((t=>t[0])).map(((t,n)=>t+l[n]));return{snaps:d,snapsAligned:f}}(Q,J,U,$,ot),st=-u(it)+u(nt),{snapsContained:ut,scrollContainLimit:at}=function(t,n,e,r,o){const i=h(-n+t,0),s=e.map(((t,n)=>{const{min:r,max:o}=i,c=i.constrain(t),s=!n,u=l(e,n);return s?o:u||d(r,c)?r:d(o,c)?o:c})).map((t=>parseFloat(t.toFixed(3)))),a=function(){const t=s[0],n=u(s);return h(s.lastIndexOf(t),s.indexOf(n)+1)}();function d(t,n){return c(t,n)<1}return{snapsContained:function(){if(n<=t+2)return[i.max];if("keepSnaps"===r)return s;const{min:e,max:o}=a;return s.slice(e,o)}(),scrollContainLimit:a}}(X,st,ct,R),lt=K?ut:ct,{limit:dt}=function(t,n,e){const r=n[0];return{limit:h(e?r-t:u(n),r)}}(st,lt,z),ft=x(a(lt),k,z),pt=ft.clone(),mt=s(p),gt=function(t,n,e,r){const i=g(),c=1e3/60;let s=null,u=0,a=0;function l(t){if(!a)return;s||(s=t);const i=t-s;for(s=t,u+=i;u>=c;)e(),u-=c;const d=o(u/c);r(d),a&&n.requestAnimationFrame(l)}function d(){n.cancelAnimationFrame(a),s=null,u=0,a=0}return{init:function(){i.add(t,"visibilitychange",(()=>{t.hidden&&(s=null,u=0)}))},destroy:function(){d(),i.clear()},start:function(){a||(a=n.requestAnimationFrame(l))},stop:d,update:e,render:r}}(m,M,(()=>(({dragHandler:t,scrollBody:n,scrollBounds:e,options:{loop:r}})=>{r||e.constrain(t.pointerDown()),n.seek()})(It)),(t=>(({scrollBody:t,translate:n,location:e,offsetLocation:r,scrollLooper:o,slideLooper:i,dragHandler:c,animation:s,eventHandler:u,options:{loop:a}},l)=>{const d=t.velocity(),f=t.settled();f&&!c.pointerDown()&&(s.stop(),u.emit("settle")),f||u.emit("scroll"),r.set(e.get()-d+d*l),a&&(o.loop(t.direction()),i.loop()),n.to(r.get())})(It,t))),ht=lt[ft.get()],xt=E(ht),yt=E(ht),vt=E(ht),bt=function(t,n,e,r,c){let s=0,u=0,a=r,l=.68,d=t.get(),f=0;function p(t){return a=t,g}function m(t){return l=t,g}const g={direction:function(){return u},duration:function(){return a},velocity:function(){return s},seek:function(){const n=e.get()-t.get();let r=0;return a?(s+=n/a,s*=l,d+=s,t.add(s),r=d-f):(s=0,t.set(e),r=n),u=i(r),f=d,g},settled:function(){return o(e.get()-n.get())<.001},useBaseFriction:function(){return m(.68)},useBaseDuration:function(){return p(r)},useFriction:m,useDuration:p};return g}(xt,yt,vt,F),wt=function(t,n,e,r,c){const{reachedAny:s,removeOffset:a,constrain:l}=r;function d(t){return t.concat().sort(((t,n)=>o(t)-o(n)))[0]}function f(n,r){const o=[n,n+e,n-e];if(!t)return o[0];if(!r)return d(o);const c=o.filter((t=>i(t)===r));return c.length?d(c):u(o)-e}return{byDistance:function(e,r){const i=c.get()+e,{index:u,distance:d}=function(e){const r=t?a(e):l(e),i=n.map(((t,n)=>({diff:f(t-r,0),index:n}))).sort(((t,n)=>o(t.diff)-o(n.diff))),{index:c}=i[0];return{index:c,distance:r}}(i),p=!t&&s(i);return!r||p?{index:u,distance:e}:{index:u,distance:e+f(n[u]-d,0)}},byIndex:function(t,e){return{index:t,distance:f(n[t]-c.get(),e)}},shortcut:f}}(z,lt,st,dt,vt),St=function(t,n,e,r,o,i,c){function s(o){const s=o.distance,u=o.index!==n.get();i.add(s),s&&(r.duration()?t.start():(t.update(),t.render(1),t.update())),u&&(e.set(n.get()),n.set(o.index),c.emit("select"))}return{distance:function(t,n){s(o.byDistance(t,n))},index:function(t,e){const r=n.clone().set(t);s(o.byIndex(r.get(),e))}}}(gt,ft,pt,bt,wt,vt,T),Et=function(t){const{max:n,length:e}=t;return{get:function(t){return e?(t-n)/-e:0}}}(dt),Lt=g(),At=function(t,n,e,r){const o={};let i,c=null,s=null,u=!1;return{init:function(){i=new IntersectionObserver((t=>{u||(t.forEach((t=>{const e=n.indexOf(t.target);o[e]=t})),c=null,s=null,e.emit("slidesInView"))}),{root:t.parentElement,threshold:r}),n.forEach((t=>i.observe(t)))},destroy:function(){i&&i.disconnect(),u=!0},get:function(t=!0){if(t&&c)return c;if(!t&&s)return s;const n=function(t){return f(o).reduce(((n,e)=>{const r=parseInt(e),{isIntersecting:i}=o[r];return(t&&i||!t&&!i)&&n.push(r),n}),[])}(t);return t&&(c=n),t||(s=n),n}}}(r,p,T,_),{slideRegistry:Dt}=function(t,n,e,r,o,i){const{groupSlides:c}=o,{min:s,max:f}=r;return{slideRegistry:function(){const r=c(i),o=!t||"keepSnaps"===n;return 1===e.length?[i]:o?r:r.slice(s,f).map(((t,n,e)=>{const r=!n,o=l(e,n);return r?d(u(e[0])+1):o?d(a(i)-u(e)[0]+1,u(e)[0]):t}))}()}}(K,R,lt,at,ot,mt),Mt=function(n,e,r,o,i,c){let s=0;function u(t){"Tab"===t.code&&(s=(new Date).getTime())}function a(u){c.add(u,"focus",(()=>{if((new Date).getTime()-s>10)return;n.scrollLeft=0;const c=e.indexOf(u),a=r.findIndex((t=>t.includes(c)));t(a)&&(i.useDuration(0),o.index(a,0))}),{passive:!0,capture:!0})}return{init:function(){c.add(document,"keydown",u,!1),e.forEach(a)}}}(e,p,Dt,St,bt,Lt),It={ownerDocument:m,ownerWindow:M,eventHandler:T,containerRect:U,slideRects:$,animation:gt,axis:Q,dragHandler:y(Q,e,m,M,vt,v(Q,M),xt,gt,St,bt,wt,ft,T,Y,H,C,V,.68,W),eventStore:Lt,percentOfView:Y,index:ft,indexPrevious:pt,limit:dt,location:xt,offsetLocation:yt,options:I,resizeHandler:b(r,T,M,p,Q,j,G),scrollBody:bt,scrollBounds:w(dt,yt,vt,bt,Y),scrollLooper:S(st,dt,yt,[xt,yt,vt]),scrollProgress:Et,scrollSnapList:lt.map(Et.get),scrollSnaps:lt,scrollTarget:wt,scrollTo:St,slideLooper:A(Q,X,st,tt,nt,it,lt,yt,p),slideFocus:Mt,slidesHandler:D(r,T,q),slidesInView:At,slideIndexes:mt,slideRegistry:Dt,slidesToScroll:ot,target:vt,translate:L(Q,r)};return It}const I={align:"center",axis:"x",container:null,slides:null,containScroll:"trimSnaps",direction:"ltr",slidesToScroll:1,inViewThreshold:0,breakpoints:{},dragFree:!1,dragThreshold:10,loop:!1,skipSnaps:!1,duration:25,startIndex:0,active:!0,watchDrag:!0,watchResize:!0,watchSlides:!0};function T(t){function n(t,n){return p(t,n||{})}return{mergeOptions:n,optionsAtMedia:function(e){const r=e.breakpoints||{},o=f(r).filter((n=>t.matchMedia(n).matches)).map((t=>r[t])).reduce(((t,e)=>n(t,e)),{});return n(e,o)},optionsMediaQueries:function(n){return n.map((t=>f(t.breakpoints||{}))).reduce(((t,n)=>t.concat(n)),[]).map(t.matchMedia)}}}function N(t,e,r){const o=t.ownerDocument,i=o.defaultView,c=T(i),s=function(t){let n=[];return{init:function(e,r){return n=r.filter((({options:n})=>!1!==t.optionsAtMedia(n).active)),n.forEach((n=>n.init(e,t))),r.reduce(((t,n)=>Object.assign(t,{[n.name]:n})),{})},destroy:function(){n=n.filter((t=>t.destroy()))}}}(c),u=g(),a=function(){const t={};let n;function e(n){return t[n]||[]}const r={init:function(t){n=t},emit:function(t){return e(t).forEach((e=>e(n,t))),r},off:function(n,o){return t[n]=e(n).filter((t=>t!==o)),r},on:function(n,o){return t[n]=e(n).concat([o]),r}};return r}(),{mergeOptions:l,optionsAtMedia:d,optionsMediaQueries:f}=c,{on:p,off:m,emit:h}=a,x=P;let y,v,b,w,S=!1,E=l(I,N.globalOptions),L=l(E),A=[];function D(n){const e=M(t,b,w,o,i,n,a);return n.loop&&!e.slideLooper.canLoop()?D(Object.assign({},n,{loop:!1})):e}function O(e,r){S||(E=l(E,e),L=d(E),A=r||A,function(){const{container:e,slides:r}=L,o=n(e)?t.querySelector(e):e;b=o||t.children[0];const i=n(r)?b.querySelectorAll(r):r;w=[].slice.call(i||b.children)}(),y=D(L),f([E,...A.map((({options:t})=>t))]).forEach((t=>u.add(t,"change",P))),L.active&&(y.translate.to(y.location.get()),y.animation.init(),y.slidesInView.init(),y.slideFocus.init(),y.eventHandler.init(H),y.resizeHandler.init(H),y.slidesHandler.init(H),y.options.loop&&y.slideLooper.loop(),b.offsetParent&&w.length&&y.dragHandler.init(H),v=s.init(H,A)))}function P(t,n){const e=F();k(),O(l({startIndex:e},t),n),a.emit("reInit")}function k(){y.dragHandler.destroy(),y.eventStore.clear(),y.translate.clear(),y.slideLooper.clear(),y.resizeHandler.destroy(),y.slidesHandler.destroy(),y.slidesInView.destroy(),y.animation.destroy(),s.destroy(),u.clear()}function z(t,n,e){L.active&&!S&&(y.scrollBody.useBaseFriction().useDuration(!0===n?0:L.duration),y.scrollTo.index(t,e||0))}function F(){return y.index.get()}const H={canScrollNext:function(){return y.index.add(1).get()!==F()},canScrollPrev:function(){return y.index.add(-1).get()!==F()},containerNode:function(){return b},internalEngine:function(){return y},destroy:function(){S||(S=!0,u.clear(),k(),a.emit("destroy"))},off:m,on:p,emit:h,plugins:function(){return v},previousScrollSnap:function(){return y.indexPrevious.get()},reInit:x,rootNode:function(){return t},scrollNext:function(t){z(y.index.add(1).get(),t,-1)},scrollPrev:function(t){z(y.index.add(-1).get(),t,1)},scrollProgress:function(){return y.scrollProgress.get(y.location.get())},scrollSnapList:function(){return y.scrollSnapList},scrollTo:z,selectedScrollSnap:F,slideNodes:function(){return w},slidesInView:function(){return y.slidesInView.get()},slidesNotInView:function(){return y.slidesInView.get(!1)}};return O(e,r),setTimeout((()=>a.emit("init")),0),H}function O(t){t.rootNode().querySelector(".embla__page").innerText=t.selectedScrollSnap()+1+"/"+t.slideNodes().length}N.globalOptions=void 0;const P={loop:!1,duration:20};Array.from(document.getElementsByClassName("embla__carousel")).map(((t,n,e)=>{const r=N(t,P);return t.querySelector(".embla__prev").addEventListener("click",r.scrollPrev),t.querySelector(".embla__next").addEventListener("click",r.scrollNext),O(r),r.on("select",O),r})),Array.from(document.getElementsByClassName("project__desc-grid")).map(((t,n,e)=>{new ResizeObserver((function(n,e){const r=t.querySelector(".project__skills-container").offsetWidth;Array.from(t.getElementsByClassName("project__skills-item")).map(((t,n,e)=>{t.style.textWrap="nowrap";const o=t.parentNode,i=o.computedStyleMap();t.offsetWidth<=r?o.style.removeProperty("width"):(t.style.removeProperty("text-wrap"),o.style.width=t.offsetWidth+i.get("padding-left").value+i.get("padding-right").value+"px")}))})).observe(t)}))})(),customElements.define("about-me-item",class extends HTMLDivElement{constructor(){super()}connectedCallback(){this.className="w-full sm:w-1/2 lg:w-1/3";let t=document.createElement("div");t.className="flex max-w-64 w-full mx-auto items-center";let n=document.createElement("img");n.className="w-8 h-8 mr-8 fill-zinc-600",n.src=this.getAttribute("icon-src"),t.appendChild(n);let e=document.createElement("div"),r=document.createElement("div");r.className="font-Roboto text-2xl font-bold text-zinc-600 w-fit text-left",r.innerHTML=this.getAttribute("label"),e.appendChild(r);let o=document.createElement("div");o.className="font-Roboto text-lg font-normal text-zinc-600 w-fit text-left",o.innerHTML=this.getAttribute("value"),e.appendChild(o),t.appendChild(e),this.appendChild(t)}},{extends:"div"});