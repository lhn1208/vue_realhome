import{o as s,c as o,b as a,t as d,n as h,j as c,r as _,G as p,p as m,a as t,g as v}from"./index-C71ZTHix.js";import{_ as x}from"./TopArea-DQFegITb.js";import{_ as f}from"./Tab-w1_AXmSD.js";const g={href:"#"},T={class:"date"},e={__name:"Board",props:{title:String,labelIco:String,date:String,icoClass:String},setup(l){return(i,r)=>(s(),o("li",null,[a("div",null,[a("a",g,d(l.title),1),l.labelIco?(s(),o("span",{key:0,class:h(["rd_ico sm",l.icoClass?"grass":"red"])},d(l.labelIco),3)):c("",!0)]),a("span",T,d(l.date),1)]))}},C={class:"sub_content customer",id:"content"},I={class:"tab_container"},y={key:0},k={class:"box_list"},N={key:1},q={class:"box_list"},w={key:2},S=v('<div class="table_style"><table class="table"><caption>문의 제목,문의 내용으로 구성된 테이블</caption><colgroup><col width="14%"><col width="*"></colgroup><tbody><tr><th scope="row"><label for="reqTit">문의 제목</label></th><td><input id="reqTit" type="text" class="w100per" placeholder="문의 제목을 입력하십시오."></td></tr><tr><th scope="row"><label for="reqCont">문의 내용</label></th><td><div class="textarea_box"><textarea id="reqCont" class="w100per textarea" placeholder="문의 내용을 상세하게 기재하십시오."></textarea></div></td></tr></tbody></table></div><div class="grp flex_end"><button class="btn_square red">문의 등록</button></div><h3 class="title">1대1 문의사항</h3>',3),$={class:"box_list"},j={__name:"Customer",setup(l){const i=_("tab1"),r=b=>{i.value=b},u=p(),n=_(null);return m(()=>{n.value=u.query.activeTab}),(b,B)=>(s(),o("div",C,[t(x,{title:"고객센터",titleClass:"f_blue",text1:"리얼하우스는 좋은 서비스를 위해 최선을 다하겠습니다.",btnText:"닫기",link:"main"}),a("div",I,[t(f,{tabTit1:"공지사항",tabTit2:"뉴스",tabTit3:"1대1 문의",onUpdateTab:r,initialTab:n.value},null,8,["initialTab"])]),i.value==="tab1"?(s(),o("div",y,[a("ul",k,[t(e,{title:"공지사항입니다1",labelIco:"NEW",date:"23-06-06"}),t(e,{title:"공지사항입니다2",date:"23-06-06"}),t(e,{title:"공지사항입니다3",date:"23-06-06"}),t(e,{title:"공지사항입니다",date:"23-06-06"}),t(e,{title:"공지사항입니다",date:"23-06-06"}),t(e,{title:"공지사항입니다",date:"23-06-06"})])])):c("",!0),i.value==="tab2"?(s(),o("div",N,[a("ul",q,[t(e,{title:"뉴스입니다1",labelIco:"NEW",date:"23-06-06"}),t(e,{title:"뉴스입니다",labelIco:"NEW",date:"23-06-06"}),t(e,{title:"뉴스입니다",date:"23-06-06"}),t(e,{title:"뉴스입니다",date:"23-06-06"}),t(e,{title:"뉴스입니다",date:"23-06-06"}),t(e,{title:"뉴스입니다",date:"23-06-06"})])])):c("",!0),i.value==="tab3"?(s(),o("div",w,[S,a("ul",$,[t(e,{title:"1대1 문의사항입니다1",labelIco:"미답변",date:"23-06-10"}),t(e,{title:"1대1 문의사항입니다",labelIco:"미답변",date:"23-06-10"}),t(e,{title:"1대1 문의사항입니다",labelIco:"답변완료",icoClass:"grass",date:"23-06-06"}),t(e,{title:"1대1 문의사항입니다",labelIco:"답변완료",icoClass:"grass",date:"23-06-06"}),t(e,{title:"1대1 문의사항입니다",labelIco:"답변완료",icoClass:"grass",date:"23-06-06"}),t(e,{title:"1대1 문의사항입니다",labelIco:"답변완료",icoClass:"grass",date:"23-06-06"})])])):c("",!0)]))}};export{j as default};
