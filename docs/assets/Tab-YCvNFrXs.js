import{r as k,p as g,E as S,o as l,c as b,b as c,d as m,t as s,j as r,n as d}from"./index-Dw0V1v04.js";const f={class:"tab_btn"},C={key:0},y={key:0},B={__name:"Tab",props:{tabTit1:String,tabTit2:String,tabTit3:String,num1:String,num2:String,addClass:{type:String,default:""},initialTab:{type:String,default:"tab1"}},emits:["updateTab"],setup(t,{emit:v}){const i=t,o=v,n=k(i.initialTab),u=a=>{n.value=a,o("updateTab",a)};return g(()=>{i.initialTab&&(n.value=i.initialTab,o("updateTab",i.initialTab))}),S(()=>i.initialTab,a=>{a&&(n.value=a,o("updateTab",a))}),(a,e)=>(l(),b("div",f,[c("button",{class:d({on:n.value==="tab1"}),onClick:e[0]||(e[0]=T=>u("tab1"))},[m(s(t.tabTit1),1),t.num1?(l(),b("span",C,"("+s(t.num1)+")",1)):r("",!0)],2),c("button",{class:d({on:n.value==="tab2"}),onClick:e[1]||(e[1]=T=>u("tab2"))},[m(s(t.tabTit2),1),t.num2?(l(),b("span",y,"("+s(t.num2)+")",1)):r("",!0)],2),t.tabTit3?(l(),b("button",{key:0,class:d({on:n.value==="tab3"}),onClick:e[2]||(e[2]=T=>u("tab3"))},s(t.tabTit3),3)):r("",!0)]))}};export{B as _};
