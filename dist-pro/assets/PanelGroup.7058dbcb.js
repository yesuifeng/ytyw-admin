import{d as e,r as t,b as s,o as a,y as l,m as i,l as o,a as n,G as d,D as c,k as r,I as x,t as u,C as m,B as _,A as f,J as p,_ as v}from"./index.f465d987.js";/* empty css               *//* empty css                *//* empty css                         */import{_ as g}from"./CountTo.0efd5fcd.js";import{u as y}from"./useAxios.4c6e3f89.js";import{_ as b}from"./plugin-vue_export-helper.21dcd24c.js";const{request:h}=y(),w=()=>h({url:"/analysis/userAccessSource",method:"get"}),j=()=>h({url:"/analysis/weeklyUserActivity",method:"get"}),$=()=>h({url:"/analysis/monthlySales",method:"get"});const k={class:"flex flex-col justify-between"},z={class:"flex flex-col justify-between"},A={class:"flex flex-col justify-between"},S={class:"flex flex-col justify-between"};var C=b(e({setup(e){const{t:y}=f(),{getPrefixCls:b}=p(),w=b("panel"),j=t(!0);let $=s({users:0,messages:0,moneys:0,shoppings:0});return(async()=>{const e=await h({url:"/analysis/total",method:"get"}).catch((()=>{})).finally((()=>{j.value=!1}));$=Object.assign($,(null==e?void 0:e.data)||{})})(),(e,t)=>{const s=v;return a(),l(n(_),{gutter:20,justify:"space-between",class:x(n(w))},{default:i((()=>[o(n(m),{xl:6,lg:6,md:12,sm:12,xs:24},{default:i((()=>[o(n(d),{shadow:"hover",class:"mb-20px"},{default:i((()=>[o(n(c),{loading:j.value,animated:"",rows:2},{default:i((()=>[r("div",{class:x(`${n(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:x(`${n(w)}__item--icon ${n(w)}__item--peoples p-16px inline-block rounded-6px`)},[o(s,{icon:"svg-icon:peoples",size:40})],2)]),r("div",k,[r("div",{class:x(`${n(w)}__item--text text-16px text-gray-500 text-right`)},u(n(y)("analysis.newUser")),3),o(n(g),{class:"text-20px font-700 text-right","start-val":0,"end-val":102400,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),o(n(m),{xl:6,lg:6,md:12,sm:12,xs:24},{default:i((()=>[o(n(d),{shadow:"hover",class:"mb-20px"},{default:i((()=>[o(n(c),{loading:j.value,animated:"",rows:2},{default:i((()=>[r("div",{class:x(`${n(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:x(`${n(w)}__item--icon ${n(w)}__item--message p-16px inline-block rounded-6px`)},[o(s,{icon:"svg-icon:message",size:40})],2)]),r("div",z,[r("div",{class:x(`${n(w)}__item--text text-16px text-gray-500 text-right`)},u(n(y)("analysis.unreadInformation")),3),o(n(g),{class:"text-20px font-700 text-right","start-val":0,"end-val":81212,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),o(n(m),{xl:6,lg:6,md:12,sm:12,xs:24},{default:i((()=>[o(n(d),{shadow:"hover",class:"mb-20px"},{default:i((()=>[o(n(c),{loading:j.value,animated:"",rows:2},{default:i((()=>[r("div",{class:x(`${n(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:x(`${n(w)}__item--icon ${n(w)}__item--money p-16px inline-block rounded-6px`)},[o(s,{icon:"svg-icon:money",size:40})],2)]),r("div",A,[r("div",{class:x(`${n(w)}__item--text text-16px text-gray-500 text-right`)},u(n(y)("analysis.transactionAmount")),3),o(n(g),{class:"text-20px font-700 text-right","start-val":0,"end-val":9280,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1}),o(n(m),{xl:6,lg:6,md:12,sm:12,xs:24},{default:i((()=>[o(n(d),{shadow:"hover",class:"mb-20px"},{default:i((()=>[o(n(c),{loading:j.value,animated:"",rows:2},{default:i((()=>[r("div",{class:x(`${n(w)}__item flex justify-between`)},[r("div",null,[r("div",{class:x(`${n(w)}__item--icon ${n(w)}__item--shopping p-16px inline-block rounded-6px`)},[o(s,{icon:"svg-icon:shopping",size:40})],2)]),r("div",S,[r("div",{class:x(`${n(w)}__item--text text-16px text-gray-500 text-right`)},u(n(y)("analysis.totalShopping")),3),o(n(g),{class:"text-20px font-700 text-right","start-val":0,"end-val":13600,duration:2600})])],2)])),_:1},8,["loading"])])),_:1})])),_:1})])),_:1},8,["class"])}}}),[["__scopeId","data-v-d7440f92"]]),I=Object.freeze(Object.defineProperty({__proto__:null,default:C},Symbol.toStringTag,{value:"Module"}));export{C as P,j as a,$ as b,I as c,w as g};
