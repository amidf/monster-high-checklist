(this["webpackJsonpmonster-high-checklist"]=this["webpackJsonpmonster-high-checklist"]||[]).push([[0],{21:function(n,e,i){},25:function(n,e,i){"use strict";i.r(e);var t=i(1),a=i(0),c=i.n(a),s=i(11),l=i.n(s),r=(i(21),i(15)),o=i.p+"static/media/logo.d3042106.jpg",d=i(13),u=i.p+"static/media/check-icon.7f3217b0.jpg",p=i(2),m=i(3);function g(){var n=Object(p.a)(["\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border: 2px solid #000;\n\n  img {\n    width: 48px;\n  }\n"]);return g=function(){return n},n}function b(){var n=Object(p.a)(["\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin: 16px;\n  margin-bottom: 64px;\n\n  .icon-container {\n    height: 400px;\n\n    img {\n      max-height: 400px;\n      max-width: 100%;\n    }\n  }\n\n  p {\n    text-align: center;\n    font-size: 28px;\n  }\n\n  @media (max-width: 767px) {\n    .icon-container {\n      height: auto;\n    }\n\n    width: 100%;\n    margin: 0;\n    margin-bottom: 64px;\n  }\n"]);return b=function(){return n},n}var j=m.b.div(b()),f=m.b.div(g()),x=function(n){n.id,n.issueDate;var e=n.name,i=n.icon,a=n.isCollected;return Object(t.jsx)(d.a,{triggerOnce:!0,children:Object(t.jsxs)(j,{children:[Object(t.jsx)("div",{className:"icon-container",children:Object(t.jsx)("img",{src:i,alt:e})}),Object(t.jsx)("p",{children:e}),Object(t.jsx)(f,{children:a&&Object(t.jsx)("img",{src:u,alt:"\u0427\u0435\u0440\u0435\u043f\u043e\u043a"})})]})})},h=i(14);function O(){var n=Object(p.a)(["\n  width: 100%;\n  height: 48px;\n  border-radius: 6px;\n  border: 1px solid #e60280;\n  display: flex;\n  align-items: center;\n\n  .line {\n    width: ","%;\n    height: 48px;\n    border-radius: 6px;\n    background-color: #e60280;\n    color: #fff;\n    font-size: 16px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]);return O=function(){return n},n}function v(){var n=Object(p.a)(["\n  font-size: 24px;\n\n  padding: 16px 32px;\n\n  position: relative;\n  background-color: #fff;\n  top: 0;\n  left: 0;\n  width: 100%;\n\n  @media (max-width: 767px) {\n    padding: 16px;\n  }\n"]);return v=function(){return n},n}var w=m.b.div(v()),y=m.b.div(O(),(function(n){return n.progress})),C=function(n){var e=n.dolls,i=e.filter((function(n){return n.isCollected})).length,a=c.a.useState(!1),s=Object(h.a)(a,2),l=s[0],r=s[1],o=c.a.useRef(null);return c.a.useEffect((function(){var n=function(){};return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),[r]),Object(t.jsxs)(w,{ref:o,sticky:l?1:0,children:[Object(t.jsxs)("p",{children:["\u0421\u043e\u0431\u0440\u0430\u043d\u043e \u043a\u0443\u043a\u043b: ",i," \u0438\u0437 ",e.length]}),Object(t.jsx)("p",{children:"\u041f\u0440\u043e\u0433\u0440\u0435\u0441\u0441"}),Object(t.jsx)(y,{progress:i/e.length*100,children:Object(t.jsx)("div",{className:"line",children:Object(t.jsxs)("span",{children:[i,"/",e.length]})})})]})};function D(){var n=Object(p.a)(["\n  padding-top: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    max-width: 500px;\n  }\n\n  @media (max-width: 767px) {\n    img {\n      max-width: 100%;\n    }\n  }\n"]);return D=function(){return n},n}function k(){var n=Object(p.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n\n  padding: 64px 0;\n\n  @media (max-width: 767px) {\n    flex-direction: column;\n  }\n"]);return k=function(){return n},n}function z(){var n=Object(p.a)(["\n  max-width: 1440px;\n  width: 100%;\n  height: 100%;\n  padding: 0 16px;\n  margin: 64px auto;\n  background-color: #fff;\n  border-radius: 16px;\n  position: relative;\n"]);return z=function(){return n},n}var E=m.b.div(z()),F=m.b.div(k()),L=m.b.div(D()),M=function(n){var e=n.dolls;return Object(t.jsxs)(E,{children:[Object(t.jsx)(L,{children:Object(t.jsx)("img",{src:o,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Monster High"})}),Object(t.jsx)(C,{dolls:e}),Object(t.jsx)(F,{children:e.map((function(n){return Object(t.jsx)(x,Object(r.a)({},n),n.id)}))})]})},S=[{id:"abbey",name:"\u042d\u0431\u0431\u0438 \u0411\u043e\u043c\u0438\u043d\u0435\u0439\u0431\u043b",issueDate:null,icon:i.p+"static/media/abbey.3ee2ab92.jpg",isCollected:!0},{id:"clawdeen",name:"\u041a\u043b\u043e\u0434\u0438\u043d \u0412\u0443\u043b\u044c\u0444",issueDate:null,icon:i.p+"static/media/clawdeen.649de306.jpg",isCollected:!0},{id:"cleo",name:"\u041a\u043b\u0435\u043e \u0414\u0435 \u041d\u0438\u043b",issueDate:null,icon:i.p+"static/media/cleo.bc7b6852.jpg",isCollected:!1},{id:"draculaura",name:"\u0414\u0440\u0430\u043a\u0443\u043b\u0430\u0443\u0440\u0430",issueDate:null,icon:i.p+"static/media/draculaura.b6381be1.jpg",isCollected:!1},{id:"franky",name:"\u0424\u0440\u0435\u043d\u043a\u0438 \u0428\u0442\u0435\u0439\u043d",issueDate:null,icon:i.p+"static/media/franky.672a50ed.jpg",isCollected:!0},{id:"ghoulia",name:"\u0413\u043e\u0443\u043b\u0438\u044f \u0419\u0435\u043b\u043f\u0441",issueDate:null,icon:i.p+"static/media/ghoulia.49b2b915.jpg",isCollected:!1},{id:"guliopa",name:"\u0413\u0443\u043b\u043b\u0438\u043e\u043f\u0430 \u0414\u0436\u0435\u043b\u043b\u0438\u043d\u0433\u0442\u043e\u043d",issueDate:null,icon:i.p+"static/media/guliopa.0ea10776.jpg",isCollected:!1},{id:"honey",name:"\u0425\u0430\u043d\u0438 \u0421\u0432\u043e\u043c\u043f",issueDate:null,icon:i.p+"static/media/honey.1894a03a.jpg",isCollected:!1},{id:"lagoona",name:"\u041b\u0430\u0433\u0443\u043d\u0430 \u0411\u043b\u044e",issueDate:null,icon:i.p+"static/media/lagoona.9fbcda64.jpg",isCollected:!1},{id:"mewloadia-pursefona",name:"\u041f\u0443\u0440\u0441\u0435\u0444\u043e\u043d\u0430 \u0438 \u041c\u044f\u0443\u043b\u043e\u0434\u0438\u044f",issueDate:null,icon:i.p+"static/media/mewloadia-pursefona.8bcccf42.jpg",isCollected:!1},{id:"mewloadia-pursefona-zombie-shake",name:"\u041f\u0443\u0440\u0441\u0435\u0444\u043e\u043d\u0430 \u0438 \u041c\u044f\u0443\u043b\u043e\u0434\u0438\u044f. \u0417\u043e\u043c\u0431\u0438 \u0428\u0435\u0439\u043a",issueDate:null,icon:i.p+"static/media/pursefona-mewloadia-zombie-shake.1defcdfa.jpg",isCollected:!1},{id:"three-cats",name:"\u0422\u0440\u0438 \u043a\u043e\u0448\u043a\u0438",issueDate:null,icon:i.p+"static/media/three-cats.4754966e.jpg",isCollected:!1},{id:"nefera",name:"\u041d\u0435\u0444\u0435\u0440\u0430 \u0414\u0435 \u041d\u0438\u043b",issueDate:null,icon:i.p+"static/media/nefera.b6b34096.jpg",isCollected:!1},{id:"rochelle",name:"\u0420\u043e\u0448\u0435\u043b\u044c \u0413\u043e\u0439\u043b",issueDate:null,icon:i.p+"static/media/rochelle.1f3c74cb.jpg",isCollected:!1},{id:"rebekka-steam",name:"\u0420\u0435\u0431\u0435\u043a\u043a\u0430 \u0421\u0442\u0438\u043c",issueDate:null,icon:i.p+"static/media/rebekka-steam.eefd60c0.jpg",isCollected:!1},{id:"spectra",name:"\u0421\u043f\u0435\u043a\u0442\u0440\u0430 \u0412\u043e\u043d\u0434\u0435\u0440\u0433\u0435\u0439\u0441\u0442",issueDate:null,icon:i.p+"static/media/spectra.26753d6b.jpg",isCollected:!0},{id:"toralei",name:"\u0422\u043e\u0440\u0430\u043b\u0435\u0439 \u0421\u0442\u0440\u0430\u0439\u043f",issueDate:null,icon:i.p+"static/media/toralei.4092055d.jpg",isCollected:!1},{id:"venus",name:"\u0412\u0435\u043d\u0435\u0440\u0430 \u041c\u0430\u043a\u0444\u043b\u0430\u0439\u0442\u0440\u0430\u043f",issueDate:null,icon:i.p+"static/media/venus.f46140e0.jpg",isCollected:!0},{id:"twyla",name:"\u0422\u0432\u0438\u043b\u0430",issueDate:null,icon:i.p+"static/media/twyla.00c42047.jpg",isCollected:!1},{id:"bw-franky",name:"\u0424\u0440\u0435\u043d\u043a\u0438 \u0428\u0442\u0435\u0439\u043d (\u0427\u0435\u0440\u043d\u043e-\u0411\u0435\u043b\u0430\u044f)",issueDate:null,icon:i.p+"static/media/bw-franky.9c004ac8.jpg",isCollected:!1}],B=i.p+"static/media/bg.7659e181.png";function H(){var n=Object(p.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  html,\n  body {\n    height: 100%;\n  }\n\n  body {\n    padding: 0 16px;\n    margin: 0;\n\n    font-family: 'Monster High', sans-serif;\n    font-size: 16px;\n\n    background-image: url(",");\n  }\n"]);return H=function(){return n},n}var I=Object(m.a)(H(),B),J=function(){return Object(t.jsxs)("main",{children:[Object(t.jsx)(I,{}),Object(t.jsx)(M,{dolls:S})]})},N=function(n){n&&n instanceof Function&&i.e(3).then(i.bind(null,26)).then((function(e){var i=e.getCLS,t=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;i(n),t(n),a(n),c(n),s(n)}))};l.a.render(Object(t.jsx)(c.a.StrictMode,{children:Object(t.jsx)(J,{})}),document.getElementById("root")),N()}},[[25,1,2]]]);
//# sourceMappingURL=main.d5fe26d8.chunk.js.map