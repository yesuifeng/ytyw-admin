import{d as e,z as t,r as a,K as i,aT as s,a as o,aG as n,o as l,c as r,l as d,m as c,Q as m,y as u,i as f,a5 as p,F as h,v as y,t as v,A as g,_ as x}from"./index.f465d987.js";import{_ as b}from"./Form.vue_vue_type_script_lang.deea7dfd.js";/* empty css                  */import{u as k}from"./useForm.783ea7df.js";const _={key:0},w=e({props:{schema:{type:Array,default:()=>[]},isCol:t.bool.def(!1),labelWidth:t.oneOfType([String,Number]).def("auto"),layout:t.string.validate((e=>["inline","bottom"].includes(e))).def("inline"),buttomPosition:t.string.validate((e=>["left","center","right"].includes(e))).def("center"),showSearch:t.bool.def(!0),showReset:t.bool.def(!0),expand:t.bool.def(!1),expandField:t.string.def("")},emits:["search","reset"],setup(e,{emit:t}){const w=e,{t:F}=g(),C=a(!0),R=i((()=>{let e=s(w.schema);if(w.expand&&w.expandField&&!o(C)){const t=n(e,(e=>e.field===w.expandField));if(t>-1){const a=e.length;e.splice(t+1,a)}}return"inline"===w.layout&&(e=e.concat([{field:"action",formItemProps:{labelWidth:"0px"}}])),e})),{register:j,elFormRef:S,methods:q}=k(),A=async()=>{var e;await(null==(e=o(S))?void 0:e.validate((async e=>{if(e){const{getFormData:e}=q,a=await e();t("search",a)}})))},P=async()=>{var e;null==(e=o(S))||e.resetFields();const{getFormData:a}=q,i=await a();t("reset",i)},W=i((()=>({textAlign:w.buttomPosition}))),D=()=>{var e;null==(e=o(S))||e.resetFields(),C.value=!o(C)};return(t,a)=>{const i=x;return l(),r(h,null,[d(o(b),{"is-custom":!1,"label-width":e.labelWidth,"hide-required-asterisk":"",inline:"","is-col":e.isCol,schema:o(R),onRegister:o(j)},{action:c((()=>["inline"===e.layout?(l(),r("div",_,[e.showSearch?(l(),u(o(f),{key:0,type:"primary",onClick:A},{default:c((()=>[d(i,{icon:"ep:search",class:"mr-5px"}),y(" "+v(o(F)("common.query")),1)])),_:1})):p("v-if",!0),e.showReset?(l(),u(o(f),{key:1,onClick:P},{default:c((()=>[d(i,{icon:"ep:refresh-right",class:"mr-5px"}),y(" "+v(o(F)("common.reset")),1)])),_:1})):p("v-if",!0),e.expand?(l(),u(o(f),{key:2,type:"text",onClick:D},{default:c((()=>[y(v(o(F)(C.value?"common.shrink":"common.expand"))+" ",1),d(i,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):p("v-if",!0)])):p("v-if",!0)])),_:1},8,["label-width","is-col","schema","onRegister"]),"bottom"===e.layout?(l(),r("div",{key:0,style:m(o(W))},[e.showSearch?(l(),u(o(f),{key:0,type:"primary",onClick:A},{default:c((()=>[d(i,{icon:"ep:search",class:"mr-5px"}),y(" "+v(o(F)("common.query")),1)])),_:1})):p("v-if",!0),e.showReset?(l(),u(o(f),{key:1,onClick:P},{default:c((()=>[d(i,{icon:"ep:refresh-right",class:"mr-5px"}),y(" "+v(o(F)("common.reset")),1)])),_:1})):p("v-if",!0),e.expand?(l(),u(o(f),{key:2,type:"text",onClick:D},{default:c((()=>[y(v(o(F)(C.value?"common.shrink":"common.expand"))+" ",1),d(i,{icon:C.value?"ant-design:up-outlined":"ant-design:down-outlined"},null,8,["icon"])])),_:1})):p("v-if",!0)],4)):p("v-if",!0)],64)}}});export{w as _};
