var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,o=(t,a,i)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[a]=i;import{_ as r}from"./ContentWrap.92af843c.js";import{d as s,z as n,K as p,r as m,o as l,y as d,ah as u,a as f,aY as c,a5 as g,aZ as b,l as h,a_ as y,m as j,A as w,i as v,v as O,t as x}from"./index.f465d987.js";/* empty css                  *//* empty css                *//* empty css                  */const C=s({props:{urlList:{type:Array,default:()=>[]},zIndex:n.number.def(200),initialIndex:n.number.def(0),infinite:n.bool.def(!0),hideOnClickModal:n.bool.def(!1),appendToBody:n.bool.def(!1),show:n.bool.def(!1)},setup(e){const r=e,s=p((()=>{const e=((e,r)=>{for(var s in r||(r={}))a.call(r,s)&&o(e,s,r[s]);if(t)for(var s of t(r))i.call(r,s)&&o(e,s,r[s]);return e})({},r);return delete e.show,e})),n=m(r.show),b=()=>{n.value=!1};return(e,t)=>n.value?(l(),d(f(c),u({key:0},f(s),{onClose:b}),null,16)):g("v-if",!0)}});let I=null;const k=s({setup(e){const{t:t}=w(),a=()=>{!function(e){if(!b)return;const{urlList:t,initialIndex:a=0,infinite:i=!0,hideOnClickModal:o=!1,appendToBody:r=!1,zIndex:s=2e3,show:n=!0}=e,p={},m=document.createElement("div");p.urlList=t,p.initialIndex=a,p.infinite=i,p.hideOnClickModal=o,p.appendToBody=r,p.zIndex=s,p.show=n,document.body.appendChild(m),I=h(C,p),y(I,m)}({urlList:["https://img1.baidu.com/it/u=657828739,1486746195&fm=26&fmt=auto&gp=0.jpg","https://img0.baidu.com/it/u=3114228356,677481409&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=508846955,3814747122&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=3536647690,3616605490&fm=26&fmt=auto&gp=0.jpg","https://img1.baidu.com/it/u=4087287201,1148061266&fm=26&fmt=auto&gp=0.jpg","https://img2.baidu.com/it/u=3429163260,2974496379&fm=26&fmt=auto&gp=0.jpg"]})};return(e,i)=>(l(),d(f(r),{title:f(t)("imageViewerDemo.imageViewer"),message:f(t)("imageViewerDemo.imageViewerDes")},{default:j((()=>[h(f(v),{type:"primary",onClick:a},{default:j((()=>[O(x(f(t)("imageViewerDemo.open")),1)])),_:1})])),_:1},8,["title","message"]))}});export{k as default};