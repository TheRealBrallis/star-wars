(this["webpackJsonpstar-wars-app"]=this["webpackJsonpstar-wars-app"]||[]).push([[0],{12:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(6),s=c.n(a),i=(c(12),c(4)),l=c.n(i),j=c(7),o=c(2),d=(c(5),c(0));var u=function(e){var t=e.character,c=Object(n.useState)(!1),r=Object(o.a)(c,2),a=r[0],s=r[1];return Object(d.jsx)("div",{id:"container",children:Object(d.jsx)("div",{children:Object(d.jsxs)("li",{className:"char-con ".concat(a?"glow":""),onClick:function(){return s(!a)},children:[Object(d.jsx)("p",{children:t.name}),a&&Object(d.jsxs)("div",{className:"char-info",children:[Object(d.jsxs)("p",{children:["Gender: ",t.gender]}),Object(d.jsxs)("p",{children:["Hair color: ",t.hair_color]}),Object(d.jsxs)("p",{children:["Eye color: ",t.eye_color]}),Object(d.jsxs)("p",{children:["Birth year: ",t.birth_year]})]})]})})})};var b=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(""),s=Object(o.a)(a,2),i=s[0],b=s[1],p=Object(n.useState)(""),h=Object(o.a)(p,2),O=h[0],x=h[1],v=Object(n.useState)(!1),f=Object(o.a)(v,2),g=f[0],m=f[1],w=Object(n.useState)(""),S=Object(o.a)(w,2),k=S[0],N=S[1],y=i.length>0?"https://swapi.dev/api/people/?search=".concat(i):"https://swapi.dev/api/people/";Object(n.useEffect)((function(){C(y)}),[y]);var C=function(){var e=Object(j.a)(l.a.mark((function e(t){var c,n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=setTimeout((function(){m(!0)}),900),e.prev=1,console.time("request time"),e.next=5,fetch(t);case 5:return n=e.sent,e.next=8,n.json();case 8:a=e.sent,r(a.results),clearTimeout(c),m(!1),x(a.next),N(a.previous),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsxs)("div",{className:"star-background",children:[Object(d.jsx)("div",{id:"stars"}),Object(d.jsx)("div",{id:"stars2"}),Object(d.jsx)("div",{id:"stars3"}),Object(d.jsxs)("div",{id:"wrapper",children:[Object(d.jsx)("h1",{children:"Star wars"}),Object(d.jsx)("input",{className:"input-glow",type:"text",placeholder:"Search...",onChange:function(e){b(e.target.value)},value:i}),Object(d.jsx)("div",{className:"people-con",children:g?Object(d.jsx)("div",{id:"loading-bar",children:Object(d.jsx)("p",{children:"Loading..."})}):Object(d.jsx)("ul",{children:c.map((function(e,t){return Object(d.jsx)(u,{character:e},t)}))})}),Object(d.jsxs)("div",{id:"pagination",children:[Object(d.jsx)("button",{id:"prev",className:null===k?"disabled":"active",onClick:function(){return C(k)},disabled:null===k,children:"prev"}),Object(d.jsx)("button",{id:"next",className:null===O?"disabled":"active",onClick:function(){return C(O)},disabled:null===O,children:"next"})]})]})]})};var p=function(){return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)(b,{})})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),h()},5:function(e,t,c){}},[[15,1,2]]]);
//# sourceMappingURL=main.f113d58f.chunk.js.map