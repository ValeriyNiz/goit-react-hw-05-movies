"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{126:function(n,t,e){e(791);var c=e(731),o=e(184);t.Z=function(n){var t=n.movieList;return(0,o.jsx)("ul",{children:t.map((function(n){return(0,o.jsx)("li",{children:(0,o.jsx)(c.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})}},347:function(n,t,e){e.d(t,{IQ:function(){return u},TP:function(){return i},Jh:function(){return a},fd:function(){return f},z5:function(){return r}});var c="db3c8780132bea2931973682c726f027",o="https://api.themoviedb.org/3",r=function(){return fetch("".concat(o,"/trending/movie/week?api_key=").concat(c)).then((function(n){return n.json()}))},i=function(n){return fetch("".concat(o,"/movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.json()}))},u=function(n){return fetch("".concat(o,"/movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.json()}))},a=function(n){return fetch("".concat(o,"/movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.json()}))},f=function(n){return fetch("".concat(o,"/search/movie?api_key=").concat(c,"&query=").concat(n)).then((function(n){return n.json()}))}},936:function(n,t,e){e.r(t),e.d(t,{default:function(){return s}});var c=e(885),o=e(791),r=e(126),i=e(347),u="Home_home__CMw1J",a="Home_homeTitle__duF7K",f=e(184),s=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],s=t[1];return(0,o.useEffect)((function(){(0,i.z5)().then((function(n){s(n.results)}))}),[]),(0,f.jsxs)("div",{className:u,children:[(0,f.jsx)("hr",{}),(0,f.jsx)("h1",{className:a,children:"Trending today"}),(0,f.jsx)(r.Z,{movieList:e})]})}}}]);
//# sourceMappingURL=936.c43d9f80.chunk.js.map