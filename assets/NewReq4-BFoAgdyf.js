/* empty css                */import{_ as w}from"./Step-zF5JgsKM.js";import{_ as B}from"./GuideBox-BVpmTcT3.js";import{r as c,c as s,a as r,b as e,F as u,i as _,j as g,d as h,o,n as v,t as f}from"./index-BRe-DRPC.js";const y={id:"content"},C={class:"sub_content request"},N={class:"table_style"},T=e("caption",null,"방문시간 선택 테이블",-1),q=e("colgroup",null,[e("col",{width:"18%"}),e("col")],-1),E=e("th",{scope:"row"},"방문시간 선택",-1),S={class:"flex"},V=e("select",null,[e("option",null,"방문일 선택"),e("option",null,"2023.04.04(월)"),e("option",null,"2023.04.05(화)"),e("option",null,"2023.04.06(수)"),e("option",null,"2023.04.07(목)")],-1),$={class:"timetable"},R={key:0,class:"time_box"},b=e("strong",null,"시간 선택",-1),F={class:"inner flex"},j=["onClick"],z=e("strong",null,"분 선택",-1),D={class:"inner flex"},L=["onClick"],P=e("p",{class:"desc"},[h("※ 금일포함 "),e("em",{class:"f_red"},"7일"),h("까지 선택 가능")],-1),K={__name:"NewReq4",setup(A){const n=c([{id:1,hour:"7시",active:!0},{id:2,hour:"8시",active:!1},{id:3,hour:"9시",active:!1},{id:5,hour:"10시",active:!1},{id:6,hour:"11시",active:!1},{id:7,hour:"12시",active:!1},{id:8,hour:"13시",active:!1},{id:9,hour:"14시",active:!1},{id:10,hour:"15시",active:!1},{id:11,hour:"16시",active:!1},{id:12,hour:"17시",active:!1},{id:13,hour:"18시",active:!1},{id:14,hour:"19시",active:!1},{id:15,hour:"20시",active:!1},{id:16,hour:"21시",active:!1}]),m=a=>{n.value.forEach(i=>{i.active=i.id===a})},d=c([{id:1,minute:"00분",active:!0},{id:2,minute:"10분",active:!1},{id:3,minute:"20분",active:!1},{id:5,minute:"30분",active:!1},{id:6,minute:"40분",active:!1},{id:6,minute:"50분",active:!1}]),p=a=>{d.value.forEach(i=>{i.active=i.id===a})},l=c(!1),x=()=>{l.value=!l.value};return(a,i)=>(o(),s("div",y,[r(w,{linktoPrev:"newReq3",linktoNext:"newReqEnd",prvBtShow:!0,finishtBtShow:!0,step4:!0,title:"매수/임차 중개의뢰",step4Txt:"방문시간 선택"}),e("div",C,[e("div",N,[e("table",null,[T,q,e("tbody",null,[e("tr",null,[E,e("td",null,[e("div",S,[V,e("div",$,[e("button",{class:"choice",onClick:x},"시간 선택"),l.value?(o(),s("div",R,[b,e("div",F,[(o(!0),s(u,null,_(n.value,t=>(o(),s("button",{key:t.id,class:v({on:t.active}),onClick:k=>m(t.id)},f(t.hour),11,j))),128))]),z,e("div",D,[(o(!0),s(u,null,_(d.value,t=>(o(),s("button",{key:t.id,class:v({on:t.active}),onClick:k=>p(t.id),style:{width:"48px"}},f(t.minute),11,L))),128))])])):g("",!0)])]),P])])])])]),r(B,{guides:{text1:"1. 공인중개사가 전문가의 입장에서 좋은 매물을 추천합니다.",text2:"2. 추천매물을 확인 후, 마음에 드는 매물을 추가 방문요청하십시오.(나의 매수에서 추가 방문요청 가능)",text3:"3. 방문일시에 중개사무소를 방문하면 여러 개의 매물을 한번에 확인할 수 있어 빠르게 계약하실 수 있습니다."},etcShow:!0,etcTxt:"※ 중개사무소 방문일은 당일을 피하시는 것이 좋습니다."})])]))}};export{K as default};
