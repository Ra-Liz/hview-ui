import{f as o,l as a,r as u,o as p,j as _,c,a as d,b as m,F as i}from"../app.12c398f3.js";const f=o({__name:"basic",setup(s){const e=a("");return(r,l)=>{const n=u("h-input");return p(),_(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),placeholder:"请输入内容"},null,8,["modelValue"])}}}),b=o({__name:"disabled",setup(s){const e=a("");return(r,l)=>{const n=u("h-input");return p(),_(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),disabled:"",placeholder:"请输入内容"},null,8,["modelValue"])}}}),U=o({__name:"clearable",setup(s){const e=a("");return(r,l)=>{const n=u("h-input");return p(),_(n,{placeholder:"请输入内容",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),type:"text",clearable:""},null,8,["modelValue"])}}}),V=m("br",null,null,-1),y=o({__name:"icon",setup(s){const e=a("");return(r,l)=>{const n=u("h-input");return p(),c("div",null,[d(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),placeholder:"请输入",type:"text",iconBefore:"user"},null,8,["modelValue"]),V,d(n,{modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t),placeholder:"请输入",type:"text",iconAfter:"calendar"},null,8,["modelValue"])])}}}),v=m("br",null,null,-1),x=m("br",null,null,-1),$=o({__name:"size",setup(s){const e=a("");return(r,l)=>{const n=u("h-input");return p(),c(i,null,[d(n,{placeholder:"请输入内容",type:"text",size:"large",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t)},null,8,["modelValue"]),v,d(n,{placeholder:"请输入内容",type:"text",modelValue:e.value,"onUpdate:modelValue":l[1]||(l[1]=t=>e.value=t)},null,8,["modelValue"]),x,d(n,{placeholder:"请输入内容",type:"text",size:"small",modelValue:e.value,"onUpdate:modelValue":l[2]||(l[2]=t=>e.value=t)},null,8,["modelValue"])],64)}}}),B=o({__name:"textarea",setup(s){const e=a("");return(r,l)=>{const n=u("h-input");return p(),_(n,{placeholder:"请输入",modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),type:"textarea",rows:"7",cols:"40",maxlength:40},null,8,["modelValue"])}}}),g=o({__name:"password",setup(s){const e=a("");return(r,l)=>{const n=u("h-input");return p(),_(n,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=t=>e.value=t),type:"password",placeholder:"请输入内容"},null,8,["modelValue"])}}});export{f as _,b as a,U as b,g as c,y as d,B as e,$ as f};
