import{r as _,u as h,c as s,b as a,a as c,w as p,j as o,o as e,g as l}from"./index-Dw0V1v04.js";import{_ as b}from"./TopArea-C1vIcin2.js";import{_ as v}from"./Tab-YCvNFrXs.js";const u={class:"sub_content agent"},f={class:"sch_manage"},m={class:"tab_container flex_both_ends"},w={key:0},g=l('<div class="table_style bd_none pd20"><table class="table"><caption>현재일정 테이블</caption><colgroup><col width="16%"><col width="*"><col width="12%"></colgroup><tbody><tr><th scope="row">개인 일정</th><td><div class="title"><a href="#">개인일정 제목이 나타납니다. 개인일정 제목이 나타납니다. 개인일정 제목이 나타납니다. 개인일정 제목이 나타납니다. 개인일정 제목이 나타납니다. 개인일정 제목이 나타납니다.</a><span class="rd_ico sm grass">오늘</span></div></td><td class="date">2023.08.10</td></tr><tr><th scope="row" class="f_blue">매물 현장안내</th><td><div class="title"><a href="#">전세 | 아파트 | 서울시 송파구 잠실동 321-1(잠실주공아파트) 102동 201동</a><span class="rd_ico sm grass">오늘</span></div></td><td class="date">2023.08.10</td></tr><tr><th scope="row" class="f_red">의뢰인 방문</th><td><div class="title"><a href="#">홍길동 010-000-0000</a></div></td><td class="date">2023.08.10</td></tr><tr><th scope="row">메모 일정</th><td><div class="title"><a href="#"><span class="label f_blue">[임대]</span>매물 확인을 위한 현장방문 일정입니다.</a></div></td><td class="date">2023.08.10</td></tr><tr><th scope="row">메모 일정</th><td><div class="title"><a href="#"><span class="label f_blue">[매도]</span>메모 제목이 나타납니다.</a></div></td><td class="date">2023.08.10</td></tr><tr><th scope="row">메모 일정</th><td><div class="title"><a href="#"><span class="label f_red">[임차]</span>메모 제목이 나타납니다.</a></div></td><td class="date">2023.08.10</td></tr></tbody></table></div>',1),y=[g],k={key:1},T=l('<div class="table_style bd_none pd20"><table class="table"><caption>과거일정 테이블</caption><colgroup><col width="16%"><col width="*"><col width="12%"></colgroup><tbody><tr><th scope="row">개인 일정</th><td><div class="title"><a href="#">개인일정 제목이 나타납니다.</a></div></td><td class="date">2023.06.10</td></tr><tr><th scope="row" class="f_red">의뢰인 방문</th><td><div class="title"><a href="#">홍길동 010-000-0000</a></div></td><td class="date">2023.06.10</td></tr></tbody></table></div>',1),x=[T],S={__name:"SchChk",setup(C){const t=_("tab1"),i=d=>{t.value=d},r=h(),n=()=>{r.push("/schRegst")};return(d,N)=>(e(),s("div",u,[a("div",f,[c(b,{title:"일정 관리",titleClass:"f_blue",text1:"매물 또는 매수/임차 중개의뢰의 메모에 일정을 등록하시면 일정 관리에서 확인하실 수 있습니다."}),a("div",m,[c(v,{tabTit1:"현재일정",tabTit2:"과거일정",onUpdateTab:i}),a("button",{class:"btn_square orange",onClick:p(n,["prevent"])},"일정등록")]),t.value==="tab1"?(e(),s("div",w,y)):o("",!0),t.value==="tab2"?(e(),s("div",k,x)):o("",!0)])]))}};export{S as default};
