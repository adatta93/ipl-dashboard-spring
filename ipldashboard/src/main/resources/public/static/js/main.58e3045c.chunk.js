(this["webpackJsonpipl-dashboard-ui"]=this["webpackJsonpipl-dashboard-ui"]||[]).push([[0],{28:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(20),r=a.n(s),i=(a(28),a(9)),l=a.n(i),j=a(11),o=a(3),m=(a(30),a(5)),h=a(2),b=(a(31),a(0)),u=function(e){var t=e.teamName,a=e.match,c=t===a.firstInnTeam?a.secondInnTeam:a.firstInnTeam,n=t===a.matchWinner;return Object(b.jsxs)("div",{className:n?"LastMatch won-card":"LastMatch lost-card",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("small",{className:"vs",children:"vs"}),Object(b.jsx)("h1",{children:Object(b.jsx)(m.b,{to:"/teams/".concat(c),children:c})}),Object(b.jsx)("h4",{className:"match-date",children:a.date}),Object(b.jsxs)("h5",{className:"match-venue",children:["at ",a.venue]}),Object(b.jsxs)("h4",{className:"match-result",children:[a.matchWinner," won by ",a.resultMargin," ",a.result]})]}),Object(b.jsxs)("div",{className:"other-detail",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"First Innings"}),Object(b.jsx)("p",{children:a.firstInnTeam}),a.tossWinner===a.firstInnTeam&&Object(b.jsxs)("div",{className:"toss-result",children:[Object(b.jsx)("img",{src:"/coin.png",alt:"toss"}),"field"===a.tossDecision?Object(b.jsx)("img",{src:"/ball.png",alt:"field"}):Object(b.jsx)("img",{src:"/bat.png",alt:"bat"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Second Innings"}),Object(b.jsx)("p",{children:a.secondInnTeam}),a.tossWinner===a.secondInnTeam&&Object(b.jsxs)("div",{className:"toss-result",children:[Object(b.jsx)("img",{src:"/coin.png",alt:"toss"}),"field"===a.tossDecision?Object(b.jsx)("img",{src:"/ball.png",alt:"field"}):Object(b.jsx)("img",{src:"/bat.png",alt:"bat"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Player of the Match"}),Object(b.jsx)("p",{children:a.playerOfMatch})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Umpires"}),Object(b.jsxs)("p",{children:[a.umpire1,", ",a.umpire2]})]})]})]})},d=(a(38),function(e){var t=e.teamName,a=e.match,c=t===a.firstInnTeam?a.secondInnTeam:a.firstInnTeam,n=t===a.matchWinner;return Object(b.jsxs)("div",{className:n?"OtherMatch won-card":"OtherMatch lost-card",children:[Object(b.jsx)("small",{className:"vs",children:"vs"}),Object(b.jsx)("h2",{children:Object(b.jsx)(m.b,{to:"/teams/".concat(c),children:c})}),Object(b.jsxs)("h4",{className:"match-result",children:[a.matchWinner," won by ",a.resultMargin," ",a.result]})]})}),O=(a(39),function(e){var t=e.teamName;return Object(b.jsxs)("div",{className:"team-banner",children:[Object(b.jsx)("div",{className:"team-logo",children:Object(b.jsx)("img",{src:"/team-logo/".concat(t,".png"),alt:t})}),Object(b.jsx)("h1",{className:"team-name",children:t})]})}),x=(a(40),function(){var e=Object(c.useContext)(y),t=Object(o.a)(e,2),a=t[0];t[1];return Object(b.jsx)("div",{className:"team-list",children:a&&a.length>0&&a.map((function(e){return Object(b.jsx)(m.b,{to:"/teams/".concat(e.teamName),children:Object(b.jsx)("img",{src:"/team-logo/".concat(e.teamName,".png"),alt:e.teamName})},e.id)}))})}),f=a(23),v=function(e){var t=e.team,a=Object(c.useState)(0),n=Object(o.a)(a,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){r(t.totalMatches-t.totalWins)}),[t]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{style:{marginBottom:"10px"},children:["Total - ",t.totalMatches," | Wins - ",t.totalWins," | Losses -"," ",s]}),Object(b.jsx)("div",{style:{height:"180px"},children:Object(b.jsx)(f.PieChart,{data:[{title:"Losses "+s,value:s,color:"#9a3145"},{title:"Wins "+t.totalWins,value:t.totalWins,color:"#1c7043"}]})})]})},g=(a(41),function(){var e=Object(c.useState)({}),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(h.g)().teamName;return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t,a,c,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team/".concat(s));case 2:return t=e.sent,e.next=5,t.json();case 5:if(a=e.sent,console.log(a),c=null,r=null,"Delhi Capitals"!==s){e.next=15;break}return e.next=12,fetch("/team/Delhi Daredevils");case 12:c=e.sent,e.next=25;break;case 15:if("Sunrisers Hyderabad"!==s){e.next=21;break}return e.next=18,fetch("/team/Deccan Chargers");case 18:c=e.sent,e.next=25;break;case 21:if("Punjab Kings"!==s){e.next=25;break}return e.next=24,fetch("/team/Kings XI Punjab");case 24:c=e.sent;case 25:if(!c){e.next=31;break}return e.next=28,c.json();case 28:r=e.sent,a.totalMatches+=r.totalMatches,a.totalWins+=r.totalWins;case 31:n(a);case 32:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[s]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{}),Object(b.jsx)("div",{className:"TeamPage",children:a&&a.allMatches&&a.allMatches.length>0?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"team-name-section",children:Object(b.jsx)(O,{teamName:a.teamName})}),Object(b.jsx)("div",{className:"win-loss-section",children:Object(b.jsx)(v,{team:a})}),Object(b.jsxs)("div",{className:"last-match-section",children:[Object(b.jsx)("h3",{style:{marginBottom:"10px"},children:"Last Match"}),Object(b.jsx)(u,{teamName:a.teamName,match:a.allMatches[0]})]}),a.allMatches.slice(1).map((function(e){return Object(b.jsx)(d,{teamName:a.teamName,match:e},e.id)})),Object(b.jsx)(m.b,{className:"more-link",to:"/teams/".concat(s,"/matches/").concat("2021"),children:"See More"})]}):Object(b.jsx)("h1",{children:"Team not found!!"})})]})}),N=(a(42),function(e){var t=e.teamName,a=e.selectedYear,c=[],n="2008",s="2021";console.log("2008,2021");for(var r=s;r>=n;r--)c.push(r);return console.log(c),Object(b.jsx)("div",{className:"YearSelector",children:Object(b.jsx)("ol",{children:c.map((function(e){return Object(b.jsx)("li",{children:Object(b.jsx)(m.b,{to:"/teams/".concat(t,"/matches/").concat(e),className:a===e.toString()?"active":"",children:e})},e)}))})})}),p=(a(43),function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)(0),r=Object(o.a)(s,2),i=r[0],m=r[1],d=Object(c.useState)(0),O=Object(o.a)(d,2),f=O[0],v=O[1],g=Object(h.g)(),p=g.teamName,M=g.year,w=Object(c.useState)(p),C=Object(o.a)(w,2),W=C[0],y=C[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t,a,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p,"Delhi Capitals"===p&&M<2019?t="Delhi Daredevils":"Sunrisers Hyderabad"===p&&M<2013?t="Deccan Chargers":"Punjab Kings"===p&&M<2021&&(t="Kings XI Punjab"),y(t),e.next=5,fetch("/team/".concat(t,"/matches?year=").concat(M));case 5:return a=e.sent,e.next=8,a.json();case 8:c=e.sent,console.log(c),n(c),m(0),v(0),c.forEach((function(e){t===e.matchWinner?m((function(e){return e+1})):v((function(e){return e+1}))}));case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[p,M]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(x,{}),Object(b.jsxs)("div",{className:"MatchPage",children:[Object(b.jsxs)("div",{className:"year-selector",children:[Object(b.jsx)("h3",{className:"choose-year",children:"Choose year: "}),Object(b.jsx)(N,{teamName:p,selectedYear:M})]}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{className:"match-page-header",children:[p," ",Object(b.jsx)("small",{children:"matches in"})," ",M]}),Object(b.jsxs)("div",{className:"win-loss-counter",children:[Object(b.jsxs)("div",{className:"total-count",children:["Total - ",a&&a.length]}),Object(b.jsxs)("div",{className:"win-count",children:["Win - ",i]}),Object(b.jsxs)("div",{className:"loss-count",children:["Loss - ",f]})]}),a&&a.length>0?a.map((function(e){return Object(b.jsx)(u,{teamName:W,match:e},e.id)})):Object(b.jsx)("h1",{children:"No match found"})]})]})]})}),M=(a(44),function(e){var t=e.teamName;return Object(b.jsx)(m.b,{to:"/teams/".concat(t),children:Object(b.jsxs)("div",{className:"Team",children:[Object(b.jsx)("img",{src:"/logos/".concat(t,"-Logo.png"),alt:t,className:"Team-Logo"}),Object(b.jsx)("h2",{className:"Team-Name",children:t})]})})}),w=(a(45),function(){var e=Object(c.useContext)(y),t=Object(o.a)(e,2),a=t[0];t[1];return Object(b.jsx)("div",{className:"HomePage",children:Object(b.jsx)("div",{className:"team-grid",children:a&&a.length>0&&a.map((function(e){return Object(b.jsx)(M,{teamName:e.teamName},e.id)}))})})}),C=a(18),W=(a(46),function(){var e=Object(c.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],s=Object(c.useContext)(y),r=Object(o.a)(s,2),i=r[0],l=(r[1],Object(c.useState)([])),j=Object(o.a)(l,2),m=j[0],u=j[1],d=Object(h.f)(),O=function(e){var t="";return e.split(" ").forEach((function(e){return t+=e.charAt(0)})),"Sunrisers Hyderabad"===e&&(t="SRH"),t};return Object(b.jsxs)("div",{className:"search-bar-container",children:[Object(b.jsxs)("div",{className:"search-bar "+(m&&m.length>0?"result-open":""),children:[Object(b.jsx)("svg",{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(b.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),Object(b.jsx)("input",{value:a,onChange:function(e){var t=e.target.value;n(t),u([]),t&&t.length>1&&i.forEach((function(e){(e.teamName.toLowerCase().includes(t.toLowerCase())||O(e.teamName).toLowerCase()===t.toLowerCase())&&u((function(t){return t.includes(e.teamName)?t:[].concat(Object(C.a)(t),[e.teamName])}))}))},placeholder:"Search Team.."})]}),m&&m.length>0&&Object(b.jsx)("ul",{className:"search-result",children:m.map((function(e){return Object(b.jsx)("li",{onClick:function(){return function(e){n(""),u([]),d.push("/teams/".concat(e))}(e)},children:e},e)}))})]})}),y=Object(c.createContext)();var S=function(){var e=Object(c.useState)([]),t=Object(o.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(j.a)(l.a.mark((function e(){var t,a,c,s,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/team");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,c=a.find((function(e){return"Delhi Daredevils"===e.teamName})),s=a.find((function(e){return"Deccan Chargers"===e.teamName})),r=a.find((function(e){return"Kings XI Punjab"===e.teamName})),a.forEach((function(e){"Delhi Capitals"===e.teamName&&(e.totalMatches+=c.totalMatches,e.totalWins+=c.totalWins),"Sunrisers Hyderabad"===e.teamName&&(e.totalMatches+=s.totalMatches,e.totalWins+=s.totalWins),"Punjab Kings"===e.teamName&&(e.totalMatches+=r.totalMatches,e.totalWins+=r.totalWins)})),a=a.filter((function(e){return"Delhi Daredevils"!==e.teamName&&"Deccan Chargers"!==e.teamName&&"Kings XI Punjab"!==e.teamName})),console.log(a),n(a);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(y.Provider,{value:[a,n],children:Object(b.jsxs)(m.a,{children:[Object(b.jsxs)("div",{className:"header-section",children:[Object(b.jsx)(m.b,{to:"/",children:Object(b.jsx)("h1",{className:"app-name",children:"IPL Dashboard"})}),Object(b.jsx)(W,{})]}),Object(b.jsxs)(h.c,{children:[Object(b.jsx)(h.a,{exact:!0,path:"/teams/:teamName",children:Object(b.jsx)(g,{})}),Object(b.jsx)(h.a,{exact:!0,path:"/teams/:teamName/matches/:year",children:Object(b.jsx)(p,{})}),Object(b.jsx)(h.a,{exact:!0,path:"/",children:Object(b.jsx)(w,{})})]})]})})})},T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,48)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(S,{})}),document.getElementById("root")),T()}},[[47,1,2]]]);
//# sourceMappingURL=main.58e3045c.chunk.js.map