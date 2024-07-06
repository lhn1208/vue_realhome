import{r,c as o,a as c,b as t,l as a,s as i,j as d,d as u,g as v,o as n}from"./index-BRJsce1O.js";/* empty css                */import{_ as w}from"./Step-CbEifSEC.js";import{_ as p}from"./SelectBtn-CZ5ink1B.js";const b={id:"content"},k={class:"sub_content request"},x=t("div",{class:"flex_both_ends title_area"},[t("h3",{class:"title f20"},"의뢰 구분"),t("span",null,[t("span",{class:"f_red"},"*"),u("필수 사항")])],-1),f={class:"table_style"},y=t("caption",null,"매물주소,매물구분,거래구분으로 구성된 테이블",-1),m=t("colgroup",null,[t("col",{width:"18%"}),t("col")],-1),q=t("tr",null,[t("th",{scope:"row"},"매물주소"),t("td",null,"서울특별시 송파구 잠실동 311-10(잠실 엘리티움)")],-1),g=t("tr",null,[t("th",{scope:"row",rowspan:"2",class:"req"},"매물구분"),t("td",null,[t("div",{class:"flex"},[t("select",null,[t("option",{value:""},"매물구분 선택"),t("option",{value:""},"일반주택"),t("option",{value:""},"공동주택")]),t("select",null,[t("option",{value:""},"매물유형 선택"),t("option",{value:""},"다가구주택"),t("option",{value:""},"상가주택"),t("option",{value:""},"원룸주택"),t("option",{value:""},"단독주택")])])])],-1),N=t("tr",null,[t("td",{class:"bg_pink"},[t("p",{class:"desc"},"※매물구분과 매물유형을 선택하십시오.")])],-1),V=t("th",{scope:"row",rowspan:"2",class:"req"},"거래구분",-1),B={class:"flex"},S=v('<section><h3 class="title f20">매물 정보</h3><div class="table_style"><table><caption>해당 동,해당 층,안내로 구성된 테이블</caption><colgroup><col width="14%"><col width="36%"><col width="14%"><col></colgroup><tbody><tr><th scope="row" class="req">해당 동</th><td><div class="flex"><input type="text" placeholder="예)102,가,A,1" class="w150" title="해당 동 입력하세요.">동 <div class="chk"><input type="checkbox" class="checkbox" id="check"><label for="check">동 없음</label></div></div></td><th scope="row" class="req">건물 층</th><td><div class="flex"><input type="text" class="w150" title="건물 층 입력하세요.">층</div></td></tr><tr><th scope="row" class="req">해당 층</th><td><div class="flex"><input type="text" class="w150" title="해당 층 입력하세요.">층</div></td><th scope="row" class="req">해당 호수</th><td><div class="flex"><input type="text" class="w150" placeholder="예)102, B01" title="해당 호수 입력하세요.">호</div></td></tr><tr><th scope="row">안내</th><td class="bg_pink" colspan="3"><p class="desc">※ 동, 층, 호수 등의 정보를 정확히 입력하십시오</p></td></tr></tbody></table></div></section>',1),C=t("h3",{class:"title f20"},"의뢰인 정보",-1),R={class:"table_style"},T=t("caption",null,"해당 동,해당 층,안내로 구성된 테이블",-1),I=t("colgroup",null,[t("col",{width:"14%"}),t("col",{width:"36%"}),t("col",{width:"14%"}),t("col")],-1),U=t("th",{class:"req",scope:"row"},"의뢰인 구분",-1),$={colspan:"3"},j={class:"flex"},A=t("tr",null,[t("th",null,"의뢰인 이름"),t("td",null,[t("span",{class:"val"},"홍길동")]),t("th",null,"휴대전화"),t("td",null,[t("span",{class:"val"},"010-123-1233")])],-1),D={key:0},E=t("th",{class:"req",scope:"row"},"세입자 정보",-1),M={colspan:"3"},P=t("label",{for:"tenant_chk"},"세입자 있음",-1),z={key:1},F=t("th",{class:"req",scope:"row"},"세입자 정보",-1),G=t("label",{for:"tenant_chk"},"세입자 있음",-1),H=t("th",null,"세입자 휴대전화",-1),J=t("td",null,[t("input",{type:"text",placeholder:"휴대전화번호 입력",title:"휴대전화번호 입력하세요."})],-1),K=t("tr",null,[t("th",{scope:"row"},"안내"),t("td",{class:"bg_pink",colspan:"3"},[t("p",{class:"desc"},"※ 의뢰인 구분을 정확히 선택하신 후 세입자가 있을 경우 세입자 정보를 입력하십시오.")])],-1),Z={__name:"SaleNewReq2",setup(L){const _=["임대","매매"],h=["집주인 측","세입자"],s=r(!1);return(O,e)=>(n(),o("div",b,[c(w,{linktoPrev:"salenewReq1",linktoNext:"saleNewReq3",prvBtShow:!0,nextBtShow:!0,step2:!0,title:"매도/임대 중개의뢰",step2Txt:"의뢰정보 입력"}),t("div",k,[t("section",null,[x,t("div",f,[t("table",null,[y,m,t("tbody",null,[q,g,N,t("tr",null,[V,t("td",null,[t("div",B,[c(p,{options:_,optId:"options",type:"check"})])])])])])])]),S,t("section",null,[C,t("div",R,[t("table",null,[T,I,t("tbody",null,[t("tr",null,[U,t("td",$,[t("div",j,[c(p,{options:h,optId:"clients",type:"radio"})])])]),A,s.value?d("",!0):(n(),o("tr",D,[E,t("td",M,[a(t("input",{type:"checkbox",class:"checkbox",id:"tenant_chk","onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l)},null,512),[[i,s.value]]),P])])),s.value?(n(),o("tr",z,[F,t("td",null,[a(t("input",{type:"checkbox",class:"checkbox",id:"tenant_chk","onUpdate:modelValue":e[1]||(e[1]=l=>s.value=l),checked:""},null,512),[[i,s.value]]),G]),H,J])):d("",!0),K])])])])])]))}};export{Z as default};
