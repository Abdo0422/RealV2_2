import{a as u,r as n}from"./app-35762901.js";function i({message:r,className:t="",...e}){return r?u("p",{...e,className:"text-sm text-red-600 "+t,children:r}):null}const d=n.forwardRef(function({type:t="text",className:e="",isFocused:a=!1,...c},o){const s=o||n.useRef();return n.useEffect(()=>{a&&s.current.focus()},[]),u("input",{...c,type:t,className:"border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm "+e,ref:s})});export{i as I,d as T};
