import{x as h,u as p,o as a,c as i,b as s,n as l,t as r,d as e,w as u,j as m,y as x,z as g}from"./index-Dw0V1v04.js";/* empty css                                                                */const _=t=>(x("data-v-a35ebd46"),t=t(),g(),t),f={class:"box"},v=["innerHTML"],S={key:0,class:"right"},C={class:"f_blue"},w={class:"btn_wrap"},B={key:1,class:"right"},I=_(()=>s("span",null,[e("고객평점 "),s("em",{class:"f_red"},"600"),e("점")],-1)),T=_(()=>s("span",null,[e("시스템평점 "),s("em",{class:"f_red"},"400"),e("점")],-1)),y=[I,T],k={__name:"InfoBox",props:{title:String,amt:String,wrapClass:String,titClass:String,btnTxt1:String,btnTxt2:String,myhome:Boolean,grade:Boolean},setup(t){const c=p(),d=n=>{n==="customer"&&c.push("/customer"),n==="point"&&c.push("/point")};return(n,o)=>(a(),i("div",{class:l([t.wrapClass,"box_wrap info_box"])},[s("div",f,[s("strong",{class:l(t.titClass),innerHTML:t.title},null,10,v),t.myhome?(a(),i("div",S,[s("em",C,r(t.amt),1),e("원 "),s("div",w,[s("button",{class:"btn_round",onClick:o[0]||(o[0]=u(b=>d("point"),["prevent"]))},r(t.btnTxt1),1),s("button",{class:"btn_round",onClick:o[1]||(o[1]=u(b=>d("customer"),["prevent"]))},r(t.btnTxt2),1)])])):m("",!0),t.grade?(a(),i("div",B,y)):m("",!0)])],2))}},V=h(k,[["__scopeId","data-v-a35ebd46"]]);export{V as I};
