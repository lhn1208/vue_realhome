import{o as n,c,b as t,t as s,d as o}from"./index-C0UZFGyd.js";const a={class:"offer_agent",id:"content"},i={class:"col"},l={class:"name"},d={class:"col"},r={class:"f_red"},_={class:"f_blue"},f={class:"bottom_box"},h={class:"check_form"},m=["id","disabled"],g=["for"],u={class:"date"},x={__name:"OfferAgentInfo",props:{name:String,office:String,rating:String,term:String,date:String,optId:String,disabled:Boolean},setup(e){return(b,S)=>(n(),c("div",null,[t("div",a,[t("div",i,[t("strong",l,s(e.name),1),t("span",null,s(e.office),1)]),t("div",d,[t("ul",null,[t("li",null,[o("평점:"),t("em",r,s(e.rating),1),o("점")]),t("li",null,[o("매물과의 거리:"),t("em",_,s(e.term),1),o("Km")])])])]),t("div",f,[t("div",h,[t("input",{type:"checkbox",id:e.optId,class:"checkbox",disabled:e.disabled},null,8,m),t("label",{for:e.optId},"방문요청",8,g)]),t("span",u,s(e.date),1)])]))}};export{x as _};
