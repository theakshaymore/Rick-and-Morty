(this["webpackJsonprick-and-morty"]=this["webpackJsonprick-and-morty"]||[]).push([[0],{21:function(c,e,t){},31:function(c,e,t){"use strict";t.r(e);var s=t(1),a=t.n(s),i=t(15),n=t.n(i),r=(t(21),t(9)),d=t(2),j=t(0);var l=function(){return Object(j.jsx)("div",{className:"Home",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"h1 ss",children:"Rick & Morty"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:"https://img.cinemablend.com/filter:scale/quill/d/f/0/7/1/6/df07166079c091cf391c706f6c804e874877ad6c.jpg?mw=600",className:"card-img-top",alt:"img"}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)(r.b,{to:"/characters",children:Object(j.jsx)("a",{className:"btn btn-dark",children:"Characters \ud83d\udc7d"})})})]})}),Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:"https://www.cnet.com/a/img/0qB6AJWpUFicLjBtQ_PSC6l07Kc=/1200x675/2020/05/11/8dcc1771-d726-482e-a036-5531490d079e/vat-of-acid-rick-and-morty.jpg",className:"card-img-top",alt:"img"}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)(r.b,{to:"/locations",children:Object(j.jsx)("a",{className:"btn btn-dark",children:"Locations \ud83d\udc7e"})})})]})}),Object(j.jsx)("div",{className:"col",children:Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:"https://www.cnet.com/a/img/PhTS16gzKMzlabYSGDUy2IVFnTA=/1200x630/2020/05/04/38f748b7-3d3a-4f97-a6d6-efd4346ad2d6/twitter-in-stream-wide-rick-morty-space-train-1.jpg",className:"card-img-top",alt:"img"}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)(r.b,{to:"/episodes",children:Object(j.jsx)("a",{className:"btn btn-dark",children:"Episodes \ud83e\udd16"})})})]})})]})]})})},b=t(8);var o=function(){var c=Object(s.useState)([]),e=Object(b.a)(c,2),t=e[0],a=e[1];return Object(s.useEffect)((function(){fetch("https://rickandmortyapi.com/api/character").then((function(c){return c.json()})).then((function(c){a(c.results)})).catch((function(c){console.log(c)}))}),[]),Object(j.jsx)("div",{className:"CharList",children:t.map((function(c){return Object(j.jsxs)("div",{className:"card carrd",children:[Object(j.jsx)("img",{src:c.image,className:"card-img-top",alt:"img"}),Object(j.jsx)("div",{className:"card-body",children:Object(j.jsx)("p",{className:"card-text h3 ",children:c.name})})]},c.id)}))})};var h=function(){var c=Object(s.useState)([]),e=Object(b.a)(c,2),t=e[0],a=e[1];return Object(s.useEffect)((function(){fetch("https://rickandmortyapi.com/api/location").then((function(c){return c.json()})).then((function(c){a(c.results)})).catch((function(c){console.log(c)}))}),[]),Object(j.jsx)("div",{className:"Location container",children:t.map((function(c){return Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("p",{className:"card-text",children:[Object(j.jsx)("b",{children:"NAME"}),": ",c.name]}),Object(j.jsxs)("p",{className:"card-text",children:[Object(j.jsx)("b",{children:"TYPE"}),": ",c.type]}),Object(j.jsxs)("p",{className:"card-text",children:[Object(j.jsx)("b",{children:"DIMENSION"}),": ",c.dimension]})]})},c.id)}))})};var m=function(){var c=Object(s.useState)([]),e=Object(b.a)(c,2),t=e[0],a=e[1];return Object(s.useEffect)((function(){fetch("https://rickandmortyapi.com/api/episode").then((function(c){return c.json()})).then((function(c){a(c.results)})).catch((function(c){console.log(c)}))}),[]),Object(j.jsx)("div",{className:"Episode",children:t.map((function(c){return Object(j.jsx)("div",{className:"card",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsxs)("p",{className:"card-text",children:[Object(j.jsx)("b",{children:"NAME"}),":",c.name]}),Object(j.jsxs)("p",{className:"card-text",children:[Object(j.jsx)("b",{children:"EPISODE"}),":",c.episode]}),Object(j.jsxs)("p",{className:"card-text",children:[Object(j.jsx)("b",{children:"AIR DATE"}),":",c.air_date]})]})},c.id)}))})};var O=function(){return Object(j.jsx)(r.a,{children:Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(l,{}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"options container",children:Object(j.jsxs)(d.c,{children:[Object(j.jsx)(d.a,{path:"/characters",children:Object(j.jsx)(o,{})}),Object(j.jsx)(d.a,{path:"/locations",children:Object(j.jsx)(h,{})}),Object(j.jsx)(d.a,{path:"/episodes",children:Object(j.jsx)(m,{})})]})})]})})};n.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.9d364820.chunk.js.map