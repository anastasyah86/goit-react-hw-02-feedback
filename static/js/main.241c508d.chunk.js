(this.webpackJsonp2_homework=this.webpackJsonp2_homework||[]).push([[0],{1:function(t,e,a){t.exports={list:"Statistic_list__3NlAv",buttonUl:"Statistic_buttonUl__3TsD_",miniheader:"Statistic_miniheader__TilRl",description:"Statistic_description__1PaxB",listContainer:"Statistic_listContainer__2HFDn",total:"Statistic_total__1iZYU",positive:"Statistic_positive__3e1C3 Statistic_total__1iZYU"}},16:function(t,e,a){"use strict";a.r(e);var s=a(2),i=a.n(s),c=a(5),n=a.n(c),r=(a(4),a(6)),l=a(7),o=a(8),d=a(10),j=a(9),b=a(0),u=function(t){var e=t.children,a=t.title;return Object(b.jsxs)("section",{className:"container",children:[Object(b.jsx)("h1",{children:a}),e]})},h=a(1),O=a.n(h),m=function(t){var e=t.reviews,a=t.onAddRate;return Object(b.jsx)("ul",{className:O.a.buttonUl,children:e.map((function(t){return Object(b.jsx)("li",{className:O.a.list,children:Object(b.jsx)("button",{name:t,className:O.a.button__bad,onClick:function(){return a(t)},children:t})},t)}))})},p=function(t){var e=t.good,a=t.neutral,s=t.bad,i=t.total,c=t.positivePercentage;return Object(b.jsxs)("div",{className:O.a.listContainer,children:[Object(b.jsx)("h2",{className:O.a.miniheader,children:"Statistics"}),Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{className:O.a.statisticList,children:Object(b.jsxs)("p",{className:O.a.description,children:["Good: ",e]})}),Object(b.jsx)("li",{className:O.a.statisticList,children:Object(b.jsxs)("p",{className:O.a.description,children:["Neutral: ",a]})}),Object(b.jsx)("li",{className:O.a.statisticList,children:Object(b.jsxs)("p",{className:O.a.description,children:["Bad: ",s]})}),Object(b.jsx)("li",{className:O.a.total,children:Object(b.jsxs)("p",{className:O.a.description,children:["Total: ",i]})}),Object(b.jsx)("li",{className:O.a.statisticList,children:Object(b.jsxs)("p",{className:O.a.positive,children:["Positive feedback: ",c,"%"]})})]})]})},_=function(t){var e=t.message;return Object(b.jsxs)("p",{children:[" ",e]})},v=function(t){Object(d.a)(a,t);var e=Object(j.a)(a);function a(){var t;Object(l.a)(this,a);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(r.a)({},e,t[e]+1)}))},t.calcTotalFeedback=function(){return Object.values(t.state).reduce((function(t,e){return t+e}),0)},t.calcpositivePercentage=function(){return Math.round(100/t.calcTotalFeedback()*(t.state.good+t.state.neutral))},t}return Object(o.a)(a,[{key:"render",value:function(){console.log(this.calcTotalFeedback());var t=Object.keys(this.state),e=this.calcTotalFeedback(),a=this.calcpositivePercentage(),s=Object.values(this.state);return Object(b.jsxs)(u,{title:"Please, give a feedback for us",children:[Object(b.jsx)(m,{reviews:t,onAddRate:this.onLeaveFeedback}),s.some((function(t){return t>0}))?Object(b.jsx)(p,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:e,positivePercentage:a}):Object(b.jsx)(_,{message:"No feedback given"})]})}}]),a}(s.Component);n.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root"))},4:function(t,e,a){}},[[16,1,2]]]);
//# sourceMappingURL=main.241c508d.chunk.js.map