import{u as i,c as n,b as t,a as s,w as d,g as _,o as r,D as o}from"./index-C0UZFGyd.js";import{_ as h}from"./TopArea-q0jmhsTf.js";const u={class:"sub_content agent"},b={class:"req_chk_wrap"},p=_('<section><div class="flex_both_ends title_area"><h3 class="title f20">매물 정보</h3><span class="date">등록일: 2023.04.06</span></div><div class="table_style"><table class="table"><caption>확인요청 매물,담당의뢰인,최종매물 확인일으로 구성된 테이블</caption><colgroup><col width="14%"><col width="20%"><col width="14%"><col width="*"></colgroup><tbody><tr><th scope="row">확인요청 매물</th><td colspan="3"><div class="flex_both_ends"><div>전세 | 아파트 | 서울시 송파구 잠실동 231-1(잠실주공1단지아파트) 103동 301호</div><button class="btn_round bg mid blue">매물 중개현황</button></div></td></tr><tr><th scope="row">담당 의뢰인</th><td>홍길동 010-0000-0000</td><th scope="row">추가 의뢰인</th><td>홍길동 010-0000-0000/김세미(세입자) 010-0000-0000</td></tr><tr><th scope="row">최종 매물 확인일</th><td colspan="3">23.05.02(10일 전)</td></tr></tbody></table></div></section>',1),v=t("div",{class:"flex_both_ends title_area"},[t("h3",{class:"title f20 f_blue"},"매물 확인요청"),t("span",{class:"date"},"요청일: 2023.04.06 14:30")],-1),f={class:"table_style"},w={class:"table"},m=t("caption",null,"확인요청 매물,담당의뢰인,최종매물 확인일으로 구성된 테이블",-1),k=t("colgroup",null,[t("col",{width:"14%"}),t("col",{width:"*"})],-1),x=t("th",{scope:"row"},"거래 가능여부",-1),g={class:"flex"},q=t("tr",null,[t("th",{scope:"row"},"안내"),t("td",{class:"bg_pink"},[t("ul",{class:"list"},[t("li",null,"1. 의뢰인과 통화 후, 거래가능 여부를 입력하십시오."),t("li",null,"2. 계약서 작성 전까지는 거래가능으로 처리하십시오.(가계약을 했을 경우 거래 가능으로 처리하십시오.)"),t("li",null,"3. 리얼하우스를 통해 계약하셨을 경우 매물 중개현황에서 방문완료 후, 계약 처리하십시오.")])])],-1),y={class:"btnarea both_ends"},B=t("button",{class:"btn_square"},"확인",-1),$={__name:"ReqChk",setup(C){const l=i(),a=c=>{l.push("/ReqState")};return(c,e)=>(r(),n("div",u,[t("div",b,[s(h,{title:"매물 확인요청",titleClass:"f_red",text1:"리얼하우스에 있는 모든 매물을 의뢰한 중개사에게 [방문요청]하실 수 있습니다."}),p,t("section",null,[v,t("div",f,[t("table",w,[m,k,t("tr",null,[x,t("td",null,[t("div",g,[s(o,{radio:"true",optId:"check1",labelTxt:"거래가능",radio_nm:"deal_chk"}),s(o,{radio:"true",optId:"check2",labelTxt:"거래완료(매물종료)",radio_nm:"deal_chk"})])])]),q])])]),t("div",y,[t("button",{class:"btn_square basic",onClick:e[0]||(e[0]=d(N=>a(),["prevent"]))},"취소"),B])])]))}};export{$ as default};
