import{d as e,z as s,o as r,c as t,I as l,a,l as o,k as i,t as c,a5 as p,F as n,a1 as d,J as f,_ as m,m as x,v as g}from"./index.f465d987.js";import{_ as h}from"./Highlight.vue_vue_type_script_lang.80ed47fc.js";const y=e({props:{title:s.string.def(""),schema:{type:Array,required:!0,default:()=>[]},showIndex:s.bool.def(!0),highlightColor:s.string.def("var(--el-color-primary)")},emits:["click"],setup(e,{emit:s}){const{getPrefixCls:y}=f(),_=y("infotip"),v=e=>{s("click",e)};return(s,f)=>{const y=m;return r(),t("div",{class:l([a(_),"p-20px mb-20px border-1px border-solid border-[var(--el-color-primary)] bg-[var(--el-color-primary-light-9)]"])},[e.title?(r(),t("div",{key:0,class:l([`${a(_)}__header`,"flex items-center"])},[o(y,{icon:"bi:exclamation-circle-fill",size:22,color:"var(--el-color-primary)"}),i("span",{class:l([`${a(_)}__title`,"pl-5px text-16px font-bold"])},c(e.title),3)],2)):p("v-if",!0),i("div",{class:l(`${a(_)}__content`)},[(r(!0),t(n,null,d(e.schema,((s,l)=>(r(),t("p",{key:l,class:"text-14px mt-15px"},[o(a(h),{keys:"string"==typeof s?[]:s.keys,color:e.highlightColor,onClick:v},{default:x((()=>[g(c(e.showIndex?`${l+1}、`:"")+c("string"==typeof s?s:s.label),1)])),_:2},1032,["keys","color"])])))),128))],2)],2)}}});export{y as _};
