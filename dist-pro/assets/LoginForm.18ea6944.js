import{d as e,e as a,x as s,u as t,b as o,r as l,w as r,o as i,y as d,m as p,k as n,l as u,a as c,q as m,s as f,v,b6 as g,aE as h,i as b}from"./index.f465d987.js";/* empty css                  *//* empty css                  */import{_ as j}from"./Form.vue_vue_type_script_lang.deea7dfd.js";import{u as w}from"./useForm.783ea7df.js";import{a as x}from"./index.c32cd380.js";import{_ as y}from"./plugin-vue_export-helper.21dcd24c.js";/* empty css                     *//* empty css               *//* empty css                  *//* empty css                 *//* empty css               *//* empty css                     *//* empty css                        *//* empty css                   */import"./InputPassword.744be6f3.js";import"./Editor.ab308143.js";import"./tsxHelper.1c6f9aac.js";import"./useAxios.4c6e3f89.js";const R=(e=>(m("data-v-6e5a18b4"),e=e(),f(),e))((()=>n("h2",{class:"text-2xl font-bold text-center w-[100%]"},"登录",-1))),_={class:"flex justify-between items-center w-[100%]"},P=v(" 登录 ");var q=y(e({setup(e){const m=a(),f=s(),{currentRoute:v,addRoute:y,push:q}=t(),I=o({userName:[{required:!0,trigger:"change",message:"请填写登录账户"}],code:[{required:!0,trigger:"change",message:"请填写验证码"}]}),F=o([{field:"title",colProps:{span:24}},{field:"phone",label:"用户名",value:"13681036926",component:"Input",colProps:{span:24},componentProps:{placeholder:"请输入 "}},{field:"code",label:"密码",value:"666666",component:"InputPassword",colProps:{span:24},componentProps:{style:{width:"100%"},placeholder:"请输入"}},{field:"tool",colProps:{span:24}},{field:"login",colProps:{span:24}}]),k=l(!1),{register:A,elFormRef:E,methods:V}=w(),z=l(!1),C=l("");r((()=>v.value),(e=>{var a;C.value=null==(a=null==e?void 0:e.query)?void 0:a.redirect}),{immediate:!0});const N=async()=>{const e=c(E);await(null==e?void 0:e.validate((async e=>{if(e){z.value=!0;const{getFormData:e}=V,a=await e();a.requestId=1,m.login(a).then((e=>{e&&(e?D():q({path:C.value||f.addRouters[0].path}))})).finally((()=>z.value=!1))}})))},D=async()=>{const e=await x({params:{roleName:"admin"}});if(e){const{wsCache:a}=g(),s=e.data.list||[];a.set("roleRouters",s),await f.generateRoutes("admin",s).catch((()=>{})),f.getAddRouters.forEach((e=>{y(e)})),f.setIsAddRouters(!0),q({path:C.value||f.addRouters[0].path})}};return(e,a)=>{const s=h,t=b;return i(),d(c(j),{schema:c(F),rules:c(I),"label-position":"top","hide-required-asterisk":"",size:"large",onRegister:c(A)},{title:p((()=>[R])),tool:p((()=>[n("div",_,[u(s,{modelValue:k.value,"onUpdate:modelValue":a[0]||(a[0]=e=>k.value=e),label:"记住我",size:"small"},null,8,["modelValue"])])])),login:p((()=>[u(t,{loading:z.value,type:"primary",class:"w-[100%]",onClick:N},{default:p((()=>[P])),_:1},8,["loading"])])),_:1},8,["schema","rules","onRegister"])}}}),[["__scopeId","data-v-6e5a18b4"]]);export{q as default};
