webpackJsonp([37],{3:function(n,t,e){"use strict";e(7),e(6);var a=Math.floor(window.devicePixelRatio||1);a>=2&&document.querySelector("html").classList.add("pixel-ratio-"+a)},6:function(n,t){},7:function(n,t){},16:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0});var l=e(1),i=s(l),f=e(21),d=a(f),k=e(19),h=a(k),y=e(20),b=a(y),m=e(22),v=a(m),g=e(2),O=a(g),w=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.children,s=t.className,o=t.style,r=(0,O["default"])((n={},p(n,e,!0),p(n,s,s),n));return i.createElement("div",{className:r,style:o},a)},t}(i.Component);w.defaultProps={prefixCls:"am-list"},w.Header=d["default"],w.Body=h["default"],w.Footer=b["default"],w.Item=v["default"],t["default"]=w,n.exports=t["default"]},17:function(n,t,e){"use strict";e(3),e(24)},19:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),i=s(l),f=e(2),d=a(f),k=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.children,s=t.className,o=t.style,r=(0,d["default"])((n={},p(n,e+"-body",!0),p(n,s,s),n));return i.createElement("div",{className:r,style:o},a)},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-list"},n.exports=t["default"]},20:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),i=s(l),f=e(2),d=a(f),k=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.children,s=t.className,o=t.style,r=t.onClick,c=(0,d["default"])((n={},p(n,e+"-footer",!0),p(n,s,s),n));return i.createElement("div",{className:c,style:o,onClick:r},a)},t}(i.Component);t["default"]=k,k.propTypes={prefixCls:l.PropTypes.string},k.defaultProps={prefixCls:"am-list"},n.exports=t["default"]},21:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),i=s(l),f=e(2),d=a(f),k=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.children,s=t.className,o=t.style,r=t.onClick,c=(0,d["default"])((n={},p(n,e+"-header",!0),p(n,s,s),n));return i.createElement("div",{className:c,style:o,onClick:r},a)},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-list"},n.exports=t["default"]},22:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),i=s(l),f=e(2),d=a(f),k=function(n){function t(e){r(this,t);var a=c(this,n.call(this,e));return a.onClick=function(n){a.props.onClick&&(a.setState({hover:!0}),setTimeout(function(){a.setState({hover:!1})},200),a.props.onClick(n))},a.onTouchStart=function(){a.props.onClick&&a.setState({hover:!0})},a.onTouchEnd=function(){a.props.onClick&&a.setState({hover:!1})},a.state={hover:!1},a}return u(t,n),t.prototype.render=function(){var n,t,e=this.props,a=e.prefixCls,s=e.thumb,o=e.arrow,r=e.error,c=e.children,u=e.extra,l=e.className,f=e.align,k=e.style,h=this.state.hover,y=void 0,b=void 0,m=(0,d["default"])((n={},p(n,a+"-item",!0),p(n,a+"-item-error",r),p(n,a+"-item-top","top"===f),p(n,a+"-item-middle","middle"===f),p(n,a+"-item-bottom","bottom"===f),p(n,a+"-item-hover",h),p(n,l,l),n)),v=(0,d["default"])((t={},p(t,a+"-arrow-horizontal","horizontal"===o),p(t,a+"-arrow-vertical","down"===o||"up"===o),p(t,a+"-arrow-vertical-up","up"===o),t));return s&&(y="string"==typeof s?i.createElement("div",{className:a+"-thumb"},i.createElement("img",{src:s})):i.createElement("div",{className:a+"-thumb"},s)),b=""!==o?"empty"===o?i.createElement("div",{className:a+"-arrow"}):i.createElement("div",{className:a+"-arrow"},i.createElement("span",{className:v})):null,i.createElement("div",{className:m,onClick:this.onClick,onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchEnd,style:k},y,i.createElement("div",{className:a+"-line"},""!==c?i.createElement("div",{className:a+"-content"},c):null,""!==u?i.createElement("div",{className:a+"-extra"},u):null,b))},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-list",thumb:"",arrow:"",children:"",extra:"",error:!1,align:"middle"},n.exports=t["default"]},24:function(n,t){},106:function(n,t,e){"use strict";n.exports=e(120)},109:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function r(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function c(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var u=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},l=e(1),i=s(l),f=e(106),d=a(f),k=function(n){function t(){return p(this,t),r(this,n.apply(this,arguments))}return c(t,n),t.prototype.render=function(){return i.createElement(d["default"],u({},this.props,{type:"radio"}))},t}(i.Component);t["default"]=k,k.defaultProps={prefixCls:"am-radio",name:"",checked:!1,disabled:!1,onChange:function(){}},n.exports=t["default"]},120:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function o(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function p(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a])}return n},u=function(){function n(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(n,a.key,a)}}return function(t,e,a){return e&&n(t.prototype,e),a&&n(t,a),t}}(),l=e(1),i=a(l),f=e(128),d=a(f),k=e(2),h=a(k),y=function(n){function t(n){o(this,t);var e=p(this,Object.getPrototypeOf(t).call(this,n));b.call(e);var a=!1;return a="checked"in n?n.checked:n.defaultChecked,e.state={checked:a,focus:!1},e}return r(t,n),u(t,[{key:"componentWillReceiveProps",value:function(n){"checked"in n&&this.setState({checked:n.checked})}},{key:"shouldComponentUpdate",value:function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];return d["default"].shouldComponentUpdate.apply(this,t)}},{key:"render",value:function(){var n,t=c({},this.props);delete t.defaultChecked;var e=this.state,a=t.prefixCls,o=e.checked;"boolean"==typeof o&&(o=o?1:0);var p=(0,h["default"])((n={},s(n,t.className,!!t.className),s(n,a,1),s(n,a+"-checked",o),s(n,a+"-checked-"+o,!!o),s(n,a+"-focused",e.focus),s(n,a+"-disabled",t.disabled),n));return i["default"].createElement("span",{className:p,style:t.style},i["default"].createElement("span",{className:a+"-inner"}),i["default"].createElement("input",{name:t.name,type:t.type,readOnly:t.readOnly,disabled:t.disabled,className:a+"-input",checked:!!o,onFocus:this.handleFocus,onBlur:this.handleBlur,onChange:this.handleChange}))}}]),t}(i["default"].Component),b=function(){var n=this;this.handleFocus=function(t){n.setState({focus:!0}),n.props.onFocus(t)},this.handleBlur=function(t){n.setState({focus:!1}),n.props.onBlur(t)},this.handleChange=function(t){var e=n.state.checked;"checked"in n.props||n.setState({checked:!e}),n.props.onChange({target:c({},n.props,{checked:!e}),stopPropagation:function(){t.stopPropagation()},preventDefault:function(){t.preventDefault()}})}};t["default"]=y,y.propTypes={name:i["default"].PropTypes.string,prefixCls:i["default"].PropTypes.string,style:i["default"].PropTypes.object,type:i["default"].PropTypes.string,className:i["default"].PropTypes.string,defaultChecked:i["default"].PropTypes.oneOfType([i["default"].PropTypes.number,i["default"].PropTypes.bool]),checked:i["default"].PropTypes.oneOfType([i["default"].PropTypes.number,i["default"].PropTypes.bool]),onFocus:i["default"].PropTypes.func,onBlur:i["default"].PropTypes.func,onChange:i["default"].PropTypes.func},y.defaultProps={prefixCls:"rc-checkbox",style:{},type:"checkbox",className:"",defaultChecked:!1,onFocus:function(){},onBlur:function(){},onChange:function(){}},n.exports=t["default"]},128:function(n,t,e){n.exports=e(129)},129:function(n,t,e){"use strict";var a=e(130),s={shouldComponentUpdate:function(n,t){return a(this,n,t)}};n.exports=s},130:function(n,t,e){"use strict";function a(n,t,e){return!s(n.props,t)||!s(n.state,e)}var s=e(190);n.exports=a},170:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}function s(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e]);return t["default"]=n,t}function o(n,t){for(var e=Object.getOwnPropertyNames(t),a=0;a<e.length;a++){var s=e[a],o=Object.getOwnPropertyDescriptor(t,s);o&&o.configurable&&void 0===n[s]&&Object.defineProperty(n,s,o)}return n}function p(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}function r(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function c(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function u(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var l=e(1),i=s(l),f=e(2),d=a(f),k=e(109),h=a(k),y=e(16),b=a(y),m=b["default"].Item,v=function(n){function t(){return r(this,t),c(this,n.apply(this,arguments))}return u(t,n),t.prototype.render=function(){var n,t=this.props,e=t.prefixCls,a=t.listPrefixCls,s=t.style,o=t.name,r=t.checked,c=t.disabled,u=t.children,l=t.className,f=t.onChange,k=(0,d["default"])((n={},p(n,e+"-item",!0),p(n,e+"-item-disabled",c===!0),p(n,l,l),n));return i.createElement(m,{prefixCls:a,style:s,className:k,extra:i.createElement(h["default"],{checked:r,name:o,onChange:f,disabled:c})},u)},t}(i.Component);t["default"]=v,v.defaultProps={prefixCls:"am-radio",listPrefixCls:"am-list",name:"",checked:!1,disabled:!1,onChange:function(){}},n.exports=t["default"]},171:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(t,"__esModule",{value:!0});var s=e(109),o=a(s),p=e(170),r=a(p);o["default"].RadioItem=r["default"],t["default"]=o["default"],n.exports=t["default"]},362:function(n,t,e){"use strict";e(3),e(17),e(381)},381:function(n,t){},908:function(n,t,e){"use strict";function a(n){return n&&n.__esModule?n:{"default":n}}var s=(e(362),e(171)),o=a(s),p=e(1),r=a(p),c=e(4);a(c);n.exports={content:[["p","Radio"]],meta:{order:0,title:"\u57fa\u672c",filename:"components/radio/demo/basic.md",id:"components-radio-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> Radio <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >let</span> Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >getInitialState</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      disabled<span class="token punctuation" >:</span> <span class="token boolean" >false</span><span class="token punctuation" >,</span>\n      value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        value<span class="token punctuation" >:</span> <span class="token number" >1</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >handleChange2</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>e<span class="token punctuation" >.</span>target<span class="token punctuation" >.</span>checked<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      <span class="token keyword" >this</span><span class="token punctuation" >.</span><span class="token function" >setState</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n        value<span class="token punctuation" >:</span> <span class="token number" >2</span><span class="token punctuation" >,</span>\n      <span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> position<span class="token punctuation" >:</span> <span class="token string" >\'relative\'</span><span class="token punctuation" >,</span> paddingTop<span class="token punctuation" >:</span> <span class="token string" >\'5px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderWidth<span class="token punctuation" >:</span> <span class="token string" >\'1px\'</span><span class="token punctuation" >,</span> borderColor<span class="token punctuation" >:</span> <span class="token string" >\'red\'</span><span class="token punctuation" >,</span> borderStyle<span class="token punctuation" >:</span> <span class="token string" >\'solid\'</span><span class="token punctuation" >,</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'10px 4px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span>\n              <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value <span class="token operator" >===</span> <span class="token number" >1</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange<span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>span</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderWidth<span class="token punctuation" >:</span> <span class="token string" >\'1px\'</span><span class="token punctuation" >,</span> borderColor<span class="token punctuation" >:</span> <span class="token string" >\'rgba(45, 183, 245, 0.7)\'</span><span class="token punctuation" >,</span> borderStyle<span class="token punctuation" >:</span> <span class="token string" >\'solid\'</span><span class="token punctuation" >,</span> margin<span class="token punctuation" >:</span> <span class="token string" >\'10px 4px\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n            <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Radio</span>\n              <span class="token attr-name" >checked</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>state<span class="token punctuation" >.</span>value <span class="token operator" >===</span> <span class="token number" >2</span><span class="token punctuation" >}</span></span>\n              <span class="token attr-name" >onChange</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>handleChange2<span class="token punctuation" >}</span></span>\n            <span class="token punctuation" >/></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>span</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Test</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=r["default"].createClass({displayName:"Test",getInitialState:function(){return{disabled:!1,value:1}},handleChange:function(n){n.target.checked&&this.setState({value:1})},handleChange2:function(n){n.target.checked&&this.setState({value:2})},render:function(){return r["default"].createElement("div",null,r["default"].createElement("div",{style:{position:"relative",paddingTop:"5px"}},r["default"].createElement("span",{style:{borderWidth:"1px",borderColor:"red",borderStyle:"solid",margin:"10px 4px"}},r["default"].createElement(o["default"],{checked:1===this.state.value,onChange:this.handleChange})),r["default"].createElement("span",{style:{borderWidth:"1px",borderColor:"rgba(45, 183, 245, 0.7)",borderStyle:"solid",margin:"10px 4px"}},r["default"].createElement(o["default"],{checked:2===this.state.value,onChange:this.handleChange2}))))}});return r["default"].createElement(n,null)}}}});