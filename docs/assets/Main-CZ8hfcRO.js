import{u as h,o as l,c as i,b as t,n as a,t as e,d as n,j as o,w as m,a as d,g as k}from"./index-CwxpAfRD.js";import"./agent-BmB04UPV.js";/* empty css                                                                */import{_ as x}from"./TopArea-3aXDfLf_.js";import{_ as g}from"./Profile-BWAtu7Xk.js";const v={class:"box"},C={class:"right"},N={key:0,class:"f_blue r_link"},T=t("i",{class:"link_arr"},"링크아이콘",-1),p={key:0,class:"f_blue r_link"},w=t("i",{class:"link_arr"},"링크아이콘",-1),S={key:0},$=t("i",{class:"link_arr"},"링크아이콘",-1),f={__name:"AgentInfoBox",props:{wrapClass:String,titClass:String,title:String,rTitle1:String,rTitle2:String,rTitle3:String,rNum1:Number,rNum2:Number,rNum3:Number,txtClass1:String,txtClass2:String,txtClass3:String,btnAddClass:String,btnTxt1:String,link1:String,link2:String,link3:String,link:String},setup(s){const r=s,b=h(),c=()=>{r.link&&b.push(`/${r.link}`)};return(u,_)=>(l(),i("div",{class:a([s.wrapClass,"box_wrap info_box"])},[t("div",v,[t("strong",{class:a(s.titClass)},e(s.title),3),t("div",C,[t("span",null,[n(e(s.rTitle1)+": ",1),t("em",{class:a(s.txtClass1)},e(s.rNum1),3),s.link1?(l(),i("button",N,[n("상세보기"),T])):o("",!0)]),t("span",null,[n(e(s.rTitle2)+": ",1),t("em",{class:a(s.txtClass2)},e(s.rNum2),3),s.link2?(l(),i("button",p,[n("상세보기"),w])):o("",!0)]),s.rTitle3?(l(),i("span",S,[n(e(s.rTitle3)+": ",1),t("em",{class:a(s.txtClass3)},e(s.rNum3),3),s.link3?(l(),i("button",{key:0,class:"f_blue r_link",onClick:_[0]||(_[0]=m(j=>c(),["prevent"]))},[n("상세보기"),$])):o("",!0)])):o("",!0),s.btnTxt1?(l(),i("button",{key:1,class:a([s.btnAddClass,"btn_round"]),onClick:m(c,["prevent"])},e(s.btnTxt1),3)):o("",!0)])])],2))}},y={class:"main agent content_w",id:"content"},V={class:"top_info"},A=t("div",{class:"flex_end"},[t("button",{class:"f_blue btn"},[n("설정 바로가기"),t("i",{class:"link_arr"},"링크아이콘")])],-1),B={class:"box_wrap req_state"},q={class:"box flex_both_ends"},M=t("div",null,[t("strong",null,"요청내역"),t("p",null,[n(" 온라인 중개의뢰, 매물확인요청을 확인하십시오. "),t("br"),n("매수측 중개사가 방문 요청한 매물을 문의할 경우 [요청번호]를 통해 빠른 답변이 가능합니다. ")])],-1),R=k('<section><h2 class="title f20">금일 의뢰인 방문(<em class="f_red">2</em>)</h2><div class="table_style bd_none"><table class="table"><caption>금일 의뢰인 방문 테이블</caption><colgroup><col width="20%"><col width="16%"><col width="*"></colgroup><tbody><tr><th scope="row">홍길동/010-0000-0000</th><td>방문요청 매물: 5개</td><td><div class="flex_both_ends"><div>의뢰인 방문시간: <span class="f_red">10시 10분</span></div><button class="btn_round mid">중개현황</button></div></td></tr><tr><th scope="row">홍길동/010-0000-0000</th><td>방문요청 매물: 5개</td><td><div class="flex_both_ends"><div>의뢰인 방문시간: <span class="f_red">15시 30분</span></div><button class="btn_round mid">중개현황</button></div></td></tr></tbody><tfoot><tr><td class="bg_pink al_center" colspan="3">※ 방문요청 매물을 등록한 매도측 중개사와 통화 후 현장 방문시간을 반드시 입력하십시오.</td></tr></tfoot></table></div></section><section><h2 class="title f20">금일 매물 안내(<em class="f_red">1</em>)</h2><div class="table_style bd_none"><table class="table"><caption>금일 매물 안내 테이블</caption><colgroup><col width="16%"><col width="20%"><col width="*"></colgroup><tbody><tr><th scope="row">요청번호:02<span class="f_red">21</span></th><td>현장방문 예상시간: <span class="f_red">10시 10분</span></td><td><div class="flex_both_ends"><div>서울시 송파구 잠실동 231-1(잠실주공1단지아파트) 103동 301호</div><button class="btn_round mid">방문현황</button></div></td></tr></tbody><tfoot><tr><td class="bg_pink al_center" colspan="3">※ 매수측 중개사가 방문하면 방문현황에서 방문완료로 처리하십시오.</td></tr></tfoot></table></div></section>',2),G={__name:"Main",setup(s){const r=h(),b=c=>{r.push("/ReqState")};return(c,u)=>(l(),i("main",y,[t("section",V,[d(g,{profile:"basic"}),d(x,{title:"홍길동",text1:"대표공인중개사/010-000-0000",btnText:"중개사무소 등록",btnClass:"bg",link:""}),A]),d(f,{wrapClass:"sch_info",title:"일정 관리",rTitle1:"오늘일정",rTitle2:"내일일정",rTitle3:"모레일정",txtClass1:"f_red",txtClass2:"f_red",txtClass3:"f_red",rNum1:4,rNum2:4,rNum3:0,btnAddClass:"mid",btnTxt1:"일정 확인",link:"schChk"}),d(f,{wrapClass:"manage_box",title:"관리",rTitle1:"관심매물",rTitle2:"소속직원",rTitle3:"포인트",txtClass1:"f_red",txtClass2:"f_red",txtClass3:"f_red",rNum1:4,rNum2:3,rNum3:1e3,link1:"1",link2:"1",link3:"1"}),t("div",B,[t("div",q,[M,t("button",{class:"btn_round bg red mid",onClick:u[0]||(u[0]=m(_=>b(),["prevent"]))},"요청내역 확인")])]),R]))}};export{G as default};
