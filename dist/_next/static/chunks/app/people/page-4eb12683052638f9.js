(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[329],{1114:function(t,e,a){Promise.resolve().then(a.bind(a,2693))},7138:function(t,e,a){"use strict";a.d(e,{default:function(){return c.a}});var n=a(231),c=a.n(n)},566:function(t,e,a){"use strict";var n=a(7437);a(2265),e.Z=t=>{let{event:e,text:a}=t;return(0,n.jsx)("button",{className:" bg-lightning-yellow-600 font-semibold text-lg p-3 rounded-lg ",onClick:()=>e(),children:a})}},2693:function(t,e,a){"use strict";a.d(e,{default:function(){return f}});var n=a(7437),c=a(2997),r=a(2265),s=a(7138),l=a(5127),i=t=>{let{people:e}=t;return(0,n.jsx)(s.default,{href:"/people/".concat((0,l.C)(e.name)),children:(0,n.jsxs)("div",{className:"flex justify-center items-center flex-col w-[300px] bg-lightning-yellow-600 rounded-lg hover:bg-black hover:text-lightning-yellow-600 transition-all p-2",children:[(0,n.jsx)("p",{className:"font-semibold text-xl",children:null==e?void 0:e.name}),(0,n.jsxs)("p",{className:"text-base font-semibold",children:[(0,n.jsx)("span",{className:"font-semibold text-white text-base mr-2",children:"Birth year:"}),null==e?void 0:e.birth_year]}),(0,n.jsxs)("p",{className:"text-base font-semibold",children:[(0,n.jsx)("span",{className:"font-semibold text-white text-base mr-2",children:"Gender:"}),null==e?void 0:e.gender]})]})})},o=a(566),u=a(462),f=t=>{let{countAllPeoples:e}=t,[a,s]=(0,r.useState)(1),[l,f]=(0,r.useState)([]),[h,p]=(0,r.useState)(""),d=(0,r.useCallback)(async t=>{f(await c.Cf.getDataPeopleParams(t))},[]);return(0,r.useEffect)(()=>{d({page:a,name:h})},[d,a,h]),(0,n.jsxs)("div",{className:"flex w-full max-w-[1200px] m-auto p-3 flex-col",children:[(0,n.jsx)("h2",{className:"text-center text-lightning-yellow-600 mb-5 text-3xl font-semibold",children:"Characters"}),(0,n.jsx)("div",{className:"flex justify-center w-full mb-5",children:(0,n.jsx)(u.Z,{handler:p,searchBy:"name"})}),(0,n.jsx)("div",{className:"flex justify-around gap-4 flex-wrap",children:(null==l?void 0:l.length)!==0?null==l?void 0:l.map((t,e)=>(0,n.jsx)(i,{people:t},e)):(0,n.jsx)("p",{className:" text-red-400 font-semibold text-lg",children:"Nothing was found in your search"})}),(0,n.jsxs)("div",{className:"flex justify-center gap-5 items-center mt-5",children:[(0,n.jsx)(o.Z,{event:()=>{a>1?s(t=>t-1):s(1)},text:"PREV"}),(0,n.jsx)(o.Z,{event:()=>{s(t=>t<e?t+1:t)},text:"NEXT"})]})]})}},462:function(t,e,a){"use strict";var n=a(7437);a(2265),e.Z=t=>{let{handler:e,searchBy:a}=t;return(0,n.jsx)("input",{className:" placeholder:text-lightning-yellow-300 outline-none text-lightning-yellow-500 placeholder:opacity-45 p-2 bg-transparent bg-opacity-70 border-2 border-lightning-yellow-500 rounded-lg w-full max-w-[500px] m-auto",type:"text",placeholder:"Search by ".concat(a),onChange:t=>e(t.target.value)})}},4340:function(t){"use strict";t.exports={API:"https://swapi.dev/api"}},2997:function(t,e,a){"use strict";a.d(e,{Cf:function(){return n},lQ:function(){return r},GC:function(){return s},kw:function(){return c},Z4:function(){return l}});var n={};a.r(n),a.d(n,{getDataPeople:function(){return f},getDataPeopleParams:function(){return u},getDataPeoplesAll:function(){return o}});var c={};a.r(c),a.d(c,{getDataStarship:function(){return d},getDataStarshipsAll:function(){return h},getDataStarshipsParams:function(){return p}});var r={};a.r(r),a.d(r,{getDataPlanet:function(){return w},getDataPlanetsAll:function(){return x},getDataPlanetsParams:function(){return g}});var s={};a.r(s),a.d(s,{getDataSpecie:function(){return y},getDataSpeciesAll:function(){return m},getDataSpeciesParams:function(){return j}});var l={};a.r(l),a.d(l,{getDataVehicle:function(){return b},getDataVehiclesAll:function(){return P},getDataVehiclesParams:function(){return v}});var i=a(4340);let o=async()=>{let t=[],e="".concat(i.API,"/people/");for(;e;){let a=await fetch(e),n=await a.json();t=[...t,...n.results],e=n.next}return t},u=async t=>{let{page:e,name:a}=t,n=await fetch("".concat(i.API,"/people?page=").concat(e,"&search=").concat(a)),{results:c}=await n.json();return c},f=async t=>{let e=await fetch("".concat(i.API,"/people?search=").concat(t)),{results:a}=await e.json();return a},h=async()=>{let t=[],e="".concat(i.API,"/starships/");for(;e;){let a=await fetch(e),n=await a.json();t=[...t,...n.results],e=n.next}return t},p=async t=>{let{page:e,name:a,model:n}=t,c=await fetch("".concat(i.API,"/starships?page=").concat(e,"&search=").concat(a||n)),{results:r}=await c.json();return r},d=async t=>{let e=await fetch("".concat(i.API,"/starships?search=").concat(t)),{results:a}=await e.json();return a},x=async()=>{let t=[],e="".concat(i.API,"/planets/");for(;e;){let a=await fetch(e),n=await a.json();t=[...t,...n.results],e=n.next}return t},g=async t=>{let{page:e,name:a}=t,n=await fetch("".concat(i.API,"/planets?page=").concat(e,"&search=").concat(a)),{results:c}=await n.json();return c},w=async t=>{let e=await fetch("".concat(i.API,"/planets?search=").concat(t)),{results:a}=await e.json();return a},m=async()=>{let t=[],e="".concat(i.API,"/species/");for(;e;){let a=await fetch(e),n=await a.json();t=[...t,...n.results],e=n.next}return t},j=async t=>{let{page:e,name:a}=t,n=await fetch("".concat(i.API,"/species?page=").concat(e,"&search=").concat(a)),{results:c}=await n.json();return c},y=async t=>{let e=await fetch("".concat(i.API,"/species?search=").concat(t)),{results:a}=await e.json();return a},P=async()=>{let t=[],e="".concat(i.API,"/vehicles/");for(;e;){let a=await fetch(e),n=await a.json();t=[...t,...n.results],e=n.next}return t},v=async t=>{let{page:e,name:a,model:n}=t,c=await fetch("".concat(i.API,"/vehicles?page=").concat(e,"&search=").concat(a||n)),{results:r}=await c.json();return r},b=async t=>{let e=await fetch("".concat(i.API,"/vehicles?search=").concat(t)),{results:a}=await e.json();return a}},5127:function(t,e,a){"use strict";function n(t){return encodeURIComponent(t).replace(/%20/g,"+")}a.d(e,{C:function(){return n}})}},function(t){t.O(0,[231,971,23,744],function(){return t(t.s=1114)}),_N_E=t.O()}]);