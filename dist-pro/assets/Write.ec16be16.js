import{_ as e}from"./Form.vue_vue_type_script_lang.e1b3ddf6.js";import{u as t}from"./useForm.087daf55.js";import{d as o,A as r,b as l,w as m,o as s,y as p,a}from"./index.fce40114.js";import{r as n}from"./formRules.b99bb540.js";/* empty css                     *//* empty css               *//* empty css                  *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                     *//* empty css                  *//* empty css                        *//* empty css                   */import"./InputPassword.6e38ae1b.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.100b4827.js";import"./tsxHelper.dbd7218e.js";const i=o({props:{currentRow:{type:Object,default:()=>null}},setup(o,{expose:i}){const u=o,{t:c}=r(),d=l([{field:"title",label:c("exampleDemo.title"),component:"Input",formItemProps:{rules:[n]},colProps:{span:24}},{field:"author",label:c("exampleDemo.author"),component:"Input",formItemProps:{rules:[n]}},{field:"display_time",label:c("exampleDemo.displayTime"),component:"DatePicker",componentProps:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"},formItemProps:{rules:[n]}},{field:"importance",label:c("exampleDemo.importance"),component:"Select",formItemProps:{rules:[n]},componentProps:{options:[{label:"重要",value:3},{label:"良好",value:2},{label:"一般",value:1}]}},{field:"pageviews",label:c("exampleDemo.pageviews"),component:"InputNumber",value:0,formItemProps:{rules:[n]}},{field:"content",component:"Editor",colProps:{span:24},componentProps:{defaultHtml:"",onChange:e=>{const{setValues:t}=j;t({content:e.getHtml()})}},label:c("exampleDemo.content")}]),f=l({title:[n],author:[n],importance:[n],pageviews:[n],display_time:[n],content:[n]}),{register:b,methods:j,elFormRef:g}=t({schema:d});return m((()=>u.currentRow),(e=>{if(!e)return;const{setValues:t,setSchema:o}=j;t(e),o([{field:"content",path:"componentProps.defaultHtml",value:e.content}])}),{deep:!0,immediate:!0}),i({elFormRef:g,getFormData:j.getFormData}),(t,o)=>(s(),p(a(e),{rules:a(f),onRegister:a(b)},null,8,["rules","onRegister"]))}});export{i as default};
