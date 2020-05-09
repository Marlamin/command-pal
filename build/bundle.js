var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function i(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function r(t,e,n,s){return t[1]&&s?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](s(e))):n.ctx}function c(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function h(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(){return u(" ")}function f(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function p(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t,e){e=""+e,t.data!==e&&(t.data=e)}function m(t,e){(null!=e||t.value)&&(t.value=e)}function y(t,e,n){t.classList[n?"add":"remove"](e)}let x;function v(t){x=t}function w(){if(!x)throw new Error("Function called outside component initialization");return x}function $(){const t=w();return(e,n)=>{const s=t.$$.callbacks[e];if(s){const i=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);s.slice().forEach(e=>{e.call(t,i)})}}}const k=[],M=[],b=[],C=[],_=Promise.resolve();let S=!1;function I(t){b.push(t)}let L=!1;const O=new Set;function A(){if(!L){L=!0;do{for(let t=0;t<k.length;t+=1){const e=k[t];v(e),E(e.$$)}for(k.length=0;M.length;)M.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];O.has(e)||(O.add(e),e())}b.length=0}while(k.length);for(;C.length;)C.pop()();S=!1,L=!1,O.clear()}}function E(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(I)}}const K=new Set;function j(t,e){t&&t.i&&(K.delete(t),t.i(e))}function P(t,e,n,s){if(t&&t.o){if(K.has(t))return;K.add(t),(void 0).c.push(()=>{K.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}}function R(t){t&&t.c()}function N(t,n,o){const{fragment:r,on_mount:c,on_destroy:a,after_update:l}=t.$$;r&&r.m(n,o),I(()=>{const n=c.map(e).filter(i);a?a.push(...n):s(n),t.$$.on_mount=[]}),l.forEach(I)}function z(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(t,e){-1===t.$$.dirty[0]&&(k.push(t),S||(S=!0,_.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function W(e,i,o,r,c,a,h=[-1]){const u=x;v(e);const d=i.props||{},f=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:n(),dirty:h};let p=!1;if(f.ctx=o?o(e,d,(t,n,...s)=>{const i=s.length?s[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=i)&&(f.bound[t]&&f.bound[t](i),p&&F(e,t)),n}):[],f.update(),p=!0,s(f.before_update),f.fragment=!!r&&r(f.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);f.fragment&&f.fragment.l(t),t.forEach(l)}else f.fragment&&f.fragment.c();i.intro&&j(e.$$.fragment),N(e,i.target,i.anchor),A()}v(u)}class T{$destroy(){z(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}
/*!
     * hotkeys-js v3.7.6
     * A simple micro-library for defining and dispatching keyboard shortcuts. It has no dependencies.
     * 
     * Copyright (c) 2020 kenny wong <wowohoo@qq.com>
     * http://jaywcjlove.github.io/hotkeys
     * 
     * Licensed under the MIT license.
     */var q="undefined"!=typeof navigator&&navigator.userAgent.toLowerCase().indexOf("firefox")>0;function V(t,e,n){t.addEventListener?t.addEventListener(e,n,!1):t.attachEvent&&t.attachEvent("on".concat(e),(function(){n(window.event)}))}function D(t,e){for(var n=e.slice(0,e.length-1),s=0;s<n.length;s++)n[s]=t[n[s].toLowerCase()];return n}function U(t){"string"!=typeof t&&(t="");for(var e=(t=t.replace(/\s/g,"")).split(","),n=e.lastIndexOf("");n>=0;)e[n-1]+=",",e.splice(n,1),n=e.lastIndexOf("");return e}for(var B={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,ins:45,insert:45,home:36,end:35,pageup:33,pagedown:34,capslock:20,"⇪":20,",":188,".":190,"/":191,"`":192,"-":q?173:189,"=":q?61:187,";":q?59:186,"'":222,"[":219,"]":221,"\\":220},J={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,cmd:91,command:91},G={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey",shiftKey:16,ctrlKey:17,altKey:18,metaKey:91},X={16:!1,18:!1,17:!1,91:!1},H={},Q=1;Q<20;Q++)B["f".concat(Q)]=111+Q;var Y=[],Z="all",tt=[],et=function(t){return B[t.toLowerCase()]||J[t.toLowerCase()]||t.toUpperCase().charCodeAt(0)};function nt(t){Z=t||"all"}function st(){return Z||"all"}var it=function(t){var e=t.key,n=t.scope,s=t.method,i=t.splitKey,o=void 0===i?"+":i;U(e).forEach((function(t){var e=t.split(o),i=e.length,r=e[i-1],c="*"===r?"*":et(r);if(H[c]){n||(n=st());var a=i>1?D(J,e):[];H[c]=H[c].map((function(t){return(!s||t.method===s)&&t.scope===n&&function(t,e){for(var n=t.length>=e.length?t:e,s=t.length>=e.length?e:t,i=!0,o=0;o<n.length;o++)-1===s.indexOf(n[o])&&(i=!1);return i}(t.mods,a)?{}:t}))}}))};function ot(t,e,n){var s;if(e.scope===n||"all"===e.scope){for(var i in s=e.mods.length>0,X)Object.prototype.hasOwnProperty.call(X,i)&&(!X[i]&&e.mods.indexOf(+i)>-1||X[i]&&-1===e.mods.indexOf(+i))&&(s=!1);(0!==e.mods.length||X[16]||X[18]||X[17]||X[91])&&!s&&"*"!==e.shortcut||!1===e.method(t,e)&&(t.preventDefault?t.preventDefault():t.returnValue=!1,t.stopPropagation&&t.stopPropagation(),t.cancelBubble&&(t.cancelBubble=!0))}}function rt(t){var e=H["*"],n=t.keyCode||t.which||t.charCode;if(ct.filter.call(this,t)){if(93!==n&&224!==n||(n=91),-1===Y.indexOf(n)&&229!==n&&Y.push(n),["ctrlKey","altKey","shiftKey","metaKey"].forEach((function(e){var n=G[e];t[e]&&-1===Y.indexOf(n)?Y.push(n):!t[e]&&Y.indexOf(n)>-1&&Y.splice(Y.indexOf(n),1)})),n in X){for(var s in X[n]=!0,J)J[s]===n&&(ct[s]=!0);if(!e)return}for(var i in X)Object.prototype.hasOwnProperty.call(X,i)&&(X[i]=t[G[i]]);t.getModifierState&&(!t.altKey||t.ctrlKey)&&t.getModifierState("AltGraph")&&(-1===Y.indexOf(17)&&Y.push(17),-1===Y.indexOf(18)&&Y.push(18),X[17]=!0,X[18]=!0);var o=st();if(e)for(var r=0;r<e.length;r++)e[r].scope===o&&("keydown"===t.type&&e[r].keydown||"keyup"===t.type&&e[r].keyup)&&ot(t,e[r],o);if(n in H)for(var c=0;c<H[n].length;c++)if(("keydown"===t.type&&H[n][c].keydown||"keyup"===t.type&&H[n][c].keyup)&&H[n][c].key){for(var a=H[n][c],l=a.splitKey,h=a.key.split(l),u=[],d=0;d<h.length;d++)u.push(et(h[d]));u.sort().join("")===Y.sort().join("")&&ot(t,a,o)}}}function ct(t,e,n){Y=[];var s=U(t),i=[],o="all",r=document,c=0,a=!1,l=!0,h="+";for(void 0===n&&"function"==typeof e&&(n=e),"[object Object]"===Object.prototype.toString.call(e)&&(e.scope&&(o=e.scope),e.element&&(r=e.element),e.keyup&&(a=e.keyup),void 0!==e.keydown&&(l=e.keydown),"string"==typeof e.splitKey&&(h=e.splitKey)),"string"==typeof e&&(o=e);c<s.length;c++)i=[],(t=s[c].split(h)).length>1&&(i=D(J,t)),(t="*"===(t=t[t.length-1])?"*":et(t))in H||(H[t]=[]),H[t].push({keyup:a,keydown:l,scope:o,mods:i,shortcut:s[c],method:n,key:s[c],splitKey:h});void 0!==r&&!function(t){return tt.indexOf(t)>-1}(r)&&window&&(tt.push(r),V(r,"keydown",(function(t){rt(t)})),V(window,"focus",(function(){Y=[]})),V(r,"keyup",(function(t){rt(t),function(t){var e=t.keyCode||t.which||t.charCode,n=Y.indexOf(e);if(n>=0&&Y.splice(n,1),t.key&&"meta"===t.key.toLowerCase()&&Y.splice(0,Y.length),93!==e&&224!==e||(e=91),e in X)for(var s in X[e]=!1,J)J[s]===e&&(ct[s]=!1)}(t)})))}var at={setScope:nt,getScope:st,deleteScope:function(t,e){var n,s;for(var i in t||(t=st()),H)if(Object.prototype.hasOwnProperty.call(H,i))for(n=H[i],s=0;s<n.length;)n[s].scope===t?n.splice(s,1):s++;st()===t&&nt(e||"all")},getPressedKeyCodes:function(){return Y.slice(0)},isPressed:function(t){return"string"==typeof t&&(t=et(t)),-1!==Y.indexOf(t)},filter:function(t){var e=t.target||t.srcElement,n=e.tagName,s=!0;return!e.isContentEditable&&("INPUT"!==n&&"TEXTAREA"!==n||e.readOnly)||(s=!1),s},unbind:function(t){if(t){if(Array.isArray(t))t.forEach((function(t){t.key&&it(t)}));else if("object"==typeof t)t.key&&it(t);else if("string"==typeof t){for(var e=arguments.length,n=new Array(e>1?e-1:0),s=1;s<e;s++)n[s-1]=arguments[s];var i=n[0],o=n[1];"function"==typeof i&&(o=i,i=""),it({key:t,scope:i,method:o,splitKey:"+"})}}else Object.keys(H).forEach((function(t){return delete H[t]}))}};for(var lt in at)Object.prototype.hasOwnProperty.call(at,lt)&&(ct[lt]=at[lt]);if("undefined"!=typeof window){var ht=window.hotkeys;ct.noConflict=function(t){return t&&window.hotkeys===ct&&(window.hotkeys=ht),ct},window.hotkeys=ct}const ut=t=>Array.isArray?Array.isArray(t):"[object Array]"===Object.prototype.toString.call(t),dt=t=>"string"==typeof t,ft=t=>"number"==typeof t,pt=t=>null!=t,gt=t=>!t.trim().length;var mt={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(t,e)=>t.score===e.score?t.idx<e.idx?-1:1:t.score<e.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...{useExtendedSearch:!1,getFn:function(t,e){let n=[],s=!1;const i=(t,e)=>{if(e){const o=e.indexOf(".");let r=e,c=null;-1!==o&&(r=e.slice(0,o),c=e.slice(o+1));const a=t[r];if(pt(a))if(c||!dt(a)&&!ft(a))if(ut(a)){s=!0;for(let t=0,e=a.length;t<e;t+=1)i(a[t],c)}else c&&i(a,c);else n.push((t=>null==t?"":(t=>{if("string"==typeof t)return t;let e=t+"";return"0"==e&&1/t==-1/0?"-0":e})(t))(a))}else n.push(t)};return i(t,e),s?n:n[0]}}};function yt(t,{errors:e=0,currentLocation:n=0,expectedLocation:s=0,distance:i=mt.distance}={}){const o=e/t.length,r=Math.abs(s-n);return i?o+r/i:r?1:o}function xt(t,e,n,{location:s=mt.location,distance:i=mt.distance,threshold:o=mt.threshold,findAllMatches:r=mt.findAllMatches,minMatchCharLength:c=mt.minMatchCharLength,includeMatches:a=mt.includeMatches}={}){if(e.length>32)throw new Error("Pattern length exceeds max of 32.");const l=e.length,h=t.length,u=Math.max(0,Math.min(s,h));let d=o,f=u;const p=[];if(a)for(let t=0;t<h;t+=1)p[t]=0;let g;for(;(g=t.indexOf(e,f))>-1;){let t=yt(e,{currentLocation:g,expectedLocation:u,distance:i});if(d=Math.min(t,d),f=g+l,a){let t=0;for(;t<l;)p[g+t]=1,t+=1}}f=-1;let m=[],y=1,x=l+h;const v=1<<(l<=31?l-1:30);for(let s=0;s<l;s+=1){let o=0,c=x;for(;o<c;){yt(e,{errors:s,currentLocation:u+c,expectedLocation:u,distance:i})<=d?o=c:x=c,c=Math.floor((x-o)/2+o)}x=c;let g=Math.max(1,u-c+1),w=r?h:Math.min(u+c,h)+l,$=Array(w+2);$[w+1]=(1<<s)-1;for(let o=w;o>=g;o-=1){let r=o-1,c=n[t.charAt(r)];if(c&&a&&(p[r]=1),$[o]=($[o+1]<<1|1)&c,0!==s&&($[o]|=(m[o+1]|m[o])<<1|1|m[o+1]),$[o]&v&&(y=yt(e,{errors:s,currentLocation:r,expectedLocation:u,distance:i}),y<=d)){if(d=y,f=r,f<=u)break;g=Math.max(1,2*u-f)}}if(yt(e,{errors:s+1,currentLocation:u,expectedLocation:u,distance:i})>d)break;m=$}let w={isMatch:f>=0,score:y||.001};return a&&(w.matchedIndices=function(t=[],e=mt.minMatchCharLength){let n=[],s=-1,i=-1,o=0;for(let r=t.length;o<r;o+=1){let r=t[o];r&&-1===s?s=o:r||-1===s||(i=o-1,i-s+1>=e&&n.push([s,i]),s=-1)}return t[o-1]&&o-s>=e&&n.push([s,o-1]),n}(p,c)),w}function vt(t){let e={},n=t.length;for(let s=0;s<n;s+=1)e[t.charAt(s)]=0;for(let s=0;s<n;s+=1)e[t.charAt(s)]|=1<<n-s-1;return e}class wt{constructor(t,{location:e=mt.location,threshold:n=mt.threshold,distance:s=mt.distance,includeMatches:i=mt.includeMatches,findAllMatches:o=mt.findAllMatches,minMatchCharLength:r=mt.minMatchCharLength,isCaseSensitive:c=mt.isCaseSensitive}={}){this.options={location:e,threshold:n,distance:s,includeMatches:i,findAllMatches:o,minMatchCharLength:r,isCaseSensitive:c},this.pattern=c?t:t.toLowerCase(),this.chunks=[];let a=0;for(;a<this.pattern.length;){let t=this.pattern.substring(a,a+32);this.chunks.push({pattern:t,alphabet:vt(t)}),a+=32}}searchIn(t){let e=t.$;return this.searchInString(e)}searchInString(t){const{isCaseSensitive:e,includeMatches:n}=this.options;if(e||(t=t.toLowerCase()),this.pattern===t){let e={isMatch:!0,score:0};return n&&(e.matchedIndices=[[0,t.length-1]]),e}const{location:s,distance:i,threshold:o,findAllMatches:r,minMatchCharLength:c}=this.options;let a=[],l=0,h=!1;for(let e=0,u=this.chunks.length;e<u;e+=1){let{pattern:u,alphabet:d}=this.chunks[e],f=xt(t,u,d,{location:s+32*e,distance:i,threshold:o,findAllMatches:r,minMatchCharLength:c,includeMatches:n});const{isMatch:p,score:g,matchedIndices:m}=f;p&&(h=!0),l+=g,p&&m&&(a=[...a,...m])}let u={isMatch:h,score:h?l/this.chunks.length:1};return h&&n&&(u.matchedIndices=a),u}}class $t{constructor(t){this.pattern=t}static isMultiMatch(t){return kt(t,this.multiRegex)}static isSingleMatch(t){return kt(t,this.singleRegex)}search(){}}function kt(t,e){const n=t.match(e);return n?n[1]:null}class Mt extends $t{constructor(t){super(t)}static get type(){return"exact"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(t){let e,n=0;const s=[],i=this.pattern.length;for(;(e=t.indexOf(this.pattern,n))>-1;)n=e+i,s.push([e,n-1]);const o=!!s.length;return{isMatch:o,score:o?1:0,matchedIndices:s}}}class bt extends $t{constructor(t,{location:e=mt.location,threshold:n=mt.threshold,distance:s=mt.distance,includeMatches:i=mt.includeMatches,findAllMatches:o=mt.findAllMatches,minMatchCharLength:r=mt.minMatchCharLength,isCaseSensitive:c=mt.isCaseSensitive}={}){super(t),this._bitapSearch=new wt(t,{location:e,threshold:n,distance:s,includeMatches:i,findAllMatches:o,minMatchCharLength:r,isCaseSensitive:c})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(t){return this._bitapSearch.searchInString(t)}}const Ct=[Mt,class extends $t{constructor(t){super(t)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(t){const e=t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,matchedIndices:[0,this.pattern.length-1]}}},class extends $t{constructor(t){super(t)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(t){const e=!t.startsWith(this.pattern);return{isMatch:e,score:e?0:1,matchedIndices:[0,t.length-1]}}},class extends $t{constructor(t){super(t)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(t){const e=!t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,matchedIndices:[0,t.length-1]}}},class extends $t{constructor(t){super(t)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(t){const e=t.endsWith(this.pattern);return{isMatch:e,score:e?0:1,matchedIndices:[t.length-this.pattern.length,t.length-1]}}},class extends $t{constructor(t){super(t)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(t){const e=-1===t.indexOf(this.pattern);return{isMatch:e,score:e?0:1,matchedIndices:[0,t.length-1]}}},bt],_t=Ct.length,St=/ +(?=([^\"]*\"[^\"]*\")*[^\"]*$)/;const It=new Set([bt.type,Mt.type]);const Lt=/[^ ]+/g;function Ot(t,e,{getFn:n=mt.getFn}={}){let s=[];if(dt(e[0]))for(let t=0,n=e.length;t<n;t+=1){const n=e[t];if(pt(n)&&!gt(n)){let e={$:n,idx:t,t:n.match(Lt).length};s.push(e)}}else{const i=t.length;for(let o=0,r=e.length;o<r;o+=1){let r=e[o],c={idx:o,$:{}};for(let e=0;e<i;e+=1){let s=t[e],i=n(r,s);if(pt(i))if(ut(i)){let t=[];const e=[{arrayIndex:-1,value:i}];for(;e.length;){const{arrayIndex:n,value:s}=e.pop();if(pt(s))if(dt(s)&&!gt(s)){let e={$:s,idx:n,t:s.match(Lt).length};t.push(e)}else if(ut(s))for(let t=0,n=s.length;t<n;t+=1)e.push({arrayIndex:t,value:s[t]})}c.$[s]=t}else if(!gt(i)){let t={$:i,t:i.match(Lt).length};c.$[s]=t}}s.push(c)}}return s}class At{constructor(t){if(this._keys={},this._keyNames=[],this._length=t.length,t.length&&dt(t[0]))for(let e=0;e<this._length;e+=1){const n=t[e];this._keys[n]={weight:1},this._keyNames.push(n)}else{let e=0;for(let n=0;n<this._length;n+=1){const s=t[n];if(!Object.prototype.hasOwnProperty.call(s,"name"))throw new Error('Missing "name" property in key object');const i=s.name;if(this._keyNames.push(i),!Object.prototype.hasOwnProperty.call(s,"weight"))throw new Error('Missing "weight" property in key object');const o=s.weight;if(o<=0||o>=1)throw new Error('"weight" property in key must be in the range of (0, 1)');this._keys[i]={weight:o},e+=o}for(let t=0;t<this._length;t+=1){const n=this._keyNames[t],s=this._keys[n].weight;this._keys[n].weight=s/e}}}get(t,e){return this._keys[t]?this._keys[t][e]:-1}keys(){return this._keyNames}count(){return this._length}toJSON(){return JSON.stringify(this._keys)}}function Et(t,e){const n=t.matches;if(e.matches=[],pt(n))for(let t=0,s=n.length;t<s;t+=1){let s=n[t];if(!pt(s.indices)||0===s.indices.length)continue;let i={indices:s.indices,value:s.value};s.key&&(i.key=s.key),s.idx>-1&&(i.refIndex=s.idx),e.matches.push(i)}}function Kt(t,e){e.score=t.score}const jt=[];class Pt{constructor(t,e={},n=null){this.options={...mt,...e},this._processKeys(this.options.keys),this.setCollection(t,n)}setCollection(t,e=null){this.list=t,this.listIsStringArray=dt(t[0]),e?this.setIndex(e):this.setIndex(this._createIndex())}setIndex(t){this._indexedList=t}_processKeys(t){this._keyStore=new At(t)}_createIndex(){return Ot(this._keyStore.keys(),this.list,{getFn:this.options.getFn})}search(t,e={limit:!1}){if(!(t=t.trim()).length)return[];const{shouldSort:n}=this.options;let s=null;for(let e=0,n=jt.length;e<n;e+=1){let n=jt[e];if(n.condition(t,this.options)){s=new n(t,this.options);break}}s||(s=new wt(t,this.options));let i=this._searchUsing(s);return this._computeScore(i),n&&this._sort(i),e.limit&&ft(e.limit)&&(i=i.slice(0,e.limit)),this._format(i)}_searchUsing(t){const e=this._indexedList,n=[],{includeMatches:s}=this.options;if(this.listIsStringArray)for(let i=0,o=e.length;i<o;i+=1){let o=e[i],{$:r,idx:c,t:a}=o;if(!pt(r))continue;let l=t.searchIn(o);const{isMatch:h,score:u}=l;if(!h)continue;let d={score:u,value:r,t:a};s&&(d.indices=l.matchedIndices),n.push({item:r,idx:c,matches:[d]})}else{const i=this._keyStore.keys(),o=this._keyStore.count();for(let r=0,c=e.length;r<c;r+=1){let{$:c,idx:a}=e[r];if(!pt(c))continue;let l=[];for(let e=0;e<o;e+=1){let n=i[e],o=c[n];if(pt(o))if(ut(o))for(let e=0,i=o.length;e<i;e+=1){let i=o[e];const{$:r,idx:c,t:a}=i;if(!pt(r))continue;let h=t.searchIn(i);const{isMatch:u,score:d}=h;if(!u)continue;let f={score:d,key:n,value:r,idx:c,t:a};s&&(f.indices=h.matchedIndices),l.push(f)}else{const{$:e,t:i}=o;let r=t.searchIn(o);const{isMatch:c,score:a}=r;if(!c)continue;let h={score:a,key:n,value:e,t:i};s&&(h.indices=r.matchedIndices),l.push(h)}}l.length&&n.push({idx:a,item:c,matches:l})}}return n}_computeScore(t){const e=t.length;for(let n=0;n<e;n+=1){const e=t[n],s=e.matches,i=s.length;let o=1;for(let t=0;t<i;t+=1){const e=s[t],{key:n,t:i}=e,r=this._keyStore.get(n,"weight"),c=r>-1?r:1,a=0===e.score&&r>-1?Number.EPSILON:e.score,l=1/Math.sqrt(i);o*=Math.pow(a,c*l)}e.score=o}}_sort(t){t.sort(this.options.sortFn)}_format(t){const e=[],{includeMatches:n,includeScore:s}=this.options;let i=[];n&&i.push(Et),s&&i.push(Kt);for(let n=0,s=t.length;n<s;n+=1){const s=t[n],{idx:o}=s,r={item:this.list[o],refIndex:o};if(i.length)for(let t=0,e=i.length;t<e;t+=1)i[t](s,r);e.push(r)}return e}}!function(...t){jt.push(...t)}(class{constructor(t,{isCaseSensitive:e=mt.isCaseSensitive,includeMatches:n=mt.includeMatches,minMatchCharLength:s=mt.minMatchCharLength,findAllMatches:i=mt.findAllMatches,location:o=mt.location,threshold:r=mt.threshold,distance:c=mt.distance}={}){this.query=null,this.options={isCaseSensitive:e,includeMatches:n,minMatchCharLength:s,findAllMatches:i,location:o,threshold:r,distance:c},this.pattern=e?t:t.toLowerCase(),this.query=function(t,e={}){return t.split("|").map(t=>{let n=t.trim().split(St).filter(t=>t&&!!t.trim()),s=[];for(let t=0,i=n.length;t<i;t+=1){const i=n[t];let o=!1,r=-1;for(;!o&&++r<_t;){const t=Ct[r];let n=t.isMultiMatch(i);n&&(s.push(new t(n,e)),o=!0)}if(!o)for(r=-1;++r<_t;){const t=Ct[r];let n=t.isSingleMatch(i);if(n){s.push(new t(n,e));break}}}return s})}(this.pattern,this.options)}static condition(t,e){return e.useExtendedSearch}searchIn(t){const e=this.query;if(!e)return{isMatch:!1,score:1};let n=t.$;const{includeMatches:s,isCaseSensitive:i}=this.options;n=i?n:n.toLowerCase();let o=0,r=[],c=0;for(let t=0,i=e.length;t<i;t+=1){const i=e[t];r.length=0,o=0;for(let t=0,e=i.length;t<e;t+=1){const e=i[t],{isMatch:a,matchedIndices:l,score:h}=e.search(n);if(!a){c=0,o=0,r.length=0;break}if(o+=1,c+=h,s){const t=e.constructor.type;It.has(t)?r=[...r,...l]:r.push(l)}}if(o){let t={isMatch:!0,score:c/o};return s&&(t.matchedIndices=r),t}}return{isMatch:!1,score:1}}}),Pt.version="5.2.3",Pt.createIndex=Ot,Pt.config=mt;const Rt=t=>({}),Nt=t=>({});function zt(t){let e,n,i,o,u,g,x,v,w;const $=t[10].items,k=function(t,e,n,s){if(t){const i=r(t,e,n,s);return t[0](i)}}($,t,t[9],Nt);return{c(){e=h("div"),n=h("div"),i=h("div"),o=h("div"),u=h("input"),g=d(),x=h("div"),k&&k.c(),p(u,"class","search svelte-1c6zd9i"),p(u,"name",t[3]),p(u,"autocomplete","no"),p(u,"type","text"),p(u,"placeholder","What are you looking for?"),p(o,"class","search-box svelte-1c6zd9i"),p(i,"class","modal-container svelte-1c6zd9i"),p(n,"class","modal-wrapper svelte-1c6zd9i"),p(e,"class","modal-mask svelte-1c6zd9i"),y(e,"hidden",!t[1])},m(r,l,h){a(r,e,l),c(e,n),c(n,i),c(i,o),c(o,u),t[11](u),m(u,t[0]),c(i,g),c(i,x),k&&k.m(x,null),v=!0,h&&s(w),w=[f(u,"input",t[12]),f(u,"blur",t[4]),f(u,"keydown",t[5]),f(u,"keyup",t[6])]},p(t,[n]){1&n&&u.value!==t[0]&&m(u,t[0]),k&&k.p&&512&n&&k.p(r($,t,t[9],Nt),function(t,e,n,s){if(t[2]&&s){const i=t[2](s(n));if(void 0===e.dirty)return i;if("object"==typeof i){const t=[],n=Math.max(e.dirty.length,i.length);for(let s=0;s<n;s+=1)t[s]=e.dirty[s]|i[s];return t}return e.dirty|i}return e.dirty}($,t[9],n,Rt)),2&n&&y(e,"hidden",!t[1])},i(t){v||(j(k,t),v=!0)},o(t){P(k,t),v=!1},d(n){n&&l(e),t[11](null),k&&k.d(n),s(w)}}}function Ft(t,e,n){const s=$();let i,{show:o=!1}=e,{inputValue:r}=e;const c=()=>Math.random().toString(32).slice(2),a=c();function l(){s("closed"),n(0,r="")}let{$$slots:h={},$$scope:u}=e;return t.$set=t=>{"show"in t&&n(1,o=t.show),"inputValue"in t&&n(0,r=t.inputValue),"$$scope"in t&&n(9,u=t.$$scope)},t.$$.update=()=>{6&t.$$.dirty&&o&&i&&setTimeout(()=>{i.focus()})},[r,o,i,a,l,function(t){const e=t.code.toLowerCase();"enter"===e?s("exec",r):"arrowdown"===e?s("arrowdown"):"arrowup"===e?s("arrowup"):"escape"===e&&l()},function(t){const e=t.code.toLowerCase();(e.includes("space")||e.includes("backspace")||e.includes("delete")||e.startsWith("key")||e.startsWith("digit")||e.startsWith("numpad"))&&s("textChange",r)},s,c,u,h,function(t){M[t?"unshift":"push"](()=>{n(2,i=t)})},function(){r=this.value,n(0,r)}]}class Wt extends T{constructor(t){super(),W(this,t,Ft,zt,o,{show:1,inputValue:0})}}function Tt(t,e,n){const s=t.slice();return s[5]=e[n],s[7]=n,s}function qt(e){let n;return{c(){n=h("span")},m(t,e){a(t,n,e)},p:t,d(t){t&&l(n)}}}function Vt(t){let e,n,s=t[5].shortcut+"";return{c(){e=h("kyb"),n=u(s),p(e,"class","svelte-1f0rbvo")},m(t,s){a(t,e,s),c(e,n)},p(t,e){1&e&&s!==(s=t[5].shortcut+"")&&g(n,s)},d(t){t&&l(e)}}}function Dt(t){let e,n,s,i,o,r,m=t[5].name+"";function x(t,e){return t[5].shortcut?Vt:qt}let v=x(t),w=v(t);function $(...e){return t[4](t[7],...e)}return{c(){e=h("p"),n=h("span"),s=u(m),i=d(),w.c(),o=d(),p(e,"class","item svelte-1f0rbvo"),y(e,"selected",t[7]==t[1])},m(t,l,h){a(t,e,l),c(e,n),c(n,s),c(e,i),w.m(e,null),c(e,o),h&&r(),r=f(e,"mousedown",$)},p(n,i){t=n,1&i&&m!==(m=t[5].name+"")&&g(s,m),v===(v=x(t))&&w?w.p(t,i):(w.d(1),w=v(t),w&&(w.c(),w.m(e,o))),2&i&&y(e,"selected",t[7]==t[1])},d(t){t&&l(e),w.d(),r()}}}function Ut(e){let n,s=e[0],i=[];for(let t=0;t<s.length;t+=1)i[t]=Dt(Tt(e,s,t));return{c(){n=h("div");for(let t=0;t<i.length;t+=1)i[t].c()},m(t,e){a(t,n,e);for(let t=0;t<i.length;t+=1)i[t].m(n,null)},p(t,[e]){if(7&e){let o;for(s=t[0],o=0;o<s.length;o+=1){const r=Tt(t,s,o);i[o]?i[o].p(r,e):(i[o]=Dt(r),i[o].c(),i[o].m(n,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=s.length}},i:t,o:t,d(t){t&&l(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(i,t)}}}function Bt(t,e,n){const s=$();let{items:i=[]}=e,{selectedIndex:o=0}=e;function r(t,e){1===t.which&&s("clickedIndex",e)}return t.$set=t=>{"items"in t&&n(0,i=t.items),"selectedIndex"in t&&n(1,o=t.selectedIndex)},[i,o,r,s,(t,e)=>r(e,t)]}class Jt extends T{constructor(t){super(),W(this,t,Bt,Ut,o,{items:0,selectedIndex:1})}}function Gt(t){let e,n;const s=new Jt({props:{items:t[2],selectedIndex:t[1]}});return s.$on("clickedIndex",t[4]),{c(){e=h("div"),R(s.$$.fragment),p(e,"slot","items")},m(t,i){a(t,e,i),N(s,e,null),n=!0},p(t,e){const n={};4&e&&(n.items=t[2]),2&e&&(n.selectedIndex=t[1]),s.$set(n)},i(t){n||(j(s.$$.fragment,t),n=!0)},o(t){P(s.$$.fragment,t),n=!1},d(t){t&&l(e),z(s)}}}function Xt(t){let e,n,s;function i(e){t[15].call(null,e)}let o={$$slots:{items:[Gt]},$$scope:{ctx:t}};void 0!==t[0]&&(o.show=t[0]);const r=new Wt({props:o});return M.push(()=>function(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}(r,"show",i)),r.$on("closed",t[5]),r.$on("exec",t[3]),r.$on("arrowup",t[6]),r.$on("arrowdown",t[7]),r.$on("textChange",t[8]),{c(){e=h("div"),R(r.$$.fragment)},m(t,n){a(t,e,n),N(r,e,null),s=!0},p(t,[e]){const s={};var i;65542&e&&(s.$$scope={dirty:e,ctx:t}),!n&&1&e&&(n=!0,s.show=t[0],i=()=>n=!1,C.push(i)),r.$set(s)},i(t){s||(j(r.$$.fragment,t),s=!0)},o(t){P(r.$$.fragment,t),s=!1},d(t){t&&l(e),z(r)}}}function Ht(t,e,n){const s=$(),i=t=>new Promise(e=>setTimeout(e,t));let{shortcutKey:o}=e,{items:r=[]}=e;const c={isCaseSensitive:!1,shouldSort:!0,keys:["name"]};let a=!1,l="";const h=new Pt(r,c);let u=r;var d;function f(t){const e=u[l];s("exec",e),n(0,a=!1),n(1,l=0)}return d=()=>{console.log("CommandPal.App",{shortcutKey:o}),ct(o,(function(t){t.preventDefault(),n(0,a=!0),s("opened")})),r.filter(t=>t.shortcut).map(t=>{ct(t.shortcut,(async function(e){e.preventDefault(),n(0,a=!0),s("opened"),await i(200),n(1,l=r.findIndex(e=>e.name===t.name)),await i(100),f()}))})},w().$$.on_mount.push(d),t.$set=t=>{"shortcutKey"in t&&n(9,o=t.shortcutKey),"items"in t&&n(10,r=t.items)},[a,l,u,f,function(t){n(1,l=t.detail);const e=u[l];s("exec",e)},function(t){s("closed"),n(0,a=!1),n(1,l=0)},function(t){n(1,l--,l),l<0&&n(1,l=0)},function(t){n(1,l++,l);const e=u.length-1;l>e&&n(1,l=e)},function(t){const e=t.detail;if(s("textChanged",e),n(1,l=0),e){const t=h.search(e);n(2,u=t.map(t=>t.item))}else n(2,u=r)},o,r,s,i,c,h,function(t){a=t,n(0,a)}]}class Qt extends T{constructor(t){super(),W(this,t,Ht,Xt,o,{shortcutKey:9,items:10})}}var Yt=function(){this.topics={}};Yt.prototype.subscribe=function(t,e){this.topics.hasOwnProperty(t)||(this.topics[t]=[]),this.topics[t].push(e)},Yt.prototype.unsubscribe=function(t){delete this.topics[t]},Yt.prototype.publish=function(t,e){this.topics.hasOwnProperty(t)&&this.topics[t].forEach((function(t){t(null!=e?e:{})}))};var Zt=function(){return new Yt};class te{constructor(t){console.log("CommandPal",{options:t}),this.options=t||{},this.ps=Zt()}start(){this.app=new Qt({target:document.body,props:{shortcutKey:this.options.hotkey||"ctrl+shift+p",items:this.options.commands||[]}});const t=this;function e(e){t.app.$on(e,n=>t.ps.publish(e,n.detail))}e("open"),e("closed"),e("textChanged"),e("exec"),this.ps.subscribe("exec",t=>{t.handler&&"function"==typeof t.handler&&t.handler(),t.goto&&"string"==typeof t.goto&&(window.location.hash=t.goto)})}subscribe(t,e){this.ps.subscribe(t,t=>e(t))}}return window.CommandPal=te,te}();
//# sourceMappingURL=bundle.js.map
