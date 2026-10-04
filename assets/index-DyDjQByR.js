var e=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports);(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var t=e((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,O());else{var t=n(l);t!==null&&j(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function E(){return g?!0:!(e.unstable_now()-T<w)}function D(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&E());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&j(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?O():S=!1}}}var O;if(typeof y==`function`)O=function(){y(D)};else if(typeof MessageChannel<`u`){var k=new MessageChannel,A=k.port2;k.port1.onmessage=D,O=function(){A.postMessage(null)}}else O=function(){_(D,0)};function j(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,j(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,O()))),r},e.unstable_shouldYield=E,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),n=e(((e,n)=>{n.exports=t()})),r=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function E(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function D(e,t){return E(e.type,t,e.props)}function O(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function k(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var A=/\/+/g;function j(e,t){return typeof e==`object`&&e&&e.key!=null?k(``+e.key):t.toString(36)}function ee(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function te(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,te(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+j(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(A,`$&/`)+`/`),te(o,r,i,``,function(e){return e})):o!=null&&(O(o)&&(o=D(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(A,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+j(a,u),c+=te(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+j(a,u++),c+=te(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return te(ee(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function M(e,t,n){if(e==null)return e;var r=[],i=0;return te(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ne(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var N=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},P={map:M,forEach:function(e,t,n){M(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return M(e,function(){t++}),t},toArray:function(e){return M(e,function(e){return e})||[]},only:function(e){if(!O(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=P,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return E(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=O,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ne}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,N)}catch(e){N(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.6`})),i=e(((e,t)=>{t.exports=r()})),a=e((e=>{var t=i();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var a={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},o=Symbol.for(`react.portal`);function s(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function l(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return s(e,t,null,r)},e.flushSync=function(e){var t=c.T,n=a.p;try{if(c.T=null,a.p=2,e)return e()}finally{c.T=t,a.p=n,a.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,a.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&a.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin),i=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?a.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:o}):n===`script`&&a.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=l(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??a.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=l(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=l(t.as,t.crossOrigin);a.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else a.d.m(e)},e.requestFormReset=function(e){a.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return c.H.useFormState(e,t,n)},e.useFormStatus=function(){return c.H.useHostTransitionStatus()},e.version=`19.2.6`})),o=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=a()})),s=e((e=>{var t=n(),r=i(),a=o();function s(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function c(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function u(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function f(e){if(l(e)!==e)throw Error(s(188))}function p(e){var t=e.alternate;if(!t){if(t=l(e),t===null)throw Error(s(188));return t===e?e:null}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var a=i.alternate;if(a===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return f(i),e;if(a===r)return f(i),t;a=a.sibling}throw Error(s(188))}if(n.return!==r.return)n=i,r=a;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=a;break}if(c===r){o=!0,r=i,n=a;break}c=c.sibling}if(!o){for(c=a.child;c;){if(c===n){o=!0,n=a,r=i;break}if(c===r){o=!0,r=a,n=i;break}c=c.sibling}if(!o)throw Error(s(189))}}if(n.alternate!==r)throw Error(s(190))}if(n.tag!==3)throw Error(s(188));return n.stateNode.current===n?e:t}function m(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=m(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),E=Symbol.for(`react.suspense_list`),D=Symbol.for(`react.memo`),O=Symbol.for(`react.lazy`),k=Symbol.for(`react.activity`),A=Symbol.for(`react.memo_cache_sentinel`),j=Symbol.iterator;function ee(e){return typeof e!=`object`||!e?null:(e=j&&e[j]||e[`@@iterator`],typeof e==`function`?e:null)}var te=Symbol.for(`react.client.reference`);function M(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case E:return`SuspenseList`;case k:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case D:return t=e.displayName||null,t===null?M(e.type)||`Memo`:t;case O:t=e._payload,e=e._init;try{return M(e(t))}catch{}}return null}var ne=Array.isArray,N=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},ie=[],ae=-1;function oe(e){return{current:e}}function se(e){0>ae||(e.current=ie[ae],ie[ae]=null,ae--)}function F(e,t){ae++,ie[ae]=e.current,e.current=t}var ce=oe(null),le=oe(null),ue=oe(null),de=oe(null);function fe(e,t){switch(F(ue,t),F(le,e),F(ce,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}se(ce),F(ce,e)}function pe(){se(ce),se(le),se(ue)}function me(e){e.memoizedState!==null&&F(de,e);var t=ce.current,n=Hd(t,e.type);t!==n&&(F(le,e),F(ce,n))}function he(e){le.current===e&&(se(ce),se(le)),de.current===e&&(se(de),Qf._currentValue=re)}var ge,_e;function ve(e){if(ge===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ge=t&&t[1]||``,_e=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+ge+e+_e}var ye=!1;function be(e,t){if(!e||ye)return``;ye=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{ye=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?ve(n):``}function xe(e,t){switch(e.tag){case 26:case 27:case 5:return ve(e.type);case 16:return ve(`Lazy`);case 13:return e.child!==t&&t!==null?ve(`Suspense Fallback`):ve(`Suspense`);case 19:return ve(`SuspenseList`);case 0:case 15:return be(e.type,!1);case 11:return be(e.type.render,!1);case 1:return be(e.type,!0);case 31:return ve(`Activity`);default:return``}}function Se(e){try{var t=``,n=null;do t+=xe(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var Ce=Object.prototype.hasOwnProperty,we=t.unstable_scheduleCallback,I=t.unstable_cancelCallback,Te=t.unstable_shouldYield,Ee=t.unstable_requestPaint,De=t.unstable_now,Oe=t.unstable_getCurrentPriorityLevel,ke=t.unstable_ImmediatePriority,Ae=t.unstable_UserBlockingPriority,je=t.unstable_NormalPriority,Me=t.unstable_LowPriority,Ne=t.unstable_IdlePriority,Pe=t.log,Fe=t.unstable_setDisableYieldValue,Ie=null,L=null;function R(e){if(typeof Pe==`function`&&Fe(e),L&&typeof L.setStrictMode==`function`)try{L.setStrictMode(Ie,e)}catch{}}var z=Math.clz32?Math.clz32:ze,Le=Math.log,Re=Math.LN2;function ze(e){return e>>>=0,e===0?32:31-(Le(e)/Re|0)|0}var Be=256,Ve=262144,He=4194304;function Ue(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function We(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Ue(n))):i=Ue(o):i=Ue(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Ue(n))):i=Ue(o)):i=Ue(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function Ge(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ke(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qe(){var e=He;return He<<=1,!(He&62914560)&&(He=4194304),e}function Je(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ye(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xe(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-z(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&Ze(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function Ze(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-z(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function Qe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-z(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function $e(e,t){var n=t&-t;return n=n&42?1:et(n),(n&(e.suspendedLanes|t))===0?n:0}function et(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function tt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function nt(){var e=P.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function rt(e,t){var n=P.p;try{return P.p=e,t()}finally{P.p=n}}var it=Math.random().toString(36).slice(2),at=`__reactFiber$`+it,ot=`__reactProps$`+it,st=`__reactContainer$`+it,ct=`__reactEvents$`+it,lt=`__reactListeners$`+it,ut=`__reactHandles$`+it,dt=`__reactResources$`+it,ft=`__reactMarker$`+it;function pt(e){delete e[at],delete e[ot],delete e[ct],delete e[lt],delete e[ut]}function mt(e){var t=e[at];if(t)return t;for(var n=e.parentNode;n;){if(t=n[st]||n[at]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[at])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function ht(e){if(e=e[at]||e[st]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function gt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(s(33))}function _t(e){var t=e[dt];return t||=e[dt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function vt(e){e[ft]=!0}var yt=new Set,bt={};function xt(e,t){St(e,t),St(e+`Capture`,t)}function St(e,t){for(bt[e]=t,e=0;e<t.length;e++)yt.add(t[e])}var Ct=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),B={},wt={};function V(e){return Ce.call(wt,e)?!0:Ce.call(B,e)?!1:Ct.test(e)?wt[e]=!0:(B[e]=!0,!1)}function Tt(e,t,n){if(V(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function H(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Et(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Dt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function Ot(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function kt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function At(e){if(!e._valueTracker){var t=Ot(e)?`checked`:`value`;e._valueTracker=kt(e,t,``+e[t])}}function U(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=Ot(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function jt(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var W=/[\n"\\]/g;function Mt(e){return e.replace(W,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function Nt(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Dt(t)):e.value!==``+Dt(t)&&(e.value=``+Dt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):Ft(e,o,Dt(n)):Ft(e,o,Dt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Dt(s):e.removeAttribute(`name`)}function Pt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){At(e);return}n=n==null?``:``+Dt(n),t=t==null?n:``+Dt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),At(e)}function Ft(e,t,n){t===`number`&&jt(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function It(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Dt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Lt(e,t,n){if(t!=null&&(t=``+Dt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Dt(n)}function G(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(s(92));if(ne(r)){if(1<r.length)throw Error(s(93));r=r[0]}n=r}n??=``,t=n}n=Dt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),At(e)}function Rt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var zt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function K(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||zt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function q(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(s(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&K(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&K(e,a,t[a])}function Bt(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Vt=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),Ht=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ut(e){return Ht.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function Wt(){}var Gt=null;function Kt(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qt=null,Jt=null;function Yt(e){var t=ht(e);if(t&&(e=t.stateNode)){var n=e[ot]||null;a:switch(e=t.stateNode,t.type){case`input`:if(Nt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Mt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[ot]||null;if(!i)throw Error(s(90));Nt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&U(r)}break a;case`textarea`:Lt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&It(e,!!n.multiple,t,!1)}}}var Xt=!1;function Zt(e,t,n){if(Xt)return e(t,n);Xt=!0;try{return e(t)}finally{if(Xt=!1,(qt!==null||Jt!==null)&&(vu(),qt&&(t=qt,e=Jt,Jt=qt=null,Yt(t),e)))for(t=0;t<e.length;t++)Yt(e[t])}}function Qt(e,t){var n=e.stateNode;if(n===null)return null;var r=n[ot]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(s(231,t,typeof n));return n}var $t=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),en=!1;if($t)try{var tn={};Object.defineProperty(tn,`passive`,{get:function(){en=!0}}),window.addEventListener(`test`,tn,tn),window.removeEventListener(`test`,tn,tn)}catch{en=!1}var nn=null,rn=null,an=null;function on(){if(an)return an;var e,t=rn,n=t.length,r,i=`value`in nn?nn.value:nn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return an=i.slice(e,1<r?1-r:void 0)}function sn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function cn(){return!0}function ln(){return!1}function un(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?cn:ln,this.isPropagationStopped=ln,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=cn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=cn)},persist:function(){},isPersistent:cn}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fn=un(dn),pn=h({},dn,{view:0,detail:0}),mn=un(pn),hn,gn,_n,vn=h({},pn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==_n&&(_n&&e.type===`mousemove`?(hn=e.screenX-_n.screenX,gn=e.screenY-_n.screenY):gn=hn=0,_n=e),hn)},movementY:function(e){return`movementY`in e?e.movementY:gn}}),yn=un(vn),bn=un(h({},vn,{dataTransfer:0})),xn=un(h({},pn,{relatedTarget:0})),Sn=un(h({},dn,{animationName:0,elapsedTime:0,pseudoElement:0})),Cn=un(h({},dn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),wn=un(h({},dn,{data:0})),Tn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},En={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Dn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function On(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Dn[e])?!!t[e]:!1}function kn(){return On}var An=un(h({},pn,{key:function(e){if(e.key){var t=Tn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=sn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?En[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kn,charCode:function(e){return e.type===`keypress`?sn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?sn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),jn=un(h({},vn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Mn=un(h({},pn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kn})),Nn=un(h({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Pn=un(h({},vn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),Fn=un(h({},dn,{newState:0,oldState:0})),In=[9,13,27,32],Ln=$t&&`CompositionEvent`in window,Rn=null;$t&&`documentMode`in document&&(Rn=document.documentMode);var zn=$t&&`TextEvent`in window&&!Rn,Bn=$t&&(!Ln||Rn&&8<Rn&&11>=Rn),Vn=` `,Hn=!1;function Un(e,t){switch(e){case`keyup`:return In.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function Wn(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var Gn=!1;function Kn(e,t){switch(e){case`compositionend`:return Wn(t);case`keypress`:return t.which===32?(Hn=!0,Vn):null;case`textInput`:return e=t.data,e===Vn&&Hn?null:e;default:return null}}function qn(e,t){if(Gn)return e===`compositionend`||!Ln&&Un(e,t)?(e=on(),an=rn=nn=null,Gn=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Bn&&t.locale!==`ko`?null:t.data;default:return null}}var Jn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!Jn[e.type]:t===`textarea`}function Xn(e,t,n,r){qt?Jt?Jt.push(r):Jt=[r]:qt=r,t=Td(t,`onChange`),0<t.length&&(n=new fn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var Zn=null,J=null;function Qn(e){vd(e,0)}function $n(e){if(U(gt(e)))return e}function er(e,t){if(e===`change`)return t}var tr=!1;if($t){var nr;if($t){var rr=`oninput`in document;if(!rr){var ir=document.createElement(`div`);ir.setAttribute(`oninput`,`return;`),rr=typeof ir.oninput==`function`}nr=rr}else nr=!1;tr=nr&&(!document.documentMode||9<document.documentMode)}function ar(){Zn&&(Zn.detachEvent(`onpropertychange`,or),J=Zn=null)}function or(e){if(e.propertyName===`value`&&$n(J)){var t=[];Xn(t,J,e,Kt(e)),Zt(Qn,t)}}function sr(e,t,n){e===`focusin`?(ar(),Zn=t,J=n,Zn.attachEvent(`onpropertychange`,or)):e===`focusout`&&ar()}function cr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return $n(J)}function lr(e,t){if(e===`click`)return $n(t)}function ur(e,t){if(e===`input`||e===`change`)return $n(t)}function dr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var fr=typeof Object.is==`function`?Object.is:dr;function pr(e,t){if(fr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ce.call(t,i)||!fr(e[i],t[i]))return!1}return!0}function mr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hr(e,t){var n=mr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=mr(n)}}function gr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _r(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=jt(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=jt(e.document)}return t}function vr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var yr=$t&&`documentMode`in document&&11>=document.documentMode,br=null,xr=null,Sr=null,Cr=!1;function wr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Cr||br==null||br!==jt(r)||(r=br,`selectionStart`in r&&vr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sr&&pr(Sr,r)||(Sr=r,r=Td(xr,`onSelect`),0<r.length&&(t=new fn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=br)))}function Tr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Er={animationend:Tr(`Animation`,`AnimationEnd`),animationiteration:Tr(`Animation`,`AnimationIteration`),animationstart:Tr(`Animation`,`AnimationStart`),transitionrun:Tr(`Transition`,`TransitionRun`),transitionstart:Tr(`Transition`,`TransitionStart`),transitioncancel:Tr(`Transition`,`TransitionCancel`),transitionend:Tr(`Transition`,`TransitionEnd`)},Dr={},Or={};$t&&(Or=document.createElement(`div`).style,`AnimationEvent`in window||(delete Er.animationend.animation,delete Er.animationiteration.animation,delete Er.animationstart.animation),`TransitionEvent`in window||delete Er.transitionend.transition);function kr(e){if(Dr[e])return Dr[e];if(!Er[e])return e;var t=Er[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Or)return Dr[e]=t[n];return e}var Ar=kr(`animationend`),jr=kr(`animationiteration`),Mr=kr(`animationstart`),Nr=kr(`transitionrun`),Pr=kr(`transitionstart`),Fr=kr(`transitioncancel`),Ir=kr(`transitionend`),Lr=new Map,Rr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Rr.push(`scrollEnd`);function zr(e,t){Lr.set(e,t),xt(t,[e])}var Br=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Vr=[],Hr=0,Ur=0;function Wr(){for(var e=Hr,t=Ur=Hr=0;t<e;){var n=Vr[t];Vr[t++]=null;var r=Vr[t];Vr[t++]=null;var i=Vr[t];Vr[t++]=null;var a=Vr[t];if(Vr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&Jr(n,i,a)}}function Gr(e,t,n,r){Vr[Hr++]=e,Vr[Hr++]=t,Vr[Hr++]=n,Vr[Hr++]=r,Ur|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Kr(e,t,n,r){return Gr(e,t,n,r),Yr(e)}function qr(e,t){return Gr(e,null,null,t),Yr(e)}function Jr(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-z(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function Yr(e){if(50<lu)throw lu=0,uu=null,Error(s(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Xr={};function Zr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qr(e,t,n,r){return new Zr(e,t,n,r)}function $r(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ei(e,t){var n=e.alternate;return n===null?(n=Qr(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ti(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ni(e,t,n,r,i,a){var o=0;if(r=e,typeof e==`function`)$r(e)&&(o=1);else if(typeof e==`string`)o=Uf(e,n,ce.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case k:return e=Qr(31,n,t,i),e.elementType=k,e.lanes=a,e;case y:return ri(n.children,i,a,t);case b:o=8,i|=24;break;case x:return e=Qr(12,n,t,i|2),e.elementType=x,e.lanes=a,e;case T:return e=Qr(13,n,t,i),e.elementType=T,e.lanes=a,e;case E:return e=Qr(19,n,t,i),e.elementType=E,e.lanes=a,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:o=10;break a;case S:o=9;break a;case w:o=11;break a;case D:o=14;break a;case O:o=16,r=null;break a}o=29,n=Error(s(130,e===null?`null`:typeof e,``)),r=null}return t=Qr(o,n,t,i),t.elementType=e,t.type=r,t.lanes=a,t}function ri(e,t,n,r){return e=Qr(7,e,r,t),e.lanes=n,e}function ii(e,t,n){return e=Qr(6,e,null,t),e.lanes=n,e}function ai(e){var t=Qr(18,null,null,0);return t.stateNode=e,t}function oi(e,t,n){return t=Qr(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var si=new WeakMap;function ci(e,t){if(typeof e==`object`&&e){var n=si.get(e);return n===void 0?(t={value:e,source:t,stack:Se(t)},si.set(e,t),t):n}return{value:e,source:t,stack:Se(t)}}var li=[],ui=0,di=null,fi=0,pi=[],mi=0,hi=null,gi=1,_i=``;function vi(e,t){li[ui++]=fi,li[ui++]=di,di=e,fi=t}function yi(e,t,n){pi[mi++]=gi,pi[mi++]=_i,pi[mi++]=hi,hi=e;var r=gi;e=_i;var i=32-z(r)-1;r&=~(1<<i),n+=1;var a=32-z(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,gi=1<<32-z(t)+i|n<<i|r,_i=a+e}else gi=1<<a|n<<i|r,_i=e}function bi(e){e.return!==null&&(vi(e,1),yi(e,1,0))}function xi(e){for(;e===di;)di=li[--ui],li[ui]=null,fi=li[--ui],li[ui]=null;for(;e===hi;)hi=pi[--mi],pi[mi]=null,_i=pi[--mi],pi[mi]=null,gi=pi[--mi],pi[mi]=null}function Si(e,t){pi[mi++]=gi,pi[mi++]=_i,pi[mi++]=hi,gi=t.id,_i=t.overflow,hi=e}var Ci=null,wi=null,Y=!1,Ti=null,Ei=!1,Di=Error(s(519));function Oi(e){throw Pi(ci(Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Di}function ki(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[at]=e,t[ot]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Pt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),G(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=Wt),t=!0):t=!1,t||Oi(e,!0)}function Ai(e){for(Ci=e.return;Ci;)switch(Ci.tag){case 5:case 31:case 13:Ei=!1;return;case 27:case 3:Ei=!0;return;default:Ci=Ci.return}}function ji(e){if(e!==Ci)return!1;if(!Y)return Ai(e),Y=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&wi&&Oi(e),Ai(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));wi=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(317));wi=uf(e)}else t===27?(t=wi,Zd(e.type)?(e=lf,lf=null,wi=e):wi=t):wi=Ci?cf(e.stateNode.nextSibling):null;return!0}function Mi(){wi=Ci=null,Y=!1}function Ni(){var e=Ti;return e!==null&&(Yl===null?Yl=e:Yl.push.apply(Yl,e),Ti=null),e}function Pi(e){Ti===null?Ti=[e]:Ti.push(e)}var Fi=oe(null),Ii=null,Li=null;function Ri(e,t,n){F(Fi,t._currentValue),t._currentValue=n}function zi(e){e._currentValue=Fi.current,se(Fi)}function Bi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Vi(e,t,n,r){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){var o=i.child;a=a.firstContext;a:for(;a!==null;){var c=a;a=i;for(var l=0;l<t.length;l++)if(c.context===t[l]){a.lanes|=n,c=a.alternate,c!==null&&(c.lanes|=n),Bi(a.return,n,e),r||(o=null);break a}a=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(s(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Bi(o,n,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function Hi(e,t,n,r){e=null;for(var i=t,a=!1;i!==null;){if(!a){if(i.flags&524288)a=!0;else if(i.flags&262144)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(s(387));if(o=o.memoizedProps,o!==null){var c=i.type;fr(i.pendingProps.value,o.value)||(e===null?e=[c]:e.push(c))}}else if(i===de.current){if(o=i.alternate,o===null)throw Error(s(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}i=i.return}e!==null&&Vi(t,e,n,r),t.flags|=262144}function Ui(e){for(e=e.firstContext;e!==null;){if(!fr(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Wi(e){Ii=e,Li=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Gi(e){return qi(Ii,e)}function Ki(e,t){return Ii===null&&Wi(e),qi(e,t)}function qi(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Li===null){if(e===null)throw Error(s(308));Li=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Li=Li.next=t;return n}var Ji=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},Yi=t.unstable_scheduleCallback,Xi=t.unstable_NormalPriority,Zi={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Qi(){return{controller:new Ji,data:new Map,refCount:0}}function $i(e){e.refCount--,e.refCount===0&&Yi(Xi,function(){e.controller.abort()})}var ea=null,ta=0,na=0,ra=null;function ia(e,t){if(ea===null){var n=ea=[];ta=0,na=ud(),ra={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return ta++,t.then(aa,aa),t}function aa(){if(--ta===0&&ea!==null){ra!==null&&(ra.status=`fulfilled`);var e=ea;ea=null,na=0,ra=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function oa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var sa=N.S;N.S=function(e,t){Ql=De(),typeof t==`object`&&t&&typeof t.then==`function`&&ia(e,t),sa!==null&&sa(e,t)};var ca=oe(null);function la(){var e=ca.current;return e===null?Fl.pooledCache:e}function ua(e,t){t===null?F(ca,ca.current):F(ca,t.pool)}function da(){var e=la();return e===null?null:{parent:Zi._currentValue,pool:e}}var fa=Error(s(460)),pa=Error(s(474)),ma=Error(s(542)),ha={then:function(){}};function ga(e){return e=e.status,e===`fulfilled`||e===`rejected`}function _a(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Wt,Wt),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,xa(e),e;default:if(typeof t.status==`string`)t.then(Wt,Wt);else{if(e=Fl,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,xa(e),e}throw ya=t,fa}}function va(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(ya=e,fa):e}}var ya=null;function ba(){if(ya===null)throw Error(s(459));var e=ya;return ya=null,e}function xa(e){if(e===fa||e===ma)throw Error(s(483))}var Sa=null,Ca=0;function wa(e){var t=Ca;return Ca+=1,Sa===null&&(Sa=[]),_a(Sa,e,t)}function Ta(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ea(e,t){throw t.$$typeof===g?Error(s(525)):(e=Object.prototype.toString.call(t),Error(s(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Da(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function i(e,t){return e=ei(e,t),e.index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function o(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=ii(n,e.mode,r),t.return=e,t):(t=i(t,n),t.return=e,t)}function l(e,t,n,r){var a=n.type;return a===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===a||typeof a==`object`&&a&&a.$$typeof===O&&va(a)===t.type)?(t=i(t,n.props),Ta(t,n),t.return=e,t):(t=ni(n.type,n.key,n.props,null,e.mode,r),Ta(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=oi(n,e.mode,r),t.return=e,t):(t=i(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,a){return t===null||t.tag!==7?(t=ri(n,e.mode,r,a),t.return=e,t):(t=i(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=ii(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=ni(t.type,t.key,t.props,null,e.mode,n),Ta(n,t),n.return=e,n;case v:return t=oi(t,e.mode,n),t.return=e,t;case O:return t=va(t),f(e,t,n)}if(ne(t)||ee(t))return t=ri(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,wa(t),n);if(t.$$typeof===C)return f(e,Ki(e,t),n);Ea(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case O:return n=va(n),p(e,t,n,r)}if(ne(n)||ee(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,wa(n),r);if(n.$$typeof===C)return p(e,t,Ki(e,n),r);Ea(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case O:return r=va(r),m(e,t,n,r,i)}if(ne(r)||ee(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,wa(r),i);if(r.$$typeof===C)return m(e,t,n,Ki(t,r),i);Ea(t,r)}return null}function h(i,o,s,c){for(var l=null,u=null,d=o,h=o=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),o=a(_,o,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),Y&&vi(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(o=a(d,o,h),u===null?l=d:u.sibling=d,u=d);return Y&&vi(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),o=a(g,o,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),Y&&vi(i,h),l}function g(i,o,c,l){if(c==null)throw Error(s(151));for(var u=null,d=null,h=o,g=o=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(i,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(i,h),o=a(y,o,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(i,h),Y&&vi(i,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(i,v.value,l),v!==null&&(o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return Y&&vi(i,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,i,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),o=a(v,o,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(i,e)}),Y&&vi(i,g),u}function b(e,r,a,c){if(typeof a==`object`&&a&&a.type===y&&a.key===null&&(a=a.props.children),typeof a==`object`&&a){switch(a.$$typeof){case _:a:{for(var l=a.key;r!==null;){if(r.key===l){if(l=a.type,l===y){if(r.tag===7){n(e,r.sibling),c=i(r,a.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===O&&va(l)===r.type){n(e,r.sibling),c=i(r,a.props),Ta(c,a),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}a.type===y?(c=ri(a.props.children,e.mode,c,a.key),c.return=e,e=c):(c=ni(a.type,a.key,a.props,null,e.mode,c),Ta(c,a),c.return=e,e=c)}return o(e);case v:a:{for(l=a.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===a.containerInfo&&r.stateNode.implementation===a.implementation){n(e,r.sibling),c=i(r,a.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=oi(a,e.mode,c),c.return=e,e=c}return o(e);case O:return a=va(a),b(e,r,a,c)}if(ne(a))return h(e,r,a,c);if(ee(a)){if(l=ee(a),typeof l!=`function`)throw Error(s(150));return a=l.call(a),g(e,r,a,c)}if(typeof a.then==`function`)return b(e,r,wa(a),c);if(a.$$typeof===C)return b(e,r,Ki(e,a),c);Ea(e,a)}return typeof a==`string`&&a!==``||typeof a==`number`||typeof a==`bigint`?(a=``+a,r!==null&&r.tag===6?(n(e,r.sibling),c=i(r,a),c.return=e,e=c):(n(e,r),c=ii(a,e.mode,c),c.return=e,e=c),o(e)):n(e,r)}return function(e,t,n,r){try{Ca=0;var i=b(e,t,n,r);return Sa=null,i}catch(t){if(t===fa||t===ma)throw t;var a=Qr(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Oa=Da(!0),ka=Da(!1),Aa=!1;function ja(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ma(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Pa(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Pl&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Yr(e),Jr(e,null,n),t}return Gr(e,r,t,n),Yr(e)}function Fa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qe(e,n)}}function Ia(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var La=!1;function Ra(){if(La){var e=ra;if(e!==null)throw e}}function za(e,t,n,r){La=!1;var i=e.updateQueue;Aa=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(Q&f)===f:(r&f)===f){f!==0&&f===na&&(La=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Aa=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),Ul|=o,e.lanes=o,e.memoizedState=d}}function Ba(e,t){if(typeof e!=`function`)throw Error(s(191,e));e.call(t)}function Va(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ba(n[e],t)}var Ha=oe(null),Ua=oe(0);function Wa(e,t){e=Vl,F(Ua,e),F(Ha,t),Vl=e|t.baseLanes}function Ga(){F(Ua,Vl),F(Ha,Ha.current)}function Ka(){Vl=Ua.current,se(Ha),se(Ua)}var qa=oe(null),Ja=null;function Ya(e){var t=e.alternate;F(eo,eo.current&1),F(qa,e),Ja===null&&(t===null||Ha.current!==null||t.memoizedState!==null)&&(Ja=e)}function Xa(e){F(eo,eo.current),F(qa,e),Ja===null&&(Ja=e)}function Za(e){e.tag===22?(F(eo,eo.current),F(qa,e),Ja===null&&(Ja=e)):Qa(e)}function Qa(){F(eo,eo.current),F(qa,qa.current)}function $a(e){se(qa),Ja===e&&(Ja=null),se(eo)}var eo=oe(0);function to(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var no=0,X=null,ro=null,io=null,ao=!1,oo=!1,so=!1,co=0,lo=0,uo=null,fo=0;function po(){throw Error(s(321))}function mo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!fr(e[n],t[n]))return!1;return!0}function ho(e,t,n,r,i,a){return no=a,X=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,N.H=e===null||e.memoizedState===null?Ms:Ns,so=!1,a=n(r,i),so=!1,oo&&(a=_o(t,n,r,i)),go(e),a}function go(e){N.H=js;var t=ro!==null&&ro.next!==null;if(no=0,io=ro=X=null,ao=!1,lo=0,uo=null,t)throw Error(s(300));e===null||Xs||(e=e.dependencies,e!==null&&Ui(e)&&(Xs=!0))}function _o(e,t,n,r){X=e;var i=0;do{if(oo&&(uo=null),lo=0,oo=!1,25<=i)throw Error(s(301));if(i+=1,io=ro=null,e.updateQueue!=null){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,a.memoCache!=null&&(a.memoCache.index=0)}N.H=Ps,a=t(n,r)}while(oo);return a}function vo(){var e=N.H,t=e.useState()[0];return t=typeof t.then==`function`?To(t):t,e=e.useState()[0],(ro===null?null:ro.memoizedState)!==e&&(X.flags|=1024),t}function yo(){var e=co!==0;return co=0,e}function bo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function xo(e){if(ao){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}ao=!1}no=0,io=ro=X=null,oo=!1,lo=co=0,uo=null}function So(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return io===null?X.memoizedState=io=e:io=io.next=e,io}function Co(){if(ro===null){var e=X.alternate;e=e===null?null:e.memoizedState}else e=ro.next;var t=io===null?X.memoizedState:io.next;if(t!==null)io=t,ro=e;else{if(e===null)throw X.alternate===null?Error(s(467)):Error(s(310));ro=e,e={memoizedState:ro.memoizedState,baseState:ro.baseState,baseQueue:ro.baseQueue,queue:ro.queue,next:null},io===null?X.memoizedState=io=e:io=io.next=e}return io}function wo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function To(e){var t=lo;return lo+=1,uo===null&&(uo=[]),e=_a(uo,e,t),t=X,(io===null?t.memoizedState:io.next)===null&&(t=t.alternate,N.H=t===null||t.memoizedState===null?Ms:Ns),e}function Eo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return To(e);if(e.$$typeof===C)return Gi(e)}throw Error(s(438,String(e)))}function Do(e){var t=null,n=X.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=X.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=wo(),X.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=A;return t.index++,n}function Oo(e,t){return typeof t==`function`?t(e):t}function ko(e){return Ao(Co(),ro,e)}function Ao(e,t,n){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(a!==null){if(i!==null){var o=i.next;i.next=a.next,a.next=o}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,i===null)e.memoizedState=a;else{t=i.next;var c=o=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(no&f)===f:(Q&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===na&&(d=!0);else if((no&p)===p){u=u.next,p===na&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,o=a):l=l.next=f,X.lanes|=p,Ul|=p;f=u.action,so&&n(a,f),a=u.hasEagerState?u.eagerState:n(a,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,o=a):l=l.next=p,X.lanes|=f,Ul|=f;u=u.next}while(u!==null&&u!==t);if(l===null?o=a:l.next=c,!fr(a,e.memoizedState)&&(Xs=!0,d&&(n=ra,n!==null)))throw n;e.memoizedState=a,e.baseState=o,e.baseQueue=l,r.lastRenderedState=a}return i===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function jo(e){var t=Co(),n=t.queue;if(n===null)throw Error(s(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do a=e(a,o.action),o=o.next;while(o!==i);fr(a,t.memoizedState)||(Xs=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function Mo(e,t,n){var r=X,i=Co(),a=Y;if(a){if(n===void 0)throw Error(s(407));n=n()}else n=t();var o=!fr((ro||i).memoizedState,n);if(o&&(i.memoizedState=n,Xs=!0),i=i.queue,rs(Fo.bind(null,r,i,e),[e]),i.getSnapshot!==t||o||io!==null&&io.memoizedState.tag&1){if(r.flags|=2048,Qo(9,{destroy:void 0},Po.bind(null,r,i,n,t),null),Fl===null)throw Error(s(349));a||no&127||No(r,t,n)}return n}function No(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=X.updateQueue,t===null?(t=wo(),X.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Po(e,t,n,r){t.value=n,t.getSnapshot=r,Io(t)&&Lo(e)}function Fo(e,t,n){return n(function(){Io(t)&&Lo(e)})}function Io(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!fr(e,n)}catch{return!0}}function Lo(e){var t=qr(e,2);t!==null&&pu(t,e,2)}function Ro(e){var t=So();if(typeof e==`function`){var n=e;if(e=n(),so){R(!0);try{n()}finally{R(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:e},t}function zo(e,t,n,r){return e.baseState=n,Ao(e,ro,typeof r==`function`?r:Oo)}function Bo(e,t,n,r,i){if(Os(e))throw Error(s(485));if(e=t.action,e!==null){var a={payload:i,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};N.T===null?a.isTransition=!1:n(!0),r(a),n=t.pending,n===null?(a.next=t.pending=a,Vo(t,a)):(a.next=n.next,t.pending=n.next=a)}}function Vo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=N.T,o={};N.T=o;try{var s=n(i,r),c=N.S;c!==null&&c(o,s),Ho(e,t,s)}catch(n){Wo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),N.T=a}}else try{a=n(i,r),Ho(e,t,a)}catch(n){Wo(e,t,n)}}function Ho(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Uo(e,t,n)},function(n){return Wo(e,t,n)}):Uo(e,t,n)}function Uo(e,t,n){t.status=`fulfilled`,t.value=n,Go(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Vo(e,n)))}function Wo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Go(t),t=t.next;while(t!==r)}e.action=null}function Go(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Ko(e,t){return t}function qo(e,t){if(Y){var n=Fl.formState;if(n!==null){a:{var r=X;if(Y){if(wi){b:{for(var i=wi,a=Ei;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){wi=cf(i.nextSibling),r=i.data===`F!`;break a}}Oi(r)}r=!1}r&&(t=n[0])}}return n=So(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ko,lastRenderedState:t},n.queue=r,n=Ts.bind(null,X,r),r.dispatch=n,r=Ro(!1),a=Ds.bind(null,X,!1,r.queue),r=So(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Bo.bind(null,X,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function Jo(e){return Yo(Co(),ro,e)}function Yo(e,t,n){if(t=Ao(e,t,Ko)[0],e=ko(Oo)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=To(t)}catch(e){throw e===fa?ma:e}else r=t;t=Co();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(X.flags|=2048,Qo(9,{destroy:void 0},Xo.bind(null,i,n),null)),[r,a,e]}function Xo(e,t){e.action=t}function Zo(e){var t=Co(),n=ro;if(n!==null)return Yo(t,n,e);Co(),t=t.memoizedState,n=Co();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function Qo(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=X.updateQueue,t===null&&(t=wo(),X.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function $o(){return Co().memoizedState}function es(e,t,n,r){var i=So();X.flags|=e,i.memoizedState=Qo(1|t,{destroy:void 0},n,r===void 0?null:r)}function ts(e,t,n,r){var i=Co();r=r===void 0?null:r;var a=i.memoizedState.inst;ro!==null&&r!==null&&mo(r,ro.memoizedState.deps)?i.memoizedState=Qo(t,a,n,r):(X.flags|=e,i.memoizedState=Qo(1|t,a,n,r))}function ns(e,t){es(8390656,8,e,t)}function rs(e,t){ts(2048,8,e,t)}function is(e){X.flags|=4;var t=X.updateQueue;if(t===null)t=wo(),X.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function as(e){var t=Co().memoizedState;return is({ref:t,nextImpl:e}),function(){if(Pl&2)throw Error(s(440));return t.impl.apply(void 0,arguments)}}function os(e,t){return ts(4,2,e,t)}function ss(e,t){return ts(4,4,e,t)}function cs(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ls(e,t,n){n=n==null?null:n.concat([e]),ts(4,4,cs.bind(null,t,e),n)}function us(){}function ds(e,t){var n=Co();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fs(e,t){var n=Co();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&mo(t,r[1]))return r[0];if(r=e(),so){R(!0);try{e()}finally{R(!1)}}return n.memoizedState=[r,t],r}function ps(e,t,n){return n===void 0||no&1073741824&&!(Q&261930)?e.memoizedState=t:(e.memoizedState=n,e=fu(),X.lanes|=e,Ul|=e,n)}function ms(e,t,n,r){return fr(n,t)?n:Ha.current===null?!(no&42)||no&1073741824&&!(Q&261930)?(Xs=!0,e.memoizedState=n):(e=fu(),X.lanes|=e,Ul|=e,t):(e=ps(e,n,r),fr(e,t)||(Xs=!0),e)}function hs(e,t,n,r,i){var a=P.p;P.p=a!==0&&8>a?a:8;var o=N.T,s={};N.T=s,Ds(e,!1,t,n);try{var c=i(),l=N.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Es(e,t,oa(c,r),du(e)):Es(e,t,r,du(e))}catch(n){Es(e,t,{then:function(){},status:`rejected`,reason:n},du())}finally{P.p=a,o!==null&&s.types!==null&&(o.types=s.types),N.T=o}}function gs(){}function _s(e,t,n,r){if(e.tag!==5)throw Error(s(476));var i=vs(e).queue;hs(e,i,t,re,n===null?gs:function(){return ys(e),n(r)})}function vs(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:re},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Oo,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ys(e){var t=vs(e);t.next===null&&(t=e.alternate.memoizedState),Es(e,t.next.queue,{},du())}function bs(){return Gi(Qf)}function xs(){return Co().memoizedState}function Ss(){return Co().memoizedState}function Cs(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=du();e=Na(n);var r=Pa(t,e,n);r!==null&&(pu(r,t,n),Fa(r,t,n)),t={cache:Qi()},e.payload=t;return}t=t.return}}function ws(e,t,n){var r=du();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Os(e)?ks(t,n):(n=Kr(e,t,n,r),n!==null&&(pu(n,e,r),As(n,t,r)))}function Ts(e,t,n){Es(e,t,n,du())}function Es(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Os(e))ks(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,fr(s,o))return Gr(e,t,i,0),Fl===null&&Wr(),!1}catch{}if(n=Kr(e,t,i,r),n!==null)return pu(n,e,r),As(n,t,r),!0}return!1}function Ds(e,t,n,r){if(r={lane:2,revertLane:ud(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Os(e)){if(t)throw Error(s(479))}else t=Kr(e,n,r,2),t!==null&&pu(t,e,2)}function Os(e){var t=e.alternate;return e===X||t!==null&&t===X}function ks(e,t){oo=ao=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function As(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Qe(e,n)}}var js={readContext:Gi,use:Eo,useCallback:po,useContext:po,useEffect:po,useImperativeHandle:po,useLayoutEffect:po,useInsertionEffect:po,useMemo:po,useReducer:po,useRef:po,useState:po,useDebugValue:po,useDeferredValue:po,useTransition:po,useSyncExternalStore:po,useId:po,useHostTransitionStatus:po,useFormState:po,useActionState:po,useOptimistic:po,useMemoCache:po,useCacheRefresh:po};js.useEffectEvent=po;var Ms={readContext:Gi,use:Eo,useCallback:function(e,t){return So().memoizedState=[e,t===void 0?null:t],e},useContext:Gi,useEffect:ns,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),es(4194308,4,cs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){es(4,2,e,t)},useMemo:function(e,t){var n=So();t=t===void 0?null:t;var r=e();if(so){R(!0);try{e()}finally{R(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=So();if(n!==void 0){var i=n(t);if(so){R(!0);try{n(t)}finally{R(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=ws.bind(null,X,e),[r.memoizedState,e]},useRef:function(e){var t=So();return e={current:e},t.memoizedState=e},useState:function(e){e=Ro(e);var t=e.queue,n=Ts.bind(null,X,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:us,useDeferredValue:function(e,t){return ps(So(),e,t)},useTransition:function(){var e=Ro(!1);return e=hs.bind(null,X,e.queue,!0,!1),So().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=X,i=So();if(Y){if(n===void 0)throw Error(s(407));n=n()}else{if(n=t(),Fl===null)throw Error(s(349));Q&127||No(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,ns(Fo.bind(null,r,a,e),[e]),r.flags|=2048,Qo(9,{destroy:void 0},Po.bind(null,r,a,n,t),null),n},useId:function(){var e=So(),t=Fl.identifierPrefix;if(Y){var n=_i,r=gi;n=(r&~(1<<32-z(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=co++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=fo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:bs,useFormState:qo,useActionState:qo,useOptimistic:function(e){var t=So();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ds.bind(null,X,!0,n),n.dispatch=t,[e,t]},useMemoCache:Do,useCacheRefresh:function(){return So().memoizedState=Cs.bind(null,X)},useEffectEvent:function(e){var t=So(),n={impl:e};return t.memoizedState=n,function(){if(Pl&2)throw Error(s(440));return n.impl.apply(void 0,arguments)}}},Ns={readContext:Gi,use:Eo,useCallback:ds,useContext:Gi,useEffect:rs,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:fs,useReducer:ko,useRef:$o,useState:function(){return ko(Oo)},useDebugValue:us,useDeferredValue:function(e,t){return ms(Co(),ro.memoizedState,e,t)},useTransition:function(){var e=ko(Oo)[0],t=Co().memoizedState;return[typeof e==`boolean`?e:To(e),t]},useSyncExternalStore:Mo,useId:xs,useHostTransitionStatus:bs,useFormState:Jo,useActionState:Jo,useOptimistic:function(e,t){return zo(Co(),ro,e,t)},useMemoCache:Do,useCacheRefresh:Ss};Ns.useEffectEvent=as;var Ps={readContext:Gi,use:Eo,useCallback:ds,useContext:Gi,useEffect:rs,useImperativeHandle:ls,useInsertionEffect:os,useLayoutEffect:ss,useMemo:fs,useReducer:jo,useRef:$o,useState:function(){return jo(Oo)},useDebugValue:us,useDeferredValue:function(e,t){var n=Co();return ro===null?ps(n,e,t):ms(n,ro.memoizedState,e,t)},useTransition:function(){var e=jo(Oo)[0],t=Co().memoizedState;return[typeof e==`boolean`?e:To(e),t]},useSyncExternalStore:Mo,useId:xs,useHostTransitionStatus:bs,useFormState:Zo,useActionState:Zo,useOptimistic:function(e,t){var n=Co();return ro===null?(n.baseState=e,[e,n.queue.dispatch]):zo(n,ro,e,t)},useMemoCache:Do,useCacheRefresh:Ss};Ps.useEffectEvent=as;function Fs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Is={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=du(),i=Na(r);i.payload=t,n!=null&&(i.callback=n),t=Pa(e,i,r),t!==null&&(pu(t,e,r),Fa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=du(),i=Na(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Pa(e,i,r),t!==null&&(pu(t,e,r),Fa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=du(),r=Na(n);r.tag=2,t!=null&&(r.callback=t),t=Pa(e,r,n),t!==null&&(pu(t,e,n),Fa(t,e,n))}};function Ls(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!pr(n,r)||!pr(i,a):!0}function Rs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Is.enqueueReplaceState(t,t.state,null)}function zs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Bs(e){Br(e)}function Vs(e){console.error(e)}function Hs(e){Br(e)}function Us(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Ws(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Gs(e,t,n){return n=Na(n),n.tag=3,n.payload={element:null},n.callback=function(){Us(e,t)},n}function Ks(e){return e=Na(e),e.tag=3,e}function qs(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ws(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Ws(t,n,r),typeof i!=`function`&&(tu===null?tu=new Set([this]):tu.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function Js(e,t,n,r,i){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Hi(t,n,i,!0),n=qa.current,n!==null){switch(n.tag){case 31:case 13:return Ja===null?Tu():n.alternate===null&&Hl===0&&(Hl=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===ha?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Wu(e,r,i)),!1;case 22:return n.flags|=65536,r===ha?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Wu(e,r,i)),!1}throw Error(s(435,n.tag))}return Wu(e,r,i),Tu(),!1}if(Y)return t=qa.current,t===null?(r!==Di&&(t=Error(s(423),{cause:r}),Pi(ci(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,r=ci(r,n),i=Gs(e.stateNode,r,i),Ia(e,i),Hl!==4&&(Hl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==Di&&(e=Error(s(422),{cause:r}),Pi(ci(e,n)))),!1;var a=Error(s(520),{cause:r});if(a=ci(a,n),Jl===null?Jl=[a]:Jl.push(a),Hl!==4&&(Hl=2),t===null)return!0;r=ci(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Gs(n.stateNode,r,e),Ia(n,e),!1;case 1:if(t=n.type,a=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||a!==null&&typeof a.componentDidCatch==`function`&&(tu===null||!tu.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,i=Ks(i),qs(i,e,n,r),Ia(n,i),!1}n=n.return}while(n!==null);return!1}var Ys=Error(s(461)),Xs=!1;function Zs(e,t,n,r){t.child=e===null?ka(t,null,n,r):Oa(t,e.child,n,r)}function Qs(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Wi(t),r=ho(e,t,n,o,a,i),s=yo(),e!==null&&!Xs?(bo(e,t,i),Sc(e,t,i)):(Y&&s&&bi(t),t.flags|=1,Zs(e,t,r,i),t.child)}function $s(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!$r(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,ec(e,t,a,r,i)):(e=ni(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!Cc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?pr:n,n(o,r)&&e.ref===t.ref)return Sc(e,t,i)}return t.flags|=1,e=ei(a,r),e.ref=t.ref,e.return=t,t.child=e}function ec(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(pr(a,r)&&e.ref===t.ref)if(Xs=!1,t.pendingProps=r=a,Cc(e,i))e.flags&131072&&(Xs=!0);else return t.lanes=e.lanes,Sc(e,t,i)}return cc(e,t,n,r,i)}function tc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return rc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ua(t,a===null?null:a.cachePool),a===null?Ga():Wa(t,a),Za(t);else return r=t.lanes=536870912,rc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ua(t,null),Ga(),Qa(t)):(ua(t,a.cachePool),Wa(t,a),Qa(t),t.memoizedState=null);return Zs(e,t,i,n),t.child}function nc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function rc(e,t,n,r,i){var a=la();return a=a===null?null:{parent:Zi._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ua(t,null),Ga(),Za(t),e!==null&&Hi(e,t,r,!0),t.childLanes=i,null}function ic(e,t){return t=_c({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ac(e,t,n){return Oa(t,e.child,null,n),e=ic(t,t.pendingProps),e.flags|=2,$a(t),t.memoizedState=null,e}function oc(e,t,n){var r=t.pendingProps,i=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(Y){if(r.mode===`hidden`)return e=ic(t,r),t.lanes=536870912,nc(null,e);if(Xa(t),(e=wi)?(e=rf(e,Ei),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hi===null?null:{id:gi,overflow:_i},retryLane:536870912,hydrationErrors:null},n=ai(e),n.return=t,t.child=n,Ci=t,wi=null)):e=null,e===null)throw Oi(t);return t.lanes=536870912,null}return ic(t,r)}var a=e.memoizedState;if(a!==null){var o=a.dehydrated;if(Xa(t),i)if(t.flags&256)t.flags&=-257,t=ac(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(s(558));else if(Xs||Hi(e,t,n,!1),i=(n&e.childLanes)!==0,Xs||i){if(r=Fl,r!==null&&(o=$e(r,n),o!==0&&o!==a.retryLane))throw a.retryLane=o,qr(e,o),pu(r,e,o),Ys;Tu(),t=ac(e,t,n)}else e=a.treeContext,wi=cf(o.nextSibling),Ci=t,Y=!0,Ti=null,Ei=!1,e!==null&&Si(t,e),t=ic(t,r),t.flags|=4096;return t}return e=ei(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function sc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(s(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function cc(e,t,n,r,i){return Wi(t),n=ho(e,t,n,r,void 0,i),r=yo(),e!==null&&!Xs?(bo(e,t,i),Sc(e,t,i)):(Y&&r&&bi(t),t.flags|=1,Zs(e,t,n,i),t.child)}function lc(e,t,n,r,i,a){return Wi(t),t.updateQueue=null,n=_o(t,r,n,i),go(e),r=yo(),e!==null&&!Xs?(bo(e,t,a),Sc(e,t,a)):(Y&&r&&bi(t),t.flags|=1,Zs(e,t,n,a),t.child)}function uc(e,t,n,r,i){if(Wi(t),t.stateNode===null){var a=Xr,o=n.contextType;typeof o==`object`&&o&&(a=Gi(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Is,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},ja(t),o=n.contextType,a.context=typeof o==`object`&&o?Gi(o):Xr,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Fs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Is.enqueueReplaceState(a,a.state,null),za(t,r,a,i),Ra(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=zs(n,s);a.props=c;var l=a.context,u=n.contextType;o=Xr,typeof u==`object`&&u&&(o=Gi(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Rs(t,a,r,o),Aa=!1;var f=t.memoizedState;a.state=f,za(t,r,a,i),Ra(),l=t.memoizedState,s||f!==l||Aa?(typeof d==`function`&&(Fs(t,n,d,r),l=t.memoizedState),(c=Aa||Ls(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ma(e,t),o=t.memoizedProps,u=zs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=Xr,typeof l==`object`&&l&&(c=Gi(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Rs(t,a,r,c),Aa=!1,f=t.memoizedState,a.state=f,za(t,r,a,i),Ra();var p=t.memoizedState;o!==d||f!==p||Aa||e!==null&&e.dependencies!==null&&Ui(e.dependencies)?(typeof s==`function`&&(Fs(t,n,s,r),p=t.memoizedState),(u=Aa||Ls(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Ui(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,sc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Oa(t,e.child,null,i),t.child=Oa(t,null,n,i)):Zs(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Sc(e,t,i),e}function dc(e,t,n,r){return Mi(),t.flags|=256,Zs(e,t,n,r),t.child}var fc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pc(e){return{baseLanes:e,cachePool:da()}}function mc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Kl),e}function hc(e,t,n){var r=t.pendingProps,i=!1,a=(t.flags&128)!=0,o;if((o=a)||(o=e!==null&&e.memoizedState===null?!1:(eo.current&2)!=0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!=0,t.flags&=-33,e===null){if(Y){if(i?Ya(t):Qa(t),(e=wi)?(e=rf(e,Ei),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hi===null?null:{id:gi,overflow:_i},retryLane:536870912,hydrationErrors:null},n=ai(e),n.return=t,t.child=n,Ci=t,wi=null)):e=null,e===null)throw Oi(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,i?(Qa(t),i=t.mode,c=_c({mode:`hidden`,children:c},i),r=ri(r,i,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=pc(n),r.childLanes=mc(e,o,n),t.memoizedState=fc,nc(null,r)):(Ya(t),gc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(a)t.flags&256?(Ya(t),t.flags&=-257,t=vc(e,t,n)):t.memoizedState===null?(Qa(t),c=r.fallback,i=t.mode,r=_c({mode:`visible`,children:r.children},i),c=ri(c,i,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Oa(t,e.child,null,n),r=t.child,r.memoizedState=pc(n),r.childLanes=mc(e,o,n),t.memoizedState=fc,t=nc(null,r)):(Qa(t),t.child=e.child,t.flags|=128,t=null);else if(Ya(t),of(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var u=o.dgst;o=u,r=Error(s(419)),r.stack=``,r.digest=o,Pi({value:r,source:null,stack:null}),t=vc(e,t,n)}else if(Xs||Hi(e,t,n,!1),o=(n&e.childLanes)!==0,Xs||o){if(o=Fl,o!==null&&(r=$e(o,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,qr(e,r),pu(o,e,r),Ys;af(c)||Tu(),t=vc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,wi=cf(c.nextSibling),Ci=t,Y=!0,Ti=null,Ei=!1,e!==null&&Si(t,e),t=gc(t,r.children),t.flags|=4096);return t}return i?(Qa(t),c=r.fallback,i=t.mode,l=e.child,u=l.sibling,r=ei(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=ri(c,i,n,null),c.flags|=2):c=ei(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,nc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=pc(n):(i=c.cachePool,i===null?i=da():(l=Zi._currentValue,i=i.parent===l?i:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:i}),r.memoizedState=c,r.childLanes=mc(e,o,n),t.memoizedState=fc,nc(e.child,r)):(Ya(t),n=e.child,e=n.sibling,n=ei(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=n,t.memoizedState=null,n)}function gc(e,t){return t=_c({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function _c(e,t){return e=Qr(22,e,null,t),e.lanes=0,e}function vc(e,t,n){return Oa(t,e.child,null,n),e=gc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function yc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Bi(e.return,t,n)}function bc(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function xc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=eo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,F(eo,o),Zs(e,t,r,n),r=Y?fi:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yc(e,n,t);else if(e.tag===19)yc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&to(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),bc(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&to(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}bc(t,!0,n,null,a,r);break;case`together`:bc(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Sc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ul|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Hi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,n=ei(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ei(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Cc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Ui(e))):!0}function wc(e,t,n){switch(t.tag){case 3:fe(t,t.stateNode.containerInfo),Ri(t,Zi,e.memoizedState.cache),Mi();break;case 27:case 5:me(t);break;case 4:fe(t,t.stateNode.containerInfo);break;case 10:Ri(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Xa(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(Ya(t),e=Sc(e,t,n),e===null?null:e.sibling):hc(e,t,n):(Ya(t),t.flags|=128,null);Ya(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Hi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return xc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),F(eo,eo.current),r)break;return null;case 22:return t.lanes=0,tc(e,t,n,t.pendingProps);case 24:Ri(t,Zi,e.memoizedState.cache)}return Sc(e,t,n)}function Tc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Xs=!0;else{if(!Cc(e,n)&&!(t.flags&128))return Xs=!1,wc(e,t,n);Xs=!!(e.flags&131072)}else Xs=!1,Y&&t.flags&1048576&&yi(t,fi,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=va(t.elementType),t.type=e,typeof e==`function`)$r(e)?(r=zs(e,r),t.tag=1,t=uc(null,t,e,r,n)):(t.tag=0,t=cc(null,t,e,r,n));else{if(e!=null){var i=e.$$typeof;if(i===w){t.tag=11,t=Qs(null,t,e,r,n);break a}else if(i===D){t.tag=14,t=$s(null,t,e,r,n);break a}}throw t=M(e)||e,Error(s(306,t,``))}}return t;case 0:return cc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,i=zs(r,t.pendingProps),uc(e,t,r,i,n);case 3:a:{if(fe(t,t.stateNode.containerInfo),e===null)throw Error(s(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,Ma(e,t),za(t,r,null,n);var o=t.memoizedState;if(r=o.cache,Ri(t,Zi,r),r!==a.cache&&Vi(t,[Zi],n,!0),Ra(),r=o.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){t=dc(e,t,r,n);break a}else if(r!==i){i=ci(Error(s(424)),t),Pi(i),t=dc(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(wi=cf(e.firstChild),Ci=t,Y=!0,Ti=null,Ei=!0,n=ka(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Mi(),r===i){t=Sc(e,t,n);break a}Zs(e,t,r,n)}t=t.child}return t;case 26:return sc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:Y||(n=t.type,e=t.pendingProps,r=Bd(ue.current).createElement(n),r[at]=t,r[ot]=e,Pd(r,n,e),vt(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return me(t),e===null&&Y&&(r=t.stateNode=ff(t.type,t.pendingProps,ue.current),Ci=t,Ei=!0,i=wi,Zd(t.type)?(lf=i,wi=cf(r.firstChild)):wi=i),Zs(e,t,t.pendingProps.children,n),sc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Y&&((i=r=wi)&&(r=tf(r,t.type,t.pendingProps,Ei),r===null?i=!1:(t.stateNode=r,Ci=t,wi=cf(r.firstChild),Ei=!1,i=!0)),i||Oi(t)),me(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,r=a.children,Ud(i,a)?r=null:o!==null&&Ud(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=ho(e,t,vo,null,null,n),Qf._currentValue=i),sc(e,t),Zs(e,t,r,n),t.child;case 6:return e===null&&Y&&((e=n=wi)&&(n=nf(n,t.pendingProps,Ei),n===null?e=!1:(t.stateNode=n,Ci=t,wi=null,e=!0)),e||Oi(t)),null;case 13:return hc(e,t,n);case 4:return fe(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oa(t,null,r,n):Zs(e,t,r,n),t.child;case 11:return Qs(e,t,t.type,t.pendingProps,n);case 7:return Zs(e,t,t.pendingProps,n),t.child;case 8:return Zs(e,t,t.pendingProps.children,n),t.child;case 12:return Zs(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Ri(t,t.type,r.value),Zs(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Wi(t),i=Gi(i),r=r(i),t.flags|=1,Zs(e,t,r,n),t.child;case 14:return $s(e,t,t.type,t.pendingProps,n);case 15:return ec(e,t,t.type,t.pendingProps,n);case 19:return xc(e,t,n);case 31:return oc(e,t,n);case 22:return tc(e,t,n,t.pendingProps);case 24:return Wi(t),r=Gi(Zi),e===null?(i=la(),i===null&&(i=Fl,a=Qi(),i.pooledCache=a,a.refCount++,a!==null&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},ja(t),Ri(t,Zi,i)):((e.lanes&n)!==0&&(Ma(e,t),za(t,null,null,n),Ra()),i=e.memoizedState,a=t.memoizedState,i.parent===r?(r=a.cache,Ri(t,Zi,r),r!==i.cache&&Vi(t,[Zi],n,!0)):(i={parent:r,cache:r},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),Ri(t,Zi,r))),Zs(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(s(156,t.tag))}function Ec(e){e.flags|=4}function Dc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Su())e.flags|=8192;else throw ya=ha,pa}else e.flags&=-16777217}function Oc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Su())e.flags|=8192;else throw ya=ha,pa}function kc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:qe(),e.lanes|=t,ql|=t)}function Ac(e,t){if(!Y)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function jc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Mc(e,t,n){var r=t.pendingProps;switch(xi(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jc(t),null;case 1:return jc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),zi(Zi),pe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ji(t)?Ec(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ni())),jc(t),null;case 26:var i=t.type,a=t.memoizedState;return e===null?(Ec(t),a===null?(jc(t),Dc(t,i,null,r,n)):(jc(t),Oc(t,a))):a?a===e.memoizedState?(jc(t),t.flags&=-16777217):(Ec(t),jc(t),Oc(t,a)):(e=e.memoizedProps,e!==r&&Ec(t),jc(t),Dc(t,i,e,r,n)),null;case 27:if(he(t),n=ue.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ec(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return jc(t),null}e=ce.current,ji(t)?ki(t,e):(e=ff(i,r,n),t.stateNode=e,Ec(t))}return jc(t),null;case 5:if(he(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Ec(t);else{if(!r){if(t.stateNode===null)throw Error(s(166));return jc(t),null}if(a=ce.current,ji(t))ki(t,a);else{var o=Bd(ue.current);switch(a){case 1:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case 2:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;default:switch(i){case`svg`:a=o.createElementNS(`http://www.w3.org/2000/svg`,i);break;case`math`:a=o.createElementNS(`http://www.w3.org/1998/Math/MathML`,i);break;case`script`:a=o.createElement(`div`),a.innerHTML=`<script><\/script>`,a=a.removeChild(a.firstChild);break;case`select`:a=typeof r.is==`string`?o.createElement(`select`,{is:r.is}):o.createElement(`select`),r.multiple?a.multiple=!0:r.size&&(a.size=r.size);break;default:a=typeof r.is==`string`?o.createElement(i,{is:r.is}):o.createElement(i)}}a[at]=t,a[ot]=r;a:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)a.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break a;for(;o.sibling===null;){if(o.return===null||o.return===t)break a;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=a;a:switch(Pd(a,i,r),i){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Ec(t)}}return jc(t),Dc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Ec(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(s(166));if(e=ue.current,ji(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,i=Ci,i!==null)switch(i.tag){case 27:case 5:r=i.memoizedProps}e[at]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||Oi(t,!0)}else e=Bd(e).createTextNode(r),e[at]=t,t.stateNode=e}return jc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=ji(t),n!==null){if(e===null){if(!r)throw Error(s(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(s(557));e[at]=t}else Mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;jc(t),e=!1}else n=Ni(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?($a(t),t):($a(t),null);if(t.flags&128)throw Error(s(558))}return jc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(s(318));if(i=t.memoizedState,i=i===null?null:i.dehydrated,!i)throw Error(s(317));i[at]=t}else Mi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;jc(t),i=!1}else i=Ni(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?($a(t),t):($a(t),null)}return $a(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,i=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(i=r.alternate.memoizedState.cachePool.pool),a=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),kc(t,t.updateQueue),jc(t),null);case 4:return pe(),e===null&&xd(t.stateNode.containerInfo),jc(t),null;case 10:return zi(t.type),jc(t),null;case 19:if(se(eo),r=t.memoizedState,r===null)return jc(t),null;if(i=(t.flags&128)!=0,a=r.rendering,a===null)if(i)Ac(r,!1);else{if(Hl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=to(e),a!==null){for(t.flags|=128,Ac(r,!1),e=a.updateQueue,t.updateQueue=e,kc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)ti(n,e),n=n.sibling;return F(eo,eo.current&1|2),Y&&vi(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&De()>$l&&(t.flags|=128,i=!0,Ac(r,!1),t.lanes=4194304)}else{if(!i)if(e=to(a),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,kc(t,e),Ac(r,!0),r.tail===null&&r.tailMode===`hidden`&&!a.alternate&&!Y)return jc(t),null}else 2*De()-r.renderingStartTime>$l&&n!==536870912&&(t.flags|=128,i=!0,Ac(r,!1),t.lanes=4194304);r.isBackwards?(a.sibling=t.child,t.child=a):(e=r.last,e===null?t.child=a:e.sibling=a,r.last=a)}return r.tail===null?(jc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=De(),e.sibling=null,n=eo.current,F(eo,i?n&1|2:n&1),Y&&vi(t,r.treeForkCount),e);case 22:case 23:return $a(t),Ka(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(jc(t),t.subtreeFlags&6&&(t.flags|=8192)):jc(t),n=t.updateQueue,n!==null&&kc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&se(ca),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),zi(Zi),jc(t),null;case 25:return null;case 30:return null}throw Error(s(156,t.tag))}function Nc(e,t){switch(xi(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zi(Zi),pe(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return he(t),null;case 31:if(t.memoizedState!==null){if($a(t),t.alternate===null)throw Error(s(340));Mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if($a(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));Mi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return se(eo),null;case 4:return pe(),null;case 10:return zi(t.type),null;case 22:case 23:return $a(t),Ka(),e!==null&&se(ca),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return zi(Zi),null;case 25:return null;default:return null}}function Pc(e,t){switch(xi(t),t.tag){case 3:zi(Zi),pe();break;case 26:case 27:case 5:he(t);break;case 4:pe();break;case 31:t.memoizedState!==null&&$a(t);break;case 13:$a(t);break;case 19:se(eo);break;case 10:zi(t.type);break;case 22:case 23:$a(t),Ka(),e!==null&&se(ca);break;case 24:zi(Zi)}}function Fc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){Uu(t,t.return,e)}}function Ic(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){Uu(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){Uu(t,t.return,e)}}function Lc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Va(t,n)}catch(t){Uu(e,e.return,t)}}}function Rc(e,t,n){n.props=zs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){Uu(e,t,n)}}function zc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){Uu(e,t,n)}}function Bc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){Uu(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){Uu(e,t,n)}else n.current=null}function Vc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){Uu(e,e.return,t)}}function Hc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[ot]=t}catch(t){Uu(e,e.return,t)}}function Uc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Wc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Uc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Gc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Wt));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Gc(e,t,n),e=e.sibling;e!==null;)Gc(e,t,n),e=e.sibling}function Kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Kc(e,t,n),e=e.sibling;e!==null;)Kc(e,t,n),e=e.sibling}function qc(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[at]=e,t[ot]=n}catch(t){Uu(e,e.return,t)}}var Jc=!1,Yc=!1,Xc=!1,Zc=typeof WeakSet==`function`?WeakSet:Set,Qc=null;function $c(e,t){if(e=e.containerInfo,Rd=sp,e=_r(e),vr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break a}var o=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||i!==0&&f.nodeType!==3||(c=o+i),f!==a||r!==0&&f.nodeType!==3||(l=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===i&&(c=o),p===a&&++d===r&&(l=o),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,Qc=t;Qc!==null;)if(t=Qc,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,Qc=e;else for(;Qc!==null;){switch(t=Qc,a=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&a!==null){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var h=zs(n.type,i);e=r.getSnapshotBeforeUpdate(h,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){Uu(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(s(163))}if(e=t.sibling,e!==null){e.return=t.return,Qc=e;break}Qc=t.return}}function el(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:hl(e,n),r&4&&Fc(5,n);break;case 1:if(hl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){Uu(n,n.return,e)}else{var i=zs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){Uu(n,n.return,e)}}r&64&&Lc(n),r&512&&zc(n,n.return);break;case 3:if(hl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Va(e,t)}catch(e){Uu(n,n.return,e)}}break;case 27:t===null&&r&4&&qc(n);case 26:case 5:hl(e,n),t===null&&r&4&&Vc(n),r&512&&zc(n,n.return);break;case 12:hl(e,n);break;case 31:hl(e,n),r&4&&ol(e,n);break;case 13:hl(e,n),r&4&&sl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=qu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||Jc,!r){t=t!==null&&t.memoizedState!==null||Yc,i=Jc;var a=Yc;Jc=r,(Yc=t)&&!a?_l(e,n,(n.subtreeFlags&8772)!=0):hl(e,n),Jc=i,Yc=a}break;case 30:break;default:hl(e,n)}}function tl(e){var t=e.alternate;t!==null&&(e.alternate=null,tl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&pt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nl=null,rl=!1;function il(e,t,n){for(n=n.child;n!==null;)al(e,t,n),n=n.sibling}function al(e,t,n){if(L&&typeof L.onCommitFiberUnmount==`function`)try{L.onCommitFiberUnmount(Ie,n)}catch{}switch(n.tag){case 26:Yc||Bc(n,t),il(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Yc||Bc(n,t);var r=nl,i=rl;Zd(n.type)&&(nl=n.stateNode,rl=!1),il(e,t,n),pf(n.stateNode),nl=r,rl=i;break;case 5:Yc||Bc(n,t);case 6:if(r=nl,i=rl,nl=null,il(e,t,n),nl=r,rl=i,nl!==null)if(rl)try{(nl.nodeType===9?nl.body:nl.nodeName===`HTML`?nl.ownerDocument.body:nl).removeChild(n.stateNode)}catch(e){Uu(n,t,e)}else try{nl.removeChild(n.stateNode)}catch(e){Uu(n,t,e)}break;case 18:nl!==null&&(rl?(e=nl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(nl,n.stateNode));break;case 4:r=nl,i=rl,nl=n.stateNode.containerInfo,rl=!0,il(e,t,n),nl=r,rl=i;break;case 0:case 11:case 14:case 15:Ic(2,n,t),Yc||Ic(4,n,t),il(e,t,n);break;case 1:Yc||(Bc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Rc(n,t,r)),il(e,t,n);break;case 21:il(e,t,n);break;case 22:Yc=(r=Yc)||n.memoizedState!==null,il(e,t,n),Yc=r;break;default:il(e,t,n)}}function ol(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){Uu(t,t.return,e)}}}function sl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){Uu(t,t.return,e)}}function cl(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Zc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Zc),t;default:throw Error(s(435,e.tag))}}function ll(e,t){var n=cl(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Ju.bind(null,e,t);t.then(r,r)}})}function ul(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r],a=e,o=t,c=o;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){nl=c.stateNode,rl=!1;break a}break;case 5:nl=c.stateNode,rl=!1;break a;case 3:case 4:nl=c.stateNode.containerInfo,rl=!0;break a}c=c.return}if(nl===null)throw Error(s(160));al(a,o,i),nl=null,rl=!1,a=i.alternate,a!==null&&(a.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)fl(t,e),t=t.sibling}var dl=null;function fl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ul(t,e),pl(e),r&4&&(Ic(3,e,e.return),Fc(3,e),Ic(5,e,e.return));break;case 1:ul(t,e),pl(e),r&512&&(Yc||n===null||Bc(n,n.return)),r&64&&Jc&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var i=dl;if(ul(t,e),pl(e),r&512&&(Yc||n===null||Bc(n,n.return)),r&4){var a=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;b:switch(r){case`title`:a=i.getElementsByTagName(`title`)[0],(!a||a[ft]||a[at]||a.namespaceURI===`http://www.w3.org/2000/svg`||a.hasAttribute(`itemprop`))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector(`head > title`))),Pd(a,r,n),a[at]=e,vt(a),r=a;break a;case`link`:var o=Vf(`link`,`href`,i).get(r+(n.href||``));if(o){for(var c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&a.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&a.getAttribute(`title`)===(n.title==null?null:n.title)&&a.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;case`meta`:if(o=Vf(`meta`,`content`,i).get(r+(n.content||``))){for(c=0;c<o.length;c++)if(a=o[c],a.getAttribute(`content`)===(n.content==null?null:``+n.content)&&a.getAttribute(`name`)===(n.name==null?null:n.name)&&a.getAttribute(`property`)===(n.property==null?null:n.property)&&a.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&a.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){o.splice(c,1);break b}}a=i.createElement(r),Pd(a,r,n),i.head.appendChild(a);break;default:throw Error(s(468,r))}a[at]=e,vt(a),r=a}e.stateNode=r}else Hf(i,e.type,e.stateNode);else e.stateNode=If(i,r,e.memoizedProps);else a===r?r===null&&e.stateNode!==null&&Hc(e,e.memoizedProps,n.memoizedProps):(a===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):a.count--,r===null?Hf(i,e.type,e.stateNode):If(i,r,e.memoizedProps))}break;case 27:ul(t,e),pl(e),r&512&&(Yc||n===null||Bc(n,n.return)),n!==null&&r&4&&Hc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(ul(t,e),pl(e),r&512&&(Yc||n===null||Bc(n,n.return)),e.flags&32){i=e.stateNode;try{Rt(i,``)}catch(t){Uu(e,e.return,t)}}r&4&&e.stateNode!=null&&(i=e.memoizedProps,Hc(e,i,n===null?i:n.memoizedProps)),r&1024&&(Xc=!0);break;case 6:if(ul(t,e),pl(e),r&4){if(e.stateNode===null)throw Error(s(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){Uu(e,e.return,t)}}break;case 3:if(Bf=null,i=dl,dl=gf(t.containerInfo),ul(t,e),dl=i,pl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){Uu(e,e.return,t)}Xc&&(Xc=!1,ml(e));break;case 4:r=dl,dl=gf(e.stateNode.containerInfo),ul(t,e),pl(e),dl=r;break;case 12:ul(t,e),pl(e);break;case 31:ul(t,e),pl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ll(e,r)));break;case 13:ul(t,e),pl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Zl=De()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ll(e,r)));break;case 22:i=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=Jc,d=Yc;if(Jc=u||i,Yc=d||l,ul(t,e),Yc=d,Jc=u,pl(e),r&8192)a:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||l||Jc||Yc||gl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(a=l.stateNode,i)o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){Uu(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=i?``:l.memoizedProps}catch(e){Uu(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;i?$d(m,!0):$d(l.stateNode,!1)}catch(e){Uu(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,ll(e,n))));break;case 19:ul(t,e),pl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,ll(e,r)));break;case 30:break;case 21:break;default:ul(t,e),pl(e)}}function pl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Uc(r)){n=r;break}r=r.return}if(n==null)throw Error(s(160));switch(n.tag){case 27:var i=n.stateNode;Kc(e,Wc(e),i);break;case 5:var a=n.stateNode;n.flags&32&&(Rt(a,``),n.flags&=-33),Kc(e,Wc(e),a);break;case 3:case 4:var o=n.stateNode.containerInfo;Gc(e,Wc(e),o);break;default:throw Error(s(161))}}catch(t){Uu(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ml(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ml(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function hl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)el(e,t.alternate,t),t=t.sibling}function gl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ic(4,t,t.return),gl(t);break;case 1:Bc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Rc(t,t.return,n),gl(t);break;case 27:pf(t.stateNode);case 26:case 5:Bc(t,t.return),gl(t);break;case 22:t.memoizedState===null&&gl(t);break;case 30:gl(t);break;default:gl(t)}e=e.sibling}}function _l(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:_l(i,a,n),Fc(4,a);break;case 1:if(_l(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){Uu(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ba(c[i],s)}catch(e){Uu(r,r.return,e)}}n&&o&64&&Lc(a),zc(a,a.return);break;case 27:qc(a);case 26:case 5:_l(i,a,n),n&&r===null&&o&4&&Vc(a),zc(a,a.return);break;case 12:_l(i,a,n);break;case 31:_l(i,a,n),n&&o&4&&ol(i,a);break;case 13:_l(i,a,n),n&&o&4&&sl(i,a);break;case 22:a.memoizedState===null&&_l(i,a,n),zc(a,a.return);break;case 30:break;default:_l(i,a,n)}t=t.sibling}}function vl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&$i(n))}function yl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e))}function bl(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)xl(e,t,n,r),t=t.sibling}function xl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:bl(e,t,n,r),i&2048&&Fc(9,t);break;case 1:bl(e,t,n,r);break;case 3:bl(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&$i(e)));break;case 12:if(i&2048){bl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){Uu(t,t.return,e)}}else bl(e,t,n,r);break;case 31:bl(e,t,n,r);break;case 13:bl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?bl(e,t,n,r):(a._visibility|=2,Sl(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?bl(e,t,n,r):Cl(e,t),i&2048&&vl(o,t);break;case 24:bl(e,t,n,r),i&2048&&yl(t.alternate,t);break;default:bl(e,t,n,r)}}function Sl(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Sl(a,o,s,c,i),Fc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Sl(a,o,s,c,i)):u._visibility&2?Sl(a,o,s,c,i):Cl(a,o),i&&l&2048&&vl(o.alternate,o);break;case 24:Sl(a,o,s,c,i),i&&l&2048&&yl(o.alternate,o);break;default:Sl(a,o,s,c,i)}t=t.sibling}}function Cl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Cl(n,r),i&2048&&vl(r.alternate,r);break;case 24:Cl(n,r),i&2048&&yl(r.alternate,r);break;default:Cl(n,r)}t=t.sibling}}var wl=8192;function Tl(e,t,n){if(e.subtreeFlags&wl)for(e=e.child;e!==null;)El(e,t,n),e=e.sibling}function El(e,t,n){switch(e.tag){case 26:Tl(e,t,n),e.flags&wl&&e.memoizedState!==null&&Gf(n,dl,e.memoizedState,e.memoizedProps);break;case 5:Tl(e,t,n);break;case 3:case 4:var r=dl;dl=gf(e.stateNode.containerInfo),Tl(e,t,n),dl=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=wl,wl=16777216,Tl(e,t,n),wl=r):Tl(e,t,n));break;default:Tl(e,t,n)}}function Dl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ol(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Qc=r,jl(r,e)}Dl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kl(e),e=e.sibling}function kl(e){switch(e.tag){case 0:case 11:case 15:Ol(e),e.flags&2048&&Ic(9,e,e.return);break;case 3:Ol(e);break;case 12:Ol(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Al(e)):Ol(e);break;default:Ol(e)}}function Al(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];Qc=r,jl(r,e)}Dl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ic(8,t,t.return),Al(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Al(t));break;default:Al(t)}e=e.sibling}}function jl(e,t){for(;Qc!==null;){var n=Qc;switch(n.tag){case 0:case 11:case 15:Ic(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:$i(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,Qc=r;else a:for(n=e;Qc!==null;){r=Qc;var i=r.sibling,a=r.return;if(tl(r),r===n){Qc=null;break a}if(i!==null){i.return=a,Qc=i;break a}Qc=a}}}var Ml={getCacheForType:function(e){var t=Gi(Zi),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Gi(Zi).controller.signal}},Nl=typeof WeakMap==`function`?WeakMap:Map,Pl=0,Fl=null,Z=null,Q=0,Il=0,Ll=null,Rl=!1,zl=!1,Bl=!1,Vl=0,Hl=0,Ul=0,Wl=0,Gl=0,Kl=0,ql=0,Jl=null,Yl=null,Xl=!1,Zl=0,Ql=0,$l=1/0,eu=null,tu=null,nu=0,ru=null,iu=null,au=0,ou=0,su=null,cu=null,lu=0,uu=null;function du(){return Pl&2&&Q!==0?Q&-Q:N.T===null?nt():ud()}function fu(){if(Kl===0)if(!(Q&536870912)||Y){var e=Ve;Ve<<=1,!(Ve&3932160)&&(Ve=262144),Kl=e}else Kl=536870912;return e=qa.current,e!==null&&(e.flags|=32),Kl}function pu(e,t,n){(e===Fl&&(Il===2||Il===9)||e.cancelPendingCommit!==null)&&(bu(e,0),_u(e,Q,Kl,!1)),Ye(e,n),(!(Pl&2)||e!==Fl)&&(e===Fl&&(!(Pl&2)&&(Wl|=n),Hl===4&&_u(e,Q,Kl,!1)),nd(e))}function mu(e,t,n){if(Pl&6)throw Error(s(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||Ge(e,t),i=r?Ou(e,t):Eu(e,t,!0),a=r;do{if(i===0){zl&&!r&&_u(e,t,0,!1);break}else{if(n=e.current.alternate,a&&!gu(n)){i=Eu(e,t,!1),a=!1;continue}if(i===2){if(a=t,e.errorRecoveryDisabledLanes&a)var o=0;else o=e.pendingLanes&-536870913,o=o===0?o&536870912?536870912:0:o;if(o!==0){t=o;a:{var c=e;i=Jl;var l=c.current.memoizedState.isDehydrated;if(l&&(bu(c,o).flags|=256),o=Eu(c,o,!1),o!==2){if(Bl&&!l){c.errorRecoveryDisabledLanes|=a,Wl|=a,i=4;break a}a=Yl,Yl=i,a!==null&&(Yl===null?Yl=a:Yl.push.apply(Yl,a))}i=o}if(a=!1,i!==2)continue}}if(i===1){bu(e,0),_u(e,t,0,!0);break}a:{switch(r=e,a=i,a){case 0:case 1:throw Error(s(345));case 4:if((t&4194048)!==t)break;case 6:_u(r,t,Kl,!Rl);break a;case 2:Yl=null;break;case 3:case 5:break;default:throw Error(s(329))}if((t&62914560)===t&&(i=Zl+300-De(),10<i)){if(_u(r,t,Kl,!Rl),We(r,0,!0)!==0)break a;au=t,r.timeoutHandle=Kd(hu.bind(null,r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,a,`Throttled`,-0,0),i);break a}hu(r,n,Yl,eu,Xl,t,Kl,Wl,ql,Rl,a,null,-0,0)}}break}while(1);nd(e)}function hu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wt},El(t,a,d);var m=(a&62914560)===a?Zl-De():(a&4194048)===a?Ql-De():0;if(m=qf(d,m),m!==null){au=a,e.cancelPendingCommit=m(Fu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),_u(e,a,o,!l);return}}Fu(e,t,a,n,r,i,o,s,c)}function gu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!fr(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function _u(e,t,n,r){t&=~Gl,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-z(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&Ze(e,n,t)}function vu(){return Pl&6?!0:(rd(0,!1),!1)}function yu(){if(Z!==null){if(Il===0)var e=Z.return;else e=Z,Li=Ii=null,xo(e),Sa=null,Ca=0,e=Z;for(;e!==null;)Pc(e.alternate,e),e=e.return;Z=null}}function bu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),au=0,yu(),Fl=e,Z=n=ei(e.current,null),Q=t,Il=0,Ll=null,Rl=!1,zl=Ge(e,t),Bl=!1,ql=Kl=Gl=Wl=Ul=Hl=0,Yl=Jl=null,Xl=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-z(r),a=1<<i;t|=e[i],r&=~a}return Vl=t,Wr(),n}function xu(e,t){X=null,N.H=js,t===fa||t===ma?(t=ba(),Il=3):t===pa?(t=ba(),Il=4):Il=t===Ys?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Ll=t,Z===null&&(Hl=1,Us(e,ci(t,e.current)))}function Su(){var e=qa.current;return e===null?!0:(Q&4194048)===Q?Ja===null:(Q&62914560)===Q||Q&536870912?e===Ja:!1}function Cu(){var e=N.H;return N.H=js,e===null?js:e}function wu(){var e=N.A;return N.A=Ml,e}function Tu(){Hl=4,Rl||(Q&4194048)!==Q&&qa.current!==null||(zl=!0),!(Ul&134217727)&&!(Wl&134217727)||Fl===null||_u(Fl,Q,Kl,!1)}function Eu(e,t,n){var r=Pl;Pl|=2;var i=Cu(),a=wu();(Fl!==e||Q!==t)&&(eu=null,bu(e,t)),t=!1;var o=Hl;a:do try{if(Il!==0&&Z!==null){var s=Z,c=Ll;switch(Il){case 8:yu(),o=6;break a;case 3:case 2:case 9:case 6:qa.current===null&&(t=!0);var l=Il;if(Il=0,Ll=null,Mu(e,s,c,l),n&&zl){o=0;break a}break;default:l=Il,Il=0,Ll=null,Mu(e,s,c,l)}}Du(),o=Hl;break}catch(t){xu(e,t)}while(1);return t&&e.shellSuspendCounter++,Li=Ii=null,Pl=r,N.H=i,N.A=a,Z===null&&(Fl=null,Q=0,Wr()),o}function Du(){for(;Z!==null;)Au(Z)}function Ou(e,t){var n=Pl;Pl|=2;var r=Cu(),i=wu();Fl!==e||Q!==t?(eu=null,$l=De()+500,bu(e,t)):zl=Ge(e,t);a:do try{if(Il!==0&&Z!==null){t=Z;var a=Ll;b:switch(Il){case 1:Il=0,Ll=null,Mu(e,t,a,1);break;case 2:case 9:if(ga(a)){Il=0,Ll=null,ju(t);break}t=function(){Il!==2&&Il!==9||Fl!==e||(Il=7),nd(e)},a.then(t,t);break a;case 3:Il=7;break a;case 4:Il=5;break a;case 7:ga(a)?(Il=0,Ll=null,ju(t)):(Il=0,Ll=null,Mu(e,t,a,7));break;case 5:var o=null;switch(Z.tag){case 26:o=Z.memoizedState;case 5:case 27:var c=Z;if(o?Wf(o):c.stateNode.complete){Il=0,Ll=null;var l=c.sibling;if(l!==null)Z=l;else{var u=c.return;u===null?Z=null:(Z=u,Nu(u))}break b}}Il=0,Ll=null,Mu(e,t,a,5);break;case 6:Il=0,Ll=null,Mu(e,t,a,6);break;case 8:yu(),Hl=6;break a;default:throw Error(s(462))}}ku();break}catch(t){xu(e,t)}while(1);return Li=Ii=null,N.H=r,N.A=i,Pl=n,Z===null?(Fl=null,Q=0,Wr(),Hl):0}function ku(){for(;Z!==null&&!Te();)Au(Z)}function Au(e){var t=Tc(e.alternate,e,Vl);e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function ju(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=lc(n,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=lc(n,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:xo(t);default:Pc(n,t),t=Z=ti(t,Vl),t=Tc(n,t,Vl)}e.memoizedProps=e.pendingProps,t===null?Nu(e):Z=t}function Mu(e,t,n,r){Li=Ii=null,xo(t),Sa=null,Ca=0;var i=t.return;try{if(Js(e,i,t,n,Q)){Hl=1,Us(e,ci(n,e.current)),Z=null;return}}catch(t){if(i!==null)throw Z=i,t;Hl=1,Us(e,ci(n,e.current)),Z=null;return}t.flags&32768?(Y||r===1?e=!0:zl||Q&536870912?e=!1:(Rl=e=!0,(r===2||r===9||r===3||r===6)&&(r=qa.current,r!==null&&r.tag===13&&(r.flags|=16384))),Pu(t,e)):Nu(t)}function Nu(e){var t=e;do{if(t.flags&32768){Pu(t,Rl);return}e=t.return;var n=Mc(t.alternate,t,Vl);if(n!==null){Z=n;return}if(t=t.sibling,t!==null){Z=t;return}Z=t=e}while(t!==null);Hl===0&&(Hl=5)}function Pu(e,t){do{var n=Nc(e.alternate,e);if(n!==null){n.flags&=32767,Z=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){Z=e;return}Z=e=n}while(e!==null);Hl=6,Z=null}function Fu(e,t,n,r,i,a,o,c,l){e.cancelPendingCommit=null;do Bu();while(nu!==0);if(Pl&6)throw Error(s(327));if(t!==null){if(t===e.current)throw Error(s(177));if(a=t.lanes|t.childLanes,a|=Ur,Xe(e,n,a,o,c,l),e===Fl&&(Z=Fl=null,Q=0),iu=t,ru=e,au=n,ou=a,su=i,cu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Yu(je,function(){return Vu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=N.T,N.T=null,i=P.p,P.p=2,o=Pl,Pl|=4;try{$c(e,t,n)}finally{Pl=o,P.p=i,N.T=r}}nu=1,Iu(),Lu(),Ru()}}function Iu(){if(nu===1){nu=0;var e=ru,t=iu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=N.T,N.T=null;var r=P.p;P.p=2;var i=Pl;Pl|=4;try{fl(t,e);var a=zd,o=_r(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&gr(s.ownerDocument.documentElement,s)){if(c!==null&&vr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=hr(s,h),v=hr(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{Pl=i,P.p=r,N.T=n}}e.current=t,nu=2}}function Lu(){if(nu===2){nu=0;var e=ru,t=iu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=N.T,N.T=null;var r=P.p;P.p=2;var i=Pl;Pl|=4;try{el(e,t.alternate,t)}finally{Pl=i,P.p=r,N.T=n}}nu=3}}function Ru(){if(nu===4||nu===3){nu=0,Ee();var e=ru,t=iu,n=au,r=cu;t.subtreeFlags&10256||t.flags&10256?nu=5:(nu=0,iu=ru=null,zu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(tu=null),tt(n),t=t.stateNode,L&&typeof L.onCommitFiberRoot==`function`)try{L.onCommitFiberRoot(Ie,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=N.T,i=P.p,P.p=2,N.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{N.T=t,P.p=i}}au&3&&Bu(),nd(e),i=e.pendingLanes,n&261930&&i&42?e===uu?lu++:(lu=0,uu=e):lu=0,rd(0,!1)}}function zu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,$i(t)))}function Bu(){return Iu(),Lu(),Ru(),Vu()}function Vu(){if(nu!==5)return!1;var e=ru,t=ou;ou=0;var n=tt(au),r=N.T,i=P.p;try{P.p=32>n?32:n,N.T=null,n=su,su=null;var a=ru,o=au;if(nu=0,iu=ru=null,au=0,Pl&6)throw Error(s(331));var c=Pl;if(Pl|=4,kl(a.current),xl(a,a.current,o,n),Pl=c,rd(0,!1),L&&typeof L.onPostCommitFiberRoot==`function`)try{L.onPostCommitFiberRoot(Ie,a)}catch{}return!0}finally{P.p=i,N.T=r,zu(e,t)}}function Hu(e,t,n){t=ci(n,t),t=Gs(e.stateNode,t,2),e=Pa(e,t,2),e!==null&&(Ye(e,2),nd(e))}function Uu(e,t,n){if(e.tag===3)Hu(e,e,n);else for(;t!==null;){if(t.tag===3){Hu(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(tu===null||!tu.has(r))){e=ci(n,e),n=Ks(2),r=Pa(t,n,2),r!==null&&(qs(n,r,t,e),Ye(r,2),nd(r));break}}t=t.return}}function Wu(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Nl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Bl=!0,i.add(n),e=Gu.bind(null,e,t,n),t.then(e,e))}function Gu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Fl===e&&(Q&n)===n&&(Hl===4||Hl===3&&(Q&62914560)===Q&&300>De()-Zl?!(Pl&2)&&bu(e,0):Gl|=n,ql===Q&&(ql=0)),nd(e)}function Ku(e,t){t===0&&(t=qe()),e=qr(e,t),e!==null&&(Ye(e,t),nd(e))}function qu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ku(e,n)}function Ju(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(t),Ku(e,n)}function Yu(e,t){return we(e,t)}var Xu=null,Zu=null,Qu=!1,$u=!1,ed=!1,td=0;function nd(e){e!==Zu&&e.next===null&&(Zu===null?Xu=Zu=e:Zu=Zu.next=e),$u=!0,Qu||(Qu=!0,ld())}function rd(e,t){if(!ed&&$u){ed=!0;do for(var n=!1,r=Xu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-z(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,cd(r,a))}else a=Q,a=We(r,r===Fl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||Ge(r,a)||(n=!0,cd(r,a));r=r.next}while(n);ed=!1}}function id(){ad()}function ad(){$u=Qu=!1;var e=0;td!==0&&Gd()&&(e=td);for(var t=De(),n=null,r=Xu;r!==null;){var i=r.next,a=od(r,t);a===0?(r.next=null,n===null?Xu=i:n.next=i,i===null&&(Zu=n)):(n=r,(e!==0||a&3)&&($u=!0)),r=i}nu!==0&&nu!==5||rd(e,!1),td!==0&&(td=0)}function od(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-z(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ke(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=Fl,n=Q,n=We(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Il===2||Il===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&I(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ge(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&I(r),tt(n)){case 2:case 8:n=Ae;break;case 32:n=je;break;case 268435456:n=Ne;break;default:n=je}return r=sd.bind(null,e),n=we(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&I(r),e.callbackPriority=2,e.callbackNode=null,2}function sd(e,t){if(nu!==0&&nu!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Bu()&&e.callbackNode!==n)return null;var r=Q;return r=We(e,e===Fl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(mu(e,r,t),od(e,De()),e.callbackNode!=null&&e.callbackNode===n?sd.bind(null,e):null)}function cd(e,t){if(Bu())return null;mu(e,t,!0)}function ld(){Yd(function(){Pl&6?we(ke,id):ad()})}function ud(){if(td===0){var e=na;e===0&&(e=Be,Be<<=1,!(Be&261888)&&(Be=256)),td=e}return td}function dd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:Ut(``+e)}function fd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function pd(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=dd((i[ot]||null).action),o=r.submitter;o&&(t=(t=o[ot]||null)?dd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new fn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(td!==0){var e=o?fd(i,o):new FormData(i);_s(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?fd(i,o):new FormData(i),_s(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var md=0;md<Rr.length;md++){var hd=Rr[md];zr(hd.toLowerCase(),`on`+(hd[0].toUpperCase()+hd.slice(1)))}zr(Ar,`onAnimationEnd`),zr(jr,`onAnimationIteration`),zr(Mr,`onAnimationStart`),zr(`dblclick`,`onDoubleClick`),zr(`focusin`,`onFocus`),zr(`focusout`,`onBlur`),zr(Nr,`onTransitionRun`),zr(Pr,`onTransitionStart`),zr(Fr,`onTransitionCancel`),zr(Ir,`onTransitionEnd`),St(`onMouseEnter`,[`mouseout`,`mouseover`]),St(`onMouseLeave`,[`mouseout`,`mouseover`]),St(`onPointerEnter`,[`pointerout`,`pointerover`]),St(`onPointerLeave`,[`pointerout`,`pointerover`]),xt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),xt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),xt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),xt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),xt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Br(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Br(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[ct];n===void 0&&(n=t[ct]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,yt.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!en||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=mt(s),o===null)return;if(c=o.tag,c===5||c===6||c===26||c===27){r=a=o;continue a}s=s.parentNode}}r=r.return}Zt(function(){var r=a,i=Kt(n),o=[];a:{var s=Lr.get(e);if(s!==void 0){var c=fn,u=e;switch(e){case`keypress`:if(sn(n)===0)break a;case`keydown`:case`keyup`:c=An;break;case`focusin`:u=`focus`,c=xn;break;case`focusout`:u=`blur`,c=xn;break;case`beforeblur`:case`afterblur`:c=xn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=yn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=bn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=Mn;break;case Ar:case jr:case Mr:c=Sn;break;case Ir:c=Nn;break;case`scroll`:case`scrollend`:c=mn;break;case`wheel`:c=Pn;break;case`copy`:case`cut`:case`paste`:c=Cn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=jn;break;case`toggle`:case`beforetoggle`:c=Fn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?s===null?null:s+`Capture`:s;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=Qt(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Gt&&(u=n.relatedTarget||n.fromElement)&&(mt(u)||u[st]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(u=n.relatedTarget||n.toElement,c=r,u=u?mt(u):null,u!==null&&(f=l(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(c=null,u=r),c!==u)){if(d=yn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=jn,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=c==null?s:gt(c),h=u==null?s:gt(u),s=new d(g,m+`leave`,c,n,i),s.target=f,s.relatedTarget=h,g=null,mt(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,c&&u)b:{for(d=Ed,p=c,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;c!==null&&Dd(o,s,c,d,!1),u!==null&&f!==null&&Dd(o,f,u,d,!0)}}a:{if(s=r?gt(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var v=er;else if(Yn(s))if(tr)v=ur;else{v=cr;var y=sr}else c=s.nodeName,!c||c.toLowerCase()!==`input`||s.type!==`checkbox`&&s.type!==`radio`?r&&Bt(r.elementType)&&(v=er):v=lr;if(v&&=v(e,r)){Xn(o,v,n,i);break a}y&&y(e,s,r),e===`focusout`&&r&&s.type===`number`&&r.memoizedProps.value!=null&&Ft(s,`number`,s.value)}switch(y=r?gt(r):window,e){case`focusin`:(Yn(y)||y.contentEditable===`true`)&&(br=y,xr=r,Sr=null);break;case`focusout`:Sr=xr=br=null;break;case`mousedown`:Cr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Cr=!1,wr(o,n,i);break;case`selectionchange`:if(yr)break;case`keydown`:case`keyup`:wr(o,n,i)}var b;if(Ln)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else Gn?Un(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Bn&&n.locale!==`ko`&&(Gn||x!==`onCompositionStart`?x===`onCompositionEnd`&&Gn&&(b=on()):(nn=i,rn=`value`in nn?nn.value:nn.textContent,Gn=!0)),y=Td(r,x),0<y.length&&(x=new wn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:(b=Wn(n),b!==null&&(x.data=b)))),(b=zn?Kn(e,n):qn(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new wn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:y,listeners:x}),y.data=b)),pd(o,e,r,n,i)}vd(o,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=Qt(e,n),i!=null&&r.unshift(wd(e,i,a)),i=Qt(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=Qt(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=Qt(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,i,a){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Rt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Rt(e,``+r);break;case`className`:H(e,`class`,r);break;case`tabIndex`:H(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:H(e,n,r);break;case`style`:q(e,r,a);break;case`data`:if(t!==`object`){H(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Ut(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof a==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,i.name,i,null),Md(e,t,`formEncType`,i.formEncType,i,null),Md(e,t,`formMethod`,i.formMethod,i,null),Md(e,t,`formTarget`,i.formTarget,i,null)):(Md(e,t,`encType`,i.encType,i,null),Md(e,t,`method`,i.method,i,null),Md(e,t,`target`,i.target,i,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=Ut(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=Wt);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=Ut(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Tt(e,`popover`,r);break;case`xlinkActuate`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Et(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Et(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Et(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Et(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Tt(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=Vt.get(n)||n,Tt(e,n,r))}}function Nd(e,t,n,r,i,a){switch(n){case`style`:q(e,r,a);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(s(61));if(n=r.__html,n!=null){if(i.children!=null)throw Error(s(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Rt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Rt(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=Wt);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!bt.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(i=n.endsWith(`Capture`),t=n.slice(2,i?n.length-7:void 0),a=e[ot]||null,a=a==null?null:a[n],typeof a==`function`&&e.removeEventListener(t,a,i),typeof r==`function`)){typeof a!=`function`&&a!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Tt(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,i=!1,a;for(a in n)if(n.hasOwnProperty(a)){var o=n[a];if(o!=null)switch(a){case`src`:r=!0;break;case`srcSet`:i=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:Md(e,t,a,o,n,null)}}i&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=a=o=i=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:i=d;break;case`type`:o=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:a=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(s(137,t));break;default:Md(e,t,r,d,n,null)}}Pt(e,a,c,l,u,o,i,!1);return;case`select`:for(i in $(`invalid`,e),r=o=a=null,n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case`value`:a=c;break;case`defaultValue`:o=c;break;case`multiple`:r=c;default:Md(e,t,i,c,n,null)}t=a,n=o,e.multiple=!!r,t==null?n!=null&&It(e,!!r,n,!0):It(e,!!r,t,!1);return;case`textarea`:for(o in $(`invalid`,e),a=i=r=null,n)if(n.hasOwnProperty(o)&&(c=n[o],c!=null))switch(o){case`value`:r=c;break;case`defaultValue`:i=c;break;case`children`:a=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(s(91));break;default:Md(e,t,o,c,n,null)}G(e,r,i,a);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(s(137,t));default:Md(e,t,u,r,n,null)}return;default:if(Bt(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var i=null,a=null,o=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:a=m;break;case`name`:i=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:o=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(s(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}Nt(e,o,c,l,u,d,a,i);return;case`select`:for(a in m=o=c=p=null,n)if(l=n[a],n.hasOwnProperty(a)&&l!=null)switch(a){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(a)||Md(e,t,a,null,r,l)}for(i in r)if(a=r[i],l=n[i],r.hasOwnProperty(i)&&(a!=null||l!=null))switch(i){case`value`:p=a;break;case`defaultValue`:c=a;break;case`multiple`:o=a;default:a!==l&&Md(e,t,i,a,r,l)}t=c,n=o,r=m,p==null?!!r!=!!n&&(t==null?It(e,!!n,n?[]:``,!1):It(e,!!n,t,!0)):It(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,i)}for(o in r)if(i=r[o],a=n[o],r.hasOwnProperty(o)&&(i!=null||a!=null))switch(o){case`value`:p=i;break;case`defaultValue`:m=i;break;case`children`:break;case`dangerouslySetInnerHTML`:if(i!=null)throw Error(s(91));break;default:i!==a&&Md(e,t,o,i,r,a)}Lt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(s(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if(Bt(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[ft]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),pt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[ft])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(s(452));return e;case`head`:if(e=t.head,!e)throw Error(s(453));return e;case`body`:if(e=t.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);pt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=P.d;P.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=vu();return e||t}function yf(e){var t=ht(e);t!==null&&t.tag===5&&t.type===`form`?ys(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Mt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),vt(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Mt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Mt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Mt(n.imageSizes)+`"]`)):i+=`[href="`+Mt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),vt(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Mt(r)+`"][href="`+Mt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),vt(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=_t(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);vt(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=_t(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),vt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=_t(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),vt(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var i=(i=ue.current)?gf(i):null;if(!i)throw Error(s(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=_t(i).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var a=_t(i).hoistableStyles,o=a.get(e);if(o||(i=i.ownerDocument||i,o={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},a.set(e,o),(a=i.querySelector(jf(e)))&&!a._p&&(o.instance=a,o.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),a||Nf(i,e,n,o.state))),t&&r===null)throw Error(s(528,``));return o}if(t&&r!==null)throw Error(s(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=_t(i).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Af(e){return`href="`+Mt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),vt(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Mt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Mt(n.href)+`"]`);if(r)return t.instance=r,vt(r),r;var i=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),vt(r),Pd(r,`style`,i),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:i=Af(n.href);var a=e.querySelector(jf(i));if(a)return t.state.loading|=4,t.instance=a,vt(a),a;r=Mf(n),(i=mf.get(i))&&Rf(r,i),a=(e.ownerDocument||e).createElement(`link`),vt(a);var o=a;return o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),t.state.loading|=4,Lf(a,n.precedence,e),t.instance=a;case`script`:return a=Pf(n.src),(i=e.querySelector(Ff(a)))?(t.instance=i,vt(i),i):(r=n,(i=mf.get(a))&&(r=h({},n),zf(r,i)),e=e.ownerDocument||e,i=e.createElement(`script`),vt(i),Pd(i,`link`,r),e.head.appendChild(i),t.instance=i);case`void`:return null;default:throw Error(s(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[ft]||a[at]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,vt(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),vt(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Je(0),this.hiddenUpdates=Je(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=Qr(3,null,null,t),e.current=a,a.stateNode=e,t=Qi(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},ja(a),e}function tp(e){return e?(e=Xr,e):Xr}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=Na(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Pa(e,r,t),n!==null&&(pu(n,e,t),Fa(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=qr(e,67108864);t!==null&&pu(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=du();t=et(t);var n=qr(e,t);n!==null&&pu(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=N.T;N.T=null;var a=P.p;try{P.p=2,up(e,t,n,r)}finally{P.p=a,N.T=i}}function lp(e,t,n,r){var i=N.T;N.T=null;var a=P.p;try{P.p=8,up(e,t,n,r)}finally{P.p=a,N.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=ht(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Ue(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-z(o);s.entanglements[1]|=c,o&=~c}nd(a),!(Pl&6)&&($l=De()+500,rd(0,!1))}}break;case 31:case 13:s=qr(a,2),s!==null&&pu(s,a,2),vu(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=Kt(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=mt(e),e!==null){var t=l(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=u(t),e!==null)return e;e=null}else if(n===31){if(e=d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Oe()){case ke:return 2;case Ae:return 8;case je:case Me:return 32;case Ne:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=ht(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=mt(e.target);if(t!==null){var n=l(t);if(n!==null){if(t=n.tag,t===13){if(t=u(n),t!==null){e.blockedOn=t,rt(e.priority,function(){op(n)});return}}else if(t===31){if(t=d(n),t!==null){e.blockedOn=t,rt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Gt=r,n.target.dispatchEvent(r),Gt=null}else return t=ht(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=ht(n);a!==null&&(e.splice(t,3),t-=3,_s(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[ot]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[ot]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));var n=t.current;np(n,du(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),vu(),t[st]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=nt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=r.version;if(Lp!==`19.2.6`)throw Error(s(527,Lp,`19.2.6`));P.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(s(188)):(e=Object.keys(e).join(`,`),Error(s(268,e)));return e=p(t),e=e===null?null:m(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.6`,rendererPackageName:`react-dom`,currentDispatcherRef:N,reconcilerVersion:`19.2.6`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{Ie=zp.inject(Rp),L=zp}catch{}}e.createRoot=function(e,t){if(!c(e))throw Error(s(299));var n=!1,r=``,i=Bs,a=Vs,o=Hs;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(a=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,i,a,o,Pp),e[st]=t.current,xd(e),new Fp(t)}})),c=e(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=s()})),l=i(),u=c(),d=`english-workbench-quiz-draft-v1`;function f(e){return e.answers.length>0&&e.answers.every(e=>typeof e==`number`||typeof e==`string`&&e.trim().length>0)}function p(e){return f(e)&&e.answers.every((t,n)=>{if(typeof t==`number`||e.automaticText?.[n]===!0)return!0;let r=e.criteriaChecks?.[n];return Array.isArray(r)&&r.length>0&&r.every(e=>typeof e==`boolean`)})}function m(e){if(!e)return null;try{let t=JSON.parse(e);return t.version!==1||typeof t.id!=`string`||!t.id||!t.ref||typeof t.ref.id!=`string`||typeof t.ref.title!=`string`||![`verification`,`review`].includes(t.mode)||![`answer`,`explain`,`rating`].includes(t.stage)||typeof t.questionSignature!=`string`||!Array.isArray(t.questionIds)||!t.questionIds.length||t.questionIds.length>100||!t.questionIds.every(e=>typeof e==`string`)||!Array.isArray(t.answers)||t.answers.length!==t.questionIds.length||!t.answers.every(e=>e===null||Number.isInteger(e)&&Number(e)>=0||typeof e==`string`&&e.length<=2e3)||t.automaticText!==void 0&&(!Array.isArray(t.automaticText)||t.automaticText.length!==t.questionIds.length||!t.automaticText.every(e=>typeof e==`boolean`))||t.criteriaChecks!==void 0&&(!Array.isArray(t.criteriaChecks)||t.criteriaChecks.length!==t.questionIds.length||!t.criteriaChecks.every(e=>e===null||Array.isArray(e)&&e.length<=100&&e.every(e=>e===null||typeof e==`boolean`)))||!Number.isInteger(t.step)||t.step<0||t.step>=t.questionIds.length||t.stage!==`answer`&&!f(t)||t.stage===`rating`&&!p(t)?null:t}catch{return null}}function h(e){return JSON.stringify(e.questions.slice(0,e.verificationSize))}function g(e,t){let n=t.questions.slice(0,t.verificationSize);return e.questionSignature===h(t)&&e.ref.id===t.id&&n.length===t.verificationSize&&n.length===e.questionIds.length&&n.length===e.answers.length&&(e.criteriaChecks===void 0||e.criteriaChecks.length===n.length)&&n.every((t,n)=>{if(t.id!==e.questionIds[n])return!1;let r=e.answers[n],i=e.criteriaChecks?.[n];return t.format===`input`?(r===null||typeof r==`string`&&r.length<=2e3)&&e.automaticText?.[n]===!0&&i==null:e.automaticText?.[n]===!0?!1:t.format===`text`?(r===null||typeof r==`string`&&r.length<=2e3)&&!!t.criteria?.length&&Array.isArray(i)&&i.length===t.criteria.length&&i.every(e=>e===null||typeof e==`boolean`):(r===null||typeof r==`number`&&Number.isInteger(r)&&r>=0&&r<t.choices.length)&&i==null})&&(e.stage===`answer`||f(e))&&(e.stage!==`rating`||p(e))}function _(e,t){if(typeof window>`u`)return t;try{let n=sessionStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function v(e,t){try{return sessionStorage.setItem(e,JSON.stringify(t)),!0}catch{return!1}}function y(){if(typeof window>`u`)return null;try{return m(sessionStorage.getItem(d))}catch{return null}}function b(){try{sessionStorage.removeItem(d)}catch{}}function x(e,t){let[n,r]=(0,l.useState)(()=>{let n=_(e,t);if(typeof t==`object`&&t){if(!n||typeof n!=`object`||Array.isArray(n))return t;for(let[e,r]of Object.entries(t))if(typeof n[e]!=typeof r)return t}else if(typeof n!=typeof t)return t;return n});return(0,l.useEffect)(()=>{v(e,n)},[e,n]),[n,r]}var S=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),C=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),w=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),T=e=>{let t=w(e);return t.charAt(0).toUpperCase()+t.slice(1)},E={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},D=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},O=(0,l.createContext)({}),k=()=>(0,l.useContext)(O),A=(0,l.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:r,className:i=``,children:a,iconNode:o,...s},c)=>{let{size:u=24,strokeWidth:d=2,absoluteStrokeWidth:f=!1,color:p=`currentColor`,className:m=``}=k()??{},h=r??f?Number(n??d)*24/Number(t??u):n??d;return(0,l.createElement)(`svg`,{ref:c,...E,width:t??u??E.width,height:t??u??E.height,stroke:e??p,strokeWidth:h,className:S(`lucide`,m,i),...!a&&!D(s)&&{"aria-hidden":`true`},...s},[...o.map(([e,t])=>(0,l.createElement)(e,t)),...Array.isArray(a)?a:[a]])}),j=(e,t)=>{let n=(0,l.forwardRef)(({className:n,...r},i)=>(0,l.createElement)(A,{ref:i,iconNode:t,className:S(`lucide-${C(T(e))}`,`lucide-${e}`,n),...r}));return n.displayName=T(e),n},ee=j(`arrow-down-right`,[[`path`,{d:`m7 7 10 10`,key:`1fmybs`}],[`path`,{d:`M17 7v10H7`,key:`6fjiku`}]]),te=j(`arrow-left`,[[`path`,{d:`m12 19-7-7 7-7`,key:`1l729n`}],[`path`,{d:`M19 12H5`,key:`x3x0zl`}]]),M=j(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),ne=j(`book-open`,[[`path`,{d:`M12 5v16`,key:`1f6ucr`}],[`path`,{d:`M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z`,key:`1fyvmf`}]]),N=j(`bookmark`,[[`path`,{d:`M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z`,key:`oz39mx`}]]),P=j(`calendar-clock`,[[`path`,{d:`M16 14v2.2l1.6 1`,key:`fo4ql5`}],[`path`,{d:`M16 2v3`,key:`otl347`}],[`path`,{d:`M21 7.338V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h2.338`,key:`7hb8p4`}],[`path`,{d:`M3 9h5.859`,key:`numkqi`}],[`path`,{d:`M8 2v3`,key:`1ioesn`}],[`circle`,{cx:`16`,cy:`16`,r:`6`,key:`qoo3c4`}]]),re=j(`check`,[[`path`,{d:`M20 6 9 17l-5-5`,key:`1gmf2c`}]]),ie=j(`chevron-down`,[[`path`,{d:`m6 9 6 6 6-6`,key:`qrunsl`}]]),ae=j(`chevron-left`,[[`path`,{d:`m15 18-6-6 6-6`,key:`1wnfg3`}]]),oe=j(`chevron-right`,[[`path`,{d:`m9 18 6-6-6-6`,key:`mthhwq`}]]),se=j(`circle-question-mark`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}],[`path`,{d:`M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3`,key:`1u773s`}],[`path`,{d:`M12 17h.01`,key:`p32p05`}]]),F=j(`circle`,[[`circle`,{cx:`12`,cy:`12`,r:`10`,key:`1mglay`}]]),ce=j(`database`,[[`ellipse`,{cx:`12`,cy:`5`,rx:`9`,ry:`3`,key:`msslwz`}],[`path`,{d:`M3 5V19A9 3 0 0 0 21 19V5`,key:`1wlel7`}],[`path`,{d:`M3 12A9 3 0 0 0 21 12`,key:`mv7ke4`}]]),le=j(`download`,[[`path`,{d:`M12 15V3`,key:`m9g1x1`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}],[`path`,{d:`m7 10 5 5 5-5`,key:`brsn70`}]]),ue=j(`ellipsis`,[[`circle`,{cx:`12`,cy:`12`,r:`1`,key:`41hilf`}],[`circle`,{cx:`19`,cy:`12`,r:`1`,key:`1wjl8i`}],[`circle`,{cx:`5`,cy:`12`,r:`1`,key:`1pcz8c`}]]),de=j(`external-link`,[[`path`,{d:`M15 3h6v6`,key:`1q9fwt`}],[`path`,{d:`M10 14 21 3`,key:`gplh6r`}],[`path`,{d:`M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,key:`a6xqqp`}]]),fe=j(`file-text`,[[`path`,{d:`M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z`,key:`1oefj6`}],[`path`,{d:`M14 2v5a1 1 0 0 0 1 1h5`,key:`wfsgrz`}],[`path`,{d:`M10 9H8`,key:`b1mrlr`}],[`path`,{d:`M16 13H8`,key:`t4e002`}],[`path`,{d:`M16 17H8`,key:`z1uh3a`}]]),pe=j(`flag`,[[`path`,{d:`M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528`,key:`1jaruq`}]]),me=j(`graduation-cap`,[[`path`,{d:`M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z`,key:`j76jl0`}],[`path`,{d:`M22 10v6`,key:`1lu8f3`}],[`path`,{d:`M6 12.5V16a6 3 0 0 0 12 0v-3.5`,key:`1r8lef`}]]),he=j(`house`,[[`path`,{d:`M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`,key:`5wwlr5`}],[`path`,{d:`M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,key:`r6nss1`}]]),ge=j(`notebook-pen`,[[`path`,{d:`M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4`,key:`re6nr2`}],[`path`,{d:`M2 6h4`,key:`aawbzj`}],[`path`,{d:`M2 10h4`,key:`l0bgd4`}],[`path`,{d:`M2 14h4`,key:`1gsvsf`}],[`path`,{d:`M2 18h4`,key:`1bu2t1`}],[`path`,{d:`M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z`,key:`pqwjuv`}]]),_e=j(`panel-left-close`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`m16 15-3-3 3-3`,key:`14y99z`}]]),ve=j(`panel-left-open`,[[`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,key:`afitv7`}],[`path`,{d:`M9 3v18`,key:`fh3hqa`}],[`path`,{d:`m14 9 3 3-3 3`,key:`8010ee`}]]),ye=j(`search`,[[`path`,{d:`m21 21-4.34-4.34`,key:`14j7rj`}],[`circle`,{cx:`11`,cy:`11`,r:`8`,key:`4ej97u`}]]),be=j(`settings`,[[`path`,{d:`M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,key:`1i5ecw`}],[`circle`,{cx:`12`,cy:`12`,r:`3`,key:`1v7zrd`}]]),xe=j(`upload`,[[`path`,{d:`M12 3v12`,key:`1x0j5s`}],[`path`,{d:`m17 8-5-5-5 5`,key:`7q97r8`}],[`path`,{d:`M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4`,key:`ih7n3h`}]]),Se=j(`volume-2`,[[`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,key:`uqj9uw`}],[`path`,{d:`M16 9a5 5 0 0 1 0 6`,key:`1q6k2b`}],[`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`,key:`ijwkga`}]]),Ce=j(`x`,[[`path`,{d:`M18 6 6 18`,key:`1bl5f8`}],[`path`,{d:`m6 6 12 12`,key:`d8bk6v`}]]),we=e((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),I=e(((e,t)=>{t.exports=we()}))(),Te=[[`high-school`,`高中`],[`cet4`,`四级`],[`cet6`,`六级`]],Ee={"high-school":`高中英语`,cet4:`大学四级`,cet6:`大学六级`};function De({level:e,disabled:t,onChange:n}){return(0,I.jsxs)(`div`,{className:`goal-selector`,children:[(0,I.jsxs)(`p`,{className:`goal-current`,"aria-live":`polite`,children:[`当前目标：`,(0,I.jsx)(`strong`,{children:Ee[e]})]}),(0,I.jsx)(`div`,{className:`goal-picker`,role:`group`,"aria-label":`切换学习目标`,children:Te.map(([r,i])=>(0,I.jsxs)(`button`,{disabled:t,className:e===r?`is-selected`:``,"aria-pressed":e===r,onClick:()=>n(r),children:[(0,I.jsx)(re,{size:13,className:`goal-check`,"aria-hidden":`true`}),i]},r))})]})}var Oe={"high-school":`高中英语`,cet4:`大学四级`,cet6:`大学六级`};function ke({detail:e,level:t,ready:n,onBack:r,onLevel:i}){let a=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=e=>{a.current?.open&&!a.current.contains(e.target)&&(a.current.open=!1)};return document.addEventListener(`pointerdown`,e),()=>document.removeEventListener(`pointerdown`,e)},[]),(0,I.jsx)(`header`,{className:`mobile-header`,children:(0,I.jsxs)(`div`,{className:`mobile-header-row`,children:[e?(0,I.jsx)(`button`,{className:`mobile-icon`,"aria-label":`返回上一页`,onClick:r,children:(0,I.jsx)(te,{size:21})}):(0,I.jsx)(`span`,{className:`mobile-logo`,"aria-hidden":`true`,children:(0,I.jsx)(ne,{size:21})}),(0,I.jsx)(`strong`,{children:e?`专注学习`:`英语学习工作台`}),!e&&(0,I.jsxs)(`details`,{ref:a,className:`goal-menu`,onBlur:e=>{e.relatedTarget&&!e.currentTarget.contains(e.relatedTarget)&&(e.currentTarget.open=!1)},children:[(0,I.jsxs)(`summary`,{children:[n?Oe[t]:`读取中…`,(0,I.jsx)(ie,{size:14,"aria-hidden":`true`})]}),(0,I.jsxs)(`div`,{className:`goal-menu-panel`,children:[(0,I.jsx)(`strong`,{children:`学习目标`}),(0,I.jsx)(De,{level:t,disabled:!n,onChange:e=>{i(e),document.querySelector(`.goal-menu`)?.removeAttribute(`open`)}}),(0,I.jsx)(`p`,{children:`不同目标的学习记录分别保留。`})]})]})]})})}function Ae({view:e,learningView:t,onNavigate:n,due:r}){let i=[`words`,`grammar`,`exams`].includes(e);return(0,I.jsx)(`nav`,{className:`mobile-tabbar`,"aria-label":`手机主导航`,children:[[`today`,`今日`,he],[t,`学习`,ne],[`collection`,`积累`,N],[`settings`,`我的`,be]].map(([t,a,o])=>{let s=a===`学习`?i:e===t;return(0,I.jsxs)(`button`,{"aria-current":s?`page`:void 0,className:s?`selected`:``,onClick:()=>n(t),children:[(0,I.jsxs)(`span`,{className:`tab-icon`,children:[(0,I.jsx)(o,{size:20,"aria-hidden":`true`}),t===`today`&&r>0&&(0,I.jsx)(`i`,{"aria-hidden":`true`,children:r>9?`9+`:r})]}),(0,I.jsx)(`span`,{children:a})]},a)})})}var je=[[`today`,`今日学习`,he],[`words`,`单词词书`,ne],[`grammar`,`语法课程`,me],[`exams`,`真题与精读`,ge],[`collection`,`我的积累`,N],[`settings`,`设置与备份`,be]],Me={today:``,words:`按词书顺序学习，慢慢建立自己的词汇量。`,grammar:`先看懂句子，再理解更复杂的表达。`,exams:`从真实试卷，走向综合应用。`,collection:`把理解过的词句，留给下一次复习。`,settings:`调整学习节奏，也照顾好已经留下的积累。`};function Ne({view:e,learningView:t=`words`,level:n,ready:r,due:i,now:a,detail:o,quiz:s,notice:c,onDismiss:l,onNavigate:u,onLevel:d,onBack:f,children:p}){let[m,h]=x(`navigation-collapsed`,!1),g=s?`掌握小测`:o?e===`grammar`?`语法学习`:`单词学习`:e===`today`?`今天，从这里开始。`:je.find(([t])=>t===e)?.[1],_=s?`先独立作答，提交后再看解释。`:o?`理解知识，再放进句子里记住。`:Me[e];function v(){u(`settings`),requestAnimationFrame(()=>requestAnimationFrame(()=>requestAnimationFrame(()=>{let e=document.getElementById(`backup-title`);e?.scrollIntoView({block:`start`,behavior:`auto`}),e?.focus({preventScroll:!0})})))}return(0,I.jsxs)(`div`,{className:`shell${o?` has-detail`:``}${s?` has-quiz`:``}${o&&e===`grammar`?` course-focus`:``}${m?` nav-collapsed`:``}`,children:[(0,I.jsx)(`a`,{className:`skip`,href:`#content`,children:`跳到内容`}),(0,I.jsx)(ke,{detail:o||!!s,level:n,ready:r,onBack:f,onLevel:d}),(0,I.jsxs)(`aside`,{className:`sidebar`,children:[(0,I.jsxs)(`div`,{className:`brand`,children:[(0,I.jsx)(ne,{size:38,strokeWidth:1.6,"aria-hidden":`true`}),(0,I.jsx)(`span`,{children:`英语学习工作台`})]}),(0,I.jsx)(`button`,{className:`collapse-nav icon-action`,"aria-expanded":!m,"aria-label":m?`展开导航`:`收起导航`,onClick:()=>h(e=>!e),children:m?(0,I.jsx)(ve,{size:18}):(0,I.jsx)(_e,{size:18})}),(0,I.jsx)(`nav`,{"aria-label":`主导航`,children:je.map(([t,n,r])=>(0,I.jsxs)(`button`,{className:e===t?`active`:``,title:n,"aria-label":n,"aria-current":e===t?`page`:void 0,onClick:()=>u(t),children:[(0,I.jsx)(r,{size:27,strokeWidth:1.6,"aria-hidden":`true`}),(0,I.jsx)(`span`,{children:n}),t===`today`&&i>0&&(0,I.jsx)(`b`,{className:`nav-count`,children:i})]},t))}),(0,I.jsxs)(`div`,{className:`sidebar-bottom`,children:[(0,I.jsxs)(`div`,{className:`level-label`,children:[(0,I.jsx)(`span`,{children:`学习目标`}),(0,I.jsx)(De,{level:n,disabled:!r||!!s,onChange:d})]}),(0,I.jsxs)(`div`,{className:`sidebar-note`,children:[(0,I.jsx)(ce,{size:23,strokeWidth:1.5,"aria-hidden":`true`}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`strong`,{children:r?`本机保存`:`正在读取记录`}),(0,I.jsx)(`p`,{children:`当前浏览器独立保存`})]})]})]})]}),(0,I.jsxs)(`main`,{id:`content`,tabIndex:-1,children:[c&&(0,I.jsxs)(`div`,{className:`notice`,role:/失败|无法|不能|错误|超过|无效|未能|重试/.test(c)?`alert`:`status`,children:[(0,I.jsx)(`span`,{children:c}),(0,I.jsx)(`button`,{className:`icon-action`,"aria-label":`关闭提示`,onClick:l,children:(0,I.jsx)(Ce,{size:18})})]}),(0,I.jsxs)(`div`,{className:`content`,children:[(0,I.jsxs)(`header`,{className:`page-heading`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h1`,{children:g}),_&&(0,I.jsx)(`p`,{children:_})]}),r&&!o&&!s&&e===`today`&&(0,I.jsxs)(`time`,{className:`date`,dateTime:new Date(a).toISOString(),children:[new Intl.DateTimeFormat(`zh-CN`,{timeZone:`Asia/Shanghai`,month:`long`,day:`numeric`}).format(a),` · `,new Intl.DateTimeFormat(`zh-CN`,{timeZone:`Asia/Shanghai`,weekday:`long`}).format(a)]}),!o&&!s&&e===`settings`&&(0,I.jsxs)(`button`,{className:`text-link settings-backup-shortcut`,disabled:!r,onClick:v,children:[`备份与恢复`,(0,I.jsx)(ee,{size:15})]}),(o||s)&&(0,I.jsx)(`button`,{className:`text-link back-link`,onClick:f,children:s?`退出本轮`:`返回列表`})]}),!o&&!s&&[`words`,`grammar`,`exams`].includes(e)&&(0,I.jsx)(`nav`,{className:`study-switcher`,"aria-label":`学习板块`,children:[[`words`,`单词词书`],[`grammar`,`语法课程`],[`exams`,`真题资料`]].map(([t,n])=>(0,I.jsx)(`button`,{"aria-current":e===t?`page`:void 0,className:e===t?`chosen`:``,onClick:()=>u(t),children:n},t))}),p,!o&&!s&&(0,I.jsxs)(`footer`,{className:`page-footer`,children:[(0,I.jsxs)(`span`,{children:[(0,I.jsx)(ce,{size:19,strokeWidth:1.5,"aria-hidden":`true`}),`学习记录保存在当前设备`]}),(0,I.jsx)(`button`,{className:`text-link`,disabled:!r,onClick:v,children:`备份记录`})]})]})]}),!o&&!s&&(0,I.jsx)(Ae,{view:e,learningView:t,due:i,onNavigate:u})]})}function Pe({value:e,onSave:t,disabled:n=!1}){let[r,i]=(0,l.useState)(String(e)),[a,o]=(0,l.useState)(``),[s,c]=(0,l.useState)(!1),u=(0,l.useRef)(!1);async function d(){if(u.current)return;let n=Number(r);if(!r.trim()||!Number.isInteger(n)||n<0||n>100){o(`请输入 0 到 100 之间的整数；当前学习计划没有改变。`);return}if(o(``),n!==e){u.current=!0,c(!0);try{await t(n)||o(`未能保存，请重试。当前输入仍保留。`)}catch{o(`未能保存，请重试。当前输入仍保留。`)}finally{u.current=!1,c(!1)}}}return(0,I.jsxs)(`div`,{className:`daily-new-field`,children:[(0,I.jsxs)(`label`,{htmlFor:`daily-new`,children:[`每天新增单词`,(0,I.jsx)(`input`,{id:`daily-new`,"aria-label":`每天新增单词`,inputMode:`numeric`,type:`number`,min:`0`,max:`100`,value:r,disabled:s||n,"aria-invalid":!!a,"aria-describedby":a?`daily-new-help daily-new-error`:`daily-new-help`,onChange:e=>{i(e.target.value),o(``)},onBlur:d,onKeyDown:t=>{t.key===`Enter`&&(t.preventDefault(),t.currentTarget.blur()),t.key===`Escape`&&(i(String(e)),o(``))}})]}),(0,I.jsx)(`p`,{id:`daily-new-help`,className:`field-hint`,children:`输入后离开此栏自动保存。设为 0 时暂停新词推荐。`}),a&&(0,I.jsx)(`p`,{id:`daily-new-error`,className:`field-error`,role:`alert`,children:a}),s&&(0,I.jsx)(`p`,{role:`status`,className:`field-hint`,children:`正在保存…`})]})}var Fe=class e extends Error{constructor(t=`FSRS Error`){super(t),this.name=`FSRSError`,Error.captureStackTrace?.(this,e)}},Ie=class e extends Fe{constructor(t){super(t),this.name=`FSRSValidationError`,Error.captureStackTrace?.(this,e)}},L=(e=>(e[e.New=0]=`New`,e[e.Learning=1]=`Learning`,e[e.Review=2]=`Review`,e[e.Relearning=3]=`Relearning`,e))(L||{}),R=(e=>(e[e.Manual=0]=`Manual`,e[e.Again=1]=`Again`,e[e.Hard=2]=`Hard`,e[e.Good=3]=`Good`,e[e.Easy=4]=`Easy`,e))(R||{}),z=class e{static card(t){return{...t,state:e.state(t.state),due:e.time(t.due),last_review:t.last_review?e.time(t.last_review):void 0}}static rating(e){if(typeof e==`string`){let t=R[`${e.charAt(0).toUpperCase()}${e.slice(1).toLowerCase()}`];if(t===void 0)throw new Ie(`Invalid rating:[${e}]`);return t}else if(typeof e==`number`)return e;throw new Ie(`Invalid rating:[${e}]`)}static state(e){if(typeof e==`string`){let t=L[`${e.charAt(0).toUpperCase()}${e.slice(1).toLowerCase()}`];if(t===void 0)throw new Ie(`Invalid state:[${e}]`);return t}else if(typeof e==`number`)return e;throw new Ie(`Invalid state:[${e}]`)}static time(e){if(e instanceof Date)return e;let t=new Date(e);if(typeof e==`object`&&e&&!Number.isNaN(Date.parse(e)||+t))return t;if(typeof e==`string`){let t=Date.parse(e);if(Number.isNaN(t))throw new Ie(`Invalid date:[${e}]`);return new Date(t)}else if(typeof e==`number`)return new Date(e);throw new Ie(`Invalid date:[${e}]`)}static review_log(t){return{...t,due:e.time(t.due),rating:e.rating(t.rating),state:e.state(t.state),review:e.time(t.review)}}};Date.prototype.scheduler=function(e,t){return Le(this,e,t)},Date.prototype.diff=function(e,t){return Re(this,e,t)},Date.prototype.format=function(){return ze(this)},Date.prototype.dueFormat=function(e,t,n){return Ue(this,e,t,n)};function Le(e,t,n){return new Date(n?z.time(e).getTime()+t*24*60*60*1e3:z.time(e).getTime()+t*60*1e3)}function Re(e,t,n){if(!e||!t)throw new Ie(`Invalid date`);let r=z.time(e).getTime()-z.time(t).getTime(),i=0;switch(n){case`days`:i=Math.floor(r/(1440*60*1e3));break;case`minutes`:i=Math.floor(r/(60*1e3));break}return i}function ze(e){let t=z.time(e),n=t.getFullYear(),r=t.getMonth()+1,i=t.getDate(),a=t.getHours(),o=t.getMinutes(),s=t.getSeconds();return`${n}-${Be(r)}-${Be(i)} ${Be(a)}:${Be(o)}:${Be(s)}`}function Be(e){return e<10?`0${e}`:`${e}`}var Ve=[60,60,24,31,12],He=[`second`,`min`,`hour`,`day`,`month`,`year`];function Ue(e,t,n,r=He){e=z.time(e),t=z.time(t),r.length!==He.length&&(r=He);let i=e.getTime()-t.getTime(),a=0;for(i/=1e3,a=0;a<Ve.length&&!(i<Ve[a]);a++)i/=Ve[a];return`${Math.floor(i)}${n?r[a]:``}`}var We=Object.freeze([R.Again,R.Hard,R.Good,R.Easy]),Ge=[{start:2.5,end:7,factor:.15},{start:7,end:20,factor:.1},{start:20,end:1/0,factor:.05}];function Ke(e,t,n){let r=1;for(let t of Ge)r+=t.factor*Math.max(Math.min(e,t.end)-t.start,0);e=Math.min(e,n);let i=Math.max(2,Math.round(e-r)),a=Math.min(Math.round(e+r),n);return e>t&&(i=Math.max(i,t+1)),i=Math.min(i,a),{min_ivl:i,max_ivl:a}}function qe(e,t,n){return Math.min(Math.max(e,t),n)}function Je(e,t){let n=10**t;return Math.round(e*n)/n}function Ye(e,t){let n=Date.UTC(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),r=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate());return Math.floor((r-n)/864e5)}var Xe=e=>{let t=e.slice(-1),n=parseInt(e.slice(0,-1),10);if(Number.isNaN(n)||!Number.isFinite(n)||n<0)throw new Ie(`Invalid step value: ${e}`);switch(t){case`m`:return n;case`h`:return n*60;case`d`:return n*1440;default:throw new Ie(`Invalid step unit: ${e}, expected m/h/d`)}},Ze=(e,t,n)=>{let r=t===L.Relearning||t===L.Review?e.relearning_steps:e.learning_steps,i=r.length;if(i===0||n>=i)return{};let a=r[0],o=Xe,s=()=>o(a),c=()=>{if(i===1)return Math.round(o(a)*1.5);let e=r[1];return Math.round((o(a)+o(e))/2)},l=e=>e<0||e>=i?null:r[e],u=e=>o(e),d={},f=l(Math.max(0,n));if(t===L.Review)return d[R.Again]={scheduled_minutes:o(f),next_step:0},d;{d[R.Again]={scheduled_minutes:s(),next_step:0},d[R.Hard]={scheduled_minutes:c(),next_step:n};let e=l(n+1);if(e){let t=u(e);t&&(d[R.Good]={scheduled_minutes:Math.round(t),next_step:n+1})}}return d};function Qe(){return`${this.review_time.getTime()}_${this.current.reps}_${this.current.difficulty*this.current.stability}`}var $e=(e=>(e.SCHEDULER=`Scheduler`,e.LEARNING_STEPS=`LearningSteps`,e.SEED=`Seed`,e))($e||{}),et=class{last;current;review_time;next=new Map;algorithm;strategies;elapsed_days=0;constructor(e,t,n,r){this.algorithm=n,this.last=z.card(e),this.current=z.card(e),this.review_time=z.time(t),this.strategies=r,this.init()}checkGrade(e){if(!Number.isFinite(e)||e<1||e>4)throw new Ie(`Invalid grade "${e}",expected 1-4`)}init(){let{state:e,last_review:t}=this.current,n=0;e!==L.New&&t&&(n=Ye(t,this.review_time)),this.current.last_review=this.review_time,this.elapsed_days=n,this.current.elapsed_days=n,this.current.reps+=1;let r=Qe;if(this.strategies){let e=this.strategies.get($e.SEED);e&&(r=e)}this.algorithm.seed=r.call(this)}preview(){return{[R.Again]:this.review(R.Again),[R.Hard]:this.review(R.Hard),[R.Good]:this.review(R.Good),[R.Easy]:this.review(R.Easy),[Symbol.iterator]:this.previewIterator.bind(this)}}*previewIterator(){for(let e of We)yield this.review(e)}review(e){let{state:t}=this.last,n;switch(this.checkGrade(e),t){case L.New:n=this.newState(e);break;case L.Learning:case L.Relearning:n=this.learningState(e);break;case L.Review:n=this.reviewState(e);break}return n}buildLog(e){let{last_review:t,due:n,elapsed_days:r}=this.last;return{rating:e,state:this.current.state,due:t||n,stability:this.current.stability,difficulty:this.current.difficulty,elapsed_days:this.elapsed_days,last_elapsed_days:r,scheduled_days:this.current.scheduled_days,learning_steps:this.current.learning_steps,review:this.review_time}}},tt=class{c;s0;s1;s2;constructor(e){let t=nt();this.c=1,this.s0=t(` `),this.s1=t(` `),this.s2=t(` `),e??=Date.now(),this.s0-=t(e),this.s0<0&&(this.s0+=1),this.s1-=t(e),this.s1<0&&(this.s1+=1),this.s2-=t(e),this.s2<0&&(this.s2+=1)}next(){let e=2091639*this.s0+this.c*23283064365386963e-26;return this.s0=this.s1,this.s1=this.s2,this.c=e|0,this.s2=e-this.c,this.s2}set state(e){this.c=e.c,this.s0=e.s0,this.s1=e.s1,this.s2=e.s2}get state(){return{c:this.c,s0:this.s0,s1:this.s1,s2:this.s2}}};function nt(){let e=4022871197;return function(t){t=String(t);for(let n=0;n<t.length;n++){e+=t.charCodeAt(n);let r=.02519603282416938*e;e=r>>>0,r-=e,r*=e,e=r>>>0,r-=e,e+=r*4294967296}return(e>>>0)*23283064365386963e-26}}function rt(e){let t=new tt(e),n=()=>t.next();return n.int32=()=>t.next()*4294967296|0,n.double=()=>n()+(n()*2097152|0)*11102230246251565e-32,n.state=()=>t.state,n.importState=e=>(t.state=e,n),n}var it=`5.4.2`,at=Object.freeze([`1m`,`10m`]),ot=Object.freeze([`10m`]);`${it}`;var st=.001,ct=.5,lt=Object.freeze([.212,1.2931,2.3065,8.2956,6.4133,.8334,3.0194,.001,1.8722,.1666,.796,1.4835,.0614,.2629,1.6483,.6014,1.8729,.5425,.0912,.0658,.1542]),ut=(e,t=!0)=>[[st,100],[st,100],[st,100],[st,100],[1,10],[.001,4],[.001,4],[.001,.75],[0,4.5],[0,.8],[.001,3.5],[.001,5],[.001,.25],[.001,.9],[0,4],[0,1],[1,6],[0,e],[0,e],[t?.01:0,.8],[.1,.8]],dt=(e,t,n=!0)=>{let r=ut(2,n).slice(0,e.length);if(Math.max(0,t)>1){let n=qe(e[11]||0,r[11][0],r[11][1]),i=qe(e[13]||0,r[13][0],r[13][1]),a=qe(e[14]||0,r[14][0],r[14][1]),o=-(Math.log(n)+Math.log(2**i-1)+a*.3)/t,s=qe(Je(Math.sqrt(Math.max(o,0)),8),.01,2);r[17]&&=[r[17][0],s],r[18]&&=[r[18][0],s]}return r.map(([t,n],r)=>qe(e[r]||0,t,n))},ft=(e,t=0,n=!0)=>{if(e===void 0)return[...lt];switch(e.length){case 21:return dt(Array.from(e),t,n);case 19:return console.debug(`[FSRS-6]auto fill w from 19 to 21 length`),dt(Array.from(e),t,n).concat([0,ct]);case 17:{let r=dt(Array.from(e),t,n);return r[4]=+(r[5]*2+r[4]).toFixed(8),r[5]=+(Math.log(r[5]*3+1)/3).toFixed(8),r[6]=+(r[6]+.5).toFixed(8),console.debug(`[FSRS-6]auto fill w from 17 to 21 length`),r.concat([0,0,0,ct])}default:return console.warn(`[FSRS]Invalid parameters length, using default parameters`),[...lt]}},pt=e=>{let t=Array.isArray(e?.learning_steps)?e.learning_steps:at,n=Array.isArray(e?.relearning_steps)?e.relearning_steps:ot,r=e?.enable_short_term??!0,i=ft(e?.w,n.length,r);return{request_retention:e?.request_retention||.9,maximum_interval:e?.maximum_interval||36500,w:i,enable_fuzz:e?.enable_fuzz??!1,enable_short_term:r,learning_steps:t,relearning_steps:n}};function mt(e,t){let n={due:e?z.time(e):new Date,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:0,lapses:0,learning_steps:0,state:L.New,last_review:void 0};return t&&typeof t==`function`?t(n):n}var ht=e=>{let t=typeof e==`number`?-e:-e[20];return{decay:t,factor:Je(Math.exp(t**-1*Math.log(.9))-1,8)}};function gt(e,t,n){let{decay:r,factor:i}=ht(e);return Je((1+i*t/n)**+r,8)}var _t=class{param;intervalModifier;_seed;constructor(e){this.param=new Proxy(this.prepare_parameters(e),this.params_handler_proxy()),this.intervalModifier=this.calculate_interval_modifier(this.param.request_retention),this.forgetting_curve=gt.bind(this,this.param.w)}get interval_modifier(){return this.intervalModifier}set seed(e){this._seed=e}calculate_interval_modifier(e){if(e<=0||e>1)throw new Ie(`Requested retention rate should be in the range (0,1]`);let{decay:t,factor:n}=ht(this.param.w);return Je((e**(1/t)-1)/n,8)}get parameters(){return this.param}set parameters(e){this.update_parameters(e)}params_handler_proxy(){let e=this;return{set:function(t,n,r){return n===`request_retention`&&Number.isFinite(r)?e.intervalModifier=e.calculate_interval_modifier(Number(r)):n===`w`&&(r=ft(r,t.relearning_steps.length,t.enable_short_term),r=dt(Array.from(r),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=gt.bind(this,r),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,n,r),!0}}}update_parameters(e){let t=this.prepare_parameters(e);for(let e in t){let n=e;this.param[n]=t[n]}}prepare_parameters=e=>{let t=pt(e);return t.w=dt(Array.from(t.w),t.relearning_steps.length,t.enable_short_term),t};init_stability(e){return Math.max(this.param.w[e-1],.1)}init_difficulty(e){let t=this.param.w;return Je(t[4]-Math.exp((e-1)*t[5])+1,8)}apply_fuzz(e,t){if(!this.param.enable_fuzz||e<2.5)return Math.round(e);let n=rt(this._seed)(),{min_ivl:r,max_ivl:i}=Ke(e,t,this.param.maximum_interval);return Math.floor(n*(i-r+1)+r)}next_interval(e,t){let n=Math.min(Math.max(1,Math.round(e*this.intervalModifier)),this.param.maximum_interval);return this.apply_fuzz(n,t)}linear_damping(e,t){return Je(e*(10-t)/9,8)}next_difficulty(e,t){let n=-this.param.w[6]*(t-3),r=e+this.linear_damping(n,e);return qe(this.mean_reversion(this.init_difficulty(R.Easy),r),1,10)}mean_reversion(e,t){let n=this.param.w;return Je(n[7]*e+(1-n[7])*t,8)}next_recall_stability(e,t,n,r){let i=this.param.w,a=R.Hard===r?i[15]:1,o=R.Easy===r?i[16]:1;return Je(qe(t*(1+Math.exp(i[8])*(11-e)*t**+-i[9]*(Math.exp((1-n)*i[10])-1)*a*o),st,36500),8)}next_forget_stability(e,t,n){let r=this.param.w;return Je(qe(r[11]*e**+-r[12]*((t+1)**+r[13]-1)*Math.exp((1-n)*r[14]),st,36500),8)}next_short_term_stability(e,t){let n=this.param.w,r=e**+-n[19]*Math.exp(n[17]*(t-3+n[18]));return Je(qe(e*(t>=R.Hard?Math.max(r,1):r),st,36500),8)}forgetting_curve;next_state(e,t,n,r){let{difficulty:i,stability:a}=e??{difficulty:0,stability:0};if(t<0)throw new Ie(`Invalid delta_t "${t}"`);if(n<0||n>4)throw new Ie(`Invalid grade "${n}"`);if(i===0&&a===0)return{difficulty:qe(this.init_difficulty(n),1,10),stability:this.init_stability(n)};if(n===0)return{difficulty:i,stability:a};if(i<1||a<.001)throw new Ie(`Invalid memory state { difficulty: ${i}, stability: ${a} }`);let o=this.param.w;r=typeof r==`number`?r:this.forgetting_curve(t,a);let s;if(t===0&&this.param.enable_short_term)s=this.next_short_term_stability(a,n);else if(n===1){let e=this.next_forget_stability(i,a,r),[t,n]=[0,0];this.param.enable_short_term&&(t=o[17],n=o[18]),s=qe(Je(a/Math.exp(t*n),8),st,e)}else s=this.next_recall_stability(i,a,r,n);return{difficulty:this.next_difficulty(i,n),stability:s}}},vt=class extends et{learningStepsStrategy;constructor(e,t,n,r){super(e,t,n,r);let i=Ze;if(this.strategies){let e=this.strategies.get($e.LEARNING_STEPS);e&&(i=e)}this.learningStepsStrategy=i}getLearningInfo(e,t){let n=this.algorithm.parameters;e.learning_steps=e.learning_steps||0;let r=this.learningStepsStrategy(n,e.state,e.learning_steps);return{scheduled_minutes:Math.max(0,r[t]?.scheduled_minutes??0),next_steps:Math.max(0,r[t]?.next_step??0)}}applyLearningSteps(e,t,n){let{scheduled_minutes:r,next_steps:i}=this.getLearningInfo(this.current,t);if(r>0&&r<1440)e.learning_steps=i,e.scheduled_days=0,e.state=n,e.due=Le(this.review_time,Math.round(r),!1);else if(e.state=L.Review,r>=1440)e.learning_steps=i,e.due=Le(this.review_time,Math.round(r),!1),e.scheduled_days=Math.floor(r/1440);else{e.learning_steps=0;let t=this.algorithm.next_interval(e.stability,this.elapsed_days);e.scheduled_days=t,e.due=Le(this.review_time,t,!0)}}newState(e){let t=this.next.get(e);if(t)return t;let n=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(n,e,L.Learning);let r={card:n,log:this.buildLog(e)};return this.next.set(e,r),r}learningState(e){let t=this.next.get(e);if(t)return t;let n=this.next_ds(this.elapsed_days,e);this.applyLearningSteps(n,e,this.last.state);let r={card:n,log:this.buildLog(e)};return this.next.set(e,r),r}reviewState(e){let t=this.next.get(e);if(t)return t;let n=this.elapsed_days,r=this.algorithm.forgetting_curve(n,this.current.stability),i=this.next_ds(n,R.Again,r),a=this.next_ds(n,R.Hard,r),o=this.next_ds(n,R.Good,r),s=this.next_ds(n,R.Easy,r);this.next_interval(a,o,s,n),this.next_state(a,o,s),this.applyLearningSteps(i,R.Again,L.Relearning),i.lapses+=1;let c={card:i,log:this.buildLog(R.Again)},l={card:a,log:super.buildLog(R.Hard)},u={card:o,log:super.buildLog(R.Good)},d={card:s,log:super.buildLog(R.Easy)};return this.next.set(R.Again,c),this.next.set(R.Hard,l),this.next.set(R.Good,u),this.next.set(R.Easy,d),this.next.get(e)}next_ds(e,t,n){let r=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,n),i=z.card(this.current);return i.difficulty=r.difficulty,i.stability=r.stability,i}next_interval(e,t,n,r){let i,a;i=this.algorithm.next_interval(e.stability,r),a=this.algorithm.next_interval(t.stability,r),i=Math.min(i,a),a=Math.max(a,i+1);let o=Math.max(this.algorithm.next_interval(n.stability,r),a+1);e.scheduled_days=i,e.due=Le(this.review_time,i,!0),t.scheduled_days=a,t.due=Le(this.review_time,a,!0),n.scheduled_days=o,n.due=Le(this.review_time,o,!0)}next_state(e,t,n){e.state=L.Review,e.learning_steps=0,t.state=L.Review,t.learning_steps=0,n.state=L.Review,n.learning_steps=0}},yt=class extends et{newState(e){let t=this.next.get(e);if(t)return t;this.current.scheduled_days=0,this.current.elapsed_days=0;let n=this.next_ds(0,R.Again),r=this.next_ds(0,R.Hard),i=this.next_ds(0,R.Good),a=this.next_ds(0,R.Easy);return this.next_interval(n,r,i,a,0),this.next_state(n,r,i,a),this.update_next(n,r,i,a),this.next.get(e)}next_ds(e,t,n){let r=this.algorithm.next_state({difficulty:this.current.difficulty,stability:this.current.stability},e,t,n),i=z.card(this.current);return i.difficulty=r.difficulty,i.stability=r.stability,i}learningState(e){return this.reviewState(e)}reviewState(e){let t=this.next.get(e);if(t)return t;let n=this.elapsed_days,r=this.algorithm.forgetting_curve(n,this.current.stability),i=this.next_ds(n,R.Again,r),a=this.next_ds(n,R.Hard,r),o=this.next_ds(n,R.Good,r),s=this.next_ds(n,R.Easy,r);return this.next_interval(i,a,o,s,n),this.next_state(i,a,o,s),i.lapses+=1,this.update_next(i,a,o,s),this.next.get(e)}next_interval(e,t,n,r,i){let a,o,s,c;a=this.algorithm.next_interval(e.stability,i),o=this.algorithm.next_interval(t.stability,i),s=this.algorithm.next_interval(n.stability,i),c=this.algorithm.next_interval(r.stability,i),a=Math.min(a,o),o=Math.max(o,a+1),s=Math.max(s,o+1),c=Math.max(c,s+1),e.scheduled_days=a,e.due=Le(this.review_time,a,!0),t.scheduled_days=o,t.due=Le(this.review_time,o,!0),n.scheduled_days=s,n.due=Le(this.review_time,s,!0),r.scheduled_days=c,r.due=Le(this.review_time,c,!0)}next_state(e,t,n,r){e.state=L.Review,e.learning_steps=0,t.state=L.Review,t.learning_steps=0,n.state=L.Review,n.learning_steps=0,r.state=L.Review,r.learning_steps=0}update_next(e,t,n,r){let i={card:e,log:this.buildLog(R.Again)},a={card:t,log:super.buildLog(R.Hard)},o={card:n,log:super.buildLog(R.Good)},s={card:r,log:super.buildLog(R.Easy)};this.next.set(R.Again,i),this.next.set(R.Hard,a),this.next.set(R.Good,o),this.next.set(R.Easy,s)}},bt=class{fsrs;constructor(e){this.fsrs=e}replay(e,t,n){return this.fsrs.next(e,t,n)}handleManualRating(e,t,n,r,i,a,o){if(t===void 0)throw new Ie(`reschedule: state is required for manual rating`);let s,c;if(t===L.New)s={rating:R.Manual,state:t,due:o??n,stability:e.stability,difficulty:e.difficulty,elapsed_days:r,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:n},c=mt(n),c.last_review=n;else{if(o===void 0)throw new Ie(`reschedule: due is required for manual rating`);let l=Re(o,n,`days`);s={rating:R.Manual,state:e.state,due:e.last_review||e.due,stability:e.stability,difficulty:e.difficulty,elapsed_days:r,last_elapsed_days:e.elapsed_days,scheduled_days:e.scheduled_days,learning_steps:e.learning_steps,review:n},c={...e,state:t,due:o,last_review:n,stability:i||e.stability,difficulty:a||e.difficulty,elapsed_days:r,scheduled_days:l,reps:e.reps+1}}return{card:c,log:s}}reschedule(e,t){let n=[],r=mt(e.due);for(let e of t){let t;if(e.review=z.time(e.review),e.rating===R.Manual){let n=0;r.state!==L.New&&r.last_review&&(n=Re(e.review,r.last_review,`days`)),t=this.handleManualRating(r,e.state,e.review,n,e.stability,e.difficulty,e.due?z.time(e.due):void 0)}else t=this.replay(r,e.review,e.rating);n.push(t),r=t.card}return n}calculateManualRecord(e,t,n,r){if(!n)return null;let{card:i,log:a}=n,o=z.card(e);return o.due.getTime()===i.due.getTime()?null:(o.scheduled_days=Re(i.due,o.due,`days`),this.handleManualRating(o,i.state,z.time(t),a.elapsed_days,r?i.stability:void 0,r?i.difficulty:void 0,i.due))}};function xt(e,t){return typeof t==`function`?t(e):e}var St=class extends _t{strategyHandler=new Map;Scheduler;constructor(e){super(e);let{enable_short_term:t}=this.parameters;this.Scheduler=t?vt:yt}params_handler_proxy(){let e=this;return{set:function(t,n,r){return n===`request_retention`&&Number.isFinite(r)?e.intervalModifier=e.calculate_interval_modifier(Number(r)):n===`enable_short_term`?e.Scheduler=r===!0?vt:yt:n===`w`&&(r=ft(r,t.relearning_steps.length,t.enable_short_term),r=dt(Array.from(r),t.relearning_steps.length,t.enable_short_term),e.forgetting_curve=gt.bind(this,r),e.intervalModifier=e.calculate_interval_modifier(Number(t.request_retention))),Reflect.set(t,n,r),!0}}}useStrategy(e,t){return this.strategyHandler.set(e,t),this}clearStrategy(e){return e?this.strategyHandler.delete(e):this.strategyHandler.clear(),this}getScheduler(e,t){return new((this.strategyHandler.get($e.SCHEDULER))||this.Scheduler)(e,t,this,this.strategyHandler)}repeat(e,t,n){return xt(this.getScheduler(e,t).preview(),n)}next(e,t,n,r){let i=this.getScheduler(e,t),a=z.rating(n);if(a===R.Manual)throw new Ie(`Cannot review a manual rating`);return xt(i.review(a),r)}get_retrievability(e,t,n=!0){let r=z.card(e);t=t?z.time(t):new Date;let i=r.state===L.New?0:Math.max(Re(t,r.last_review,`days`),0),a=r.state===L.New?0:this.forgetting_curve(i,+r.stability.toFixed(8));return n?`${(a*100).toFixed(2)}%`:a}rollback(e,t,n){let r=z.card(e),i=z.review_log(t);if(i.rating===R.Manual)throw new Ie(`Cannot rollback a manual rating`);let a,o,s;switch(i.state){case L.New:a=i.due,o=void 0,s=0;break;case L.Learning:case L.Relearning:case L.Review:a=i.review,o=i.due,s=r.lapses-+(i.rating===R.Again&&i.state===L.Review);break}return xt({...r,due:a,stability:i.stability,difficulty:i.difficulty,elapsed_days:i.last_elapsed_days,scheduled_days:i.scheduled_days,reps:Math.max(0,r.reps-1),lapses:Math.max(0,s),learning_steps:i.learning_steps,state:i.state,last_review:o},n)}forget(e,t,n=!1,r){let i=z.card(e);t=z.time(t);let a=i.state===L.New?0:Re(t,i.due,`days`),o={rating:R.Manual,state:i.state,due:i.due,stability:i.stability,difficulty:i.difficulty,elapsed_days:0,last_elapsed_days:i.elapsed_days,scheduled_days:a,learning_steps:i.learning_steps,review:t};return xt({card:{...i,due:t,stability:0,difficulty:0,elapsed_days:0,scheduled_days:0,reps:n?0:i.reps,lapses:n?0:i.lapses,learning_steps:0,state:L.New,last_review:i.last_review},log:o},r)}reschedule(e,t=[],n={}){let{recordLogHandler:r,reviewsOrderBy:i,skipManual:a=!0,now:o=new Date,update_memory_state:s=!1}=n;i&&typeof i==`function`&&t.sort(i),a&&(t=t.filter(e=>e.rating!==R.Manual));let c=new bt(this),l=c.reschedule(n.first_card||mt(),t),u=l.length,d=z.card(e),f=c.calculateManualRecord(d,o,u?l[u-1]:void 0,s);return{collections:typeof r==`function`?l.map(r):l,reschedule_item:f?xt(f,r):null}}},Ct=e=>new St(e||{}),B;(function(e){e.assertEqual=e=>{};function t(e){}e.assertIs=t;function n(e){throw Error()}e.assertNever=n,e.arrayToEnum=e=>{let t={};for(let n of e)t[n]=n;return t},e.getValidEnumValues=t=>{let n=e.objectKeys(t).filter(e=>typeof t[t[e]]!=`number`),r={};for(let e of n)r[e]=t[e];return e.objectValues(r)},e.objectValues=t=>e.objectKeys(t).map(function(e){return t[e]}),e.objectKeys=typeof Object.keys==`function`?e=>Object.keys(e):e=>{let t=[];for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t},e.find=(e,t)=>{for(let n of e)if(t(n))return n},e.isInteger=typeof Number.isInteger==`function`?e=>Number.isInteger(e):e=>typeof e==`number`&&Number.isFinite(e)&&Math.floor(e)===e;function r(e,t=` | `){return e.map(e=>typeof e==`string`?`'${e}'`:e).join(t)}e.joinValues=r,e.jsonStringifyReplacer=(e,t)=>typeof t==`bigint`?t.toString():t})(B||={});var wt;(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(wt||={});var V=B.arrayToEnum([`string`,`nan`,`number`,`integer`,`float`,`boolean`,`date`,`bigint`,`symbol`,`function`,`undefined`,`null`,`array`,`object`,`unknown`,`promise`,`void`,`never`,`map`,`set`]),Tt=e=>{switch(typeof e){case`undefined`:return V.undefined;case`string`:return V.string;case`number`:return Number.isNaN(e)?V.nan:V.number;case`boolean`:return V.boolean;case`function`:return V.function;case`bigint`:return V.bigint;case`symbol`:return V.symbol;case`object`:return Array.isArray(e)?V.array:e===null?V.null:e.then&&typeof e.then==`function`&&e.catch&&typeof e.catch==`function`?V.promise:typeof Map<`u`&&e instanceof Map?V.map:typeof Set<`u`&&e instanceof Set?V.set:typeof Date<`u`&&e instanceof Date?V.date:V.object;default:return V.unknown}},H=B.arrayToEnum([`invalid_type`,`invalid_literal`,`custom`,`invalid_union`,`invalid_union_discriminator`,`invalid_enum_value`,`unrecognized_keys`,`invalid_arguments`,`invalid_return_type`,`invalid_date`,`invalid_string`,`too_small`,`too_big`,`invalid_intersection_types`,`not_multiple_of`,`not_finite`]),Et=class e extends Error{get errors(){return this.issues}constructor(e){super(),this.issues=[],this.addIssue=e=>{this.issues=[...this.issues,e]},this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};let t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t,this.name=`ZodError`,this.issues=e}format(e){let t=e||function(e){return e.message},n={_errors:[]},r=e=>{for(let i of e.issues)if(i.code===`invalid_union`)i.unionErrors.map(r);else if(i.code===`invalid_return_type`)r(i.returnTypeError);else if(i.code===`invalid_arguments`)r(i.argumentsError);else if(i.path.length===0)n._errors.push(t(i));else{let e=n,r=0;for(;r<i.path.length;){let n=i.path[r];r===i.path.length-1?(e[n]=e[n]||{_errors:[]},e[n]._errors.push(t(i))):e[n]=e[n]||{_errors:[]},e=e[n],r++}}};return r(this),n}static assert(t){if(!(t instanceof e))throw Error(`Not a ZodError: ${t}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,B.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){let t={},n=[];for(let r of this.issues)if(r.path.length>0){let n=r.path[0];t[n]=t[n]||[],t[n].push(e(r))}else n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}};Et.create=e=>new Et(e);var Dt=(e,t)=>{let n;switch(e.code){case H.invalid_type:n=e.received===V.undefined?`Required`:`Expected ${e.expected}, received ${e.received}`;break;case H.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,B.jsonStringifyReplacer)}`;break;case H.unrecognized_keys:n=`Unrecognized key(s) in object: ${B.joinValues(e.keys,`, `)}`;break;case H.invalid_union:n=`Invalid input`;break;case H.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${B.joinValues(e.options)}`;break;case H.invalid_enum_value:n=`Invalid enum value. Expected ${B.joinValues(e.options)}, received '${e.received}'`;break;case H.invalid_arguments:n=`Invalid function arguments`;break;case H.invalid_return_type:n=`Invalid function return type`;break;case H.invalid_date:n=`Invalid date`;break;case H.invalid_string:typeof e.validation==`object`?`includes`in e.validation?(n=`Invalid input: must include "${e.validation.includes}"`,typeof e.validation.position==`number`&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)):`startsWith`in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:`endsWith`in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:B.assertNever(e.validation):n=e.validation===`regex`?`Invalid`:`Invalid ${e.validation}`;break;case H.too_small:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at least`:`more than`} ${e.minimum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at least`:`over`} ${e.minimum} character(s)`:e.type===`number`||e.type===`bigint`?`Number must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${e.minimum}`:e.type===`date`?`Date must be ${e.exact?`exactly equal to `:e.inclusive?`greater than or equal to `:`greater than `}${new Date(Number(e.minimum))}`:`Invalid input`;break;case H.too_big:n=e.type===`array`?`Array must contain ${e.exact?`exactly`:e.inclusive?`at most`:`less than`} ${e.maximum} element(s)`:e.type===`string`?`String must contain ${e.exact?`exactly`:e.inclusive?`at most`:`under`} ${e.maximum} character(s)`:e.type===`number`?`Number must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`bigint`?`BigInt must be ${e.exact?`exactly`:e.inclusive?`less than or equal to`:`less than`} ${e.maximum}`:e.type===`date`?`Date must be ${e.exact?`exactly`:e.inclusive?`smaller than or equal to`:`smaller than`} ${new Date(Number(e.maximum))}`:`Invalid input`;break;case H.custom:n=`Invalid input`;break;case H.invalid_intersection_types:n=`Intersection results could not be merged`;break;case H.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case H.not_finite:n=`Number must be finite`;break;default:n=t.defaultError,B.assertNever(e)}return{message:n}},Ot=Dt;function kt(){return Ot}var At=e=>{let{data:t,path:n,errorMaps:r,issueData:i}=e,a=[...n,...i.path||[]],o={...i,path:a};if(i.message!==void 0)return{...i,path:a,message:i.message};let s=``,c=r.filter(e=>!!e).slice().reverse();for(let e of c)s=e(o,{data:t,defaultError:s}).message;return{...i,path:a,message:s}};function U(e,t){let n=kt(),r=At({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===Dt?void 0:Dt].filter(e=>!!e)});e.common.issues.push(r)}var jt=class e{constructor(){this.value=`valid`}dirty(){this.value===`valid`&&(this.value=`dirty`)}abort(){this.value!==`aborted`&&(this.value=`aborted`)}static mergeArray(e,t){let n=[];for(let r of t){if(r.status===`aborted`)return W;r.status===`dirty`&&e.dirty(),n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(t,n){let r=[];for(let e of n){let t=await e.key,n=await e.value;r.push({key:t,value:n})}return e.mergeObjectSync(t,r)}static mergeObjectSync(e,t){let n={};for(let r of t){let{key:t,value:i}=r;if(t.status===`aborted`||i.status===`aborted`)return W;t.status===`dirty`&&e.dirty(),i.status===`dirty`&&e.dirty(),t.value!==`__proto__`&&(i.value!==void 0||r.alwaysSet)&&(n[t.value]=i.value)}return{status:e.value,value:n}}},W=Object.freeze({status:`aborted`}),Mt=e=>({status:`dirty`,value:e}),Nt=e=>({status:`valid`,value:e}),Pt=e=>e.status===`aborted`,Ft=e=>e.status===`dirty`,It=e=>e.status===`valid`,Lt=e=>typeof Promise<`u`&&e instanceof Promise,G;(function(e){e.errToObj=e=>typeof e==`string`?{message:e}:e||{},e.toString=e=>typeof e==`string`?e:e?.message})(G||={});var Rt=class{constructor(e,t,n,r){this._cachedPath=[],this.parent=e,this.data=t,this._path=n,this._key=r}get path(){return this._cachedPath.length||(Array.isArray(this._key)?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key)),this._cachedPath}},zt=(e,t)=>{if(It(t))return{success:!0,data:t.value};if(!e.common.issues.length)throw Error(`Validation failed but no issues detected.`);return{success:!1,get error(){if(this._error)return this._error;let t=new Et(e.common.issues);return this._error=t,this._error}}};function K(e){if(!e)return{};let{errorMap:t,invalid_type_error:n,required_error:r,description:i}=e;if(t&&(n||r))throw Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);return t?{errorMap:t,description:i}:{errorMap:(t,i)=>{let{message:a}=e;return t.code===`invalid_enum_value`?{message:a??i.defaultError}:i.data===void 0?{message:a??r??i.defaultError}:t.code===`invalid_type`?{message:a??n??i.defaultError}:{message:i.defaultError}},description:i}}var q=class{get description(){return this._def.description}_getType(e){return Tt(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:Tt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new jt,ctx:{common:e.parent.common,data:e.data,parsedType:Tt(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){let t=this._parse(e);if(Lt(t))throw Error(`Synchronous parse encountered promise.`);return t}_parseAsync(e){let t=this._parse(e);return Promise.resolve(t)}parse(e,t){let n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){let n={common:{issues:[],async:t?.async??!1,contextualErrorMap:t?.errorMap},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Tt(e)};return zt(n,this._parseSync({data:e,path:n.path,parent:n}))}"~validate"(e){let t={common:{issues:[],async:!!this[`~standard`].async},path:[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Tt(e)};if(!this[`~standard`].async)try{let n=this._parseSync({data:e,path:[],parent:t});return It(n)?{value:n.value}:{issues:t.common.issues}}catch(e){e?.message?.toLowerCase()?.includes(`encountered`)&&(this[`~standard`].async=!0),t.common={issues:[],async:!0}}return this._parseAsync({data:e,path:[],parent:t}).then(e=>It(e)?{value:e.value}:{issues:t.common.issues})}async parseAsync(e,t){let n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){let n={common:{issues:[],contextualErrorMap:t?.errorMap,async:!0},path:t?.path||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:Tt(e)},r=this._parse({data:e,path:n.path,parent:n});return zt(n,await(Lt(r)?r:Promise.resolve(r)))}refine(e,t){let n=e=>typeof t==`string`||t===void 0?{message:t}:typeof t==`function`?t(e):t;return this._refinement((t,r)=>{let i=e(t),a=()=>r.addIssue({code:H.custom,...n(t)});return typeof Promise<`u`&&i instanceof Promise?i.then(e=>e?!0:(a(),!1)):i?!0:(a(),!1)})}refinement(e,t){return this._refinement((n,r)=>e(n)?!0:(r.addIssue(typeof t==`function`?t(n,r):t),!1))}_refinement(e){return new Un({schema:this,typeName:J.ZodEffects,effect:{type:`refinement`,refinement:e}})}superRefine(e){return this._refinement(e)}constructor(e){this.spa=this.safeParseAsync,this._def=e,this.parse=this.parse.bind(this),this.safeParse=this.safeParse.bind(this),this.parseAsync=this.parseAsync.bind(this),this.safeParseAsync=this.safeParseAsync.bind(this),this.spa=this.spa.bind(this),this.refine=this.refine.bind(this),this.refinement=this.refinement.bind(this),this.superRefine=this.superRefine.bind(this),this.optional=this.optional.bind(this),this.nullable=this.nullable.bind(this),this.nullish=this.nullish.bind(this),this.array=this.array.bind(this),this.promise=this.promise.bind(this),this.or=this.or.bind(this),this.and=this.and.bind(this),this.transform=this.transform.bind(this),this.brand=this.brand.bind(this),this.default=this.default.bind(this),this.catch=this.catch.bind(this),this.describe=this.describe.bind(this),this.pipe=this.pipe.bind(this),this.readonly=this.readonly.bind(this),this.isNullable=this.isNullable.bind(this),this.isOptional=this.isOptional.bind(this),this[`~standard`]={version:1,vendor:`zod`,validate:e=>this[`~validate`](e)}}optional(){return Wn.create(this,this._def)}nullable(){return Gn.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return wn.create(this)}promise(){return Hn.create(this,this._def)}or(e){return Dn.create([this,e],this._def)}and(e){return jn.create(this,e,this._def)}transform(e){return new Un({...K(this._def),schema:this,typeName:J.ZodEffects,effect:{type:`transform`,transform:e}})}default(e){let t=typeof e==`function`?e:()=>e;return new Kn({...K(this._def),innerType:this,defaultValue:t,typeName:J.ZodDefault})}brand(){return new Yn({typeName:J.ZodBranded,type:this,...K(this._def)})}catch(e){let t=typeof e==`function`?e:()=>e;return new qn({...K(this._def),innerType:this,catchValue:t,typeName:J.ZodCatch})}describe(e){let t=this.constructor;return new t({...this._def,description:e})}pipe(e){return Xn.create(this,e)}readonly(){return Zn.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}},Bt=/^c[^\s-]{8,}$/i,Vt=/^[0-9a-z]+$/,Ht=/^[0-9A-HJKMNP-TV-Z]{26}$/i,Ut=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,Wt=/^[a-z0-9_-]{21}$/i,Gt=/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,Kt=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,qt=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,Jt=`^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`,Yt,Xt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,Zt=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,Qt=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,$t=/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,en=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,tn=/^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,nn=`((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`,rn=RegExp(`^${nn}$`);function an(e){let t=`[0-5]\\d`;e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision??(t=`${t}(\\.\\d+)?`);let n=e.precision?`+`:`?`;return`([01]\\d|2[0-3]):[0-5]\\d(:${t})${n}`}function on(e){return RegExp(`^${an(e)}$`)}function sn(e){let t=`${nn}T${an(e)}`,n=[];return n.push(e.local?`Z?`:`Z`),e.offset&&n.push(`([+-]\\d{2}:?\\d{2})`),t=`${t}(${n.join(`|`)})`,RegExp(`^${t}$`)}function cn(e,t){return!!((t===`v4`||!t)&&Xt.test(e)||(t===`v6`||!t)&&Qt.test(e))}function ln(e,t){if(!Gt.test(e))return!1;try{let[n]=e.split(`.`);if(!n)return!1;let r=n.replace(/-/g,`+`).replace(/_/g,`/`).padEnd(n.length+(4-n.length%4)%4,`=`),i=JSON.parse(atob(r));return!(typeof i!=`object`||!i||`typ`in i&&i?.typ!==`JWT`||!i.alg||t&&i.alg!==t)}catch{return!1}}function un(e,t){return!!((t===`v4`||!t)&&Zt.test(e)||(t===`v6`||!t)&&$t.test(e))}var dn=class e extends q{_parse(e){if(this._def.coerce&&(e.data=String(e.data)),this._getType(e)!==V.string){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.string,received:t.parsedType}),W}let t=new jt,n;for(let r of this._def.checks)if(r.kind===`min`)e.data.length<r.value&&(n=this._getOrReturnCtx(e,n),U(n,{code:H.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`max`)e.data.length>r.value&&(n=this._getOrReturnCtx(e,n),U(n,{code:H.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!1,message:r.message}),t.dirty());else if(r.kind===`length`){let i=e.data.length>r.value,a=e.data.length<r.value;(i||a)&&(n=this._getOrReturnCtx(e,n),i?U(n,{code:H.too_big,maximum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}):a&&U(n,{code:H.too_small,minimum:r.value,type:`string`,inclusive:!0,exact:!0,message:r.message}),t.dirty())}else if(r.kind===`email`)qt.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`email`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`emoji`)Yt||=new RegExp(Jt,`u`),Yt.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`emoji`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`uuid`)Ut.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`uuid`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`nanoid`)Wt.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`nanoid`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid`)Bt.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`cuid`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`cuid2`)Vt.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`cuid2`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`ulid`)Ht.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`ulid`,code:H.invalid_string,message:r.message}),t.dirty());else if(r.kind===`url`)try{new URL(e.data)}catch{n=this._getOrReturnCtx(e,n),U(n,{validation:`url`,code:H.invalid_string,message:r.message}),t.dirty()}else r.kind===`regex`?(r.regex.lastIndex=0,r.regex.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`regex`,code:H.invalid_string,message:r.message}),t.dirty())):r.kind===`trim`?e.data=e.data.trim():r.kind===`includes`?e.data.includes(r.value,r.position)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:{includes:r.value,position:r.position},message:r.message}),t.dirty()):r.kind===`toLowerCase`?e.data=e.data.toLowerCase():r.kind===`toUpperCase`?e.data=e.data.toUpperCase():r.kind===`startsWith`?e.data.startsWith(r.value)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:{startsWith:r.value},message:r.message}),t.dirty()):r.kind===`endsWith`?e.data.endsWith(r.value)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:{endsWith:r.value},message:r.message}),t.dirty()):r.kind===`datetime`?sn(r).test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:`datetime`,message:r.message}),t.dirty()):r.kind===`date`?rn.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:`date`,message:r.message}),t.dirty()):r.kind===`time`?on(r).test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{code:H.invalid_string,validation:`time`,message:r.message}),t.dirty()):r.kind===`duration`?Kt.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`duration`,code:H.invalid_string,message:r.message}),t.dirty()):r.kind===`ip`?cn(e.data,r.version)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`ip`,code:H.invalid_string,message:r.message}),t.dirty()):r.kind===`jwt`?ln(e.data,r.alg)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`jwt`,code:H.invalid_string,message:r.message}),t.dirty()):r.kind===`cidr`?un(e.data,r.version)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`cidr`,code:H.invalid_string,message:r.message}),t.dirty()):r.kind===`base64`?en.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`base64`,code:H.invalid_string,message:r.message}),t.dirty()):r.kind===`base64url`?tn.test(e.data)||(n=this._getOrReturnCtx(e,n),U(n,{validation:`base64url`,code:H.invalid_string,message:r.message}),t.dirty()):B.assertNever(r);return{status:t.value,value:e.data}}_regex(e,t,n){return this.refinement(t=>e.test(t),{validation:t,code:H.invalid_string,...G.errToObj(n)})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}email(e){return this._addCheck({kind:`email`,...G.errToObj(e)})}url(e){return this._addCheck({kind:`url`,...G.errToObj(e)})}emoji(e){return this._addCheck({kind:`emoji`,...G.errToObj(e)})}uuid(e){return this._addCheck({kind:`uuid`,...G.errToObj(e)})}nanoid(e){return this._addCheck({kind:`nanoid`,...G.errToObj(e)})}cuid(e){return this._addCheck({kind:`cuid`,...G.errToObj(e)})}cuid2(e){return this._addCheck({kind:`cuid2`,...G.errToObj(e)})}ulid(e){return this._addCheck({kind:`ulid`,...G.errToObj(e)})}base64(e){return this._addCheck({kind:`base64`,...G.errToObj(e)})}base64url(e){return this._addCheck({kind:`base64url`,...G.errToObj(e)})}jwt(e){return this._addCheck({kind:`jwt`,...G.errToObj(e)})}ip(e){return this._addCheck({kind:`ip`,...G.errToObj(e)})}cidr(e){return this._addCheck({kind:`cidr`,...G.errToObj(e)})}datetime(e){return typeof e==`string`?this._addCheck({kind:`datetime`,precision:null,offset:!1,local:!1,message:e}):this._addCheck({kind:`datetime`,precision:e?.precision===void 0?null:e?.precision,offset:e?.offset??!1,local:e?.local??!1,...G.errToObj(e?.message)})}date(e){return this._addCheck({kind:`date`,message:e})}time(e){return typeof e==`string`?this._addCheck({kind:`time`,precision:null,message:e}):this._addCheck({kind:`time`,precision:e?.precision===void 0?null:e?.precision,...G.errToObj(e?.message)})}duration(e){return this._addCheck({kind:`duration`,...G.errToObj(e)})}regex(e,t){return this._addCheck({kind:`regex`,regex:e,...G.errToObj(t)})}includes(e,t){return this._addCheck({kind:`includes`,value:e,position:t?.position,...G.errToObj(t?.message)})}startsWith(e,t){return this._addCheck({kind:`startsWith`,value:e,...G.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:`endsWith`,value:e,...G.errToObj(t)})}min(e,t){return this._addCheck({kind:`min`,value:e,...G.errToObj(t)})}max(e,t){return this._addCheck({kind:`max`,value:e,...G.errToObj(t)})}length(e,t){return this._addCheck({kind:`length`,value:e,...G.errToObj(t)})}nonempty(e){return this.min(1,G.errToObj(e))}trim(){return new e({...this._def,checks:[...this._def.checks,{kind:`trim`}]})}toLowerCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toLowerCase`}]})}toUpperCase(){return new e({...this._def,checks:[...this._def.checks,{kind:`toUpperCase`}]})}get isDatetime(){return!!this._def.checks.find(e=>e.kind===`datetime`)}get isDate(){return!!this._def.checks.find(e=>e.kind===`date`)}get isTime(){return!!this._def.checks.find(e=>e.kind===`time`)}get isDuration(){return!!this._def.checks.find(e=>e.kind===`duration`)}get isEmail(){return!!this._def.checks.find(e=>e.kind===`email`)}get isURL(){return!!this._def.checks.find(e=>e.kind===`url`)}get isEmoji(){return!!this._def.checks.find(e=>e.kind===`emoji`)}get isUUID(){return!!this._def.checks.find(e=>e.kind===`uuid`)}get isNANOID(){return!!this._def.checks.find(e=>e.kind===`nanoid`)}get isCUID(){return!!this._def.checks.find(e=>e.kind===`cuid`)}get isCUID2(){return!!this._def.checks.find(e=>e.kind===`cuid2`)}get isULID(){return!!this._def.checks.find(e=>e.kind===`ulid`)}get isIP(){return!!this._def.checks.find(e=>e.kind===`ip`)}get isCIDR(){return!!this._def.checks.find(e=>e.kind===`cidr`)}get isBase64(){return!!this._def.checks.find(e=>e.kind===`base64`)}get isBase64url(){return!!this._def.checks.find(e=>e.kind===`base64url`)}get minLength(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};dn.create=e=>new dn({checks:[],typeName:J.ZodString,coerce:e?.coerce??!1,...K(e)});function fn(e,t){let n=(e.toString().split(`.`)[1]||``).length,r=(t.toString().split(`.`)[1]||``).length,i=n>r?n:r;return Number.parseInt(e.toFixed(i).replace(`.`,``))%Number.parseInt(t.toFixed(i).replace(`.`,``))/10**i}var pn=class e extends q{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte,this.step=this.multipleOf}_parse(e){if(this._def.coerce&&(e.data=Number(e.data)),this._getType(e)!==V.number){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.number,received:t.parsedType}),W}let t,n=new jt;for(let r of this._def.checks)r.kind===`int`?B.isInteger(e.data)||(t=this._getOrReturnCtx(e,t),U(t,{code:H.invalid_type,expected:`integer`,received:`float`,message:r.message}),n.dirty()):r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.too_small,minimum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.too_big,maximum:r.value,type:`number`,inclusive:r.inclusive,exact:!1,message:r.message}),n.dirty()):r.kind===`multipleOf`?fn(e.data,r.value)!==0&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):r.kind===`finite`?Number.isFinite(e.data)||(t=this._getOrReturnCtx(e,t),U(t,{code:H.not_finite,message:r.message}),n.dirty()):B.assertNever(r);return{status:n.value,value:e.data}}gte(e,t){return this.setLimit(`min`,e,!0,G.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,G.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,G.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,G.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:G.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}int(e){return this._addCheck({kind:`int`,message:G.toString(e)})}positive(e){return this._addCheck({kind:`min`,value:0,inclusive:!1,message:G.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:0,inclusive:!1,message:G.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:0,inclusive:!0,message:G.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:0,inclusive:!0,message:G.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:G.toString(t)})}finite(e){return this._addCheck({kind:`finite`,message:G.toString(e)})}safe(e){return this._addCheck({kind:`min`,inclusive:!0,value:-(2**53-1),message:G.toString(e)})._addCheck({kind:`max`,inclusive:!0,value:2**53-1,message:G.toString(e)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find(e=>e.kind===`int`||e.kind===`multipleOf`&&B.isInteger(e.value))}get isFinite(){let e=null,t=null;for(let n of this._def.checks)if(n.kind===`finite`||n.kind===`int`||n.kind===`multipleOf`)return!0;else n.kind===`min`?(t===null||n.value>t)&&(t=n.value):n.kind===`max`&&(e===null||n.value<e)&&(e=n.value);return Number.isFinite(t)&&Number.isFinite(e)}};pn.create=e=>new pn({checks:[],typeName:J.ZodNumber,coerce:e?.coerce||!1,...K(e)});var mn=class e extends q{constructor(){super(...arguments),this.min=this.gte,this.max=this.lte}_parse(e){if(this._def.coerce)try{e.data=BigInt(e.data)}catch{return this._getInvalidInput(e)}if(this._getType(e)!==V.bigint)return this._getInvalidInput(e);let t,n=new jt;for(let r of this._def.checks)r.kind===`min`?(r.inclusive?e.data<r.value:e.data<=r.value)&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.too_small,type:`bigint`,minimum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`max`?(r.inclusive?e.data>r.value:e.data>=r.value)&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.too_big,type:`bigint`,maximum:r.value,inclusive:r.inclusive,message:r.message}),n.dirty()):r.kind===`multipleOf`?e.data%r.value!==BigInt(0)&&(t=this._getOrReturnCtx(e,t),U(t,{code:H.not_multiple_of,multipleOf:r.value,message:r.message}),n.dirty()):B.assertNever(r);return{status:n.value,value:e.data}}_getInvalidInput(e){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.bigint,received:t.parsedType}),W}gte(e,t){return this.setLimit(`min`,e,!0,G.toString(t))}gt(e,t){return this.setLimit(`min`,e,!1,G.toString(t))}lte(e,t){return this.setLimit(`max`,e,!0,G.toString(t))}lt(e,t){return this.setLimit(`max`,e,!1,G.toString(t))}setLimit(t,n,r,i){return new e({...this._def,checks:[...this._def.checks,{kind:t,value:n,inclusive:r,message:G.toString(i)}]})}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}positive(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!1,message:G.toString(e)})}negative(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!1,message:G.toString(e)})}nonpositive(e){return this._addCheck({kind:`max`,value:BigInt(0),inclusive:!0,message:G.toString(e)})}nonnegative(e){return this._addCheck({kind:`min`,value:BigInt(0),inclusive:!0,message:G.toString(e)})}multipleOf(e,t){return this._addCheck({kind:`multipleOf`,value:e,message:G.toString(t)})}get minValue(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e}};mn.create=e=>new mn({checks:[],typeName:J.ZodBigInt,coerce:e?.coerce??!1,...K(e)});var hn=class extends q{_parse(e){if(this._def.coerce&&(e.data=!!e.data),this._getType(e)!==V.boolean){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.boolean,received:t.parsedType}),W}return Nt(e.data)}};hn.create=e=>new hn({typeName:J.ZodBoolean,coerce:e?.coerce||!1,...K(e)});var gn=class e extends q{_parse(e){if(this._def.coerce&&(e.data=new Date(e.data)),this._getType(e)!==V.date){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.date,received:t.parsedType}),W}if(Number.isNaN(e.data.getTime()))return U(this._getOrReturnCtx(e),{code:H.invalid_date}),W;let t=new jt,n;for(let r of this._def.checks)r.kind===`min`?e.data.getTime()<r.value&&(n=this._getOrReturnCtx(e,n),U(n,{code:H.too_small,message:r.message,inclusive:!0,exact:!1,minimum:r.value,type:`date`}),t.dirty()):r.kind===`max`?e.data.getTime()>r.value&&(n=this._getOrReturnCtx(e,n),U(n,{code:H.too_big,message:r.message,inclusive:!0,exact:!1,maximum:r.value,type:`date`}),t.dirty()):B.assertNever(r);return{status:t.value,value:new Date(e.data.getTime())}}_addCheck(t){return new e({...this._def,checks:[...this._def.checks,t]})}min(e,t){return this._addCheck({kind:`min`,value:e.getTime(),message:G.toString(t)})}max(e,t){return this._addCheck({kind:`max`,value:e.getTime(),message:G.toString(t)})}get minDate(){let e=null;for(let t of this._def.checks)t.kind===`min`&&(e===null||t.value>e)&&(e=t.value);return e==null?null:new Date(e)}get maxDate(){let e=null;for(let t of this._def.checks)t.kind===`max`&&(e===null||t.value<e)&&(e=t.value);return e==null?null:new Date(e)}};gn.create=e=>new gn({checks:[],coerce:e?.coerce||!1,typeName:J.ZodDate,...K(e)});var _n=class extends q{_parse(e){if(this._getType(e)!==V.symbol){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.symbol,received:t.parsedType}),W}return Nt(e.data)}};_n.create=e=>new _n({typeName:J.ZodSymbol,...K(e)});var vn=class extends q{_parse(e){if(this._getType(e)!==V.undefined){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.undefined,received:t.parsedType}),W}return Nt(e.data)}};vn.create=e=>new vn({typeName:J.ZodUndefined,...K(e)});var yn=class extends q{_parse(e){if(this._getType(e)!==V.null){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.null,received:t.parsedType}),W}return Nt(e.data)}};yn.create=e=>new yn({typeName:J.ZodNull,...K(e)});var bn=class extends q{constructor(){super(...arguments),this._any=!0}_parse(e){return Nt(e.data)}};bn.create=e=>new bn({typeName:J.ZodAny,...K(e)});var xn=class extends q{constructor(){super(...arguments),this._unknown=!0}_parse(e){return Nt(e.data)}};xn.create=e=>new xn({typeName:J.ZodUnknown,...K(e)});var Sn=class extends q{_parse(e){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.never,received:t.parsedType}),W}};Sn.create=e=>new Sn({typeName:J.ZodNever,...K(e)});var Cn=class extends q{_parse(e){if(this._getType(e)!==V.undefined){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.void,received:t.parsedType}),W}return Nt(e.data)}};Cn.create=e=>new Cn({typeName:J.ZodVoid,...K(e)});var wn=class e extends q{_parse(e){let{ctx:t,status:n}=this._processInputParams(e),r=this._def;if(t.parsedType!==V.array)return U(t,{code:H.invalid_type,expected:V.array,received:t.parsedType}),W;if(r.exactLength!==null){let e=t.data.length>r.exactLength.value,i=t.data.length<r.exactLength.value;(e||i)&&(U(t,{code:e?H.too_big:H.too_small,minimum:i?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:`array`,inclusive:!0,exact:!0,message:r.exactLength.message}),n.dirty())}if(r.minLength!==null&&t.data.length<r.minLength.value&&(U(t,{code:H.too_small,minimum:r.minLength.value,type:`array`,inclusive:!0,exact:!1,message:r.minLength.message}),n.dirty()),r.maxLength!==null&&t.data.length>r.maxLength.value&&(U(t,{code:H.too_big,maximum:r.maxLength.value,type:`array`,inclusive:!0,exact:!1,message:r.maxLength.message}),n.dirty()),t.common.async)return Promise.all([...t.data].map((e,n)=>r.type._parseAsync(new Rt(t,e,t.path,n)))).then(e=>jt.mergeArray(n,e));let i=[...t.data].map((e,n)=>r.type._parseSync(new Rt(t,e,t.path,n)));return jt.mergeArray(n,i)}get element(){return this._def.type}min(t,n){return new e({...this._def,minLength:{value:t,message:G.toString(n)}})}max(t,n){return new e({...this._def,maxLength:{value:t,message:G.toString(n)}})}length(t,n){return new e({...this._def,exactLength:{value:t,message:G.toString(n)}})}nonempty(e){return this.min(1,e)}};wn.create=(e,t)=>new wn({type:e,minLength:null,maxLength:null,exactLength:null,typeName:J.ZodArray,...K(t)});function Tn(e){if(e instanceof En){let t={};for(let n in e.shape){let r=e.shape[n];t[n]=Wn.create(Tn(r))}return new En({...e._def,shape:()=>t})}else if(e instanceof wn)return new wn({...e._def,type:Tn(e.element)});else if(e instanceof Wn)return Wn.create(Tn(e.unwrap()));else if(e instanceof Gn)return Gn.create(Tn(e.unwrap()));else if(e instanceof Mn)return Mn.create(e.items.map(e=>Tn(e)));else return e}var En=class e extends q{constructor(){super(...arguments),this._cached=null,this.nonstrict=this.passthrough,this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;let e=this._def.shape(),t=B.objectKeys(e);return this._cached={shape:e,keys:t},this._cached}_parse(e){if(this._getType(e)!==V.object){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.object,received:t.parsedType}),W}let{status:t,ctx:n}=this._processInputParams(e),{shape:r,keys:i}=this._getCached(),a=[];if(!(this._def.catchall instanceof Sn&&this._def.unknownKeys===`strip`))for(let e in n.data)i.includes(e)||a.push(e);let o=[];for(let e of i){let t=r[e],i=n.data[e];o.push({key:{status:`valid`,value:e},value:t._parse(new Rt(n,i,n.path,e)),alwaysSet:e in n.data})}if(this._def.catchall instanceof Sn){let e=this._def.unknownKeys;if(e===`passthrough`)for(let e of a)o.push({key:{status:`valid`,value:e},value:{status:`valid`,value:n.data[e]}});else if(e===`strict`)a.length>0&&(U(n,{code:H.unrecognized_keys,keys:a}),t.dirty());else if(e!==`strip`)throw Error(`Internal ZodObject error: invalid unknownKeys value.`)}else{let e=this._def.catchall;for(let t of a){let r=n.data[t];o.push({key:{status:`valid`,value:t},value:e._parse(new Rt(n,r,n.path,t)),alwaysSet:t in n.data})}}return n.common.async?Promise.resolve().then(async()=>{let e=[];for(let t of o){let n=await t.key,r=await t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e}).then(e=>jt.mergeObjectSync(t,e)):jt.mergeObjectSync(t,o)}get shape(){return this._def.shape()}strict(t){return G.errToObj,new e({...this._def,unknownKeys:`strict`,...t===void 0?{}:{errorMap:(e,n)=>{let r=this._def.errorMap?.(e,n).message??n.defaultError;return e.code===`unrecognized_keys`?{message:G.errToObj(t).message??r}:{message:r}}}})}strip(){return new e({...this._def,unknownKeys:`strip`})}passthrough(){return new e({...this._def,unknownKeys:`passthrough`})}extend(t){return new e({...this._def,shape:()=>({...this._def.shape(),...t})})}merge(t){return new e({unknownKeys:t._def.unknownKeys,catchall:t._def.catchall,shape:()=>({...this._def.shape(),...t._def.shape()}),typeName:J.ZodObject})}setKey(e,t){return this.augment({[e]:t})}catchall(t){return new e({...this._def,catchall:t})}pick(t){let n={};for(let e of B.objectKeys(t))t[e]&&this.shape[e]&&(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}omit(t){let n={};for(let e of B.objectKeys(this.shape))t[e]||(n[e]=this.shape[e]);return new e({...this._def,shape:()=>n})}deepPartial(){return Tn(this)}partial(t){let n={};for(let e of B.objectKeys(this.shape)){let r=this.shape[e];t&&!t[e]?n[e]=r:n[e]=r.optional()}return new e({...this._def,shape:()=>n})}required(t){let n={};for(let e of B.objectKeys(this.shape))if(t&&!t[e])n[e]=this.shape[e];else{let t=this.shape[e];for(;t instanceof Wn;)t=t._def.innerType;n[e]=t}return new e({...this._def,shape:()=>n})}keyof(){return zn(B.objectKeys(this.shape))}};En.create=(e,t)=>new En({shape:()=>e,unknownKeys:`strip`,catchall:Sn.create(),typeName:J.ZodObject,...K(t)}),En.strictCreate=(e,t)=>new En({shape:()=>e,unknownKeys:`strict`,catchall:Sn.create(),typeName:J.ZodObject,...K(t)}),En.lazycreate=(e,t)=>new En({shape:e,unknownKeys:`strip`,catchall:Sn.create(),typeName:J.ZodObject,...K(t)});var Dn=class extends q{_parse(e){let{ctx:t}=this._processInputParams(e),n=this._def.options;function r(e){for(let t of e)if(t.result.status===`valid`)return t.result;for(let n of e)if(n.result.status===`dirty`)return t.common.issues.push(...n.ctx.common.issues),n.result;let n=e.map(e=>new Et(e.ctx.common.issues));return U(t,{code:H.invalid_union,unionErrors:n}),W}if(t.common.async)return Promise.all(n.map(async e=>{let n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}})).then(r);{let e,r=[];for(let i of n){let n={...t,common:{...t.common,issues:[]},parent:null},a=i._parseSync({data:t.data,path:t.path,parent:n});if(a.status===`valid`)return a;a.status===`dirty`&&!e&&(e={result:a,ctx:n}),n.common.issues.length&&r.push(n.common.issues)}if(e)return t.common.issues.push(...e.ctx.common.issues),e.result;let i=r.map(e=>new Et(e));return U(t,{code:H.invalid_union,unionErrors:i}),W}}get options(){return this._def.options}};Dn.create=(e,t)=>new Dn({options:e,typeName:J.ZodUnion,...K(t)});var On=e=>e instanceof Ln?On(e.schema):e instanceof Un?On(e.innerType()):e instanceof Rn?[e.value]:e instanceof Bn?e.options:e instanceof Vn?B.objectValues(e.enum):e instanceof Kn?On(e._def.innerType):e instanceof vn?[void 0]:e instanceof yn?[null]:e instanceof Wn?[void 0,...On(e.unwrap())]:e instanceof Gn?[null,...On(e.unwrap())]:e instanceof Yn||e instanceof Zn?On(e.unwrap()):e instanceof qn?On(e._def.innerType):[],kn=class e extends q{_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==V.object)return U(t,{code:H.invalid_type,expected:V.object,received:t.parsedType}),W;let n=this.discriminator,r=t.data[n],i=this.optionsMap.get(r);return i?t.common.async?i._parseAsync({data:t.data,path:t.path,parent:t}):i._parseSync({data:t.data,path:t.path,parent:t}):(U(t,{code:H.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]}),W)}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}static create(t,n,r){let i=new Map;for(let e of n){let n=On(e.shape[t]);if(!n.length)throw Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);for(let r of n){if(i.has(r))throw Error(`Discriminator property ${String(t)} has duplicate value ${String(r)}`);i.set(r,e)}}return new e({typeName:J.ZodDiscriminatedUnion,discriminator:t,options:n,optionsMap:i,...K(r)})}};function An(e,t){let n=Tt(e),r=Tt(t);if(e===t)return{valid:!0,data:e};if(n===V.object&&r===V.object){let n=B.objectKeys(t),r=B.objectKeys(e).filter(e=>n.indexOf(e)!==-1),i={...e,...t};for(let n of r){let r=An(e[n],t[n]);if(!r.valid)return{valid:!1};i[n]=r.data}return{valid:!0,data:i}}else if(n===V.array&&r===V.array){if(e.length!==t.length)return{valid:!1};let n=[];for(let r=0;r<e.length;r++){let i=e[r],a=t[r],o=An(i,a);if(!o.valid)return{valid:!1};n.push(o.data)}return{valid:!0,data:n}}else if(n===V.date&&r===V.date&&+e==+t)return{valid:!0,data:e};else return{valid:!1}}var jn=class extends q{_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=(e,r)=>{if(Pt(e)||Pt(r))return W;let i=An(e.value,r.value);return i.valid?((Ft(e)||Ft(r))&&t.dirty(),{status:t.value,value:i.data}):(U(n,{code:H.invalid_intersection_types}),W)};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then(([e,t])=>r(e,t)):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}};jn.create=(e,t,n)=>new jn({left:e,right:t,typeName:J.ZodIntersection,...K(n)});var Mn=class e extends q{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==V.array)return U(n,{code:H.invalid_type,expected:V.array,received:n.parsedType}),W;if(n.data.length<this._def.items.length)return U(n,{code:H.too_small,minimum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),W;!this._def.rest&&n.data.length>this._def.items.length&&(U(n,{code:H.too_big,maximum:this._def.items.length,inclusive:!0,exact:!1,type:`array`}),t.dirty());let r=[...n.data].map((e,t)=>{let r=this._def.items[t]||this._def.rest;return r?r._parse(new Rt(n,e,n.path,t)):null}).filter(e=>!!e);return n.common.async?Promise.all(r).then(e=>jt.mergeArray(t,e)):jt.mergeArray(t,r)}get items(){return this._def.items}rest(t){return new e({...this._def,rest:t})}};Mn.create=(e,t)=>{if(!Array.isArray(e))throw Error(`You must pass an array of schemas to z.tuple([ ... ])`);return new Mn({items:e,typeName:J.ZodTuple,rest:null,...K(t)})};var Nn=class e extends q{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==V.object)return U(n,{code:H.invalid_type,expected:V.object,received:n.parsedType}),W;let r=[],i=this._def.keyType,a=this._def.valueType;for(let e in n.data)r.push({key:i._parse(new Rt(n,e,n.path,e)),value:a._parse(new Rt(n,n.data[e],n.path,e)),alwaysSet:e in n.data});return n.common.async?jt.mergeObjectAsync(t,r):jt.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(t,n,r){return n instanceof q?new e({keyType:t,valueType:n,typeName:J.ZodRecord,...K(r)}):new e({keyType:dn.create(),valueType:t,typeName:J.ZodRecord,...K(n)})}},Pn=class extends q{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==V.map)return U(n,{code:H.invalid_type,expected:V.map,received:n.parsedType}),W;let r=this._def.keyType,i=this._def.valueType,a=[...n.data.entries()].map(([e,t],a)=>({key:r._parse(new Rt(n,e,n.path,[a,`key`])),value:i._parse(new Rt(n,t,n.path,[a,`value`]))}));if(n.common.async){let e=new Map;return Promise.resolve().then(async()=>{for(let n of a){let r=await n.key,i=await n.value;if(r.status===`aborted`||i.status===`aborted`)return W;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}})}else{let e=new Map;for(let n of a){let r=n.key,i=n.value;if(r.status===`aborted`||i.status===`aborted`)return W;(r.status===`dirty`||i.status===`dirty`)&&t.dirty(),e.set(r.value,i.value)}return{status:t.value,value:e}}}};Pn.create=(e,t,n)=>new Pn({valueType:t,keyType:e,typeName:J.ZodMap,...K(n)});var Fn=class e extends q{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==V.set)return U(n,{code:H.invalid_type,expected:V.set,received:n.parsedType}),W;let r=this._def;r.minSize!==null&&n.data.size<r.minSize.value&&(U(n,{code:H.too_small,minimum:r.minSize.value,type:`set`,inclusive:!0,exact:!1,message:r.minSize.message}),t.dirty()),r.maxSize!==null&&n.data.size>r.maxSize.value&&(U(n,{code:H.too_big,maximum:r.maxSize.value,type:`set`,inclusive:!0,exact:!1,message:r.maxSize.message}),t.dirty());let i=this._def.valueType;function a(e){let n=new Set;for(let r of e){if(r.status===`aborted`)return W;r.status===`dirty`&&t.dirty(),n.add(r.value)}return{status:t.value,value:n}}let o=[...n.data.values()].map((e,t)=>i._parse(new Rt(n,e,n.path,t)));return n.common.async?Promise.all(o).then(e=>a(e)):a(o)}min(t,n){return new e({...this._def,minSize:{value:t,message:G.toString(n)}})}max(t,n){return new e({...this._def,maxSize:{value:t,message:G.toString(n)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}};Fn.create=(e,t)=>new Fn({valueType:e,minSize:null,maxSize:null,typeName:J.ZodSet,...K(t)});var In=class e extends q{constructor(){super(...arguments),this.validate=this.implement}_parse(e){let{ctx:t}=this._processInputParams(e);if(t.parsedType!==V.function)return U(t,{code:H.invalid_type,expected:V.function,received:t.parsedType}),W;function n(e,n){return At({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,kt(),Dt].filter(e=>!!e),issueData:{code:H.invalid_arguments,argumentsError:n}})}function r(e,n){return At({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,kt(),Dt].filter(e=>!!e),issueData:{code:H.invalid_return_type,returnTypeError:n}})}let i={errorMap:t.common.contextualErrorMap},a=t.data;if(this._def.returns instanceof Hn){let e=this;return Nt(async function(...t){let o=new Et([]),s=await e._def.args.parseAsync(t,i).catch(e=>{throw o.addIssue(n(t,e)),o}),c=await Reflect.apply(a,this,s);return await e._def.returns._def.type.parseAsync(c,i).catch(e=>{throw o.addIssue(r(c,e)),o})})}else{let e=this;return Nt(function(...t){let o=e._def.args.safeParse(t,i);if(!o.success)throw new Et([n(t,o.error)]);let s=Reflect.apply(a,this,o.data),c=e._def.returns.safeParse(s,i);if(!c.success)throw new Et([r(s,c.error)]);return c.data})}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...t){return new e({...this._def,args:Mn.create(t).rest(xn.create())})}returns(t){return new e({...this._def,returns:t})}implement(e){return this.parse(e)}strictImplement(e){return this.parse(e)}static create(t,n,r){return new e({args:t||Mn.create([]).rest(xn.create()),returns:n||xn.create(),typeName:J.ZodFunction,...K(r)})}},Ln=class extends q{get schema(){return this._def.getter()}_parse(e){let{ctx:t}=this._processInputParams(e);return this._def.getter()._parse({data:t.data,path:t.path,parent:t})}};Ln.create=(e,t)=>new Ln({getter:e,typeName:J.ZodLazy,...K(t)});var Rn=class extends q{_parse(e){if(e.data!==this._def.value){let t=this._getOrReturnCtx(e);return U(t,{received:t.data,code:H.invalid_literal,expected:this._def.value}),W}return{status:`valid`,value:e.data}}get value(){return this._def.value}};Rn.create=(e,t)=>new Rn({value:e,typeName:J.ZodLiteral,...K(t)});function zn(e,t){return new Bn({values:e,typeName:J.ZodEnum,...K(t)})}var Bn=class e extends q{_parse(e){if(typeof e.data!=`string`){let t=this._getOrReturnCtx(e),n=this._def.values;return U(t,{expected:B.joinValues(n),received:t.parsedType,code:H.invalid_type}),W}if(this._cache||=new Set(this._def.values),!this._cache.has(e.data)){let t=this._getOrReturnCtx(e),n=this._def.values;return U(t,{received:t.data,code:H.invalid_enum_value,options:n}),W}return Nt(e.data)}get options(){return this._def.values}get enum(){let e={};for(let t of this._def.values)e[t]=t;return e}get Values(){let e={};for(let t of this._def.values)e[t]=t;return e}get Enum(){let e={};for(let t of this._def.values)e[t]=t;return e}extract(t,n=this._def){return e.create(t,{...this._def,...n})}exclude(t,n=this._def){return e.create(this.options.filter(e=>!t.includes(e)),{...this._def,...n})}};Bn.create=zn;var Vn=class extends q{_parse(e){let t=B.getValidEnumValues(this._def.values),n=this._getOrReturnCtx(e);if(n.parsedType!==V.string&&n.parsedType!==V.number){let e=B.objectValues(t);return U(n,{expected:B.joinValues(e),received:n.parsedType,code:H.invalid_type}),W}if(this._cache||=new Set(B.getValidEnumValues(this._def.values)),!this._cache.has(e.data)){let e=B.objectValues(t);return U(n,{received:n.data,code:H.invalid_enum_value,options:e}),W}return Nt(e.data)}get enum(){return this._def.values}};Vn.create=(e,t)=>new Vn({values:e,typeName:J.ZodNativeEnum,...K(t)});var Hn=class extends q{unwrap(){return this._def.type}_parse(e){let{ctx:t}=this._processInputParams(e);return t.parsedType!==V.promise&&t.common.async===!1?(U(t,{code:H.invalid_type,expected:V.promise,received:t.parsedType}),W):Nt((t.parsedType===V.promise?t.data:Promise.resolve(t.data)).then(e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap})))}};Hn.create=(e,t)=>new Hn({type:e,typeName:J.ZodPromise,...K(t)});var Un=class extends q{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===J.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){let{status:t,ctx:n}=this._processInputParams(e),r=this._def.effect||null,i={addIssue:e=>{U(n,e),e.fatal?t.abort():t.dirty()},get path(){return n.path}};if(i.addIssue=i.addIssue.bind(i),r.type===`preprocess`){let e=r.transform(n.data,i);if(n.common.async)return Promise.resolve(e).then(async e=>{if(t.value===`aborted`)return W;let r=await this._def.schema._parseAsync({data:e,path:n.path,parent:n});return r.status===`aborted`?W:r.status===`dirty`||t.value===`dirty`?Mt(r.value):r});{if(t.value===`aborted`)return W;let r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return r.status===`aborted`?W:r.status===`dirty`||t.value===`dirty`?Mt(r.value):r}}if(r.type===`refinement`){let e=e=>{let t=r.refinement(e,i);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw Error(`Async refinement encountered during synchronous parse operation. Use .parseAsync instead.`);return e};if(n.common.async===!1){let r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});return r.status===`aborted`?W:(r.status===`dirty`&&t.dirty(),e(r.value),{status:t.value,value:r.value})}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(n=>n.status===`aborted`?W:(n.status===`dirty`&&t.dirty(),e(n.value).then(()=>({status:t.value,value:n.value}))))}if(r.type===`transform`)if(n.common.async===!1){let e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!It(e))return W;let a=r.transform(e.value,i);if(a instanceof Promise)throw Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);return{status:t.value,value:a}}else return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then(e=>It(e)?Promise.resolve(r.transform(e.value,i)).then(e=>({status:t.value,value:e})):W);B.assertNever(r)}};Un.create=(e,t,n)=>new Un({schema:e,typeName:J.ZodEffects,effect:t,...K(n)}),Un.createWithPreprocess=(e,t,n)=>new Un({schema:t,effect:{type:`preprocess`,transform:e},typeName:J.ZodEffects,...K(n)});var Wn=class extends q{_parse(e){return this._getType(e)===V.undefined?Nt(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Wn.create=(e,t)=>new Wn({innerType:e,typeName:J.ZodOptional,...K(t)});var Gn=class extends q{_parse(e){return this._getType(e)===V.null?Nt(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}};Gn.create=(e,t)=>new Gn({innerType:e,typeName:J.ZodNullable,...K(t)});var Kn=class extends q{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return t.parsedType===V.undefined&&(n=this._def.defaultValue()),this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}};Kn.create=(e,t)=>new Kn({innerType:e,typeName:J.ZodDefault,defaultValue:typeof t.default==`function`?t.default:()=>t.default,...K(t)});var qn=class extends q{_parse(e){let{ctx:t}=this._processInputParams(e),n={...t,common:{...t.common,issues:[]}},r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return Lt(r)?r.then(e=>({status:`valid`,value:e.status===`valid`?e.value:this._def.catchValue({get error(){return new Et(n.common.issues)},input:n.data})})):{status:`valid`,value:r.status===`valid`?r.value:this._def.catchValue({get error(){return new Et(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}};qn.create=(e,t)=>new qn({innerType:e,typeName:J.ZodCatch,catchValue:typeof t.catch==`function`?t.catch:()=>t.catch,...K(t)});var Jn=class extends q{_parse(e){if(this._getType(e)!==V.nan){let t=this._getOrReturnCtx(e);return U(t,{code:H.invalid_type,expected:V.nan,received:t.parsedType}),W}return{status:`valid`,value:e.data}}};Jn.create=e=>new Jn({typeName:J.ZodNaN,...K(e)});var Yn=class extends q{_parse(e){let{ctx:t}=this._processInputParams(e),n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}},Xn=class e extends q{_parse(e){let{status:t,ctx:n}=this._processInputParams(e);if(n.common.async)return(async()=>{let e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?W:e.status===`dirty`?(t.dirty(),Mt(e.value)):this._def.out._parseAsync({data:e.value,path:n.path,parent:n})})();{let e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});return e.status===`aborted`?W:e.status===`dirty`?(t.dirty(),{status:`dirty`,value:e.value}):this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(t,n){return new e({in:t,out:n,typeName:J.ZodPipeline})}},Zn=class extends q{_parse(e){let t=this._def.innerType._parse(e),n=e=>(It(e)&&(e.value=Object.freeze(e.value)),e);return Lt(t)?t.then(e=>n(e)):n(t)}unwrap(){return this._def.innerType}};Zn.create=(e,t)=>new Zn({innerType:e,typeName:J.ZodReadonly,...K(t)}),En.lazycreate;var J;(function(e){e.ZodString=`ZodString`,e.ZodNumber=`ZodNumber`,e.ZodNaN=`ZodNaN`,e.ZodBigInt=`ZodBigInt`,e.ZodBoolean=`ZodBoolean`,e.ZodDate=`ZodDate`,e.ZodSymbol=`ZodSymbol`,e.ZodUndefined=`ZodUndefined`,e.ZodNull=`ZodNull`,e.ZodAny=`ZodAny`,e.ZodUnknown=`ZodUnknown`,e.ZodNever=`ZodNever`,e.ZodVoid=`ZodVoid`,e.ZodArray=`ZodArray`,e.ZodObject=`ZodObject`,e.ZodUnion=`ZodUnion`,e.ZodDiscriminatedUnion=`ZodDiscriminatedUnion`,e.ZodIntersection=`ZodIntersection`,e.ZodTuple=`ZodTuple`,e.ZodRecord=`ZodRecord`,e.ZodMap=`ZodMap`,e.ZodSet=`ZodSet`,e.ZodFunction=`ZodFunction`,e.ZodLazy=`ZodLazy`,e.ZodLiteral=`ZodLiteral`,e.ZodEnum=`ZodEnum`,e.ZodEffects=`ZodEffects`,e.ZodNativeEnum=`ZodNativeEnum`,e.ZodOptional=`ZodOptional`,e.ZodNullable=`ZodNullable`,e.ZodDefault=`ZodDefault`,e.ZodCatch=`ZodCatch`,e.ZodPromise=`ZodPromise`,e.ZodBranded=`ZodBranded`,e.ZodPipeline=`ZodPipeline`,e.ZodReadonly=`ZodReadonly`})(J||={});var Qn=dn.create,$n=pn.create;Jn.create,mn.create;var er=hn.create;gn.create,_n.create,vn.create,yn.create,bn.create,xn.create,Sn.create,Cn.create;var tr=wn.create,nr=En.create;En.strictCreate;var rr=Dn.create;kn.create,jn.create,Mn.create;var ir=Nn.create;Pn.create,Fn.create,In.create,Ln.create;var ar=Rn.create,or=Bn.create;Vn.create,Hn.create,Un.create,Wn.create,Gn.create,Un.createWithPreprocess,Xn.create;function sr(e){return e.normalize(`NFKC`).trim().toLowerCase().replace(/[‘’]/g,`'`).replace(/\s+/g,` `)}function cr(e,t){return e.format===`input`&&sr(t).length>0&&e.acceptedAnswers.some(e=>sr(e)===sr(t))}var lr={structure:`句子结构`,agreement:`主语与形式`,transformation:`否定与提问`,meaning:`理解意义`,expression:`自主表达`};function ur(e,t){let n=e.questions.slice(0,e.verificationSize),r=new Map,i=[],a=n.length>0&&n.length===e.verificationSize&&t.length===n.length,o=0,s=0,c=0,l=n.some(e=>e.format===`text`);for(let e of n){let n=t.find(t=>t.questionId===e.id);if(e.format===`text`){let t=n?.criteriaChecks,l=!!n&&n.assessment===`self`&&typeof n.text==`string`&&n.text.trim().length>0&&n.text.length<=2e3&&n.choice===-1&&Array.isArray(t)&&t.length===e.criteria.length&&t.length>0&&t.every(e=>typeof e==`boolean`),u=l?t.filter(Boolean).length:0,d=l&&u===e.criteria.length;(!l||n?.correct!==d)&&(a=!1),d&&o++,s+=u,c+=e.criteria.length;let f=r.get(e.skill)??{id:e.skill,label:lr[e.skill],met:0,total:0};f.met+=u,f.total+=e.criteria.length,r.set(e.skill,f),e.critical&&!d&&i.push(e.id)}else if(e.format===`input`){let t=!!n&&n.assessment===`automatic`&&n.choice===-1&&typeof n.text==`string`&&n.text.trim().length>0&&n.text.length<=2e3,r=t&&cr(e,n.text);(!t||n?.correct!==r)&&(a=!1),r&&(o++,s++),c++}else{let t=!!n&&Number.isInteger(n.choice)&&n.choice>=0&&n.choice<e.choices.length,r=t&&n.choice===e.answer;(!t||n?.correct!==r)&&(a=!1),r&&(o++,s++),c++}}new Set(t.map(e=>e.questionId)).size!==t.length&&(a=!1);let u=a&&(l?i.length===0&&c>0&&s/c>=.8:o===n.length);return{complete:a,passed:u,correct:o,total:n.length,criteriaMet:s,criteriaTotal:c,selfAssessed:l,skills:[...r.values()],criticalErrors:i}}var dr=`official-reference-2026-10-03`;function fr(e){return/^grammar-course-(?:0[1-9]|[1-3][0-9]|4[0-8])$/.test(e)?dr:void 0}function pr(){return{version:1,revision:0,settings:{level:`cet4`,dailyNew:10,retention:.9,includeSpelling:!1},marks:{},cards:{},attempts:[],reviews:[],papers:{},resume:null,checks:{}}}var mr=Qn().min(1).max(240).refine(e=>![`__proto__`,`constructor`,`prototype`].includes(e),`内容编号不合法`),hr=$n().finite().min(0).max(864e13),gr=or([`today`,`words`,`grammar`,`exams`,`collection`,`settings`]),_r=or([`high-school`,`cet4`,`cet6`]),vr=nr({id:mr,title:Qn().max(500),subtitle:Qn().max(5e3),kind:or([`word`,`phrase`,`grammar`,`sentence`,`question`]),level:_r.optional(),bookId:mr.optional(),source:Qn().max(1e3),targetId:mr,view:gr}).strict(),yr=nr({ref:vr,favorite:er(),flags:tr(or([`important`,`difficult`])).max(2),self:or([`unmarked`,`known`,`learned`]),updatedAt:hr,learnedAt:hr.optional()}).strict(),br=nr({due:hr,stability:$n().finite().min(0),difficulty:$n().finite().min(0).max(10),elapsed_days:$n().finite().min(0),scheduled_days:$n().finite().min(0),learning_steps:$n().int().min(0),reps:$n().int().min(0),lapses:$n().int().min(0),state:$n().int().min(0).max(3),last_review:hr.optional(),paused:er(),nextDayReviewAt:hr.optional()}).strict(),xr=nr({questionId:mr,choice:$n().int().min(-1).max(30),correct:er(),text:Qn().max(2e3).optional(),criteriaChecks:tr(er()).min(1).max(30).optional(),assessment:or([`automatic`,`self`]).optional()}).strict(),Sr=nr({id:mr,itemId:mr,at:hr,mode:or([`verification`,`review`]),passed:er(),responses:tr(xr).min(1).max(100),curriculumRevision:Qn().min(1).max(80).optional(),skill:or([`meaning`,`spelling`,`grammar`]).optional()}).strict(),Cr=nr({id:mr,itemId:mr,at:hr,grade:rr([ar(1),ar(2),ar(3),ar(4)]),due:hr,stability:$n().finite().min(0),difficulty:$n().finite().min(0).max(10),state:$n().int().min(0).max(3),elapsedDays:$n().finite().min(0),scheduledDays:$n().finite().min(0),source:or([`verification`,`review`])}).strict(),wr=nr({version:ar(1),revision:$n().int().min(0),settings:nr({level:_r,wordBooks:nr({"high-school":mr.optional(),cet4:mr.optional(),cet6:mr.optional()}).strict().optional(),dailyNew:$n().int().min(0).max(100),retention:$n().min(.8).max(.97),includeSpelling:er().optional()}).strict(),marks:ir(mr,yr),cards:ir(mr,br),attempts:tr(Sr),reviews:tr(Cr),papers:ir(mr,nr({answers:ir(mr,Qn().max(3e4)),submittedAt:hr.optional(),updatedAt:hr}).strict()),resume:nr({view:gr,targetId:mr,title:Qn().max(500),at:hr}).strict().nullable(),checks:ir(mr,nr({ref:vr,requestedAt:hr}).strict()).default({})}).strict();function Tr(e){let t=wr.safeParse(e);if(!t.success)throw Error(`备份格式或版本不正确，原有记录未修改。`);let n=t.data;for(let[e,t]of Object.entries(n.marks))if(e!==t.ref.id)throw Error(`备份内容编号不一致，原有记录未修改。`);for(let[e,t]of Object.entries(n.checks))if(e!==t.ref.id)throw Error(`小测内容编号不一致，原有记录未修改。`);if(new Set(n.attempts.map(e=>e.id)).size!==n.attempts.length||new Set(n.reviews.map(e=>e.id)).size!==n.reviews.length)throw Error(`备份中有重复记录，原有记录未修改。`);return n}function Er(e){return JSON.stringify({format:`english-workbench`,version:1,exportedAt:new Date().toISOString(),state:e},null,2)}function Dr(e){if(new TextEncoder().encode(e).length>20971520)throw Error(`备份文件超过20MB，请使用完整且有效的学习备份。`);let t;try{t=JSON.parse(e)}catch{throw Error(`这不是有效的JSON备份，原有记录未修改。`)}if(t?.format!==`english-workbench`||t.version!==1)throw Error(`请选择本工作台导出的版本1学习备份。`);return Tr(t.state)}function Or(e,t){return e.marks[t.id]??{ref:t,favorite:!1,flags:[],self:`unmarked`,updatedAt:0}}function kr(e){let{id:t,title:n,subtitle:r,kind:i,level:a,bookId:o,source:s,targetId:c,view:l}=e;return{id:t,title:n,subtitle:r,kind:i,...a?{level:a}:{},...o?{bookId:o}:{},source:s,targetId:c,view:l}}function Ar(e,t,n,r=Date.now()){return{...e,marks:{...e.marks,[t.id]:{...Or(e,t),...n,ref:kr(t),updatedAt:r}}}}var jr=1440*60*1e3,Mr=480*60*1e3;function Nr(e=Date.now()){return Math.floor((e+Mr)/jr)*jr-Mr+jr+480*60*1e3}function Pr(e,t){let n=e.attempts.filter(e=>e.itemId===t&&!Hr(e)).map(e=>e.at),r=e.marks[t]?.learnedAt;return r!==void 0&&n.push(r),n.length?Math.min(...n):void 0}function Fr(e,t,n=Date.now()){let r=Or(e,t),i=e.cards[t.id],a=Pr(e,t.id),o=r.self===`learned`||a!==void 0||!!(i?.reps||i?.last_review!==void 0),s=a??(r.self===`learned`?r.updatedAt:o?void 0:n),c=Ar(e,t,{self:`learned`,...s===void 0?{}:{learnedAt:s}},n),l=Nr(n),u=i??{...Rr(n),due:l,nextDayReviewAt:l};return{...c,cards:{...c.cards,[t.id]:u},checks:{...c.checks,[t.id]:c.checks[t.id]??{ref:kr(t),requestedAt:n}}}}function Ir(e,t,n=Date.now()){let r=Or(e,t),i=Pr(e,t.id)??(r.self===`learned`?r.updatedAt:void 0),a=Ar(e,t,{self:`unmarked`,...i===void 0?{}:{learnedAt:i}},n),o={...a.checks};return delete o[t.id],{...a,checks:o}}function Lr(e,t){return{...e,settings:{...e.settings,level:t},resume:e.resume?.view===`words`?null:e.resume}}function Rr(e=Date.now()){let t=mt(new Date(e));return{...t,due:t.due.getTime(),last_review:void 0,paused:!1}}function zr(e,t,n,r=Date.now()){let i=Ar(e,t,{},r);return{...i,cards:{...i.cards,[t.id]:{...e.cards[t.id]??Rr(r),paused:!n}}}}function Br(e,t,n,r,i=n.at){if(e.attempts.some(e=>e.id===n.id))return e;if(n.itemId!==t.id)throw Error(`验收内容不一致，未保存。`);if((t.reviewMethod===`recall`||t.reviewMethod===`spelling`)&&n.mode!==`review`)throw Error(`加练核对只能记为复习，不能替代独立小测。`);let a=t.questions&&t.verificationSize?ur(t,n.responses):null;if(a&&!a.complete)throw Error(`验收作答或核对标准不完整，未保存。`);if(!a&&n.responses.some(e=>e.assessment===`self`))throw Error(`无法核对课程题目，未保存。`);let o=a?a.passed:n.responses.every(e=>e.correct);if(n.passed!==o)throw Error(`验收结果不一致，未保存。`);if(t.reviewMethod===`spelling`)return{...Ar(e,t,{},i),attempts:[...e.attempts,{...n,skill:`spelling`}]};let s=o?r===4?3:r:1,c=e.cards[t.id]??Rr(i);if(c.last_review!==void 0&&i<c.last_review)throw Error(`当前时间早于上次复习时间，请检查设备时间。`);let l=Pr(e,t.id),u=c.reps>0||c.last_review!==void 0||e.attempts.some(e=>e.itemId===t.id&&!Hr(e)),d=Or(e,t),f=Ar(e,t,{learnedAt:l??(d.self===`learned`?d.updatedAt:i)},i),p={...e.checks};delete p[t.id];let m=fr(t.id),h=t.kind===`word`?`meaning`:t.kind===`grammar`?`grammar`:void 0,g={...n,...h?{skill:h}:{},...m?{curriculumRevision:m}:{}};if(o&&u&&i<c.due&&c.last_review!==void 0&&Kr(i)===Kr(c.last_review))return{...f,checks:p,attempts:[...e.attempts,g]};let{nextDayReviewAt:_,...v}=c,y={...v,due:new Date(c.due),last_review:c.last_review===void 0?void 0:new Date(c.last_review),state:c.state},b=Ct({request_retention:e.settings.retention,enable_short_term:!0,learning_steps:[`10m`],relearning_steps:[`10m`]}).next(y,new Date(i),s),x=_??(u?void 0:Nr(l??i)),S=x!==void 0&&Kr(i)<Kr(x),C=b.card.due.getTime();S&&(C=s>=3?x:Math.min(C,i+600*1e3,x)),s===1&&(C=Math.min(C,i+600*1e3)),Vr(n)||(C=Math.min(C,Nr(i)));let w={...b.card,due:C,scheduled_days:Math.max(0,(C-i)/jr),last_review:b.card.last_review?.getTime(),paused:!1,...S?{nextDayReviewAt:x}:{}};return{...f,checks:p,cards:{...e.cards,[t.id]:w},attempts:[...e.attempts,g],reviews:[...e.reviews,{id:n.id,itemId:t.id,at:i,grade:s,due:w.due,stability:w.stability,difficulty:w.difficulty,state:w.state,elapsedDays:b.log.elapsed_days,scheduledDays:w.scheduled_days,source:n.mode}]}}function Vr(e){return e.responses.length>0&&e.responses.every(e=>e.assessment!==`self`&&e.criteriaChecks===void 0&&(e.choice>=0&&e.text===void 0||e.assessment===`automatic`&&e.choice===-1&&typeof e.text==`string`&&e.text.trim().length>0))}function Hr(e){return e.skill===`spelling`||e.skill===void 0&&e.responses.some(e=>e.assessment===`automatic`&&e.choice===-1&&typeof e.text==`string`)}function Ur(e,t){let n=fr(t),r=e.attempts.filter(e=>e.itemId===t&&!Hr(e)&&(!n||e.curriculumRevision===n)),i=r.at(-1);if(!i)return`unverified`;if(!i.passed)return`needs-review`;let a=r.slice(r.findLastIndex(e=>!e.passed)+1);return a.some(e=>e.mode===`verification`&&e.passed&&Vr(e))?`passed`:a.some(e=>e.mode===`verification`&&e.passed)?`self-checked`:`unverified`}function Wr(e,t=Date.now()){return Object.entries(e.cards).filter(([n,r])=>!r.paused&&r.due<=t&&e.marks[n]).sort((e,t)=>e[1].due-t[1].due).map(([t])=>e.marks[t].ref)}var Gr=new Intl.DateTimeFormat(`en-CA`,{timeZone:`Asia/Shanghai`,year:`numeric`,month:`2-digit`,day:`2-digit`});function Kr(e){return Gr.format(new Date(e))}function qr(e,t=Date.now()){let n=new Map;for(let[t,r]of Object.entries(e.marks))r.learnedAt!==void 0&&n.set(t,r.learnedAt);for(let t of e.attempts)Hr(t)||n.set(t.itemId,Math.min(n.get(t.itemId)??t.at,t.at));let r=Kr(t);return[...n].filter(([t,n])=>Kr(n)===r&&e.marks[t]?.ref.kind===`word`&&e.marks[t]?.ref.level===e.settings.level).length}function Jr({state:e,books:t,backup:n,onBackupChange:r,onSave:i,onRestore:a}){let[o,s]=(0,l.useState)(``),[c,u]=(0,l.useState)(`修改后自动保存`),[d,f]=(0,l.useState)(``),[p,m]=(0,l.useState)(``),[h,g]=(0,l.useState)(``),[_,v]=(0,l.useState)(!1),[y,b]=(0,l.useState)(!1),x=(0,l.useRef)(!1),S=(0,l.useRef)(!1),C=(0,l.useRef)(0),w=(0,l.useRef)(!1),T={marks:Object.keys(e.marks).length,attempts:e.attempts.length,cards:Object.keys(e.cards).length};(0,l.useEffect)(()=>()=>{C.current+=1},[]);async function E(e,t){if(x.current||w.current)return!1;x.current=!0,s(t),f(``),u(`正在保存…`);try{let t=await i(e);return u(t?`已保存`:`修改未保存`),t||f(`这次修改未保存，请重试。已保存的学习偏好保持原值。`),t}catch{return u(`修改未保存`),f(`这次修改未保存，请重试。`),!1}finally{x.current=!1,s(``)}}function D(){let t=URL.createObjectURL(new Blob([Er(e)],{type:`application/json`})),n=document.createElement(`a`);n.href=t,n.download=`英语学习备份-${new Intl.DateTimeFormat(`sv-SE`,{timeZone:`Asia/Shanghai`}).format(new Date)}.json`,n.click(),setTimeout(()=>URL.revokeObjectURL(t),1e3)}async function O(e){if(S.current||w.current||x.current)return;let t=++C.current;S.current=!0,v(!0),m(``),r(null),g(``);try{if(e.size>20*1024*1024)throw Error(`文件超过 20MB，请选择较小的备份文件。`);let n=Dr(await e.text());if(t!==C.current)return;r(n),g(e.name)}catch(e){if(t!==C.current)return;r(null),g(``),m(e instanceof Error?e.message:`无法读取此文件，请选择工作台导出的 JSON 备份。`)}finally{t===C.current&&(S.current=!1,v(!1))}}async function k(){if(!(!n||w.current||x.current||S.current)){w.current=!0,b(!0),m(``);try{await a(n)?(r(null),g(``),u(`修改后自动保存`)):m(`未能恢复，当前记录保持原样。请重试。`)}catch{m(`未能恢复，当前记录保持原样。请重试。`)}finally{w.current=!1,b(!1)}}}return(0,I.jsxs)(`div`,{className:`taste-settings`,children:[(0,I.jsxs)(`div`,{className:`settings-primary-column`,children:[(0,I.jsxs)(`section`,{className:`preference-group settings`,"aria-labelledby":`preferences-title`,"aria-busy":!!o,children:[(0,I.jsxs)(`header`,{className:`settings-group-heading`,children:[(0,I.jsx)(`h2`,{id:`preferences-title`,children:`学习节奏`}),(0,I.jsx)(`small`,{role:`status`,children:c})]}),(0,I.jsx)(`div`,{className:`preference-row`,children:(0,I.jsx)(Pe,{value:e.settings.dailyNew,disabled:y||!!o&&o!==`dailyNew`,onSave:e=>E({dailyNew:e},`dailyNew`)},e.settings.dailyNew)}),(0,I.jsx)(`div`,{className:`preference-row`,children:(0,I.jsxs)(`label`,{className:`spelling-preference setting-line`,children:[(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:`显示拼写加练入口`}),(0,I.jsx)(`small`,{id:`spelling-help`,children:`开启后，在单词正文选择加练。拼写与词义结果分别记录。`})]}),(0,I.jsx)(`input`,{type:`checkbox`,role:`switch`,className:`preference-switch`,"aria-label":`显示拼写加练入口`,"aria-describedby":`spelling-help`,checked:e.settings.includeSpelling??!1,disabled:!!o||y,onChange:e=>void E({includeSpelling:e.target.checked},`spelling`)})]})}),(0,I.jsx)(`div`,{className:`preference-row`,children:(0,I.jsxs)(`label`,{className:`setting-line`,htmlFor:`retention`,children:[(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:`目标记忆率`}),(0,I.jsx)(`small`,{id:`retention-help`,children:`默认 90%。目标越高，通常需要更频繁地复习。`})]}),(0,I.jsx)(`select`,{id:`retention`,"aria-label":`目标记忆率`,"aria-describedby":`retention-help`,value:e.settings.retention,disabled:!!o||y,onChange:e=>void E({retention:Number(e.target.value)},`retention`),children:[.8,.85,.9,.95,.97].map(e=>(0,I.jsxs)(`option`,{value:e,children:[e*100,`%`]},e))})]})}),d&&(0,I.jsx)(`p`,{className:`settings-inline-error`,role:`alert`,children:d}),(0,I.jsxs)(`details`,{className:`settings-explanation`,children:[(0,I.jsx)(`summary`,{children:`复习计划怎样调整？`}),(0,I.jsx)(`p`,{children:`今天完成学习，明天 08:00 起安排复习；忘记后约 10 分钟再练。后续根据答题记录调整，费力想起会更早复习。每个人、每个知识点的间隔都可能不同。`}),(0,I.jsx)(`p`,{children:`学过与记住分开记录。单词先判断词义与语境，再由系统核对；跨天多次答对才积累长期巩固证据。同一天反复刷、收藏或点击已会都不能增加这项证据。语法开放题由你核对，标为自评，安排更保守的复习。`})]})]}),(0,I.jsxs)(`details`,{className:`settings-resource`,children:[(0,I.jsx)(`summary`,{children:`查看内容来源`}),(0,I.jsx)(`ul`,{children:t.map(e=>(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`a`,{href:e.provenance.url,target:`_blank`,rel:`noreferrer`,children:e.title}),(0,I.jsxs)(`small`,{children:[e.count.toLocaleString(),` 词`]}),(0,I.jsx)(`p`,{children:e.provenance.rights})]},e.id))})]})]}),(0,I.jsxs)(`div`,{className:`settings-secondary-column`,children:[(0,I.jsxs)(`section`,{className:`backup-panel`,"aria-labelledby":`backup-title`,children:[(0,I.jsxs)(`header`,{children:[(0,I.jsx)(ce,{size:20,strokeWidth:1.6,"aria-hidden":`true`}),(0,I.jsx)(`span`,{children:`当前浏览器 · 本机保存`})]}),(0,I.jsx)(`h2`,{id:`backup-title`,tabIndex:-1,children:`给学习记录留一份备份`}),(0,I.jsx)(`p`,{children:`换设备或清理浏览器前，先导出。备份包含学习偏好、积累和复习记录。`}),(0,I.jsxs)(`dl`,{className:`backup-counts`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`积累`}),(0,I.jsx)(`dd`,{children:T.marks})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`学习记录`}),(0,I.jsx)(`dd`,{children:T.attempts})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`复习卡`}),(0,I.jsx)(`dd`,{children:T.cards})]})]}),(0,I.jsxs)(`button`,{className:`primary backup-export`,onClick:D,disabled:y,children:[(0,I.jsx)(le,{size:16}),`导出全部记录`]}),(0,I.jsxs)(`details`,{className:`backup-import`,open:n?!0:void 0,children:[(0,I.jsx)(`summary`,{children:`从备份文件恢复`}),(0,I.jsx)(`p`,{children:`先选择文件查看内容，再确认恢复。恢复会替换当前浏览器的记录。`}),(0,I.jsxs)(`label`,{className:`file-button${_||y?` is-disabled`:``}`,children:[(0,I.jsx)(xe,{size:16}),_?`正在读取文件…`:`选择备份文件`,(0,I.jsx)(`input`,{"aria-label":`选择备份文件`,type:`file`,accept:`.json`,disabled:_||y||!!o,onChange:e=>{let t=e.currentTarget.files?.[0];e.currentTarget.value=``,t&&O(t)}})]}),_&&(0,I.jsx)(`p`,{role:`status`,children:`正在读取并检查备份…`}),n&&(0,I.jsxs)(`div`,{className:`backup-preview`,"aria-busy":y,children:[(0,I.jsx)(`h3`,{children:`确认恢复这份备份？`}),h&&(0,I.jsx)(`p`,{className:`backup-filename`,children:h}),(0,I.jsxs)(`dl`,{children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`当前记录`}),(0,I.jsxs)(`dd`,{children:[T.marks,` 条积累 · `,T.attempts,` 次学习 · `,T.cards,` 张复习卡`]})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`备份记录`}),(0,I.jsxs)(`dd`,{children:[Object.keys(n.marks).length,` 条积累 · `,n.attempts.length,` 次学习 · `,Object.keys(n.cards).length,` 张复习卡`]})]})]}),(0,I.jsx)(`p`,{children:`确认后将替换当前本机记录。可先导出当前记录，再恢复。`}),(0,I.jsxs)(`div`,{className:`backup-restore-actions`,children:[(0,I.jsx)(`button`,{className:`primary`,disabled:y||_||!!o,onClick:()=>void k(),children:y?`正在恢复…`:`确认替换并恢复`}),(0,I.jsx)(`button`,{disabled:y,onClick:()=>{r(null),g(``),m(``)},children:`取消`})]})]}),p&&(0,I.jsx)(`p`,{className:`settings-inline-error`,role:`alert`,children:p})]})]}),(0,I.jsxs)(`details`,{className:`settings-resource settings-roadmap`,children:[(0,I.jsx)(`summary`,{children:`后续功能规划`}),(0,I.jsx)(`p`,{children:`以下功能尚未开放。`}),(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`strong`,{children:`账号与同步`}),` · 云端保存、跨设备同步、迁移去重与冲突处理。`]}),(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`strong`,{children:`在线 AI 解析`}),` · 文章、词汇、翻译和结构；服务端密钥、额度、缓存与重试。`]}),(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`strong`,{children:`内容管理`}),` · 导入、编辑、审核和发布。登录方式在 V2 启动时确定。`]})]})]})]})}function Yr(e,t,n=0){if(n>8)return[e];let r=[],i=/\*\*([\s\S]+?)\*\*|__([\s\S]+?)__|`([^`]+)`|\[([^\]]+)\]\(([^)\s]+)\)|(?<!\*)\*([^*\n]+)\*(?!\*)/g,a=0,o;for(;o=i.exec(e);){o.index>a&&r.push(e.slice(a,o.index));let i=`${t}-${o.index}`;if(o[1]||o[2])r.push((0,I.jsx)(`strong`,{children:Yr(o[1]||o[2],i,n+1)},i));else if(o[3])r.push((0,I.jsx)(`code`,{children:o[3]},i));else if(o[4]){let e=o[5],t=/^(https?:\/\/|#[\w-])/i.test(e)&&!/[\u0000-\u0020]/.test(e);r.push(t?(0,I.jsx)(`a`,{href:e,target:e.startsWith(`#`)?void 0:`_blank`,rel:e.startsWith(`#`)?void 0:`noopener noreferrer`,children:Yr(o[4],i,n+1)},i):(0,I.jsx)(`span`,{children:o[4]},i))}else o[6]&&r.push((0,I.jsx)(`em`,{children:Yr(o[6],i,n+1)},i));a=o.index+o[0].length}return a<e.length&&r.push(e.slice(a)),r}var Xr=/^(#{1,6})\s+(.+)$/,Zr=/^\s*(?:([-+*])\s+|(\d+)[.)]\s+)(.+)$/,Qr=/^\s*(?:-{3,}|\*{3,}|_{3,})\s*$/,$r=/^\s*\|?\s*:?-{3,}:?\s*(?:\|\s*:?-{3,}:?\s*)+\|?\s*$/;function ei(e){return e.trim().replace(/^\|/,``).replace(/\|$/,``).replace(/\\\|/g,``).split(`|`).map(e=>e.trim().replace(/\u0001/g,`|`))}function ti(e,t){let n=e.replace(/\r\n?/g,`
`).split(`
`),r=[],i=0,a=e=>Xr.test(n[e])||Zr.test(n[e])||Qr.test(n[e])||/^\s*```/.test(n[e])||/^\s*>/.test(n[e])||!!(n[e]?.includes(`|`)&&$r.test(n[e+1]??``));for(;i<n.length;){let e=n[i].trim(),o=`${t}-${i}`;if(!e){i++;continue}let s=e.match(Xr);if(s)r.push((0,l.createElement)(`h${Math.max(3,s[1].length)}`,{key:o},Yr(s[2],o))),i++;else if(/^```/.test(e)){let e=[];for(i++;i<n.length&&!/^\s*```/.test(n[i]);)e.push(n[i++]);i<n.length&&i++,r.push((0,I.jsx)(`pre`,{children:(0,I.jsx)(`code`,{children:e.join(`
`)})},o))}else if(Qr.test(e))r.push((0,I.jsx)(`hr`,{},o)),i++;else if(e.includes(`|`)&&$r.test(n[i+1]??``)){let t=ei(e),a=[];for(i+=2;i<n.length&&n[i].trim()&&n[i].includes(`|`);)a.push(ei(n[i++]));r.push((0,I.jsx)(`div`,{className:`course-table-scroll`,tabIndex:0,role:`region`,"aria-label":`课程对照表，可横向滚动`,children:(0,I.jsxs)(`table`,{children:[(0,I.jsx)(`thead`,{children:(0,I.jsx)(`tr`,{children:t.map((e,t)=>(0,I.jsx)(`th`,{scope:`col`,children:Yr(e,`${o}-head-${t}`)},t))})}),(0,I.jsx)(`tbody`,{children:a.map((e,n)=>(0,I.jsx)(`tr`,{children:t.map((t,r)=>(0,I.jsx)(`td`,{children:Yr(e[r]??``,`${o}-${n}-${r}`)},r))},n))})]})},o))}else if(Zr.test(e)){let t=e.match(Zr),a=!!t[2],s=[];for(;i<n.length;){let e=n[i].match(Zr);if(!e||!!e[2]!==a)break;let t=`${o}-item-${i}`;s.push((0,I.jsx)(`li`,{children:Yr(e[3],t)},t)),i++}r.push(a?(0,I.jsx)(`ol`,{start:Number(t[2]),children:s},o):(0,I.jsx)(`ul`,{children:s},o))}else if(/^>/.test(e)){let e=[];for(;i<n.length&&/^\s*>/.test(n[i]);)e.push(n[i++].replace(/^\s*>\s?/,``));r.push((0,I.jsx)(`blockquote`,{children:ti(e.join(`
`),o)},o))}else{let t=[e];for(i++;i<n.length&&n[i].trim()&&!a(i);)t.push(n[i++].trim());r.push((0,I.jsx)(`p`,{children:Yr(t.join(`
`),o)},o))}}return r}function ni({source:e,className:t=``}){return(0,I.jsx)(`div`,{className:`course-prose ${t}`.trim(),children:ti(e,`course`)})}function ri({round:e,saving:t,exitRequest:n,onExit:r,onFinish:i,prototype:a=!1}){let o=e.item.questions.slice(0,e.item.verificationSize),[s,c]=(0,l.useState)(()=>{let t=a?null:y();return t?.id===e.id&&g(t,e.item)?t:{version:1,id:e.id,ref:e.item,mode:e.mode,questionSignature:h(e.item),questionIds:o.map(e=>e.id),automaticText:o.map(e=>e.format===`input`),answers:o.map(()=>null),criteriaChecks:o.map(e=>e.format===`text`?(e.criteria??[]).map(()=>null):null),step:0,stage:`answer`}}),[u,d]=(0,l.useState)(!1),m=(0,l.useRef)(null),_=(0,l.useRef)(null),x=(0,l.useRef)(n),S=o[s.step],C=s.stage===`answer`,w=o.some(e=>e.format===`text`),T=e.item.kind===`word`&&o.some(e=>e.format===`input`),E=e.item.reviewMethod===`spelling`,D=e.item.reviewMethod===`recall`,O=D&&s.answers[s.step]===`想不起来`,k=o.map((e,t)=>{if(e.format===`input`){let n=typeof s.answers[t]==`string`?s.answers[t]:``;return{questionId:e.id,choice:-1,text:n,correct:cr(e,n),assessment:`automatic`}}if(e.format===`text`){let n=s.criteriaChecks?.[t]??[];return{questionId:e.id,choice:-1,correct:n.length>0&&n.every(e=>e===!0),text:typeof s.answers[t]==`string`?s.answers[t]:``,criteriaChecks:n.filter(e=>typeof e==`boolean`),assessment:`self`}}return{questionId:e.id,choice:typeof s.answers[t]==`number`?s.answers[t]:-1,correct:s.answers[t]===e.answer,assessment:`automatic`}}),A=ur(e.item,k),j=s.answers.filter(e=>typeof e==`number`||typeof e==`string`&&e.trim().length>0).length,ee=typeof s.answers[s.step]==`number`||typeof s.answers[s.step]==`string`&&s.answers[s.step].trim().length>0,ne=s.criteriaChecks?.[s.step]??[],N=S.format!==`text`||ne.length===(S.criteria??[]).length&&ne.length>0&&ne.every(e=>typeof e==`boolean`),P=ne.filter(e=>typeof e==`boolean`).length,ie=o.filter(e=>e.format!==`text`&&e.format!==`input`),ae=o.filter((e,t)=>e.format!==`text`&&e.format!==`input`&&s.answers[t]===e.answer).length,oe=s.answers.findIndex(e=>e===null||typeof e==`string`&&!e.trim()),F=o.findIndex((e,t)=>e.format===`text`&&!(s.criteriaChecks?.[t]?.length===e.criteria.length&&s.criteriaChecks[t]?.every(e=>typeof e==`boolean`))),ce=C?oe:F,le=C?0:s.stage===`explain`?1:2,ue=[`独立作答`,`核对答案`,E?`保存结果`:`记录回忆`];(0,l.useEffect)(()=>{!a&&!v(`english-workbench-quiz-draft-v1`,s)&&queueMicrotask(()=>d(!0))},[s,a]),(0,l.useEffect)(()=>{_.current?.focus()},[s.step,s.stage]),(0,l.useEffect)(()=>{x.current!==n&&(x.current=n,m.current?.showModal())},[n]);function de(e){t||(e===`discard`&&!a&&b(),m.current?.close(),r(e))}function fe(){if(C){if(!ee)return;s.step<o.length-1?c(e=>({...e,step:e.step+1})):f(s)&&c(e=>({...e,stage:`explain`,step:0}))}else N&&(s.step<o.length-1?c(e=>({...e,step:e.step+1})):p(s)&&A.complete&&c(e=>({...e,stage:`rating`})))}function pe(e,t){O&&t||c(n=>({...n,criteriaChecks:o.map((r,i)=>{if(r.format!==`text`)return null;let a=n.criteriaChecks?.[i]??(r.criteria??[]).map(()=>null);return i===n.step?a.map((n,r)=>r===e?t:n):a})}))}function me(){!D||!C||c(e=>({...e,stage:`explain`,step:0,answers:o.map(()=>`想不起来`),criteriaChecks:o.map(e=>e.format===`text`?e.criteria.map(()=>!1):null)}))}function he(e){!t&&p(s)&&A.complete&&i(k,e)}return(0,I.jsxs)(`section`,{className:`quiz-panel taste-quiz${w&&!D?` course-assessment`:D?` recall-assessment`:``}`,"aria-labelledby":`round-title`,"aria-busy":t,children:[(0,I.jsxs)(`header`,{className:`round-heading`,children:[(0,I.jsxs)(`div`,{children:[!w&&(0,I.jsx)(`span`,{children:E?`可选拼写练习`:e.mode===`review`?`到期复习`:`独立小测`}),(0,I.jsx)(`h2`,{id:`round-title`,children:T?`单词拼写回忆`:e.item.title})]}),(0,I.jsx)(`button`,{disabled:t,onClick:()=>m.current?.showModal(),children:`退出本轮`})]}),(0,I.jsx)(`ol`,{className:`round-stages`,"aria-label":`本轮步骤`,children:ue.map((e,t)=>(0,I.jsxs)(`li`,{"aria-current":t===le?`step`:void 0,className:t<le?`complete`:``,children:[(0,I.jsx)(`span`,{"aria-hidden":`true`,children:t<le?(0,I.jsx)(re,{size:12}):t+1}),e]},e))}),w&&(0,I.jsxs)(`p`,{className:`grammar-assessment-label`,children:[D?`自评回忆，不算独立小测通过`:e.mode===`review`?`变式复习`:`独立验收`,` · `,C?D?`先回想，再核对`:`先独立作答，整轮提交后核对`:`对照原答案，按标准核对`]}),E&&(0,I.jsx)(`p`,{className:`round-note`,children:`拼写结果单独记录，不影响词义理解记录与复习计划。`}),(0,I.jsxs)(`div`,{className:`round-progress`,"aria-label":s.stage===`rating`?`本轮结果`:`${C?`作答`:`解析`}第 ${s.step+1} / ${o.length} 题`,children:[(0,I.jsx)(`span`,{children:s.stage===`rating`?`本轮结果`:`${C?`作答`:`解析`} ${s.step+1} / ${o.length}`}),(0,I.jsx)(`div`,{className:`progress-track`,role:`progressbar`,"aria-label":ue[le],"aria-valuemin":0,"aria-valuemax":o.length,"aria-valuenow":s.stage===`rating`?o.length:s.step+1,children:(0,I.jsx)(`span`,{style:{width:`${(s.stage===`rating`?o.length:s.step+1)/o.length*100}%`}})})]}),o.length>1&&s.stage!==`rating`&&(0,I.jsx)(`nav`,{className:`assessment-question-nav round-question-nav`,"aria-label":C?`作答题号`:`核对题号`,children:o.map((e,n)=>{let r=typeof s.answers[n]==`number`||typeof s.answers[n]==`string`&&s.answers[n].trim().length>0,i=e.format!==`text`||s.criteriaChecks?.[n]?.length===e.criteria.length&&s.criteriaChecks[n]?.every(e=>typeof e==`boolean`),a=C?r?`已作答`:`未作答`:i?k[n].correct?`已核对，已满足`:`已核对，需巩固`:`待核对`;return(0,I.jsx)(`button`,{disabled:t,"data-status":C?r?`answered`:`empty`:i?k[n].correct?`correct`:`review`:`empty`,"aria-label":`第 ${n+1} 题，${a}`,"aria-current":n===s.step?`step`:void 0,onClick:()=>c(e=>({...e,step:n})),children:n+1},e.id)})}),s.stage===`rating`?(0,I.jsxs)(`div`,{className:`round-result${A.passed?` is-passed`:` needs-review`}`,children:[A.passed?(0,I.jsx)(re,{size:28,"aria-hidden":`true`}):(0,I.jsx)(se,{size:28,"aria-hidden":`true`}),(0,I.jsx)(`h3`,{ref:_,tabIndex:-1,children:E?A.passed?`这次拼写正确`:`这次拼写还需要练习`:D?A.passed?`已核对原答案，回忆时感觉如何？`:`这次还没想起来，早点再复习`:A.passed?w?`本轮标准已达成，回想时感觉如何？`:`本轮答对，回想时感觉如何？`:`这轮还有内容需要巩固`}),E?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`p`,{children:[`拼写答对 `,A.correct,` / `,o.length,` 题。`]}),(0,I.jsx)(`p`,{className:`round-note`,children:`拼写结果单独记录；词义理解记录和下次复习时间保持原计划。`})]}):D?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`p`,{children:A.passed?`根据你的核对，原答案满足回忆要求。请记录真实难度，安排下次复习。`:`忘记很正常。先理解参考答案，再保存本次回忆，安排更早的巩固。`}),(0,I.jsx)(`p`,{className:`round-note`,children:`这是自评回忆，只更新复习安排；不会记为独立小测通过。`})]}):w?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`p`,{children:[`按你的逐项核对，已满足 `,A.criteriaMet,` / `,A.criteriaTotal,` 项标准。`,A.passed?`选择真实的回忆难度，安排下次复习。`:`根据需巩固的能力，安排复习。`]}),(0,I.jsx)(`p`,{className:`round-note`,children:`开放表达由你对照标准核对；意思相同且符合要求的表达也可以满足标准。`}),!!ie.length&&(0,I.jsxs)(`p`,{children:[`选择题答对 `,ae,` / `,ie.length,` 题。`]}),!!A.skills.length&&(0,I.jsxs)(`div`,{className:`grammar-skill-summary`,children:[(0,I.jsx)(`h4`,{children:`本轮能力核对`}),(0,I.jsx)(`dl`,{children:A.skills.map(e=>(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:e.label}),(0,I.jsxs)(`dd`,{children:[e.met,` / `,e.total,` 项满足`]})]},e.id))})]}),!!A.criticalErrors.length&&(0,I.jsxs)(`div`,{className:`grammar-critical-feedback`,children:[(0,I.jsx)(`strong`,{children:`以下核心要求仍需巩固`}),(0,I.jsx)(`ul`,{children:A.criticalErrors.map((e,t)=>(0,I.jsx)(`li`,{children:`第 ${o.findIndex(t=>t.id===e)+1} 题：${o.find(t=>t.id===e)?.format===`text`?o.find(t=>t.id===e)?.prompt:`请回看目标结构`}`},t))})]})]}):(0,I.jsxs)(`p`,{children:[`答对 `,A.correct,` / `,o.length,` 题。`,A.passed?`选择真实的回忆难度，安排下次复习。`:`保存错题后，安排巩固复习。`]}),(0,I.jsx)(`div`,{className:`rating-actions`,children:E?(0,I.jsx)(`button`,{className:`primary`,disabled:t,onClick:()=>he(A.passed?3:1),children:t?`正在保存…`:`保存拼写结果`}):A.passed?[[2,`费力想起`,`需要花时间回想`],[3,`正常想起`,`可以独立回忆`],[4,`很容易想起`,`几乎不用思考`]].map(([e,n,r])=>(0,I.jsxs)(`button`,{disabled:t,onClick:()=>he(e),children:[(0,I.jsx)(`strong`,{children:t?`正在保存…`:n}),(0,I.jsx)(`small`,{children:r})]},e)):(0,I.jsx)(`button`,{className:`primary`,disabled:t,onClick:()=>he(1),children:t?`正在保存…`:D?`记录想不起来，安排再复习`:`安排巩固复习`})}),(0,I.jsx)(`button`,{className:`text-link`,disabled:t,onClick:()=>c(e=>({...e,stage:`explain`,step:0})),children:`再看一遍答案与解析`}),(0,I.jsx)(`p`,{className:`round-note`,children:E?`本轮只保存一次拼写记录。`:`完成回忆评分后，整轮只保存一次。`})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`div`,{className:`question-content`,children:[(0,I.jsxs)(`div`,{ref:_,tabIndex:-1,children:[(0,I.jsx)(ni,{source:S.prompt.split(`

词汇支持：`)[0]}),S.prompt.includes(`

词汇支持：`)&&(0,I.jsxs)(`details`,{className:`assessment-glossary`,children:[(0,I.jsx)(`summary`,{children:`词汇提示`}),(0,I.jsx)(`p`,{children:S.prompt.split(`

词汇支持：`)[1]})]})]}),S.context&&(0,I.jsx)(`p`,{className:`question-context`,lang:`en`,children:S.context}),S.format===`input`?C?(0,I.jsxs)(`div`,{className:`spelling-answer`,children:[(0,I.jsx)(`label`,{htmlFor:`answer-${S.id}`,children:`写出对应的英文单词`}),(0,I.jsx)(`input`,{id:`answer-${S.id}`,type:`text`,value:typeof s.answers[s.step]==`string`?s.answers[s.step]:``,maxLength:2e3,spellCheck:!1,autoComplete:`off`,autoCapitalize:`none`,autoCorrect:`off`,"aria-describedby":`answer-note-${S.id}`,onChange:e=>{let t=e.target.value.slice(0,2e3);c(e=>({...e,answers:e.answers.map((n,r)=>r===e.step?t:n)}))}}),(0,I.jsxs)(`p`,{id:`answer-note-${S.id}`,className:`round-note`,children:[`先独立回忆，提交后自动核对拼写。`,E?`拼写结果单独记录。`:`核对前保留你的原答案。`]}),(0,I.jsx)(`button`,{className:`text-link recall-forgot`,onClick:()=>c(e=>({...e,answers:e.answers.map((t,n)=>n===e.step?`想不起来`:t)})),children:`想不起来`})]}):(0,I.jsxs)(`div`,{className:`spelling-feedback`,children:[(0,I.jsxs)(`div`,{className:`spelling-original`,children:[(0,I.jsx)(`h4`,{children:`你的原答案`}),(0,I.jsx)(`p`,{lang:s.answers[s.step]===`想不起来`?void 0:`en`,children:s.answers[s.step]})]}),(0,I.jsxs)(`div`,{className:`answer-feedback`,role:`status`,children:[(0,I.jsxs)(`strong`,{children:[k[s.step].correct?`拼写正确`:`需要巩固`,` · 参考单词：`,(0,I.jsx)(`span`,{lang:`en`,children:S.reference})]}),(0,I.jsxs)(`details`,{open:!0,children:[(0,I.jsxs)(`summary`,{children:[(0,I.jsx)(se,{size:16,"aria-hidden":`true`}),`查看解释`]}),(0,I.jsx)(ni,{source:S.explanation})]})]})]}):S.format===`text`?C?(0,I.jsxs)(`div`,{className:`grammar-text-answer`,children:[(0,I.jsx)(`label`,{htmlFor:`answer-${S.id}`,children:D?`写下你现在能想起的含义或用法`:`独立写出你的答案`}),(0,I.jsx)(`textarea`,{id:`answer-${S.id}`,value:typeof s.answers[s.step]==`string`?s.answers[s.step]:``,rows:6,maxLength:2e3,"aria-describedby":`answer-note-${S.id}`,spellCheck:!1,onChange:e=>{let t=e.target.value.slice(0,2e3);c(e=>({...e,answers:e.answers.map((n,r)=>r===e.step?t:n)}))}}),(0,I.jsxs)(`p`,{id:`answer-note-${S.id}`,className:`grammar-input-note`,children:[D?`不必完整复述；先独立回忆，再看参考内容。`:`可以写多行。整轮提交后查看参考答案与核对标准。`,(0,I.jsxs)(`span`,{children:[typeof s.answers[s.step]==`string`?s.answers[s.step].length:0,` / 2000`]})]}),D&&(0,I.jsx)(`button`,{className:`text-link recall-forgot`,onClick:me,children:`想不起来，查看并重新理解`})]}):(0,I.jsxs)(`div`,{className:`grammar-text-feedback`,children:[(0,I.jsxs)(`div`,{className:`grammar-answer-copy`,children:[(0,I.jsx)(`h4`,{children:`你的原答案`}),(0,I.jsx)(`p`,{children:s.answers[s.step]})]}),(0,I.jsxs)(`div`,{className:`grammar-reference-copy`,children:[(0,I.jsx)(`h4`,{children:`参考表达`}),(0,I.jsx)(ni,{source:S.reference})]}),(0,I.jsx)(`div`,{className:`answer-feedback`,children:(0,I.jsxs)(`details`,{open:!0,children:[(0,I.jsxs)(`summary`,{children:[(0,I.jsx)(se,{size:16,"aria-hidden":`true`}),`查看解释`]}),(0,I.jsx)(ni,{source:S.explanation})]})}),(0,I.jsxs)(`div`,{className:`grammar-criteria`,children:[(0,I.jsx)(`h4`,{children:`逐项核对你的原答案`}),(0,I.jsx)(`p`,{className:`round-note`,children:O?`你记录了“想不起来”，本次按忘记安排。先重新理解，再继续。`:D?`只核对看答案之前的原回答。看完才想起或靠猜测补全的内容，请选“需巩固”。`:`每项都请选择“已满足”或“需巩固”。参考表达是一种答案，请按标准判断自己的表达。`}),(S.criteria??[]).map((e,t)=>(0,I.jsxs)(`fieldset`,{className:`grammar-criterion`,children:[(0,I.jsxs)(`legend`,{children:[t+1,`. `,e]}),(0,I.jsxs)(`label`,{className:ne[t]===!0?`selected`:``,children:[(0,I.jsx)(`input`,{type:`radio`,name:`${S.id}-criterion-${t}`,checked:ne[t]===!0,disabled:O,onChange:()=>pe(t,!0)}),`已满足`]}),(0,I.jsxs)(`label`,{className:ne[t]===!1?`selected`:``,children:[(0,I.jsx)(`input`,{type:`radio`,name:`${S.id}-criterion-${t}`,checked:ne[t]===!1,onChange:()=>pe(t,!1)}),`需巩固`]})]},t)),(0,I.jsxs)(`p`,{className:`grammar-check-progress`,role:`status`,children:[`已核对 `,P,` / `,ne.length,` 项`,N?` · 可以继续`:` · 核对全部标准后继续`]})]})]}):(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(`fieldset`,{className:`question-options`,children:[(0,I.jsx)(`legend`,{className:`sr-only`,children:`选择答案`}),S.choices.map((e,t)=>(0,I.jsxs)(`label`,{className:`option${!C&&t===S.answer?` correct`:``}${!C&&s.answers[s.step]===t&&t!==S.answer?` incorrect`:``}`,children:[(0,I.jsx)(`input`,{type:`radio`,name:S.id,checked:s.answers[s.step]===t,disabled:!C,onChange:()=>c(e=>({...e,answers:e.answers.map((n,r)=>r===e.step?t:n)}))}),(0,I.jsx)(`span`,{children:e}),!C&&t===S.answer&&(0,I.jsxs)(`span`,{className:`option-result`,children:[(0,I.jsx)(re,{size:16,"aria-hidden":`true`}),`正确答案`]}),!C&&s.answers[s.step]===t&&t!==S.answer&&(0,I.jsx)(`span`,{className:`option-result`,children:`你的选择`})]},t))]}),!C&&(0,I.jsxs)(`div`,{className:`answer-feedback choice-feedback${s.answers[s.step]===S.answer?` is-correct`:` needs-review`}`,role:`status`,children:[(0,I.jsx)(`strong`,{children:s.answers[s.step]===S.answer?`答对了，可以继续`:`这题需要巩固`}),s.answers[s.step]!==S.answer&&(0,I.jsxs)(`dl`,{className:`choice-comparison`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`你的选择`}),(0,I.jsx)(`dd`,{children:S.choices[Number(s.answers[s.step])]})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`正确答案`}),(0,I.jsx)(`dd`,{children:S.choices[S.answer]})]})]}),(0,I.jsxs)(`details`,{open:!0,children:[(0,I.jsxs)(`summary`,{children:[(0,I.jsx)(se,{size:16,"aria-hidden":`true`}),`查看解释`]}),(0,I.jsx)(`p`,{children:S.explanation})]})]})]})]}),(0,I.jsxs)(`footer`,{className:`quiz-actions`,children:[(0,I.jsxs)(`button`,{disabled:s.step===0,onClick:()=>c(e=>({...e,step:e.step-1})),children:[(0,I.jsx)(te,{size:17}),`上一题`]}),(0,I.jsxs)(`button`,{className:`primary`,disabled:C?!ee||s.step===o.length-1&&!f(s):!N||s.step===o.length-1&&(!p(s)||!A.complete),onClick:fe,children:[s.step<o.length-1?`下一题`:C?`提交本轮`:`查看本轮结果`,(0,I.jsx)(M,{size:17})]})]}),(0,I.jsx)(`p`,{className:`round-note`,children:C?`已作答 ${j} / ${o.length} · 整轮提交后查看解释`:E?`原答案已锁定 · 核对后保存拼写结果`:w?`原答案已锁定 · 逐项核对后进行回忆评分`:`答案已锁定 · 完成解析后进行回忆评分`}),s.step===o.length-1&&ce>=0&&ce!==s.step&&(0,I.jsxs)(`div`,{className:`round-incomplete`,role:`status`,children:[(0,I.jsx)(`span`,{children:C?`还有题目未作答。完成后再提交本轮。`:`还有核对标准未完成。逐项核对后再查看结果。`}),(0,I.jsxs)(`button`,{className:`text-link`,onClick:()=>c(e=>({...e,step:ce})),children:[`前往第 `,ce+1,` 题 `,(0,I.jsx)(M,{size:15,"aria-hidden":`true`})]})]})]}),u&&(0,I.jsx)(`p`,{role:`alert`,className:`draft-error`,children:`浏览器未允许保存草稿。当前答案仍在页面中，请完成本轮后再刷新。`}),(0,I.jsxs)(`dialog`,{className:`exit-dialog`,ref:m,onCancel:e=>{e.preventDefault(),de(`stay`)},children:[(0,I.jsx)(`h2`,{children:`暂时离开本轮？`}),(0,I.jsx)(`p`,{children:`稍后继续会保留答案和当前进度，不计入完成记录。`}),(0,I.jsxs)(`div`,{className:`dialog-actions`,children:[(0,I.jsx)(`button`,{className:`primary`,disabled:t,onClick:()=>de(`keep`),children:`稍后继续`}),(0,I.jsx)(`button`,{disabled:t,onClick:()=>de(`stay`),children:`继续本轮`}),(0,I.jsx)(`button`,{className:`danger-link`,disabled:t,onClick:()=>de(`discard`),children:`放弃本轮`})]})]})]})}var ii=[{number:1,objectives:[`从一条普通陈述中找出谈论对象和承担陈述的动词，解释短语与完整句的差别。`,`区分词性与句子成分；保留动词所需的信息，不把主语理解成只有一个词。`,`在给定本意下修正缺主语、缺动词和词序错误，并写出新的完整陈述。`],summary:`从一条普通陈述中找出谈论对象和承担陈述的动词，解释短语与完整句的差别。`,prerequisites:[],body:`### 学习目标

1. 从一条普通陈述中找出谈论对象和承担陈述的动词，解释短语与完整句的差别。
2. 区分词性与句子成分；保留动词所需的信息，不把主语理解成只有一个词。
3. 在给定本意下修正缺主语、缺动词和词序错误，并写出新的完整陈述。

### 先检查前置知识

起点课：认识英语字母，借助本课词汇理解句意即可。先独立回答下面两题，再阅读本节的核对提示。

1. “同学们”与“同学们读书”传达的信息有什么不同？

核对：前者只命名一群人，后者还陈述他们的行为。若做错，回到本课第一节：陈述的两项信息。

2. 借助词汇读 The gate is open.，谁被谈论，什么状态被说明？

核对：谈论 the gate，说明它开着；is 连接对象与状态。若做错，回到本课第二节：动词不只表示动作。

词汇支持：gate 门；open 开着的；bright 明亮的；hall 大厅；pupil 学生；draw 画；picture 图画；carry 搬；box 箱子；wait 等；outside 在外面。

### 先有完整信息，再找结构

校园记录里，The pupils 只是“这些学生”这个对象；The pupils draw pictures 说明他们画图，完成了一条陈述。句子不是越长越完整：The pupils near the gate 仍可能只是“门边的学生”，虽然词多，却没有说明他们怎样。判断时先问这句话的本意，再找承担陈述的动词。

本课限定为普通完整陈述句。它通常有主语和一个带时态的动词部分，动词后是否还需信息由具体用法决定。The pupils wait 可以独立陈述；The pupils carry 若意思是搬物品，通常还要说明搬什么，如 carry boxes。这里先认识“必要信息”，第 10 课再系统区分宾语与补语。不能把所有主语加动词都判为已经说完整。

标点与大写帮助书面表达划分句子：句首大写，陈述句通常以句号结束。但把 The pupils.加上句号，不会凭空补出陈述。反过来，一条没有写句号的完整信息可能只是标点未完成，不等于缺动词。核对时把结构问题与书写问题分开。

### 动词既可说行动，也可说明身份或状态

The pupils draw pictures 中的 draw 说行为；The hall is bright 中的 is 将大厅与明亮的状态连起来。中文“大厅很亮”不必出现“是”，英语这里仍需要 is。be 的具体形式 am/is/are 将在第 02 课展开，今天先把 is/are 当作句中不可漏掉的动词。

不能用“中文能译成是”作为唯一选择。The gate is open 描述门的状态；The worker opens the gate 描述工作人员开门，open 在两句中承担不同的作用。词性是单词在当前用法中的类别；主语、谓语等是它在整句中的作用。gate 是名词，在前句作主语，在后句是动作所作用的对象。

初学时可以先标“谈论对象／动词／其余信息”，再学习术语。谓语在不同教学体系中可能指整个对主语作出的陈述，也可能具体讨论谓语动词。这里要求标的是动词部分，不要求把后面的所有词都涂成动词；不要让术语分歧掩盖句意。

### 从整体短语找主语，按普通陈述语序组织

普通陈述通常先放主语，再放动词：Our new classmate waits outside。Our new classmate 这一整体是主语，不能只圈 new，也不能因为有四个词就把它拆成四个对象。The pupils near the gate draw pictures 里，near the gate 补充哪一群学生，主语整体是 The pupils near the gate。

初次分析可先定位 draw，再问谁在画，然后确定动作对象 pictures。找出的对象必须与句中意思一致；不能简单把最靠近动词的名词当作主语。复杂修饰第 25 课及第 46 课再展开，本课的长主语只用来说明主语可以是短语，不把陌生介词作为核心验收。

词序也是意义的一部分。The child follows the dog 与 The dog follows the child 都完整，却交换了跟随者。改写时检查原本要说明谁做什么，不要为了凑出正确结构而更换角色。先保住信息，再处理形式，是后续翻译和写作的共同做法。

### 识别片段，同时保留真实口语的边界

如果写校园观察报告，The windows clean.想陈述窗户干净，就应补 are；The clean windows 只是名词短语。Read the notice.可以是一条祈使句“读通知”，不能说它在所有语境中都错误；但它不能完整表达“这些学生读通知”，后者需要 The pupils read the notice。

真实对话中，对“谁在外面？”回答“Our new classmate.”可能足够，标题也常用名词短语。完整陈述的标准取决于任务：本课练的是独立写出事实，不能把省略式短答误用到独立介绍里；也不能将所有口语片段一律视为不会英语。

自己写新句时依次核对三件事：对象是否明确，动词是否承担陈述，需要的信息是否齐全。先不要追求长句。写出一条关于人物行为、一条关于物品状态的准确陈述，比把几个名词和形容词堆起来更能证明理解。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| The pupils draw pictures. | 学生们画图。 | 对象 pupils、行为 draw、动作对象 pictures 齐全。 |
| The hall is bright. | 大厅很明亮。 | bright 是状态说明，is 不能因中文没有“是”而省略。 |
| Our new classmate waits outside. | 我们的新同学在外面等。 | 主语是一个整体短语；outside 补充地点。 |
| The worker opens the gate. / The gate is open. | 工作人员开门。／门开着。 | 同一词在动作与状态表达中作用不同。 |
| The child follows the dog. / The dog follows the child. | 孩子跟着狗。／狗跟着孩子。 | 词序交换会改变行动者和动作对象。 |
| The pupils near the gate draw pictures. | 门边的学生们画图。 | 修饰短语位于主语内，不独立承担陈述。 |
| The clean windows / The windows are clean. | 干净的窗户／窗户是干净的。 | 前者命名对象，后者陈述状态。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| The hall bright.（想陈述状态） | The hall is bright. | 缺承担陈述的动词。 |
| The pupils near the gate.（想说学生在门边） | The pupils are near the gate. | 原表达可作名词短语；位置陈述需要 are。 |
| Draw pictures.（想说学生们画图） | The pupils draw pictures. | 原句是指令式，指定谈论对象未表达。 |
| The child the dog follows.（普通语序，本意孩子跟狗） | The child follows the dog. | 动词应放在主语后；这里不能借特殊话题语序掩盖初学错误。 |

### 边界与使用选择

本课说明的是普通陈述的常见结构，不是“每个英语句子必须有显式主语”的绝对规则。祈使句、短答、标题有自己的用法；第 13 课再学习指令。主语不一定是施事，例如被动句的主语可能是承受者，后续第 27 课再讲。本课把主语称为谈论对象，是为了避免把“谁做动作”推广到所有句型。不要用词数、句号或中文译法单独判断完整性。

### 学完后怎样检查自己

拿一张新的校园照片，写两句独立陈述：人物做什么、地点或物品怎么样。分别标谈论对象、动词、必要信息，再说明一个名词短语为什么不适合作为独立陈述。若只能识别熟悉例句，先换词汇再试。隔一天不看示例，用家里的一个场景重写；能解释补动词的理由才算形成结构意识。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [Cambridge：Clauses — introduction](https://dictionary.cambridge.org/us/grammar/british-grammar/introduction)：主语、动词及必要补足信息；陈述与祈使、独立与从属分句。
- [British Council：Present simple — to be](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be)：现在be陈述、缩写、否定、疑问与短答的形式和位置。`,practice:[{id:`gc1-p1`,prompt:`独立观察报告应选哪项？A. The quiet hall. B. The hall is quiet. C. The hall quiet.`,reference:`B`,explanation:`B 把大厅与状态组成陈述；A 只是短语，C 缺动词。`,criteria:[`选 B`,`指出 is 承担陈述`]},{id:`gc1-p2`,prompt:`Our new classmate waits outside. 标出主语整体和动词。`,reference:`主语 Our new classmate；动词 waits`,explanation:`主语包括限定和修饰，不只圈 classmate 一个词。`,criteria:[`主语整体完整`,`waits 为动词`]},{id:`gc1-p3`,prompt:`The pupils carry boxes. 中 boxes 是被谈论对象还是搬运的物品？`,reference:`搬运的物品；主语是 The pupils`,explanation:`由 carry 的动作关系判断，不能按“最后的名词”确定主语。`,criteria:[`指出搬运对象`,`区分 pupils`]},{id:`gc1-p4`,prompt:`按“门开着”的本意修正 The gate open.`,reference:`The gate is open.`,explanation:`状态说明 open 不能单独承担这条陈述，需 is。`,criteria:[`加入 is`,`保留门的状态`]},{id:`gc1-p5`,prompt:`比较 The cat follows the boy 与 The boy follows the cat，意义是否相同？`,reference:`不同；前句猫跟男孩，后句男孩跟猫`,explanation:`两句结构均可成立，角色由词序决定。`,criteria:[`区分跟随者`,`不判任一句必然错`]},{id:`gc1-p6`,prompt:`Read the notice.为何不能直接表达“新同学读通知”？`,reference:`原句通常是指令；应写 Our new classmate reads the notice.`,explanation:`判断须基于原本的陈述任务，不能把祈使句一律当错。`,criteria:[`说明指令用途`,`补谈论对象`]},{id:`gc1-p7`,prompt:`用给定词写“大厅很干净”：the hall / clean / is。`,reference:`The hall is clean.`,explanation:`普通陈述将主语置于 is 前，clean 补足状态。`,criteria:[`正确词序`,`保留 is`,`书写完整`]},{id:`gc1-p8`,prompt:`用 pupils / draw / pictures 写行为陈述，再用 gate / open / is 写状态陈述。`,reference:`The pupils draw pictures. The gate is open.`,explanation:`分别用实义动词与 be 承担陈述。`,criteria:[`行为句有主语和 draw`,`状态句保留 is`,`两条信息完整`]}],verification:[{id:`gc1-v1`,prompt:`The young visitors wait. 标主语整体与动词；visitor 游客。`,reference:`主语 The young visitors；动词 wait`,explanation:`young 属于主语内部修饰，主语不止一个词。`,criteria:[`完整主语`,`识别 wait`],skill:`structure`,critical:!1},{id:`gc1-v2`,prompt:`独立说明花园很安静，修复 The garden quiet.`,reference:`The garden is quiet.`,explanation:`quiet 为状态补足语，独立陈述需 is。`,criteria:[`garden 为对象`,`补 is`,`保留 quiet`],skill:`transformation`,critical:!0},{id:`gc1-v3`,prompt:`将“志愿者们读地图”排成普通陈述：maps / the volunteers / read。`,reference:`The volunteers read maps.`,explanation:`行动者在前，动词后放被读的内容。`,criteria:[`行动者正确`,`read 位置正确`,`maps 为动作对象`],skill:`transformation`,critical:!0},{id:`gc1-v4`,prompt:`The useful map.为何不能独立表达“地图有用”？`,reference:`它只命名“有用的地图”；需 The map is useful.`,explanation:`名词短语和状态陈述承担不同任务。`,criteria:[`解释短语作用`,`指出缺陈述动词`],skill:`meaning`,critical:!1},{id:`gc1-v5`,prompt:`用护士 nurses / help / visitors 写一条新行为陈述，并标谈论对象。`,reference:`The nurses help visitors. 谈论对象 The nurses。`,explanation:`可加不改变角色的修饰，但不能交换帮助者。`,criteria:[`完整主语`,`help 为动词`,`visitors 为对象`],skill:`expression`,critical:!0},{id:`gc1-v6`,prompt:`分别陈述“工作间明亮”和“画家们等”：workshop / bright / painters / wait。`,reference:`The workshop is bright. The painters wait.`,explanation:`新词仍遵守身份状态与行为两种陈述结构。`,criteria:[`状态句有 is`,`行为句有 wait`,`两句主语齐全`],skill:`expression`,critical:!0}],review:[{id:`gc1-r1`,prompt:`修正 The path narrow.，本意“小路很窄”。`,reference:`The path is narrow.`,explanation:`独立状态陈述需要连接动词 is。`,criteria:[`保留本意`,`有 is`]},{id:`gc1-r2`,prompt:`The little ducks swim. 标主语整体；duck 鸭。`,reference:`The little ducks`,explanation:`little 修饰 ducks，限定词和修饰词都属于主语整体。`,criteria:[`圈完整短语`]},{id:`gc1-r3`,prompt:`“男孩推小车”，用 boy / pushes / cart 写完整陈述；再说小车旧 old。`,reference:`The boy pushes the cart. The cart is old.`,explanation:`行为与状态分开陈述，不能漏第二句的动词。`,criteria:[`推车角色正确`,`第二句有 is`,`两句完整`]}],sources:[{title:`Cambridge：Clauses — introduction`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/introduction`,supports:`主语、动词及必要补足信息；陈述与祈使、独立与从属分句`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`},{title:`British Council：Present simple — to be`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be`,supports:`现在be陈述、缩写、否定、疑问与短答的形式和位置`,accessed:`2026-10-03`,method:`官方页面正文`}],revision:`official-reference-2026-10-03`,title:`主语与谓语：完整陈述`,module:`形成完整表达`,moduleOrder:1,track:`basic`},{number:2,objectives:[`根据说话者、听话者和被谈论者选择主格代词，保持指代清楚。`,`将身份、状态、位置分别写成主语＋am/is/are＋补足信息，并与主语匹配。`,`使用自然缩写但保留完整肯定短答形式，不以中文“是”决定 be。`],summary:`根据说话者、听话者和被谈论者选择主格代词，保持指代清楚。`,prerequisites:[1],body:`### 学习目标

1. 根据说话者、听话者和被谈论者选择主格代词，保持指代清楚。
2. 将身份、状态、位置分别写成主语＋am/is/are＋补足信息，并与主语匹配。
3. 使用自然缩写但保留完整肯定短答形式，不以中文“是”决定 be。

### 先检查前置知识

先学：第 01 课。先独立回答下面两题，再阅读本节的核对提示。

1. The room tidy.想陈述房间整洁，少了哪部分？

核对：少 is，tidy 本身不是承担本句陈述的动词。若做错，回到第 01 课状态陈述。

2. My new neighbour is helpful. 主语整体是哪部分？

核对：My new neighbour；不是只圈 new 或 is。若做错，回到第 01 课整体主语。

词汇支持：neighbour 邻居；helpful 乐于助人；ready 准备好；coach 教练；members 成员；near 近；entrance 入口；inside 在里面；student 学生；busy 忙。

### 代词先看交谈关系，不按位置背人称

I 指当前说话者，you 指当前听话者；you 既可指一人也可指多人。he/she/it 指被谈论的对象，we 包含说话者在内的一群人，they 常指多个被谈论者。把 Lena is ready 改成 She is ready，前提是读者知道 she 指 Lena；不能在没有交代人的时候突然出现 she，再让读者猜是谁。

两人互问时，人称会变化。Kai 对你说“You are a new member.”，你介绍自己应说“I am a new member.”，不能照抄 You are。第三人称不是“排在第三位的人”，而是交谈双方之外被谈论的对象。名字、职业、关系都不能独自决定 he 或 she，应使用已知的合适指代。

主格代词在普通完整句中作主语，通常不省略。Am ready 若是完整书面介绍，需要 I am ready。自然口语有省略，但初学阶段先保持主语齐全；第 09 课再区分宾格与物主形式，不把所有地方都套主格。

### am/is/are 表达现在的身份、状态和位置

I 配 am；he/she/it 及单数名词短语配 is；you/we/they 及普通复数主语配 are。I am a coach 说明身份，The coach is busy 说明状态，The members are inside 说明位置。be 在这些句中连接对象与补足信息，它不是只有译成“是”时才出现。

中文“我很忙”“成员在里面”在英语中分别写 I am busy 和 The members are inside。身份补足语是单数职业名词时通常有 a/an，如 She is a student；形容词补足语不加 a，如 She is ready。冠词的完整规则第 08 课再讲，这里把 a student/a coach 作为完整词组使用。

be 的选择由主语决定，后面的补足信息不能反过来改变它。They are a team 中 they 仍配 are，即使 a team 是单数形式。本课优先使用结构清楚的单复数；集合名词整体与成员视角第 28 课再讲，不能只凭离 be 最近的词套单复数。

### 缩写用于自然表达，保留意义和可恢复性

日常自我介绍常用 I’m、you’re、he’s、she’s、it’s、we’re、they’re。缩写与完整形式的肯定意义相同，撇号标出省掉的字母；I’m 是 I am 的缩写，不是另一种人称。书面正式说明可用完整形式，普通邮件和对话可自然缩写。

缩写最好在上下文清楚时使用。She’s busy 在本课就是 She is busy；以后遇到 She’s finished 时，’s 也可能代表 has，需看后接形式，不能把所有’s 都解释成 is。现在只练本课的 be 缩写，不要求提前掌握完成时。

完整肯定短答末尾不使用 be 缩写。例如回答 Are you ready?说 Yes, I am，而不是 Yes, I’m。这个边界将在第 03 课实际问答中核对；今天可以把 I’m ready 和 Yes, I am 并排观察，发现缩写是否允许取决于它在表达中的位置。

### 指代与一致要分别检查

两位同学已知为 Lena 和 Bo，Lena and Bo are near the entrance 可以回指为 They are near the entrance。若两个人先后出现后只写 She is busy，读者可能不清楚是哪位，应该重写名字或加足以识别的信息。语法形式正确不等于信息表达清楚。

it 可指已知物品，也常作天气或时间表达的形式主语，如 It is cold、It is six；这种 it 不一定对应具体“它”。作为拓展认识即可，本课验收会给出明确对象，不让学生猜 it 到底指物品还是天气。singular they 在现代英语中也可指性别未知或以 they 指代的一人，动词仍用 are；不会因指一个人而写 they is。

写介绍时，先确定每个代词能回到谁或什么，再看 be 是否匹配，最后看补足信息是否完整。这三步分别解决内容、形式和结构的问题。用自己的情况写句子时允许不同身份地点，但不能凭参考词句一致率判断是否正确。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| I am a new member. / I’m a new member. | 我是新成员。 | 完整与缩写意义相同，I 始终配 am。 |
| The coach is ready. / She is ready. | 教练准备好了。／她准备好了。 | 先有明确人物，才能自然用 she 回指。 |
| You are near the entrance. | 你／你们在入口附近。 | you 可指一人或多人，形式都用 are。 |
| We are busy. / They are busy. | 我们忙。／他们忙。 | we 包含说话者，they 通常不包含。 |
| The keys are inside. / The key is inside. | 钥匙们在里面。／钥匙在里面。 | 主语数量改变 be 形式。 |
| They are a team. | 他们是一个团队。 | be 匹配 they，不由后面的 a team 决定。 |
| I’m ready. / Yes, I am. | 我准备好了。／是的，我准备好了。 | 陈述可缩写，肯定短答末尾用完整 am。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| I is busy. | I am busy. | 第一人称单数 I 与 am 匹配。 |
| The members is inside. | The members are inside. | 普通复数主语 members 配 are。 |
| She a coach. | She is a coach. | 身份词组不能代替 be 动词。 |
| You am ready.（本人自我介绍） | I am ready. | 交谈角色与动词同时需调整；若说听者则 You are ready。 |

### 边界与使用选择

be 之后可以是身份名词、状态形容词或地点表达，不是“be 后只能接形容词”。it 不总有具体指代，you 不总是单数，they 也不永远只指多个个体；这些边界按实际语言解释。正式完整句与自然口语片段有不同要求。新增术语与拓展例只供辨认，本课验收核心为给定对象下的人称、be 形式和补足信息。

### 学完后怎样检查自己

向同学写五句介绍：你是谁、你现在怎样、你在哪里、两个已明确的同伴怎样、同伴在哪里。把能缩写的句子再写一次，确认意义不变。让同学指出代词所指；若他无法识别，就补名字或重新组织介绍。隔天换成介绍一个活动小组，检查主语数量变化后 be 是否也跟着变化。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [Cambridge：Personal pronouns](https://dictionary.cambridge.org/us/grammar/british-grammar/pronouns-personal-it)：交谈人称、主宾格位置、可恢复指代、you数量与singular they。
- [British Council：Present simple — to be](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be)：现在be陈述、缩写、否定、疑问与短答的形式和位置。`,practice:[{id:`gc2-p1`,prompt:`你介绍自己“准备好了”，选 I am/I is/You am。`,reference:`I am ready.`,explanation:`说话者用 I，配 am；ready 说明状态。`,criteria:[`用 I`,`am 匹配`]},{id:`gc2-p2`,prompt:`The two members ___ outside.填 am/is/are。`,reference:`are`,explanation:`members 为两个成员，普通复数主语配 are。`,criteria:[`are`,`依据复数主语`]},{id:`gc2-p3`,prompt:`Lena is a coach. Lena is helpful.第二句避免重复名字。`,reference:`She is helpful.`,explanation:`已交代 Lena，可用 she 回指，be 配单数主格。`,criteria:[`she 指 Lena`,`is 匹配`]},{id:`gc2-p4`,prompt:`将 We are near the entrance 改为自然缩写。`,reference:`We’re near the entrance.`,explanation:`we’re 保留 we are 的主语与动词，撇号不可漏。`,criteria:[`we’re 正确`,`地点信息不变`]},{id:`gc2-p5`,prompt:`一位听者问你“You are a student?”，你用完整陈述确认自己的身份。`,reference:`I am a student.`,explanation:`回到说话者角度选 I；a student 为身份词组。`,criteria:[`改用 I`,`am`,`身份信息`]},{id:`gc2-p6`,prompt:`They are a team 为何不能因 team 单数改 are 为 is？`,reference:`be 与主语 they 匹配，a team 是身份补足语。`,explanation:`先确定句中作用，不能只看离 be 最近的名词。`,criteria:[`确定主语 they`,`区分补足语`]},{id:`gc2-p7`,prompt:`修复 The keys is inside，再用 it 或 they 回指钥匙们。`,reference:`The keys are inside. They are inside.`,explanation:`keys 复数，在明确对象下回指用 they。`,criteria:[`are 匹配 keys`,`they 回指复数`]},{id:`gc2-p8`,prompt:`写两句：你是新成员；你和 Bo 在大厅。`,reference:`I am a new member. Bo and I are in the hall.`,explanation:`允许 We are in the hall 但须明确 we 包含 Bo 和你。`,criteria:[`自我身份完整`,`两人主语配 are`,`位置清楚`]}],verification:[{id:`gc2-v1`,prompt:`My neighbour ___ busy. 填 be 形式；neighbour 指一位邻居。`,reference:`is`,explanation:`给定单数主语配 is，busy 说明状态。`,criteria:[`is`,`不按 busy 决定`],skill:`agreement`,critical:!1},{id:`gc2-v2`,prompt:`两位队员准备好了，修复 The members am ready.`,reference:`The members are ready.`,explanation:`members 是复数，与 are 匹配。`,criteria:[`are`,`保留状态`],skill:`agreement`,critical:!0},{id:`gc2-v3`,prompt:`Mina is inside.把名字回指为合适主格，并写缩写。`,reference:`She is inside. She’s inside.`,explanation:`已给人物身份，可用 she 回指；缩写对应 is。`,criteria:[`主格正确`,`缩写含撇号`,`位置不变`],skill:`transformation`,critical:!0},{id:`gc2-v4`,prompt:`对一组听者说 You are helpful，you 指多人是否需换成 you 们或另一 be？`,reference:`不需；you 可指一人或多人，均用 are。`,explanation:`人称形式和数不能按中文“们”直接翻译。`,criteria:[`you 可复数`,`are 形式不变`],skill:`meaning`,critical:!1},{id:`gc2-v5`,prompt:`用新资料写两句：Ari 是学生、Ari 很忙；第二句使用明确的代词。Ari 使用 they 指代。`,reference:`Ari is a student. They are busy.`,explanation:`题目指定代词为 they，形式仍是 are；名字 Ari 单数配 is。`,criteria:[`Ari is`,`they are`,`代词指代清楚`],skill:`expression`,critical:!0},{id:`gc2-v6`,prompt:`介绍你和两位同伴：身份一条、位置一条；不用照抄给定例句。`,reference:`We are new members. We are near the library.`,explanation:`先交代 we 包含你与同伴；正确的其他身份地点表达也可。`,criteria:[`we 所指明确`,`are 匹配`,`身份位置分别完整`],skill:`expression`,critical:!0}],review:[{id:`gc2-r1`,prompt:`一周后介绍两张地图都新 new，写句并回指。`,reference:`The maps are new. They are new.`,explanation:`普通复数 maps 与 they 均配 are。`,criteria:[`are 匹配`,`回指清楚`]},{id:`gc2-r2`,prompt:`把 You are a volunteer.改成说话者介绍自己，volunteer 志愿者。`,reference:`I am a volunteer.`,explanation:`交谈关系改变，人称和 be 都调整。`,criteria:[`I am`,`身份完整`]},{id:`gc2-r3`,prompt:`补全一问一答末尾的肯定 be：Are you ready? Yes, I ___.`,reference:`am`,explanation:`肯定短答末尾 am 不缩写；疑问形式下课继续练。`,criteria:[`am 完整形式`]}],sources:[{title:`Cambridge：Personal pronouns`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/pronouns-personal-it`,supports:`交谈人称、主宾格位置、可恢复指代、you数量与singular they`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`},{title:`British Council：Present simple — to be`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be`,supports:`现在be陈述、缩写、否定、疑问与短答的形式和位置`,accessed:`2026-10-03`,method:`官方页面正文`}],revision:`official-reference-2026-10-03`,title:`主格代词与 be 肯定句`,module:`形成完整表达`,moduleOrder:1,track:`basic`},{number:3,objectives:[`将现在 be 陈述变为否定或一般疑问，保持主语与补足信息。`,`从回答者角度作肯定、否定短答，区分信息确认与原样重复问句。`,`选择自然否定缩写，理解 not 的位置和肯定短答末尾不能缩写的边界。`],summary:`将现在 be 陈述变为否定或一般疑问，保持主语与补足信息。`,prerequisites:[1,2],body:`### 学习目标

1. 将现在 be 陈述变为否定或一般疑问，保持主语与补足信息。
2. 从回答者角度作肯定、否定短答，区分信息确认与原样重复问句。
3. 选择自然否定缩写，理解 not 的位置和肯定短答末尾不能缩写的边界。

### 先检查前置知识

先学：第 01 课、第 02 课。先独立回答下面两题，再阅读本节的核对提示。

1. I ___ ready 与 The guests ___ ready 应选哪些 be？

核对：I am；The guests are。若做错，回到第 02 课主语与 be 一致。

2. Kai 问 Are you a member?，你介绍自己应使用 you 还是 I？

核对：从回答者角度使用 I。若做错，回到第 02 课交谈角色。

词汇支持：guest 客人；available 有空的、可用的；late 迟到的；early 早的；closed 关着的；hungry 饿的；at home 在家；member 成员。

### 否定的是陈述，不是更换事实对象

The guests are hungry 陈述客人饿，The guests are not hungry 否定同一信息。not 放在 am/is/are 后面，主语与其余信息保持。若把 The guests are hungry 改成 The host is not hungry，你虽然写出正确语法，却把被谈论者换成主人，不能算原句的否定变式。

I am not late 中 am 仍与 I 匹配；加入 not 不改变人称和数。状态词本身为否定含义不等于句中已有 not。The shop is closed 说明关门的状态，The shop is not closed 否定“关着”这一信息。理解本意后再判断，不能看到 closed 就机械称为否定句。

否定通常作用于整条 be 陈述，但语境中的重音可能凸显某部分，如“不是这间房可用，而是那间”。本课只要求普通信息否定，不以重音或复杂范围作核心评分；后续修饰与信息焦点课再深入。

### be 疑问把现有 be 移到主语前

The hall is available 变成 Is the hall available?；You are early 变成 Are you early?。已有 be 承担句子的时态与一致信息，只需把它置于主语前，不另加 do。保持问的是同一对象和同一状态；把 available 误换为 busy 会改变要确认的信息。

遇长一点的主语时仍整体移动结构：The new members are inside→Are the new members inside?。不是将主语中的最后一个词放到前面，也不是把动词拆成字母倒序。书面疑问句首大写，末尾用问号；主语和补足信息不可因疑问而漏掉。

普通书面问句与陈述语调问句不同。朋友口语“You’re early?”可以表示惊讶确认，但本课练常规 be 疑问式。不能把口语边界当作理由拒绝学习常规词序，也不应断言自然口语的陈述式问句一律不合法。

### 短答按事实与回答者角色决定

问 Are you hungry?，回答者说 Yes, I am 或 No, I’m not；问 Are you and Mei ready?，回答者若代表双方，就说 Yes, we are 或 No, we aren’t。短答里的 you 不会机械原样留下，必须先确认谁在回答、代表几个人。

问 Is the room available?，用 Yes, it is 或 No, it isn’t，it 回指已明确的房间。问 Are the rooms available?则 they 与 are 回指多个房间。短答仍保留原来 be 句式，不能用 Yes, I do 回答自己的身份或状态问题。

肯定短答末尾的 be 要完整：Yes, she is，不写 Yes, she’s。否定短答可以用 No, she isn’t 或 No, she’s not；完整形式 No, she is not 也成立。题目若指定完整形式应遵守任务；未指定时接受符合语境的自然变体。

### 缩写和真实信息要一起核对

is not 可缩为 isn’t，也可把主语与 is 缩写后保留 not，如 She’s not busy。are not 可作 aren’t 或 They’re not busy。I am not 常作 I’m not；一般标准英语不用 I amn’t 作为普通否定形式。扩展的 aren’t I 等问法后续认识，不在本课以一个禁令覆盖所有方言。

yes/no 回应这里按肯定或否定事实判断。为减少母语干扰，本课先使用肯定问句：Is the door closed?若门开着，回答 No, it isn’t；若门确实关着，Yes, it is。不要依据中文回答中是否有“是”来选英语 yes。

一轮核对先看题给的事实，再看结构：be 位置、not 位置、代词所指、be 匹配。能按模板排列词却回答与事实相反，还未达到交流目的。独立验收会换场景和对象，防止把课堂短答原样背下来。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| The guests are hungry. / The guests are not hungry. | 客人饿。／客人不饿。 | 否定同一主语信息，not 在 are 后。 |
| The hall is available. / Is the hall available? | 大厅可用。／大厅可用吗？ | 疑问移动现有 is，不加 do。 |
| Are you early? — Yes, I am. | 你到得早吗？—是的。 | 回答者以 I 回到自身，肯定 am 完整。 |
| Are you and Mei ready? — No, we aren’t. | 你和 Mei 准备好了吗？—没准备好。 | 代表两人回答，用 we are。 |
| Is the room closed? — No, it isn’t. | 房间关着吗？—没关。 | it 回指 room，短答沿用 is。 |
| She isn’t available. / She’s not available. | 她没有空。 | 两种否定缩写保留相同信息。 |
| Yes, they are. / No, they’re not. | 是的，他们是。／不，他们不是。 | 肯定末尾 be 不缩写，否定可自然缩写。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| They not are hungry. | They are not hungry. | 普通否定的 not 位于 be 之后。 |
| Do the hall is available? | Is the hall available? | 现有 be 前置，不再加入 do。 |
| Are you a member? — Yes, you are.（本人回答） | Yes, I am. | 回答者角色由 you 变为 I。 |
| Is she early? — Yes, she’s. | Yes, she is. | 肯定短答末尾不用 be 缩写。 |

### 边界与使用选择

be 疑问否定规则适用于本课的现在身份、状态、位置陈述。以后 be 还能与-ing 或过去分词构成其他结构，这里不据此预测所有句型。否定问句和附加问句有更多语用含义，本课先确认肯定问句里的真实事实。自然缩写、完整形式和口语片段需要区分任务与语体；核对标准不把参考答案的一种缩写视作唯一正确写法。

### 学完后怎样检查自己

让同学给出三个事实：一人现在是否忙、两人是否在家、一间房是否开放。你先写相应 be 疑问，再按事实回答，最后写一条否定陈述。让对方检查所指和事实，而不只看单词顺序。若人称回转易错，先用中文指出问者与答者角色，再回写英语。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [Cambridge：Questions](https://dictionary.cambridge.org/us/grammar/british-grammar/questions)：常规疑问语序与真实交谈问句的区别。
- [British Council：Present simple — to be](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be)：现在be陈述、缩写、否定、疑问与短答的形式和位置。`,practice:[{id:`gc3-p1`,prompt:`否定 The guests are hungry.，保留同一事实对象。`,reference:`The guests are not hungry.`,explanation:`not 加入 are 后，主语与 hungry 都保留。`,criteria:[`not 位置`,`保留 guests`]},{id:`gc3-p2`,prompt:`将 The room is available.改为常规一般疑问。`,reference:`Is the room available?`,explanation:`把现有 is 置于整体主语前，不用 do。`,criteria:[`is 前置`,`信息不变`,`问号`]},{id:`gc3-p3`,prompt:`问 Are you late?，你确实不迟到，作自然短答。`,reference:`No, I’m not. / No, I am not.`,explanation:`回答者用 I，否定与题给事实一致。`,criteria:[`No 符合事实`,`I am not 结构`]},{id:`gc3-p4`,prompt:`问 Is Mina at home?，她在家，写完整肯定短答。`,reference:`Yes, she is.`,explanation:`she 回指 Mina，末尾 is 完整。`,criteria:[`Yes 符合事实`,`she is 不缩写`]},{id:`gc3-p5`,prompt:`用两种缩写否定 They are ready.。`,reference:`They aren’t ready. They’re not ready.`,explanation:`缩写 not 或主语与 are 均可，否定意义相同。`,criteria:[`aren’t`,`they’re not`]},{id:`gc3-p6`,prompt:`The door is closed 是肯定还是否定形式？解释。`,reference:`肯定形式；closed 表达状态，句中未用 not。`,explanation:`词义带“关着”不等于语法否定。`,criteria:[`区分形式与词义`]},{id:`gc3-p7`,prompt:`你代表你和 Bo 回答 Are you and Bo available?，两人都有空。`,reference:`Yes, we are.`,explanation:`回答代表双方，we 复数配 are。`,criteria:[`we 包括双方`,`Yes we are 完整`]},{id:`gc3-p8`,prompt:`改正 Do the windows are open?并按窗户关着作短答。`,reference:`Are the windows open? No, they aren’t.`,explanation:`疑问移 are；复数 windows 回指 they；事实需否定 open。`,criteria:[`无多余 do`,`they are 匹配`,`事实一致`]}],verification:[{id:`gc3-v1`,prompt:`把 The office is quiet.改为否定；office 办公室。`,reference:`The office is not quiet.`,explanation:`对相同办公室状态作否定，not 紧随 is。`,criteria:[`is not`,`主语不变`],skill:`structure`,critical:!1},{id:`gc3-v2`,prompt:`询问“这两位游客在里面吗”：the two visitors / inside。`,reference:`Are the two visitors inside?`,explanation:`the two visitors 整体是复数主语，陈述应为 are inside；普通 be 疑问把 are 移到整个主语前，不能只移动 visitors 或另加 do。`,criteria:[`are 前置`,`整体主语完整`,`inside 保留`],skill:`transformation`,critical:!0},{id:`gc3-v3`,prompt:`修正 The new member not is ready.。`,reference:`The new member is not ready.`,explanation:`不是将 not 放在主语与 be 之间。`,criteria:[`is not 顺序`,`补足信息完整`],skill:`transformation`,critical:!0},{id:`gc3-v4`,prompt:`一位老师问你 Are you and Ari early?，你代表两人，两人都早到。写短答。`,reference:`Yes, we are.`,explanation:`yes 依据真实到达情况，we 包含回答者和 Ari。`,criteria:[`we 代表两人`,`are 匹配`,`Yes 事实正确`],skill:`meaning`,critical:!1},{id:`gc3-v5`,prompt:`新情境：询问两张票是否有效 valid，已知无效。写 be 问句与短答。`,reference:`Are the tickets valid? No, they aren’t.`,explanation:`tickets 复数问用 are，回指 they；否定与无效相合。`,criteria:[`问句常规词序`,`they are 匹配`,`事实否定`],skill:`expression`,critical:!0},{id:`gc3-v6`,prompt:`对方问你是否是志愿者。你不是，并补一句“我是一位客人”。用完整短答再作陈述。`,reference:`No, I am not. I am a guest.`,explanation:`否定身份问题后补不同身份，用 I 保持回答角色。`,criteria:[`完整否定短答`,`I am 角色正确`,`新身份句完整`],skill:`expression`,critical:!0}],review:[{id:`gc3-r1`,prompt:`改为疑问并否定回答：The lift is available.（电梯不可用）`,reference:`Is the lift available? No, it isn’t.`,explanation:`问同一对象，it 回指电梯；事实是否定。`,criteria:[`is 前置`,`it 否定正确`]},{id:`gc3-r2`,prompt:`They are not at home.写一种自然缩写。`,reference:`They aren’t at home. / They’re not at home.`,explanation:`are not 可以缩为 aren’t，they are 也可以缩为 they’re 后保留 not；两种写法都否定在家的状态，不能同时把 are 重复写两次。`,criteria:[`合法缩写`,`信息保持`]},{id:`gc3-r3`,prompt:`回答 Are you hungry?，你饿，末尾 be 能否缩写？`,reference:`Yes, I am. 末尾不能缩写为 I’m。`,explanation:`肯定短答与完整陈述的缩写位置不同。`,criteria:[`Yes I am`,`说明边界`]}],sources:[{title:`Cambridge：Questions`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/questions`,supports:`常规疑问语序与真实交谈问句的区别`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录`},{title:`British Council：Present simple — to be`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be`,supports:`现在be陈述、缩写、否定、疑问与短答的形式和位置`,accessed:`2026-10-03`,method:`官方页面正文`}],revision:`official-reference-2026-10-03`,title:`be 否定与一般疑问`,module:`形成完整表达`,moduleOrder:1,track:`basic`},{number:4,objectives:[`按习惯、当前一般事实和状态理解一般现在时，不把它等同于眼前正在做。`,`以主语人称和数选择动词原形或第三人称单数形式，处理常见拼写和不规则形式。`,`用完整陈述介绍规律与喜好，区分动词形式变化和名词复数。`],summary:`按习惯、当前一般事实和状态理解一般现在时，不把它等同于眼前正在做。`,prerequisites:[1,2,3],body:`### 学习目标

1. 按习惯、当前一般事实和状态理解一般现在时，不把它等同于眼前正在做。
2. 以主语人称和数选择动词原形或第三人称单数形式，处理常见拼写和不规则形式。
3. 用完整陈述介绍规律与喜好，区分动词形式变化和名词复数。

### 先检查前置知识

先学：第 01 课、第 02 课、第 03 课。先独立回答下面两题，再阅读本节的核对提示。

1. The guide is busy.标主语及动词，busy 是什么信息？

核对：主语 The guide，动词 is，busy 说明状态。若做错，回到第 01—02 课结构与 be。

2. he 和 we 中哪个是第三人称单数？

核对：he；we 包含说话者的一群人。若做错，回到第 02 课人称与数量。

词汇支持：guide 向导；collect 收集；cycle 骑车；repair 修理；enjoy 喜欢；watch 观看；study 学习；carry 搬；finish 完成；map 地图；on Mondays 每周一。

### 一般现在时说明现在成立的常态

The guide cycles to work on Mondays 说向导每周一骑车上班，不是在摄像头中描述她此刻骑车。Our club collects maps 说明俱乐部的常规活动。I enjoy quiet places 说明当前的喜好；喜好不是明显动作，也可以用实义动词的一般现在时表达。

一般事实不一定“永远不会改变”。Ari lives near the station 说明目前成立的生活情况，明年可能搬家；它仍可以是现在的一般事实。不能把一般现在时限定为宇宙真理，也不能见中文“现在”就一律使用进行时。第 16—17 课会比较展开中的活动和常态，目前先练常态视角。

习惯可由 every week、on Mondays 等信息说明，但时间词不是唯一证据。The shop repairs bicycles 即使没有 every day，也说明经营服务。观察句子的交流目的比查找一个“时态信号词”更可靠。验收会明确情境，不要求靠含糊的一句猜说话者的时间视角。

### 主语决定是否使用第三人称单数形式

I/you/we/they 和普通复数主语使用动词原形：We collect maps。he/she/it 及普通单数第三人称主语使用-s 形式：She collects maps，The club collects maps。“第三人称单数”是主语的交谈角色与数量，不是动词位于第三个位置。

The guides collect maps 里 guides 的-s 表示名词复数，collect 不用-s；The guide collects maps 里 guide 单数而 collects 标出动词第三人称单数。两个-s 承担不同的作用，不能见到主语里已有-s 就再给动词加一个-s 以为一致。

两个已明确的人由 and 连接作主语时通常为复数，如 Ari and Bo collect maps。带修饰的主语仍看中心对象：The guide near the entrance collects maps。后续第 28 课讨论集合、数量等复杂一致，本课用清晰对象建立基本匹配，不把“最近的名词”当决定依据。

### 拼写规则服务于正确词形，不代替主语判断

多数动词加-s：repair→repairs、read→reads。常见以-ch、-sh、-ss、-x 等结尾的词加-es：watch→watches、finish→finishes。辅音字母＋y 结尾常把 y 变 i 再加-es：study→studies、carry→carries；元音字母＋y 通常直接加-s：enjoy→enjoys、play→plays。

have→has 需要单独记住，go→goes、do→does 也要熟悉其拼写与实际读音。本课用 have 表达一般具备或拥有，用 do 作为“做”的实义动词；第 05 课会遇到帮助构成否定疑问的 do，两个作用不可混淆。

拼写前先确认是否需要第三人称单数形式。We study 不能因为 study 属于-y 结尾就写 We studies。给 She enjoys 时也不能套“所有 y 改 ies”写 enjoies。查词典可核对当前动词形式和发音，词形知识与句中一致分别核对，能解释决定顺序才不会背规则却乱用。

### 实义动词陈述不用另塞 be，留意意义与搭配

She repairs bicycles 已经用 repairs 承担谓语，不写 She is repairs bicycles。She is a guide 则是身份说明，a guide 不是动词，需要 is。She is helpful 与 She helps visitors 意思相关，结构却不同：前句说明状态性质，后句说明帮助行为。看词在本句的作用再选形式。

有的动词后需要动作对象，如 collect maps、enjoy music；不能为了练-s 而删掉必要信息。另一方面 We cycle 已经可完整表达骑车行为，to work 只是说明目的地。动词搭配第 10 课深入，本课提供足够词汇，避免让生词搭配问题掩盖时态目标。

先写一个真实习惯，再用另一个人的资料写第三人称句。核对意思是否确实为常态、主语与词形是否匹配、动词之后的必要信息是否齐全。改写只改变人称时，时间、行为和对象保持；若把 likes 改成 is，必须同时重写补足信息而不能生硬替换一个词。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| I collect postcards. / Mina collects postcards. | 我收集明信片。／Mina 收集明信片。 | 第三人称单数主语引发动词-s 形式。 |
| The guides repair bicycles. / The guide repairs bicycles. | 向导们修自行车。／向导修自行车。 | 名词复数与动词-s 形式的作用相反，需分别看。 |
| Bo watches films on Sundays. | Bo 每周日看电影。 | 习惯视角，watch 第三人称加-es。 |
| She studies maps. / We study maps. | 她研究地图。／我们研究地图。 | study 变 studies 只在相应主语下使用。 |
| He enjoys music. | 他喜欢音乐。 | 当前喜好也用一般现在时，enjoy 保留 y 加-s。 |
| Our neighbour has a bicycle. | 邻居有一辆自行车。 | have 第三人称单数为 has。 |
| She is helpful. / She helps visitors. | 她乐于助人。／她帮助游客。 | 状态与行为用不同完整结构。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| The guide collect maps. | The guide collects maps. | 普通第三人称单数主语需对应词形。 |
| We watches films. | We watch films. | we 不需要第三人称单数形式。 |
| She studys maps. | She studies maps. | 辅音＋y 变 i 加-es。 |
| He is repairs bicycles. | He repairs bicycles. | 实义动词一般现在肯定句不另加 be。 |

### 边界与使用选择

一般现在时还有时刻表、叙述、指示等用法，本课先以习惯、一般事实与状态建立核心，不提前混入所有未来用法。不是所有动作都必须写进行时，也不是所有状态都只能用 be。复杂集合名词一致存在语境和英美差异，本课以明确单复数为验收。名词复数和动词第三人称形式不能仅凭相同字母-s 理解为同一种数量。

### 学完后怎样检查自己

列出自己的一个喜好和每周活动，用 I 各写一句；再根据一位同学的真实资料用名字或 he/she/they 转述两句。在动词下写“原形／第三人称单数形式”和选择依据。换资料后仍能准确写出，才比背熟 She likes music 更能说明掌握。下一课将用这些句子作否定与提问。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [Cambridge：Present simple](https://dictionary.cambridge.org/grammar/british-grammar/present-simple)：普通第三人称拼写变化、不规则形式与当前一般事实。
- [British Council：Present simple](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple)：习惯和一般事实，第三人称变化与do/does否定疑问。`,practice:[{id:`gc4-p1`,prompt:`情境：Kai 每周修自行车。Kai ___ bicycles. (repair)`,reference:`repairs`,explanation:`普通单数第三人称主语 Kai 使用-s 形式，语境是常规活动。`,criteria:[`repairs`,`常态视角`]},{id:`gc4-p2`,prompt:`将 I collect maps.改为 Mina 作主语，信息不变。`,reference:`Mina collects maps.`,explanation:`主语改为第三人称单数，collect 变 collects。`,criteria:[`主语正确`,`collects`,`对象不变`]},{id:`gc4-p3`,prompt:`写出 watch/study/enjoy 配 he 时的形式。`,reference:`watches / studies / enjoys`,explanation:`词尾分别触发-es、辅音 y 变 ies、元音 y 直接-s。`,criteria:[`watches`,`studies`,`enjoys`]},{id:`gc4-p4`,prompt:`修复 The visitors enjoys music.。`,reference:`The visitors enjoy music.`,explanation:`普通复数 visitors 配原形 enjoy。`,criteria:[`enjoy 原形`,`保留意义`]},{id:`gc4-p5`,prompt:`改正 She is carries a bag every day.。`,reference:`She carries a bag every day.`,explanation:`一般现在实义动词已承担陈述，不另加 is；carry 变 carries。`,criteria:[`删除 is`,`carries`,`日常意义保持`]},{id:`gc4-p6`,prompt:`I like quiet rooms 能否是一般现在时，虽然 like 不是明显动作？`,reference:`能，like 表达当前喜好状态。`,explanation:`一般现在可以表达状态，不只用于重复动作。`,criteria:[`状态义`,`不必改进行`]},{id:`gc4-p7`,prompt:`写“邻居有一张新地图”，词汇 a new map。`,reference:`My neighbour has a new map.`,explanation:`单数第三人称的 have 为 has，后接拥有的对象。`,criteria:[`has`,`完整主语`,`地图信息`]},{id:`gc4-p8`,prompt:`写自己与同伴各一条每周活动，标动词形式依据。`,reference:`I cycle on Mondays. Bo reads on Mondays. I 用原形，Bo 第三人称单数用 reads。`,explanation:`允许其他真实活动，所选主语和形式必须匹配。`,criteria:[`自己的原形`,`同伴第三人称形式`,`说明依据`]}],verification:[{id:`gc4-v1`,prompt:`The two artists ___ pictures every week. (draw)`,reference:`draw`,explanation:`普通复数主语配原形，明确常态。`,criteria:[`draw`,`说明复数`],skill:`agreement`,critical:!1},{id:`gc4-v2`,prompt:`把 We carry the equipment.改为 Ari 作主语。`,reference:`Ari carries the equipment.`,explanation:`carry 辅音＋y 结尾变 carries，其他信息保留。`,criteria:[`Ari`,`carries`,`信息不变`],skill:`transformation`,critical:!0},{id:`gc4-v3`,prompt:`修正 The neighbour have two keys.。`,reference:`The neighbour has two keys.`,explanation:`决定 have 形式的是 neighbour，不是后面的 two keys。`,criteria:[`has`,`主语依据`],skill:`agreement`,critical:!0},{id:`gc4-v4`,prompt:`Lin lives near the lake 是否意味着终生不搬家？解释时态所表达的事实。`,reference:`不；它说明当前成立的一般生活情况，不承诺永远不变。`,explanation:`这里的一般现在时把居住地点作为当前成立的生活情况来说明；它没有加入 always 或一生不变的承诺，将来搬家不会使这句在说话当时错误。`,criteria:[`当前一般事实`,`无终身推断`],skill:`meaning`,critical:!1},{id:`gc4-v5`,prompt:`新资料：Nora 每周日观看自然节目，写完整陈述；nature programmes 自然节目。`,reference:`Nora watches nature programmes on Sundays.`,explanation:`根据单数主语选 watches，习惯时间与动作对象齐全。`,criteria:[`watches 正确`,`时间保留`,`完整句`],skill:`expression`,critical:!0},{id:`gc4-v6`,prompt:`写两句“我们喜欢安静空间；一位向导每周研究地图”，自行选择已知词汇。`,reference:`We enjoy quiet places. A guide studies maps every week.`,explanation:`两句分别测试原形与第三人称变化；意义相同的自然表达可接受。`,criteria:[`we 配原形`,`单数 guide 配-s 形式`,`两项内容完整`],skill:`expression`,critical:!0}],review:[{id:`gc4-r1`,prompt:`填：My friend ___ puzzles on Fridays. (finish)`,reference:`finishes`,explanation:`第三人称单数 finish 加-es。`,criteria:[`finishes`,`对应 friend`]},{id:`gc4-r2`,prompt:`解释 The painters paint 中两个词的形式。`,reference:`painters 是名词复数，paint 是复数主语下的动词原形。`,explanation:`相同拼写词根不意味着相同句中作用。`,criteria:[`区分名词与动词`,`原形匹配`]},{id:`gc4-r3`,prompt:`写你与一位家人的真实习惯，分别标主语与谓语动词。`,reference:`I walk every evening. My sister reads every evening.`,explanation:`新内容检验人称与一致，而非模板记忆。`,criteria:[`两句内容合理`,`主语形式匹配`,`标记准确`]}],sources:[{title:`Cambridge：Present simple`,url:`https://dictionary.cambridge.org/grammar/british-grammar/present-simple`,supports:`普通第三人称拼写变化、不规则形式与当前一般事实`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录`},{title:`British Council：Present simple`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple`,supports:`习惯和一般事实，第三人称变化与do/does否定疑问`,accessed:`2026-10-03`,method:`官方页面正文`}],revision:`official-reference-2026-10-03`,title:`一般现在时肯定句与第三人称单数`,module:`形成完整表达`,moduleOrder:1,track:`basic`},{number:5,objectives:[`在一般现在实义动词句中选择 do/does 构成否定与一般疑问，保持主语和事实信息。`,`解释助动词承载一致后主动作动词回到原形的原因，区分 do 的两种句中作用。`,`依据说话者角色和真实事实作短答，并与 be 句式分开处理。`],summary:`在一般现在实义动词句中选择 do/does 构成否定与一般疑问，保持主语和事实信息。`,prerequisites:[2,3,4],body:`### 学习目标

1. 在一般现在实义动词句中选择 do/does 构成否定与一般疑问，保持主语和事实信息。
2. 解释助动词承载一致后主动作动词回到原形的原因，区分 do 的两种句中作用。
3. 依据说话者角色和真实事实作短答，并与 be 句式分开处理。

### 先检查前置知识

先学：第 02 课、第 03 课、第 04 课。先独立回答下面两题，再阅读本节的核对提示。

1. She studies maps 与 They study maps 为何词形不同？

核对：主语人称数不同，she 需第三人称单数形式。若做错，回到第 04 课一致与拼写。

2. The hall is quiet 怎样疑问？

核对：Is the hall quiet?，已有 be 直接前置。若做错，回到第 03 课 be 疑问。

词汇支持：borrow 借；return 归还；sell 卖；use 使用；need 需要；stamp 邮票；dictionary 词典；puzzle 谜题；do homework 做作业。

### do/does 是构造问题与否定的帮助词

The guide uses maps→Does the guide use maps?；We use maps→Do we use maps?。这里 do/does 帮助把实义动词陈述变为一般现在疑问，use 仍说明实际行为。Does 不是中文“做”的一个多余动作，而是句中助动词。

I/you/we/they 和普通复数主语配 do；he/she/it 和普通单数第三人称主语配 does。助动词置于整体主语前，后面的实义动词用原形。The new member borrows books 应问 Does the new member borrow books?；主语 new member 是一个整体，不能拆开词序。

does 已承担一般现在第三人称单数信息，主动作动词不重复加-s。用“身份信息只标在相应有限动词上”理解比记“does 吃掉 s”更稳妥。does 后包括不规则词也回到原形：Does she have a map?，不是 Does she has a map?。

### 否定用 do not/does not，保留原来的信息

The guide uses maps 否定为 The guide does not use maps；We use maps 否定为 We do not use maps。not 位于 do/does 后，实义动词为原形。不能写 The guide not uses maps，也不能只删-s 却不补助动词。

日常表达常用 don’t/doesn’t，正式完整形式 do not/does not 也正确。She doesn’t need a new dictionary 是否定“需要新词典”，不是禁止买词典。否定规则说明形式，实际意思还取决于主动作动词。题目若本意是没有某物，就不能随意把 have 换成 need 以为都是否定。

加入否定时只改必要结构：人物、行为对象、时间不应无故替换。She borrows books on Fridays→She doesn’t borrow books on Fridays 仍讨论她周五借书的习惯。是否在别的日期借，原句没有交代，不能在解释里推出她从不借书。

### 短答用助动词，按回答者角度与事实核对

问 Do you borrow maps?，你借，回答 Yes, I do；你不借，No, I don’t。问 Does Ari use this room?，Ari 使用，Yes, they do 若 Ari 已指定 they；若明确 he 指代，则 Yes, he does。短答的主语与助动词必须匹配，不能只复制问句开头的 does。

为避免初学指代歧义，本课大多给明确 he/she/they 对象。问 Do you and Bo collect stamps?代表双方回答时用 Yes, we do 或 No, we don’t。一般 yes/no 短答并不重复实际行为词，但用对应助动词承接原句的信息，不改成 be。

Are you ready?用 Yes, I am；Do you need a map?用 Yes, I do。两个问题都谈“你”，但句式由动词结构决定。把两个问题一起练，先指出 be 或实义动词，再写短答，有助于避免用一套回答通吃所有问句。

### do 可作实义动词，边界由句中结构判断

She does homework 肯定句里的 does 是“做”的实义动词。问 Does she do homework?时，第一个 does 是助动词，第二个 do 说实际活动；否定 She doesn’t do homework 也保留这个区别。两个 do 并不互相抵消，作用不同。

同样，have 作普通拥有义实义动词时，本课程使用 Do you have…?和 don’t have…，不因此提前展开英式 have got 系统。be 句已有 am/is/are，疑问否定不用额外 do：Is the guide available?不是 Does the guide be available?。情态 can 等也有自己的结构，第 26 课再讲，不套普通实义动词 do 规则。

如果询问“谁借书”且 who 本身作主语，常用 Who borrows books?，一般不再使用 do；这属于第 11 课的主语提问。本课核心只针对一般疑问和普通否定，不能把“任何疑问都必须 do”当完整规则。真实语法需要按结构角色决定。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| She borrows books. / Does she borrow books? | 她借书。／她借书吗？ | does 承载第三人称信息，borrow 回到原形。 |
| They use maps. / They don’t use maps. | 他们用地图。／他们不用地图。 | 普通复数主语选择 do not。 |
| He has a dictionary. / He doesn’t have a dictionary. | 他有词典。／他没有词典。 | has 在助动词后还原 have。 |
| Does the shop sell stamps? | 商店卖邮票吗？ | 单数 shop 选 does，sell 为原形。 |
| Do you and Bo return books here? — Yes, we do. | 你和 Bo 在这还书吗？—是的。 | 答者代表两人，用 we do。 |
| Does she do homework here? | 她在这做作业吗？ | 第一 does 助动词，第二 do 实义动词。 |
| Are they ready? / Do they need maps? | 他们准备好了吗？／他们需要地图吗？ | 主语相同也不能混用 be 和 do 句式。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| Does she borrows books? | Does she borrow books? | 实义动词不可重复第三人称形式。 |
| He doesn’t has a key. | He doesn’t have a key. | 不规则 has 也在助动词后回原形。 |
| They not use this room. | They do not use this room. | 普通实义动词否定需助动词和 not。 |
| Do you need help? — Yes, I am. | Yes, I do. | 短答承接 do 句式，不由“你”决定用 am。 |

### 边界与使用选择

do/does 规则不是所有动词、所有问句的统一模板。be、情态动词、有其他助动词的时态和主语提问需要各自处理；这些在后续课展开。否定的信息范围由本意决定，She doesn’t borrow books on Fridays 不等于她其他时候也不借。自评时接受合法完整和缩写形式，但不能用形式正确掩盖原信息被改换。

### 学完后怎样检查自己

用同学的真实习惯写一句陈述，再对同一信息写否定、疑问和按事实的短答。圈出 does/don’t 等帮助词，在实义动词下写原形。与一条 be 状态句并排检查，说明为何一个加 do，另一个移动 be。隔天换为商店服务或家庭活动，不看旧答案重做。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [Cambridge：Do](https://dictionary.cambridge.org/us/grammar/british-grammar/do)：do实义与助动作用，疑问否定中的原形和be/情态边界。
- [British Council：Present simple](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple)：习惯和一般事实，第三人称变化与do/does否定疑问。`,practice:[{id:`gc5-p1`,prompt:`将 Mina borrows maps.改成一般疑问。`,reference:`Does Mina borrow maps?`,explanation:`第三人称单数用 does，borrow 用原形。`,criteria:[`Does`,`borrow`,`信息不变`]},{id:`gc5-p2`,prompt:`否定 They use this entrance.，用缩写。`,reference:`They don’t use this entrance.`,explanation:`普通复数 they 用 don’t，use 原形。`,criteria:[`don’t`,`use`,`同一入口`]},{id:`gc5-p3`,prompt:`修复 Does the guide needs a new map?。`,reference:`Does the guide need a new map?`,explanation:`does 已承担一致，need 不能重复-s。`,criteria:[`need 原形`,`其他信息保留`]},{id:`gc5-p4`,prompt:`否定 He has a dictionary.。`,reference:`He doesn’t have a dictionary.`,explanation:`has 还原 have，不能写 doesn’t has。`,criteria:[`doesn’t`,`have`]},{id:`gc5-p5`,prompt:`Do you and Mina collect stamps?你代表两人，两人都收集，写短答。`,reference:`Yes, we do.`,explanation:`回答角色回到包含自己的 we，助动词 do 匹配。`,criteria:[`Yes 事实`,`we do`]},{id:`gc5-p6`,prompt:`Does she do homework?两个 do 类词分别干什么？`,reference:`Does 构成疑问，do 是“做作业”的实义动词。`,explanation:`形式看似重复但作用不同，不互相抵消。`,criteria:[`区分两种作用`]},{id:`gc5-p7`,prompt:`将 She is ready 和 She uses maps 分别改成疑问。`,reference:`Is she ready? Does she use maps?`,explanation:`be 直接前置，普通实义动词使用 does＋原形。`,criteria:[`Is 结构`,`Does use 结构`]},{id:`gc5-p8`,prompt:`写一问一答：商店是否卖邮票，已知不卖。`,reference:`Does the shop sell stamps? No, it doesn’t.`,explanation:`单数 shop 选 does；it 明确回指，否定符合资料。`,criteria:[`sell 原形`,`it doesn’t`,`事实一致`]}],verification:[{id:`gc5-v1`,prompt:`否定 The artist enjoys puzzles.。`,reference:`The artist doesn’t enjoy puzzles.`,explanation:`普通单数主语用 doesn’t，enjoy 回原形。`,criteria:[`doesn’t`,`enjoy`,`原信息保持`],skill:`transformation`,critical:!1},{id:`gc5-v2`,prompt:`提问 The two hosts need chairs.。`,reference:`Do the two hosts need chairs?`,explanation:`主语为两位 host，选 do 而非 does。`,criteria:[`Do`,`need 原形`,`主语整体`],skill:`agreement`,critical:!0},{id:`gc5-v3`,prompt:`修正 Mina don’t returns books here.。`,reference:`Mina doesn’t return books here.`,explanation:`主语要求 doesn’t，return 还原，两处都需核对。`,criteria:[`doesn’t`,`return`],skill:`transformation`,critical:!0},{id:`gc5-v4`,prompt:`He doesn’t use the hall on Tuesdays 能否证明他从不使用大厅？`,reference:`不能，只否定周二使用，其他时间未说明。`,explanation:`结构否定与信息范围须分开判断。`,criteria:[`指出周二范围`,`不作过度推断`],skill:`meaning`,critical:!1},{id:`gc5-v5`,prompt:`新资料：一位技师每周检查机器；询问这一习惯并按确实检查作短答。technician 技师，check 检查，machines 机器。`,reference:`Does the technician check machines every week? Yes, he does.（若技师用 she，也可 she does）`,explanation:`提供合适明确代词即可，常态句式需 does＋原形。`,criteria:[`does check`,`时间信息`,`肯定短答匹配`],skill:`expression`,critical:!0},{id:`gc5-v6`,prompt:`写两句不同否定：一间工作间不安静；志愿者们不需要新地图。`,reference:`The workshop is not quiet. The volunteers don’t need new maps.`,explanation:`新情境检验 be 与 do 分开使用，非模板同句替词。`,criteria:[`be 否定正确`,`don’t need 正确`,`两项信息完整`],skill:`expression`,critical:!0}],review:[{id:`gc5-r1`,prompt:`修复 Does Bo has this key?。`,reference:`Does Bo have this key?`,explanation:`has 在 does 后还原 have。`,criteria:[`have`,`问句完整`]},{id:`gc5-r2`,prompt:`They do homework here.改疑问，并标两个 do。`,reference:`Do they do homework here? 第一个助动词，第二个实义动词。`,explanation:`普通复数主语疑问用 Do，实际活动仍要 do。`,criteria:[`两个作用正确`,`词序正确`]},{id:`gc5-r3`,prompt:`根据新事实写问答：你的朋友不喜欢噪声 noise。`,reference:`Does your friend like noise? No, he/she doesn’t.`,explanation:`给予明确代词或名字，否定与资料一致。`,criteria:[`does like`,`否定短答`,`所指清楚`]}],sources:[{title:`Cambridge：Do`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/do`,supports:`do实义与助动作用，疑问否定中的原形和be/情态边界`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录`},{title:`British Council：Present simple`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple`,supports:`习惯和一般事实，第三人称变化与do/does否定疑问`,accessed:`2026-10-03`,method:`官方页面正文`}],revision:`official-reference-2026-10-03`,title:`do/does 否定与提问`,module:`形成完整表达`,moduleOrder:1,track:`basic`},{number:6,objectives:[`根据词在当前句中的作用选择 be 或一般现在实义动词结构，不依赖中文“是”或“动作词”口诀。`,`在身份、状态、位置与习惯情境中完成肯定、否定、一般疑问和短答，保持角色及事实。`,`读取一个新人物资料并组织问答与介绍，说明至少两处结构选择的依据。`],summary:`根据词在当前句中的作用选择 be 或一般现在实义动词结构，不依赖中文“是”或“动作词”口诀。`,prerequisites:[1,2,3,4,5],body:`### 学习目标

1. 根据词在当前句中的作用选择 be 或一般现在实义动词结构，不依赖中文“是”或“动作词”口诀。
2. 在身份、状态、位置与习惯情境中完成肯定、否定、一般疑问和短答，保持角色及事实。
3. 读取一个新人物资料并组织问答与介绍，说明至少两处结构选择的依据。

### 先检查前置知识

先学：第 01 课、第 02 课、第 03 课、第 04 课、第 05 课。先独立回答下面两题，再阅读本节的核对提示。

1. The club is open 和 The club opens at nine 各自哪部分承担陈述？

核对：前句 is 连接状态 open；后句 opens 说营业开始的规律。若做错，回到第 01、04 课当前词的作用。

2. 否定 She has a bicycle 与 She is available。

核对：She doesn’t have a bicycle；She isn’t available。若做错，回到第 03、05 课两类否定。

词汇支持：club 俱乐部；open 开着的、营业；opens 开门营业；available 有空；repair 修理；workshop 工作间；volunteer 志愿者；borrow 借；usually 通常；every Friday 每周五。

### 先确定本意，再识别句中动词

成员介绍里“I am a volunteer”说明身份，“I am available”说明状态，“I am in the workshop”说明位置。这三句的补足信息都不能独立承担陈述，需要 be。另一类“I repair bicycles”说明常规行为，“I like maps”说明喜好，实义动词已承担一般现在陈述，不另加 am。

“状态用 be、动作用 do”不是完整规则。like 和 need 也可表达状态意义，但它们作为实义动词构成普通一般现在句，需要 do/does 构成疑问否定。问 Do you need a key?不是 Are you need a key?。关键是选定词在这一用法中的结构角色，而非把意思粗分为动作或非动作。

读句时先划出主语，再定位动词和它所需的信息。若你准备使用形容词 helpful，需要 She is helpful；若使用动词 help，需要 She helps visitors。近似中文意义可用不同英语结构表达，只要保持准确自然，不要求每个想法都只有一种英文措辞。

### 同一个词形可能担任不同作用

The club is open 说俱乐部开着，open 在这里为状态说明；The club opens at nine 说俱乐部通常九点开门，opens 为实义动词一般现在形式。疑问分别是 Is the club open?和 Does the club open at nine?；否定分别是 The club isn’t open 和 The club doesn’t open at nine。

The volunteers work here 里的 work 为动词，“工作”这项行为；They are at work 里的 at work 是位置或活动状态表达，陈述动词为 are。不能因为看见 work 这个词就固定选 do，也不能看见 open 就固定选 be。词形知识必须与当前句意相连。

这也说明机械逐词翻译不可靠。“她很忙”写 She is busy，“她需要帮忙”写 She needs help，“她乐于助人”可以 She is helpful。中文都像在说明人物，英语却有不同谓语构成。学习时记录完整用法和例句关系，避免把单词名册当成句型表。

### 用同一资料制作变化矩阵

给定 Kai：是志愿者、现在有空、每周五修自行车。肯定句分别为 Kai is a volunteer、Kai is available、Kai repairs bicycles every Friday。否定和疑问不能交叉混用：Kai isn’t available；Is Kai available?；Kai doesn’t repair bicycles every Friday；Does Kai repair bicycles every Friday?。

实义动词句使用 does 后 repairs 还原 repair；be 句已经有 is，直接加入 not 或把 is 前置。每次改变结构时，检查原来要确认哪项资料，不能问是否有空却回答是否修车。两句都语法正确仍可能不构成一次有效问答。

人物资料里的代词需要一致。Kai 使用 he 指代时，Is Kai available?可答 Yes, he is；Does Kai repair bicycles?可答 Yes, he does。若本人答 Are you available?则 Yes, I am；Do you repair bicycles?则 Yes, I do。肯定短答末尾 be 不缩写，帮助词对应原句结构。

### 把结构选择应用到真实介绍和核对

一段清楚的介绍可以先建立人物身份，再说明常态活动与当前状态：Nora is a new member. She collects old maps. She is available on Fridays.句子无需都用同一个动词，代词回指需要可恢复，时间信息与事实要对应。

综合练习不是把前五课的答案按顺序连起来。先读新资料，决定哪些信息需要身份、状态、位置表达，哪些需要实义动词，再组织句子和问题。核对时解释两处选择，例如“用 is 因为后面是形容词 available”“用 does collect 因为 collect 是实义动词，Nora 是普通单数主语”。

当表达出现问题，按原因回学：漏动词回第 01 课，人称与 be 匹配回第 02 课，be 疑问否定回第 03 课，第三人称肯定回第 04 课，do/does 变式回第 05 课。不要只说“语法不好”或把整段重背；定位原因并换情境重写，更能形成可迁移能力。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| The workshop is quiet. / The volunteers work quietly. | 工作间安静。／志愿者们安静地工作。 | 状态形容词与行为动词采用不同结构；quietly 供词汇支持。 |
| The club is open. / The club opens at nine. | 俱乐部开着。／俱乐部九点开门营业。 | 当前状态与常规开门行为不同。 |
| Is she helpful? / Does she help visitors? | 她乐于助人吗？／她帮助游客吗？ | be 补足语与实义动词疑问分别组织。 |
| She is not available. / She does not need a key. | 她没有空。／她不需要钥匙。 | need 表达状态意义也使用 do 否定。 |
| He repairs bicycles. / Does he repair bicycles? | 他修自行车。／他修自行车吗？ | does 承担一致后实义动词为原形。 |
| Are you a member? — Yes, I am. / Do you collect maps? — Yes, I do. | 你是成员吗？—是的。／你收集地图吗？—是的。 | 按回答者角色和句式选短答。 |
| They are at work. / They work here. | 他们在工作。／他们在这工作。 | work 在不同组合里作用不同，不能单看词形。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| Does the workshop quiet? | Is the workshop quiet? | quiet 是状态说明，此处需 be。 |
| Are you need a key? | Do you need a key? | need 是实义动词，即使表示状态也用 do 疑问。 |
| Does she repairs bicycles? | Does she repair bicycles? | does 后 repair 原形。 |
| Is Nora available? — Yes, she does. | Yes, she is. | 短答需承接原来的 be 句式。 |

### 边界与使用选择

本课只综合现在 be 和一般现在实义动词。She is repairing 等进行结构将在第 16 课学习，不能据此声称 be 与任何实义动词永远不能同句出现。主语提问、情态及 have got 有后续规则。本课不要求根据一个孤立 open 或 work 判断句型，任务必须给出完整结构或明确意图；参考答案是可行表达，而不是唯一翻译。

### 学完后怎样检查自己

使用一份未练过的同学或活动资料，写身份、状态、位置和两项习惯，至少生成两条不同类型的一般疑问并作事实相符的短答。再给一条 be 句和一条实义动词句写否定。保留初稿，圈两处修订说明依据。隔天改人物、地点和行为，独立重做；能保留事实并选择正确结构，才说明基础综合已可使用。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [Cambridge：Do](https://dictionary.cambridge.org/us/grammar/british-grammar/do)：do实义与助动作用，疑问否定中的原形和be/情态边界。
- [British Council：Present simple — to be](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be)：现在be陈述、缩写、否定、疑问与短答的形式和位置。
- [British Council：Present simple](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple)：习惯和一般事实，第三人称变化与do/does否定疑问。`,practice:[{id:`gc6-p1`,prompt:`表达“工作间可用”，选 Is/Does the workshop available?并完成问句。`,reference:`Is the workshop available?`,explanation:`available 是形容词补足信息，当前句需要 be。`,criteria:[`选 Is`,`解释形容词作用`]},{id:`gc6-p2`,prompt:`表达“向导需要地图”，写肯定句。`,reference:`The guide needs a map.`,explanation:`need 是实义动词，单数 guide 用 needs，不写 is need。`,criteria:[`needs`,`完整信息`]},{id:`gc6-p3`,prompt:`将 The club opens at ten.改疑问。`,reference:`Does the club open at ten?`,explanation:`本句 open 为常规营业动作，使用 does＋原形。`,criteria:[`Does open`,`时间保持`]},{id:`gc6-p4`,prompt:`将 The club is open.否定；再说明与 doesn’t open at ten 的差别。`,reference:`The club isn’t open. 前句否定开着的状态，后句否定十点开门的规律。`,explanation:`is open 中的 open 说明目前开着，be 后加 not；doesn’t open at ten 中的 open 是动词，否定十点开门这一规律，不等于任何时间都不开门。`,criteria:[`be 否定`,`区分状态与规律`]},{id:`gc6-p5`,prompt:`两句短答：Are you available? Do you repair bicycles?资料：有空但不修车。`,reference:`Yes, I am. No, I don’t.`,explanation:`回答者使用 I，两个事实分别对应 be 与 do。`,criteria:[`Yes I am`,`No I don’t`,`事实对应`]},{id:`gc6-p6`,prompt:`修复 She is helps visitors 并另用 helpful 表达近似意思。`,reference:`She helps visitors. She is helpful.`,explanation:`行为动词与性质形容词各有完整结构。`,criteria:[`helps 正确`,`is helpful 完整`]},{id:`gc6-p7`,prompt:`用资料写三句：Bo 是成员、在大厅、收集邮票。`,reference:`Bo is a member. He is in the hall. He collects stamps.`,explanation:`明确 Bo 使用 he；身份位置用 be，活动用 collects。`,criteria:[`身份位置完整`,`collects`,`回指明确`]},{id:`gc6-p8`,prompt:`写两条询问 Nora 的问句：是否有空、是否借地图；再各给一条否定短答。`,reference:`Is Nora available? No, she isn’t. Does Nora borrow maps? No, she doesn’t.`,explanation:`明确 Nora 使用 she，两问句式不同，否定分别承接。`,criteria:[`be 问答`,`do 问答`,`人物事实不混`]}],verification:[{id:`gc6-v1`,prompt:`The museum is open 与 The museum opens at nine 里 open 作用相同吗？`,reference:`不同：前句状态补足信息，后句实义动词说明常规开门时间。`,explanation:`is open 用 be 连接馆与开着的状态，opens at nine 用实义动词报告常规开门时间；两句词根相同，承担谓语的结构与时间焦点却不同。`,criteria:[`说明两种作用`,`区分时间视角`],skill:`meaning`,critical:!1},{id:`gc6-v2`,prompt:`将 The volunteer needs a badge.改否定。`,reference:`The volunteer doesn’t need a badge.`,explanation:`need 虽是需求状态意义，仍作为实义动词用 doesn’t。`,criteria:[`doesn’t need`,`无多余 be`],skill:`transformation`,critical:!0},{id:`gc6-v3`,prompt:`询问两位志愿者是否在门边 near the gate，并按不在作短答。`,reference:`Are the volunteers near the gate? No, they aren’t.`,explanation:`位置表达用 be；复数对象回指 they。`,criteria:[`are 词序`,`they aren’t`,`事实一致`],skill:`transformation`,critical:!0},{id:`gc6-v4`,prompt:`Are you collect maps?错在哪？“问的是状态所以 are”能解释它吗？`,reference:`collect 在此是实义动词，应 Do you collect maps?，不能只靠动作/状态粗分。`,explanation:`识别句中词的作用，而非中文大类。`,criteria:[`指出 collect 作用`,`修复 Do 问句`],skill:`meaning`,critical:!1},{id:`gc6-v5`,prompt:`新资料：Eli 是司机，周二工作，今天有空；Eli 使用 he。写三句并询问周二是否工作，按资料短答。`,reference:`Eli is a driver. He works on Tuesdays. He is available today. Does he work on Tuesdays? Yes, he does.`,explanation:`身份和当前状态用 be，常态活动用实义动词及 does 问答。`,criteria:[`身份状态 be 正确`,`works 与 does work`,`短答与资料一致`],skill:`expression`,critical:!0},{id:`gc6-v6`,prompt:`为新活动伙伴写 4 句：身份、位置、习惯及一条非该习惯的否定。再说明一处 be 与一处 do 选择。`,reference:`Mina is a volunteer. She is in the library. She reads maps every week. She doesn’t borrow them. is 连接身份或位置；doesn’t 构成 borrow 的否定。`,explanation:`允许真实新内容，检查结构理由而不按参考措辞一致评分。`,criteria:[`四项陈述完整`,`第三人称肯否正确`,`两类理由具体`],skill:`expression`,critical:!0}],review:[{id:`gc6-r1`,prompt:`新词 useful 形容词“有用”，询问图册是否有用。`,reference:`Is the atlas useful?`,explanation:`形容词补足信息需要 be，不按中文“用”联想到动词 use。`,criteria:[`Is 结构`,`完整补足`]},{id:`gc6-r2`,prompt:`The club is open on Saturdays.改否定，并解释为何不用 does。`,reference:`The club isn’t open on Saturdays. open 作状态说明，动词为 is。`,explanation:`句中作用决定否定结构，不按单独词形。`,criteria:[`isn’t`,`作用解释`]},{id:`gc6-r3`,prompt:`写一条身份问答和一条习惯问答，使用没练过的人物与行为。`,reference:`Is Tao a painter? Yes, he is. Does he draw every day? Yes, he does.`,explanation:`新内容检验两类结构与信息承接。`,criteria:[`be 问答完整`,`do 问答完整`,`所指明确`]}],task:[{id:`gc6-task1`,prompt:`活动登记：Sana 使用 she，是新成员，在图书室，每周五整理地图，有空，不骑车上班。用 5—6 句介绍她，再写一条身份问答、一条习惯问答；最后说明两处 be/do 选择。词汇 sort maps 整理地图，cycle to work 骑车上班。`,reference:`Sana is a new member. She is in the library. She sorts maps on Fridays. She is available. She doesn’t cycle to work. Is Sana a member? Yes, she is. Does she sort maps on Fridays? Yes, she does. be 用于身份、位置和 available 状态；sort/cycle 为实义动词，does 后用原形。`,explanation:`先建立人物再回指，否定与问答保留登记事实。不同自然地点表达可接受，不能靠改写资料绕过目标。`,criteria:[`人物身份位置清楚`,`sorts 与 does sort 匹配`,`doesn’t cycle 正确`,`两类问答对应事实`,`指代一致`,`给出具体结构理由`]}],sources:[{title:`Cambridge：Do`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/do`,supports:`do实义与助动作用，疑问否定中的原形和be/情态边界`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录`},{title:`British Council：Present simple — to be`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple-be`,supports:`现在be陈述、缩写、否定、疑问与短答的形式和位置`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council：Present simple`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/present-simple`,supports:`习惯和一般事实，第三人称变化与do/does否定疑问`,accessed:`2026-10-03`,method:`官方页面正文`}],revision:`official-reference-2026-10-03`,title:`be 与 do/does 综合辨析`,module:`形成完整表达`,moduleOrder:1,track:`basic`},{number:7,objectives:[`根据名词在当前意义下的可数性，正确表达物品和数量。`,`使用单位词描述水、信息等不可数内容，解释单位和内容各自的形式。`,`区分 few/a few、little/a little 的肯定或不足含义，并根据语境选数量词。`],summary:`根据名词在当前意义下的可数性，正确表达物品和数量。`,prerequisites:[2,4,6],body:`### 学习目标

1. 根据名词在当前意义下的可数性，正确表达物品和数量。
2. 使用单位词描述水、信息等不可数内容，解释单位和内容各自的形式。
3. 区分 few/a few、little/a little 的肯定或不足含义，并根据语境选数量词。

### 先检查前置知识

先学：第 02 课、第 04 课、第 06 课。先独立回答下面两题，再阅读本节的核对提示。

1. 本课起点诊断：写出“有两本书”：I have two ___。

核对：books；这里用复数。这是本课要建立的名词数量知识，不要求前课已讲完名词复数。若做错，回到本课 A、B 节；be 与主语匹配可复习第 02 课。

2. 改正 The water are cold.

核对：The water is cold；这里 water 是不可数内容，动词用单数。若做错，回到第 02 课 be 匹配。

词汇支持：water 水；bottle 瓶；advice 建议；information 信息；rice 米饭；equipment 设备；space 空间；chicken 鸡或鸡肉。

### A · 可数性是当前义项的用法

整理读书角时，英语可以把每本书当作独立对象：one book、two books。准备饮用水时，water 通常作为物质内容来谈，不直接跟数词。这里的“可数”是英语如何组织名词短语，不是能否在现实中称量。米粒可以数，rice 作为食物内容仍通常不可数；家具件件可辨，furniture 作为集合内容仍通常不可数。遇到新词先查学习词典当前义项的[C]或[U]，再看例句中的限定词和动词，不用中文是否有量词来猜。

普通单数可数名词通常需要限定词：a shelf、my shelf、this shelf；复数可以与数词连用：three shelves。不可数内容可写 some paper、the paper，但普通材料义不写 a paper。可数性会随意义变化：paper 是纸材料，a paper 可以是论文或报纸；room 是空间，a room 是一间房。先用中文说清你在谈材料、整体还是单个对象，再选择英语形式。

读句子时也要反过来判断。看到 a chicken，先考虑一只鸡；看到 some chicken，结合餐盘情境理解鸡肉。不能把一个词在某题中的答案当成它所有义项的永久属性。对陌生义项，本课要求学生指出需要查询什么，不要求凭猜测写唯一答案。

### B · 数量落在名词或单位上

可数名词有单复数区别。多数加-s，辅音加 y 的常见词改为-ies，如 story→stories；box→boxes；child→children 需要另外记。英语复数有词汇例外，所以不能把“所有以 y 结尾都改 ies”当规则：day→days。读数词后先检查名词形式，再检查整个短语的核心，不让后面的 of 短语抢走判断位置。

不可数内容需要精确数量时，选择符合实际对象的单位：two sheets of paper、three bottles of juice、a piece of advice。复数加在可数单位上，内容词保留当前不可数用法。Two bottles of juice are ready 的核心是 bottles，因此用 are；The juice is ready 的核心是 juice，因此用 is。这同时连接了第 02 课的 be 匹配和第 04 课的主谓一致，而不是一条孤立的新公式。

单位会增加信息。a cup of tea 说明一杯，a packet of tea 说明一包，a kilo of tea 说明重量；不能把 piece 当作所有内容的通用容器。information、advice、equipment、homework 在常见学习语境中不可数，可用 pieces/items 等合适表达计数。本课先练明确的单位，不把点单中的 two teas 判为任何语境都错误：在那里 tea 被理解为两份饮品。

### C · 数量词既限制类型，也表达判断

many 接可数复数，much 接不可数；a lot of 两类都可接。普通肯定陈述中，a lot of 常比单独的 much 自然，但 many 并不是肯定句中的语法禁词，正式说明可用 many students。先判断类型，再判断表达是否适合当前交流，不能把“常用”改成“只能”。

some 常用于肯定，any 常用于普通否定或询问未知数量。询问时如果在提供食物、提出请求或预期对方肯定回答，some 也自然。本课把 Can I have some water?作为给定礼貌词块理解，情态问句的构造在第 26 课学习，不将它列为必须独立造出的验收形式。any 还可以表示“任何一个”，属于以后结合语境继续学的意义。

a few seats 表示有几个，通常肯定少量可用；few seats 突出很少或不足。a little space 肯定有一点空间；little space 突出空间很少。两种表达都可能符合现实上的同一数量，区别在说话人的判断。安排活动时，“还有几个位置可以加入”更适合 a few；“几乎没人可以加入”更适合 few。不能只依据中文出现“少”便删掉 a。

### D · 从清单到可执行的信息

写采购清单可以先列“对象—计数方式—用途”：notebooks 按本计数，water 按瓶计数，advice 按条计数。随后把短语放入完整句子，核对限定、复数和谓语。例如准备两个文件夹和一点打印纸，可写 We need two folders and a little paper。这里 need 是第 04 课已学的一般现在形式；它不要求把所有名词都改成复数。

向同伴说明资源是否够用时，再增加态度证据。We have a few markers.表达有几支可用；We have few markers.强调数量偏少。若要说明“够不够”，还应给出人数或任务范围，单凭 few 无法精确推出能否完成五人任务。真实沟通应把数量与用途连接，而不是把数量词当数学符号。

练习时按四步核对：先指出当前义项；再决定个体或单位；然后检查数量词和名词是否匹配；最后读给同伴听，看他是否得到同样的数量判断。能写 three pieces of information 却解释不了为什么 information 不加-s，说明形式记住了，意义还要回到第一节。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| a glass / some glass | 一个玻璃杯／一些玻璃材料。 | 同一词的容器义可数，材料义不可数；不是按中文能否数决定。 |
| two sheets of paper / some paper | 两张纸／一些纸。 | 前者计数单位 sheet，后者谈材料。 |
| The milk is cold. / Two cartons of milk are cold. | 牛奶是凉的。／两盒牛奶是凉的。 | is 与 milk 匹配，are 与 cartons 匹配。 |
| a room / some room | 一间房／一些空间。 | 建筑个体与可用空间是不同义项。 |
| We have a few volunteers. / We have few volunteers. | 有几位志愿者。／志愿者很少。 | 同为可数复数，语气分别肯定少量与强调不足。 |
| We have a little bread. / We have little bread. | 还有一点面包。／面包几乎没有了。 | bread 在食物义不可数；a 改变数量判断。 |
| We have some juice. / We don't have any juice. | 有一些果汁。／没有果汁。 | 普通肯定与否定语境；不是说疑问句永远不能用 some。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| three furniture | three pieces of furniture | furniture 在这里是不可数内容，pieces 承担数量。 |
| two childs | two children | child 的不规则复数不能套-s。 |
| The two bottles of milk is empty. | The two bottles of milk are empty. | 主语核心是复数单位 bottles。 |
| We have little water.（本意：还有少量可用水） | We have a little water. | 原句强调水很少；目标要肯定仍有一些。 |

### 边界与使用选择

可数性按当前义项判断；news 虽以-s 结尾，常作为不可数内容配单数谓语。two coffees 在餐饮点单中可以表示两份，不等于普通内容义也能随意加数词。数量词传达的是语境中的评价，few 不能换算为固定人数。核心题提供义项和场景，词义不明时先查询再判断。

### 学完后怎样检查自己

离开例句，为一次三人小组活动写一份四项资源清单，至少含一个不可数内容和一个计数单位；再写一句肯定有少量资源、一句强调不足。请同伴按清单实际分配，检查信息是否可执行。复习时换成行李整理情境，解释哪一个词决定动词单复数。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Nouns, countable and uncountable](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/nouns-countable-uncountable)：核验常见不可数内容advice/information/furniture，单位表达、many/much/a lot of及some/any在普通否定、疑问、提供与请求中的区别。
- [Cambridge English Grammar Today：Nouns, countable and uncountable](https://dictionary.cambridge.org/grammar/british-grammar/nouns-uncountable-and-countable)：核验可数单复数与限定词，明确应按词典当前义项及实际句子学习，而非现实可测量性直接判断。
- [Cambridge English Grammar Today：Little, a little, few, a few](https://dictionary.cambridge.org/uk/grammar/british-grammar/little-a-little-few-a-f)：核验(a)few配可数复数、(a)little配不可数；带a肯定少量，无a强调不足，并非固定数值阈限。`,practice:[{id:`gc7-p1`,prompt:`在打印材料语境中，paper 与 folder 哪个可直接接 three？解释。`,reference:`three folders；paper 需单位`,explanation:`folder 是独立容器；paper 是材料内容。`,criteria:[`识别 folder 可数`,`说明 paper 的材料义`]},{id:`gc7-p2`,prompt:`写“五个孩子和两张纸”。`,reference:`five children and two sheets of paper`,explanation:`children 是不规则复数；数的是纸张单位。`,criteria:[`children 正确`,`sheets 复数`,`paper 无-s`]},{id:`gc7-p3`,prompt:`说明 two bottles of water 中哪个词决定 are。`,reference:`bottles`,explanation:`of water 说明内容，数量核心是 bottles。`,criteria:[`指出核心 bottles`,`解释单位复数`]},{id:`gc7-p4`,prompt:`改正：We need many advice and two box.`,reference:`We need a lot of advice and two boxes.`,explanation:`advice 不可数；two 要求 box 复数。`,criteria:[`数量词适配 advice`,`boxes 正确`]},{id:`gc7-p5`,prompt:`尚有一点空间可用，选 little 或 a little：We have ___ room.`,reference:`a little`,explanation:`room 在这里是空间；目标肯定少量存在。`,criteria:[`a little`,`解释 room 不可数`]},{id:`gc7-p6`,prompt:`把 some juice 改写为精确数量“两盒果汁”，写完整句。`,reference:`We have two cartons of juice.`,explanation:`cartons 承担数量，juice 仍是内容。`,criteria:[`two cartons`,`juice 无-s`,`完整句`]},{id:`gc7-p7`,prompt:`五人活动只有一名帮手，说话人强调人手不足。用 few 写一句。`,reference:`We have few helpers.`,explanation:`情境要求不足评价；a few 会偏向肯定少量。`,criteria:[`few helpers`,`不加 a`]},{id:`gc7-p8`,prompt:`写两句准备情况：有几个文件夹；几乎没有纸。`,reference:`We have a few folders. We have little paper.`,explanation:`不同名词类型决定 few/little，情境决定 a。`,criteria:[`a few folders`,`little paper`,`两句完整`]}],verification:[{id:`gc7-v1`,prompt:`阅读：Two pieces of equipment are missing.计数核心是什么？`,reference:`pieces`,explanation:`equipment 在设备集合义不可数，units/pieces 计数。`,criteria:[`指出 pieces`,`说明设备内容不复数`],skill:`structure`,critical:!1},{id:`gc7-v2`,prompt:`改正采购记录：three breads（本意三片面包）。`,reference:`three slices of bread`,explanation:`需要片数单位，不是三种或三份面包的特殊义。`,criteria:[`slices 复数`,`bread 无-s`],skill:`transformation`,critical:!0},{id:`gc7-v3`,prompt:`改正：These information are important.`,reference:`This information is important.`,explanation:`information 不可数，限定与 be 都要匹配。`,criteria:[`This 正确`,`is 正确`,`information 无-s`],skill:`transformation`,critical:!0},{id:`gc7-v4`,prompt:`接待处还有几位可帮忙的朋友，让你放心；few 还是 a few？为什么？`,reference:`a few friends`,explanation:`肯定有少量可用人手，非强调几乎没有。`,criteria:[`a few`,`说明肯定少量`],skill:`meaning`,critical:!1},{id:`gc7-v5`,prompt:`为一次野餐写两句：三瓶果汁在包里；还有一点奶酪。词块：in the bag；cheese。`,reference:`Three bottles of juice are in the bag. We have a little cheese.`,explanation:`新场景检查单位、谓语和不可数数量。`,criteria:[`bottles 复数`,`are 匹配`,`a little/some cheese`],skill:`expression`,critical:!0},{id:`gc7-v6`,prompt:`售票处还有几个座位，但几乎没有时间。写一至两句，并说明语气。`,reference:`We have a few seats. We have little time.`,explanation:`座位少量可用，时间不足；两句都使用已学 have 结构，可在学第 29 课后再用 but 连接。`,criteria:[`a few seats`,`little time`,`说明两种判断`,`两句完整`],skill:`expression`,critical:!0}],review:[{id:`gc7-r1`,prompt:`隔一天：表达两件行李，luggage 按旅行物品整体义。`,reference:`two pieces of luggage`,explanation:`pieces 计数，luggage 是不可数整体。`,criteria:[`pieces 复数`,`luggage 无-s`]},{id:`gc7-r2`,prompt:`隔三天：We have a little paint 与 little paint 有什么意义差别？`,reference:`前者肯定一点涂料，后者强调涂料很少。`,explanation:`paint 是不可数材料，差别主要是评价。`,criteria:[`肯定少量`,`强调不足`]},{id:`gc7-r3`,prompt:`隔一周：写一个可数物品和一个不可数内容的资源不足说明。`,reference:`We have few blankets and little food.`,explanation:`可换物品，few 配复数，little 配不可数。`,criteria:[`类型匹配`,`不足含义`,`完整句`]}],sources:[{title:`British Council LearnEnglish：Nouns, countable and uncountable`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/nouns-countable-uncountable`,supports:`核验常见不可数内容advice/information/furniture，单位表达、many/much/a lot of及some/any在普通否定、疑问、提供与请求中的区别`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Nouns, countable and uncountable`,url:`https://dictionary.cambridge.org/grammar/british-grammar/nouns-uncountable-and-countable`,supports:`核验可数单复数与限定词，明确应按词典当前义项及实际句子学习，而非现实可测量性直接判断`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`},{title:`Cambridge English Grammar Today：Little, a little, few, a few`,url:`https://dictionary.cambridge.org/uk/grammar/british-grammar/little-a-little-few-a-f`,supports:`核验(a)few配可数复数、(a)little配不可数；带a肯定少量，无a强调不足，并非固定数值阈限`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`可数与不可数名词、数量表达`,module:`补全名词与句型`,moduleOrder:2,track:`basic`},{number:8,objectives:[`根据听者能否识别所指对象，在 a/an、the 和零冠词之间作出选择。`,`按紧接冠词的语音选 a/an，区分首次引入与已经明确的对象。`,`用复数或不可数名词谈一般类别，避免把每个名词都加 the。`],summary:`根据听者能否识别所指对象，在 a/an、the 和零冠词之间作出选择。`,prerequisites:[7],body:`### 学习目标

1. 根据听者能否识别所指对象，在 a/an、the 和零冠词之间作出选择。
2. 按紧接冠词的语音选 a/an，区分首次引入与已经明确的对象。
3. 用复数或不可数名词谈一般类别，避免把每个名词都加 the。

### 先检查前置知识

先学：第 07 课。先独立回答下面两题，再阅读本节的核对提示。

1. 写“一本书”，能只写 book 吗？

核对：a book；普通单数可数名词通常需要限定词。若做错，回到第 07 课单数可数名词。

2. “一些水”能写 a water 吗？

核对：普通内容义用 some water；若数份数需明确点单语境或单位。若做错，回到第 07 课可数性。

词汇支持：umbrella 雨伞；hour 小时；university 大学；uniform 制服；entrance 入口；sun 太阳；music 音乐。

### A · 冠词先回答听者能否识别

想借一本练习册时，I need a workbook 把一个同类对象引入对话，听者不必知道具体哪一本。The workbook on your desk is mine 指向共同可识别的那一本。冠词帮助管理交流中的所指；先问“我是在介绍一个对象，还是让对方找到已经确定的对象”，再考虑中文如何翻译，不能看到中文没有“这个”就删掉 the。

首次提及常用 a/an、随后回指常用 the，是一种常见叙述路线，但不是按出现次数自动选择。站在只有一盏灯的房间里，The light is bright 可在第一次说到 light 时用 the，因为共享情境足以识别。一般共同知识中的唯一对象，如 the moon，也不必先用 a 引入。反过来，先说 a bag，再说 a bag，也可能有意引入第二个包，而不是一定写错。

“说话人知道是哪一个”不总等于听者知道。你看见一位陌生人但朋友还不知道身份，a student 可以引入此人。修饰语也不自动触发 the：a small box 仍可引入某个小盒子。判断要放在名词短语及完整语境中，而不是给每个名词机械贴上“首次/再次”标签。

### B · a/an 依据紧接的语音

a/an 是同一个不定冠词的两种形式，一般用于普通单数可数名词前。a 后接辅音音素开头，an 后接元音音素开头。这里看的是紧接冠词的发音，而不是字母名称：a university 中的开头是/j/；an hour 的 h 不发音。读不准的词应查发音，不能把 A、E、I、O、U 做成唯一判断表。

名词前有形容词时，看形容词的第一个声音：a useful tool、an unusual tool。若词组是 an old uniform，虽然 uniform 自己开头有/j/，紧接冠词的 old 开头是元音，因此用 an。缩写也按实际读法判断：an MP3 player 中 M 读/em/。本课的验收会给出生僻词发音提示，不把英语词汇量不足误判为冠词理解错误。

普通单数可数名词不裸用：She is an artist。表示职业时，说的是某类成员，常用 a/an。my、your、this 或名词所有格已经起限定作用，一般不再叠加 a/the，所以用 my ticket、this ticket，不能写 a my ticket。先检查有没有其他限定词，再决定是否需要冠词，避免一次写两个互相冲突的限定标记。

### C · 一般类别与特定集合

谈所有或一般一类事物时，可数名词常用复数零冠词：Bicycles are useful。谈内容或抽象概念时，常用不可数名词零冠词：Music is important to me。此处并不是漏写冠词，而是选择“零冠词”来表达一般范围。The bicycles outside the gate are new 则指门外那一组具体自行车，所指集合被限定。

同一个名词可以在一般内容与特定内容间切换。I like soup 表达一般喜好；The soup in this bowl is hot 表达这碗里的汤。the 并不限于可数单数，也能用于复数及不可数内容；a/an 则不能直接用于普通不可数内容或复数。第 07 课的可数性判断仍是这里的前提。

泛指还有其他合法方式，例如 A bicycle is a useful vehicle 可以用一个典型成员说明类别；The bicycle 在某些技术或历史说明中也能指这种发明。本课基础表达优先采用复数或不可数零冠词，不把它宣称为所有泛指句唯一可能的形式。核对学生答案时，若不同结构保留了一般范围且整体自然，应承认正确变体。

### D · 常见约定要和使用目的一起记

很多人名、城市名通常无冠词，如 Noah、Chengdu；专名却不能统一理解为“永不加 the”，国家、河流、群岛等名称有各自约定，应随完整名称学习。某些机构或活动表达也不是普通建筑名词的机械组合。go to school 常表示上学这项活动；go to the school 常把学校当作明确地点。区别来自表达目的和所指，不是“地点前都不加 the”。

检查短文时，先把名词短语圈出来，标注可数单数、可数复数或不可数，再写“引入、共同可识别、一般范围”之一。最后才核对 a/an 发音。这个顺序可以避免拼写判断很熟练却把整段所指弄乱。例如介绍新画室可写 I have a studio near my home. The studio has a large window. I like natural light。三种名词范围各有原因。

真实对话中，听者可能反问 Which studio?这不一定表示冠词语法错，也可能说明共享信息不足，需要补充地点。能够根据听者反馈把 a studio 改为 the studio near the library，才说明冠词用于沟通，而不仅用于填空。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| a useful idea / an unusual idea | 一个有用的想法／一个不寻常的想法。 | useful 开头/j/，unusual 开头元音；看紧接的声音。 |
| a uniform / an old uniform | 一套制服／一套旧制服。 | 加入 old 后，a/an 由 old 决定。 |
| I see a kite. The kite is yellow. | 我看到一只风筝。那只风筝是黄色的。 | 引入后回指同一对象。 |
| The gate is open. / A gate is open. | 那个大门开着。／一道门开着。 | 前者要求可识别的门；后者引入尚未确定的一道门。 |
| I like bread. / The bread on this plate is warm. | 我喜欢面包。／盘子里的面包温热。 | 一般内容与特定内容。 |
| Phones are useful. / The phones on this shelf are old. | 手机有用。／这层架上的手机旧了。 | 一般类别与具体集合。 |
| She is a painter. / This brush is hers. | 她是画家。／这支笔是她的。 | 职业单数用 a；hers 已代替所属名词短语，不加冠词。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| an one-day trip | a one-day trip | one 开头是/w/辅音，不能只看 o 字母。 |
| This is the my seat. | This is my seat. | my 已限定，普通表达不叠加 the。 |
| He is engineer. | He is an engineer. | 职业单数可数名词需限定，engineer 开头元音。 |
| The animals need water.（本意泛指动物） | Animals need water. | the 通常指已确定的一组，偏离一般类别的本意。 |

### 边界与使用选择

冠词存在搭配和专名约定，不能用一个口诀覆盖。某些英美机构用法不同，如 in hospital/in the hospital，要结合地区与含义学习。本课基础验收提供足够语境；未交代所指时，a/the 可能都合法但意义不同，不能强行设唯一答案。

### 学完后怎样检查自己

介绍一个新学习用品，回指它，再说明这一类用品的一般用途，最后说明其中一组具体物品的位置。请同伴指出每句所指范围。复习换成展览场景，先解释为什么用冠词，再核对发音，不背第一句的名词。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Articles, a/an/the](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/articles-a-an-the)：核验职业单数限定、a/an按后接声音、已知所指the，一般复数或不可数零冠词与特定集合the。
- [Cambridge English Grammar Today：A/an and the](https://dictionary.cambridge.org/grammar/british-grammar/the)：核验听者可识别性而非出现次数的冠词意义；university等辅音开头与hour元音开头；限定词不普通叠加。`,practice:[{id:`gc8-p1`,prompt:`填 a/an：___ unusual plan；___ useful tool。`,reference:`an unusual plan; a useful tool`,explanation:`看紧接词的声音，unusual 元音，useful 的/j/辅音。`,criteria:[`an unusual`,`a useful`]},{id:`gc8-p2`,prompt:`填 a/an：___ old uniform。说明看哪个词。`,reference:`an old uniform；看 old`,explanation:`old 紧接冠词，uniform 的发音此时不决定形式。`,criteria:[`an`,`指出 old`]},{id:`gc8-p3`,prompt:`引入一枚邮票，再指同一枚：I have ___ stamp. ___ stamp is red.`,reference:`a; The`,explanation:`首次引入个体，随后共享回指。`,criteria:[`a 引入`,`the 回指`]},{id:`gc8-p4`,prompt:`改正：Her brother is artist.`,reference:`Her brother is an artist.`,explanation:`artist 是职业单数，开头元音。`,criteria:[`an artist`,`保留原意`]},{id:`gc8-p5`,prompt:`无人先提门，但两人面前只有一个入口。解释 the entrance 为什么可用。`,reference:`共同场景能识别这个入口。`,explanation:`识别依据不只来自先前文字。`,criteria:[`场景识别`,`不按出现次数`]},{id:`gc8-p6`,prompt:`谈一般喜好与眼前特定汤，补空：I like ___ soup. ___ soup in this bowl is salty.`,reference:`零冠词；The`,explanation:`一般内容无冠词；给定碗定位特定内容。`,criteria:[`一般 soup 零冠词`,`特定 the soup`]},{id:`gc8-p7`,prompt:`改正 This is a my dictionary，再解释限定词冲突。`,reference:`This is my dictionary.`,explanation:`my 已提供所属限定，不能叠加 a。`,criteria:[`去 a`,`解释 my 的作用`]},{id:`gc8-p8`,prompt:`写两句：先引入一把旧伞，再说明该伞颜色。`,reference:`I have an old umbrella. The umbrella is green.`,explanation:`old 的元音决定 an，第二句回指；颜色可换。`,criteria:[`an old`,`the 回指`,`两句完整`]}],verification:[{id:`gc8-v1`,prompt:`给定 honest 的 h 不发音。写“一位诚实的邻居”。`,reference:`an honest neighbour`,explanation:`冠词紧接 honest，其开头是元音。`,criteria:[`an honest`,`单数 neighbour`],skill:`structure`,critical:!1},{id:`gc8-v2`,prompt:`首次介绍你朋友的职业为建筑师，修正 She is architect。`,reference:`She is an architect.`,explanation:`职业名词是单数可数，architect 开头元音。`,criteria:[`an architect`,`主谓完整`],skill:`transformation`,critical:!0},{id:`gc8-v3`,prompt:`改正 the our classroom。`,reference:`our classroom`,explanation:`our 已限定，普通表达不叠加 the。`,criteria:[`删 the`,`保留 our`],skill:`transformation`,critical:!0},{id:`gc8-v4`,prompt:`Books are expensive 与 The books in this bag are expensive 范围差异？`,reference:`前者谈书的一般类别；后者指包里这组书。`,explanation:`复数可一般或特定，the 改变可识别范围。`,criteria:[`一般类别`,`特定集合`],skill:`meaning`,critical:!1},{id:`gc8-v5`,prompt:`为失物说明写两句：看到一个蓝色箱子；这个箱子在出口旁。词块：box；near the exit。`,reference:`I see a blue box. The box is near the exit.`,explanation:`新场景检验引入与回指，地点词块已给定。`,criteria:[`a blue box`,`the box 回指`,`完整位置句`],skill:`expression`,critical:!0},{id:`gc8-v6`,prompt:`写一般喜欢蔬菜；另写这个篮子里的蔬菜很贵。词汇：vegetables；basket；expensive。可分两句。`,reference:`I like vegetables. The vegetables in this basket are expensive.`,explanation:`一般复数零冠词与具体集合 the 分别有依据。`,criteria:[`一般零冠词`,`特定 the`,`are 匹配复数`],skill:`expression`,critical:!0}],review:[{id:`gc8-r1`,prompt:`隔一天：给定 European 开头/j/，填___ European museum。`,reference:`a European museum`,explanation:`发音是辅音开头，不按字母 E 判断。`,criteria:[`a European`]},{id:`gc8-r2`,prompt:`隔三天：解释为什么第一次说 the sun 也可以。`,reference:`听者凭共同知识识别所指太阳。`,explanation:`首次/再次只是常见路径，识别才是核心。`,criteria:[`共同知识`,`不靠出现次数`]},{id:`gc8-r3`,prompt:`隔一周：换一个名词，写一般类别和特定集合各一句。`,reference:`Shoes are useful. The shoes near the door are wet.`,explanation:`可换内容，复数一般与具体集合必须明确区分。`,criteria:[`一般范围`,`the 特定`,`谓语匹配`]}],sources:[{title:`British Council LearnEnglish：Articles, a/an/the`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/articles-a-an-the`,supports:`核验职业单数限定、a/an按后接声音、已知所指the，一般复数或不可数零冠词与特定集合the`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：A/an and the`,url:`https://dictionary.cambridge.org/grammar/british-grammar/the`,supports:`核验听者可识别性而非出现次数的冠词意义；university等辅音开头与hour元音开头；限定词不普通叠加`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`冠词与零冠词`,module:`补全名词与句型`,moduleOrder:2,track:`basic`},{number:9,objectives:[`按句子角色选择主格、宾格与物主形式，并保持指代对象明确。`,`区分 my book 与 mine、人的所有格与复数，避免一个短语中重复限定。`,`在动作回到主语自身时使用反身代词，识别含糊的 he/she/it/they。`],summary:`按句子角色选择主格、宾格与物主形式，并保持指代对象明确。`,prerequisites:[2,7,8],body:`### 学习目标

1. 按句子角色选择主格、宾格与物主形式，并保持指代对象明确。
2. 区分 my book 与 mine、人的所有格与复数，避免一个短语中重复限定。
3. 在动作回到主语自身时使用反身代词，识别含糊的 he/she/it/they。

### 先检查前置知识

先学：第 02 课、第 07 课、第 08 课。先独立回答下面两题，再阅读本节的核对提示。

1. Emma 自我介绍采用 she/her；把“Emma is ready.”中的 Emma 改为代词。

核对：She is ready；主语位置用 she，人物代词由给定信息确认。若做错，回到第 02 课主格代词。

2. 改正 a my pen。

核对：my pen；my 已限定名词。若做错，回到第 08 课限定表达。

词汇支持：invite 邀请；help 帮助；own 自己的；notebook 笔记本；keys 钥匙；hers 她的东西；themselves 他们自己。

### A · 从句子角色选择人称形式

给定 Rui 采用 he/him，说同一个人，英语会随角色换代词。Rui helps me 中的 Rui 是主语，可换成 He；I help Rui 中的 Rui 是动词对象，可换成 him；I sit beside Rui 中的 Rui 跟在介词 beside 后，也换成 him。主格 I/you/he/she/it/we/they 用于普通主语，宾格 me/you/him/her/it/us/them 用于这些对象位置。不能按中文都译为“他”便选同一形式。

先找完整句的主语与谓语，再确定代词是否指行动者、动作对象或介词关联对象。并列不改变角色：Noah and I work together；The teacher helps Noah and me。暂时去掉 Noah 检验 I work 和 helps me，有助于发现问题，但不是改变原句结构的要求。

I 和 you 随说话人改变。问 Are you ready?对方答 Yes, I am，不是机械复制 you。指物时 it 指一个已明确对象，they 指复数对象，谓语仍用 is/are、works/work 等对应形式。指代的形式正确与人物关系正确要分开核对：代词不是装饰，它必须保留原来的参与者。

### B · 所属表达：名词还在不在

my/your/his/her/its/our/their 放在名词前，称物主限定词；mine/yours/his/hers/ours/theirs 替代整个所属短语，称物主代词。This is her notebook 与 This notebook is hers 可以表达同一所属关系，但不写 hers notebook，也不让 her 在句末独立代表“她的笔记本”。判断之前先看名词是否仍出现，而不是只记中文“她的”。

his 两种用法同形：his jacket、The jacket is his。its 通常作限定词，单独作物主代词很少见，基础题不要求独立造 its 句。it's 是 it is 或 it has 的缩写；its 没有撇号。此处只需识别已学的 it is，如 It's on its shelf，不把尚未学的完成结构当成前提。

所有格's 也能表达所属或关系：the student’s project 是一名学生的项目；the students’ projects 是多名学生的项目；children’s books 的不规则复数没有词尾-s，所以加's。所有关系不必是真正拥有，如 the writer’s name。普通限定结构中不写 the my folder；第 08 课的限定词冲突仍适用。

### C · 反身表示关系回到主语

Nina introduces herself 说明介绍对象就是 Nina 本人；Nina introduces her 则指另一个已明确的女性。反身形式 myself/yourself/himself/herself/itself/ourselves/yourselves/themselves 把主语与对象连接为同一人或物。要先问“动作涉及谁”，再决定是否需要-self/-selves，不因为中文出现“自己”就在任何位置塞反身词。

反身代词也可强调本人，如 I checked it myself 表示亲自检查；它并不取代主语 I。因此普通陈述不写 Myself is ready。by myself 是给定词块，表示独自或没有别人帮助；I do it myself 强调亲自，两者有联系但不能把所有 myself 都译为“独自”。

有些英语动作通常不需要像中文一样另写反身对象，如 get dressed 或 wash 的常见自我动作。具体动词搭配以后随用随学。本课只验收 introduce、hurt、check 等情境明确的关系，不把任何涉及身体的动词都列成必须反身的规则。

### D · 指代明确比消除重复更重要

写 Lin meets Hana. She gives her a map 时，两位女性都可能被 she/her 指到，语法形式本身不能解决歧义。若你想说 Lin 给 Hana 地图，直接写 Lin gives Hana a map，或先明确 Lin 的主语身份再继续用 she。代词不总指最近的名词；读者会结合语法、常识和上下文，所以不能用“永远指前一个名词”代替解释。

不知道某人的性别，或不需要强调性别时，可用单数 they/them/their。A new student is here. They are ready 中 student 是一个人，但 they 仍配 are、work 等形式，不用 they is。姓名本身不能可靠决定性别，本课在需要 he/she 的题中会交代人物信息。

真实写作可以给每个代词画一条指向线，再朗读检查：谁做事、事情涉及谁、物品属于谁、是否亲自或独自完成？若有两条都合理的指向，就补姓名或名词。不要为避免重复而牺牲意思，也不要把适合说话的 It's me 一类表达一概按“be 后必须主格”判错。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| She helps him. / He helps her. | 她帮他。／他帮她。 | 主格标主语，宾格标对象；顺序改变参与关系。 |
| Mia and I read. / Sam sits near Mia and me. | 米娅和我阅读。／萨姆坐在米娅和我附近。 | 并列不改变主格、介词后宾格的选择。 |
| This is our plan. / This plan is ours. | 这是我们的计划。／这个计划是我们的。 | our 后有名词，ours 独立替代所属短语。 |
| It's a robot. / Its eyes are blue. | 它是机器人。／它的眼睛是蓝的。 | it's 缩写 it is；its 限定 eyes，不能互换。 |
| the dancer's shoes / the dancers' shoes | 一位舞者的鞋／多位舞者的鞋。 | 撇号位置保留所有者单复数。 |
| He introduces himself. / He introduces him. | 他介绍自己。／他介绍另一位男性。 | 是否回到主语决定反身或普通宾格。 |
| I make it myself. / I make it by myself. | 我亲手做它。／我独自做它。 | 强调本人和没有帮助不是同一个语义重点。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| Me and Iris are ready. | Iris and I are ready. | 普通主语位置用 I。 |
| This bag is her. | This bag is hers. | 名词已在前面，此处用独立所属形式。 |
| The dog lifts it's head. | The dog lifts its head. | 目标是所属，不是 it is。 |
| Myself checks the list. | I check the list myself. | 反身强调不能取代普通主语。 |

### 边界与使用选择

单数 they 是现代标准用法之一，仍配复数样式的动词。口语中 It's me 自然，不把 be 后所有代词强制改成主格。所有格可以表达关系、时长等更广用法，本课先掌握明确人物与物品关系；代词存在语境歧义时，允许重复姓名来修清意思。

### 学完后怎样检查自己

给一次合作活动写四句，含谁做事、谁接受帮助、物品所属和亲自完成。把每个代词连到具体指代者；请同伴复述，若复述人物关系不一致就改名词。换成陌生访客情境复习，尝试用单数 they 保持指代及谓语一致。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Personal pronouns](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/personal-pronouns)：核验主格/动词宾格/介词后宾格，I/you视角转换及单数they；代词不必须指最近名词，须结合上下文避免歧义。
- [Cambridge English Grammar Today：Possessive pronouns and determiners](https://dictionary.cambridge.org/us/grammar/british-grammar/pronouns-possessive-my-mine-your)：核验名词前my/her与独立mine/hers的不同；his同形、its独立用法少见、it's/its区别及物主形式不加所有格撇号。
- [Cambridge English Grammar Today：Reflexive pronouns](https://dictionary.cambridge.org/grammar/british-grammar/reflexive)：核验主宾同指、本人强调、by+self独自；反身词不独立作普通主语，日常自我动作不一概加反身对象。`,practice:[{id:`gc9-p1`,prompt:`Rui 是男性，把 I help Rui 改成代词表达。`,reference:`I help him.`,explanation:`Rui 是 help 对象，选宾格而非 he。`,criteria:[`him`,`保留对象`]},{id:`gc9-p2`,prompt:`填：___ and Ava study together. (I/me)`,reference:`I`,explanation:`并列部分仍构成主语。`,criteria:[`I 作主语`]},{id:`gc9-p3`,prompt:`用代词替换：This is their room. This room is ___.`,reference:`theirs`,explanation:`room 已出现，独立所属用 theirs。`,criteria:[`theirs 无撇号`]},{id:`gc9-p4`,prompt:`改正：This is mine pencil.`,reference:`This is my pencil.`,explanation:`名词在后面需限定词 my。`,criteria:[`my pencil`]},{id:`gc9-p5`,prompt:`表达猫抬起它的尾巴，改正 The cat lifts it's tail。`,reference:`The cat lifts its tail.`,explanation:`这里指尾巴所属，不是 it is。`,criteria:[`its`,`解释所属`]},{id:`gc9-p6`,prompt:`对比 She teaches herself 与 She teaches her。`,reference:`前者教自己，后者教另一女性。`,explanation:`宾语是否与主语同指决定反身。`,criteria:[`同指`,`另一人`]},{id:`gc9-p7`,prompt:`两位学生各有一张桌子，写“学生们的桌子”。`,reference:`the students' desks`,explanation:`规则复数-s 后加撇号，保留多人。`,criteria:[`students'`,`desks 复数`]},{id:`gc9-p8`,prompt:`把 Lin meets Hana. She helps her.改清楚，指定 Hana 帮助 Lin。`,reference:`Lin meets Hana. Hana helps Lin.`,explanation:`重复姓名可以消歧义；不必强求代词。`,criteria:[`Hana 为帮助者`,`Lin 为接受者`]}],verification:[{id:`gc9-v1`,prompt:`填：Our coach sits beside ___. (we/us)`,reference:`us`,explanation:`beside 是介词，对象用宾格。`,criteria:[`us`],skill:`structure`,critical:!1},{id:`gc9-v2`,prompt:`改正：These tickets are our.`,reference:`These tickets are ours.`,explanation:`独立表示“我们的票”，需 ours。`,criteria:[`ours`],skill:`transformation`,critical:!0},{id:`gc9-v3`,prompt:`改正：Hers brother helps I.`,reference:`Her brother helps me.`,explanation:`名词前用 her，动词对象用 me。`,criteria:[`Her brother`,`helps me`],skill:`transformation`,critical:!0},{id:`gc9-v4`,prompt:`A visitor is here. They are ready.必须把 are 改为 is 吗？`,reference:`不用；they 可指性别未明的一个人，仍配 are。`,explanation:`单数所指不改变 they 常规动词形式。`,criteria:[`承认单数 they`,`保留 are`],skill:`meaning`,critical:!1},{id:`gc9-v5`,prompt:`在展览场景写两句：你和朋友制作海报；海报属于你们。词汇：make；poster。`,reference:`My friend and I make a poster. The poster is ours.`,explanation:`新场景同时检查主语和独立所属。`,criteria:[`I 作主语`,`ours`,`参与者一致`],skill:`expression`,critical:!0},{id:`gc9-v6`,prompt:`两位男性 Kai 与 Leo，用两句说明 Kai 介绍自己，并把 Leo 介绍给你；指代不得含糊。`,reference:`Kai introduces himself. Kai introduces Leo to me.`,explanation:`第二句明确另一个人；to me 为给定常见宾格搭配。`,criteria:[`himself 同指 Kai`,`Leo 是另一人`,`me 宾格`],skill:`expression`,critical:!0}],review:[{id:`gc9-r1`,prompt:`隔一天：写 our project 和 ours 的各一种完整表达。`,reference:`Our project is ready. This project is ours.`,explanation:`有没有名词决定所属形式。`,criteria:[`our+名词`,`ours 独立`]},{id:`gc9-r2`,prompt:`隔三天：写多名教师的办公室，office 单数。`,reference:`the teachers' office`,explanation:`所有者多人，办公室可是一间。`,criteria:[`teachers'`,`不强改 office 复数`]},{id:`gc9-r3`,prompt:`隔一周：写一位新同学的两句介绍，性别未交代，第二句用 they。`,reference:`A new student is here. They are friendly.`,explanation:`指代单人仍用 are；不能猜性别。`,criteria:[`they 指单人`,`are 正确`,`指代清楚`]}],sources:[{title:`British Council LearnEnglish：Personal pronouns`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/personal-pronouns`,supports:`核验主格/动词宾格/介词后宾格，I/you视角转换及单数they；代词不必须指最近名词，须结合上下文避免歧义`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Possessive pronouns and determiners`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/pronouns-possessive-my-mine-your`,supports:`核验名词前my/her与独立mine/hers的不同；his同形、its独立用法少见、it's/its区别及物主形式不加所有格撇号`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`},{title:`Cambridge English Grammar Today：Reflexive pronouns`,url:`https://dictionary.cambridge.org/grammar/british-grammar/reflexive`,supports:`核验主宾同指、本人强调、by+self独自；反身词不独立作普通主语，日常自我动作不一概加反身对象`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`宾格代词、物主表达与指代`,module:`补全名词与句型`,moduleOrder:2,track:`basic`},{number:10,objectives:[`依据动词的具体用法判断一句话需要哪些核心信息，而不是只数主语与动词。`,`区分宾语、主语补语和宾语补语，用五种常见基本框架组织短句。`,`区分系动词后性质说明与实义动词的对象，保留 put 等动词要求的地点。`],summary:`依据动词的具体用法判断一句话需要哪些核心信息，而不是只数主语与动词。`,prerequisites:[1,2,7,9],body:`### 学习目标

1. 依据动词的具体用法判断一句话需要哪些核心信息，而不是只数主语与动词。
2. 区分宾语、主语补语和宾语补语，用五种常见基本框架组织短句。
3. 区分系动词后性质说明与实义动词的对象，保留 put 等动词要求的地点。

### 先检查前置知识

先学：第 01 课、第 02 课、第 07 课、第 09 课。先独立回答下面两题，再阅读本节的核对提示。

1. The room is. 为什么通常还没有说完整？

核对：缺少身份、状态或位置等必要补充。若做错，回到第 01—02 课完整状态句。

2. 把“老师帮助我们”写成英语，代词用 we 还是 us？

核对：The teacher helps us；被帮助者用宾格 us。若做错，回到第 09 课宾格。

词汇支持：arrive 到达；give 给；keep 保持；seem 似乎；become 变得；taste 尝起来或品尝；put 放；open 开着的；captain 队长。

### A · 动词用法决定句子需要什么

第 01 课学过主语和谓语，现在要进一步问：这个动词的当前用法需要哪些参与者或信息？The baby sleeps 已经能报告活动；The baby wants 还留下明显问题“想要什么”。补上 some milk 后才表达完整。不是每句话都必须有宾语，也不是有主语和一个动词就一定足够。选择动词时应同时学它的常见句型，避免中文逐词翻译后才硬凑结构。

先把时间、频率等附加信息暂时划开，找参与关系。例如 The students carry the boxes after class 中，students 是行动者，boxes 是 carry 的对象，after class 定位时间。能删掉时间而不破坏核心表达，不表示所有地点或介词短语都能删除：put 往往要求你说明把东西放到哪里。

“及物/不及物”描述当前用法，不是给一个单词永久分类。The door opens 里 open 描述门打开；Sam opens the door 里 open 带动作对象。同一个词在两种用法中框架不同，谓语与主语仍要匹配。先读词典例句，再确认你想表达的是谁做什么、谁发生什么变化。

### B · 五种常见骨架帮助组织信息

常见基础框架可写成：主语＋动词；主语＋系动词＋主语补语；主语＋动词＋宾语；主语＋动词＋间接宾语＋直接宾语；主语＋动词＋宾语＋宾语补语。这里的符号是分析工具，学习目标是保留关系，而不是把每个句子套成同样长度。

主语补语说明主语的身份或性质：The sky is grey；My cousin becomes a nurse。宾语是动词关联的对象：My cousin carries a box。The sky 和 grey 不是两个被运输的对象；carries 和 a box 也不是“天空等于灰色”式的身份联系。因此不能把所有动词后内容统一叫宾语。

双宾语通常表达接收者与所给的东西：I give Maya a card。宾语补语则描述对象：We paint the wall white，white 说明 wall 的结果性质，wall 和 white 不是两件给予物。判断时试问第二部分是否在描述第一部分：墙变白，但 Maya 不等于 card。这比只数两个名词更可靠。

### C · 结构变式要服从动词搭配

I send Lina a message 常可换为 I send a message to Lina，接收者与物品关系保持。make/buy 等某些动词常用 for 表达受益者，如 I buy a notebook for Lina。但是并非每个带 to/for 对象的句子都可自由换成双宾语。英语常写 explain the rule to me，不写 explain me the rule；必须学具体搭配，不能把“人先物后”当全体动词通用模板。

系动词后通常用形容词描述主语性质：The soup smells fresh；She looks tired。这里 smell/look 没有在修饰“怎样闻/看”的动作，不能机械换成 freshly/tiredly。He looks at the map 则是另一种活动用法，需要 at 短语，不能把它和 looks tired 归为完全一样的结构。

地点也有不同地位。I read in the kitchen 可删地点仍保留完整活动；I put the cup on the tray 的地点是 put 这一用法所需，删后一般不完整。基础框架常省略这种“必须补足的地点”类型，所以五种句型是起点，不是英语所有结构的封闭名单。

### D · 用阅读、改写和输出验证骨架

读到长一点的句子时，先找完整谓语，再圈主语核心，接着问动词后的内容是什么关系。The tall girl near the window gives her brother a pencil 中，near the window 定位 girl；her brother 是接收者，a pencil 是所给物。删去修饰后保留 The girl gives her brother a pencil 可以看清骨架，而不是把离动词最近的 window 误作主语。

改写时不能只换顺序，还要检查意思。例如 We call him Ben 中的 Ben 是给 him 的名字；换成 We call Ben him 会改变乃至破坏关系。扩写可以增加时间、地点、性质，但不能把原来的宾语误删。说明“我放下一本书”时，应补上 on the table 或其他目的地，使听者知道动作结果。

输出前做三项检查：动词用法允许这个结构吗？核心参与者和必需补足信息齐全吗？附加信息是否接到正确对象？若你能从英文准确画出人物与物品箭头，再由箭头还原一句新表达，说明已经掌握结构，而不是只记住 SVO 这些字母。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| The bell rings. / Jo rings the bell. | 铃响。／乔按铃。 | 同一动词在不带对象和带对象的用法中不同。 |
| The tea tastes bitter. / She tastes the tea. | 茶味苦。／她尝茶。 | 前者补语说明茶性质，后者宾语是品尝对象。 |
| We send Omar a photo. / We send a photo to Omar. | 我们给奥马尔照片。／我们把照片发给奥马尔。 | 两种 send 结构保留接收者与物品关系。 |
| I buy Ava a pen. / I buy a pen for Ava. | 我给阿娃买笔。／我为阿娃买笔。 | buy 的受益者变式通常用 for。 |
| We find the room quiet. / We find a quiet room. | 我们觉得房间安静。／我们找到一间安静房间。 | 前者 quiet 描述已提及 room；后者 quiet 在名词短语中。 |
| He puts the bag by the door. / He reads by the door. | 他把包放门边。／他在门边阅读。 | put 需要放置目的地，read 的地点通常是附加信息。 |
| She looks calm. / She looks at the screen. | 她看起来平静。／她看屏幕。 | 系动词性质说明与活动用法的搭配不同。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| The soup tastes well.（本意味道不错） | The soup tastes good. | 目标描述主语性质，good 形容词作补语。 |
| He explains me the plan. | He explains the plan to me. | explain 这一用法不采用普通人先物后双宾语。 |
| I put my keys.（无共享放置位置） | I put my keys on the shelf. | put 需补放到哪里。 |
| We call him. | We call him Max.（本意给他起名 Max） | call him 可表示打电话；起名义还需名字补语。 |

### 边界与使用选择

五种骨架覆盖许多基础句，不是所有英语句型。不同语法体系对补语与状语的术语可能不同；本课重点在必需信息和参与关系。单句是否可省略还取决于共享情境，题目会明确是否存在可省略的对象或地点，不将所有短句一概判错。

### 学完后怎样检查自己

选 read、give、put、look 四个动词，写四句真实课堂信息，解释每个后续成分在说谁或什么。把姓名和物品换成新对象再写一次；同伴应能复原行动者、接收者、对象性质和放置位置。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Clause structure and verb patterns](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/clause-structure-verb-patterns)：核验动词当前用法决定框架，系动词、单双宾语及同动词带/不带对象的不同结构；基本句型是起点而非封闭名单。
- [Cambridge English Grammar Today：Complements](https://dictionary.cambridge.org/grammar/british-grammar/complements?q=Complements)：核验主语与宾语补语的所述对象；补足成分与附加信息不同，put需要放置位置，不能把所有地点短语当可删信息。`,practice:[{id:`gc10-p1`,prompt:`The leaves fall 中，是否必须加宾语才能完整？`,reference:`不用；fall 在此描述叶子落下。`,explanation:`这次用法不要求动作对象。`,criteria:[`不强加宾语`,`解释 fall 用法`]},{id:`gc10-p2`,prompt:`标明 The wall is green 中的 green 说明谁。`,reference:`wall`,explanation:`系动词后的性质是主语补语。`,criteria:[`说明 wall 性质`]},{id:`gc10-p3`,prompt:`在 We give Tara a key 中，谁接收、什么被给出？`,reference:`Tara 接收；a key 是所给物。`,explanation:`两项不是相互描述的补语关系。`,criteria:[`接收者 Tara`,`物品 a key`]},{id:`gc10-p4`,prompt:`把 We send Niko a card 换成 to 结构。`,reference:`We send a card to Niko.`,explanation:`send 允许该变式，关系保持。`,criteria:[`card 作物品`,`to Niko`]},{id:`gc10-p5`,prompt:`按“气味甜香”改正 The cake smells sweetly。`,reference:`The cake smells sweet.`,explanation:`smells 在此系动词，sweet 描述 cake。`,criteria:[`sweet 形容词`,`性质说明`]},{id:`gc10-p6`,prompt:`按“放到箱子里”补全 I put the toys。`,reference:`I put the toys in the box.`,explanation:`put 要求目的地，补足后意思完整。`,criteria:[`in the box`,`保留 toys`]},{id:`gc10-p7`,prompt:`解释 We make Jo happy 与 We make Jo a snack 关系差别。`,reference:`前者使 Jo 快乐，后者给 Jo 做点心。`,explanation:`happy 描述 Jo；snack 是制作物。`,criteria:[`宾补性质`,`双宾语物品`]},{id:`gc10-p8`,prompt:`写一句“我向朋友解释规则”，不能套双宾语。`,reference:`I explain the rule to my friend.`,explanation:`explain 要求物品对象后用 to 接听者。`,criteria:[`explain the rule`,`to my friend`]}],verification:[{id:`gc10-v1`,prompt:`The audience laughs 是否缺宾语？说明。`,reference:`不缺；laugh 在这里是完整活动。`,explanation:`不是每个主谓骨架都需要对象。`,criteria:[`不加宾语`,`解释当前用法`],skill:`structure`,critical:!1},{id:`gc10-v2`,prompt:`改正：The music sounds beautifully（本意悦耳）。`,reference:`The music sounds beautiful.`,explanation:`sound 系动词后性质说明用形容词。`,criteria:[`beautiful`,`保留音乐性质`],skill:`transformation`,critical:!0},{id:`gc10-v3`,prompt:`改正：She explains us the task.`,reference:`She explains the task to us.`,explanation:`变式由动词决定，explain 不采用该双宾语。`,criteria:[`the task 对象`,`to us`],skill:`transformation`,critical:!0},{id:`gc10-v4`,prompt:`We name the boat Hope 里 Hope 是第二个给予物吗？`,reference:`不是；Hope 是船名，说明 boat。`,explanation:`这是宾语补语，不是双宾语。`,criteria:[`名字补语`,`说明 boat`],skill:`meaning`,critical:!1},{id:`gc10-v5`,prompt:`为展览志愿者写一句给访客地图，再写把地图放指定位置。词汇：visitor；map；on the counter。`,reference:`We give visitors maps. We put the maps on the counter.`,explanation:`新情境检验接收者与放置补足；单数变体可。`,criteria:[`接收者与物品清楚`,`put 有位置`,`名词限定数量一致`],skill:`expression`,critical:!0},{id:`gc10-v6`,prompt:`写两句同一个人：看起来很高兴；看着一张照片。词汇：happy；photo。`,reference:`She looks happy. She looks at a photo.`,explanation:`系动词与活动搭配不同，不能只换形容词。`,criteria:[`looks happy`,`looks at`,`完整句`],skill:`expression`,critical:!0}],review:[{id:`gc10-r1`,prompt:`隔一天：把 I buy a ticket for Mum 改为自然双宾语。`,reference:`I buy Mum a ticket.`,explanation:`buy 允许受益者变式。`,criteria:[`Mum 在物品前`,`保留 ticket`]},{id:`gc10-r2`,prompt:`隔三天：给 put 构造一句，指出不可随意删除的内容。`,reference:`I put the tray on the desk；on the desk 交代放置地点。`,explanation:`动词用法要求补足。`,criteria:[`目的地`,`说明作用`]},{id:`gc10-r3`,prompt:`隔一周：用 make 写使人开心与制作物品各一句。`,reference:`We make Eli happy. We make Eli a cake.`,explanation:`同词不同框架保留性质/物品差别。`,criteria:[`happy 描述人`,`cake 是制作物`]}],sources:[{title:`British Council LearnEnglish：Clause structure and verb patterns`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/clause-structure-verb-patterns`,supports:`核验动词当前用法决定框架，系动词、单双宾语及同动词带/不带对象的不同结构；基本句型是起点而非封闭名单`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Complements`,url:`https://dictionary.cambridge.org/grammar/british-grammar/complements?q=Complements`,supports:`核验主语与宾语补语的所述对象；补足成分与附加信息不同，put需要放置位置，不能把所有地点短语当可删信息`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`宾语、表语与五种基本句型`,module:`补全名词与句型`,moduleOrder:2,track:`basic`},{number:11,objectives:[`根据缺少的信息选择 what/who/where/when/why/how 等疑问词。`,`区分主语提问与非主语提问，正确处理 be、do/does 与动词原形。`,`使用 how many/how much、which 和 whose 限定提问范围，保留问题的本意。`],summary:`根据缺少的信息选择 what/who/where/when/why/how 等疑问词。`,prerequisites:[3,5,7,9,10],body:`### 学习目标

1. 根据缺少的信息选择 what/who/where/when/why/how 等疑问词。
2. 区分主语提问与非主语提问，正确处理 be、do/does 与动词原形。
3. 使用 how many/how much、which 和 whose 限定提问范围，保留问题的本意。

### 先检查前置知识

先学：第 03 课、第 05 课、第 07 课、第 09 课、第 10 课。先独立回答下面两题，再阅读本节的核对提示。

1. 把 She likes music.改为一般疑问。

核对：Does she like music?；does 后用原形。若做错，回到第 05 课 do/does。

2. 把 They are in the library.改为一般疑问。

核对：Are they in the library?；be 移到主语前。若做错，回到第 03 课 be 问句。

词汇支持：library 图书馆；arrive 到达；choose 选择；subject 科目；owner 主人；reason 原因；How often 多久一次。

### A · 先找信息空位，再选疑问词

特殊疑问句询问一项缺失信息，不能只回答 yes/no。who 通常问人物，where 问地点，when 问时间，why 问原因，how 问方式或情况；what 问较开放的事物信息，which 常在较有限或已提到的范围中选择。Whose bag is this?问所属者，Which bag is yours?问哪个包。看到同一名词 bag，提问目的不同，疑问短语也不同。

先把你希望对方回答的部分写出来，再用疑问词代替。例如希望回答 at six，问题可以用 What time…或 When…；希望回答 by bus，常用 How…。问题的形式虽正确，若疑问词与答案类型不匹配，交流仍失败。因此练习先配对“所求信息—预计答案”，再检查语序。

how 可以组成完整短语：how many chairs 问可数复数数量，how much water 问不可数数量，how old 问年龄，how often 问频率。how long 可以问时间长度或物体长度，要看句子和情境，不把它固定译为一个中文词。第 07 课的可数性在这里决定 many/much，而不是看到中文“多少”就任选一个。

### B · 非主语提问沿已学问句结构

普通 be 句先按第 03 课把 be 放到主语前，再把疑问短语放句首：The keys are on the shelf→Where are the keys?普通一般现在实义动词句沿第 05 课使用 do/does：Nina studies at home→Where does Nina study?does 已承担第三人称单数标记，study 恢复原形，不写 Where does Nina studies?

如果疑问词替代宾语，原主语仍保留：Jo reads a magazine→What does Jo read?如果替代时间或地点，动词要求的对象也可能继续保留：Jo buys notebooks on Friday→When does Jo buy notebooks?不能为了形成问句把本来没有被提问的对象随意删掉，或把物品改成行动者。

英语普通直接问句通常需要这种疑问语序，不照中文“她住哪里”顺排成 Where she lives?。口语回声问句和间接提问有不同结构，后面的第 36 课会深入。本课核心练习只要求已经学过的 be 和一般现在问句，其他助动词在后续学过后再加入同一思路。

### C · 主语提问不额外引入 do/does

Nina carries the box 的主语是 Nina，若不知道谁搬箱子，可把主语换成 who：Who carries the box?who 自己占主语位置，不再添加另一个主语，也不为了提问加 does。若知道 Nina 搬某件东西而问是什么，则是 What does Nina carry?这里 Nina 仍是主语，what 替代对象，所以需要普通 do/does 问句。

主语可以是疑问短语：Which student needs help?Whose phone rings every morning?核心不是疑问词拼写，而是整个疑问短语在句中的角色。只看到 who 就不用 do 并不正确：Who does Nina help?的 who 是对象，仍需 does。普通肯定主语问句中 who/what 未知单数时常配单数形式，后续明确复数范围时需按实际结构判断。

负面或强调主语问句会有 do 形式，例如 Who doesn't understand?这不是对基础规律的反例，而是额外否定需要助动词。此处只作为边界识别，核心验收先判断普通肯定主语提问与非主语提问，避免同时增加尚未稳定的负面范围。

### D · 问题要让对方知道回答范围

有红、蓝两支笔并且双方都看见时，Which pen is yours?自然限制选择；What pen do you use?则可能问品牌或类型，范围更开放。what 与 which 有重叠，不是所有语境都能设唯一答案。设计提问时给出明确场景，把范围和回答目的一起交代，才能公平核对。

信息采访可以先问 Where do you study?确定地点，再问 What do you read there?确定内容，最后问 How often do you go there?确定频率。收到答案后要检查是否对应空位；如果答非所问，应调整问题或再确认，而不是只评价句子里有没有 does。

写完后圈出疑问短语，划出原句主语，标注自己是在问主语还是其他信息。非主语问句检查 be 前置或 do/does＋主语＋原形；主语问句检查没有重复主语以及动词匹配。最后把问题给同伴回答，能得到预计类型的信息才算完成使用。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| Who opens the shop? / Who does Mei call? | 谁开店？／梅给谁打电话？ | 第一句 who 是主语；第二句 who 是对象。 |
| Where is your bag? / Where do you keep your bag? | 包在哪？／你把包放哪？ | be 句与一般现在实义动词句用不同问法。 |
| What does Arun need? / Which student needs a ruler? | 阿伦需要什么？／哪个学生需要尺子？ | 前者问对象，后者问主语。 |
| How many books do you have? / How much paper do you need? | 你有多少书？／你需要多少纸？ | 名词可数性决定 many/much。 |
| Whose notebook is this? / Which notebook is yours? | 这是谁的本子？／哪本是你的？ | 询问所属者与选择物品。 |
| When do you practise? / How often do you practise? | 你何时练习？／你多久练习一次？ | 具体时间与频率是不同答案类型。 |
| How long is the path? / How long do you wait? | 路多长？／你等多久？ | 同一疑问短语可问空间长度或时长。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| Where she works? | Where does she work? | 普通直接问句需 does 前置。 |
| What does he wants? | What does he want? | does 后原形。 |
| Who does brings the folder?（问搬运者） | Who brings the folder? | who 占主语，普通肯定不额外加 does。 |
| How much chairs do we need? | How many chairs do we need? | chairs 是可数复数。 |

### 边界与使用选择

普通肯定主语问句不另加 do，但否定、强调问句可有 do；who 作宾语时仍用普通疑问结构。what/which 有语境重叠，本课只在范围明确时区分。间接问句使用陈述语序，在第 36 课学习；本课不把直接问句规则扩展到所有含疑问词的从句。

### 学完后怎样检查自己

为新同学设计四个问题，分别问人物、地点、时间和物品数量，再加一个主语问题。对方回答后注明每个答案落在哪个信息空位。隔一天换成社团采访，不复用原来的姓名和动词，检查主语问句与宾语问句是否仍能区分。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Question forms](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/question-forms)：核验be前置、一般现在do/does后原形及who/what主语问题；疑问词要与未知信息类型匹配。
- [Cambridge English Grammar Today：Wh-questions](https://dictionary.cambridge.org/grammar/british-grammar/questions-wh-)：核验普通肯定主语问句不额外引入do，宾语who仍采用助动词结构；否定和强调主语问题可有do，不能写无例外口诀。`,practice:[{id:`gc11-p1`,prompt:`预计回答“在操场”，选哪个疑问词问地点？`,reference:`where`,explanation:`所求信息是位置，不是原因或方式。`,criteria:[`where`,`地点依据`]},{id:`gc11-p2`,prompt:`改成地点问句：The bags are near the door.`,reference:`Where are the bags?`,explanation:`be 前置，bags 仍是主语。`,criteria:[`Where are`,`保留 bags`]},{id:`gc11-p3`,prompt:`问她读什么：She reads comics.`,reference:`What does she read?`,explanation:`what 替代对象，does 后用原形。`,criteria:[`does she`,`read 原形`]},{id:`gc11-p4`,prompt:`问谁读漫画，把上句主语替代。`,reference:`Who reads comics?`,explanation:`who 是主语，普通肯定不加 does。`,criteria:[`Who reads`,`保留 comics`]},{id:`gc11-p5`,prompt:`改正 How much cups do we need?`,reference:`How many cups do we need?`,explanation:`cup 是可数个体，用 many。`,criteria:[`many cups`]},{id:`gc11-p6`,prompt:`已知眼前两把钥匙，问哪把属于对方。`,reference:`Which key is yours?`,explanation:`有限可见选择，which 限定 key。`,criteria:[`Which key`,`is yours`]},{id:`gc11-p7`,prompt:`用 how often 问 Kai 多久跑步一次。`,reference:`How often does Kai run?`,explanation:`问频率，Kai 单数选 does，run 原形。`,criteria:[`How often`,`does Kai run`]},{id:`gc11-p8`,prompt:`为“谁帮 Mina”和“Mina 帮谁”分别提问。`,reference:`Who helps Mina? Who does Mina help?`,explanation:`两句的未知人物角色不同。`,criteria:[`主语 helps`,`宾语 does…help`]}],verification:[{id:`gc11-v1`,prompt:`Whose coat is this?预期回答所属者还是颜色？`,reference:`所属者`,explanation:`whose 问归属，不能用颜色替代。`,criteria:[`所属者`],skill:`structure`,critical:!1},{id:`gc11-v2`,prompt:`改正 Why does the bus stops here?`,reference:`Why does the bus stop here?`,explanation:`does 带第三人称，stop 原形。`,criteria:[`does`,`stop`],skill:`transformation`,critical:!0},{id:`gc11-v3`,prompt:`问哪名志愿者需要地图，改正 Which volunteer does need a map?（普通非强调）`,reference:`Which volunteer needs a map?`,explanation:`疑问短语占主语，普通肯定无需 do。`,criteria:[`volunteer 作主语`,`needs`],skill:`transformation`,critical:!0},{id:`gc11-v4`,prompt:`Who does Leo visit?里 Leo 和 who 分别是什么角色？`,reference:`Leo 是主语，who 是 visit 对象。`,explanation:`不是所有 who 句都免用 does。`,criteria:[`Leo 主语`,`who 对象`],skill:`meaning`,critical:!1},{id:`gc11-v5`,prompt:`你负责电影社登记，用新问题询问一位同学常看什么、在哪里看。`,reference:`What do you usually watch? Where do you watch films?`,explanation:`两项空位不同，do 后原形；其他等义形式可。`,criteria:[`内容问题`,`地点问题`,`do+原形`],skill:`expression`,critical:!0},{id:`gc11-v6`,prompt:`为活动物资询问：谁带纸；需要多少纸。词汇：bring；paper。`,reference:`Who brings the paper? How much paper do we need?`,explanation:`主语问句与不可数数量问句组合。`,criteria:[`Who brings`,`How much paper`,`非主语 do need`],skill:`expression`,critical:!0}],review:[{id:`gc11-r1`,prompt:`隔一天：问物品价格，给定 how much 与 this bag。`,reference:`How much is this bag?`,explanation:`价格问法为 be 句，much 不只问材料数量。`,criteria:[`How much is`,`this bag`]},{id:`gc11-r2`,prompt:`隔三天：用 read 写主语和对象问题各一句。`,reference:`Who reads the news? What does Lin read?`,explanation:`未知位置决定问法。`,criteria:[`主语 reads`,`对象 does…read`]},{id:`gc11-r3`,prompt:`隔一周：换一个可数和不可数对象，各写数量问题。`,reference:`How many folders do we need? How much glue do we need?`,explanation:`数量词配当前名词类型。`,criteria:[`many 复数`,`much 不可数`,`问句完整`]}],sources:[{title:`British Council LearnEnglish：Question forms`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/question-forms`,supports:`核验be前置、一般现在do/does后原形及who/what主语问题；疑问词要与未知信息类型匹配`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开受访问限制`},{title:`Cambridge English Grammar Today：Wh-questions`,url:`https://dictionary.cambridge.org/grammar/british-grammar/questions-wh-`,supports:`核验普通肯定主语问句不额外引入do，宾语who仍采用助动词结构；否定和强调主语问题可有do，不能写无例外口诀`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`特殊疑问句与主语提问`,module:`补全名词与句型`,moduleOrder:2,track:`basic`},{number:12,objectives:[`用 there be 引入某处存在的物品，与 have 表达所属或具备信息相区分。`,`根据主要名词的单复数或可数性选择 is/are 并形成否定、疑问与短答。`,`避免把 there 当作普通地点主语，结合冠词和数量表达描述真实场所。`],summary:`用 there be 引入某处存在的物品，与 have 表达所属或具备信息相区分。`,prerequisites:[3,5,7,8,10],body:`### 学习目标

1. 用 there be 引入某处存在的物品，与 have 表达所属或具备信息相区分。
2. 根据主要名词的单复数或可数性选择 is/are 并形成否定、疑问与短答。
3. 避免把 there 当作普通地点主语，结合冠词和数量表达描述真实场所。

### 先检查前置知识

先学：第 03 课、第 05 课、第 07 课、第 08 课、第 10 课。先独立回答下面两题，再阅读本节的核对提示。

1. 填：two books ___ on the desk. (is/are)

核对：are；books 是复数。若做错，回到第 02 与 07 课主语和数量。

2. 把 We have a map.改为一般疑问。

核对：Do we have a map?。若做错，回到第 05 课实义动词问句。

词汇支持：shelf 架子；opposite 在对面；near 附近；playground 操场；entrance 入口；own 拥有；available 可用的。

### A · 存在、位置与所属是三种焦点

初次告诉访客房间里有什么，可以说 There is a printer in the office。there 在这种结构里承担形式主语的作用，引入 printer 这个存在对象；它不等于普通地点短语“在那里”。因此不能写 There have a printer，也不能把 there 与 have 拼成一种中英混合的“那里有”。

如果大家已经在找那台打印机，The printer is in the office 把已知 printer 放到主语位置，回答它在哪。同样的判断可直接问 Where is the printer?。如果重点是办公室具备设备，The office has a printer 以 office 为主语，用 have/has 表示配备。三句可能说同一现实情况，但把新信息组织在不同位置。

have 不只表达私人拥有，The classroom has two doors 也可表达组成；there be 则常引入某处存在什么。选择时先问交流目标：列设施、定位已知物品，还是说某处具备什么？不能把中文一个“有”字一律译成 have，也不能看见地点就一律使用 there。

### B · 数量核心决定 is/are

现在存在表达用 there is 接单数可数或不可数内容，用 there are 接可数复数：There is a cupboard；There is some paint；There are two brushes。主语位置的 there 不提供数量，后面引入名词短语的核心提供数量。Two jars of paint 中核心 jars 是复数，所以 There are two jars of paint 不能因 paint 不可数而改 is。

物品第一次引入时常用 a/an 或数量词，地点可以在后面帮助理解。There is a desk near the window 介绍一张桌子；若已知那张桌子的位置，The desk is near the window 常更直接。不是说 there 结构后绝不能出现 the，而是基础场所介绍通常先引入新信息；强调所指的复杂语境以后再学。

列多个对象时，口语常出现 There's a table and three chairs，特别是 there's 紧接单数对象。但正式基础书面描述更稳妥的是分别写 There is a table. There are three chairs，或先把复数对象放在符合结构的位置。本课不把真实口语的 there's＋复数一律当听力理解错误，核心输出仍按标准数量匹配训练。

### C · 否定与疑问沿 be 路线

把 there is/are 变否定，在 be 后加 not：There isn't a lift；There aren't any stairs；There isn't any water。单数可数仍可用 a/an，复数或不可数的普通否定常用 any。也可以用 no 说明完全不存在：There is no water。no 与 not 不能在同一名词数量表达里随意重复，不写 There isn't no water 来完成普通标准否定。

提问时把 is/are 放到 there 前：Is there a lift?Are there any windows?短答保留 there：Yes, there is；No, there aren't。肯定短答通常不写 Yes, there's，因为句末独立 be 不能用这种紧缩。问数量时 How many chairs are there?中 how many chairs 已经提供被问对象，不再多加一个重复的 chairs。

some/any 仍要结合意图。普通未知数量的问题常用 any；如果你期待确认某些已有安排，some 也可能出现。本课核对题会给出普通信息询问、肯定或否定背景，避免把“所有疑问句只能 any”当无例外规则。冠词、数量和 be 结构三层都要查，不能只把 is 改成 are 就算全部完成。

### D · 用场所图检查信息是否准确

描述教室可从范围大的存在信息开始，再给位置：There are two shelves in our classroom. There is a clock above the door。方位表达只用本课给定词块，如 near、on、above，不提前要求学生构造复杂介词系统。若要指某个具体对象，则换已知名词作主语：The clock is above the door。读者应能从文字把每个对象放到图上。

画一张简单房间图，再给同伴看你写的描述而不看图。同伴画出的数量、位置和所属关系应与原图一致。若他把“办公室有一台打印机”理解成“打印机拥有办公室”，说明 have 的参与者安排出了问题；若他知道物品存在但不知位置，则需要补场所或方位，而不是不断重复 there。

实际问答时先问 Is there a reading corner?再问 Where is it?，第二句的 it 有明确对象，焦点自然从是否存在转为定位。能进行这种切换，比把 there is 背成中文“有”更接近真实使用。复查时给每个名词短语标类型及数量，再核对存在句、定位句和所属句的主语。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| There is a piano in the hall. / The piano is in the hall. | 大厅有架钢琴。／那架钢琴在大厅。 | 前者引入存在，后者定位已知钢琴。 |
| The hall has a piano. / There is a piano in the hall. | 大厅配有钢琴。／大厅存在一架钢琴。 | 现实可同，have 与 there be 的信息焦点不同。 |
| There is some glue. / There are two tubes of glue. | 有一些胶水。／有两管胶水。 | 不可数内容与复数单位分别决定 is/are。 |
| There isn't a bench. / There aren't any benches. | 没有长椅。／没有任何长椅。 | 单数可数 a 与复数 any 的普通否定。 |
| Is there any milk? / Are there any cups? | 有牛奶吗？／有杯子吗？ | 名词类型决定 be 和数量表达。 |
| Yes, there is. / No, there aren't. | 是的，有。／没有。 | 短答保留 there 及对应 be，不换成 it 或 they。 |
| How many lamps are there? / Where are the lamps? | 有多少灯？／那些灯在哪？ | 数量存在与已知物品位置是不同空位。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| There has three windows. | There are three windows. | there 不是拥有者；复数存在用 are。 |
| There are some juice. | There is some juice. | juice 内容义不可数，配 is。 |
| Is there chairs? | Are there any chairs? | 复数 chairs 配 are，普通未知数量用 any。 |
| Yes, there's.（肯定独立短答） | Yes, there is. | 肯定句末独立 be 通常不如此缩写。 |

### 边界与使用选择

口语中 there's 接复数或混合列表很常见；基础书面输出仍按 is/are 数量一致，正式混合列表可分句。there 结构可用于不只是地点的存在和事件，本课先用明确场所。there be 不等于普通地点 there；不要把所有地点句都强改为存在句。

### 学完后怎样检查自己

为一间新活动室写三句介绍、一个否定和两个询问，再把其中一个物品改为已知对象定位。让同伴据文字画简图，核对数量与位置。延迟复习换成车站或展厅，保留表达目的而不背原句。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Using there is and there are](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/using-there-there-are)：核验存在表达的单数/不可数is、复数are，否定a/any/no、be问题与there短答；正式混合列表可分句保证数量清楚。
- [Cambridge English Grammar Today：There is, there's and there are](https://dictionary.cambridge.org/grammar/british-grammar/is-and-are)：核验首次引入存在/出现的语篇用途；there's用于复数在口语及非正式写作中常见，基础正式输出仍按标准数量匹配。`,practice:[{id:`gc12-p1`,prompt:`首次告诉访客大厅有一张桌子，用 there be。`,reference:`There is a table in the hall.`,explanation:`新信息是桌子存在，单数用 is。`,criteria:[`There is`,`a table`,`in the hall`]},{id:`gc12-p2`,prompt:`两袋米饭已备好，填 There ___ two bags of rice。`,reference:`are`,explanation:`数量核心是 bags，不是 rice。`,criteria:[`are`,`指出 bags`]},{id:`gc12-p3`,prompt:`将 There is a balcony 改否定。`,reference:`There isn't a balcony.`,explanation:`沿 be 后加 not，单数限定 a 保留。`,criteria:[`isn't`,`a balcony`]},{id:`gc12-p4`,prompt:`将 There are lockers 改为普通未知数量问题。`,reference:`Are there any lockers?`,explanation:`are 前置，复数普通问句用 any。`,criteria:[`Are there`,`any lockers`]},{id:`gc12-p5`,prompt:`给 Is there a lift?作肯定短答。`,reference:`Yes, there is.`,explanation:`保留 there，独立肯定短答不缩成 there's。`,criteria:[`Yes, there is`]},{id:`gc12-p6`,prompt:`解释 The shop has a fridge 和 There is a fridge in the shop 焦点。`,reference:`前者强调商店配备，后者引入冰箱存在。`,explanation:`两结构可描述同一现实，主语安排不同。`,criteria:[`配备焦点`,`存在焦点`]},{id:`gc12-p7`,prompt:`问阅读区有几张桌子。`,reference:`How many tables are there in the reading area?`,explanation:`数量疑问短语＋are there，tables 不重复。`,criteria:[`How many tables`,`are there`]},{id:`gc12-p8`,prompt:`写两句：介绍一台电脑在桌上，再定位该电脑。`,reference:`There is a computer on the desk. The computer is on the desk.`,explanation:`同一现实可由新信息转为已知位置。`,criteria:[`存在句`,`已知定位句`,`指同一电脑`]}],verification:[{id:`gc12-v1`,prompt:`填：There ___ a little space by the door。`,reference:`is`,explanation:`space 在空间义不可数。`,criteria:[`is`,`space 不可数`],skill:`structure`,critical:!1},{id:`gc12-v2`,prompt:`改正 There have two baskets in the kitchen。`,reference:`There are two baskets in the kitchen.`,explanation:`存在不用 have，数量复数用 are。`,criteria:[`There are`,`baskets 复数`],skill:`transformation`,critical:!0},{id:`gc12-v3`,prompt:`改正 Are there any bread?并给否定短答。`,reference:`Is there any bread? No, there isn't.`,explanation:`bread 不可数，be 与短答一并匹配。`,criteria:[`Is there`,`there isn't`],skill:`transformation`,critical:!0},{id:`gc12-v4`,prompt:`找已知那把钥匙，你用 Where is the key?还是 How many keys are there?为什么？`,reference:`Where is the key?`,explanation:`需要位置，不是数量存在。`,criteria:[`位置问题`,`说明信息空位`],skill:`meaning`,critical:!1},{id:`gc12-v5`,prompt:`为车站写两句：有三台售票机；没有电梯。词汇：ticket machine；lift。`,reference:`There are three ticket machines. There isn't a lift.`,explanation:`新场景同时检查复数肯定与单数否定。`,criteria:[`are three machines`,`isn't a lift`,`完整句`],skill:`expression`,critical:!0},{id:`gc12-v6`,prompt:`为展厅问有没有座位；再用已知座位作主语说明在入口旁。词块：near the entrance。`,reference:`Are there any seats? The seats are near the entrance.`,explanation:`从存在询问转为已知位置，焦点明确。`,criteria:[`Are there any seats`,`The seats are`,`位置正确`],skill:`expression`,critical:!0}],review:[{id:`gc12-r1`,prompt:`隔一天：有两盒茶与有一点茶各写一句。`,reference:`There are two boxes of tea. There is a little tea.`,explanation:`计数核心不同，be 不同。`,criteria:[`复数单位 are`,`内容 is`]},{id:`gc12-r2`,prompt:`隔三天：给 Are there any bins?作否定短答。`,reference:`No, there aren't.`,explanation:`保留 there 及 are 的否定。`,criteria:[`No, there aren't`]},{id:`gc12-r3`,prompt:`隔一周：用 have 与 there be 描述同一新场所各一句。`,reference:`Our studio has two windows. There are two windows in our studio.`,explanation:`配备与存在焦点不同，现实一致。`,criteria:[`has 主语场所`,`are 复数存在`,`事实一致`]}],sources:[{title:`British Council LearnEnglish：Using there is and there are`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/using-there-there-are`,supports:`核验存在表达的单数/不可数is、复数are，否定a/any/no、be问题与there短答；正式混合列表可分句保证数量清楚`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开受访问限制`},{title:`Cambridge English Grammar Today：There is, there's and there are`,url:`https://dictionary.cambridge.org/grammar/british-grammar/is-and-are`,supports:`核验首次引入存在/出现的语篇用途；there's用于复数在口语及非正式写作中常见，基础正式输出仍按标准数量匹配`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`there be、have 与存在表达`,module:`补全名词与句型`,moduleOrder:2,track:`basic`},{number:13,objectives:[`用动词原形构成祈使句，表达指示、请求或提醒，并正确否定 be 与实义动词。`,`用 please、称呼和理由调整语气，区分指令、禁止与邀请共同做事。`,`在校园情境中综合位置、存在、所属和提问，给出别人可以执行的说明。`],summary:`用动词原形构成祈使句，表达指示、请求或提醒，并正确否定 be 与实义动词。`,prerequisites:[1,5,11,12],body:`### 学习目标

1. 用动词原形构成祈使句，表达指示、请求或提醒，并正确否定 be 与实义动词。
2. 用 please、称呼和理由调整语气，区分指令、禁止与邀请共同做事。
3. 在校园情境中综合位置、存在、所属和提问，给出别人可以执行的说明。

### 先检查前置知识

先学：第 01 课、第 05 课、第 11 课、第 12 课。先独立回答下面两题，再阅读本节的核对提示。

1. 普通陈述“你打开窗”与命令“打开窗”都必须写 you 吗？

核对：陈述通常明确 you；普通祈使句通常省略可理解的 you。若做错，回到第 01 课范围说明。

2. 改正 Don’t opens the door.

核对：Don’t open the door；助动词后原形。若做错，回到第 05 课助动词与原形。

词汇支持：turn off 关闭；leave 留下；quiet 安静的；touch 触碰；rule 规则；sign 标志；borrow 借；return 归还。

### A · 祈使句让听者执行动作

向伙伴说明实验步骤，可以直接用动词原形开头：Open the box. Check the label。祈使句通常省略听者 you，不是因为英语所有句子都能省主语，而是听者身份在这种句型中已经明确。第 01 课强调的普通陈述主语规则与这里并不冲突：普通句 She checks the label 要写主语并让动词匹配；指示 Check the label 用原形，不随一人或多人变 checks。

be 的祈使形式也是原形：Be careful。不能从普通陈述 You are careful 机械删 you 而写 Are careful。否定同样有专门结构，这也是学习句型比逐词删改可靠的原因。收到指令者需要知道具体动作对象和位置，Put it 那里如果 it 没明确、位置也未交代，语法短但执行信息不足。

祈使句可以用于命令、建议、邀请、提醒或操作说明。Have a seat 可以是邀请，并不一定是强硬命令。判断交流目的还要看场景、关系、语调及附加信息，不把“动词原形开头”自动等同生气。写步骤时目标是让另一个人安全而清楚地完成事项。

### B · 禁止、否定与共同建议

否定祈使句用 don't/do not＋原形：Don't touch the screen；Do not enter。be 也走这个否定模式：Don't be late，而不是 Be not late 作为本课普通现代指令。don't 后动词不加-s，也不把 do 再写成 does；指示面向一个人和一群人仍使用同样基本形式。

let's＋原形提出包括说话人在内的共同活动：Let's check the list。它不是“允许某个人”的简单翻译，而是邀请一起做。常见否定为 Let's not rush。let's 是 let us 的缩写，不能写 Lets go 来完成同一表达。Let him wait 则是另一种关系，him 是被允许或被要求等待的人；本课只作阅读辨认，不要求提前掌握所有 let 句型。

禁止标牌还会出现 No parking 等简短形式。这种标牌不是普通动词否定祈使句，不应据此把 Don't park 改成 Don't parking。不同文体可以表达同一禁止，但形成方式不同。核心输出先掌握原形祈使、don't＋原形和 let's＋原形，避免把所有标牌表面样式混为一个公式。

### C · 礼貌来自关系与任务，不只一个 please

Please wait here 在接待情境通常比 Wait here 缓和，但 please 不是任何命令都自动礼貌的保证。直接指令适合清晰的操作步骤、课堂组织和紧急提醒；向陌生人提出有负担的请求时，英语常用 Can/Could you…一类问句。这些情态形式将在第 26 课学习，本课可识别给定词块，不能把未学形式作为唯一正确验收答案。

称呼和理由可以帮助听者理解：Mina, please check the names. The list has two pages。前一句指定执行人，后一句补足任务范围。称呼不构成普通陈述主语，因此动词仍用 check，不因为 Mina 是单数就改 checks。若写 Mina checks the names，就变成报告她的行为，不再直接要求她现在做。

操作说明应先交代关键对象，再按执行顺序排列。先说 Take a clean cup，再说 Pour the water into the cup；若一开始写 Pour it there 但没有清楚指代，读者不能执行。语气与明确性要同时检查：语言很客气但对象混乱，仍不是有效指引。

### D · 把前面课程用到一段真实流程

前 12 课已经提供了表达资源、位置、所属和提问的工具。介绍物资时用 There are three trays；说明配备时用 The room has a sink；定位已知物品时用 The sink is near the door；给动作步骤时用 Wash your hands。这些句型承担不同任务，不应为了“综合语法”强迫每一句都放进同一种模板。

给一位首次到访的同学编写流程，先让他知道需要什么，再告诉他去哪、做什么、不要做什么，最后给出可提问的出口。可以问 Which tray is mine?来核对所属，或 Where is the bin?来确认地点；说明不必堆积复杂句，而应让问题与行动顺序可追踪。

完成后请同伴按文字模拟操作，记录一次停顿：是缺动作、对象、位置、数量，还是不知道谁执行？根据停顿修正一处，再核对原形、don't、限定词和代词。流程确实能执行，才是本模块综合掌握的证据；仅能把 close 填进空格还没有证明能独立写指引。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| You check the label. / Check the label. | 你检查标签。／检查标签。 | 普通报告与直接指示，第二句通常省听者主语。 |
| Be patient. / Don't be impatient. | 耐心点。／别不耐烦。 | be 祈使原形；否定也用 don't。 |
| Open the lid. / Don't open the lid. | 打开盖子。／别打开盖子。 | 肯否改变动作要求，动词保持原形。 |
| Let's begin. / Let's not begin yet. | 我们开始吧。／我们先别开始。 | 共同建议及其常见否定。 |
| Jo, check the list. / Jo checks the list. | 乔，核对列表。／乔核对列表。 | 称呼不等于陈述主语，check/checks 不同。 |
| Put the cup on the tray. / There is a cup on the tray. | 把杯子放托盘上。／托盘上有个杯子。 | 动作步骤与存在信息承担不同交流任务。 |
| Please wait here. / Have a seat. | 请在这里等。／请坐。 | 祈使可以是请求或邀请，不能仅按句型断定强硬。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| Closes the door, please. | Close the door, please. | 祈使使用原形，不加第三人称-s。 |
| Don't are noisy. | Don't be noisy. | don't 后 be 原形。 |
| Lets check the bags. | Let's check the bags. | 共同建议用 let us 的缩写，保留撇号。 |
| Mina, brings two cups. | Mina, bring two cups. | Mina 是称呼，指令动词用原形。 |

### 边界与使用选择

祈使句通常无显性主语，但强调、对比时可出现 you/everybody 等，本课不据此推翻常规模式。please 能缓和但不保证所有场合礼貌；正式或有负担的请求将在第 26 课扩展。标牌 No＋名词/动名词是另一类省略表达，不与 don't＋原形混写。

### 学完后怎样检查自己

给第一次参加社团的人写六步指引，含物资介绍、两项动作、一个禁止、一个共同建议及一个确认问题。让同伴模拟执行并指出一处不明确信息，修改后再检查形式。复习换成设备归还流程，不背原来的房间物品。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish Kids：Imperatives](https://learnenglishkids.britishcouncil.org/grammar-vocabulary/grammar-practice/imperatives)：核验指令用动词原形、普通否定用don't，不随听者人数加第三人称-s；原创任务采用实际操作步骤而非复制网页题目。
- [Cambridge English Grammar Today：Imperative clauses](https://dictionary.cambridge.org/grammar/british-grammar/imperative)：核验通常省略听者主语、be原形、don't/do not否定、let's not、邀请与建议用途及直接程度；please不能保证任何关系都礼貌。`,practice:[{id:`gc13-p1`,prompt:`把“请核对姓名”写为祈使，给定 check the names。`,reference:`Please check the names.`,explanation:`指示听者做事，check 原形。`,criteria:[`check 原形`,`please 位置自然`]},{id:`gc13-p2`,prompt:`改正：Opens your notebook.`,reference:`Open your notebook.`,explanation:`祈使不随听者数量加-s。`,criteria:[`Open 原形`]},{id:`gc13-p3`,prompt:`改为禁止：Touch this button.`,reference:`Don't touch this button.`,explanation:`否定祈使用 don't＋原形。`,criteria:[`Don't touch`,`保留对象`]},{id:`gc13-p4`,prompt:`改正：Don't is late.`,reference:`Don't be late.`,explanation:`be 祈使及否定均取原形 be。`,criteria:[`Don't be`]},{id:`gc13-p5`,prompt:`写共同建议“我们核对地图吧”。`,reference:`Let's check the map.`,explanation:`包括说话人和听者，let's＋原形。`,criteria:[`Let's 含撇号`,`check 原形`]},{id:`gc13-p6`,prompt:`表达“我们先别离开”，给定 leave；yet。`,reference:`Let's not leave yet.`,explanation:`共同建议常见否定 not 在 let's 后。`,criteria:[`Let's not`,`leave 原形`]},{id:`gc13-p7`,prompt:`把“Jo 核对标签”的报告改为对 Jo 的指示。`,reference:`Jo, check the label.`,explanation:`称呼与陈述主语区别决定动词形式。`,criteria:[`称呼 Jo`,`check 无-s`]},{id:`gc13-p8`,prompt:`为归还笔写两句：那里有一个盒子；把笔放盒子里。`,reference:`There is a box there. Put the pen in the box.`,explanation:`存在先建立对象，指令交代放置目的地。`,criteria:[`there is a box`,`Put 原形`,`in the box`]}],verification:[{id:`gc13-v1`,prompt:`Be quiet 这句缺普通陈述主语就错误吗？解释。`,reference:`不错误，它是通常省略听者主语的祈使句。`,explanation:`不能把普通陈述规则无条件套入祈使。`,criteria:[`识别祈使`,`说明听者`],skill:`structure`,critical:!1},{id:`gc13-v2`,prompt:`改正：Don't uses this lift.`,reference:`Don't use this lift.`,explanation:`don't 后原形，不加-s。`,criteria:[`Don't use`],skill:`transformation`,critical:!0},{id:`gc13-v3`,prompt:`改正：Leo, are careful.`,reference:`Leo, be careful.`,explanation:`称呼后 be 祈使用原形。`,criteria:[`Leo 称呼`,`be 原形`],skill:`transformation`,critical:!0},{id:`gc13-v4`,prompt:`Have a seat 一定是生气的命令吗？`,reference:`不一定，接待情境常是邀请。`,explanation:`交流作用由场景、语调与关系决定。`,criteria:[`可为邀请`,`不只看形式`],skill:`meaning`,critical:!1},{id:`gc13-v5`,prompt:`为展台访客写两句：请先读标签；不要碰模型。词汇：label；model；touch。`,reference:`Please read the label first. Don't touch the model.`,explanation:`新情境检验顺序与禁止，不借课堂名词。`,criteria:[`原形 read`,`Don't touch`,`明确对象`],skill:`expression`,critical:!0},{id:`gc13-v6`,prompt:`为两人整理资料写共同建议和确认所属的问题。词汇：folder。`,reference:`Let's sort the folders. Which folder is yours?`,explanation:`let's 包括双方，which 问物品选择。`,criteria:[`Let's+原形`,`所属问题`,`句子完整`],skill:`expression`,critical:!0}],review:[{id:`gc13-r1`,prompt:`隔一天：给 be 写肯定与否定指令各一句。`,reference:`Be kind. Don't be rude.`,explanation:`be 不变 are，否定用 don't。`,criteria:[`Be 原形`,`Don't be`]},{id:`gc13-r2`,prompt:`隔三天：将 let's check 改成暂时不检查。`,reference:`Let's not check yet.`,explanation:`共同建议否定，动词仍原形。`,criteria:[`Let's not`,`check`]},{id:`gc13-r3`,prompt:`隔一周：为一个新场所写存在信息与清楚的动作指示。`,reference:`There is a bin by the gate. Put the rubbish in the bin.`,explanation:`先引入容器，后明确行动及目的地。`,criteria:[`存在句完整`,`动作原形`,`对象位置清楚`]}],task:[{id:`gc13-task1`,prompt:`为第一次参加手工社的同学写 6—8 句指引：先介绍两种物资与位置，再给两步动作、一个禁止、一个共同建议及一个确认问题。只用已学结构；参考可变。`,reference:`There are two trays on the table. There is some paper in the blue box. Please take a sheet of paper. Write your name on it. Don't touch the wet paint. Let's check the materials together. Which tray is yours?`,explanation:`七句各承担一个任务，存在与指令不混写；纸张单位、代词及位置明确。`,criteria:[`6—8 句`,`两种物资与位置`,`两步原形动作`,`don't 禁止`,`let's 共同建议`,`确认问题`,`可执行且指代明确`]}],sources:[{title:`British Council LearnEnglish Kids：Imperatives`,url:`https://learnenglishkids.britishcouncil.org/grammar-vocabulary/grammar-practice/imperatives`,supports:`核验指令用动词原形、普通否定用don't，不随听者人数加第三人称-s；原创任务采用实际操作步骤而非复制网页题目`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Imperative clauses`,url:`https://dictionary.cambridge.org/grammar/british-grammar/imperative`,supports:`核验通常省略听者主语、be原形、don't/do not否定、let's not、邀请与建议用途及直接程度；please不能保证任何关系都礼貌`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`祈使句与请求`,module:`补全名词与句型`,moduleOrder:2,track:`basic`},{number:14,objectives:[`用一般过去时叙述已定位在过去的事件、状态与习惯。`,`根据主语选择 was/were，使用常见规则和不规则过去式，而不加第三人称单数词尾。`,`把人物、事件和时间一起写清楚，避免把所有过去事件都理解为已经完成的结果。`],summary:`用一般过去时叙述已定位在过去的事件、状态与习惯。`,prerequisites:[2,4,13],body:`### 学习目标

1. 用一般过去时叙述已定位在过去的事件、状态与习惯。
2. 根据主语选择 was/were，使用常见规则和不规则过去式，而不加第三人称单数词尾。
3. 把人物、事件和时间一起写清楚，避免把所有过去事件都理解为已经完成的结果。

### 先检查前置知识

先学：第 02 课、第 04 课、第 13 课。先独立回答下面两题，再阅读本节的核对提示。

1. 写“He plays football every day.”中的主语与动词形式。

核对：he 配 plays，属于一般现在的习惯。若做错，回到第 04 课。

2. 用 be 补“She ___ tired”和“They ___ tired”。

核对：现在分别 is、are；本课学其过去形式。若做错，回到第 02 课。

词汇支持：yesterday 昨天；last week 上周；visit 参观；move 搬迁；study 学习；go 去；have 有；see 看见；buy 买。

### A · 先建立过去的叙述框架

一般过去把事件、状态或习惯定位在过去的时间框架中：Last term we studied in Room 3。过去可以由 yesterday、last year、two days ago 直接交代，也可以由前文建立，不必每句都重复日期。正在回忆上周比赛时，I carried the flags 已经有过去范围，不能因为句内没有 yesterday 就改一般现在。

一般过去不等于“动作很短”或“动作彻底完成”。I read after dinner 可以报告过去一次阅读，是否读完整本书要靠 finished the book 等内容进一步说明。We lived there for six years 报告一段过去状态；They walked to school every day 报告过去习惯。形式选择由过去参照及叙述视角决定，不由活动实际花几秒还是几年决定。

中文“了”“曾经”能提示意思，却不能机械对应英语结构。本课先学习明确过去事件，遇到过去经历与现在联系的对比，在第 20—21 课继续。写句子前先回答何时、谁、发生什么；完成后检查整个谓语是否处在同一叙述框架。

### B · be 的过去与实义动词过去分开

be 过去有 was/were：I/he/she/it 一般配 was；you/we/they 一般配 were。I was tired、The rooms were empty 沿用第 02 课的身份、性质、位置等补语框架，变化在时间。过去不加第三人称词尾，不能写 was-s 或 were-s。

实义动词肯定过去通常直接使用过去式：We played chess；She played chess。除 be 外，常见一般过去动词在不同人称下不变，不能因为 she 又加-s。普通肯定也不在动词前额外加 was，She was played 会进入另一类被动结构，尚不是本课要表达的“她玩了”。

have 的过去是 had，do 的过去是 did，这里可以作普通实义动词：We had lunch；She did her homework。did 在下一课也会作疑问或否定助动词，角色不同。先区分“完成某件事”的实义 do 与帮助构成问句的 do，避免把每个 did 都认为后面一定再有一个动词。

### C · 规则词形、发音与不规则形式

多数规则动词加-ed，词尾已有 e 加-d：clean→cleaned、move→moved；辅音加 y 的常见词变-ied：study→studied，但 play→played。某些重读短元音后单辅音结尾需双写，如 stop→stopped、plan→planned；不是所有辅音结尾都双写，visit→visited。遇到未学的新词以词典过去式为准，不凭中文意思套变化。

-ed 的发音看词尾声音：helped 通常/t/，cleaned 通常/d/，wanted 在/t/或/d/后读/ɪd/。不是每个-ed 都多一个完整音节。实际朗读先找词根末音，再练词尾；发音与拼写是两层检查，写对 played 并不表示一定读对。

不规则动词要建立“原形—过去式”联系：go→went、take→took、buy→bought、write→wrote、see→saw；read 拼写不变，过去读/red/。本课给定核心词，不要求用未提供的生词变化证明规则理解。后面完成结构还需过去分词，先不要把 wrote 当成所有过去相关结构都能使用的形式。

### D · 用过去主线组织可理解的回忆

报告一次活动，可以先定过去时间，再按真实顺序列两三项事件：Yesterday we arrived early. We cleaned the room. The tables were ready。动作和状态都可出现在同段，不能为了统一“过去动作”把 were ready 错误改成 readied。人物与对象仍要保持第 07—10 课学过的限定、指代和动词要求。

平时习惯用一般现在，回忆过去习惯用一般过去：Now she walks to school. Last year she took the bus。习惯词 every day 不自动要求现在式；过去框架中的 every day 也可以与过去式自然搭配。判断先看活动归属时间，再查词形，不用关键词表替代叙述意思。

写完后圈出过去时间或前文框架，给每个谓语标“过去动作”或“过去 be 状态”。再查规则拼写及不规则形式，最后朗读。读者应能知道是哪次经历，而不是只看到几个-ed。若必须问这件事是否发生，下一课再学习 did 问题；本课不提前把它作为肯定句输出的必选形式。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| We play on Fridays. / We played last Friday. | 我们每周五玩。／上周五我们玩了。 | 当前习惯与明确过去事件。 |
| She was tired. / They were tired. | 她当时累。／他们当时累。 | 过去 be 仍按主语选择 was/were。 |
| He cleaned the board. / They cleaned the board. | 他擦了黑板。／他们擦了黑板。 | 常见实义动词过去式不随人称变化。 |
| We studied. / We played. | 我们学习了。／我们玩了。 | 辅音+y 改-ied；元音+y 直接-ed。 |
| I read at eight. / I finished the book at eight. | 我八点读书。／我八点读完书。 | 一般过去本身不自动说明整本读完。 |
| She had a bike. / She has a bike. | 她过去有自行车。／她现在有自行车。 | 过去状态与现在所属，had 是 have 过去。 |
| Last winter we walked every day. / We walk every day now. | 去年冬天每天走路。／现在每天走路。 | every day 不能独自决定时态。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| She visiteds the museum. | She visited the museum. | 一般过去 visited 不再加第三人称-s。 |
| We was at the station. | We were at the station. | we 配 were。 |
| He was bought a pen.（本意他买笔） | He bought a pen. | 普通主动过去用 bought，不额外加 was。 |
| They studyed yesterday. | They studied yesterday. | 辅音+y 变化为-ied。 |

### 边界与使用选择

一般过去也用于礼貌距离、假设等更广用途，后续学习；这里核心为真实过去叙述。过去式不保证事情短暂或整件完成。历史叙述有时使用现在形式以增强即时感，本课不把特殊文体与普通过去回忆混在同一道唯一答案题里。

### 学完后怎样检查自己

用四句回忆一次实际活动，至少含两个动作、一个过去状态和一个明确时间框架。把人物从 I 换为 she 再检查哪些实义动词不变、哪个 be 要变；延迟复习换一个活动，并朗读两种-ed 词尾。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Past simple](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-simple?hc_location=ufi&page=1)：核验规则-ed与常用不规则过去式，以及过去一次事件、重复习惯和状态；过去框架可由语境提供。
- [Cambridge English Grammar Today：Past simple](https://dictionary.cambridge.org/us/grammar/british-grammar/past-simple/)：核验-ed拼写与三种发音、实义动词过去式不随人称变化、was/were及过去状态/习惯；一般过去不依动作长短判断。`,practice:[{id:`gc14-p1`,prompt:`将现在身份改为昨天状态：We are ready.`,reference:`We were ready yesterday.`,explanation:`过去 be 与 we 匹配，ready 性质保留。`,criteria:[`were`,`过去框架`]},{id:`gc14-p2`,prompt:`写 study 和 play 的过去式，解释差别。`,reference:`studied; played`,explanation:`前者辅音+y，后者元音+y。`,criteria:[`studied`,`played`,`说明词尾条件`]},{id:`gc14-p3`,prompt:`填 Last night she ___ (take) a photo。`,reference:`took`,explanation:`take 过去不规则，不用 taked。`,criteria:[`took`]},{id:`gc14-p4`,prompt:`改正 He cleaneds the desk。`,reference:`He cleaned the desk.`,explanation:`过去式不再标第三人称-s。`,criteria:[`cleaned`]},{id:`gc14-p5`,prompt:`I read the report for twenty minutes yesterday 是否保证整份读完？`,reference:`不保证；这句明确报告二十分钟阅读活动，未明确整份完成。`,explanation:`过去式定位事件；for twenty minutes 给活动时长，是否读完整份仍需 finished 等结果信息。`,criteria:[`不保证整份完成`,`区分时长与结果`]},{id:`gc14-p6`,prompt:`把“过去每天坐公交”写完整句，给定 last year。`,reference:`I took the bus every day last year.`,explanation:`过去框架允许 every day，take 用 took。`,criteria:[`took`,`every day`,`last year`]},{id:`gc14-p7`,prompt:`写昨日你买了笔并且很高兴。`,reference:`I bought a pen yesterday. I was happy.`,explanation:`动作 bought 与状态 was 分别构成过去谓语。`,criteria:[`bought`,`was happy`]},{id:`gc14-p8`,prompt:`换成一名女性朋友：你昨天去了图书馆并读报。`,reference:`She went to the library yesterday and read the news.`,explanation:`主语变化不让 went/read 加-s，read 过去读/red/。`,criteria:[`went`,`read`,`不加-s`]}],verification:[{id:`gc14-v1`,prompt:`填：The two doors ___ open yesterday. (was/were)`,reference:`were`,explanation:`核心 doors 复数，过去 be 用 were。`,criteria:[`were`],skill:`structure`,critical:!1},{id:`gc14-v2`,prompt:`改正 She was wrote a note（本意她写了便条）。`,reference:`She wrote a note.`,explanation:`主动一般过去不额外加 was。`,criteria:[`wrote`,`去 was`],skill:`transformation`,critical:!0},{id:`gc14-v3`,prompt:`写 stop、move 过去式。`,reference:`stopped; moved`,explanation:`stop 短重读结构双写；move 已有 e 加-d。`,criteria:[`stopped`,`moved`],skill:`transformation`,critical:!0},{id:`gc14-v4`,prompt:`every morning 一定表示现在习惯吗？给过去反例。`,reference:`不一定：Last summer we swam every morning.`,explanation:`时间框架先定过去，频率短语不强制现在。`,criteria:[`过去框架`,`过去习惯`],skill:`meaning`,critical:!1},{id:`gc14-v5`,prompt:`为一次展览布置写三句，含过去时间、搬物品动作及房间状态。词汇：carry；empty。`,reference:`Yesterday we carried three boxes. We cleaned the floor. The room was empty.`,explanation:`新情境检验动作与 be 状态，不需复杂结构。`,criteria:[`明确过去时间`,`动作过去式`,`was/were 状态`],skill:`expression`,critical:!0},{id:`gc14-v6`,prompt:`回忆一位朋友去年每天练琴，并说明那时你们有一台钢琴。词汇：practise；piano。`,reference:`She practised every day last year. We had a piano then.`,explanation:`实义动词不加-s；had 报告过去所属状态。`,criteria:[`practised`,`过去习惯`,`had`,`限定 a piano`],skill:`expression`,critical:!0}],review:[{id:`gc14-r1`,prompt:`隔一天：写 buy、go、see 过去式。`,reference:`bought; went; saw`,explanation:`三者不能直接加-ed。`,criteria:[`三个过去式`]},{id:`gc14-r2`,prompt:`隔三天：用 you 和 they 各写过去位置句。`,reference:`You were at home. They were in class.`,explanation:`过去 be 保持 were。`,criteria:[`you were`,`they were`]},{id:`gc14-r3`,prompt:`隔一周：写二十分钟的过去阅读活动，再另写整份报告的完成信息。`,reference:`I read the report for twenty minutes yesterday. I finished it last night.`,explanation:`第一句明确活动时长，第二句明确整份完成；不能将过去形式本身等同结果词义。`,criteria:[`过去活动与时长`,`完成信息明确`]}],sources:[{title:`British Council LearnEnglish：Past simple`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-simple?hc_location=ufi&page=1`,supports:`核验规则-ed与常用不规则过去式，以及过去一次事件、重复习惯和状态；过去框架可由语境提供`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Past simple`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/past-simple/`,supports:`核验-ed拼写与三种发音、实义动词过去式不随人称变化、was/were及过去状态/习惯；一般过去不依动作长短判断`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`一般过去时与 was/were`,module:`时间与动作状态`,moduleOrder:3,track:`basic`},{number:15,objectives:[`用 did/didn’t 与动词原形对过去实义动词事件否定、提问和作短答。`,`沿 was/were 结构处理过去身份、状态和位置，避免 did 与 be 混用。`,`区分过去主语提问与其他提问，保留问题所需人物和时间信息。`],summary:`用 did/didn’t 与动词原形对过去实义动词事件否定、提问和作短答。`,prerequisites:[3,5,11,14],body:`### 学习目标

1. 用 did/didn’t 与动词原形对过去实义动词事件否定、提问和作短答。
2. 沿 was/were 结构处理过去身份、状态和位置，避免 did 与 be 混用。
3. 区分过去主语提问与其他提问，保留问题所需人物和时间信息。

### 先检查前置知识

先学：第 03 课、第 05 课、第 11 课、第 14 课。先独立回答下面两题，再阅读本节的核对提示。

1. 把 Does Mia play?中的 play 变成 plays 会怎样？

核对：助动词已承担形式，play 应保持原形。若做错，回到第 05 课。

2. 写 She was ready.的主语、过去 be 与状态信息。

核对：She / was / ready。若做错，回到第 14 课过去 be。

词汇支持：finish 完成；join 加入；call 打电话；miss 错过；arrive 到达；train 火车；on time 准时。

### A · did 把过去标记从实义动词移走

普通过去实义动词肯定写 Rae bought a ticket。问这件事是否发生，用 Did Rae buy a ticket?否定用 Rae didn't buy a ticket。助动词 did/didn't 已承担过去标记，后面的主要动词恢复原形 buy，不写 Did Rae bought…或 didn't bought。这是第 05 课 do/does 路线在过去框架中的延伸。

主语 I、she、they 都用 did，过去助动词不随人称变 does。普通问句可先从肯定骨架出发，保留原参与者和对象，再加 Did 到主语前、把过去式换原形。否定则把 didn't 放主语后。不能同时在前后各留一个过去标记，也不能把 did 当作代替所有实义动词的词。

did 也可以是 do 的过去实义形式，I did the washing 并不是省略主要动词的错误。将它提问是 Did you do the washing?第一个 did 帮助形成问句，第二个 do 表达做事。判断要看词的角色，不把相同拼写自动理解为相同语法功能。

### B · was/were 句保持 be 问句路线

过去身份、性质、位置的 be 句，否定用 wasn't/weren't，问题把 was/were 放主语前：Was the room quiet?Were the visitors outside?不额外引入 did。Did the room was quiet?把两条路线混在一起；Was the room quiet?已经由 be 处理疑问。

短答也按原结构匹配：Did she arrive?—Yes, she did./No, she didn't.；Was she ready?—Yes, she was./No, she wasn't。不要因为中文回答“是的”就总用 Yes, she was，也不要只重复原动词过去式代替助动词。you 的问题通常由答话者转换为 I：Did you help?—Yes, I did。

have 在普通所属或经历过去句中通常按实义动词路线处理：Did you have a map?I didn't have one。不同地区及特殊搭配还可能有其他 have 结构，此处基础题明确采用普通 did＋have。否定要保留动作或状态本意：didn't arrive 是不曾到达，wasn't ready 是当时状态未准备好。

### C · 过去信息问句与主语提问

已知 Sora met Kai yesterday，问见谁是 Who did Sora meet?问何时是 When did Sora meet Kai?原主语 Sora 仍在，did 后 meet 原形。问谁见了 Kai 则是 Who met Kai yesterday?who 占主语，普通肯定主语问句不额外加 did。第 11 课的角色判断仍适用，不能看到 who 就一概删 did。

过去 be 的信息问题是 Where were the tools?How was the trip?这里没有普通动作动词，所以不写 Where did the tools be?未知的主语、位置、方式等分别选择疑问短语；助动词结构只是第二步，第一步还是确认缺什么信息。

否定主语提问可写 Who didn't attend?，didn't 承担否定与过去标记，attend 原形。强调 Who did attend?也可能用于纠正“没人参加”的误解。本课核心输出先练普通主语提问和非主语提问，强调形式作为边界阅读；核对必须依照题目交代的否定或强调目的。

### D · 对话中核实事实，不预设答案

一次活动采访可问 Did you help with the exhibition?若回答 Yes, I did，再问 What did you carry?When did you arrive?这些问题分别核实发生、对象与时间。问题用 did 并不表示事情没有发生；否定句才明确说明未发生，不能把所有 did 问句都译成“没有做吗”。

写采访记录时，提问和回答要保持事实一致。问 Did you take a photo?答 No, I didn't 后不能直接记 He took a photo，除非又补出了不同人物或日期。语法变换要检查否定范围、主语和对象，不能只替换词尾。

复查时画两条路线：be 状态句用 was/were；普通实义动作句用 did＋原形。再给每个疑问词标信息空位。最后请同伴只看你的问题回答；若你的问题无法问到原本想要的日期或人物，应改提问目标，而不是不断练 did 拼写。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| She wrote a note. / Did she write a note? | 她写了便条。／她写便条了吗？ | did 承担过去，write 原形。 |
| We took a bus. / We didn't take a bus. | 我们坐公交。／我们没坐公交。 | 否定后原形 take，事实意义也改变。 |
| He was late. / Was he late? | 他迟到。／他当时迟到吗？ | be 过去直接前置，不加 did。 |
| They were outside. / They weren't outside. | 他们在外面。／他们不在外面。 | be 否定后接位置补足。 |
| Who invited Jo? / Who did Jo invite? | 谁邀请乔？／乔邀请谁？ | 主语空位与对象空位不同。 |
| I did the task. / Did you do the task? | 我做了任务。／你做任务了吗？ | 实义 did 与助动 did 后原形 do 角色不同。 |
| Did you wait?—Yes, I did. / Were you tired?—Yes, I was. | 你等了吗？—等了。／你累吗？—累。 | 短答保留各自助动或 be 路线，you 转 I。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| Did she went home? | Did she go home? | did 后原形 go。 |
| He didn't had a ticket. | He didn't have a ticket. | 否定助动词已标过去。 |
| Did they were ready? | Were they ready? | 过去 be 句不额外引入 did。 |
| Who did broke the cup?（普通问打破者） | Who broke the cup? | who 占主语，普通肯定主语问句不加 did。 |

### 边界与使用选择

be 与普通实义动词是本课两条核心路线；情态动词过去问句后续另学。did 可用于强调，不能将所有主语问句出现 did 判为错误；题目需说明普通非强调。语序正确但问错信息仍需修改，短答还要保留人物和肯否事实。

### 学完后怎样检查自己

采访同伴一次过去活动，写是否发生、人物、时间、位置四个问题并记录真实答案。选择两句肯定记录分别改否定和疑问，说明 be 与 did 路线。复习换成一次购物或旅行，避免只记 went 的原形。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Past simple](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-simple?hc_location=ufi&page=1)：核验did/didn't＋原形、过去一般疑问及实义do与助动do的角色分离。
- [Cambridge English Grammar Today：Past simple](https://dictionary.cambridge.org/us/grammar/british-grammar/past-simple/)：核验规则和不规则动词均采用did＋原形问否定，be的过去形式及信息提问；不保留双重过去标记。
- [Cambridge English Grammar Today：Wh-questions](https://dictionary.cambridge.org/grammar/british-grammar/questions-wh-)：核验普通主语提问直接用过去谓语，宾语提问保留原主语和助动词；否定/强调的主语问句有额外do结构。`,practice:[{id:`gc15-p1`,prompt:`把 She bought glue 改普通疑问。`,reference:`Did she buy glue?`,explanation:`did 标过去，buy 原形。`,criteria:[`Did she`,`buy`]},{id:`gc15-p2`,prompt:`否定 They had lunch at home。`,reference:`They didn't have lunch at home.`,explanation:`普通 have 走实义动词路线。`,criteria:[`didn't have`,`保留地点`]},{id:`gc15-p3`,prompt:`把 The hall was empty 改疑问。`,reference:`Was the hall empty?`,explanation:`be 前置不加 did。`,criteria:[`Was the hall`]},{id:`gc15-p4`,prompt:`为 Did you finish?作否定短答。`,reference:`No, I didn't.`,explanation:`答话者由 you 转 I，did 对应问题。`,criteria:[`No, I didn't`]},{id:`gc15-p5`,prompt:`修正 Where did she was yesterday?`,reference:`Where was she yesterday?`,explanation:`过去 be 位置问句保留 was 路线。`,criteria:[`Where was she`]},{id:`gc15-p6`,prompt:`问谁带来钥匙，给定 bring 过去 brought。`,reference:`Who brought the key?`,explanation:`未知的是主语，普通肯定不用 did。`,criteria:[`Who brought`]},{id:`gc15-p7`,prompt:`问 Mina 带来了什么。`,reference:`What did Mina bring?`,explanation:`Mina 仍主语，对象提问需 did＋原形。`,criteria:[`What did`,`bring 原形`]},{id:`gc15-p8`,prompt:`用 do 的洗衣活动写过去肯定和是否问题，给定 the washing。`,reference:`I did the washing. Did you do the washing?`,explanation:`实义过去 did 与助动后原形 do 分开。`,criteria:[`did 实义`,`Did…do`]}],verification:[{id:`gc15-v1`,prompt:`填：Did Arlo ___ (see) the sign?`,reference:`see`,explanation:`普通过去问句主要动词原形。`,criteria:[`see`],skill:`structure`,critical:!1},{id:`gc15-v2`,prompt:`改正 We didn't knew the answer。`,reference:`We didn't know the answer.`,explanation:`didn't 后 know 原形。`,criteria:[`didn't know`],skill:`transformation`,critical:!0},{id:`gc15-v3`,prompt:`改正 Did the visitors were inside?并作否定短答。`,reference:`Were the visitors inside? No, they weren't.`,explanation:`be 路线与复数短答一起匹配。`,criteria:[`Were`,`they weren't`],skill:`transformation`,critical:!0},{id:`gc15-v4`,prompt:`Who called Max?与 Who did Max call?未知角色差别？`,reference:`前者问打电话者；后者问 Max 联系的对象。`,explanation:`角色先决定语序，不由 who 词形独自决定。`,criteria:[`主语`,`对象`],skill:`meaning`,critical:!1},{id:`gc15-v5`,prompt:`采访一位摄影志愿者，问他昨天是否拍照以及拍了什么。词汇：take photos；photograph 拍摄。`,reference:`Did you take photos yesterday? What did you photograph?`,explanation:`新动词与情境检验 did 后原形，等义问题可。`,criteria:[`是否问题`,`对象问题`,`原形`],skill:`expression`,critical:!0},{id:`gc15-v6`,prompt:`活动结束后，问当时房间是否安静、谁关门。词汇：quiet；close。`,reference:`Was the room quiet? Who closed the door?`,explanation:`be 状态问题与实义主语问题不同。`,criteria:[`Was the room`,`Who closed`,`不混加 did`],skill:`expression`,critical:!0}],review:[{id:`gc15-r1`,prompt:`隔一天：否定 I wrote an email。`,reference:`I didn't write an email.`,explanation:`didn't 后 write，非 wrote。`,criteria:[`didn't write`]},{id:`gc15-r2`,prompt:`隔三天：给 Were you at the meeting?作肯定短答。`,reference:`Yes, I was.`,explanation:`you 转 I，be 过去按答话者匹配。`,criteria:[`Yes, I was`]},{id:`gc15-r3`,prompt:`隔一周：用 visit 写主语问题与对象问题各一句。`,reference:`Who visited Lena? Who did Lena visit?`,explanation:`未知人物位置不同。`,criteria:[`Who visited`,`Who did…visit`]}],sources:[{title:`British Council LearnEnglish：Past simple`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-simple?hc_location=ufi&page=1`,supports:`核验did/didn't＋原形、过去一般疑问及实义do与助动do的角色分离`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Past simple`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/past-simple/`,supports:`核验规则和不规则动词均采用did＋原形问否定，be的过去形式及信息提问；不保留双重过去标记`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`},{title:`Cambridge English Grammar Today：Wh-questions`,url:`https://dictionary.cambridge.org/grammar/british-grammar/questions-wh-`,supports:`核验普通主语提问直接用过去谓语，宾语提问保留原主语和助动词；否定/强调的主语问句有额外do结构`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`did 否定与疑问`,module:`时间与动作状态`,moduleOrder:3,track:`basic`},{number:16,objectives:[`用 am/is/are＋doing 表达正在进行或当前阶段的活动，保持完整谓语。`,`构成现在进行时的否定、疑问和短答，区分 be 助动词与实义动词 doing。`,`判断状态用法通常不使用进行体，并把临时活动与恒常状态区分。`],summary:`用 am/is/are＋doing 表达正在进行或当前阶段的活动，保持完整谓语。`,prerequisites:[3,4,15],body:`### 学习目标

1. 用 am/is/are＋doing 表达正在进行或当前阶段的活动，保持完整谓语。
2. 构成现在进行时的否定、疑问和短答，区分 be 助动词与实义动词 doing。
3. 判断状态用法通常不使用进行体，并把临时活动与恒常状态区分。

### 先检查前置知识

先学：第 03 课、第 04 课、第 15 课。先独立回答下面两题，再阅读本节的核对提示。

1. 把 They are ready.改为一般疑问。

核对：Are they ready?；be 前置。若做错，回到第 03 课。

2. 写“她每天读书”，为什么用 reads？

核对：She reads every day；主语与一般现在形式匹配。若做错，回到第 04 课。

词汇支持：wait 等待；listen 听；repair 修理；stay 暂住；lie 躺；know 知道；believe 相信；at the moment 此刻。

### A · 观察当前展开的活动

现在进行常把活动放在说话时或当前阶段的展开过程中：The volunteers are sorting the books。说话者把镜头对准正在展开的部分，暂时不报告整个活动的完成结果。I am reading a long novel this week 不要求我此刻拿着书，仍可描述这一周正在推进的项目；所以“进行时只指说话的这一秒”太窄。

形式是 am/is/are＋动词-ing，两部分共同构成谓语。I am packing、She is packing、They are packing，be 随主语变化，packing 不随人称变。只写 She packing 缺限定谓语中的 be；只写 She is pack 又缺活动的-ing 形式。不要用“进行就是加-ing”省掉结构的一半。

相同现实可以从不同角度表达。I work at the library 说明日常工作或身份；I am working at the library this month 强调当前阶段的活动。本课先学形式与典型意义，下一课专门比较选择，不把每个带 now 的句子都强改进行。

### B · -ing 词形与 be 问句

很多动词直接加-ing：read→reading；普通不发音 e 结尾常去 e：write→writing、make→making；某些重读短元音后单辅音结尾双写：run→running、sit→sitting。lie→lying 需要特别记，see→seeing 则保留 e。规则存在条件，不能把所有词尾 e 都删、所有辅音都双写。

否定在 be 后加 not：She isn't working；They aren't waiting；I'm not leaving。疑问把 be 放主语前：Is she working?What are they doing?短答 Yes, she is./No, they aren't，不用普通动作问句的 do/does，因为这里 be 已经是助动词。

动词 doing 表达活动内容，be 提供与主语匹配的现在限定形式。改变人数时，is 变 are，doing 不加-s。句中有介词短语或长名词主语时仍找核心：The child near the desks is drawing，不由复数 desks 决定 are。这个步骤连接前面句子骨架和名词短语判断。

### C · 当前变化与状态义边界

现在进行还可描述发展或改变：The queue is getting longer；My reading is improving。意思是变化正在发生，不只是一个固定性质。临时活动也可描述一段阶段，如 We are using Room 4 this week。this week 只是帮助读者识别阶段，真正依据是所说活动被看作当前推进。

很多状态用法通常不使用进行：I know the answer；This box belongs to Jo；I need a ruler。即使加 now，也通常说 I understand now 而不是 I am understanding now。状态是否临时不是唯一标准，“现在需要”仍通常用 need 的简单形式。应看动词的当前词义与惯常搭配。

同一词可以有活动义：I have a bike 说拥有，I am having lunch 说正在吃午饭；The soup tastes sweet 说味道，The cook is tasting the soup 说主动品尝。不要把 have 或 taste 永久列为“禁止进行”的词。基础验收采用明确状态和活动语境，广告、口语中某些强调进行表达留作边界识别。

### D · 用观察记录检验过程信息

观察一幅教室画面，先列谁正在做什么：One student is reading. Two students are cutting paper。不要把静态性质全改成活动，The wall is blue 仍是 be＋形容词。也不要为了出现进行结构而虚构未能观察到的动作；语法准确应和证据准确一起判断。

写学习日志时，可先写当前阶段项目，再写今天正在推进的一步：I am preparing a poster this week. I am drawing the title now。完成与否要靠后面的结果信息，进行形式本身不保证最后成功，也不自动等于永远没完成。读者能知道你现在在哪个步骤，才是进程描述的作用。

核对按完整谓语、词形、意义三层进行：be 有没有且匹配吗？-ing 是否正确？当前用法是在讲活动、变化还是通常简单形式的状态？遇到新动词先查例句，不凭“中文能说正在”决定。复习时换观察对象，让你从实际画面重新选择形式。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| He is drawing. / They are drawing. | 他在画画。／他们在画画。 | be 匹配主语，drawing 不变。 |
| She is writing. / She writes every day. | 她在写。／她每天写。 | 当前进程与一般习惯。 |
| We are reading a novel this month. / We read every evening. | 本月在读一本小说。／每晚阅读。 | 阶段项目不要求此刻发生，另一句报告规律。 |
| I know the route. / I am checking the route. | 我知道路线。／我正在核对路线。 | 状态用法简单，主动活动进行。 |
| He has a snack in his bag. / He is having a snack. | 他包里有一份点心。／他正在吃点心。 | 地点明确前者为拥有，后者 having 是进食活动。 |
| The tea tastes bitter. / Jo is tasting the tea. | 茶味苦。／乔在尝茶。 | 性质感受与主动品尝。 |
| The crowd is large. / The crowd is growing. | 人群很大。／人群正在扩大。 | 固定性质与发展过程。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| They preparing a poster. | They are preparing a poster. | 现在进行需要 be 与-ing 两部分。 |
| She is writes now. | She is writing now. | be 后用-ing，不保留第三人称-s。 |
| Does he waiting? | Is he waiting? | 进行问句由 be 处理，不引入 does。 |
| I am knowing the password.（普通知道状态） | I know the password. | know 状态义通常不用进行。 |

### 边界与使用选择

进行体有临时、重复、未来安排等其他用途，后两项在第 17—18 课继续；不能把现在进行限定为说话瞬间。状态动词规则是常见用法，不是单词永久禁令。词义改变或特定文体可能允许进行，核心题会给出明确普通语境。

### 学完后怎样检查自己

观察真实学习场景写三句活动、一个否定和一个问题，再写一条当前状态。分别圈 be、-ing 及状态谓语，说明每句证据。隔三天用新的画面重复，不依靠 now 关键词填空。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Present continuous](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-continuous)：核验be＋-ing、be否定与问题、当前活动/阶段/发展；不只限说话瞬间，普通状态义通常简单形式。
- [Cambridge English Grammar Today：Present simple or present continuous](https://dictionary.cambridge.org/us/grammar/british-grammar/present-simple-or-present-continuous)：核验当前活动与一般情况视角、know等普通状态义的限制；being描述当前行为而非任意临时性质。`,practice:[{id:`gc16-p1`,prompt:`补齐：The students ___ carrying chairs now。`,reference:`are`,explanation:`students 复数，进行谓语需要 are＋carrying。`,criteria:[`are`]},{id:`gc16-p2`,prompt:`写 make、run 的-ing。`,reference:`making; running`,explanation:`不发音 e 去掉；run 短重读结构双写。`,criteria:[`making`,`running`]},{id:`gc16-p3`,prompt:`改正 She drawing a map。`,reference:`She is drawing a map.`,explanation:`缺现在限定助动词 is。`,criteria:[`is drawing`]},{id:`gc16-p4`,prompt:`否定 They are moving the desk。`,reference:`They aren't moving the desk.`,explanation:`be 后 not，moving 保留。`,criteria:[`aren't moving`]},{id:`gc16-p5`,prompt:`将 He is cooking 改疑问并作肯定短答。`,reference:`Is he cooking? Yes, he is.`,explanation:`be 前置和独立短答，不加 does。`,criteria:[`Is he`,`he is`]},{id:`gc16-p6`,prompt:`按拥有状态改正 I am having two bikes。`,reference:`I have two bikes.`,explanation:`have 的拥有义通常简单形式。`,criteria:[`have`,`解释拥有`]},{id:`gc16-p7`,prompt:`描述厨师正在尝汤，给定 taste the soup。`,reference:`The cook is tasting the soup.`,explanation:`主动品尝是活动义，可进行。`,criteria:[`is tasting`,`the soup`]},{id:`gc16-p8`,prompt:`写一个本周正在推进但此刻未做的项目，再说明意义。`,reference:`I am preparing a play this week；它描述当前阶段项目。`,explanation:`进行不限说话瞬间，活动有阶段联系。`,criteria:[`am/is/are+doing`,`阶段说明`]}],verification:[{id:`gc16-v1`,prompt:`填：The girl near the boxes ___ writing. (is/are)`,reference:`is`,explanation:`girl 是主语核心，boxes 只是位置修饰。`,criteria:[`is`,`主语 girl`],skill:`structure`,critical:!1},{id:`gc16-v2`,prompt:`改正 Are they siting here?（sit）`,reference:`Are they sitting here?`,explanation:`sit 加-ing 双写 t，be 疑问保留。`,criteria:[`sitting`,`Are they`],skill:`transformation`,critical:!0},{id:`gc16-v3`,prompt:`改正 Why does Mina working?`,reference:`Why is Mina working?`,explanation:`已有进行结构需 be 疑问，非 does。`,criteria:[`is Mina working`],skill:`transformation`,critical:!0},{id:`gc16-v4`,prompt:`I am reading a series this term 是否证明我此刻正在读？`,reference:`不证明，它可描述本学期推进的活动。`,explanation:`阶段过程不等于说话瞬间。`,criteria:[`阶段活动`,`不必此刻`],skill:`meaning`,critical:!1},{id:`gc16-v5`,prompt:`为一次厨房观察写两句：一人正在切面包；另一人知道菜单。词汇：cut；menu。`,reference:`One person is cutting bread. The other person knows the menu.`,explanation:`活动进行，普通 know 状态简单。`,criteria:[`is cutting`,`knows`,`人物关系清楚`],skill:`expression`,critical:!0},{id:`gc16-v6`,prompt:`向同伴报告你的当前项目，用一条进行陈述和一条关于该项目的进行问题。`,reference:`I am designing a game this week. Are you helping with the game?`,explanation:`新情境检验完整谓语与 be 问句；其他项目可。`,criteria:[`完整进行陈述`,`be 前置问句`,`同一项目`],skill:`expression`,critical:!0}],review:[{id:`gc16-r1`,prompt:`隔一天：write 与 lie 的-ing 形式。`,reference:`writing; lying`,explanation:`不同词形规则需独立核对。`,criteria:[`writing`,`lying`]},{id:`gc16-r2`,prompt:`隔三天：把 She is using the printer 变否定和疑问。`,reference:`She isn't using the printer. Is she using the printer?`,explanation:`否定与前置沿 be 路线。`,criteria:[`isn't using`,`Is she using`]},{id:`gc16-r3`,prompt:`隔一周：换一个场景写活动与状态各一句，解释选择。`,reference:`The guide is checking a map. She knows the area.`,explanation:`check 活动正在展开；know 普通状态。`,criteria:[`活动进行`,`状态简单`,`说明词义`]}],sources:[{title:`British Council LearnEnglish：Present continuous`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-continuous`,supports:`核验be＋-ing、be否定与问题、当前活动/阶段/发展；不只限说话瞬间，普通状态义通常简单形式`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Present simple or present continuous`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/present-simple-or-present-continuous`,supports:`核验当前活动与一般情况视角、know等普通状态义的限制；being描述当前行为而非任意临时性质`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`现在进行时`,module:`时间与动作状态`,moduleOrder:3,track:`basic`},{number:17,objectives:[`根据常态、当前进程和临时阶段选择一般现在或现在进行，并解释所选视角。`,`区分同一动词的状态义和活动义，避免由 now/always 等词单独决定时态。`,`在同一短语篇中表达日常情况与当前例外，保持主语和谓语结构一致。`],summary:`根据常态、当前进程和临时阶段选择一般现在或现在进行，并解释所选视角。`,prerequisites:[4,5,16],body:`### 学习目标

1. 根据常态、当前进程和临时阶段选择一般现在或现在进行，并解释所选视角。
2. 区分同一动词的状态义和活动义，避免由 now/always 等词单独决定时态。
3. 在同一短语篇中表达日常情况与当前例外，保持主语和谓语结构一致。

### 先检查前置知识

先学：第 04 课、第 05 课、第 16 课。先独立回答下面两题，再阅读本节的核对提示。

1. 给 She reads.和 She is reading.分别形成问句。

核对：Does she read? / Is she reading?；两种谓语走不同操作路径。若做错，回到第 05 和 16 课。

2. “我知道答案”通常选 know 还是 am knowing？

核对：know；普通认识状态用一般现在。若做错，回到第 16 课状态用法。

词汇支持：usually 通常；temporary 临时的；normally 通常；at present 目前；repair 修理；belong to 属于；think 认为或思考；tonight 今晚。

### A · 选择镜头：规律还是当前阶段

一般现在把情况表达为习惯、规律或当前成立的状态：Eli works in a shop。现在进行把活动表达为当前展开、临时阶段或正在改变：Eli is working in the school office this week。它们不是“永远”对“短暂”的简单二分；一般现在说目前事实也可以在以后改变，进行描述的阶段也可能持续很久。

选择前先用自己的话说明焦点：你在介绍通常怎么做，还是报告当前正在推进什么？I read on the bus 说明习惯，I am reading on the bus 说明这一过程中正在读或当前安排的活动。若没有语境，二者都可能正确，不应从一个孤立动词强行推唯一答案。

在学习记录中可把日常与例外放一起：I usually study at home. Today I am studying in the library。usually 和 today 辅助建立范围，但不是替意思做决定的信号。Today I feel tired 通常仍用简单形式，因为 feel 在这里描述感受状态；看到 today 不能统一套 am＋doing。

### B · 先确定词义，再决定是否进行

状态用法通常采用简单形式，如 know、own、need、belong、think 表示相信。I think the plan is useful 报告观点，不通常写 I am thinking the plan is useful。think 表示主动考虑时则可进行：I am thinking about the plan。不同结构与词义一起改变，不能只加 be 和-ing 而保留不合适的搭配。

have 表示拥有时通常用 I have a camera；表示吃饭、休息或参加某活动时可用 I am having lunch/a break。taste 作系动词说明味道可用 The sauce tastes sweet；作主动品尝动作可用 The cook is tasting the sauce。look 也类似：She looks tired 与 She is looking at the notice。学习时把意义和例句成对记录，而不是给整个词永久贴上“状态词”。

be 通常描述身份、性质，He is kind 说明性质；He is being unkind 描述当前表现出的行为。这种 being 需要行为解释，不用于所有临时性质：He is being tall 不能普通表达“他现在很高”。本课把该形式作为可选拓展，不要求每个基础验收都必须造 being 句；核心仍是明确状态与活动义。

### C · 频率、发展与带态度的重复

一般现在常用 always、often、sometimes 描述频率：She often checks the door。进行形式也能搭配 always，突出重复行为并带说话人态度：She is always checking the door。这可以表达烦恼，也可能表示赞赏或强调频繁，不是所有 always 进行都必须解释为生气。

正在发展可用进行：Our reading is improving；The town is growing。若报告相对稳定事实，如 The town has two libraries，用一般现在。变化与事实可以在同段并存，不能为了统一时态而把 has two libraries 改为 is having two libraries。主语和谓语仍需分别核对，形式正确也不能弥补词义不合。

现在进行有时表达未来安排，但第 18 课才系统比较。看到 I'm meeting her tomorrow 应识别未来时间，不认为“tomorrow 与现在形式必矛盾”；本课核心选择先限当前规律、当前活动和状态，安排用法不作为独立验收必需内容。

### D · 一段话允许有不同合理焦点

写某人日常与今天的情况，先确定人物通常做什么，再描述当前例外，最后说明不会改变的状态。例如 The guide usually walks with the visitors. Today she is checking the route indoors. She knows the area well。前后时态不同是因为信息功能不同，不是段落不统一。

改写时保持事实。She works at the café不自动保证工作永久；She is working at the café today 不自动证明她平时从不在那里工作。不能把时态暗示扩大成未经提供的结论。核对题目中的“本周替班”“现在正在品尝”“通常拥有”这些具体信息，再解释为何选择某一视角。

朗读后请同伴复述哪条是常态、哪条是当前活动、哪条是状态。若他无法区分，可以补 usually、this week 等时间范围，但也要检查词义。逐句圈主要动词和助动词，不让 does 与 is 混用；下一次换人物、职业和阶段重新写，才验证选择能力而非背成对例句。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| I teach on Mondays. / I am teaching an extra class today. | 每周一授课。／今天在上额外课。 | 日常规律与当前例外。 |
| She lives here. / She is staying here this week. | 她住这里。／本周暂住。 | 普通居住事实与临时逗留焦点，不能推出永久。 |
| I think it is safe. / I am thinking about safety. | 我认为它安全。／我正在思考安全问题。 | 观点状态与主动考虑。 |
| He has a bicycle. / He is having lunch. | 他有自行车。／他在吃午饭。 | have 的拥有义与活动搭配。 |
| The coffee smells good. / She is smelling the coffee. | 咖啡闻起来香。／她在闻咖啡。 | 性质感受与主动嗅闻活动。 |
| He often leaves notes. / He is always leaving notes. | 他常留便条。／他老是留便条。 | 中性频率与强调重复、可能带态度。 |
| The queue is long. / The queue is getting longer. | 队伍很长。／队伍正在变长。 | 现有性质与发展过程。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| I am owning this camera. | I own this camera. | 普通拥有状态通常不用进行。 |
| She is have a break. | She is having a break. | 活动义可进行，但形式需-ing。 |
| Does he working today? | Is he working today? | 进行问题用 be 前置，不混 does。 |
| She reads the sign now.（明确正在逐字阅读的现场） | She is reading the sign now. | 本意是当前展开的活动；单看 now 不是决定依据。 |

### 边界与使用选择

simple/continuous 不是永久/临时的绝对分类，具体词义与话语焦点更重要。状态词有意义变化和特殊强调用法，不建立永不进行的词表。always＋进行可带态度但不一定负面；安排、叙事现在等用途在明确拓展情境中理解。

### 学完后怎样检查自己

写四句：一种日常活动、一项当前例外、一种当前状态和一项发展变化。给每句补一句中文选择理由。请同伴先不看理由标焦点，再核对是否一致；复习时把角色换成参观者，不复用 study。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Advanced present simple and continuous](https://learnenglish.britishcouncil.org/grammar/c1-grammar/advanced-present-simple-continuous)：核验状态词与活动义变化have/taste、阶段过程可不在此刻发生、发展变化与always进行的带态度重复；不把词永久禁用进行。
- [Cambridge English Grammar Today：Present simple or present continuous](https://dictionary.cambridge.org/us/grammar/british-grammar/present-simple-or-present-continuous)：核验一般情况与当前临时活动的视角对比、普通状态用法与being当前行为；据语境选择而非永久/临时绝对二分。`,practice:[{id:`gc17-p1`,prompt:`平日介绍：Our guide ___ here every Saturday. (works/is working)`,reference:`works`,explanation:`描述既定频率习惯，而非当前过程。`,criteria:[`works`,`习惯依据`]},{id:`gc17-p2`,prompt:`明确现场：两人正在搬桌子，写一句。`,reference:`They are moving the table.`,explanation:`现场展开活动，完整 be＋doing。`,criteria:[`are moving`,`明确对象`]},{id:`gc17-p3`,prompt:`按拥有义改正 She is having three cameras。`,reference:`She has three cameras.`,explanation:`have 拥有状态，单数 has。`,criteria:[`has`,`拥有理由`]},{id:`gc17-p4`,prompt:`用 think 写“认为有用”与“正在考虑计划”两句。`,reference:`I think it is useful. I am thinking about the plan.`,explanation:`观点与考虑活动不同，搭配随意义变化。`,criteria:[`think 观点`,`am thinking about`]},{id:`gc17-p5`,prompt:`说明 always 能否与现在进行同用。`,reference:`能，例如 He is always losing his keys。`,explanation:`可以强调重复并带态度，不是 always 必用简单。`,criteria:[`能`,`正确例句`]},{id:`gc17-p6`,prompt:`把当前变化写成句：队伍正在变长，给定 get longer。`,reference:`The queue is getting longer.`,explanation:`get 变化正在推进，双写 getting。`,criteria:[`is getting longer`]},{id:`gc17-p7`,prompt:`改正 Does Lina tasting the tea?`,reference:`Is Lina tasting the tea?`,explanation:`主动品尝可进行，问题用 be。`,criteria:[`Is Lina tasting`]},{id:`gc17-p8`,prompt:`两句说明通常在家工作，本周在办公室替班。`,reference:`I usually work at home. I am working in the office this week.`,explanation:`规律与当前阶段不同，不能只凭地点选时态。`,criteria:[`usually work`,`am working`,`this week`]}],verification:[{id:`gc17-v1`,prompt:`普通需要状态：I ___ a map now. (need/am needing)`,reference:`need`,explanation:`need 普通状态义通常简单，now 不强制进行。`,criteria:[`need`,`词义依据`],skill:`structure`,critical:!1},{id:`gc17-v2`,prompt:`改正 The visitors is waiting。`,reference:`The visitors are waiting.`,explanation:`复数核心决定 are，waiting 不变。`,criteria:[`are waiting`],skill:`transformation`,critical:!0},{id:`gc17-v3`,prompt:`按观点意思改正 I am thinking this is a good idea。`,reference:`I think this is a good idea.`,explanation:`目标是认为，而非主动考虑过程。`,criteria:[`think`,`观点含义`],skill:`transformation`,critical:!0},{id:`gc17-v4`,prompt:`She is working here this month 是否证明这工作只做一个月？`,reference:`不证明；只是把本月工作作为当前阶段表达。`,explanation:`时态暗示不能扩大成未给出的截止事实。`,criteria:[`不证明`,`阶段焦点`],skill:`meaning`,critical:!1},{id:`gc17-v5`,prompt:`为一名展览讲解员写常态与当前例外各一句。词汇：guide visitors；prepare notes。`,reference:`She usually guides visitors. Today she is preparing notes.`,explanation:`新职业检验相同人物的两种信息焦点。`,criteria:[`一般现在常态`,`完整现在进行`,`语境一致`],skill:`expression`,critical:!0},{id:`gc17-v6`,prompt:`用 have 的新对象写拥有状态和正在参加/享用活动各一句，并解释。`,reference:`I have a tablet. I am having a break.`,explanation:`拥有与活动义使形式不同；可换自然活动。`,criteria:[`have 状态`,`am having 活动`,`词义解释`],skill:`expression`,critical:!0}],review:[{id:`gc17-r1`,prompt:`隔一天：用 know 写现在状态，不被 now 误导。`,reference:`I know the answer now.`,explanation:`know 普通状态简单形式。`,criteria:[`know`,`无 am knowing`]},{id:`gc17-r2`,prompt:`隔三天：用 look 写性质和活动各一句。`,reference:`She looks calm. She is looking at the timetable.`,explanation:`系动词补语与主动查看活动。`,criteria:[`looks+性质`,`looking at`]},{id:`gc17-r3`,prompt:`隔一周：说明一种规律和当前正在改变的情况。`,reference:`We usually read short texts. This month we are reading longer stories.`,explanation:`不同焦点可同段并存。`,criteria:[`规律简单`,`阶段进行`,`完整句`]}],sources:[{title:`British Council LearnEnglish：Advanced present simple and continuous`,url:`https://learnenglish.britishcouncil.org/grammar/c1-grammar/advanced-present-simple-continuous`,supports:`核验状态词与活动义变化have/taste、阶段过程可不在此刻发生、发展变化与always进行的带态度重复；不把词永久禁用进行`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Present simple or present continuous`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/present-simple-or-present-continuous`,supports:`核验一般情况与当前临时活动的视角对比、普通状态用法与being当前行为；据语境选择而非永久/临时绝对二分`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`一般现在与现在进行的对比`,module:`时间与动作状态`,moduleOrder:3,track:`basic`},{number:18,objectives:[`用 will 和 be going to 表达决定、意图、承诺或预测，解释不同信息依据。`,`使用完整未来表达的否定与疑问，区分 going to＋动词和去某地的 going to＋地点。`,`辨认现在进行表安排与一般现在表时间表，避免把所有未来信息都改成 will。`],summary:`用 will 和 be going to 表达决定、意图、承诺或预测，解释不同信息依据。`,prerequisites:[5,16,17],body:`### 学习目标

1. 用 will 和 be going to 表达决定、意图、承诺或预测，解释不同信息依据。
2. 使用完整未来表达的否定与疑问，区分 going to＋动词和去某地的 going to＋地点。
3. 辨认现在进行表安排与一般现在表时间表，避免把所有未来信息都改成 will。

### 先检查前置知识

先学：第 05 课、第 16 课、第 17 课。先独立回答下面两题，再阅读本节的核对提示。

1. 把 They are working.改为问句。

核对：Are they working?；be 前置。若做错，回到第 16 课。

2. 在 Does she go?中主要动词应否再加 s？

核对：不加；助动词之后保留原形。若做错，回到第 05 课。

词汇支持：plan 计划；promise 承诺；cloud 云；rain 下雨；leave 出发；appointment 预约；tomorrow 明天；next month 下月。

### A · 未来信息不只有一种形式

英语可以用 will＋原形、be going to＋原形、现在进行和一般现在等形式谈未来。学习重点是听者从形式及语境中理解你在作预测、作决定、表达意图还是说明安排。未来时间不自动要求每个谓语都换 will，更不是任何含 tomorrow 的句子都要同一种形式。

will 常用于当场决定、愿意做事或承诺：The box is heavy. I'll carry it 表达听到情况后提出帮助；I will send you the file 表达承担承诺。will 还用于预测：I think the route will be busy。肯定 will/’ll 后用原形，否定 will not/won't，问题 Will you…?，不加 to 或第三人称-s。

“当场决定”是 will 的常见用途之一，不是 will 唯一意义。已经计划的行为也可在承诺或事实预测视角下用 will。核对时要看说话者希望突出什么，不能把“以前决定过”当成任何 will 表达都错误的理由。本课若要求某一形式，会明确指定交流焦点。

### B · going to 连接现有意图或证据

be going to＋原形常突出已经形成的计划、意图，或当前证据支持的预测：We are going to repaint the room 表达已有意图；The shelf is shaking. It is going to fall 突出眼前迹象。它不保证未来一定发生，计划会改变，证据也可能误判。所谓“有证据”指说话者的依据，不是比 will 更高的确定度等级。

形式中 be 不能省：She is going to help；They are going to help。否定在 be 后：She isn't going to help；问题把 be 前置：Are they going to help?going to 后的动词原形不随人数变。I going to works 既漏 be 又多词尾，不能只修一个词就算完成。

I am going to the studio 可能是 go 这个移动动词的进行形式，to 后接地点；I am going to paint 后接动词，构成未来意图。比较时看 to 后的词类与整个意义，不只看到 going to 就认定是未来公式。gonna 是非正式口语读写样式，本课正式学习输出保留 going to。

### C · 已安排事项与时间表

现在进行可表达相对确定的未来安排：We are meeting the guide at ten tomorrow。通常已有日程、预约或具体计划，时间地点帮助听者理解；并不要求每项安排都必须涉及另一人，个人固定计划也可如此表达。问 Are you doing anything on Sunday?是在询问计划，不是此刻动作。

一般现在可表达时间表或既定日程：The workshop starts at nine；The train leaves at six。这里动词仍按主语用 starts/leaves。区别不只是“人用进行、交通用现在”；人的课程日程也可一般现在，交通中的具体个人安排也可进行。要看你是在引用时间表，还是说自己的安排。

普通时间从句指未来时常用现在形式，如 I'll call when I arrive。这里先作为阅读拓展，时间从句第 31 课再系统学习；本课独立验收不要求尚未学的从句才能正确完成。未来进行与未来完成在第 22 课建立新参照点后扩展，不在这里一次堆满所有长形式。

### D · 重叠用法允许不同合理表达

预测 We will need more chairs 与 We are going to need more chairs 都可能自然，后者更容易突出当前情况带来的依据，但不是无上下文也只有一个正确答案。I will help 和 I am going to help 可在不同语气、承诺或意图焦点下表达同一行动。先确认说话目的，再解释哪种形式更贴切，而不是强行把真实语言切成互不重叠的箱子。

把一周计划写成三栏：个人意图、已落实安排、公开时间表；再增加一个当场帮助或承诺。写每句前先标证据：自己已经决定、预约已确认、表格显示、刚提出帮助。必要时用时间词澄清，避免把现在进行安排误读为此刻活动。

核对不仅看形式，也看承诺范围。例如 I will bring two chairs 明确承诺数量；I am going to get some chairs 表达意图但不保证两把。改写时保留对象、数量与时间，不为了练 will 而改变原本任务。读者能分清“我打算”“已排入日程”“表上几点”“我愿意做”，才说明学习服务真实安排。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| I'll open it. / I'm going to open it after class. | 我来打开。／我打算课后打开。 | 前者可为当场决定，后者突出已有意图。 |
| I think it will rain. / Look at those clouds. It's going to rain. | 我想会下雨。／看乌云，要下雨。 | 预测可重叠，第二组突出当前迹象。 |
| She will help. / She won't help. | 她会帮忙。／她不会帮忙。 | will 后原形，否定 won't。 |
| Are you going to paint? / Are you going to the gallery? | 你打算画画吗？／你要去画廊吗？ | to 后动词与地点使 going to 结构意义不同。 |
| We're meeting at four tomorrow. / We meet on Fridays. | 明天四点见。／每周五见。 | 未来安排与普通习惯，时间范围决定解读。 |
| The lesson starts at ten. / I'm attending the lesson tomorrow. | 课十点开始。／我明天参加课。 | 时间表与个人已安排事项。 |
| We'll need more paper. / We're going to need more paper. | 我们会需要更多纸。／看来我们要更多纸。 | 两者可合理预测，后者更突出现在依据，不硬判唯一。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| She will helps us. | She will help us. | will 后原形，不加-s。 |
| I going to study. | I am going to study. | going to 意图结构不能漏 be。 |
| Does he going to come? | Is he going to come? | going to 结构由 be 前置。 |
| The train will leaves at six. | The train leaves at six. / The train will leave at six. | 时间表可一般现在；若选 will，后面也须原形。 |

### 边界与使用选择

will 和 going to 存在重叠，典型焦点不是无例外硬规则。未来安排的进行形式不要求必有另一人参与；一般现在可用于时间表。时间从句仅作标明的拓展，第 31 课系统学；更长未来参照在第 22 课学，当前核心题不以未学从句作为唯一标准。

### 学完后怎样检查自己

写个人已有意图、已落实安排、时间表和当场帮助各一句，为每句注明依据。请同伴判断哪条已安排、哪条只是意图；若信息不够，补时间或证据。复习换成旅行场景，承认合理预测变体而不背关键词。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Future forms, will / be going to / present continuous](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-forms-will-be-going-present-continuous?page=1)：核验当场决定、预先意图和已安排事项的典型未来表达；采用usually的趋势措辞，不把另一个人参与当无例外构造条件。
- [Cambridge English Grammar Today：Future, be going to](https://dictionary.cambridge.org/us/grammar/british-grammar/future-be-going-to-i-am-going-to-work)：核验be going to＋原形、已有意图和当前证据预测；明确will与going to可相似重叠，区别在突出当前决定/依据。
- [Cambridge English Grammar Today：Going to](https://dictionary.cambridge.org/uk/grammar/british-grammar/going-to)：核验go的现在进行＋to＋地点与be going to＋原形未来意图的区分。`,practice:[{id:`gc18-p1`,prompt:`当场见伙伴拿重箱子，用 will 提出帮助。`,reference:`I'll carry the box.`,explanation:`will 突出当前提出的愿意行动。`,criteria:[`will/’ll carry`,`明确对象`]},{id:`gc18-p2`,prompt:`填：She ___ going to join the club. (is/are)`,reference:`is`,explanation:`going to 需要 be，单数 she 配 is。`,criteria:[`is going to`]},{id:`gc18-p3`,prompt:`改正 We will to wait。`,reference:`We will wait.`,explanation:`will 后直接原形，不加 to。`,criteria:[`will wait`]},{id:`gc18-p4`,prompt:`将 They are going to paint 改否定和疑问。`,reference:`They aren't going to paint. Are they going to paint?`,explanation:`否定与疑问沿 be 路线。`,criteria:[`aren't going to`,`Are they going to`]},{id:`gc18-p5`,prompt:`解释 going to swim 与 going to the pool 区别。`,reference:`前者计划游泳；后者是去泳池的移动。`,explanation:`to 后动词原形与地点名词不同。`,criteria:[`动词计划`,`地点移动`]},{id:`gc18-p6`,prompt:`已预约明日十点见导师，用现在进行。`,reference:`I am meeting my tutor at ten tomorrow.`,explanation:`时间与安排证据明确，进行可指未来。`,criteria:[`am meeting`,`未来时间`]},{id:`gc18-p7`,prompt:`引用时刻表：车在六点开，给定 leave。`,reference:`The bus leaves at six.`,explanation:`时间表可一般现在，bus 单数 leaves。`,criteria:[`leaves`,`at six`]},{id:`gc18-p8`,prompt:`说明无语境的 It will be busy 与 It's going to be busy 是否只能一个对。`,reference:`不是；都可预测，going to 可突出当前依据。`,explanation:`典型焦点不能取代所有真实语境。`,criteria:[`允许重叠`,`说明焦点`]}],verification:[{id:`gc18-v1`,prompt:`填：Will Jo ___ (bring) a map?`,reference:`bring`,explanation:`will 后原形，问题 will 前置。`,criteria:[`bring`],skill:`structure`,critical:!1},{id:`gc18-v2`,prompt:`改正 She are going to reads tonight。`,reference:`She is going to read tonight.`,explanation:`be 单数与原形同时修正。`,criteria:[`is`,`read 原形`],skill:`transformation`,critical:!0},{id:`gc18-v3`,prompt:`将 He will help 变否定。`,reference:`He won't help.`,explanation:`will not 缩为 won't，help 原形。`,criteria:[`won't help`],skill:`transformation`,critical:!0},{id:`gc18-v4`,prompt:`I'm washing my hair tonight 是否因没人共同预约必错？`,reference:`不必错；个人相对确定的未来安排也可用进行。`,explanation:`另一个人不是绝对构造条件。`,criteria:[`承认个人安排`,`未来时间`],skill:`meaning`,critical:!1},{id:`gc18-v5`,prompt:`为周末义工活动写已形成意图和已确认会面各一句。词汇：join；meet；volunteer team。`,reference:`I am going to join the volunteer team. I am meeting the leader at nine on Saturday.`,explanation:`新场景区分意图与具体安排；人物可换。`,criteria:[`going to 意图`,`进行安排`,`时间明确`],skill:`expression`,critical:!0},{id:`gc18-v6`,prompt:`写一个当前证据支持的预测，再写一个当场承诺；说明依据。`,reference:`The cup is near the edge. It's going to fall. I'll move it.`,explanation:`预测来自位置迹象，will 用于立即承担行动。`,criteria:[`证据预测`,`will 承诺`,`原形及 be 完整`],skill:`expression`,critical:!0}],review:[{id:`gc18-r1`,prompt:`隔一天：给 going to 写一个否定问题。`,reference:`Are you not going to join us? / Aren't you going to join us?`,explanation:`be 前置与 not，不用 does。`,criteria:[`be 前置`,`going to+原形`]},{id:`gc18-r2`,prompt:`隔三天：用时间表与个人安排写两句未来信息。`,reference:`The event starts at two. I am meeting Jo before it.`,explanation:`两种形式服务不同安排焦点。`,criteria:[`时间表简单`,`个人安排进行`]},{id:`gc18-r3`,prompt:`隔一周：一个预测可用两种形式，解释什么语境更突出当前证据。`,reference:`The room will be crowded. The room is going to be crowded；已看到报名人数可支持后者。`,explanation:`可重叠但焦点不同，不强定唯一。`,criteria:[`两种形式正确`,`当前证据解释`]}],sources:[{title:`British Council LearnEnglish：Future forms, will / be going to / present continuous`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-forms-will-be-going-present-continuous?page=1`,supports:`核验当场决定、预先意图和已安排事项的典型未来表达；采用usually的趋势措辞，不把另一个人参与当无例外构造条件`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Future, be going to`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/future-be-going-to-i-am-going-to-work`,supports:`核验be going to＋原形、已有意图和当前证据预测；明确will与going to可相似重叠，区别在突出当前决定/依据`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`},{title:`Cambridge English Grammar Today：Going to`,url:`https://dictionary.cambridge.org/uk/grammar/british-grammar/going-to`,supports:`核验go的现在进行＋to＋地点与be going to＋原形未来意图的区分`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`will 与 be going to`,module:`时间与动作状态`,moduleOrder:3,track:`basic`},{number:19,objectives:[`以过去时间为观察点，用 was/were＋doing 描述当时展开的活动。`,`把过去活动背景与短事件结合，解释一般过去和过去进行的不同焦点。`,`根据具体时间关系使用 when/while，避免按连词机械强制唯一时态。`],summary:`以过去时间为观察点，用 was/were＋doing 描述当时展开的活动。`,prerequisites:[14,15,16,18],body:`### 学习目标

1. 以过去时间为观察点，用 was/were＋doing 描述当时展开的活动。
2. 把过去活动背景与短事件结合，解释一般过去和过去进行的不同焦点。
3. 根据具体时间关系使用 when/while，避免按连词机械强制唯一时态。

### 先检查前置知识

先学：第 14 课、第 15 课、第 16 课、第 18 课。先独立回答下面两题，再阅读本节的核对提示。

1. 写 They are reading.的完整谓语，并把 are 换成过去。

核对：are reading；过去为 were reading。若做错，回到第 16 课与 14 课。

2. 否定 He called.时为什么用 didn’t call？

核对：didn’t 承担过去，call 用原形。若做错，回到第 15 课。

词汇支持：ring 响；interrupt 打断；walk 走；rain 下雨；at that moment 那时；while 当……时；when 当……时；suddenly 突然。

### A · 把镜头移到过去的过程中

现在进行用现在 be＋doing；过去进行把观察点移到过去，形式为 was/were＋doing：At four yesterday, we were arranging the chairs。时间给出过去观察点，进行形式把活动看作当时展开，而不是报告“安排工作全部完成”。I was reading at eight 并不保证八点后还读多久，也不证明最终未读完；它只是不给整个完成结果作重点。

主语 I/he/she/it 配 was，you/we/they 配 were，doing 不随人称变。改变时间从 now 到 then，be 跟着参照改变，不把 was/were 与动词过去式叠写成 was arranged 来表达普通主动进程。后者会涉及被动形式，另在第 27 课学习。

过去观察点可以来自前文，如我们正在回忆昨天晚会，The band was playing 已有过去范围，不必每句重复 yesterday。先画“观察点”和“活动跨过该点”两项，再写完整谓语，避免只凭 when 或 while 选形式。

### B · 活动背景与主要事件

叙事中常用过去进行铺背景，用一般过去推进事件：We were decorating the room when the lights went out。decorating 是灯灭时已在进行的活动，went out 是主要事件。一般过去不等于“必然瞬间动作”，过去进行不等于“必然被打断”；灯灭后也许继续布置，只是句子尚未说明。

改变形式会改变关系。When the visitor arrived, I checked the list 通常把核对写成到达时或随后的一项行动；When the visitor arrived, I was checking the list 把核对写成那时已展开的背景。两句都可能符合不同情境，不能只看到 arrived 就强迫另一句一定进行。

两个同时展开的活动可以都用进行：While Jo was drawing, Ava was cutting paper。过去进行也可描述一段阶段，如 We were using the small classroom that week，不要求另一个事件“打断”才成立。是否需要强调过程由叙事焦点决定，而不是由活动长短单独决定。

### C · when/while 表达关系而非锁定时态

when 通常指出某个时候或事件，后面的谓语可按实际焦点选择；while 常突出一段同时发生的范围，常和进行活动搭配，却不是只有 was/were doing 才合法。While she lived abroad, she visited many museums 可用简单过去概括一段居住期间。本课把该例作为边界，不把 while 变成机械时态开关。

否定是在 was/were 后加 not：She wasn't waiting；They weren't listening。疑问把 be 放主语前：Were you listening?What was she doing?短答保留 was/were：Yes, I was；No, she wasn't。不能用 did 后接 doing 形成 Did you waiting?，因为这里已经选择进行结构。

状态用法仍通常采用简单形式：I knew the route；The box belonged to Jo。过去观察点不使 know 自动可以进行。I was having lunch 则是 have 的活动义，与第 17 课的意义判断一致；The food tasted good 可描述过去性质，The cook was tasting it 描述主动品尝。

### D · 叙述顺序要让读者复原

写一次意外发现，先给过去地点和活动，再加所看到、听到或发生的一件事，最后说明后续。例如 At five, we were closing the display. A visitor noticed a missing label. We checked the shelf。第一句背景并不自动保证第二事件同时发生，必要时用 when 把关系连接明确；不要把自己知道但没写出的先后当作读者也知道。

表达“某项工作花了整个上午”可以选择过去进行突出过程，也可以简单过去报告那段工作，具体取决于上下文。We worked all morning 不是因为时间长就错；We were working all morning 也可以自然描述过程。公平的选择题需要说明焦点或时间关系，不能只给 all morning 让学生猜唯一。

复查时标一条过去主线，再标正在展开的背景及同时活动。每个进行句检查 was/were、-ing 及主语核心；每个简单过去句检查过去词形。请同伴复述“事件发生时谁已在做什么”，若答案不同就补明确关系，而不是换更多复杂时态。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| At nine, she was painting. / At nine, she started painting. | 九点她在画画。／九点她开始画。 | 过程观察与开始事件。 |
| We were waiting when the doors opened. / The doors opened, and we waited. | 门开时我们已在等。／门开后我们等候。 | 形式和顺序改变时间关系。 |
| When Jo arrived, I was cooking. / When Jo arrived, I cooked. | 乔到时我在做饭。／乔到时我做了饭。 | 当时背景与随后行动的通常理解。 |
| While I was reading, Kai was drawing. | 我阅读期间凯在绘画。 | 两项过程重叠，不要求短事件。 |
| They weren't listening. / Were they listening? | 他们当时没在听。／当时在听吗？ | 否定与疑问沿过去 be 路线。 |
| I knew the answer then. / I was checking it then. | 那时我知道答案。／那时我在核对答案。 | 状态简单与活动进行。 |
| We worked all morning. / We were working all morning. | 整个上午工作了。／整个上午一直在工作。 | 都可成立，后者更突出过程；时长不定唯一。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| She were carrying a chair. | She was carrying a chair. | she 配 was。 |
| They was worked at four.（本意当时在工作） | They were working at four. | 复数 were＋doing 构成主动过去进程。 |
| Did you waiting? | Were you waiting? | 进行问句由过去 be 处理。 |
| I was knowing the answer. | I knew the answer. | 普通 know 状态义通常简单过去。 |

### 边界与使用选择

过去进行不必被打断，也不自动说明最后没完成；简单过去可报告长活动。when/while 不是无条件时态标记。状态与活动义仍分别判断，叙事中两种形式都可能合理时应解释焦点，不把一种表达误判为唯一。

### 学完后怎样检查自己

用四句写一次过去发现，交代观察点、当时进程、主要事件及后续行动。画出同时与先后箭头，再请同伴复述。延迟复习换成一次排队或旅行经历，避免只用电话响的旧模式。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Past continuous and past simple](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/past-continuous-past-simple?page=5)：核验过去背景进程与主要事件搭配，when/while要按实际关系判断，而非按连词机械锁定时态。
- [Cambridge English Grammar Today：Past continuous](https://dictionary.cambridge.org/uk/grammar/british-grammar/past-continuous-i-was-working)：核验was/were＋-ing、过去观察点、背景、临时重复及明确长时段；过去进行无需另一个打断事件才能成立。`,practice:[{id:`gc19-p1`,prompt:`填：At three yesterday, we ___ cutting paper. (was/were)`,reference:`were`,explanation:`we 复数，过去过程用 were＋doing。`,criteria:[`were cutting`]},{id:`gc19-p2`,prompt:`改正 She was writes at eight。`,reference:`She was writing at eight.`,explanation:`was 后活动-ing，不保留现在-s。`,criteria:[`was writing`]},{id:`gc19-p3`,prompt:`否定 They were watching the screen。`,reference:`They weren't watching the screen.`,explanation:`过去 be 后 not，watching 保留。`,criteria:[`weren't watching`]},{id:`gc19-p4`,prompt:`问对方当时是否在等车。`,reference:`Were you waiting for the bus?`,explanation:`进行问句 be 前置，waiting 活动保留。`,criteria:[`Were you waiting`]},{id:`gc19-p5`,prompt:`客人到时你已在整理，用 tidy 连接两事。`,reference:`I was tidying when the visitor arrived.`,explanation:`活动跨过到达观察点，arrived 主要事件。`,criteria:[`was tidying`,`arrived`]},{id:`gc19-p6`,prompt:`解释 When I arrived, they were leaving 是否证明他们早已走远。`,reference:`不证明；那时正在离开，不是早已离开。`,explanation:`过程与此前完成关系不同。`,criteria:[`当时过程`,`非早已完成`]},{id:`gc19-p7`,prompt:`写两人同时活动：一人读、一人写。`,reference:`While Jo was reading, Mia was writing.`,explanation:`两个过程可重叠，都用过去进行。`,criteria:[`两个 was/were doing`,`同时关系`]},{id:`gc19-p8`,prompt:`all morning 是否强制过去进行？给两种合理句。`,reference:`不是：We worked all morning. We were working all morning.`,explanation:`时长本身不能代替视角选择。`,criteria:[`两种正确形式`,`说明焦点`]}],verification:[{id:`gc19-v1`,prompt:`填：The driver ___ waiting when we came. (was/were)`,reference:`was`,explanation:`driver 单数，came 为过去观察事件。`,criteria:[`was waiting`],skill:`structure`,critical:!1},{id:`gc19-v2`,prompt:`改正 Were she talking to the guide?`,reference:`Was she talking to the guide?`,explanation:`she 配 was，talking 保留。`,criteria:[`Was she talking`],skill:`transformation`,critical:!0},{id:`gc19-v3`,prompt:`改正 Did the children playing outside at noon?`,reference:`Were the children playing outside at noon?`,explanation:`进行结构用过去 be 疑问。`,criteria:[`Were`,`playing`],skill:`transformation`,critical:!0},{id:`gc19-v4`,prompt:`The lights went out 时 we were working 是否必然停止工作？`,reference:`不必然；只报告灯灭时活动在进行。`,explanation:`是否停止需更多叙事证据。`,criteria:[`不必然`,`背景关系`],skill:`meaning`,critical:!1},{id:`gc19-v5`,prompt:`为一次排队经历写两句：某过去时刻正在等；工作人员打开门。用 when 明确关系。`,reference:`We were waiting at nine. We were still waiting when the assistant opened the door.`,explanation:`第一句建立过去观察点，第二句用 when 把仍在等候的背景与开门事件连接；参考严格提供两句。`,criteria:[`两句完整表达`,`过去观察点`,`were waiting`,`opened`,`时间关系明确`],skill:`expression`,critical:!0},{id:`gc19-v6`,prompt:`同一到达事件写两种版本：到达时你已在收拾；到达后你开始收拾，解释差别。`,reference:`When she arrived, I was packing. When she arrived, I started packing.`,explanation:`第二句明确 started 避免含糊；焦点与顺序不同。`,criteria:[`背景进行`,`开始事件过去`,`意义解释`],skill:`expression`,critical:!0}],review:[{id:`gc19-r1`,prompt:`隔一天：将 We were moving 变疑问和否定。`,reference:`Were we moving? We weren't moving.`,explanation:`过去 be 处理两种句型。`,criteria:[`Were we`,`weren't moving`]},{id:`gc19-r2`,prompt:`隔三天：用状态 know 与活动 check 报告过去情况。`,reference:`I knew the name. I was checking the spelling.`,explanation:`状态通常简单，活动可进行。`,criteria:[`knew`,`was checking`]},{id:`gc19-r3`,prompt:`隔一周：写两项过去同时活动，不放短事件。`,reference:`While one team was cleaning, the other team was sorting books.`,explanation:`进行不必依靠打断。`,criteria:[`两项进程`,`同时关系`,`主语 be 一致`]}],sources:[{title:`British Council LearnEnglish：Past continuous and past simple`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2/past-continuous-past-simple?page=5`,supports:`核验过去背景进程与主要事件搭配，when/while要按实际关系判断，而非按连词机械锁定时态`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Past continuous`,url:`https://dictionary.cambridge.org/uk/grammar/british-grammar/past-continuous-i-was-working`,supports:`核验was/were＋-ing、过去观察点、背景、临时重复及明确长时段；过去进行无需另一个打断事件才能成立`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`过去进行与一般过去`,module:`时间与动作状态`,moduleOrder:3,track:`basic`},{number:20,objectives:[`用 have/has＋过去分词从现在回看经历、结果或延续状态，并解释当前参照。`,`区分完成数量、持续状态和持续活动，正确处理 for/since 及常见动词义。`,`用现在完成与现在完成进行描述不同焦点，不将“完成”误解为所有事情结束。`],summary:`用 have/has＋过去分词从现在回看经历、结果或延续状态，并解释当前参照。`,prerequisites:[14,16,19],body:`### 学习目标

1. 用 have/has＋过去分词从现在回看经历、结果或延续状态，并解释当前参照。
2. 区分完成数量、持续状态和持续活动，正确处理 for/since 及常见动词义。
3. 用现在完成与现在完成进行描述不同焦点，不将“完成”误解为所有事情结束。

### 先检查前置知识

先学：第 14 课、第 16 课、第 19 课。先独立回答下面两题，再阅读本节的核对提示。

1. 把“写”用于昨天事件，写 write 过去式；它是否自动也是过去分词？

核对：wrote；过去式与分词不总同形，本课学习 written。若做错，回到第 14 课并进入本课词形部分。

2. 比较 I know the answer 与 I am checking the answer，哪一个是普通状态？

核对：know 表示知道状态；checking 表示主动活动。若做错，回到第 17 课状态与活动义。

词汇支持：finish 完成；repair 修理；visit 参观；recently 最近；so far 到目前为止；since 自从；for 持续；result 结果。

### A · 完成结构把过去与现在联系起来

现在完成以现在为参照向前回看，形式是 have/has＋过去分词：I have finished the list；She has finished the list。动作可能发生在过去，但说话者正在报告现在已有的结果、截至现在的经历或延续情况。它不是一般过去式前加 have，也不是把中文所有“了”翻成同一个形式。

常见焦点有三类。I've lost my card 可以说明现在找不到卡；I've tried pottery 可以报告截至现在已有尝试经历；I've known Jo for years 报告认识状态一直延续。第三句并不表示认识已经结束，所以“完成时就是动作完成了”不足以解释用法。判断之前先指出现在参照和过去信息的联系。

明确单次事件发生在 yesterday、in 2021 等已结束日期时，通常用一般过去；下一课会专门比较。这里先不为结果硬加过去日期：I have finished it. I finished it yesterday 把当前结果与具体日期分在不同参照句里。现在完成也不保证影响永久持续，后续事情可以改变当前结果。

### B · have/has 与分词组成完整谓语

I/you/we/they 配 have，he/she/it 配 has，后面的分词不随人称变化。规则动词过去分词常与-ed 过去式同形，如 worked、cleaned；不规则形式需分别记：write—wrote—written，see—saw—seen，take—took—taken，go—went—gone，do—did—done。不能写 have wrote 或 has went。

否定在 have/has 后加 not：She hasn't replied。疑问将 have/has 放到主语前：Have they arrived?What has she written?短答保留对应助动词：Yes, they have；No, she hasn't，不另用 did。I have a notebook 中的 have 是拥有动词，I have written 中的 have 是助动词，角色不同，不能把两者问句混用。

been 是 be 的分词，在 have been to 常表达去过并回来；have gone to 在询问当前去向时通常表示去了尚未回来。是否回来仍结合语境，不把所有含 gone 句强译成主语永远不在。这类表达作为完整词块学习，核心验收同时检验分词与所说经历。

### C · 持续状态、活动与 for/since

for 常引出时长：for two years；since 常引出起点：since May。两者都可说明截至现在的范围，但 for 本身不只属于完成形式，I lived there for two years 也合法报告过去一段。所以先确定状态是否连到现在，再选结构，不能见 for 就强行完成进行。

持续状态通常用现在完成简单形式：I have owned this camera for two years；We have known each other since primary school。buy 是购入事件，不能用 I have bought this camera for two years 表达持续拥有；应换成 had/owned 这一可持续状态。某些中文“来、去、买”表达延续含义时，英语需要换词义而不是只加 for。

现在完成进行用 have/has been＋doing，常突出持续或近期反复的活动：I have been practising for half an hour。它可以描述仍在继续，也可描述刚停止但现在留有迹象的活动，如鞋子很泥泞说明刚一直走路。不能把“进行”解释为一定此刻没停，也不把瞬间完成的单次 finish 硬拉成长过程。

### D · 结果数量与过程焦点可重叠

I've repaired two chairs 报告已修好的数量；I've been repairing chairs 报告近期修理活动，不保证已经修好哪两把。若题目要清楚给出完成数量，简单完成通常更适合；若重点是持续多久、最近在忙什么，完成进行更常见。但这不是 how many/how long 两类词绝不允许其他结构的机械分工。

持续居住或工作有时两种形式都自然：I've lived here for a year；I've been living here for a year。后者可更突出过程或阶段，前者也能表示仍在持续。普通 know、own 等状态义通常不用完成进行；重复听到某些声音等特殊用法可能进行，需结合明确意义，不能从状态词名单推出所有语境唯一答案。

just、already、yet、ever、never 常见于这类表达，但不是自动选时态的按钮。英式英语在部分近期结果语境偏好现在完成，美式英语可使用一般过去；本课指定完成形式时说明练习焦点，开放表达则检查意义是否合理，不把地区差异当基础语法错误。

### E · 进度汇报要让人知道已有与在做什么

用三句项目汇报：We have made four labels. We have been designing a new sign. We have had this printer since March。读者分别得到已完成数量、当前阶段活动和持续拥有状态。若只写 We have been making four labels，不能同样明确保证四张已经全部完成；表达任务进度时需保留所要报告的信息。

核对先画现在参照点，再给每句标结果、经历、持续状态或持续活动，最后查 have/has 和分词/been＋doing。请同伴判断哪些已经计入成果、哪些仍只报告活动，若理解不同就补 finished、so far 等明确范围。延迟复习换一项新项目，不背“刷墙”情境的答案。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| I've lost my badge. / I lost my badge on Monday. | 我现在遗失徽章。／我周一丢了徽章。 | 当前结果联系与明确过去日期。 |
| She has written three reports. / She has been writing reports. | 她已写完三份报告。／她近期一直写报告。 | 完成数量与活动焦点，后者不保证三份。 |
| We have known Jo for years. / We have been meeting Jo recently. | 认识乔多年。／最近反复见乔。 | 认识状态与反复活动。 |
| I have owned it since May. / I bought it in May. | 从五月一直拥有它。／五月买了它。 | 延续状态与购入事件，词义和参照都不同。 |
| She has been to the museum. / She has gone to the museum. | 她去过博物馆。／她去博物馆了。 | 常见经历回来与当前去了未归的语境。 |
| I've lived here for a year. / I've been living here for a year. | 在这里住满一年。／一直在这里住一年。 | 都可持续到现在，后者突出阶段过程。 |
| I've been running; I'm tired. / I've finished the race. | 我刚一直跑，很累。／我已经跑完比赛。 | 活动可能刚停；完成比赛是明确结果。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| She have completed it. | She has completed it. | she 配 has，分词不变。 |
| Have you wrote the note? | Have you written the note? | 完成结构需要分词 written。 |
| I have been owning it for years. | I have owned it for years. | 普通拥有状态用简单完成。 |
| I have bought this bike for three years.（持续拥有） | I have had/owned this bike for three years. | buy 购入事件不直接表达三年拥有状态。 |

### 边界与使用选择

现在完成可表持续状态和经历，不等同全部结束。完成进行可仍继续或刚停止；live/work 等有时两种都自然。for/since 说明范围但不单独选时态；just/already/yet 的英美差异不在开放题中强判错，单次过去日期对比下一课再集中练。

### 学完后怎样检查自己

给真实学习项目写已完成数量、近期活动和持续拥有/认识状态各一句，圈现在参照、have/has 及分词或 been＋doing。请同伴判断哪些已成为结果，再换项目重写；对瞬间购入硬接时长的错误先改词义。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Present perfect](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-perfect)：核验have/has＋分词、经历/当前结果/持续状态、have been/gone、延续到现在及状态词通常不进行。
- [British Council LearnEnglish：Present perfect simple and continuous](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect-simple-continuous?page=1)：核验结果/数量与活动/时长焦点、当前痕迹与可刚停活动、持续状态及临时反复活动；不等同完成=结束。
- [Cambridge English Grammar Today：Present perfect simple or continuous](https://dictionary.cambridge.org/it/grammatica/grammatica-britannico/present-perfect-continuous)：读取该官方页面的英文规则正文：核验live两形式可同义、单次start/finish通常不用完成进行、普通know状态限制及感觉动词特殊进行义。`,practice:[{id:`gc20-p1`,prompt:`填：The guide ___ prepared the maps. (have/has)`,reference:`has`,explanation:`guide 单数，have/has 承担现在限定形式。`,criteria:[`has prepared`]},{id:`gc20-p2`,prompt:`写 write、take、see 的过去分词。`,reference:`written; taken; seen`,explanation:`不要使用 wrote/took/saw 过去式。`,criteria:[`三个分词正确`]},{id:`gc20-p3`,prompt:`将 They have arrived 变疑问和否定短答。`,reference:`Have they arrived? No, they haven't.`,explanation:`have 处理疑问和短答，不引入 did。`,criteria:[`Have they`,`haven't`]},{id:`gc20-p4`,prompt:`填 for/since：___ two hours；___ noon。`,reference:`for two hours; since noon`,explanation:`时长与起点不同。`,criteria:[`for 时长`,`since 起点`]},{id:`gc20-p5`,prompt:`按持续拥有改正 I have bought the tablet for a year。`,reference:`I have had/owned the tablet for a year.`,explanation:`购入事件不能直接表达一直拥有。`,criteria:[`had/owned`,`时长保留`]},{id:`gc20-p6`,prompt:`要报告四张已修好桌子，用 repair 写句。`,reference:`We have repaired four tables.`,explanation:`结果和数量明确，简单完成更适合。`,criteria:[`have repaired`,`four tables`]},{id:`gc20-p7`,prompt:`最近一直练歌，重点活动及半小时持续，写句。`,reference:`I have been practising a song for half an hour.`,explanation:`活动焦点用 have been＋doing；practicing 拼写也可。`,criteria:[`have been practising/practicing`,`for 半小时`]},{id:`gc20-p8`,prompt:`I've been painting 是否保证此刻仍在画？说明。`,reference:`不保证，可能刚停止，当前仍有活动联系。`,explanation:`完成进行聚焦近期过程，不等于此刻必须继续。`,criteria:[`可能刚停`,`当前联系`]}],verification:[{id:`gc20-v1`,prompt:`填：She has ___ (do) the task。`,reference:`done`,explanation:`完成结构需 do 分词 done，非 did。`,criteria:[`done`],skill:`structure`,critical:!1},{id:`gc20-v2`,prompt:`改正 Has the visitors arrived?`,reference:`Have the visitors arrived?`,explanation:`复数 visitors 配 have。`,criteria:[`Have`,`arrived`],skill:`transformation`,critical:!0},{id:`gc20-v3`,prompt:`持续认识状态，改正 We have been knowing her since May。`,reference:`We have known her since May.`,explanation:`know 普通状态义通常不用进行。`,criteria:[`have known`,`since May`],skill:`transformation`,critical:!0},{id:`gc20-v4`,prompt:`I've lived here 与 I've been living here for a year 能都指持续至今吗？`,reference:`能；两者都可持续，后者更突出阶段过程。`,explanation:`simple 不等于已结束，continuous 不等于唯一延续。`,criteria:[`承认都可`,`焦点解释`],skill:`meaning`,critical:!1},{id:`gc20-v5`,prompt:`为一次志愿者项目写已完成五份地图和最近持续设计标志两句。词汇：produce；design；sign。`,reference:`We have produced five maps. We have been designing a sign recently.`,explanation:`新任务区分可计数成果与近期活动。`,criteria:[`完成五份`,`完成进行活动`,`形式完整`],skill:`expression`,critical:!0},{id:`gc20-v6`,prompt:`写你从某过去年份起认识某人至今，再问对方是否有过一种旅行经历。`,reference:`I have known Mei since 2020. Have you ever travelled by boat?`,explanation:`状态延续与经历问题均从现在回看；姓名年份可换。`,criteria:[`have known+since`,`Have you ever+分词`,`意义明确`],skill:`expression`,critical:!0}],review:[{id:`gc20-r1`,prompt:`隔一天：选择分词：has ___ (went/gone)。`,reference:`gone`,explanation:`have/has 后不能用 went 过去式。`,criteria:[`gone`]},{id:`gc20-r2`,prompt:`隔三天：用新的持续状态写 for/since 表达，说明类型。`,reference:`I have owned this guitar for two years；for 引时长。`,explanation:`可换 known/had 等自然状态。`,criteria:[`完成状态`,`for/since 匹配`,`解释范围`]},{id:`gc20-r3`,prompt:`隔一周：用同一活动写已完成数量与近期过程，说明焦点。`,reference:`I've baked two cakes. I've been baking all morning.`,explanation:`前者成果数量，后者过程；后者可已暂停。`,criteria:[`数量简单完成`,`活动完成进行`,`焦点说明`]}],sources:[{title:`British Council LearnEnglish：Present perfect`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-perfect`,supports:`核验have/has＋分词、经历/当前结果/持续状态、have been/gone、延续到现在及状态词通常不进行`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council LearnEnglish：Present perfect simple and continuous`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/present-perfect-simple-continuous?page=1`,supports:`核验结果/数量与活动/时长焦点、当前痕迹与可刚停活动、持续状态及临时反复活动；不等同完成=结束`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Present perfect simple or continuous`,url:`https://dictionary.cambridge.org/it/grammatica/grammatica-britannico/present-perfect-continuous`,supports:`读取该官方页面的英文规则正文：核验live两形式可同义、单次start/finish通常不用完成进行、普通know状态限制及感觉动词特殊进行义`,accessed:`2026-10-03`,method:`已直接读取官方英文规则正文；复核时直连返回403`}],revision:`official-reference-2026-10-03`,title:`现在完成及完成进行`,module:`时间与动作状态`,moduleOrder:3,track:`basic`},{number:21,objectives:[`区分已结束的过去时段与截至现在的参照范围`,`把经历提问自然转入具体事件叙述`,`在开放时间语境中说明两种时态的选择`],summary:`区分已结束的过去时段与截至现在的参照范围`,prerequisites:[14,15,20],body:`### 学习目标

1. 区分已结束的过去时段与截至现在的参照范围
2. 把经历提问自然转入具体事件叙述
3. 在开放时间语境中说明两种时态的选择

### 先检查前置知识

先学：第 14 课、第 15 课、第 20 课。先独立回答下面两题，再阅读本节的核对提示。

1. “昨天看见”中 see 怎样变化？

核对：saw，一般过去报告过去事件。若做错，回到第 14 课。

2. have seen 中的 seen 是什么形式？

核对：过去分词，完成式需要它。若做错，回到第 20 课。

词汇支持：yesterday 昨天；last weekend 上周末；this week 本周；ever 曾经；when 何时；recently 最近；so far 迄今。

### A · 参照范围比时间关键词重要

一般过去把信息放在过去框架，如 I saw the show last night；现在完成从现在回看，如 I have seen the show。两句都涉及过去发生的观看，区别不在“一个过去一个不是过去”，而在说话者如何定位。第二句报告截至现在的已有经历；第一句报告昨晚那次事件。

明确单次事件配已结束日期通常用一般过去：in 2019、yesterday、an hour ago。现在完成常用于截至现在的累计、结果或延续，若要补具体发生日期，可另起过去句。不能写 I have visited it last year 来完成普通日期叙述，也不能把 Every past event affects now 变成所有句子都用完成的理由。

一般过去也可能带来当前后果：I lost my card yesterday. I can't enter now 符合情理，语法没有禁止过去事件影响现在。现在完成强调当前联系，而不是独家拥有现实因果。核对时先说明事件被放在什么范围，再检查助动词与词形，避免只背“有影响就完成”。

### B · 经历提问可自然转入具体故事

Have you ever visited an island?先问截至现在有没有经历。Yes, I have. I went there last summer 随后展开某次事件，用一般过去很自然。再问 When did you go?Who did you travel with?问题锁定那次已经定位的旅行，不继续硬用 Have you gone last summer?

时态切换来自参照改变，不等于段落不统一。第一句提供经历总览，第二句开始具体过去主线，后面可用过去进行补背景：I was looking at the sea when the boat arrived。过去背景形式已在第 19 课学过；写经历对话时只在确有进程关系时使用，不为了凑时态而制造不真实事件。

when 也不是永远禁止完成问句。例如询问截至现在多次行为出现过哪些时刻有其他语境；本课单次具体日期提问用 did 路线，题目会说明所问是那一次。避免把可教的典型路径扩大为词汇永远只能配某一个时态。

### C · 持续至今与已经结束的阶段

I have worked here for two years 通常表示工作与现在仍有联系，I worked there for two years 常报告过去一段已结束的工作。for 都是时长，真正区别来自参照框架，而不是这个介词自动决定完成式。若需要清楚告诉读者是否仍在，应补 still、now、until 去年等符合已学形式的时间信息。

since＋起点在持续至今状态里常与现在完成：I have known her since 2022。普通现在式 I know her since 2022 不自然完成这种延续表达。单次购入与持续拥有要像第 20 课一样分开：I bought it in May；I have owned it since May。不能为选择时态保留与时长不相容的事件词义。

状态简单完成与活动完成进行也可能都连到现在。We have lived here for a year 与 We have been living here for a year 均可能自然，第 21 课主要对比过去框架与现在框架，不能忘掉第 20 课已确认的合法变体。事实未交代到现在是否继续时，答案应说明需要什么额外信息，而不是猜唯一。

### D · 开放时段、地区与交流焦点

today、this week、this year 在日历上可能尚未结束，但不强迫唯一时态。I've answered five messages so far today 突出迄今累计；I answered five messages before lunch today 报告今天某次已完成的事件。说 I didn't have lunch today 时，说话人可能把正常午饭时段看作已过去；I haven't had lunch today 则把“到现在还没吃”作为焦点。

just、already、yet 在英式英语常与现在完成搭配，美式英语在不少近期结果语境可用一般过去。开放题只要语义与场景一致，就不因为学生选择某地区的自然表达而判错。对比训练要求使用完成形式时须写清训练目标，不能假装所有真实交流都有同一唯一答案。

检查一段回复时给每句写“那次过去”“截至现在”“延续至今”之一，再查是否有冲突日期。若一般过去与现在完成都自然，应比较它们突出什么。能从开放经历转到日期故事，并在结束后回到当前结果，才说明理解参照，不能靠一张关键词表证明掌握。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| I met her on Tuesday. / I have met her before. | 周二见过她。／以前见过她。 | 单次过去日期与截至现在经历。 |
| Have you ever sailed? / When did you sail? | 曾经航行过吗？／那次何时航行？ | 开放经历转具体事件。 |
| She worked there for a year. / She has worked here for a year. | 在那里工作过一年。／在这里已工作一年。 | 过去阶段与当前联系。 |
| I bought it in June. / I have had it since June. | 六月买的。／六月起一直拥有。 | 购入事件与持续状态。 |
| I've written two notes so far today. / I wrote two notes before lunch today. | 今天到现在写了两张便条。／今天午饭前写了两张。 | 同是 today，累计焦点与具体过去范围不同。 |
| I haven't seen Jo this week. / I didn't see Jo last week. | 本周至今未见乔。／上周未见乔。 | 开放现在范围与已结束过去范围。 |
| I've just sent it. / I just sent it. | 刚发送。／刚发送。 | 近期结果场景中地区习惯可不同，不能仅凭 just 判错。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| I have called yesterday. | I called yesterday. | 明确过去日期通常一般过去。 |
| When did she arrived? | When did she arrive? | did 后原形，不能保留过去词尾。 |
| I live here since 2021.（持续至今） | I have lived here since 2021. | 现在完成连接起点与现在。 |
| I have went there once. | I have been/gone there once.（依语境） | went 不是分词；经历常用 been，gone 需结合所说去向。 |

### 边界与使用选择

today 不强迫现在完成，just/already/yet 也要兼顾地区与焦点。死亡或已结束生涯并不自动禁止任何相关完成表达，应看完整参照范围；本课不靠人物生死设机械规则。特殊叙事现在及新闻标题另有约定，不与普通经历对话混成唯一答案题。

### 学完后怎样检查自己

写一段四轮经历问答：有没有、那次何时、当时做什么、现在得到什么。给每句标参照范围并核对分词或 did 原形。再写 today 的两种合理表达，说明分别报告过去事件和截至现在累计。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Present perfect](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-perfect)：核验已结束过去时间与截至现在范围，since延续状态及经历问题；进入单次过去日期时改一般过去。
- [Cambridge English Grammar Today：Past simple or present perfect](https://dictionary.cambridge.org/us/grammar/british-grammar/past-simple-present-perfect)：核验明确过去日期与到现在范围，today可因午饭时段/焦点选择过去或完成，for时长不独自决定参照。
- [Cambridge English Grammar Today：British and American English](https://dictionary.cambridge.org/pl/grammar/british-grammar/tense-forms)：核验美式英语在某些already/yet近期结果语境采用一般过去而英式常用现在完成，不将地区变体强判错误。`,practice:[{id:`gc21-p1`,prompt:`明确昨晚的观看，选 watched/have watched：I ___ it last night.`,reference:`watched`,explanation:`单次事件定位已结束过去日期。`,criteria:[`watched`]},{id:`gc21-p2`,prompt:`截至现在从未见鲸，填：I have never ___ (see) a whale.`,reference:`seen`,explanation:`现在完成需分词，经历范围到现在。`,criteria:[`seen`]},{id:`gc21-p3`,prompt:`改正 I have bought the ticket two hours ago。`,reference:`I bought the ticket two hours ago.`,explanation:`ago 定位过去；bought 已是正确过去式。`,criteria:[`去 have`,`保留 ago`]},{id:`gc21-p4`,prompt:`经历答 Yes, I have 后，问那次是什么时候。`,reference:`When did you go?`,explanation:`具体一次的时间用一般过去问题。`,criteria:[`When did`,`go 原形`]},{id:`gc21-p5`,prompt:`解释 for two years 为何不能独自选择时态。`,reference:`它只给时长，仍需知道是否过去阶段或延续至今。`,explanation:`两种参照都能配 for。`,criteria:[`时长`,`两种参照`]},{id:`gc21-p6`,prompt:`写从 2023 年住到现在。`,reference:`I have lived here since 2023.`,explanation:`持续状态连到现在，since 给起点。`,criteria:[`have lived`,`since 起点`]},{id:`gc21-p7`,prompt:`下午报告今天午饭前写过一封邮件，用一般过去。`,reference:`I wrote an email before lunch today.`,explanation:`具体过去活动范围虽在 today 内仍可过去。`,criteria:[`wrote`,`过去时间范围`]},{id:`gc21-p8`,prompt:`报告本周到现在修好四把椅子，要求现在完成。`,reference:`I have repaired four chairs so far this week.`,explanation:`数量累计与现在参照明确。`,criteria:[`have repaired`,`four chairs`,`so far`]}],verification:[{id:`gc21-v1`,prompt:`填过去日期事件：She ___ (take) it in 2020.`,reference:`took`,explanation:`单次过去日期不是现在经历范围。`,criteria:[`took`],skill:`structure`,critical:!1},{id:`gc21-v2`,prompt:`改正 Has he wrote it yet?`,reference:`Has he written it yet?`,explanation:`完成问题保留 has，分词 written。`,criteria:[`written`,`Has he`],skill:`transformation`,critical:!0},{id:`gc21-v3`,prompt:`改正 When did you went to the coast?`,reference:`When did you go to the coast?`,explanation:`did 后原形。`,criteria:[`did you go`],skill:`transformation`,critical:!0},{id:`gc21-v4`,prompt:`I did it today 是否一定错？说明。`,reference:`不一定，可报告今天某次过去事件；完成式可突出迄今范围。`,explanation:`日历仍开放不强迫每次陈述都完成。`,criteria:[`允许过去`,`解释两种焦点`],skill:`meaning`,critical:!1},{id:`gc21-v5`,prompt:`为新社团采访写已有的一项旅行经历，再交代其中一次过去日期和活动。`,reference:`I have visited a farm. I went there last May and helped with the vegetables.`,explanation:`新情境从经历转具体过去；经历与日期匹配。`,criteria:[`完成经历`,`过去日期`,`过去活动`],skill:`expression`,critical:!0},{id:`gc21-v6`,prompt:`写现在仍拥有一件物品及一次已结束的持有阶段，说明参照差别。`,reference:`I have had this camera for two years. I had another camera for a year before that.`,explanation:`持续至今与过去一段，for 并非时态决定词。`,criteria:[`have had 持续`,`had 过去阶段`,`解释范围`],skill:`expression`,critical:!0}],review:[{id:`gc21-r1`,prompt:`隔一天：用 ago 事件和 never 经历各写一句。`,reference:`I arrived an hour ago. I have never flown.`,explanation:`明确过去位置与至今经历。`,criteria:[`过去 ago`,`完成 never`]},{id:`gc21-r2`,prompt:`隔三天：从 Have you ever…转一个具体日期问题。`,reference:`Have you ever camped? When did you camp?`,explanation:`问题目的改变参照。`,criteria:[`完成经历`,`did+原形`]},{id:`gc21-r3`,prompt:`隔一周：用 this week 写两种合理选择并解释。`,reference:`I've read three chapters so far this week. I read one on Monday.`,explanation:`累计到现在与具体本周过去日期。`,criteria:[`两个形式准确`,`焦点解释`]}],sources:[{title:`British Council LearnEnglish：Present perfect`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/present-perfect`,supports:`核验已结束过去时间与截至现在范围，since延续状态及经历问题；进入单次过去日期时改一般过去`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Past simple or present perfect`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/past-simple-present-perfect`,supports:`核验明确过去日期与到现在范围，today可因午饭时段/焦点选择过去或完成，for时长不独自决定参照`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`},{title:`Cambridge English Grammar Today：British and American English`,url:`https://dictionary.cambridge.org/pl/grammar/british-grammar/tense-forms`,supports:`核验美式英语在某些already/yet近期结果语境采用一般过去而英式常用现在完成，不将地区变体强判错误`,accessed:`2026-10-03`,method:`官方页面正文`}],revision:`official-reference-2026-10-03`,title:`现在完成与一般过去`,module:`时间与动作状态`,moduleOrder:3,track:`basic`},{number:22,objectives:[`站在一个过去参照点，用过去完成与过去完成进行说明更早的结果、经历或持续活动。`,`区分未来观察点中的进行、未来截止时的完成及到时累计的活动时长。`,`用事件线组织多时态叙述，避免把所有先发生事件都机械改成过去完成。`],summary:`站在一个过去参照点，用过去完成与过去完成进行说明更早的结果、经历或持续活动。`,prerequisites:[14,15,18,19,20,21],body:`### 学习目标

1. 站在一个过去参照点，用过去完成与过去完成进行说明更早的结果、经历或持续活动。
2. 区分未来观察点中的进行、未来截止时的完成及到时累计的活动时长。
3. 用事件线组织多时态叙述，避免把所有先发生事件都机械改成过去完成。

### 先检查前置知识

先学：第 14 课、第 15 课、第 18 课、第 19 课、第 20 课、第 21 课。先独立回答下面两题，再阅读本节的核对提示。

1. had＋动词过去式能构成过去完成吗？写 go 的分词。

核对：需要过去分词；gone，不是 went。若做错，回到第 20 课分词结构。

2. 一般过去是否能叙述较长活动或按顺序发生的事情？

核对：能；过去进行与完成的选择取决于焦点及参照关系。若做错，回到第 14、19、21 课。

词汇支持：by 到……之前或时为止；by the time 到……时；before 在……之前；already 已经；reach 到达；leave 离开；deadline 截止时间。

### A · 从过去站点回看更早信息

过去完成形式是 had＋过去分词，所有主语都用 had：When we reached the gallery, the tour had started。reached 建立过去站点，had started 报告到这个站点之前已经开始的事。它不是“特别久以前”的时态，昨天两件事之间也能用；距离现在多远不是选择理由。

had 也承担否定与疑问：They hadn't arrived；Had they arrived?不再用 did 组合完成问题。分词仍依第 20 课：had written、had taken、had gone，不写 had wrote 或 Did they had gone。had 这个相同形式对所有主语使用，不能变成 has 或加第三人称-s。

过去参照可由前句建立，不一定必须在同一句出现两个过去动词：The room was empty. Everyone had gone home。读者已经站在看到空房间的过去点，因此更早离开有意义。完成结构还可报告截至过去点的经历或持续状态，不限于一次短动作。

### B · 顺序清楚时，别过度使用 had

按顺序讲 I unlocked the door, entered the room and switched on the light，一般过去通常足够。不能因为 unlock 最早就强制 had unlocked。过去完成常用于回看或补背景，解释某个过去情况；不是给一段故事最早的事件统一贴标签。

When Jo arrived, Kai left 通常把离开放在到达时或随后；When Jo arrived, Kai had left 通常表示到达之前已离开。两种故事的事件线不同，先确定事实再选形式。After Kai finished/had finished the task, he left 中 after 已经提示先后，两种形式都可能自然，完成形式额外突出先完成的关系。

before＋过去完成有时表示某事尚未做完或尚未来得及发生：They left before I had finished。不能仅看到 had 就推断“finish 肯定比 left 更早完成”，整个句子的否定或 before 关系必须一起理解。这类边界帮助避免词形正确却把故事顺序读反。

### C · 截至过去点的持续活动

过去完成进行形式是 had been＋doing：We had been waiting for forty minutes when the doors opened。从开门这个过去点回看，等候已经持续四十分钟。过去进行 We were waiting when the doors opened 只交代当时正在等，不同样明确此前持续多久；两者焦点不同。

普通状态仍常用简单完成：I had known the guide for years；We had owned the printer since March。不因为观察点在过去就能写 had been knowing。近期活动留下过去痕迹也可完成进行：The floor was wet. We had been cleaning。活动当时可刚停，也可继续，形式本身不保证一定在该点之后继续。

组织回忆可先给主线站点，再补更早信息；读者进入更早一段后，也可用一般过去展开细节，不需整段无限重复 had。核对时给每个完成句画一条“此前信息→过去参照”的箭头，箭头若没有合理端点，就重新问为什么使用完成结构。

### D · 未来观察点与完成界限

未来进行用 will be＋doing：At ten tomorrow, we will be sorting the donations。把镜头放到未来十点，活动预计正在展开。未来完成用 will have＋过去分词：By ten tomorrow, we will have sorted the donations。把未来十点作为完成界限，预计到时已有全部分类结果。at 与 by 辅助区分观察点和截止范围，但最终仍以意思为依据。

否定分别是 won't be sorting、won't have finished，疑问分别是 Will they be sorting?Will they have finished?will 后形式不随主语加-s，have 也不换 has。别写 will have finishing：未来完成需要分词；别写 will been working：未来进行需要 be 原形。

未来完成也可表达截至未来点的状态时长：By May, I will have owned this bike for a year。不一定必须是“完成一项工作”。普通未来时间从句常用现在形式，如 By the time you arrive, I will have finished；该从句规律在第 31 课系统学，本课只作带说明的拓展，不作为全部学生必须独立掌握的门槛。

### E · 未来完成进行是活动时长的延伸

will have been＋doing 从未来站点回看已经持续的活动：By June, we will have been rehearsing for three months。现在我们可以预测，到了六月那时，排练已有三个月。重点是活动累计时长，并不自动保证演出作品已经完成，也不保证六月以后会停止排练。它把已学完成与进行结合到未来参照，不能靠形式长度判断意义难度或完成程度。

By June, we will have finished the play 报告到时有完成结果；By June, we will have been preparing the play for three months 报告准备时长。二者可能同时都真，但互不替代。普通拥有或知道状态仍用未来完成简单形式，不要求硬写 will have been owning/knowing。

本课主体验收优先检查过去与未来参照逻辑、分词以及进行/结果焦点；未来完成进行提供明确讲解和可选延伸题，不强迫每篇基础叙事都塞入此长形式。写项目信息时先定结果、过程还是时长，再选最清楚的形式，避免为了展示语法而改变事实。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| When I arrived, the meeting started. / When I arrived, the meeting had started. | 我到时会议开始。／我到时会议已开始。 | 起点在到达时与此前开始不同。 |
| We had been waiting for an hour. / We were waiting at six. | 到那时已等一小时。／六点时正在等。 | 截至过去点累计时长与当时过程。 |
| After she finished, she left. / After she had finished, she left. | 完成后离开。／完成后离开。 | after 已说明顺序，两种可合理，完成突出关系。 |
| They left before I had finished. | 他们在我完成前离开。 | 不能见 had 就推断我已先完成；before 表达未及完成。 |
| At noon I'll be cooking. / By noon I'll have cooked the meal. | 中午时在做饭。／中午前会做好饭。 | 未来观察点的过程与截止完成结果。 |
| By Friday I'll have owned it for a year. / By Friday I'll have been using it for a year. | 到周五拥有一年。／到周五一直使用满一年。 | 状态简单完成与活动累计时长。 |
| We'll have finished the show. / We'll have been rehearsing for months. | 到时演出已完成。／到时已排练数月。 | 结果与活动时长不同，长形式不保证作品完成。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| She had went home. | She had gone home. | 过去完成需要分词 gone。 |
| Did they had finished? | Had they finished? | 完成问题由 had 前置，不混 did。 |
| By Sunday he will has finished. | By Sunday he will have finished. | will 后 have 原形，不按 he 变 has。 |
| By June I will have been knowing her for a year. | By June I will have known her for a year. | 普通 know 状态用完成简单形式。 |

### 边界与使用选择

过去完成需要合理过去参照，不要求两件事一定同句，也不要求所有先发生事都用 had。未来完成可表持续状态，未来完成进行突出活动时长不保证成品完成。时间从句仅作明确拓展；开放叙述优先准确事件线，允许自然的简单过去顺序表达。

### 学完后怎样检查自己

画一个过去参照点及更早背景，再画未来观察点和完成界限，各写一句。可选增加未来累计活动时长句，解释它不保证什么。让同伴仅靠文字重画事件线；若时间顺序不同，先改意义，再查 had/will 与分词。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Past perfect](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/past-perfect)：核验had＋分词、截至过去点的更早信息、顺序清楚的简单过去与before＋完成表示尚未完成的边界，非距离现在越远越需had。
- [British Council LearnEnglish：Past perfect reference](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-perfect)：核验had been＋-ing、截至过去点的持续状态/活动与更早结果；普通状态义仍采用简单完成。
- [British Council LearnEnglish：Future continuous and future perfect](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-continuous-future-perfect)：核验will be＋-ing未来观察点过程与will have＋分词未来截止结果/状态时长；仅依据机构规则正文，不用用户留言证明规则。
- [Cambridge English Grammar Today：Future perfect continuous](https://dictionary.cambridge.org/uk/grammar/british-grammar/future-perfect-continuous)：核验will have been＋-ing，从未来参照回看活动累计时长。该页是第22课未来完成进行讲解、对照及可选原创延伸题的直接规则来源。`,practice:[{id:`gc22-p1`,prompt:`填：At nine we saw that the guide had ___ (leave).`,reference:`left`,explanation:`过去参照已建立，leave 分词 left。`,criteria:[`had left`]},{id:`gc22-p2`,prompt:`把 They had completed it 变否定和疑问。`,reference:`They hadn't completed it. Had they completed it?`,explanation:`had 处理否定和前置。`,criteria:[`hadn't completed`,`Had they`]},{id:`gc22-p3`,prompt:`两件按顺序的事：开箱、读标签，是否必须第一件 had？`,reference:`不用：I opened the box and read the label.`,explanation:`顺序清楚一般过去即可。`,criteria:[`不强制 had`,`过去顺序`]},{id:`gc22-p4`,prompt:`说明 When I arrived, Jo had left 的先后。`,reference:`Jo 离开在我到达之前。`,explanation:`arrived 是过去站点，had left 回看更早。`,criteria:[`离开更早`,`过去参照`]},{id:`gc22-p5`,prompt:`到开门时已等半小时，突出活动时长。`,reference:`We had been waiting for half an hour when the doors opened.`,explanation:`had been＋doing 回看截至过去点的过程。`,criteria:[`had been waiting`,`半小时时长`]},{id:`gc22-p6`,prompt:`明日两点在排练，用未来进行。`,reference:`We will be rehearsing at two tomorrow.`,explanation:`未来观察点中过程。`,criteria:[`will be rehearsing`,`未来时间`]},{id:`gc22-p7`,prompt:`到周日已寄出文件，用未来完成。`,reference:`I will have sent the file by Sunday.`,explanation:`will have＋分词，截止结果。`,criteria:[`will have sent`,`by Sunday`]},{id:`gc22-p8`,prompt:`可选延伸：到七月排练满两月，用未来完成进行，并说明不保证成品完成。`,reference:`By July, we will have been rehearsing for two months；不保证作品已完成。`,explanation:`这是本课可选延伸；will have been＋doing 强调累计活动时长，不报告最终结果。`,criteria:[`will have been rehearsing`,`for 两月`,`不保证成品`]}],verification:[{id:`gc22-v1`,prompt:`填：She had ___ (write) the names before we checked them。`,reference:`written`,explanation:`had 后分词，非 wrote。`,criteria:[`written`],skill:`structure`,critical:!1},{id:`gc22-v2`,prompt:`改正 Had the visitors saw the notice?`,reference:`Had the visitors seen the notice?`,explanation:`过去完成问题需要 seen。`,criteria:[`Had…seen`],skill:`transformation`,critical:!0},{id:`gc22-v3`,prompt:`改正 By Friday we will have finishing the task。`,reference:`By Friday we will have finished the task.`,explanation:`未来完成后分词，不是-ing。`,criteria:[`will have finished`],skill:`transformation`,critical:!0},{id:`gc22-v4`,prompt:`We left before Jo had finished 是否表示 Jo 肯定先完成？`,reference:`不是；我们离开时 Jo 尚未完成。`,explanation:`before 的整句关系不能被 had 表面形式替代。`,criteria:[`尚未完成`,`before 关系`],skill:`meaning`,critical:!1},{id:`gc22-v5`,prompt:`给定 7 点工作人员离开，8 点你到展厅，写到达时他们已走；不照搬课堂人物。`,reference:`When I reached the exhibition hall at eight, the staff had left at seven.`,explanation:`过去参照与更早事件清楚，动词分词正确。`,criteria:[`到达过去点`,`had left`,`7 先 8 后`],skill:`expression`,critical:!0},{id:`gc22-v6`,prompt:`为一个新项目写明日某时正在做什么和到周末已完成什么两句，解释焦点。`,reference:`At ten tomorrow, I'll be designing the poster. By Sunday, I'll have finished the design.`,explanation:`未来过程与截止结果不同；其他合理项目可。`,criteria:[`will be doing`,`will have done`,`未来点明确`,`焦点说明`],skill:`expression`,critical:!0}],review:[{id:`gc22-r1`,prompt:`隔一天：给一条顺序过去叙述，不强加 had。`,reference:`I packed the bag and locked the door.`,explanation:`两事依次报告，普通过去足够。`,criteria:[`过去式`,`顺序清楚`]},{id:`gc22-r2`,prompt:`隔三天：换一个更早原因与过去情况，使用过去完成。`,reference:`The hall was dark. The lights had gone out.`,explanation:`过去状态提供站点，had gone out 说明此前原因。`,criteria:[`过去站点`,`had+分词`]},{id:`gc22-r3`,prompt:`隔一周：写未来累计活动时长的可选延伸，或先写未来过程与完成对照。`,reference:`By August, I'll have been learning guitar for six months. / At eight I'll be practising; by nine I'll have finished.`,explanation:`按当前掌握层次选路径，须解释时长或过程/结果。`,criteria:[`合理未来参照`,`完整形式`,`解释焦点`]}],task:[{id:`gc22-task1`,prompt:`写 7—9 句社团展览进度：一条截至现在成果；昨天一段活动背景；发生的一项主要事件；该过去点之前的背景；后续行动；明日安排；未来某时的过程及未来截止结果。不需要每句都用不同结构，可选再加未来累计时长。`,reference:`We have prepared six posters. Yesterday we were arranging the display at four. A visitor asked about the opening time. Our leader had sent the invitations before the visitor arrived. We checked the timetable together. Tomorrow we are meeting the guide at nine. At ten we will be showing visitors around. By noon we will have checked all the labels.`,explanation:`八句依参照组织信息，不为凑时态制造矛盾；未来完成进行可选，不是必需。`,criteria:[`7—9 句`,`当前成果完成式`,`过去进行背景`,`主要过去事件`,`过去完成较早信息`,`后续行动`,`未来安排`,`未来过程与截止结果`,`事件线一致`]}],sources:[{title:`British Council LearnEnglish：Past perfect`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/past-perfect`,supports:`核验had＋分词、截至过去点的更早信息、顺序清楚的简单过去与before＋完成表示尚未完成的边界，非距离现在越远越需had`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council LearnEnglish：Past perfect reference`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/past-perfect`,supports:`核验had been＋-ing、截至过去点的持续状态/活动与更早结果；普通状态义仍采用简单完成`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council LearnEnglish：Future continuous and future perfect`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/future-continuous-future-perfect`,supports:`核验will be＋-ing未来观察点过程与will have＋分词未来截止结果/状态时长；仅依据机构规则正文，不用用户留言证明规则`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开受访问限制`},{title:`Cambridge English Grammar Today：Future perfect continuous`,url:`https://dictionary.cambridge.org/uk/grammar/british-grammar/future-perfect-continuous`,supports:`核验will have been＋-ing，从未来参照回看活动累计时长。该页是第22课未来完成进行讲解、对照及可选原创延伸题的直接规则来源`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文摘录；直接打开返回403`}],revision:`official-reference-2026-10-03`,title:`过去完成与未来参照`,module:`时间与动作状态`,moduleOrder:3,track:`basic`},{number:23,objectives:[`用修饰对象区分形容词、动作方式和整句评价`,`在不同动词框架中安排频率副词，读清否定范围`,`用 only 和频率信息表达可核对的学习习惯`],summary:`用修饰对象区分形容词、动作方式和整句评价`,prerequisites:[10,17,22],body:`### 学习目标

1. 用修饰对象区分形容词、动作方式和整句评价
2. 在不同动词框架中安排频率副词，读清否定范围
3. 用 only 和频率信息表达可核对的学习习惯

### 先检查前置知识

先学：第 10 课、第 17 课、第 22 课。先独立回答下面两题，再阅读本节的核对提示。

1. She looks tired.中的 tired 描述什么？

核对：描述 she 的状态，作表语。若做错，回到第 10 课。

2. He works 与 He is working 的助动词位置如何不同？

核对：前者普通肯定无显式助动词，后者 is 构成进行式。若做错，回到第 4 与 16 课。

词汇支持：careful 仔细的；carefully 仔细地；quiet 安静的；quietly 安静地；hard 努力地；hardly 几乎不；usually 通常；rarely 很少。

### A · 修饰对象比词尾更可靠

A patient teacher spoke 与 The teacher spoke patiently 描述对象不同：patient 给人加特征，patiently 给说话加方式。The teacher was patient 又把形容词放到表语位置，仍描述人。副词还可修饰形容词、另一个副词和整句话，如 unusually patient、very patiently、Fortunately, the class finished early。最后一个表达说话者的评价，并非上课这个动作的方式。读句子时先圈被描述的对象，再判词类，不要以词尾代替结构分析。

-ly 是常见方式副词后缀，但 friendly、lovely 通常为形容词，fast、hard 也可直接作副词。good 常描述人或物，well 常说明动作做得好；well 还可表示健康，如 I am well。hardly 表几乎不，lately 表最近，不能把它们视为 hard、late 的普通词形转换。遇到新词，要把词义、句法角色与搭配一起学。

练习判断必须说明“这个词在这句话里修饰谁”。只写“因为是副词”不足以展示理解。一个词可在不同句子执行不同任务，选择词形之后还要检查改变词形是否改变事实。

### B · 状态、方式与副词位置

The fabric feels soft 描述布料状态，feel 在此为系动词；Rae felt the fabric carefully 则是 Rae 摸布料，carefully 给动作加方式。look、sound、smell、taste 也有类似区别，不能看见一个动词就永久指定形容词或副词。先问是“主语怎么样”，还是“某人怎么做某事”。

方式副词常在动词后，带宾语时通常在完整宾语后：She explained the diagram clearly。入门写作先避免副词切开动词和宾语。也可根据重点放动词前，不过 clearly、sadly 等在句首或中间可能表达整句评价；需要精确动作方式时可以放宾语后或补语境。位置不是简单任意交换。

多种状语常按方式、地点、时间排列，但这只是常见组织方式，句首时间可建立背景，长宾语也会影响安排。先完成句子主干，再加入方式，最后读出每个修饰对象；若信息太长，拆句比堆叠副词更清楚。

### C · 频率与否定范围

usually、often、rarely、never 等通常在普通实义动词前；be 作主要动词时通常在后；有助动词时通常在第一个助动词后。Rae usually checks it、Rae is usually ready、Rae has never lost it 是三个不同框架。问句 Does Rae usually check it? 中 does 形成问题，check 恢复原形；不要把频率位置检查与动词变形分开。

sometimes、often、usually 可因重点位于句首或末尾；twice a week、every other day 等频率短语通常放末尾。频率词没有固定百分比，具体频率要用次数和周期说明。never 已带否定意义，标准表达不用 doesn't never；rarely、hardly 也不能随意再叠一个否定。

not always 表并非每次，never 表没有任何一次。She isn't always tired 允许有时疲倦，不等于 She is never tired。always 配进行式可对反复行为表达评价，既可能不满也可能赞扬，不能只教成抱怨。

### D · only 的焦点与真实记录

Only Jo checked the names 通常限制检查者；Jo checked only the names 限制检查内容。Jo only checked the names 在自然使用中也可能由重音和上下文突出 names，不能宣布 only 永远只限制紧邻词。重要通知应把焦点放在最容易辨认的位置，并补 not the dates 等说明。

读 Jo doesn't always read carefully 时，否定涉及“每次认真读”，不能直接推断 Jo 从不读。若想明确她每次读但有时匆忙，可以拆成 She reads it every time, but sometimes too quickly。语法任务不仅要形式正确，还要保留本意和未知信息，不能因副词移动增加原本没有的事实。

写学习日志时先写行为，再给频率和方式，最后用次数支持。例如通常认真检查答案，过去一周四个晚上这样做。遮住副词后说出仍成立的事实，重新加回再说明信息怎样变化。掌握标准是能选词、安排位置、解释范围，并在含糊时主动补足情境。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| The speaker is calm. / She speaks calmly. | 人很冷静／说话方式冷静。 | 状态与动作方式不同。 |
| The cloth feels soft. / Jo feels it carefully. | 布料柔软／Jo 仔细摸。 | 系动词与带宾语动作不同。 |
| They work hard. / They hardly work on Sundays. | 努力工作／周日几乎不工作。 | 相近词形改变词义。 |
| I am usually ready. / I usually prepare early. | 通常准备好了／通常早准备。 | be 后与普通动词前。 |
| She has never lost it. / She can usually find it. | 从未丢／通常能找到。 | 第一个助动词或情态词后。 |
| He is not always tired. / He is never tired after walks. | 并非总疲倦／散步后从不疲倦。 | 部分否定与全否定不同。 |
| Only Jo checked it. / Jo checked only the names. | 只有 Jo 查／Jo 只查姓名。 | 谁做与做什么的范围不同。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| The reply sounds clearly.（答复清楚） | The reply sounds clear. | 系动词表语说明答复状态。 |
| She opened carefully the envelope. | She opened the envelope carefully. | 稳定写法保留完整动宾关系。 |
| Rae doesn’t never forget it.（从不忘） | Rae never forgets it. | never 已否定，谓语仍需单数形式。 |
| He is hardly working.（正努力工作） | He is working hard. | hardly 的几乎不与努力不同。 |

### 边界与使用选择

位置受焦点与语体影响，应区分默认位置和所有可能位置。be 后可有副词修饰形容词，如 unusually quiet。only 的重音和语境会影响范围，重要内容宜补说明。频率词不是官方概率刻度，也不把口语扁平副词全部视为同一种错误。

### 学完后怎样检查自己

用同一词根写名词描述、系动词表语、动作方式三句；再写通常、从不、并非总是三种频率。读出每个修饰对象，核对位置与否定范围。错误集中在系动词后，返回第二节；错在频率位置，先画助动词与实义动词的位置。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：副词位置](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/where-adverbials-go-sentence)：方式副词在完整宾语后，频率的常见中间位置及强调位置。
- [British Council：频率表达](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/how-often)：频率副词在实义动词前、be后，频率短语与非精确百分比。
- [Cambridge English Grammar Today：only](https://dictionary.cambridge.org/grammar/british-grammar/only)：only的主语焦点、其他焦点及中间位置，不以紧邻词绝对判断。`,practice:[{id:`gc23-p1`,prompt:`说明 friendly student 与 replied politely 中描述对象及词类。`,reference:`friendly 描述 student，为形容词；politely 描述 replied，为副词。`,explanation:`词尾只是线索，当前角色决定判断。`,criteria:[`两对象`,`两词类`]},{id:`gc23-p2`,prompt:`填：The room looks ___. They cleaned it ___. (clean/carefully)`,reference:`clean; carefully`,explanation:`第一句状态，第二句动作方式。`,criteria:[`clean`,`carefully`,`角色区分`]},{id:`gc23-p3`,prompt:`She checks it 加 usually，并写“她通常检查吗？”`,reference:`She usually checks it. Does she usually check it?`,explanation:`频率在普通动词前，does 后 check 原形。`,criteria:[`usually checks`,`Does she usually check`]},{id:`gc23-p4`,prompt:`They have finished it 加 never，表达一次也没有。`,reference:`They have never finished it.`,explanation:`never 在首助动词后，不额外否定。`,criteria:[`have never finished`,`无额外否定`]},{id:`gc23-p5`,prompt:`周日只工作十分钟；work hard 与 hardly work 哪个表示几乎不工作？另一个何义？`,reference:`hardly work；work hard 表努力工作。`,explanation:`不是同一词的程度差异。`,criteria:[`hardly 选择`,`hard 词义`]},{id:`gc23-p6`,prompt:`解释 not always late 是否等于 never late，并写从不迟到。`,reference:`不等于，前者允许有时迟到。She is never late.`,explanation:`部分否定和零次发生不同。`,criteria:[`范围说明`,`is never late`]},{id:`gc23-p7`,prompt:`Jo 查姓名没查日期；别人做没做未知。用 only 写清楚。`,reference:`Jo checked only the names, not the dates.`,explanation:`限制检查内容，不增添只有 Jo 做的事实。`,criteria:[`内容焦点`,`未查日期`,`保留未知`]},{id:`gc23-p8`,prompt:`写两条自己的习惯：usually 加方式、具体周频率。`,reference:`I usually read carefully. I revise three times a week.`,explanation:`自然不同内容也可达标。`,criteria:[`频率位置`,`方式词形`,`具体次数`,`完整句子`]}],verification:[{id:`gc23-v1`,prompt:`The fabric feels soft/softly 选词并解释。`,reference:`soft，描述 fabric 的状态。`,explanation:`feel 在此连接状态。`,criteria:[`soft`,`状态依据`],skill:`structure`,critical:!1},{id:`gc23-v2`,prompt:`改正 She has checked often the notes，采用常见中间位置，保留经常核对过。`,reference:`She has often checked the notes.`,explanation:`完成式 have/has 为第一个助动词；频率 often 常在它后，动词与宾语关系保留。`,criteria:[`has often checked`,`notes 宾语完整`,`意思保留`],skill:`transformation`,critical:!0},{id:`gc23-v3`,prompt:`He is tired 改为并非每次都疲倦。`,reference:`He is not always tired.`,explanation:`不可改成 never，否则改变范围。`,criteria:[`not always`,`无 never 替换`],skill:`transformation`,critical:!0},{id:`gc23-v4`,prompt:`Only Mina brought a ruler 能证明她没带铅笔吗？`,reference:`不能，通常限制带尺的人，不限定她带的全部物品。`,explanation:`不能把主语焦点读成宾语全集。`,criteria:[`不能推出`,`主语范围`],skill:`meaning`,critical:!1},{id:`gc23-v5`,prompt:`给同学朗读反馈：声音悦耳，读得清楚，并非每次都慢。写三句。`,reference:`Your voice sounds pleasant. You read clearly. You don’t always read slowly.`,explanation:`独立迁移分别核对状态、方式和部分否定，允许同义表达。`,criteria:[`状态形容词`,`动作副词`,`部分否定`,`本意不变`],skill:`expression`,critical:!0},{id:`gc23-v6`,prompt:`写四个真实习惯或截至现在的经历，含 be、普通动词、完成助动词与具体次数，标出修饰对象。`,reference:`I am usually ready. I often check examples. I have never missed a quiz. I revise twice a week.`,explanation:`内容自选，使用已经学过的框架；按位置与范围评分，不逐字匹配。`,criteria:[`四完整句`,`be 频率自然`,`普通动词频率自然`,`完成助动词后频率`,`次数`,`对象解释`],skill:`expression`,critical:!0}],review:[{id:`gc23-r1`,prompt:`一天后：用新词根写状态与方式两句，解释对象。`,reference:`The speaker is calm. She speaks calmly.`,explanation:`新语境检索角色。`,criteria:[`状态`,`方式`,`对象说明`]},{id:`gc23-r2`,prompt:`三天后：一条通常习惯、一条 never 完成式，说明是否加 not。`,reference:`I usually plan ahead. I have never missed a deadline. 不加 not。`,explanation:`完成式首助动词后，never 已否定。`,criteria:[`usually`,`完成式 never`,`不重复否定`]},{id:`gc23-r3`,prompt:`一周后：朋友把并非总在家学习理解为从不。用英文澄清并给次数。`,reference:`I don’t always study at home, but I study there twice a week.`,explanation:`具体次数澄清否定范围。`,criteria:[`not always`,`次数`,`排除从不误读`]}],sources:[{title:`British Council：副词位置`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/where-adverbials-go-sentence`,supports:`方式副词在完整宾语后，频率的常见中间位置及强调位置`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council：频率表达`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/how-often`,supports:`频率副词在实义动词前、be后，频率短语与非精确百分比`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：only`,url:`https://dictionary.cambridge.org/grammar/british-grammar/only`,supports:`only的主语焦点、其他焦点及中间位置，不以紧邻词绝对判断`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`}],revision:`official-reference-2026-10-03`,title:`形容词、副词与频率位置`,module:`修饰、态度与语态`,moduleOrder:4,track:`basic`},{number:24,objectives:[`明确比较对象、范围与相同维度`,`正确构成比较级、最高级与同级比较`,`在量词和限定结构中避免双重比较与范围误读`],summary:`明确比较对象、范围与相同维度`,prerequisites:[7,8,23],body:`### 学习目标

1. 明确比较对象、范围与相同维度
2. 正确构成比较级、最高级与同级比较
3. 在量词和限定结构中避免双重比较与范围误读

### 先检查前置知识

先学：第 07 课、第 08 课、第 23 课。先独立回答下面两题，再阅读本节的核对提示。

1. fast 在 run fast 中是什么角色？

核对：副词，比较可针对动作方式。若做错，回到第 23 课。

2. one of 后谈同一组中的一个，名词通常怎样？

核对：可数名词用复数，组内不止一个成员。若做错，回到第 7 课。

词汇支持：tall 高的；heavy 重的；cheap 便宜的；expensive 贵的；far 远的；similar 相似的；than 比；among 在一组之中。

### A · 同类对象、同一维度与词形

This bottle is lighter than that one 比较重量，不自动比较容量。My desk is wider than yours 的 yours 替代 your desk，使桌子与桌子比较；若写 than you，通常变为桌子与人的宽度比较，偏离本意。先列对象、维度和单位，再组织句子。语法形式正确不代表事实与比较关系合理。

短词常加 -er/-est，某些词需双写或 y 变 i；长词多用 more/most。两音节词有变体，如 polite、simple，不能按音节数给所有词一刀切。good/well → better/best，bad/badly → worse/worst。比较动作方式保留副词：more carefully，不改成 more careful。新词应核对惯常形式，不能用同一后缀制造所有比较。

参照可在语境清楚时省略，如 This one is cheaper；新读者不知道比较谁时，应补 than 短语。Lin runs faster than I do 中 do 替代 run，口语 than me 也常见。学习时可补完整以检查意义，不应只按代词形式排除自然表达。

### B · 最高级要有范围，程度词不能重复

the quietest room on this floor 把范围限制在本层，不表示整栋楼最安静。one of the most useful books 表示最有用的一组中的一本，books 复数，不能断言它唯一最好。最高级名词短语通常有 the，但 my best result 已有物主限定，不写 my the best result。副词最高级如 She answered fastest 可省 the，不能把名词前规则不加区分地移到所有结构。

much、far、slightly、a little 可说明比较差距；very 通常修饰原级，不能默认写 very clearer。more taller、most cheapest 重复升级应改。less convenient 表程度降低，不是见到中文更就只能 more。写比较时标明上升或下降的方向，再选择形式。

两个对象常用比较级，组内最高常用最高级，但一个对象与其余一组比较也可 taller than all the others。the more…, the more… 描述随变量变化的关系，不代表已经证明因果。最高级的某一对象也可能与其他对象并列处于最高程度，并不自动证明只有它达到该程度。真实写作需要给范围、时间与证据，不把一种优点直接扩大为全方位最好。

### C · as…as、数量与可测量倍数

as + 原级 + as 表相同维度同等；not as/so…as 表未达到对方。A is heavier than B 反向改写成 B is not as heavy as A，必须交换对象而保持方向。as 中间不用 heavier。若数据不同却写相等，句型正确也无法达标。

fewer 通常接可数复数，less 接不可数，如 fewer sheets、less paper。时间、金钱、距离作总量时 less than ten minutes 等表达自然，不能见复数词尾就判错。as many chairs as 与 as much water as 区分个数和物质量；less difficult 比较性质程度，不涉及名词数。

twice as long as、three times as much water as 可以比较有明确量尺的总量。B 长 4 米、A 长 2 米时，B 是 A 两倍，同时比 A 长 2 米；比例与差值是不同关系。twice longer than 容易产生“总量两倍还是增加两倍”的理解分歧，不作默认公式。主观的 good、beautiful 缺少明确量尺时，倍数不能自动提供精确证据。

### D · 从数据到选择，检查过度结论

三条路线分别为 A：2 公里 20 分钟，B：3 公里 15 分钟，C：4 公里 25 分钟。A 可最短，B 可最快；shortest 并不推出 fastest，因为距离与时间不同。若说 A is better，应说明对谁、按什么标准；看重少走路和看重早到的人可能选不同路线。

两个物品价格相同可用 as expensive as，不必强造比较级。没有容量数据，就不能由瓶子较高推断装水更多。每句比较先读列标题与单位，写后核对方向、范围与参照。My costs are lower than last year 在语境可恢复省略，正式说明可写 lower than they were last year，让前后比较项更明确。

学习顺序是构词、检查方向、补范围、最后根据需求给建议。建议至少有两条证据，并解释取舍。Route B is longer, but it takes less time 展示不同维度可同时成立。掌握比较不等于给所有词套最高级，而是能给读者需要的信息，允许可恢复的省略，避免用局部事实推出整体优越。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| My desk is wider than yours. / It is wider than your chair. | 两桌比较／桌椅比较。 | 替代词决定比较对象。 |
| Jo writes carefully. / Jo writes more carefully now. | 认真写／如今更认真。 | 比较方式保留副词。 |
| It is very quiet. / It is much quieter. | 很安静／安静得多。 | 原级与比较级的程度词不同。 |
| It is the cheapest book here. / It is one of the cheapest books here. | 指定这本处于最低价／指出它属于最低价的一组。 | 最高级本身不排除并列最低价；one of 明示组内成员，books 复数。 |
| A is lighter than B. / B is not as light as A. | A 更轻／B 不及 A 轻。 | 反向改写保持方向。 |
| We used fewer sheets. / We used less paper. | 纸张数更少／纸物质更少。 | 可数个数与不可数量不同。 |
| B is twice as long as A. / B is two metres longer than A. | 总量两倍／差值两米。 | 比例与差值仅在给定数据下可推算。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| more safer | safer | 不重复比较。 |
| one of the tallest student | one of the tallest students | 组内复数。 |
| as heavier as | as heavy as | 中间用原级。 |
| My room is larger than her.（比较两房间） | My room is larger than hers / her room. | 对象应是房间，不是人。 |

### 边界与使用选择

比较常依赖省略内容，阅读时要补出比较对象。better 不是所有“更好”的万能替代，如更喜欢某物可用 prefer，题目应允许自然改写。elder/older 及非等级形容词有特殊用法，本课不要求给每个形容词机械制造比较级。

### 学完后怎样检查自己

选三个同类物品，给实际数据，写两两比较、组内最高与同级或不同级比较。圈出比较范围、比较维度与限定词，再加一个数量比较。若只改词尾却比较对象不对，回到第一节重新确定对象。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：形容词比较级与最高级](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/comparative-superlative-adjectives)：构词、两音节变体、比较参照、最高级范围及one of。
- [British Council：副词比较级与最高级](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/comparative-superlative-adverbs)：比较动作方式，比较级程度修饰与副词最高级冠词边界。
- [Cambridge English Grammar Today：比较级与最高级](https://dictionary.cambridge.org/grammar/british-grammar/adjectives-comparative-and-superlative)：比较相同属性，最高级描述组内程度，不推断唯一成员。`,practice:[{id:`gc24-p1`,prompt:`写 large、heavy、good、carefully 比较级，找比较方式的一项。`,reference:`larger, heavier, better, more carefully；最后一项方式。`,explanation:`构词与句法角色一起检查。`,criteria:[`四形式`,`方式识别`]},{id:`gc24-p2`,prompt:`改正 very clearer，保留清楚得多。`,reference:`much clearer / a lot clearer`,explanation:`比较差距用适配比较级的程度词。`,criteria:[`程度词`,`clearer`]},{id:`gc24-p3`,prompt:`A3 公斤，B5 公斤，写 A 更轻，再用 B not as…as 改写。`,reference:`A is lighter than B. B is not as light as A.`,explanation:`方向与事实一致。`,criteria:[`方向`,`as 原级`]},{id:`gc24-p4`,prompt:`改正 my the best plan 与 one of the oldest building。`,reference:`my best plan; one of the oldest buildings`,explanation:`限定词不重复，成员来自复数组。`,criteria:[`my best`,`buildings`]},{id:`gc24-p5`,prompt:`较少杯子、较少茶用 fewer/less；less than ten minutes 必错吗？`,reference:`fewer cups; less tea；时间总量中不必错。`,explanation:`类别与总量区别。`,criteria:[`杯子 fewer`,`茶 less`,`时间边界`]},{id:`gc24-p6`,prompt:`A 长 1 米 B 长 3 米，用三倍与差值各写一句。`,reference:`B is three times as long as A. B is two metres longer than A.`,explanation:`总量三倍，增加两米。`,criteria:[`倍数`,`差值`,`方向`]},{id:`gc24-p7`,prompt:`A2 公里 20 分钟，B3 公里 15 分钟，写各一优势。`,reference:`A is shorter than B. B takes less time than A.`,explanation:`距离与时间两个维度，不能互推。`,criteria:[`两维度`,`事实`]},{id:`gc24-p8`,prompt:`三书甲价格最低但只是易懂组内一本，写两句范围明确。`,reference:`A is the cheapest of the three books. It is one of the easiest books in the set.`,explanation:`不能把组内成员写成唯一最易懂。`,criteria:[`最高范围`,`one of 复数`,`唯一性未扩大`]}],verification:[{id:`gc24-v1`,prompt:`填 Jo answered ___ accurately than I did。`,reference:`more`,explanation:`比较两个回答方式，副词保留。`,criteria:[`more accurately`],skill:`structure`,critical:!1},{id:`gc24-v2`,prompt:`改正 This chair is heavier than her，原意比她的椅子重。`,reference:`This chair is heavier than hers / her chair.`,explanation:`补正确对象。`,criteria:[`椅子参照`],skill:`transformation`,critical:!0},{id:`gc24-v3`,prompt:`A is noisier than B 用 B not as…as 反向改写。`,reference:`B is not as noisy as A.`,explanation:`方向不变，中间原级。`,criteria:[`反向`,`原级`],skill:`transformation`,critical:!0},{id:`gc24-v4`,prompt:`最高级一定都加 the 吗？给 my 和副词边界。`,reference:`不一定：my best result；She finished fastest。`,explanation:`限定与角色不同。`,criteria:[`my 边界`,`副词边界`],skill:`meaning`,critical:!1},{id:`gc24-v5`,prompt:`水瓶 A 重量 300 克、容量 500 毫升、价格 30 元；水瓶 B 重量 450 克、容量 1000 毫升、价格 50 元。写三项比较及一个根据需求的选择。容量不代表当前实装水量。`,reference:`A is lighter and cheaper than B. B has twice the capacity of A. I choose A for a short walk.`,explanation:`允许不同合理选择，依重量、价格、最大容量数据评分；不由容量推出现在实际装水多少。`,criteria:[`重量`,`价格`,`容量倍数`,`需求关联`],skill:`expression`,critical:!0},{id:`gc24-v6`,prompt:`列三个真实物品同一维度数据，写最高级、同级或不同级比较，并说明省略指什么。`,reference:`A20 元 B20 元 C35 元。C is the most expensive of the three. A is as expensive as B. 名称均指包。`,explanation:`独立迁移不要求同物品，要求事实与范围可恢复。`,criteria:[`三数据`,`最高范围`,`同级或不同级`,`对象解释`],skill:`expression`,critical:!0}],review:[{id:`gc24-r1`,prompt:`一天后：well/badly 比较级在新场景造句。`,reference:`I slept better. The old printer worked worse.`,explanation:`不规则形式及参照。`,criteria:[`better`,`worse`,`语境`]},{id:`gc24-r2`,prompt:`三天后：给两个数值，以倍数和差值表达。`,reference:`A2 升 B4 升。B holds twice as much as A. B holds two litres more.`,explanation:`比例与增加量不同。`,criteria:[`倍数`,`差值`]},{id:`gc24-r3`,prompt:`一周后：写三个选择建议，含两维度，不用无证据总体最优。`,reference:`The blue bag is lighter. The black one holds more. I choose blue for a short trip.`,explanation:`证据支持具体需求。`,criteria:[`两维度`,`范围`,`理由`]}],sources:[{title:`British Council：形容词比较级与最高级`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/comparative-superlative-adjectives`,supports:`构词、两音节变体、比较参照、最高级范围及one of`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council：副词比较级与最高级`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/comparative-superlative-adverbs`,supports:`比较动作方式，比较级程度修饰与副词最高级冠词边界`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：比较级与最高级`,url:`https://dictionary.cambridge.org/grammar/british-grammar/adjectives-comparative-and-superlative`,supports:`比较相同属性，最高级描述组内程度，不推断唯一成员`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`}],revision:`official-reference-2026-10-03`,title:`比较级、最高级与同级比较`,module:`修饰、态度与语态`,moduleOrder:4,track:`basic`},{number:25,objectives:[`以参照方式选择时间、地点和方向介词`,`区分到达、进入、所在与截止、持续的意义`,`在短文中写出明确的路线与时间安排`],summary:`以参照方式选择时间、地点和方向介词`,prerequisites:[7,11,18,22],body:`### 学习目标

1. 以参照方式选择时间、地点和方向介词
2. 区分到达、进入、所在与截止、持续的意义
3. 在短文中写出明确的路线与时间安排

### 先检查前置知识

先学：第 07 课、第 11 课、第 18 课、第 22 课。先独立回答下面两题，再阅读本节的核对提示。

1. next Monday 通常需要 on 吗？

核对：通常不需要：next Monday。若做错，回到第 18 课未来时间。

2. Where is it?与 Where does it go?关注什么不同？

核对：前者所在，后者去向。若做错，回到第 11 课问题与第 10 课句型。

词汇支持：entrance 入口；corner 角落；across 横过；through 穿过内部；into 进入；until 直到；by 不迟于；during 在……期间。

### A · 时间参照与短语惯例

at 常给钟点或时间点，on 常给某天、日期或具体某天时段，in 常给月、年、季节和一般时段。at 8:15、on Thursday morning、in October 是稳定起点，不是按单位大小可以推导一切的公式。at night 与 in the morning 是惯例；特定一夜中的某个时刻可说 in the night。把常用短语作为整体记忆，并用事件背景判断参照。

last、next、this、every 等直接限定时间时通常零介词：next Thursday、this afternoon、every week。on Fridays 与 every Friday 都可表示反复发生，on Friday 常指语境中的某个周五。英式 at the weekend 与美式 on the weekend/on weekends 都自然，不能把地区选择教成另一形式必错。

in twenty minutes 可表二十分钟后，也可在完成事件语境表示耗时；for twenty minutes 表持续时长；during the lesson 表课期间。during 接事件或时段名词，不是数字时长中 for 的普通替代。判断时要把动作性质、完成与否、参照时间一同读。

### B · 地点是观察视角，不是大小分类

in 常关注内部区域，on 常关注表面或线，at 常关注位置点或活动场所。I am at the library 可把图书馆作为会合点；I am in the library 明确已经在内部。两句都可能正确，区别不是图书馆的大或小，而是说话者要告诉对方的信息。

on the wall 是墙面，in the wall 是墙体内部；at the door 是门口位置，in the doorway 是门洞里。交通搭配中 on the bus/train、in the car/taxi 常用；by bus 给交通方式且通常无冠词，on a bus 给所在车辆。不能因为交通工具有内部就统一用 in，也不能把交通方式和具体所在车辆的冠词混用。

介词后人称代词用宾格：with me、near them。地点短语还可修饰不同成分：the bag on the chair 识别哪只包，Put the bag on the chair 给放置地点。写长句要核对附着对象，避免多个地点堆叠后读者不知道谁在哪里。

### C · 轨迹与目的地：to、into、through、across

walk to the hall 给目的地，不保证进入；walk into the hall 明确从外向内；walk through the hall 穿过内部；walk across the square 横过开放表面；walk along the river 沿着河走。路线应能在地图上画出，中文都译穿过不代表英文结构相同。onto 明确朝表面移动，on 在某些运动语境也能表达终点；本课先使用明确形式区分过程。

arrive at the gate、arrive in a city 常见；reach the gate 直接接目的地，不写 reach to。go home 中 home 作方向副词通常不用 to，但 go to my home 的 my home 是名词短语，不能扩大成所有 home 前永久禁 to。先判断词与动词的结构，再选介词。

路线指令必须给起点或参照，Turn left 对朝向不同的听者可能有不同结果。先说东门、沿走廊、穿过大厅、进入第二扇门，读者才能执行。介词说明空间关系，无法替代缺失的方向与地图事实。

### D · 截止与持续：安排必须能执行

by Friday 给不迟于周五的截止，until Friday 给活动或状态持续到周五。Return the key by five 允许提前归还，Keep the key until five 关注保留到五点。介词自身不能精确界定周五开始还是结束，真实通知应加 Friday at 5 p.m. 等具体时刻。

I didn't leave until six 常表达直到六点才离开；I hadn't left by six 只说明六点时尚未离开，不能断定就在六点离开。for two hours 给持续量，until six 给结束界限；两者可一起使用但不可互换。before six 不含六点，by six 给最迟边界，重要事项需要清楚时间约定。

完整见面说明应给日期、钟点、会合点、进入路线、停留时间及截止。先用中文分清去到、进入、保持、完成，再选英文。写后亲自执行或请同学按句子画地图，检查是否把 meet at、walk into、stay until、reply by 的意义写反。掌握出口是能让他人照着行动并解释参照，不只是填对几个介词空格。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| Meet at eight. / Meet on Friday morning. | 八点／周五早上。 | 钟点与具体日时段。 |
| Study in the evening. / Study this evening. | 一般晚上／今晚。 | this 时间短语通常零介词。 |
| Return in ten minutes. / Wait for ten minutes. | 十分钟后／持续十分钟。 | 未来间隔与时长。 |
| I am at the station. / I am in the station. | 车站会合点／站内。 | 同一地点不同视角。 |
| Travel by bus. / Sit on the bus. | 交通方式／具体车辆所在。 | 冠词与介词功能不同。 |
| Walk across the court. / Walk through the passage. | 横过球场／穿过通道。 | 表面与内部轨迹。 |
| Reply by three. / Stay until three. | 截止回复／持续停留。 | 完成与保持不同。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| on next Tuesday | next Tuesday | next 直接限定。 |
| reach to the entrance | reach the entrance | reach 直接接目的地。 |
| go to home | go home | home 作方向副词。 |
| Finish it until five.（截止） | Finish it by five. | 完成截止不是持续界限。 |

### 边界与使用选择

介词是一种视角加搭配的系统，不是 in 大地点、at 小地点的绝对规则。on time 是按时，in time 是及时，不能仅凭中文都含“时间”混用。until 和 till 意义近似，by 可有其他意义如作者或交通，本课只按时间截止情境判断。

### 学完后怎样检查自己

写一张可执行的见面说明：日期、钟点、会合点、进入路线、提交截止、停留时长。请另一位学习者根据文字说明行动，若还需猜位置或时间，补足参照。核对介词是表达了路线，还是只写一个模糊地点。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：时间介词](https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/prepositions-of-time-at-in-on)：at/in/on时间范围、next/this类时间及英美周末表达。
- [British Council：介词教学的分层方法](https://www.britishcouncil.org/voices-magazine/how-help-learners-english-understand-prepositions)：时间、地点、运动分批教学，空间动作与搭配，不以母语逐字转译。
- [Cambridge English Grammar Today：时间at/on/in](https://dictionary.cambridge.org/uk/grammar/british-grammar/at-in-on-time)：日期、时段、零介词、in的耗时／未来间隔。`,practice:[{id:`gc25-p1`,prompt:`填 at/on/in/零介词：7:30、Tuesday evening、October、next Tuesday。`,reference:`at; on; in; 零介词`,explanation:`钟点、具体日时段、月、next 直接限定。`,criteria:[`四选择`,`参照解释`]},{id:`gc25-p2`,prompt:`比较 back in an hour 与 stayed for an hour。`,reference:`一小时后回来／停留一小时。`,explanation:`参照间隔与持续量不同。`,criteria:[`两义区分`]},{id:`gc25-p3`,prompt:`明确人在图书馆内部，写句并解释另一 at 视角。`,reference:`I am in the library. at 可把它视为会合地点。`,explanation:`大小不决定唯一介词。`,criteria:[`内部 in`,`at 视角`]},{id:`gc25-p4`,prompt:`写坐公交去学校与目前在那辆公交上。`,reference:`I go to school by bus. I am on the bus.`,explanation:`方式和所在车辆不同。`,criteria:[`by bus`,`on the bus`]},{id:`gc25-p5`,prompt:`从广场西边到东边再进入大厅，写两指令。`,reference:`Walk across the square. Go into the hall.`,explanation:`横过表面然后进入内部。`,criteria:[`across`,`into`,`顺序`]},{id:`gc25-p6`,prompt:`改正 arrived the town 与 reached to the gate。`,reference:`arrived in the town; reached the gate`,explanation:`arrive 搭配与 reach 动宾不同。`,criteria:[`arrive 介词`,`reach 无 to`]},{id:`gc25-p7`,prompt:`钥匙可提前但不得晚于今天 17:00 归还；本人待到 17:00。写两句。`,reference:`Return the key by 5 p.m. today. Stay until 5 p.m. today.`,explanation:`截止与持续不可交换。`,criteria:[`by`,`until`,`时间明确`]},{id:`gc25-p8`,prompt:`写四句会合说明：next 时间、钟点、会合点、进入路线。`,reference:`Meet next Friday at two. Wait at the east gate. Walk along the corridor. Go into Room 4.`,explanation:`内容可变，说明须能执行。`,criteria:[`时间`,`会合点`,`轨迹`,`终点`]}],verification:[{id:`gc25-v1`,prompt:`填 ___ Wednesday evening we waited ___ two hours。`,reference:`On; for`,explanation:`具体某天时段与时长。`,criteria:[`on`,`for`],skill:`structure`,critical:!1},{id:`gc25-v2`,prompt:`改正 She goes to home on every Friday。`,reference:`She goes home every Friday.`,explanation:`方向副词与 every 限定均通常零介词。`,criteria:[`home`,`every Friday`],skill:`transformation`,critical:!0},{id:`gc25-v3`,prompt:`写“活动持续到四点”与“材料最迟四点交”。`,reference:`The activity continues until four. Hand in the materials by four.`,explanation:`相同时间，不同要求。`,criteria:[`until`,`by`,`意义`],skill:`transformation`,critical:!0},{id:`gc25-v4`,prompt:`at the station 因为车站是小地点才对吗？`,reference:`不是，at 位置点／活动场所，in 内部。`,explanation:`同一车站不同视角。`,criteria:[`否定大小定律`,`视角区别`],skill:`meaning`,critical:!1},{id:`gc25-v5`,prompt:`写五句安排：下周六 10 点东门，横球场，穿通道，进阅览室，待到 11 点。`,reference:`Meet next Saturday at ten at the east gate. Walk across the court. Go through the passage. Enter the reading room. Stay until eleven.`,explanation:`enter 可直接接宾语，自然等义路线也达标。`,criteria:[`时间地点`,`across`,`through`,`进入`,`until`],skill:`expression`,critical:!0},{id:`gc25-v6`,prompt:`自主通知含交通、日期时刻、时长、截止，并解释两介词不能互换原因。`,reference:`Come by train on 12 October at nine. The visit lasts for two hours. Reply by six on 10 October. for 是时长，by 是截止。`,explanation:`独立迁移内容可自选，读者应能执行。`,criteria:[`交通`,`日期时刻`,`时长`,`截止`,`两项解释`],skill:`expression`,critical:!0}],review:[{id:`gc25-r1`,prompt:`一天后：同一车站写会合点与内部句。`,reference:`Meet at the station. I am in the station near the desk.`,explanation:`两个视角都可成立。`,criteria:[`at`,`in`,`参照`]},{id:`gc25-r2`,prompt:`三天后：新地点各写横过表面、穿过内部路线。`,reference:`Walk across the bridge. Go through the tunnel.`,explanation:`新语境检索空间关系。`,criteria:[`across`,`through`]},{id:`gc25-r3`,prompt:`一周后：区分六点前归还与保留到六点，解释可否提前。`,reference:`Return it by six 可提前；Keep it until six 关注保留到六点。`,explanation:`行为要求不同。`,criteria:[`by 截止`,`until 持续`,`行动解释`]}],sources:[{title:`British Council：时间介词`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/a1-a2-grammar/prepositions-of-time-at-in-on`,supports:`at/in/on时间范围、next/this类时间及英美周末表达`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council：介词教学的分层方法`,url:`https://www.britishcouncil.org/voices-magazine/how-help-learners-english-understand-prepositions`,supports:`时间、地点、运动分批教学，空间动作与搭配，不以母语逐字转译`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：时间at/on/in`,url:`https://dictionary.cambridge.org/uk/grammar/british-grammar/at-in-on-time`,supports:`日期、时段、零介词、in的耗时／未来间隔`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`}],revision:`official-reference-2026-10-03`,title:`时间、地点与方向介词`,module:`修饰、态度与语态`,moduleOrder:4,track:`basic`},{number:26,objectives:[`用情态动词表达能力、许可、建议与义务`,`区分禁止与没有必要，表达说话人的证据强弱`,`在请求和规则中选择符合关系与语境的语气`],summary:`用情态动词表达能力、许可、建议与义务`,prerequisites:[5,15,18,23,25],body:`### 学习目标

1. 用情态动词表达能力、许可、建议与义务
2. 区分禁止与没有必要，表达说话人的证据强弱
3. 在请求和规则中选择符合关系与语境的语气

### 先检查前置知识

先学：第 05 课、第 15 课、第 18 课、第 23 课、第 25 课。先独立回答下面两题，再阅读本节的核对提示。

1. Does he can help?为什么通常不对？

核对：can 自身可作助动词，应 Can he help?。若做错，回到第 5 课助动词。

2. You must go 与 You will go 表达重点相同吗？

核对：前者义务，后者未来预测或意愿，要看语境。若做错，回到第 18 课。

词汇支持：can 能够；may 可能／可以；must 必须；should 应该；permission 许可；rule 规则；necessary 必要；probably 大概。

### A · 同一情态词可能承担不同任务

She can open the file 可能谈操作能力，You can use my laptop 在借用语境给许可。Visitors must sign in 是要求，The visitor must be tired 在知道行程后可为推断。先判断说话者是在报告能力、制定规则还是根据线索判断，不能把 can 永久等于能、must 永久等于必须的一对一翻译表当成语法系统。

can、could、may、might、must、should 等核心情态后接不带 to 的原形，第三人称不加 -s：She can help。否定加 not，问题把情态移到主语前，不再用 do。一般不并排写 will can；未来能力用 will be able to。情态后可接 be/have 构成长结构，本课先建立原形框架，第 45 课再详学回顾推断。

have to、be able to 意义相关，但形式不同：She has to work、Does she have to work?、She had to work；be able to 的 be 自己变形。不要因为都叫情态意义便让所有表达都照 can 的词序。先识别表达类型，再检查辅助框架。

### B · 一般能力、一次成功与重要边界

can 谈现在技能，也可谈当时的能力：I can hear you。过去一般技能常用 could：At ten, Jo could read maps。报告过去某次实际成功，通常用 was/were able to 或 managed to；后者常强调困难后终于做到。Yesterday Jo managed to unlock the box 明确结果，而只说 could 有时仅说明具备能力或机会。

不能把这条倾向扩大成所有具体过去时刻绝对禁 could。see、hear、understand 等感知或心理动词常可用 could 描述当时感知；某次未能完成可用 couldn't、wasn't able to、didn't manage to。判断题必须给情境：多年技能、一次成功、一次失败还是当时听得见？缺语境的唯一答案无法检验真实掌握。

Can I open the window? 向老师说时可请求许可，不是在报告开窗技能；Could you open it? 是委婉请求，不是在问过去能力。be able to 可组成 will be able to、has been able to 等核心情态没有的词形。叙述经历时先判时间与是否完成，再选表达。

### C · 许可、建议与义务的说话立场

can 常请求和给许可，could 常令请求委婉；Could I borrow it? 的许可答复常用 Yes, you can，不机械复制 could。may 在正式许可场景常见，但礼貌还受 please、语调、解释和双方关系影响，不能给几个词安一个在所有场景固定的排名。

should 通常给建议；must 与 have to 常表达强义务。must 经常体现说话者或机构立场，have to 常把外部要求作为事实报告，但许多情境重叠，公告也可用 must。不能把外部规定所以 must 必错当绝对规则。比较应考查表达视角，允许有依据的自然选择。

过去实际义务通常用 had to，未来可用 will have to；must 没有普通过去义务词形。must have done 通常为过去推断，不等于昨天必须做，进阶另学。have to 的问题用 Do/Does…have to，否定用 don't/doesn't have to。建议句 You should check the address 不表示地址肯定有错，也不自动创建强制制度。

### D · 禁止、无需与根据证据推断

You mustn't copy the answers 是禁止；You don't have to copy the chart 是无义务，做不做可自行决定；needn't 也常表不必。把 must 的否定译成不必会把规则写反。can't 在规定语境可表示不允许，不必每次都译成身体不能做到。先用中文标明禁止还是可选，再写英文。

must be、may/might/could be、can't be 可表达现在推断的不同把握。没有接电话不足以证明一定忙；might be busy 保留未知。must be 是较强推断，不等于真实证据绝对无误；不能给 must=100%、may=50% 的伪概率刻度。证据、判断和后续核实各是一层信息。

真实说明可混合必须登记、允许借书、无需打印、建议带笔。每项先标义务、许可、可选、建议，再选形式。独立验收不只看原形，还要检查是否把可选写成禁止、把一次成功写成仅有潜能、把猜测写成已证实事实。更换情态词后必须重新还原行动要求。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| Jo can use the scanner. / Jo can use my scanner today. | 有操作技能／今天获许可。 | 同一 can 由语境决定任务。 |
| She could draw maps as a child. / She managed to find the path yesterday. | 过去一般技能／昨天一次成功。 | 能力与实际完成不同。 |
| I could hear it then. / I couldn’t open it yesterday. | 当时听得见／昨天没开成。 | 感知与一次否定可用 could。 |
| Could I borrow it? / Yes, you can. | 委婉许可请求／给许可。 | 答复不机械复制 could。 |
| You must sign in. / You had to sign in yesterday. | 现在义务／过去实际义务。 | 过去通常用 had to。 |
| You mustn’t bring food. / You don’t have to bring food. | 禁止带／不必带。 | 否定行动要求不同。 |
| She must be busy. / She might be busy. | 想必忙／可能忙。 | 推断强弱不是精确百分比。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| He can to explain it. | He can explain it. | 核心情态后原形不用 to。 |
| Does she can help? | Can she help? | 情态自己构成疑问。 |
| Yesterday we must leave early.（过去义务） | Yesterday we had to leave early. | had to 给实际过去义务。 |
| You mustn’t wear a tie.（领带可选） | You don’t have to wear a tie. | 可选不是禁止。 |

### 边界与使用选择

must/have to 的来源倾向不是无例外对立。could 的过去一次成功规则有感知、否定等重要边界。请求礼貌由关系与表达整体决定。现在推断不作精确概率承诺；情态完成的回顾含义在第 45 课学习，不能把 must have done 当普通过去义务。

### 学完后怎样检查自己

为一个真实活动写四条：必须做、禁止做、建议做、可不做；再根据两条线索写一项可能判断。让同伴复述行动要求，若把禁止读成可选，优先修正意义。最后用 Can/Could 写同一请求并说明关系场景。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：许可与义务](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-permission-obligation)：can/could/may许可，must/have to立场倾向及过去had to，禁止和无义务。
- [British Council：过去能力](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/past-ability)：一般could与一次成功was able to/managed to，一次失败的couldn’t。
- [BBC Learning English：can/could/be able to](https://downloads.bbc.co.uk/learningenglish/lowerintermediate/unit30/u30_6min_gram_can_could_be_able.pdf)：情态后原形，be able to必要形式，以及感知／思维动词的can/could边界。`,practice:[{id:`gc26-p1`,prompt:`改正 She can reads it 并写疑问。`,reference:`She can read it. Can she read it?`,explanation:`情态后原形且不加 does。`,criteria:[`read`,`Can she read`]},{id:`gc26-p2`,prompt:`Can I borrow your ruler? 与 I can measure the line 各做什么？`,reference:`前句许可请求，后句能力说明。`,explanation:`按说话目的判断同词多义。`,criteria:[`许可`,`能力`]},{id:`gc26-p3`,prompt:`童年长期会骑车，用 could/managed to 选择并解释。`,reference:`I could ride a bike as a child.`,explanation:`一般技能而非一次实际成果。`,criteria:[`could ride`,`技能依据`]},{id:`gc26-p4`,prompt:`昨天试了几次后终于开文件，用 managed to 表达。`,reference:`I managed to open the file yesterday.`,explanation:`明确困难后实际成功。`,criteria:[`managed to`,`过去成果`]},{id:`gc26-p5`,prompt:`昨天必须登记，明天将必须登记，各写一句。`,reference:`We had to register yesterday. We will have to register tomorrow.`,explanation:`have to 可标过去与未来。`,criteria:[`had to`,`will have to`]},{id:`gc26-p6`,prompt:`不能拍照；纸票可选，用 mustn’t 与 don’t have to。`,reference:`You mustn’t take photos. You don’t have to bring a paper ticket.`,explanation:`一项禁止一项无义务。`,criteria:[`禁拍`,`票可选`]},{id:`gc26-p7`,prompt:`朋友累，你只建议休息，写建议及理由。`,reference:`You should take a break. You look tired.`,explanation:`should 不升级为强制命令，理由对应状态。`,criteria:[`建议`,`原形`,`理由`]},{id:`gc26-p8`,prompt:`没接电话，只猜可能忙，写谨慎现在推断与证据限制。`,reference:`She might be busy. A missed call does not prove that.`,explanation:`可能性保留未知。`,criteria:[`可能情态`,`be 原形`,`证据限制`]}],verification:[{id:`gc26-v1`,prompt:`填 ___ she have to register? Does/Can`,reference:`Does`,explanation:`have to 用 does 构成疑问。`,criteria:[`Does she have to`],skill:`structure`,critical:!1},{id:`gc26-v2`,prompt:`改正 We will can join tomorrow，保留未来能力。`,reference:`We will be able to join tomorrow.`,explanation:`不能并排两个核心情态，be able to 提供形式。`,criteria:[`will be able to`,`未来能力`],skill:`transformation`,critical:!0},{id:`gc26-v3`,prompt:`分别写禁止带饮料与无需带饮料，说明区别。`,reference:`You mustn’t bring drinks. You don’t have to bring drinks.`,explanation:`前者禁做，后者可选择。`,criteria:[`两形式`,`行动区别`],skill:`transformation`,critical:!0},{id:`gc26-v4`,prompt:`Yesterday I could hear music 必错因为具体时刻吗？`,reference:`不必错，hear 等感知动词可用 could 描述当时感知。`,explanation:`一次成功倾向不可扩大至所有动词。`,criteria:[`感知边界`,`无绝对禁令`],skill:`meaning`,critical:!1},{id:`gc26-v5`,prompt:`给新人写四条读书会说明：须报名、可借书、禁损坏、无需打印。`,reference:`You have to register. You can borrow books. You mustn’t damage them. You don’t have to print the form.`,explanation:`独立迁移允许自然同义形式，核对四种要求分别成立。`,criteria:[`义务`,`许可`,`禁止`,`可选`,`指代`],skill:`expression`,critical:!0},{id:`gc26-v6`,prompt:`自主写四句：过去技能、一次困难后成功、未来能力、朋友建议；解释选择。`,reference:`I could use a compass at twelve. I managed to finish a difficult walk. I will be able to join next month. You should check the weather.`,explanation:`内容可变，必须区分时间、结果和说话目的。`,criteria:[`一般技能`,`实际成功`,`未来形式`,`建议`,`四选择依据`],skill:`expression`,critical:!0}],review:[{id:`gc26-r1`,prompt:`一天后：在新情境用 mustn’t/needn’t，各解释行动。`,reference:`You mustn’t touch the wires. You needn’t bring a calculator.`,explanation:`禁止与不必迁移。`,criteria:[`禁止`,`无义务`]},{id:`gc26-r2`,prompt:`三天后：一个 could 技能句、一个 managed to 成功句。`,reference:`I could skate as a child. I managed to repair the skates yesterday.`,explanation:`不同时间和结果类型。`,criteria:[`技能`,`成功`]},{id:`gc26-r3`,prompt:`一周后：朋友误把可能当确认，用英文给推断与核实行动。`,reference:`He might be in the library. I’ll ask him to check.`,explanation:`推断保留未知，不用伪概率。`,criteria:[`可能性`,`核实`]}],sources:[{title:`British Council：许可与义务`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-permission-obligation`,supports:`can/could/may许可，must/have to立场倾向及过去had to，禁止和无义务`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council：过去能力`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/past-ability`,supports:`一般could与一次成功was able to/managed to，一次失败的couldn’t`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`BBC Learning English：can/could/be able to`,url:`https://downloads.bbc.co.uk/learningenglish/lowerintermediate/unit30/u30_6min_gram_can_could_be_able.pdf`,supports:`情态后原形，be able to必要形式，以及感知／思维动词的can/could边界`,accessed:`2026-10-03`,method:`官方PDF正文`}],revision:`official-reference-2026-10-03`,title:`情态动词`,module:`修饰、态度与语态`,moduleOrder:4,track:`basic`},{number:27,objectives:[`根据话题和信息焦点选择主动或被动`,`以时态化的 be 加过去分词构成被动`,`在问题、否定与施事表达中保持事件关系`],summary:`根据话题和信息焦点选择主动或被动`,prerequisites:[10,15,16,20,26],body:`### 学习目标

1. 根据话题和信息焦点选择主动或被动
2. 以时态化的 be 加过去分词构成被动
3. 在问题、否定与施事表达中保持事件关系

### 先检查前置知识

先学：第 10 课、第 15 课、第 16 课、第 20 课、第 26 课。先独立回答下面两题，再阅读本节的核对提示。

1. The team repaired the roof.谁受影响？

核对：the roof 是宾语，可在被动中成为话题主语。若做错，回到第 10 课。

2. repair 与 write 的过去分词？

核对：repaired 与 written。若做错，回到第 14 和 20 课。

词汇支持：build 建造；deliver 送达；damage 损坏；invite 邀请；roof 屋顶；agent 施事；by 由；with 用某工具。

### A · 改变信息起点，保留事件角色

The caretaker repaired the bench 与 The bench was repaired by the caretaker 描述同一事件：caretaker 仍为修理者，bench 仍为承受者。换语态主要改变句子从谁组织信息。上一句在谈损坏长椅，下一句从 bench 开始便于延续话题；若要说明谁负责，主动句可能更直接。被动不是自动高级，也不只用于不知道施事。

施事未知、明显或不重要时常省 by 短语；The notice was removed 不表示没有人撤下通知，只是此句未交代。责任、对比或来源重要时应保留施事，不能为多用被动隐去题目需要的人物关系。转换前先画施事—动作—受事，转换后角色必须相同。

They sent us a reminder 有受事与接受者，常可写 We were sent a reminder 或 A reminder was sent to us，焦点不同。并非每个双宾语动词都容许完全相同转换，需核对搭配，本课先掌握 give/send 的常见形式。

### B · 时间与视角由辅助框架保留

be + 过去分词是常见被动核心。is cleaned every day 表习惯，was cleaned yesterday 表过去，is being cleaned now 表进行，has been cleaned 表已完成，will be cleaned tomorrow 表未来。不能把所有被动改成 was + -ed。新主语单复数改变 be/have：The rooms are being cleaned；The room has been cleaned。

进行式转换保留 being，完成式保留 been。They are painting the gate → The gate is being painted；They have painted it → It has been painted。情态被动为 modal + be + 分词：The gate must be locked，不能因 gate 单数写 must is。write 的分词 written 与过去式 wrote 不同，规则词同形不能导致把所有过去式当分词。

否定和问题处理第一个助动词：The form hasn’t been checked；Has the form been checked?。不要写 Did it was checked?。昨天结束的事件不能因换被动改成现在完成。复杂完成进行被动不常用，实际表达宜改为清楚主动句，而非为了齐全表格造不自然长框架。

### C · 可被动化要看真实动词结构

The parcel arrived、An accident happened、The price rose 没有可提升的宾语，普通被动不成立，因此不写 was arrived、was happened、was risen。be/seem/become 后成分说明主语身份或状态，也不是动宾关系中的受事。中文有受影响或被字，不足以证明英文动词可以被动。

一些动词加介词结构可以被动，介词仍保留：They looked after the kitten → The kitten was looked after；They paid for the tickets → The tickets were paid for。after/for 属于原搭配，删掉改变结构。但有宾语也不表示任何状态或固定搭配都适合自然被动，如 have lunch 通常不机械写 Lunch was had。

be + 分词也可能说明状态或作形容词。The door is closed 可说门目前关闭；The door is being closed 明确动作进行中。判断结合时间、可恢复施事和句子目的，不能只凭分词外形要求所有句子唯一分析。写作歧义时补时间或明确状态。

### D · 施事、工具与流程段落

by 可引人或物施事／原因力量：The window was broken by a branch。with 常引工具：The lid was opened with a knife，不把刀当决定开盖的负责人。材料 made of/made from 又有自身搭配，不能把所有介词都视为被动的 by。角色取决于事件，by 后不一定是人。

围绕物品的流程可多用被动，负责人重要时插入主动句。表格先登记、再检查、最后送出，Rae checks the names 可明确职责。混合语态能兼顾话题和责任，优于为显示语法标签连续堆被动。每次转换核对四项：角色、时间、介词、读者必要信息。

独立任务给全新场景，让学习者先决定介绍负责人还是物品如何处理，再选语态，写一个问题确认状态。能解释主动或被动为什么更合适，才不只是机械调换词序。某种转换生硬时，选择自然改写并说明保留的意义，而非牺牲可读性。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| Rae repaired the lamp. / The lamp was repaired by Rae. | 主动从 Rae 讲／被动从灯讲。 | 事件角色不变。 |
| They clean it daily. / It is cleaned daily. | 习惯清扫／每天被清扫。 | 省施事不等于无人做。 |
| They are checking it. / It is being checked. | 正在检查／正在被检查。 | 进行视角保留 being。 |
| They have checked it. / It has been checked. | 已检查／已经检查好。 | 完成框架 has been。 |
| They must lock it. / It must be locked. | 必须锁／必须锁好。 | 情态后 be 原形。 |
| Jo looked after it. / It was looked after by Jo. | Jo 照料／由 Jo 照料。 | 介词 after 保留。 |
| The door is closed. / It is being closed. | 关闭状态／关门进行中。 | 状态和动作不同。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| The parcel was arrived yesterday. | The parcel arrived yesterday. | arrive 无宾语。 |
| The report has checked.（已核对） | The report has been checked. | 完成被动缺 been。 |
| The gate is painted now.（正在刷） | The gate is being painted now. | 本意进行需要 being，原句有其他可能意义。 |
| The baby was looked by Jo.（照料） | The baby was looked after by Jo. | 介词不可丢。 |

### 边界与使用选择

本课以常见 be 被动为主，get 被动和复杂 reporting 进阶再学。及物结构是重要起点而非所有自然被动的充分保证；be + 分词也可能状态形容词。正式文体不强制全篇被动，选择依话题、责任和真实结构。

### 学完后怎样检查自己

选一项校园维修，先写团队做的事，再以建筑物为话题写被动报告。包含现在安排、过去完成事件、当前进行状态各一句，明确是否需要施事。核对时态、主语数量、分词、工具与施事，最后说明选择被动的阅读效果。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：被动语态](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/passives)：焦点改变、施事省略、be加过去分词与常用时态。
- [British Council：主动与被动](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/active-passive-voice)：双宾语、介词动词被动保留介词、状态形容词与被动区别。
- [Cambridge English Grammar Today：被动形式](https://dictionary.cambridge.org/grammar/british-grammar/passive-forms)：不及物及系动词不能普通被动化，部分状态动词避免被动，复杂完成进行被动少用。`,practice:[{id:`gc27-p1`,prompt:`标 They delivered the books 的角色并以 books 开头改被动。`,reference:`They 施事，books 受事。The books were delivered.`,explanation:`原宾语复数作新主语，过去用 were。`,criteria:[`角色`,`were delivered`]},{id:`gc27-p2`,prompt:`They wash cups every evening 改被动保留习惯。`,reference:`Cups are washed every evening.`,explanation:`现在习惯不变过去。`,criteria:[`are washed`,`习惯`]},{id:`gc27-p3`,prompt:`They are repairing the roof now 改被动。`,reference:`The roof is being repaired now.`,explanation:`保留进行视角。`,criteria:[`is being repaired`]},{id:`gc27-p4`,prompt:`They have written the notice 改被动再问是否已写。`,reference:`The notice has been written. Has the notice been written?`,explanation:`完成分词 written，问题首助动词倒装。`,criteria:[`has been written`,`问题`]},{id:`gc27-p5`,prompt:`写所有门必须锁好，不用 must are。`,reference:`All the doors must be locked.`,explanation:`must 后 be 原形。`,criteria:[`范围`,`must be locked`]},{id:`gc27-p6`,prompt:`判断修正 An accident was happened at noon。`,reference:`An accident happened at noon.`,explanation:`happen 不及物。`,criteria:[`去 was`,`结构依据`]},{id:`gc27-p7`,prompt:`They paid for the tickets 以 tickets 开头改写。`,reference:`The tickets were paid for.`,explanation:`保留 pay for。`,criteria:[`were paid for`,`for`]},{id:`gc27-p8`,prompt:`介绍旧电脑，修理者未知：昨晚修好，询问是否检查过。`,reference:`The old computer was repaired last night. Has it been checked?`,explanation:`延续电脑话题，时间与问题独立核对。`,criteria:[`过去`,`完成问题`,`指代`]}],verification:[{id:`gc27-v1`,prompt:`The three rooms is/are cleaned daily 选并解释。`,reference:`are，rooms 为复数。`,explanation:`被动 be 仍与主语一致。`,criteria:[`are`,`复数`],skill:`structure`,critical:!1},{id:`gc27-v2`,prompt:`改正 The poster is being wrote，保留正在写。`,reference:`The poster is being written.`,explanation:`需过去分词 written。`,criteria:[`written`,`进行保留`],skill:`transformation`,critical:!0},{id:`gc27-v3`,prompt:`The librarian gave us two cards 以 We 改被动。`,reference:`We were given two cards by the librarian.`,explanation:`give 常可把接受者提升。`,criteria:[`We were given`,`数量`,`角色`],skill:`transformation`,critical:!0},{id:`gc27-v4`,prompt:`The price rose 为什么不能默认改为 was risen？`,reference:`rise 在此无宾语，price 原本是主语，不是受事宾语。`,explanation:`受影响不等于可被动。`,criteria:[`不及物`,`原角色`],skill:`meaning`,critical:!1},{id:`gc27-v5`,prompt:`写借书流程：每日登记书、这一本正检查、Rae 检查姓名、卡明天发；解释一处主被动选择。`,reference:`Books are registered daily. This book is being checked. Rae checks the names. Cards will be issued tomorrow. Rae 主动明确责任。`,explanation:`独立新场景核对焦点与时间，不要求逐字复制。`,criteria:[`一般被动`,`进行`,`主动责任`,`未来`,`选择依据`],skill:`expression`,critical:!0},{id:`gc27-v6`,prompt:`自主写四五句修理报告，含施事、工具、进行或完成、一个问题，说明事件角色。`,reference:`The shelf was repaired by Jo. It was fixed with two screws. It has been tested. Is it ready? Jo 是修理者，screws 是工具，shelf 是受影响的物品。`,explanation:`内容可自选，工具不等于负责人。`,criteria:[`施事`,`工具`,`时间视角`,`疑问`,`角色解释`],skill:`expression`,critical:!0}],review:[{id:`gc27-r1`,prompt:`一天后：新对象写习惯被动与进行被动。`,reference:`Plants are watered daily. One is being moved now.`,explanation:`两种视角不同。`,criteria:[`一般`,`being`]},{id:`gc27-r2`,prompt:`三天后：look after/pay for 主被动对照，指出介词。`,reference:`We looked after the turtle. It was looked after by us. after 保留。`,explanation:`转换不删除搭配。`,criteria:[`角色`,`介词`]},{id:`gc27-r3`,prompt:`一周后：自己流程段落留一主动责任两被动，解释焦点。`,reference:`Jo collects forms. They are checked daily. They are sent at five. 主动明确人，被动续表格。`,explanation:`兼顾责任和话题。`,criteria:[`主动`,`两被动`,`焦点`]}],sources:[{title:`British Council：被动语态`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/passives`,supports:`焦点改变、施事省略、be加过去分词与常用时态`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council：主动与被动`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/active-passive-voice`,supports:`双宾语、介词动词被动保留介词、状态形容词与被动区别`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：被动形式`,url:`https://dictionary.cambridge.org/grammar/british-grammar/passive-forms`,supports:`不及物及系动词不能普通被动化，部分状态动词避免被动，复杂完成进行被动少用`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`}],revision:`official-reference-2026-10-03`,title:`被动语态与语态选择`,module:`修饰、态度与语态`,moduleOrder:4,track:`basic`},{number:28,objectives:[`找出主语中心词，排除介词短语等干扰`,`根据结构与所表达的数量选择一致形式`,`识别允许变体的集合表达并用改写避免歧义`],summary:`找出主语中心词，排除介词短语等干扰`,prerequisites:[7,9,12,20,27],body:`### 学习目标

1. 找出主语中心词，排除介词短语等干扰
2. 根据结构与所表达的数量选择一致形式
3. 识别允许变体的集合表达并用改写避免歧义

### 先检查前置知识

先学：第 07 课、第 09 课、第 12 课、第 20 课、第 27 课。先独立回答下面两题，再阅读本节的核对提示。

1. The box of pencils 的中心词是什么？

核对：box，pencils 在 of 短语内修饰 box。若做错，回到第 7 和 10 课。

2. Every student 后用 is 还是 are？

核对：通常 is，every 逐个指单数成员。若做错，回到第 7 课数量限定。

词汇支持：each 每个；either 两者之一；neither 两者都不；none 没有一个；team 队；amount 总量；member 成员；a number of 许多。

### A · 圈主语中心，排除近邻干扰

The label on the boxes is missing 的中心是 label，on the boxes 只描述位置；The boxes with the blue label are missing 的中心是 boxes。不能取离动词最近的名词，也不能看到复数词就选 are。圈整个主语，暂时遮住修饰，读标签缺失／盒子缺失，再回到完整句子。

一般现在第三人称单数普通动词加 -s，be 用 is，have 用 has；有助动词后变化通常落在辅助框架：Does the label need a date? 的 need 不再加 -s。The labels have been checked 中 have 一致，checked 是过去分词，不额外单数变化。过去普通动词常无数对立，be 有 was/were。

句首也不一定是通常的主语位置：There is a lamp 与 There are two lamps 在正式书面常按存在的名词短语选择。口语 there’s 加复数会出现，不把口语现象一概当正式写作起点。结构和语体要各自检查。

### B · 逐个成员、数值与整体量

each student、every student、each of the students 正式常用单数谓语。everyone、someone、nobody 通常也单数；后文用 they 指性别未知的人，并不把前面的 everyone has 改成 have。each student and each teacher 仍可强调逐个，不因出现 and 就自动复数。

a number of students 通常是若干学生，用复数；the number of students 是人数数值，用单数。A pair of gloves is 的中心 pair，The gloves are 的中心 gloves。Ten minutes is enough 把时间作整体量；Ten minutes have passed 表分钟流逝，不能凭单位复数断所有量句只能 are。

部分比例还看所指对象：Half of the water is gone；Half of the bottles are empty。先读分母和统计对象，不能只看 half。news、mathematics 表面有 -s 却常单数，police 通常复数。词尾仅是线索，应学习词义与惯常数量解释。

### C · 真正并列与附加信息

Jo and Mina are ready 通常合并两个人为主语；The teacher, together with two students, is ready 中 together with 提供附加信息，不相当于 and。as well as、with 等需要按完整结构分析；希望两方同等参与就写 The teacher and two students are ready。

明确同一人时 My friend and coach is here 可用单数；朋友和教练为两个人时 My friend and my coach are here。题目必须交代现实身份，不能仅靠冠词数推断实际人数。两个名词有时形成习惯整体事物，也需语境，不拿零散列表让学生猜教师心中对象。

either…or/neither…nor 的混合单复数主语常有一致与文体困难，常见作法与较近项协调，但这不是所有结构的无条件最近原则。真实通知可拆为两个完整分句或采用不显数的框架，让责任和人数更清楚。改写清晰比在别扭长主语里强求一个词尾更有价值。

### D · 集合与 none 的合理变体

family、team、committee 等可把群体看作整体或成员，英式用法尤其有弹性：The committee is ready；The committee are sharing their ideas。美式书面常偏单数，但不能把有依据的另一标准用法判成错误。后续代词与观察方式协调；写 committee members are 可明确成员，避免读者猜。

none 并非永远只指 not one 而必须单数。所指不可数物质时通常单数，None of the water is clean；所指复数组时单数与复数均可见，依数量解释与语体。None of the answers is/are clear 在没进一步限制时不宜设唯一填空。Not one answer is clear 强调逐个无一；No answers are clear 明确复数组全否定。

允许变体不代表一致任意：The list of names are ready 仍错在中心 list；everyone are ready 不能用 singular they 辩护。判断链是主语—中心—数量解释—辅助框架—文体。综合通知还要还原谁参加、谁负责、哪些要求可选；形式和行动信息同时准确，才是真实掌握。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| The list of dates is here. / The dates on it are correct. | 清单在／日期正确。 | 中心分别 list 与 dates。 |
| Each learner has a card. / Learners have cards. | 逐个有／复数组有。 | 单数和复数结构。 |
| A number of seats are empty. / The number is six. | 若干座位空／空座位数为六。 | 成员与数值。 |
| A pair of boots is outside. / The boots are outside. | 一双／这些靴子。 | pair 与 boots 中心不同。 |
| Ten minutes is enough. / Two bottles are enough. | 整体时间量／两件瓶子。 | 数量解释不同。 |
| The team is ready. / The team members are sharing ideas. | 整体就绪／成员互动。 | 改写明确成员。 |
| None of the water is cold. / None of the cups is/are cold. | 无冷水／无冷杯。 | 不可数与复数组允许变体。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| The box of cards are missing. | The box of cards is missing. | box 中心单数。 |
| Everyone have a seat. | Everyone has a seat. | everyone 常单数。 |
| The number of guests are twelve. | The number of guests is twelve. | 人数数值单数。 |
| Does each member needs a badge? | Does each member need a badge? | 变化在 does，不再 needs。 |

### 边界与使用选择

集合、none 和整体量有依据的变体，不表示主谓任意一致。混合 or/nor 结构不教成全局最近原则，复杂通知可拆句。singular they 不改变 everyone 等主语的常规单数谓语。题目应交代人数和数量解释，不用缺信息情境强排自然用法。

### 学完后怎样检查自己

从自己的短文找五个主语，标出中心词与干扰短语。加入 each of、a/the number of、总量表达。最后把一个集合名词句改成 members 句，看代词和动词是否同步调整；不要只改一个 is 而留下矛盾指代。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：集合名词](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/group-nouns)：群体整体与成员解释，集合单复数变体，police复数。
- [Cambridge English Grammar Today：主谓一致](https://dictionary.cambridge.org/grammar/british-grammar/subject-verb-agreement)：主语人称数控制谓语，部分群体名词允许单复数。
- [Cambridge English Grammar Today：no/none/none of](https://dictionary.cambridge.org/de/grammatik/british-grammar/no-none-and-none-of)：none指不可数与可数，谓语依所指数量可单可复，不永远单数。`,practice:[{id:`gc28-p1`,prompt:`The folder with three maps is/are on the desk 选并解释。`,reference:`is，folder 是中心。`,explanation:`maps 在修饰短语不取代主语中心。`,criteria:[`is`,`folder`]},{id:`gc28-p2`,prompt:`Each player ___ a card；players ___ cards。`,reference:`has; have`,explanation:`逐个与群体不同。`,criteria:[`has`,`have`]},{id:`gc28-p3`,prompt:`A number of forms ___ missing；the number ___ ten。`,reference:`are; is`,explanation:`成员与数值不同。`,criteria:[`are`,`is`,`区别`]},{id:`gc28-p4`,prompt:`改正 Does the box contains books? 指单数变化处。`,reference:`Does the box contain books? does 体现单数。`,explanation:`助动词后原形。`,criteria:[`contain`,`does`]},{id:`gc28-p5`,prompt:`朋友兼教练是一人；朋友和教练两人。各写一句。`,reference:`My friend and coach is here. My friend and my coach are here.`,explanation:`题目已给现实人数。`,criteria:[`一人 is`,`两人 are`]},{id:`gc28-p6`,prompt:`把 The committee are sharing ideas 改为明确 members 主语。`,reference:`The committee members are sharing ideas.`,explanation:`明确复数成员，意义保留。`,criteria:[`members`,`are`,`保留意义`]},{id:`gc28-p7`,prompt:`None of the cups are clean 必错吗？再写 none 加不可数水。`,reference:`不必错。None of the water is clean.`,explanation:`复数组变体与不可数不同。`,criteria:[`接受变体`,`water is`]},{id:`gc28-p8`,prompt:`每个来宾需要卡；二十分钟这个时长足够登记。写两句。`,reference:`Each guest needs a card. Twenty minutes is enough to register.`,explanation:`逐个与总量分别单数。`,criteria:[`each needs`,`总量 is`]}],verification:[{id:`gc28-v1`,prompt:`The labels on this box ___ damaged，选 is/are。`,reference:`are`,explanation:`labels 为中心复数。`,criteria:[`are`,`中心`],skill:`structure`,critical:!1},{id:`gc28-v2`,prompt:`改正 The number of empty chairs have changed。`,reference:`The number of empty chairs has changed.`,explanation:`数值单数，变化落 has。`,criteria:[`has changed`,`数值解释`],skill:`transformation`,critical:!0},{id:`gc28-v3`,prompt:`teacher with two helpers is ready 改成同等 and 并列。`,reference:`The teacher and two helpers are ready.`,explanation:`附加改并列，数量变化。`,criteria:[`and`,`are`,`三人`],skill:`transformation`,critical:!0},{id:`gc28-v4`,prompt:`The team are putting on their coats 必错吗？给无歧义改写。`,reference:`不必，突出成员的英式用法可成立。The team members are putting on their coats.`,explanation:`集合解释与地区边界。`,criteria:[`有依据变体`,`members 改写`,`their`],skill:`meaning`,critical:!1},{id:`gc28-v5`,prompt:`写四句：一盒卡不见；若干学生没到；未到人数四；每人须登记。`,reference:`The box of cards is missing. A number of students have not arrived. The number of absent students is four. Each student has to register.`,explanation:`独立场景核对四种数量结构。`,criteria:[`box is`,`a number 复数`,`the number 单数`,`each 单数`,`四人事实`],skill:`expression`,critical:!0},{id:`gc28-v6`,prompt:`自主写四句小组状态，含整体时长、长主语、members 改写和 none，解释数量。`,reference:`Thirty minutes is enough. The bag of pencils is here. Group members are sharing notes. None of the ink is left.`,explanation:`内容自选；none 加复数组的合理单复数均可。`,criteria:[`整体量`,`主语中心`,`members`,`none 合理`,`数量依据`],skill:`expression`,critical:!0}],review:[{id:`gc28-r1`,prompt:`一天后：自造 of 干扰主语句，解释不跟最近名词。`,reference:`The colour of the doors is unusual；中心 colour。`,explanation:`新语境提取中心。`,criteria:[`中心`,`一致`]},{id:`gc28-r2`,prompt:`三天后：a number of/the number of 写同活动两句。`,reference:`A number of readers are here. The number of readers is twelve.`,explanation:`成员与人数数值。`,criteria:[`两框架`,`数量解释`]},{id:`gc28-r3`,prompt:`一周后：集合或 none 任选一变体，写明确改写。`,reference:`None of the answers are clear → No answers are clear。原复数不必错。`,explanation:`承认合理变体并能消歧义。`,criteria:[`变体依据`,`改写`,`意义`]}],task:[{id:`gc28-task1`,prompt:`写 6—8 句读书会入场说明：共 12 人、每人须登记、纸卡可选、禁饮食、座位正检查、Jo 负责查姓名、登记开放到 14:00、13:30 前回复。含 each、the number of、被动、主动责任句。`,reference:`The number of guests is twelve. Each guest has to register. You don’t have to bring a paper card. You mustn’t bring food or drinks. The seats are being checked. Jo checks the names. Registration is open until 2 p.m. Please reply by 1:30 p.m.`,explanation:`8 句参考可行，自然同义表达可接受；数量、行动与时间要求分别核对。`,criteria:[`6—8 句`,`12 人`,`each 单数`,`纸卡可选`,`禁止饮食`,`进行被动`,`Jo 责任`,`until 开放`,`by 回复`]}],sources:[{title:`British Council：集合名词`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/group-nouns`,supports:`群体整体与成员解释，集合单复数变体，police复数`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：主谓一致`,url:`https://dictionary.cambridge.org/grammar/british-grammar/subject-verb-agreement`,supports:`主语人称数控制谓语，部分群体名词允许单复数`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`},{title:`Cambridge English Grammar Today：no/none/none of`,url:`https://dictionary.cambridge.org/de/grammatik/british-grammar/no-none-and-none-of`,supports:`none指不可数与可数，谓语依所指数量可单可复，不永远单数`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`}],revision:`official-reference-2026-10-03`,title:`主谓一致`,module:`修饰、态度与语态`,moduleOrder:4,track:`basic`},{number:29,objectives:[`判断连接的是词、短语还是完整分句`,`用并列词准确表达添加、转折、选择与结果`,`修正逗号拼接并保持并列结构与信息关系`],summary:`判断连接的是词、短语还是完整分句`,prerequisites:[6,10,22,28],body:`### 学习目标

1. 判断连接的是词、短语还是完整分句
2. 用并列词准确表达添加、转折、选择与结果
3. 修正逗号拼接并保持并列结构与信息关系

### 先检查前置知识

先学：第 06 课、第 10 课、第 22 课、第 28 课。先独立回答下面两题，再阅读本节的核对提示。

1. I was tired. I went home.每句能独立吗？

核对：都可，均有主语与完整谓语。若做错，回到第 6 课。

2. in the morning and after class 连接完整分句吗？

核对：不是，连接两个时间短语。若做错，回到第 10 课成分。

词汇支持：and 并且；but 但是；or 或者；so 所以；yet 然而；nor 也不；however 然而；therefore 因此；clause 分句。

### A · 确定并列单位，保留共享框架

and、but、or 可以连接词、短语和分句。blue or green 连接颜色词，quiet but useful 连接性质，Rae reads and Jo listens 连接两个完整分句。先圈连接词两侧，说明它们在句中占什么位置，再检查结构。不把全部连接词当成连接两句，也不把 and 后每一项都当新主语。

同一主语的两个动作可写 Mina checked the list and corrected a date，第二个动作共享 Mina。如果换人纠正，就必须补 Jo corrected it。辅助框架也可共享：can read and write 的两个动词均原形，不能写 can read and writes。平行指两项能够同作某一结构的相同角色，不要求词数完全一样。

列举 a pen, two notebooks and a ruler 是三个名词短语，同作 bring 的宾语。列动作或从句则要找相应共同框架，不能只因中文语义相关便任意拼入不同类型。串列逗号有不同文体习惯，应保持一致；理解角色比只背逗号数量更重要。

### B · 添加、转折、选择和结果

and 添加有关信息，有时从语境表达先后：She packed her bag and left。若顺序重要，补 then 或明确 before/after，不能认定所有 and 都强制先后。but/yet 给预期反差，不仅表示内容不同；The bag is small but heavy 对通常小物较轻的预期形成转折。

or 给选择，是否互斥依情境。Bring a pen or a pencil 可以允许任一，不自动禁止两者都带；若确需二选一，说明 choose one。否定句的 or 要连同否定范围读，不能从连接词单独推断两项事实。通知要清楚行动要求，而非让读者猜排他含义。

so 常在前因后果组织中引结果：The printer broke, so we wrote by hand。不能反过来理解为手写导致故障。用 because 改写可把原因放后，但不能把同一因果普通写成 because…so 双连接。更换词前先还原两个事件和联系。

### C · 分句边界、逗号和 however

The room was full, we waited outside 有两个完整分句，在普通正式书面里仅用逗号连接构成拼接。可以加 so/and，使用分号，或拆句。and/but/so 连接较长分句或不同主语时常用逗号清楚分界，共享主语的短动作通常不必加；不是每个 and 前永远加或不加。

however 常是连接副词，不直接代替 but 连接形容词短语。quiet but crowded 不能改 quiet however crowded。分句层面可以 The hall is small. However, it is useful；或用分号再加 however。仅逗号 however 接新完整主干仍可能没有解决拼接。先找两边主语谓语，再处理标点。

And/But 可在对话、叙述或适当书面段落中起句，不是位置自动构成语法错误。正式文体可能偏好别种组织，那是风格层面。不能把句首连接词当修复缺谓语片段的办法，完整句子仍要能承载明确事实。

### D · 成对连接与真实通知

both…and、either…or、neither…nor、not only…but also 标示成对关系。两侧放相同角色：both the form and the photo；either email us or call us。若 either 前置整套动作，另一项却只给名词，会使共享结构难以辨认。倒装强调在进阶另学，本课从清楚普通排列开始。

成对主语的一致回第 28 课，不把近邻策略扩大到所有并列。混合单复数别扭时可改为两个完整分句，如 Either the helpers will lead, or the teacher will。短不一定清楚，通知要让学生知道谁负责哪一步。

练习先识别单位，再补共享成分，再选逻辑，最后写新通知。每个连接词都能对应一句解释：需要两项、提供选择、存在预期反差、给因果结果。遮词后让同学恢复关系，再检验英文。独立验收要同时看单位、人物角色、共享框架和标点，不只数指定连接词。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| Bring pens and rulers. / Bring pens or rulers. | 两项都带／按情境选项。 | 添加与选择不同，or 的排他性需语境。 |
| The room is small and quiet. / It is small but crowded. | 两性质／有预期反差。 | but 不仅意味着不同。 |
| Mina checked and corrected it. / Mina checked it and Jo corrected it. | 同人／两人。 | 共享主语与换人分工。 |
| It rained, so we stayed. / We stayed because it rained. | 结果在后／原因在后。 | 同一因果不双连接。 |
| The hall is useful but small. / It is useful. However, it is small. | 短语／句间转折。 | however 不直接替代短语中的 but。 |
| Choose either tea or milk. / Bring both tea and milk. | 二选一／两项都带。 | 成对关系不同。 |
| She can read and write. / She reads and writes daily. | 情态共享／普通现在。 | 共同框架决定词形。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| She can read and writes. | She can read and write. | 两动作共享 can 原形。 |
| The room was full, we waited. | The room was full, so we waited. / The room was full. We waited. | 完整分句不用单逗号拼接。 |
| The desk is old however useful. | The desk is old but useful. | however 不作短语并列的 but。 |
| Because it rained, so we stayed. | Because it rained, we stayed. | 同一关系不双连接。 |

### 边界与使用选择

并列不一定语义相同，有时故意对比，所谓“平行结构”不是必须同一种词尾。说话中可有修复和省略，本课评估可读的书面完整结构。so 还可作程度词，for 还可作介词，看到词形必须核对它在本句的角色。

### 学完后怎样检查自己

用同一对事实写添加、转折与结果三种版本，说明哪一种有实际证据。再找一处共享主语与一处完整分句并列。检查每边能否独立、标点是否有句界、第二动词是否与叙事一致。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish Teens：Conjunctions and/or/so/because/although](https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/conjunctions-or-so-because-although)：and添加、or选择、but转折、so结果与because原因，although/because通常不与but/so在同一主从层重复连接。
- [Cambridge：Grammar for English Language Teachers—Finite adverbial clauses](https://www.cambridge.org/core/books/abs/grammar-for-english-language-teachers/finite-adverbial-clauses/7C1789322E63F29942370636350495A4)：有限状语从句说明时间、原因、条件等，主从层级与连接标记。
- [Cambridge English Grammar Today：Conjunctions](https://dictionary.cambridge.org/grammar/british-grammar/conjunctions)：该站直接open受403限制。支持并列词、短语、从句的同层连接，以及both…and/either…or等配对和并列／从属区别。`,practice:[{id:`gc29-p1`,prompt:`blue or green、reads and writes、Rae reads but Jo listens 各连接什么？`,reference:`词、共享主语动作、两个分句。`,explanation:`先识别层级，再看共享成分。`,criteria:[`三层级`,`共享说明`]},{id:`gc29-p2`,prompt:`改正 She can read and writes。`,reference:`She can read and write.`,explanation:`两动词共享 can，均用原形。`,criteria:[`write`,`共享框架`]},{id:`gc29-p3`,prompt:`Mina opened the box. Mina checked it 合为共享主语句。`,reference:`Mina opened the box and checked it.`,explanation:`后项可省同一主语。`,criteria:[`and`,`共享 Mina`]},{id:`gc29-p4`,prompt:`任一笔可带，不禁止两种都带，用 or 写并说明是否必排他。`,reference:`Bring a pen or a pencil. 不自动禁止都带。`,explanation:`如需排他要额外指定选一。`,criteria:[`or 选择`,`无多加禁令`]},{id:`gc29-p5`,prompt:`打印机坏所以手写，用 so 和 because 各写一句。`,reference:`The printer broke, so we wrote by hand. We wrote by hand because the printer broke.`,explanation:`方向保留，不双连接。`,criteria:[`so 结果`,`because 原因`,`方向`]},{id:`gc29-p6`,prompt:`修正 The hall is small, however it is useful 的句界。`,reference:`The hall is small; however, it is useful. / The hall is small. However, it is useful.`,explanation:`连接副词不替代分句边界。`,criteria:[`句号或分号`,`however 标点`]},{id:`gc29-p7`,prompt:`用 both/either 写带表格和照片、邮箱或电话联系。`,reference:`Bring both the form and the photo. Either email us or call us.`,explanation:`成对两侧均名词或均动作。`,criteria:[`both 名词`,`either 动作`,`平行`]},{id:`gc29-p8`,prompt:`写三句新安排，含添加、转折、结果，并标单位。`,reference:`Bring paper and pens. I want to help, but I am busy. The hall is closed, so we’ll meet outside.`,explanation:`内容可变，关系和主干可恢复。`,criteria:[`三关系`,`单位`,`标点`]}],verification:[{id:`gc29-v1`,prompt:`Rae packed her bag and left 是否连接两个显式完整句？`,reference:`不是，第二动作共享 Rae。`,explanation:`并列谓语可省共享主语。`,criteria:[`动作并列`,`共享解释`],skill:`structure`,critical:!1},{id:`gc29-v2`,prompt:`改正 They must bring cards and wearing badges。`,reference:`They must bring cards and wear badges.`,explanation:`共享 must 后均原形。`,criteria:[`wear`,`共享`],skill:`transformation`,critical:!0},{id:`gc29-v3`,prompt:`The hall was closed. Jo chose another room 用 so 合并。`,reference:`The hall was closed, so Jo chose another room.`,explanation:`保留两主语和因果方向。`,criteria:[`so`,`两主语`,`因果`],skill:`transformation`,critical:!0},{id:`gc29-v4`,prompt:`句首 But 永远语法错吗？区别语法与风格。`,reference:`不是，可接前文形成转折；正式文体可能偏好别种组织。`,explanation:`不能把风格倾向当绝对语法禁令。`,criteria:[`非绝对`,`文体区别`],skill:`meaning`,critical:!1},{id:`gc29-v5`,prompt:`写四句会议变更：房小但够用、带纸笔、打印坏所以手写、邮箱或电话联系。`,reference:`The room is small but usable. Bring paper and pens. The printer is broken, so we’ll write by hand. Email us or call us.`,explanation:`新场景检验四关系，允许自然同义。`,criteria:[`转折`,`添加`,`因果`,`选择`,`主干`],skill:`expression`,critical:!0},{id:`gc29-v6`,prompt:`自主写四句分工，含共享主语、换主语、成对连接、however，解释两处标点。`,reference:`Mina collects and checks forms. Jo writes the list and Rae reads it. Bring both cards and photos. The time is short; however, we can finish.`,explanation:`评分依据结构与意义，不要求逐字参考。`,criteria:[`共享`,`换主语`,`成对平行`,`however 句界`,`标点解释`],skill:`expression`,critical:!0}],review:[{id:`gc29-r1`,prompt:`一天后：新场景合并同人两动作，解释省什么。`,reference:`Jo washed the cups and dried them. 第二项省 Jo。`,explanation:`共享指代必须清楚。`,criteria:[`两动作`,`共享`]},{id:`gc29-r2`,prompt:`三天后：同一因果写 so/because，不双连接。`,reference:`The road is blocked, so we walk. We walk because the road is blocked.`,explanation:`因果方向一致。`,criteria:[`so`,`because`,`无双连接`]},{id:`gc29-r3`,prompt:`一周后：自造并修正一拼接与一平行错，说明依据。`,reference:`错：The room is full, we’ll wait → 改：The room is full; we’ll wait（两完整句要正确分界）。错：We can read and discusses it → 改：We can read and discuss it（共享 can 后原形）。`,explanation:`句界和共享框架分别核对。`,criteria:[`句界`,`平行`,`依据`]}],sources:[{title:`British Council LearnEnglish Teens：Conjunctions and/or/so/because/although`,url:`https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/conjunctions-or-so-because-although`,supports:`and添加、or选择、but转折、so结果与because原因，although/because通常不与but/so在同一主从层重复连接`,accessed:`2026-10-03`,method:`直接读取语法说明及对话`},{title:`Cambridge：Grammar for English Language Teachers—Finite adverbial clauses`,url:`https://www.cambridge.org/core/books/abs/grammar-for-english-language-teachers/finite-adverbial-clauses/7C1789322E63F29942370636350495A4`,supports:`有限状语从句说明时间、原因、条件等，主从层级与连接标记`,accessed:`2026-10-03`,method:`直接读取公开章节摘要`},{title:`Cambridge English Grammar Today：Conjunctions`,url:`https://dictionary.cambridge.org/grammar/british-grammar/conjunctions`,supports:`该站直接open受403限制。支持并列词、短语、从句的同层连接，以及both…and/either…or等配对和并列／从属区别`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`}],revision:`official-reference-2026-10-03`,title:`并列连接与完整分句`,module:`从句与逻辑关系`,moduleOrder:5,track:`basic`},{number:30,objectives:[`识别主从关系并保留一个完整主句`,`表达时间、原因、目的、结果与让步`,`区分连词接分句与介词接名词短语`],summary:`识别主从关系并保留一个完整主句`,prerequisites:[18,22,25,29],body:`### 学习目标

1. 识别主从关系并保留一个完整主句
2. 表达时间、原因、目的、结果与让步
3. 区分连词接分句与介词接名词短语

### 先检查前置知识

先学：第 18 课、第 22 课、第 25 课、第 29 课。先独立回答下面两题，再阅读本节的核对提示。

1. Because I was tired.在一般正式段落中是完整独立句吗？

核对：通常是原因从句，需接主句。若做错，回到第 29 课句界。

2. because of 后能直接接 we were late 吗？

核对：通常不能，它接名词短语；because 可接分句。若做错，回到第 10 课短语与分句。

词汇支持：although 虽然；because 因为；so that 以便；while 当／而；as soon as 一……就；unless 除非；reason 原因；result 结果。

### A · 主从关系与完整主句

When the lesson ended, we left 的 when 从句提供主句时间。We left 有完整主干，When the lesson ended 单独作为普通书面句通常留下未完成关系，读者仍在等待发生了什么。口语问答可用片段，书面说明却应保持完整主句，不能把从属连接词当给片段补完整的办法。

从句可前后置：Because the road was blocked, we walked；We walked because the road was blocked。前置常用逗号划分，后置紧密原因或时间从句常不用，仍受信息、长度与语体影响，不是每个连词都强制逗号。结构先核对，标点随后。

since 可为原因或时间，while 可同时或对比；不能凭名单永久指定一个词属于一个功能。问“从句告诉主句什么信息”，再读事件和上下文。能说明每个主干与关系，比辨认一个连接词标签更可靠。

### B · 时间联系与未来安排

when 常给时刻，while 常给过程同时，before/after 给先后，until 给持续界限，as soon as 给紧接发生。When I arrived, they were eating 中一个进入时刻置于另一个过程背景，不能为连词相同而让两边时态一致。while 两个过程重叠，也不证明同一时刻开始结束。

普通未来时间状语常用现在形式：We’ll start when Jo arrives。不能因 tomorrow 在意思中出现便默认写 when Jo will arrive。主句可给将来、情态或指令；从句也可用完成视角 when she has finished，强调先完成。先理解各事件的时间参照，不按中文未来一律加 will。

I know when she will arrive 是所知道的时间问题内容，第 36 课详学；不是主句何时发生的时间状语。当前只做前引辨识，不能把全部 when 后 will 判错误。识别功能要先于形式口诀。

### C · 原因、让步及后接单位

because 后接完整原因分句，because of 接名词短语：because it was noisy 与 because of the noise。不能把 because of 后直接接 we were tired。since/as 可提供适当原因背景，because 常突出要回答的原因；意义相关不代表后接结构完全相同。

although/though/even though 给事实与预期反差：Although it rained, we went out。but 是并列转折，不能普通写 although… but 双连接同一对分句；because…so 也不双标记。中文双关联词习惯不能逐字照搬到英语。换连接词时，必须重新核对分句地位。

despite/in spite of 常接名词短语或 -ing，后者系统第 38 课再学，此处先比较 despite the rain 与 although it rained。even if 给假设，也不等于 even though 的已知事实。改写不仅换词，还要改后接结构并保留事实状态。

### D · 目的、结果与解释链

so that/in order that 可给目的，常与 can/could 等协调：I moved closer so that I could hear。to/in order to 的不定式目的在第 37 课详学，此处先理解完整分句。so…that 给程度导致结果：It was so noisy that we stopped。目的未必已实现，结果句在背景中报告后果。

so that 在一些情境也可表达结果，不能只凭两个词永远标目的。write a note so that nobody gets lost 给希望避免迷路的目的，不证明已经无人迷路。I spoke slowly, so everyone understood 若是报告成果，又不只是希望别人理解。读意图、事件顺序与上下文再判断。

写说明先给行动，补必要时间、原因或目的；太多层可拆句，不为显示复杂语法堆多个从句却丢主句。出口是标主句，说明每个从句回答何时、为何、为达何目的，并在变换位置时保持逻辑。练习从识别到结构改写再到新活动解释，不只检查连词出现次数。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| When Jo arrived, we started. / While Jo was writing, we waited. | 到达时／写作过程。 | 时刻与过程背景。 |
| We’ll leave when she finishes. / We know when she will finish. | 行动的时间条件／知道的内容。 | when 功能不同。 |
| We stayed because it rained. / We stayed because of the rain. | 分句／名词原因。 | 后接单位不同。 |
| Although it rained, we left. / It rained, but we left. | 让步／并列转折。 | 不双连接。 |
| Despite the noise, we worked. / Although it was noisy, we worked. | 名词／完整分句。 | 换词同时换结构。 |
| I spoke slowly so that they could follow. / I spoke so slowly that they grew bored. | 目的／程度结果。 | 意图与后果不同。 |
| Stay until the bus arrives. / Leave after it arrives. | 持续到／之后开始。 | 关系不同。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| Because we were tired.（普通完整通知句） | Because we were tired, we stopped. | 补完整主句。 |
| Because of we were late, we missed it. | Because we were late, we missed it. | because of 不接普通完整分句。 |
| Although it was cold, but we played. | Although it was cold, we played. | 同一关系不双连接。 |
| We’ll start when Jo will arrive.（普通时间条件） | We’ll start when Jo arrives. | 未来时间状语默认现在形式。 |

### 边界与使用选择

口语回答 Why?可说 Because…，这是语境允许的回答片段；独立正式段落仍要核对主句。will 在从句表示意愿等有例外，第 31 课说明，不能把“从句都不用 will”当绝对规则。连接词可多义，先说明关系再判断词。

### 学完后怎样检查自己

用同一件活动写时间、原因、目的、结果、让步五个关系，各有完整主句。再把 because 原因改成 because of 名词原因。若连词正确但只有从句，补全主线；若符合句型却因果没证据，重新写事实关系。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish Teens：Conjunctions and/or/so/because/although](https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/conjunctions-or-so-because-although)：原因because、让步although及它们与so/but重复连接的边界；从实际语境判断关系而非只背连接词清单。
- [Cambridge：Grammar for English Language Teachers—Finite adverbial clauses](https://www.cambridge.org/core/books/abs/grammar-for-english-language-teachers/finite-adverbial-clauses/7C1789322E63F29942370636350495A4)：有限状语从句说明时间、原因、条件等，主从层级与连接标记。
- [Cambridge English Grammar Today：Contrasting conjunctions](https://dictionary.cambridge.org/us/grammar/british-grammar/conjunctions-contrasting?q=Conjunc-)：but与although/though的层级差别、although后从句与despite后名词性表达的区别，以及however的连接方式。`,practice:[{id:`gc30-p1`,prompt:`When the bell rang, we stopped 标主句和时间从句。`,reference:`we stopped 为主句，when the bell rang 给停止时间。`,explanation:`识别关系不只看标记。`,criteria:[`主句`,`功能`]},{id:`gc30-p2`,prompt:`给 Because the hall was crowded 补完整主句。`,reference:`Because the hall was crowded, we waited outside.`,explanation:`补后果动作。`,criteria:[`完整主句`,`原因关系`]},{id:`gc30-p3`,prompt:`We’ll leave when she ___ (finish)，解释形式。`,reference:`finishes`,explanation:`普通未来时间状语用现在形式。`,criteria:[`finishes`,`功能`]},{id:`gc30-p4`,prompt:`because it was noisy 改 because of。`,reference:`because of the noise`,explanation:`改后接名词单位。`,criteria:[`because of`,`名词`]},{id:`gc30-p5`,prompt:`It was cold, but we stayed 用 although 改写。`,reference:`Although it was cold, we stayed.`,explanation:`从属让步不保留 but。`,criteria:[`although`,`无双连接`,`本意`]},{id:`gc30-p6`,prompt:`比较 so that they could follow 与 so slowly that they got bored。`,reference:`前句目的，后句程度结果。`,explanation:`意图与后果不同。`,criteria:[`目的`,`结果`]},{id:`gc30-p7`,prompt:`写三句计划：等到全员来后开始、因新生先核对名字、慢说便于理解。`,reference:`We’ll start when everyone arrives. We’ll check names because we have new students. We’ll speak slowly so that everyone can follow.`,explanation:`时间、原因、目的各清楚。`,criteria:[`时间`,`原因`,`目的`]},{id:`gc30-p8`,prompt:`用 despite 名词与 although 分句给同一事实让步。`,reference:`Despite the rain, we practised. Although it rained, we practised.`,explanation:`改变后接结构。`,criteria:[`名词`,`分句`,`同义`]}],verification:[{id:`gc30-v1`,prompt:`We were late ___ the traffic 用 because/because of。`,reference:`because of`,explanation:`traffic 是名词。`,criteria:[`because of`,`单位`],skill:`structure`,critical:!1},{id:`gc30-v2`,prompt:`改正 Although the room was small, but it was useful。`,reference:`Although the room was small, it was useful.`,explanation:`去双连接，主句保留。`,criteria:[`无 but`,`主句`],skill:`transformation`,critical:!0},{id:`gc30-v3`,prompt:`We will wait 加直到所有人到达。`,reference:`We will wait until everyone arrives.`,explanation:`持续界限与未来现在形式。`,criteria:[`until`,`arrives`],skill:`transformation`,critical:!0},{id:`gc30-v4`,prompt:`目的 so that we can learn 能证明已经学会吗？`,reference:`不能，目的不证明实现。`,explanation:`结果需额外证据。`,criteria:[`目的与结果`,`未知保留`],skill:`meaning`,critical:!1},{id:`gc30-v5`,prompt:`四句新活动：未来时间、原因、已知让步、目的，无双连接。`,reference:`We’ll start when Jo arrives. We’ll use the hall because more students are coming. Although it is small, it is quiet. We’ll speak clearly so that everyone can follow.`,explanation:`新迁移核对四种意义和结构。`,criteria:[`时间`,`原因`,`事实让步`,`目的`,`完整主干`],skill:`expression`,critical:!0},{id:`gc30-v6`,prompt:`自主写三种从句的调整计划，标主句，重写一 because of 版本。`,reference:`When the gate opens, we’ll enter. Because it is raining, we’ll use covers. Although the trip is short, we’ll check the route. 原因完整改写：Because of the rain, we’ll use covers。主句分别为 we’ll enter、we’ll use covers、we’ll check the route。`,explanation:`内容可变，结构转换和真实逻辑独立核对。`,criteria:[`三关系`,`主句`,`逻辑`,`because of 名词`,`意思保留`],skill:`expression`,critical:!0}],review:[{id:`gc30-r1`,prompt:`一天后：新事件写 when 时刻与 while 过程。`,reference:`When I woke, it was dark. While I was reading, Jo was cooking.`,explanation:`参照不同。`,criteria:[`时刻`,`过程`]},{id:`gc30-r2`,prompt:`三天后：同原因 because 与 because of，不双 so。`,reference:`We left because it was noisy. We left because of the noise.`,explanation:`后接单位变化。`,criteria:[`分句`,`名词`,`无双标`]},{id:`gc30-r3`,prompt:`一周后：写目的及程度结果，说明哪句报告后果。`,reference:`I sat closer so that I could hear. It was so loud that I moved away.`,explanation:`意图与实际后果不同。`,criteria:[`目的`,`结果`,`解释`]}],sources:[{title:`British Council LearnEnglish Teens：Conjunctions and/or/so/because/although`,url:`https://learnenglishteens.britishcouncil.org/grammar/a1-a2-grammar/conjunctions-or-so-because-although`,supports:`原因because、让步although及它们与so/but重复连接的边界；从实际语境判断关系而非只背连接词清单`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge：Grammar for English Language Teachers—Finite adverbial clauses`,url:`https://www.cambridge.org/core/books/abs/grammar-for-english-language-teachers/finite-adverbial-clauses/7C1789322E63F29942370636350495A4`,supports:`有限状语从句说明时间、原因、条件等，主从层级与连接标记`,accessed:`2026-10-03`,method:`直接读取公开章节摘要`},{title:`Cambridge English Grammar Today：Contrasting conjunctions`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/conjunctions-contrasting?q=Conjunc-`,supports:`but与although/though的层级差别、although后从句与despite后名词性表达的区别，以及however的连接方式`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`}],revision:`official-reference-2026-10-03`,title:`状语从句与逻辑关系`,module:`从句与逻辑关系`,moduleOrder:5,track:`basic`},{number:31,objectives:[`区分一般规律与真实开放的未来条件`,`用 if、unless 表达条件而不混淆预防或必要条件`,`让主句语气与条件意义、时间参照一致`],summary:`区分一般规律与真实开放的未来条件`,prerequisites:[18,26,29,30],body:`### 学习目标

1. 区分一般规律与真实开放的未来条件
2. 用 if、unless 表达条件而不混淆预防或必要条件
3. 让主句语气与条件意义、时间参照一致

### 先检查前置知识

先学：第 18 课、第 26 课、第 29 课、第 30 课。先独立回答下面两题，再阅读本节的核对提示。

1. 未来时间从句通常写 when she comes 还是 will come？

核对：comes，主句可表达未来。若做错，回到第 30 课。

2. mustn’t 与 don’t have to 含义？

核对：禁止与非必要，不能互换。若做错，回到第 26 课。

词汇支持：if 如果；unless 除非；in case 以防；only if 只有在……条件下；heat 加热；freeze 结冰；available 可用；condition 条件。

### A · 开放条件并不确认事件

If the hall is free, we’ll meet there 把是否空闲作为条件，主句给满足时的安排，不保证大厅一定空闲。条件可放前后，前置常用逗号。先分开假设和结果，判断两个部分各指哪时及说话者怎样看待可能性，再安排词形，不把 if 当已发生事实的标记。

零条件常用现在形式描述一般关联或惯例：If the battery is empty, the screen goes dark。关联是否准确需要实际事实，语法不能认证科学规律。when 常把事件视为预期时间关系，if 较明确保留条件；两者在一些习惯语境接近，但不能任意互换。通知若预期来访者会到，可以 when；到不到未知时可 if。

第一条件是未来开放可能的常见框架，if 从句常现在形式，主句常 will + 原形。编号只是教学工具，不覆盖所有真实 if 句。掌握应能说明何种情况满足、哪些行动安排已经确定、哪些事件仍未知。

### B · 依沟通目的选择主句，条件也有视角

If Jo finishes early, she can help us 给条件下能力或可能；If you need help, ask Mina 给指令；If the hall is full, we might use the library 给备选。主句不只有 will，can/might/should/命令式需符合表达目的。不为了符合第一条件标签把可能计划强改成确定承诺。

普通未来条件不默认用 will：If she arrives tomorrow, we’ll start。条件也可用进行或完成视角：If you are working tomorrow, I’ll call later；If you have finished by noon, show me the draft。形式取决于持续背景和先完成，不是所有 if 后只能一般现在。

will/would 在条件从句还可能表意愿、坚持、礼貌或后续结果，If you will help us, we can finish earlier 可以谈愿意帮忙。默认未来条件通常不用 will 不能扩大成所有 if 后禁 will。此处先识别边界，不强迫独立产出罕见形式；第 36 课 if 表是否的内容从句又有另一套功能。

### C · unless、only if 与预防性准备

unless 常表 except if：We won’t start unless everyone is ready 给只有全员准备好才可开始的规则。If anyone isn’t ready, we won’t start 在该背景逻辑相近。不能普通写 unless everyone isn’t ready 表除非全员准备好，多一个否定会反转行动条件。转换时实际模拟条件满足和不满足两种场景。

unless 不适于每个复杂 if not 句机械替换。本课先选清楚开放安排。only if 表必要条件：You can borrow it only if you sign in，不保证签到就一定有库存。普通 If you sign in, you can borrow it 可能给充分条件，两者并不自动同义。题目不明确规则，不能要求学生把一个方向倒成另一方向。

in case 表预防准备：Carry a cover in case it rains，是风险发生前就携带，后来不下雨也已准备。Take a taxi if it rains 表在满足雨条件时行动。两句行动时点不同，不能因为中文都含如果就换用。先问行动要预先做，还是等条件满足才做。

### D · 真实预案要核对条件逻辑

通学计划可列雨、公交延误、路线关闭等开放条件，再给行动、时间和责任。多个条件用 and/or 时，先说清全满足还是任一满足。若条件没满足会怎样，必须能从规则恢复；原句只给满足时可做，就不能无证据断言未满足必禁止。

we’ll use 表已定计划，we might use 表备选，we can use 可谈许可或可能。换情态会改变承诺程度，形式正确仍可能违背行动要求。逐条模拟条件为真、为假，尤其核对 unless 的否定是否多加，only if 是否被误当保证成功。

学习从识别开放情况、选择框架、转换明确规则到区分预防准备，再自主写新预案。公式不是全部英语条件系统；不把过去或未来词形机械配到所有场景，也不在无证据时确认条件一定发生。出口是能区分已知事实、尚未确定的条件、确定计划和可能行动。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| If the battery is empty, it stops. / If it is empty tomorrow, I’ll recharge it. | 一般关联／本次未来计划。 | 规律与开放安排不同。 |
| If Jo comes, we’ll start. / When Jo comes, we’ll start. | 保留条件／预期时间关系。 | 发生立场有差别。 |
| If you need help, ask Rae. / If Rae is free, she can help. | 指令／能力或可能。 | 主句不限 will。 |
| If she finishes, I’ll read it. / If she has finished by noon, I’ll read it then. | 行动完成／截至点先完成。 | 条件可以完成视角。 |
| We won’t start unless everyone is ready. / If anyone isn’t ready, we won’t start. | 必须全员就绪／有未就绪不开始。 | 此规则逻辑相近，不双否定。 |
| Carry a cover in case it rains. / Take a taxi if it rains. | 预防／条件满足后行动。 | 行动时点不同。 |
| Join only if you register. / If you register, you may still have to wait. | 登记必要／登记不保证即时参加。 | 必要条件不是自动充分条件。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| If it will rain tomorrow, we’ll stay.（普通天气条件） | If it rains tomorrow, we’ll stay. | 默认未来条件现在形式，特殊 will 义另读。 |
| Unless everyone isn’t ready, we won’t start.（除非都就绪） | Unless everyone is ready, we won’t start. | 多余否定反转规则。 |
| Bring a cover if it rains.（本意提前预防） | Bring a cover in case it rains. | 预先准备不等风险出现。 |
| If you register, you are guaranteed a seat.（原规定仅登记是必要条件） | You can join only if you register. | 不能把必要条件扩大为保证足够。 |

### 边界与使用选择

一般规律也可以过去叙述，If I missed the bus, I walked 描述过去习惯；不因为 if 就只许现在。if 和 when 对开放性与预期有差异，但实际选择受语境影响。把必要条件当保证结果是逻辑误读，需要看活动的其他要求。

### 学完后怎样检查自己

为一次郊游写天气条件、许可条件与预防准备三句，再把 unless 句还原 if not 检验含义。用两种条件真假说明读者会怎样做。若只有形式合公式却结果没有依据，重新限定情境或减少过强承诺。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Conditionals—zero, first and second](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second)：一般条件与开放未来条件、通常现在形式的if从句及主句未来表达；语境表达的现实态度和条件结果联系。
- [British Council LearnEnglish Teens：Conditionals](https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/conditionals)：条件从句与主句搭配、unless与否定条件、开放计划；结合明确真／假情境检查意义。
- [Cambridge English Grammar Today：Conditionals—if](https://dictionary.cambridge.org/es/gramatica/british-grammar/conditionals-if)：该站直接页访问受403限制。支持条件中will表示意愿等特殊用法，不能将普通未来条件简化为所有if一律禁will。
- [Cambridge English Grammar Today：Other conditional expressions](https://dictionary.cambridge.org/us/grammar/british-grammar/conditionals-other-expressions-)：该站直接页访问受403限制。支持unless的if not/except if意义、only if设置必要限制；不能把限制解除解释成行动一定发生。
- [Cambridge English Grammar Today：In case (of)](https://dictionary.cambridge.org/no/grammatikk/british-grammar/in-case-of)：通过官方搜索返回完整主题正文核验；该站直接页访问受403限制。支持in case为可能未来情境提前准备，与if条件触发行动不同；in case of加名词另有if and when意义。`,practice:[{id:`gc31-p1`,prompt:`If it rains, we’ll use the hall 能证明明天会下雨吗？`,reference:`不能，雨为开放条件。`,explanation:`假设不确认事件。`,criteria:[`未知保留`]},{id:`gc31-p2`,prompt:`填 If Jo ___ tomorrow, we’ll start (arrive)。`,reference:`arrives`,explanation:`普通未来条件用现在形式。`,criteria:[`arrives`,`功能依据`]},{id:`gc31-p3`,prompt:`If you need help 配指令；If Rae is free 配 can 结果。`,reference:`If you need help, ask Rae. If Rae is free, she can help.`,explanation:`主句按目的选择。`,criteria:[`指令`,`can 原形`]},{id:`gc31-p4`,prompt:`规则：没有确认就不能离开。We won’t leave if we don’t get confirmation 改 unless。`,reference:`We won’t leave unless we get confirmation.`,explanation:`unless 自带除非关系，不重复否定。`,criteria:[`unless 肯定条件`,`won’t leave`]},{id:`gc31-p5`,prompt:`提前携带备用笔，后来没坏也已准备，用 in case。`,reference:`Bring a spare pen in case yours breaks.`,explanation:`行动在风险前。`,criteria:[`in case`,`提前`]},{id:`gc31-p6`,prompt:`借书必须登记但可能无库存，用 only if 并说明不能推出什么。`,reference:`You can borrow a book only if you register. 不能推出登记就保证有书。`,explanation:`必要不自动充分。`,criteria:[`必要条件`,`不保证库存`]},{id:`gc31-p7`,prompt:`午前已经完成才展示，采用完成视角写条件指令。`,reference:`If you have finished by noon, show me the draft.`,explanation:`先完成与随后行动。`,criteria:[`have finished`,`by noon`,`指令`]},{id:`gc31-p8`,prompt:`新通学情境写 will 安排、might 备选、in case 预防各一句。`,reference:`If it rains, I’ll take the bus. If it is late, I might walk. I’ll carry a cover in case it rains.`,explanation:`内容可变，检查把握与时点。`,criteria:[`确定安排`,`备选`,`预防`]}],verification:[{id:`gc31-v1`,prompt:`写普通未来安排：若地图有误，我们会核对。`,reference:`If the map is wrong, we’ll check it.`,explanation:`条件现在形式。`,criteria:[`is`,`will check`],skill:`structure`,critical:!1},{id:`gc31-v2`,prompt:`改正 Unless you don’t sign in, you can’t enter，原规则未登记不许入。`,reference:`Unless you sign in, you can’t enter.`,explanation:`去多余否定保留必要条件。`,criteria:[`unless sign in`,`不能未登记入`],skill:`transformation`,critical:!0},{id:`gc31-v3`,prompt:`明确规则：大家没全就绪就不能开始。用 unless 和 if not 写两种表达。`,reference:`We can’t start unless everyone is ready. If not everyone is ready, we can’t start.`,explanation:`题目已交代必要条件，不把单向充分条件随意倒推。`,criteria:[`unless`,`if not`,`全员条件`,`逻辑一致`],skill:`transformation`,critical:!0},{id:`gc31-v4`,prompt:`所有 if 后 will 必错吗？解释意愿边界。`,reference:`不是，如 If you will help us, we can finish 可表愿意帮忙。`,explanation:`默认未来限制不覆盖所有 will 义。`,criteria:[`非绝对`,`意愿解释`],skill:`meaning`,critical:!1},{id:`gc31-v5`,prompt:`四条出行预案：雨坐公交、延误可能步行、未确认不出发、提前带充电器。`,reference:`If it rains, we’ll take the bus. If the bus is late, we might walk. We won’t leave unless we get confirmation. Bring a charger in case the battery runs low.`,explanation:`新迁移核对条件、把握、否定、预防。`,criteria:[`雨安排`,`可能备选`,`unless`,`预防`,`可执行`],skill:`expression`,critical:!0},{id:`gc31-v6`,prompt:`自选三条件学习计划，含 only if 必要条件、in case 准备；解释满足与不满足的行为。`,reference:`I’ll join only if I finish work. I’ll download notes in case the network fails. If I need help, I’ll ask Jo. 未完成工作不能加入；完成只是解除这条限制，并不保证必加入。下载发生在可能断网前；需要帮助时再求助。`,explanation:`不把必要条件当保证，内容可自然变化。`,criteria:[`三条件`,`必要`,`预先准备`,`场景解释`,`未知保留`],skill:`expression`,critical:!0}],review:[{id:`gc31-r1`,prompt:`一天后：新情境写一般规律与开放未来。`,reference:`If a light is red, drivers stop. If the light is red when we arrive, we’ll wait.`,explanation:`两功能不是同一参照。`,criteria:[`规律`,`未来`]},{id:`gc31-r2`,prompt:`三天后：unless 改 if not，用真/假场景检验。`,reference:`Unless Jo calls, I won’t leave. If Jo doesn’t call, I won’t leave. Jo 不来电→不离开；Jo 来电→这条限制解除，但句子没有承诺一定离开。`,explanation:`否定不任意增减。`,criteria:[`等义`,`场景解释`]},{id:`gc31-r3`,prompt:`一周后：同风险写 if 行动与 in case 预备，解释时点。`,reference:`Take a taxi if it rains. Carry a cover in case it rains.`,explanation:`满足后与风险前不同。`,criteria:[`if`,`in case`,`时点`]}],sources:[{title:`British Council LearnEnglish：Conditionals—zero, first and second`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second`,supports:`一般条件与开放未来条件、通常现在形式的if从句及主句未来表达；语境表达的现实态度和条件结果联系`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council LearnEnglish Teens：Conditionals`,url:`https://learnenglishteens.britishcouncil.org/grammar/b1-b2-grammar/conditionals`,supports:`条件从句与主句搭配、unless与否定条件、开放计划；结合明确真／假情境检查意义`,accessed:`2026-10-03`,method:`直接读取语法说明及对话`},{title:`Cambridge English Grammar Today：Conditionals—if`,url:`https://dictionary.cambridge.org/es/gramatica/british-grammar/conditionals-if`,supports:`该站直接页访问受403限制。支持条件中will表示意愿等特殊用法，不能将普通未来条件简化为所有if一律禁will`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`},{title:`Cambridge English Grammar Today：Other conditional expressions`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/conditionals-other-expressions-`,supports:`该站直接页访问受403限制。支持unless的if not/except if意义、only if设置必要限制；不能把限制解除解释成行动一定发生`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`},{title:`Cambridge English Grammar Today：In case (of)`,url:`https://dictionary.cambridge.org/no/grammatikk/british-grammar/in-case-of`,supports:`通过官方搜索返回完整主题正文核验；该站直接页访问受403限制。支持in case为可能未来情境提前准备，与if条件触发行动不同；in case of加名词另有if and when意义`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`}],revision:`official-reference-2026-10-03`,title:`真实条件句`,module:`从句与逻辑关系`,moduleOrder:5,track:`basic`},{number:32,objectives:[`以过去形式表达与现在现实有距离的假设`,`用过去完成表达过去未实现的条件`,`区分 wish 遗憾、hope 开放愿望及混合时间结果`],summary:`以过去形式表达与现在现实有距离的假设`,prerequisites:[20,22,26,31],body:`### 学习目标

1. 以过去形式表达与现在现实有距离的假设
2. 用过去完成表达过去未实现的条件
3. 区分 wish 遗憾、hope 开放愿望及混合时间结果

### 先检查前置知识

先学：第 20 课、第 22 课、第 26 课、第 31 课。先独立回答下面两题，再阅读本节的核对提示。

1. had finished 站在什么参照点看更早？

核对：过去参照点。若做错，回到第 22 课。

2. If it rains tomorrow, we’ll stay.是否声称一定下雨？

核对：没有，是开放条件。若做错，回到第 31 课。

词汇支持：would 会／愿意；wish 但愿；hope 希望；regret 遗憾；afford 负担得起；opportunity 机会；unreal 假设性非现实。

### A · 过去形式表示与现实有距离

If I had a quieter room, I would study there 的 had 可以设想当前与现实不同的房间条件，不是叙述昨日拥有。第二条件常用 if + 过去形式，主句 would/could/might + 原形，给假设结果、能力／可能或较弱可能。先标时间，再判形式，不见过去词形就全译为过去事件。

距离可为当前不符事实，也可为说话者认为较不可能的未来。If Jo comes tomorrow 与 If Jo came tomorrow 给不同观察立场，不能直接赋予官方固定概率。题目需交代背景或立场，不能仅凭 tomorrow 强设唯一条件式。表达立场不认证真实发生可能。

假设 be 常用 were，尤其 If I were you 的建议；was 在较非正式用法可见。课程先学清楚的 were 框架，不把所有自然 was 判错。普通假设不用 if would…would 双配；意愿、礼貌的 will/would 边界属不同意义，第 31 课已识别。

### B · 过去未实现：两部分分别回顾

If I had checked the timetable, I would have caught the train 在已知没检查且错过车背景下，设想过去另一条路径。条件 had + 分词，结果 would have + 分词；could/might have 给不同可能把握，不能都译成保证。时间线先放检查，再放登车，真实两项均没有发生。

若只用 would catch，结果可能转到当前／未来，不再同一过去回顾。If I had checked… 单独用在普通书面任务仍缺结果主句。分词和过去式也需区分，had went、would have took 会破坏辅助框架。先识别回顾视角，再核对词形。

反事实反思不表示过去可以改变，也不自动证明替代结果必然发生。可能结果仍依背景；I could have caught it 强调机会，不保证真的会赶上。课堂题给明确实际事实，独立任务允许有依据的 could/might 选择，不用一条参考答案锁死所有自然表达。

### C · 跨时联系：混合条件

If I had charged the tablet last night, I could use it now 把过去条件与当前能力相连。had charged 指昨晚，could use 指现在，now 明确时间差异。现在持续特征也可与过去结果相关，如 If I were more careful, I wouldn’t have lost it yesterday，但要有背景支持特征对昨日行为的关联。

混合不是随意拼两种模板。先写过去事实和当前状态，再说联系；题目只给昨日错过车，不能无证据增添今天仍迟到作为结果。转换应保留跨时影响，不造未提供的现实情况。

简短事实两句往往清楚：I didn’t charge it last night. I can’t use it now。需要设想另种结果时才合成混合句。学习者应能从长句还原这两层背景，说出每个动词指哪时，再确认是否有语义联系；只找到 had 与 would 不够。

### D · wish、if only 与开放 hope

I wish I had more time 常表当前时间不足的遗憾，wish 后过去形式与当前事实有距离；I wish I had checked earlier 回顾过去没做，采用过去完成。if only 常增加感叹强度，时间分析仍相同。hope 常给开放祝愿：I hope she arrives safely，不把普通未来愿望机械写 wish + would。

wish + could 可谈缺能力／机会，I wish I could join。wish + would 常希望别人行为或情况改变，可能表达对反复行为的不满：I wish they would speak more quietly。普通可控个人计划不宜机械写 I wish I would finish；按意思可用 I hope I finish 或 I wish I could finish。行动者、可控性、现实背景都须读清。

学习反思把实际事实、遗憾和下一次行动分开：昨日忘核对用过去事实，wish 回顾遗憾，下一次会核对为开放计划。虚拟语法不代替可执行行动。出口是用新背景构造当前假设、过去反思、跨时影响或愿望，再说明时间依据；不仅背四个固定模板。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| If Jo comes, we’ll start. / If Jo came, we would start. | 开放／距离设想。 | 立场不等精确概率。 |
| If I had time now, I would help. / If I had had time yesterday, I would have helped. | 当前／过去。 | 时间和框架不同。 |
| If I were you, I would check. / If it was warmer, we could sit outside. | 稳定 were 建议／较非正式 was 假设。 | was 非所有情境错。 |
| I would have caught it. / I might have caught it. | 假设较强结果／可能结果。 | 把握不同。 |
| If I had charged it, I could use it now. / If I charge it now, I can use it later. | 过去条件当前结果／开放当前行动后续结果。 | 跨时关系与开放行动不同。 |
| I wish I had more time. / I hope I have time tomorrow. | 当前遗憾／开放愿望。 | wish 与 hope 目的不同。 |
| I wish I had checked it. / I wish they would check it. | 自己过去遗憾／他人行为改变。 | 时间与行动者不同。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| If I would have time now, I would help. | If I had time now, I would help. | 普通距离条件不双 would。 |
| If I had checked, I would catch it yesterday. | If I had checked, I would have caught it. | 过去结果需回顾框架。 |
| I wish I know it now.（当前不知道） | I wish I knew it now. | 过去形式标当前距离。 |
| I wish I would finish tomorrow.（开放计划愿望） | I hope I finish tomorrow. / I hope I can finish tomorrow. | 不机械把将来愿望写 wish would。 |

### 边界与使用选择

第二条件常表达较远的可能，不一定证明客观不可能；语境明确事实相反时才作相反解释。were 是正式非真实形式，was 在相应日常语境可接受。wish you would 常有评价，不应当作所有未来事件的通用替代。

### 学完后怎样检查自己

写三条真实情况：当前资源不足、过去一次错失、开放未来希望。分别改当前假设、过去反事实、wish/hope 句，标出每个时间点。再试混合条件，说明原因与结果为何处于不同时间，不只展示长动词链。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Conditionals—zero, first and second](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second)：第二条件式表达与现实距离及设想，不把过去形式机械解释成过去时间，也不把条件类别当精确概率认证。
- [British Council LearnEnglish：Conditionals—third and mixed](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-third-mixed)：对过去的反事实回顾、过去条件影响现在等混合时间组合；先交代真实背景，再核对条件和结果时间。
- [British Council LearnEnglish：Wishes—wish and if only](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/wishes-wish-if-only)：对现在的wish加过去形式、过去遗憾加过去完成形式、wish would的行为改变与hope开放希望区别。
- [Cambridge English Grammar Today：Conditional sentences](https://dictionary.cambridge.org/grammar/british-grammar/conditional-sentences)：过去形式表达假设距离、条件语义与事实背景，以及非固定模板的条件结果搭配。`,practice:[{id:`gc32-p1`,prompt:`If I had more time now 的 had 一定过去事实吗？`,reference:`不是，标当前现实距离。`,explanation:`now 与背景给参照。`,criteria:[`当前`,`距离`]},{id:`gc32-p2`,prompt:`现在无空，用 had/would 写愿意帮忙假设。`,reference:`If I had time, I would help.`,explanation:`条件过去形式、结果原形。`,criteria:[`had`,`would help`]},{id:`gc32-p3`,prompt:`昨日没查时刻表错过车，用第三条件反思。`,reference:`If I had checked the timetable, I would have caught the train.`,explanation:`条件与结果均过去回顾。`,criteria:[`had checked`,`would have caught`]},{id:`gc32-p4`,prompt:`把假设过去结果降为 might，解释差别。`,reference:`I might have caught it，表达可能而非保证。`,explanation:`情态改变把握。`,criteria:[`might have`,`可能性`]},{id:`gc32-p5`,prompt:`昨晚没充电所以现在不能用，写混合。`,reference:`If I had charged it last night, I could use it now.`,explanation:`过去条件、当前结果。`,criteria:[`had charged`,`could use now`,`跨时`]},{id:`gc32-p6`,prompt:`现在不知道答案、昨天没核对，用 wish 各写。`,reference:`I wish I knew the answer. I wish I had checked it.`,explanation:`当前距离与过去遗憾不同。`,criteria:[`knew`,`had checked`]},{id:`gc32-p7`,prompt:`开放希望明日安全到；希望别人降声音，各写。`,reference:`I hope they arrive safely tomorrow. I wish they would speak more quietly.`,explanation:`开放愿望与行为改变。`,criteria:[`hope`,`wish would`,`目的`]},{id:`gc32-p8`,prompt:`写三句反思：过去事实、wish 遗憾、下一次计划。`,reference:`I forgot the map. I wish I had packed it. I’ll check my bag next time.`,explanation:`反思与行动分开。`,criteria:[`事实`,`遗憾`,`计划`]}],verification:[{id:`gc32-v1`,prompt:`现在没安静房间：If I ___ a quiet room, I would study there。`,reference:`had`,explanation:`当前限制用过去形式表示距离。`,criteria:[`had`,`当前依据`],skill:`structure`,critical:!1},{id:`gc32-v2`,prompt:`改正 If I had revised, I would passed yesterday。`,reference:`If I had revised, I would have passed yesterday.`,explanation:`过去结果 would have +分词。`,criteria:[`would have passed`,`时间`],skill:`transformation`,critical:!0},{id:`gc32-v3`,prompt:`昨晚未下载所以今天无资料，改混合条件。`,reference:`If I had downloaded the notes last night, I would have them today.`,explanation:`主句 have 为实义拥有，不是完成助动词。`,criteria:[`had downloaded`,`would have notes today`,`跨时解释`],skill:`transformation`,critical:!0},{id:`gc32-v4`,prompt:`wish would 与 hope 在所有明日愿望可互换吗？`,reference:`不能，hope 常开放祝愿，wish would 常希望行为改变；看行动者和背景。`,explanation:`未来词不自动决定 would。`,criteria:[`目的区别`,`语境`],skill:`meaning`,critical:!1},{id:`gc32-v5`,prompt:`昨日未读要求交错格式，现在不能重交。写过去反思、现在遗憾、下次计划。`,reference:`If I had read the instructions, I would have used the correct format. I wish I could resubmit it. I’ll check the format next time.`,explanation:`新场景保持实际事实，不虚构现在能重交。`,criteria:[`过去条件结果`,`当前机会遗憾`,`开放行动`,`事实保留`],skill:`expression`,critical:!0},{id:`gc32-v6`,prompt:`自主给现在限制、过去失误、跨时影响，写对应假设或 wish，解释两时间参照。`,reference:`事实：我现在没有桌子，昨天没保存文件，所以现在手里没有文件。If I had a desk, I could work here. I wish I had saved the file. If I had saved it yesterday, I would have it now. 第一句针对现在限制；wish 回顾昨天失误；混合条件的条件指昨天，结果指现在。`,explanation:`自主构造要求实际背景可恢复，不只是拼框架。`,criteria:[`当前`,`过去`,`跨时`,`事实背景`,`时间说明`],skill:`expression`,critical:!0}],review:[{id:`gc32-r1`,prompt:`一天后：同动词写当前假设与过去反思，标时间。`,reference:`If I knew it now, I would answer. If I had known it yesterday, I would have answered.`,explanation:`形式跟参照。`,criteria:[`当前`,`过去`]},{id:`gc32-r2`,prompt:`三天后：新情境 wish 当前与过去两愿望。`,reference:`I wish I lived nearer. I wish I had left earlier.`,explanation:`距离与回顾不同。`,criteria:[`过去形式`,`过去完成`]},{id:`gc32-r3`,prompt:`一周后：真实失误改混合句，再写未来行动。`,reference:`If I had charged it last night, I could use it now. I’ll charge it tonight.`,explanation:`反思不替代执行计划。`,criteria:[`跨时`,`计划`,`背景`]}],sources:[{title:`British Council LearnEnglish：Conditionals—zero, first and second`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second`,supports:`第二条件式表达与现实距离及设想，不把过去形式机械解释成过去时间，也不把条件类别当精确概率认证`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council LearnEnglish：Conditionals—third and mixed`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-third-mixed`,supports:`对过去的反事实回顾、过去条件影响现在等混合时间组合；先交代真实背景，再核对条件和结果时间`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council LearnEnglish：Wishes—wish and if only`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/wishes-wish-if-only`,supports:`对现在的wish加过去形式、过去遗憾加过去完成形式、wish would的行为改变与hope开放希望区别`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Conditional sentences`,url:`https://dictionary.cambridge.org/grammar/british-grammar/conditional-sentences`,supports:`过去形式表达假设距离、条件语义与事实背景，以及非固定模板的条件结果搭配`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`}],revision:`official-reference-2026-10-03`,title:`非真实条件与 wish`,module:`从句与逻辑关系`,moduleOrder:5,track:`basic`},{number:33,objectives:[`把定语从句连接到明确的先行词`,`依据从句中的成分缺口选择关系词`,`区分主语与宾语关系词及可省略条件`],summary:`把定语从句连接到明确的先行词`,prerequisites:[9,10,29,30],body:`### 学习目标

1. 把定语从句连接到明确的先行词
2. 依据从句中的成分缺口选择关系词
3. 区分主语与宾语关系词及可省略条件

### 先检查前置知识

先学：第 09 课、第 10 课、第 29 课、第 30 课。先独立回答下面两题，再阅读本节的核对提示。

1. The girl helped me.谁作主语？

核对：the girl，me 宾语。若做错，回到第 10 课。

2. I met the girl.谁作宾语？

核对：the girl，I 主语。若做错，回到第 10 课。

词汇支持：relative clause 定语从句；antecedent 先行词；who 谁／关系词；which 哪个／关系词；that 关系词；borrow 借入；recommend 推荐。

### A · 用从句识别对象，保留完整主句

The bag that has a red label is mine 先以 bag 为名词中心，再用从句识别哪只包；主句仍为 The bag is mine。被识别的名词或名词短语称先行词，从句通常紧贴它。不是把两句用 that 粘住就完成；先说读者需要识别哪个对象，再检查从句修饰位置。

从句内部也要有清楚谓语。The learner who sits by the window needs help 有 sits 与 needs 两个谓语，分别属于从句和主句。去掉从句还能语法成句并不说明它不重要，可能失去是哪位学生的信息。只写 The learner who sits by the window 则通常只有名词短语，未说明主句行为。

本课先学限制性关系从句，帮助从一个集合识别对象，通常不用包围它的逗号。第 35 课再学给已知对象补充信息的从句。标点改变信息组织，不要为方便读长句随意加逗号。识别功能、两层主干与紧贴位置是建立关系句的第一步。

### B · 从两句恢复成分缺口

把 The learner sits by the window 与 The learner needs help 合并，前一个 learner 由 who/that 承担：The learner who sits by the window needs help。who 在从句作主语，因此不用再加 he。把 I helped the learner 与 The learner is here 合并，who/that 在从句作 helped 的宾语：The learner who I helped is here；不要再加 him。

人常用 who/that，物常用 which/that。不能把选词只当先行词性质匹配，还要检查从句内部缺哪个成分。The book that explains the map 的 that 作主语；The book that I borrowed 的 that 作宾语。宾语句里已经有 I，并不表示关系词没有工作，而是它代表被借的 book。

初步检查方法是把先行词放回从句：the learner sits；I helped the learner。若恢复后仍多一个 he/him/it，则关系角色重复。无缺口的从句可能是内容或状语而非普通本课关系句，第 36 课再作对比。必须恢复实际句子，不能只背 who 后有动词、which 后有名词的表面规则。

### C · 主语不可省，宾语常可省

限制性关系从句中 who/which/that 作宾语时常可省：The form I signed is here。作主语时通常不可省：The form that arrived is here。只看关系词后是否有名词并不总够，要识别从句主语：The form that the assistant sent… 是宾语；The form that contains my name… 是主语。

省略不改变受事角色，也不允许恢复一个重复 it。The form I signed it is here 在普通标准表达中重复宾语。关系词含所属或介词前置的形式不按这个简单省略规则，第 34 课详学；非限制性关系从句宾语也不能同样省，第 35 课再学。规则边界要与本课结构一起记。

主语关系词后的动词与所指对象协调：the learner who needs help；the learners who need help。主句也有自己的一致：The learners who need help are here。先把主从层分开再检查，不能用靠近的 help 或 window 当主句主语。复杂句中的一致继续用第 28 课方法。

### D · 识别范围与自然写作

The books that need repair are on this shelf 通常挑出需要修的那部分书，不断言所有书都坏。若只给部分成员条件，不能随手把意义扩大为整组。修饰位置要紧贴对象：I met the sister of Jo who lives nearby 可能让人猜住附近的是谁，可拆成明确简单句：若姐姐住附近，写 I met Jo’s sister. She lives nearby；若 Jo 住附近，写 I met Jo’s sister. Jo lives nearby。先确定实际所指，再决定是否合并。

课堂合并顺序：两句中找重复名词，决定哪句为主句，恢复关系角色，再用合适关系词并删除重复代词。不会因一处 that 就完成所有分析。若第二句提供的是完整事实内容，而非描述名词关系，应等第 36 课内容从句，不强行使用本课模板。

真实应用可给失物、选书或求助学生写识别说明。先提供足够区别特征，再给主句行动，至少能让同学从几个对象中选出正确一个。验收最后两题换全新名词与动词，要求说明缺口和完整主句，不只照原句换词。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| The student who needs help is here. / The students who need help are here. | 一名／多名需要帮助的学生。 | 从句和主句分别一致。 |
| The learner who helped me is here. / The learner who I helped is here. | 帮助我的／我帮助的。 | 主语与宾语角色相反。 |
| The form that arrived is here. / The form I signed is here. | 到达的／我签的。 | 主语关系词不可省，宾语可省。 |
| The bag that has a red label is mine. / The bag that I labelled is mine. | 带标签／由我贴标签。 | that 在从句承担不同角色。 |
| The books that need repair are here. / All these books need repair. | 需要修的那部分／全部需要修。 | 限制识别不自动覆盖整组。 |
| This is the map which I drew. / This is the map I drew. | 有宾语关系词／省宾语关系词。 | 限制性可同义省略，无额外 it。 |
| The child who found it called me. / The child I found called me. | 孩子找到了物品／我找到了孩子。 | 恢复原句以检查事件角色。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| The boy who he called is Jo.（男孩打电话） | The boy who called is Jo. | who 作主语不重复 he。 |
| The book that I read it was useful. | The book that I read was useful. | 关系宾语不再加 it。 |
| The form arrived is here.（想用完整关系从句） | The form that arrived is here. | arrived 关系句主语不能直接省；本课不以分词简化替代。 |
| The students who needs help are here. | The students who need help are here. | 关系主语所指 students 复数。 |

### 边界与使用选择

日常限制性定语从句 who 作宾语很常见，不能只接受 whom。that 与 which 指物在限制性从句中都可能自然，部分写作规范有偏好，课程接受符合结构的表达。某些最高级等环境偏好 that，但不把风格偏好说成任何语境绝对禁用 which。

### 学完后怎样检查自己

从四对短句合成定语从句：人／物各一个主语缺口和一个宾语缺口。画箭头回先行词，圈出缺口位置，把可省与不可省的关系词分开。读主句单独骨架，确认仍有自己的谓语，再检查是否重复代词。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Defining relative clauses](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/relative-clauses-defining-relative-clauses)：限制性关系从句帮助识别对象，who/which/that角色与主语／宾语关系词省略差异；删除重复主语或宾语。
- [British Council LearnEnglish：Relative pronouns and relative clauses](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/relative-pronouns-relative-clauses)：关系词作从句成分、宾语省略和介词关系；按内部缺口而非先行词中文类别选词。
- [Cambridge：Unlock 3 第四级第7单元公开样章](https://www.cambridge.org/sites/default/files/media/documents/Unlock3e_LS_SB_L4_U07.pdf)：关系成分角色、识别与补充信息、非限制性逗号、that与省略限制；使用原创情境，不复制样章例题。`,practice:[{id:`gc33-p1`,prompt:`The bag that has a red label is mine 标先行词、从句、主句。`,reference:`bag；that has a red label；The bag is mine。`,explanation:`关系句识别 bag，主句仍完整。`,criteria:[`先行词`,`从句`,`主句`]},{id:`gc33-p2`,prompt:`合并 The girl helped us. The girl is Rae，girl 作从句主语。`,reference:`The girl who/that helped us is Rae.`,explanation:`关系词替代重复 girl，不加 she。`,criteria:[`who/that 主语`,`无 she`,`主句`]},{id:`gc33-p3`,prompt:`合并 I helped the girl. The girl is Rae，从句宾语。`,reference:`The girl who/that I helped is Rae. / The girl I helped is Rae.`,explanation:`宾语关系可省，不加 her。`,criteria:[`宾语角色`,`无 her`,`主句`]},{id:`gc33-p4`,prompt:`判断 the map that arrived 与 the map I drew 哪个可省关系词。`,reference:`后者宾语可省；前者主语不可省。`,explanation:`恢复 map arrived 和 I drew map。`,criteria:[`两角色`,`省略边界`]},{id:`gc33-p5`,prompt:`改正 the books that explains the rule are useful。`,reference:`The books that explain the rule are useful.`,explanation:`从句主语指 books 复数，主句 are 也复数。`,criteria:[`explain`,`are`,`两层`]},{id:`gc33-p6`,prompt:`只有蓝标签那只包是你要找的，用关系句写完整说明。`,reference:`The bag that has a blue label is the one I’m looking for.`,explanation:`限定标签以区分对象，允许更简单完整主句。`,criteria:[`标签识别`,`完整主句`,`范围`]},{id:`gc33-p7`,prompt:`给 the learner who…is here 与 the learner who I…is here 各补一个动作，解释谁做。`,reference:`The learner who called is here. The learner who I called is here.`,explanation:`前者学生打电话，后者我打给学生。`,criteria:[`两句完整`,`角色区分`]},{id:`gc33-p8`,prompt:`写一个失物辨认句，使用宾语关系省略，再恢复两个原句。`,reference:`The notebook I lost is blue. I lost the notebook. The notebook is blue.`,explanation:`省略宾语角色仍可恢复。`,criteria:[`省略宾语`,`两原句`,`意义`]}],verification:[{id:`gc33-v1`,prompt:`The person ___ found the ticket is here 用 who/零选择解释。`,reference:`who/that，作 found 主语不可省。`,explanation:`缺主语不是宾语省略。`,criteria:[`主语关系`,`不可省`],skill:`structure`,critical:!1},{id:`gc33-v2`,prompt:`改正 The pen that Jo borrowed it is missing。`,reference:`The pen that Jo borrowed is missing. / The pen Jo borrowed is missing.`,explanation:`宾语代表 pen 不重复 it。`,criteria:[`无 it`,`主句完整`],skill:`transformation`,critical:!0},{id:`gc33-v3`,prompt:`合并 Mina repaired the chair. The chair is old，以 chair 开头关系句。`,reference:`The chair that/which Mina repaired is old. / The chair Mina repaired is old.`,explanation:`宾语缺口，主句描述 chair。`,criteria:[`chair 先行词`,`Mina repaired 缺口`,`old 主句`],skill:`transformation`,critical:!0},{id:`gc33-v4`,prompt:`The students who passed left 能推出全班都通过吗？`,reference:`不能，通常只识别通过的学生。`,explanation:`限制范围不覆盖整个班。`,criteria:[`不能推出`,`部分集合`],skill:`meaning`,critical:!1},{id:`gc33-v5`,prompt:`帮同学识别两物：由 Jo 画的地图、能显示车次的屏幕，各写完整句，标宾语/主语缺口。`,reference:`The map Jo drew is on the desk. The screen that shows train times is near the door. map 对应 drew 的宾语缺口；screen 对应 shows 的主语缺口。`,explanation:`独立迁移两个角色不同，允许自然位置和主句。`,criteria:[`宾语关系`,`主语关系`,`主句完整`,`角色说明`],skill:`expression`,critical:!0},{id:`gc33-v6`,prompt:`自选一个人同写帮助我／我帮助的人两句，解释人物角色并检验主从一致。`,reference:`The student who helps me sits here. The student I help sits there. 前者学生帮助我，后者我帮助学生。`,explanation:`内容自选，须保留关系方向，不用重复代词。`,criteria:[`两方向`,`无重复`,`主从完整`,`一致`,`解释`],skill:`expression`,critical:!0}],review:[{id:`gc33-r1`,prompt:`一天后：新名词写主语关系句，说明不可省原因。`,reference:`The machine that makes labels is new. that 作 makes 主语。`,explanation:`新语境提取缺口。`,criteria:[`主语`,`完整主句`,`不可省`]},{id:`gc33-r2`,prompt:`三天后：新动词写宾语关系省略与不省两版。`,reference:`The card that I collected is here. The card I collected is here.`,explanation:`同义且不补重复 it。`,criteria:[`宾语`,`两版本`,`无重复`]},{id:`gc33-r3`,prompt:`一周后：写识别某部分对象的句子，说明不能推出整组什么事实。`,reference:`The chairs that are broken need repair，不能推出所有椅子都坏。`,explanation:`范围意识随结构迁移。`,criteria:[`限制句`,`范围解释`]}],sources:[{title:`British Council LearnEnglish：Defining relative clauses`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/relative-clauses-defining-relative-clauses`,supports:`限制性关系从句帮助识别对象，who/which/that角色与主语／宾语关系词省略差异；删除重复主语或宾语`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council LearnEnglish：Relative pronouns and relative clauses`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/relative-pronouns-relative-clauses`,supports:`关系词作从句成分、宾语省略和介词关系；按内部缺口而非先行词中文类别选词`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge：Unlock 3 第四级第7单元公开样章`,url:`https://www.cambridge.org/sites/default/files/media/documents/Unlock3e_LS_SB_L4_U07.pdf`,supports:`关系成分角色、识别与补充信息、非限制性逗号、that与省略限制；使用原创情境，不复制样章例题`,accessed:`2026-10-03`,method:`直接读取出版商公开PDF中第155—156页的语法框（PDF第9—10页）`}],revision:`official-reference-2026-10-03`,title:`定语从句与成分缺口`,module:`从句与逻辑关系`,moduleOrder:5,track:`basic`},{number:34,objectives:[`区分所属、地点、时间与原因关系`,`根据从句缺口选择 where/when 或 which/that`,`在介词关系结构中保持搭配与清晰指代`],summary:`区分所属、地点、时间与原因关系`,prerequisites:[7,9,25,33],body:`### 学习目标

1. 区分所属、地点、时间与原因关系
2. 根据从句缺口选择 where/when 或 which/that
3. 在介词关系结构中保持搭配与清晰指代

### 先检查前置知识

先学：第 07 课、第 09 课、第 25 课、第 33 课。先独立回答下面两题，再阅读本节的核对提示。

1. This is the town ___ I visited.从句少什么？

核对：visited 缺宾语，不是仅缺地点状语。若做错，回到第 33 课。

2. her brother 中的 her 表达什么？

核对：所属限定，需与名词一起理解。若做错，回到第 9 课。

词汇支持：whose 其……的；where 在……处；when 在……时；why……的原因；in which 在其中；at which 在该点；reason 原因；owner 所有者。

### A · whose 加名词：所属单位不能重复

The writer whose books I enjoy lives nearby 的 whose books 表那位作家的书，整个单位作 enjoy 宾语。The writer whose books are popular lives nearby 中 whose books 作从句主语。whose 自身不是简单替代 who，它与后面的名词共同表达所属，不能写 whose his books 或 whose books I enjoy them 重复同一角色。

whose 可以指人，也可指物，如 a house whose roof is damaged。无需因先行词不是人强改 of which；后者在某些正式结构可用，但并非所有物的唯一形式。先确定“谁的什么”，再问所属名词在从句充当主语还是宾语，比把 whose 译为固定中文更有用。

合并练习先恢复 The writer’s books are popular / I enjoy the writer’s books，再用 whose books 取代所属部分。主句仍必须描述 writer，不能因 books 在从句复数就把 writer 主句动词改复数。两层主语分开核对。

### B · 地点时间名词不自动用 where/when

The library where I study is quiet 的 where 给学习发生的地点，可理解为 in which。The library that I visited is modern 的 visited 缺宾语，须 which/that 或省略；不能因 library 是地点名词就默认 where。把句子恢复为 I study in the library 与 I visited the library，缺的是地点介词关系还是名词宾语就显现出来。

The day when we arrived was busy 中 when 给到达时间，可对应 on which；The day that surprised us was unusual 中 day 作 surprised 主语，需要关系代词。The day I remember was cold 的 remember 缺宾语，零关系词也可自然。时间名词的性质不代替从句角色判断。

where/when 在一些关系结构中也可省或由其他形式替换，具体搭配影响自然程度；本课先用清楚的 where/when 及介词 which，把它们与主宾缺口分开。不是宣布地点/时间只容许一条形式，而是不能用副词关系词去填普通名词宾语缺口。

### C · 介词关系从原句恢复，that 不前置介词

This is the person with whom I worked 的 with 来自 I worked with the person；The desk on which I put the eraser 的 on 来自 I put the eraser on the desk。介词不是看到关系词便随机加，必须能恢复真实搭配。人正式常用 whom，物用 which；介词前置不用 that，也不能仅省关系词留下 with 空缺。

口语可把介词留后：the person I worked with，the desk I put the eraser on。宾语关系词在这种限制性结构中常可省，比介词前置更自然。并不把末置介词判成不正式以外都错；选择取决于语体与清晰度。若是固定动词短语的一部分，强行拆前置可能生硬，先核对原搭配。

from whom、to whom、in which、at which 等皆要有事件来源。先写两个原句，再合并，最后检查宾语代词是否指另一个真实物品：I put it on the desk 中的 it 若指橡皮，仍需保留，不能把所有从句 it 都误删。只删与先行词重复的角色。

### D · reason、抽象场景与消除歧义

the reason why I left 的 why 表达原因关系，常可对应 for which；the reason that I mentioned 的 that 是 mentioned 宾语。不是所有 reason 后都只能 why。选择仍依从句内部所需角色。某些 because 与 reason 搭配的文体偏好不同，初学写清 The reason I left was the noise，可不靠复杂公式避免逻辑重复。

where 可描述 a situation where…这类抽象场景，但必须确实建立场景关系，不是长名词后随手填 where。whose 说明所属，where/when 说明空间时间，介词 which 说明具体关系；三种信息不能只按中文“……的”混用。阅读时恢复原句，写作时标名词单位。

真实说明如找一位书被借走的作者、一个经常学习的地方、一个你参观过的场所，要求不同缺口。独立任务换相同先行词写两种结构，解释为何关系词不同。能恢复介词来源、保留非重复宾语并指出所属名词角色，才说明不是凭先行词类别猜空格。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| The artist whose paintings sell lives here. / The artist whose paintings I collect lives here. | 画作卖得好／我收藏画作。 | whose paintings 主语与宾语不同。 |
| The house whose roof is red is old. / The owner whose roof was repaired called. | 物所属／人所属。 | whose 不限人。 |
| The library where I study is quiet. / The library I visited is modern. | 学习发生地／参观宾语。 | 地点关系与宾语缺口。 |
| The day when we arrived was busy. / The day that surprised us was unusual. | 到达时／日子令人惊讶。 | 时间关系与主语缺口。 |
| The person with whom I worked is Jo. / The person I worked with is Jo. | 介词前置／末置。 | with 来自原搭配。 |
| The desk on which I put the eraser is old. / The desk I put the eraser on is old. | 正式前置／自然末置。 | eraser 仍是真实宾语。 |
| The reason why I left was noise. / The reason I mentioned was different. | 离开原因／提到的原因。 | 原因关系与名词宾语。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| The writer whose his books I read is Jo. | The writer whose books I read is Jo. | 所属不重复 his。 |
| This is the town where I visited.（参观城镇） | This is the town that/which I visited. / This is the town I visited. | visit 缺名词宾语，不是地点附加。 |
| The person with that I worked is Jo. | The person with whom I worked is Jo. | 介词前置不用 that。 |
| The day when surprised us was warm. | The day that/which surprised us was warm. | surprised 缺主语，when 不承担名词主语。 |

### 边界与使用选择

where 也可引出抽象情境如 a situation where…，但应确实表达场景关系，不是长名词后随意加 where。whose 用于物自然可行；of which 结构有时更正式但不必强行替换。部分口语关系句较宽松，本课优先清楚、可核对的标准结构。

### 学完后怎样检查自己

用同一 place 和 day 各写两句，分别需要地点／时间关系和主语／宾语缺口。再写 whose 带名词作主语、宾语两句。把一个介词前置句恢复为两个原句，核对介词从哪里来，再尝试更自然的末置表达。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Relative pronouns and relative clauses](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/relative-pronouns-relative-clauses)：whose所属、whom与介词、where/when对应地点／时间关系及先行词后的内部成分；避免whose重复所属和介词丢失。
- [British Council LearnEnglish：Defining relative clauses](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/relative-clauses-defining-relative-clauses)：whose、where、when等关系形式及限制性对象识别，搭配完整主句而非只有名词片段。
- [Cambridge English Grammar Today：Relative pronouns](https://dictionary.cambridge.org/grammar/british-grammar/relative-)：该站直接open受403限制。实际读到whose用于人、动物及物的所属，介词前置whom与末置形式，where/when/why与介词关系的对照。
- [Cambridge：Unlock 3 第四级第7单元公开样章](https://www.cambridge.org/sites/default/files/media/documents/Unlock3e_LS_SB_L4_U07.pdf)：关系成分角色、识别与补充信息、非限制性逗号、that与省略限制；使用原创情境，不复制样章例题。`,practice:[{id:`gc34-p1`,prompt:`填 The student ___ notes are clear，说明 whose notes 角色。`,reference:`whose；whose notes 作从句主语。`,explanation:`所属单位整体作 are 的主语。`,criteria:[`whose`,`单位主语`]},{id:`gc34-p2`,prompt:`改正 whose his book was lost。`,reference:`whose book was lost`,explanation:`不重复所属 his。`,criteria:[`删除 his`,`whose book`]},{id:`gc34-p3`,prompt:`对比 the park ___ we played 与 the park ___ we cleaned，填并恢复原句。`,reference:`where/in which；that/which/零。We played in the park；We cleaned the park。`,explanation:`地点关系与宾语缺口。`,criteria:[`两填`,`两原句`]},{id:`gc34-p4`,prompt:`the day ___ we arrived 与 the day ___ surprised us 选词。`,reference:`when/on which；that/which`,explanation:`时间关系与主语名词不同。`,criteria:[`时间关系词 when/on which`,`主语关系词 that/which`,`两角色区别`]},{id:`gc34-p5`,prompt:`the person I worked with 改介词前置并说来源。`,reference:`the person with whom I worked；with 来自 work with。`,explanation:`介词前置保留关系对象。`,criteria:[`with whom`,`来源`]},{id:`gc34-p6`,prompt:`一栋房屋窗户坏了，用 whose 写完整句并说明能否指物。`,reference:`The house whose windows are broken is empty. whose 可指物。`,explanation:`windows 为所属单位主语。`,criteria:[`物 whose`,`完整主句`,`所属`]},{id:`gc34-p7`,prompt:`我喜欢某作家的书，他风格有趣，用 whose 识别作家。`,reference:`The writer whose books I enjoy has an interesting style.`,explanation:`whose books 作 enjoy 宾语，主句写 writer。`,criteria:[`所属宾语`,`主句完整`,`不重复 them`]},{id:`gc34-p8`,prompt:`桌子上放橡皮，先写原句再合并介词末置关系。`,reference:`I put the eraser on the desk. The desk I put the eraser on is old.`,explanation:`eraser 是另一个真实宾语，不删除。`,criteria:[`原句`,`on 保留`,`eraser 保留`]}],verification:[{id:`gc34-v1`,prompt:`The room ___ we repaired is upstairs 填关系词。`,reference:`that/which/零`,explanation:`repair 缺宾语，不能因为 room 是地点就 where。`,criteria:[`宾语关系`,`缺口依据`],skill:`structure`,critical:!1},{id:`gc34-v2`,prompt:`改正 The woman whose her son called is Rae。`,reference:`The woman whose son called is Rae.`,explanation:`删除重复所属 her。`,criteria:[`whose son`,`主句`],skill:`transformation`,critical:!0},{id:`gc34-v3`,prompt:`I put an eraser on a desk. The desk is old 合成 on which 句。`,reference:`The desk on which I put an eraser is old.`,explanation:`on 与 desk 关系，eraser 仍是 put 的受事宾语。`,criteria:[`on which`,`eraser 保留`,`主句`],skill:`transformation`,critical:!0},{id:`gc34-v4`,prompt:`时间名词后总用 when 吗？用缺主语的一例说明。`,reference:`不是。The year that changed my life was 2020，year 作 changed 主语。`,explanation:`先行词性质不代替内部角色。`,criteria:[`非绝对`,`主语例`,`角色`],skill:`meaning`,critical:!1},{id:`gc34-v5`,prompt:`同一 library 写学习地点句与参观宾语句，并恢复两从句原义。`,reference:`The library where I study is quiet. The library I visited is modern. I study in it；I visited it。`,explanation:`新迁移同对象不同角色，允许自然主句。`,criteria:[`地点关系`,`宾语关系`,`两原义`,`完整主句`],skill:`expression`,critical:!0},{id:`gc34-v6`,prompt:`自主写一指物 whose、一介词前置、一介词末置句；解释所属名词角色与介词来源。`,reference:`The car whose windows are dark is here. The café at which we met is nearby. The chair I sat on is blue. windows 从句主语，at 来自 meet at，on 来自 sit on。`,explanation:`内容自选，核对角色、搭配和完整主句。`,criteria:[`物所属`,`前置`,`末置`,`名词角色`,`两介词来源`],skill:`expression`,critical:!0}],review:[{id:`gc34-r1`,prompt:`一天后：新 day/year 名词用 when 和 that 不同角色造句。`,reference:`The year when I moved was busy. The year that followed was easier.`,explanation:`时间关系和主语缺口。`,criteria:[`when`,`that`,`角色`]},{id:`gc34-r2`,prompt:`三天后：新介词先恢复原句再合并。`,reference:`We met at the shop. The shop at which we met is closed.`,explanation:`介词从事件来，不猜。`,criteria:[`原句`,`介词来源`,`主句`]},{id:`gc34-r3`,prompt:`一周后：whose 单位作宾语新句，不重复代词。`,reference:`The painter whose work I bought lives nearby.`,explanation:`所属宾语不再加 it。`,criteria:[`whose work`,`无重复`,`主句`]}],sources:[{title:`British Council LearnEnglish：Relative pronouns and relative clauses`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/relative-pronouns-relative-clauses`,supports:`whose所属、whom与介词、where/when对应地点／时间关系及先行词后的内部成分；避免whose重复所属和介词丢失`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council LearnEnglish：Defining relative clauses`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/relative-clauses-defining-relative-clauses`,supports:`whose、where、when等关系形式及限制性对象识别，搭配完整主句而非只有名词片段`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Relative pronouns`,url:`https://dictionary.cambridge.org/grammar/british-grammar/relative-`,supports:`该站直接open受403限制。实际读到whose用于人、动物及物的所属，介词前置whom与末置形式，where/when/why与介词关系的对照`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`},{title:`Cambridge：Unlock 3 第四级第7单元公开样章`,url:`https://www.cambridge.org/sites/default/files/media/documents/Unlock3e_LS_SB_L4_U07.pdf`,supports:`关系成分角色、识别与补充信息、非限制性逗号、that与省略限制；使用原创情境，不复制样章例题`,accessed:`2026-10-03`,method:`直接读取出版商公开PDF中第155—156页的语法框（PDF第9—10页）`}],revision:`official-reference-2026-10-03`,title:`whose/where/when/why`,module:`从句与逻辑关系`,moduleOrder:5,track:`basic`},{number:35,objectives:[`区分用从句识别对象与给已知对象补充信息`,`正确使用非限制性从句的关系词和逗号`,`通过含义对照判断逗号是否改变所指范围`],summary:`区分用从句识别对象与给已知对象补充信息`,prerequisites:[8,29,33,34],body:`### 学习目标

1. 区分用从句识别对象与给已知对象补充信息
2. 正确使用非限制性从句的关系词和逗号
3. 通过含义对照判断逗号是否改变所指范围

### 先检查前置知识

先学：第 08 课、第 29 课、第 33 课、第 34 课。先独立回答下面两题，再阅读本节的核对提示。

1. The students who passed left.说所有学生都通过吗？

核对：没有，限定通过的那部分学生。若做错，回到第 33 课。

2. 关系词作宾语何时通常可省？

核对：限制性从句中可省，不能把规则随意扩展到补充从句。若做错，回到第 33 课。

词汇支持：additional 额外的；identify 识别；comma 逗号；all 所有；some 一些；sibling 兄弟姐妹；comment 评述。

### A · 先确定所指范围，再选择识别或补充

定语从句有两种常见信息任务。限制性从句帮助读者确定说的是哪一个、哪一类或哪部分对象；非限制性从句对语境中已能识别的对象补充说明。The boxes that are wet need to be opened 表示湿的那些箱子要打开，干箱子是否要打开没有交代。The boxes, which are wet, need to be opened 把已经谈论的这组箱子作为整体，并补充这组箱子是湿的。这里逗号影响信息范围，不能只按读句子时想停顿的位置添加。

先用小场景检验：桌上五箱，只有两箱湿。若通知只处理湿箱，采用没有逗号的识别结构。若前文已明确谈论的就是那两箱，后句也可以写 The boxes, which are wet, …，因为所指组已经变成这两箱。非限制性所说的“整组”是当前语境中的所指范围，不是世界上所有箱子。限定组也可能碰巧包含全部对象，所以限制性句本身不保证另外存在不符合条件的对象。

同样，My brother who lives upstairs is a nurse 用居住地点帮助识别兄弟；My brother, who lives upstairs, is a nurse 把地点作为补充。第一种很适合需要区分兄弟的语境，第二种很适合听者已经知道所指人物的语境，但不能单凭这两句确定说话者实际有几个兄弟。学会说明信息任务，比把“有逗号＝只有一个”背成事实更可靠。练习时先写所指对象清单，再标出被主句陈述覆盖的是哪些成员。

### B · 补充结构仍有缺口，关系词与逗号都有职责

非限制性从句仍须遵守第 33—34 课的内部成分规则：人常用 who，物常用 which，所属用 whose 加名词；地点与时间关系可用 where、when，介词前置可用 whom 或 which。Mira, who checks the equipment, arrives early 中 who 作 checks 的主语。The lamp, which I repaired yesterday, works well 中 which 作 repaired 的宾语。两者都不能因对象已明确就删掉关系词，也不能补一个重复的 she 或 it。

普通非限制性关系从句一般不用 that；限制性中宾语关系词可以省略的规则也不能搬过来。The lamp I repaired works well 可以成立；The lamp, I repaired, works well 不能用两个逗号代替缺失的 which。whose 仍整体连接所属名词：Rae, whose notes we copied, led the meeting，whose notes 是 copied 的宾语，不再写 whose her notes 或 copied them。

从句在主句中间时，通常用成对逗号标出起止：Mira, who checks the equipment, arrives early。从句在句尾时，前面一个逗号即可，句末由句号或全句需要的问号结束。先找主句 Mira arrives early，再找补充块的终点，避免把主句谓语吞进从句。标点只帮助划清层级，不会修复缺主句谓语、重复主语或关系词角色不对的问题。自查时分别朗读主句和恢复后的从句原句，确认每层都有可解释的主谓关系。

### C · 已知人物、地点与物品：名字不是机械判断器

专有名字通常已能识别对象，因此常接非限制性补充。We visited York, where Rae studied 说到 York 时，读者通常已经知道地名所指，后面补充学习地点；where 对应 Rae studied in York。The York that Rae remembers is quieter 则限定她记忆中的那个版本或面貌，不能依据 York 是专名就禁止限制性修饰。普通名词也可已明确：前文谈过一本具体手册，The manual, which has a blue cover, is on the shelf 就可把封面作为额外信息。

检查“删除从句后能否成句”只能帮助检查主句骨架，不能单独判定类型。The manual that has a blue cover is on the shelf 删除 that 块后仍有 The manual is on the shelf，但读者可能失去从多本手册中挑出哪本的信息。非限制性省去补充后同样可成句，且通常保留语境中的对象识别。重点是识别所需信息是否随删除而丢失，而不是句子有没有主语谓语。

写通知尤其要核对命令覆盖的范围。The visitors who have tickets may enter 是持票者许可；The visitors, who have tickets, may enter 把所指访客作为已持票的组。若管理员只想挑持票者，补充逗号可能造成误解。先把中文意图写成“其中持票的”或“这组人已经持票”，再选结构。对于无法凭上下文确认的“the teacher”“my friend”，应补姓名、前文介绍或识别信息；不要假定加逗号就让读者知道具体是谁。

### D · which 评述事件，遇到歧义就明确改写

which 还可以接在逗号后评述前面的一件事：Rae sent the missing file, which saved us time。这里 saved us time 自然把发送文件的行为作为原因，而不必只指最近的 file 名词。与 The file, which contains the measurements, is ready 相比，后句中的 which 是具体文件，两个关系不同。恢复原义时分别试写 This action saved us time 和 The file contains the measurements，看哪一层说得通。

不要把“逗号后 which 一律指整个句子”当成新口诀。She showed me a photo, which was damaged 很自然是照片损坏；She showed me a photo, which surprised me 可能是照片内容令人惊讶，也可能是展示行为出乎意料。若听者需要分清，应写 The photo itself surprised me 或 She showed me the photo. This action surprised me，而不是让规则表替语境决定指代。关系从句应靠可理解的语义联系和明确对象成立。

本课迁移要完成两层检查：第一层，主句谈谁、谈哪些成员，补充从句有没有扩大或缩小该集合；第二层，关系词在从句作什么，补充对象是人物、物品还是事件。可在便条中用一个识别从句挑物品，再用一个补充从句介绍已知负责人，最后用 which 评价某个行为。每句都应能拆回意义一致的简单句。若拆句后发现你原本只想说“两箱湿”，成句却变成“这组五箱都湿”，就先改范围；若两种指代都合理，就写明名词或行为，再考虑是否合并。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| The boxes that are wet need to dry. / The boxes, which are wet, need to dry. | 湿的那些箱子需要晾干。／这组箱子都湿了，需要晾干。 | 前者用湿来筛选，后者补充当前所指整组的状态；所指组大小须由语境确定。 |
| My brother who lives upstairs is a nurse. / My brother, who lives upstairs, is a nurse. | 住楼上的那位兄弟是护士。／我的兄弟是护士，补充说他住楼上。 | 地点承担识别或补充任务；不能单凭句子推断兄弟总人数。 |
| The lamp I repaired works well. / The lamp, which I repaired, works well. | 我修的那盏灯工作正常。／这盏灯工作正常，补充说我修过它。 | 宾语关系词只在这里的限制性结构中可省，补充结构保留 which。 |
| Rae, whose notes we copied, led the meeting. / Rae, who copied our notes, led the meeting. | Rae 主持会议，我们抄了她的笔记。／Rae 主持会议，她抄了我们的笔记。 | whose notes 整体作宾语；who 作主语，所属和动作角色不同。 |
| We stayed in York, where Rae studied. / The York that Rae remembers was quieter. | 我们住在 York，Rae 曾在那学习。／Rae 记忆中的 York 更安静。 | 专名常可补充，也能在特定语境中限定某个版本。 |
| Rae sent the file, which saved us time. / The file, which contains the figures, is ready. | Rae 发来文件，这件事节省了时间。／文件准备好了，它包含数据。 | 前句自然评述发送行为，后句 which 指文件；不能按最近名词或逗号单独判断。 |
| Mira, who checks the equipment, arrives early. / Mira arrives early, which helps the team. | Mira 早到，补充说明她检查设备。／Mira 早到，这件事帮助了团队。 | 句中人物补充需标明结束位置；句尾事件评述连接不同的信息层。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| Mira, that checks the equipment, is here. | Mira, who checks the equipment, is here. | 普通非限制性人关系从句用 who，that 不承担这种补充连接。 |
| The lamp, I repaired yesterday, works well. | The lamp, which I repaired yesterday, works well. | 补充从句即使缺宾语也不可直接省关系词；两个逗号不能代替 which。 |
| Rae, whose her notes we copied, led the meeting. | Rae, whose notes we copied, led the meeting. | whose 已表示所属，whose notes 整体为 copied 的宾语，不再重复 her。 |
| Mira, who checks the equipment arrives early. | Mira, who checks the equipment, arrives early. | 结束逗号划出补充块，主句仍为 Mira arrives early。 |

### 边界与使用选择

限制性与非限制性区别依赖所指范围和信息任务。限制性不保证另有未被选中的成员；非限制性整组指语境已确定的组。专名和可删除性都不是唯一判据。which 可评述事件，也可指名词；两读都合理时用明确名词或拆句消除歧义。

### 学完后怎样检查自己

为“桌上五箱，仅两箱湿”和“已明确说那两箱”各写一句通知，标出主句覆盖的组。再为已知人、物、地点各写一个补充从句，恢复内部缺口。最后写一次事件评述，拆成两句并说明 which 所指，不能靠最近名词猜测。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Non-defining relative clauses](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/relative-clauses-non-defining-relative-clauses)：已知对象的补充信息、逗号边界、不能使用that及不能省略关系词；限制与补充的对象范围区别，专名判断仍须依语境。
- [British Council LearnEnglish：Relative pronouns and relative clauses](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/relative-pronouns-relative-clauses)：关系词内部角色、whose所属、补充与限定结构；不把删除后主句仍成句当唯一信息功能标准。
- [Cambridge：Unlock 3 第四级第7单元公开样章](https://www.cambridge.org/sites/default/files/media/documents/Unlock3e_LS_SB_L4_U07.pdf)：关系成分角色、识别与补充信息、非限制性逗号、that与省略限制；使用原创情境，不复制样章例题。
- [Cambridge English Grammar Today：Relative clauses referring to a whole sentence](https://dictionary.cambridge.org/us/grammar/british-grammar/relative-clauses-referring-to-a-whole-sentence)：which可指前面整个分句、句子或一段信息，用于评价或补充；不能一律只回指最近名词。`,practice:[{id:`gc35-p1`,prompt:`已知 Mira 是负责人。填 Mira, ___ checks the equipment, arrives early，并标主句。`,reference:`who；主句 Mira arrives early。`,explanation:`who 补充已知人物并作 checks 主语，主句有自己的谓语。`,criteria:[`who`,`主句`]},{id:`gc35-p2`,prompt:`改正 The lamp, that I repaired, works well，指出关系词角色。`,reference:`The lamp, which I repaired, works well. which 是 repaired 的宾语。`,explanation:`补充物从句用 which，不能按限制性规则用 that 或省略。`,criteria:[`which`,`宾语角色`,`双逗号`]},{id:`gc35-p3`,prompt:`负责人 Rae 已明确。给 Rae whose notes we copied led the meeting 加标点并恢复从句原句。`,reference:`Rae, whose notes we copied, led the meeting. We copied Rae’s notes。`,explanation:`whose notes 作 copied 宾语，补充块在主句中间需两边标界。`,criteria:[`双逗号`,`所属原句`,`主句完整`]},{id:`gc35-p4`,prompt:`五箱里只有两箱湿，需要打开湿箱。选择有／无补充逗号的句子并解释范围。`,reference:`The boxes that are wet need to be opened. 不加补充逗号，用 wet 挑出两箱。`,explanation:`命令限定湿箱；不能把全部五箱说成湿的。`,criteria:[`限制性`,`两箱范围`,`不扩大事实`]},{id:`gc35-p5`,prompt:`The lamp I repaired works well 中可省的关系词，在 The lamp, ___ I repaired, works well 中能省吗？`,reference:`填 which，不能省。`,explanation:`相同宾语角色不等于相同省略条件；补充结构保留关系词。`,criteria:[`which`,`不可省`,`类型依据`]},{id:`gc35-p6`,prompt:`把 Rae sent the file. This action saved us time 合并；说明 which 指代。`,reference:`Rae sent the file, which saved us time. which 评述发送文件的行为。`,explanation:`给定 This action 已明确事件，合并须保存这层指代。`,criteria:[`事件 which`,`逗号`,`指代解释`]},{id:`gc35-p7`,prompt:`比较 We stayed in York, where Rae studied 与 The York that Rae remembers was quieter，专名后是否只能用补充？`,reference:`不是；前句补充学习地点，后句限定 Rae 记忆中的 York 面貌。`,explanation:`语境可把专名对应的某个版本作为识别对象。`,criteria:[`非绝对`,`两信息任务`]},{id:`gc35-p8`,prompt:`She showed me a photo, which surprised me 有两种合理读法。分别用两个清楚句子表达。`,reference:`She showed me a photo. The photo itself surprised me.／She showed me a photo. This action surprised me.`,explanation:`which 可能关联照片或展示行为，改写明确评价对象，接受等义表达。`,criteria:[`照片读法`,`行为读法`,`指代清楚`]}],verification:[{id:`gc35-v1`,prompt:`已知所谈一间房。填 The room, ___ we booked yesterday, is ready，并说明为什么不能省。`,reference:`which；补充从句的宾语关系词仍须保留。`,explanation:`we booked 缺宾语，which 承担该角色；类型限制省略。`,criteria:[`which`,`补充不可省`],skill:`structure`,critical:!1},{id:`gc35-v2`,prompt:`改正 Lin, who she helped us, is here，保留人物补充。`,reference:`Lin, who helped us, is here.`,explanation:`who 已经作 helped 主语，she 重复；成对逗号保留。`,criteria:[`删除 she`,`who 主语`,`完整主句`],skill:`transformation`,critical:!0},{id:`gc35-v3`,prompt:`把 The train was late. This delay was a problem 合成事件评述句并标所指。`,reference:`The train was late, which was a problem. which 指列车晚点这件事。`,explanation:`给定 This delay 指晚点事件，合并要保留事件指代，不能机械只找最近名词。`,criteria:[`逗号 which`,`评述一致`,`事件指代`],skill:`transformation`,critical:!0},{id:`gc35-v4`,prompt:`My cousins who live here are teachers 是否证明我还有不住这里的表亲？加逗号后信息任务如何变化？`,reference:`不证明。无逗号用居住信息识别所指表亲；My cousins, who live here, are teachers 对已确定这组表亲补充他们住这里。`,explanation:`语句组织信息，实际成员数量须由语境核验。`,criteria:[`不推成员总数`,`识别任务`,`补充任务`],skill:`meaning`,critical:!1},{id:`gc35-v5`,prompt:`自主设定一组物品，明确只有部分满足条件。写一条只处理该部分的通知，再另设“整组已明确且全符合”的情境写补充句，说明两句各覆盖谁。`,reference:`六个袋子仅两个破了：The bags that are torn need repair，只覆盖破的两个。前文已指这两个袋子：The bags, which are torn, need repair，补充当前所指两袋都破了。`,explanation:`新对象和条件可自选，核对情境事实、标点和主句覆盖范围。`,criteria:[`部分事实`,`限制通知`,`整组新语境`,`补充标点`,`两覆盖范围`],skill:`expression`,critical:!0},{id:`gc35-v6`,prompt:`为你自选的已知人物写一个补充句；再写一个行为及 which 评述句，最后拆开解释两处关系词指代。`,reference:`Nora, whose brother works here, is our guide. She brought a spare map, which prevented a delay. Nora’s brother works here 为人物所属补充；which 指带备用地图这个行为，可拆 She brought a spare map. This action prevented a delay。`,explanation:`独立迁移允许 who/whose 等自然结构，人物补充和事件评述均须有完整主句和清楚对象。`,criteria:[`已知人情境`,`人物补充`,`事件评述`,`主句完整`,`两指代解释`],skill:`expression`,critical:!0}],review:[{id:`gc35-r1`,prompt:`一天后：自造一个关系词作宾语的非限制性定语从句，说明为何关系词不能省。`,reference:`My notebook, which I found yesterday, is here. which 作 found 宾语，但补充从句不可省关系词。`,explanation:`换对象仍检查内部角色和结构类型。`,criteria:[`完整补充句`,`宾语角色`,`不可省依据`]},{id:`gc35-r2`,prompt:`三天后：同一群人各写识别与补充句，先交代每句语境，不能凭句子推人数。`,reference:`十名志愿者中三人有车：The volunteers who have cars can help with transport. 前文已指定三位有车志愿者：The volunteers, who have cars, can help with transport。`,explanation:`主句覆盖范围由情境和信息任务共同确定。`,criteria:[`两语境`,`识别与补充`,`范围说明`]},{id:`gc35-r3`,prompt:`一周后：写一个可能歧义的 which 句，给两种明确改写并说明如何选。`,reference:`She brought a painting, which pleased us. 可明确 She brought a painting. The painting itself pleased us；或 She brought a painting. This action pleased us。实际意图决定采用哪一改写。`,explanation:`能指出歧义并用名词／事件明确指代，比猜一个标准答案更重要。`,criteria:[`合理两读`,`两明确改写`,`意图依据`]}],sources:[{title:`British Council LearnEnglish：Non-defining relative clauses`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/relative-clauses-non-defining-relative-clauses`,supports:`已知对象的补充信息、逗号边界、不能使用that及不能省略关系词；限制与补充的对象范围区别，专名判断仍须依语境`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council LearnEnglish：Relative pronouns and relative clauses`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/relative-pronouns-relative-clauses`,supports:`关系词内部角色、whose所属、补充与限定结构；不把删除后主句仍成句当唯一信息功能标准`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge：Unlock 3 第四级第7单元公开样章`,url:`https://www.cambridge.org/sites/default/files/media/documents/Unlock3e_LS_SB_L4_U07.pdf`,supports:`关系成分角色、识别与补充信息、非限制性逗号、that与省略限制；使用原创情境，不复制样章例题`,accessed:`2026-10-03`,method:`直接读取出版商公开PDF中第155—156页的语法框（PDF第9—10页）`},{title:`Cambridge English Grammar Today：Relative clauses referring to a whole sentence`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/relative-clauses-referring-to-a-whole-sentence`,supports:`which可指前面整个分句、句子或一段信息，用于评价或补充；不能一律只回指最近名词`,accessed:`2026-10-03`,method:`官方搜索返回的规则正文`}],revision:`official-reference-2026-10-03`,title:`非限制性定语从句`,module:`从句与逻辑关系`,moduleOrder:5,track:`basic`},{number:36,objectives:[`把完整内容或问题放入主语、宾语、表语位置`,`在嵌入问题中使用陈述语序并选择 whether/if`,`依据成分缺口区分 that、what 与名词后的不同从句`],summary:`把完整内容或问题放入主语、宾语、表语位置`,prerequisites:[10,11,29,30,31,33,34,35],body:`### 学习目标

1. 把完整内容或问题放入主语、宾语、表语位置
2. 在嵌入问题中使用陈述语序并选择 whether/if
3. 依据成分缺口区分 that、what 与名词后的不同从句

### 先检查前置知识

先学：第 10 课、第 11 课、第 29 课、第 30 课、第 31 课、第 33 课、第 34 课、第 35 课。先独立回答下面两题，再阅读本节的核对提示。

1. Where does he live?直接问题是什么语序？

核对：问题语序有 does，live 原形。若做错，回到第 11 课。

2. the book that I read 的 that 在从句作什么？

核对：宾语关系词，从句缺 read 的宾语。若做错，回到第 33 课。

词汇支持：believe 相信；wonder 想知道；whether 是否；fact 事实；true 真实的；decision 决定；what 所……的事物／什么；explain 解释。

### A · 陈述内容：整件事占一个位置，内部仍是一句

本课把几种能进入名词常见位置的从句放在一起比较，但它们的信息任务不同，不能用“that 引导名词性从句”一句盖过全部情况。先学陈述内容：I believe that the hall is free 中 that the hall is free 是 believe 所相信的内容；内部 the hall is free 完整，that 没有替代某个缺失的主语或宾语。主句 I believe 也有自己的主语和谓语。I believe 表达我的判断，不保证大厅确实空着，内容真实性要靠事实核查，语法连接词不负责认证。

同一内容可以放不同位置。That the hall is free helps us 把整件事作主语；The good news is that the hall is free 用从句说明表语内容；It is clear that we need extra chairs 先用 it 占主语位置，把较长内容放后面。这里 it 不指某个椅子或大厅，是形式主语。不能把主句谓语删除成 I that the hall is free，也不能把表语连接 be 漏掉。读句时先圈主句框架，再把内部内容单独恢复为完整陈述。

think、believe 等常见动词后的宾语内容从句中，that 经常可省：I think the room is ready 与 I think that the room is ready 都可行；保留 that 可让长句边界更清楚。句首内容主语 That the room is ready helps us 中的 that 不能照这种规则直接删除，否则两个谓语层混在一起。不要推广成“所有 that 都可省”或“都不可省”。本课先在已给的结构里选择，复杂动词搭配仍按实际表达核验。

### B · 嵌入问题：内容仍是问题，排列恢复陈述结构

第二类表达未知信息。直接问 Where does Nora work?是在向对方提出地点问题；I wonder where Nora works 是陈述自己想知道什么。where Nora works 保留地点问题内容，但从句排列用主语 Nora 加谓语 works，普通 do/does/did 疑问助动词不保留。去掉 does 后还要把单数谓语恢复；What did she buy?变成 I know what she bought，过去时在 bought 上体现，不能只删 did 而仍写 buy。

be 和其他助动词同样回到主语后：Where is the box? → Do you know where the box is?；Can Nora join? → I wonder whether Nora can join。第二句的 Do you know 构成主句疑问，后面的 the box is 仍是嵌入陈述次序。问号由全句是否在提问决定：Do you know…?用问号；I wonder…通常用句号，不因为里面有 where、whether 就自动加问号。

先检查疑问词本来作什么。Who called Nora?中的 who 就是 called 的主语，嵌入 I know who called Nora 后表面次序无需变，不要为了套“主语加谓语”再塞一个 he。Who did Nora call?问宾语，嵌入 I know who Nora called，Nora 才是主语。这两种不能只看 who 开头就同处理。改写顺序是：恢复普通原句角色、保留所问缺口、排列主谓、最后检查主句语气。礼貌提问可写 Could you tell me where the desk is?，嵌入结构服务真实沟通，而不只是换一种长句形式。

### C · 是否与条件：whether/if 看环境，未来形式看任务

是非问题嵌入时常用 whether 或 if。I don’t know whether the hall is free 与 I don’t know if the hall is free 在普通宾语位置都自然，表示还不知道“空或不空”。whether 可明确两种选择：whether it is free or not 或 whether or not it is free。普通宾语环境的 if it is free or not 也可以，不宜把 if 一见 or not 就判错；但紧挨的 if or not 不是这里的标准排列。

介词后的是否内容通常用 whether：We talked about whether Nora could join；本课标准表达不写 about if。内容直接作主语时用 Whether the hall is free remains uncertain，而不是照普通宾语搭配把 If…放到句首。表语内容也通常优先 whether，如 The question is whether we have enough chairs。whether to join 会在第 37 课的不定式内容中继续学习，此处只识别该边界，不要求提前独立造句。

同一个 if 可以承担不同任务。I don’t know if the hall will be free 询问未来是否空着，是不知道的内容；If the hall is free tomorrow, we’ll use it 是开放条件下的安排。普通未来条件从句通常用现在形式，但“是否”内容可保留 will，不能用第 31 课的条件规则把它一律删除。when 同理：We’ll start when Nora arrives 表示开始的时间；I don’t know when Nora will arrive 表示不知道的到达时间问题。第 31 课还学过条件中的意愿 will 等例外，所以既不能写“所有 if 禁 will”，也不能写“所有 if 随便用 will”。先问这一块告诉主句何时／在什么条件发生，还是填入主句知道／询问的内容。

### D · what 的两类内容：问题缺口与所指事物

what 能在从句里承担成分，但具体信息任务要分清。I wonder what Nora bought 是嵌入问题，买的东西身份未知，what 作 bought 的宾语；I kept what Nora bought 可以表示我保留了她买的东西，what Nora bought 整体相当于 the thing or things that Nora bought，是融合了先行词和关系成分的表达。它并不总是在询问一个问题。两类都需检查内部角色，但不能因为都叫“名词性”就抹掉未知问题与所指事物的区别。

与 that 内容比较：I know that Nora bought a map 内部 Nora bought a map 完整，连接的是买地图这件事；I know what Nora bought 中 bought 的宾语由 what 承担，表达买了什么。That Nora spoke surprised us 说她开口这件事令人惊讶；What Nora said surprised us 说她说的内容令人惊讶，what 作 said 宾语。不是看到中文“……的”就填 what，也不是连接词越多越完整。

融合关系表达中 what 已包含类似 the thing(s)的所指，普通标准英语不能在同一个位置重复一个先行词：the map what Nora bought 应按第 33 课写 the map that/which Nora bought 或 the map Nora bought；要用 what 就写 what Nora bought 而不在前面再堆 the map。判断时把结构拆开：有明确先行名词 map 吗？从句内部缺买的宾语吗？若有先行名词且缺宾语，是名词的关系修饰；若没有先行名词且 what 承担宾语，再看整块是问题内容还是所指事物。主句动词和语境决定意义。

### E · 名词后的 that 也有两种结构，整句审核靠角色

The fact that Nora left surprised us 中的 that Nora left 说明 fact 的内容，内部 Nora left 完整；The fact that Nora noticed surprised us 中的 that 替代 noticed 的宾语，帮助识别是哪一个事实，是定语从句。这两句表面都出现 fact that，不能凭相邻词给固定标签。第一句可拆 Nora left. That fact surprised us；第二句可拆 Nora noticed a fact. That fact surprised us。内容从句的 that 只标边界，关系从句的 that 还承担内部角色。

阅读长句时，先划主句，再分别写各从句的信息任务与成分。I know that the room which Nora booked is free 中知道的内容是 the room … is free，which Nora booked 嵌在内容内部识别 room。只要每层主句／从句骨架清楚，长句就不是一长串连接词。写作不必主动堆层数；若对象或结论容易混淆，拆成两三句更利于协调活动。可用“我知道什么”“哪一个房间”“条件是什么”分别审核。

本课还要区分时态和语序。嵌入问题不倒装，不等于永远用现在时；过去内容可用 left、未来内容可用 will arrive，具体过去转述的时态关系在第 41 课继续学习。I don’t think Nora is ready 常自然表达我认为她还没准备好，否定理解不能总按字面词序搬译。验收时用新场景写一件完整内容、一个未知问题和一项所指事物，再说明连接词是否承担缺口。最后检查全句标点、主句谓语、所指和事实是否清楚，避免只有形式正确但沟通任务没有完成。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| I believe that the hall is free. / The good news is that the hall is free. | 我相信大厅空着。／好消息是大厅空着。 | 同一完整内容分别作相信的宾语和表语内容；believe 表判断，不认证事实。 |
| Where does Nora work? / Do you know where Nora works? | Nora 在哪工作？／你知道 Nora 在哪工作吗？ | 前者直接问地点，后者问对方是否知道；嵌入部分恢复陈述排列和单数谓语。 |
| I know who called Nora. / I know who Nora called. | 我知道谁打给了 Nora。／我知道 Nora 打给了谁。 | who 分别是从句主语与宾语，次序决定动作角色。 |
| We’ll start when Nora arrives. / I don’t know when Nora will arrive. | Nora 到时我们开始。／我不知道 Nora 什么时候到。 | 时间安排与未知时间内容不同，未来形式不能共用一条机械禁令。 |
| I don’t know if the hall is free. / We talked about whether the hall is free. | 我不知道大厅是否空着。／我们谈过大厅是否空着。 | 普通宾语 if 可用；介词后本课标准结构用 whether，主句任务也不同。 |
| That Nora spoke surprised us. / What Nora said surprised us. | Nora 开口这件事令人惊讶。／Nora 说的内容令人惊讶。 | that 接完整陈述；what 承担 said 宾语，所指内容不同。 |
| The fact that Nora left surprised us. / The fact that Nora noticed surprised us. | Nora 离开这个事实让我们惊讶。／Nora 注意到的那个事实让我们惊讶。 | 第一 that 说明 fact 内容，第二 that 作 noticed 宾语；名词相邻形式不能决定类型。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| Do you know where is the box? | Do you know where the box is? | 主句可疑问，嵌入 be 仍在主语后。 |
| I wonder what did Nora buy. | I wonder what Nora bought. | 嵌入问题移除普通疑问 did 并恢复过去谓语 bought；全句是陈述。 |
| We talked about if Nora could join. | We talked about whether Nora could join. | 介词后的是否内容优先标准 whether 结构，不能搬用普通宾语 if。 |
| I kept the map what Nora bought. | I kept the map that/which Nora bought.／I kept what Nora bought. | 有先行词 map 时用关系结构；融合 what 已包含所指，不重复同一先行词。 |

### 边界与使用选择

“名词性从句”是本课教学总称，不代表陈述内容、嵌入问题和融合关系表达具有相同功能。that 省略取决于位置与搭配；what 要检查内部角色和整块意义。if/when 既可能引状语也可能引问题内容，先辨任务再处理未来形式。过去转述和建议要求类内容的特殊形式在后课展开。

### 学完后怎样检查自己

选一个真实活动，把已核实安排分别写成 that 宾语、表语和 it 形式主语句；把三个尚未知的问题嵌入 I wonder 或 Do you know，其中含一个 who 主语问题。再写 what 所指事物与明确名词关系从句，说明缺口和信息任务；最后对比一条未来条件与一条未来是否内容。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council LearnEnglish：Reported speech—questions](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-questions)：间接／嵌入问题用陈述排列、移除普通do/does/did疑问形式并恢复谓语，who主语问题保留角色。过去转述具体时态在后课继续。
- [Cambridge：Grammar for English Language Teachers—Noun clauses](https://www.cambridge.org/core/books/abs/grammar-for-english-language-teachers/noun-clauses/24009A6E74DFB4B29DE4140B6E50E756)：陈述内容与间接问题的区别，疑问词与if/whether连接，以及that内容。
- [Cambridge English Grammar Today：What](https://dictionary.cambridge.org/grammar/british-grammar/what)：what既可询问信息，也可相当于the thing(s) that的所指事物表达，不能重复普通先行词。
- [Cambridge English Grammar Today：If or whether](https://dictionary.cambridge.org/us/grammar/british-grammar/if-or-whether)：通过官方搜索返回完整主题正文核验；该站直接页访问受403限制。支持普通宾语两者可用、whether or not与if…or not排列，以及介词后和whether加不定式的边界。
- [BBC Learning English：English In A Minute—If vs Whether](https://downloads.bbc.co.uk/learningenglish/eiam/unit-2/200904_eiam_if_whether.pdf)：if条件与whether选择的教学区别，嵌入是非问题在普通宾语环境可用if或whether；与Cambridge核验环境边界。`,practice:[{id:`gc36-p1`,prompt:`将 Where is the ticket? 嵌入 I know…，全句用什么标点？`,reference:`I know where the ticket is. 用句号。`,explanation:`be 回主语后；主句陈述决定句号，不因 where 自动问号。`,criteria:[`where the ticket is`,`陈述标点`]},{id:`gc36-p2`,prompt:`将 Where does Nora work? 嵌入 I wonder…，说明两个形式变化。`,reference:`I wonder where Nora works. 去 does 并把 work 恢复为 works。`,explanation:`普通疑问助动词消失，单数谓语需在实义动词上体现。`,criteria:[`去 does`,`works`,`陈述语序`]},{id:`gc36-p3`,prompt:`把 Who called Nora? 与 Who did Nora call? 分别嵌入 I know，标 who 角色。`,reference:`I know who called Nora. who 是主语。I know who Nora called. who 是宾语。`,explanation:`先分主语问题和宾语问题，不能统一机械换序。`,criteria:[`两句`,`两角色`,`不重复主语`]},{id:`gc36-p4`,prompt:`普通宾语 I don’t know ___ it is free 与介词后 We talked about ___ it is free 分别填什么？`,reference:`第一 whether/if；第二 whether。`,explanation:`是否内容的连接词选择取决于环境，不是完全互换。`,criteria:[`宾语两种可用`,`介词 whether`,`环境解释`]},{id:`gc36-p5`,prompt:`同一未来大厅情境：用 if 写“若空着就使用”，再写“不知道届时是否空着”。`,reference:`If the hall is free tomorrow, we’ll use it. I don’t know if/whether the hall will be free tomorrow.`,explanation:`前者开放未来条件通常用现在形式，后者未来是否内容可用 will。`,criteria:[`条件现在形式`,`主句未来`,`是否内容 will`,`功能区分`]},{id:`gc36-p6`,prompt:`比较 I know ___ Nora bought a map 与 I know ___ Nora bought，填词并恢复从句角色。`,reference:`that；what。第一内部完整，第二 what 作 bought 宾语。`,explanation:`内容连接和所问缺口不同，不能只按中文译法选择。`,criteria:[`that 完整`,`what 宾语`,`两角色解释`]},{id:`gc36-p7`,prompt:`“显然我们需要额外椅子”用 it 形式主语；“好消息是大厅空着”用表语内容。`,reference:`It is clear that we need extra chairs. The good news is that the hall is free.`,explanation:`it 先占主语位置，表语内容接在 be 后，两句均有完整主句框架。`,criteria:[`it 形式主语`,`完整内容`,`is that 表语`]},{id:`gc36-p8`,prompt:`比较 The fact that Nora left 与 The fact that Nora noticed，把两块恢复为简单原句。`,reference:`Nora left，that 只连接 fact 的内容；Nora noticed a fact，that 作 noticed 的宾语来识别 fact。`,explanation:`相同 fact that 表面形式有内容说明与关系缺口两种任务。`,criteria:[`两原句`,`内容连接`,`关系宾语`]}],verification:[{id:`gc36-v1`,prompt:`将直接问题 Is the hall free? 嵌入 I wonder…，给出普通宾语两种连接词。`,reference:`I wonder whether/if the hall is free.`,explanation:`是非问题变是否内容，从句 be 在主语后。`,criteria:[`whether 与 if`,`陈述语序`,`完整主句`],skill:`structure`,critical:!1},{id:`gc36-v2`,prompt:`改正 I don’t know why did Nora leave，保留过去含义并说明改变。`,reference:`I don’t know why Nora left. 去 did，leave 恢复过去 left。`,explanation:`嵌入问题恢复陈述排列，不等于删除过去时间。`,criteria:[`去 did`,`left`,`过去保留依据`],skill:`transformation`,critical:!0},{id:`gc36-v3`,prompt:`把 What did Nora buy? 嵌入 Do you know…，标主句与从句语序。`,reference:`Do you know what Nora bought? 主句 Do you know 为疑问；从句 Nora bought 为陈述排列，what 作宾语。`,explanation:`两层句子各有任务，主句问号不使嵌入部分倒装。`,criteria:[`主句问句`,`bought 过去`,`从句陈述`,`what 宾语`],skill:`transformation`,critical:!0},{id:`gc36-v4`,prompt:`I’ll wait if Nora is late 与 I don’t know if Nora will be late 的 if 任务相同吗？will 是否须一律删除？`,reference:`不同，前者条件安排，后者未来是否内容；后者 will 无需按普通条件规则删除。`,explanation:`先看 if 块修饰行动条件还是填入知道的内容，不以词形定规则。`,criteria:[`两任务`,`后句 will 可用`,`角色依据`],skill:`meaning`,critical:!1},{id:`gc36-v5`,prompt:`自选一个日常情境，把同一件已知内容写成 that 宾语和表语句；再另写 what 所指事物句，说明内部完整／缺口及三块功能。`,reference:`图书馆通知：I know that the library closes at six. The problem is that the library closes at six. I kept what the librarian gave me. 前两内部完整，分别为 know 宾语和表语内容；what 作 gave 的事物宾语，整块表示所给物品。`,explanation:`独立场景可换，核对各层谓语、内容一致和 what 所指，而不要求复制示例。`,criteria:[`自选情境`,`同内容宾语`,`同内容表语`,`what 所指物`,`完整与缺口说明`,`三功能`],skill:`expression`,critical:!0},{id:`gc36-v6`,prompt:`为新活动写礼貌询问地点、询问未来是否可参加、介词后讨论是否安全、it 形式主语说明一个完整判断；标每句从句任务及未来 if 与条件区别。`,reference:`Could you tell me where the workshop is? I wonder if/whether I can join next week. We talked about whether the route is safe. It is clear that we need a map. 前两为地点／是否问题内容，第三为介词后的是否内容，第四为后置完整判断；第二不是条件安排，因此不能套普通未来条件禁 will 规则，若写 if I will be able to join 也可。`,explanation:`新场景答案可自选自然表达，检查问题语序、whether 环境、it 占位以及功能判断；can 与 will be able to 均按真实意图接受。`,criteria:[`地点陈述语序`,`未来是否内容`,`介词 whether`,`it 完整判断`,`四任务`,`条件区别`],skill:`expression`,critical:!0}],review:[{id:`gc36-r1`,prompt:`一天后：自造 who 主语和 who 宾语直接问题，分别嵌入并标角色。`,reference:`Who sent the email? → I know who sent the email. Who did Rae invite? → I know who Rae invited. 两 who 分别主语、宾语。`,explanation:`换动词仍按原句角色，不为主语 who 添加重复代词。`,criteria:[`两问题`,`两嵌入`,`角色`]},{id:`gc36-r2`,prompt:`三天后：新情境写未来时间状语与未知时间内容，解释谓语形式。`,reference:`I’ll leave when the lesson ends. I don’t know when the lesson will end. 前者安排时间通常现在形式，后者未来时间问题内容可 will。`,explanation:`先判断功能，再用形式，不套全部 when 禁 will。`,criteria:[`两功能`,`自然未来表达`,`形式依据`]},{id:`gc36-r3`,prompt:`一周后：自造一个名词后 that 内容与一个 that 关系缺口对照，各恢复原句。`,reference:`The fact that Rae returned mattered. The fact that Rae mentioned mattered. Rae returned 为完整内容；Rae mentioned a fact 有宾语，关系 that 替代该 fact。`,explanation:`选择适合承接内容的名词和及物动词，要求确实显示完整性差异。`,criteria:[`内容句`,`关系句`,`两原义`,`缺口解释`]}],task:[{id:`gc36-task1`,prompt:`为科学海报展写 7—9 句协调便条。设定负责人 Nora 已为同学熟知，但大厅能否使用尚未确认。给出未来时间安排、开放条件备用方案、原因和目的；用限制性从句识别要带的物品，用补充从句介绍 Nora；嵌入地点与是否两个真实问题。结尾核对主句、范围、语序和指代，可自选合理细节。`,reference:`We’ll meet when the classroom opens. If the hall is unavailable, we’ll use our classroom. We need extra tables because several groups are joining. Please bring the posters that we finished yesterday. Nora, who leads our group, will collect them. Could you tell me where the spare tables are? I wonder whether we can use the hall. We’ll label the tables so that visitors can find each group. It is clear that we need final confirmation.`,explanation:`参考九句传达安排和待确认问题；when/if 安排与 whether 问题分别判断，that 物品关系缺宾语，who 人物补充标点清楚。不同合理活动细节均可，不能把未确认大厅写成已获批准。`,criteria:[`7—9 完整句`,`未来时间安排`,`条件备用方案`,`原因清楚`,`目的清楚`,`物品识别缺口`,`已知人补充标点`,`地点嵌入陈述语序`,`是否内容`,`主句与指代`,`未知事实不擅自确认`]}],sources:[{title:`British Council LearnEnglish：Reported speech—questions`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/reported-speech-questions`,supports:`间接／嵌入问题用陈述排列、移除普通do/does/did疑问形式并恢复谓语，who主语问题保留角色。过去转述具体时态在后课继续`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge：Grammar for English Language Teachers—Noun clauses`,url:`https://www.cambridge.org/core/books/abs/grammar-for-english-language-teachers/noun-clauses/24009A6E74DFB4B29DE4140B6E50E756`,supports:`陈述内容与间接问题的区别，疑问词与if/whether连接，以及that内容`,accessed:`2026-10-03`,method:`直接读取公开章节摘要`},{title:`Cambridge English Grammar Today：What`,url:`https://dictionary.cambridge.org/grammar/british-grammar/what`,supports:`what既可询问信息，也可相当于the thing(s) that的所指事物表达，不能重复普通先行词`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`},{title:`Cambridge English Grammar Today：If or whether`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/if-or-whether`,supports:`通过官方搜索返回完整主题正文核验；该站直接页访问受403限制。支持普通宾语两者可用、whether or not与if…or not排列，以及介词后和whether加不定式的边界`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`},{title:`BBC Learning English：English In A Minute—If vs Whether`,url:`https://downloads.bbc.co.uk/learningenglish/eiam/unit-2/200904_eiam_if_whether.pdf`,supports:`if条件与whether选择的教学区别，嵌入是非问题在普通宾语环境可用if或whether；与Cambridge核验环境边界`,accessed:`2026-10-03`,method:`直接读取BBC公开PDF整页`}],revision:`official-reference-2026-10-03`,title:`名词性从句`,module:`从句与逻辑关系`,moduleOrder:5,track:`basic`},{number:37,objectives:[`按句子任务选择不定式的补足、目的或修饰功能`,`识别后续动作执行者，使用正确的动词补足框架`,`在否定、被动和程度表达中保持原意与形式`],summary:`按句子任务选择不定式的补足、目的或修饰功能`,prerequisites:[10,26,30,36],body:`### 学习目标

1. 按句子任务选择不定式的补足、目的或修饰功能
2. 识别后续动作执行者，使用正确的动词补足框架
3. 在否定、被动和程度表达中保持原意与形式

### 先检查前置知识

先学：第 10 课、第 26 课、第 30 课、第 36 课。先独立回答下面两题，再阅读本节的核对提示。

1. The club plans to record a video. 哪个词承担时态与一致？record 还加-s 吗？

核对：plans 承担限定关系；to record 是非限定补足，record 用原形。若做错，回到第 10 课主干与第 28 课一致。

2. We asked Lin to check the names. 谁提出要求，谁检查？

核对：we 提出要求，Lin 执行 check。若做错，回到第 10 课宾语和补足语。

词汇支持：infinitive 不定式；base form 原形；arrange 安排；refuse 拒绝；allow 允许；remind 提醒；label 标签；permission 许可。

### A · 找限定谓语，再判断 to do 的工作

不定式表达另一个动作，本身不按主语改变人称、数和时态。The club plans to open a reading room 与 The club planned to open a reading room 的变化在 plans/planned，to open 不变。过去有计划不等于已经开办，是否实现要另有信息；“不定式就是将来时”不是可靠规则。阅读时先圈主句限定谓语，再问后面的动作补充什么。

补足语把动词内容说完整：We decided to record the story，决定的内容是录制。目的说明为什么做主句动作：We visited the library to collect stories，来访目的是收集，可改成 in order to collect。名词后的修饰说明用途或待做动作：We need a quiet place to record，不是 place 自己录制，而是我们在那里录制。三处都是 to do，不能都标成宾语。只背“to＋原形”能帮助拼写，却不能让你理解句子的关系。

活动也能作主语：To check every name takes time。长内容常后置成 It takes time to check every name，it 占主语位置，不指某件物品。恢复活动后检查谓语仍是否合理。I walked to the office to ask for help 的第一个 to 接名词、表示去向，第二个接原形、说明目的。先分清介词与不定式符号，再选择词形。遇到没有明确写出执行者的结构，要从主句或上下文恢复，不能随便指定最近的名词。

### B · 学完整搭配和动作控制关系

动词要连框架一起学，不能只记中文“想／让”。want/hope/decide/plan 通常可接 to do，但希望别人行动时，I want Nia to join 与 I hope that Nia will join 的框架不同；hope 不能直接照搬 want＋人＋to do。ask/tell/remind/invite/allow somebody to do 中的 somebody 通常执行后续动作。She reminded us to save the file，提醒者是 she，保存者是 us。

有些动词后续动作通常由主句主语承担：Nia offered to read the introduction。即使另有一个人物，也不保证那个人控制后续动作；promise 的承诺者通常仍是主句主语。表达清楚时可写 Nia promised her partner that she would check the names。用完整从句明确角色，比套一个“动词＋人＋动作”的通用模板可靠。允许和请求也有语气差异，ask 与 make 不能在任何场景互换。

常用否定形式 not to do：We asked the visitors not to move the books，否定的是移动。We did not ask them to move the books 只否定提出过移动要求，不等于禁止移动。主句否定靠主句助动词；不定式否定不写 don't to。suggest 的常见建议框架是 suggest doing 或 suggest that…，不要把 suggest somebody to do 当默认模式。写作先把要求或建议的内容和执行者说明，再核对词典给出的搭配。

### C · 不带 to 的补足与被动：规则有适用范围

情态动词后用原形：We can record it，不能 can to record。主动 make/let＋人＋原形也不带 to：The teacher made us repeat the line；They let us use the studio。make 常带迫使或要求，let 表示允许，不是意义完全相同的“让”。help somebody do 与 help somebody to do 都可用，不能因参考答案只写一种就把另一种自然表达判错。

make 改被动后通常恢复 to：We were made to repeat the line。were 承担过去，to repeat 不再变 repeated。let 表示许可时通常改成 be allowed to：We were allowed to use the studio；不要从主动框架生造许可被动。本课记录经过核验的具体搭配，不推导“所有原形补足变被动都必须同样处理”。感知整体或过程在第 39 课进一步比较。

真实请求中，I asked the technician to check the microphone 更像请求；I made the technician check it 则可能表示强制。先按关系选择主句动词，再选补足形式。改写时核对人称、过去或现在以及主语是谁；只把 made 换 was made、却不调整动作执行者，也不能保持原意。形式准确和语气合适是两项检查，不能靠背原形或 to 代替意义选择。

### D · 程度、疑问内容与隐藏的对象

too＋形容词＋to do 常表示程度造成障碍：The print is too small to read comfortably。形容词＋enough＋to do 表示达到条件：The print is large enough to read；enough 修饰名词放前：We have enough paper to print the labels。条件满足不证明动作实际发生，字足够大不等于已经有人读过。也不能见 too 就推定所有实际行为都未发生，要按这个程度框架及文脉判断。

The box is too heavy for one child to lift 中 one child 执行 lift，box 是对象，通常不在末尾再重复 it。The guide is easy to follow 同样以 guide 为 follow 对象，可恢复 It is easy to follow the guide。不是所有句首主语都执行后续动作。需要明确执行者可用 for＋人；评价某人的行为可见 It was kind of Nia to help，of 与 for 处于不同评价框架，不应无意义地互换。

what/how/whether＋to do 可压缩待解决的问题：We need to decide where to put the sign；I am not sure whether to include this photo。what to include 询问 include 的对象，whether to include it 询问是否包含。动作执行者由主句或上下文恢复；若人物不同或指代不清，改完整从句。最终目标是知道谁做、做什么、为什么做，不是把每个 to 都译成“去”。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| We plan to film. / We planned to film. | 现在计划／过去计划拍摄。 | 时态在 plan；to film 不保证实现。 |
| We came to collect stories. / We need stories to read aloud. | 来收集／需要可朗读的故事。 | 目的与名词修饰不同。 |
| I want Nia to join. / I hope that Nia will join. | 想让／希望 Nia 加入。 | want 与 hope 框架不同。 |
| I told him not to move it. / I did not tell him to move it. | 告诉他别移／没告诉他移动。 | 不定式否定与主句否定范围不同。 |
| They made us rehearse. / We were made to rehearse. | 要求排练／被要求排练。 | make 主动原形，被动 to。 |
| They let us record. / We were allowed to record. | 允许录制／获准录制。 | 许可被动常改用 allow。 |
| The text is too small for me to read. / It is large enough to read. | 小到难读／大到足以读。 | 程度条件；text 为 read 对象。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| She plans to records the interview. | She plans to record the interview. | plans 承担一致，后续原形。 |
| I hope him to bring the camera. | I hope that he will bring the camera. | hope 不能照搬 want 宾语框架。 |
| The coach made us to practise. | The coach made us practise. | 主动 make 补足不带 to。 |
| The box is too heavy for me to lift it.（it 指同一箱子） | The box is too heavy for me to lift. | box 已对应 lift 对象，不重复 it。 |

### 边界与使用选择

搭配有范围，不是所有动词都接同一种不定式。查词典要看动词、补足类型和执行者，而非只看中文义。程度句不自动报告实际结果，easy to read 的主语可为后续动作对象。原形并非“没有语法”。自然变体可接受，但必须保持任务给定角色、时间与否定范围。

### 学完后怎样检查自己

写六句真实活动说明：自己决定、请求同伴、禁止动作、准备目的、许可和程度条件。标主句谓语与后续动作执行者，让同伴仅根据英文复述谁要做什么。角色交换或把“没要求”读成“要求别做”时，先修意义关系，最后才核对 to 与原形。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：Verbs followed by the infinitive](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/verbs-followed-infinitive)：动词＋to do、动词＋人＋to do、make/let主动原形、make被动恢复to、许可被动改用allow。
- [Cambridge English Grammar Today：Infinitives with and without to](https://dictionary.cambridge.org/grammar/british-grammar/infinitives)：带to与不带to的不定式、补足与目的、help两种形式及介词后不能直接套原形。
- [Cambridge English Grammar Today：Verb patterns](https://dictionary.cambridge.org/us/grammar/british-grammar/infinitive-or-verb-ing)：动词补足框架须逐项判断；to do、doing和宾语＋不定式不构成统一的愿望动词模板。`,practice:[{id:`gc37-p1`,prompt:`填：Nia decided ___ (record) the introduction. 再指出过去时在哪。`,reference:`Nia decided to record the introduction. 过去时在 decided。`,explanation:`decide 接 to do，record 不随过去改变。`,criteria:[`to record`,`decided 承担过去`]},{id:`gc37-p2`,prompt:`表达两个功能：来教室为了拍摄；需要一个可拍摄的安静房间。`,reference:`We came to the classroom to film. We need a quiet room to film in.`,explanation:`前者目的；后者说明 room 的用途，in 保留地点关系。`,criteria:[`目的 to film`,`用途修饰`,`地点关系完整`]},{id:`gc37-p3`,prompt:`分别表达希望 Nia 来与想让 Nia 来，不套同一框架。`,reference:`I hope that Nia will come. I want Nia to come.`,explanation:`hope 用内容从句，want 可用人＋to do。`,criteria:[`hope 从句`,`want Nia to come`]},{id:`gc37-p4`,prompt:`分别写告诉孩子别按按钮与没有告诉孩子按按钮。`,reference:`I told the child not to press the button. I did not tell the child to press the button.`,explanation:`否定位置改变事实；后一项不直接构成禁止。`,criteria:[`not to press`,`did not tell`,`不等同两义`]},{id:`gc37-p5`,prompt:`改被动：They made us repeat the recording. They let us leave.`,reference:`We were made to repeat the recording. We were allowed to leave.`,explanation:`make 被动恢复 to；许可 let 改用 allow。`,criteria:[`were made to repeat`,`were allowed to leave`]},{id:`gc37-p6`,prompt:`判断 Nia helped us edit 与 Nia helped us to edit 是否都可用。`,reference:`都可用。help 后可用带 to 或不带 to 的不定式。`,explanation:`搭配允许两种，不强制参考措辞唯一。`,criteria:[`接受两形式`,`help 搭配说明`]},{id:`gc37-p7`,prompt:`字号过小，你读不清。用 too 写一句，明确阅读者且不重复 text。`,reference:`The text is too small for me to read clearly.`,explanation:`for me 为执行者，text 对应 read 对象。`,criteria:[`too small`,`for me to read`,`无重复 it`]},{id:`gc37-p8`,prompt:`你没决定是否加入照片。用 whether＋to do，说明动作执行者。`,reference:`I have not decided whether to include the photo. include 由 I 负责。`,explanation:`whether 表示二选内容，不是 what 表示的对象。`,criteria:[`whether to include`,`执行者 I`]}],verification:[{id:`gc37-v1`,prompt:`编辑邀请同学检查字幕：The editor invited the students ___ the subtitles. 用 check 并标执行者。`,reference:`to check；检查者是 the students。`,explanation:`invite＋人＋to do；编辑邀请，学生检查。`,criteria:[`to check`,`执行者准确`],skill:`structure`,critical:!1},{id:`gc37-v2`,prompt:`改正 The museum hopes visitors to follow the signs.`,reference:`The museum hopes that visitors will follow the signs.`,explanation:`hope 内容用从句，不套所有动词＋人＋to do。`,criteria:[`hope 从句`,`visitors 行为保留`],skill:`transformation`,critical:!0},{id:`gc37-v3`,prompt:`将 They made us turn off the flash.改被动，保留过去时间。`,reference:`We were made to turn off the flash.`,explanation:`were 保存过去，被动 make 后 to turn。`,criteria:[`were made`,`to turn off`],skill:`transformation`,critical:!0},{id:`gc37-v4`,prompt:`The path is easy for visitors to follow. 谁走、谁被跟随？是否保证已走过？`,reference:`visitors 执行 follow，path 是对象；句子评价条件，不保证实际走过。`,explanation:`隐藏角色与现实事实须区分。`,criteria:[`访客执行`,`路径对象`,`不推已发生`],skill:`meaning`,critical:!1},{id:`gc37-v5`,prompt:`写三句志愿者说明：你决定整理展柜；请搭档核对清单；提醒别移原标签。`,reference:`I decided to organise the display case. I asked my partner to check the list. I reminded my partner not to remove the original labels.`,explanation:`不同执行者与否定要求分别匹配框架；同义措辞可接受。`,criteria:[`decide to`,`ask 人 to`,`not to`,`角色清楚`],skill:`expression`,critical:!0},{id:`gc37-v6`,prompt:`展览准备：带放大镜为了读小字；盒子太重，一个人不能安全搬；大家获准用推车。写 3—4 句。`,reference:`We brought a magnifier to read the small print. The box is too heavy for one person to carry safely. We were allowed to use a trolley.`,explanation:`目的、程度障碍、许可是不同功能，评价关系准确而非唯一词汇。`,criteria:[`目的不定式`,`too＋for 人＋to`,`allowed to`,`无重复对象`],skill:`expression`,critical:!0}],review:[{id:`gc37-r1`,prompt:`一天后：培训员要求你重新录音，写 make 主动与被动。`,reference:`The trainer made me record it again. I was made to record it again.`,explanation:`主句过去保持，补足形式随主动被动变化。`,criteria:[`主动原形`,`被动 to`]},{id:`gc37-r2`,prompt:`三天后：你没要求搭档删除文件，写一句并解释为何不等于禁止。`,reference:`I did not ask my partner to delete the file. 否定提出要求，不等于 asked my partner not to delete。`,explanation:`主句否定与不定式否定范围不同。`,criteria:[`did not ask`,`范围说明`]},{id:`gc37-r3`,prompt:`一周后：真实计划含目的与 how＋to do，标各执行者。`,reference:`I will visit the centre to ask how to use the camera. visit/ask 由我执行，use 也指我要学的使用方法。`,explanation:`能恢复角色才算理解非限定内容。`,criteria:[`目的 to do`,`how to do`,`角色说明`]}],sources:[{title:`British Council：Verbs followed by the infinitive`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/verbs-followed-infinitive`,supports:`动词＋to do、动词＋人＋to do、make/let主动原形、make被动恢复to、许可被动改用allow`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Infinitives with and without to`,url:`https://dictionary.cambridge.org/grammar/british-grammar/infinitives`,supports:`带to与不带to的不定式、补足与目的、help两种形式及介词后不能直接套原形`,accessed:`2026-10-03`,method:`官方搜索返回正文核验；部分直连访问403。`},{title:`Cambridge English Grammar Today：Verb patterns`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/infinitive-or-verb-ing`,supports:`动词补足框架须逐项判断；to do、doing和宾语＋不定式不构成统一的愿望动词模板`,accessed:`2026-10-03`,method:`通过官方搜索返回正文核验，直连403。`}],revision:`official-reference-2026-10-03`,title:`不定式与原形补足语`,module:`非谓语与句子压缩`,moduleOrder:6,track:`basic`},{number:38,objectives:[`识别活动性-ing 的主语、宾语和介词宾语功能`,`凭搭配与事件关系选择 doing 或 to do`,`区分已发生记忆、待完成行动、停止活动与尝试办法`],summary:`识别活动性-ing 的主语、宾语和介词宾语功能`,prerequisites:[23,25,36,37],body:`### 学习目标

1. 识别活动性-ing 的主语、宾语和介词宾语功能
2. 凭搭配与事件关系选择 doing 或 to do
3. 区分已发生记忆、待完成行动、停止活动与尝试办法

### 先检查前置知识

先学：第 23 课、第 25 课、第 36 课、第 37 课。先独立回答下面两题，再阅读本节的核对提示。

1. We decided to review. 换 enjoyed 后还能保留 to review 吗？

核对：通常不能，enjoyed reviewing，搭配随动词调整。若做错，回到第 37 课补足框架。

2. We learn by discussing examples. discussing 是限定谓语吗？

核对：不是，作介词 by 的活动宾语，主句谓语 learn。若做错，回到第 25 课介词与第 10 课主干。

词汇支持：gerund 动名词；avoid 避免；consider 考虑；postpone 推迟；experiment 尝试办法；habit 习惯；submit 提交。

### A · 活动占名词性位置，不等于独立现在时

Checking the references takes patience 中整项活动作主语，takes 是限定谓语。活动内部能带对象、方式和否定：Not checking the source carefully caused the mistake。不能因它像名词就删掉动词所需对象，也不能看见-ing 就宣布全句为进行时；进行形式还需要 be 等限定成分。单项活动作主语通常单数；两个明确并列活动是否作复数，要看是两件事还是一个整体概念。

enjoy/avoid/finish/consider/mind/practise 通常接 doing；decide/plan/hope/refuse 通常接 to do。不必一次背完所有词，应把使用中的搭配存成有意义短句：avoid copying an unclear label、plan to rewrite the label。形式由补足搭配决定，不由前一个动词是否过去决定。Yesterday we finished checking 的 checking 也不是“因为过去所以 doing”。

suggest/recommend 可用 doing 建议活动，也可用内容从句。We suggested checking the room 由语境恢复参与者；We suggested that Nia check the room 把人明确写出。不同动词接受的新执行者结构不完全相同，不能把某个带人＋doing 的例子推广到所有词。需要别人做的意图若不清，优先完整从句。学习目标是把活动放到正确位置，又保留活动内部的对象、方式和执行者信息。

### B · 介词后-ing：辨认 to 的身份

after reading、without asking、by comparing 让活动占介词宾语位置。to 也可能是介词：look forward to meeting the group、be used to working in pairs。用名词替换常能检验：look forward to the meeting 仍合理，后续活动就用 meeting 而非 meet。检验依赖整个搭配，不是单独看到 to 便固定选原形。

used to work 表示过去常工作；be used to working 表示习惯于工作。I used to study alone, but I am used to studying with a partner now 能同时成立。get used to studying 还可以表达逐渐适应，get 是主句行为，后面仍是介词 to＋活动。不要把“现在习惯”误写成表示过去习惯的 used to do，也不要因两个结构汉语都含“习惯”就判断同义。

We came to discuss the plan 说明目的，We improved the plan by discussing it 说明方法，中文都可能说讨论，英语位置却不同。否定活动用 not doing，如 She apologised for not sending the file；for 连接完整否定活动，不写 for didn't send。做表达题先写介词或主句动词，再按框架选后续形式。活动过去发生的时间可由语境说明，不靠把介词后的动词变过去谓语。

### C · remember、forget、stop：恢复两件事的顺序

I remember labelling the folders 表示有当时贴标签的记忆，行为早于现在回想。Remember to label the folders 提醒先想起任务、再执行。I remembered to label them 通常表示当时记得并完成了；“待完成”描述相对记忆动作的顺序，不是所有 to do 都指绝对未来。forget to do 常指因遗忘没有执行；forget doing 指失去过去事件的记忆。“忘了做”与“不记得做过”不能交换。

stop doing 是该活动停止；stop to do 是停下另一活动，以做后面的事。We stopped editing 意为不再编辑；We stopped to discuss the title 意为停下前面的事，来讨论标题，不是停止讨论。若要两项都明确，We stopped editing to discuss the title 同时写出了停止对象和目的。后续讨论究竟是否完成，不能仅靠 stop to 形式判断。

做题先画小时间线：行为先于回忆，还是先想起任务再行动；停止的是后续活动，还是语境里的另一活动。词形是意义选择的结果。没有情境的 I stopped ___ (read)可能有不同答案，不能强制唯一。自主输出时先用一句中文记下真实事实，特别是“做了没做”，再选择结构；同伴反译若改变实际经历，就需要修正形式与关系的连接。

### D · try、mean 和两种都可的形式：规则不绝对化

try doing 突出试一个办法看效果；try to do 突出努力达到目标，不保证成功。The sound is unclear. Try moving closer to the microphone 把靠近当实验办法；I tried to repair it, but I could not find the fault 说明努力修理。实际活动可能兼有尝试与困难，所以不能说两种形式在任何语境都互相排斥，更不能说 try to 必定失败。实验题要能解释方法，努力题要能解释目标。

mean doing 表示意味着或涉及：Taking this role means answering visitors' questions；mean to do 表示意图：I meant to answer earlier。regret doing 常评价已做事；regret to inform/tell 是正式告知坏消息的习惯表达。这些差异分别来自后果、意图或评价，不能改写成一个“to 未来、-ing 过去”的通则。先说明说话人为何选该动词框架，再核对词形。

like/love/hate/prefer 在不少情境两种都可，差异往往较小；-ing 可突出活动体验，to do 可突出偏好、习惯或结果。无上下文的喜欢早起不应只判一个。would like/love/prefer 表达愿望时本课用 to do，如 We'd like to meet the guide。The sign needs replacing 还有被动含义，即牌子需要被换，可恢复 needs to be replaced。不要因后面是-ing，就推定句首物体亲自执行活动。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| Checking the list helps. / We are checking the list. | 检查有帮助／正在检查。 | 活动主语与进行形式不同。 |
| We enjoy discussing it. / We decided to discuss it. | 喜欢讨论／决定讨论。 | 动词决定补足搭配。 |
| I came to meet the team. / I look forward to meeting the team. | 来见团队／期待见团队。 | 目的不定式与介词 to。 |
| I used to work alone. / I am used to working alone. | 过去常独做／现在习惯独做。 | 两种 used 结构不同。 |
| I remember posting the card. / Remember to post the card. | 记得寄过／记得去寄。 | 行为先于记忆／想起任务先于行动。 |
| We stopped talking. / We stopped to talk. | 停止谈话／停下别的事来谈话。 | 活动停止与目的不同。 |
| Try moving the lamp. / Try to move the cabinet. | 试试移灯／努力移柜。 | 实验方法与努力目标，结果均需语境。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| She enjoyed to design the poster. | She enjoyed designing the poster. | enjoy 补足通常-ing。 |
| I look forward to hear your news. | I look forward to hearing your news. | 介词 to 后活动。 |
| We stopped checking the map.（停下骑行来查地图） | We stopped to check the map. | 原句停止查地图，修正后查地图为目的。 |
| I am used to work with this editor.（现在习惯） | I am used to working with this editor. | be used to 的 to 为介词。 |

### 边界与使用选择

同形-ing 有不同工作，术语不能替代结构分析。like 等可接受两种的词不应无情境只判一种。remember to do 的相对先后不同于绝对未来，try to 也不必失败。参考给典型表达，自然变体若保持题目事件事实、搭配及执行者，应按这些依据核对。

### 学完后怎样检查自己

用真实经历写过去常态与现在习惯、做过记忆与行动提醒、停止活动与停下来做另一事、努力目标与实验办法四组。先写事实卡，再写英文，遮住卡请同伴复述。若对方误以为事情没发生或停止了另一项活动，先修意义选择，不只重复背配对表。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：Verbs followed by -ing or infinitive to change meaning](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/verbs-followed-ing-or-infinitive-change-meaning)：stop停止活动与停下做另一事；try实验办法与努力目标；remember/forget的先后关系，情境可影响选择。
- [Cambridge English Grammar Today：Verb patterns: verb + infinitive or verb + -ing?](https://dictionary.cambridge.org/us/grammar/british-grammar/infinitive-or-verb-ing)：enjoy/avoid/finish等-ing搭配；like等两种形式差异常小、would like等接to；mean、try、stop的意义变化。`,practice:[{id:`gc38-p1`,prompt:`填：The class enjoyed ___ (compare) drafts but decided ___ (rewrite) the ending.`,reference:`comparing; to rewrite`,explanation:`补足由 enjoy 与 decide 分别决定。`,criteria:[`enjoyed comparing`,`decided to rewrite`]},{id:`gc38-p2`,prompt:`用活动主语表达仔细核对姓名能减少错误，标限定谓语。`,reference:`Checking names carefully reduces mistakes. 限定谓语 reduces。`,explanation:`单项活动主语，内部保留对象与方式。`,criteria:[`Checking 主语`,`reduces 一致`,`限定说明`]},{id:`gc38-p3`,prompt:`不用从句，表达为没有及时发文件道歉。`,reference:`She apologised for not sending the file on time.`,explanation:`介词 for 后完整否定活动。`,criteria:[`for not sending`,`时间准确`]},{id:`gc38-p4`,prompt:`填：I used to ___ (study) alone. I am used to ___ (study) in pairs now.`,reference:`study; studying`,explanation:`过去习惯原形，当前适应介词 to 后 doing。`,criteria:[`study`,`studying`,`意义区分`]},{id:`gc38-p5`,prompt:`记得昨天加过标签；现在提醒搭档加标签。用 remember 两句。`,reference:`I remember labelling the files yesterday. Remember to label the files.`,explanation:`已发生记忆与行动提醒不同。`,criteria:[`remember labelling`,`remember to label`]},{id:`gc38-p6`,prompt:`你们停止编辑以讨论标题。用 stop 一句，明确两活动。`,reference:`We stopped editing to discuss the title.`,explanation:`editing 为停止对象，to discuss 为目的。`,criteria:[`stopped editing`,`to discuss`]},{id:`gc38-p7`,prompt:`声音太远，试试靠近话筒看能否改善。用 try 并解释。`,reference:`Try moving closer to the microphone. 这是试一个改善办法。`,explanation:`doing 突出实验方法，不保证效果。`,criteria:[`try moving`,`方法说明`]},{id:`gc38-p8`,prompt:`志愿工作意味着周末答问题，你原打算周末休息。用 mean 两句。`,reference:`Being a volunteer means answering questions at weekends. I meant to rest this weekend.`,explanation:`后果/涉及与意图不同。`,criteria:[`means answering`,`meant to rest`]}],verification:[{id:`gc38-v1`,prompt:`填：The organiser postponed ___ (announce) the result. 说明-ing 功能。`,reference:`announcing；它是 postponed 的补足活动，不是独立现在进行时。`,explanation:`postpone 通常-ing，主句组织过去。`,criteria:[`announcing`,`活动补足`],skill:`structure`,critical:!1},{id:`gc38-v2`,prompt:`改正 Thank you for helped us with the notice.`,reference:`Thank you for helping us with the notice.`,explanation:`介词 for 后活动，过去事实由语境确定。`,criteria:[`for helping`,`对象保留`],skill:`transformation`,critical:!0},{id:`gc38-v3`,prompt:`改正 I look forward to show the new members around. 并解释 to。`,reference:`I look forward to showing the new members around. to 是搭配中的介词。`,explanation:`可用名词 the visit 检验，后接活动用-ing。`,criteria:[`to showing`,`介词身份`],skill:`transformation`,critical:!0},{id:`gc38-v4`,prompt:`I tried to open the drawer 能断定没打开吗？We stopped to read the notice 等于停止读吗？`,reference:`都不能；前句努力结果未交代，后句停下别的活动以读公告。`,explanation:`不补出失败事实，不交换停止对象。`,criteria:[`结果未知`,`read 为目的`],skill:`meaning`,critical:!1},{id:`gc38-v5`,prompt:`忘了检查预约名单所以没查；记得曾帮访客改预约。用 forget/remember 两句。`,reference:`I forgot to check the booking list. I remember helping a visitor change a booking.`,explanation:`新情境需保持未做与已做事实。`,criteria:[`forgot to check`,`remember helping`,`事实不混`],skill:`expression`,critical:!0},{id:`gc38-v6`,prompt:`写 3—4 句经验：过去独自准备，现在习惯合作；通过比较照片学习；试试重排照片这个办法。`,reference:`I used to prepare alone. Now I am used to preparing with a partner. We learn by comparing photos. Try rearranging the photos to see which order works best.`,explanation:`迁移过去习惯、当前适应、介词方法和实验办法。`,criteria:[`used to 原形`,`be used to doing`,`by doing`,`try doing 办法`],skill:`expression`,critical:!0}],review:[{id:`gc38-r1`,prompt:`一天后：记得曾预约与记得去预约各写一句并说明先后。`,reference:`I remember booking a seat. Remember to book a seat. 前句预约早于回忆，后句想起任务先于执行。`,explanation:`补足改变事件关系。`,criteria:[`doing`,`to do`,`先后说明`]},{id:`gc38-r2`,prompt:`三天后：换活动写当前习惯与过去习惯。`,reference:`I am used to travelling by train. I used to travel by bus.`,explanation:`介词 to 与过去习惯结构不同。`,criteria:[`be used to doing`,`used to 原形`]},{id:`gc38-r3`,prompt:`一周后：试一种方法提高表达，同时努力按时完成。用 try 两形式。`,reference:`I will try recording myself to improve my speaking. I will try to finish by Friday.`,explanation:`办法与努力目标不同，结果需更多信息。`,criteria:[`try doing 方法`,`try to 目标`,`不补失败`]}],sources:[{title:`British Council：Verbs followed by -ing or infinitive to change meaning`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/verbs-followed-ing-or-infinitive-change-meaning`,supports:`stop停止活动与停下做另一事；try实验办法与努力目标；remember/forget的先后关系，情境可影响选择`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Verb patterns: verb + infinitive or verb + -ing?`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/infinitive-or-verb-ing`,supports:`enjoy/avoid/finish等-ing搭配；like等两种形式差异常小、would like等接to；mean、try、stop的意义变化`,accessed:`2026-10-03`,method:`通过官方搜索返回正文核验，直连403。`}],revision:`official-reference-2026-10-03`,title:`动名词及 to do/doing 对比`,module:`非谓语与句子压缩`,moduleOrder:6,track:`basic`},{number:39,objectives:[`按名词与动作的主动、被动或状态关系选分词`,`区别分词修饰、感受形容词和宾语补足`,`按整体或过程视角表达感知，避免重复限定谓语`],summary:`按名词与动作的主动、被动或状态关系选分词`,prerequisites:[27,33,37,38],body:`### 学习目标

1. 按名词与动作的主动、被动或状态关系选分词
2. 区别分词修饰、感受形容词和宾语补足
3. 按整体或过程视角表达感知，避免重复限定谓语

### 先检查前置知识

先学：第 27 课、第 33 课、第 37 课、第 38 课。先独立回答下面两题，再阅读本节的核对提示。

1. The leaflets printed yesterday are ready. 主句谓语是什么，printed 做什么？

核对：are 是限定谓语，printed 修饰 leaflets，传单接受打印。若做错，回到第 27 课被动与第 33 课关系。

2. I heard Nia practise. heard 过去，practise 也要过去式吗？

核对：不用，practise 是非限定感知补足，不是第二个过去谓语。若做错，回到第 37 课补足。

词汇支持：participle 分词；damage 损坏；display 陈列；fascinating 引人入胜；fascinated 入迷；overhear 无意听见；repair 修理。

### A · 谁做、谁受影响，不猜“现在／过去”

现在分词 waiting、carrying 与过去分词 repaired、written、broken，名称中的现在和过去不是自身绝对时间。过去分词也不全以-ed 结尾。The students arriving tomorrow need badges 的 arriving 指明天；The badges printed yesterday are ready 的 printed 指昨天，主句 need/are 仍现在。先找限定谓语，再由时间词及语境确定修饰动作时间。

主动修饰常用-ing：the volunteer carrying a box，volunteer 执行 carry；被动或结果修饰常用过去分词：the box carried by a volunteer，box 接受 carry，a broken handle 则描述已经破损状态。把名词与动词恢复为角色说明：“志愿者搬箱子”或“箱子被搬”，比先看词尾再硬猜有用。不能把-ing 都理解为现在正在，也不能把过去分词当成整句过去时。

过去分词可有完成或结果关系而非典型被动：fallen leaves 是落下后在地上的叶子，不是叶子被别人 fall。因此规则说常见主动、被动或状态关系，而非每项都加 was 强行展开。遇到新词义先查搭配与语境。区分三层信息：形式是分词，位置在修饰名词，实际关系由词义确定；用一个标签代替三层分析会造成误判。

### B · 修饰的位置、范围与从句恢复

单个分词常前置：a damaged screen、a smiling visitor；较长补充常后置：the visitor holding a ticket、the screen damaged during delivery。短语到底修饰谁，要同时检查位置与意义。The photo taken by Nia shows a visitor holding a map 有两组关系，taken 对应 photo，holding 对应 visitor；不能把所有分词都接到最前面的 photo。

用适当完整关系从句检查：visitors waiting outside 可恢复 visitors who are waiting outside；forms completed yesterday 可恢复 forms that were completed yesterday。恢复是理解工具，不意味着任意关系从句都能无损删除 who 与 be。带情态、否定范围或完成关系的句子，压缩后可能丢掉重要意义。Visitors who will arrive after lunch 与 visitors arriving after lunch 有时接近，但仍要看时间安排与选择范围。

先写完整表达、确定哪一个名词与哪一组对象，再决定压缩是否足够。a closed room 只提供关闭状态，a room closed for repairs 还说明关闭用途或原因；读者若需要这条信息，不要为了短删掉。分词修饰通常不是另一个独立分句，不能在同一个主干里塞无连接限定谓语。检查顺序是修饰对象、主被动、必要时间、范围与主句完整性。

### C · 感受与对象状态，不背“人-ed，物-ing”

an inspiring guide 表示导游让人受启发，an inspired visitor 表示访客受到启发。人可以用-ing，因为人也能引发感受：Nia is interesting。The students are interested 描述他们的兴趣状态，The activity is interesting 描述活动引起兴趣的性质。bored/boring、confused/confusing 同样问谁产生感受、什么引发感受，而非按人和物分配词尾。

分词也作宾语补足：Keep the cabinet locked 使 cabinet 保持锁着，Keep the visitors waiting 使 visitors 持续等待。前者对象状态，后者对象活动。I had the frame repaired 通常表示安排别人修框架；had 是主句过去，the frame 是宾语，repaired 说明框架被修。它不是过去完成 had repaired，因为宾语介于 have 和分词之间，关系不同。

亲自做与安排服务要区分：I repaired the frame 说我亲自修；I had the frame repaired 不说我亲自修。后者某些语境也可能表达遭遇，不能一律认定主动安排。基本输出明确给请维修员服务的情境。写状态时还要检查主句时间：The cabinet was locked 可能描述当时状态或被锁事件，进一步用语境说明，而不是因 locked 有-ed 就忽略 was 与整体意思。

### D · 感知整体与过程，两个视角不是两个时态

see/hear/watch/notice＋对象＋原形常将事件作为整体：I watched Nia place the last card on the board。＋对象＋doing 聚焦观察的过程或重复动作：I watched Nia arranging cards when I entered。doing 不保证现实活动后来未完成，只是不把观察重点放在完整边界；原形也不是必须看见每一毫秒的录像声明，要看实际的整体视角。

主动感知补足不带 to，不写 watched her to arrange；后续动词也不用限定过去式。I heard the visitor repeat the question 中 heard 限定，repeat 是宾语后的原形补足。can/could 表示此刻能听见、看见的常见感知表达时，课程采用-ing：I can hear someone speaking。不要把情态后原形规则误套到 someone 之后，因为 hear 与后续补足处在不同层次。

被动 Nia was seen to enter the room 对应整体进入，Nia was seen entering the room 聚焦过程。分别记录这些搭配，不从 make 被动规则推导所有补足都一样。若只看到门已经破损，I saw the damaged door 比 I saw the door damaged 更避免“看见损坏发生”与“看见损坏结果”歧义。表达真实观察还要区分亲眼见到与根据迹象推测，不通过非限定形式偷偷补出未观察的行为结局。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| the assistant carrying bags / the bags carried by the assistant | 搬包助理／助理搬的包。 | 对象换了，主动被动也变。 |
| guests arriving tomorrow / badges printed yesterday | 明天来的客人／昨天印的胸牌。 | 分词时间从语境恢复。 |
| a damaged screen / a screen damaged during delivery | 损坏屏幕／运输损坏屏幕。 | 单词前置，较长补充后置。 |
| an interesting guide / an interested visitor | 有趣导游／感兴趣访客。 | 人也可为感受原因。 |
| I repaired the frame. / I had the frame repaired. | 亲自修／请人修框架。 | have＋对象＋分词不同于亲自做。 |
| I saw Nia place the card. / I saw Nia placing cards. | 看到放上卡／看到放卡过程。 | 整体与过程焦点不同。 |
| Nia was seen to leave. / Nia was seen leaving. | 被看到离开／被看到离开过程。 | 整体被动 to，过程可-ing。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| the assistant carried bags（要名词短语搬包的助理） | the assistant carrying bags | 原表达可为过去句，但不是所需修饰。 |
| I was boring during the talk.（我感到无聊） | I was bored during the talk. | boring 说我使人无聊，bored 说我感受。 |
| I watched her arranged the cards. | I watched her arrange / arranging the cards. | 非限定补足不写限定过去；视角由情境选。 |
| I have the handle repair yesterday.（昨天请人修） | I had the handle repaired yesterday. | had 主句过去，handle 接受修理。 |

### 边界与使用选择

本课名词修饰与第 40 课整句背景不同。分词形容词可能词汇化，不能把所有-ed 还原成被动。整体与过程是观察焦点，不用-ing 断言活动最后未完成。自然变体可接受，但修饰对象、角色、必要时间和观察事实必须与任务一致。

### 学完后怎样检查自己

找真实活动照片，用两个分词短语指出不同对象，用-ed/-ing 形容词说明感受与原因，再描述一项亲见整体事件和一段过程。给分词画箭头指向有关人或物，用完整句复述，确认未把被修物写成修理者，未把未知结果说成已知。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：Participle clauses](https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses)：分词不独立标时态；现在分词常主动、过去分词常被动或状态；实际时间由限定谓语与文脉组织。
- [Cambridge English Grammar Today：Hear, see, etc. + object + infinitive or -ing](https://dictionary.cambridge.org/us/grammar/british-grammar/hear-see-etc-object-infinitive-or-ing%2B...)：感知原形强调事件整体，-ing强调过程或重复；主动补足不带to、不用限定过去形式；can/could感知通常-ing。
- [Cambridge English Grammar Today：Finite and non-finite verbs](https://dictionary.cambridge.org/grammar/british-grammar/finite-and-non-finite-)：限定谓语显示时态、人称和数，非限定不定式与分词自身不这样变化，避免把分词修饰当第二限定谓语。`,practice:[{id:`gc39-p1`,prompt:`写名词短语：整理名单的学生；昨天整理好的名单。`,reference:`the student organising the list; the list organised yesterday`,explanation:`学生主动，名单受影响。`,criteria:[`student organising`,`list organised`]},{id:`gc39-p2`,prompt:`The notices printed last week are still useful. 标主句谓语及分词时间依据。`,reference:`are 为限定谓语；printed 修饰 notices，last week 说明打印时间。`,explanation:`过去分词不使整句过去。`,criteria:[`are`,`printed 修饰`,`时间词`]},{id:`gc39-p3`,prompt:`将 the visitor who is carrying a notebook 压缩并恢复。`,reference:`the visitor carrying a notebook → the visitor who is carrying a notebook`,explanation:`visitor 执行 carry，带对象短语后置。`,criteria:[`carrying 后置`,`恢复同角色`]},{id:`gc39-p4`,prompt:`有趣导游与对故事感兴趣访客各写一句。`,reference:`The guide is interesting. The visitors are interested in the story.`,explanation:`感受原因与感受者不同。`,criteria:[`guide interesting`,`visitors interested in`]},{id:`gc39-p5`,prompt:`请维修员修把手，没说自己亲自修。用 had。`,reference:`I had the handle repaired.`,explanation:`have 对象接受服务，非 had repaired 亲做。`,criteria:[`had 物 repaired`,`不变亲自修`]},{id:`gc39-p6`,prompt:`从开始到结束看见 Nia 挂最后海报。用 watch 整体补足。`,reference:`I watched Nia put up the last poster.`,explanation:`给出整体事件，原形 put 适合，不用 to。`,criteria:[`watched Nia put`,`整体视角`]},{id:`gc39-p7`,prompt:`进入时听见几个人争论，未交代结果。写过程。`,reference:`I heard several people arguing as I entered.`,explanation:`arguing 突出观察片段，未报告最后结果。`,criteria:[`heard 人 arguing`,`过程`]},{id:`gc39-p8`,prompt:`People saw Nia enter the studio.改被动，另写过程版本。`,reference:`Nia was seen to enter the studio. Nia was seen entering the studio.`,explanation:`整体恢复 to，过程保留-ing。`,criteria:[`to enter`,`entering`]}],verification:[{id:`gc39-v1`,prompt:`the labels attached to the boxes 标修饰对象并恢复从句，别编主句。`,reference:`attached 修饰 labels；the labels that are attached to the boxes。`,explanation:`标签接受 attach，整体仍名词短语；补出的 are 或 were 可按时间语境选择，不强制现在时。`,criteria:[`labels 受事`,`被动恢复`,`名词短语`],skill:`structure`,critical:!1},{id:`gc39-v2`,prompt:`讲座让人困惑，我感困惑。修正 The talk was confused and I was confusing.`,reference:`The talk was confusing and I was confused.`,explanation:`给定原因与感受，词尾按角色选。`,criteria:[`talk confusing`,`I confused`],skill:`transformation`,critical:!0},{id:`gc39-v3`,prompt:`They saw the technician remove the old panel.改整体观察被动。`,reference:`The technician was seen to remove the old panel.`,explanation:`seen 被动原形补足恢复 to，保留过去。`,criteria:[`was seen`,`to remove`,`角色保留`],skill:`transformation`,critical:!0},{id:`gc39-v4`,prompt:`fallen leaves 一定是被别人 fall 吗？saw a student running 保证没跑完吗？`,reference:`不是；fallen 可表示落下结果，running 是观察过程，最终结果未确定。`,explanation:`避免所有-ed 被动与所有-ing 未完成的过度规则。`,criteria:[`结果关系`,`不推最终事实`],skill:`meaning`,critical:!1},{id:`gc39-v5`,prompt:`校展海报由学生绘制，拿平板的访客在看。用主被动分词修饰各一次并说明对象。`,reference:`The posters drawn by students are on display. A visitor holding a tablet is looking at them. drawn 修饰 posters，holding 修饰 visitor。`,explanation:`新情境保持修饰对象及主句完整。`,criteria:[`过去分词修饰`,`主动-ing 修饰`,`对象解释`],skill:`expression`,critical:!0},{id:`gc39-v6`,prompt:`你请人装展架；到场看见技术员检查片段；现已牢固固定。用 3 句区别服务、观察和状态。`,reference:`I had the stand installed. I saw the technician checking it when I arrived. The stand is firmly fixed now.`,explanation:`同义措辞允许，受事、过程和当前状态要清楚。`,criteria:[`had 物 installed`,`saw 人 doing`,`现在状态`,`时间角色清楚`],skill:`expression`,critical:!0}],review:[{id:`gc39-r1`,prompt:`一天后：送包裹的人与昨日送达的包裹分别写短语并说明关系。`,reference:`the person delivering the parcel; the parcel delivered yesterday。人递送，包裹接受递送。`,explanation:`对象变化要匹配形式。`,criteria:[`delivering`,`delivered`,`关系说明`]},{id:`gc39-r2`,prompt:`三天后：有趣同学与对机器人感兴趣同学，解释人也可-ing。`,reference:`an interesting classmate; a classmate interested in robotics。人可引起感受或持有感受。`,explanation:`按意义选择，非人-ed。`,criteria:[`interesting 人`,`interested in`]},{id:`gc39-r3`,prompt:`一周后：真实整体观察与过程各一句，注明未知结果。`,reference:`I saw Lee close the gate. I saw Lee painting later, but I do not know whether he finished.`,explanation:`两种视角不等于两种最终事实。`,criteria:[`感知原形`,`感知 doing`,`未知说明`]}],sources:[{title:`British Council：Participle clauses`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses`,supports:`分词不独立标时态；现在分词常主动、过去分词常被动或状态；实际时间由限定谓语与文脉组织`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Hear, see, etc. + object + infinitive or -ing`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/hear-see-etc-object-infinitive-or-ing%2B...`,supports:`感知原形强调事件整体，-ing强调过程或重复；主动补足不带to、不用限定过去形式；can/could感知通常-ing`,accessed:`2026-10-03`,method:`通过官方搜索返回正文核验，直连403。`},{title:`Cambridge English Grammar Today：Finite and non-finite verbs`,url:`https://dictionary.cambridge.org/grammar/british-grammar/finite-and-non-finite-`,supports:`限定谓语显示时态、人称和数，非限定不定式与分词自身不这样变化，避免把分词修饰当第二限定谓语`,accessed:`2026-10-03`,method:`通过官方搜索返回正文核验。`}],revision:`official-reference-2026-10-03`,title:`分词定语与宾语补足语`,module:`非谓语与句子压缩`,moduleOrder:6,track:`basic`},{number:40,objectives:[`使分词背景逻辑主语与主句正确衔接`,`按主动、被动、先行完成和语义关系选形式`,`发现悬垂修饰，用完整从句或主句重组保持事实`],summary:`使分词背景逻辑主语与主句正确衔接`,prerequisites:[22,27,30,33,37,39],body:`### 学习目标

1. 使分词背景逻辑主语与主句正确衔接
2. 按主动、被动、先行完成和语义关系选形式
3. 发现悬垂修饰，用完整从句或主句重组保持事实

### 先检查前置知识

先学：第 22 课、第 27 课、第 30 课、第 33 课、第 37 课、第 39 课。先独立回答下面两题，再阅读本节的核对提示。

1. While Nia carried the box, she noticed damage. 两动作都属于谁？

核对：Nia，可考虑同主语背景压缩。若做错，回到第 30 课关系与第 39 课分词。

2. Walking into the room, the display looked new. 若本意我进入，错在哪里？

核对：walking 默认接 display，但实际执行者 I 未正确连接。若做错，回到第 10 课主语与第 39 课关系。

词汇支持：participle clause 分词从句；background 背景；logical subject 逻辑主语；dangling modifier 悬垂修饰；inspect 检查；securely 牢固。

### A · 先完整再压缩，核对默认主语

分词状语给主句提供同时活动、原因、条件或补充背景，常见于说明、报道与较正式文字。While Nia was checking the tickets, she noticed a missing name 可写 Checking the tickets, Nia noticed a missing name。checking 执行者通常从主句 Nia 恢复，不是第二个独立现在时；noticed 及文脉组织过去时间。较长开头背景常以逗号和主句分开。

Checking the tickets, a name was missing 若本意工作人员检查，会让 a name 接到 checking，成了姓名检查。可重组主句 Checking the tickets, Nia found a missing name，或保留 While Nia was checking the tickets, she noticed that a name was missing。前者同一个人完成两个行动，后者完整说明背景；选择取决于应保留的角色和信息焦点。

先写完整关系，标分句主语，确认同一实体，再看原因、条件或同时能否恢复，最后才压缩。语法允许压缩不意味着必须压缩。真实记录里完整从句常更清楚，分词数量不是写作质量。修改时读给别人听，请对方只根据句子指出背景执行者，如果与你的事实不同，即使词尾看似正确也要修。

### B · 主动、被动及关系，-ing 并非一律原因

Not knowing the room number, we asked at reception 在情境中通常是原因；Waiting at reception, we checked the schedule 常是同时背景。因果与同时不是由-ing 词尾单独编码，来自词义与文脉。关系重要或有歧义时，保留 because、while、if 完整从句。不要为了短而把因果证据不足的同时活动写成确定原因。

过去分词背景通常提供被动或状态：Guided by a volunteer, the visitors entered，visitors 接受引导。If carefully packed, the models can be transported safely 可恢复 If the models are carefully packed。不是事情过去就用过去分词；昨天主动走路的人仍可写 Walking…，不会因过去便写 Walked…提供主动背景。先恢复“谁做／谁被做”，再选分词。

The shelf collapsed, damaging two models 的句末 damaging 常补充前面坍塌造成的结果，不宜强说每个句末分词的施事都必须是句首人。基本输出先练同主语开头背景，结果性补充分词主要用于阅读辨义。不能把任何 And then 都改成分词，否则独立先后或不同执行者可能消失。若要表达连续两件完整事件，连词或两句本来就是自然选择。

### C · having done 与 having been done：相对先行完成

Having inspected every connection, Nia switched on the lights 表明检查在开灯前完成。having＋过去分词把完成关系说清；Checking the connections, Nia switched on the lights 更容易让人理解同时。若安全要求先完成检查，前者更合适。主句可过去、现在或未来：Having completed the training, the volunteers will lead the next tour。完成关系相对主句行动，不是固定“过去的过去”。

先行完成被动用 having been＋过去分词：Having been checked by the technician, the equipment was put back into use。equipment 接受检查，不能删 been 成 having checked 把设备写成检查者。比较 Having checked the equipment, the technician approved it 与 Having been checked, the equipment was approved，信息焦点改为技术员或设备时，关系也必须对应。

不需要每个先发生动作都加 having。After Nia checked the connections, she turned on the lights 和 After checking the connections, Nia turned on the lights 也能清楚表达先后。完成分词有理由地突出已经完成，不是机械把两个过去动词升级。Not having received the timetable, we could not confirm the start time 中 not 否定当时已收到；时间、原因及未完成事实要一起解释，不只识别长形式。

### D · 悬垂修饰、独立主语和保持事实的修复

Waiting outside, the door was opened 若本意我们在等，door 不能执行 wait。不能为了修语法随便牺牲事实，可写 While we were waiting outside, someone opened the door；若不知道开门者，写 While we were waiting outside, the door was opened。完整从句明确等待者，主句保留未知执行者的被动，不虚构谁开了门。

Having printed the labels, they were attached to the boxes 若 they 指 labels，会把标签当打印者。可写 Having printed the labels, we attached them to the boxes；若打印者未知，After the labels had been printed, they were attached to the boxes 更保留事实。修复要核对角色、已经完成与否、主被动和顺序，不能只消除表面逗号前后不一致。

不同主语有时可用明确独立结构：With the visitors waiting outside, we prepared the room。The rain having stopped, the group went out 在较正式文体也可见。这类前面明确给自身主语，不是无主语分词随意挂接，不推翻基本检查。初学输出优先完整 while/because/after 关系。generally speaking 等固定表达另有惯常用法，不据此放宽所有分词背景。句末结果补充也应单独分析，别把一个初学规则变成无例外定理。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| While Nia checked, she took notes. / Checking the list, Nia took notes. | Nia 检查时做笔记。 | 同主语同时背景可恢复。 |
| Because we did not know the route, we asked. / Not knowing the route, we asked. | 不知道路线而询问。 | 原因由词义文脉支持。 |
| A volunteer guided us. / Guided by a volunteer, we entered. | 有人引导／在引导下进入。 | we 为 guide 受事。 |
| Nia checked, then switched on the lights. / Having checked, Nia switched them on. | 检查完成后开灯。 | 突出先行完成。 |
| Having checked the equipment, Nia approved it. / Having been checked, the equipment was approved. | 检查者角度／设备角度。 | 逻辑主语改动对应主动被动。 |
| While we waited, the door opened. / With us waiting outside, someone opened the door. | 我们等候时门开／有人开门。 | 不同主语需明确从句或独立结构。 |
| The shelf fell and damaged a model. / The shelf fell, damaging a model. | 架倒造成模型损坏。 | 句末结果不套所有顺序事件。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| Reading the instructions, the machine looked simple.（我阅读） | Reading the instructions, I thought the machine looked simple. | 机器不读，主句 I 连接阅读者。 |
| Packed the models, we loaded the van.（我们先包装） | Having packed the models, we loaded the van. / After packing the models, we loaded the van. | 主动先行完成不能靠 Packed 表达。 |
| Having checked by an engineer, the bridge reopened. | Having been checked by an engineer, the bridge reopened. | bridge 接受检查，完成被动须 been。 |
| Having sent the invitations, they were delivered.（they 指 invitations） | After the invitations had been sent, they were delivered. | 不能让邀请函发送自己，完整被动保留未知人物。 |

### 边界与使用选择

基本同主语规则用于无明确主语的开头背景；独立主语、固定表达及结果补充分别分析。完整从句也是合格写作，不必强用文学式独立结构。修悬垂不能编造执行者、改变事实。原因、条件和先后若压缩后含混，保留完整关系更合适。

### 学完后怎样检查自己

选真实准备活动，先写角色明确的完整句，再压缩两处。每处注明谁做或谁受影响、同时还是先完成、如何完整恢复。请同伴指出执行者；理解偏离事实时重组主句或改回从句。最后检查段落仍能说明真实的工作顺序。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：Participle clauses](https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses)：基本开头分词背景的同主语、原因/同时/结果与被动关系；having done、having been done表示相对先行完成；完整从句和独立主语应区别分析。
- [Cambridge English Grammar Today：Clauses: finite and non-finite](https://dictionary.cambridge.org/us/grammar/british-grammar/clauses-finite-and-non-finite)：非限定分句由主句文脉恢复时间，常共享主语，主动与被动形式需要匹配逻辑角色，不按词尾推绝对时态。`,practice:[{id:`gc40-p1`,prompt:`压缩 While Nia was checking the badges, she noticed an error. 并说主语。`,reference:`Checking the badges, Nia noticed an error. checking 和 noticed 同属 Nia。`,explanation:`同主语背景，noticed 保存过去。`,criteria:[`Checking`,`主句 Nia`,`主语说明`]},{id:`gc40-p2`,prompt:`不知道展室编号，所以问前台。用否定分词背景。`,reference:`Not knowing the room number, I asked at reception.`,explanation:`not 否定 knowing，主句 I 连接逻辑主语。`,criteria:[`Not knowing`,`I`,`原因合理`]},{id:`gc40-p3`,prompt:`访客被志愿者引导进入展室。用过去分词背景。`,reference:`Guided by a volunteer, the visitors entered the room.`,explanation:`visitors 接受 guide，非 Guiding 主动。`,criteria:[`Guided by`,`visitors 受事`]},{id:`gc40-p4`,prompt:`Nia 先查完连接再开灯。用 having 保持安全顺序。`,reference:`Having checked the connections, Nia switched on the lights.`,explanation:`先完成检查，不是同时开灯。`,criteria:[`Having checked`,`Nia`,`先后`]},{id:`gc40-p5`,prompt:`设备先被技术员检查再投入使用。用完成被动。`,reference:`Having been checked by the technician, the equipment was put into use.`,explanation:`设备受事，having been checked。`,criteria:[`having been checked`,`equipment`,`被动主句`]},{id:`gc40-p6`,prompt:`修正 Walking through the gallery, the paintings looked impressive. 本意我走，给两方案。`,reference:`Walking through the gallery, I found the paintings impressive. / While I was walking through the gallery, the paintings looked impressive.`,explanation:`重组 I 主句或保留从句，都不让画行走。`,criteria:[`合理修复`,`I 走`,`印象保持`]},{id:`gc40-p7`,prompt:`访客在外等，我们准备房间。用完整 while 或明确 with 结构。`,reference:`While the visitors were waiting outside, we prepared the room. / With the visitors waiting outside, we prepared the room.`,explanation:`不同执行者不能删成 Waiting outside, we…改变事实。`,criteria:[`visitors 等`,`we 准备`,`不同角色明确`]},{id:`gc40-p8`,prompt:`The shelf collapsed, damaging a model. 解释关系及不能推广的原因。`,reference:`后半补充坍塌造成的结果，不代表所有句末-ing 都同一人做另一事。`,explanation:`根据语义和位置判断，不只背词尾。`,criteria:[`结果关系`,`不绝对化`]}],verification:[{id:`gc40-v1`,prompt:`将 Inspected regularly, the lifts remain safe.作为维护条件展开，不猜检查人。`,reference:`If the lifts are inspected regularly, they remain safe. lifts 接受检查，主句 remain。`,explanation:`维护条件可恢复被动，未知执行者不必编写。`,criteria:[`被动恢复`,`lifts 受事`,`不猜人`],skill:`structure`,critical:!1},{id:`gc40-v2`,prompt:`修正 Waiting for the bus, my bag was stolen. 本意我等车，偷者未知。`,reference:`While I was waiting for the bus, my bag was stolen.`,explanation:`完整从句保留等待者 I，主句被动保留未知人。`,criteria:[`I 等待`,`bag 被偷`,`从句修复`],skill:`transformation`,critical:!0},{id:`gc40-v3`,prompt:`两装置已通过测试，之后用于展览。用 having been，主句未来。`,reference:`Having been tested and approved, the two devices will be used in the exhibition.`,explanation:`tested and approved 保留已通过测试；完成相对未来使用，不限过去主句。`,criteria:[`having been tested and approved`,`保留通过测试`,`devices 受事`,`will be used`],skill:`transformation`,critical:!0},{id:`gc40-v4`,prompt:`Having reviewed the drawings, they were stored safely. they 为 drawings，修正且不猜人。`,reference:`drawings 不执行 review。After the drawings had been reviewed, they were stored safely.`,explanation:`完整被动保持先审核后保存与未知人物。`,criteria:[`指出悬垂`,`完成被动`,`不猜角色`],skill:`meaning`,critical:!1},{id:`gc40-v5`,prompt:`写 3 句演练：你先读完路线后带组到出口；大家由教师带领保持安静；等候时查名单。用主动先行完成和被动背景并解释主语。`,reference:`Having read the route, I led the group to the exit. Guided by the teacher, we stayed quiet. While waiting, we checked the list. read 由 I 做，guided 以 we 为受事，wait/check 同属 we。`,explanation:`新情境控制角色、主被动和先后，允许自然变体。`,criteria:[`主动 having done`,`被动背景`,`同主语等候`,`关系说明`],skill:`expression`,critical:!0},{id:`gc40-v6`,prompt:`工作人员先检查房间，再整理资料；电路先被测试后灯亮；整理时访客在等候。写 3—4 句，压缩一处再恢复，不猜测试者。`,reference:`原段：The staff inspected the room. After the circuit had been tested, the lights came on. While the visitors were waiting, the staff organised the notes. 压缩检查与整理的先后关系：Having inspected the room, the staff organised the notes. 恢复：After the staff had inspected the room, they organised the notes.`,explanation:`不同主语与未知执行者保留完整从句；只压缩同主语且先后可恢复处。`,criteria:[`角色保留`,`测试被动`,`不同主语明确`,`合理压缩与恢复`],skill:`expression`,critical:!0}],review:[{id:`gc40-r1`,prompt:`一天后：先完成工作再下一项，写 having 并恢复。`,reference:`Having finished the timetable, I emailed it. → After I had finished the timetable, I emailed it.`,explanation:`同主语先行完成。`,criteria:[`having done`,`完整恢复`]},{id:`gc40-r2`,prompt:`三天后：修正 Entering the kitchen, a lovely smell reached me. 本意我进入。`,reference:`When I entered the kitchen, a lovely smell reached me. / Entering the kitchen, I noticed a lovely smell.`,explanation:`完整从句或主句重组都保留进入者。`,criteria:[`I 进入`,`合理修复`]},{id:`gc40-r3`,prompt:`一周后：不同执行者同时活动，解释为何不能随意删前句主语。`,reference:`While my partner measured the wall, I prepared labels. 删成 Measuring the wall, I…会把测量者改成 I。`,explanation:`压缩服从角色，不以短为唯一目标。`,criteria:[`不同主语完整`,`角色变化说明`]}],task:[{id:`gc40-task1`,prompt:`写一次真实项目准备，共 6—8 句。含目的、介词后活动、主/被动分词修饰、感知补足、同主语背景、先行完成；至少一处不同主语保留完整从句。再选择两处压缩写出完整恢复句，确认未虚构人物。`,reference:`We met to prepare a small exhibition. We improved the labels by checking each name. The photos selected by Nia were clear. I saw Leo arranging them. Knowing the room well, he suggested a better layout. Having checked the list, we opened the doors. While visitors were looking at the photos, I answered questions. 恢复：Because Leo knew the room well, he suggested a better layout. After we had checked the list, we opened the doors.`,explanation:`7 句参考可换真实活动；按关系、主干、逻辑主语和恢复同义性评价，不要求将结构堆一长句。`,criteria:[`6—8 句连贯`,`目的 to`,`介词 doing`,`分词对象正确`,`感知视角`,`同主语背景`,`先行完成`,`不同主语完整`,`两处恢复`]}],sources:[{title:`British Council：Participle clauses`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/c1/participle-clauses`,supports:`基本开头分词背景的同主语、原因/同时/结果与被动关系；having done、having been done表示相对先行完成；完整从句和独立主语应区别分析`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Clauses: finite and non-finite`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/clauses-finite-and-non-finite`,supports:`非限定分句由主句文脉恢复时间，常共享主语，主动与被动形式需要匹配逻辑角色，不按词尾推绝对时态`,accessed:`2026-10-03`,method:`通过官方搜索返回正文核验，直连403。`}],revision:`official-reference-2026-10-03`,title:`分词状语与逻辑主语`,module:`非谓语与句子压缩`,moduleOrder:6,track:`basic`},{number:41,objectives:[`按转述者的时间、地点及人物关系调整指代`,`合理使用回移而不机械宣告真实情况已改变`,`按陈述、问题和请求选择转述框架并保持语序`],summary:`按转述者的时间、地点及人物关系调整指代`,prerequisites:[9,21,22,36,37],body:`### 学习目标

1. 按转述者的时间、地点及人物关系调整指代
2. 合理使用回移而不机械宣告真实情况已改变
3. 按陈述、问题和请求选择转述框架并保持语序

### 先检查前置知识

先学：第 09 课、第 21 课、第 22 课、第 36 课、第 37 课。先独立回答下面两题，再阅读本节的核对提示。

1. Nia 对我说“I need your notes.” 我向 Lee 转述，I 与 your 分别是谁？

核对：I 指 Nia，your 指我，可转 she 与 my，不按固定表一律替换。若做错，回到第 9 课指代。

2. Where does Nia work?作为 asked 后内容，保留 does Nia 吗？

核对：不保留，内容用 Nia worked/works 的陈述语序，时间按转述视角选择。若做错，回到第 36 课间接问题。

词汇支持：reported speech 转述；reporting verb 转述动词；backshift 回移；speaker 原说者；listener 原听者；perspective 视角；claim 声称。

### A · 人物、时间、地点三张事实卡

转述把原话放进叙述者的视角，不是删除引号再逐词替换。Monday 在活动中心，Nia 对我说“I will bring your notes here tomorrow.” Wednesday 我在家向 Lee 报告，可写 Nia said that she would bring my notes to the centre on Tuesday。I 对应 Nia，your notes 对应我的笔记，here 对应原中心，tomorrow 对应 Tuesday。明确日期地点有时比 there/the next day 清楚。

同一地点、同一天立即转告，here、today、tomorrow 可能仍合适；this 也不必看到过去 said 就一律 that。He said he lives here 若双方仍在原地且他仍居住，可以合理。原话是我说的，I said that I…仍用 I；you 要按原听者和当前听者确定。无背景替换表只展示常见变化，不是绝对命令。

直接引语尽量保存措辞，间接转述侧重内容，可以概括，但请求或承诺不能写成已实现事实。Nia said that she would bring the notes 只报告计划，不确认已送到。可靠转述标谁说、说什么、哪些后续结果未知；said 后过去形式也不代表我们已核实内容。人物指代有歧义时，用名字而非堆 she/her 更清楚。

### B · 回移是过去视角，不是机械改事实

过去转述动词后常回移：am/is→was，are→were，一般现在→一般过去，现在进行→过去进行，现在完成或一般过去常可转过去完成，will→would，can→could。“I have finished the captions”可报告 Nia said she had finished the captions，完成相对原说话时已发生。回移表示参照关系，并不改变完成事件的日历日期。

原信息仍真实或相关，可保留现在：The guide said that the museum closes at six，把关门规律当仍适用信息；said that it closed at six 也可用过去视角，不能据 closed 推定如今不六点关门。普遍事实通常保留现在。现在报告动词 Nia says that she needs help 按现在内容，不因这是转述就硬改过去。

原来过去完成通常不再回移；could/would/should/might 也不机械再改一档。must 按功能判断：过去义务常 had to，证据推断 must 可保持。过去先后若日期明确，不是每个过去式都强制过去完成。验收会交代多久以后、是否还适用及目标视角；解释合理的自然变体可以接受。将回移时态当作事实已经失效的证明，会把视角变化误当现实变化。

### C · 问题内容用陈述语序，标点看外层

是非问题常用 ask/wonder/want to know＋if/whether：“Is the room ready?” → Nia asked whether the room was ready。if/whether 表示是否，内容主语在谓语前，不写 whether was the room ready。特殊问题保留疑问词：She asked where we had put the signs，而不是 where had we put。

原 do/does/did 用于直接问句倒装，转述内容通常不再借它：“When did the tour start?” → She asked when the tour started / had started。原 who 是主语时，Who designed the notice?报告 who designed the notice，不再加 he 或 did。先看疑问词承担主语还是宾语，再安排其他成分，不能把所有 who 问题都倒装或都加另一主语。

整个句子是陈述报告通常句号：The visitor asked where the exit was。外层本身仍询问时，Can you tell me where the exit is?末尾问号，但 where the exit is 内部仍陈述语序。不是“含间接问题永远无问号”。阅读先区分外层正在问还是在报告提问，再检查内层内容语序，才能同时处理结构和交际功能。

### D · 请求、建议和纪要：先识别说话行为

请求命令常用 ask/tell/order/remind＋人＋to do，否定用 not to：The organiser told us to arrive early；She warned us not to block the door。say 内容通常 say (that)…，tell 转述给人常需宾语：She told me that the entrance had moved，而非 She told that…。say 接听者用 say to me，不直接 say me。

“Please send the list tonight”可概括 She asked me to send the list that evening。“Could you send…?”若语境确是请求，也可如此转述；若询问能力，应保留是否能够，不能凭问号都归同一行为。suggest 常用 doing 或内容从句，如 suggested meeting earlier，不套 suggested us to meet。promise/offer 等可能接 to do，应按具体搭配记录。

讨论纪要先分陈述、问题、建议和要求，再摘要相关内容。可少重复礼貌开头，但保留关键日期、数量、否定和不确定性；may/might 不能摘要成一定，未获同意的建议不能变已决定的事实。准确度看意思及参照关系，不看改了多少词。要报告自己的理解可加 I understood…，避免把解释和原说话人的实际内容混在一起。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| Nia said,“I need your notes.” / Nia told me she needed my notes. | Nia 需要我的笔记。 | 代词按原说者听者，tell 接人。 |
| “I will come tomorrow.” / She said she would come the following day. | 承诺第二天来。 | 回移计划不证明已来。 |
| The guide said it closes at six. / He said it closed at six. | 报告关门规律。 | 现在可仍适用，回移不证明失效。 |
| “Is the display ready?” / She asked whether the display was ready. | 询问是否就绪。 | 是否内容及陈述语序。 |
| “Where did you put it?” / She asked where I had put it. | 问我放在哪。 | do 倒装不进入内容。 |
| “Who made the sign?” / She asked who had made the sign. | 询问制作人。 | who 作主语不再补人称。 |
| “Do not move it.” / She told us not to move it. | 要求别移动。 | 人＋not to 转述要求。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| She said me that the room was ready. | She told me that the room was ready. / She said to me that the room was ready. | say 不直接接 me 听者宾语。 |
| He asked where was the entrance. | He asked where the entrance was. | 内容陈述语序。 |
| She told that she needed help. | She said that she needed help. / She told us that she needed help. | tell 转述给人需宾语。 |
| She asked me don’t close it.（转述要求） | She asked me not to close it. | 请求补足否定不定式。 |

### 边界与使用选择

转述不是逐词替换。回移不证明失效，承诺不证明实现；代词和相对时间按实际角色调整。who 主语不重复，标点看外层说话行为。41—45 为选学深化，非应用课必需解锁条件。自然变体须保留人物、日期地点、情态强度与原说话行为。

### 学完后怎样检查自己

取陈述、问题和请求三条真实消息，写原说者听者、原地点日期及转述地点日期。转给未在场者，请他复述谁要做什么何时做；用名字日期修含混处。检查不确定性是否变为确定，再选择合适回移，而非先做时态替换表。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：Reported speech](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/reported-speech)：转述可摘要、按说话行为选动词；时态依真实时间和信息是否仍适用，不机械把回移当事实失效。
- [Cambridge English Grammar Today：Reported speech: indirect speech](https://dictionary.cambridge.org/us/grammar/british-grammar/reported-speech-indirect-speech)：陈述that、是非if/whether、wh问题和请求to do框架；内容使用陈述语序，疑问词作主语不重复补人称。`,practice:[{id:`gc41-p1`,prompt:`Nia 对我说“I need your camera.” 我向 Leo 报告，用 tell 明确代词。`,reference:`Nia told me that she needed my camera.`,explanation:`she=Nia，my=我，tell 有听者 me。`,criteria:[`told me`,`she/my 角色`]},{id:`gc41-p2`,prompt:`Monday 在中心，Nia 说“I will return here tomorrow.” Wednesday 在家报告，明确地点日期。`,reference:`Nia said that she would return to the centre on Tuesday.`,explanation:`tomorrow 从 Monday 算 Tuesday，不从 Wednesday 另算。`,criteria:[`would return`,`centre`,`Tuesday`]},{id:`gc41-p3`,prompt:`管理员刚说中心仍每天六点关。写 said 后现在与回移版本，解释是否推出失效。`,reference:`The manager said that the centre closes at six. / …closed at six. 两种都不单凭形式证明如今改变。`,explanation:`仍适用可保留现在，过去视角不否定现在真实性。`,criteria:[`两版本`,`不推失效`]},{id:`gc41-p4`,prompt:`过去转述“Are the seats free?” 用 whether。`,reference:`She asked whether the seats were free.`,explanation:`内容主语 seats 在 were 前。`,criteria:[`whether`,`陈述语序`]},{id:`gc41-p5`,prompt:`对我问“When did you finish the poster?” 用过去完成回移转述。`,reference:`She asked me when I had finished the poster.`,explanation:`did 不保留，had finished 标原时之前完成。`,criteria:[`when I had finished`,`无倒装`]},{id:`gc41-p6`,prompt:`Who drew the map? 用过去完成转述并说明 who 角色。`,reference:`He asked who had drawn the map. who 是 draw 主语。`,explanation:`不重复另一人称主语。`,criteria:[`who had drawn`,`主语说明`]},{id:`gc41-p7`,prompt:`“Please do not cover the label.” 用 ask 报告给我们。`,reference:`She asked us not to cover the label.`,explanation:`us 执行 cover，not to 否定要求动作。`,criteria:[`asked us`,`not to cover`]},{id:`gc41-p8`,prompt:`同伴建议早点会面，大家未决定。用 suggest 摘要。`,reference:`My partner suggested meeting earlier, but we had not decided yet.`,explanation:`doing 记录建议，未定状态保留。`,criteria:[`suggested meeting`,`未决定`]}],verification:[{id:`gc41-v1`,prompt:`志愿者问“Do visitors need tickets?” 用 asked if 和过去视角。`,reference:`The volunteer asked if visitors needed tickets.`,explanation:`内容无 do 倒装，needed 组织过去视角。`,criteria:[`asked if`,`visitors needed`],skill:`structure`,critical:!1},{id:`gc41-v2`,prompt:`修正 The receptionist asked what time did the event begin.`,reference:`The receptionist asked what time the event began / had begun.`,explanation:`内容陈述语序，过去/过去完成按文脉选择。`,criteria:[`主语前`,`无 did 倒装`],skill:`transformation`,critical:!0},{id:`gc41-v3`,prompt:`Monday 医生对我说“Come back on Friday.” Tuesday 转告家人，用 tell＋to。`,reference:`The doctor told me to go back on Friday.`,explanation:`执行者 me，Friday 明确不需机械 the following day。`,criteria:[`told me to`,`Friday 准确`],skill:`transformation`,critical:!0},{id:`gc41-v4`,prompt:`said 过去强制 earth moves 改 moved 吗？said she was tired 证明现在不累吗？`,reference:`不能；普遍事实通常保留现在，过去视角不自动报告现在相反。`,explanation:`视角不是事实失效证明。`,criteria:[`普遍事实`,`不推相反`],skill:`meaning`,critical:!1},{id:`gc41-v5`,prompt:`上午在学校管理员对你说“I will email your form tonight.” 次日上午在家告诉父母，时间改昨晚但别声称已发。`,reference:`The administrator told me that they would email my form that evening / last night.`,explanation:`would 报告计划，时间指原晚；不冒充已完成。`,criteria:[`人物所属`,`my form`,`原晚时间`,`计划非核实`],skill:`expression`,critical:!0},{id:`gc41-v6`,prompt:`场地仍周末开放；经理问我们是否带证件；工作人员要求别堵出口。写 3 句纪要。`,reference:`The manager said that the venue is open at weekends. He asked whether we had brought our ID cards. A member of staff told us not to block the exit.`,explanation:`保留仍有效规律、问题和要求三行为。`,criteria:[`规律仍有效`,`whether 陈述语序`,`not to`,`行为不混`],skill:`expression`,critical:!0}],review:[{id:`gc41-r1`,prompt:`一天后：转述 who 作主语的问题，解释不重复主语。`,reference:`She asked who had booked the room. who 为 book 主语。`,explanation:`不是 who he had booked。`,criteria:[`who 主语`,`无重复`]},{id:`gc41-r2`,prompt:`三天后：周一学校原话“I will meet you here tomorrow.” 写同日同地与周三家中报告。`,reference:`同日：He said he would meet me here tomorrow. 周三家中：He said he would meet me at school on Tuesday.`,explanation:`参照随真实地点日期，不按固定词表。`,criteria:[`同地保留`,`异地明确`,`Tuesday`]},{id:`gc41-r3`,prompt:`一周后：摘要真实建议和未核实计划，解释不是行动结果。`,reference:`Nia suggested starting earlier. Lee said he would book the room, but I have not checked the booking.`,explanation:`说话内容与行为实现不同。`,criteria:[`建议框架`,`未核实`,`意义保持`]}],sources:[{title:`British Council：Reported speech`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/reported-speech`,supports:`转述可摘要、按说话行为选动词；时态依真实时间和信息是否仍适用，不机械把回移当事实失效`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Reported speech: indirect speech`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/reported-speech-indirect-speech`,supports:`陈述that、是非if/whether、wh问题和请求to do框架；内容使用陈述语序，疑问词作主语不重复补人称`,accessed:`2026-10-03`,method:`通过官方搜索返回正文核验。`}],revision:`official-reference-2026-10-03`,title:`直接与间接引语`,module:`进阶表达（选学）`,moduleOrder:7,track:`advanced`},{number:42,objectives:[`区分助动词前置和地点呈现的倒装结构`,`按否定及 only 的作用范围确定倒装位置`,`恢复普通语序核对时间、主语、意思和语体`],summary:`区分助动词前置和地点呈现的倒装结构`,prerequisites:[5,15,20,29,30,32,36],body:`### 学习目标

1. 区分助动词前置和地点呈现的倒装结构
2. 按否定及 only 的作用范围确定倒装位置
3. 恢复普通语序核对时间、主语、意思和语体

### 先检查前置知识

先学：第 05 课、第 15 课、第 20 课、第 29 课、第 30 课、第 32 课、第 36 课。先独立回答下面两题，再阅读本节的核对提示。

1. Nia has never seen this. 将 never 置首强调，哪一项放主语前？

核对：限定助动词 has：Never has Nia seen…。若做错，回到第 20 课助动词与第 5 课语序。

2. Only Nia knew the code. only 限制主语还是背景？

核对：限制主语 Nia，不因此倒装。若做错，回到第 29 课范围。

词汇支持：inversion 倒装；auxiliary 助动词；restrictive 限制；rarely 很少；not until 直到才；on no account 绝不；locative 地点。

### A · 部分倒装移动限定助动词

否定或限制性的非主语成分放句首、对整个分句起作用时，常用主语—助动词倒装，语体较正式或强调。Nia has never missed a meeting → Never has Nia missed a meeting。has 在主语前，missed 仍在后，不是把全部动词搬过去，也不把 missed 变为一般过去。

无已有助动词借 do/does/did：We rarely cancel tours → Rarely do we cancel tours；Nia rarely complains → Rarely does Nia complain；They did not once reply → Not once did they reply。助动承担时间一致，实义原形。be 或已有情态可直接前置：Never was the room so crowded；Under no circumstances should visitors touch the equipment。不要 do was、did replied 叠加限定关系。

虽然像问句语序，整句常仍为陈述规定，不因 should visitors 就必须问号。恢复 Visitors should not touch the equipment under any circumstances 可检验意思。普通记录正常语序就自然，倒装是有目的修辞，不是越多越好。阅读先找主语、限定助动词，恢复主干和时间，不把开头 never 当人物。

### B · only、not 范围决定主句哪边倒装

Only after we checked the list did we notice the missing name 中 Only after…为前置时间背景，后面主句 did we notice 倒装，after 内部 we checked 仍正常。Only when the guide arrived could the group enter 也是 when 不倒装；Not until the lights came on did we see the sign 突出直到才，不能把 until 内部改问句语序。

Only Nia knew the code 中 only 限制主语；No visitor touched the model 中 No 属于主语名词短语，均不按前置非主语否定状语规则倒装。Nia only checked the names 与 Only then did Nia check the names 范围不同，改写不能将只核对姓名偷换只有那时核对。先划出被限制单位，再决定倒装，否则形式题会掩盖事实变化。

Not only did Nia check the spelling, but she also verified the dates 是动作焦点前置，第二分句通常正常。Not only Nia but also Lee checked the dates 是在连接主语，不因开头 not only 强制加 did。简化成句首否定就倒装遗漏了非主语范围条件。本课要求解释为什么触发、为什么不触发，不以猜 do、does、did 作为全部掌握。

### C · 紧接事件与省 if 条件分别学

Hardly/Barely/Scarcely had we opened the room when the first group arrived 常表示刚做第一事、第二事便发生；No sooner had we opened the room than the first group arrived 有相近意义，通常 hardly…when、no sooner…than。过去完成在第一项常见，并非唯一：No sooner was the hall open than the seats filled 以 be 呈现状态。不能只背 had 而忽略原主干。

倒装保留顺序及限制，不新增因果。刚开门人来不证明开门导致到达。As soon as we opened the room, the first group arrived 也自然，正式结构要有突出紧接的目的，不能把所有 and then 升级 no sooner。改写前写清第一项和第二项，避免连接词错配后读者误判关系。

条件可省 if 并前置 had/were/should：Had we checked the date, we would have noticed 相当 If we had checked；Were I in your position, I would ask；Should you need help, call us。只在这些具体模式内，不把所有条件动词倒装。Did I have time…不能作为本课 If I had time 的自动替代，它像直接问句。输出先恢复 if、查真实或反事实，再决定是否用较正式表达。

### D · 地点呈现的全部倒装，不借 do

In the corner stood an old cabinet、Here comes the guide 先铺地点，再呈现存在位置或出现移动的名词对象。实义动词可整体在名词主语前，不同于前面助动词倒装，也不借 does 成 Here does come the guide。cabinet/guide 为主语，数仍对应：Here come the volunteers。把 here 当主语再用 comes 判断单数是错误分析。

代词主语通常 Here she comes、There it is，不按普通教学输出写 Here comes she。地点开头不强制倒装：In this room, Nia teaches visitors 自然，不能任意改 teaches Nia visitors。地点呈现通常是 be 或位置移动类动词与名词短语主语，受信息焦点及语体限制，不是凡介词短语前置都允许完整倒装。

可用明确地点前置 On the steps stood a guide，恢复 A guide stood on the steps，分开地点和名词主语；与 There is a guide outside 的存在句分别识别。there 开头有时还存在不同语法分析，不以它作地点类别的唯一证据。写作按先展现场景再介绍新对象的需要使用。整篇每句倒装显得刻意，掌握边界后能够主动保留普通语序，也是使用能力，不是“不会高级语法”。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| Nia has never missed a tour. / Never has Nia missed a tour. | 从未错过带队。 | has 前置，missed 保留。 |
| Nia rarely complains. / Rarely does Nia complain. | 很少抱怨。 | does 承担一致，complain 原形。 |
| We noticed only after we checked. / Only after we checked did we notice. | 查完才发现。 | 倒装主句而非 after 内部。 |
| Only Lee knew. / Only then did Lee know. | 只有 Lee／只有那时 Lee 才知道。 | 主语与时间限制不同。 |
| Not only Nia but also Lee checked. / Not only did Nia check, but she also called. | 两人核对／不仅核对还打电话。 | 主语连接与动作焦点不同。 |
| Hardly had we sat down when it began. / No sooner had we sat down than it began. | 刚坐下便开始。 | when 与 than 搭配不同。 |
| Here comes the guide. / Here she comes. | 导游来了／她来了。 | 名词呈现与代词正常语序。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| Rarely does Nia complains. | Rarely does Nia complain. | does 承担一致，实义原形。 |
| Only when did Nia arrive we opened the door. | Only when Nia arrived did we open the door. | when 内部普通，主句倒装。 |
| Only Nia did know the code.（欲用 only 主语自动倒装） | Only Nia knew the code. | 主语 only 不自动倒装；do 强调另须情境。 |
| Here comes she. | Here she comes. | 代词不按地点名词呈现倒装。 |

### 边界与使用选择

不能由句首单词机械决定倒装。only 范围、主语限制、条件模式与地点呈现分别分析。no sooner 常过去完成但非唯一。还原普通句后角色、时间、事实范围必须保持。正式倒装主要用于阅读和有目的强调，不是应用写作的必需装饰。

### 学完后怎样检查自己

取三句真实记录，分别突出从不、直到某时才、场景中新对象，改后恢复普通语序。再写 only 主语对照，解释不倒装原因。检查原时态、主语和限制范围，普通句已足够达意时可保留，不为复杂度改变事实。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：Inversion after negative adverbials](https://learnenglish.britishcouncil.org/free-resources/grammar/c1/inversion-after-negative-adverbials)：前置否定限制常主语助动倒装、无助动借do；only时间背景后主句倒装；hardly/when、no sooner/than及过去完成常见但非唯一。
- [Cambridge English Grammar Today：Inversion](https://dictionary.cambridge.org/grammar/british-grammar/inversion)：否定前置助动倒装、not短语与地点here/there呈现使用不同框架，不能把地点倒装机械变问句。
- [Cambridge English Grammar Today：Not only … but also](https://dictionary.cambridge.org/uk/grammar/british-grammar/not-only-but-also)：not only动作焦点前置与普通并列的范围；be和已有助动直接倒装，无助动借do。`,practice:[{id:`gc42-p1`,prompt:`Nia has never lost a ticket.用 Never 开头并标前置词。`,reference:`Never has Nia lost a ticket. 前置 has。`,explanation:`只移动限定助动，lost 保留。`,criteria:[`Never has Nia`,`lost`]},{id:`gc42-p2`,prompt:`We rarely change the schedule. Lee rarely arrives late.分别倒装。`,reference:`Rarely do we change the schedule. Rarely does Lee arrive late.`,explanation:`do/does 按主语，实义原形。`,criteria:[`do we change`,`does Lee arrive`]},{id:`gc42-p3`,prompt:`只有查完名单后才发现错误，Only after 开头。`,reference:`Only after we checked the list did we notice the error.`,explanation:`after 内不倒装，主句 did 原形。`,criteria:[`after we checked`,`did we notice`]},{id:`gc42-p4`,prompt:`No visitor touched it 与 Only Nia knew 都倒装吗？解释。`,reference:`不因开头自动倒装；No visitor 和 Only Nia 为主语单位。`,explanation:`非主语前置限制规则不能套主语。`,criteria:[`主语范围`,`不强制`]},{id:`gc42-p5`,prompt:`刚进门报警器响，用 Hardly 与 No sooner 两句。`,reference:`Hardly had we entered when the alarm rang. No sooner had we entered than the alarm rang.`,explanation:`紧接常过去完成，连接词配对。`,criteria:[`hardly when`,`no sooner than`,`顺序保持`]},{id:`gc42-p6`,prompt:`If we had booked earlier, we would have found seats.省 if。`,reference:`Had we booked earlier, we would have found seats.`,explanation:`特定 had 条件模式非直接问题。`,criteria:[`Had we booked`,`would have found`]},{id:`gc42-p7`,prompt:`导游来了，以 the guide 与 she 各写 here 句。`,reference:`Here comes the guide. Here she comes.`,explanation:`名词与代词呈现语序不同。`,criteria:[`comes the guide`,`she comes`]},{id:`gc42-p8`,prompt:`Nia 不仅核拼写还核日期，用 not only 前置，再恢复。`,reference:`Not only did Nia check the spelling, but she also checked the dates. → Nia not only checked the spelling but also checked the dates.`,explanation:`第一动作倒装，第二不机械倒装。`,criteria:[`did Nia check`,`第二普通`,`同义恢复`]}],verification:[{id:`gc42-v1`,prompt:`Never before ___ the students ___ such equipment.用 have/see 现在完成。`,reference:`have; seen`,explanation:`复数 have 前置，seen 留主语后。`,criteria:[`have the students`,`seen`],skill:`structure`,critical:!1},{id:`gc42-v2`,prompt:`改正 Only after had the visitors left we locked the gate.`,reference:`Only after the visitors had left did we lock the gate.`,explanation:`after 主语在 had 前，主句 did。`,criteria:[`after visitors had left`,`did we lock`],skill:`transformation`,critical:!0},{id:`gc42-v3`,prompt:`We had scarcely started the test when the power failed.改 Scarcely 开头。`,reference:`Scarcely had we started the test when the power failed.`,explanation:`had 前置，when 与顺序保留。`,criteria:[`Scarcely had we started`,`when`,`时间不变`],skill:`transformation`,critical:!0},{id:`gc42-v4`,prompt:`Only the technician opened the gate 与 Only after the test did the technician open the gate 范围差别？`,reference:`前句限制执行者，后句限制时机；主语限制不自动倒装，前置时间限制主句倒装。`,explanation:`不能用词序偷换唯一人和时间条件。`,criteria:[`主语/时间`,`事实范围`],skill:`meaning`,critical:!1},{id:`gc42-v5`,prompt:`任何情况下访客不得摸展品；只有工作人员知道密码。用 Under no circumstances 与 Only。`,reference:`Under no circumstances should visitors touch the exhibits. Only the staff know the code.`,explanation:`非主语否定倒装，主语 only 不倒装。`,criteria:[`should visitors touch`,`Only staff know`,`范围准确`],skill:`expression`,critical:!0},{id:`gc42-v6`,prompt:`写 3 句：角落旧钢琴用 stood 呈现；它在这里用 it 正常语序；直到看标签才知道年代用 Not until。恢复第三句。`,reference:`In the corner stood an old piano. Here it is. Not until I saw the label did I learn its age. → I did not learn its age until I saw the label.`,explanation:`综合全部倒装、代词正常和主句部分倒装。`,criteria:[`地点名词`,`it 正常`,`not until 主句`,`同义恢复`],skill:`expression`,critical:!0}],review:[{id:`gc42-r1`,prompt:`一天后：过去 rarely 倒装并恢复。`,reference:`Rarely did we close early. → We rarely closed early.`,explanation:`did 过去，close 原形，恢复 closed。`,criteria:[`did we close`,`过去恢复`]},{id:`gc42-r2`,prompt:`三天后：only 主语与 only 时间各一句及意义。`,reference:`Only Mira replied. Only later did Mira reply.`,explanation:`唯一回应者与回应时机不同。`,criteria:[`主语不倒装`,`时间倒装`,`范围说明`]},{id:`gc42-r3`,prompt:`一周后：真实过去反事实省 if 再恢复。`,reference:`Had I checked the route, I would have arrived sooner. → If I had checked the route, I would have arrived sooner.`,explanation:`条件未实现与假设结果保持，不新增事实。`,criteria:[`Had I`,`if 恢复`,`关系保持`]}],sources:[{title:`British Council：Inversion after negative adverbials`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/c1/inversion-after-negative-adverbials`,supports:`前置否定限制常主语助动倒装、无助动借do；only时间背景后主句倒装；hardly/when、no sooner/than及过去完成常见但非唯一`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Inversion`,url:`https://dictionary.cambridge.org/grammar/british-grammar/inversion`,supports:`否定前置助动倒装、not短语与地点here/there呈现使用不同框架，不能把地点倒装机械变问句`,accessed:`2026-10-03`,method:`通过官方搜索返回正文核验，直连访问未成功。`},{title:`Cambridge English Grammar Today：Not only … but also`,url:`https://dictionary.cambridge.org/uk/grammar/british-grammar/not-only-but-also`,supports:`not only动作焦点前置与普通并列的范围；be和已有助动直接倒装，无助动借do`,accessed:`2026-10-03`,method:`通过官方搜索返回正文核验。`}],revision:`official-reference-2026-10-03`,title:`倒装与信息焦点`,module:`进阶表达（选学）`,moduleOrder:7,track:`advanced`},{number:43,objectives:[`按交际误解选择分裂句的人、事或时间焦点`,`区别 it 分裂强调、what 分裂与形式主语`,`用 do/does/did 强调肯定，保持原形、时间和语气`],summary:`按交际误解选择分裂句的人、事或时间焦点`,prerequisites:[10,15,29,33,36,37],body:`### 学习目标

1. 按交际误解选择分裂句的人、事或时间焦点
2. 区别 it 分裂强调、what 分裂与形式主语
3. 用 do/does/did 强调肯定，保持原形、时间和语气

### 先检查前置知识

先学：第 10 课、第 15 课、第 29 课、第 33 课、第 36 课、第 37 课。先独立回答下面两题，再阅读本节的核对提示。

1. It is useful to check. it 指有用物品吗？怎样恢复？

核对：通常形式主语，Checking is useful。若做错，回到第 36 课形式主语。

2. Nia checks daily. 加 does 肯定强调后还加-s 吗？

核对：不加：Nia does check daily，does 承担一致。若做错，回到第 28 课一致。

词汇支持：focus 焦点；cleft 分裂句；contrast 对比；emphasis 强调；presupposition 预设信息；correction 纠正。

### A · 要纠正哪一项，再选择 it 分裂焦点

Nia found the missing folder on Monday 报告人、对象和时间。对方误以为 Lee 找到，可说 It was Nia who/that found the missing folder on Monday，以人作焦点；误以为找到笔记本，可说 It was the folder that Nia found on Monday，以对象作焦点；误以为 Tuesday，可说 It was on Monday that Nia found the folder，以时间作焦点。事件核心不变，焦点随误解改变。

框架 it＋be＋焦点＋that/who＋其余内容。人可 who 或 that，时间地点本课用 that。原角色在剩余从句有对应位置：对象 the folder 原为 found 宾语，不再重复 it；Nia 原为 found 主语，不再重复 she。on Monday、in the office 的介词属于意义关系，不能为了套句型随便删。主句过去事实也不能改成另一天或另一个人。

不能仅用删掉 It is 和 that 后剩下直接完整作为唯一检验。It was the folder that Nia found 要把 folder 放回 found 后恢复 Nia found the folder。分裂句用来纠正或突出，不必每句都用。对方没有相关预设、全部信息都新时，普通表达常更自然。复杂形式应回答真实问题，而非靠长度展示“高级”。

### B · what 分裂：已知话题和外部焦点

What the team needs is a clear timetable 把需要什么设为话题，外面的 a clear timetable 为焦点。what the team needs 是名词性内容，what 对应 needs 的宾语，可恢复 The team needs a clear timetable，不是无作用连接词。What surprised me was the result 中 what 为 surprised 主语，不再写 what it surprised me。

What I want to do is (to) revise the ending 突出想做的行动，在含 do 的这种框架可见带 to 或不带 to，不因参考列一项排除另一自然形式。不是所有 what 句都可随便删 to。What I enjoyed was working with visitors 聚焦喜欢的活动，用-ing 自然，后面形式仍由表达内容和具体框架判断，不把所有 what…is 塞同一个动词形式。

口头说明可先建立问题，再用焦点回答。反向 A clear timetable is what we need 也自然。改写应保留数量范围，不能把需要一个日程偷换成唯一需要的一切，除非文脉支持。正式与日常人称搭配有变体，基础输出优先姓名或名词，不以争议人称词形卡学生。学习应能还原正常事件关系，再说明这个结构特别突出哪项内容。

### C · It is 开头相同，句子工作不同

It is important to check the date 恢复 Checking the date is important，it 为形式主语。It is clear that Nia checked the date 评价完整内容。It was the date that Nia checked 以 date 作焦点，恢复 Nia checked the date。前两种评价活动或事实，后一种突出原事件对象，不能凭首尾相似全部叫强调句。

看后续内容是否有焦点对应的角色缺口。It was Nia who called 中 Nia 对应 called 主语；It was the report that I read 中 report 对应 read 宾语，都不重复人称或对象。It is clear that I read the report 的 that 内部完整，clear 评价整个事实，没有分裂对象缺口。that 在不同框架的功能不能只凭同样拼写判断。

两种结构回答的问题不同：检查是否重要对应 It is important to check，究竟检查什么对应 It was the date that I checked。先写普通完整表达，再设真实问题，使结构与问题匹配。句子越长越需核对角色，it…that 没有自动提高表达质量。把表面拆成主干与内容，说明评价或焦点究竟是哪一项，才是理解而非识别开头。

### D · 肯定助动词强调，时间和语气同样重要

对方说你没看过材料时，I did read the report yesterday 纠正未读的预设。Nia does check the dates 确实核对，We do understand 确实理解。do/does/did 按主语及时间选择，实义原形；Nia checks 与 Nia does check 的-s 只由一个限定成分承担。did read 过去强调，不再把 read 另加过去词尾。

已有 be、have 或情态通常强调已有助动词：I am ready、I have checked、I can help 可用重音或 really 增强，不写 I do am ready、I do have checked。陈述 be 不借 do 并不排除祈使 Do be careful，这是不同框架；不要把基础规则推广为所有形式都禁止 do＋be。Do sit down 等强调邀请可能较正式，强要求也可能显得不耐烦。

口语重音是强调的重要组成，文本练习不能代替实际语调。团队沟通先判断澄清事实还是批评对方，I did check the list, but I may have missed one name 既肯定做过，又承认可能遗漏。不能因强调肯定就把未知部分写成确定完美。检查表达力度、礼貌与信息准确是不同任务，助动形式正确只完成其中一部分。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| Nia found the folder. / It was Nia who found the folder. | Nia 找到／找到人是 Nia。 | 人焦点纠正是谁。 |
| Nia found the folder. / It was the folder that Nia found. | Nia 找到文件夹／找到对象是文件夹。 | 对象焦点，不重复 it。 |
| We met on Monday. / It was on Monday that we met. | 周一见／时间是周一。 | 保留介词和事件。 |
| We need a timetable. / What we need is a timetable. | 需要日程／所需的是日程。 | what 对应 need 对象。 |
| It is important to check. / It was the date that I checked. | 检查重要／检查对象是日期。 | 形式主语和分裂对象不同。 |
| Nia checks daily. / Nia does check daily. | 日常核对／确实核对。 | does 一致，check 原形。 |
| I sent it yesterday. / I did send it yesterday. | 昨天发送／确实发送。 | did 过去，sent 恢复 send。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| It was Nia who she checked the list. | It was Nia who checked the list. | 主语焦点不重复 she。 |
| It was the label that I changed it. | It was the label that I changed. | 对象焦点不重复 it。 |
| Lee does checks the figures. | Lee does check the figures. | does 承担一致。 |
| I do am prepared.（陈述确实准备好） | I really am prepared. / I am prepared. | 陈述 be 不这样借 do，重音可强调 am。 |

### 边界与使用选择

分裂句检验需恢复焦点原角色，不是机械删首尾。what 后形式看具体框架，do 不与所有已有助动词叠加，祈使 Do be 另有规则。语调及礼貌影响效果，基本写作先保意义、时间和角色，再选有目的焦点。

### 学完后怎样检查自己

取一个事实设三个不同误解，分别纠正谁、什么、何时，再恢复普通句证明事件没变。另写两个 do 强调及对应否定预设。每个 It is 句说明它在评价内容或分裂焦点；说不出回答什么问题时先用普通表达。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：Emphasis: cleft sentences, inversion and auxiliaries](https://learnenglish.britishcouncil.org/free-resources/grammar/c1/emphasis-cleft-sentences-inversion-auxiliaries)：it与what分裂按焦点组织信息，肯定do/does/did强调及已有助动重音，祈使do另有框架。
- [Cambridge English Grammar Today：Word order: structures](https://dictionary.cambridge.org/grammar/british-grammar/active-and-passive-voice)：it与wh分裂将已知话题与新焦点分开；焦点对应原事件中的人、对象或时间，保留原角色。`,practice:[{id:`gc43-p1`,prompt:`Lee 被误认为找文件夹，实际 Nia。写人焦点。`,reference:`It was Nia who / that found the folder.`,explanation:`Nia 对应 found 主语，无重复 she。`,criteria:[`Nia 焦点`,`who/that found`,`无重复`]},{id:`gc43-p2`,prompt:`丢的是通行证而非笔记，用对象焦点。`,reference:`It was the pass that I lost.`,explanation:`pass 对应 lost 宾语。`,criteria:[`pass 焦点`,`that I lost`]},{id:`gc43-p3`,prompt:`周一办公室见面，突出地点并保留时间。`,reference:`It was in the office that we met on Monday.`,explanation:`地点焦点不改变原日期。`,criteria:[`in the office`,`that we met`,`Monday`]},{id:`gc43-p4`,prompt:`what 分裂表达团队需更清楚指令，再恢复。`,reference:`What the team needs is clearer instructions. → The team needs clearer instructions.`,explanation:`what 对应 needs 对象。`,criteria:[`what team needs`,`同义恢复`]},{id:`gc43-p5`,prompt:`It is useful to ask 与 It was Nia that I asked 功能同吗？`,reference:`不同，前者形式主语评价询问；后者分裂突出被问者。`,explanation:`恢复 Asking is useful 与 I asked Nia 检验。`,criteria:[`形式主语`,`分裂对象`,`恢复依据`]},{id:`gc43-p6`,prompt:`Lee 每天确实查数据，does 强调再恢复。`,reference:`Lee does check the figures daily. → Lee checks the figures daily.`,explanation:`限定一致只承担一次。`,criteria:[`does check`,`checks`]},{id:`gc43-p7`,prompt:`昨天确实发通知，纠正没发预设。`,reference:`I did send the notice yesterday.`,explanation:`did 过去后 send 原形。`,criteria:[`did send`,`yesterday`]},{id:`gc43-p8`,prompt:`已有 can，你确实能帮，用自然强调。`,reference:`I really can help. / I can help.（重读 can）`,explanation:`已有情态保留，不插 do。`,criteria:[`can help`,`无 do can`]}],verification:[{id:`gc43-v1`,prompt:`技术员确实懂设备，填当前单数强调：The technician ___ understand it.`,reference:`does`,explanation:`第三人称现在 does＋原形。`,criteria:[`does understand`],skill:`structure`,critical:!1},{id:`gc43-v2`,prompt:`修正 It was the front door that we painted it.`,reference:`It was the front door that we painted.`,explanation:`front door 已对应宾语。`,criteria:[`that we painted`,`无重复`],skill:`transformation`,critical:!0},{id:`gc43-v3`,prompt:`A meeting was held on Friday in Room 4. 只突出日期，保留被动。`,reference:`It was on Friday that a meeting was held in Room 4.`,explanation:`日期焦点不改变原事件和地点，原被动保留，不补执行者。`,criteria:[`on Friday`,`was held`,`Room 4`],skill:`transformation`,critical:!0},{id:`gc43-v4`,prompt:`What surprised us was the result 与 It is obvious that the result changed 都是 it 分裂吗？`,reference:`不是；前句 what 分裂，what 对应 surprised 主语；后句 it 形式主语评价完整内容。`,explanation:`用角色恢复判断，非首词相似。`,criteria:[`what 分裂`,`形式主语`,`角色依据`],skill:`meaning`,critical:!1},{id:`gc43-v5`,prompt:`是 Mira 而非你改标题，改标题而非图片。写两焦点句再还原共同事实。`,reference:`It was Mira who changed the title. It was the title that Mira changed. → Mira changed the title.`,explanation:`人和对象焦点不同，事件角色不交换。`,criteria:[`Mira 焦点`,`title 焦点`,`无重复`,`事实恢复`],skill:`expression`,critical:!0},{id:`gc43-v6`,prompt:`会议三句：真正需要更明确时间；你昨天确实发过清单；Mira 每天确实跟进。用 what、did、does 并标原形。`,reference:`What the team needs is a clearer timetable. I did send the list yesterday. Mira does follow up daily. send 和 follow 为原形。`,explanation:`迁移时间、主语与焦点，允许同义表达。`,criteria:[`what 焦点`,`did 原形`,`does 原形`,`时间一致`],skill:`expression`,critical:!0}],review:[{id:`gc43-r1`,prompt:`一天后：同一事件突出人、对象并恢复。`,reference:`It was Leo who repaired the frame. It was the frame that Leo repaired. → Leo repaired the frame.`,explanation:`焦点变化不改角色。`,criteria:[`两焦点`,`同义恢复`]},{id:`gc43-r2`,prompt:`三天后：Nia does practise regularly 恢复，说明-s。`,reference:`Nia practises regularly. 强调句-s 由 does 承担。`,explanation:`限定一致不重复。`,criteria:[`practises`,`-s 位置`]},{id:`gc43-r3`,prompt:`一周后：自然澄清与形式主语评价各一句，说明回答的问题。`,reference:`I did read the instructions.（读没读）It is useful to read them first.（阅读是否有用）`,explanation:`肯定强调与内容评价不同。`,criteria:[`过去强调`,`形式主语`,`问题匹配`]}],sources:[{title:`British Council：Emphasis: cleft sentences, inversion and auxiliaries`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/c1/emphasis-cleft-sentences-inversion-auxiliaries`,supports:`it与what分裂按焦点组织信息，肯定do/does/did强调及已有助动重音，祈使do另有框架`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Word order: structures`,url:`https://dictionary.cambridge.org/grammar/british-grammar/active-and-passive-voice`,supports:`it与wh分裂将已知话题与新焦点分开；焦点对应原事件中的人、对象或时间，保留原角色`,accessed:`2026-10-03`,method:`官方搜索返回规则正文摘录`}],revision:`official-reference-2026-10-03`,title:`强调结构`,module:`进阶表达（选学）`,moduleOrder:7,track:`advanced`},{number:44,objectives:[`从文脉准确恢复省略或替代内容`,`用助动词、one/ones 和 so 减少可恢复重复`,`保持时间、否定、数量与对象，避免过度省略`],summary:`从文脉准确恢复省略或替代内容`,prerequisites:[7,9,20,29,36,37,40,42],body:`### 学习目标

1. 从文脉准确恢复省略或替代内容
2. 用助动词、one/ones 和 so 减少可恢复重复
3. 保持时间、否定、数量与对象，避免过度省略

### 先检查前置知识

先学：第 07 课、第 09 课、第 20 课、第 29 课、第 36 课、第 37 课、第 40 课、第 42 课。先独立回答下面两题，再阅读本节的核对提示。

1. Have you checked the timetable? Yes, I have. have 后恢复什么？

核对：checked the timetable，由问题恢复，have 不独立说明动作。若做错，回到第 20 课短答。

2. I lost my pen and bought a new one. one 是否原来同一笔？

核对：不是，是同类另一支；it 常指同一对象。若做错，回到第 9 课指代与第 7 课数量。

词汇支持：ellipsis 省略；substitution 替代；recover 恢复；antecedent 前文内容；one/ones 同类对象；so 如此；neither 也不。

### A · 可恢复不等于随便猜，语体也要匹配

省略让交际简洁，听者从问题、前文或明显现场恢复。Have you printed the labels? Yes, I have 具体恢复 printed the labels。Nia can lead the tour, but Lee cannot 保留不同人、can 能力和否定，Lee 不能的是前文 lead the tour，不是任何活动。先把省略完整写回，再看恢复是否符合说话人本意。

and/but/or 后同主语可省重复：We checked the labels and printed the map。助动关系也可共享：Nia is reading and taking notes。但不能据此在 after/because/when 后任意删成 After have dinner；应 after we have dinner 或 after having dinner，后者另有非限定结构及主语检查。相同主语不是删任何连接词后成分的通行证。

口语 Sounds useful!依现场恢复 That sounds useful，适合对话，正式独立说明不必连续无背景写片段。省略不是错误，但可恢复性和语体是条件。换话题后读者未必能把 it/one/so 指回几段前对象；重复关键名词有时更有效。学习应理解何时简短自然、何时信息缺失，不能把更短作为唯一目标。

### B · 动词短语省略保留对应助动或 to

Nia checks daily, and Lee does too 的 does 恢复 checks daily；Nia checked yesterday, and Lee did too 保留过去。完成、进行、情态通常对应：Nia has finished, and I have too；Nia was waiting, and I was too；Nia can help, and I can too。不能所有重复谓语换 do，丢掉时间、体和情态。

否定亦须保留：I have not seen the room, and Nia has not either。I did not want to leave, but Nia did 中 did 恢复 wanted to leave，是另一个人愿意离开，不把前句 not 复制。完整恢复先看留下的助动是肯定否定、主体是谁，再补动作；机械抄前句会抹掉 but 对比，改变实际意图。

want to 等可只留 to：I can explain again if you want me to，恢复 explain again。I wanted to 无前文可能不清想做什么。do so 常代已提行动：Nia promised to check the list and did so；不宜对所有状态或特殊框架一律用 do so。短词不能掩盖原动作信息不足，尤其多项安排同时出现时，应让读者明确省的是哪一项。

### C · one/ones 名词替代，so 命题替代

one/ones 通常替可数名词核心：the blue one、the smaller ones，单复数与对象数量对应。I found the badge and put it away 的 it 指同一胸牌；I needed a badge and chose a blue one 的 one 指同类某一枚。new one 不是找回原物。形容词或从句仍可修饰 one，帮助读者识别选哪一个。

普通不可数 water/information 不直接 a fresh one，可用 some water 或明确 a bottle/an item 单位。one 作数字、泛指人等另有功能，不全部属于本课名词替代。也不是所有数量词或代词后都可机械加 one，基本输出先用已核验 the blue one/a new one 等框架。one 替代名词核心，不自动继承前面所有修饰或原对象身份。

I think so、I expect so 的 so 替前文命题：Will the room be ready? I think so 恢复 I think the room will be ready，不是替某件物品。否定常见 I do not think so，hope 常 I hope not；不能每个动词都套 I don't…so。新词需查 so/not 搭配，前问题含多个命题时直接补完整内容更清楚。题目也要说明你认为什么，不能把 so 当万能礼貌词。

### D · 呼应、确认与缩减背景分开核对

Nia can swim. So can I 表示另一人我也能，so＋助动词＋新主语；Nia does not drive. Neither/Nor do I 我也不，neither 已有否定义，不再 Neither don't I。I can too/I don't either 同样自然，不必须全部倒装。助动词对应原结构，不能看到 so 固定 do，完成和 be 等关系仍需保留。

So I can 可在对方提醒我已有能力时确认“确实我能”，与 So can I 加入另一个同样能的人不同。题目交代新增主体还是确认同主体，不能无情境把一种永远判错。确认也可 That's true/Indeed；不必为练短句让对话难懂。否定呼应按语法关系，不仅按中文评价是好是坏来选 neither。

If necessary, call us 常恢复 If it is necessary；While waiting, Nia checked the notes 恢复 While Nia was waiting。仍需第 40 课逻辑主语检查，While I waited, the rain stopped 不能删成 While waiting, the rain stopped 让雨等待。缩减有具体许可条件，不是删越多越自然。给每个短答、one、so 画箭头指前文，若两种不兼容恢复都合理，就补信息防误读。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| Nia checks daily, and Lee does too. / Nia checked yesterday, and Lee did too. | 日常也查／昨日也查。 | does/did 保时间。 |
| She has finished, and I have too. / She was waiting, and I was too. | 已完成／当时在等。 | 助动对应完成进行。 |
| I did not want to leave, but Nia did. / Nia did not either. | 她想离／她也不想。 | 留下肯定否定决定恢复。 |
| I put it away. / I bought a new one. | 收原物／买新同类。 | it 与 one 身份关系不同。 |
| the larger one / the larger ones | 大一个／大多个。 | 可数替代数量对应。 |
| Will it be ready? I think so. / Will we be late? I hope not. | 认为会就绪／希望不迟到。 | so/not 命题和动词搭配须对应。 |
| She can help. So can I. / “You can help.” “So I can.” | 我也能／确实我能。 | 新主体呼应与原主体确认。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| She has arrived, and I do too.（我也已到） | She has arrived, and I have too. | 完成保留 have。 |
| I need water. Give me a clean one.（指 water） | I need water. Give me some clean water. | 不可数不直接 one。 |
| Nia cannot drive. Neither cannot I. | Nia cannot drive. Neither can I. | neither 已否定，不再 cannot。 |
| She can help. So I can.（我也能） | She can help. So can I. / I can too. | 新主体呼应，不是同主体确认。 |

### 边界与使用选择

口语可依现场，独立正式文字须内容可恢复。do、one、so 替不同单位，不能随意互换；neither 不重复 not。短答不偷换时间数量，恢复完整含义才是精简能力。条件缩减与并列省略各有框架，不以主语相同为所有删除的许可。

### 学完后怎样检查自己

精简真实对话三处：助动省略、one/ones、so。让同伴恢复检查主体、时间、否定和对象。另写我也会与我确实会两情境。恢复出多个不兼容意思时，补回关键名词动作，不以长度判断质量。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：Ellipsis](https://learnenglish.britishcouncil.org/free-resources/grammar/c1/ellipsis)：省略需要内容明显；并列共享、to后和助动/情态后省略，其他连接词不能一律删除同主语；口语片段有语体条件。
- [Cambridge English Grammar Today：Substitution](https://dictionary.cambridge.org/grammar/british-grammar/substitution)：do替动词及补足、so替命题、one/ones替可数名词核心，数及所指需清楚。
- [Cambridge English Grammar Today：So](https://dictionary.cambridge.org/grammar/british-grammar/so-do-i)：so/neither助动倒装表示也如此，so＋主语＋助动确认同一主体，二者非自由换序；命题替代与呼应分开分析。`,practice:[{id:`gc44-p1`,prompt:`Nia checks daily, and Lee ___ too. Nia checked yesterday, and Lee ___ too.`,reference:`does; did`,explanation:`时间和一致在助动保留。`,criteria:[`does`,`did`]},{id:`gc44-p2`,prompt:`She has arrived, and I ___ too. She was waiting, and I ___ too.`,reference:`have; was`,explanation:`对应完成与进行，不一律 do。`,criteria:[`have`,`was`]},{id:`gc44-p3`,prompt:`I did not want to leave, but Nia did. 恢复 Nia 部分。`,reference:`Nia wanted to leave.`,explanation:`did 肯定，but 对比，不复制 not。`,criteria:[`wanted to leave`,`肯定`]},{id:`gc44-p4`,prompt:`蓝一个包与蓝多个包，one/ones 替 bag/bags。`,reference:`the blue one; the blue ones`,explanation:`可数对象数量对应。`,criteria:[`one 单`,`ones 复`]},{id:`gc44-p5`,prompt:`丢笔后 need a new one 的 one 与原物关系？找到原物怎样说？`,reference:`one 同类另一支；I found it 找到原笔。`,explanation:`同类替代不同于原物身份。`,criteria:[`one 同类`,`it 原物`]},{id:`gc44-p6`,prompt:`Will we finish in time?用 think so 肯定；Will we be late?用 hope 否定。`,reference:`I think so. I hope not.`,explanation:`命题内容和动词 so/not 搭配对应。`,criteria:[`think so`,`hope not`]},{id:`gc44-p7`,prompt:`Nia 不能开车，你也不能，neither 和 either 两版。`,reference:`Neither can I. / I cannot either.`,explanation:`neither 本身否定，either 普通句保 not。`,criteria:[`Neither can I`,`cannot either`]},{id:`gc44-p8`,prompt:`You can explain again if you want to. 恢复 to 后。`,reference:`if you want to explain again。前文给相同行为。`,explanation:`内容可恢复，非任意删除。`,criteria:[`explain again`,`恢复依据`]}],verification:[{id:`gc44-v1`,prompt:`The visitors were listening, and the guide ___ too. 填并恢复。`,reference:`was；the guide was listening。`,explanation:`guide 单数仍过去进行。`,criteria:[`was`,`was listening`],skill:`structure`,critical:!1},{id:`gc44-v2`,prompt:`The curator had checked the list, and I did too. 本意我也当时已检查，修正。`,reference:`The curator had checked the list, and I had too.`,explanation:`过去参照先行完成保 had。`,criteria:[`I had too`,`完成保留`],skill:`transformation`,critical:!0},{id:`gc44-v3`,prompt:`Mira is not sure. I am not sure either. 第二句用 neither 压缩。`,reference:`Neither am I.`,explanation:`be 关系 am，neither 无需 not。`,criteria:[`Neither am I`,`无重复 not`],skill:`transformation`,critical:!0},{id:`gc44-v4`,prompt:`The door is open. So it is.与 Lee can swim. So can I.功能？`,reference:`前句确认同一门开着，后句新增另一位也会游泳者。`,explanation:`确认与呼应非自由语序变体。`,criteria:[`同主体确认`,`新主体呼应`],skill:`meaning`,critical:!1},{id:`gc44-v5`,prompt:`找到原手套，另买较暖一双。写代词与 one/ones 表达并说明核心。`,reference:`I found my gloves and put them away. I bought warmer ones / a warmer pair. them 指原手套，ones 同类新手套；pair 核心为可数 pair。`,explanation:`复数 gloves 不强行 one，同义单位可用。`,criteria:[`原物数量`,`同类数量`,`核心说明`],skill:`expression`,critical:!0},{id:`gc44-v6`,prompt:`你与搭档都已预约；两人都不能周五出席。各省重复并完整恢复，再写同主语并列行动一句。`,reference:`I have booked, and my partner has too. → My partner has booked. I cannot attend on Friday, and my partner cannot either. → My partner cannot attend on Friday. We checked the dates and sent the invitations.`,explanation:`完成、否定情态与共享主语分别处理。`,criteria:[`have 对应`,`cannot 否定`,`完整恢复`,`并列共享`],skill:`expression`,critical:!0}],review:[{id:`gc44-r1`,prompt:`一天后：现在/过去替代同一真实活动并恢复。`,reference:`I cycle, and Nia does too. → Nia cycles. I cycled yesterday, and Nia did too. → Nia cycled yesterday.`,explanation:`时间在 does/did 保留。`,criteria:[`does`,`did`,`动作恢复`]},{id:`gc44-r2`,prompt:`三天后：同物与新同类各句，不将 one 说成原物。`,reference:`I found the old ticket and kept it. I needed another ticket, so I bought a new one.`,explanation:`身份与类别不同。`,criteria:[`it 同一`,`one 同类`]},{id:`gc44-r3`,prompt:`一周后：恢复 I had not checked the room, but Lee had.`,reference:`Lee had checked the room.`,explanation:`but 后 had 肯定，不能复制前项 not。`,criteria:[`过去完成`,`否定范围`,`内容准确`]}],sources:[{title:`British Council：Ellipsis`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/c1/ellipsis`,supports:`省略需要内容明显；并列共享、to后和助动/情态后省略，其他连接词不能一律删除同主语；口语片段有语体条件`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Substitution`,url:`https://dictionary.cambridge.org/grammar/british-grammar/substitution`,supports:`do替动词及补足、so替命题、one/ones替可数名词核心，数及所指需清楚`,accessed:`2026-10-03`,method:`通过官方搜索返回正文核验，直连未成功。`},{title:`Cambridge English Grammar Today：So`,url:`https://dictionary.cambridge.org/grammar/british-grammar/so-do-i`,supports:`so/neither助动倒装表示也如此，so＋主语＋助动确认同一主体，二者非自由换序；命题替代与呼应分开分析`,accessed:`2026-10-03`,method:`通过官方搜索返回正文核验。`}],revision:`official-reference-2026-10-03`,title:`省略、替代与衔接`,module:`进阶表达（选学）`,moduleOrder:7,track:`advanced`},{number:45,objectives:[`用情态＋have＋分词表达对过去的证据判断`,`区分过去可能、未用机会、遗憾评价及完成预期`,`区分已做却无需与过去无必要，保持未知结果`],summary:`用情态＋have＋分词表达对过去的证据判断`,prerequisites:[20,22,26,32,37],body:`### 学习目标

1. 用情态＋have＋分词表达对过去的证据判断
2. 区分过去可能、未用机会、遗憾评价及完成预期
3. 区分已做却无需与过去无必要，保持未知结果

### 先检查前置知识

先学：第 20 课、第 22 课、第 26 课、第 32 课、第 37 课。先独立回答下面两题，再阅读本节的核对提示。

1. He must be at home. must 只能表示义务吗？

核对：不能，可按证据表示强推断，由语境确定。若做错，回到第 26 课情态功能。

2. If I had checked, I would have noticed. 报告实际检查了吗？

核对：通常不是，未实现过去条件的结果，事实与假设分开。若做错，回到第 32 课反事实。

词汇支持：deduction 推断；evidence 证据；must have 想必曾；might have 可能曾；cannot have 不可能曾；should have 本应/理应已；need not have 已做却无需。

### A · 事实与判断分开，情态完成形式才有依据

情态＋have＋过去分词把判断指向先前事件：The empty box is here. Nia might have taken the labels 猜 Nia 可能拿标签。have 在情态后原形，不因 Nia 单数改 has；动作过去分词，不写 might have took 或 might had taken。观察空箱是事实，谁拿走是判断，两层必须分开。

must have done 常表示依据证据确信过去如此；may/might/could have done 表示过去可能；cannot/could not have done 在推断语境表示觉得过去不可能。它们表达判断确信程度，不自动成为已核实历史。不能给 must 固定百分比，也不能用单一弱线索强制定唯一事实。分析应写证据、候选解释及仍未知内容，有理由时用较谨慎可能形式。

must have done 不通常表示过去义务，过去必须做用 had to do。He had to stay late 按安排必须留，与 He must have stayed late 按迹象推断留下不同。否定推断通常 cannot/could not have；禁止 must not 及无必要 need not 另有意义，不能在完成结构随便互换。主句观察、情态功能和后续动作形式三层都准确，才算正确表达，不是只拼出 have＋分词。

### B · should have：失误评价或完成预期

I should have checked the address 在明确未查而出错的情境下评价本应检查；I should not have interrupted 在明确已打断情境下评价不应做。不能把所有 should have 一律译为一定没做，事实依据来自文脉。评价可能影响关系，团队复盘可用 we 与具体行动，不把句式变成对人的能力指责。

The coach should have arrived by now 可按计划表预期现在理应已到，却尚未确认。He must have arrived 更像强证据推断；should have 常来自计划、常理或时刻表。后文 but he has not arrived 可以确认未到，没有后文不能凭形式补没到事实。先判断是在评价明确失误，还是表达未核实预期。

先记已知是否做过，再决定情态功能。真实没查可用 should have checked；已查但质量差应评价检查方式，不能为练形式改成没查。列车应该已到也不等于确定晚点报告。解析需说明证据和已知事实，不只给 should 意味着实际相反的简化口令。同样句型在不同任务里的工作不同，能解释选择依据比记一个中文译法更重要。

### C · could have 和 would have：机会、可能与条件结果

I could have helped, but I chose not to 在后文明确时表示有机会却没用。Nia could have missed the bus 作过去可能推断，不表示本来能误车却没误。You could have been hurt 在危险结束而实际安全的文脉下指出潜在危险，不报告已经受伤。同一形式有不同功能，已知结局和情态评价分开。

If you had asked, I would have helped 在反事实情境表达未满足条件的结果。would have 不是普通过去事实，也不在所有文脉都等于未发生；转述或过去视角可能另有用法。本课先给清楚事实：当时没有问，条件未实现；假设问了我会帮。不可把可以、可能和条件结果混为同义本来会，改写应保留原先情态与条件关系。

完成也可结合被动和进行：The labels might have been removed 可能被移走；Nia may have been working then 可能当时工作。have 后 been 分别组织被动和进行，事实未知仍未知。先控制功能、have、分词与角色，再用较长结构。长不是深，能够指出依据及未确认信息，才证明理解真实事件的表达选择。

### D · need not have 与 did not need to：不要推未说事实

I need not have bought the paper 通常说明确实买了，后来评价不必要。I did not need to buy paper 只说明过去没必要，是否买看语境：I did not need to buy any, but I did 可以成立。练习若有所以没买，未买来自那条情境，而非 did not need to 自身。不能把一种常见故事当无例外规则。

need not have＋分词不借 did；did not need to＋原形为主句动词 need 过去否定，不写 did not need bought 或 did not need buy。We need not print it 现在无需，We need not have printed it 已印却不必，完成时间由 have 结构而非 need 词尾表达。常见教学对照用于理解事实边界，不强制所有自然语体都必须使用某个缩写。

复盘分三栏：确定做过、确定没做、未核实可能。买多且无需用 need not have；没检查而遗憾用 should have；谁拿走未知用 might have。did not need to 的行动栏可留空，等 but I did 或 so I did not 补事实。逐句查有无把判断升级事实、无需升级未做、可能升级唯一原因。这类错是内容失真，即使 have 拼对仍需修改。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| He had to stay late. / He must have stayed late. | 规定必须留／按迹象想必留。 | 过去义务与推断不同。 |
| Nia may have taken it. / Nia must have taken it. | 可能拿／确信想必拿。 | 都是判断，不自动核实。 |
| He cannot have read it yesterday. / He should not have read it aloud. | 不可能昨日读／不应朗读。 | 不可能与不应该不同。 |
| I should have checked, but I did not. / The train should have arrived by now. | 未查遗憾／按预期应已到。 | 已知失误与未确认预期。 |
| I could have helped, but I did not. / She could have missed the bus. | 有机会却未帮／可能误车。 | 未用机会与可能判断。 |
| I need not have printed it. / I did not need to print it, but I did. | 已印不必／无需但仍印。 | did not need to 不决定行动。 |
| If I had checked, I would have noticed. / The labels might have been removed. | 未实现条件结果／可能被移走。 | 反事实与被动可能不同。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| She must has left. | She must have left. | 情态后 have 原形。 |
| He might have went. | He might have gone. | have 后过去分词。 |
| I must have worked yesterday.（规定必须上班） | I had to work yesterday. | 过去义务非 must have 推断。 |
| I did not need to buy it，所以一定没买。 | I did not need to buy it. 是否买另需文脉。 | 无需不保证未做，but I did 可成立。 |

### 边界与使用选择

情态完成表达判断、评价或条件，不自动证实事实。should have 可预期，could have 可推断或机会，need not have 通常已做不必，did not need to 不独立决定行动。评价先看意义证据，再核 have 分词。自然措辞保持已知与未知边界，应接受而不强制唯一词汇。

### 学完后怎样检查自己

为真实失误写三事实卡：已做却无需、未做后悔、证据不足过去事件，各配一句并标依据。再写过去义务与未确认计划预期，请同伴只据英文填已做、未做或未知。与事实卡冲突时先修意义，最后检查分词，不用情态把猜测写成结论。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：Modals: deductions about the past](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-deductions-about-past)：must/may/might/could/cannot/could not＋have＋过去分词表达过去推断，选择依证据与确信，不自动核实事实。
- [Cambridge English Grammar Today：Need](https://dictionary.cambridge.org/grammar/british-grammar/need)：need not have表示已发生却不必要；did not need to表示过去无必要；主句need与半情态need形式不同。
- [British Council：Ability](https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/ability)：官方教学团队对need not have与did not need to的解释：后者本身不确定实际是否做；避免将无需等同未做。`,practice:[{id:`gc45-p1`,prompt:`填 Nia might have ___ (take) the labels. 说明是否核实。`,reference:`taken；只是过去可能，不是核实拿走。`,explanation:`have 原形＋分词，不保证事实。`,criteria:[`taken`,`可能非核实`]},{id:`gc45-p2`,prompt:`改 She must has gone 并给支持强推断线索。`,reference:`She must have gone. 如她已告知上车并发来车站照片，仍是说话人判断。`,explanation:`have 不变 has；线索可替换，仍区分判断核实。`,criteria:[`must have gone`,`证据`]},{id:`gc45-p3`,prompt:`昨天按规定必须值班，表达义务与推断差别。`,reference:`I had to work yesterday. I must have worked late 为推断的另一意义。`,explanation:`had to 义务非 must have。`,criteria:[`had to work`,`意义区分`]},{id:`gc45-p4`,prompt:`没查地址导致走错，现在遗憾。用 should have 标已知事实。`,reference:`I should have checked the address. 已知我没查而出错。`,explanation:`评价由明确情境支持。`,criteria:[`should have checked`,`未做依据`]},{id:`gc45-p5`,prompt:`多印一份后发现有备用，用 need not have。`,reference:`I need not have printed an extra copy.`,explanation:`已印却不必要。`,criteria:[`need not have printed`,`已做无需`]},{id:`gc45-p6`,prompt:`I did not need to print it 能确定未印吗？补两结果。`,reference:`不能。…but I did. / …so I did not.`,explanation:`行动由后文给，不凭形式推。`,criteria:[`未知`,`两结果`]},{id:`gc45-p7`,prompt:`计划十点到，现十点半未确认列车。should have 表达预期。`,reference:`The train should have arrived by now, but I have not checked.`,explanation:`预期非遗憾，结果未知。`,criteria:[`should have arrived`,`未确认`]},{id:`gc45-p8`,prompt:`没求助，对方原本会帮；另写不确定过去原因。区别功能。`,reference:`If I had asked, Nia would have helped. She might have missed my message.`,explanation:`未实现条件与过去可能不同，不冒充事实。`,criteria:[`had asked/would have helped`,`might have`,`功能区别`]}],verification:[{id:`gc45-v1`,prompt:`有人整夜持续观察告示并确认一直贴好。The notice cannot have ___ (fall) off during the night.填分词，说明判断依据。`,reference:`fallen；有人整夜持续观察并确认告示一直贴好。`,explanation:`have 后 fallen；持续观察并确认一直贴好支持说话人的否定判断；仅一般看守不能排除自然掉落。`,criteria:[`cannot have fallen`,`分词`],skill:`structure`,critical:!1},{id:`gc45-v2`,prompt:`修正 They may had forgotten the appointment. 标事实状态。`,reference:`They may have forgotten the appointment. 是否忘记未知。`,explanation:`may 后 have 原形，forgotten 分词。`,criteria:[`may have forgotten`,`未知`],skill:`transformation`,critical:!0},{id:`gc45-v3`,prompt:`已付费后发现免费，need not have；另写无需而行动未知版本。`,reference:`I need not have paid. I did not need to pay. 后句单独不决定付没付。`,explanation:`已做不必与过去无必要不同。`,criteria:[`need not have paid`,`did not need to pay`,`结果区分`],skill:`transformation`,critical:!0},{id:`gc45-v4`,prompt:`I could have left earlier 和 The parcel should have arrived 都必定实际相反吗？`,reference:`不必定。could have 需看机会或可能语境，should have 可完成预期，到否未知。`,explanation:`没有文脉不一律补相反事实。`,criteria:[`could 多功能`,`should 预期`,`不推事实`],skill:`meaning`,critical:!1},{id:`gc45-v5`,prompt:`没查预约而错过说明会，若查会提前到；另给昨天规定值班义务。写 3 句。`,reference:`I should have checked the booking time. If I had checked it, I would have arrived earlier. I had to be on duty yesterday.`,explanation:`评价、反事实、义务分别组织，must have 不能代替规定。`,criteria:[`should have`,`had checked/would have arrived`,`had to`,`事实一致`],skill:`expression`,critical:!0},{id:`gc45-v6`,prompt:`空箱已知；可能有人借工具但未确认；可靠连续保管记录表明工具从昨日直到十分钟前均在，因此认为这次遗失不可能始于昨日。写 3 句，再说未知事项。`,reference:`The box is empty now. Someone might have borrowed the tool, but we have not confirmed it. This loss cannot have started yesterday because reliable records show that the tool was continuously accounted for until ten minutes ago. 谁借、现在在哪仍未知。`,explanation:`连续记录及给定可靠性支持这次遗失时间的否定判断；一张十分钟前照片不能独立排除此前遗失又归还。不把借走写确定，不假装核实借者。`,criteria:[`事实判断分开`,`可能 have 分词`,`否定 have 分词`,`证据`,`未知保留`],skill:`expression`,critical:!0}],review:[{id:`gc45-r1`,prompt:`一天后：过去义务与强推断各句及依据。`,reference:`Nia had to stay under the rota. Nia must have stayed late; the finished report was sent at midnight.`,explanation:`规定与迹象不同，推断仍判断。`,criteria:[`had to`,`must have`,`依据`]},{id:`gc45-r2`,prompt:`三天后：已做无需与无需未做各句，第二补行动事实。`,reference:`I need not have bought the ticket; admission was free. I did not need to buy one, so I did not.`,explanation:`未做来自 so I did not，不由 did not need to 保证。`,criteria:[`已做无需`,`无必要＋事实`]},{id:`gc45-r3`,prompt:`一周后：should have 遗憾与未核预期，分别标事实。`,reference:`I should have called earlier; I did not. The bus should have arrived by now, but I have not checked.`,explanation:`功能由事实与语境决定。`,criteria:[`遗憾未做`,`预期未知`]}],sources:[{title:`British Council：Modals: deductions about the past`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-deductions-about-past`,supports:`must/may/might/could/cannot/could not＋have＋过去分词表达过去推断，选择依证据与确信，不自动核实事实`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`Cambridge English Grammar Today：Need`,url:`https://dictionary.cambridge.org/grammar/british-grammar/need`,supports:`need not have表示已发生却不必要；did not need to表示过去无必要；主句need与半情态need形式不同`,accessed:`2026-10-03`,method:`通过官方搜索返回正文核验。`},{title:`British Council：Ability`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/english-grammar-reference/ability`,supports:`官方教学团队对need not have与did not need to的解释：后者本身不确定实际是否做；避免将无需等同未做`,accessed:`2026-10-03`,method:`官方页面正文`}],revision:`official-reference-2026-10-03`,title:`情态动词完成形式`,module:`进阶表达（选学）`,moduleOrder:7,track:`advanced`},{number:46,objectives:[`先确定阅读任务与整段大意，再提取主句、必要信息和各层修饰，避免只查单词却错判关系。`,`把关系从句、状语从句和非谓语分别附着到正确对象，恢复人物、时间线、逻辑与信息范围。`,`用原文证据回答问题，区分可确定信息与推断，并用新的完整句复述。`],summary:`先确定阅读任务与整段大意，再提取主句、必要信息和各层修饰，避免只查单词却错判关系。`,prerequisites:[10,22,27,30,33,35,36,40],body:`### 学习目标

1. 先确定阅读任务与整段大意，再提取主句、必要信息和各层修饰，避免只查单词却错判关系。
2. 把关系从句、状语从句和非谓语分别附着到正确对象，恢复人物、时间线、逻辑与信息范围。
3. 用原文证据回答问题，区分可确定信息与推断，并用新的完整句复述。

### 先检查前置知识

先学：第 10 课、第 22 课、第 27 课、第 30 课、第 33 课、第 35 课、第 36 课、第 40 课。先独立回答下面两题，再阅读本节的核对提示。

1. The students who registered brought bikes.主句动词与关系从句动词分别是什么？

核对：主句 brought；从句 registered，who registered 识别 students。若做错，回到第 33 课关系从句缺口与第 10 课主干。

2. Having checked the map, Mina chose a route.两项行为谁执行，哪项先？

核对：Mina 执行两项，先查看再选择。若做错，回到第 40 课逻辑主语与先行关系。

词汇支持：repair club 维修社团；shelter 棚；caretaker 管理员；brake 刹车；adjust 调整；seat 座椅；damaged 损坏的；put aside 放到一边；owner 车主；part 零件；loose 松的。

### 先读任务，再读原创材料

任务：向未参加的人说明这次活动做了什么、哪项工作未完成以及下一步安排。第一遍只读整段大意，不逐词翻译；第二遍找能回答任务的证据。这段材料由工作台原创，不是官方教材文章。

Last Saturday, our repair club held a workshop in the school yard. The students who had registered by Thursday brought six bicycles. Although the morning was windy, the volunteers worked under a large shelter that the caretaker had prepared. After checking each bicycle, they repaired two loose brakes and adjusted four seats. The bicycle with a damaged wheel was put aside because the club did not have the right part. Its owner agreed to return the following week. The club has now ordered the missing part, and the volunteers will contact the owner when it arrives.

第一遍可概括：社团举行维修活动，部分维修完成，一辆车因缺零件留待后续。不能把“带来六辆车”直接变成“六辆车都已修好”。活动、原因、未完成事项与下一步是不同信息。生词支持帮助理解，细节判断最终必须返回原句。

### 先提取主干，再按层级把信息放回去

The students who had registered by Thursday brought six bicycles 的主干是 The students brought six bicycles。who had registered by Thursday 修饰 students，说明是此前登记过的那群人；不把 had registered 误当整句唯一谓语。by Thursday 限定登记截止点，不是活动举行日期。

Although the morning was windy, the volunteers worked under a large shelter that the caretaker had prepared 包含让步层、主句层和名词修饰层。主句为 the volunteers worked under a large shelter；although 说明不利背景，that 从句说明棚的先行准备。句子不是平行列出“上午、志愿者、管理员”三件独立事，词序和从属关系都携带意义。

暂时提取主干是分析方法，最终理解必须把限制、条件、否定放回去。如果只保留 students brought bicycles，就丢失“已登记”的参加者范围；只保留 volunteers worked，就丢失风大仍开展和有棚的背景。对回答有影响的修饰不能永久删去。

### 附着对象、逻辑主语与时间参照一起核对

After checking each bicycle 里的 checking 由主句 they 的所指执行，they 回指 volunteers。不能把 checking 解释成自行车自己检查，也不能因-ing 就认为它正在现在发生。整个叙事主线定位在 Last Saturday；checking 先于 repaired/adjusted，时序由 after 和上下文说明。

with a damaged wheel 直接限定 the bicycle，because 引出放到一边的原因。The bicycle…was put aside 的被动主语是那辆车，未必是动作执行者。Its owner 中的 its 回指这辆车；when it arrives 的 it 回指最近且语义合理的 missing part。不能只用“最近名词”口诀：还必须检验动作与对象是否合理。

had registered/had prepared 相对于上周六活动更早；agreed to return 是过去达成的安排；has now ordered 把订件的结果连接到当前；will contact 与 when it arrives 组织未来行动。阅读时允许不同时间层并存，不把一段过去叙事中的所有动词一律改成一般过去。

### 把关系与证据用于回答，而不是只圈术语

问题“为什么一辆车没有继续维修？”依据 because the club did not have the right part，回答缺合适零件。问题“带来车的是哪些学生？”依据 who had registered by Thursday，回答周四前已登记者。主干、修饰、逻辑的作用是帮助恢复信息，不是比谁给术语更多。

原文说 repaired two loose brakes 与 adjusted four seats，并未逐辆给出完好验收结果，也未证明这些工作覆盖了六辆互不重叠的车。回答“六辆都修好”超过证据。owner agreed to return 说明车主同意回来，不保证将来一定回来；future contact 说明计划，不等于已经联系。

对隐含信息可标“可能”，同时指出证据和限制。原文有 windy 与 shelter，可以合理理解棚提供工作条件，但不应新增“暴风雨取消活动”或“管理员修好了车”的事实。阅读理解要保持人物角色、时间和信息范围，不能让流畅中文翻译制造原文没有的内容。

### 先恢复短句，再做保义复述

可以把复杂第三句拆成三条信息：The morning was windy. The caretaker had prepared a large shelter. The volunteers still worked under it。拆分后用 still 保留让步关系，用 had prepared 保留先行时间。若只写三个平行过去句而不保留关系，虽然每句语法正确，复述仍不完整。

复述活动可先用四句说明主线：The club held a workshop last Saturday. The volunteers checked the bicycles and completed some repairs. One bicycle was put aside because a part was missing. The club has ordered the part and plans to contact the owner when it arrives。可用其他自然表达，重要的是部分完成、原因和后续安排均准确。

换到新段落时重复五步：确定任务、大意、主干、附着与时间、证据核对。阅读不必把每个短语都命名才继续；能准确答题与复述才是迁移目标。独立验收会更换校园活动材料，检验方法是否仍可使用。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| The students who had registered brought six bicycles. | 已登记的学生带来六辆车。 | 从句限定人群，主句 brought 完成主线。 |
| Although it was windy, the volunteers worked. | 虽然有风，志愿者仍工作。 | 保留让步，不可读成因风才工作。 |
| a shelter that the caretaker had prepared | 管理员此前准备的棚 | that 从句附着 shelter，had prepared 先于工作。 |
| After checking each bicycle, they repaired two brakes. | 检查各车后，他们修了两个刹车。 | checking 逻辑主语为 they，after 给出先后。 |
| The bicycle with a damaged wheel was put aside. | 轮子损坏的那辆车被放到一边。 | with 短语附着 bicycle，主句为被动。 |
| Its owner agreed to return. | 该车车主同意再来。 | its 回指车，不指志愿者或社团。 |
| They will contact the owner when it arrives. | 零件到达时他们会联系车主。 | it 指零件，时间从句用现在式表达未来参照。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| The students had registered 是整句 The students who…brought…的主句。 | 主句是 The students brought six bicycles. | 从句内部动词不能代替外层主句动词。 |
| after checking 表示现在检查，因为是-ing。 | 叙事中的检查发生于上周六，先于后面的维修。 | 非谓语本身不独立标出现在时。 |
| 六辆自行车都修好。（据 six bicycles 推断） | 社团完成若干刹车与座椅维修，一辆车等待零件。 | 数量清单不等于所有对象完全修好。 |
| 管理员检查了自行车。（把 caretaker 读成 they） | they 在检查维修句中指 volunteers。 | 回指需结合当前主线与动作角色。 |

### 边界与使用选择

长句分析不是删除所有修饰，也不是靠离动词最近的名词决定角色。限制从句、条件、否定及数量范围会改变答题结果，必须回装。非谓语本身不等于某个时态，代词回指不是永远指最近的名词。本文为原创教学材料，真实阅读还会有更丰富词汇与语用；这里只检验已学核心结构，第 41—45 课选学不构成通读前提。

### 学完后怎样检查自己

先不看分析，以四句准确复述活动；再从原文选一长句画出外层主句和两处附着箭头，指出一个不能由原文推出的断言。让同学只凭你的复述回答活动、问题、原因与下一步。隔天对一段新的通知或活动报告重复，若仍能保留限制与时间关系，说明阅读方法已可迁移。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [Cambridge：Clauses — introduction](https://dictionary.cambridge.org/us/grammar/british-grammar/introduction)：主句与从属分句的层级，必要补足信息不能在恢复主干时丢失。
- [British Council TeachingEnglish：Making reading communicative](https://www.teachingenglish.org.uk/professional-development/teachers/knowing-subject/making-reading-communicative)：阅读前、阅读中与阅读后的任务，按真实目的理解材料并迁移到表达。`,practice:[{id:`gc46-p1`,prompt:`原文大意是“全车维修成功”还是“完成部分维修并安排后续”？说明一句证据。`,reference:`完成部分维修并安排后续；一辆车因缺零件被放到一边。`,explanation:`需要通段信息，不从 six bicycles 推全部修好。`,criteria:[`概括部分完成`,`引用未完成原因`]},{id:`gc46-p2`,prompt:`提取 The students who had registered by Thursday brought six bicycles 的主句。`,reference:`The students brought six bicycles.`,explanation:`who…为修饰学生的从句；主句 brought 是外层谓语。`,criteria:[`主语 students`,`brought 主句`,`six bicycles 保留`]},{id:`gc46-p3`,prompt:`第三句的 that 从句修饰 shelter 还是 volunteers？谁准备了它？`,reference:`修饰 shelter；caretaker 准备棚。`,explanation:`关系从句附着名词 shelter，内部主语 caretaker 执行 prepared。`,criteria:[`附着 shelter`,`执行者 caretaker`]},{id:`gc46-p4`,prompt:`After checking each bicycle, they repaired…里的 checking 由谁执行？`,reference:`volunteers，即 they`,explanation:`非谓语默认连接主句逻辑主语，不能把 bicycle 当执行者。`,criteria:[`指出 volunteers`,`非谓语主语依据`]},{id:`gc46-p5`,prompt:`Why was one bicycle put aside?用完整英语句回答。`,reference:`It was put aside because the club did not have the right part.`,explanation:`because 给出直接原因，it 回指题中车。`,criteria:[`缺零件原因`,`完整主句`]},{id:`gc46-p6`,prompt:`按先后列 register、prepare shelter、hold workshop 与 current order；早期两项能确定彼此先后吗？`,reference:`登记和准备都早于活动；订件为当前相关结果。登记与准备彼此先后未说明。`,explanation:`过去完成只相对于参照事件先行，不自动排序两个早期事件。`,criteria:[`早于活动`,`当前订件`,`不猜早期彼此顺序`]},{id:`gc46-p7`,prompt:`把让步和棚准备句拆为三短句，保留让步与先行关系。`,reference:`It was windy. The caretaker had prepared a shelter. The volunteers still worked under it.`,explanation:`still 与 had prepared 保留逻辑和时间；自然等义写法可。`,criteria:[`windy 背景`,`先行准备`,`仍工作的关系`]},{id:`gc46-p8`,prompt:`用四句复述活动、已做工作、未做原因、后续计划。`,reference:`The club held a workshop. The volunteers completed some repairs. One bicycle was put aside because a part was missing. The club has ordered the part and will contact the owner when it arrives.`,explanation:`不要求逐词对应原文，但不得新增全数修好事实。`,criteria:[`四项信息`,`时间关系`,`没有过度推断`]}],verification:[{id:`gc46-v1`,prompt:`新材料：The pupils who had booked a place visited the studio after the guide had opened it. 谁参观，booked/opened 相对参观是何时间？`,reference:`已预订名额的学生参观；预订与开门都早于 visited。`,explanation:`主句 pupils visited，两个过去完成依据过去参观点。`,criteria:[`参加者范围`,`两项先行`],skill:`meaning`,critical:!1},{id:`gc46-v2`,prompt:`提取 The parcels that arrived before noon were stored in the room near the office 的主句，并指出 near the office 修饰哪处。`,reference:`The parcels were stored in the room. near the office 修饰 room。`,explanation:`到达从句附着 parcels，位置短语附着 room。`,criteria:[`主句被动`,`room 附着`,`限定到达范围`],skill:`transformation`,critical:!0},{id:`gc46-v3`,prompt:`修复并解释：After checking the tickets, the hall was opened by Mina.（本意 Mina 查票再开厅）`,reference:`After checking the tickets, Mina opened the hall.`,explanation:`原分词逻辑主语表面为 hall，不是查票人。`,criteria:[`Mina 主语`,`先查后开`,`避免悬垂`],skill:`transformation`,critical:!0},{id:`gc46-v4`,prompt:`Ari invited twelve members. Nine arrived.能否写“All twelve attended”？给证据。`,reference:`不能；只有九人到场，十二为受邀人数。`,explanation:`受邀与实际参加是不同数量范围。`,criteria:[`区分两范围`,`指出 nine 证据`],skill:`meaning`,critical:!1},{id:`gc46-v5`,prompt:`新资料：虽然下雨，已登记的游客仍在已搭好的棚下等候。用英语写一句或两句，保留限定与让步。`,reference:`Although it was raining, the visitors who had registered waited under the shelter that had been prepared.`,explanation:`允许拆句，但不能把所有游客都加入或把雨写成等待的原因。`,criteria:[`让步保留`,`登记者范围`,`棚先准备`,`主句完整`],skill:`expression`,critical:!0},{id:`gc46-v6`,prompt:`新段落：The club tested two lamps. One worked. The other needs a new battery. The club will test it again when the battery arrives.用 3 句复述并指出 it 所指。`,reference:`The club tested two lamps, but only one worked. The other lamp needs a new battery. The club will test that lamp again when the battery arrives. it 指另一盏灯。`,explanation:`新材料检验数量、当前需求、未来计划及回指，不要求复杂结构堆积。`,criteria:[`一成功一待修`,`当前需求`,`未来时间关系`,`it 指灯`],skill:`expression`,critical:!0}],review:[{id:`gc46-r1`,prompt:`Ari, who checked the list, welcomed the guests who had registered.两个 who 各说明什么？`,reference:`第一个补充 Ari 查名单，第二个限定已登记的客人。`,explanation:`逗号与附着对象区分补充和限制。`,criteria:[`补充 Ari`,`限定 guests`]},{id:`gc46-r2`,prompt:`After taking photos, the volunteers packed the tools.用两句恢复执行者和时序。`,reference:`The volunteers took photos. Then they packed the tools.`,explanation:`同一执行者，taking 不独立表示现在。`,criteria:[`同一执行者`,`先拍后收`]},{id:`gc46-r3`,prompt:`读新两句：The team ordered six batteries. Four arrived.用一句准确概括并指出不能推断什么。`,reference:`The team ordered six batteries, but only four arrived. 不能说六个都到达。`,explanation:`ordered 说明订购了六个，arrived 只确认四个已经到达；概括时保留两项事实，不能把订购动作换算为六个全到，也不能无证据断言另外两个遗失。`,criteria:[`两数量准确`,`没有全数到达推断`]}],sources:[{title:`Cambridge：Clauses — introduction`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/introduction`,supports:`主句与从属分句的层级，必要补足信息不能在恢复主干时丢失`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`},{title:`British Council TeachingEnglish：Making reading communicative`,url:`https://www.teachingenglish.org.uk/professional-development/teachers/knowing-subject/making-reading-communicative`,supports:`阅读前、阅读中与阅读后的任务，按真实目的理解材料并迁移到表达`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录`}],revision:`official-reference-2026-10-03`,title:`长句分层理解`,module:`阅读与表达应用`,moduleOrder:8,track:`integrated`},{number:47,objectives:[`让段落时态服务明确的过去主线、先行背景与当前结果，而不机械追求全文单一时态。`,`检验代词、替代与重复名词的可恢复性，选择不会引入歧义的衔接。`,`区分时间、因果、转折和证据限制，写一段有依据且逻辑清楚的项目说明。`],summary:`让段落时态服务明确的过去主线、先行背景与当前结果，而不机械追求全文单一时态。`,prerequisites:[9,20,21,22,29,30,36,46],body:`### 学习目标

1. 让段落时态服务明确的过去主线、先行背景与当前结果，而不机械追求全文单一时态。
2. 检验代词、替代与重复名词的可恢复性，选择不会引入歧义的衔接。
3. 区分时间、因果、转折和证据限制，写一段有依据且逻辑清楚的项目说明。

### 先检查前置知识

先学：第 09 课、第 20 课、第 21 课、第 22 课、第 29 课、第 30 课、第 36 课、第 46 课。先独立回答下面两题，再阅读本节的核对提示。

1. We had tested the card before we printed it，哪个先，主线参照在哪？

核对：先测试后印刷，过去参照是 printed。若做错，回到第 22 课先行与主线。

2. Mina gave Nora a card. She kept it.只凭两句能确定谁保留卡吗？

核对：未必，she 有两个可能对象；it 清楚指卡。若做错，回到第 09 课指代可恢复性。

词汇支持：route card 路线卡；pupil 学生；turn 转弯处；sports hall 体育馆；notice 注意到；version 版本；bold 醒目的；instruction 指示；trial 试用；suggest 表明、提示；evidence 证据。

### 先读原创段落并区分三层时间

阅读任务：向下一组学生说明路线卡的问题、修订、试用结果及证据限制。

In March, our group designed a route card for new pupils. We had noticed that several visitors were missing the turn beside the sports hall. We tested the first card with four classmates, but two of them still took the wrong path. We then added a bold arrow and named the sports hall in the instructions. In a second trial, all four classmates reached the library without asking for help. The revised card has now been used by another group. These trials suggest that the clearer directions help readers, but they do not prove that every visitor will find the route easily.

第一句与 tested/added/reached 建立三月的过去项目主线。had noticed 补充设计前已经发现的问题；were missing 说明在那个阶段出现的迷路情况。has now been used 连接过去修订与当前应用，最后的 suggest/help/prove 表达当前评价。段落混合时态是为了组织时间和观点，不是自动错误。

### 每个时态都要找参照点和交流目的

若把 We had noticed 改成 We notice 却不改变叙事上下文，会模糊是设计前的原因还是当前持续观察。若把 has now been used 一律改成 was used，可以转成过去某次事实，但会弱化“截至现在已应用”的视角。判断不同形式时说明意义变化，不要只把某个时间词标成必须对应一种时态。

叙事中的 then 把修订放在第一次失败之后，second trial 是在修订之后。过去完成不需要出现在每一个较早的动词上；主线依次推进时，连接信息已清楚，可用一般过去。只有需要跳回早期参照时才考虑过去完成等结构。

当前评价可以用一般现在，因为评价者现在依据这些记录作判断。不是“全文过去，所以最后一句现在式一定错”。写项目反思时先列时间线，再给当前收获；写通知时则以未来计划为主。形式选择服务具体任务，不能用统一时态口诀替代内容安排。

### 代词与名词重复按读者能否恢复来选

two of them 回指四位试用同学，all four classmates 再次明确同一组四人。they 在最后一句“they do not prove…”回指 These trials，而不是 visitors。虽然几个名词都可能为复数，谓语 prove 和段落评价角色帮助恢复所指；只找最近复数名词仍可能误读。

The revised card 比单写 it 更清楚，因为前文出现 first card、arrow 和 sports hall 等对象。重复关键名词不必然“低级”；在多对象情境中，短暂重复可以避免歧义。若写“We sent the card to the group after it had changed”，it 可能让读者猜，最好具体写 after the group’s schedule had changed 等真实所指。

不是所有 this 都必须指单个名词，This result 可概括前句“四人都到达”的事件；但单写 This helps 可能太笼统，需要让读者识别何种变化或结果。省略和替代应以可恢复性为前提，而不是为了减少重复而隐藏关键人物与对象。

### 连接词表达关系，证据决定结论强度

but 连接第一次试用与仍走错路的落差；then 组织先后；最后 but 限制结果解释。because 可以说明原因，但不能随意把时间顺序改造成因果。增加箭头后四人成功，并不单凭先后就证明箭头是唯一原因，也可能存在重复试路等影响。

两次小规模试用支持“修订后这四位同学在本次任务更顺利”。它不能支持“每位游客永远不会迷路”，也不能证明具体哪项修改单独起效。suggest 与 prove 的语气差异服务证据强度，不是作文词汇越强越好。更谨慎的结论能更忠实地报告项目。

写自己的段落时把可观测记录和评价分开。记录“four reached”是任务结果；评价“clearer directions may help”是解释。可以提出再试更多新读者作为下一步，但不要把尚未开展的验证写成已有数据。真实学习材料的结果不应为了让文章好看而编造成所有人都成功。

### 组织新段落：问题、行动、结果、当前认识

本课原创写作框架为四项信息：此前发现了什么问题，过去做了什么修改，记录了什么结果，目前据此认识到什么及哪里还不确定。这是可用于学习项目的组织方法，不是所有文章必须四段。短段落也可以用四句或五句完成。

修订示例初稿：We make a card last month. We had change it. They all understand it now。先核对事实再修形式：We made a route card last month. We changed two unclear instructions. Four classmates understood the revised card in our trial. We still need to test it with new readers。修订补明对象、过去时间、试用范围与未验证事项。

最后读给没参与的人听：他应能区分第一次和第二次试用，找到每个代词所指，知道你哪些判断有证据。独立验收使用新的学习项目，防止只重述路线卡的数字。延后复习再换主题，检验时间和逻辑的组织能力。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| We had noticed a problem before we designed the card. | 设计卡前已经注意到问题。 | 过去完成相对于设计参照点先行。 |
| We tested the card, but two readers got lost. | 测试了卡，但两位读者迷路。 | but 保留预期与结果的落差。 |
| We then added an arrow. | 随后增加箭头。 | then 推进过去主线，不独自证明因果。 |
| The revised card has now been used by another group. | 修订卡截至现在已被另一组使用。 | 完成被动连接当前应用结果。 |
| These trials suggest improvement. / They do not prove universal success. | 试用提示改善。／它们不能证明普遍成功。 | they 回指 trials，结论强度受证据约束。 |
| The group changed the card. The revised card was clearer. | 小组改卡，修订卡更清楚。 | 关键名词重复可保证读者能恢复对象。 |
| Four readers succeeded. This result supports another trial. | 四位读者成功，这个结果支持进一步试用。 | This result 概括整件事，并未编造更多数据。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| We design a card last March.（叙述已完成项目） | We designed a card last March. | 过去结束时间下使用过去主线。 |
| We had noticed…表示刚刚现在才注意。 | 该形式指过去参照点之前注意到。 | 过去完成需要回到过去参照理解。 |
| Mina gave Nora the card. She changed it.（未指明修改者） | Mina gave Nora the card. Nora changed the card.（若本意 Nora 修改） | 须明确人称所指，不能只靠“最近的人”。 |
| Two successful trials prove everyone will succeed. | The two trials suggest improvement; more readers need testing. | 小样本记录不能推出普遍保证。 |

### 边界与使用选择

段落衔接不要求删除所有名词重复，也不要求每句换一种高级连接词。现在评价、过去事实和当前完成结果可以同段出现，但参照点须清楚。时间先后不自动等于因果，有限试用不自动代表所有读者。这里的项目与数字全部原创用于教学，不能当真实研究结果引用；学生实际写作应只报告自己有依据的记录。

### 学完后怎样检查自己

找一个真实完成的学习任务，先列问题、修改、观察结果和当前认识，再写 80—120 词。逐句标时间参照，为代词画回指箭头，用不同记号标事实与推断。换一位没参与的人读，记录他问不清的一处并修订。隔一周以新项目重写，不使用同一套数字与例句。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [Cambridge：Personal pronouns](https://dictionary.cambridge.org/us/grammar/british-grammar/pronouns-personal-it)：恢复代词所指与选择合适的人称形式，避免跨句指代混乱。
- [Cambridge：Conjunctions](https://dictionary.cambridge.org/grammar/british-grammar/coordinating-conjunctions)：连接同类单位，以及并列连接与从属连接的区别。
- [British Council：A report on a student meeting](https://learnenglish.britishcouncil.org/free-resources/writing/b1/report-student-meeting)：说明写作目的与信息依据，组织问题、发现与建议；本课采用原创过程报告。`,practice:[{id:`gc47-p1`,prompt:`原创段落的 had noticed 相对于哪个过去事件更早？`,reference:`设计路线卡 designed 更早之前发现问题。`,explanation:`参照点来自叙事，而不是“现在以前”笼统描述。`,criteria:[`指出 designed`,`先发现后设计`]},{id:`gc47-p2`,prompt:`把 We design a route card last March.改成已完成项目叙述。`,reference:`We designed a route card last March.`,explanation:`last March 定位结束的过去时间，主线用过去式。`,criteria:[`designed`,`时间本意`]},{id:`gc47-p3`,prompt:`two of them 与最后 they do not prove 的 them/they 各指什么？`,reference:`them 指四位同学；they 指 These trials。`,explanation:`数量和谓语意义共同帮助回指，不机械选最近名词。`,criteria:[`同学所指`,`试用所指`]},{id:`gc47-p4`,prompt:`第一试用两人走错、第二试用四人都成功，可直接说“所有新生都会成功”吗？`,reference:`不能；试用人数有限，且是同一组四人。`,explanation:`两次试用只观察同一组四个人，第二次成功支持修改可能有帮助；材料没有观察所有新生，也没有排除重复试用的影响，不能许诺普遍成功。`,criteria:[`不作普遍保证`,`说明限制`]},{id:`gc47-p5`,prompt:`修正 We made it clearer. They used it.（资料：改卡，两位同学使用；原对象不清）`,reference:`We made the route card clearer. Two classmates used the revised card.`,explanation:`补明确对象和行动者，关键名词可合理重复。`,criteria:[`card 明确`,`two classmates 明确`]},{id:`gc47-p6`,prompt:`把“我们加箭头后四人成功”写英语，避免声称箭头唯一导致成功。`,reference:`We added an arrow. In the second trial, all four classmates reached the library.`,explanation:`可以用 then 等时间关系；不能无依据加入 proved 或 only cause。`,criteria:[`先后准确`,`四人范围`,`无唯一因果保证`]},{id:`gc47-p7`,prompt:`以原创资料写两句：过去试用，当前使用结果。`,reference:`We tested the revised card with four classmates. It has now been used by another group.`,explanation:`前句过去主线，后句连接当前完成结果；it 需清楚回指。`,criteria:[`过去主线`,`当前结果`,`回指清楚`]},{id:`gc47-p8`,prompt:`写一条有证据的评价和一条后续验证建议。`,reference:`The trials suggest that the directions are clearer. We should test the card with new readers.`,explanation:`评价谨慎，后续验证标为建议，不写成已完成事实。`,criteria:[`证据强度合适`,`建议与事实分开`]}],verification:[{id:`gc47-v1`,prompt:`新段落：We had recorded the sounds before we made the quiz. Yesterday, we tested it. The quiz has now been used in two classes.指出三项时间关系。`,reference:`先录音后制作；昨天测试；截至现在两班已使用。`,explanation:`参照点分别为制作、昨天与现在。`,criteria:[`先行背景`,`过去主线`,`当前完成`],skill:`meaning`,critical:!1},{id:`gc47-v2`,prompt:`修复 She give the instructions yesterday. We has now revised them.。`,reference:`She gave the instructions yesterday. We have now revised them.`,explanation:`结束过去时间选 gave，当前完成配 we have，them 回指 instructions。`,criteria:[`gave`,`have revised`,`回指明确`],skill:`transformation`,critical:!0},{id:`gc47-v3`,prompt:`资料：Mina 给 Ari 一份说明；Ari 修订。消除 She changed it 的所指不明。`,reference:`Mina gave Ari the instructions. Ari revised the instructions.`,explanation:`用名字和关键词恢复角色，允许明确代词等义写法。`,criteria:[`Ari 修改者`,`对象明确`],skill:`transformation`,critical:!0},{id:`gc47-v4`,prompt:`Five pupils completed the revised task 能否证明修改在任何学校都有效？`,reference:`不能；只报告五位学生这次完成情况。`,explanation:`没有跨学校或所有人数据，不作普遍因果结论。`,criteria:[`保留样本范围`,`结论不超证据`],skill:`meaning`,critical:!1},{id:`gc47-v5`,prompt:`写 60—80 词新项目短段：过去测试、清楚代词、具体结果、谨慎当前认识；项目为声音问答。`,reference:`Last week, our group made a listening quiz. We had recorded six short sounds before we wrote the questions. We tested the quiz with five classmates. Three classmates confused two similar sounds, so we added a second example. All five answered those questions in the next trial. The results suggest that the example helped this group, but we still need to test it with new listeners.`,explanation:`参考为 71 词；完整交代时间、修改和样本限制，自写可采用其他合理结果。`,criteria:[`60—80 词`,`过去主线与先行背景`,`指代清楚`,`结果具体`,`结论有限`],skill:`expression`,critical:!0},{id:`gc47-v6`,prompt:`新资料：三位同学昨天试用地图，其中两人找到教室，一人仍迷路；目前已加地标，尚未再测。写 4—5 句，不编造成功结果。`,reference:`Three classmates tested the map yesterday. Two found the classroom, but one got lost. We have now added a landmark. We have not tested the new version yet. We need another trial.`,explanation:`新版本已修改不等于已验证成功，当前完成与过去测试须区分。`,criteria:[`原结果三人范围`,`过去时间`,`当前修改`,`未验证状态`,`连接合理`],skill:`expression`,critical:!0}],review:[{id:`gc47-r1`,prompt:`We printed the guide after we had checked it.按行动先后恢复两句。`,reference:`We checked the guide first. Then we printed it.`,explanation:`after 与过去完成共同说明先检查后印刷。`,criteria:[`顺序准确`,`it 回指 guide`]},{id:`gc47-r2`,prompt:`两位女生讨论一张图，只写 She changed it 有什么风险？修正一次。`,reference:`she 可能有两种对象；写具体名字如 Nora changed the map.`,explanation:`she 在两位女性都可被指到时不能单独确定修改者；重复具体姓名能恢复参与者关系，同时把 it 明确为 map，避免读者仍需猜对象。`,criteria:[`指出歧义`,`明确修改者`]},{id:`gc47-r3`,prompt:`写一句当前认识和一句谨慎限制：仅四位同学试用一套步骤且都完成。`,reference:`The trial suggests that the steps helped these four classmates. We do not yet know whether new readers will find them clear.`,explanation:`有限成功可提示改善，不能声称普遍有效。`,criteria:[`四人范围`,`限制明确`]}],sources:[{title:`Cambridge：Personal pronouns`,url:`https://dictionary.cambridge.org/us/grammar/british-grammar/pronouns-personal-it`,supports:`恢复代词所指与选择合适的人称形式，避免跨句指代混乱`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录；直接页面403`},{title:`Cambridge：Conjunctions`,url:`https://dictionary.cambridge.org/grammar/british-grammar/coordinating-conjunctions`,supports:`连接同类单位，以及并列连接与从属连接的区别`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录`},{title:`British Council：A report on a student meeting`,url:`https://learnenglish.britishcouncil.org/free-resources/writing/b1/report-student-meeting`,supports:`说明写作目的与信息依据，组织问题、发现与建议；本课采用原创过程报告`,accessed:`2026-10-03`,method:`官方页面正文`}],revision:`official-reference-2026-10-03`,title:`段落时态、指代与逻辑`,module:`阅读与表达应用`,moduleOrder:8,track:`integrated`},{number:48,objectives:[`先恢复中文的角色、时间、逻辑与语气，再选择自然英语结构，不逐字映射或强行堆复杂句。`,`在翻译与改写中保留必要性、限制范围、执行者和时间参照，解释哪些形式改动会改变意思。`,`按读者需要完成 80—120 词通知或项目反思，提交初稿、修订稿与可核对的修改理由。`],summary:`先恢复中文的角色、时间、逻辑与语气，再选择自然英语结构，不逐字映射或强行堆复杂句。`,prerequisites:[26,31,33,35,36,40,46,47],body:`### 学习目标

1. 先恢复中文的角色、时间、逻辑与语气，再选择自然英语结构，不逐字映射或强行堆复杂句。
2. 在翻译与改写中保留必要性、限制范围、执行者和时间参照，解释哪些形式改动会改变意思。
3. 按读者需要完成 80—120 词通知或项目反思，提交初稿、修订稿与可核对的修改理由。

### 先检查前置知识

先学：第 26 课、第 31 课、第 33 课、第 35 课、第 36 课、第 40 课、第 46 课、第 47 课。先独立回答下面两题，再阅读本节的核对提示。

1. “无需自带工具”和“不准自带工具”哪一个是 don’t have to，哪一个是 mustn’t？

核对：无需为 don’t have to，不准为 mustn’t；两种规则不同。若做错，回到第 26 课非必要与禁止。

2. Do you know where are the materials?应如何改，为什么？

核对：Do you know where the materials are?嵌入问题内部用陈述语序。若做错，回到第 36 课嵌入问题。

词汇支持：repair afternoon 维修活动；tool 工具；label 标签；equipment 设备；spare 备用的；studio 工作室；bring 带来；cancel 取消；register 登记；check 核对；instructions 说明。

### 翻译前写意思清单，再选择句子

情境：班级计划下周三在美术工作室办海报制作活动；学生可带旧杂志但不要求；若工作室不能用则改到图书室；希望同伴告诉你材料放在哪里。先列读者需要的信息：谁组织、何时何地、参加者做什么、什么可选、什么条件改变安排、询问什么。

可写 Our class is going to make posters in the art studio next Wednesday. You can bring old magazines, but you don’t have to. If the studio is unavailable, we will use the library. Could you tell me where the materials should be placed? 计划可据情境使用其他自然未来表达；不能把 don’t have to 换成 mustn’t 后还声称意思保持。

原意若没有指定原因、人数或已完成结果，不要为写得丰富而补造事实。翻译目标是让英语读者恢复同样行动安排，句数不必与中文一致。两句短而准确的英文可以比一个层级混乱的长句更适合通知，选择结构要服务信息和读者。

### 保义改写先检查四类易变信息

第一类是必要性：You don’t have to buy materials 说可买也可不买，You mustn’t buy materials 说禁止买。第二类是人群范围：The students who registered will attend 只指定登记学生；The students, who registered, will attend 给已识别的一组学生补充都已登记的信息，双逗号不是免费装饰。

第三类是执行者：After checking the list, we prepared the labels 把两项行为连到 we；After checking the list, the labels were prepared 表面让 labels 执行 checking，需改写为 After we checked the list, the labels were prepared 或采用明确主动主句。改写时主被动不仅交换词序，也影响执行者与信息焦点。

第四类是时间与条件：If the studio is unavailable, we will use the library 在开放未来条件中从句常用现在式，主句表达未来安排。若改成过去形式，可能进入不同假设视角；若把尚未发生的计划写成已完成，读者会作出错误行动。保义改写要逐项回看，而非只检查句子表面是否通顺。

### 看初稿：分开修事实、结构与衔接

原创初稿：Our class make posters next Wednesday. If the studio will unavailable, we use the library. Students mustn’t bring magazines. Having checked the materials, the labels will be prepared. Please tell me where should we put the tools.

按原情境修订：Our class is going to make posters next Wednesday. If the studio is unavailable, we will use the library. Students can bring magazines, but they don’t have to. After we have checked the materials, we will prepare the labels. Please tell me where we should put the tools.

第一句补清未来计划；条件句补完整 be 并选择开放条件现在式；第三句恢复可选而非禁止；第四句明示同一执行者；第五句嵌入内容恢复陈述语序。修订不只是在句尾加-s 或换一个高级词。若你只改结构却保留错误禁止规则，读者仍会被误导；若只修意思却漏掉谓语，表达仍不完整。

### 按文体与读者组织短文，不按语法点堆积

通知应让参加者可行动：时间地点、参加对象、携带或准备事项、条件安排和联系询问。它不必使用所有高级语法。项目反思应说明过去问题、行动、观察结果及当前认识，结果和评价要区分，不把未验证效果当事实。

写前列信息清单，初稿优先信息完整；第二遍检查主句、从句和必要动词；第三遍查时间、指代和逻辑；最后看词汇搭配、拼写与标点。80—120 词是本课程任务长度，不是通用考试字数。核对时用空格分隔的英语词计数，缩写算一个词；不要把中文修改理由计入英文短文。

读者可能不知道 it/they 指什么，也可能不懂地点是否确定。需要时重复关键名词，或将复杂句拆开；明确比炫耀结构更重要。参考表达只展示一种可行实现，学生文本使用不同自然词汇、句序或拆句，只要满足原意和核心条件都应被接受。

### 修订理由要能指向具体问题

“语法更好”“更高级”不是可核对理由。有效理由应写“原句 mustn’t 表示禁止，与可选规则相反，改为 don’t have to”“where should we put 是独立疑问顺序，嵌入 tell me 后改 where we should put”“分词开头原本连到 labels，改为 we 执行检查和准备”。每条理由都指一处真实修改，并说明读者理解或结构如何改善。

提交初稿与修订稿有助于看清自己发现了什么，不要求故意在初稿制造错误。如果初稿已正确，可以提出清楚的内容组织或指代改进，例如把笼统 it 换成 the spare tools。不能把参考答案抄一遍再声称自己完成独立写作；验收应在新情境先写完再看参考。

最后请一位同学只读通知，复述参加时间地点、必须与可选行动、条件安排和询问。若他恢复的信息与你的意思清单一致，再安排隔天的新情境写作。一次自评通过是本轮证据，延后迁移和真实沟通才进一步显示稳定掌握。

### 例句对照：意义与结构

阅读每组时先遮住解释，找出句子在表达什么，再核对形式与意义。

| 英文例句 | 中文意思 | 为什么这样表达 |
| --- | --- | --- |
| You don’t have to bring tools. / You mustn’t bring tools. | 无需带工具。／不准带工具。 | 必要性与禁止不同，改写不可互换。 |
| The visitors who registered can enter. | 登记过的游客可进入。 | 关系从句限定参加人群。 |
| Mina, who checked the list, will welcome guests. | Mina 查过名单，她会迎接客人。 | 逗号从句补充已识别人物。 |
| After checking the list, we made labels. | 检查名单后我们制作标签。 | 逻辑主语 we 执行两项行为。 |
| If the studio is unavailable, we’ll use the library. | 工作室不可用时改用图书室。 | 开放未来条件常用现在式与未来结果。 |
| Please tell me where we should put the tools. | 请告诉我工具应放哪里。 | 嵌入问题不沿用独立疑问倒装。 |
| We tested the steps. The results suggest an improvement. | 测试了步骤，结果提示改善。 | 过去记录与当前谨慎评价有不同任务。 |

### 典型错误与修正

下面的错误均按括号或情境中的本意判断，不能只比较字面形式。

| 错误或不合情境的表达 | 修正 | 错在哪里 |
| --- | --- | --- |
| 无需带杂志→You mustn’t bring magazines. | You don’t have to bring magazines. | 原意可选，不是禁止。 |
| If the studio will unavailable, we use the library. | If the studio is unavailable, we will use the library. | be 谓语不完整，开放未来条件与结果需合理组织。 |
| Having checked the list, the labels were prepared.（本意我们查后准备） | Having checked the list, we prepared the labels. | 将非谓语执行者恢复到 we。 |
| Please tell me where should we put the tools. | Please tell me where we should put the tools. | 嵌入问题用陈述语序。 |

### 边界与使用选择

翻译和改写可能有多种自然答案，核对看信息和结构，不按参考文字一致率。词句变复杂并不自动提高质量；拆句要保留限定、条件和时间关系。允许自带不等于禁止自带，主被动也不能掩盖执行者。独立写作属于学生或教师按标准核对，工作台不声称已自动理解作文或获得官方机构认证。课程参考来源与原创教材内容的身份应分清。

### 学完后怎样检查自己

换一种活动，先写五项信息清单，再独立完成 80—120 词通知或反思。保存初稿，修订至少三处实际问题或表达改进并解释，最后请新读者复述任务事实。隔一天不看旧稿以新地点与规则再写，比较是否仍保持必要性、指代和逻辑。若失败，按具体问题回第 26、31、33—36 或 40 课，而非从头背整本。

### 本课参考与延伸

以下官方资料用于核验规则与使用边界；本课讲解、例句和题目由工作台原创编写。

- [British Council：Modals — permission and obligation](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-permission-obligation)：不必与禁止的意义区别，改写通知时保留义务与许可强度。
- [British Council：Conditionals — zero, first and second](https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second)：现实未来条件中的现在形式与结果表达；改写时保留条件和参照。
- [British Council：A report on a student meeting](https://learnenglish.britishcouncil.org/free-resources/writing/b1/report-student-meeting)：按读者和目的安排信息、用清楚的依据支持报告；本课练习通知与项目反思。`,practice:[{id:`gc48-p1`,prompt:`把“无需买新材料”译成 You mustn’t buy new materials 是否保义？修正。`,reference:`不保义，应 You don’t have to buy new materials.`,explanation:`mustn’t 是禁止，don’t have to 为非必要。`,criteria:[`非必要意思`,`正确结构`]},{id:`gc48-p2`,prompt:`开放未来条件：修正 If the room will not ready, we use the hall.。`,reference:`If the room is not ready, we will use the hall.`,explanation:`条件从句需 is not ready，未来结果用 will use。`,criteria:[`is not ready`,`开放条件现在式`,`未来结果`]},{id:`gc48-p3`,prompt:`我们检查后准备材料，修复 After checking the list, the materials were prepared.。`,reference:`After checking the list, we prepared the materials.`,explanation:`明示 we 同时执行检查和准备；也可改成完整 after 从句。`,criteria:[`执行者 we`,`时序`,`完整主句`]},{id:`gc48-p4`,prompt:`将 Where should we put the tools?嵌入 Please tell me。`,reference:`Please tell me where we should put the tools.`,explanation:`外层请求已经构成主句，内层内容用陈述语序。`,criteria:[`where we should put`,`完整请求`]},{id:`gc48-p5`,prompt:`The students who registered…加双逗号是否总不改变意义？`,reference:`可能改变范围：原句筛选已登记学生，逗号式给已识别的一组学生补充登记事实。`,explanation:`不加逗号的关系从句用登记情况筛选学生；加逗号后把这一事实作为对已识别人群的补充，可能改变通知对象范围，不能只为句子好看添加逗号。`,criteria:[`两范围区别`,`不随意保义`]},{id:`gc48-p6`,prompt:`用两短句改写 Although it was windy, the group continued，保留让步。`,reference:`It was windy. However, the group continued.`,explanation:`允许其他自然让步衔接，不能仅拆掉 although 丢关系。`,criteria:[`两句完整`,`让步保留`]},{id:`gc48-p7`,prompt:`修订 We tested it and they liked it（资料：五位同学试用一张新卡并喜欢），使所指清楚。`,reference:`Five classmates tested the new card and liked it.`,explanation:`明确人数与对象；同一组行动可合理共享主语。`,criteria:[`five classmates`,`new card`,`it 可恢复`]},{id:`gc48-p8`,prompt:`写活动两句：下周四用工作室；若不可用改图书室；解释一处时间选择。`,reference:`We will use the studio next Thursday. If it is unavailable, we will use the library. 条件从句现在式表达开放未来条件。`,explanation:`未来表达可按计划视角替换，但条件和结果关系须正确。`,criteria:[`时间地点`,`开放条件`,`理由具体`]}],verification:[{id:`gc48-v1`,prompt:`“允许带旧材料但不要求”是禁止还是非必要？写一句英语。`,reference:`非必要：You don’t have to bring old materials.`,explanation:`允许与无需可以并存，禁止不能替代原规则。`,criteria:[`非必要`,`完整表达`],skill:`meaning`,critical:!1},{id:`gc48-v2`,prompt:`修复嵌入询问：Do you know where are the spare tools?。`,reference:`Do you know where the spare tools are?`,explanation:`主语在内层 are 前，外层 Do you know 保持疑问结构。`,criteria:[`内层陈述序`,`外层问句完整`],skill:`transformation`,critical:!0},{id:`gc48-v3`,prompt:`本意志愿者查票再打开门：Having checked the tickets, the door was opened.改清执行者。`,reference:`Having checked the tickets, the volunteers opened the door.`,explanation:`主句主语需能执行分词行为，非 door。`,criteria:[`volunteers 执行者`,`先行检查`,`主句完整`],skill:`transformation`,critical:!0},{id:`gc48-v4`,prompt:`把 Ari 只邀请登记的同学改成“邀请全部同学，补充他们都登记了”，是否是保义改写？`,reference:`不是，参加者范围发生变化。`,explanation:`语法可成立不等于事实范围保持。`,criteria:[`指出范围变化`,`区分保义与正确语法`],skill:`meaning`,critical:!1},{id:`gc48-v5`,prompt:`新情境写 4—5 句科学展示通知：下周二实验室、学生可带笔记但无需、房间不可用则换大厅、嵌入询问样品放哪里。`,reference:`We will hold a science display in the lab next Tuesday. Students can bring notes, but they don’t have to. If the lab is unavailable, we will use the hall. Could you tell me where the samples should be placed?`,explanation:`可拆句或换自然未来表达，四项行动信息都应可恢复。`,criteria:[`未来时间地点`,`非必要规则`,`开放条件`,`嵌入陈述序`,`完整表达`],skill:`expression`,critical:!0},{id:`gc48-v6`,prompt:`写 60—80 词新项目反思：过去过程、一个识别从句、清楚代词和当前收获；指出一条具体修订。`,reference:`Last week, our team made a safety guide. The steps that we had written were unclear, so we tested them with two classmates. We then added pictures and named the tools in each step. Both classmates completed the revised task without asking for help. We have now shared the guide with another group. This experience has taught us to check whether instructions can be followed. 修订示例：将 it 改成 the guide 以明确所指。`,explanation:`英语参考为 68 词，中文理由不计字数；不同真实项目可，必须提供具体修订依据。`,criteria:[`60—80 词`,`过去主线`,`识别从句完整`,`指代清楚`,`当前认识`,`修订理由具体`],skill:`expression`,critical:!0}],review:[{id:`gc48-r1`,prompt:`一天后新情境：无需带画笔，询问画纸放哪里。写规则与嵌入询问。`,reference:`You don’t have to bring brushes. Could you tell me where the paper should be placed?`,explanation:`新词不改变非必要与嵌入语序规则。`,criteria:[`非必要结构`,`嵌入陈述序`]},{id:`gc48-r2`,prompt:`将 The pupils who booked a place can join 改成两句，保留仅已预订者的范围。`,reference:`Some pupils booked a place. Those pupils can join.`,explanation:`不能拆成 All pupils can join；所指与限制必须明确。`,criteria:[`已预订范围`,`回指明确`]},{id:`gc48-r3`,prompt:`一周后写 3 句新通知，含未来安排、条件和非必要规则；给一个修订理由。`,reference:`We will meet in Room Four on Monday. If it is busy, we will use the hall. You don’t have to bring a laptop. 原错 mustn’t 改 don’t have to 以恢复非必要。`,explanation:`不看旧情境仍可准确表达行动安排与规则。`,criteria:[`未来安排`,`开放条件`,`非必要`,`具体理由`]}],task:[{id:`gc48-task1`,prompt:`独立毕业任务：选一种新活动写 80—120 词通知，或选真实项目写 80—120 词反思。通知含时间地点、参加者、行动要求、可选规则、条件安排与询问；反思含问题、行动、观察结果、当前认识与证据限制。提交初稿、修订稿、三条具体修改理由。`,reference:`Our class is going to hold a poster workshop in the art studio next Wednesday afternoon. Students who have registered will work in small groups. Please bring an old magazine if you have one, but you don’t have to buy anything. We will provide paper and glue. If the studio is unavailable, we will use the library. After checking the materials, we will prepare labels for each table. Could you tell me where the spare tools should be placed? We hope everyone will leave with clear instructions and a poster to share.`,explanation:`参考通知为 93 词，学生须另外保留自己的初稿和三条修订理由；项目反思允许不同组织。按信息、执行者、时间、规则、指代与结构核对，不按复杂句数量或参考一致率。`,criteria:[`80—120 词与文体信息齐全`,`行动可执行或反思有证据限制`,`主从句完整`,`时间与规则准确`,`逻辑主语和指代清楚`,`初稿修订稿俱全`,`三条修改理由可定位`]}],sources:[{title:`British Council：Modals — permission and obligation`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/modals-permission-obligation`,supports:`不必与禁止的意义区别，改写通知时保留义务与许可强度`,accessed:`2026-10-03`,method:`官方页面正文`},{title:`British Council：Conditionals — zero, first and second`,url:`https://learnenglish.britishcouncil.org/free-resources/grammar/b1-b2/conditionals-zero-first-second`,supports:`现实未来条件中的现在形式与结果表达；改写时保留条件和参照`,accessed:`2026-10-03`,method:`官方搜索返回的正文摘录`},{title:`British Council：A report on a student meeting`,url:`https://learnenglish.britishcouncil.org/free-resources/writing/b1/report-student-meeting`,supports:`按读者和目的安排信息、用清楚的依据支持报告；本课练习通知与项目反思`,accessed:`2026-10-03`,method:`官方页面正文`}],revision:`official-reference-2026-10-03`,title:`翻译、改写与短文写作`,module:`阅读与表达应用`,moduleOrder:8,track:`integrated`}],ai=[{number:1,title:`主语与谓语：完整陈述`,module:`形成完整表达`,status:`ready`},{number:2,title:`主格代词与 be 肯定句`,module:`形成完整表达`,status:`ready`},{number:3,title:`be 否定与一般疑问`,module:`形成完整表达`,status:`ready`},{number:4,title:`一般现在时肯定句与第三人称单数`,module:`形成完整表达`,status:`ready`},{number:5,title:`do/does 否定与提问`,module:`形成完整表达`,status:`ready`},{number:6,title:`be 与 do/does 综合辨析`,module:`形成完整表达`,status:`ready`},{number:7,title:`可数与不可数名词、数量表达`,module:`补全名词与句型`,status:`ready`,subunits:[{code:`7A`,title:`可数性与单位`,objective:`用 a bottle of water 等单位表达不可数内容`},{code:`7B`,title:`数量词对比`,objective:`按可数性与意义选择 some/any、many/much、few/a few、little/a little`}]},{number:8,title:`冠词与零冠词`,module:`补全名词与句型`,status:`ready`},{number:9,title:`宾格代词、物主表达与指代`,module:`补全名词与句型`,status:`ready`},{number:10,title:`宾语、表语与五种基本句型`,module:`补全名词与句型`,status:`ready`,subunits:[{code:`10A`,title:`五种基本句型`,objective:`按动词要求补足宾语和补语`},{code:`10B`,title:`其他系动词`,objective:`区分 look/seem/become 等连接性质的用法与实义动词用法`}]},{number:11,title:`特殊疑问句与主语提问`,module:`补全名词与句型`,status:`ready`},{number:12,title:`there be、have 与存在表达`,module:`补全名词与句型`,status:`ready`},{number:13,title:`祈使句与请求`,module:`补全名词与句型`,status:`ready`},{number:14,title:`一般过去时与 was/were`,module:`时间与动作状态`,status:`ready`},{number:15,title:`did 否定与疑问`,module:`时间与动作状态`,status:`ready`},{number:16,title:`现在进行时`,module:`时间与动作状态`,status:`ready`},{number:17,title:`一般现在与现在进行的对比`,module:`时间与动作状态`,status:`ready`},{number:18,title:`will 与 be going to`,module:`时间与动作状态`,status:`ready`},{number:19,title:`过去进行与一般过去`,module:`时间与动作状态`,status:`ready`},{number:20,title:`现在完成及完成进行`,module:`时间与动作状态`,status:`ready`,subunits:[{code:`20A`,title:`经验与当前结果`,objective:`解释 have/has done 与当前情境的联系`},{code:`20B`,title:`持续至今`,objective:`用 for/since 表达延续并判断哪些动词适合`},{code:`20C`,title:`现在完成进行及对比`,objective:`区分 have been doing 与 have done 的过程、持续与结果焦点`}]},{number:21,title:`现在完成与一般过去`,module:`时间与动作状态`,status:`ready`},{number:22,title:`过去完成与未来参照`,module:`时间与动作状态`,status:`ready`,subunits:[{code:`22A`,title:`过去参照与补叙`,objective:`区分过去主线、更早事件与先行持续活动`},{code:`22B`,title:`未来参照扩展`,objective:`比较will be doing、will have done及到未来点的持续`},{code:`22C`,title:`时间线综合表达`,objective:`用参照点核对一段多时态叙事`}]},{number:23,title:`形容词、副词与频率位置`,module:`修饰、态度与语态`,status:`ready`,subunits:[{code:`23A`,title:`形容词与副词`,objective:`按修饰对象选择形式`},{code:`23B`,title:`频率副词位置`,objective:`在普通实义动词前、be 后放置 usually/never，比较时间词块的位置`}]},{number:24,title:`比较级、最高级与同级比较`,module:`修饰、态度与语态`,status:`ready`},{number:25,title:`时间、地点与方向介词`,module:`修饰、态度与语态`,status:`ready`},{number:26,title:`情态动词`,module:`修饰、态度与语态`,status:`ready`,subunits:[{code:`26A`,title:`能力与许可`,objective:`在情境中使用 can/could 并区分能力与请求`},{code:`26B`,title:`建议与义务`,objective:`比较 should、must、have to 的意义`},{code:`26C`,title:`禁止与不必`,objective:`区分 mustn’t 与 needn’t/don’t have to`},{code:`26D`,title:`可能性与推测`,objective:`按证据选择 may/might/must/can’t，避免混淆许可`}]},{number:27,title:`被动语态与语态选择`,module:`修饰、态度与语态`,status:`ready`},{number:28,title:`主谓一致`,module:`修饰、态度与语态`,status:`ready`},{number:29,title:`并列连接与完整分句`,module:`从句与逻辑关系`,status:`ready`},{number:30,title:`状语从句与逻辑关系`,module:`从句与逻辑关系`,status:`ready`,subunits:[{code:`30A`,title:`时间`,objective:`正确连接先后关系并使用将来时间从句`},{code:`30B`,title:`原因`,objective:`区分 because 从句与 because of 词块`},{code:`30C`,title:`目的与结果`,objective:`区分 so that、so…that 与 too…to 的表达`},{code:`30D`,title:`让步`,objective:`用 although/even though 表达让步，不重复添加 but`}]},{number:31,title:`真实条件句`,module:`从句与逻辑关系`,status:`ready`},{number:32,title:`非真实条件与 wish`,module:`从句与逻辑关系`,status:`ready`},{number:33,title:`定语从句与成分缺口`,module:`从句与逻辑关系`,status:`ready`},{number:34,title:`whose/where/when/why`,module:`从句与逻辑关系`,status:`ready`},{number:35,title:`非限制性定语从句`,module:`从句与逻辑关系`,status:`ready`},{number:36,title:`名词性从句`,module:`从句与逻辑关系`,status:`ready`,subunits:[{code:`36A`,title:`宾语与嵌入问句`,objective:`选择 that/whether/if 并使用陈述语序`},{code:`36B`,title:`主语与表语从句`,objective:`识别从句在主句的位置及 it 形式主语`},{code:`36C`,title:`that 与 what`,objective:`判断从句是否缺少名词性成分`},{code:`36D`,title:`同位语从句`,objective:`解释名词的内容并区别定语从句的修饰关系`}]},{number:37,title:`不定式与原形补足语`,module:`非谓语与句子压缩`,status:`ready`},{number:38,title:`动名词及 to do/doing 对比`,module:`非谓语与句子压缩`,status:`ready`},{number:39,title:`分词定语与宾语补足语`,module:`非谓语与句子压缩`,status:`ready`},{number:40,title:`分词状语与逻辑主语`,module:`非谓语与句子压缩`,status:`ready`},{number:41,title:`直接与间接引语`,module:`进阶表达（选学）`,status:`ready`},{number:42,title:`倒装与信息焦点`,module:`进阶表达（选学）`,status:`ready`},{number:43,title:`强调结构`,module:`进阶表达（选学）`,status:`ready`},{number:44,title:`省略、替代与衔接`,module:`进阶表达（选学）`,status:`ready`},{number:45,title:`情态动词完成形式`,module:`进阶表达（选学）`,status:`ready`},{number:46,title:`长句分层理解`,module:`阅读与表达应用`,status:`ready`},{number:47,title:`段落时态、指代与逻辑`,module:`阅读与表达应用`,status:`ready`},{number:48,title:`翻译、改写与短文写作`,module:`阅读与表达应用`,status:`ready`}],oi=[[`词与词性`,`认识单词与词性`,`词性描述单词的类别；句子成分描述它在句子中做什么。`,`Birds fly.`,`鸟会飞。`,`Birds 是名词，fly 是动词。`,`She reads a book.`,`她读一本书。`,`reads 是动词；book 是名词。`,`The small dog runs quickly.`,`小狗跑得很快。`,`small 修饰名词；quickly 修饰动词。`,`small 的词性是什么？`,`形容词`,`名词`,`quickly 的词性是什么？`,`副词`,`代词`,`reads 的词性是什么？`,`动词`,`介词`],[`名词与指代`,`名词与指代`,`可数名词可以计数；不可数名词通常用单位表达数量。代词的指代要明确。`,`I have two books.`,`我有两本书。`,`books 是可数名词复数。`,`We need some water.`,`我们需要一些水。`,`water 在此是不可数名词。`,`Tom has a bike. He rides it every day.`,`汤姆有辆自行车。他每天骑它。`,`He 指 Tom；it 指 bike。`,`two 后面应使用什么？`,`可数名词复数`,`可数名词单数`,`water 在例句中是什么？`,`不可数名词`,`复数名词`,`He 指谁？`,`Tom`,`bike`],[`寻找句子成分`,`句子成分`,`先找谓语，再问谁做这件事，最后找动作对象。修饰语不会改变主干。`,`The students read books.`,`学生们读书。`,`The students 主语；read 谓语；books 宾语。`,`The room is quiet.`,`房间很安静。`,`quiet 是表语，说明主语的状态。`,`My friend studies in the library.`,`我的朋友在图书馆学习。`,`in the library 是地点状语。`,`read books 中 books 是什么？`,`宾语`,`主语`,`quiet 在例句中是什么？`,`表语`,`宾语`,`in the library 是什么？`,`状语`,`谓语`],[`五种基本句型`,`基本句型`,`根据动词是否需要宾语、补语来识别句型。系动词连接主语和表语。`,`Birds sing.`,`鸟儿歌唱。`,`主语＋谓语。`,`She is a teacher.`,`她是老师。`,`主语＋系动词＋表语。`,`He gave me a book.`,`他给我一本书。`,`主语＋谓语＋间接宾语＋直接宾语。`,`Birds sing 是什么句型？`,`主谓`,`主谓宾`,`a teacher 是什么？`,`表语`,`直接宾语`,`me 在第三句中是什么？`,`间接宾语`,`主语`],[`动词与疑问句`,`动词与句子变化`,`一般现在时用 do 或 does 帮助构成疑问和否定；助动词后用动词原形。`,`She likes music.`,`她喜欢音乐。`,`第三人称单数用 likes。`,`Does she like music?`,`她喜欢音乐吗？`,`does 后用原形 like。`,`They do not work here.`,`他们不在这里工作。`,`do not 后用 work。`,`Does she 后接什么？`,`like`,`likes`,`She 的现在时谓语用什么？`,`likes`,`like`,`They 的否定句用什么？`,`do not`,`does not`],[`时态与时间线`,`基础时态`,`时态同时表达时间和动作的状态。习惯用一般现在，正在发生用进行时，过去事实用一般过去。`,`I walk to school every day.`,`我每天走路上学。`,`习惯：一般现在时。`,`She is reading now.`,`她现在正在读书。`,`此刻进行：be＋doing。`,`We visited Beijing last year.`,`我们去年去了北京。`,`明确过去时间：一般过去时。`,`every day 表示什么？`,`习惯动作`,`此刻动作`,`is reading 是什么时态？`,`现在进行时`,`一般过去时`,`last year 对应什么时态？`,`一般过去时`,`现在进行时`],[`被动与情态`,`语态与情态`,`被动语态突出动作的承受者，基本形式为 be＋过去分词。情态动词后接动词原形。`,`The door is opened every morning.`,`门每天早上被打开。`,`is opened 是被动形式。`,`You can swim here.`,`你可以在这里游泳。`,`can 后接原形 swim。`,`The letter was written yesterday.`,`信是昨天写的。`,`was written 表示过去被动。`,`被动语态基本结构是什么？`,`be＋过去分词`,`be＋动词原形`,`can 后用什么？`,`动词原形`,`过去分词`,`was written 表示什么？`,`过去被动`,`现在主动`],[`修饰与比较`,`修饰与比较`,`形容词通常修饰名词，副词可以修饰动词；比较两者用比较级。`,`This is a useful book.`,`这是一本有用的书。`,`useful 修饰 book。`,`He speaks slowly.`,`他说话很慢。`,`slowly 修饰 speaks。`,`This room is larger than that one.`,`这个房间比那个大。`,`larger 是 large 的比较级。`,`useful 修饰什么？`,`book`,`is`,`slowly 修饰什么？`,`speaks`,`He`,`两者比较应使用什么？`,`比较级`,`最高级`],[`连接与逻辑`,`连接句子`,`连接词表示分句的关系。because 引出原因，although 引出让步；并列句可以由 and 或 but 连接。`,`It was cold, but we went out.`,`天气冷，但我们出去了。`,`but 表示转折。`,`I stayed home because it rained.`,`因为下雨，我待在家里。`,`because it rained 是原因状语从句。`,`Although she was tired, she kept working.`,`虽然她很累，她仍继续工作。`,`although 表示让步。`,`but 表示什么关系？`,`转折`,`原因`,`because 引出什么？`,`原因`,`结果`,`although 表示什么？`,`让步`,`目的`],[`找主干与综合理解`,`基础综合训练`,`暂时去掉修饰语，找到主语、谓语和必要的宾语或表语，再把修饰信息放回去。`,`The boy in a blue coat reads a book.`,`穿蓝外套的男孩读一本书。`,`主干 The boy reads a book。`,`The flowers near the window look beautiful.`,`窗边的花看起来很美。`,`主干 The flowers look beautiful。`,`My sister, a doctor, works in London.`,`我的姐姐是一位医生，在伦敦工作。`,`a doctor 为同位语；主干 My sister works。`,`第一句的谓语是什么？`,`reads`,`coat`,`第二句的表语是什么？`,`beautiful`,`window`,`第三句的主语是什么？`,`My sister`,`a doctor`],[`从句与关系词`,`高级语法`,`定语从句修饰名词。关系词在从句中承担成分；先找先行词再识别关系。`,`The book that I bought is useful.`,`我买的书很有用。`,`that I bought 修饰 book。`,`I know the girl who won the race.`,`我认识赢得比赛的女孩。`,`who 是从句主语。`,`This is the place where we met.`,`这是我们见面的地方。`,`where 在从句中作地点状语。`,`第一句先行词是什么？`,`book`,`useful`,`who 在第二句中是什么？`,`从句主语`,`主句宾语`,`where 表示什么？`,`地点`,`时间`],[`非谓语动词入门`,`高级语法`,`非谓语不独立承担句子的谓语。to do、doing 和过去分词的作用需要结合位置判断。`,`I want to learn English.`,`我想学英语。`,`to learn 作 want 的宾语。`,`Reading is useful.`,`阅读很有用。`,`Reading 是动名词作主语。`,`The broken window needs repair.`,`破损的窗户需要修理。`,`broken 是过去分词作定语。`,`to learn 在第一句中是什么？`,`宾语`,`谓语`,`Reading 在第二句中是什么？`,`主语`,`状语`,`broken 修饰什么？`,`window`,`repair`]].map((e,t)=>({id:`grammar-${t+1}`,targetId:`grammar-${t+1}`,title:e[0],subtitle:e[1],kind:`grammar`,source:`工作台原创课程 · 初版`,view:`grammar`,module:e[1],moduleOrder:t+1,order:t+1,track:t<10?`basic`:`advanced`,prerequisites:t?[`grammar-${t}`]:[],explanation:e[2],takeaway:e[2],examples:[0,1,2].map(t=>({en:e[3+t*3],zh:e[4+t*3],structure:e[5+t*3]})),questions:[0,1,2].map(n=>({id:`g${t+1}-q${n+1}`,prompt:e[12+n*3],choices:[e[13+n*3],e[14+n*3]],answer:0,explanation:e[2]})),practice:[],verificationSize:3})),si=ii.map(e=>{let t=`grammar-course-${String(e.number).padStart(2,`0`)}`,n=e.verification.map((t,n)=>({...t,format:`text`,choices:[],answer:-1,skill:t.skill??(n>=4?`expression`:e.number===1?`structure`:e.number===2||e.number===4?`agreement`:e.number===6&&n===3?`meaning`:`transformation`),critical:t.critical??(n>=1&&!(e.number===1&&n===2))}));return{id:t,targetId:t,title:e.title,subtitle:`第 ${String(e.number).padStart(2,`0`)} 课 · 8 道练习 · 6 道验收`,kind:`grammar`,source:`工作台原创课程 · 官方资料参照修订版`,view:`grammar`,module:e.module,moduleOrder:e.moduleOrder,order:e.number,track:e.track,prerequisites:e.prerequisites.map(e=>`grammar-course-${String(e).padStart(2,`0`)}`),explanation:e.summary,takeaway:e.summary,examples:[],questions:n,practice:[],verificationSize:6,course:{revision:e.revision,sources:e.sources,number:e.number,module:e.module,objectives:e.objectives,body:e.body,practice:e.practice,review:e.review,task:e.task}}});function ci(e){let t=si.findIndex(t=>t.id===e);if(!(t<0))return si.slice(t+1).find(e=>si[t].track===`basic`?e.track!==`advanced`:!0)}function li(e){return[...si,...oi].find(t=>t.id===e)}function ui(e,t,n,r,i){let a=[...new Set(r)].filter(e=>e.trim()&&e!==n).slice(0,3);if(a.length<3)return null;let o=[n,...a],s=[...e].reduce((e,t)=>e*31+t.charCodeAt(0)>>>0,17);for(let e=o.length-1;e>0;e--){s=Math.imul(s,1664525)+1013904223>>>0;let t=s%(e+1);[o[e],o[t]]=[o[t],o[e]]}return{id:e,format:`choice`,prompt:t,...i?{context:i}:{},choices:o,answer:o.indexOf(n),explanation:n}}function di(e){return{...e,reviewMethod:`spelling`,verificationSize:1,questions:[{id:`${e.id}-spelling`,format:`input`,choices:[],answer:-1,prompt:`根据释义，写出你学过的英文单词：\n\n${e.subtitle}`,reference:e.title,acceptedAnswers:[e.title],explanation:`这是可选的拼写加练，只核对当前词条的拼写，不替代词义与语境理解。`}]}}function fi(e,t,n={}){if(e.kind===`word`){let t=n.reviewIndex??0,r=[...new Set(n.distractors??[])].filter(t=>t!==e.subtitle),i=r.length?t*3%r.length:0,a=ui(`${e.id}-meaning-${t}`,`理解 ${e.title}：选择与词义相符的含义。`,e.subtitle,[...r.slice(i),...r.slice(0,i)]),o=[...e.questions.filter(e=>e.context).map(e=>({en:e.context,zh:e.explanation})),...e.examples],s=o[t%Math.max(1,o.length)],c=[...new Set(n.contextDistractors??[])].filter(e=>e!==s?.zh),l=c.length?t*3%c.length:0,u=[a,s?ui(`${e.id}-context-${t}`,`结合语境，这句话表达的意思更接近哪一项？`,s.zh,[...c.slice(l),...c.slice(0,l)],s.en):null].filter(e=>e!==null);return{...e,verificationSize:u.length,questions:u}}return t===`review`&&e.course?{...e,verificationSize:e.course.review.length,questions:e.course.review.map(e=>({...e,prompt:e.prompt.replace(/^(?:一天后|三天后|一周后)[：:、，\s]*/,``),format:`text`,choices:[],answer:-1,skill:e.skill??`expression`,critical:e.critical??!0}))}:e}function pi(e,t,n){let r=e.senses[0],i=e.examples.slice(1,3);return{id:r?.id??e.id,targetId:e.id,title:e.word,phonetic:e.phonetic,subtitle:e.senses.map(e=>`${e.pos} ${e.meaning}`).join(`；`),kind:`word`,level:t,...n?{bookId:n}:{},source:e.sourceId,view:`words`,explanation:`结合例句理解词义；本词来自现有词书。例句由来源词书提供，教学配套仍在完善。`,examples:e.examples.slice(0,1),extra:e.phrases.slice(0,8).map(e=>`${e.en} · ${e.zh}`),questions:i.map((t,n)=>({id:`${e.id}-q${n}`,prompt:`在这个语境里，${e.word} 表达什么含义？`,context:t.en,choices:[r?.meaning??``,`拒绝；反对`,`地点；位置`,`昨天；过去`],answer:0,explanation:t.zh})),verificationSize:2}}function mi(e,t=Date.now()){let n={due:[],laterToday:[],tomorrow:[],overdue:[]},r=Kr(t),i=Kr(Nr(t)),a=Object.entries(e.cards).filter(([t,n])=>!n.paused&&e.marks[t]&&(!e.marks[t].ref.level||e.marks[t].ref.level===e.settings.level)).sort((e,t)=>e[1].due-t[1].due);for(let[o,s]of a){let a=e.marks[o].ref,c=Kr(s.due);s.due<=t?(n.due.push(a),c<r&&n.overdue.push(a)):c===r?n.laterToday.push(a):c===i&&n.tomorrow.push(a),c!==i&&s.nextDayReviewAt!==void 0&&Kr(s.nextDayReviewAt)===i&&n.tomorrow.push(a)}let o=t=>Kr(e.cards[t.id].due)===i?e.cards[t.id].due:e.cards[t.id].nextDayReviewAt;return n.tomorrow.sort((e,t)=>o(e)-o(t)),n}function hi(e,t=Date.now()){let n=qr(e,t),r=mi(e,t).overdue.length>=Math.max(10,e.settings.dailyNew*2),i=r?0:e.settings.dailyNew;return{learned:n,remaining:Math.max(0,i-n),limit:i,backlog:r}}function gi(e,t){let n=e.attempts.filter(e=>e.itemId===t&&!Hr(e)),r=n.at(-1),i=n.map(e=>e.at),a=e.marks[t]?.learnedAt;a!==void 0&&i.push(a);let o=i.length?Kr(Math.min(...i)):void 0,s=n.findLast(e=>!e.passed),c=s?Kr(s.at):o,l=n.filter(e=>e.passed&&Vr(e)&&c!==void 0&&Kr(e.at)>c),u=new Set(l.map(e=>Kr(e.at))).size;return{objectiveDays:u,selfRounds:n.filter(e=>!Vr(e)).length,stage:r&&!r.passed?`needs-review`:u>=3&&l.some(e=>e.mode===`review`)?`stable`:u>0?`building`:`unverified`}}function _i({books:e,selectedId:t,busy:n,onSelect:r}){let i=(0,l.useRef)(null),a=e.find(e=>e.id===t);return(0,I.jsx)(`section`,{className:`wordbook-shelf taste-wordbook-shelf`,"aria-label":`选择单词书`,children:(0,I.jsxs)(`details`,{className:`wordbook-switcher`,ref:i,"aria-busy":n,children:[(0,I.jsxs)(`summary`,{onClick:e=>{n&&e.preventDefault()},children:[(0,I.jsxs)(`div`,{className:`wordbook-current`,children:[(0,I.jsxs)(`span`,{children:[`当前词书`,a?` · ${a.level}`:``]}),(0,I.jsx)(`strong`,{children:a?.title??`选择一本单词书`}),(0,I.jsx)(`small`,{children:a?`${a.count.toLocaleString()} 词 · ${a.orderLabel}`:`${e.length} 本可选词书`})]}),(0,I.jsxs)(`span`,{className:`wordbook-toggle`,children:[n?`正在切换…`:`换词书`,(0,I.jsx)(ie,{size:16,"aria-hidden":`true`})]})]}),(0,I.jsx)(`div`,{className:`wordbook-options`,children:e.map(e=>(0,I.jsxs)(`button`,{className:`wordbook-option${e.id===t?` is-selected`:``}`,"aria-pressed":e.id===t,disabled:n,onClick:()=>{r(e),i.current?.removeAttribute(`open`)},children:[(0,I.jsxs)(`span`,{className:`wordbook-category`,children:[(0,I.jsx)(ne,{size:16,"aria-hidden":`true`}),e.category,(0,I.jsx)(`span`,{className:`wordbook-check`,children:e.id===t&&(0,I.jsx)(re,{size:16,"aria-hidden":`true`})})]}),(0,I.jsx)(`strong`,{children:e.title}),(0,I.jsx)(`span`,{className:`wordbook-description`,children:e.description}),(0,I.jsxs)(`span`,{className:`wordbook-meta`,children:[(0,I.jsxs)(`b`,{children:[e.count.toLocaleString(),` 词`]}),(0,I.jsx)(`span`,{children:e.id===t?`当前学习`:`选择这本`})]})]},e.id))}),(0,I.jsx)(`p`,{className:`wordbook-switcher-note`,children:e.length?`每个目标分别记住所选词书；相同词义沿用已有学习记录。`:`正在读取可选词书。`})]})})}function vi({text:e}){let[t,n]=(0,l.useState)(!1),[r,i]=(0,l.useState)(``),a=(0,l.useRef)(null);(0,l.useEffect)(()=>()=>{a.current&&(a.current.onstart=null,a.current.onend=null,a.current.onerror=null,window.speechSynthesis?.cancel())},[e]);function o(){if(i(``),!(`speechSynthesis`in window)||!(`SpeechSynthesisUtterance`in window)){i(`当前浏览器不支持朗读，请使用 Edge、Chrome 或 Safari。`);return}let t=window.speechSynthesis;t.cancel();let r=new SpeechSynthesisUtterance(e),o=t.getVoices().filter(e=>/^en[-_]/i.test(e.lang)),s=o.find(e=>e.localService)??o[0];s&&(r.voice=s),r.lang=s?.lang??`en-US`,r.rate=.85,r.onstart=()=>n(!0),r.onend=()=>n(!1),r.onerror=e=>{n(!1),e.error!==`canceled`&&e.error!==`interrupted`&&i(`朗读未能播放，请检查设备音量和浏览器的英语语音支持，然后重试。`)},a.current=r,t.resume(),t.speak(r)}return(0,I.jsxs)(`span`,{className:`pronunciation-control`,children:[(0,I.jsx)(`button`,{className:`icon-action pronunciation-button`,onClick:o,"aria-label":`播放 ${e} 的发音`,"aria-pressed":t,title:`听发音`,children:(0,I.jsx)(Se,{size:21,"aria-hidden":`true`})}),r&&(0,I.jsx)(`span`,{className:`pronunciation-error`,role:`status`,children:r})]})}function yi({item:e,onOpen:t,label:n=`内容预览`,compact:r=!1,sourceLabel:i,status:a}){return e?(0,I.jsxs)(`aside`,{className:`reading-preview taste-reading-preview${r?` is-compact`:``}`,"aria-label":n,children:[(0,I.jsxs)(`header`,{className:`preview-heading`,children:[(0,I.jsx)(`h2`,{className:`preview-label`,children:n}),a&&(0,I.jsx)(`span`,{className:`preview-status`,children:a})]}),(0,I.jsx)(`h3`,{className:e.kind===`word`?`preview-word`:`preview-lesson`,lang:e.kind===`word`?`en`:void 0,children:e.title}),e.phonetic&&(0,I.jsxs)(`div`,{className:`phonetic-line`,children:[(0,I.jsx)(`span`,{children:e.phonetic}),(0,I.jsx)(vi,{text:e.title})]}),(0,I.jsx)(`p`,{className:`preview-meaning`,children:e.subtitle}),e.kind===`grammar`&&(0,I.jsx)(`p`,{className:`preview-explanation`,children:e.explanation}),(0,I.jsxs)(`button`,{className:`primary preview-open`,onClick:()=>t(e),children:[e.kind===`grammar`?`开始这一课`:`进入学习`,(0,I.jsx)(M,{size:18})]}),(e.examples.length>0||e.course)&&(0,I.jsx)(`h4`,{className:`preview-content-label`,children:e.course?`学习目标`:`来源例句`}),(0,I.jsx)(`div`,{className:`preview-examples`,children:e.examples.slice(0,r?1:2).map((t,n)=>(0,I.jsxs)(`div`,{className:`reading-example`,children:[(0,I.jsx)(`p`,{lang:`en`,children:t.en}),(0,I.jsx)(`p`,{children:t.zh}),e.kind===`grammar`&&t.structure&&(0,I.jsx)(`small`,{children:t.structure})]},n))}),!e.examples.length&&!e.course&&(0,I.jsx)(`p`,{className:`muted-note preview-no-example`,children:`来源词书暂未提供例句，进入学习后仍可查看完整词义。`}),e.course&&(0,I.jsxs)(`div`,{className:`preview-examples preview-objectives`,children:[(0,I.jsx)(`ul`,{children:e.course.objectives.map(e=>(0,I.jsx)(`li`,{children:e},e))}),(0,I.jsxs)(`p`,{children:[e.course.practice.length,` 道分层练习 · `,e.verificationSize,` 道独立验收 · `,e.course.review.length,` 道延后复习`]})]}),i&&(0,I.jsxs)(`p`,{className:`preview-source`,children:[`来源：`,i]}),e.kind===`grammar`&&(0,I.jsxs)(`div`,{className:`learning-path`,children:[(0,I.jsx)(`h4`,{children:`学习路径`}),(0,I.jsxs)(`ol`,{children:[(0,I.jsx)(`li`,{children:`理解知识`}),(0,I.jsx)(`li`,{children:`分层练习与解析`}),(0,I.jsx)(`li`,{children:`新情境独立验收`}),(0,I.jsx)(`li`,{children:`延后变式复习`})]})]})]}):(0,I.jsxs)(`aside`,{className:`reading-preview empty-preview`,children:[(0,I.jsx)(`h2`,{children:n}),(0,I.jsx)(`p`,{children:`从目录选择一项，查看词义、例句或课程内容。`})]})}function bi(e){let t=[...e.matchAll(/^(#{3,4}) (.+)$/gm)];if(!t.length)return[{id:`section-0`,title:`课程讲解`,body:e}];let n=[],r,i=e.slice(0,t[0].index).trim();i&&n.push({id:`preface`,title:`开始学习`,body:i});for(let i=0;i<t.length;i++){let a=t[i],o=e.slice(a.index+a[0].length,t[i+1]?.index??e.length).trim().replace(/\n---\s*$/,``);a[1]===`###`&&(r=a[2]),o&&n.push({id:`section-${i}`,title:a[2],...a[1]===`####`?{group:r}:{},body:o})}return n}function xi(e){return JSON.stringify(e.map(e=>{let t=2166136261;for(let n of e.body)t=Math.imul(t^n.codePointAt(0),16777619);return[e.id,e.title,(t>>>0).toString(36)]}))}function Si(e){return{version:1,signature:e,stage:`reading`,section:0,exercise:0,practiceSet:`practice`,readSections:[],questionPositions:{practice:0,task:0,review:0}}}function Ci(e,t){let n={...e,...t,questionPositions:{...e.questionPositions}},r=n.stage===`review`?`review`:n.practiceSet;return t.exercise===void 0?(t.stage||t.practiceSet)&&(n.exercise=n.questionPositions[r]):n.questionPositions[r]=t.exercise,n}function wi(e,t){let n=xi(t),r=Si(n);try{let i=JSON.parse(e??`null`);if(!i||i.version!==1||i.signature!==n||![`reading`,`practice`,`verification`,`review`].includes(i.stage)||!Number.isInteger(i.section)||i.section<0||i.section>=t.length||!Number.isInteger(i.exercise)||i.exercise<0||i.exercise>100||![`practice`,`task`].includes(i.practiceSet)||!Array.isArray(i.readSections))return r;let a={...r.questionPositions};for(let e of[`practice`,`task`,`review`])Number.isInteger(i.questionPositions?.[e])&&i.questionPositions[e]>=0&&i.questionPositions[e]<=100&&(a[e]=i.questionPositions[e]);return{...i,questionPositions:a,readSections:[...new Set(i.readSections.filter(e=>typeof e==`string`&&t.some(t=>t.id===e)))]}}catch{return r}}var Y=()=>({answers:{},revealed:{},checks:{}});function Ti(e){if(typeof window>`u`)return Y();try{let t=JSON.parse(localStorage.getItem(e)??`null`);return!t||!t.answers||!t.revealed||!t.checks||[t.answers,t.revealed,t.checks].some(e=>typeof e!=`object`||Array.isArray(e))||Object.values(t.answers).some(e=>typeof e!=`string`||e.length>2e3)||[...Object.values(t.revealed),...Object.values(t.checks)].some(e=>typeof e!=`boolean`)?Y():t}catch{return Y()}}function Ei({id:e,title:t,description:n,exercises:r,draft:i,onChange:a}){let o=r.filter(e=>i.answers[e.id]?.trim()&&e.criteria.length>0&&e.criteria.every((t,n)=>i.checks[`${e.id}:${n}`])).length;return(0,I.jsxs)(`section`,{className:`course-exercises`,id:e,"aria-labelledby":`${e}-title`,children:[(0,I.jsxs)(`div`,{className:`course-section-heading`,children:[(0,I.jsx)(`h3`,{id:`${e}-title`,children:t}),(0,I.jsxs)(`span`,{children:[o,` / `,r.length,` 题已核对`]})]}),(0,I.jsx)(`p`,{className:`course-section-note`,children:n}),r.map((e,t)=>{let n=i.answers[e.id]??``,r=!!i.revealed[e.id],o=!!n.trim()&&e.criteria.length>0&&e.criteria.every((t,n)=>i.checks[`${e.id}:${n}`]),s=`course-answer-${e.id}`,c=`course-feedback-${e.id}`;return(0,I.jsxs)(`article`,{className:`course-exercise`,children:[(0,I.jsxs)(`div`,{className:`course-exercise-heading`,children:[(0,I.jsxs)(`h4`,{children:[`第 `,t+1,` 题`]}),o&&(0,I.jsxs)(`span`,{children:[(0,I.jsx)(re,{size:15,"aria-hidden":`true`}),`已按标准核对`]})]}),(0,I.jsx)(ni,{source:e.prompt,className:`course-prompt`}),(0,I.jsx)(`label`,{className:`course-answer-label`,htmlFor:s,children:`我的答案`}),(0,I.jsx)(`textarea`,{id:s,rows:3,maxLength:2e3,value:n,spellCheck:!1,autoCapitalize:`sentences`,placeholder:`先独立作答；需要说明原因时，也写下你的判断。`,onChange:t=>{let n={...i.checks};e.criteria.forEach((t,r)=>{n[`${e.id}:${r}`]=!1}),a({...i,answers:{...i.answers,[e.id]:t.target.value},checks:n})}}),(0,I.jsxs)(`div`,{className:`course-answer-actions`,children:[(0,I.jsxs)(`button`,{disabled:!n.trim()&&!r,"aria-expanded":r,"aria-controls":c,onClick:()=>a({...i,revealed:{...i.revealed,[e.id]:!r}}),children:[r?`收起参考与解析`:`查看参考与解析`,(0,I.jsx)(ie,{size:16,"aria-hidden":`true`,className:r?`is-open`:``})]}),!n.trim()&&!r&&(0,I.jsx)(`span`,{children:`作答后可查看参考`})]}),r&&(0,I.jsxs)(`div`,{className:`course-feedback`,id:c,children:[(0,I.jsx)(`h5`,{children:`参考答案`}),(0,I.jsx)(ni,{source:e.reference}),(0,I.jsx)(`h5`,{children:`为什么这样写`}),(0,I.jsx)(ni,{source:e.explanation}),e.criteria.length>0&&(0,I.jsxs)(`fieldset`,{children:[(0,I.jsx)(`legend`,{children:`对照自己的答案，逐项核对`}),e.criteria.map((t,n)=>{let r=`${e.id}:${n}`;return(0,I.jsxs)(`label`,{children:[(0,I.jsx)(`input`,{type:`checkbox`,checked:!!i.checks[r],onChange:e=>a({...i,checks:{...i.checks,[r]:e.target.checked}})}),(0,I.jsx)(`span`,{children:t})]},r)})]}),(0,I.jsx)(`p`,{className:`course-feedback-note`,children:`表达题可以有其他正确写法。核对依据是句意和目标结构，不是与参考逐字相同。`})]})]},e.id)})]})}function Di({item:e,onBack:t}){let n=`workbench-grammar-practice-v1:${e.id}`,[r,i]=(0,l.useState)(()=>Ti(n)),[a,o]=(0,l.useState)(!1),s=e.course;if(!s)return null;let c=e=>{i(e);try{localStorage.setItem(n,JSON.stringify(e)),o(!1)}catch{o(!0)}};return(0,I.jsxs)(`div`,{className:`grammar-course`,children:[(0,I.jsxs)(`section`,{className:`course-objectives`,"aria-labelledby":`course-objectives-title`,children:[(0,I.jsx)(`h3`,{id:`course-objectives-title`,children:`这一课要学会什么`}),(0,I.jsx)(`ul`,{children:s.objectives.map(e=>(0,I.jsx)(`li`,{children:e},e))})]}),(0,I.jsxs)(`nav`,{className:`course-local-nav`,"aria-label":`本课内容`,children:[(0,I.jsx)(`a`,{href:`#course-reading`,onClick:e=>{e.preventDefault(),document.getElementById(`course-reading`)?.scrollIntoView({behavior:`smooth`})},children:`讲解与对照`}),(0,I.jsxs)(`a`,{href:`#course-practice`,onClick:e=>{e.preventDefault(),document.getElementById(`course-practice`)?.scrollIntoView({behavior:`smooth`})},children:[`课堂练习 · `,s.practice.length,` 题`]}),!!s.task?.length&&(0,I.jsx)(`a`,{href:`#course-task`,onClick:e=>{e.preventDefault(),document.getElementById(`course-task`)?.scrollIntoView({behavior:`smooth`})},children:`综合任务`}),!!s.review.length&&(0,I.jsx)(`a`,{href:`#course-review`,onClick:e=>{e.preventDefault(),document.getElementById(`course-review`)?.scrollIntoView({behavior:`smooth`})},children:`延后复习`})]}),(0,I.jsx)(`section`,{id:`course-reading`,"aria-label":`完整课程讲解`,children:(0,I.jsx)(ni,{source:s.body})}),(0,I.jsx)(Ei,{id:`course-practice`,title:`课堂练习`,description:`先写出答案和理由，再查看参考。这里的核对记录用于发现薄弱点；独立验收会换一组材料。`,exercises:s.practice,draft:r,onChange:c}),!!s.task?.length&&(0,I.jsx)(Ei,{id:`course-task`,title:`把语法用在真实任务里`,description:`把前面学到的结构连起来完成任务；核对信息是否准确、句子是否完整。`,exercises:s.task,draft:r,onChange:c}),!!s.review.length&&(0,I.jsx)(Ei,{id:`course-review`,title:`隔一两天，再试一次`,description:`建议离开讲解后，再用这组材料检查。可以先保留草稿，下次回来继续作答。`,exercises:s.review,draft:r,onChange:c}),(0,I.jsxs)(`div`,{className:`course-draft-actions`,children:[(0,I.jsx)(`p`,{role:a?`alert`:`status`,children:a?`草稿暂时无法保存。请先复制答案，避免离开后丢失。`:`练习草稿保存在当前设备的浏览器，返回这一课可以继续。`}),(0,I.jsx)(`button`,{onClick:t,children:`稍后继续`})]})]})}function Oi({onOpen:e}){let t=[...new Set(ai.map(e=>e.module))],n=ai.filter(e=>e.status===`ready`).length;return(0,I.jsxs)(`details`,{className:`course-route`,children:[(0,I.jsxs)(`summary`,{children:[(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:`查看完整学习路线`}),(0,I.jsxs)(`small`,{children:[ai.length,` 课 · `,n,` 课已提供完整内容`]})]}),(0,I.jsx)(ie,{size:18,"aria-hidden":`true`})]}),(0,I.jsx)(`p`,{className:`course-route-note`,children:`48 课均有完整讲解、练习、验收和复习。按知识依赖安排顺序；第 41—45 课为进阶选学，完成第 40 课后可先进入阅读与表达应用。较大知识点分成子单元，学完一段再继续。`}),t.map(t=>(0,I.jsxs)(`section`,{className:`course-route-module`,children:[(0,I.jsx)(`h3`,{children:t}),(0,I.jsx)(`ol`,{children:ai.filter(e=>e.module===t).map(t=>{let n=t.status===`ready`?si.find(e=>e.course?.number===t.number):void 0;return(0,I.jsxs)(`li`,{value:t.number,children:[(0,I.jsxs)(`div`,{className:`course-route-row`,children:[(0,I.jsx)(`span`,{className:`course-route-number`,children:String(t.number).padStart(2,`0`)}),n?(0,I.jsxs)(`button`,{className:`text-link`,onClick:()=>e(n),children:[t.title,(0,I.jsx)(M,{size:15,"aria-hidden":`true`})]}):(0,I.jsx)(`span`,{className:`course-route-title`,children:t.title}),(0,I.jsx)(`span`,{className:`course-route-status`,children:n?`可学习`:`待完善`})]}),!!t.subunits?.length&&(0,I.jsx)(`ul`,{className:`course-subunits`,children:t.subunits.map(e=>(0,I.jsxs)(`li`,{children:[(0,I.jsxs)(`strong`,{children:[e.code,` · `,e.title]}),(0,I.jsx)(`span`,{children:e.objective})]},e.code))})]},t.number)})})]},t))]})}var ki=[...new Set(si.map(e=>e.module))];function Ai({state:e,onOpen:t}){let[n,r]=x(`grammar-course-catalog-v2`,{query:``}),[i,a]=x(`grammar-course-module-v1`,`all`),o=ki.includes(i)?i:`all`,s=n.query.trim().toLowerCase(),c=si.filter(e=>(o===`all`||e.module===o)&&`${e.title} ${e.course?.body??e.explanation}`.toLowerCase().includes(s)),u=e.resume?.view===`grammar`?si.find(t=>t.id===e.resume?.targetId):void 0,d=u??si.find(t=>t.track!==`advanced`&&![`passed`,`self-checked`].includes(Ur(e,t.id)))??si.find(t=>![`passed`,`self-checked`].includes(Ur(e,t.id)))??si[0],f=(0,l.useMemo)(()=>{if(!u?.course||typeof window>`u`)return null;let e=bi(u.course.body);try{return{position:wi(localStorage.getItem(`workbench-grammar-position-v1:${u.id}`),e),sections:e}}catch{return null}},[u]),p=f?f.position.stage===`reading`?`讲解 · 第 ${f.position.section+1} / ${f.sections.length} 节`:f.position.stage===`practice`?`${f.position.practiceSet===`task`?`综合表达`:`课堂练习`} · 第 ${Math.min(f.position.exercise+1,(f.position.practiceSet===`task`?d.course.task?.length:d.course.practice.length)??d.course.practice.length)} 题`:f.position.stage===`verification`?`独立验收`:`巩固复习 · 第 ${Math.min(f.position.exercise+1,d.course.review.length)} 题`:null;function m(){r({query:``}),a(`all`)}return(0,I.jsxs)(`div`,{className:`grammar-course-catalog`,children:[(0,I.jsxs)(`div`,{className:`course-catalog-resume`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h2`,{children:u?`继续上次学习`:`从这里开始`}),(0,I.jsxs)(`p`,{children:[(0,I.jsx)(`strong`,{children:d.title}),(0,I.jsx)(`span`,{children:p??`第 ${String(d.course.number).padStart(2,`0`)} 课 · ${d.module}`})]})]}),(0,I.jsx)(`button`,{className:`primary`,onClick:()=>t(d),children:u?`继续这课`:`开始这课`})]}),(0,I.jsxs)(`div`,{className:`course-catalog-toolbar`,children:[(0,I.jsxs)(`h2`,{children:[`课程目录 · `,si.length,` 课`]}),(0,I.jsxs)(`div`,{className:`course-catalog-controls`,children:[(0,I.jsxs)(`label`,{className:`search`,children:[(0,I.jsx)(ye,{size:18,"aria-hidden":`true`}),(0,I.jsx)(`input`,{"aria-label":`搜索语法课程`,placeholder:`搜索知识点或表达`,value:n.query,onChange:e=>r({query:e.target.value})})]}),(0,I.jsxs)(`label`,{className:`course-module-filter`,children:[(0,I.jsx)(`span`,{children:`学习模块`}),(0,I.jsxs)(`select`,{value:o,onChange:e=>a(e.target.value),children:[(0,I.jsx)(`option`,{value:`all`,children:`全部八个模块`}),ki.map(e=>(0,I.jsx)(`option`,{value:e,children:e},e))]})]})]})]}),(0,I.jsxs)(`p`,{className:`course-filter-count`,role:`status`,children:[`显示 `,c.length,` 课`,o===`all`?``:` · ${o}`,`。核心课程可按课序学习，第 41—45 课为进阶选学。`]}),(0,I.jsx)(Oi,{onOpen:t}),ki.map((n,r)=>{let i=c.filter(e=>e.module===n);return i.length?(0,I.jsxs)(`section`,{className:`course-catalog-module`,"aria-labelledby":`catalog-module-${r}`,children:[(0,I.jsxs)(`h3`,{id:`catalog-module-${r}`,children:[n,(0,I.jsxs)(`span`,{children:[i.length,` 课`]})]}),(0,I.jsx)(`ol`,{className:`course-lesson-list`,children:i.map(n=>{let r=Ur(e,n.id),i=Or(e,n);return(0,I.jsx)(`li`,{children:(0,I.jsxs)(`button`,{onClick:()=>t(n),children:[(0,I.jsx)(`span`,{className:`course-lesson-number`,children:String(n.order).padStart(2,`0`)}),(0,I.jsxs)(`span`,{className:`course-lesson-description`,children:[(0,I.jsx)(`strong`,{children:n.title}),(0,I.jsx)(`span`,{children:n.explanation}),(0,I.jsxs)(`small`,{children:[n.course.practice.length,` 道课堂练习 · `,n.verificationSize,` 道独立验收 · `,n.course.review.length,` 道复习`,n.course.task?.length?` · 综合任务`:``]})]}),(0,I.jsx)(`span`,{className:`course-lesson-status`,children:r===`passed`?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(re,{size:15,"aria-hidden":`true`}),`已验收`]}):r===`self-checked`?`已自行核对`:r===`needs-review`?`需巩固`:i.self===`learned`?`已完成学习`:i.self===`known`?`已有基础`:`进入学习`})]})},n.id)})})]},n):null}),!c.length&&(0,I.jsxs)(`div`,{className:`empty-state`,children:[(0,I.jsx)(`h3`,{children:`没有找到对应课程`}),(0,I.jsxs)(`p`,{children:[`换一个知识点或模块，也可以查看全部 `,si.length,` 课。`]}),(0,I.jsx)(`button`,{onClick:m,children:`查看全部课程`})]}),(0,I.jsx)(`p`,{className:`course-help`,children:`每课依次讲解、练习、验收和复习。阅读与课堂核对不会自动记为长期掌握。`})]})}function ji(e){return e.kind===`grammar`?(0,I.jsx)(Ai,{state:e.state,onOpen:e.onOpen}):(0,I.jsx)(Ni,{...e})}function Mi(e,t){let n=gi(e,t.id),r=Ur(e,t.id);return n.stage===`stable`?`跨天答对`:r===`passed`?`小测答对`:r===`needs-review`?`需巩固`:r===`self-checked`?`已自行核对`:Or(e,t).self===`unmarked`?`待学习`:`自评学过`}function Ni({book:e,state:t,onOpen:n,books:r=[],selectedId:i=``,busy:a=!1,error:o=``,onSelect:s,onRetry:c}){let u=i||t.settings.level,[d,f]=x(`catalog-${u}-words`,{query:``,page:0,track:`basic`,selected:``}),p=(0,l.useRef)(null),m=(0,l.useRef)(null),h=(0,l.useMemo)(()=>e?.words.map(n=>pi(n,t.settings.level,e.book.id))??[],[e,t.settings.level]),g=d.query.trim().toLowerCase(),_=(0,l.useMemo)(()=>h.filter(e=>`${e.title} ${e.subtitle}`.toLowerCase().includes(g)),[h,g]),v=Math.max(1,Math.ceil(_.length/20)),y=Math.max(0,Math.min(d.page,v-1)),b=_.slice(y*20,y*20+20),S=b.find(e=>e.id===d.selected)??b[0]??null,C=b.length?y*20+1:0,w=Math.min((y+1)*20,_.length),T=`directory-scroll-${u}-words`;function E(){f(e=>({...e,query:``,page:0})),m.current?.scrollTo({top:0,behavior:`auto`}),p.current?.focus()}function D(e){f(t=>({...t,page:e,selected:``})),m.current?.scrollTo({top:0,behavior:`auto`})}function O(e){f(t=>({...t,selected:e.id})),window.matchMedia(`(max-width: 1023px)`).matches&&n(e)}return(0,I.jsxs)(`div`,{className:`taste-word-catalog`,children:[s&&(0,I.jsx)(_i,{books:r,selectedId:i,busy:a,onSelect:s}),e?(0,I.jsxs)(I.Fragment,{children:[!s&&(0,I.jsxs)(`section`,{className:`catalog-book-heading`,"aria-label":`当前词书`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h2`,{children:e.book.title}),(0,I.jsxs)(`p`,{children:[h.length.toLocaleString(),` 个词目 · `,e.book.orderLabel]})]}),(0,I.jsx)(`span`,{className:`catalog-page-label`,children:`每组 20 词`})]}),(0,I.jsxs)(`div`,{className:`catalog-searchbar`,children:[(0,I.jsxs)(`div`,{className:`search catalog-search`,children:[(0,I.jsx)(ye,{size:18,"aria-hidden":`true`}),(0,I.jsx)(`input`,{ref:p,type:`search`,"aria-label":`搜索单词`,placeholder:`搜索单词或中文释义`,value:d.query,onChange:e=>{f(t=>({...t,query:e.target.value,page:0})),m.current?.scrollTo({top:0,behavior:`auto`})}}),d.query&&(0,I.jsx)(`button`,{className:`search-clear`,"aria-label":`清除单词搜索`,onClick:E,children:(0,I.jsx)(Ce,{size:16})})]}),(0,I.jsxs)(`label`,{className:`catalog-group-select`,children:[(0,I.jsx)(`span`,{children:`学习分组`}),(0,I.jsx)(`select`,{"aria-label":`学习章节`,value:y,disabled:!_.length,onChange:e=>D(Number(e.target.value)),children:Array.from({length:v},(e,t)=>(0,I.jsxs)(`option`,{value:t,children:[`第 `,t+1,` 组 / `,v,` 组`]},t))})]})]}),(0,I.jsxs)(`div`,{className:`catalog-result-meta`,children:[(0,I.jsxs)(`p`,{role:`status`,children:[g?`找到 ${_.length.toLocaleString()} 个词目`:`第 ${y+1} 组 · 每组 20 词`,(0,I.jsxs)(`span`,{children:[C,`–`,w,` / `,_.length.toLocaleString()]})]}),(0,I.jsxs)(`span`,{className:`catalog-desktop-help`,children:[`选词预览 · `,(0,I.jsx)(`kbd`,{children:`Enter`}),` 进入学习`]}),(0,I.jsx)(`span`,{className:`catalog-mobile-help`,children:`点击单词，直接进入学习`})]}),(0,I.jsxs)(`div`,{className:`catalog-layout words-catalog taste-catalog-layout${S?``:` is-empty`}`,children:[(0,I.jsxs)(`section`,{className:`catalog-directory`,"aria-label":`词书目录`,"aria-busy":a,children:[(0,I.jsx)(`div`,{className:`directory-heading`,children:(0,I.jsxs)(`div`,{className:`word-columns`,children:[(0,I.jsx)(`span`,{children:`序号`}),(0,I.jsx)(`span`,{children:`单词`}),(0,I.jsx)(`span`,{children:`释义`}),(0,I.jsx)(`span`,{children:`状态`})]})}),!b.length&&(0,I.jsxs)(`div`,{className:`empty-state catalog-empty`,children:[(0,I.jsx)(ye,{size:24,"aria-hidden":`true`}),(0,I.jsx)(`h3`,{children:g?`没有找到这个词`:`这本词书还没有可显示的词目`}),(0,I.jsx)(`p`,{children:g?`可以改用英文词形或中文释义搜索。`:`请重新载入来源内容后再试。`}),g?(0,I.jsx)(`button`,{onClick:E,children:`查看全部词目`}):c&&(0,I.jsx)(`button`,{onClick:c,children:`重新加载`})]}),(0,I.jsx)(`div`,{className:`directory-scroll`,ref:e=>{if(m.current=e,e)try{e.scrollTop=Number(sessionStorage.getItem(T)||0)}catch{}},onScroll:e=>{try{sessionStorage.setItem(T,String(e.currentTarget.scrollTop))}catch{}},children:b.map((e,r)=>{let i=Mi(t,e);return(0,I.jsxs)(`button`,{className:`directory-row${S?.id===e.id?` selected`:``}`,"aria-pressed":S?.id===e.id,onClick:()=>O(e),onDoubleClick:()=>n(e),onKeyDown:t=>{if(t.key===`Enter`)t.preventDefault(),n(e);else if(t.key===`ArrowDown`||t.key===`ArrowUp`){t.preventDefault();let e=Math.max(0,Math.min(b.length-1,r+(t.key===`ArrowDown`?1:-1)));f(t=>({...t,selected:b[e].id})),m.current?.querySelectorAll(`.directory-row`)[e]?.focus()}},children:[(0,I.jsx)(`span`,{className:`rank`,children:String(y*20+r+1).padStart(2,`0`)}),(0,I.jsxs)(`span`,{className:`directory-content`,children:[(0,I.jsx)(`strong`,{lang:`en`,children:e.title}),(0,I.jsx)(`small`,{children:e.phonetic}),(0,I.jsx)(`span`,{children:e.subtitle})]}),(0,I.jsxs)(`span`,{className:`row-status${i===`待学习`?` is-unmarked`:``}`,children:[i===`跨天答对`&&(0,I.jsx)(re,{size:13,"aria-hidden":`true`}),i]})]},e.id)})}),v>1&&(0,I.jsxs)(`div`,{className:`pagination`,children:[(0,I.jsx)(`button`,{"aria-label":`上一组`,disabled:!y,onClick:()=>D(y-1),children:(0,I.jsx)(te,{size:17})}),(0,I.jsxs)(`span`,{children:[`第 `,y+1,` / `,v,` 组`]}),(0,I.jsx)(`button`,{"aria-label":`下一组`,disabled:y>=v-1,onClick:()=>D(y+1),children:(0,I.jsx)(M,{size:17})})]})]}),S&&(0,I.jsx)(yi,{item:S,onOpen:n,label:`单词预览`,sourceLabel:e.book.title,status:Mi(t,S)})]}),(0,I.jsx)(`p`,{className:`footnote catalog-source-note`,children:`收录范围与排列沿用来源词书。自评、小测结果和跨天复习分别记录；配套题目与例句仍在完善。`})]}):(0,I.jsxs)(`section`,{className:`catalog-load-state`,role:o?`alert`:`status`,"aria-busy":!o,children:[(0,I.jsx)(`h2`,{children:o?`词书暂时无法读取`:`正在打开词书`}),(0,I.jsx)(`p`,{children:o||`载入词目和来源例句后，就可以继续学习。`}),o&&c&&(0,I.jsx)(`button`,{onClick:c,children:`重新加载`})]})]})}var Pi=[[`favorite`,`收藏`],[`important`,`重点`],[`difficult`,`难点`],[`learned`,`学习自评`],[`mistakes`,`需巩固`],[`review`,`复习卡`]],Fi={favorite:`学习时收藏想再看的词句，它们会留在这里。`,important:`在学习页把值得再读的内容标为重点。`,difficult:`把暂时不理解的词句标为难点，方便回来梳理。`,learned:`学习页的“已学过”或“认识”自评会留在这里。`,mistakes:`小测中需要巩固的内容会出现在这里。`,review:`记录学习或加入复习计划后，内容会出现在这里。`};function Ii(e){if(!/^[A-Za-z][A-Za-z0-9_-]+$/.test(e.source))return e.source;let t=e.level===`high-school`?`高中`:e.level===`cet4`?`四级`:e.level===`cet6`?`六级`:``;return e.kind===`grammar`?`语法课程`:`${t}词书内容`}function Li(e,t){if(e.cards[t.id]?.paused)return`复习暂停`;let n=Ur(e,t.id);return n===`needs-review`?`需巩固`:n===`passed`?`小测答对`:n===`self-checked`?`已自行核对`:e.marks[t.id]?.self===`known`?`自评认识`:e.marks[t.id]?.self===`learned`?`自评学过`:`待学习`}function Ri({state:e,resolve:t,onOpen:n,onLearn:r}){let[i,a]=x(`collection-view`,{filter:`favorite`,query:``,selected:``}),[o,s]=(0,l.useState)(null),[c,u]=(0,l.useState)(0),[d,f]=(0,l.useState)(``),[p,m]=(0,l.useState)(null),h=(0,l.useRef)(null),g=(0,l.useRef)(null),_=(0,l.useRef)(0),v=Object.values(e.marks),y=Pi.some(([e])=>e===i.filter)?i.filter:`favorite`,b=i.query.trim().toLowerCase(),S=(t,n)=>n===`favorite`?t.favorite:n===`learned`?t.self!==`unmarked`:n===`mistakes`?Ur(e,t.ref.id)===`needs-review`:n===`review`?!!e.cards[t.ref.id]:t.flags.includes(n),C=v.filter(e=>S(e,y)),w=C.filter(e=>`${e.ref.title} ${e.ref.subtitle}`.toLowerCase().includes(b)).sort((e,t)=>t.updatedAt-e.updatedAt),T=(w.find(e=>e.ref.id===i.selected)??w[0])?.ref,E=T?.id,D=!!E&&o?.id!==E,O=E&&o&&o.id===E?o.item:null,k=E&&o&&o.id===E?o.error:``,A=Pi.find(([e])=>e===y)?.[1]??`收藏`,j=(0,l.useCallback)(e=>{if(g.current=e,e)try{e.scrollTop=Number(sessionStorage.getItem(`collection-directory-${y}`)||0)}catch{}},[y]);(0,l.useEffect)(()=>()=>{_.current+=1},[]);function ee(){_.current+=1,f(``)}(0,l.useEffect)(()=>{let e=!0;if(T)return t(T).then(t=>{e&&s({id:T.id,item:t,error:t?``:`没有读取到原始内容。学习记录仍保留，可以重新读取来源后再试。`})}).catch(()=>{e&&s({id:T.id,item:null,error:`原始内容暂时无法读取。请重新加载后再试。`})}),()=>{e=!1}},[t,T,c]);function te(){ee(),a(e=>({...e,query:``})),m(null),g.current?.scrollTo({top:0,behavior:`auto`}),h.current?.focus()}async function ne(e){m(null);let r=++_.current;if(o&&o.id===e.id&&o.item){ee(),n(o.item);return}f(e.id);try{let i=await t(e);if(_.current!==r)return;i?n(i):m({ref:e,message:`没有读取到原始内容，记录仍保留。请重新读取后再试。`})}catch{_.current===r&&m({ref:e,message:`原始内容暂时无法读取，请重试。`})}finally{_.current===r&&f(``)}}return(0,I.jsxs)(`div`,{className:`taste-collection`,children:[(0,I.jsxs)(`div`,{className:`collection-toolbar`,children:[(0,I.jsx)(`div`,{className:`toolbar tabs collection-filters`,role:`group`,"aria-label":`积累分类`,children:Pi.map(([e,t])=>(0,I.jsxs)(`button`,{"aria-pressed":y===e,className:y===e?`chosen`:``,onClick:()=>{ee(),a(t=>({...t,filter:e,selected:``})),m(null)},children:[t,(0,I.jsx)(`small`,{children:v.filter(t=>S(t,e)).length})]},e))}),(0,I.jsxs)(`div`,{className:`search collection-search`,children:[(0,I.jsx)(ye,{size:18,"aria-hidden":`true`}),(0,I.jsx)(`input`,{ref:h,type:`search`,"aria-label":`搜索积累`,placeholder:`查找留下的词句`,value:i.query,onChange:e=>{ee(),a(t=>({...t,query:e.target.value})),m(null),g.current?.scrollTo({top:0,behavior:`auto`})}}),i.query&&(0,I.jsx)(`button`,{className:`search-clear`,"aria-label":`清除积累搜索`,onClick:te,children:(0,I.jsx)(Ce,{size:16})})]})]}),d&&(0,I.jsx)(`p`,{className:`collection-opening`,role:`status`,children:`正在读取原始内容…`}),p&&(0,I.jsxs)(`div`,{className:`collection-feedback`,role:`alert`,children:[(0,I.jsxs)(`p`,{children:[p.ref.title,`：`,p.message]}),(0,I.jsx)(`button`,{disabled:!!d,onClick:()=>void ne(p.ref),children:`重新读取`})]}),(0,I.jsxs)(`div`,{className:`catalog-layout collection-catalog taste-catalog-layout${w.length?``:` is-empty`}`,children:[(0,I.jsxs)(`section`,{className:`catalog-directory`,"aria-label":`我的${A}`,children:[(0,I.jsxs)(`div`,{className:`directory-heading`,children:[(0,I.jsxs)(`strong`,{children:[`我的`,A]}),(0,I.jsx)(`small`,{role:`status`,children:b?`找到 ${w.length} / ${C.length} 项`:`${w.length} 项`})]}),!w.length&&(0,I.jsxs)(`div`,{className:`empty-state collection-empty`,children:[(0,I.jsx)(N,{size:26,"aria-hidden":`true`}),(0,I.jsx)(`h3`,{children:b?`没有找到对应的词句`:`还没有${A}`}),(0,I.jsx)(`p`,{children:b?`换个关键词，或者清除搜索查看这一分类。`:Fi[y]}),b?(0,I.jsxs)(`button`,{onClick:te,children:[`查看全部`,A]}):(0,I.jsxs)(`button`,{className:`primary`,onClick:r,children:[`去学习`,(0,I.jsx)(M,{size:17})]})]}),(0,I.jsx)(`div`,{className:`directory-scroll`,ref:j,onScroll:e=>{try{sessionStorage.setItem(`collection-directory-${y}`,String(e.currentTarget.scrollTop))}catch{}},children:w.map((t,n)=>(0,I.jsxs)(`button`,{className:`directory-row${E===t.ref.id?` selected`:``}`,"aria-pressed":E===t.ref.id,"aria-busy":d===t.ref.id,disabled:!!d,onClick:()=>{a(e=>({...e,selected:t.ref.id})),m(null),window.matchMedia(`(max-width: 1023px)`).matches&&ne(t.ref)},onDoubleClick:()=>void ne(t.ref),onKeyDown:e=>{if(e.key===`Enter`)e.preventDefault(),ne(t.ref);else if(e.key===`ArrowDown`||e.key===`ArrowUp`){e.preventDefault();let t=Math.max(0,Math.min(w.length-1,n+(e.key===`ArrowDown`?1:-1)));a(e=>({...e,selected:w[t].ref.id})),g.current?.querySelectorAll(`.directory-row`)[t]?.focus()}},children:[(0,I.jsxs)(`span`,{className:`directory-content`,children:[(0,I.jsx)(`strong`,{lang:t.ref.kind===`word`?`en`:void 0,children:t.ref.title}),(0,I.jsx)(`span`,{children:t.ref.subtitle}),(0,I.jsx)(`small`,{children:Ii(t.ref)})]}),(0,I.jsx)(`span`,{className:`collection-row-status`,children:d===t.ref.id?`正在读取…`:Li(e,t.ref)})]},t.ref.id))})]}),!!w.length&&(D?(0,I.jsxs)(`aside`,{className:`reading-preview preview-loading`,"aria-busy":`true`,role:`status`,children:[(0,I.jsx)(`h2`,{children:`内容预览`}),(0,I.jsxs)(`p`,{children:[`正在读取 `,T?.title,` 的原始内容…`]})]}):k?(0,I.jsxs)(`aside`,{className:`reading-preview preview-error`,role:`status`,children:[(0,I.jsx)(`h2`,{children:T?.title}),(0,I.jsx)(`p`,{children:k}),(0,I.jsx)(`button`,{onClick:()=>{s(null),u(e=>e+1)},children:`重新读取`})]}):(0,I.jsx)(yi,{item:O??null,onOpen:n,sourceLabel:T?Ii(T):void 0,status:T?Li(e,T):void 0}))]}),(0,I.jsx)(`p`,{className:`footnote catalog-source-note`,children:`收藏、自评、小测与复习分别保留；打开词句会回到它的原始内容。`})]})}var zi=[`全部年份`,`2026`,`2025`,`2024`,`2023`,`2022`];function Bi({level:e,onLearn:t}){let[n,r]=x(`exam-year-`+e,`全部年份`),i={"high-school":`高中英语`,cet4:`大学四级`,cet6:`大学六级`}[e],a=zi.includes(n)?n:`全部年份`;return(0,I.jsxs)(`div`,{className:`taste-exams`,children:[(0,I.jsxs)(`div`,{className:`exam-filters`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`strong`,{children:i}),(0,I.jsx)(`span`,{children:`已开放 0 套`})]}),(0,I.jsxs)(`label`,{htmlFor:`exam-year`,children:[`年份`,(0,I.jsx)(`select`,{id:`exam-year`,"aria-label":`真题年份`,value:a,onChange:e=>r(e.target.value),children:zi.map(e=>(0,I.jsx)(`option`,{children:e},e))})]})]}),(0,I.jsxs)(`section`,{className:`exam-unavailable`,"aria-labelledby":`exam-empty-title`,children:[(0,I.jsx)(fe,{size:26,strokeWidth:1.6,"aria-hidden":`true`}),(0,I.jsxs)(`span`,{className:`exam-availability-label`,children:[a===`全部年份`?`历年真题`:`${a} 年真题`,` · 尚未开放`]}),(0,I.jsx)(`h2`,{id:`exam-empty-title`,children:a===`全部年份`?`真题核对完成后，会出现在这里`:`${a} 年尚无已核对的试卷`}),(0,I.jsx)(`p`,{children:`当前没有可在工作台练习的完整试卷。试卷、参考答案和逐句解析完成核对后才会开放。`}),(0,I.jsxs)(`div`,{className:`exam-empty-actions`,children:[(0,I.jsxs)(`button`,{className:`primary`,onClick:t,children:[`先去学习词汇`,(0,I.jsx)(M,{size:17})]}),a!==`全部年份`&&(0,I.jsx)(`button`,{className:`text-link`,onClick:()=>r(`全部年份`),children:`查看全部年份`})]})]}),(0,I.jsxs)(`div`,{className:`exam-reference-row`,children:[(0,I.jsxs)(`details`,{className:`exam-rules`,children:[(0,I.jsx)(`summary`,{children:`收录与核对说明`}),(0,I.jsxs)(`ul`,{children:[(0,I.jsx)(`li`,{children:`2026 年仅收录已举行的场次。`}),(0,I.jsx)(`li`,{children:`缺少音频的场次会明确提示，听力不计入完整练习。`}),(0,I.jsx)(`li`,{children:`未经核对的答案与评分暂不提供。`})]})]}),e!==`high-school`&&(0,I.jsxs)(`div`,{className:`exam-source`,children:[(0,I.jsxs)(`a`,{href:`https://github.com/wamich/english-exem-md`,target:`_blank`,rel:`noreferrer`,children:[`查看 2023 年四六级真题来源`,(0,I.jsx)(de,{size:14,"aria-hidden":`true`})]}),(0,I.jsx)(`p`,{children:`外部原始资料，尚未作为本工作台的已核对试卷。`})]})]})]})}var Vi=()=>({answers:{},revealed:{},checks:{}});function Hi(e){if(typeof window>`u`)return Vi();try{let t=JSON.parse(localStorage.getItem(e)??`null`);return!t||[t.answers,t.revealed,t.checks].some(e=>!e||typeof e!=`object`||Array.isArray(e))||Object.values(t.answers).some(e=>typeof e!=`string`||e.length>2e3)||[...Object.values(t.revealed),...Object.values(t.checks)].some(e=>typeof e!=`boolean`)?Vi():t}catch{return Vi()}}var Ui=[{id:`reading`,label:`讲解`},{id:`practice`,label:`练习`},{id:`verification`,label:`验收`},{id:`review`,label:`复习`}];function Wi(e,t){if(!t.answers[e.id]?.trim())return`未作答`;let n=e.criteria.map((n,r)=>t.checks[`${e.id}:${r}`]);return n.some(e=>typeof e!=`boolean`)?`已作答`:n.every(Boolean)?`已核对`:`需巩固`}function Gi({exercises:e,index:t,draft:n,onChange:r,onIndex:i,title:a,onNextStage:o}){let s=Math.min(t,e.length-1),c=e[s],u=n.answers[c.id]??``,d=!!n.revealed[c.id],f=(0,l.useRef)(null),p=(0,l.useRef)(d);(0,l.useEffect)(()=>{d&&!p.current&&f.current?.focus({preventScroll:!0}),p.current=d},[d]);let m=e.filter(e=>[`已核对`,`需巩固`].includes(Wi(e,n))).length,h=()=>{(u.trim()||d)&&r({...n,revealed:{...n.revealed,[c.id]:!d}})};return(0,I.jsxs)(`div`,{className:`course-exercise-page`,onKeyDown:t=>{(t.ctrlKey||t.metaKey)&&t.key===`Enter`&&(t.preventDefault(),d?s<e.length-1&&i(s+1):h())},children:[(0,I.jsxs)(`div`,{className:`course-question-toolbar`,children:[(0,I.jsx)(`h2`,{children:a}),(0,I.jsxs)(`span`,{children:[m,` / `,e.length,` 题已核对`]})]}),(0,I.jsx)(`nav`,{className:`course-question-nav`,"aria-label":`${a}题号`,children:e.map((e,t)=>{let r=Wi(e,n);return(0,I.jsxs)(`button`,{"aria-label":`第 ${t+1} 题，${r}`,"aria-current":t===s?`step`:void 0,className:r===`已核对`?`is-checked`:r===`需巩固`?`needs-review`:``,onClick:()=>i(t),children:[t+1,r===`已核对`&&(0,I.jsx)(re,{size:12,"aria-hidden":`true`})]},e.id)})}),(0,I.jsxs)(`div`,{className:`course-exercise-surface${d?` has-feedback`:``}`,children:[(0,I.jsxs)(`section`,{className:`course-answer-pane`,"aria-labelledby":`exercise-heading`,children:[(0,I.jsxs)(`h3`,{id:`exercise-heading`,children:[`第 `,s+1,` 题`]}),(0,I.jsx)(ni,{source:c.prompt,className:`course-prompt`}),(0,I.jsx)(`label`,{htmlFor:`course-answer-${c.id}`,children:`我的答案`}),(0,I.jsx)(`textarea`,{id:`course-answer-${c.id}`,rows:4,maxLength:2e3,spellCheck:!1,value:u,placeholder:`写出你的答案；需要解释时，也写下判断理由。`,onChange:e=>{let t={...n.checks};c.criteria.forEach((e,n)=>delete t[`${c.id}:${n}`]),r({...n,answers:{...n.answers,[c.id]:e.target.value},revealed:{...n.revealed,[c.id]:!1},checks:t})}}),(0,I.jsxs)(`div`,{className:`course-reveal-actions`,children:[(0,I.jsx)(`button`,{className:d?``:`primary`,disabled:!u.trim()&&!d,"aria-expanded":d,"aria-controls":`exercise-feedback`,onClick:h,children:d?`收起解析`:`查看解析与核对标准`}),(0,I.jsx)(`span`,{className:`course-shortcut`,children:`Ctrl / ⌘ + Enter`})]})]}),d&&(0,I.jsxs)(`section`,{id:`exercise-feedback`,className:`course-feedback-pane`,"aria-labelledby":`feedback-heading`,children:[(0,I.jsx)(`h3`,{id:`feedback-heading`,ref:f,tabIndex:-1,children:`对照与核对`}),(0,I.jsx)(`h4`,{children:`参考答案`}),(0,I.jsx)(ni,{source:c.reference}),(0,I.jsx)(`h4`,{children:`为什么这样写`}),(0,I.jsx)(ni,{source:c.explanation}),(0,I.jsxs)(`div`,{className:`course-criteria`,children:[(0,I.jsx)(`h4`,{children:`核对我的原答案`}),c.criteria.map((e,t)=>{let i=`${c.id}:${t}`,a=n.checks[i];return(0,I.jsxs)(`fieldset`,{children:[(0,I.jsx)(`legend`,{children:e}),(0,I.jsxs)(`label`,{children:[(0,I.jsx)(`input`,{type:`radio`,name:i,checked:a===!0,onChange:()=>r({...n,checks:{...n.checks,[i]:!0}})}),`已满足`]}),(0,I.jsxs)(`label`,{children:[(0,I.jsx)(`input`,{type:`radio`,name:i,checked:a===!1,onChange:()=>r({...n,checks:{...n.checks,[i]:!1}})}),`需巩固`]})]},i)})]}),(0,I.jsx)(`p`,{className:`course-help`,children:`表达题允许其他正确写法。课堂核对用于发现薄弱点，不计入独立验收。`})]})]}),(0,I.jsxs)(`footer`,{className:`course-step-actions`,children:[(0,I.jsx)(`button`,{disabled:s===0,onClick:()=>i(s-1),children:`上一题`}),(0,I.jsxs)(`span`,{children:[`第 `,s+1,` / `,e.length,` 题`]}),s===e.length-1&&o?(0,I.jsx)(`button`,{className:`primary`,onClick:o,children:`进入独立验收`}):(0,I.jsx)(`button`,{disabled:s===e.length-1,onClick:()=>i(s+1),children:`下一题`})]}),s===e.length-1&&(0,I.jsx)(`p`,{className:`course-help`,children:o?`${m<e.length?`还有 ${e.length-m} 题未核对，可点击题号回看。`:`本题组核对记录已保留。`}准备好后，用一组新材料独立试一次。`:`题组已到最后一题。可点击题号回看，或稍后继续巩固。`})]})}function Ki({item:e,state:t,now:n,onAction:r,onCheck:i,onReview:a,onContinue:o,onBack:s}){let c=e.course,u=(0,l.useMemo)(()=>bi(c.body),[c.body]),d=`workbench-grammar-position-v1:${e.id}`,f=`workbench-grammar-practice-v1:${e.id}:${dr}`,[p,m]=(0,l.useState)(()=>{try{return wi(localStorage.getItem(d),u)}catch{return Si(xi(u))}}),[h,g]=(0,l.useState)(()=>Hi(f)),[_,v]=(0,l.useState)(!1),[y,b]=(0,l.useState)(!1),x=_||y,S=(0,l.useRef)(null),C=(0,l.useRef)(!1),w=Or(t,e),T=t.cards[e.id],E=Ur(t,e.id),D=u[p.section]??u[0],O=t.attempts.filter(t=>t.itemId!==e.id||t.curriculumRevision===`official-reference-2026-10-03`),k=t.attempts.some(t=>t.itemId===e.id&&t.curriculumRevision!==`official-reference-2026-10-03`),A=gi({...t,attempts:O},e.id),j=p.practiceSet===`task`&&c.task?.length?c.task:c.practice,ee=!!(T&&!T.paused&&T.due<=n),te=e=>new Intl.DateTimeFormat(`zh-CN`,{timeZone:`Asia/Shanghai`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}).format(e),M=(e,t=!0)=>{let n=Ci(p,e);C.current=t,m(n);try{localStorage.setItem(d,JSON.stringify(n)),v(!1)}catch{v(!0)}},ne=e=>{g(e);try{localStorage.setItem(f,JSON.stringify(e)),b(!1)}catch{b(!0)}};(0,l.useEffect)(()=>{C.current&&=(S.current?.focus({preventScroll:!0}),document.getElementById(`course-stage-panel`)?.scrollIntoView({block:`start`,behavior:`instant`}),!1)},[p.stage,p.section,p.exercise,p.practiceSet]);let P=()=>{let e=[...new Set([...p.readSections,D.id])];p.section===u.length-1?M({stage:`practice`,exercise:0,readSections:e}):M({section:p.section+1,readSections:e})},ie=c.practice.filter(e=>Wi(e,h)===`已核对`).length,ae=E===`passed`?`已客观答对`:E===`self-checked`?`已自行核对`:E===`needs-review`?`需巩固`:`尚未验收`,oe=p.stage===`reading`?`讲解 · 第 ${p.section+1} / ${u.length} 节`:p.stage===`practice`?`${p.practiceSet===`task`?`综合表达`:`课堂练习`} · 第 ${Math.min(p.exercise+1,j.length)} / ${j.length} 题`:p.stage===`verification`?`独立验收 · ${ae}`:`${ee?`到期复习`:T?.paused?`复习已暂停`:`巩固练习`} · 第 ${Math.min(p.exercise+1,c.review.length)} / ${c.review.length} 题`;return(0,I.jsxs)(`article`,{className:`grammar-course-flow`,children:[(0,I.jsxs)(`header`,{className:`course-flow-heading`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h2`,{children:e.title}),(0,I.jsxs)(`p`,{children:[`第 `,String(c.number).padStart(2,`0`),` 课 · `,c.module??`语法课程`,` `,(0,I.jsxs)(`span`,{children:[c.practice.length,` 道练习 · `,e.verificationSize,` 道验收`]})]})]}),(0,I.jsxs)(`div`,{className:`course-heading-actions`,children:[(0,I.jsx)(`button`,{className:`icon-action`,"aria-label":w.favorite?`取消收藏课程`:`收藏课程`,"aria-pressed":w.favorite,onClick:()=>r(`favorite`),children:(0,I.jsx)(N,{size:20,fill:w.favorite?`currentColor`:`none`})}),(0,I.jsxs)(`details`,{className:`learning-menu`,children:[(0,I.jsx)(`summary`,{"aria-label":`课程操作`,children:(0,I.jsx)(ue,{size:20})}),(0,I.jsxs)(`div`,{className:`learning-menu-content`,children:[(0,I.jsx)(`button`,{onClick:()=>r(`important`),children:w.flags.includes(`important`)?`取消重点`:`标记重点`}),(0,I.jsx)(`button`,{onClick:()=>r(`difficult`),children:w.flags.includes(`difficult`)?`取消难点`:`标记难点`}),(0,I.jsx)(`button`,{onClick:()=>r(`known`),children:`自评：已有基础`}),(0,I.jsx)(`button`,{onClick:()=>r(`review`),children:T?T.paused?`恢复复习`:`暂停复习`:`加入复习计划`}),(0,I.jsx)(`button`,{onClick:()=>{M(Si(xi(u))),r(`restart`)},children:`重新学习（保留答案）`})]})]})]})]}),(0,I.jsx)(`nav`,{className:`course-flow-tabs`,role:`tablist`,"aria-label":`课程学习步骤`,children:Ui.map((e,t)=>(0,I.jsxs)(`button`,{id:`course-tab-${e.id}`,role:`tab`,"aria-selected":p.stage===e.id,"aria-controls":`course-stage-panel`,tabIndex:p.stage===e.id?0:-1,onKeyDown:e=>{if(e.key===`ArrowRight`||e.key===`ArrowLeft`){e.preventDefault();let n=Ui[(t+(e.key===`ArrowRight`?1:3))%4];M({stage:n.id},!1),document.getElementById(`course-tab-${n.id}`)?.focus()}},onClick:()=>p.stage!==e.id&&M({stage:e.id}),children:[(0,I.jsx)(`span`,{children:t+1}),e.label]},e.id))}),(0,I.jsxs)(`div`,{className:`course-flow-state`,children:[(0,I.jsx)(`span`,{className:`course-progress-label`,children:oe}),(0,I.jsxs)(`details`,{className:`course-records`,children:[(0,I.jsx)(`summary`,{children:`学习记录`}),(0,I.jsxs)(`div`,{className:`course-record-panel`,children:[(0,I.jsxs)(`dl`,{children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`讲解阅读`}),(0,I.jsxs)(`dd`,{children:[p.readSections.length,` / `,u.length,` 节已标记`]})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`课堂核对`}),(0,I.jsxs)(`dd`,{children:[ie,` / `,c.practice.length,` 题已满足标准`]})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`我的自评`}),(0,I.jsx)(`dd`,{children:w.self===`unmarked`?`尚未标记`:w.self===`known`?`已有基础`:`已完成学习`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`独立验收`}),(0,I.jsx)(`dd`,{children:ae})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`复习安排`}),(0,I.jsx)(`dd`,{children:T?T.paused?`已暂停`:te(T.due):`尚未安排`})]})]}),(0,I.jsx)(`p`,{className:`lesson-memory-note`,children:T?T.paused?`本课复习已暂停，可恢复计划继续巩固。`:`下次复习：${te(T.due)}。之后按这课的实际回忆调整。`:`记录完成学习后，自动安排明天复习；自评完成不代表已通过独立验收。`}),(0,I.jsxs)(`div`,{className:`memory-evidence`,children:[(0,I.jsx)(`strong`,{children:A.stage===`stable`?`多次跨天答对`:A.stage===`needs-review`?`这课仍需巩固`:A.stage===`building`?`正在积累回忆证据`:`客观回忆证据还不足`}),(0,I.jsxs)(`span`,{children:[`客观答对 `,A.objectiveDays,` 天 · 自行核对 `,A.selfRounds,` 轮`]})]})]})]})]}),k&&E===`unverified`&&(0,I.jsx)(`p`,{className:`lesson-memory-note course-edition-notice`,children:`本课已按官方参考资料修订。旧版学习记录保留，新版验收需要重新完成。`}),!!T&&T.lapses>=3&&(0,I.jsx)(`p`,{className:`memory-relearn`,children:`这项内容反复忘记过，先回看讲解、例句并练一次，再继续回忆。`}),(0,I.jsxs)(`section`,{id:`course-stage-panel`,role:`tabpanel`,"aria-labelledby":`course-tab-${p.stage}`,children:[p.stage===`reading`&&(0,I.jsxs)(`div`,{className:`course-reading-workspace`,children:[(0,I.jsxs)(`aside`,{className:`course-outline`,children:[(0,I.jsx)(`h3`,{children:`本课讲解`}),(0,I.jsx)(`p`,{children:`可直接跳到需要的部分`}),(0,I.jsx)(`nav`,{"aria-label":`讲解节目录`,children:u.map((e,t)=>(0,I.jsxs)(`button`,{"aria-current":t===p.section?`step`:void 0,onClick:()=>M({section:t}),children:[(0,I.jsx)(`span`,{className:`course-section-number`,children:t+1}),(0,I.jsx)(`span`,{children:e.title}),p.readSections.includes(e.id)&&(0,I.jsx)(re,{size:14,"aria-label":`已标记阅读`})]},e.id))})]}),(0,I.jsxs)(`div`,{className:`course-reading-main`,children:[(0,I.jsxs)(`label`,{className:`course-mobile-outline`,children:[`跳转到`,(0,I.jsx)(`select`,{"aria-label":`讲解节目录`,value:p.section,onChange:e=>M({section:Number(e.target.value)}),children:u.map((e,t)=>(0,I.jsxs)(`option`,{value:t,children:[t+1,`. `,e.title]},e.id))})]}),(0,I.jsxs)(`section`,{className:`course-reading-paper`,children:[(0,I.jsxs)(`div`,{className:`course-reading-title`,children:[(0,I.jsx)(`h2`,{ref:S,tabIndex:-1,children:D.title}),(0,I.jsxs)(`span`,{children:[p.section+1,` / `,u.length]})]}),(0,I.jsx)(ni,{source:D.body}),(0,I.jsxs)(`footer`,{className:`course-step-actions`,children:[(0,I.jsx)(`button`,{disabled:p.section===0,onClick:()=>M({section:p.section-1}),children:`上一节`}),(0,I.jsx)(`button`,{className:`primary`,onClick:P,children:p.section===u.length-1?`读完，进入练习`:`读完，下一节`})]})]})]})]}),p.stage===`practice`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`h2`,{ref:S,tabIndex:-1,className:`sr-only`,children:`课堂练习`}),!!c.task?.length&&(0,I.jsxs)(`nav`,{className:`course-practice-switch`,"aria-label":`练习类型`,children:[(0,I.jsxs)(`button`,{"aria-pressed":p.practiceSet===`practice`,onClick:()=>M({practiceSet:`practice`}),children:[`课堂练习 · `,c.practice.length,` 题`]}),(0,I.jsx)(`button`,{"aria-pressed":p.practiceSet===`task`,onClick:()=>M({practiceSet:`task`}),children:`综合表达任务`})]}),(0,I.jsx)(Gi,{exercises:j,index:p.exercise,title:p.practiceSet===`task`?`把语法用在情境里`:`课堂练习`,draft:h,onChange:ne,onIndex:e=>M({exercise:e}),onNextStage:()=>M({stage:`verification`})},p.practiceSet+p.exercise)]}),p.stage===`verification`&&(0,I.jsxs)(`div`,{className:`course-verification-start`,children:[(0,I.jsx)(`h2`,{ref:S,tabIndex:-1,children:`换一组材料，独立试一次`}),(0,I.jsxs)(`p`,{children:[`用 `,e.verificationSize,` 道全新情境题，检查能否把这一课的结构用出来。`]}),(0,I.jsxs)(`ol`,{children:[(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`strong`,{children:`先独立作答`}),(0,I.jsx)(`span`,{children:`这一轮先不显示参考答案。`})]}),(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`strong`,{children:`整轮提交后核对`}),(0,I.jsx)(`span`,{children:`对照原答案，逐项选择“已满足”或“需巩固”。`})]}),(0,I.jsxs)(`li`,{children:[(0,I.jsx)(`strong`,{children:`记录回忆难度`}),(0,I.jsx)(`span`,{children:`保存本轮结果，并安排后续变式复习。`})]})]}),(0,I.jsxs)(`div`,{className:`course-verification-actions`,children:[(0,I.jsx)(`button`,{className:`primary`,onClick:i,children:`开始独立验收`}),(0,I.jsx)(`button`,{onClick:()=>M({stage:`practice`}),children:`回到练习`})]}),(0,I.jsx)(`p`,{className:`course-help`,children:`开放表达按参考和标准自行核对，其他准确表达也可以达到要求。`}),(0,I.jsxs)(`div`,{className:`course-learning-complete`,children:[(0,I.jsx)(`span`,{children:w.self===`learned`?`你已记录完成本课学习。`:`完成讲解与练习后，可以记录学习自评。`}),(0,I.jsx)(`button`,{onClick:()=>w.self===`learned`?o():r(`learned`),children:w.self===`learned`?`学习下一课`:`记录完成学习`})]})]}),p.stage===`review`&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`h2`,{ref:S,tabIndex:-1,className:`sr-only`,children:`按计划复习`}),(0,I.jsxs)(`div`,{className:`course-review-plan`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h3`,{children:ee?`这课已到复习时间`:T?.paused?`本课复习已暂停`:T?`按计划再回忆一次`:`学完后，明天再回忆`}),(0,I.jsx)(`p`,{children:T?T.paused?`恢复计划后继续安排。下方题组可先用于练习。`:`计划时间：${te(T.due)}。${ee?`先回忆并核对，再记录真实的回忆难度。`:`下方题组可提前练习，不计入到期复习。`}`:`记录完成学习或加入计划后，自动安排明天复习。下方题组练习与到期复习分别保存。`})]}),ee?(0,I.jsx)(`button`,{className:`primary`,onClick:a,children:`开始本轮复习`}):T?.paused?(0,I.jsx)(`button`,{onClick:()=>r(`review`),children:`恢复复习计划`}):T?null:(0,I.jsx)(`button`,{onClick:()=>r(`review`),children:`加入复习计划`})]}),(0,I.jsx)(Gi,{exercises:c.review,index:p.exercise,title:`巩固变式练习`,draft:h,onChange:ne,onIndex:e=>M({exercise:e})},`review-${p.exercise}`)]})]}),(0,I.jsxs)(`footer`,{className:`course-save-line`,children:[(0,I.jsx)(`p`,{role:x?`alert`:`status`,children:x?`暂时无法保存。请先复制答案，再离开页面。`:`位置与练习答案自动保存在本机，返回可以接着学。`}),(0,I.jsx)(`button`,{className:`text-link`,onClick:s,children:`稍后继续`})]})]})}function qi({item:e,state:t,now:n,onAction:r,onReview:i,onCheck:a,onSpelling:o,onContinue:s,onBack:c,sourceLabel:u}){let d=Or(t,e),f=t.cards[e.id],p=Ur(t,e.id),m=gi(t,e.id),h=!!t.checks[e.id],g=!!e.course,_=e.kind===`word`||e.verificationSize>0&&e.questions.length>=e.verificationSize,v=!!(f&&f.due<=n&&!f.paused),y=(0,l.useRef)(null),b=e=>new Intl.DateTimeFormat(`zh-CN`,{timeZone:`Asia/Shanghai`,month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}).format(e),x=f?f.paused?`复习已暂停，恢复后继续按实际回忆安排。`:`下次复习：${b(f.due)}。回忆后如实评分，计划会随这一项的表现调整。`:`记录已学后，自动安排明天复习；之后按实际回忆调整。自评已学不代表已通过小测。`,S=m.stage===`stable`?`多次跨天答对`:m.stage===`needs-review`?`这项内容仍需巩固`:m.stage===`building`?`正在积累回忆证据`:`客观回忆证据还不足`;(0,l.useEffect)(()=>{function e(e){y.current?.open&&!y.current.contains(e.target)&&(y.current.open=!1)}return document.addEventListener(`pointerdown`,e),()=>document.removeEventListener(`pointerdown`,e)},[e.id]);function C(e){y.current&&(y.current.open=!1),y.current?.querySelector(`summary`)?.focus(),e()}return e.course?(0,I.jsx)(Ki,{item:e,state:t,now:n,onAction:r,onCheck:a,onReview:i,onContinue:s,onBack:c}):(0,I.jsxs)(`div`,{className:`lesson-layout taste-lesson`,children:[(0,I.jsxs)(`section`,{className:`panel lesson`,children:[(0,I.jsxs)(`div`,{className:`lesson-source`,children:[(0,I.jsx)(`span`,{children:u??e.source}),(0,I.jsx)(`button`,{className:`text-link lesson-back`,onClick:c,children:`返回列表`})]}),(0,I.jsxs)(`header`,{className:`lesson-titlebar`,children:[(0,I.jsx)(`div`,{className:`lesson-title-group`,children:(0,I.jsx)(`h2`,{className:e.kind===`word`?`word-title`:``,lang:e.kind===`word`?`en`:void 0,children:e.title})}),(0,I.jsxs)(`div`,{className:`lesson-side-actions`,children:[e.kind===`word`&&(0,I.jsx)(vi,{text:e.title},e.id),(0,I.jsx)(`button`,{className:`icon-action bookmark-action`,"aria-label":d.favorite?`取消收藏`:`收藏`,"aria-pressed":d.favorite,title:d.favorite?`取消收藏`:`收藏`,onClick:()=>r(`favorite`),children:(0,I.jsx)(N,{size:21,fill:d.favorite?`currentColor`:`none`,"aria-hidden":`true`})}),(0,I.jsxs)(`details`,{ref:y,className:`learning-menu`,onKeyDown:e=>{e.key===`Escape`&&y.current?.open&&(e.preventDefault(),e.stopPropagation(),C(()=>{}))},onBlur:e=>{e.relatedTarget&&!e.currentTarget.contains(e.relatedTarget)&&(e.currentTarget.open=!1)},children:[(0,I.jsx)(`summary`,{"aria-label":`更多学习操作`,title:`更多学习操作`,children:(0,I.jsx)(ue,{size:22,"aria-hidden":`true`})}),(0,I.jsxs)(`div`,{className:`learning-menu-content`,children:[[`important`,`difficult`].map(e=>(0,I.jsxs)(`button`,{"aria-pressed":d.flags.includes(e),onClick:()=>C(()=>r(e)),children:[e===`important`?d.flags.includes(e)?`取消重点标记`:`标记重点`:d.flags.includes(e)?`取消难点标记`:`标记难点`,d.flags.includes(e)&&(0,I.jsx)(re,{size:15,"aria-hidden":`true`})]},e)),(0,I.jsxs)(`button`,{"aria-pressed":d.self===`known`,onClick:()=>C(()=>r(`known`)),children:[g?`自评：已有基础`:`我已经知道`,d.self===`known`&&(0,I.jsx)(re,{size:15,"aria-hidden":`true`})]}),v&&(0,I.jsxs)(`button`,{onClick:()=>C(i),children:[`开始到期复习 `,(0,I.jsx)(P,{size:15,"aria-hidden":`true`})]}),(0,I.jsx)(`button`,{onClick:()=>C(()=>r(`review`)),children:f?f.paused?`恢复复习`:`暂停复习`:`加入复习`}),(0,I.jsx)(`button`,{onClick:()=>C(()=>r(`restart`)),children:`重新学习`})]})]})]})]}),e.phonetic&&(0,I.jsx)(`p`,{className:`lesson-phonetic`,children:e.phonetic}),(0,I.jsxs)(`div`,{className:`lesson-definition`,children:[(0,I.jsx)(`span`,{children:`释义`}),(0,I.jsx)(`p`,{className:`meaning`,children:e.subtitle})]}),(0,I.jsxs)(`div`,{className:`lesson-meta`,"aria-live":`polite`,children:[d.self!==`unmarked`&&(0,I.jsx)(`span`,{children:g?d.self===`learned`?`自评：已完成学习`:`自评：已有基础`:d.self===`learned`?`自评：已学`:`已知道`}),p!==`unverified`&&(0,I.jsx)(`span`,{children:p===`passed`?`已客观答对`:p===`self-checked`?`已自行核对`:`需要巩固`}),d.flags.map(e=>(0,I.jsx)(`span`,{children:e===`important`?`重点`:`难点`},e)),f&&(0,I.jsx)(`span`,{children:f.paused?`复习已暂停`:`下次复习 ${b(f.due)}`})]}),!!f&&f.lapses>=3&&(0,I.jsx)(`p`,{className:`memory-relearn`,children:`这项内容反复忘记过，先回看讲解、例句并练一次，再继续回忆。`}),g?(0,I.jsx)(Di,{item:e,onBack:c}):(0,I.jsxs)(`div`,{className:`lesson-reading`,children:[(0,I.jsxs)(`section`,{className:`lesson-explanation`,"aria-label":`用法说明`,children:[(0,I.jsx)(`h3`,{children:`用法说明`}),(0,I.jsx)(`p`,{children:e.explanation})]}),!!e.examples.length&&(0,I.jsxs)(`section`,{className:`lesson-examples`,"aria-label":`例句与语境`,children:[(0,I.jsx)(`h3`,{children:`例句与语境`}),e.examples.map((e,t)=>(0,I.jsxs)(`div`,{className:`example`,children:[(0,I.jsx)(`span`,{className:`example-index`,"aria-label":`例句 ${t+1}`,children:String(t+1).padStart(2,`0`)}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`p`,{lang:`en`,children:e.en}),(0,I.jsx)(`p`,{children:e.zh}),e.structure&&(0,I.jsx)(`small`,{children:e.structure})]})]},t))]}),!!e.extra?.length&&(0,I.jsxs)(`section`,{className:`lesson-phrases`,"aria-label":`搭配与补充`,children:[(0,I.jsx)(`h3`,{children:`搭配与补充`}),e.extra.map(e=>(0,I.jsx)(`p`,{className:`phrase`,children:e},e))]})]}),(0,I.jsxs)(`details`,{className:`lesson-record-disclosure`,children:[(0,I.jsxs)(`summary`,{children:[(0,I.jsx)(`span`,{children:`学习与复习记录`}),(0,I.jsxs)(`span`,{children:[f?f.paused?`已暂停`:`已安排复习`:`尚未加入复习`,(0,I.jsx)(ie,{size:16,"aria-hidden":`true`})]})]}),(0,I.jsx)(`p`,{className:`lesson-memory-note`,children:x}),(0,I.jsxs)(`div`,{className:`memory-evidence`,children:[(0,I.jsx)(`strong`,{children:S}),(0,I.jsxs)(`span`,{children:[`客观答对 `,m.objectiveDays,` 天 · 自行核对 `,m.selfRounds,` 轮`]})]})]}),e.kind===`word`&&t.settings.includeSpelling&&o&&(0,I.jsxs)(`div`,{className:`optional-spelling`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`strong`,{children:`可选拼写练习`}),(0,I.jsx)(`p`,{children:`拼写结果单独记录，不影响词义理解记录与复习计划。`})]}),(0,I.jsx)(`button`,{onClick:o,children:`加练拼写`})]}),(0,I.jsxs)(`div`,{className:`lesson-footer mobile-study-cta`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`strong`,{children:g?d.self===`learned`?`已记录学习自评`:`完成讲解与练习，再记录自评`:d.self===`learned`?`已记录学习，按计划继续巩固`:`理解后，记录这次学习`}),(0,I.jsx)(`p`,{children:g?`独立验收使用新材料；作答后按核对标准检查。`:h?_?`复习与独立小测分别记录；稍后可用新题目检查。`:`小测题目待完善，仍可通过自评回忆继续复习。`:p===`passed`?`后续按复习计划巩固。`:`记录已学后自动安排明天复习；独立小测另外记录。`})]}),v&&(0,I.jsx)(`button`,{className:`desktop-only`,onClick:i,children:`开始复习`}),_&&(0,I.jsx)(`button`,{className:`mobile-only`,onClick:a,children:g?`独立验收`:`做个小测`}),d.self===`learned`?(0,I.jsxs)(`button`,{className:`primary`,onClick:s,children:[`继续学习 `,(0,I.jsx)(M,{size:17,"aria-hidden":`true`})]}):(0,I.jsxs)(`button`,{className:`primary`,onClick:()=>r(`learned`),children:[g?`完成学习`:`记录已学`,` `,(0,I.jsx)(re,{size:17,"aria-hidden":`true`})]})]})]}),(0,I.jsxs)(`aside`,{className:`lesson-guide`,children:[(0,I.jsx)(`h2`,{children:`学习记录`}),(0,I.jsxs)(`div`,{className:`detail-quick-actions`,children:[(0,I.jsxs)(`button`,{"aria-pressed":d.flags.includes(`important`),onClick:()=>r(`important`),children:[(0,I.jsx)(pe,{size:18}),d.flags.includes(`important`)?`已标记重点`:`标记重点`]}),(0,I.jsxs)(`button`,{"aria-pressed":d.flags.includes(`difficult`),onClick:()=>r(`difficult`),children:[(0,I.jsx)(se,{size:18}),d.flags.includes(`difficult`)?`已标记难点`:`标记难点`]}),(0,I.jsxs)(`button`,{"aria-pressed":!!f&&!f.paused,onClick:()=>r(`review`),children:[(0,I.jsx)(P,{size:18}),f?f.paused?`恢复复习`:`暂停复习`:`加入复习`]})]}),(0,I.jsx)(`p`,{children:e.kind===`word`?`隔开时间，先回忆再核对。`:`先理解，再独立验证。`}),(0,I.jsx)(`div`,{className:`divider`}),(0,I.jsxs)(`dl`,{children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`我的自评`}),(0,I.jsx)(`dd`,{children:d.self===`unmarked`?`还未标记`:g?d.self===`learned`?`已完成学习`:`已有基础`:d.self===`learned`?`已学`:`已知道`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:g?`独立验收`:`独立小测`}),(0,I.jsx)(`dd`,{children:p===`passed`?`已客观答对`:p===`self-checked`?`已自行核对`:p===`needs-review`?`需巩固`:h?g?`等待验收`:`等待小测`:`尚未验证`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`收藏`}),(0,I.jsx)(`dd`,{children:d.favorite?`已收藏`:`未收藏`})]}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`dt`,{children:`复习计划`}),(0,I.jsx)(`dd`,{children:f?f.paused?`已暂停`:b(f.due):`尚未加入`})]})]}),(0,I.jsx)(`div`,{className:`divider`}),(0,I.jsx)(`p`,{children:g?`课堂练习、自评与独立验收分别保存。开放答案由你依据参考和标准核对。`:`已学、自行核对与客观答对分别记录。按计划跨天回忆，才能积累长期记忆的证据。`}),_?(0,I.jsx)(`button`,{className:`primary`,onClick:a,children:g?`开始独立验收`:`做个小测`}):(0,I.jsx)(`p`,{children:`教学小测待完善`}),(0,I.jsx)(`button`,{className:`text-link`,onClick:c,children:`返回目录`})]})]})}function Ji({state:e,book:t,due:n,now:r,open:i,follow:a,beginReview:o,beginCheck:s,navigate:c}){let[u,d]=(0,l.useState)(0),[f,p]=(0,l.useState)(`due`),m=mi(e,r),{learned:h,remaining:g,limit:_,backlog:v}=hi(e,r),y=g>0&&!v,b=e=>new Intl.DateTimeFormat(`zh-CN`,{timeZone:`Asia/Shanghai`,month:`long`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}).format(e),x=Kr(Nr(r)),S=(t,n)=>{let r=e.cards[t.id];return r?b(n===`明天`&&Kr(r.due)!==x&&r.nextDayReviewAt!==void 0?r.nextDayReviewAt:r.due):`查看学习内容`},C=Object.entries(e.cards).filter(([t,n])=>!n.paused&&e.marks[t]&&(!e.marks[t].ref.level||e.marks[t].ref.level===e.settings.level)).flatMap(([,e])=>[e.due,e.nextDayReviewAt]).filter(e=>typeof e==`number`&&e>r).sort((e,t)=>e-t)[0],w=t?.words.filter(n=>{let r=pi(n,e.settings.level,t?.book.id);return!e.attempts.some(e=>e.itemId===r.id)&&![`known`,`learned`].includes(Or(e,r).self)}).slice(0,20)??[],T=w[Math.min(u,Math.max(0,w.length-1))],E=si.find(t=>t.id===e.resume?.targetId&&![`passed`,`self-checked`].includes(Ur(e,t.id)))??si.find(t=>t.track!==`advanced`&&![`passed`,`self-checked`].includes(Ur(e,t.id)))??si[0],D=e.resume?.view===`words`?t?.words.find(t=>t.id===e.resume?.targetId):null,O=D&&![`known`,`learned`].includes(Or(e,pi(D,e.settings.level,t?.book.id)).self)&&y?pi(D,e.settings.level,t?.book.id):e.resume?.view===`grammar`&&![`passed`,`self-checked`].includes(Ur(e,E.id))?E:null,k=O??(T&&y?pi(T,e.settings.level,t?.book.id):E),A=Object.values(e.checks).filter(t=>!t.ref.level||t.ref.level===e.settings.level).sort((e,t)=>e.requestedAt-t.requestedAt).filter(n=>{if(n.ref.kind===`word`)return!0;let r=n.ref.kind===`grammar`?li(n.ref.targetId):t?.words.find(e=>e.id===n.ref.targetId);if(!r)return!1;let i=`verificationSize`in r?r:pi(r,e.settings.level,t?.book.id);return i.questions.length>=i.verificationSize}),j=()=>n[0]?o(n[0]):i(k),ee={"high-school":`高中英语`,cet4:`大学四级`,cet6:`大学六级`};return(0,I.jsxs)(I.Fragment,{children:[A.length>0&&(0,I.jsxs)(`section`,{className:`pending-checks`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`strong`,{children:`给刚学会的内容一个小考验`}),(0,I.jsxs)(`p`,{children:[A[0].ref.title,` · `,A.length,` 项待小测`]})]}),(0,I.jsxs)(`button`,{onClick:()=>s(A[0].ref),children:[`做个小测`,(0,I.jsx)(M,{size:17})]})]}),(0,I.jsxs)(`div`,{className:`desk-composition`,children:[(0,I.jsxs)(`section`,{className:`daily-plan`,"aria-label":`今日学习顺序`,children:[(0,I.jsxs)(`div`,{className:`plan-intro`,children:[(0,I.jsx)(`h2`,{children:`今日计划`}),(0,I.jsx)(`span`,{children:`按自己的节奏`})]}),(0,I.jsxs)(`button`,{className:`plan-step`,onClick:()=>n[0]?o(n[0]):c(`collection`),children:[n.length?(0,I.jsx)(F,{size:25}):(0,I.jsx)(re,{size:25,className:`step-complete`}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:`到期复习`}),(0,I.jsx)(`small`,{children:n.length?`${n.length} 个待复习`:`暂无到期内容`})]})]}),(0,I.jsxs)(`button`,{className:`plan-step${!n.length&&y?` is-current`:``}`,disabled:!t,onClick:()=>T&&y?i(pi(T,e.settings.level,t?.book.id)):c(`words`),children:[(0,I.jsx)(F,{size:25,fill:!n.length&&y?`currentColor`:`none`}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:v?`先巩固旧词`:`学习新词`}),(0,I.jsx)(`small`,{children:v?`暂停推荐 · 可浏览词书`:_===0?`今日暂停推荐`:`${h} / ${_} 个${g?``:` · 已完成`}`})]})]}),(0,I.jsxs)(`button`,{className:`plan-step`,onClick:()=>i(E),children:[(0,I.jsx)(F,{size:25}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:`语法课程`}),(0,I.jsx)(`small`,{children:E.title})]})]})]}),(0,I.jsxs)(`section`,{className:`home-reading`,"aria-label":`下一项学习内容`,children:[(0,I.jsx)(`div`,{className:`reading-intent`,children:n.length?`先巩固，再往前`:O?`接着上次的位置`:`从这里开始`}),(0,I.jsxs)(`div`,{className:`reading-context`,children:[(0,I.jsxs)(`span`,{children:[k.kind===`word`&&!n.length?t?.book.title??ee[e.settings.level]:ee[e.settings.level],` / `,n.length?`到期复习`:k.kind===`word`?`单词学习`:`语法学习`]}),T&&y&&!O&&!n.length&&(0,I.jsxs)(`div`,{className:`preview-navigation`,children:[(0,I.jsxs)(`span`,{children:[Math.min(u+1,w.length),` / `,w.length]}),(0,I.jsx)(`button`,{className:`icon-action`,"aria-label":`预览上一个单词`,disabled:u===0||!!n.length,onClick:()=>d(e=>e-1),children:(0,I.jsx)(ae,{size:22})}),(0,I.jsx)(`button`,{className:`icon-action`,"aria-label":`预览下一个单词`,disabled:u>=w.length-1||!!n.length,onClick:()=>d(e=>e+1),children:(0,I.jsx)(oe,{size:22})})]})]}),t?(0,I.jsxs)(`div`,{className:`reading-body`,children:[(0,I.jsx)(`h2`,{className:(n[0]?.kind??k.kind)===`word`?`home-word`:`home-lesson-title`,lang:(n[0]?.kind??k.kind)===`word`?`en`:void 0,children:n[0]?.title??k.title}),(0,I.jsxs)(`div`,{className:`phonetic-line`,children:[!n.length&&k.phonetic&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`span`,{children:k.phonetic}),(0,I.jsx)(vi,{text:k.title})]}),!!n.length&&(0,I.jsx)(`span`,{className:`recall-prompt`,children:`先回忆它的核心含义或用法`})]}),(0,I.jsx)(`div`,{className:`reading-divider`}),(0,I.jsx)(`p`,{className:`home-meaning`,children:n[0]?.kind===`word`?`先独立判断词义，再看答案。`:n.length?`先试着想起，再查看答案与解释。`:k.subtitle}),!n.length&&k.examples[0]&&(0,I.jsxs)(`div`,{className:`home-example`,children:[(0,I.jsx)(`p`,{lang:`en`,children:k.examples[0].en}),(0,I.jsx)(`p`,{children:k.examples[0].zh})]}),!n.length&&!k.examples.length&&(0,I.jsx)(`p`,{className:`muted-note`,children:k.course?k.course.objectives[0]:`例句配套待完善，先结合词义学习。`}),(0,I.jsxs)(`div`,{className:`reading-actions`,children:[(0,I.jsxs)(`button`,{className:`primary`,onClick:j,children:[n.length?`开始复习`:O?`继续学习`:`开始学习`,(0,I.jsx)(M,{size:19})]}),n.length?(0,I.jsx)(`button`,{className:`text-link`,onClick:()=>c(`collection`),children:`查看复习列表`}):null,(0,I.jsx)(`button`,{className:`text-link browse-link`,onClick:()=>c(k.kind===`word`?`words`:`grammar`),children:k.kind===`word`?`浏览词书`:`浏览课程`})]})]}):(0,I.jsxs)(`div`,{className:`reading-body loading-reading`,"aria-busy":`true`,children:[(0,I.jsx)(`div`,{className:`skeleton skeleton-title`}),(0,I.jsx)(`div`,{className:`skeleton skeleton-line`}),(0,I.jsx)(`p`,{children:`正在加载词书…`})]})]})]}),(0,I.jsxs)(`section`,{className:`memory-schedule`,"aria-labelledby":`memory-schedule-title`,children:[(0,I.jsxs)(`header`,{children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h2`,{id:`memory-schedule-title`,children:`复习安排`}),(0,I.jsx)(`p`,{children:`今天学，明天复习；之后按实际回忆调整。`})]}),C&&(0,I.jsxs)(`span`,{children:[`最近一次：`,b(C)]})]}),(0,I.jsx)(`div`,{className:`schedule-tabs`,role:`group`,"aria-label":`复习时间`,children:[{id:`due`,label:`到期`,items:n},{id:`later`,label:`今天稍后`,items:m.laterToday},{id:`tomorrow`,label:`明天`,items:m.tomorrow}].map(e=>(0,I.jsxs)(`button`,{"aria-pressed":f===e.id,onClick:()=>p(e.id),children:[e.label,(0,I.jsx)(`span`,{children:e.items.length})]},e.id))}),(()=>{let e=f===`due`?n:f===`later`?m.laterToday:m.tomorrow,t=f===`due`;return(0,I.jsx)(`div`,{className:`schedule-content`,role:`region`,"aria-label":f===`due`?`到期复习`:f===`later`?`今天稍后复习`:`明天复习`,children:e.length?(0,I.jsx)(`ul`,{children:e.map(e=>(0,I.jsx)(`li`,{children:(0,I.jsxs)(`button`,{onClick:()=>t?o(e):a(e),children:[(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{lang:e.kind===`word`?`en`:void 0,children:e.title}),(0,I.jsx)(`small`,{children:t?`先回忆，再核对`:S(e,f===`tomorrow`?`明天`:`今天稍后`)})]}),(0,I.jsx)(M,{size:16,"aria-hidden":`true`})]})},e.id))}):(0,I.jsxs)(`div`,{className:`schedule-empty`,children:[(0,I.jsx)(re,{size:18,"aria-hidden":`true`}),(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`strong`,{children:t?`目前没有到期内容`:`这一时段暂无安排`}),(0,I.jsx)(`p`,{children:t?`可以开始新词或继续课程。`:`完成学习后，会按真实回忆结果安排复习。`})]}),t&&(0,I.jsxs)(`button`,{className:`text-link`,onClick:()=>c(`words`),children:[`去词书看看`,(0,I.jsx)(M,{size:16})]})]})})})(),v?(0,I.jsx)(`p`,{className:`memory-load-note`,children:`有逾期内容待巩固，今天先暂停新词推荐。做多少都算进展，也可以继续浏览词书。`}):null,(0,I.jsxs)(`details`,{className:`memory-method`,children:[(0,I.jsx)(`summary`,{children:`复习怎样安排？`}),(0,I.jsx)(`p`,{className:`memory-help`,children:`每个人、每个知识点的记忆表现都不同。系统按答题结果调整；答错后更早安排。提前浏览和拼写加练不增加词义巩固证据。`})]})]}),(0,I.jsxs)(`section`,{className:`foundation`,children:[(0,I.jsxs)(`header`,{className:`section-head`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`h2`,{children:`基础语法`}),(0,I.jsx)(`p`,{children:`系统学习语法知识，打好英语基础。`})]}),(0,I.jsxs)(`button`,{className:`text-link`,onClick:()=>c(`grammar`),children:[`全部课程`,(0,I.jsx)(M,{size:19})]})]}),(0,I.jsx)(`div`,{className:`foundation-list`,children:si.slice(0,3).map(e=>(0,I.jsxs)(`button`,{onClick:()=>i(e),children:[(0,I.jsx)(ne,{size:31,strokeWidth:1.4}),(0,I.jsxs)(`span`,{children:[(0,I.jsx)(`strong`,{children:e.title}),(0,I.jsxs)(`small`,{children:[e.course?.practice.length??e.examples.length,` 道练习 · `,e.questions.length,` 道验收`]})]}),(0,I.jsx)(M,{size:19})]},e.id))})]})]})}var Yi=`english-workbench-v1`,Xi=class{database=null;queue=Promise.resolve();listeners=new Set;channel=null;name;factory;constructor(e=Yi,t=globalThis.indexedDB){this.name=e,this.factory=t}async open(){if(!this.factory)throw Error(`当前浏览器无法保存学习记录，请使用支持本地存储的浏览器。`);return this.database=await new Promise((e,t)=>{let n=this.factory.open(this.name,1);n.onupgradeneeded=()=>{n.result.objectStoreNames.contains(`state`)||n.result.createObjectStore(`state`)},n.onsuccess=()=>e(n.result),n.onerror=()=>t(n.error),n.onblocked=()=>t(Error(`另一个页面正在更新记录，请关闭旧页面后重试。`))}),this.database.onversionchange=()=>this.close(),typeof BroadcastChannel<`u`&&(this.channel=new BroadcastChannel(this.name),this.channel.onmessage=()=>{this.read().then(e=>this.emit(e)).catch(()=>{})}),this.read()}subscribe(e){return this.listeners.add(e),()=>this.listeners.delete(e)}emit(e){for(let t of this.listeners)t(e)}async read(){if(!this.database)throw Error(`学习记录尚未打开，请稍后重试。`);return new Promise((e,t)=>{let n=this.database.transaction(`state`,`readonly`),r=pr(),i=n.objectStore(`state`).get(`current`);i.onsuccess=()=>{try{r=i.result?Tr(i.result):pr()}catch(e){t(e)}},n.oncomplete=()=>e(r),n.onerror=()=>t(n.error),n.onabort=()=>t(n.error??Error(`读取学习记录失败。`))})}mutate(e){let t=this.queue.then(()=>new Promise((t,n)=>{if(!this.database)return n(Error(`记录未打开，本次操作未保存。`));let r=this.database.transaction(`state`,`readwrite`),i=r.objectStore(`state`),a,o=i.get(`current`);o.onsuccess=()=>{try{let t=o.result?Tr(o.result):pr();a=Tr({...e(t),revision:t.revision+1}),i.put(a,`current`)}catch(e){r.abort(),n(e)}},r.oncomplete=()=>{this.emit(a),this.channel?.postMessage({revision:a.revision}),t(a)},r.onerror=()=>n(Error(`保存失败，可能是浏览器空间不足。原有记录仍保留，请先导出备份。`)),r.onabort=()=>n(r.error??Error(`保存失败，本次操作未完成。`))}));return this.queue=t.catch(()=>{}),t}replace(e){let t=Tr(e);return this.mutate(()=>t)}close(){this.channel?.close(),this.channel=null,this.database?.close(),this.database=null}};function Zi(e,t){let n=e.settings.level;return t.find(t=>t.goal===n&&t.id===e.settings.wordBooks?.[n])??t.find(e=>e.goal===n&&e.id===n)??t.find(e=>e.goal===n)}function Qi(e,t){if(t.goal!==e.settings.level)throw Error(`请选择当前学习目标的词书。`);return{...e,settings:{...e.settings,wordBooks:{...e.settings.wordBooks,[t.goal]:t.id}},resume:e.resume?.view===`words`?null:e.resume}}function $i(e,t){return t.find(t=>t.goal===e.level&&t.id===e.bookId)??t.find(t=>t.goal===e.level&&t.sourceIds.includes(e.source))}var ea=[`today`,`words`,`grammar`,`exams`,`collection`,`settings`];function ta(e){return`#`+e.view+(e.item?`/`+encodeURIComponent(e.item.id):``)}function na(){let[e,t]=(0,l.useState)(pr),[n,r]=(0,l.useState)(!1),[i,a]=(0,l.useState)(`today`),[o,s]=(0,l.useState)([]),[c,u]=(0,l.useState)(null),[d,f]=(0,l.useState)(null),[p,m]=(0,l.useState)(``),[h,x]=(0,l.useState)(null),[S,C]=(0,l.useState)(()=>Date.now()),[w,T]=(0,l.useState)(null),[E,D]=(0,l.useState)(!1),[O,k]=(0,l.useState)(null),[A,j]=(0,l.useState)(0),[ee,te]=(0,l.useState)(`words`),[M,ne]=(0,l.useState)(!1),[N,P]=(0,l.useState)(``),re=Zi(e,o),ie=re?.id??e.settings.level,ae=c?.book.id===ie?c:null,[oe,se]=(0,l.useState)(!1),[F,ce]=(0,l.useState)(``),[le,ue]=(0,l.useState)(0),de=(0,l.useRef)(new Map),fe=(0,l.useCallback)(async e=>{let t=de.current.get(e.id);if(t)return t;let n=await fetch(e.url);if(!n.ok)throw Error(`词书加载失败，请重试。`);let r=await n.json();if(r.book.id!==e.id||!r.words?.length)throw Error(`词书内容不完整，请重试。`);return de.current.set(e.id,r),r},[]),pe=(0,l.useRef)(null),me=(0,l.useRef)(0),he=(0,l.useRef)(null),ge=(0,l.useRef)(`today`),_e=(0,l.useRef)({}),ve=(0,l.useRef)(null),ye=(0,l.useRef)(0),be=(0,l.useRef)(!1),xe=(0,l.useCallback)(()=>({view:i,item:d,scroll:window.scrollY,origin:ge.current,originScroll:me.current,learningView:ee,depth:ye.current}),[i,d,ee]);function Se(){!d&&!w&&(_e.current[i]=window.scrollY,v(`page-scroll`,_e.current)),history.replaceState({...history.state,workbench:xe()},``,ta(xe()))}let Ce=(0,l.useCallback)(e=>{let t=ea.includes(e.view)?e.view:`today`;ye.current=e.depth||0,f(e.item?.kind===`grammar`?li(e.item.targetId)??null:e.item??null),a(t),ge.current=e.origin??t,me.current=e.originScroll??0,te(e.learningView??`words`),requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:e.scroll??0,behavior:`auto`})))},[]);function we(e){if(e===i&&!d)return;Se(),f(null),a(e);let t=[`words`,`grammar`,`exams`].includes(e)?e:ee;[`words`,`grammar`,`exams`].includes(e)&&te(e),ye.current++;let n={view:e,item:null,scroll:_e.current[e]??0,origin:e,originScroll:0,learningView:t,depth:ye.current};history.pushState({workbench:n},``,ta(n)),requestAnimationFrame(()=>requestAnimationFrame(()=>window.scrollTo({top:n.scroll,behavior:`auto`})))}function Te(e){w?(ve.current=()=>we(e),j(e=>e+1)):we(e)}function Ee(){let e=document.querySelector(`.goal-menu[open],.learning-menu[open],.course-records[open]`);return e?(e.open=!1,e.querySelector(`summary`)?.focus(),!0):!1}function De(){if(!E&&!Ee()){if(w){j(e=>e+1);return}if(ye.current>0){history.back();return}d?(f(null),a(ge.current),requestAnimationFrame(()=>window.scrollTo({top:me.current,behavior:`auto`}))):Te(`today`)}}function Oe(e){if(e===`stay`){ve.current&&history.pushState({workbench:xe()},``,ta(xe())),ve.current=null;return}v(`quiz-active`,!1),T(null),k(y());let t=ve.current;ve.current=null,t?t():requestAnimationFrame(()=>he.current?.focus())}(0,l.useEffect)(()=>{queueMicrotask(()=>{_e.current=_(`page-scroll`,{}),k(y());let e=history.state?.workbench;e&&ea.includes(e.view)?Ce(e):history.replaceState({workbench:{view:`today`,item:null,scroll:0,origin:`today`,originScroll:0,learningView:`words`,depth:0}},``,`#today`)})},[Ce]),(0,l.useEffect)(()=>{function e(e){let t=e.state?.workbench??{view:`today`,item:null,scroll:0,origin:`today`,originScroll:0,learningView:`words`,depth:0};if(Ee()){history.pushState({workbench:xe()},``,ta(xe()));return}w?(ve.current=()=>Ce(t),j(e=>e+1)):Ce(t)}function t(e){e.key===`Escape`&&!E&&!document.querySelector(`dialog[open]`)&&(w?(e.preventDefault(),j(e=>e+1)):Ee()&&e.preventDefault())}return window.addEventListener(`popstate`,e),document.addEventListener(`keydown`,t),()=>{window.removeEventListener(`popstate`,e),document.removeEventListener(`keydown`,t)}},[Ce,xe,w,E]),(0,l.useEffect)(()=>{let e=new Xi;pe.current=e;let n=e.subscribe(t);e.open().then(e=>{t(e),r(!0)}).catch(e=>{P(e.message),m(e.message)}),fetch(`/content/books.json`).then(e=>e.json()).then(e=>s(e)).catch(()=>m(`词书加载失败，请刷新重试。`));let i=setInterval(()=>C(Date.now()),15e3);return()=>{n(),e.close(),clearInterval(i)}},[]),(0,l.useEffect)(()=>{if(!re)return;let e=!0;return queueMicrotask(()=>ce(``)),fe(re).then(t=>{e&&u(t)}).catch(t=>{e&&ce(t.message)}),()=>{e=!1}},[re,fe,le]);async function ke(e){try{return await pe.current.mutate(e)}catch(e){return m(e.message),null}}async function Ae(r){if(!n||M||oe||r===e.settings.level)return;let a=e;ne(!0),f(null),T(null),t(Lr(e,r)),history.replaceState({workbench:{view:i,item:null,scroll:0,origin:i,originScroll:0,learningView:ee,depth:ye.current}},``,`#`+i),window.scrollTo({top:0,behavior:`auto`}),await ke(e=>Lr(e,r))||t(a),ne(!1)}async function je(r){if(!n||oe||r.id===ie)return;let i=e;se(!0),t(Qi(e,r)),await ke(e=>Qi(e,r))||t(i),se(!1)}function Me(e){d||(Se(),me.current=window.scrollY,ge.current=i,ye.current++),f(e),a(e.view);let t={view:e.view,item:e,scroll:0,origin:ge.current,originScroll:me.current,learningView:ee,depth:ye.current};d?history.replaceState({workbench:t},``,ta(t)):history.pushState({workbench:t},``,ta(t)),window.scrollTo({top:0,behavior:`auto`}),ke(t=>({...t,resume:{view:e.view,targetId:e.targetId,title:e.title,at:Date.now()}}))}let Pe=(0,l.useCallback)(async e=>{if(e.kind===`grammar`)return li(e.targetId)??null;try{let t=$i(e,o);if(!t)throw Error(`找不到原始词书`);let n=(await fe(t)).words.find(t=>t.id===e.targetId);if(!n)throw Error(`找不到原始词目`);return pi(n,t.goal,t.id)}catch{return m(`无法打开原始内容，请稍后重试。`),null}},[o,fe]);async function Fe(e){let t=await Pe(e);t&&Me(t)}async function Ie(e){let t=await Pe(e);t&&z(t)}async function L(e){let t=await Pe(e);t&&z(t,`review`)}let R=(0,l.useCallback)((t,n,r)=>{if(r?.questionIds[0]===`${t.id}-spelling`)return di(t);let i=new Set(e.attempts.filter(e=>e.itemId===t.id&&e.mode===`review`&&!Hr(e)&&Kr(e.at)!==Kr(Date.now())).map(e=>Kr(e.at))).size,a=r?.questionIds[0],s=`${t.id}-meaning-`,c=a===`${t.id}-spelling`?0:a?.startsWith(s)?Number(a.slice(s.length)):void 0,l=c!==void 0&&Number.isSafeInteger(c)&&c>=0?c:i,u=$i(t,o),d=u?de.current.get(u.id):void 0,f=d?.words.find(e=>e.id===t.targetId),p=d?.words.findIndex(e=>e.id===t.targetId)??-1,m=d&&p>=0?[...d.words.slice(p+1),...d.words.slice(0,p)]:[];return fi(t,n,{reviewIndex:l,distractors:m.filter(e=>e.senses[0]?.pos===f?.senses[0]?.pos).map(e=>e.senses.map(e=>`${e.pos} ${e.meaning}`).join(`；`)),contextDistractors:m.flatMap(e=>e.examples.map(e=>e.zh))})},[e.attempts,o]);function z(t,n=`verification`,r=!1){let i=y();if(i&&e.attempts.some(e=>e.id===i.id))b(),k(null);else if(i&&i.ref.id!==t.id){k(i),m(`还有一轮未完成的小测，请先继续或放弃本轮。`);return}let a=i&&!e.attempts.some(e=>e.id===i.id)?i:null,o=a?.mode??n,s=r&&!a?di(t):R(t,o,a);if(s.verificationSize<=0||s.questions.length<s.verificationSize){m(`教学配套待完善，暂不开放验收。`);return}let c=a&&g(a,s);a&&!c&&(b(),k(null),m(`题目已更新，已开始新一轮验收。`)),he.current=document.activeElement instanceof HTMLElement?document.activeElement:null,v(`quiz-active`,!0),T({item:s,mode:o,id:c?a.id:crypto.randomUUID()})}async function Le(e,t){if(!w||E)return;let n=ur(w.item,e);if(!n.complete){m(`请完成作答并核对全部标准。`);return}D(!0);try{let r=await pe.current.mutate(r=>Br(r,w.item,{id:w.id,itemId:w.item.id,at:Date.now(),mode:w.mode,passed:n.passed,responses:e},t));if(b(),v(`quiz-active`,!1),k(null),T(null),requestAnimationFrame(()=>he.current?.focus()),w.item.reviewMethod===`spelling`){m(n.passed?`本轮拼写正确，已单独记录加练结果。`:`本轮拼写需要巩固，已单独记录加练结果。`);return}let i=new Intl.DateTimeFormat(`zh-CN`,{timeZone:`Asia/Shanghai`,month:`numeric`,day:`numeric`,hour:`2-digit`,minute:`2-digit`}).format(r.cards[w.item.id].due);m(`${n.passed?n.selfAssessed?`已保存你的核对结果。`:`本轮答题通过。`:`已保存需要巩固的内容。`}下次复习：${i}。`)}catch(e){m(e.message)}finally{D(!1)}}async function Re(e){if(!d)return;let t=d;await ke(n=>{let r=Or(n,t);return e===`favorite`?Ar(n,t,{favorite:!r.favorite}):e===`important`||e===`difficult`?Ar(n,t,{flags:r.flags.includes(e)?r.flags.filter(t=>t!==e):[...r.flags,e]}):e===`known`?Ar(n,t,{self:`known`}):e===`review`?zr(n,t,!n.cards[t.id]||n.cards[t.id].paused):e===`restart`?Ir(n,t):Fr(n,t)})}async function ze(){if(d?.kind===`word`){let t=$i(d,o);if(t)try{let n=await fe(t),r=n.words.findIndex(e=>e.id===d.targetId),i=r>=0?n.words.slice(r+1).find(n=>![`known`,`learned`].includes(Or(e,pi(n,t.goal)).self)):void 0;if(i){Me(pi(i,t.goal,t.id));return}}catch{m(`词书加载失败，请重试。`);return}}if(d?.kind===`grammar`){let e=ci(d.id);if(e){Me(e);return}}Te(`today`)}let Be=Wr(e,S).filter(t=>!t.level||t.level===e.settings.level);async function Ve(){let t=y();if(!t)return;if(e.attempts.some(e=>e.id===t.id)){b(),k(null),m(`本轮已经保存。`);return}let n=await Pe(t.ref),r=n?R(n,t.mode,t):null;if(!r||!g(t,r)){b(),k(null),m(`题目内容已更新，请重新开始小测。`);return}he.current=document.activeElement instanceof HTMLElement?document.activeElement:null,v(`quiz-active`,!0),T({item:r,mode:t.mode,id:t.id})}return(0,l.useEffect)(()=>{if(!n||!ae||be.current||(be.current=!0,!_(`quiz-active`,!1)))return;let t=y();if(!t)return;let r=!0;return queueMicrotask(()=>{Pe(t.ref).then(n=>{if(!r)return;let i=n?R(n,t.mode,t):null;if(!i||!g(t,i)||e.attempts.some(e=>e.id===t.id)){b(),v(`quiz-active`,!1),k(null),m(`题目已更新或本轮已经保存，请重新开始。`);return}T({item:i,mode:t.mode,id:t.id})})}),()=>{r=!1,be.current=!1}},[n,ae,Pe,e.attempts,R]),(0,I.jsx)(Ne,{view:i,learningView:ee,level:e.settings.level,ready:n&&!M&&!oe,due:Be.length,now:S,detail:!!d,quiz:!!w,notice:p,onDismiss:()=>m(``),onNavigate:Te,onLevel:Ae,onBack:De,children:n?w?(0,I.jsx)(ri,{round:w,saving:E,exitRequest:A,onExit:Oe,onFinish:Le},w.id):d?(0,I.jsx)(qi,{item:d,sourceLabel:$i(d,o)?.title,state:e,now:S,onAction:Re,onCheck:()=>z(d),onReview:()=>z(d,`review`),onSpelling:()=>z(d,`review`,!0),onContinue:ze,onBack:De},d.id):(0,I.jsxs)(I.Fragment,{children:[i===`today`&&F&&(0,I.jsxs)(`section`,{className:`panel`,role:`status`,children:[(0,I.jsx)(`p`,{children:F}),(0,I.jsx)(`button`,{onClick:()=>ue(e=>e+1),children:`重新加载词书`})]}),O&&(0,I.jsxs)(`section`,{className:`pending-checks draft-resume`,children:[(0,I.jsxs)(`div`,{children:[(0,I.jsx)(`strong`,{children:`继续未完成的小测`}),(0,I.jsxs)(`p`,{children:[O.ref.title,` · `,O.stage===`answer`?`作答`:O.stage===`explain`?`解析`:`回忆评分`]})]}),(0,I.jsx)(`button`,{className:`primary`,onClick:Ve,children:`继续本轮`}),(0,I.jsx)(`button`,{onClick:()=>{b(),k(null)},children:`放弃`})]}),i===`today`&&(0,I.jsx)(Ji,{state:e,book:ae,due:Be,now:S,open:Me,follow:Fe,beginCheck:Ie,beginReview:L,navigate:Te},ie),i===`words`&&(0,I.jsx)(ji,{kind:`words`,book:ae,books:o.filter(t=>t.goal===e.settings.level),selectedId:ie,busy:oe||M,error:F,onSelect:je,onRetry:()=>ue(e=>e+1),state:e,onOpen:Me},ie),i===`grammar`&&(0,I.jsx)(ji,{kind:`grammar`,book:ae,state:e,onOpen:Me}),i===`exams`&&(0,I.jsx)(Bi,{level:e.settings.level,onLearn:()=>Te(`words`)},e.settings.level),i===`collection`&&(0,I.jsx)(Ri,{state:e,resolve:Pe,onOpen:Me,onLearn:()=>Te(ee)}),i===`settings`&&(0,I.jsx)(Jr,{state:e,books:o,backup:h,onBackupChange:x,onSave:async e=>!!await ke(t=>({...t,settings:{...t.settings,...e}})),onRestore:async e=>{try{return await pe.current.replace(e),m(`备份已完整恢复。`),!0}catch(e){return m(e.message),!1}}})]}):(0,I.jsx)(`section`,{className:`panel`,children:N?(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`h2`,{children:`本机记录暂时无法读取`}),(0,I.jsx)(`p`,{children:N}),(0,I.jsx)(`button`,{onClick:()=>window.location.reload(),children:`重新读取`})]}):`正在读取本机记录…`})})}var ra=document.getElementById(`root`);if(!ra)throw Error(`Missing application root.`);(0,u.createRoot)(ra).render((0,I.jsx)(na,{}));