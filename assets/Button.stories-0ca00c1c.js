import{r as d}from"./index-c013ead5.js";import{g as h}from"./_commonjsHelpers-725317a4.js";var y={exports:{}},p={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=d,O=Symbol.for("react.element"),j=Symbol.for("react.fragment"),E=Object.prototype.hasOwnProperty,N=b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function x(o,e,s){var t,n={},r=null,a=null;s!==void 0&&(r=""+s),e.key!==void 0&&(r=""+e.key),e.ref!==void 0&&(a=e.ref);for(t in e)E.call(e,t)&&!S.hasOwnProperty(t)&&(n[t]=e[t]);if(o&&o.defaultProps)for(t in e=o.defaultProps,e)n[t]===void 0&&(n[t]=e[t]);return{$$typeof:O,type:o,key:r,ref:a,props:n,_owner:N.current}}p.Fragment=j;p.jsx=x;p.jsxs=x;y.exports=p;var w=y.exports;const R=w.jsx,B="_button_atumf_1",P={button:B};var v={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(o){(function(){var e={}.hasOwnProperty;function s(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var a=typeof r;if(a==="string"||a==="number")t.push(r);else if(Array.isArray(r)){if(r.length){var l=s.apply(null,r);l&&t.push(l)}}else if(a==="object"){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){t.push(r.toString());continue}for(var u in r)e.call(r,u)&&r[u]&&t.push(u)}}}return t.join(" ")}o.exports?(s.default=s,o.exports=s):window.classNames=s})()})(v);var g=v.exports;const C=h(g),i=d.forwardRef((o,e)=>{const{className:s,...t}=o;return R("button",{ref:e,className:C(P.button,s),...t})});i.displayName="Button";try{i.displayName="Button",i.__docgenInfo={description:"",displayName:"Button",props:{}}}catch{}const A={title:"Components/Button",component:i},c={args:{children:"Button"}};var f,m,_;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: "Button"
  }
}`,...(_=(m=c.parameters)==null?void 0:m.docs)==null?void 0:_.source}}};const D=["Primary"];export{c as Primary,D as __namedExportsOrder,A as default};
//# sourceMappingURL=Button.stories-0ca00c1c.js.map
