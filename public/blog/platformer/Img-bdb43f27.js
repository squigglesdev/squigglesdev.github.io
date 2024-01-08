import{C as y,T as S,U as E,W as P,S as R,X as v,t as h,u,R as C,Y as A,B as _,Z as b,i as f,_ as x,v as d}from"./makeScene2D-b5ce48fa.js";function L(n){if(!w()||n.startsWith("/cors-proxy/"))return n;const e=new URL(window.location.toString());try{const t=new URL(n,e);if(!t.protocol.startsWith("http")||e.host===t.host||!O(t.host))return n}catch{return n}return`/cors-proxy/${encodeURIComponent(n)}`}function O(n){const e=D();if(e.length===0)return!0;for(const t of e)if(t.toLowerCase().trim()===n)return!0;return!1}function w(){return!1}let p;function D(){return{}.VITEST!=="true"&&p?[...p]:(p=function(){if(!w()||!{VITE_MC_PROXY_ENABLED:"false",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1})return[];const e={}.VITE_MC_PROXY_ALLOW_LIST??"[]",t=JSON.parse(e);Array.isArray(t)||y().error("Parsed Allow List expected to be an Array, but is "+typeof t);const o=[];for(const r of t){if(typeof r!="string"){y().warn("Unexpected Value in Allow List: "+r+". Expected a String. Skipping.");continue}o.push(r)}return o}(),[...p])}S(z,P());function*z(...n){for(const e of n)yield e;yield*E(!1,...n)}var g=globalThis&&globalThis.__decorate||function(n,e,t,o){var r=arguments.length,a=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(a=(r<3?s(a):r>3?s(e,t,a):s(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};class m extends R{constructor(e){super(e)}getPath(){return this.createPath()}getRipplePath(){return this.createPath(this.rippleSize())}createPath(e=0){const t=new Path2D,o=this.startAngle()*v,r=this.endAngle()*v,a=this.size().scale(.5),s=this.closed();return s&&t.moveTo(0,0),t.ellipse(0,0,a.x+e,a.y+e,0,o,r),s&&t.closePath(),t}}g([h(0),u()],m.prototype,"startAngle",void 0);g([h(360),u()],m.prototype,"endAngle",void 0);g([h(!1),u()],m.prototype,"closed",void 0);var c=globalThis&&globalThis.__decorate||function(n,e,t,o){var r=arguments.length,a=r<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,t,o);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(a=(r<3?s(a):r>3?s(e,t,a):s(e,t))||a);return r>3&&a&&Object.defineProperty(e,t,a),a};class i extends C{constructor(e){super(e)}desiredSize(){const e=super.desiredSize();if(e.x===null&&e.y===null){const t=this.image();return{x:t.naturalWidth,y:t.naturalHeight}}return e}image(){const e=L(this.src()),t=this.view().assetHash();let o=i.pool[e];return o||(o=document.createElement("img"),o.crossOrigin="anonymous",o.src=`${e}?${t}`,i.pool[e]=o),o.complete||A.collectPromise(new Promise((r,a)=>{o.addEventListener("load",r),o.addEventListener("error",a)})),o}imageCanvas(){const e=document.createElement("canvas").getContext("2d",{willReadFrequently:!0});if(!e)throw new Error("Could not create an image canvas");return e}filledImageCanvas(){const e=this.imageCanvas(),t=this.image();return e.canvas.width=t.naturalWidth,e.canvas.height=t.naturalHeight,e.imageSmoothingEnabled=this.smoothing(),e.drawImage(t,0,0),e}draw(e){this.drawShape(e),this.clip()&&e.clip(this.getPath());const t=this.alpha();if(t>0){const o=_.fromSizeCentered(this.computedSize());e.save(),t<1&&(e.globalAlpha*=t),e.imageSmoothingEnabled=this.smoothing(),b(e,this.image(),o),e.restore()}this.drawChildren(e)}applyFlex(){super.applyFlex();const e=this.image();this.element.style.aspectRatio=(this.ratio()??e.naturalWidth/e.naturalHeight).toString()}getColorAtPoint(e){const t=this.computedSize(),o=this.naturalSize(),r=new f(e).add(this.computedSize().scale(.5)).mul(o.div(t).safe);return this.getPixelColor(r)}naturalSize(){const e=this.image();return new f(e.naturalWidth,e.naturalHeight)}getPixelColor(e){const t=this.filledImageCanvas(),o=new f(e),r=t.getImageData(o.x,o.y,1,1).data;return new x({r:r[0],g:r[1],b:r[2],a:r[3]/255})}collectAsyncResources(){super.collectAsyncResources(),this.image()}}i.pool={};c([u()],i.prototype,"src",void 0);c([h(1),u()],i.prototype,"alpha",void 0);c([h(!0),u()],i.prototype,"smoothing",void 0);c([d()],i.prototype,"image",null);c([d()],i.prototype,"imageCanvas",null);c([d()],i.prototype,"filledImageCanvas",null);c([d()],i.prototype,"naturalSize",null);export{m as C,i as I,z as a};
