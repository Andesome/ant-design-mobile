webpackJsonp([81],{3:function(n,t,a){"use strict";a(7),a(6);var s=Math.floor(window.devicePixelRatio||1);s>=2&&document.querySelector("html").classList.add("pixel-ratio-"+s)},6:function(n,t){},7:function(n,t){},12:function(n,t){"use strict";function a(n,t){var a={},s={};return Object.keys(n).forEach(function(e){t.indexOf(e)!==-1?a[e]=n[e]:s[e]=n[e]}),[a,s]}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=a,n.exports=t["default"]},23:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function u(n){return"string"==typeof n}function i(n){return u(n.type)&&w(n.props.children)?m.cloneElement(n,{},n.props.children.split("").join(" ")):u(n)?(w(n)&&(n=n.split("").join(" ")),m.createElement("span",null,n)):n}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var k=Object.assign||function(n){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var s in a)Object.prototype.hasOwnProperty.call(a,s)&&(n[s]=a[s])}return n},f=function(){function n(n,t){var a=[],s=!0,e=!1,o=void 0;try{for(var p,c=n[Symbol.iterator]();!(s=(p=c.next()).done)&&(a.push(p.value),!t||a.length!==t);s=!0);}catch(l){e=!0,o=l}finally{try{!s&&c["return"]&&c["return"]()}finally{if(e)throw o}}return a}return function(t,a){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,a);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=a(1),m=e(d),b=a(2),g=s(b),y=a(18),h=s(y),v=a(12),O=s(v),j=/^[\u4e00-\u9fa5]{2}$/,w=j.test.bind(j),P=function(n){function t(){c(this,t);for(var a=arguments.length,s=Array(a),e=0;e<a;e++)s[e]=arguments[e];var o=l(this,n.call.apply(n,[this].concat(s)));return o.onClick=function(){o.props.onClick(o)},o}return r(t,n),t.prototype.render=function(){var n,t=(0,O["default"])(this.props,["children","className","prefixCls","type","size","ghost","inline","disabled","htmlType","icon","loading"]),a=f(t,2),s=a[0],e=s.children,o=s.className,c=s.prefixCls,l=s.type,r=s.size,u=s.ghost,d=s.inline,b=s.disabled,y=s.htmlType,v=s.icon,j=s.loading,w=a[1],P=(0,g["default"])((n={},p(n,o,o),p(n,c,!0),p(n,c+"-primary","primary"===l),p(n,c+"-ghost",u),p(n,c+"-warning","warning"===l),p(n,c+"-small","small"===r&&d),p(n,c+"-loading",j),p(n,c+"-inline",d),p(n,c+"-disabled",b),n)),x=j?"loading":v,T=m.Children.map(e,i);return m.createElement("button",k({},w,{type:y||"button",className:P,disabled:b,onClick:this.onClick}),x?m.createElement(h["default"],{type:x}):null,T)},t}(m.Component);t["default"]=P,P.propTypes={prefixCls:d.PropTypes.string,type:d.PropTypes.string,size:d.PropTypes.oneOf(["large","small"]),htmlType:d.PropTypes.oneOf(["submit","button","reset"]),ghost:d.PropTypes.bool,inline:d.PropTypes.bool,disabled:d.PropTypes.bool,loading:d.PropTypes.bool,icon:d.PropTypes.bool,onClick:d.PropTypes.func},P.defaultProps={prefixCls:"am-button",size:"large",ghost:!1,inline:!1,disabled:!1,loading:!1,onClick:function(){}},n.exports=t["default"]},29:function(n,t,a){"use strict";a(3),a(31),a(30)},30:function(n,t){},168:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}function e(n){if(n&&n.__esModule)return n;var t={};if(null!=n)for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t["default"]=n,t}function o(n,t){for(var a=Object.getOwnPropertyNames(t),s=0;s<a.length;s++){var e=a[s],o=Object.getOwnPropertyDescriptor(t,e);o&&o.configurable&&void 0===n[e]&&Object.defineProperty(n,e,o)}return n}function p(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function c(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function l(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):o(n,t))}function u(){}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=void 0;var i=a(1),k=e(i),f=a(23),d=s(f),m=a(2),b=s(m),g=function(n){function t(){return c(this,t),l(this,n.apply(this,arguments))}return r(t,n),t.prototype.render=function(){var n,t=this.props,a=t.prefixCls,s=t.imgUrl,e=t.title,o=t.message,c=t.buttonTxt,l=t.buttonClick,r=t.buttonType,u=t.buttonGhost,i=t.className,f=(0,b["default"])((n={},p(n,""+a,!0),p(n,i,i),n));return k.createElement("div",{className:f},k.createElement("div",{className:a+"-pic",style:{backgroundImage:"url("+s+")"}}),""!==e?k.createElement("div",{className:a+"-title"},e):null,""!==o?k.createElement("div",{className:a+"-message"},o):null,""!==c?k.createElement("div",{className:a+"-button"},k.createElement(d["default"],{type:r,ghost:u,onClick:l},c)):null)},t}(k.Component);t["default"]=g,g.defaultProps={prefixCls:"am-page-result",imgUrl:"",title:"",message:"",buttonTxt:"",buttonType:"default",buttonGhost:!1,buttonClick:u},n.exports=t["default"]},169:function(n,t,a){"use strict";a(3),a(29),a(187)},187:function(n,t){},897:function(n,t,a){"use strict";function s(n){return n&&n.__esModule?n:{"default":n}}var e=(a(169),a(168)),o=s(e),p=a(1),c=s(p),l=a(4);s(l);n.exports={content:[],meta:{order:5,title:"\u5176\u4ed6\u81ea\u5b9a\u4e49\u6837\u5f0f",filename:"components/page-result/demo/other.md",id:"components-page-result-demo-other"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> PageResult <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> PageResultExample <span class="token operator" >=</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token punctuation" >(</span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>other<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>PageResult</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u5185\u5bb9\u4e3a\u7a7a<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >brief</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonTxt</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u5c1d\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>PageResult</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8b66\u793a<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >brief</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonTxt</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u52a0\u8f7d<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>PageResult</span>\n      <span class="token attr-name" >imgUrl</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >title</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u7f51\u7edc\u4e0d\u7ed9\u529b<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >brief</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonTxt</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u91cd\u65b0\u5c1d\u8bd5<span class="token punctuation" >"</span></span>\n      <span class="token attr-name" >buttonClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'\u70b9\u51fb\u4e86\u6309\u94ae\'</span><span class="token punctuation" >)</span><span class="token punctuation" >}</span></span>\n    <span class="token punctuation" >/></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n<span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>PageResultExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=function(){return c["default"].createElement("div",{className:"other"},c["default"].createElement(o["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/MKXqtwNOLFmYmrY.png",title:"\u5185\u5bb9\u4e3a\u7a7a",brief:"\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848",buttonTxt:"\u91cd\u65b0\u5c1d\u8bd5",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}),c["default"].createElement(o["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/hcEPreZxgZWxhVw.png",title:"\u8b66\u793a",brief:"\u53ef\u5404\u4e1a\u52a1\u81ea\u5b9a\u4e49\u6587\u6848",buttonTxt:"\u91cd\u65b0\u52a0\u8f7d",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}),c["default"].createElement(o["default"],{imgUrl:"https://os.alipayobjects.com/rmsportal/QGxGZRxaqMRKnjS.png",title:"\u7f51\u7edc\u4e0d\u7ed9\u529b",brief:"\u8bf7\u67e5\u770b\u7f51\u7edc\u8fde\u63a5\u6216\u7a0d\u540e\u91cd\u8bd5",buttonTxt:"\u91cd\u65b0\u5c1d\u8bd5",buttonClick:function(){return alert("\u70b9\u51fb\u4e86\u6309\u94ae")}}))};return c["default"].createElement(n,null)},style:".other .am-page-result {\n  border-bottom: 8px solid #e9e9e9;\n}",highlightedStyle:'<span class="token selector" ><span class="token class" >.other</span> <span class="token class" >.am-page-result</span> </span><span class="token punctuation" >{</span>\n  <span class="token property" >border-bottom</span><span class="token punctuation" >:</span> <span class="token number" >8</span>px solid <span class="token hexcode" >#e9e9e9</span><span class="token punctuation" >;</span>\n<span class="token punctuation" >}</span>'}}});