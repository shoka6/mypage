import{r as o,j as e}from"./jsx-runtime-NroC4D4D.js";import{g as S,h as w,j as f,k as g,n as k,M as l,L as c,O as M,S as d}from"./components-WS-wzDw9.js";/**
 * @remix-run/react v2.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */let a="positions";function v({getKey:r,...x}){let{isSpaMode:h}=S(),n=w(),j=f();g({getKey:r,storageKey:a});let m=o.useMemo(()=>{if(!r)return null;let t=r(n,j);return t!==n.key?t:null},[]);if(h)return null;let p=((t,y)=>{if(!window.history.state||!window.history.state.key){let s=Math.random().toString(32).slice(2);window.history.replaceState({key:s},"")}try{let i=JSON.parse(sessionStorage.getItem(t)||"{}")[y||window.history.state.key];typeof i=="number"&&window.scrollTo(0,i)}catch(s){console.error(s),sessionStorage.removeItem(t)}}).toString();return o.createElement("script",k({},x,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${p})(${JSON.stringify(a)}, ${JSON.stringify(m)})`}}))}const u=()=>null;function R(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(l,{}),e.jsx(c,{})]}),e.jsxs("body",{children:[e.jsx(M,{}),e.jsx(v,{}),e.jsx(d,{}),e.jsx(u,{})]})]})}function b(){return e.jsxs("html",{lang:"en",children:[e.jsxs("head",{children:[e.jsx("meta",{charSet:"utf-8"}),e.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),e.jsx(l,{}),e.jsx(c,{})]}),e.jsxs("body",{children:[e.jsx("p",{children:"Loading..."}),e.jsx(d,{}),e.jsx(u,{})]})]})}export{b as HydrateFallback,R as default};
