import{o as c,c as o,F as s,i as l,b as n,t as r,j as d}from"./index-DMU9v44o.js";const i={key:0,class:"select_btn_wrap"},u=["id","name","checked"],h=["for"],y={key:1,class:"select_btn_wrap"},k=["id","name","checked"],m=["for"],I={__name:"SelectBtn",props:{options:{type:Object,required:!1,default:()=>({})},optId:String,type:String},setup(e){return(p,b)=>(c(),o("div",null,[e.type==="radio"?(c(),o("ul",i,[(c(!0),o(s,null,l(e.options,(a,t)=>(c(),o("li",{key:t},[n("input",{id:e.optId+t,type:"radio",name:e.optId,class:"btn_type",checked:t===0},null,8,u),n("label",{for:e.optId+t},r(a),9,h)]))),128))])):d("",!0),e.type==="check"?(c(),o("ul",y,[(c(!0),o(s,null,l(e.options,(a,t)=>(c(),o("li",{key:t},[n("input",{id:e.optId+t,type:"checkbox",name:e.optId,class:"btn_type",checked:t===0},null,8,k),n("label",{for:e.optId+t},r(a),9,m)]))),128))])):d("",!0)]))}};export{I as _};
