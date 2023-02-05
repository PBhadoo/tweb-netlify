(()=>{"use strict";(()=>{if("undefined"!=typeof __webpack_require__){var e=__webpack_require__.u,t=__webpack_require__.e,r={},i={};__webpack_require__.u=function(t){return e(t)+(r.hasOwnProperty(t)?"?"+r[t]:"")},__webpack_require__.e=function(n){return t(n).catch((function(t){var a=i.hasOwnProperty(n)?i[n]:999999;if(a<1){var o=e(n);throw t.message="Loading chunk "+n+" failed after 999999 retries.\n("+o+")",t.request=o,t}return new Promise((function(e){setTimeout((function(){var t=Date.now();r[n]=t,i[n]=a-1,e(__webpack_require__.e(n))}),3e3)}))}))}}})();const e="undefined"!=typeof window?window:self,t=navigator?navigator.userAgent:null,r=(navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),navigator.userAgent.toLowerCase().indexOf("android"),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&e.MSStream,!!("safari"in e)||!(!t||!(/\b(iPad|iPhone|iPod)\b/.test(t)||t.match("Safari")&&!t.match("Chrome"))));let i;if(navigator.userAgent.toLowerCase().indexOf("firefox"),(void 0===navigator.maxTouchPoints||navigator.maxTouchPoints>0)&&navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i),r)try{i=+navigator.userAgent.match(/Version\/(.+?) /)[1]>=14}catch(e){i=!1}else i=!0;const n=i,a="undefined"!=typeof ImageBitmap;const o=[[[16219713,13335381],[16757049,16168585],[16765248,16764327],[16768889,16768965]],[[16219713,10771e3],[16757049,14653547],[16765248,15577475],[16768889,16040864]],[[16219713,7354903],[16757049,11233085],[16765248,12812110],[16768889,14194279]],[[16219713,4858889],[16757049,8207886],[16765248,9852201],[16768889,11100983]],[[16219713,2101002],[16757049,4270372],[16765248,5848375],[16768889,6505791]]],s=e=>Math.round(255*Math.min(Math.max(e,0),1));importScripts("rlottie-wasm.js");const h=self.Module;class d{constructor(e,t,r,i){this.reqId=e,this.width=t,this.height=r,this.raw=i}init(e,t){if(!this.dead){this.fps=Math.max(1,Math.min(60,t||60));try{this.handle=c.Api.init(),this.stringOnWasmHeap=allocate(intArrayFromString(e),"i8",0),this.frameCount=c.Api.loadFromData(this.handle,this.stringOnWasmHeap),c.Api.resize(this.handle,this.width,this.height),m(["loaded",this.reqId,this.frameCount,this.fps]),!this.raw&&a&&(this.imageData=new ImageData(this.width,this.height))}catch(e){console.error("init RLottieItem error:",e),m(["error",this.reqId,e])}}}render(e,t){if(!this.dead&&void 0!==this.handle&&!(this.frameCount<e||e<0))try{c.Api.render(this.handle,e);const r=c.Api.buffer(this.handle),i=h.HEAPU8.subarray(r,r+this.width*this.height*4);this.imageData?(this.imageData.data.set(i),createImageBitmap(this.imageData).then((t=>{m(["frame",this.reqId,e,t],[t])}))):(t?t.set(i):t=new Uint8ClampedArray(i),m(["frame",this.reqId,e,t],[t.buffer]))}catch(e){console.error("Render error:",e),this.dead=!0,m(["error",this.reqId,e])}}destroy(){this.dead=!0,void 0!==this.handle&&c.Api.destroy(this.handle)}}const c=new class{constructor(){this.Api={}}initApi(){this.Api={init:h.cwrap("lottie_init","",[]),destroy:h.cwrap("lottie_destroy","",["number"]),resize:h.cwrap("lottie_resize","",["number","number","number"]),buffer:h.cwrap("lottie_buffer","number",["number"]),render:h.cwrap("lottie_render","",["number","number"]),loadFromData:h.cwrap("lottie_load_from_data","number",["number","number"])}}init(){this.initApi(),m(["ready"])}};h.onRuntimeInitialized=function(){c.init()};const u={},f={loadFromData:function(e,t,r,i,n,a){const h=u[e]=new d(e,r,i,a);(function(e){return function(e,t){return new Promise((t=>{const r=new FileReader;r.addEventListener("loadend",(e=>{t(e.target.result)})),r.readAsText(e)}))}(e)})(t).then((t=>{try{if("number"==typeof n&&n>=1&&n<=5){const e=JSON.parse(t);(function(e,t){const r=o[Math.max(t-1,0)],i=e=>{switch(e.ty){case"st":case"fl":(e=>{const t=e.c.k,i=s(t[2])|s(t[1])<<8|s(t[0])<<16,n=r.find((e=>e[0]===i));n&&(t[0]=(n[1]>>16&255)/255,t[1]=(n[1]>>8&255)/255,t[2]=(255&n[1])/255)})(e)}e.hasOwnProperty("it")&&n(e.it)},n=e=>{for(const t of e)i(t)};try{for(const t of e.layers)if(t.shapes)for(const e of t.shapes)e.it?n(e.it):i(e)}catch(r){console.warn("cant apply replacements",r,e,t)}})(e,n),t=JSON.stringify(e)}const e=t.match(/"fr":\s*?(\d+?),/),r=+(null==e?void 0:e[1])||60;h.init(t,r)}catch(r){console.error("Invalid file for sticker:",t),m(["error",e,r])}}))},destroy:function(e){const t=u[e];t&&(t.destroy(),delete u[e])},renderFrame:function(e,t,r){u[e].render(t,r)}};function m(e,t){postMessage({queryMethodListener:e.shift(),queryMethodArguments:e},n?t:void 0)}onmessage=function(e){f[e.data.queryMethod].apply(f,e.data.queryMethodArguments)}})();
//# sourceMappingURL=508.9a06d3f8ff1a84db1e4a.chunk.js.map