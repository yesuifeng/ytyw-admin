import{D as e}from"./Descriptions.85ec4ea2.js";import{d as a,A as t,b as o,o as l,y as p,m,l as n,v as s,t as i,a as r,aO as c,k as d}from"./index.f465d987.js";/* empty css               *//* empty css                  */import"./plugin-vue_export-helper.21dcd24c.js";const u=["innerHTML"],f=a({props:{currentRow:{type:Object,default:()=>null}},setup(a){const{t:f}=t(),b=o([{field:"title",label:f("exampleDemo.title"),span:24},{field:"author",label:f("exampleDemo.author")},{field:"display_time",label:f("exampleDemo.displayTime")},{field:"importance",label:f("exampleDemo.importance")},{field:"pageviews",label:f("exampleDemo.pageviews")},{field:"content",label:f("exampleDemo.content"),span:24}]);return(t,o)=>(l(),p(r(e),{schema:r(b),data:a.currentRow||{}},{importance:m((({row:e})=>[n(r(c),{type:1===e.importance?"success":2===e.importance?"warning":"danger"},{default:m((()=>[s(i(1===e.importance?r(f)("tableDemo.important"):2===e.importance?r(f)("tableDemo.good"):r(f)("tableDemo.commonly")),1)])),_:2},1032,["type"])])),content:m((({row:e})=>[d("div",{innerHTML:e.content},null,8,u)])),_:1},8,["schema","data"]))}});export{f as default};