(()=>{"use strict";var e,t,n={410:(e,t,n)=>{n.d(t,{GO:()=>r,ZP:()=>i});const o=n(1267).Z.debug,r="undefined"!=typeof window?window:self,i=o},4762:(e,t,n)=>{n.d(t,{IS_FIREFOX:()=>s,IS_SAFARI:()=>i});var o=n(6761);const r=navigator?navigator.userAgent:null,i=(navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),navigator.userAgent.toLowerCase().indexOf("android"),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),(/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&o.Z.MSStream,!!("safari"in o.Z)||!(!r||!(/\b(iPad|iPhone|iPod)\b/.test(r)||r.match("Safari")&&!r.match("Chrome")))),s=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;(void 0===navigator.maxTouchPoints||navigator.maxTouchPoints>0)&&navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i)},1352:(e,t,n)=>{n.d(t,{FK:()=>s,N5:()=>r,SU:()=>o,kC:()=>i});const o="undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope,r="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&!o,i=r||o,s=()=>self.clients.matchAll({includeUncontrolled:!1,type:"window"}),a=(e,...t)=>{try{e.postMessage(...t)}catch(e){console.error("[worker] postMessage error:",e,t)}},c=(e,...t)=>{s().then((n=>{n.length&&n.slice(e?0:-1).forEach((e=>{a(e,...t)}))}))};o&&c.bind(null,!1),o&&c.bind(null,!0)},5003:(e,t,n)=>{n.d(t,{kg:()=>f,v9:()=>o});var o,r=n(410),i=n(4762),s=n(1352),a=n(5289);!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Log=4]="Log",e[e.Debug=8]="Debug"}(o||(o={}));const c=[o.None,o.Error,o.Warn,o.Log,o.Debug],l=!(i.IS_SAFARI||i.IS_FIREFOX),u="[33m",h="[36m",d=[["debug",o.Debug],["info",o.Log],["warn",o.Warn],["error",o.Error],["assert",o.Error],["trace",o.Log],["group",o.Log],["groupCollapsed",o.Log],["groupEnd",o.Log]];function f(e,t=o.Log|o.Warn|o.Error,n=!1,i=""){let g;r.ZP||n||(t=o.Error),l?i||(s.SU?i=u:s.N5&&(i=h)):i="";const p=i;i=i?`%s ${i}%s`:"%s";const m=function(...n){return t&o.Log&&console.log(i,(0,a.Z)(),e,...n)};return d.forEach((([n,o])=>{m[n]=function(...r){return t&o&&console[n](i,(0,a.Z)(),e,...r)}})),m.setPrefix=function(t){g=t,e="["+t+"]"},m.setPrefix(e),m.setLevel=function(e){t=c.slice(0,e+1).reduce(((e,t)=>e|t),0)},m.bindPrefix=function(e){return f(`${g}] [${e}`,t,n,p)},m}},6350:(e,t,n)=>{n.d(t,{Vp:()=>ee,cM:()=>Y,j6:()=>ne});var o=n(5003);function r(e){return new Promise((t=>{setTimeout(t,e)}))}const i=self,s="cachedAssets";function a(e){return e.ok&&200===e.status}function c(e){return Promise.race([e,r(1e4).then((()=>Promise.reject()))])}function l(){}function u(){const e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach((e=>e(...t)))},listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise(((n,o)=>{e.resolve=e=>{t.isFulfilled||t.isRejected||(t.isFulfilled=!0,n(e))},e.reject=(...e)=>{t.isRejected||t.isFulfilled||(t.isRejected=!0,o(...e))}}));return t.catch(l).finally((()=>{t.notify=t.notifyAll=t.lastNotify=null,t.listeners.length=0,t.cancel&&(t.cancel=l)})),Object.assign(t,e),t}var h=n(6761),d=n(1267);function f(e,t=""){Array.isArray(e)||(e=[e]);const n=function(e){return-1===["image/jpeg","image/png","image/gif","image/svg+xml","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","audio/wav","application/json","application/pdf"].indexOf(e)?"application/octet-stream":e}(t);return new Blob(e,{type:n})}class g{constructor(e,t,n){this.mimeType=e,this.size=t,this.saveFileCallback=n,this.bytes=new Uint8Array(t)}write(e,t){return n=this,o=void 0,i=function*(){const n=t+e.byteLength;if(n>this.bytes.byteLength){const e=new Uint8Array(n);e.set(this.bytes,0),this.bytes=e}this.bytes.set(e,t)},new((r=void 0)||(r=Promise))((function(e,t){function s(e){try{c(i.next(e))}catch(e){t(e)}}function a(e){try{c(i.throw(e))}catch(e){t(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof r?n:new r((function(e){e(n)}))).then(s,a)}c((i=i.apply(n,o||[])).next())}));var n,o,r,i}truncate(){this.bytes=new Uint8Array}trim(e){this.bytes=this.bytes.slice(0,e)}finalize(e=!0){const t=f(this.bytes,this.mimeType);return e&&this.saveFileCallback&&this.saveFileCallback(t),t}getParts(){return this.bytes}replaceParts(e){this.bytes=e}}var p=n(5471);class m{constructor(e){this.dbName=e,this.useStorage=!0,d.Z.test&&(this.dbName+="_test"),m.STORAGES.length&&(this.useStorage=m.STORAGES[0].useStorage),this.openDatabase(),m.STORAGES.push(this)}openDatabase(){var e;return null!==(e=this.openDbPromise)&&void 0!==e?e:this.openDbPromise=caches.open(this.dbName)}delete(e){return this.timeoutOperation((t=>t.delete("/"+e)))}deleteAll(){return caches.delete(this.dbName)}get(e){return this.timeoutOperation((t=>t.match("/"+e)))}save(e,t){return this.timeoutOperation((n=>n.put("/"+e,t)))}getFile(e,t="blob"){return this.get(e).then((e=>{if(!e)throw(0,p.Z)("NO_ENTRY_FOUND");return e[t]()}))}saveFile(e,t){t instanceof Blob||(t=f(t));const n=new Response(t,{headers:{"Content-Length":""+t.size}});return this.save(e,n).then((()=>t))}timeoutOperation(e){return this.useStorage?new Promise(((t,n)=>{return o=this,r=void 0,s=function*(){let o=!1;const r=setTimeout((()=>{n(),o=!0}),15e3);try{const n=yield this.openDatabase();if(!n)throw this.useStorage=!1,this.openDbPromise=void 0,"no cache?";const r=yield e(n);if(o)return;t(r)}catch(e){n(e)}clearTimeout(r)},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{c(s.next(e))}catch(e){t(e)}}function a(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(n,a)}c((s=s.apply(o,r||[])).next())}));var o,r,i,s})):Promise.reject((0,p.Z)("STORAGE_OFFLINE"))}prepareWriting(e,t,n){return{deferred:u(),getWriter:()=>new g(n,t,(t=>this.saveFile(e,t).catch((()=>t))))}}static toggleStorage(e,t){return Promise.all(this.STORAGES.map((n=>{if(n.useStorage=e,t)return e?void 0:n.deleteAll()})))}}m.STORAGES=[];const v=new Map,w=new m("cachedStreamChunks"),y="Time-Cached";setInterval((()=>w.timeoutOperation((e=>e.keys().then((t=>{const n=new Map,o=Date.now()/1e3|0;for(const e of t){const t=e.url.match(/\/(\d+?)\?/);t&&!n.has(t[1])&&n.set(t[1],e)}const r=[];for(const[t,i]of n){const n=e.match(i).then((n=>{if(+n.headers.get(y)+86400<=o)return Y("will delete stream chunk:",t),e.delete(i,{ignoreSearch:!0,ignoreVary:!0})}));r.push(n)}return Promise.all(r)}))))),18e5),setInterval((()=>{const e=ee();for(const[t,n]of v)if(t!==e){for(const e in n)n[e].reject();v.delete(t)}}),12e4);const b=new Map;class P{constructor(e){this.info=e,this.loadedOffsets=new Set,this.destroy=()=>{b.delete(this.id)},this.id=P.getId(e),b.set(this.id,this),this.limitPart=e.size>78643200?O:S,this.destroyDebounced=function(e,t,n=!0,o=!0){let r,i,s,a,c=!1;const u=t=>{const n=s,o=a;try{n(e.apply(null,t))}catch(e){console.error("debounce error",e),o(e)}},d=(...e)=>{i||(i=new Promise(((e,t)=>(s=e,a=t)))),r?(clearTimeout(r),c=!0,a(),i=new Promise(((e,t)=>(s=e,a=t)))):n&&(u(e),c=!1);const d=h.Z.setTimeout((()=>{!o||n&&!c||u(e),r===d&&(r=i=s=a=void 0,c=!1)}),t);return r=d,i.catch(l),i};return d.clearTimeout=()=>{r&&(h.Z.clearTimeout(r),a(),r=i=s=a=void 0,c=!1)},d.isDebounced=()=>!!r,d}(this.destroy,15e4,!1,!0)}requestFilePartFromWorker(e,t,n=!1){return o=this,r=void 0,s=function*(){const o={docId:this.id,dcId:this.info.dcId,offset:e,limit:t},r=JSON.stringify(o),i=ee();let s=v.get(i);s||v.set(i,s={});let a=s[r];if(a)return a.then((e=>e.bytes));this.loadedOffsets.add(e),a=s[r]=u(),ne.invoke("requestFilePart",o,void 0,i).then(a.resolve,a.reject).finally((()=>{s[r]===a&&(delete s[r],Object.keys(s).length||v.delete(i))}));const c=a.then((e=>e.bytes));return this.saveChunkToCache(c,e,t),!n&&this.preloadChunks(e,e+15*this.limitPart),c},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{c(s.next(e))}catch(e){t(e)}}function a(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(n,a)}c((s=s.apply(o,r||[])).next())}));var o,r,i,s}requestFilePartFromCache(e,t,n){const o=this.getChunkKey(e,t);return w.getFile(o).then((e=>n?new Uint8Array:function(e){return function(e){return function(e,t){return new Promise((t=>{const n=new FileReader;n.addEventListener("loadend",(e=>{t(e.target.result)})),n.readAsArrayBuffer(e)}))}(e)}(e).then((e=>new Uint8Array(e)))}(e)),(e=>{e.type}))}requestFilePart(e,t,n){return this.requestFilePartFromCache(e,t,n).then((o=>o||this.requestFilePartFromWorker(e,t,n)))}saveChunkToCache(e,t,n){return e.then((e=>{const o=this.getChunkKey(t,n),r=new Response(e,{headers:{"Content-Length":""+e.length,"Content-Type":"application/octet-stream",[y]:""+(Date.now()/1e3|0)}});return w.save(o,r)}))}preloadChunk(e){this.loadedOffsets.has(e)||(this.loadedOffsets.add(e),this.requestFilePart(e,this.limitPart,!0))}preloadChunks(e,t){if(t>this.info.size&&(t=this.info.size),e)for(;e<t;e+=this.limitPart)this.preloadChunk(e);else this.preloadChunk(k(e,this.limitPart))}requestRange(e){this.destroyDebounced();const t=function(e,t,n){return 0===e[0]&&1===e[1]?new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:{"Accept-Ranges":"bytes","Content-Range":`bytes 0-1/${n||"*"}`,"Content-Length":"2","Content-Type":t||"video/mp4"}}):null}(e,this.info.mimeType,this.info.size);if(t)return t;let[n,o]=e;const r=o&&o<this.limitPart?function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.log(2)))}(o-n+1):this.limitPart,i=k(n,r);return o||(o=Math.min(n+r,this.info.size-1)),this.requestFilePart(i,r).then((e=>{n===i&&o===i+r||(e=e.slice(n-i,o-i+1));const t={"Accept-Ranges":"bytes","Content-Range":`bytes ${n}-${n+e.byteLength-1}/${this.info.size||"*"}`,"Content-Length":`${e.byteLength}`};return this.info.mimeType&&(t["Content-Type"]=this.info.mimeType),new Response(e,{status:206,statusText:"Partial Content",headers:t})}))}getChunkKey(e,t){return this.id+"?offset="+e+"&limit="+t}static get(e){var t;return null!==(t=b.get(this.getId(e)))&&void 0!==t?t:new P(e)}static getId(e){return e.location.id}}const S=524288,O=1048576;function k(e,t=2048){return e-e%t}var A=n(4762);function C(e,t){const n=Object.keys,o=typeof e;return e&&t&&"object"===o&&o===typeof t?n(e).length===n(t).length&&n(e).every((n=>C(e[n],t[n]))):e===t}class T{constructor(e){!function(e,t){if(t)for(const n in t)void 0!==t[n]&&(e[n]=t[n])}(this,e),d.Z.test&&(this.name+="_test"),this.storageIsAvailable=!0,this.log=(0,o.kg)(["IDB",e.name].join("-")),this.log("constructor"),this.openDatabase(!0),T.INSTANCES.push(this)}isAvailable(){return this.storageIsAvailable}openDatabase(e=!1){if(this.openDbPromise&&!e)return this.openDbPromise;const t=(e,t)=>{var n;const o=Array.from(e.indexNames);for(const t of o)e.deleteIndex(t);if(null===(n=t.indexes)||void 0===n?void 0:n.length)for(const n of t.indexes)e.indexNames.contains(n.indexName)||e.createIndex(n.indexName,n.keyPath,n.objectParameters)};try{var n=indexedDB.open(this.name,this.version);if(!n)return Promise.reject()}catch(e){return this.log.error("error opening db",e.message),this.storageIsAvailable=!1,Promise.reject(e)}let o=!1;return setTimeout((()=>{o||n.onerror((0,p.Z)("IDB_CREATE_TIMEOUT"))}),3e3),this.openDbPromise=new Promise(((e,r)=>{n.onsuccess=t=>{o=!0;const i=n.result;let s=!1;this.log("Opened"),i.onerror=e=>{this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),r(e)},i.onclose=e=>{this.log.error("closed:",e),!s&&this.openDatabase()},i.onabort=e=>{this.log.error("abort:",e);const t=e.target;this.openDatabase(s=!0),t.onerror&&t.onerror(e),i.close()},i.onversionchange=e=>{this.log.error("onversionchange, lol?")},e(this.db=i)},n.onerror=e=>{o=!0,this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),r(e)},n.onupgradeneeded=e=>{o=!0,this.log.warn("performing idb upgrade from",e.oldVersion,"to",e.newVersion);const n=e.target,r=n.result;this.stores.forEach((e=>{if(r.objectStoreNames.contains(e.name)){const o=n.transaction.objectStore(e.name);t(o,e)}else((e,n)=>{const o=e.createObjectStore(n.name);t(o,n)})(r,e)}))}}))}static create(e){var t;return null!==(t=this.INSTANCES.find((t=>t.name===e.name)))&&void 0!==t?t:new T(e)}static closeDatabases(e){this.INSTANCES.forEach((t=>{if(e&&e===t)return;const n=t.db;n&&(n.onclose=()=>{},n.close())}))}}T.INSTANCES=[];class j{constructor(e,t){this.storeName=t,this.log=(0,o.kg)(["IDB",e.name,t].join("-")),this.idb=T.create(e)}delete(e,t){const n=Array.isArray(e);return n||(e=[].concat(e)),this.getObjectStore("readwrite",(t=>{const o=e.map((e=>t.delete(e)));return n?o:o[0]}),"",t)}clear(e){return this.getObjectStore("readwrite",(e=>e.clear()),"",e)}save(e,t,n){const o=Array.isArray(e);return o||(e=[].concat(e),t=[].concat(t)),this.getObjectStore("readwrite",(n=>{const r=e.map(((e,o)=>n.put(t[o],e)));return o?r:r[0]}),"",n)}get(e,t){const n=Array.isArray(e);if(n){if(!e.length)return Promise.resolve([])}else{if(!e)return;e=[].concat(e)}return this.getObjectStore("readonly",(t=>{const o=e.map((e=>t.get(e)));return n?o:o[0]}),"",t)}getObjectStore(e,t,n,o=this.storeName){let r;return n&&(r=performance.now(),this.log(n+": start")),this.idb.openDatabase().then((i=>new Promise(((s,a)=>{const c=i.transaction([o],e),l=()=>{clearTimeout(d),a(c.error)},u=()=>{clearTimeout(d),n&&this.log(n+": end",performance.now()-r);const e=p.map((e=>e.result));s(g?e:e[0])};c.onerror=l;const h="readwrite"===e;h&&(c.oncomplete=()=>u());const d=setTimeout((()=>{this.log.error("transaction not finished",c,n)}),1e4),f=t(c.objectStore(o)),g=Array.isArray(f),p=g?f:[].concat(f);if(h)return;const m=p.length;let v=m;const w=()=>{c.error||--v||u()};for(let e=0;e<m;++e){const t=p[e];t.onerror=l,t.onsuccess=w}}))))}getAll(e){return this.getObjectStore("readonly",(e=>e.getAll()),"",e)}}const x=self,E=location.protocol+"//"+location.hostname+location.pathname.split("/").slice(0,-1).join("/")+"/";let _=0,I=!0;const N={push_mute_until:0,push_lang:{push_message_nopreview:"You have a new message",push_action_mute1d:"Mute for 24H",push_action_settings:"Settings"},push_settings:{}},D=new class{constructor(e,t,n){this.defaults=n,this.cache={},this.storage=new j(e,t)}getDefault(e){const t=this.defaults[e];return"function"==typeof t?t():t}get(e){return this.cache.hasOwnProperty(e)?this.cache[e]:this.storage.get(e).then((e=>e),(()=>{})).then((t=>this.cache.hasOwnProperty(e)?this.cache[e]:(null!=t||(t=this.getDefault(e)),this.cache[e]=t)))}getCached(e){const t=this.get(e);if(t instanceof Promise)throw"no property";return t}set(e,t){var n,o,r,i,s;return o=this,r=void 0,s=function*(){if(!C(null!==(n=this.cache[e])&&void 0!==n?n:this.defaults[e],t)){this.cache[e]=t;try{this.storage.save(e,t)}catch(e){}}},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{c(s.next(e))}catch(e){t(e)}}function a(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(n,a)}c((s=s.apply(o,r||[])).next())}))}}({name:"tweb",version:7,stores:[{name:"session"},{name:"stickerSets"},{name:"users"},{name:"chats"},{name:"dialogs"},{name:"messages"}]},"session",N);for(const e in N)D.get(e);x.addEventListener("push",(e=>{const t=e.data.json();Y("push",Object.assign({},t));try{const[n,o,r]=[D.getCached("push_mute_until"),D.getCached("push_settings"),D.getCached("push_lang")],i=Date.now();if(L()&&n&&i<n)throw`supress notification because mute for ${Math.ceil((n-i)/6e4)} min`;if(Date.now()-_<=11500&&I)throw"supress notification because some instance is alive";const s=function(e,t,n){let o,r=e.title||"Telegram",i=e.description||"";e.custom&&(o=e.custom.channel_id?""+-e.custom.channel_id:e.custom.chat_id?""+-e.custom.chat_id:e.custom.from_id||""),e.custom.peerId=""+o;let s="peer"+o;const a=o+"_"+e.custom.msg_id;if(M){const t="ignoring push";throw Y.warn(t,e),M.delete(a),t}(null==t?void 0:t.nopreview)&&(r="Telegram",i=n.push_message_nopreview,s="unknown_peer");const c={body:i,icon:"assets/img/logo_filled_rounded.png",tag:s,data:e,actions:[{action:"mute1d",title:n.push_action_mute1d}],badge:"assets/img/logo_plain.svg",silent:"1"===e.custom.silent};Y("show notify",r,i,e,c);return x.registration.showNotification(r,c).catch((e=>{Y.error("Show notification promise",e)}))}(t,o,r);e.waitUntil(s)}catch(t){Y(t);const n="fix",o=x.registration.showNotification("Telegram",{tag:n});o.then((()=>{W(n)})),e.waitUntil(o)}})),x.addEventListener("notificationclick",(e=>{const t=e.notification;Y("on notification click",t),t.close();const n=e.action;if("mute1d"===n&&L())return Y("[SW] mute for 1d"),void D.set("push_mute_until",Date.now()+864e5);const o=t.data;if(!o)return;const r=x.clients.matchAll({type:"window"}).then((e=>{o.action=n,R=o;for(let t=0;t<e.length;++t){const n=e[t];if("focus"in n)return n.focus(),ne.invokeVoid("pushClick",R,n),void(R=void 0)}if(x.clients.openWindow)return Promise.resolve(D.get("push_settings")).then((e=>x.clients.openWindow(e.baseUrl||E)))})).catch((e=>{Y.error("Clients.matchAll error",e)}));e.waitUntil(r)})),x.addEventListener("notificationclose",(function(e){var t;t=e.notification,F.delete(t)}));const F=new Set;let R;function W(e){for(const t of F)try{if(e&&t.tag!==e)continue;t.close(),F.delete(t)}catch(e){}let t;return t="getNotifications"in x.registration?x.registration.getNotifications({tag:e}).then((e=>{for(let t=0,n=e.length;t<n;++t)try{e[t].close()}catch(e){}})).catch((e=>{Y.error("Offline register SW error",e)})):Promise.resolve(),t}function L(){return A.IS_FIREFOX}const M=new Set;var q=n(153),U=n(410);class Z extends q.Z{constructor(){super("SERVICE"),U.GO&&(U.GO.serviceMessagePort=this)}}var G=n(1352);const z=new Map,$=(0,p.Z)("UNKNOWN");self.downloadMap=z;const B={download:e=>{const{id:t}=e;if(z.has(t))return Promise.reject($);const n=new CountQueuingStrategy({highWaterMark:1}),o=u();let r;o.then((()=>{setTimeout((()=>{z.delete(t)}),5e3)}),(()=>{z.delete(t)}));const i=new ReadableStream({start:e=>{r=e},cancel:e=>{o.reject($)}},n),s=Object.assign(Object.assign({},e),{readableStream:i,promise:o,controller:r});return z.set(t,s),o.catch((()=>{throw $}))},downloadChunk:({id:e,chunk:t})=>{const n=z.get(e);return n?n.controller.enqueue(t):Promise.reject()},downloadFinalize:e=>{const t=z.get(e);return t?(t.promise.resolve(),t.controller.close()):Promise.reject()},downloadCancel:e=>{const t=z.get(e);if(t)return t.promise.reject(),t.controller.error()}};function V(e,t){const n=r(100).then((()=>{const e=z.get(t);if(!e||e.used)return;e.used=!0;const n=e.readableStream;return new Response(n,{headers:e.headers})}));e.respondWith(n)}function K(){if(z.size)for(const[e,t]of z)t.controller.error()}const X={};function J(e,t){const n=e.request.formData().then((t=>(function(e,t){var n,o,r,i,s;o=this,r=void 0,s=function*(){try{Y("share data",e);const o=function(e){return{files:e.getAll("files"),title:e.get("title"),text:e.get("text"),url:e.get("url")}}(e);(null!==(n=X[t])&&void 0!==n?n:X[t]=[]).push(o)}catch(e){Y.warn("something wrong with the data",e)}},new((i=void 0)||(i=Promise))((function(e,t){function n(e){try{c(s.next(e))}catch(e){t(e)}}function a(e){try{c(s.throw(e))}catch(e){t(e)}}function c(t){var o;t.done?e(t.value):(o=t.value,o instanceof i?o:new i((function(e){e(o)}))).then(n,a)}c((s=s.apply(o,r||[])).next())}))}(t,e.resultingClientId),Response.redirect(".."))));e.respondWith(n)}const Y=(0,o.kg)("SW",o.v9.Error|o.v9.Debug|o.v9.Log|o.v9.Warn,!0),H=self;let Q;const ee=()=>Q,te=e=>{Y("window connected",e.id,"windows before",ie.size),"none"!==e.frameType?(Y("windows",Array.from(ie)),ne.invokeVoid("hello",void 0,e),(e=>{ie.size||Q||(Y("sending message port for mtproto"),(e=>{const t=new MessageChannel;ne.attachPort(Q=t.port1),ne.invokeVoid("port",void 0,e,[t.port2])})(e))})(e),ie.set(e.id,e),function(e){const t=X[e.id];t&&(delete X[e.id],Y("releasing share events to client:",e.id,"length:",t.length),t.forEach((t=>{ne.invokeVoid("share",t,e)})))}(e)):Y.warn("maybe a bugged Safari starting window",e.id)},ne=new Z;ne.addMultipleEventsListeners({notificationsClear:W,toggleStorages:({enabled:e,clearWrite:t})=>{m.toggleStorage(e,t)},pushPing:(e,t)=>{!function(e,t){_=Date.now(),I=e.localNotifications,R&&t&&(ne.invokeVoid("pushClick",R,t),R=void 0),e.lang&&D.set("push_lang",e.lang),e.settings&&D.set("push_settings",e.settings)}(e,t)},hello:(e,t)=>{te(t)},shownNotification:function(e){M.add(e)}});const{onDownloadFetch:oe,onClosedWindows:re}=function(e){return e.addMultipleEventsListeners(B),{onDownloadFetch:V,onClosedWindows:K}}(ne);(0,G.FK)().then((e=>{Y(`got ${e.length} windows from the start`),e.forEach((e=>{te(e)}))}));const ie=new Map;self.connectedWindows=ie,function(e,t,n){const o=(t,n)=>{e.attachListenPort(t),n&&e.attachSendPort(n)};e.setOnPortDisconnect((e=>{Y("something has disconnected",e),e instanceof WindowClient&&ie.has(e.id)?(ie.delete(e.id),Y("window disconnected, left",ie.size),ie.size||(Y.warn("no windows left"),Q&&(ne.detachPort(Q),Q=void 0),re())):Y.warn("it is not a window")})),"undefined"!=typeof SharedWorkerGlobalScope?h.Z.addEventListener("connect",(e=>o(e.source,e.source))):"undefined"!=typeof ServiceWorkerGlobalScope?o(h.Z,null):o(h.Z,h.Z)}(ne);const se=e=>{if(!A.IS_SAFARI&&0===e.request.url.indexOf(location.origin+"/")&&e.request.url.match(/\.(js|css|jpe?g|json|wasm|png|mp3|svg|tgs|ico|woff2?|ttf|webmanifest?)(?:\?.*)?$/))return e.respondWith(function(e){return t=this,n=void 0,r=function*(){try{const t=yield c(i.caches.open(s)),n=yield c(t.match(e.request,{ignoreVary:!0}));if(n&&a(n))return n;const o={Vary:"*"};let r=yield fetch(e.request,{headers:o});if(a(r))t.put(e.request,r.clone());else if(304===r.status){const n=e.request.url.replace(/\?.+$/,"")+"?"+(1e5*Math.random()|0);r=yield fetch(n,{headers:o}),a(r)&&t.put(e.request,r.clone())}return r}catch(t){return fetch(e.request)}},new((o=void 0)||(o=Promise))((function(e,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(t){var n;t.done?e(t.value):(n=t.value,n instanceof o?n:new o((function(e){e(n)}))).then(s,a)}c((r=r.apply(t,n||[])).next())}));var t,n,o,r}(e));try{const[t,n]=e.request.url.split("/").slice(-2);switch(t){case"stream":!function(e,t){const n=function(e){if(!e)return[0,0];const[,t]=e.split("="),n=t.split(", "),[o,r]=n[0].split("-");return[+o,+r||0]}(e.request.headers.get("Range")),o=JSON.parse(decodeURIComponent(t)),r=P.get(o);e.respondWith(Promise.race([(45e3,new Promise((e=>{setTimeout((()=>{e(new Response("",{status:408,statusText:"Request timed out."}))}),45e3)}))),r.requestRange(n)]))}(e,n);break;case"download":oe(e,n);break;case"share":J(e);break;case"ping":e.respondWith(new Response("pong"))}}catch(t){Y.error("fetch error",t),e.respondWith(new Response("",{status:500,statusText:"Internal Server Error",headers:{"Cache-Control":"no-cache"}}))}},ae=()=>{H.onfetch=se};H.addEventListener("install",(e=>{Y("installing"),e.waitUntil(H.skipWaiting().then((()=>Y("skipped waiting"))))})),H.addEventListener("activate",(e=>{Y("activating",H),e.waitUntil(H.caches.delete(s).then((()=>Y("cleared assets cache")))),e.waitUntil(H.clients.claim().then((()=>Y("claimed clients"))))})),H.onoffline=H.ononline=ae,ae()}},o={};function r(e){var t=o[e];if(void 0!==t)return t.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,r),i.exports}r.m=n,r.x=()=>{var e=r.O(void 0,[85],(()=>r(6350)));return r.O(e)},e=[],r.O=(t,n,o,i)=>{if(!n){var s=1/0;for(u=0;u<e.length;u++){for(var[n,o,i]=e[u],a=!0,c=0;c<n.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((e=>r.O[e](n[c])))?n.splice(c--,1):(a=!1,i<s&&(s=i));if(a){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,o,i]},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,n)=>(r.f[n](e,t),t)),[])),r.u=e=>e+".308e3be95e49c2e36d0d.bundle.js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{if(void 0!==r){var e=r.u,t=r.e,n={},o={};r.u=function(t){return e(t)+(n.hasOwnProperty(t)?"?"+n[t]:"")},r.e=function(i){return t(i).catch((function(t){var s=o.hasOwnProperty(i)?o[i]:999999;if(s<1){var a=e(i);throw t.message="Loading chunk "+i+" failed after 999999 retries.\n("+a+")",t.request=a,t}return new Promise((function(e){setTimeout((function(){var t=Date.now();n[i]=t,o[i]=s-1,e(r.e(i))}),3e3)}))}))}}})(),(()=>{var e={670:1};r.f.i=(t,n)=>{e[t]||importScripts(r.p+r.u(t))};var t=this.webpackChunktweb=this.webpackChunktweb||[],n=t.push.bind(t);t.push=t=>{var[o,i,s]=t;for(var a in i)r.o(i,a)&&(r.m[a]=i[a]);for(s&&s(r);o.length;)e[o.pop()]=1;n(t)}})(),t=r.x,r.x=()=>r.e(85).then(t),r.x()})();
//# sourceMappingURL=sw.6b2cd8ebd35749fbb269.chunk.js.map