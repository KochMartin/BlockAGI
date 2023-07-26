(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3311:function(e,t,s){Promise.resolve().then(s.bind(s,601))},601:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return D}});var l=s(7437),n=s(2265),a=s(9349),r=s(1130),i=s(6691),c=s.n(i);let o={is_live:!1,is_done:!1,start_time:new Date,end_time:new Date,objectives:[],generated_objectives:[],findings:{generated_objectives:[],narrative:"",remark:""},narratives:[],agent_logs:[],llm_logs:[],status:{step:"PlanChain",round:0},links:[]},d=(0,n.createContext)(o),x=async()=>{try{var e,t;let s=await fetch("http://localhost:8888/api/state"),l=await s.json();return{is_live:!0,is_done:!!l.end_time,start_time:new Date(l.start_time+"Z"),end_time:l.end_time?new Date(l.end_time+"Z"):null,objectives:l.objectives||[],generated_objectives:l.findings.generated_objectives||[],findings:l.findings,narratives:(null===(t=l.narratives)||void 0===t?void 0:null===(e=t.map)||void 0===e?void 0:e.call(t,e=>{let{markdown:t}=e;return{markdown:function(e){let t=RegExp("```*[\\n]*(.*?)[\\n]*```*","gs"),s=t.exec(e);return s?s[1].trim():e.trim()}(t)}}))||[],agent_logs:l.agent_logs.map((e,t)=>({...e,timestamp:new Date(e.timestamp+"Z"),idx:t})),llm_logs:l.llm_logs.map((e,t)=>({...e,idx:t})),status:l.status||{step:"PlanChain",round:0},links:l.resource_pool.resources}}catch(e){return null}};var m=s(1765),f=s(2390),u=s.n(f);let h=(0,n.forwardRef)(function(e,t){let{icon:s,title:a,children:r,info:i,defaultCollapsed:o=!1}=e,[d,x]=(0,n.useState)(o);return(0,l.jsxs)("div",{className:"transition-all mt-[-1px] flex min-h-[50px] justify-stretch flex-col overflow-hidden ".concat(d?"flex-0 max-h-[50px]":"flex-1"),children:[(0,l.jsxs)("div",{className:"select-none flex border-y border-y-bd-1 items-center cursor-pointer min-h-[50px] h-[50px] px-6 transition-all hover:bg-bg-lt",onClick:()=>x(!d),children:[(0,l.jsx)("span",{className:"text-[20px]",children:s}),(0,l.jsx)("span",{className:"ml-4 font-medium text-[18px]",children:a}),(0,l.jsx)("div",{className:"ml-auto",children:i}),(0,l.jsx)("div",{className:"ml-6",children:(0,l.jsx)(c(),{className:"transition-all transform ".concat(d?"":"rotate-90 opacity-30"),alt:"Chevron",src:"/chevron.svg",height:12,width:6})})]}),(0,l.jsx)("div",{className:"flex-1 overflow-auto shadow-section scroll-smooth",ref:t,children:r})]})});function p(){let[e,t]=(0,n.useState)(""),s=async()=>{console.log("Updating objectives");let t=e.split(/[\n;]|^- /).map(e=>e.trim()).filter(Boolean),s=await fetch("/api/objectives",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});s.ok||console.error("Failed to update objectives")};return(0,l.jsx)(h,{icon:"\uD83D\uDCDD",title:"User Objectives",defaultCollapsed:!1,children:(0,l.jsxs)("div",{className:"p-2",style:{display:"grid",gridTemplateRows:"1fr auto"},children:[" ",(0,l.jsx)("textarea",{value:e,onChange:e=>{t(e.target.value)},onKeyDown:e=>{(e.metaKey||e.ctrlKey)&&"Enter"===e.key&&s()},placeholder:"Enter your objectives here",style:{width:"100%",minHeight:"4em"}}),(0,l.jsx)("button",{onClick:s,style:{borderColor:"#DE82EE",borderWidth:"1px",borderStyle:"solid",backgroundColor:"#EE82EE",color:"white",borderRadius:"10%",padding:"2px 10px",marginTop:"10px",alignSelf:"end",justifySelf:"end"},children:"Run"})," "]})})}function g(){let{objectives:e,generated_objectives:t}=(0,n.useContext)(d),s=e.reduce((e,t)=>e+t.expertise,0)/e.length;return(0,l.jsx)(h,{icon:"⛳️",title:(0,l.jsxs)("div",{className:"flex items-center",children:["Objectives",(0,l.jsxs)("span",{className:"inline-block ml-4 px-2 leading-6 rounded bg-fg-1 text-ac-1 font-code font-semibold text-[12px]",children:[t.length," generated"]})]}),info:(0,l.jsxs)("span",{className:"font-code text-[14px] font-medium",children:["Expertise: ",(100*s).toFixed(1),"%"]}),defaultCollapsed:!0,children:(0,l.jsxs)("div",{className:"py-4 px-6",children:[(0,l.jsx)("div",{className:"mb-4 text-ft-2 font-semibold",children:"✍️ User-Defined Objectives"}),e.map(e=>{let{topic:t,expertise:s}=e;return(0,l.jsxs)("div",{className:"my-2 flex",children:[(0,l.jsxs)("div",{className:"block h-fit text-center w-[50px] px-2 leading-6 rounded bg-fg-3 text-ac-3 font-code font-semibold text-[12px]",children:[(100*s).toFixed(1),"%"]}),(0,l.jsx)("div",{className:"flex-1 ml-3 text-16px break-words",children:t})]},"".concat(t,"_").concat(s))}),(0,l.jsx)("div",{className:"mt-6 mb-4 text-ft-2 font-semibold",children:"\uD83D\uDCDF Auto-Generated Objectives"}),t.map(e=>{let{topic:t,expertise:s}=e;return(0,l.jsxs)("div",{className:"my-2 flex",children:[(0,l.jsxs)("div",{className:"block h-fit text-center w-[50px] px-2 leading-6 rounded bg-fg-3 text-ac-3 font-code font-semibold text-[12px]",children:[(100*s).toFixed(1),"%"]}),(0,l.jsx)("div",{className:"flex-1 ml-3 text-16px break-words",children:t})]},"".concat(t,"_").concat(s))})]})})}let v=(0,n.memo)(function(e){let{timestamp:t,message:s,round:a,idx:r}=e,[i,c]=(0,n.useState)(""),[o,d]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{if(Date.now()-t.getTime()>3e3){c(s),d(!0);return}(async()=>{for(let e=0;e<s.length;e++)c(s.slice(0,e+1)),await (0,m.ZP)(12);await (0,m.ZP)(350),d(!0)})()},[]),(0,l.jsxs)("div",{className:"transition-all flex-0 min-h-0 flex text-[13px] font-code whitespace-pre-wrap break-words items-start py-2 px-3 ".concat(o?r&&r%2?"bg-bg-2":"bg-bg-1":"bg-fg-1"),children:[(0,l.jsx)("div",{className:"w-[80px] text-ft-2 ml-2",children:function(e){let t=e.getHours().toString().padStart(2,"0"),s=e.getMinutes().toString().padStart(2,"0"),l=e.getSeconds().toString().padStart(2,"0");return"".concat(t,":").concat(s,":").concat(l)}(t)}),(0,l.jsx)("div",{className:"transition-all ml-1 px-2 leading-6 rounded font-code font-semibold text-[12px] ".concat(o?"bg-fg-3 text-ac-3":"bg-ac-1 text-fg-1"),children:a?"R#".concat(a):"PREPARING"}),(0,l.jsx)("div",{className:"flex-1 ml-3",children:i})]})});function b(){let{is_done:e,status:t,agent_logs:s}=(0,n.useContext)(d);return(0,l.jsx)(h,{icon:"\uD83C\uDF08",title:(0,l.jsxs)("div",{className:"flex items-center",children:["Status",(0,l.jsx)("div",{className:"flex ml-2",children:["Plan","Research","Update","Narrate","Evaluate"].map(s=>(0,l.jsx)("div",{className:"ml-2 px-2 leading-6 rounded font-code font-semibold text-[12px] ".concat(e?"bg-fg-1 text-ac-1":t.step.startsWith(s)?"bg-fg-2 text-ac-2 animate-bounce-fast":"bg-fg-3 text-ac-3"),children:s[0]},s))})]}),info:(0,l.jsxs)("span",{className:"font-code text-[14px] font-medium",children:["Round #",t.round]}),defaultCollapsed:!1,children:(0,l.jsx)("div",{className:"flex flex-col-reverse",children:s.map(e=>(0,l.jsx)(v,{...e},e.timestamp+e.message))})})}function j(){let{links:e}=(0,n.useContext)(d);return(0,l.jsx)(h,{icon:"\uD83D\uDD17",title:(0,l.jsxs)("div",{className:"flex items-center",children:["Resource Pool",(0,l.jsxs)("span",{className:"inline-block ml-4 px-2 leading-6 rounded bg-fg-1 text-ac-1 font-code font-semibold text-[12px]",children:[e.length," links"]})]}),info:(0,l.jsxs)("span",{className:"font-code text-[14px] font-medium",children:["Visited: ",e.filter(e=>{let{visited:t}=e;return t}).length]}),defaultCollapsed:!0,children:(0,l.jsxs)("div",{className:"py-4 px-6",children:[(0,l.jsx)("div",{className:"mb-4 text-ft-2 font-semibold",children:"✅ Visited Links"}),e.filter(e=>{let{visited:t}=e;return t}).map(e=>{let{url:t,description:s}=e;return(0,l.jsxs)("div",{className:"my-2 flex",children:[(0,l.jsx)("div",{className:"block h-fit text-center w-[65px] px-2 leading-6 rounded bg-fg-2 text-ac-2 font-code font-semibold text-[12px]",children:"Visited"}),(0,l.jsx)("div",{className:"flex-1 ml-3 text-16px truncate",children:(0,l.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:s})})]},t)}),(0,l.jsx)("div",{className:"mt-6 mb-4 text-ft-2 font-semibold",children:"\uD83D\uDCE5 New Links (Pending Agent Visit)"}),e.filter(e=>{let{visited:t}=e;return!t}).map(e=>{let{url:t,description:s}=e;return(0,l.jsxs)("div",{className:"my-2 flex",children:[(0,l.jsx)("div",{className:"block h-fit text-center w-[65px] px-2 leading-6 rounded bg-fg-3 text-ac-3 font-code font-semibold text-[12px]",children:"New"}),(0,l.jsx)("div",{className:"flex-1 ml-3 text-16px truncate",children:(0,l.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:s})})]},t)})]})})}function N(){var e,t;let{llm_logs:s}=(0,n.useContext)(d),[a,r]=(0,n.useState)(!0),[i,c]=(0,n.useState)(0),o=(0,n.useRef)(null);return(0,n.useEffect)(()=>{i<0&&a&&r(!1)},[i<0]),(0,n.useEffect)(()=>{a&&o.current&&(o.current.scrollTop=o.current.scrollHeight)},[s.length&&(null===(t=s[s.length-1])||void 0===t?void 0:null===(e=t.response)||void 0===e?void 0:e.length),o,a]),(0,n.useEffect)(()=>{var e;let t=0;function s(){var e;let s=(null==o?void 0:null===(e=o.current)||void 0===e?void 0:e.scrollTop)||0;c(s-t),t=s}return null==o||null===(e=o.current)||void 0===e||e.addEventListener("scroll",s,!1),()=>{var e;return null==o?void 0:null===(e=o.current)||void 0===e?void 0:e.removeEventListener("scroll",s,!1)}},[o]),(0,l.jsx)(h,{icon:"\uD83E\uDD16",title:"LLM Log",info:(0,l.jsxs)("div",{className:"flex items-center",children:[(0,l.jsx)("span",{className:"font-code text-[14px] font-medium mr-3",children:"Autoscroll"}),(0,l.jsxs)("label",{className:"relative flex items-center cursor-pointer",children:[(0,l.jsx)("input",{type:"checkbox",checked:a,className:"sr-only peer",onChange:e=>{r(e.target.checked)}}),(0,l.jsx)("div",{className:"w-11 h-6 bg-fg-3 border border-ft-2 rounded-full peer peer-checked:ring-2 peer-checked:ring-fg-1 peer-checked:after:translate-x-full peer-checked:after:border-white peer-checked:bg-ac-1 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-bg-1 after:border-ft-2 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"})]})]}),defaultCollapsed:!1,ref:o,children:(0,l.jsx)("div",{className:"min-h-full bg-bg-2 whitespace-pre-wrap py-4 px-6 font-code text-[13px] leading-[16px]",children:s.slice(-20).map(e=>{let{idx:t,prompt:s,response:n}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("div",{className:"flex my-4 items-center",children:[(0,l.jsx)("div",{className:"border-t-2 border-t-ac-1 flex-1"}),(0,l.jsxs)("div",{className:"mx-3 text-ac-1 font-semibold",children:["Prompt #",(t||0)+1]}),(0,l.jsx)("div",{className:"border-t-2 border-t-ac-1 flex-1"})]}),(0,l.jsx)("div",{className:"my-3 text-ft-2 transition-all break-words",children:s},"".concat(t,"-prompt-").concat(s.length)),(0,l.jsx)("div",{className:"my-3 text-ft-1 transition-all break-words",children:n},"".concat(t,"-reponse-").concat(n.length))]})})})})}function k(){let{is_live:e,is_done:t}=(0,n.useContext)(d);return(0,l.jsxs)("div",{className:"flex mt-4 mb-8",children:[(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"flex",children:[(0,l.jsx)("div",{className:"inline-flex",children:(0,l.jsx)(c(),{alt:"BlockAGI Logo",src:"/blockagi.svg",width:44,height:44})}),(0,l.jsxs)("div",{className:"ml-4 tracking-wide",children:[(0,l.jsx)("div",{className:"font-bold text-[22px] leading-7 bg-clip-text text-transparent bg-gr-1",children:"BlockAGI"}),(0,l.jsx)("div",{className:"font-bold text-[18px] text-ft-1",children:"Your Self-Hosted, Hackable Research Agent"})]})]})}),(0,l.jsx)("div",{className:"ml-auto",children:(0,l.jsx)("span",{className:"inline-block px-2 leading-6 rounded font-code font-semibold text-[12px] ".concat(t?"bg-fg-1 text-ac-1":e?"bg-fg-2 text-ac-2":"bg-fg-4 text-ac-4"),children:t?"AGENT FINISHED":e?"AGENT RUNNING":"AGENT STOPPED"})})]})}function w(){return(0,l.jsxs)("section",{className:"min-w-0 flex-1 flex flex-col justify-stretch mx-auto px-12 max-w-[760px]",children:[(0,l.jsx)(k,{}),(0,l.jsxs)("div",{className:"flex flex-col min-h-0 flex-1 rounded-md border border-bd-1 overflow-hidden",children:[(0,l.jsx)(p,{}),(0,l.jsx)(b,{}),(0,l.jsx)(g,{}),(0,l.jsx)(j,{}),(0,l.jsx)(N,{})]}),(0,l.jsxs)("div",{className:"flex items-center mt-6 font-bold text-ft-2",children:[(0,l.jsxs)("div",{className:"flex space-x-12",children:[(0,l.jsx)("a",{href:"https://github.com",target:"_blank",children:"Github"}),(0,l.jsx)("a",{href:"https://github.com",target:"_blank",children:"Documentation"})]}),(0,l.jsxs)("div",{className:"flex items-center ml-auto font-semibold text-ft-1 text-[15px]",children:["Brought to you by"," ",(0,l.jsxs)("a",{className:"inline-flex ml-2 hover:text-ac-2 hover:decoration-ac-2 group",href:"https://blockpipe.io",target:"_blank",children:[(0,l.jsx)("div",{className:"inline-flex mr-1 group-hover:animate-spin-fast",children:(0,l.jsx)(c(),{alt:"Blockpipe Logo",src:"/blockpipe.svg",width:18,height:18})}),"Blockpipe"]})]})]})]})}let y=(0,n.memo)(function(e){let{children:t=""}=e;return(0,l.jsx)(a.D,{remarkPlugins:[r.Z],components:{h1:e=>{let{node:t,...s}=e;return(0,l.jsx)("h2",{...s,className:"font-medium text-[24px] mt-6 mb-2"})},h2:e=>{let{node:t,...s}=e;return(0,l.jsx)("h2",{...s,className:"font-bold text-[20px] mt-6 mb-2"})},h3:e=>{let{node:t,...s}=e;return(0,l.jsx)("h2",{...s,className:"font-semibold text-[18px] mt-4 mb-2"})},ul:e=>{let{node:t,...s}=e;return(0,l.jsx)("ul",{...s,className:"list-image-[url(/list.svg)] list-outside pl-7"})},ol:e=>{let{node:t,...s}=e;return(0,l.jsx)("ol",{...s,className:"list-decimal list-outside marker:bg-ac-1  pl-8 marker:font-code marker:font-bold marker:text-[15px]"})},blockquote:e=>{let{node:t,...s}=e;return(0,l.jsx)("blockquote",{...s,className:"border-l-4 border-bd-1 pl-4 font-code text-[12px] text-ft-2 mb-8 transition-all hover:border-ac-1 hover:text-ft-1"})},li:e=>{let{node:t,...s}=e;return(0,l.jsx)("li",{...s,className:""})},p:e=>{let{node:t,...s}=e;return(0,l.jsx)("p",{...s,className:"mt-2 mb-4"})},a:e=>{var t;let{node:s,...n}=e;return(0,l.jsx)("a",{...n,className:"text-ac-1 font-bold relative z-[0]",rel:"noreferrer",target:(null==n?void 0:null===(t=n.href)||void 0===t?void 0:t.startsWith("#"))?"_self":"_blank"})},sup:e=>{let{node:t,children:s,...n}=e;return(0,l.jsxs)("sup",{...n,className:"ml-1 text-[0.8em]",children:["[",s,"]"]})}},children:t})});function _(){var e;let[t,s]=(0,n.useState)(0),[a,r]=(0,n.useState)(0),{narratives:i}=(0,n.useContext)(d),o=(null===(e=i[a])||void 0===e?void 0:e.markdown)||"",[x,m]=(0,n.useState)(!1);(0,n.useEffect)(()=>{r(i.length-1),s(i.length)},[i.length>0]),(0,n.useEffect)(()=>{i.length<t?r(0):i.length>t&&a===t-1&&r(i.length-1),s(i.length)},[i.length,a,t]);let f=(0,n.useCallback)(()=>{u()(o),m(!0),setTimeout(()=>m(!1),1e3)},[o]);return(0,l.jsxs)("article",{className:"min-w-0 min-h-full w-full flex-1 rounded-lg shadow-article bg-bg-2 overflow-auto scroll-smooth max-w-[760px] relative",children:[(0,l.jsxs)("div",{className:"sticky relative z-[100] flex items-end font-code text-[14px] transition-all ".concat(o?"top-0":"top-[-80px] mt-[-80px]"," left-0 right-0 h-[80px] px-16 py-6 bg-gradient-to-b from-[rgba(247,247,247,1)] via-[rgba(247,247,247,0.95)] via-80% to-[rgba(247,247,247,0)]"),children:[(0,l.jsxs)("div",{className:"flex items-center text-ft-2 cursor-pointer hover:opacity-80 transition-all mb-1",onClick:f,children:[(0,l.jsx)(c(),{alt:"Copy",src:"/copy.svg",height:24,width:24}),(0,l.jsx)("div",{className:"ml-2 transition-all ".concat(x?"text-ft-1 font-semibold":""),children:x?"Copied to Clipboard":"Copy as Markdown"})]}),(0,l.jsxs)("div",{className:"ml-auto flex items-center",children:[(0,l.jsx)(c(),{alt:"Ref",src:"/ref.svg",height:24,width:24}),(0,l.jsx)("div",{className:"mr-2 ml-2 text-ft-2",children:"Report from"}),(0,l.jsx)("select",{value:a,className:"font-code text-ft-1 border border-bd-1 outline-0 w-[110px] transition-all hover:border-ac-1 text-center h-[32px] rounded-md text-[14px]",onChange:e=>r(parseInt(e.target.value)),children:i.map((e,t)=>(0,l.jsxs)("option",{value:t,children:["Round #",t+1]},t))})]})]}),(0,l.jsx)("div",{className:"z-[0] w-full px-16 pb-12",children:o?(0,l.jsx)(y,{children:o}):(0,l.jsx)("div",{className:"h-[420px] flex items-center justify-center",children:(0,l.jsx)("div",{className:"font-bold text-center text-ft-2 animate-pulse text-[24px]",children:"\uD83E\uDD14 Agent Thinking and Researching ..."})})})]})}function D(){let[e,t]=(0,n.useState)(o);return(0,n.useEffect)(()=>{let e=setInterval(async()=>{let e=await x();e?t(e):t(e=>({...e,is_live:!1}))},200);return()=>clearInterval(e)},[]),(0,l.jsx)(d.Provider,{value:e,children:(0,l.jsxs)("main",{className:"flex max-h-screen min-h-screen items-stretch font-sans p-8",children:[(0,l.jsx)(w,{}),(0,l.jsx)(_,{})]})})}}},function(e){e.O(0,[875,971,596,744],function(){return e(e.s=3311)}),_N_E=e.O()}]);