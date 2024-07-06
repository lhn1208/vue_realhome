import{r as n,u as h,c as o,a as s,b as t,j as c,g as l,o as a,D as i}from"./index-Dw0V1v04.js";/* empty css                */import{_ as d}from"./GuideBox-CNDEABxg.js";import{_ as p}from"./Tab-YCvNFrXs.js";import{_ as b}from"./TopArea-C1vIcin2.js";import{_ as u}from"./AgentIntro-apDezL7U.js";import"./agent-BmB04UPV.js";import"./Profile-_7rIKNLQ.js";const m={class:"sub_content request",id:"content"},w=l('<div class="table_style"><table><caption>의뢰구분, 의뢰 부동산, 의뢰 금액, 중개현황, 담당 의뢰인으로 구성된 테이블</caption><colgroup><col width="12%"><col width="30%"><col width="12%"><col></colgroup><thead><tr><th scope="row">의뢰구분</th><th colspan="3" class="al_left"> 전세/월세 | 아파트 <span class="rd_ico red sm">오프라인 의뢰</span><span class="rd_ico blue sm">온라인 의뢰</span></th></tr></thead><tbody><tr><th scope="row">의뢰 부동산</th><td>매물 부동산</td><th scope="row">요청일</th><td>2023.09.06 15:20</td></tr><tr><th scope="row">의뢰 금액</th><td colspan="3">전세보증금: 2억 5000만원 | 월세보증금/월세: 1억/30만원, 1억1000/25만원 </td></tr><tr><th scope="row">중개 현황</th><td colspan="3"><div class="flex gap100"><span>고객 관심: <em class="f_red">31</em>/125</span><span>중개사 관심: <em class="f_red">10</em>/60</span><span>방문요청: <em class="f_red">6</em></span><span>방문완료: <em class="f_red">6</em></span></div></td></tr><tr><th scope="row">담당 의뢰인</th><td>홍길동 010-111-0101</td><th>매물사진</th><td><span class="f_red">매물사진 미등록(사지을 등록하시면 거래가 빠르게 이뤄집니다/중개사에게 요청)</span></td></tr></tbody></table></div>',1),f={class:"tab_container"},y={key:0,class:"tab1"},g=l('<div class="table_style table"><table><caption>중개 현황 테이블</caption><colgroup><col width="18%"><col><col width="10%"><col width="30%"></colgroup><tbody><tr><th scope="row">현장방문 예상시간</th><td>-</td><th scope="row">요청일</th><td>2023.06.10 17:20</td></tr><tr class="bg_sky"><th class="f_red">미협의</th><td colspan="3">-</td></tr><tr><th scope="row">현장방문 예상시간</th><td>-</td><th scope="row">요청일</th><td>2023.06.10 17:20</td></tr><tr class="bg_sky"><th class="f_blue">협의완료</th><td colspan="3">-</td></tr><tr><th scope="row">현장방문 예상시간</th><td>-</td><th scope="row">요청일</th><td>2023.06.10 17:20</td></tr><tr class="bg_sky"><th class="f_emerald">방문완료</th><td colspan="3">-</td></tr><tr><th scope="row">현장방문 예상시간</th><td>-</td><th scope="row">요청일</th><td>2023.06.10 17:20</td></tr><tr class="bg_sky"><th class="f_red">방문취소</th><td colspan="3">-</td></tr></tbody></table></div>',1),v={key:1,class:"tab2"},x=l('<div class="table_style bd_none table"><table><caption>의뢰인 관리 테이블</caption><colgroup><col width="18%"><col></colgroup><tbody><tr><th scope="row">홍길동 <span class="rd_ico yg sm">담당자</span></th><td>010-0000-0000 <span class="rd_ico emerald sm">승인</span><button class="ab_right btn_square basic">수정/삭제</button></td></tr><tr><th scope="row">홍길동</th><td>010-0000-0000 <span class="rd_ico red sm">미승인</span><button class="ab_right btn_square red">수정/삭제</button></td></tr><tr><th scope="row">홍길동</th><td>010-0000-0000 <span class="rd_ico gray sm">미가입</span><button class="ab_right btn_square disable">수정/삭제</button></td></tr></tbody></table></div>',1),k=t("h3",{class:"title"},"의뢰인 등록/수정",-1),T={class:"table_style bd_none table center"},q=t("caption",null,"담당자 선택, 의뢰인 이름, 휴대전화번호, 구분으로 구성된 의뢰인 등록/수정 테이블",-1),S=t("colgroup",null,[t("col",{width:"12%"}),t("col",{width:"28%"}),t("col",{width:"*"}),t("col",{width:"22%"})],-1),$=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"담당자 선택"),t("th",{scope:"col"},"의뢰인 이름"),t("th",{scope:"col"},"휴대전화번호"),t("th",{scope:"col"},"구분")])],-1),N=t("td",null,[t("input",{type:"text",title:"의뢰인 이름 입력하세요.",placeholder:"이름 입력",class:"w200"})],-1),V=t("td",null,[t("input",{type:"text",title:"휴대전화번호 입력하세요.",placeholder:"휴대전화번호 숫자만 입력",class:"w200"})],-1),B=t("td",null,[t("button",{class:"btn_square basic"},"추가")],-1),C=t("td",null,[t("input",{type:"text",title:"의뢰인 이름 입력하세요.",placeholder:"이름 입력",class:"w200"})],-1),I=t("td",null,[t("input",{type:"text",title:"휴대전화번호 입력하세요.",placeholder:"휴대전화번호 숫자만 입력",class:"w200"})],-1),j=t("td",null,[t("div",{class:"flex"},[t("button",{class:"btn_square basic"},"수정"),t("button",{class:"btn_square basic"},"삭제")])],-1),D={key:2},E=l('<div class="table_style"><table><caption>의뢰일,의뢰 부동산으로 구성된 테이블</caption><colgroup><col width="12%"><col></colgroup><thead><tr><th scope="row">의뢰일</th><th class="al_left">2023.08.09 15:30</th></tr><tr><th scope="row">의뢰 부동산</th><td>매물 부동산</td></tr></thead></table></div>',1),L={__name:"SaleState",setup(M){const e=n("tab1"),_=r=>{e.value=r};return n(!1),h(),(r,R)=>(a(),o("div",m,[s(b,{title:"매도/임대 진행 현황",titleClass:"f_blue",text1:"모든 중개사가 공동중개를 통해 매물 계약을 위해 노력하고 있습니다.",btnText:"목록보기",btnClass:"w200",link:"MySale"}),s(u,{profile:"basic",addInfo:!0,linkShow:!0}),w,t("div",f,[s(p,{tabTit1:"중개 현황",tabTit2:"의뢰인 관리",tabTit3:"중개의뢰 관리",num1:"4",num2:"3",onUpdateTab:_})]),e.value==="tab1"?(a(),o("div",y,[g,s(d,{guides:{text1:"1. 매물의 현장방문 현황을 실시간 확인하실 수 있습니다.",text2:"2. 미협의, 협의 완료, 방문완료, 방문취소로 구분됩니다."}})])):c("",!0),e.value==="tab2"?(a(),o("div",v,[x,t("section",null,[k,t("div",T,[t("table",null,[q,S,$,t("tbody",null,[t("tr",null,[t("td",null,[s(i,{optId:"check1",labelTxt:"<span class=screen_out>담당자 선택</span>"})]),N,V,B]),t("tr",null,[t("td",null,[s(i,{optId:"check2",labelTxt:"<span class=screen_out>담당자 선택</span>"})]),C,I,j])])])])]),s(d,{guides:{text1:"1. 의뢰인은 전체 <em class='f_red'>4명까지 등록</em> 하실 수 있습니다.",text2:"2. 의뢰인을 등록하시면 해당 의뢰인이 <em class='f_red'>중개의뢰를 같이 관리</em>하실 수 있습니다.",text3:"3. 담당자는 공인중개사와 주로 연락할 분을 선택하십시오."}})])):c("",!0),e.value==="tab3"?(a(),o("div",D,[E,s(d,{guides:{text1:"1. 의뢰한 공인중개사를 통하지 않고 거래가 완료된 경우 중개의뢰 종료를 하십시오.",text2:"2. <em class='f_red'>의뢰한 공인중개사를 통해 계약한 경우 공인중개사가 계약완료로 처리하게 됩니다.</em>"}})])):c("",!0)]))}};export{L as default};
