"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[881],{126:function(n,t,e){e(791);var c=e(731),r=e(184);t.Z=function(n){var t=n.movieList;return(0,r.jsx)("ul",{children:t.map((function(n){return(0,r.jsx)("li",{children:(0,r.jsx)(c.rU,{to:"/movies/".concat(n.id),children:n.title})},n.id)}))})}},347:function(n,t,e){e.d(t,{IQ:function(){return u},TP:function(){return i},Jh:function(){return a},fd:function(){return s},z5:function(){return o}});var c="db3c8780132bea2931973682c726f027",r="https://api.themoviedb.org/3",o=function(){return fetch("".concat(r,"/trending/movie/week?api_key=").concat(c)).then((function(n){return n.json()}))},i=function(n){return fetch("".concat(r,"/movie/").concat(n,"?api_key=").concat(c)).then((function(n){return n.json()}))},u=function(n){return fetch("".concat(r,"/movie/").concat(n,"/credits?api_key=").concat(c)).then((function(n){return n.json()}))},a=function(n){return fetch("".concat(r,"/movie/").concat(n,"/reviews?api_key=").concat(c)).then((function(n){return n.json()}))},s=function(n){return fetch("".concat(r,"/search/movie?api_key=").concat(c,"&query=").concat(n)).then((function(n){return n.json()}))}},881:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var c=e(885),r=e(791),o=e(347),i=e(126),u=e(731),a="Movies_moviesForm__Yo2Oo",s=e(184),f=function(){var n=(0,r.useState)(null),t=(0,c.Z)(n,2),e=t[0],f=t[1],h=(0,u.lr)(),l=(0,c.Z)(h,2),m=l[0],v=l[1];(0,r.useEffect)((function(){var n=m.get("query");n&&(0,o.fd)(n).then((function(n){f(n.results)}))}),[m]);return(0,s.jsxs)("div",{className:a,children:[(0,s.jsxs)("form",{onSubmit:function(n){n.preventDefault(),v({query:n.target.elements.search.value}),n.target.elements.search.value=""},children:[(0,s.jsx)("input",{name:"search",type:"text"}),(0,s.jsx)("button",{children:"Search"})]}),e?(0,s.jsx)(i.Z,{movieList:e}):(0,s.jsx)("p",{children:"No movies"})]})}}}]);
//# sourceMappingURL=881.d66f620e.chunk.js.map