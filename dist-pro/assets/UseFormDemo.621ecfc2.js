import{_ as e}from"./Form.vue_vue_type_script_lang.deea7dfd.js";import{_ as o}from"./ContentWrap.92af843c.js";import{d as l,b as t,r as a,o as i,c as m,l as r,a as s,m as f,F as n,A as d,i as p,v as c,t as u}from"./index.f465d987.js";import{u as b}from"./useForm.783ea7df.js";/* empty css                  */import{r as D}from"./formRules.a198e8cd.js";/* empty css                     *//* empty css               *//* empty css                  *//* empty css                 *//* empty css               *//* empty css                  *//* empty css                     *//* empty css                        *//* empty css                   */import"./InputPassword.744be6f3.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Editor.ab308143.js";import"./tsxHelper.1c6f9aac.js";/* empty css                */const v=l({setup(l){const{t:v}=d(),_=t([{field:"field1",label:v("formDemo.input"),component:"Input",formItemProps:{rules:[D]}},{field:"field2",label:v("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},{field:"field3",label:v("formDemo.radio"),component:"Radio",componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"}]}},{field:"field4",label:v("formDemo.checkbox"),component:"Checkbox",value:[],componentProps:{options:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}},{field:"field5",component:"DatePicker",label:v("formDemo.datePicker"),componentProps:{type:"date"}},{field:"field6",component:"TimeSelect",label:v("formDemo.timeSelect")}]),{register:j,methods:k,elFormRef:h}=b({schema:_}),C=e=>{const{setProps:o}=k;o({labelWidth:e})},P=e=>{const{setProps:o}=k;o({size:e})},$=e=>{const{setProps:o}=k;o({disabled:e})},g=e=>{const{delSchema:o,addSchema:l}=k;e?o("field2"):e||"field2"===_[1].field||l({field:"field2",label:v("formDemo.select"),component:"Select",componentProps:{options:[{label:"option1",value:"1"},{label:"option2",value:"2"}]}},1)},F=e=>{var o;const{setValues:l}=k;e?null==(o=s(h))||o.resetFields():l({field1:"field1",field2:"2",field3:"2",field4:["1","3"],field5:"2022-01-27",field6:"17:00"})},S=a(7),x=()=>{const{setSchema:e}=k;e([{field:"field2",path:"label",value:`${v("formDemo.select")} ${S.value}`},{field:"field2",path:"componentProps.options",value:[{label:"option-1",value:"1"},{label:"option-2",value:"2"},{label:"option-3",value:"3"}]}]),S.value++},R=()=>{const{addSchema:e}=k;s(S)%2==0?e({field:`field${s(S)}`,label:`${v("formDemo.input")}${s(S)}`,component:"Input"}):e({field:`field${s(S)}`,label:`${v("formDemo.input")}${s(S)}`,component:"Input"},s(S)),S.value++},I=()=>{s(h).validate((e=>{}))},V=()=>{var e;null==(e=s(h))||e.resetFields()};return(l,t)=>(i(),m(n,null,[r(s(o),{title:`UseForm ${s(v)("formDemo.operate")}`},{default:f((()=>[r(s(p),{onClick:t[0]||(t[0]=e=>C(150))},{default:f((()=>[c(u(s(v)("formDemo.change"))+" labelWidth",1)])),_:1}),r(s(p),{onClick:t[1]||(t[1]=e=>C("auto"))},{default:f((()=>[c(u(s(v)("formDemo.restore"))+" labelWidth",1)])),_:1}),r(s(p),{onClick:t[2]||(t[2]=e=>P("large"))},{default:f((()=>[c(u(s(v)("formDemo.change"))+" size",1)])),_:1}),r(s(p),{onClick:t[3]||(t[3]=e=>P("default"))},{default:f((()=>[c(u(s(v)("formDemo.restore"))+" size",1)])),_:1}),r(s(p),{onClick:t[4]||(t[4]=e=>$(!0))},{default:f((()=>[c(u(s(v)("formDemo.disabled")),1)])),_:1}),r(s(p),{onClick:t[5]||(t[5]=e=>$(!1))},{default:f((()=>[c(u(s(v)("formDemo.disablement")),1)])),_:1}),r(s(p),{onClick:t[6]||(t[6]=e=>g(!0))},{default:f((()=>[c(u(s(v)("formDemo.delete"))+" "+u(s(v)("formDemo.select")),1)])),_:1}),r(s(p),{onClick:t[7]||(t[7]=e=>g(!1))},{default:f((()=>[c(u(s(v)("formDemo.add"))+" "+u(s(v)("formDemo.select")),1)])),_:1}),r(s(p),{onClick:t[8]||(t[8]=e=>F(!1))},{default:f((()=>[c(u(s(v)("formDemo.setValue")),1)])),_:1}),r(s(p),{onClick:t[9]||(t[9]=e=>F(!0))},{default:f((()=>[c(u(s(v)("formDemo.resetValue")),1)])),_:1}),r(s(p),{onClick:x},{default:f((()=>[c(u(s(v)("formDemo.set"))+" "+u(s(v)("formDemo.select"))+" label ",1)])),_:1}),r(s(p),{onClick:R},{default:f((()=>[c(u(s(v)("formDemo.add"))+" "+u(s(v)("formDemo.subitem")),1)])),_:1}),r(s(p),{onClick:I},{default:f((()=>[c(u(s(v)("formDemo.formValidation")),1)])),_:1}),r(s(p),{onClick:V},{default:f((()=>[c(u(s(v)("formDemo.verifyReset")),1)])),_:1})])),_:1},8,["title"]),r(s(o),{title:`UseForm ${s(v)("formDemo.example")}`},{default:f((()=>[r(s(e),{onRegister:s(j)},null,8,["onRegister"])])),_:1},8,["title"])],64))}});export{v as default};
