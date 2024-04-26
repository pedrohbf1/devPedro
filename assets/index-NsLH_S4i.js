(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Hf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Vu={exports:{}},li={},bu={exports:{}},O={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fr=Symbol.for("react.element"),Vf=Symbol.for("react.portal"),bf=Symbol.for("react.fragment"),Wf=Symbol.for("react.strict_mode"),Qf=Symbol.for("react.profiler"),Kf=Symbol.for("react.provider"),Gf=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),Xf=Symbol.for("react.suspense"),Jf=Symbol.for("react.memo"),Zf=Symbol.for("react.lazy"),ma=Symbol.iterator;function qf(e){return e===null||typeof e!="object"?null:(e=ma&&e[ma]||e["@@iterator"],typeof e=="function"?e:null)}var Wu={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qu=Object.assign,Ku={};function Bn(e,t,n){this.props=e,this.context=t,this.refs=Ku,this.updater=n||Wu}Bn.prototype.isReactComponent={};Bn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Bn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Gu(){}Gu.prototype=Bn.prototype;function cs(e,t,n){this.props=e,this.context=t,this.refs=Ku,this.updater=n||Wu}var ds=cs.prototype=new Gu;ds.constructor=cs;Qu(ds,Bn.prototype);ds.isPureReactComponent=!0;var ha=Array.isArray,Yu=Object.prototype.hasOwnProperty,fs={current:null},Xu={key:!0,ref:!0,__self:!0,__source:!0};function Ju(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Yu.call(t,r)&&!Xu.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var a=Array(s),u=0;u<s;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:Fr,type:e,key:i,ref:l,props:o,_owner:fs.current}}function ep(e,t){return{$$typeof:Fr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ps(e){return typeof e=="object"&&e!==null&&e.$$typeof===Fr}function tp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ga=/\/+/g;function Li(e,t){return typeof e=="object"&&e!==null&&e.key!=null?tp(""+e.key):t.toString(36)}function po(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Fr:case Vf:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Li(l,0):r,ha(o)?(n="",e!=null&&(n=e.replace(ga,"$&/")+"/"),po(o,t,n,"",function(u){return u})):o!=null&&(ps(o)&&(o=ep(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ga,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",ha(e))for(var s=0;s<e.length;s++){i=e[s];var a=r+Li(i,s);l+=po(i,t,n,a,o)}else if(a=qf(e),typeof a=="function")for(e=a.call(e),s=0;!(i=e.next()).done;)i=i.value,a=r+Li(i,s++),l+=po(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Wr(e,t,n){if(e==null)return e;var r=[],o=0;return po(e,r,"","",function(i){return t.call(n,i,o++)}),r}function np(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var ge={current:null},mo={transition:null},rp={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:mo,ReactCurrentOwner:fs};O.Children={map:Wr,forEach:function(e,t,n){Wr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Wr(e,function(){t++}),t},toArray:function(e){return Wr(e,function(t){return t})||[]},only:function(e){if(!ps(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};O.Component=Bn;O.Fragment=bf;O.Profiler=Qf;O.PureComponent=cs;O.StrictMode=Wf;O.Suspense=Xf;O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rp;O.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qu({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=fs.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(a in t)Yu.call(t,a)&&!Xu.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&s!==void 0?s[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){s=Array(a);for(var u=0;u<a;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:Fr,type:e.type,key:o,ref:i,props:r,_owner:l}};O.createContext=function(e){return e={$$typeof:Gf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Kf,_context:e},e.Consumer=e};O.createElement=Ju;O.createFactory=function(e){var t=Ju.bind(null,e);return t.type=e,t};O.createRef=function(){return{current:null}};O.forwardRef=function(e){return{$$typeof:Yf,render:e}};O.isValidElement=ps;O.lazy=function(e){return{$$typeof:Zf,_payload:{_status:-1,_result:e},_init:np}};O.memo=function(e,t){return{$$typeof:Jf,type:e,compare:t===void 0?null:t}};O.startTransition=function(e){var t=mo.transition;mo.transition={};try{e()}finally{mo.transition=t}};O.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};O.useCallback=function(e,t){return ge.current.useCallback(e,t)};O.useContext=function(e){return ge.current.useContext(e)};O.useDebugValue=function(){};O.useDeferredValue=function(e){return ge.current.useDeferredValue(e)};O.useEffect=function(e,t){return ge.current.useEffect(e,t)};O.useId=function(){return ge.current.useId()};O.useImperativeHandle=function(e,t,n){return ge.current.useImperativeHandle(e,t,n)};O.useInsertionEffect=function(e,t){return ge.current.useInsertionEffect(e,t)};O.useLayoutEffect=function(e,t){return ge.current.useLayoutEffect(e,t)};O.useMemo=function(e,t){return ge.current.useMemo(e,t)};O.useReducer=function(e,t,n){return ge.current.useReducer(e,t,n)};O.useRef=function(e){return ge.current.useRef(e)};O.useState=function(e){return ge.current.useState(e)};O.useSyncExternalStore=function(e,t,n){return ge.current.useSyncExternalStore(e,t,n)};O.useTransition=function(){return ge.current.useTransition()};O.version="18.2.0";bu.exports=O;var W=bu.exports;const oe=Hf(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var op=W,ip=Symbol.for("react.element"),lp=Symbol.for("react.fragment"),sp=Object.prototype.hasOwnProperty,ap=op.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,up={key:!0,ref:!0,__self:!0,__source:!0};function Zu(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)sp.call(t,r)&&!up.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:ip,type:e,key:i,ref:l,props:o,_owner:ap.current}}li.Fragment=lp;li.jsx=Zu;li.jsxs=Zu;Vu.exports=li;var d=Vu.exports,ul={},qu={exports:{}},Le={},ec={exports:{}},tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(j,N){var T=j.length;j.push(N);e:for(;0<T;){var A=T-1>>>1,U=j[A];if(0<o(U,N))j[A]=N,j[T]=U,T=A;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var N=j[0],T=j.pop();if(T!==N){j[0]=T;e:for(var A=0,U=j.length,Ht=U>>>1;A<Ht;){var Ue=2*(A+1)-1,mt=j[Ue],je=Ue+1,nt=j[je];if(0>o(mt,T))je<U&&0>o(nt,mt)?(j[A]=nt,j[je]=T,A=je):(j[A]=mt,j[Ue]=T,A=Ue);else if(je<U&&0>o(nt,T))j[A]=nt,j[je]=T,A=je;else break e}}return N}function o(j,N){var T=j.sortIndex-N.sortIndex;return T!==0?T:j.id-N.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();e.unstable_now=function(){return l.now()-s}}var a=[],u=[],h=1,g=null,m=3,x=!1,w=!1,S=!1,L=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(j){for(var N=n(u);N!==null;){if(N.callback===null)r(u);else if(N.startTime<=j)r(u),N.sortIndex=N.expirationTime,t(a,N);else break;N=n(u)}}function v(j){if(S=!1,p(j),!w)if(n(a)!==null)w=!0,Qn(C);else{var N=n(u);N!==null&&Bt(v,N.startTime-j)}}function C(j,N){w=!1,S&&(S=!1,f(_),_=-1),x=!0;var T=m;try{for(p(N),g=n(a);g!==null&&(!(g.expirationTime>N)||j&&!Ee());){var A=g.callback;if(typeof A=="function"){g.callback=null,m=g.priorityLevel;var U=A(g.expirationTime<=N);N=e.unstable_now(),typeof U=="function"?g.callback=U:g===n(a)&&r(a),p(N)}else r(a);g=n(a)}if(g!==null)var Ht=!0;else{var Ue=n(u);Ue!==null&&Bt(v,Ue.startTime-N),Ht=!1}return Ht}finally{g=null,m=T,x=!1}}var E=!1,y=null,_=-1,D=5,$=-1;function Ee(){return!(e.unstable_now()-$<D)}function At(){if(y!==null){var j=e.unstable_now();$=j;var N=!0;try{N=y(!0,j)}finally{N?Ut():(E=!1,y=null)}}else E=!1}var Ut;if(typeof c=="function")Ut=function(){c(At)};else if(typeof MessageChannel<"u"){var Vr=new MessageChannel,Ni=Vr.port2;Vr.port1.onmessage=At,Ut=function(){Ni.postMessage(null)}}else Ut=function(){L(At,0)};function Qn(j){y=j,E||(E=!0,Ut())}function Bt(j,N){_=L(function(){j(e.unstable_now())},N)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(j){j.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,Qn(C))},e.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<j?Math.floor(1e3/j):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(j){switch(m){case 1:case 2:case 3:var N=3;break;default:N=m}var T=m;m=N;try{return j()}finally{m=T}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(j,N){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var T=m;m=j;try{return N()}finally{m=T}},e.unstable_scheduleCallback=function(j,N,T){var A=e.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?A+T:A):T=A,j){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=T+U,j={id:h++,callback:N,priorityLevel:j,startTime:T,expirationTime:U,sortIndex:-1},T>A?(j.sortIndex=T,t(u,j),n(a)===null&&j===n(u)&&(S?(f(_),_=-1):S=!0,Bt(v,T-A))):(j.sortIndex=U,t(a,j),w||x||(w=!0,Qn(C))),j},e.unstable_shouldYield=Ee,e.unstable_wrapCallback=function(j){var N=m;return function(){var T=m;m=N;try{return j.apply(this,arguments)}finally{m=T}}}})(tc);ec.exports=tc;var cp=ec.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nc=W,Te=cp;function k(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rc=new Set,xr={};function on(e,t){Pn(e,t),Pn(e+"Capture",t)}function Pn(e,t){for(xr[e]=t,e=0;e<t.length;e++)rc.add(t[e])}var ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cl=Object.prototype.hasOwnProperty,dp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,va={},ya={};function fp(e){return cl.call(ya,e)?!0:cl.call(va,e)?!1:dp.test(e)?ya[e]=!0:(va[e]=!0,!1)}function pp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function mp(e,t,n,r){if(t===null||typeof t>"u"||pp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ve(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var ae={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ae[e]=new ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ae[t]=new ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ae[e]=new ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ae[e]=new ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ae[e]=new ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ae[e]=new ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ae[e]=new ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ae[e]=new ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ae[e]=new ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var ms=/[\-:]([a-z])/g;function hs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ms,hs);ae[t]=new ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ms,hs);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ms,hs);ae[t]=new ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!1,!1)});ae.xlinkHref=new ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ae[e]=new ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function gs(e,t,n,r){var o=ae.hasOwnProperty(t)?ae[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(mp(t,n,o,r)&&(n=null),r||o===null?fp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pt=nc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qr=Symbol.for("react.element"),un=Symbol.for("react.portal"),cn=Symbol.for("react.fragment"),vs=Symbol.for("react.strict_mode"),dl=Symbol.for("react.profiler"),oc=Symbol.for("react.provider"),ic=Symbol.for("react.context"),ys=Symbol.for("react.forward_ref"),fl=Symbol.for("react.suspense"),pl=Symbol.for("react.suspense_list"),xs=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),lc=Symbol.for("react.offscreen"),xa=Symbol.iterator;function Gn(e){return e===null||typeof e!="object"?null:(e=xa&&e[xa]||e["@@iterator"],typeof e=="function"?e:null)}var Y=Object.assign,Ri;function rr(e){if(Ri===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ri=t&&t[1]||""}return`
`+Ri+e}var $i=!1;function Oi(e,t){if(!e||$i)return"";$i=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,s=i.length-1;1<=l&&0<=s&&o[l]!==i[s];)s--;for(;1<=l&&0<=s;l--,s--)if(o[l]!==i[s]){if(l!==1||s!==1)do if(l--,s--,0>s||o[l]!==i[s]){var a=`
`+o[l].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=l&&0<=s);break}}}finally{$i=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?rr(e):""}function hp(e){switch(e.tag){case 5:return rr(e.type);case 16:return rr("Lazy");case 13:return rr("Suspense");case 19:return rr("SuspenseList");case 0:case 2:case 15:return e=Oi(e.type,!1),e;case 11:return e=Oi(e.type.render,!1),e;case 1:return e=Oi(e.type,!0),e;default:return""}}function ml(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case cn:return"Fragment";case un:return"Portal";case dl:return"Profiler";case vs:return"StrictMode";case fl:return"Suspense";case pl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ic:return(e.displayName||"Context")+".Consumer";case oc:return(e._context.displayName||"Context")+".Provider";case ys:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case xs:return t=e.displayName||null,t!==null?t:ml(e.type)||"Memo";case xt:t=e._payload,e=e._init;try{return ml(e(t))}catch{}}return null}function gp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ml(t);case 8:return t===vs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ot(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vp(e){var t=sc(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){e._valueTracker||(e._valueTracker=vp(e))}function ac(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=sc(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function To(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function hl(e,t){var n=t.checked;return Y({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wa(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ot(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function uc(e,t){t=t.checked,t!=null&&gs(e,"checked",t,!1)}function gl(e,t){uc(e,t);var n=Ot(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?vl(e,t.type,n):t.hasOwnProperty("defaultValue")&&vl(e,t.type,Ot(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Sa(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function vl(e,t,n){(t!=="number"||To(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var or=Array.isArray;function kn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ot(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function yl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(k(91));return Y({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ka(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(k(92));if(or(n)){if(1<n.length)throw Error(k(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ot(n)}}function cc(e,t){var n=Ot(t.value),r=Ot(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ca(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function dc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?dc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Gr,fc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Gr=Gr||document.createElement("div"),Gr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Gr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ur={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yp=["Webkit","ms","Moz","O"];Object.keys(ur).forEach(function(e){yp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ur[t]=ur[e]})});function pc(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ur.hasOwnProperty(e)&&ur[e]?(""+t).trim():t+"px"}function mc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=pc(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var xp=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wl(e,t){if(t){if(xp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(k(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(k(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(k(61))}if(t.style!=null&&typeof t.style!="object")throw Error(k(62))}}function Sl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kl=null;function ws(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,Cn=null,En=null;function Ea(e){if(e=Ur(e)){if(typeof Cl!="function")throw Error(k(280));var t=e.stateNode;t&&(t=di(t),Cl(e.stateNode,e.type,t))}}function hc(e){Cn?En?En.push(e):En=[e]:Cn=e}function gc(){if(Cn){var e=Cn,t=En;if(En=Cn=null,Ea(e),t)for(e=0;e<t.length;e++)Ea(t[e])}}function vc(e,t){return e(t)}function yc(){}var Mi=!1;function xc(e,t,n){if(Mi)return e(t,n);Mi=!0;try{return vc(e,t,n)}finally{Mi=!1,(Cn!==null||En!==null)&&(yc(),gc())}}function Sr(e,t){var n=e.stateNode;if(n===null)return null;var r=di(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(k(231,t,typeof n));return n}var El=!1;if(ut)try{var Yn={};Object.defineProperty(Yn,"passive",{get:function(){El=!0}}),window.addEventListener("test",Yn,Yn),window.removeEventListener("test",Yn,Yn)}catch{El=!1}function wp(e,t,n,r,o,i,l,s,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(h){this.onError(h)}}var cr=!1,Lo=null,Ro=!1,jl=null,Sp={onError:function(e){cr=!0,Lo=e}};function kp(e,t,n,r,o,i,l,s,a){cr=!1,Lo=null,wp.apply(Sp,arguments)}function Cp(e,t,n,r,o,i,l,s,a){if(kp.apply(this,arguments),cr){if(cr){var u=Lo;cr=!1,Lo=null}else throw Error(k(198));Ro||(Ro=!0,jl=u)}}function ln(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ja(e){if(ln(e)!==e)throw Error(k(188))}function Ep(e){var t=e.alternate;if(!t){if(t=ln(e),t===null)throw Error(k(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ja(o),e;if(i===r)return ja(o),t;i=i.sibling}throw Error(k(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,s=o.child;s;){if(s===n){l=!0,n=o,r=i;break}if(s===r){l=!0,r=o,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=o;break}if(s===r){l=!0,r=i,n=o;break}s=s.sibling}if(!l)throw Error(k(189))}}if(n.alternate!==r)throw Error(k(190))}if(n.tag!==3)throw Error(k(188));return n.stateNode.current===n?e:t}function Sc(e){return e=Ep(e),e!==null?kc(e):null}function kc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=kc(e);if(t!==null)return t;e=e.sibling}return null}var Cc=Te.unstable_scheduleCallback,za=Te.unstable_cancelCallback,jp=Te.unstable_shouldYield,zp=Te.unstable_requestPaint,J=Te.unstable_now,_p=Te.unstable_getCurrentPriorityLevel,Ss=Te.unstable_ImmediatePriority,Ec=Te.unstable_UserBlockingPriority,$o=Te.unstable_NormalPriority,Pp=Te.unstable_LowPriority,jc=Te.unstable_IdlePriority,si=null,qe=null;function Np(e){if(qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(si,e,void 0,(e.current.flags&128)===128)}catch{}}var We=Math.clz32?Math.clz32:Rp,Tp=Math.log,Lp=Math.LN2;function Rp(e){return e>>>=0,e===0?32:31-(Tp(e)/Lp|0)|0}var Yr=64,Xr=4194304;function ir(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Oo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var s=l&~o;s!==0?r=ir(s):(i&=l,i!==0&&(r=ir(i)))}else l=n&~o,l!==0?r=ir(l):i!==0&&(r=ir(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-We(t),o=1<<n,r|=e[n],t&=~o;return r}function $p(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Op(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-We(i),s=1<<l,a=o[l];a===-1?(!(s&n)||s&r)&&(o[l]=$p(s,t)):a<=t&&(e.expiredLanes|=s),i&=~s}}function zl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function zc(){var e=Yr;return Yr<<=1,!(Yr&4194240)&&(Yr=64),e}function Ii(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-We(t),e[t]=n}function Mp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-We(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function ks(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-We(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var F=0;function _c(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pc,Cs,Nc,Tc,Lc,_l=!1,Jr=[],jt=null,zt=null,_t=null,kr=new Map,Cr=new Map,St=[],Ip="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _a(e,t){switch(e){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":zt=null;break;case"mouseover":case"mouseout":_t=null;break;case"pointerover":case"pointerout":kr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cr.delete(t.pointerId)}}function Xn(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ur(t),t!==null&&Cs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Fp(e,t,n,r,o){switch(t){case"focusin":return jt=Xn(jt,e,t,n,r,o),!0;case"dragenter":return zt=Xn(zt,e,t,n,r,o),!0;case"mouseover":return _t=Xn(_t,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return kr.set(i,Xn(kr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Cr.set(i,Xn(Cr.get(i)||null,e,t,n,r,o)),!0}return!1}function Rc(e){var t=Qt(e.target);if(t!==null){var n=ln(t);if(n!==null){if(t=n.tag,t===13){if(t=wc(n),t!==null){e.blockedOn=t,Lc(e.priority,function(){Nc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ho(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);kl=r,n.target.dispatchEvent(r),kl=null}else return t=Ur(n),t!==null&&Cs(t),e.blockedOn=n,!1;t.shift()}return!0}function Pa(e,t,n){ho(e)&&n.delete(t)}function Dp(){_l=!1,jt!==null&&ho(jt)&&(jt=null),zt!==null&&ho(zt)&&(zt=null),_t!==null&&ho(_t)&&(_t=null),kr.forEach(Pa),Cr.forEach(Pa)}function Jn(e,t){e.blockedOn===t&&(e.blockedOn=null,_l||(_l=!0,Te.unstable_scheduleCallback(Te.unstable_NormalPriority,Dp)))}function Er(e){function t(o){return Jn(o,e)}if(0<Jr.length){Jn(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(jt!==null&&Jn(jt,e),zt!==null&&Jn(zt,e),_t!==null&&Jn(_t,e),kr.forEach(t),Cr.forEach(t),n=0;n<St.length;n++)r=St[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<St.length&&(n=St[0],n.blockedOn===null);)Rc(n),n.blockedOn===null&&St.shift()}var jn=pt.ReactCurrentBatchConfig,Mo=!0;function Ap(e,t,n,r){var o=F,i=jn.transition;jn.transition=null;try{F=1,Es(e,t,n,r)}finally{F=o,jn.transition=i}}function Up(e,t,n,r){var o=F,i=jn.transition;jn.transition=null;try{F=4,Es(e,t,n,r)}finally{F=o,jn.transition=i}}function Es(e,t,n,r){if(Mo){var o=Pl(e,t,n,r);if(o===null)Qi(e,t,r,Io,n),_a(e,r);else if(Fp(o,e,t,n,r))r.stopPropagation();else if(_a(e,r),t&4&&-1<Ip.indexOf(e)){for(;o!==null;){var i=Ur(o);if(i!==null&&Pc(i),i=Pl(e,t,n,r),i===null&&Qi(e,t,r,Io,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Qi(e,t,r,null,n)}}var Io=null;function Pl(e,t,n,r){if(Io=null,e=ws(r),e=Qt(e),e!==null)if(t=ln(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Io=e,null}function $c(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_p()){case Ss:return 1;case Ec:return 4;case $o:case Pp:return 16;case jc:return 536870912;default:return 16}default:return 16}}var Ct=null,js=null,go=null;function Oc(){if(go)return go;var e,t=js,n=t.length,r,o="value"in Ct?Ct.value:Ct.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return go=o.slice(e,1<r?1-r:void 0)}function vo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Zr(){return!0}function Na(){return!1}function Re(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Zr:Na,this.isPropagationStopped=Na,this}return Y(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zr)},persist:function(){},isPersistent:Zr}),t}var Hn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zs=Re(Hn),Ar=Y({},Hn,{view:0,detail:0}),Bp=Re(Ar),Fi,Di,Zn,ai=Y({},Ar,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:_s,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zn&&(Zn&&e.type==="mousemove"?(Fi=e.screenX-Zn.screenX,Di=e.screenY-Zn.screenY):Di=Fi=0,Zn=e),Fi)},movementY:function(e){return"movementY"in e?e.movementY:Di}}),Ta=Re(ai),Hp=Y({},ai,{dataTransfer:0}),Vp=Re(Hp),bp=Y({},Ar,{relatedTarget:0}),Ai=Re(bp),Wp=Y({},Hn,{animationName:0,elapsedTime:0,pseudoElement:0}),Qp=Re(Wp),Kp=Y({},Hn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gp=Re(Kp),Yp=Y({},Hn,{data:0}),La=Re(Yp),Xp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zp[e])?!!t[e]:!1}function _s(){return qp}var em=Y({},Ar,{key:function(e){if(e.key){var t=Xp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=vo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:_s,charCode:function(e){return e.type==="keypress"?vo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tm=Re(em),nm=Y({},ai,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ra=Re(nm),rm=Y({},Ar,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:_s}),om=Re(rm),im=Y({},Hn,{propertyName:0,elapsedTime:0,pseudoElement:0}),lm=Re(im),sm=Y({},ai,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),am=Re(sm),um=[9,13,27,32],Ps=ut&&"CompositionEvent"in window,dr=null;ut&&"documentMode"in document&&(dr=document.documentMode);var cm=ut&&"TextEvent"in window&&!dr,Mc=ut&&(!Ps||dr&&8<dr&&11>=dr),$a=" ",Oa=!1;function Ic(e,t){switch(e){case"keyup":return um.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var dn=!1;function dm(e,t){switch(e){case"compositionend":return Fc(t);case"keypress":return t.which!==32?null:(Oa=!0,$a);case"textInput":return e=t.data,e===$a&&Oa?null:e;default:return null}}function fm(e,t){if(dn)return e==="compositionend"||!Ps&&Ic(e,t)?(e=Oc(),go=js=Ct=null,dn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Mc&&t.locale!=="ko"?null:t.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ma(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!pm[e.type]:t==="textarea"}function Dc(e,t,n,r){hc(r),t=Fo(t,"onChange"),0<t.length&&(n=new zs("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var fr=null,jr=null;function mm(e){Yc(e,0)}function ui(e){var t=mn(e);if(ac(t))return e}function hm(e,t){if(e==="change")return t}var Ac=!1;if(ut){var Ui;if(ut){var Bi="oninput"in document;if(!Bi){var Ia=document.createElement("div");Ia.setAttribute("oninput","return;"),Bi=typeof Ia.oninput=="function"}Ui=Bi}else Ui=!1;Ac=Ui&&(!document.documentMode||9<document.documentMode)}function Fa(){fr&&(fr.detachEvent("onpropertychange",Uc),jr=fr=null)}function Uc(e){if(e.propertyName==="value"&&ui(jr)){var t=[];Dc(t,jr,e,ws(e)),xc(mm,t)}}function gm(e,t,n){e==="focusin"?(Fa(),fr=t,jr=n,fr.attachEvent("onpropertychange",Uc)):e==="focusout"&&Fa()}function vm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ui(jr)}function ym(e,t){if(e==="click")return ui(t)}function xm(e,t){if(e==="input"||e==="change")return ui(t)}function wm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ge=typeof Object.is=="function"?Object.is:wm;function zr(e,t){if(Ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!cl.call(t,o)||!Ge(e[o],t[o]))return!1}return!0}function Da(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Aa(e,t){var n=Da(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Da(n)}}function Bc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Bc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hc(){for(var e=window,t=To();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=To(e.document)}return t}function Ns(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Sm(e){var t=Hc(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Bc(n.ownerDocument.documentElement,n)){if(r!==null&&Ns(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Aa(n,i);var l=Aa(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var km=ut&&"documentMode"in document&&11>=document.documentMode,fn=null,Nl=null,pr=null,Tl=!1;function Ua(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Tl||fn==null||fn!==To(r)||(r=fn,"selectionStart"in r&&Ns(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),pr&&zr(pr,r)||(pr=r,r=Fo(Nl,"onSelect"),0<r.length&&(t=new zs("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=fn)))}function qr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pn={animationend:qr("Animation","AnimationEnd"),animationiteration:qr("Animation","AnimationIteration"),animationstart:qr("Animation","AnimationStart"),transitionend:qr("Transition","TransitionEnd")},Hi={},Vc={};ut&&(Vc=document.createElement("div").style,"AnimationEvent"in window||(delete pn.animationend.animation,delete pn.animationiteration.animation,delete pn.animationstart.animation),"TransitionEvent"in window||delete pn.transitionend.transition);function ci(e){if(Hi[e])return Hi[e];if(!pn[e])return e;var t=pn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Vc)return Hi[e]=t[n];return e}var bc=ci("animationend"),Wc=ci("animationiteration"),Qc=ci("animationstart"),Kc=ci("transitionend"),Gc=new Map,Ba="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function It(e,t){Gc.set(e,t),on(t,[e])}for(var Vi=0;Vi<Ba.length;Vi++){var bi=Ba[Vi],Cm=bi.toLowerCase(),Em=bi[0].toUpperCase()+bi.slice(1);It(Cm,"on"+Em)}It(bc,"onAnimationEnd");It(Wc,"onAnimationIteration");It(Qc,"onAnimationStart");It("dblclick","onDoubleClick");It("focusin","onFocus");It("focusout","onBlur");It(Kc,"onTransitionEnd");Pn("onMouseEnter",["mouseout","mouseover"]);Pn("onMouseLeave",["mouseout","mouseover"]);Pn("onPointerEnter",["pointerout","pointerover"]);Pn("onPointerLeave",["pointerout","pointerover"]);on("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));on("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));on("onBeforeInput",["compositionend","keypress","textInput","paste"]);on("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));on("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));on("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jm=new Set("cancel close invalid load scroll toggle".split(" ").concat(lr));function Ha(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Cp(r,t,void 0,e),e.currentTarget=null}function Yc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var s=r[l],a=s.instance,u=s.currentTarget;if(s=s.listener,a!==i&&o.isPropagationStopped())break e;Ha(o,s,u),i=a}else for(l=0;l<r.length;l++){if(s=r[l],a=s.instance,u=s.currentTarget,s=s.listener,a!==i&&o.isPropagationStopped())break e;Ha(o,s,u),i=a}}}if(Ro)throw e=jl,Ro=!1,jl=null,e}function H(e,t){var n=t[Ml];n===void 0&&(n=t[Ml]=new Set);var r=e+"__bubble";n.has(r)||(Xc(t,e,2,!1),n.add(r))}function Wi(e,t,n){var r=0;t&&(r|=4),Xc(n,e,r,t)}var eo="_reactListening"+Math.random().toString(36).slice(2);function _r(e){if(!e[eo]){e[eo]=!0,rc.forEach(function(n){n!=="selectionchange"&&(jm.has(n)||Wi(n,!1,e),Wi(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[eo]||(t[eo]=!0,Wi("selectionchange",!1,t))}}function Xc(e,t,n,r){switch($c(t)){case 1:var o=Ap;break;case 4:o=Up;break;default:o=Es}n=o.bind(null,t,n,e),o=void 0,!El||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Qi(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var a=l.tag;if((a===3||a===4)&&(a=l.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;l=l.return}for(;s!==null;){if(l=Qt(s),l===null)return;if(a=l.tag,a===5||a===6){r=i=l;continue e}s=s.parentNode}}r=r.return}xc(function(){var u=i,h=ws(n),g=[];e:{var m=Gc.get(e);if(m!==void 0){var x=zs,w=e;switch(e){case"keypress":if(vo(n)===0)break e;case"keydown":case"keyup":x=tm;break;case"focusin":w="focus",x=Ai;break;case"focusout":w="blur",x=Ai;break;case"beforeblur":case"afterblur":x=Ai;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Ta;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Vp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=om;break;case bc:case Wc:case Qc:x=Qp;break;case Kc:x=lm;break;case"scroll":x=Bp;break;case"wheel":x=am;break;case"copy":case"cut":case"paste":x=Gp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Ra}var S=(t&4)!==0,L=!S&&e==="scroll",f=S?m!==null?m+"Capture":null:m;S=[];for(var c=u,p;c!==null;){p=c;var v=p.stateNode;if(p.tag===5&&v!==null&&(p=v,f!==null&&(v=Sr(c,f),v!=null&&S.push(Pr(c,v,p)))),L)break;c=c.return}0<S.length&&(m=new x(m,w,null,n,h),g.push({event:m,listeners:S}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",m&&n!==kl&&(w=n.relatedTarget||n.fromElement)&&(Qt(w)||w[ct]))break e;if((x||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?Qt(w):null,w!==null&&(L=ln(w),w!==L||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(S=Ta,v="onMouseLeave",f="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ra,v="onPointerLeave",f="onPointerEnter",c="pointer"),L=x==null?m:mn(x),p=w==null?m:mn(w),m=new S(v,c+"leave",x,n,h),m.target=L,m.relatedTarget=p,v=null,Qt(h)===u&&(S=new S(f,c+"enter",w,n,h),S.target=p,S.relatedTarget=L,v=S),L=v,x&&w)t:{for(S=x,f=w,c=0,p=S;p;p=sn(p))c++;for(p=0,v=f;v;v=sn(v))p++;for(;0<c-p;)S=sn(S),c--;for(;0<p-c;)f=sn(f),p--;for(;c--;){if(S===f||f!==null&&S===f.alternate)break t;S=sn(S),f=sn(f)}S=null}else S=null;x!==null&&Va(g,m,x,S,!1),w!==null&&L!==null&&Va(g,L,w,S,!0)}}e:{if(m=u?mn(u):window,x=m.nodeName&&m.nodeName.toLowerCase(),x==="select"||x==="input"&&m.type==="file")var C=hm;else if(Ma(m))if(Ac)C=xm;else{C=vm;var E=gm}else(x=m.nodeName)&&x.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(C=ym);if(C&&(C=C(e,u))){Dc(g,C,n,h);break e}E&&E(e,m,u),e==="focusout"&&(E=m._wrapperState)&&E.controlled&&m.type==="number"&&vl(m,"number",m.value)}switch(E=u?mn(u):window,e){case"focusin":(Ma(E)||E.contentEditable==="true")&&(fn=E,Nl=u,pr=null);break;case"focusout":pr=Nl=fn=null;break;case"mousedown":Tl=!0;break;case"contextmenu":case"mouseup":case"dragend":Tl=!1,Ua(g,n,h);break;case"selectionchange":if(km)break;case"keydown":case"keyup":Ua(g,n,h)}var y;if(Ps)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else dn?Ic(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Mc&&n.locale!=="ko"&&(dn||_!=="onCompositionStart"?_==="onCompositionEnd"&&dn&&(y=Oc()):(Ct=h,js="value"in Ct?Ct.value:Ct.textContent,dn=!0)),E=Fo(u,_),0<E.length&&(_=new La(_,e,null,n,h),g.push({event:_,listeners:E}),y?_.data=y:(y=Fc(n),y!==null&&(_.data=y)))),(y=cm?dm(e,n):fm(e,n))&&(u=Fo(u,"onBeforeInput"),0<u.length&&(h=new La("onBeforeInput","beforeinput",null,n,h),g.push({event:h,listeners:u}),h.data=y))}Yc(g,t)})}function Pr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Sr(e,n),i!=null&&r.unshift(Pr(e,i,o)),i=Sr(e,t),i!=null&&r.push(Pr(e,i,o))),e=e.return}return r}function sn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Va(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var s=n,a=s.alternate,u=s.stateNode;if(a!==null&&a===r)break;s.tag===5&&u!==null&&(s=u,o?(a=Sr(n,i),a!=null&&l.unshift(Pr(n,a,s))):o||(a=Sr(n,i),a!=null&&l.push(Pr(n,a,s)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var zm=/\r\n?/g,_m=/\u0000|\uFFFD/g;function ba(e){return(typeof e=="string"?e:""+e).replace(zm,`
`).replace(_m,"")}function to(e,t,n){if(t=ba(t),ba(e)!==t&&n)throw Error(k(425))}function Do(){}var Ll=null,Rl=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ol=typeof setTimeout=="function"?setTimeout:void 0,Pm=typeof clearTimeout=="function"?clearTimeout:void 0,Wa=typeof Promise=="function"?Promise:void 0,Nm=typeof queueMicrotask=="function"?queueMicrotask:typeof Wa<"u"?function(e){return Wa.resolve(null).then(e).catch(Tm)}:Ol;function Tm(e){setTimeout(function(){throw e})}function Ki(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Er(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Er(t)}function Pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Qa(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Vn=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Vn,Nr="__reactProps$"+Vn,ct="__reactContainer$"+Vn,Ml="__reactEvents$"+Vn,Lm="__reactListeners$"+Vn,Rm="__reactHandles$"+Vn;function Qt(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ct]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Qa(e);e!==null;){if(n=e[Ze])return n;e=Qa(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[Ze]||e[ct],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(k(33))}function di(e){return e[Nr]||null}var Il=[],hn=-1;function Ft(e){return{current:e}}function b(e){0>hn||(e.current=Il[hn],Il[hn]=null,hn--)}function B(e,t){hn++,Il[hn]=e.current,e.current=t}var Mt={},pe=Ft(Mt),Se=Ft(!1),qt=Mt;function Nn(e,t){var n=e.type.contextTypes;if(!n)return Mt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ke(e){return e=e.childContextTypes,e!=null}function Ao(){b(Se),b(pe)}function Ka(e,t,n){if(pe.current!==Mt)throw Error(k(168));B(pe,t),B(Se,n)}function Jc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(k(108,gp(e)||"Unknown",o));return Y({},n,r)}function Uo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Mt,qt=pe.current,B(pe,e),B(Se,Se.current),!0}function Ga(e,t,n){var r=e.stateNode;if(!r)throw Error(k(169));n?(e=Jc(e,t,qt),r.__reactInternalMemoizedMergedChildContext=e,b(Se),b(pe),B(pe,e)):b(Se),B(Se,n)}var it=null,fi=!1,Gi=!1;function Zc(e){it===null?it=[e]:it.push(e)}function $m(e){fi=!0,Zc(e)}function Dt(){if(!Gi&&it!==null){Gi=!0;var e=0,t=F;try{var n=it;for(F=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}it=null,fi=!1}catch(o){throw it!==null&&(it=it.slice(e+1)),Cc(Ss,Dt),o}finally{F=t,Gi=!1}}return null}var gn=[],vn=0,Bo=null,Ho=0,$e=[],Oe=0,en=null,lt=1,st="";function bt(e,t){gn[vn++]=Ho,gn[vn++]=Bo,Bo=e,Ho=t}function qc(e,t,n){$e[Oe++]=lt,$e[Oe++]=st,$e[Oe++]=en,en=e;var r=lt;e=st;var o=32-We(r)-1;r&=~(1<<o),n+=1;var i=32-We(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,lt=1<<32-We(t)+o|n<<o|r,st=i+e}else lt=1<<i|n<<o|r,st=e}function Ts(e){e.return!==null&&(bt(e,1),qc(e,1,0))}function Ls(e){for(;e===Bo;)Bo=gn[--vn],gn[vn]=null,Ho=gn[--vn],gn[vn]=null;for(;e===en;)en=$e[--Oe],$e[Oe]=null,st=$e[--Oe],$e[Oe]=null,lt=$e[--Oe],$e[Oe]=null}var Ne=null,Pe=null,Q=!1,be=null;function ed(e,t){var n=Me(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ya(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ne=e,Pe=Pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ne=e,Pe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=en!==null?{id:lt,overflow:st}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Me(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ne=e,Pe=null,!0):!1;default:return!1}}function Fl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Dl(e){if(Q){var t=Pe;if(t){var n=t;if(!Ya(e,t)){if(Fl(e))throw Error(k(418));t=Pt(n.nextSibling);var r=Ne;t&&Ya(e,t)?ed(r,n):(e.flags=e.flags&-4097|2,Q=!1,Ne=e)}}else{if(Fl(e))throw Error(k(418));e.flags=e.flags&-4097|2,Q=!1,Ne=e}}}function Xa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ne=e}function no(e){if(e!==Ne)return!1;if(!Q)return Xa(e),Q=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=Pe)){if(Fl(e))throw td(),Error(k(418));for(;t;)ed(e,t),t=Pt(t.nextSibling)}if(Xa(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(k(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Pe=Pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Pe=null}}else Pe=Ne?Pt(e.stateNode.nextSibling):null;return!0}function td(){for(var e=Pe;e;)e=Pt(e.nextSibling)}function Tn(){Pe=Ne=null,Q=!1}function Rs(e){be===null?be=[e]:be.push(e)}var Om=pt.ReactCurrentBatchConfig;function He(e,t){if(e&&e.defaultProps){t=Y({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Vo=Ft(null),bo=null,yn=null,$s=null;function Os(){$s=yn=bo=null}function Ms(e){var t=Vo.current;b(Vo),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zn(e,t){bo=e,$s=yn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(we=!0),e.firstContext=null)}function Fe(e){var t=e._currentValue;if($s!==e)if(e={context:e,memoizedValue:t,next:null},yn===null){if(bo===null)throw Error(k(308));yn=e,bo.dependencies={lanes:0,firstContext:e}}else yn=yn.next=e;return t}var Kt=null;function Is(e){Kt===null?Kt=[e]:Kt.push(e)}function nd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Is(t)):(n.next=o.next,o.next=n),t.interleaved=n,dt(e,r)}function dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var wt=!1;function Fs(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function rd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function at(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Nt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,dt(e,n)}return o=r.interleaved,o===null?(t.next=t,Is(r)):(t.next=o.next,o.next=t),r.interleaved=t,dt(e,n)}function yo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}function Ja(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Wo(e,t,n,r){var o=e.updateQueue;wt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var a=s,u=a.next;a.next=null,l===null?i=u:l.next=u,l=a;var h=e.alternate;h!==null&&(h=h.updateQueue,s=h.lastBaseUpdate,s!==l&&(s===null?h.firstBaseUpdate=u:s.next=u,h.lastBaseUpdate=a))}if(i!==null){var g=o.baseState;l=0,h=u=a=null,s=i;do{var m=s.lane,x=s.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:x,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var w=e,S=s;switch(m=t,x=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){g=w.call(x,g,m);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=S.payload,m=typeof w=="function"?w.call(x,g,m):w,m==null)break e;g=Y({},g,m);break e;case 2:wt=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[s]:m.push(s))}else x={eventTime:x,lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},h===null?(u=h=x,a=g):h=h.next=x,l|=m;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;m=s,s=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(h===null&&(a=g),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=h,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);nn|=l,e.lanes=l,e.memoizedState=g}}function Za(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(k(191,o));o.call(r)}}}var od=new nc.Component().refs;function Ul(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Y({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var pi={isMounted:function(e){return(e=e._reactInternals)?ln(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=he(),o=Lt(e),i=at(r,o);i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(Qe(t,e,o,r),yo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=he(),o=Lt(e),i=at(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Nt(e,i,o),t!==null&&(Qe(t,e,o,r),yo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=he(),r=Lt(e),o=at(n,r);o.tag=2,t!=null&&(o.callback=t),t=Nt(e,o,r),t!==null&&(Qe(t,e,r,n),yo(t,e,r))}};function qa(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!zr(n,r)||!zr(o,i):!0}function id(e,t,n){var r=!1,o=Mt,i=t.contextType;return typeof i=="object"&&i!==null?i=Fe(i):(o=ke(t)?qt:pe.current,r=t.contextTypes,i=(r=r!=null)?Nn(e,o):Mt),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=pi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function eu(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&pi.enqueueReplaceState(t,t.state,null)}function Bl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=od,Fs(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Fe(i):(i=ke(t)?qt:pe.current,o.context=Nn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ul(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&pi.enqueueReplaceState(o,o.state,null),Wo(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function qn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(k(309));var r=n.stateNode}if(!r)throw Error(k(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var s=o.refs;s===od&&(s=o.refs={}),l===null?delete s[i]:s[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(k(284));if(!n._owner)throw Error(k(290,e))}return e}function ro(e,t){throw e=Object.prototype.toString.call(t),Error(k(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tu(e){var t=e._init;return t(e._payload)}function ld(e){function t(f,c){if(e){var p=f.deletions;p===null?(f.deletions=[c],f.flags|=16):p.push(c)}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function o(f,c){return f=Rt(f,c),f.index=0,f.sibling=null,f}function i(f,c,p){return f.index=p,e?(p=f.alternate,p!==null?(p=p.index,p<c?(f.flags|=2,c):p):(f.flags|=2,c)):(f.flags|=1048576,c)}function l(f){return e&&f.alternate===null&&(f.flags|=2),f}function s(f,c,p,v){return c===null||c.tag!==6?(c=tl(p,f.mode,v),c.return=f,c):(c=o(c,p),c.return=f,c)}function a(f,c,p,v){var C=p.type;return C===cn?h(f,c,p.props.children,v,p.key):c!==null&&(c.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xt&&tu(C)===c.type)?(v=o(c,p.props),v.ref=qn(f,c,p),v.return=f,v):(v=Eo(p.type,p.key,p.props,null,f.mode,v),v.ref=qn(f,c,p),v.return=f,v)}function u(f,c,p,v){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=nl(p,f.mode,v),c.return=f,c):(c=o(c,p.children||[]),c.return=f,c)}function h(f,c,p,v,C){return c===null||c.tag!==7?(c=Jt(p,f.mode,v,C),c.return=f,c):(c=o(c,p),c.return=f,c)}function g(f,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=tl(""+c,f.mode,p),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Qr:return p=Eo(c.type,c.key,c.props,null,f.mode,p),p.ref=qn(f,null,c),p.return=f,p;case un:return c=nl(c,f.mode,p),c.return=f,c;case xt:var v=c._init;return g(f,v(c._payload),p)}if(or(c)||Gn(c))return c=Jt(c,f.mode,p,null),c.return=f,c;ro(f,c)}return null}function m(f,c,p,v){var C=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return C!==null?null:s(f,c,""+p,v);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:return p.key===C?a(f,c,p,v):null;case un:return p.key===C?u(f,c,p,v):null;case xt:return C=p._init,m(f,c,C(p._payload),v)}if(or(p)||Gn(p))return C!==null?null:h(f,c,p,v,null);ro(f,p)}return null}function x(f,c,p,v,C){if(typeof v=="string"&&v!==""||typeof v=="number")return f=f.get(p)||null,s(c,f,""+v,C);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qr:return f=f.get(v.key===null?p:v.key)||null,a(c,f,v,C);case un:return f=f.get(v.key===null?p:v.key)||null,u(c,f,v,C);case xt:var E=v._init;return x(f,c,p,E(v._payload),C)}if(or(v)||Gn(v))return f=f.get(p)||null,h(c,f,v,C,null);ro(c,v)}return null}function w(f,c,p,v){for(var C=null,E=null,y=c,_=c=0,D=null;y!==null&&_<p.length;_++){y.index>_?(D=y,y=null):D=y.sibling;var $=m(f,y,p[_],v);if($===null){y===null&&(y=D);break}e&&y&&$.alternate===null&&t(f,y),c=i($,c,_),E===null?C=$:E.sibling=$,E=$,y=D}if(_===p.length)return n(f,y),Q&&bt(f,_),C;if(y===null){for(;_<p.length;_++)y=g(f,p[_],v),y!==null&&(c=i(y,c,_),E===null?C=y:E.sibling=y,E=y);return Q&&bt(f,_),C}for(y=r(f,y);_<p.length;_++)D=x(y,f,_,p[_],v),D!==null&&(e&&D.alternate!==null&&y.delete(D.key===null?_:D.key),c=i(D,c,_),E===null?C=D:E.sibling=D,E=D);return e&&y.forEach(function(Ee){return t(f,Ee)}),Q&&bt(f,_),C}function S(f,c,p,v){var C=Gn(p);if(typeof C!="function")throw Error(k(150));if(p=C.call(p),p==null)throw Error(k(151));for(var E=C=null,y=c,_=c=0,D=null,$=p.next();y!==null&&!$.done;_++,$=p.next()){y.index>_?(D=y,y=null):D=y.sibling;var Ee=m(f,y,$.value,v);if(Ee===null){y===null&&(y=D);break}e&&y&&Ee.alternate===null&&t(f,y),c=i(Ee,c,_),E===null?C=Ee:E.sibling=Ee,E=Ee,y=D}if($.done)return n(f,y),Q&&bt(f,_),C;if(y===null){for(;!$.done;_++,$=p.next())$=g(f,$.value,v),$!==null&&(c=i($,c,_),E===null?C=$:E.sibling=$,E=$);return Q&&bt(f,_),C}for(y=r(f,y);!$.done;_++,$=p.next())$=x(y,f,_,$.value,v),$!==null&&(e&&$.alternate!==null&&y.delete($.key===null?_:$.key),c=i($,c,_),E===null?C=$:E.sibling=$,E=$);return e&&y.forEach(function(At){return t(f,At)}),Q&&bt(f,_),C}function L(f,c,p,v){if(typeof p=="object"&&p!==null&&p.type===cn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Qr:e:{for(var C=p.key,E=c;E!==null;){if(E.key===C){if(C=p.type,C===cn){if(E.tag===7){n(f,E.sibling),c=o(E,p.props.children),c.return=f,f=c;break e}}else if(E.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===xt&&tu(C)===E.type){n(f,E.sibling),c=o(E,p.props),c.ref=qn(f,E,p),c.return=f,f=c;break e}n(f,E);break}else t(f,E);E=E.sibling}p.type===cn?(c=Jt(p.props.children,f.mode,v,p.key),c.return=f,f=c):(v=Eo(p.type,p.key,p.props,null,f.mode,v),v.ref=qn(f,c,p),v.return=f,f=v)}return l(f);case un:e:{for(E=p.key;c!==null;){if(c.key===E)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(f,c.sibling),c=o(c,p.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=nl(p,f.mode,v),c.return=f,f=c}return l(f);case xt:return E=p._init,L(f,c,E(p._payload),v)}if(or(p))return w(f,c,p,v);if(Gn(p))return S(f,c,p,v);ro(f,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(f,c.sibling),c=o(c,p),c.return=f,f=c):(n(f,c),c=tl(p,f.mode,v),c.return=f,f=c),l(f)):n(f,c)}return L}var Ln=ld(!0),sd=ld(!1),Br={},et=Ft(Br),Tr=Ft(Br),Lr=Ft(Br);function Gt(e){if(e===Br)throw Error(k(174));return e}function Ds(e,t){switch(B(Lr,t),B(Tr,e),B(et,Br),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}b(et),B(et,t)}function Rn(){b(et),b(Tr),b(Lr)}function ad(e){Gt(Lr.current);var t=Gt(et.current),n=xl(t,e.type);t!==n&&(B(Tr,e),B(et,n))}function As(e){Tr.current===e&&(b(et),b(Tr))}var K=Ft(0);function Qo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yi=[];function Us(){for(var e=0;e<Yi.length;e++)Yi[e]._workInProgressVersionPrimary=null;Yi.length=0}var xo=pt.ReactCurrentDispatcher,Xi=pt.ReactCurrentBatchConfig,tn=0,G=null,ee=null,ne=null,Ko=!1,mr=!1,Rr=0,Mm=0;function ue(){throw Error(k(321))}function Bs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ge(e[n],t[n]))return!1;return!0}function Hs(e,t,n,r,o,i){if(tn=i,G=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,xo.current=e===null||e.memoizedState===null?Am:Um,e=n(r,o),mr){i=0;do{if(mr=!1,Rr=0,25<=i)throw Error(k(301));i+=1,ne=ee=null,t.updateQueue=null,xo.current=Bm,e=n(r,o)}while(mr)}if(xo.current=Go,t=ee!==null&&ee.next!==null,tn=0,ne=ee=G=null,Ko=!1,t)throw Error(k(300));return e}function Vs(){var e=Rr!==0;return Rr=0,e}function Xe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ne===null?G.memoizedState=ne=e:ne=ne.next=e,ne}function De(){if(ee===null){var e=G.alternate;e=e!==null?e.memoizedState:null}else e=ee.next;var t=ne===null?G.memoizedState:ne.next;if(t!==null)ne=t,ee=e;else{if(e===null)throw Error(k(310));ee=e,e={memoizedState:ee.memoizedState,baseState:ee.baseState,baseQueue:ee.baseQueue,queue:ee.queue,next:null},ne===null?G.memoizedState=ne=e:ne=ne.next=e}return ne}function $r(e,t){return typeof t=="function"?t(e):t}function Ji(e){var t=De(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=ee,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var s=l=null,a=null,u=i;do{var h=u.lane;if((tn&h)===h)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var g={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(s=a=g,l=r):a=a.next=g,G.lanes|=h,nn|=h}u=u.next}while(u!==null&&u!==i);a===null?l=r:a.next=s,Ge(r,t.memoizedState)||(we=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,G.lanes|=i,nn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Zi(e){var t=De(),n=t.queue;if(n===null)throw Error(k(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Ge(i,t.memoizedState)||(we=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function ud(){}function cd(e,t){var n=G,r=De(),o=t(),i=!Ge(r.memoizedState,o);if(i&&(r.memoizedState=o,we=!0),r=r.queue,bs(pd.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ne!==null&&ne.memoizedState.tag&1){if(n.flags|=2048,Or(9,fd.bind(null,n,r,o,t),void 0,null),ie===null)throw Error(k(349));tn&30||dd(n,t,o)}return o}function dd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function fd(e,t,n,r){t.value=n,t.getSnapshot=r,md(t)&&hd(e)}function pd(e,t,n){return n(function(){md(t)&&hd(e)})}function md(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ge(e,n)}catch{return!0}}function hd(e){var t=dt(e,1);t!==null&&Qe(t,e,1,-1)}function nu(e){var t=Xe();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$r,lastRenderedState:e},t.queue=e,e=e.dispatch=Dm.bind(null,G,e),[t.memoizedState,e]}function Or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=G.updateQueue,t===null?(t={lastEffect:null,stores:null},G.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function gd(){return De().memoizedState}function wo(e,t,n,r){var o=Xe();G.flags|=e,o.memoizedState=Or(1|t,n,void 0,r===void 0?null:r)}function mi(e,t,n,r){var o=De();r=r===void 0?null:r;var i=void 0;if(ee!==null){var l=ee.memoizedState;if(i=l.destroy,r!==null&&Bs(r,l.deps)){o.memoizedState=Or(t,n,i,r);return}}G.flags|=e,o.memoizedState=Or(1|t,n,i,r)}function ru(e,t){return wo(8390656,8,e,t)}function bs(e,t){return mi(2048,8,e,t)}function vd(e,t){return mi(4,2,e,t)}function yd(e,t){return mi(4,4,e,t)}function xd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function wd(e,t,n){return n=n!=null?n.concat([e]):null,mi(4,4,xd.bind(null,t,e),n)}function Ws(){}function Sd(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function kd(e,t){var n=De();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Cd(e,t,n){return tn&21?(Ge(n,t)||(n=zc(),G.lanes|=n,nn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,we=!0),e.memoizedState=n)}function Im(e,t){var n=F;F=n!==0&&4>n?n:4,e(!0);var r=Xi.transition;Xi.transition={};try{e(!1),t()}finally{F=n,Xi.transition=r}}function Ed(){return De().memoizedState}function Fm(e,t,n){var r=Lt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},jd(e))zd(t,n);else if(n=nd(e,t,n,r),n!==null){var o=he();Qe(n,e,r,o),_d(n,t,r)}}function Dm(e,t,n){var r=Lt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(jd(e))zd(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,s=i(l,n);if(o.hasEagerState=!0,o.eagerState=s,Ge(s,l)){var a=t.interleaved;a===null?(o.next=o,Is(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=nd(e,t,o,r),n!==null&&(o=he(),Qe(n,e,r,o),_d(n,t,r))}}function jd(e){var t=e.alternate;return e===G||t!==null&&t===G}function zd(e,t){mr=Ko=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function _d(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ks(e,n)}}var Go={readContext:Fe,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useInsertionEffect:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useSyncExternalStore:ue,useId:ue,unstable_isNewReconciler:!1},Am={readContext:Fe,useCallback:function(e,t){return Xe().memoizedState=[e,t===void 0?null:t],e},useContext:Fe,useEffect:ru,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,wo(4194308,4,xd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wo(4194308,4,e,t)},useInsertionEffect:function(e,t){return wo(4,2,e,t)},useMemo:function(e,t){var n=Xe();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Xe();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Fm.bind(null,G,e),[r.memoizedState,e]},useRef:function(e){var t=Xe();return e={current:e},t.memoizedState=e},useState:nu,useDebugValue:Ws,useDeferredValue:function(e){return Xe().memoizedState=e},useTransition:function(){var e=nu(!1),t=e[0];return e=Im.bind(null,e[1]),Xe().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=G,o=Xe();if(Q){if(n===void 0)throw Error(k(407));n=n()}else{if(n=t(),ie===null)throw Error(k(349));tn&30||dd(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ru(pd.bind(null,r,i,e),[e]),r.flags|=2048,Or(9,fd.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Xe(),t=ie.identifierPrefix;if(Q){var n=st,r=lt;n=(r&~(1<<32-We(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Rr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Mm++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Um={readContext:Fe,useCallback:Sd,useContext:Fe,useEffect:bs,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:yd,useMemo:kd,useReducer:Ji,useRef:gd,useState:function(){return Ji($r)},useDebugValue:Ws,useDeferredValue:function(e){var t=De();return Cd(t,ee.memoizedState,e)},useTransition:function(){var e=Ji($r)[0],t=De().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:cd,useId:Ed,unstable_isNewReconciler:!1},Bm={readContext:Fe,useCallback:Sd,useContext:Fe,useEffect:bs,useImperativeHandle:wd,useInsertionEffect:vd,useLayoutEffect:yd,useMemo:kd,useReducer:Zi,useRef:gd,useState:function(){return Zi($r)},useDebugValue:Ws,useDeferredValue:function(e){var t=De();return ee===null?t.memoizedState=e:Cd(t,ee.memoizedState,e)},useTransition:function(){var e=Zi($r)[0],t=De().memoizedState;return[e,t]},useMutableSource:ud,useSyncExternalStore:cd,useId:Ed,unstable_isNewReconciler:!1};function $n(e,t){try{var n="",r=t;do n+=hp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function qi(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Hl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Hm=typeof WeakMap=="function"?WeakMap:Map;function Pd(e,t,n){n=at(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xo||(Xo=!0,Zl=r),Hl(e,t)},n}function Nd(e,t,n){n=at(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Hl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Hl(e,t),typeof r!="function"&&(Tt===null?Tt=new Set([this]):Tt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function ou(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Hm;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=nh.bind(null,e,t,n),t.then(e,e))}function iu(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lu(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=at(-1,1),t.tag=2,Nt(n,t,1))),n.lanes|=1),e)}var Vm=pt.ReactCurrentOwner,we=!1;function me(e,t,n,r){t.child=e===null?sd(t,null,n,r):Ln(t,e.child,n,r)}function su(e,t,n,r,o){n=n.render;var i=t.ref;return zn(t,o),r=Hs(e,t,n,r,i,o),n=Vs(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(Q&&n&&Ts(t),t.flags|=1,me(e,t,r,o),t.child)}function au(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!qs(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Td(e,t,i,r,o)):(e=Eo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:zr,n(l,r)&&e.ref===t.ref)return ft(e,t,o)}return t.flags|=1,e=Rt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Td(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(zr(i,r)&&e.ref===t.ref)if(we=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(we=!0);else return t.lanes=e.lanes,ft(e,t,o)}return Vl(e,t,n,r,o)}function Ld(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},B(wn,_e),_e|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,B(wn,_e),_e|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,B(wn,_e),_e|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,B(wn,_e),_e|=r;return me(e,t,o,n),t.child}function Rd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Vl(e,t,n,r,o){var i=ke(n)?qt:pe.current;return i=Nn(t,i),zn(t,o),n=Hs(e,t,n,r,i,o),r=Vs(),e!==null&&!we?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,ft(e,t,o)):(Q&&r&&Ts(t),t.flags|=1,me(e,t,n,o),t.child)}function uu(e,t,n,r,o){if(ke(n)){var i=!0;Uo(t)}else i=!1;if(zn(t,o),t.stateNode===null)So(e,t),id(t,n,r),Bl(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,s=t.memoizedProps;l.props=s;var a=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=Fe(u):(u=ke(n)?qt:pe.current,u=Nn(t,u));var h=n.getDerivedStateFromProps,g=typeof h=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==r||a!==u)&&eu(t,l,r,u),wt=!1;var m=t.memoizedState;l.state=m,Wo(t,r,l,o),a=t.memoizedState,s!==r||m!==a||Se.current||wt?(typeof h=="function"&&(Ul(t,n,h,r),a=t.memoizedState),(s=wt||qa(t,n,s,r,m,a,u))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),l.props=r,l.state=a,l.context=u,r=s):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,rd(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:He(t.type,s),l.props=u,g=t.pendingProps,m=l.context,a=n.contextType,typeof a=="object"&&a!==null?a=Fe(a):(a=ke(n)?qt:pe.current,a=Nn(t,a));var x=n.getDerivedStateFromProps;(h=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==g||m!==a)&&eu(t,l,r,a),wt=!1,m=t.memoizedState,l.state=m,Wo(t,r,l,o);var w=t.memoizedState;s!==g||m!==w||Se.current||wt?(typeof x=="function"&&(Ul(t,n,x,r),w=t.memoizedState),(u=wt||qa(t,n,u,r,m,w,a)||!1)?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,w,a),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,w,a)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),l.props=r,l.state=w,l.context=a,r=u):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return bl(e,t,n,r,i,o)}function bl(e,t,n,r,o,i){Rd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Ga(t,n,!1),ft(e,t,i);r=t.stateNode,Vm.current=t;var s=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Ln(t,e.child,null,i),t.child=Ln(t,null,s,i)):me(e,t,s,i),t.memoizedState=r.state,o&&Ga(t,n,!0),t.child}function $d(e){var t=e.stateNode;t.pendingContext?Ka(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ka(e,t.context,!1),Ds(e,t.containerInfo)}function cu(e,t,n,r,o){return Tn(),Rs(o),t.flags|=256,me(e,t,n,r),t.child}var Wl={dehydrated:null,treeContext:null,retryLane:0};function Ql(e){return{baseLanes:e,cachePool:null,transitions:null}}function Od(e,t,n){var r=t.pendingProps,o=K.current,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),B(K,o&1),e===null)return Dl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=vi(l,r,0,null),e=Jt(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Ql(n),t.memoizedState=Wl,e):Qs(t,l));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return bm(e,t,l,r,s,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,s=o.sibling;var a={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Rt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Rt(s,i):(i=Jt(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Ql(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Wl,r}return i=e.child,e=i.sibling,r=Rt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qs(e,t){return t=vi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oo(e,t,n,r){return r!==null&&Rs(r),Ln(t,e.child,null,n),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bm(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=qi(Error(k(422))),oo(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=vi({mode:"visible",children:r.children},o,0,null),i=Jt(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Ln(t,e.child,null,l),t.child.memoizedState=Ql(l),t.memoizedState=Wl,i);if(!(t.mode&1))return oo(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,i=Error(k(419)),r=qi(i,r,void 0),oo(e,t,l,r)}if(s=(l&e.childLanes)!==0,we||s){if(r=ie,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,dt(e,o),Qe(r,e,o,-1))}return Zs(),r=qi(Error(k(421))),oo(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=rh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Pe=Pt(o.nextSibling),Ne=t,Q=!0,be=null,e!==null&&($e[Oe++]=lt,$e[Oe++]=st,$e[Oe++]=en,lt=e.id,st=e.overflow,en=t),t=Qs(t,r.children),t.flags|=4096,t)}function du(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function el(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Md(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(me(e,t,r.children,n),r=K.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&du(e,n,t);else if(e.tag===19)du(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(B(K,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Qo(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),el(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Qo(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}el(t,!0,n,null,i);break;case"together":el(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function So(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ft(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),nn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(k(153));if(t.child!==null){for(e=t.child,n=Rt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Rt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wm(e,t,n){switch(t.tag){case 3:$d(t),Tn();break;case 5:ad(t);break;case 1:ke(t.type)&&Uo(t);break;case 4:Ds(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;B(Vo,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(B(K,K.current&1),t.flags|=128,null):n&t.child.childLanes?Od(e,t,n):(B(K,K.current&1),e=ft(e,t,n),e!==null?e.sibling:null);B(K,K.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Md(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(K,K.current),r)break;return null;case 22:case 23:return t.lanes=0,Ld(e,t,n)}return ft(e,t,n)}var Id,Kl,Fd,Dd;Id=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Kl=function(){};Fd=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Gt(et.current);var i=null;switch(n){case"input":o=hl(e,o),r=hl(e,r),i=[];break;case"select":o=Y({},o,{value:void 0}),r=Y({},r,{value:void 0}),i=[];break;case"textarea":o=yl(e,o),r=yl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Do)}wl(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(l in s)s.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(xr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==s&&(a!=null||s!=null))if(u==="style")if(s){for(l in s)!s.hasOwnProperty(l)||a&&a.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in a)a.hasOwnProperty(l)&&s[l]!==a[l]&&(n||(n={}),n[l]=a[l])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,s=s?s.__html:void 0,a!=null&&s!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(xr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&H("scroll",e),i||s===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Dd=function(e,t,n,r){n!==r&&(t.flags|=4)};function er(e,t){if(!Q)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Qm(e,t,n){var r=t.pendingProps;switch(Ls(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ce(t),null;case 1:return ke(t.type)&&Ao(),ce(t),null;case 3:return r=t.stateNode,Rn(),b(Se),b(pe),Us(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(no(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,be!==null&&(ts(be),be=null))),Kl(e,t),ce(t),null;case 5:As(t);var o=Gt(Lr.current);if(n=t.type,e!==null&&t.stateNode!=null)Fd(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(k(166));return ce(t),null}if(e=Gt(et.current),no(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Ze]=t,r[Nr]=i,e=(t.mode&1)!==0,n){case"dialog":H("cancel",r),H("close",r);break;case"iframe":case"object":case"embed":H("load",r);break;case"video":case"audio":for(o=0;o<lr.length;o++)H(lr[o],r);break;case"source":H("error",r);break;case"img":case"image":case"link":H("error",r),H("load",r);break;case"details":H("toggle",r);break;case"input":wa(r,i),H("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},H("invalid",r);break;case"textarea":ka(r,i),H("invalid",r)}wl(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var s=i[l];l==="children"?typeof s=="string"?r.textContent!==s&&(i.suppressHydrationWarning!==!0&&to(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&to(r.textContent,s,e),o=["children",""+s]):xr.hasOwnProperty(l)&&s!=null&&l==="onScroll"&&H("scroll",r)}switch(n){case"input":Kr(r),Sa(r,i,!0);break;case"textarea":Kr(r),Ca(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Do)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=dc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Ze]=t,e[Nr]=r,Id(e,t,!1,!1),t.stateNode=e;e:{switch(l=Sl(n,r),n){case"dialog":H("cancel",e),H("close",e),o=r;break;case"iframe":case"object":case"embed":H("load",e),o=r;break;case"video":case"audio":for(o=0;o<lr.length;o++)H(lr[o],e);o=r;break;case"source":H("error",e),o=r;break;case"img":case"image":case"link":H("error",e),H("load",e),o=r;break;case"details":H("toggle",e),o=r;break;case"input":wa(e,r),o=hl(e,r),H("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Y({},r,{value:void 0}),H("invalid",e);break;case"textarea":ka(e,r),o=yl(e,r),H("invalid",e);break;default:o=r}wl(n,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var a=s[i];i==="style"?mc(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&fc(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&wr(e,a):typeof a=="number"&&wr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&H("scroll",e):a!=null&&gs(e,i,a,l))}switch(n){case"input":Kr(e),Sa(e,r,!1);break;case"textarea":Kr(e),Ca(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ot(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?kn(e,!!r.multiple,i,!1):r.defaultValue!=null&&kn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Do)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ce(t),null;case 6:if(e&&t.stateNode!=null)Dd(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(k(166));if(n=Gt(Lr.current),Gt(et.current),no(t)){if(r=t.stateNode,n=t.memoizedProps,r[Ze]=t,(i=r.nodeValue!==n)&&(e=Ne,e!==null))switch(e.tag){case 3:to(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&to(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ze]=t,t.stateNode=r}return ce(t),null;case 13:if(b(K),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Q&&Pe!==null&&t.mode&1&&!(t.flags&128))td(),Tn(),t.flags|=98560,i=!1;else if(i=no(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(k(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(k(317));i[Ze]=t}else Tn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ce(t),i=!1}else be!==null&&(ts(be),be=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||K.current&1?te===0&&(te=3):Zs())),t.updateQueue!==null&&(t.flags|=4),ce(t),null);case 4:return Rn(),Kl(e,t),e===null&&_r(t.stateNode.containerInfo),ce(t),null;case 10:return Ms(t.type._context),ce(t),null;case 17:return ke(t.type)&&Ao(),ce(t),null;case 19:if(b(K),i=t.memoizedState,i===null)return ce(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)er(i,!1);else{if(te!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Qo(e),l!==null){for(t.flags|=128,er(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return B(K,K.current&1|2),t.child}e=e.sibling}i.tail!==null&&J()>On&&(t.flags|=128,r=!0,er(i,!1),t.lanes=4194304)}else{if(!r)if(e=Qo(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),er(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!Q)return ce(t),null}else 2*J()-i.renderingStartTime>On&&n!==1073741824&&(t.flags|=128,r=!0,er(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=J(),t.sibling=null,n=K.current,B(K,r?n&1|2:n&1),t):(ce(t),null);case 22:case 23:return Js(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?_e&1073741824&&(ce(t),t.subtreeFlags&6&&(t.flags|=8192)):ce(t),null;case 24:return null;case 25:return null}throw Error(k(156,t.tag))}function Km(e,t){switch(Ls(t),t.tag){case 1:return ke(t.type)&&Ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rn(),b(Se),b(pe),Us(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return As(t),null;case 13:if(b(K),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(k(340));Tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(K),null;case 4:return Rn(),null;case 10:return Ms(t.type._context),null;case 22:case 23:return Js(),null;case 24:return null;default:return null}}var io=!1,de=!1,Gm=typeof WeakSet=="function"?WeakSet:Set,z=null;function xn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){X(e,t,r)}else n.current=null}function Gl(e,t,n){try{n()}catch(r){X(e,t,r)}}var fu=!1;function Ym(e,t){if(Ll=Mo,e=Hc(),Ns(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,s=-1,a=-1,u=0,h=0,g=e,m=null;t:for(;;){for(var x;g!==n||o!==0&&g.nodeType!==3||(s=l+o),g!==i||r!==0&&g.nodeType!==3||(a=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)m=g,g=x;for(;;){if(g===e)break t;if(m===n&&++u===o&&(s=l),m===i&&++h===r&&(a=l),(x=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=x}n=s===-1||a===-1?null:{start:s,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},Mo=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var S=w.memoizedProps,L=w.memoizedState,f=t.stateNode,c=f.getSnapshotBeforeUpdate(t.elementType===t.type?S:He(t.type,S),L);f.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=t.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(k(163))}}catch(v){X(t,t.return,v)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return w=fu,fu=!1,w}function hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Gl(t,n,i)}o=o.next}while(o!==r)}}function hi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Yl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ze],delete t[Nr],delete t[Ml],delete t[Lm],delete t[Rm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ud(e){return e.tag===5||e.tag===3||e.tag===4}function pu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ud(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Do));else if(r!==4&&(e=e.child,e!==null))for(Xl(e,t,n),e=e.sibling;e!==null;)Xl(e,t,n),e=e.sibling}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}var le=null,Ve=!1;function gt(e,t,n){for(n=n.child;n!==null;)Bd(e,t,n),n=n.sibling}function Bd(e,t,n){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(si,n)}catch{}switch(n.tag){case 5:de||xn(n,t);case 6:var r=le,o=Ve;le=null,gt(e,t,n),le=r,Ve=o,le!==null&&(Ve?(e=le,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ve?(e=le,n=n.stateNode,e.nodeType===8?Ki(e.parentNode,n):e.nodeType===1&&Ki(e,n),Er(e)):Ki(le,n.stateNode));break;case 4:r=le,o=Ve,le=n.stateNode.containerInfo,Ve=!0,gt(e,t,n),le=r,Ve=o;break;case 0:case 11:case 14:case 15:if(!de&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Gl(n,t,l),o=o.next}while(o!==r)}gt(e,t,n);break;case 1:if(!de&&(xn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){X(n,t,s)}gt(e,t,n);break;case 21:gt(e,t,n);break;case 22:n.mode&1?(de=(r=de)||n.memoizedState!==null,gt(e,t,n),de=r):gt(e,t,n);break;default:gt(e,t,n)}}function mu(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Gm),t.forEach(function(r){var o=oh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Be(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,s=l;e:for(;s!==null;){switch(s.tag){case 5:le=s.stateNode,Ve=!1;break e;case 3:le=s.stateNode.containerInfo,Ve=!0;break e;case 4:le=s.stateNode.containerInfo,Ve=!0;break e}s=s.return}if(le===null)throw Error(k(160));Bd(i,l,o),le=null,Ve=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){X(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Hd(t,e),t=t.sibling}function Hd(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Be(t,e),Ye(e),r&4){try{hr(3,e,e.return),hi(3,e)}catch(S){X(e,e.return,S)}try{hr(5,e,e.return)}catch(S){X(e,e.return,S)}}break;case 1:Be(t,e),Ye(e),r&512&&n!==null&&xn(n,n.return);break;case 5:if(Be(t,e),Ye(e),r&512&&n!==null&&xn(n,n.return),e.flags&32){var o=e.stateNode;try{wr(o,"")}catch(S){X(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,s=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&uc(o,i),Sl(s,l);var u=Sl(s,i);for(l=0;l<a.length;l+=2){var h=a[l],g=a[l+1];h==="style"?mc(o,g):h==="dangerouslySetInnerHTML"?fc(o,g):h==="children"?wr(o,g):gs(o,h,g,u)}switch(s){case"input":gl(o,i);break;case"textarea":cc(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?kn(o,!!i.multiple,x,!1):m!==!!i.multiple&&(i.defaultValue!=null?kn(o,!!i.multiple,i.defaultValue,!0):kn(o,!!i.multiple,i.multiple?[]:"",!1))}o[Nr]=i}catch(S){X(e,e.return,S)}}break;case 6:if(Be(t,e),Ye(e),r&4){if(e.stateNode===null)throw Error(k(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){X(e,e.return,S)}}break;case 3:if(Be(t,e),Ye(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Er(t.containerInfo)}catch(S){X(e,e.return,S)}break;case 4:Be(t,e),Ye(e);break;case 13:Be(t,e),Ye(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Ys=J())),r&4&&mu(e);break;case 22:if(h=n!==null&&n.memoizedState!==null,e.mode&1?(de=(u=de)||h,Be(t,e),de=u):Be(t,e),Ye(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!h&&e.mode&1)for(z=e,h=e.child;h!==null;){for(g=z=h;z!==null;){switch(m=z,x=m.child,m.tag){case 0:case 11:case 14:case 15:hr(4,m,m.return);break;case 1:xn(m,m.return);var w=m.stateNode;if(typeof w.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(S){X(r,n,S)}}break;case 5:xn(m,m.return);break;case 22:if(m.memoizedState!==null){gu(g);continue}}x!==null?(x.return=m,z=x):gu(g)}h=h.sibling}e:for(h=null,g=e;;){if(g.tag===5){if(h===null){h=g;try{o=g.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=g.stateNode,a=g.memoizedProps.style,l=a!=null&&a.hasOwnProperty("display")?a.display:null,s.style.display=pc("display",l))}catch(S){X(e,e.return,S)}}}else if(g.tag===6){if(h===null)try{g.stateNode.nodeValue=u?"":g.memoizedProps}catch(S){X(e,e.return,S)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;h===g&&(h=null),g=g.return}h===g&&(h=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Be(t,e),Ye(e),r&4&&mu(e);break;case 21:break;default:Be(t,e),Ye(e)}}function Ye(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ud(n)){var r=n;break e}n=n.return}throw Error(k(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(wr(o,""),r.flags&=-33);var i=pu(e);Jl(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,s=pu(e);Xl(e,s,l);break;default:throw Error(k(161))}}catch(a){X(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Xm(e,t,n){z=e,Vd(e)}function Vd(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||io;if(!l){var s=o.alternate,a=s!==null&&s.memoizedState!==null||de;s=io;var u=de;if(io=l,(de=a)&&!u)for(z=o;z!==null;)l=z,a=l.child,l.tag===22&&l.memoizedState!==null?vu(o):a!==null?(a.return=l,z=a):vu(o);for(;i!==null;)z=i,Vd(i),i=i.sibling;z=o,io=s,de=u}hu(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,z=i):hu(e)}}function hu(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:de||hi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!de)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:He(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Za(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Za(t,l,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var g=h.dehydrated;g!==null&&Er(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(k(163))}de||t.flags&512&&Yl(t)}catch(m){X(t,t.return,m)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function gu(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function vu(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{hi(4,t)}catch(a){X(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){X(t,o,a)}}var i=t.return;try{Yl(t)}catch(a){X(t,i,a)}break;case 5:var l=t.return;try{Yl(t)}catch(a){X(t,l,a)}}}catch(a){X(t,t.return,a)}if(t===e){z=null;break}var s=t.sibling;if(s!==null){s.return=t.return,z=s;break}z=t.return}}var Jm=Math.ceil,Yo=pt.ReactCurrentDispatcher,Ks=pt.ReactCurrentOwner,Ie=pt.ReactCurrentBatchConfig,M=0,ie=null,q=null,se=0,_e=0,wn=Ft(0),te=0,Mr=null,nn=0,gi=0,Gs=0,gr=null,ye=null,Ys=0,On=1/0,rt=null,Xo=!1,Zl=null,Tt=null,lo=!1,Et=null,Jo=0,vr=0,ql=null,ko=-1,Co=0;function he(){return M&6?J():ko!==-1?ko:ko=J()}function Lt(e){return e.mode&1?M&2&&se!==0?se&-se:Om.transition!==null?(Co===0&&(Co=zc()),Co):(e=F,e!==0||(e=window.event,e=e===void 0?16:$c(e.type)),e):1}function Qe(e,t,n,r){if(50<vr)throw vr=0,ql=null,Error(k(185));Dr(e,n,r),(!(M&2)||e!==ie)&&(e===ie&&(!(M&2)&&(gi|=n),te===4&&kt(e,se)),Ce(e,r),n===1&&M===0&&!(t.mode&1)&&(On=J()+500,fi&&Dt()))}function Ce(e,t){var n=e.callbackNode;Op(e,t);var r=Oo(e,e===ie?se:0);if(r===0)n!==null&&za(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&za(n),t===1)e.tag===0?$m(yu.bind(null,e)):Zc(yu.bind(null,e)),Nm(function(){!(M&6)&&Dt()}),n=null;else{switch(_c(r)){case 1:n=Ss;break;case 4:n=Ec;break;case 16:n=$o;break;case 536870912:n=jc;break;default:n=$o}n=Jd(n,bd.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function bd(e,t){if(ko=-1,Co=0,M&6)throw Error(k(327));var n=e.callbackNode;if(_n()&&e.callbackNode!==n)return null;var r=Oo(e,e===ie?se:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zo(e,r);else{t=r;var o=M;M|=2;var i=Qd();(ie!==e||se!==t)&&(rt=null,On=J()+500,Xt(e,t));do try{eh();break}catch(s){Wd(e,s)}while(!0);Os(),Yo.current=i,M=o,q!==null?t=0:(ie=null,se=0,t=te)}if(t!==0){if(t===2&&(o=zl(e),o!==0&&(r=o,t=es(e,o))),t===1)throw n=Mr,Xt(e,0),kt(e,r),Ce(e,J()),n;if(t===6)kt(e,r);else{if(o=e.current.alternate,!(r&30)&&!Zm(o)&&(t=Zo(e,r),t===2&&(i=zl(e),i!==0&&(r=i,t=es(e,i))),t===1))throw n=Mr,Xt(e,0),kt(e,r),Ce(e,J()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(k(345));case 2:Wt(e,ye,rt);break;case 3:if(kt(e,r),(r&130023424)===r&&(t=Ys+500-J(),10<t)){if(Oo(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){he(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Ol(Wt.bind(null,e,ye,rt),t);break}Wt(e,ye,rt);break;case 4:if(kt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-We(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=J()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Jm(r/1960))-r,10<r){e.timeoutHandle=Ol(Wt.bind(null,e,ye,rt),r);break}Wt(e,ye,rt);break;case 5:Wt(e,ye,rt);break;default:throw Error(k(329))}}}return Ce(e,J()),e.callbackNode===n?bd.bind(null,e):null}function es(e,t){var n=gr;return e.current.memoizedState.isDehydrated&&(Xt(e,t).flags|=256),e=Zo(e,t),e!==2&&(t=ye,ye=n,t!==null&&ts(t)),e}function ts(e){ye===null?ye=e:ye.push.apply(ye,e)}function Zm(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Ge(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function kt(e,t){for(t&=~Gs,t&=~gi,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-We(t),r=1<<n;e[n]=-1,t&=~r}}function yu(e){if(M&6)throw Error(k(327));_n();var t=Oo(e,0);if(!(t&1))return Ce(e,J()),null;var n=Zo(e,t);if(e.tag!==0&&n===2){var r=zl(e);r!==0&&(t=r,n=es(e,r))}if(n===1)throw n=Mr,Xt(e,0),kt(e,t),Ce(e,J()),n;if(n===6)throw Error(k(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Wt(e,ye,rt),Ce(e,J()),null}function Xs(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(On=J()+500,fi&&Dt())}}function rn(e){Et!==null&&Et.tag===0&&!(M&6)&&_n();var t=M;M|=1;var n=Ie.transition,r=F;try{if(Ie.transition=null,F=1,e)return e()}finally{F=r,Ie.transition=n,M=t,!(M&6)&&Dt()}}function Js(){_e=wn.current,b(wn)}function Xt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pm(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(Ls(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ao();break;case 3:Rn(),b(Se),b(pe),Us();break;case 5:As(r);break;case 4:Rn();break;case 13:b(K);break;case 19:b(K);break;case 10:Ms(r.type._context);break;case 22:case 23:Js()}n=n.return}if(ie=e,q=e=Rt(e.current,null),se=_e=t,te=0,Mr=null,Gs=gi=nn=0,ye=gr=null,Kt!==null){for(t=0;t<Kt.length;t++)if(n=Kt[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}Kt=null}return e}function Wd(e,t){do{var n=q;try{if(Os(),xo.current=Go,Ko){for(var r=G.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ko=!1}if(tn=0,ne=ee=G=null,mr=!1,Rr=0,Ks.current=null,n===null||n.return===null){te=1,Mr=t,q=null;break}e:{var i=e,l=n.return,s=n,a=t;if(t=se,s.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,h=s,g=h.tag;if(!(h.mode&1)&&(g===0||g===11||g===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var x=iu(l);if(x!==null){x.flags&=-257,lu(x,l,s,i,t),x.mode&1&&ou(i,u,t),t=x,a=u;var w=t.updateQueue;if(w===null){var S=new Set;S.add(a),t.updateQueue=S}else w.add(a);break e}else{if(!(t&1)){ou(i,u,t),Zs();break e}a=Error(k(426))}}else if(Q&&s.mode&1){var L=iu(l);if(L!==null){!(L.flags&65536)&&(L.flags|=256),lu(L,l,s,i,t),Rs($n(a,s));break e}}i=a=$n(a,s),te!==4&&(te=2),gr===null?gr=[i]:gr.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var f=Pd(i,a,t);Ja(i,f);break e;case 1:s=a;var c=i.type,p=i.stateNode;if(!(i.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Tt===null||!Tt.has(p)))){i.flags|=65536,t&=-t,i.lanes|=t;var v=Nd(i,s,t);Ja(i,v);break e}}i=i.return}while(i!==null)}Gd(n)}catch(C){t=C,q===n&&n!==null&&(q=n=n.return);continue}break}while(!0)}function Qd(){var e=Yo.current;return Yo.current=Go,e===null?Go:e}function Zs(){(te===0||te===3||te===2)&&(te=4),ie===null||!(nn&268435455)&&!(gi&268435455)||kt(ie,se)}function Zo(e,t){var n=M;M|=2;var r=Qd();(ie!==e||se!==t)&&(rt=null,Xt(e,t));do try{qm();break}catch(o){Wd(e,o)}while(!0);if(Os(),M=n,Yo.current=r,q!==null)throw Error(k(261));return ie=null,se=0,te}function qm(){for(;q!==null;)Kd(q)}function eh(){for(;q!==null&&!jp();)Kd(q)}function Kd(e){var t=Xd(e.alternate,e,_e);e.memoizedProps=e.pendingProps,t===null?Gd(e):q=t,Ks.current=null}function Gd(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Km(n,t),n!==null){n.flags&=32767,q=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{te=6,q=null;return}}else if(n=Qm(n,t,_e),n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);te===0&&(te=5)}function Wt(e,t,n){var r=F,o=Ie.transition;try{Ie.transition=null,F=1,th(e,t,n,r)}finally{Ie.transition=o,F=r}return null}function th(e,t,n,r){do _n();while(Et!==null);if(M&6)throw Error(k(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(k(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Mp(e,i),e===ie&&(q=ie=null,se=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||lo||(lo=!0,Jd($o,function(){return _n(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ie.transition,Ie.transition=null;var l=F;F=1;var s=M;M|=4,Ks.current=null,Ym(e,n),Hd(n,e),Sm(Rl),Mo=!!Ll,Rl=Ll=null,e.current=n,Xm(n),zp(),M=s,F=l,Ie.transition=i}else e.current=n;if(lo&&(lo=!1,Et=e,Jo=o),i=e.pendingLanes,i===0&&(Tt=null),Np(n.stateNode),Ce(e,J()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xo)throw Xo=!1,e=Zl,Zl=null,e;return Jo&1&&e.tag!==0&&_n(),i=e.pendingLanes,i&1?e===ql?vr++:(vr=0,ql=e):vr=0,Dt(),null}function _n(){if(Et!==null){var e=_c(Jo),t=Ie.transition,n=F;try{if(Ie.transition=null,F=16>e?16:e,Et===null)var r=!1;else{if(e=Et,Et=null,Jo=0,M&6)throw Error(k(331));var o=M;for(M|=4,z=e.current;z!==null;){var i=z,l=i.child;if(z.flags&16){var s=i.deletions;if(s!==null){for(var a=0;a<s.length;a++){var u=s[a];for(z=u;z!==null;){var h=z;switch(h.tag){case 0:case 11:case 15:hr(8,h,i)}var g=h.child;if(g!==null)g.return=h,z=g;else for(;z!==null;){h=z;var m=h.sibling,x=h.return;if(Ad(h),h===u){z=null;break}if(m!==null){m.return=x,z=m;break}z=x}}}var w=i.alternate;if(w!==null){var S=w.child;if(S!==null){w.child=null;do{var L=S.sibling;S.sibling=null,S=L}while(S!==null)}}z=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,z=l;else e:for(;z!==null;){if(i=z,i.flags&2048)switch(i.tag){case 0:case 11:case 15:hr(9,i,i.return)}var f=i.sibling;if(f!==null){f.return=i.return,z=f;break e}z=i.return}}var c=e.current;for(z=c;z!==null;){l=z;var p=l.child;if(l.subtreeFlags&2064&&p!==null)p.return=l,z=p;else e:for(l=c;z!==null;){if(s=z,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hi(9,s)}}catch(C){X(s,s.return,C)}if(s===l){z=null;break e}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}if(M=o,Dt(),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(si,e)}catch{}r=!0}return r}finally{F=n,Ie.transition=t}}return!1}function xu(e,t,n){t=$n(n,t),t=Pd(e,t,1),e=Nt(e,t,1),t=he(),e!==null&&(Dr(e,1,t),Ce(e,t))}function X(e,t,n){if(e.tag===3)xu(e,e,n);else for(;t!==null;){if(t.tag===3){xu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Tt===null||!Tt.has(r))){e=$n(n,e),e=Nd(t,e,1),t=Nt(t,e,1),e=he(),t!==null&&(Dr(t,1,e),Ce(t,e));break}}t=t.return}}function nh(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=he(),e.pingedLanes|=e.suspendedLanes&n,ie===e&&(se&n)===n&&(te===4||te===3&&(se&130023424)===se&&500>J()-Ys?Xt(e,0):Gs|=n),Ce(e,t)}function Yd(e,t){t===0&&(e.mode&1?(t=Xr,Xr<<=1,!(Xr&130023424)&&(Xr=4194304)):t=1);var n=he();e=dt(e,t),e!==null&&(Dr(e,t,n),Ce(e,n))}function rh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Yd(e,n)}function oh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(k(314))}r!==null&&r.delete(t),Yd(e,n)}var Xd;Xd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Se.current)we=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return we=!1,Wm(e,t,n);we=!!(e.flags&131072)}else we=!1,Q&&t.flags&1048576&&qc(t,Ho,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;So(e,t),e=t.pendingProps;var o=Nn(t,pe.current);zn(t,n),o=Hs(null,t,r,e,o,n);var i=Vs();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ke(r)?(i=!0,Uo(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Fs(t),o.updater=pi,t.stateNode=o,o._reactInternals=t,Bl(t,r,e,n),t=bl(null,t,r,!0,i,n)):(t.tag=0,Q&&i&&Ts(t),me(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(So(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=lh(r),e=He(r,e),o){case 0:t=Vl(null,t,r,e,n);break e;case 1:t=uu(null,t,r,e,n);break e;case 11:t=su(null,t,r,e,n);break e;case 14:t=au(null,t,r,He(r.type,e),n);break e}throw Error(k(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),Vl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),uu(e,t,r,o,n);case 3:e:{if($d(t),e===null)throw Error(k(387));r=t.pendingProps,i=t.memoizedState,o=i.element,rd(e,t),Wo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=$n(Error(k(423)),t),t=cu(e,t,r,n,o);break e}else if(r!==o){o=$n(Error(k(424)),t),t=cu(e,t,r,n,o);break e}else for(Pe=Pt(t.stateNode.containerInfo.firstChild),Ne=t,Q=!0,be=null,n=sd(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Tn(),r===o){t=ft(e,t,n);break e}me(e,t,r,n)}t=t.child}return t;case 5:return ad(t),e===null&&Dl(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,$l(r,o)?l=null:i!==null&&$l(r,i)&&(t.flags|=32),Rd(e,t),me(e,t,l,n),t.child;case 6:return e===null&&Dl(t),null;case 13:return Od(e,t,n);case 4:return Ds(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Ln(t,null,r,n):me(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),su(e,t,r,o,n);case 7:return me(e,t,t.pendingProps,n),t.child;case 8:return me(e,t,t.pendingProps.children,n),t.child;case 12:return me(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,B(Vo,r._currentValue),r._currentValue=l,i!==null)if(Ge(i.value,l)){if(i.children===o.children&&!Se.current){t=ft(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){l=i.child;for(var a=s.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=at(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Al(i.return,n,t),s.lanes|=n;break}a=a.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(k(341));l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),Al(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}me(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,zn(t,n),o=Fe(o),r=r(o),t.flags|=1,me(e,t,r,n),t.child;case 14:return r=t.type,o=He(r,t.pendingProps),o=He(r.type,o),au(e,t,r,o,n);case 15:return Td(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:He(r,o),So(e,t),t.tag=1,ke(r)?(e=!0,Uo(t)):e=!1,zn(t,n),id(t,r,o),Bl(t,r,o,n),bl(null,t,r,!0,e,n);case 19:return Md(e,t,n);case 22:return Ld(e,t,n)}throw Error(k(156,t.tag))};function Jd(e,t){return Cc(e,t)}function ih(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Me(e,t,n,r){return new ih(e,t,n,r)}function qs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lh(e){if(typeof e=="function")return qs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ys)return 11;if(e===xs)return 14}return 2}function Rt(e,t){var n=e.alternate;return n===null?(n=Me(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")qs(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case cn:return Jt(n.children,o,i,t);case vs:l=8,o|=8;break;case dl:return e=Me(12,n,t,o|2),e.elementType=dl,e.lanes=i,e;case fl:return e=Me(13,n,t,o),e.elementType=fl,e.lanes=i,e;case pl:return e=Me(19,n,t,o),e.elementType=pl,e.lanes=i,e;case lc:return vi(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case oc:l=10;break e;case ic:l=9;break e;case ys:l=11;break e;case xs:l=14;break e;case xt:l=16,r=null;break e}throw Error(k(130,e==null?e:typeof e,""))}return t=Me(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Jt(e,t,n,r){return e=Me(7,e,r,t),e.lanes=n,e}function vi(e,t,n,r){return e=Me(22,e,r,t),e.elementType=lc,e.lanes=n,e.stateNode={isHidden:!1},e}function tl(e,t,n){return e=Me(6,e,null,t),e.lanes=n,e}function nl(e,t,n){return t=Me(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function sh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ii(0),this.expirationTimes=Ii(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ii(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ea(e,t,n,r,o,i,l,s,a){return e=new sh(e,t,n,s,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Me(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fs(i),e}function ah(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:un,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Zd(e){if(!e)return Mt;e=e._reactInternals;e:{if(ln(e)!==e||e.tag!==1)throw Error(k(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(k(171))}if(e.tag===1){var n=e.type;if(ke(n))return Jc(e,n,t)}return t}function qd(e,t,n,r,o,i,l,s,a){return e=ea(n,r,!0,e,o,i,l,s,a),e.context=Zd(null),n=e.current,r=he(),o=Lt(n),i=at(r,o),i.callback=t??null,Nt(n,i,o),e.current.lanes=o,Dr(e,o,r),Ce(e,r),e}function yi(e,t,n,r){var o=t.current,i=he(),l=Lt(o);return n=Zd(n),t.context===null?t.context=n:t.pendingContext=n,t=at(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Nt(o,t,l),e!==null&&(Qe(e,o,l,i),yo(e,o,l)),l}function qo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function wu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ta(e,t){wu(e,t),(e=e.alternate)&&wu(e,t)}function uh(){return null}var ef=typeof reportError=="function"?reportError:function(e){console.error(e)};function na(e){this._internalRoot=e}xi.prototype.render=na.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(k(409));yi(e,t,null,null)};xi.prototype.unmount=na.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rn(function(){yi(null,e,null,null)}),t[ct]=null}};function xi(e){this._internalRoot=e}xi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Tc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<St.length&&t!==0&&t<St[n].priority;n++);St.splice(n,0,e),n===0&&Rc(e)}};function ra(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Su(){}function ch(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=qo(l);i.call(u)}}var l=qd(t,r,e,0,null,!1,!1,"",Su);return e._reactRootContainer=l,e[ct]=l.current,_r(e.nodeType===8?e.parentNode:e),rn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=qo(a);s.call(u)}}var a=ea(e,0,!1,null,null,!1,!1,"",Su);return e._reactRootContainer=a,e[ct]=a.current,_r(e.nodeType===8?e.parentNode:e),rn(function(){yi(t,a,n,r)}),a}function Si(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var s=o;o=function(){var a=qo(l);s.call(a)}}yi(t,l,e,o)}else l=ch(n,t,e,o,r);return qo(l)}Pc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ir(t.pendingLanes);n!==0&&(ks(t,n|1),Ce(t,J()),!(M&6)&&(On=J()+500,Dt()))}break;case 13:rn(function(){var r=dt(e,1);if(r!==null){var o=he();Qe(r,e,1,o)}}),ta(e,1)}};Cs=function(e){if(e.tag===13){var t=dt(e,134217728);if(t!==null){var n=he();Qe(t,e,134217728,n)}ta(e,134217728)}};Nc=function(e){if(e.tag===13){var t=Lt(e),n=dt(e,t);if(n!==null){var r=he();Qe(n,e,t,r)}ta(e,t)}};Tc=function(){return F};Lc=function(e,t){var n=F;try{return F=e,t()}finally{F=n}};Cl=function(e,t,n){switch(t){case"input":if(gl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=di(r);if(!o)throw Error(k(90));ac(r),gl(r,o)}}}break;case"textarea":cc(e,n);break;case"select":t=n.value,t!=null&&kn(e,!!n.multiple,t,!1)}};vc=Xs;yc=rn;var dh={usingClientEntryPoint:!1,Events:[Ur,mn,di,hc,gc,Xs]},tr={findFiberByHostInstance:Qt,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},fh={bundleType:tr.bundleType,version:tr.version,rendererPackageName:tr.rendererPackageName,rendererConfig:tr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sc(e),e===null?null:e.stateNode},findFiberByHostInstance:tr.findFiberByHostInstance||uh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var so=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!so.isDisabled&&so.supportsFiber)try{si=so.inject(fh),qe=so}catch{}}Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dh;Le.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ra(t))throw Error(k(200));return ah(e,t,null,n)};Le.createRoot=function(e,t){if(!ra(e))throw Error(k(299));var n=!1,r="",o=ef;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ea(e,1,!1,null,null,n,!1,r,o),e[ct]=t.current,_r(e.nodeType===8?e.parentNode:e),new na(t)};Le.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(k(188)):(e=Object.keys(e).join(","),Error(k(268,e)));return e=Sc(t),e=e===null?null:e.stateNode,e};Le.flushSync=function(e){return rn(e)};Le.hydrate=function(e,t,n){if(!wi(t))throw Error(k(200));return Si(null,e,t,!0,n)};Le.hydrateRoot=function(e,t,n){if(!ra(e))throw Error(k(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=ef;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=qd(t,null,e,1,n??null,o,!1,i,l),e[ct]=t.current,_r(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new xi(t)};Le.render=function(e,t,n){if(!wi(t))throw Error(k(200));return Si(null,e,t,!1,n)};Le.unmountComponentAtNode=function(e){if(!wi(e))throw Error(k(40));return e._reactRootContainer?(rn(function(){Si(null,null,e,!1,function(){e._reactRootContainer=null,e[ct]=null})}),!0):!1};Le.unstable_batchedUpdates=Xs;Le.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!wi(n))throw Error(k(200));if(e==null||e._reactInternals===void 0)throw Error(k(38));return Si(e,t,n,!1,r)};Le.version="18.2.0-next-9e3b772b8-20220608";function tf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(tf)}catch(e){console.error(e)}}tf(),qu.exports=Le;var ph=qu.exports,ku=ph;ul.createRoot=ku.createRoot,ul.hydrateRoot=ku.hydrateRoot;var fe=function(){return fe=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},fe.apply(this,arguments)};function Mn(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var V="-ms-",yr="-moz-",I="-webkit-",nf="comm",ki="rule",oa="decl",mh="@import",rf="@keyframes",hh="@layer",of=Math.abs,ia=String.fromCharCode,ns=Object.assign;function gh(e,t){return re(e,0)^45?(((t<<2^re(e,0))<<2^re(e,1))<<2^re(e,2))<<2^re(e,3):0}function lf(e){return e.trim()}function ot(e,t){return(e=t.exec(e))?e[0]:e}function R(e,t,n){return e.replace(t,n)}function jo(e,t,n){return e.indexOf(t,n)}function re(e,t){return e.charCodeAt(t)|0}function In(e,t,n){return e.slice(t,n)}function Je(e){return e.length}function sf(e){return e.length}function sr(e,t){return t.push(e),e}function vh(e,t){return e.map(t).join("")}function Cu(e,t){return e.filter(function(n){return!ot(n,t)})}var Ci=1,Fn=1,af=0,Ae=0,Z=0,bn="";function Ei(e,t,n,r,o,i,l,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ci,column:Fn,length:l,return:"",siblings:s}}function yt(e,t){return ns(Ei("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function an(e){for(;e.root;)e=yt(e.root,{children:[e]});sr(e,e.siblings)}function yh(){return Z}function xh(){return Z=Ae>0?re(bn,--Ae):0,Fn--,Z===10&&(Fn=1,Ci--),Z}function Ke(){return Z=Ae<af?re(bn,Ae++):0,Fn++,Z===10&&(Fn=1,Ci++),Z}function Zt(){return re(bn,Ae)}function zo(){return Ae}function ji(e,t){return In(bn,e,t)}function rs(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function wh(e){return Ci=Fn=1,af=Je(bn=e),Ae=0,[]}function Sh(e){return bn="",e}function rl(e){return lf(ji(Ae-1,os(e===91?e+2:e===40?e+1:e)))}function kh(e){for(;(Z=Zt())&&Z<33;)Ke();return rs(e)>2||rs(Z)>3?"":" "}function Ch(e,t){for(;--t&&Ke()&&!(Z<48||Z>102||Z>57&&Z<65||Z>70&&Z<97););return ji(e,zo()+(t<6&&Zt()==32&&Ke()==32))}function os(e){for(;Ke();)switch(Z){case e:return Ae;case 34:case 39:e!==34&&e!==39&&os(Z);break;case 40:e===41&&os(e);break;case 92:Ke();break}return Ae}function Eh(e,t){for(;Ke()&&e+Z!==57;)if(e+Z===84&&Zt()===47)break;return"/*"+ji(t,Ae-1)+"*"+ia(e===47?e:Ke())}function jh(e){for(;!rs(Zt());)Ke();return ji(e,Ae)}function zh(e){return Sh(_o("",null,null,null,[""],e=wh(e),0,[0],e))}function _o(e,t,n,r,o,i,l,s,a){for(var u=0,h=0,g=l,m=0,x=0,w=0,S=1,L=1,f=1,c=0,p="",v=o,C=i,E=r,y=p;L;)switch(w=c,c=Ke()){case 40:if(w!=108&&re(y,g-1)==58){jo(y+=R(rl(c),"&","&\f"),"&\f",of(u?s[u-1]:0))!=-1&&(f=-1);break}case 34:case 39:case 91:y+=rl(c);break;case 9:case 10:case 13:case 32:y+=kh(w);break;case 92:y+=Ch(zo()-1,7);continue;case 47:switch(Zt()){case 42:case 47:sr(_h(Eh(Ke(),zo()),t,n,a),a);break;default:y+="/"}break;case 123*S:s[u++]=Je(y)*f;case 125*S:case 59:case 0:switch(c){case 0:case 125:L=0;case 59+h:f==-1&&(y=R(y,/\f/g,"")),x>0&&Je(y)-g&&sr(x>32?ju(y+";",r,n,g-1,a):ju(R(y," ","")+";",r,n,g-2,a),a);break;case 59:y+=";";default:if(sr(E=Eu(y,t,n,u,h,o,s,p,v=[],C=[],g,i),i),c===123)if(h===0)_o(y,t,E,E,v,i,g,s,C);else switch(m===99&&re(y,3)===110?100:m){case 100:case 108:case 109:case 115:_o(e,E,E,r&&sr(Eu(e,E,E,0,0,o,s,p,o,v=[],g,C),C),o,C,g,s,r?v:C);break;default:_o(y,E,E,E,[""],C,0,s,C)}}u=h=x=0,S=f=1,p=y="",g=l;break;case 58:g=1+Je(y),x=w;default:if(S<1){if(c==123)--S;else if(c==125&&S++==0&&xh()==125)continue}switch(y+=ia(c),c*S){case 38:f=h>0?1:(y+="\f",-1);break;case 44:s[u++]=(Je(y)-1)*f,f=1;break;case 64:Zt()===45&&(y+=rl(Ke())),m=Zt(),h=g=Je(p=y+=jh(zo())),c++;break;case 45:w===45&&Je(y)==2&&(S=0)}}return i}function Eu(e,t,n,r,o,i,l,s,a,u,h,g){for(var m=o-1,x=o===0?i:[""],w=sf(x),S=0,L=0,f=0;S<r;++S)for(var c=0,p=In(e,m+1,m=of(L=l[S])),v=e;c<w;++c)(v=lf(L>0?x[c]+" "+p:R(p,/&\f/g,x[c])))&&(a[f++]=v);return Ei(e,t,n,o===0?ki:s,a,u,h,g)}function _h(e,t,n,r){return Ei(e,t,n,nf,ia(yh()),In(e,2,-2),0,r)}function ju(e,t,n,r,o){return Ei(e,t,n,oa,In(e,0,r),In(e,r+1,-1),r,o)}function uf(e,t,n){switch(gh(e,t)){case 5103:return I+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return I+e+e;case 4789:return yr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return I+e+yr+e+V+e+e;case 5936:switch(re(e,t+11)){case 114:return I+e+V+R(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return I+e+V+R(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return I+e+V+R(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return I+e+V+e+e;case 6165:return I+e+V+"flex-"+e+e;case 5187:return I+e+R(e,/(\w+).+(:[^]+)/,I+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return I+e+V+"flex-item-"+R(e,/flex-|-self/g,"")+(ot(e,/flex-|baseline/)?"":V+"grid-row-"+R(e,/flex-|-self/g,""))+e;case 4675:return I+e+V+"flex-line-pack"+R(e,/align-content|flex-|-self/g,"")+e;case 5548:return I+e+V+R(e,"shrink","negative")+e;case 5292:return I+e+V+R(e,"basis","preferred-size")+e;case 6060:return I+"box-"+R(e,"-grow","")+I+e+V+R(e,"grow","positive")+e;case 4554:return I+R(e,/([^-])(transform)/g,"$1"+I+"$2")+e;case 6187:return R(R(R(e,/(zoom-|grab)/,I+"$1"),/(image-set)/,I+"$1"),e,"")+e;case 5495:case 3959:return R(e,/(image-set\([^]*)/,I+"$1$`$1");case 4968:return R(R(e,/(.+:)(flex-)?(.*)/,I+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+I+e+e;case 4200:if(!ot(e,/flex-|baseline/))return V+"grid-column-align"+In(e,t)+e;break;case 2592:case 3360:return V+R(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,ot(r.props,/grid-\w+-end/)})?~jo(e+(n=n[t].value),"span",0)?e:V+R(e,"-start","")+e+V+"grid-row-span:"+(~jo(n,"span",0)?ot(n,/\d+/):+ot(n,/\d+/)-+ot(e,/\d+/))+";":V+R(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return ot(r.props,/grid-\w+-start/)})?e:V+R(R(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return R(e,/(.+)-inline(.+)/,I+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Je(e)-1-t>6)switch(re(e,t+1)){case 109:if(re(e,t+4)!==45)break;case 102:return R(e,/(.+:)(.+)-([^]+)/,"$1"+I+"$2-$3$1"+yr+(re(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~jo(e,"stretch",0)?uf(R(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return R(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,l,s,a,u){return V+o+":"+i+u+(l?V+o+"-span:"+(s?a:+a-+i)+u:"")+e});case 4949:if(re(e,t+6)===121)return R(e,":",":"+I)+e;break;case 6444:switch(re(e,re(e,14)===45?18:11)){case 120:return R(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+I+(re(e,14)===45?"inline-":"")+"box$3$1"+I+"$2$3$1"+V+"$2box$3")+e;case 100:return R(e,":",":"+V)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return R(e,"scroll-","scroll-snap-")+e}return e}function ei(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function Ph(e,t,n,r){switch(e.type){case hh:if(e.children.length)break;case mh:case oa:return e.return=e.return||e.value;case nf:return"";case rf:return e.return=e.value+"{"+ei(e.children,r)+"}";case ki:if(!Je(e.value=e.props.join(",")))return""}return Je(n=ei(e.children,r))?e.return=e.value+"{"+n+"}":""}function Nh(e){var t=sf(e);return function(n,r,o,i){for(var l="",s=0;s<t;s++)l+=e[s](n,r,o,i)||"";return l}}function Th(e){return function(t){t.root||(t=t.return)&&e(t)}}function Lh(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case oa:e.return=uf(e.value,e.length,n);return;case rf:return ei([yt(e,{value:R(e.value,"@","@"+I)})],r);case ki:if(e.length)return vh(n=e.props,function(o){switch(ot(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":an(yt(e,{props:[R(o,/:(read-\w+)/,":"+yr+"$1")]})),an(yt(e,{props:[o]})),ns(e,{props:Cu(n,r)});break;case"::placeholder":an(yt(e,{props:[R(o,/:(plac\w+)/,":"+I+"input-$1")]})),an(yt(e,{props:[R(o,/:(plac\w+)/,":"+yr+"$1")]})),an(yt(e,{props:[R(o,/:(plac\w+)/,V+"input-$1")]})),an(yt(e,{props:[o]})),ns(e,{props:Cu(n,r)});break}return""})}}var Rh={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ze={},Dn=typeof process<"u"&&ze!==void 0&&(ze.REACT_APP_SC_ATTR||ze.SC_ATTR)||"data-styled",cf="active",df="data-styled-version",zi="6.1.8",la=`/*!sc*/
`,sa=typeof window<"u"&&"HTMLElement"in window,$h=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&ze.REACT_APP_SC_DISABLE_SPEEDY!==""?ze.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&ze.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&ze!==void 0&&ze.SC_DISABLE_SPEEDY!==void 0&&ze.SC_DISABLE_SPEEDY!==""&&ze.SC_DISABLE_SPEEDY!=="false"&&ze.SC_DISABLE_SPEEDY),Oh={},_i=Object.freeze([]),An=Object.freeze({});function ff(e,t,n){return n===void 0&&(n=An),e.theme!==n.theme&&e.theme||t||n.theme}var pf=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Mh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Ih=/(^-|-$)/g;function zu(e){return e.replace(Mh,"-").replace(Ih,"")}var Fh=/(a)(d)/gi,ao=52,_u=function(e){return String.fromCharCode(e+(e>25?39:97))};function is(e){var t,n="";for(t=Math.abs(e);t>ao;t=t/ao|0)n=_u(t%ao)+n;return(_u(t%ao)+n).replace(Fh,"$1-$2")}var ol,mf=5381,Sn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},hf=function(e){return Sn(mf,e)};function aa(e){return is(hf(e)>>>0)}function Dh(e){return e.displayName||e.name||"Component"}function il(e){return typeof e=="string"&&!0}var gf=typeof Symbol=="function"&&Symbol.for,vf=gf?Symbol.for("react.memo"):60115,Ah=gf?Symbol.for("react.forward_ref"):60112,Uh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Bh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},yf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Hh=((ol={})[Ah]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},ol[vf]=yf,ol);function Pu(e){return("type"in(t=e)&&t.type.$$typeof)===vf?yf:"$$typeof"in e?Hh[e.$$typeof]:Uh;var t}var Vh=Object.defineProperty,bh=Object.getOwnPropertyNames,Nu=Object.getOwnPropertySymbols,Wh=Object.getOwnPropertyDescriptor,Qh=Object.getPrototypeOf,Tu=Object.prototype;function xf(e,t,n){if(typeof t!="string"){if(Tu){var r=Qh(t);r&&r!==Tu&&xf(e,r,n)}var o=bh(t);Nu&&(o=o.concat(Nu(t)));for(var i=Pu(e),l=Pu(t),s=0;s<o.length;++s){var a=o[s];if(!(a in Bh||n&&n[a]||l&&a in l||i&&a in i)){var u=Wh(t,a);try{Vh(e,a,u)}catch{}}}}return e}function Un(e){return typeof e=="function"}function ua(e){return typeof e=="object"&&"styledComponentId"in e}function Yt(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ti(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function Ir(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ls(e,t,n){if(n===void 0&&(n=!1),!n&&!Ir(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ls(e[r],t[r]);else if(Ir(t))for(var r in t)e[r]=ls(e[r],t[r]);return e}function ca(e,t){Object.defineProperty(e,"toString",{value:t})}function Hr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Kh=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Hr(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var l=o;l<i;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(t+1),a=(l=0,n.length);l<a;l++)this.tag.insertRule(s,n[l])&&(this.groupSizes[t]++,s++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,l=o;l<i;l++)n+="".concat(this.tag.getRule(l)).concat(la);return n},e}(),Po=new Map,ni=new Map,No=1,uo=function(e){if(Po.has(e))return Po.get(e);for(;ni.has(No);)No++;var t=No++;return Po.set(e,t),ni.set(t,e),t},Gh=function(e,t){No=t+1,Po.set(e,t),ni.set(t,e)},Yh="style[".concat(Dn,"][").concat(df,'="').concat(zi,'"]'),Xh=new RegExp("^".concat(Dn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Jh=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},Zh=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(la),o=[],i=0,l=r.length;i<l;i++){var s=r[i].trim();if(s){var a=s.match(Xh);if(a){var u=0|parseInt(a[1],10),h=a[2];u!==0&&(Gh(h,u),Jh(e,h,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(s)}}};function qh(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var wf=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(s){var a=Array.from(s.querySelectorAll("style[".concat(Dn,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(Dn,cf),r.setAttribute(df,zi);var l=qh();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},e0=function(){function e(t){this.element=wf(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var l=r[o];if(l.ownerNode===n)return l}throw Hr(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),t0=function(){function e(t){this.element=wf(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),n0=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Lu=sa,r0={isServer:!sa,useCSSOMInjection:!$h},ri=function(){function e(t,n,r){t===void 0&&(t=An),n===void 0&&(n={});var o=this;this.options=fe(fe({},r0),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&sa&&Lu&&(Lu=!1,function(i){for(var l=document.querySelectorAll(Yh),s=0,a=l.length;s<a;s++){var u=l[s];u&&u.getAttribute(Dn)!==cf&&(Zh(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this)),ca(this,function(){return function(i){for(var l=i.getTag(),s=l.length,a="",u=function(g){var m=function(f){return ni.get(f)}(g);if(m===void 0)return"continue";var x=i.names.get(m),w=l.getGroup(g);if(x===void 0||w.length===0)return"continue";var S="".concat(Dn,".g").concat(g,'[id="').concat(m,'"]'),L="";x!==void 0&&x.forEach(function(f){f.length>0&&(L+="".concat(f,","))}),a+="".concat(w).concat(S,'{content:"').concat(L,'"}').concat(la)},h=0;h<s;h++)u(h);return a}(o)})}return e.registerId=function(t){return uo(t)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(fe(fe({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new n0(o):r?new e0(o):new t0(o)}(this.options),new Kh(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(uo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(uo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(uo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),o0=/&/g,i0=/^\s*\/\/.*$/gm;function Sf(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=Sf(n.children,t)),n})}function l0(e){var t,n,r,o=e===void 0?An:e,i=o.options,l=i===void 0?An:i,s=o.plugins,a=s===void 0?_i:s,u=function(m,x,w){return w.startsWith(n)&&w.endsWith(n)&&w.replaceAll(n,"").length>0?".".concat(t):m},h=a.slice();h.push(function(m){m.type===ki&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(o0,n).replace(r,u))}),l.prefix&&h.push(Lh),h.push(Ph);var g=function(m,x,w,S){x===void 0&&(x=""),w===void 0&&(w=""),S===void 0&&(S="&"),t=S,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var L=m.replace(i0,""),f=zh(w||x?"".concat(w," ").concat(x," { ").concat(L," }"):L);l.namespace&&(f=Sf(f,l.namespace));var c=[];return ei(f,Nh(h.concat(Th(function(p){return c.push(p)})))),c};return g.hash=a.length?a.reduce(function(m,x){return x.name||Hr(15),Sn(m,x.name)},mf).toString():"",g}var s0=new ri,ss=l0(),kf=oe.createContext({shouldForwardProp:void 0,styleSheet:s0,stylis:ss});kf.Consumer;oe.createContext(void 0);function as(){return W.useContext(kf)}var Cf=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ss);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ca(this,function(){throw Hr(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ss),this.name+t.hash},e}(),a0=function(e){return e>="A"&&e<="Z"};function Ru(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;a0(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Ef=function(e){return e==null||e===!1||e===""},jf=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Ef(i)&&(Array.isArray(i)&&i.isCss||Un(i)?r.push("".concat(Ru(o),":"),i,";"):Ir(i)?r.push.apply(r,Mn(Mn(["".concat(o," {")],jf(i),!1),["}"],!1)):r.push("".concat(Ru(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Rh||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function $t(e,t,n,r){if(Ef(e))return[];if(ua(e))return[".".concat(e.styledComponentId)];if(Un(e)){if(!Un(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return $t(o,t,n,r)}var i;return e instanceof Cf?n?(e.inject(n,r),[e.getName(r)]):[e]:Ir(e)?jf(e):Array.isArray(e)?Array.prototype.concat.apply(_i,e.map(function(l){return $t(l,t,n,r)})):[e.toString()]}function zf(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Un(n)&&!ua(n))return!1}return!0}var u0=hf(zi),c0=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&zf(t),this.componentId=n,this.baseHash=Sn(u0,n),this.baseStyle=r,ri.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=Yt(o,this.staticRulesId);else{var i=ti($t(this.rules,t,n,r)),l=is(Sn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,l)){var s=r(i,".".concat(l),void 0,this.componentId);n.insertRules(this.componentId,l,s)}o=Yt(o,l),this.staticRulesId=l}else{for(var a=Sn(this.baseHash,r.hash),u="",h=0;h<this.rules.length;h++){var g=this.rules[h];if(typeof g=="string")u+=g;else if(g){var m=ti($t(g,t,n,r));a=Sn(a,m+h),u+=m}}if(u){var x=is(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=Yt(o,x)}}return o},e}(),da=oe.createContext(void 0);da.Consumer;var ll={};function d0(e,t,n){var r=ua(e),o=e,i=!il(e),l=t.attrs,s=l===void 0?_i:l,a=t.componentId,u=a===void 0?function(v,C){var E=typeof v!="string"?"sc":zu(v);ll[E]=(ll[E]||0)+1;var y="".concat(E,"-").concat(aa(zi+E+ll[E]));return C?"".concat(C,"-").concat(y):y}(t.displayName,t.parentComponentId):a,h=t.displayName,g=h===void 0?function(v){return il(v)?"styled.".concat(v):"Styled(".concat(Dh(v),")")}(e):h,m=t.displayName&&t.componentId?"".concat(zu(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&o.attrs?o.attrs.concat(s).filter(Boolean):s,w=t.shouldForwardProp;if(r&&o.shouldForwardProp){var S=o.shouldForwardProp;if(t.shouldForwardProp){var L=t.shouldForwardProp;w=function(v,C){return S(v,C)&&L(v,C)}}else w=S}var f=new c0(n,m,r?o.componentStyle:void 0);function c(v,C){return function(E,y,_){var D=E.attrs,$=E.componentStyle,Ee=E.defaultProps,At=E.foldedComponentIds,Ut=E.styledComponentId,Vr=E.target,Ni=oe.useContext(da),Qn=as(),Bt=E.shouldForwardProp||Qn.shouldForwardProp,j=ff(y,Ni,Ee)||An,N=function(mt,je,nt){for(var Kn,Vt=fe(fe({},je),{className:void 0,theme:nt}),Ti=0;Ti<mt.length;Ti+=1){var br=Un(Kn=mt[Ti])?Kn(Vt):Kn;for(var ht in br)Vt[ht]=ht==="className"?Yt(Vt[ht],br[ht]):ht==="style"?fe(fe({},Vt[ht]),br[ht]):br[ht]}return je.className&&(Vt.className=Yt(Vt.className,je.className)),Vt}(D,y,j),T=N.as||Vr,A={};for(var U in N)N[U]===void 0||U[0]==="$"||U==="as"||U==="theme"&&N.theme===j||(U==="forwardedAs"?A.as=N.forwardedAs:Bt&&!Bt(U,T)||(A[U]=N[U]));var Ht=function(mt,je){var nt=as(),Kn=mt.generateAndInjectStyles(je,nt.styleSheet,nt.stylis);return Kn}($,N),Ue=Yt(At,Ut);return Ht&&(Ue+=" "+Ht),N.className&&(Ue+=" "+N.className),A[il(T)&&!pf.has(T)?"class":"className"]=Ue,A.ref=_,W.createElement(T,A)}(p,v,C)}c.displayName=g;var p=oe.forwardRef(c);return p.attrs=x,p.componentStyle=f,p.displayName=g,p.shouldForwardProp=w,p.foldedComponentIds=r?Yt(o.foldedComponentIds,o.styledComponentId):"",p.styledComponentId=m,p.target=r?o.target:e,Object.defineProperty(p,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(v){this._foldedDefaultProps=r?function(C){for(var E=[],y=1;y<arguments.length;y++)E[y-1]=arguments[y];for(var _=0,D=E;_<D.length;_++)ls(C,D[_],!0);return C}({},o.defaultProps,v):v}}),ca(p,function(){return".".concat(p.styledComponentId)}),i&&xf(p,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),p}function $u(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Ou=function(e){return Object.assign(e,{isCss:!0})};function fa(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Un(e)||Ir(e))return Ou($t($u(_i,Mn([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?$t(r):Ou($t($u(r,t)))}function us(e,t,n){if(n===void 0&&(n=An),!t)throw Hr(1,t);var r=function(o){for(var i=[],l=1;l<arguments.length;l++)i[l-1]=arguments[l];return e(t,n,fa.apply(void 0,Mn([o],i,!1)))};return r.attrs=function(o){return us(e,t,fe(fe({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return us(e,t,fe(fe({},n),o))},r}var _f=function(e){return us(d0,e)},P=_f;pf.forEach(function(e){P[e]=_f(e)});var f0=function(){function e(t,n){this.rules=t,this.componentId=n,this.isStatic=zf(t),ri.registerId(this.componentId+1)}return e.prototype.createStyles=function(t,n,r,o){var i=o(ti($t(this.rules,n,r,o)),""),l=this.componentId+t;r.insertRules(l,l,i)},e.prototype.removeStyles=function(t,n){n.clearRules(this.componentId+t)},e.prototype.renderStyles=function(t,n,r,o){t>2&&ri.registerId(this.componentId+t),this.removeStyles(t,r),this.createStyles(t,n,r,o)},e}();function p0(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=fa.apply(void 0,Mn([e],t,!1)),o="sc-global-".concat(aa(JSON.stringify(r))),i=new f0(r,o),l=function(a){var u=as(),h=oe.useContext(da),g=oe.useRef(u.styleSheet.allocateGSInstance(o)).current;return u.styleSheet.server&&s(g,a,u.styleSheet,h,u.stylis),oe.useLayoutEffect(function(){if(!u.styleSheet.server)return s(g,a,u.styleSheet,h,u.stylis),function(){return i.removeStyles(g,u.styleSheet)}},[g,a,u.styleSheet,h,u.stylis]),null};function s(a,u,h,g,m){if(i.isStatic)i.renderStyles(a,Oh,h,m);else{var x=fe(fe({},u),{theme:ff(u,g,l.defaultProps)});i.renderStyles(a,x,h,m)}}return oe.memo(l)}function Wn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ti(fa.apply(void 0,Mn([e],t,!1))),o=aa(r);return new Cf(o,r)}const m0="/devpedro/assets/Ubuntu-Medium-C-1-7KOl.ttf",h0="/devpedro/assets/Ubuntu-Bold-BGoo8i9Y.ttf",g0=p0`

    @font-face {
        font-family: "UbuntuMedium";
        src: local('Ubuntu-Medium'), local('UbuntuMedium'), url(${m0});;
    }

    @font-face {
        font-family: "UbuntuBold";
        src: local('UbuntuBold'), local('UbuntuBold'), url(${h0});;
    }

    html {
        font-family: "UbuntuMedium";
        line-height: 1.15; 
        -webkit-text-size-adjust: 100%; 
        scroll-behavior: smooth;
    }
body {
  margin: 0;
  min-height: 100vh;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}
button,
input { 
  overflow: visible;
}
button,
select { 
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
}
`;var Pf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Mu=oe.createContext&&oe.createContext(Pf),v0=["attr","size","title"];function y0(e,t){if(e==null)return{};var n=x0(e,t),r,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function x0(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function oi(){return oi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},oi.apply(this,arguments)}function Iu(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function ii(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Iu(Object(n),!0).forEach(function(r){w0(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Iu(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function w0(e,t,n){return t=S0(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S0(e){var t=k0(e,"string");return typeof t=="symbol"?t:String(t)}function k0(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Nf(e){return e&&e.map((t,n)=>oe.createElement(t.tag,ii({key:n},t.attr),Nf(t.child)))}function tt(e){return t=>oe.createElement(C0,oi({attr:ii({},e.attr)},t),Nf(e.child))}function C0(e){var t=n=>{var{attr:r,size:o,title:i}=e,l=y0(e,v0),s=o||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),oe.createElement("svg",oi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:a,style:ii(ii({color:e.color||n.color},n.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),i&&oe.createElement("title",null,i),e.children)};return Mu!==void 0?oe.createElement(Mu.Consumer,null,n=>t(n)):t(Pf)}function E0(e){return tt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"44",d:"M102 256h308m-308-80h308M102 336h308"},child:[]}]})(e)}const j0=()=>{const[e,t]=W.useState(!1);function n(){t(!e)}return d.jsxs(z0,{children:[d.jsxs("h1",{children:[d.jsx("span",{children:"dev"})," Pedro Henrique"]}),d.jsx("nav",{children:d.jsxs("ul",{children:[d.jsx("li",{children:d.jsx(vt,{href:"#sobre-mim",children:"Sobre mim"})}),d.jsx("li",{children:d.jsx(vt,{href:"#projetos",children:"Projetos"})}),d.jsx("li",{children:d.jsx(vt,{href:"#formacao",children:"Formação"})}),d.jsx("li",{children:d.jsx(vt,{href:"#contato",children:"Contato"})})]})}),d.jsxs(_0,{onClick:()=>n(),children:[d.jsx(E0,{size:50}),e&&d.jsxs(P0,{children:[d.jsx(vt,{href:"#sobre-mim",children:"Sobre mim"}),d.jsx(vt,{href:"#projetos",children:"Projetos"}),d.jsx(vt,{href:"#formacao",children:"Formação"}),d.jsx(vt,{href:"#contato",children:"Contato"})]})]})]})},z0=P.header`
    width: 100%;
    padding: 40px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    h1 {
      font-size: 40px;
      letter-spacing: 5px;
      transition: transform 0.3s ease; 
      &:hover {
        transform: translateY(-10px);    
      }
    }
    span {
      font-size: 30px;
      letter-spacing: 3px;
      color: #412cc5;
      margin-right: -9px;
    }
    nav {
        display: block;
        ul {
            list-style-type: none; 
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            justify-content: center;
            gap: 40px;
        }
    }
    @media (max-width: 1300px) {
        nav {
            transform: translateX(-5%);
        }
    }
    @media (max-width: 983px) {
      display: flex;
      flex-direction: column;
    }
    @media (max-width: 610px) {
      nav {
        display: none;
      }
    }
`,vt=P.a`
    position: relative;
    text-decoration: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    color: #141414;
    font-size: 1.125em;
    line-height: 1.3rem;
    letter-spacing: 0.5px;
    padding: 0 3px;
    transition: all 0.3s;
    &::after {
        content: "";
        position: absolute;
        background-color: #4a2cc5;
        height: 2px;
        width: 0;
        left: 0;
        bottom: -5px;
        transition: 0.5s;
    }
    &:hover::after {
        width: 100%;
    }
    &:hover {
        color: #4a2cc5;
    }
    @media (max-width: 983px) {
      background-color: #f5f5f5;
      border-radius: 5px;
      padding: 10px;
    }
`,_0=P.header`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  display: none;
  @media (max-width: 610px) {
    display: flex;
    flex-direction: column;
  }
`,P0=P.section`
  display: flex;
  width: 80%;
  gap: 35px;
  flex-direction: column;
  a {
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`,N0=()=>d.jsxs(O0,{id:"sobre-mim",children:[d.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/devpedro-b54e3.appspot.com/o/FotoPerfil.jpeg?alt=media&token=256886ed-8ddf-4536-9df1-55d8e3772413",alt:""}),d.jsxs("div",{children:[d.jsxs("h2",{children:["Desenvolvedor ",d.jsx("br",{}),"Full stack"]}),d.jsxs("p",{children:["Sou um Desenvolvedor Full stack apaixonado por transformar conceitos em realidade, unindo habilidades técnicas e criatividade. Estou constantemente em busca de novas oportunidades para aprimorar minhas habilidades e enfrentar desafios em projetos inovadores. Meu objetivo é a constante aprendizagem e crescimento profissional na área. Possuo expertise nas seguintes tecnologias: ",d.jsx("strong",{children:"JavaScript"}),","," ",d.jsx("strong",{children:"React.js"}),", ",d.jsx("strong",{children:"TypeScript"}),", ",d.jsx("strong",{children:"Node.js"}),", ","",d.jsx("strong",{children:"MySQL"}),", ",d.jsx("strong",{children:"PostgreSQL"}),", ",d.jsx("strong",{children:"Git"}),", ","",d.jsx("strong",{children:"Github"}),", ",d.jsx("strong",{children:"TailwindCSS"}),". Além disso, tenho experiência em outras tecnologias como: ",d.jsx("strong",{children:"Firebase"}),"."]})]}),d.jsxs("section",{children:[d.jsx("a",{href:"https://github.com/pedrohbf1",children:"Github"}),d.jsx("a",{href:"https://www.linkedin.com/in/pedro-henrique-2a861827b/",children:"Linkedin"})]}),d.jsx(M0,{})]}),T0=Wn`
  from {
    transform: translateX(-30%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`,L0=Wn`
  from {
    transform: translateY(-50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,R0=Wn`
  from {
    transform: translateY(-20%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,$0=Wn`
  from {
    transform: translateY(30%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,O0=P.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  margin: 0 auto;
  padding: 40px 20px;
  align-items: center;
  box-sizing: border-box;

  img {
    width: 350px;
    height: 350px;
    object-fit: cover;
    border-radius: 50%;
    animation: ${T0} 1s ease;
    opacity: 1;
    @media (max-width: 366px) {
      width: 250px;
      height: 250px;
    }
    @media (max-width: 258px) {
      width: 150px;
      height: 150px;
    }
  }

  div {
    margin-top: 20px;
    h2 {
      font-size: 40px;
      animation: ${L0} 2s ease;
      text-transform: uppercase;
      @media (max-width: 350px) {
        font-size: 18px;
      }
      &::after {
        display: inline-block;
        content: "";
        width: 8px;
        height: 8px;
        background-color: #4a2cc5;
        border-radius: 50%;
        margin-left: 5px;
      }
    }
    p {
      margin-top: 30px;
      color: #525252;
      line-height: 1.7rem;
      letter-spacing: 0.7px;
      animation: ${R0} 1.5s ease;
      strong {
        color: #000;
        font-family: "UbuntuBold";
      }
    }
  }

  section {
    grid-column: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    animation: ${$0} 2s ease;
    a {
      padding: 6px 16px;
      border: 1px solid #4a2cc5;
      border-radius: 10px;
      transition: 0.3s;
      text-decoration: none;
      color: #141414;
      font-size: 1.75rem;
      letter-spacing: 0.14rem;
      &:hover {
        background-color: #4a2cc5;
        color: white;
        box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
        transform: scale(1.08);
      }
    }
  }

  @media (max-width: 1300px) {
    p {
      transform: translateX(-5%);
      width: 90%;
    }
    section {
      a {
        font-size: 1.3rem;
        letter-spacing: 0.14rem;
      }
    }
  }

  @media (max-width: 830px) {
    display: flex;
    flex-direction: column;
    p {
      transform: translateX(0%);
      width: 90%;
    }
  }

`,M0=P.footer`
  grid-column: span 2;
  justify-self: center;
  width: 70%;
  margin: 0 auto;
  border: 1px solid #4a2cc5;
`;function I0(e){return tt({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function F0(e){return tt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function D0(e){return tt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"},child:[]}]})(e)}function Tf(e){return tt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"},child:[]}]})(e)}function Lf(e){return tt({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"},child:[]}]})(e)}function Rf(e){return tt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M10.09 15.59 11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"},child:[]}]})(e)}function A0(e){return tt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"},child:[]}]})(e)}function U0(e){return tt({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"},child:[]},{tag:"path",attr:{d:"M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm-8 6H8v1h3c.55 0 1 .45 1 1v3c0 .55-.45 1-1 1h-1v1H8v-1H6v-2h4v-1H7c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h1V7h2v1h2v2zm4 6.25-2-2h4l-2 2zM14 10l2-2 2 2h-4z"},child:[]}]})(e)}const B0=({projeto:e,setAbrirModal:t})=>{function n(){t(!1)}const r=o=>{o.key==="Escape"&&n()};return W.useEffect(()=>(document.addEventListener("keydown",r),()=>{document.removeEventListener("keydown",r)}),[]),d.jsx(H0,{onClick:n,children:d.jsxs(V0,{children:[d.jsx(b0,{onClick:()=>n(),children:d.jsx(Rf,{size:24})}),d.jsx("a",{href:e.url,children:d.jsx("h2",{children:e.titulo})}),d.jsx(W0,{children:d.jsx("a",{href:e.url,children:d.jsx("img",{src:e.imagemCapa,alt:e.titulo})})}),d.jsx(Q0,{children:d.jsx("p",{children:e.descricao})}),d.jsxs(K0,{children:[d.jsx("p",{children:"Tecnologias:"}),d.jsx("div",{children:e.linguagens&&e.linguagens.map((o,i)=>d.jsx("li",{children:o},i))})]}),d.jsx(Y0,{}),d.jsxs(G0,{children:[d.jsx("a",{href:e.url,children:d.jsx(Tf,{size:24})}),d.jsx("a",{href:e.repositorio,children:d.jsx(Lf,{size:24})})]})]})})},H0=P.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,V0=P.div`
    background: rgba(255, 255, 255, 0.95); 
    backdrop-filter: blur(5px);
    padding: 20px;
    border-radius: 10px; 
    width: 400px;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 20px; 
    border: 2px solid #4a2cc5;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3); 
    max-height: 600px; 
    overflow-y: auto;
    a {
        text-decoration: none;
        color: black;
        transition: 0.5s all; 
        &:hover {
            color: #4a2cc5;
        }
    }
    h2 {
        letter-spacing: 3px;
        font-size: 28px; 
    }
`,b0=P.button`
    position: absolute;
    color: #4a2cc5;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 24px; 
    cursor: pointer;
`,W0=P.picture`
  width: 100%;

  a {
    display: block;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05); 
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 8px; 
    border: 2px solid #4a2cc5;
    aspect-ratio: 16 / 7;
  }
`,Q0=P.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    font-size: 1.25rem;
    color: #525252;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    letter-spacing: .14rem;
`,K0=P.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 10px;
    p {
        font-size: 20px;
        letter-spacing: 3px;
    }
    div {
        display: flex;
        gap: 7px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        li {
            padding: 10px;
            background-color: #f2f2f2;
            border-radius: 5px;
            color: #141414;
        }
    }
`,G0=P.div`
    display: flex;
    justify-content: ${e=>e.$index%2===0?"flex-end":"flex-start"};
    gap: 30px;
    margin-top: 10px; 
    align-items: center;
    justify-content: center;
    a {
        color: black;
        padding: 5px;
        border: 1px solid black;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        justify-content: center;
        align-items: center;
        display: flex;
        transition: 0.3s all;
        &:hover {
            color: #4a2cc5;
            border: 1px solid #4a2cc5;
        }
    }
    
    @media (max-width: 1100px) {
        margin-top: 30px;
    }
`,Y0=P.span`
    width: 100%;
    border-bottom: solid 1px #121212;
`,X0=({projeto:e,index:t})=>{const[n,r]=W.useState(!1);function o(){r(!0)}const i=t%2===0?"row":"row-reverse";return d.jsxs(ar,{children:[d.jsxs(J0,{$index:t,children:[d.jsxs("main",{children:[d.jsx("a",{href:e.url,children:d.jsx("h2",{children:e.titulo})}),d.jsx(Z0,{children:"Clique em ver mais..."}),d.jsx("p",{children:e.descricao.length>150?`${e.descricao.substring(0,150)}...`:e.descricao}),d.jsxs(q0,{children:[e.linguagens&&e.linguagens.slice(0,3).map((l,s)=>d.jsx("li",{children:l},s)),e.linguagens&&e.linguagens.length>3&&d.jsx(n1,{flexDirectionStyle:i,onClick:()=>o(),children:"..."})]})]}),d.jsxs(e1,{$index:t,children:[d.jsx("button",{onClick:()=>o(),children:"Ver mais"}),d.jsxs("div",{children:[d.jsx("a",{href:e.url,children:d.jsx(Tf,{size:25})}),d.jsx("a",{href:e.repositorio,children:d.jsx(Lf,{size:25})})]})]})]}),d.jsx(t1,{children:d.jsx("a",{href:e.url,children:d.jsx("img",{src:e.imagemCapa,alt:e.titulo})})}),n&&d.jsx(B0,{projeto:e,setAbrirModal:r})]})},ar=P.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  box-sizing: border-box;
  height: 100%;

  @media (max-width: 1330px) {
    padding: 0 70px 0 0;
  }

  @media (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 50px;
  }
`,J0=P.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  text-align: ${e=>e.$index%2===0?"right":"left"}; 

  main {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    gap: 15px;
    align-items: ${e=>e.$index%2===0?"flex-end":"flex-start"};

    @media (max-width: 1000px) {
      align-items: center;
    }

    a {
      text-decoration: none;
      color: #141414;
      font-size: 1.3rem;
      letter-spacing: 3px;
      cursor: pointer;
      transition: color 0.3s ease-in-out;

      &:hover {
        color: #4a2cc5;
      }
    }

    p {
      font-size: 1.25rem;
      color: #525252;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      letter-spacing: .14rem;
      @media (max-width: 1330px) {
        display: none;
      }
    }
  }

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
    justify-content: center;
  }

  ${ar}:nth-child(odd) & {
    order: -1; 
  }

  ${ar}:nth-child(even) & {
    order: 1; 
  }

  @media (max-width: 1000px) {
    align-items: center;
    text-align: center;
    justify-content: center;
    ${ar}:nth-child(odd) & {
      order: 1; 
    }

    ${ar}:nth-child(even) & {
      order: 1; 
    }
  }
`,Z0=P.span`
  font-size: 1.25rem;
  display: none;
  color: #525252;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  letter-spacing: .14rem;
  @media (max-width: 1330px) {
    display: flex;
    margin-top: -5px;
    margin-bottom: 10px;
  }
`,q0=P.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 5px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 1000px) {
    display: none;
  }

  li {
    padding: 10px;
    background-color: #f2f2f2;
    border-radius: 5px;
  }
  
`,e1=P.div`
display: flex;
justify-content: space-between;
flex-direction: ${e=>e.$index%2===0?"row":"row-reverse"};

@media (max-width: 1000px) {
  margin-top: 15px;
  flex-direction: row;
  gap: 20px;
}

button {
  padding: 10px;
  background-color: white;
  border: 1px solid #4a2cc5;
  border-radius: 5px;
  letter-spacing: 3px;
  transition: 0.5s all;
  cursor: pointer;
  &:hover {
    background-color: #4a2cc5;
    color: white;
  }
}
  div {
  display: flex;
  justify-content: ${e=>e.$index%2===0?"flex-end":"flex-start"};
  gap: 30px;
  margin-top: auto; 
  a {
    color: black;
    padding: 5px;
    border: 1px solid black;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    justify-content: center;
    align-items: center;
    display: flex;
    transition: 0.3s all;
    &:hover {
      color: #4a2cc5;
      border: 1px solid #4a2cc5;
    }
  }
  }
`,t1=P.picture`
  width: 100%;

  a {
    display: block;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.10);
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 5px;
    border: 1px solid #4a2cc5;
    aspect-ratio: 16 / 7;
  }
  @media (max-width: 1000px) {
    align-items: center;
    justify-content: center;
    display: flex;
    img {
      width: 500px;
      height: 300px;
      object-fit: cover;
    }
  }
    
   @media (max-width: 625px) {
    img {
      width: 450px;
    }
   } 

   @media (max-width: 535px) {
    img {
      width: 350px;
    }
   } 

   @media (max-width: 440px) {
    img {
      width: 300px;
    }
   } 

   @media (max-width: 390px) {
    img {
      width: 250px;
    }
   } 

   @media (max-width: 340px) {
    img {
      width: 200px;
    }
   }

   @media (max-width: 300px) {
    img {
      width: 160px;
    }
   }

   @media (max-width: 266px) {
    img {
      width: 120px;
    }
   }
`,n1=P.li`
  padding: 0 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  order: ${e=>e.flexDirectionStyle==="row"?-1:1};
  transition: 0.5s ease;

  &:hover {
    background-color: #4a2cc5;
    color: white;
  }
`,Fu=[{titulo:"Pedro Shop",descricao:"Esse foi meu primeiro projeto full-stack, no qual desenvolvi sozinho tanto a parte do usuário quanto a parte do servidor. Este projeto foi concebido com o objetivo de aprimorar e aprofundar as competências em Node.js. Ele engloba um sistema completo com formulário de autenticação, funcionalidades de registro, cadastro, remoção e edição de produtos, além de uma seção destacada para exibição dos produtos mais relevantes.",url:"https://pedro-shop-frontend.vercel.app/",repositorio:"https://github.com/pedrohbf1/pedroShop-frontend",imagemCapa:"https://firebasestorage.googleapis.com/v0/b/devpedro-b54e3.appspot.com/o/pedroShop.png?alt=media&token=beadd282-27fd-4353-8993-0fa5dd46f15f",linguagens:["JavaScript","Styled-component","React.js","React-icons","axios","Firebase","React-router-dom","React-loader-spinner","Node.js","Express","MySQL"]},{titulo:"Sistema de entregas",descricao:"Este projeto visa centralizar o gerenciamento de todas as entregas de uma lanchonete, proporcionando uma transição eficiente do processo manual para uma abordagem digitalizada.",url:"https://sistema-de-entregas.vercel.app/",repositorio:"https://github.com/pedrohbf1/Sistema-de-entregas",imagemCapa:"https://firebasestorage.googleapis.com/v0/b/devpedro-b54e3.appspot.com/o/Captura%20de%20Tela%202024-02-15%20a%CC%80s%2014.26.17.png?alt=media&token=f65431e3-76ca-4b3e-b3e7-ca8c5339419e",linguagens:["JavaScript","React.js","Firebase Database","React router dom","Firebase storage","Styled component","HTML5","CSS3"]},{titulo:"Floricultura Boulevard",descricao:"Este projeto destaca a criação de um site que se distingue por imagens impactantes e uma interface administrativa abrangente. Além disso, inclui um sistema de caixa completo.",url:"https://floricultura-boulevard.vercel.app/",repositorio:"https://github.com/pedrohbf1/floriculturaBoulevard",imagemCapa:"https://firebasestorage.googleapis.com/v0/b/devpedro-b54e3.appspot.com/o/Captura%20de%20Tela%202024-02-14%20a%CC%80s%2015.18.36.png?alt=media&token=485ad8ac-91ce-4926-85f3-add4d6dc65f3",linguagens:["JavaScript","React.js","Firebase Database","React router dom","Firebase storage","Styled component","HTML5","CSS3","Context Api"]},{titulo:"Track-it",descricao:"Este projeto é uma aplicação web desenvolvida para facilitar a gestão de hábitos diários. Ele permite aos usuários criar, visualizar, atualizar e excluir hábitos de forma simples e eficiente.",url:"https://track-it-seven.vercel.app/",repositorio:"https://github.com/pedrohbf1/Track-it",imagemCapa:"https://firebasestorage.googleapis.com/v0/b/devpedro-b54e3.appspot.com/o/TrackidCapa.png?alt=media&token=c92e9495-6b43-474b-9431-86ccf4a9302f",linguagens:["JavaScript","React.js","Axios","React router dom","Context Api","Styled component","DayJS","React circular progressbar","HTML5","CSS3"]},{titulo:"Dra Priscilla Santos",descricao:"Este projeto consiste em uma landing page desenvolvida para uma psicóloga local. O objetivo era criar um site simples que fornecesse informações sobre psicologia em geral e sobre a profissional em questão. A página destaca os serviços oferecidos pela psicóloga e fornece uma breve descrição de sua abordagem e experiência.",url:"https://dra-priscila.vercel.app/",repositorio:"https://github.com/pedrohbf1/draPriscila",imagemCapa:"https://firebasestorage.googleapis.com/v0/b/devpedro-b54e3.appspot.com/o/draPriscillaFOTO.png?alt=media&token=13128e35-4164-4a30-9e7c-16c71d9e1ccd",linguagens:["React.js","React-icons","Styled component","HTML5","CSS3"]},{titulo:"Space app",descricao:"Este website foi meticulosamente concebido para apresentar imagens deslumbrantes de estrelas, constelações e planetas que adornam o vasto espaço cósmico. Com uma interface intuitiva, proporciona aos usuários a oportunidade de explorar a beleza celestial de forma envolvente e educativa. Destaca-se pela inclusão de um filtro personalizado, permitindo uma experiência mais específica e personalizada ao visualizar o universo. É com satisfação que revelamos que este projeto foi concebido como parte integrante do curso oferecido pela renomada instituição Alura. ",url:"https://space-app-smoky.vercel.app/",repositorio:"https://github.com/pedrohbf1/spaceApp/tree/main/src/componentes",imagemCapa:"https://firebasestorage.googleapis.com/v0/b/devpedro-b54e3.appspot.com/o/imagemCapa%20spaceApp.png?alt=media&token=9b337e85-71b1-488e-943f-00233ba0eddc",linguagens:["JavaScript","React.js","HTML5","CSS3","Styled component"]},{titulo:"Monibank",descricao:"Este website foi desenvolvido com o propósito de aprimorar e aprofundar as habilidades em JavaScript. Inclui um formulário com múltiplas validações para registro, a capacidade de acessar a câmera do usuário para facilitar o processo de registro, e uma tela de login para usuários registrados. Explore e aperfeiçoe suas habilidades enquanto interage com as diversas funcionalidades oferecidas neste projeto.",url:"https://monibank-sable.vercel.app/pages/abrir-conta-form.html",repositorio:"https://github.com/pedrohbf1/Monibank",imagemCapa:"https://firebasestorage.googleapis.com/v0/b/devpedro-b54e3.appspot.com/o/capa%20monibank.png?alt=media&token=be2755c3-bb88-46e9-86ae-2748be8224e5",linguagens:["JavaScript","HTML5","CSS3"]}],r1=()=>d.jsxs(o1,{id:"projetos",children:[d.jsx(i1,{children:"Projetos"}),d.jsxs(a1,{children:[d.jsx("p",{children:"Arraste pro lado"}),d.jsx(D0,{size:20,color:"#4a2cc5"})]}),d.jsx(l1,{children:d.jsx("ul",{children:Fu&&Fu.map((e,t)=>d.jsx(X0,{index:t,projeto:e},t))})})]}),o1=P.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 20px;
    box-sizing: border-box;
    gap: 30px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`,i1=P.h2`
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-top: 30px;
    &::after {
        content: "";
        display: block;
        width: 100px;
        height: 4px;
        background-color: #4a2cc5;
        margin-top: 10px;
        transition: 0.3s all;
    }
    &:hover::after {
        width: 210px;
    }
`,l1=P.div`
    width: 100%;
    display: block;
    margin: 15px 0;
    box-sizing: border-box;
    ul {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        gap: 90px;
        @media (max-width: 1000px) {
            overflow-x: auto;
            flex-direction: row;
            margin: -30px 0;
        }
    }
`,s1=Wn`
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
`,a1=P.section`
    display: flex;
    margin: 0;
    display: none;

    svg {
        animation: ${s1} 1s linear infinite; 
    }

    @media (max-width: 1000px) {
        display: flex;
        gap: 20px;
    }

    p {
        color: #4a2cc5;
        text-transform: uppercase;
        letter-spacing: 0.8px;
    }
`,u1=({curso:e})=>d.jsxs(c1,{children:[d.jsx("h3",{children:e.modalidade}),d.jsxs(d1,{children:[d.jsx("strong",{children:e.nomeCurso})," - ",e.localCurso]}),d.jsx("p",{children:e.descricao}),d.jsx("p",{children:e.dataCurso})]}),c1=P.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 25px;
    background-color: #0a0a0a;
    border: 1px solid #6c6c6c;
    border-radius: 5px;
    padding: 20px;
    transition: 0.5s ease;
    min-width: 200px;
    h3 {
        font-size: 1.45rem;
        letter-spacing: 4px;
        color: #CCC;
    }
    :nth-child(3) {
        font-size: 1rem;
        color: #F0F0F0;
    }
    :nth-child(4) {
        font-size: 1.25rem;
        color: #F0F0F0;
    }
    &:hover {
        transform: scale(1.3);
    }
    @media (max-width: 530px ) {
        &:hover {
            transform: scale(1.0);
        }
    }
`,d1=P.p`
    font-size: 1rem;
    color: #F0F0F0;
    font-family: "UbuntuMedium";
    strong {
        color: #CCC;
        font-family: "UbuntuBold";
        font-size: 1.5rem;
    }
`,Du=[{modalidade:"Curso",descricao:"",nomeCurso:"HTML5 - CSS3",localCurso:"Alura",dataCurso:"60h - 2022"},{modalidade:"Curso",descricao:"",nomeCurso:"CSS grid layout",localCurso:"Alura",dataCurso:"43h - 2022"},{modalidade:"Curso",descricao:"Variáveis, funções, arrays",nomeCurso:"Javascript",localCurso:"Alura",dataCurso:"100h - 2023"},{modalidade:"Curso",descricao:"Objeto",nomeCurso:"JavaScript",localCurso:"Alura",dataCurso:"50h - 2023"},{modalidade:"Curso",descricao:"Manipular Document object model",nomeCurso:"JavaScript DOM",localCurso:"Alura",dataCurso:"45h - 2023"},{modalidade:"Curso",descricao:"async await",nomeCurso:"JavaScript assíncrono",localCurso:"Alura",dataCurso:"20h - 2023"},{modalidade:"Curso",descricao:"Tratamento de API",nomeCurso:"JavaScript API",localCurso:"Alura",dataCurso:"40h - 2023"},{modalidade:"Curso",descricao:"Axios / fetch",nomeCurso:"JavaScript API",localCurso:"Alura",dataCurso:"15h - 2023"},{modalidade:"Curso",descricao:"Axios / fetch",nomeCurso:"JavaScript",localCurso:"Alura",dataCurso:"15h - 2023"},{modalidade:"Curso",descricao:"JavaScript extension",nomeCurso:"React JSX",localCurso:"Alura",dataCurso:"25h - 2023"},{modalidade:"Curso",descricao:"Styled component",nomeCurso:"React",localCurso:"Alura",dataCurso:"10h - 2023"},{modalidade:"Curso",descricao:"Single page application",nomeCurso:"React",localCurso:"Alura",dataCurso:"20h - 2023"},{modalidade:"Curso",descricao:"Context API",nomeCurso:"React",localCurso:"Alura",dataCurso:"15h - 2023"},{modalidade:"Curso",descricao:"new Map",nomeCurso:"React",localCurso:"Alura",dataCurso:"30h - 2023"},{modalidade:"Curso",descricao:"Insomnia",nomeCurso:"Node.js",localCurso:"Curso em video",dataCurso:"10h - 2023"},{modalidade:"Curso",descricao:"request/response",nomeCurso:"Node.js",localCurso:"Curso em video",dataCurso:"25h - 2024"},{modalidade:"Curso",descricao:"Schema / Database",nomeCurso:"MySQL",localCurso:"Curso em video",dataCurso:"25h - 2024"}],f1=()=>d.jsx(p1,{children:d.jsxs(m1,{id:"formacao",children:[d.jsx("h1",{children:"Formação"}),d.jsx(h1,{children:Du&&Du.map((e,t)=>d.jsx(u1,{curso:e},t))}),d.jsxs(sl,{children:[d.jsx("h3",{children:"Hard skills"}),d.jsxs("section",{children:[d.jsxs("div",{children:[d.jsx("p",{children:"React.js"}),d.jsx("p",{children:"Firebase"}),d.jsx("p",{children:"Node.js"}),d.jsx("p",{children:"MySQL"})]}),d.jsxs("div",{children:[d.jsx("p",{children:"JavaScript"}),d.jsx("p",{children:"HTML"}),d.jsx("p",{children:"CSS"}),d.jsx("p",{children:"Git/Github"})]})]})]}),d.jsxs(sl,{children:[d.jsx("h3",{children:"Soft skills"}),d.jsxs("section",{children:[d.jsxs("div",{children:[d.jsx("p",{children:"Resolução de problemas"}),d.jsx("p",{children:"Trabalho em equipe"}),d.jsx("p",{children:"Criatividade"}),d.jsx("p",{children:"Flexibilidade"})]}),d.jsxs("div",{children:[d.jsx("p",{children:"Curiosidade"}),d.jsx("p",{children:"Atençao para ouvir"}),d.jsx("p",{children:"Agilidade de aprendizado"}),d.jsx("p",{children:"Princípios éticos"})]})]})]}),d.jsxs(sl,{children:[d.jsx("h3",{children:"Idioma"}),d.jsx("section",{children:d.jsxs("div",{children:[d.jsxs("p",{children:[d.jsx("strong",{children:"Inglês"})," / Básico"]}),d.jsxs("p",{children:[d.jsx("strong",{children:"Português"})," / Nativo"]})]})})]})]})}),p1=P.main`
    width: 100%;
    background-color: #141414;
    box-sizing: border-box;
`,m1=P.header`
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 20px 40px 20px;
    box-sizing: border-box;
    h1 {
      font-size: 6rem;
      text-transform: uppercase;
      &::after {
        display: inline-block;
        content: "";
        width: 15px;
        height: 15px;
        background-color: #4a2cc5;
        border-radius: 50%;
        margin-left: 5px;
        transition: 0.7s ease;
      }
      &:hover::after {
        transform: translateY(-40px); 
      }
      &:not(:hover)::after {
        transform: translateY(0px); 
      }
        @media (max-width: 615px) {
            font-size: 5rem;
        }
        @media (max-width: 515px) {
            font-size: 4rem;
        }
        @media (max-width: 420px) {
            font-size: 3rem;
        }
        @media (max-width: 330px) {
            font-size: 2rem;
        }
        @media (max-width: 242px) {
            font-size: 1.5rem;
        }
    }
    @media (max-width: 350px) {
        display: flex;
        flex-direction: column;
    }
`,h1=P.section`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    gap: 50px;
    box-sizing: border-box;
    @media (max-width: 1000px) {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
    }
`,sl=P.div`
    width: 100%;
    padding: 20px;
    margin-top: 50px;
    box-sizing: border-box;

    h3 {
        color: #ccc;
        font-size: 1.25rem;
        position: relative;
        
        letter-spacing: .14rem;
        margin-left: 20px;
        z-index: 1;
        transition: 0.5s ease;
        &:hover {
            margin-left: 40px; /* Ajuste o valor de margin-left para empurrar o h3 durante a animação */
        }
        &::before {
            content: "";
            position: absolute;
            background-color: #4a2cc5;
            height: 20px;
            width: 10px;
            left: -20px;
            bottom: 3.9px;
            transition: 0.5s;
            z-index: -1;
        }

        &:hover::before {
            transform: translateX(-20px); 
            width: 30px;
        }
    }
    
    section {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px;
        margin: 20px 0;
        box-sizing: border-box;
        @media (max-width: 350px) {
        display: flex;
        flex-direction: column;
    }
        div {
            display: flex;
            flex-direction: column;
            gap: 10px;
            transition: 0.5s ease-in-out;
            box-sizing: border-box;
            &:hover {
                transform: scale(1.05);
            }
            p {
                font-size: 1.5rem;
                line-height: 2.25rem;
                color: white;
                strong {
                    font-family: "UbuntuBold";
                }
            }
        }
    }
`;function g1(e){return tt({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"},child:[]}]})(e)}const xe={origin:"https://api.emailjs.com",blockHeadless:!1},pa=e=>e?typeof e=="string"?{publicKey:e}:e.toString()==="[object Object]"?e:{}:{},v1=(e,t="https://api.emailjs.com")=>{if(!e)return;const n=pa(e);xe.publicKey=n.publicKey,xe.blockHeadless=n.blockHeadless,xe.blockList=n.blockList,xe.limitRate=n.limitRate,xe.origin=n.origin||t};class Pi{constructor(t=0,n="Network Error"){this.status=t,this.text=n}}const $f=async(e,t,n={})=>{const r=await fetch(xe.origin+e,{method:"POST",headers:n,body:t}),o=await r.text(),i=new Pi(r.status,o);if(r.ok)return i;throw i},Of=(e,t,n)=>{if(!e||typeof e!="string")throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t||typeof t!="string")throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n||typeof n!="string")throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates"},y1=e=>{if(e&&e.toString()!=="[object Object]")throw"The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/"},Mf=e=>e.webdriver||!e.languages||e.languages.length===0,If=()=>new Pi(451,"Unavailable For Headless Browser"),x1=(e,t)=>{if(!Array.isArray(e))throw"The BlockList list has to be an array";if(typeof t!="string")throw"The BlockList watchVariable has to be a string"},w1=e=>{var t;return!((t=e.list)!=null&&t.length)||!e.watchVariable},S1=(e,t)=>e instanceof FormData?e.get(t):e[t],Ff=(e,t)=>{if(w1(e))return!1;x1(e.list,e.watchVariable);const n=S1(t,e.watchVariable);return typeof n!="string"?!1:e.list.includes(n)},Df=()=>new Pi(403,"Forbidden"),k1=(e,t)=>{if(typeof e!="number"||e<0)throw"The LimitRate throttle has to be a positive number";if(t&&typeof t!="string")throw"The LimitRate ID has to be a string"},C1=(e,t,n)=>{const r=Number(n.getItem(e)||0);return t-Date.now()+r},Au=(e,t,n)=>{setTimeout(()=>{n.removeItem(e)},t)},Af=(e,t,n)=>{if(!n.throttle)return!1;k1(n.throttle,n.id);const r=n.id||t,o=C1(r,n.throttle,e);return o>0?(Au(r,o,e),!0):(e.setItem(r,Date.now().toString()),Au(r,n.throttle,e),!1)},Uf=()=>new Pi(429,"Too Many Requests"),E1=(e,t,n,r)=>{const o=pa(r),i=o.publicKey||xe.publicKey,l=o.blockHeadless||xe.blockHeadless,s={...xe.blockList,...o.blockList},a={...xe.limitRate,...o.limitRate};return l&&Mf(navigator)?Promise.reject(If()):(Of(i,e,t),y1(n),n&&Ff(s,n)?Promise.reject(Df()):Af(localStorage,location.pathname,a)?Promise.reject(Uf()):$f("/api/v1.0/email/send",JSON.stringify({lib_version:"4.1.0",user_id:i,service_id:e,template_id:t,template_params:n}),{"Content-type":"application/json"}))},j1=e=>{if(!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of the form"},z1=e=>typeof e=="string"?document.querySelector(e):e,_1=(e,t,n,r)=>{const o=pa(r),i=o.publicKey||xe.publicKey,l=o.blockHeadless||xe.blockHeadless,s={...xe.blockList,...o.blockList},a={...xe.limitRate,...o.limitRate};if(l&&Mf(navigator))return Promise.reject(If());const u=z1(n);Of(i,e,t),j1(u);const h=new FormData(u);return Ff(s,h)?Promise.reject(Df()):Af(localStorage,location.pathname,a)?Promise.reject(Uf()):(h.append("lib_version","4.1.0"),h.append("service_id",e),h.append("template_id",t),h.append("user_id",i),$f("/api/v1.0/email/send-form",h))},P1={init:v1,send:E1,sendForm:_1},N1=({setModalOrcamento:e})=>{const[t,n]=W.useState(""),[r,o]=W.useState(!1),[i,l]=W.useState(!1),[s,a]=W.useState(!1),u=5e3;function h(){e(!1)}const g=y=>{const _=y.target.value;n(_)};W.useEffect(()=>{o(t.length===u)},[t]);const m=y=>{y.target===y.currentTarget&&h()},x=y=>{y.key==="Escape"&&h()};W.useEffect(()=>(document.addEventListener("keydown",x),()=>{document.removeEventListener("keydown",x)}),[]);const[w,S]=W.useState(""),[L,f]=W.useState(""),[c,p]=W.useState(""),[v,C]=W.useState("");function E(y){if(y.preventDefault(),w==""||c==""||t==""){a(!0);return}else{const _={from_name:w,brand:L,email:c,budget:v,message:t};P1.send("service_y46ijii","template_41bc2mv",_,"tyvwKsI0qV4cxXXqB").then(D=>{S(""),p(""),f(""),C(""),n(""),l(!0)})}}return d.jsx(T1,{onClick:m,children:d.jsxs(L1,{children:[d.jsx(R1,{onClick:()=>h(),children:d.jsx(Rf,{size:20})}),i?d.jsxs(d.Fragment,{children:[d.jsx(Uu,{children:"Orçamento enviado com sucesso"}),d.jsx(Bu,{children:"Oque deseja fazer agora ? "}),d.jsxs(A1,{children:[d.jsx("button",{onClick:()=>l(!1),children:"Fazer outro orçamento"}),d.jsx("button",{onClick:()=>h(),children:"Voltar para o site"})]})]}):d.jsxs(d.Fragment,{children:[d.jsx(Uu,{children:"Entre em contato comigo"}),d.jsx(Bu,{children:"Faça seu orçamento online"}),d.jsxs($1,{children:[d.jsx(nr,{htmlFor:"nome",children:"Nome:"}),d.jsx(co,{type:"text",id:"nome",name:"nome",value:w,onChange:y=>S(y.target.value)}),d.jsx(nr,{htmlFor:"marca",children:"Sua Marca:"}),d.jsx(co,{type:"text",id:"marca",name:"marca",value:L,onChange:y=>f(y.target.value)}),d.jsx(nr,{htmlFor:"email",children:"Email:"}),d.jsx(co,{type:"email",id:"email",name:"email",value:c,onChange:y=>p(y.target.value)}),d.jsx(nr,{htmlFor:"orcamento",children:"Orçamento:"}),d.jsxs(O1,{children:[d.jsx(M1,{children:"R$"}),d.jsx(co,{type:"text",id:"orcamento",name:"orcamento",value:v,onChange:y=>C(y.target.value),onInput:y=>y.target.value=y.target.value.replace(/[^0-9]/g,"")})]}),d.jsx(nr,{htmlFor:"detalhes",children:"Detalhes do Projeto:"}),d.jsx(I1,{id:"detalhes",name:"detalhes",maxLength:u,value:t,onChange:g}),d.jsxs(D1,{maximoAtingido:r,children:[t.length,"/",u]}),s&&d.jsx("p",{style:{textAlign:"center",marginBottom:"10px",color:"red"},children:"Preencha todos os campos"}),d.jsx(F1,{onClick:y=>E(y),children:"Enviar mensagem"})]})]})]})})},T1=P.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`,L1=P.div`
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(5px);
    padding: 20px;
    border-radius: 8px;
    width: 400px;
    position: relative;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 2px solid #4a2cc5;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    @media (max-width: 425px) {
        width: 300px;
    }
`,R1=P.button`
    position: absolute;
    color: #4a2cc5;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    font-size: 1px;
    cursor: pointer;
`,Uu=P.h2`
    color: black;
    text-transform: uppercase;
`,Bu=P.p`
    color: #4a2cc5;
    font-size: 14px;
`,$1=P.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-top: 20px;
`,nr=P.label`
    margin-bottom: 5px;
    color: #333;
`,co=P.input`
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
`,O1=P.div`
    
    input {
        width: 84%;
        @media (max-width: 425px) {
        width: 79%;
        }
        @media (max-width: 332px) {
            width: 78%;
        }
    }
    @media (max-width: 319px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`,M1=P.span`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
    background-color: #f1f1f1;
    margin-right: 5px;
`,I1=P.textarea`
    padding: 8px;
    height: 120px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
`,F1=P.button`
    background-color: #4a2cc5;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: 0.5s ease;
    &:hover {
        transform: scale(1.05);
    }
`,D1=P.div`
    color: ${e=>e.maximoAtingido?"red":"black"};
    font-size: 12px;
    margin-top: -15px;
    margin-bottom: 30px;
`,A1=P.span`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    button {
        background-color: #4a2cc5;
        color: white;
        padding: 10px;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: 0.5s ease;
        &:hover {
            transform: scale(1.05);
        }
    }
`;async function fo(e,...t){for(const n of t)switch(typeof n){case"string":await U1(e,n);break;case"number":await Bf(n);break;case"function":await n(e,...t);break;default:await n}}async function U1(e,t){const n=W1(e.textContent,t);await B1(e,[...b1(e.textContent,n),...V1(t,n)])}async function Bf(e){await new Promise(t=>setTimeout(t,e))}async function B1(e,t,n=60){for(const r of H1(t))r(e),await Bf(n+n*(Math.random()-.5))}function*H1(e){for(const t of e)yield n=>requestAnimationFrame(()=>n.textContent=t)}function*V1([...e],t=0,n=e.length){for(;t<n;)yield e.slice(0,++t).join("")}function*b1([...e],t=0,n=e.length){for(;n>t;)yield e.slice(0,--n).join("")}function W1(e,[...t]){return[...e,NaN].findIndex((n,r)=>t[r]!==n)}function Q1(e,t){t===void 0&&(t={});var n=t.insertAt;if(!(!e||typeof document>"u")){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}var K1=`.styles_typicalWrapper__1_Uvh::after {
  content: "|";
  animation: styles_blink__2CKyC 1s infinite step-start;
}

@keyframes styles_blink__2CKyC {
  50% { opacity: 0; }
}`,G1={typicalWrapper:"styles_typicalWrapper__1_Uvh",blink:"styles_blink__2CKyC"};Q1(K1);var al=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}else return Array.from(e)},Y1=function(t){var n=t.steps,r=t.loop,o=t.className,i=t.wrapper,l=i===void 0?"p":i,s=W.useRef(null),a=l,u=[G1.typicalWrapper];return o&&u.unshift(o),W.useEffect(function(){r===1/0?fo.apply(void 0,[s.current].concat(al(n),[fo])):typeof r=="number"?fo.apply(void 0,[s.current].concat(al(Array(r).fill(n).flat()))):fo.apply(void 0,[s.current].concat(al(n)))}),oe.createElement(a,{ref:s,className:u.join(" ")})};W.memo(Y1);const X1=()=>{const[e,t]=W.useState(!1),n="Estou aberto para novos projetos. Entre em contato para agendarmos uma conversa e discutirmos oportunidades de colaboração.",[r,o]=W.useState(0);W.useEffect(()=>{const s=setInterval(()=>{o(a=>a+1)},50);return()=>clearInterval(s)},[]);const i=n.slice(0,r),l=r<n.length?"|":"";return d.jsx(q1,{children:d.jsxs(eg,{id:"contato",children:[d.jsxs(tg,{children:[d.jsx(Hu,{color:"#4a2cc5"}),d.jsx(Hu,{color:"#2c7ec5",marginTop:"10px",width:"80"}),d.jsxs(ng,{children:[i,d.jsx(Z1,{children:l})]})]}),d.jsx(rg,{children:d.jsxs("ul",{children:[d.jsx("li",{children:d.jsxs("a",{href:"mailto:contactdevpedro@gmail.com",children:[d.jsx(A0,{size:23,color:"#ccc"})," contactdevpedro@gmail.com"]})}),d.jsx("li",{children:d.jsxs("a",{href:"https://api.whatsapp.com/send/?phone=5537991453323&text&type=phone_number&app_absent=0",children:[d.jsx(g1,{size:23,color:"#ccc"})," +55 37 99145-3323"]})}),d.jsx("li",{children:d.jsxs("a",{href:"https://www.linkedin.com/in/pedro-henrique-2a861827b/",children:[d.jsx(F0,{size:23,color:"#ccc"})," Linkedin"]})}),d.jsx("li",{children:d.jsxs("a",{href:"https://github.com/pedrohbf1",children:[d.jsx(I0,{size:23,color:"#ccc"})," Github"]})}),d.jsx("li",{children:d.jsxs("button",{onClick:()=>t(!e),children:[d.jsx(U0,{size:35})," Faça seu orçamento on-line"]})})]})}),e&&d.jsx(N1,{setModalOrcamento:t})]})})},J1=Wn`
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`,Z1=P.span`
  font-size: 1.2em;
  font-weight: bold;
  animation: ${J1} 0.8s infinite;
`,q1=P.main`
    width: 100%;
    background-color: black;
    border-bottom: solid 1px #121212;
    box-sizing: border-box;
`,eg=P.header`
    max-width: 1200px;
    margin: 0 auto;
    padding: 120px 40px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    @media (max-width: 780px) {
        flex-direction: column;
        gap: 50px;
        
    }
`,tg=P.div`
    display: flex;
    flex-direction: column;
    padding-right: 300px;
    box-sizing: border-box;
    @media (max-width: 1050px ) {
        padding-right: 100px;
        box-sizing: border-box;
    }
    @media (max-width: 830px ) {
        padding-right: 50px;
        box-sizing: border-box;
    }
    p {
        color: white;
        letter-spacing: 3px;
        margin-top: 30px;
        box-sizing: border-box;
    }
`,Hu=P.div`
    width: ${({width:e})=>e?`${e}px`:"120px"};
    height: 3px;
    background-color: ${({color:e})=>e||"white"};
    margin-top: ${({marginTop:e})=>e||"0"};
`,ng=P.p`
  color: white;
  letter-spacing: 3px;
  margin-top: 30px;
  box-sizing: border-box;
`,rg=P.nav`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    transition: 3s ease;
    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin: 0;
        flex-grow: 1;
        li {
            color: white;
            display: flex;
            align-items: center;
            letter-spacing: 2px;
            width: 100%;
            a {
                color: white;
                text-decoration: none;
                @media (max-width: 350px) {
                    font-size: 12px;
                }
            }
            svg {
                margin-right: 10px;
            }
        }
        :nth-child(5) {
            button {
                margin-top: 35px;
                background-color: white;
                letter-spacing: 3px;
                border: none;
                padding: 25px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                cursor: pointer;
                transition: 1s all;
                box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
                @media (max-width: 260px) {
                    padding: 10px;
                }
                @media (max-width: 224px) {
                    padding: 2px;
                }
                @media (max-width: 205px) {
                    padding: 0px;
                }
                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
`,og=()=>d.jsx(ig,{children:"© Code by Pedro Henrique"}),ig=P.footer`
    width: 100%;
    background-color: black;
    padding: 20px;
    margin: 0 auto;
    color: #b4b4b4;
    align-items: center;
    justify-content: center;
    display: flex;
    box-sizing: border-box;
`;function lg(){return d.jsxs(d.Fragment,{children:[d.jsx(g0,{}),d.jsxs(sg,{children:[d.jsx(j0,{}),d.jsx(N0,{}),d.jsx(r1,{})]}),d.jsx(f1,{}),d.jsx(X1,{}),d.jsx(og,{})]})}const sg=P.main`
  max-width: 1200px;
  margin: 0 auto -20px;
  padding: 40px 20px;
`;P.header`
  width: 100%;
  justify-content: center;
  align-items: center;
  display: flex;
`;ul.createRoot(document.getElementById("root")).render(d.jsx(oe.StrictMode,{children:d.jsx(lg,{})}));
