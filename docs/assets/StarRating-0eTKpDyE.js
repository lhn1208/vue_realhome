import{r as c,E as r,o as s,c as i,F as u,i as p,b as g,n as _}from"./index-DMU9v44o.js";const f={class:"star_rating"},m=["onClick"],k={__name:"StarRating",props:{rating:{type:Number,required:!1,default:0},initialRating:{type:Number,required:!1,default:0},type:{type:String,default:""}},setup(l){const a=l,e=c(a.initialRating||a.rating);r(()=>a.initialRating,t=>{e.value=t}),r(()=>a.rating,t=>{e.value=t});const o=t=>{a.type==="register"&&(e.value=t+1)};return(t,d)=>(s(),i("div",f,[(s(),i(u,null,p(5,(v,n)=>g("span",{key:n,class:_({on:n<e.value}),onClick:y=>o(n)},null,10,m)),64))]))}};export{k as _};
