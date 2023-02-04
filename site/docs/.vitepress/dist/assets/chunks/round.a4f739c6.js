import{f as h,l as y,r as p,o as t,c as _,F as c,i as g,g as T,w as s,e as l,j as d,_ as f,a as r,q as w,d as b}from"../app.9364c93e.js";const z=h({__name:"basic",setup(m){const n=y([{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}]),a=y([{name:"Tag 1",color:"#fff0f6"},{name:"Tag 2",color:"#fff7e6"},{name:"Tag 3",color:"#fcffe6"},{name:"Tag 4",color:"#e6fffb"},{name:"Tag 5",color:"#f9f0ff"}]);return(i,o)=>{const e=p("h-tag");return t(),_(c,null,[(t(!0),_(c,null,g(n.value,u=>(t(),T(e,{class:"tag",key:u.name,type:u.type},{default:s(()=>[l(d(u.name),1)]),_:2},1032,["type"]))),128)),(t(!0),_(c,null,g(a.value,u=>(t(),T(e,{class:"tag",key:u.name,color:u.color},{default:s(()=>[l(d(u.name),1)]),_:2},1032,["color"]))),128))],64)}}});const F=f(z,[["__scopeId","data-v-52127a76"]]),C=h({__name:"closable",setup(m){const n=y([{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}]);return(a,i)=>{const o=p("h-tag");return t(!0),_(c,null,g(n.value,e=>(t(),T(o,{class:"tag",key:e.name,type:e.type,closable:""},{default:s(()=>[l(d(e.name),1)]),_:2},1032,["type"]))),128)}}});const j=f(C,[["__scopeId","data-v-ba3da9b6"]]),I=h({__name:"edit",setup(m){const n=y(""),a=y(["Tag 1","Tag 2","Tag 3"]),i=e=>{a.value.splice(a.value.indexOf(e),1)},o=()=>{n.value&&a.value.push(n.value),n.value=""};return(e,u)=>{const x=p("h-tag"),k=p("h-input");return t(),_(c,null,[(t(!0),_(c,null,g(a.value,v=>(t(),T(x,{key:v,class:"tag",closable:"","disable-transitions":!1,onClose:L=>i(v)},{default:s(()=>[l(d(v),1)]),_:2},1032,["onClose"]))),128)),r(k,{placeHolder:" + New Tag ",modelValue:n.value,"onUpdate:modelValue":u[0]||(u[0]=v=>n.value=v),class:"input",size:"small",onKeyup:w(o,["enter"]),onBlur:o},null,8,["modelValue","onKeyup"])],64)}}});const q=f(I,[["__scopeId","data-v-15ba91ad"]]);const V={};function $(m,n){const a=p("h-tag");return t(),_(c,null,[r(a,{class:"tag",size:"large"},{default:s(()=>[l("Large")]),_:1}),r(a,{class:"tag"},{default:s(()=>[l("Default")]),_:1}),r(a,{class:"tag",size:"small"},{default:s(()=>[l("Small")]),_:1}),r(a,{class:"tag",size:"large",closable:""},{default:s(()=>[l("Large")]),_:1}),r(a,{class:"tag",closable:""},{default:s(()=>[l("Default")]),_:1}),r(a,{class:"tag",size:"small",closable:""},{default:s(()=>[l("Small")]),_:1})],64)}const E=f(V,[["render",$],["__scopeId","data-v-336133e2"]]),B={class:"plain"},N={class:"dark"},D=h({__name:"theme",setup(m){const n=[{type:"primary",label:"Tag 1"},{type:"success",label:"Tag 2"},{type:"info",label:"Tag 3"},{type:"danger",label:"Tag 4"},{type:"warning",label:"Tag 5"}];return(a,i)=>{const o=p("h-tag");return t(),_(c,null,[b("div",B,[(t(),_(c,null,g(n,e=>r(o,{class:"tag",key:e.label,type:e.type,theme:"plain"},{default:s(()=>[l(d(e.label),1)]),_:2},1032,["type"])),64))]),b("div",N,[(t(),_(c,null,g(n,e=>r(o,{class:"tag",key:e.label,type:e.type,theme:"dark"},{default:s(()=>[l(d(e.label),1)]),_:2},1032,["type"])),64))])],64)}}});const H=f(D,[["__scopeId","data-v-006fa3fe"]]),K=h({__name:"round",setup(m){const n=y([{name:"Tag 1",type:""},{name:"Tag 2",type:"success"},{name:"Tag 3",type:"info"},{name:"Tag 4",type:"warning"},{name:"Tag 5",type:"danger"}]);return(a,i)=>{const o=p("h-tag");return t(!0),_(c,null,g(n.value,e=>(t(),T(o,{class:"tag",key:e.name,type:e.type,round:""},{default:s(()=>[l(d(e.name),1)]),_:2},1032,["type"]))),128)}}});const O=f(K,[["__scopeId","data-v-27c85669"]]);export{F as b,j as c,q as e,O as r,E as s,H as t};
