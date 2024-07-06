import{u as c,c as _,b as t,a as r,d as e,w as d,g as i,o as p}from"./index-BRJsce1O.js";import{_ as u}from"./TopArea-BV4KAkf8.js";const b={class:"sub_content agent"},h={class:"req_chk_wrap"},f=t("h3",{class:"title f20"},[e("온라인 중개의뢰 요청("),t("em",{class:"f_red"},"2"),e(")")],-1),v={class:"table_style bd_none"},m={class:"table"},w=t("caption",null,"온라인 중개의뢰 요청 테이블",-1),x=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"20%"}),t("col",{width:"*"})],-1),g=t("th",{scope:"row",class:"f_red"},"매수/임차 중개의뢰 요청",-1),q=t("td",null,"요청일: 23.09.03 21:30",-1),k={class:"flex_both_ends"},C=t("th",{scope:"row",class:"f_blue"},"매도/임대 중개의뢰 요청",-1),y=t("td",null,"요청일: 23.09.03 21:30",-1),M={class:"flex_both_ends"},$=t("h3",{class:"title f20"},[e("온라인 학인 요청("),t("em",{class:"f_red"},"2"),e(")")],-1),N={class:"table_style bd_none"},R={class:"table"},V=t("caption",null,"온라인 학인 요청 테이블",-1),B=t("colgroup",null,[t("col",{width:"18%"}),t("col",{width:"20%"}),t("col",{width:"*"})],-1),S=t("th",{scope:"row",class:"f_blue"},"매물 확인 요청",-1),E=t("td",null,"요청일: 23.09.03 21:30",-1),T={class:"flex_both_ends"},j=t("th",{scope:"row",class:"f_blue"},"매물 확인 요청",-1),z=t("td",null,"요청일: 23.09.03 21:30",-1),A={class:"flex_both_ends"},D=i('<section><h3 class="title f20">현장 방문요청(<em class="f_red">4</em>)</h3><div class="table_style pd20"><table class="table req_tb"><caption>현장 방문요청 테이블</caption><colgroup><col width="14%"><col width="*"></colgroup><tbody><tr><th rowspan="3" scope="row" class="bold">03<em class="f_blue">26</em></th><td><div class="flex_both_ends"> 홍길동(은성공인중개사무소) 010-0000-0000/의뢰인: 김길동 <span class="date">요청일: 23.09.03 21:30</span></div></td></tr><tr><td>전세/월세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호</td></tr><tr><td>현장방문 예상시간: <span class="f_red">방문시간 협의 후, 매수측 중개사에게 현장도착 예상시간 입력을 요청하십시오.</span></td></tr><tr><td class="pd10 state" colspan="2"><div class="flex_end"><span class="f_red">미협의</span><button class="btn_round mid">매물현황</button></div></td></tr><tr><th rowspan="3" scope="row" class="bold">05<em class="f_blue">26</em></th><td><div class="flex_both_ends"> 홍길동(은성공인중개사무소) 010-0000-0000/의뢰인: 김길동 <span class="date">요청일: 23.09.03 21:30</span></div></td></tr><tr><td>전세/월세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호</td></tr><tr><td>현장방문 예상시간: <span class="f_red">23.09.09(수) 14시 30분</span>(다소 차이가 있을 수 있음)</td></tr><tr><td class="pd10 state" colspan="2"><div class="flex_end"><span><span class="f_blue">협의완료: </span>23.09.06 13:20</span><button class="btn_round mid">매물현황</button></div></td></tr><tr><th rowspan="3" scope="row" class="bold">07<em class="f_blue">24</em></th><td><div class="flex_both_ends"> 홍길동(은성공인중개사무소) 010-0000-0000/의뢰인: 김길동 <span class="date">요청일: 23.09.03 21:30</span></div></td></tr><tr><td>전세/월세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호</td></tr><tr><td>현장방문 예상시간: <span class="f_red">23.09.09(수) 14시 30분</span>(방문완료)</td></tr><tr><td class="pd10 state" colspan="2"><div class="flex_end"><span><span class="f_emerald">방문완료: </span>23.09.06 13:20</span><button class="btn_round mid">매물현황</button></div></td></tr><tr><th rowspan="3" scope="row" class="bold">01<em class="f_blue">24</em></th><td><div class="flex_both_ends"> 홍길동(은성공인중개사무소) 010-0000-0000/의뢰인: 김길동 <span class="date">요청일: 23.09.03 21:30</span></div></td></tr><tr><td>전세/월세 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호</td></tr><tr><td>현장방문 예상시간: <span class="f_red">23.09.09(수) 14시 30분</span>(방문취소)</td></tr><tr><td class="pd10 state" colspan="2"><div class="flex_end"><span><span class="f_red">방문취소: </span>23.09.06 13:20</span><button class="btn_round mid">매물현황</button></div></td></tr></tbody></table></div></section>',1),I={__name:"ReqState",setup(F){const a=c(),l=n=>{n==="reqManage"&&a.push("/ReqManage"),n==="reqChk"&&a.push("/ReqChk")};return(n,s)=>(p(),_("div",b,[t("div",h,[r(u,{title:"요청 내역",titleClass:"f_red",text1:"온라인 중개의뢰 요청, 매물 확인요청, 현장 방문요청 내역을 확인하실 수 있습니다."}),t("section",null,[f,t("div",v,[t("table",m,[w,x,t("tbody",null,[t("tr",null,[g,q,t("td",null,[t("div",k,[e(" 전세 | 아파트, 단독주택, 다가구 주택 "),t("button",{class:"btn_round mid",onClick:s[0]||(s[0]=d(o=>l("reqManage"),["prevent"]))},"의뢰관리")])])]),t("tr",null,[C,y,t("td",null,[t("div",M,[e(" 전세 | 아파트 | 서울시 송파구 잠실동(잠실주공아파트) "),t("button",{class:"btn_round mid",onClick:s[1]||(s[1]=d(o=>l("reqManage"),["prevent"]))},"의뢰관리")])])])])])])]),t("section",null,[$,t("div",N,[t("table",R,[V,B,t("tbody",null,[t("tr",null,[S,E,t("td",null,[t("div",T,[e(" 매매 | 아파트 | 서울시 송파구 잠실동 321(잠실주공1단지) 102동 103호 "),t("button",{class:"btn_round mid",onClick:s[2]||(s[2]=d(o=>l("reqChk"),["prevent"]))},"요청관리")])])]),t("tr",null,[j,z,t("td",null,[t("div",A,[e(" 전세 | 아파트 | 서울시 송파구 잠실동(잠실주공아파트) "),t("button",{class:"btn_round mid",onClick:s[3]||(s[3]=d(o=>l("reqChk"),["prevent"]))},"요청관리")])])])])])])]),D])]))}};export{I as default};
