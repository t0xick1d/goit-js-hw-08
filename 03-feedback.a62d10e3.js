!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",i=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,f=parseInt,c="object"==typeof e&&e&&e.Object===Object&&e,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),g=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var o,i,a,u,l,f,c=0,s=!1,d=!1,g=!0;if("function"!=typeof e)throw new TypeError(r);function y(t){var n=o,r=i;return o=i=void 0,c=t,u=e.apply(r,n)}function O(e){return c=e,l=setTimeout(h,t),s?y(e):u}function j(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=a}function h(){var e=p();if(j(e))return w(e);l=setTimeout(h,function(e){var n=t-(e-f);return d?m(n,a-(e-c)):n}(e))}function w(e){return l=void 0,g&&o?y(e):(o=i=void 0,u)}function N(){var e=p(),n=j(e);if(o=arguments,i=this,f=e,n){if(void 0===l)return O(f);if(d)return l=setTimeout(h,t),y(f)}return void 0===l&&(l=setTimeout(h,t)),u}return t=S(t)||0,b(n)&&(s=!!n.leading,a=(d="maxWait"in n)?v(S(n.maxWait)||0,t):a,g="trailing"in n?!!n.trailing:g),N.cancel=function(){void 0!==l&&clearTimeout(l),c=0,o=f=i=l=void 0},N.flush=function(){return void 0===l?u:w(p())},N}function b(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==g.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var r=u.test(e);return r||l.test(e)?f(e.slice(2),r?2:8):a.test(e)?NaN:+e}n=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError(r);return b(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),y(e,t,{leading:o,maxWait:t,trailing:i})};var O,j=document.querySelector("input"),h=document.querySelector("textarea"),w=document.querySelector(".feedback-form"),N="feedback-form-state",T={};function x(e){localStorage.key(N)===N&&(T=JSON.parse(localStorage.getItem(N))),console.log("return",localStorage.key(N)===N),console.log("after if");var t=e.target.value,n=e.target.name;T[n]=t,localStorage.setItem(N,JSON.stringify(T))}j.addEventListener("input",n(x,500)),h.addEventListener("input",n(x,500)),w.addEventListener("submit",(function(e){var t=JSON.parse(localStorage.getItem(N)).email,n=JSON.parse(localStorage.getItem(N)).message;console.log("email :",t),console.log("message:",n),e.preventDefault(),localStorage.clear(),j.value="",h.value=""})),(O=JSON.parse(localStorage.getItem(N)))&&O.email&&(j.value=O.email),O&&O.message&&(h.value=O.message)}();
//# sourceMappingURL=03-feedback.a62d10e3.js.map
