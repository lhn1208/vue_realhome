import{_ as r}from"./TopArea-B3Dc9KWA.js";import{r as _,c as s,b as t,a as b,j as o,o as e}from"./index-D-OEAE_g.js";const p={class:"sub_content",id:"content"},v={class:"setting"},m={class:"table_style"},f={class:"table"},y=t("caption",null,"이름,이메일,휴대전화,비밀번호로 구성된 테이블",-1),k=t("colgroup",null,[t("col",{width:"14%"}),t("col")],-1),g=t("th",{scope:"row"},"이름",-1),x={class:"flex_both_ends"},w={key:0},E={key:1,type:"text",class:"set_ch"},C=t("th",{scope:"row"},"이메일",-1),N={class:"flex_both_ends"},q={key:0},P={key:1,type:"text",class:"set_ch"},B=t("th",{scope:"row"},"휴대전화",-1),V={class:"flex_both_ends"},j={key:0},S={key:1,type:"text",class:"set_ch"},$=t("th",{scope:"row"},"비밀번호",-1),z={class:"flex_both_ends"},A={key:0,type:"password",value:"12345",class:"member_pw",disabled:""},D={key:1,type:"text",class:"set_ch"},F=t("button",{class:"btn_leave"},"회원탈퇴",-1),L={__name:"Setting",setup(G){const n=_(!1),c=_(!1),l=_(!1),a=_(!1),i=()=>{n.value=!n.value},u=()=>{c.value=!c.value},d=()=>{l.value=!l.value},h=()=>{a.value=!a.value};return(H,I)=>(e(),s("div",p,[t("div",v,[b(r,{title:"개인정보 설정",titleClass:"f_blue",text1:"개인정보를 변경하실 수 있습니다."}),t("div",m,[t("table",f,[y,k,t("tbody",null,[t("tr",null,[g,t("td",null,[t("div",x,[n.value?o("",!0):(e(),s("span",w,"홍길동")),n.value?(e(),s("input",E)):o("",!0),t("button",{class:"btn_square basic btn",onClick:i},"변경")])])]),t("tr",null,[C,t("td",null,[t("div",N,[c.value?o("",!0):(e(),s("span",q,"test@naver.com")),c.value?(e(),s("input",P)):o("",!0),t("button",{class:"btn_square basic btn",onClick:u},"변경")])])]),t("tr",null,[B,t("td",null,[t("div",V,[l.value?o("",!0):(e(),s("span",j,"000-0000-0000")),l.value?(e(),s("input",S)):o("",!0),t("button",{class:"btn_square basic btn",onClick:d},"변경")])])]),t("tr",null,[$,t("td",null,[t("div",z,[a.value?o("",!0):(e(),s("input",A)),a.value?(e(),s("input",D)):o("",!0),t("button",{class:"btn_square basic btn",onClick:h},"변경")])])])])])]),F])]))}};export{L as default};
