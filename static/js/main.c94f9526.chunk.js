(this["webpackJsonppower-monitoring"]=this["webpackJsonppower-monitoring"]||[]).push([[0],{177:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(57),i=t.n(o),l=(t(72),t(3)),c=t(4),u=t(9),s=t.n(u),f=t(59),p=function(e){var n=Object(f.useMediaQuery)({query:"(min-device-width: 1224px)"});return e.children(n)};function d(){var e=Object(l.a)(["\n  margin: ",';\n\n  font-family: "Ubuntu";\n  color: ',";\n  ",";\n  text-align: ",";\n"]);return d=function(){return e},e}var b=c.a.span(d(),(function(e){return e.as?function(e){switch(e){case"h1":return"12px 0";case"h2":return"10px 0";case"h3":return"8px 0";case"h4":return"7px 0";case"h5":return"5px 0";case"h6":return"4px 0";case"span":case"small":default:return"0"}}(e.as):"0"}),(function(e){return e.color?e.color:"black"}),(function(e){return e.withoutSpacing?"\n    margin: 0;\n    padding: 0;\n  ":null}),(function(e){return e.align?e.align:"left"})),m={blue:"#0f9df6",navy:"#274374",green:"#45be93",darkGreen:"#288692",red:"#e45d50",orange:"#ff7f41",yellow:"#fbd04f",white:"#ffffff",gray:"#f4f4f4",darkGray:"#dbe2e9",black:"#323441"};function x(){var e=Object(l.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  padding: ",";\n\n  min-height: ",";\n  width: calc(100vw - 40px);\n\n  background-color: ",";\n  box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.1);\n  -webkit-box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.1);\n  -moz-box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.1);\n\n  z-index: 10;\n"]);return x=function(){return e},e}var g=c.a.div(x(),(function(e){return e.isDesktopOrLaptop?"8px 20px;":"16px 20px;"}),(function(e){return e.isDesktopOrLaptop?"50px;":"60px;"}),m.white),v=function(e){return r.createElement(p,null,(function(e){return r.createElement(g,{isDesktopOrLaptop:e},r.createElement(b,{color:m.navy,as:e?"h3":"h4",align:e?void 0:"center",withoutSpacing:!0},"Wisp Admin"))}))},h=t(6),y=t(179),E=t(180);function O(){var e=Object(l.a)(["\n  list-style: none;\n\n  margin: 0;\n  padding: 12px 16px;\n\n  background-color: ",";\n\n  font-size: 0.7rem;\n  color: ",";\n"]);return O=function(){return e},e}function w(){var e=Object(l.a)(["\n  list-style: none;\n  position: relative;\n\n  margin: 0;\n  padding: 12px 16px;\n\n  font-size: 0.9rem;\n  color: ",";\n\n  ","\n\n  &:hover {\n    background-color: ",";\n  }\n"]);return w=function(){return e},e}function j(){var e=Object(l.a)(["\n  margin: 0;\n  padding: 0;\n"]);return j=function(){return e},e}var k=c.a.ul(j()),R=c.a.li(w(),m.black,(function(e){return e.active?"\n      background-color: ".concat(m.darkGray,"\n      border-top-right-radius: 3px;\n      border-bottom-right-radius: 3px;\n\n      font-weight: bold;\n\n      &::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n\n        height: 100%;\n        width: 4px;\n\n        background-color: ").concat(m.navy,";\n      }\n    "):"\n      background-color: ".concat(m.gray,"\n    ")}),m.darkGray);c.a.li(O(),m.black,m.gray);function S(){var e=Object(l.a)(["\n  margin: 1rem 0;\n\n  height: 1px;\n  width: 100%;\n\n  background-color: ",";\n"]);return S=function(){return e},e}var D=c.a.div(S(),(function(e){return e.backgroundColor?e.backgroundColor:m.darkGray}));function C(){var e=Object(l.a)(["\n  flex: ",";\n  display: ",";\n  flex-direction: ",";\n  flex-wrap: ",";\n  justify-content: ",";\n  align-items: ",";\n"]);return C=function(){return e},e}var P=c.a.div(C(),(function(e){return e.flex?e.flex:void 0}),(function(e){return e.display?e.display:"flex"}),(function(e){return e.flexDirection?e.flexDirection:"row"}),(function(e){return e.flexWrap?e.flexWrap:"nowrap"}),(function(e){return e.flexJustifyContent?e.flexJustifyContent:"flex-start"}),(function(e){return e.flexAlignItems?e.flexAlignItems:"flex-start"}));function A(){var e=Object(l.a)(["\n  height: 50px;\n  width: 50px;\n\n  border-radius: 25px;\n"]);return A=function(){return e},e}function z(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n\n  margin-bottom: -8px;\n  padding-left: 12px;\n"]);return z=function(){return e},e}function I(){var e=Object(l.a)(["\n  display: flex;\n  flex-direction: row;\n\n  padding: 16px;\n"]);return I=function(){return e},e}var L=c.a.div(I()),G=c.a.div(z()),B=c.a.img(A()),W=function(e){var n=e.profile;return r.createElement(r.Fragment,null,r.createElement(L,null,r.createElement(B,{src:n&&n.avatar}),r.createElement(G,null,r.createElement(b,{as:"small"},"Hello, "),r.createElement(b,{as:"h4",style:{marginTop:2}},e.profile.username))),r.createElement(P,{style:{margin:"8px 0",padding:"0 16px"}},r.createElement(D,{style:{margin:0}})))};function H(){var e=Object(l.a)(["\n  height: 40px;\n  width: 40px;\n\n  background-color: ",";\n  border: 1px solid ",";\n  border-top-right-radius: 3px;\n\n  outline: none;\n"]);return H=function(){return e},e}function J(){var e=Object(l.a)(["\n  position: fixed;\n  bottom: 0;\n  left: 0;\n\n  display: flex;\n  justify-content: flex-end;\n\n  height: 40px;\n  width: inherit;\n\n  background-color: ",";\n  border-top-right-radius: 9px;\n"]);return J=function(){return e},e}function F(){var e=Object(l.a)(["\n  flex-direction: column;\n\n  height: calc(100vh - 105px);\n\n  overflow: auto;\n\n  visibility: ",";\n"]);return F=function(){return e},e}function T(){var e=Object(l.a)(["\n  position: relative;\n\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  margin-top: 61px;\n\n  width: ",";\n\n  background-color: ",";\n"]);return T=function(){return e},e}var U=c.a.div(T(),(function(e){return e.show?"250px":"40px"}),m.gray),Z=c.a.div(F(),(function(e){return e.show?"visible":"hidden"})),M=c.a.div(J(),m.navy),N=c.a.button(H(),m.white,m.white),V=function(){var e=r.useState(!0),n=Object(h.a)(e,2),t=n[0],a=n[1];return r.createElement(U,{show:t},r.createElement(Z,{show:t},r.createElement(k,null,r.createElement(W,{profile:{username:"Piyuw Piyuw",avatar:"https://api.adorable.io/avatars/285/abott@adorable.png"}}),r.createElement(R,null,"Dashboard"),r.createElement(R,{active:!0},"Sensor"),r.createElement(R,null,"User Log"),r.createElement(R,null,"User"),r.createElement(R,null,"Lorem"),r.createElement(R,null,"Ipsum"),r.createElement(R,null,"Dolor"),r.createElement(R,null,"Sit"),r.createElement(R,null,"Amet"),r.createElement(R,null,"Consectetur"),r.createElement(R,null,"Adipiscing"),r.createElement(R,null,"Elit"),r.createElement(R,null,"Lorem"),r.createElement(R,null,"Ipsum"),r.createElement(R,null,"Dolor"),r.createElement(R,null,"Sit"),r.createElement(R,null,"Amet"),r.createElement(R,null,"Consectetur"),r.createElement(R,null,"Adipiscing"),r.createElement(R,null,"Elit"),r.createElement(R,null,"Lorem"),r.createElement(R,null,"Ipsum"),r.createElement(R,null,"Dolor"),r.createElement(R,null,"Sit"),r.createElement(R,null,"Amet"),r.createElement(R,null,"Consectetur"),r.createElement(R,null,"Adipiscing"),r.createElement(R,null,"Elit"))),r.createElement(M,null,r.createElement(N,{onClick:function(){return a(!t)}},t?r.createElement(y.a,{size:"24",color:m.navy}):r.createElement(E.a,{size:"24",color:m.navy}))))},q=t(7);function K(){var e=Object(l.a)(["\n  margin: 8px;\n  padding: 16px 8px;\n\n  width: 100%;\n  width: -moz-available;\n  width: -webkit-fill-available;\n  width: fill-available;\n\n  background-color: ",";\n  border-radius: 4px;\n  box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.05);\n  -webkit-box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.05);\n  -moz-box-shadow: 0px 0px 10px 2px rgba(41, 63, 76, 0.05);\n"]);return K=function(){return e},e}var Q=Object(c.a)(P)(K(),m.white);function X(){var e=Object(l.a)(["\n  margin-top: 16px;\n\n  width: 100%;\n"]);return X=function(){return e},e}function Y(){var e=Object(l.a)(["\n  flex: 1;\n  display: flex;\n\n  padding: 16px;\n"]);return Y=function(){return e},e}var $=Object(c.a)(Q)(Y()),_=Object(c.a)(P)(X()),ee=function(e){var n=e.title,t=e.children;return r.createElement($,null,r.createElement(P,{flex:1,flexDirection:"column"},r.createElement(b,{as:"h3",style:{margin:0}},n),r.createElement(_,null,t)))};function ne(){var e=Object(l.a)(["\n  margin: 4px;\n\n  background-color: ",";\n  border-radius: ",";\n  border: ",";\n\n  font-size: 12px;\n  color: ",";\n\n  outline: none;\n  cursor: pointer;\n\n  ",";\n  ","\n\n  &:active {\n    background: ",";\n    opacity: 0.5;\n  }\n\n  &:disabled {\n    background: #6c8a9b;\n    border: 1.2px solid #6c8a9b;\n\n    color: #e6e6e4;\n  }\n"]);return ne=function(){return e},e}var te=function(e){switch(e){case"blue":return m.blue;case"navy":return m.navy;case"green":return m.green;case"dark-green":return m.darkGreen;case"red":return m.red;case"orange":return m.orange;case"yellow":return m.yellow;case"gray":return m.gray;case"black":default:return m.black}},re=c.a.button(ne(),(function(e){return e.ghost?"transparent":e.variant&&te(e.variant)}),(function(e){return e.rounded?"20px":"3px"}),(function(e){return e.variant&&function(e){switch(e){case"blue":return"1.2px solid ".concat(m.blue);case"navy":return"1.2px solid ".concat(m.navy);case"green":return"1.2px solid ".concat(m.green);case"dark-green":return"1.2px solid ".concat(m.darkGreen);case"red":return"1.2px solid ".concat(m.red);case"orange":return"1.2px solid ".concat(m.orange);case"yellow":return"1.2px solid ".concat(m.yellow);case"gray":return"1.2px solid ".concat(m.gray);case"black":default:return"1.2px solid ".concat(m.black)}}(e.variant)}),(function(e){return e.variant&&function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n)switch(e){case"blue":return m.blue;case"navy":return m.navy;case"green":return m.green;case"dark-green":return m.darkGreen;case"red":return m.red;case"orange":return m.orange;case"yellow":return m.yellow;case"gray":return m.gray;case"black":default:return m.black}else switch(e){case"yellow":case"gray":return m.black;case"blue":case"navy":case"green":case"dark-green":case"red":case"orange":case"black":default:return m.white}}(e.variant,e.ghost)}),(function(e){return e.size&&function(e){switch(e){case"small":return"padding: 4px 8px;";case"large":return"padding: 12px 28px;";case"medium":default:return"padding: 8px 16px;"}}(e.size)}),(function(e){return e.block?"width: 100%;":void 0}),(function(e){return e.disabled||e.ghost?void 0:e.variant&&te(e.variant)}));re.defaultProps={size:"medium"};var ae=re,oe=function(e){var n=Object(q.a)(e.firebase.database().ref("PIR1")),t=Object(h.a)(n,1)[0],a=Object(q.a)(e.firebase.database().ref("PIR2")),o=Object(h.a)(a,1)[0],i=Object(q.a)(e.firebase.database().ref("PIR3")),l=Object(h.a)(i,1)[0],c=Object(q.a)(e.firebase.database().ref("PIR4")),u=Object(h.a)(c,1)[0],s=Object(q.a)(e.firebase.database().ref("R1")),f=Object(h.a)(s,1)[0],d=Object(q.a)(e.firebase.database().ref("R2")),b=Object(h.a)(d,1)[0],m=Object(q.a)(e.firebase.database().ref("R3")),x=Object(h.a)(m,1)[0],g=Object(q.a)(e.firebase.database().ref("R4")),v=Object(h.a)(g,1)[0],y=Object(q.a)(e.firebase.database().ref("R5")),E=Object(h.a)(y,1)[0],O=Object(q.a)(e.firebase.database().ref("R6")),w=Object(h.a)(O,1)[0],j=Object(q.a)(e.firebase.database().ref("R7")),k=Object(h.a)(j,1)[0],R=[{pirState:t,dataRef:"PIR1",text:"Lamp 1"},{pirState:o,dataRef:"PIR2",text:"Lamp 2"},{pirState:l,dataRef:"PIR3",text:"Lamp 3"},{pirState:u,dataRef:"PIR4",text:"Lamp 4"}],S=[{relayState:f,dataRef:"R1",text:"Control 1"},{relayState:b,dataRef:"R2",text:"Control 2"},{relayState:x,dataRef:"R3",text:"Control 3"},{relayState:v,dataRef:"R4",text:"Control 4"},{relayState:E,dataRef:"R5",text:"Control 5"},{relayState:w,dataRef:"R6",text:"Control 6"},{relayState:k,dataRef:"R7",text:"Control 7"}];return r.createElement(p,null,(function(n){return r.createElement(P,{flex:1,flexDirection:n?"row":"column",flexAlignItems:!n&&"center",style:{margin:"0 -4px"}},r.createElement(ee,{title:"Indicator"},r.createElement(P,{flexWrap:"wrap",flexJustifyContent:!n&&"center",style:{margin:"0 -4px"}},R.map((function(e){return r.createElement(ae,{variant:e.pirState&&e.pirState.val()&&"1"===e.pirState.val().status?"green":"red",rounded:!0,key:e.dataRef},e.text)})))),r.createElement(ee,{title:"Control"},r.createElement(P,{flexWrap:"wrap",flexJustifyContent:!n&&"center",style:{margin:"0 -4px"}},S.map((function(n){return r.createElement(ae,{variant:n.relayState&&n.relayState.val()&&"ON"===n.relayState.val().status?"green":"red",size:"medium",onClick:function(){return function(n,t){var r=e.firebase.database().ref(n),a="OFF"===(t&&t.val()&&t.val().status)?"ON":"OFF";r.update({status:a})}(n.dataRef,n.relayState)},key:n.dataRef},n.text)})))))}))},ie=t(27),le=t(62),ce=t(40),ue=t(64),se=t.n(ue);function fe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function pe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?fe(t,!0).forEach((function(n){Object(ie.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):fe(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var de={labels:[],datasets:[{label:"Data",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:[]}]},be={responsive:!0,maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{ticks:{fontSize:12,maxRotation:0,minRotation:0}}],yAxes:[{ticks:{fontSize:12}}]}};function me(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function xe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?me(t,!0).forEach((function(n){Object(ie.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):me(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var ge=function(e){var n=r.useState(de),t=Object(h.a)(n,2),a=t[0],o=t[1];return r.useEffect((function(){o((function(n){return function(e,n){var t=n.labels,r=n.datasets[0],a=r.data,o=se()((new Date).getTime()).format("HH:mm:ss"),i=[].concat(Object(ce.a)(t),[o]),l=[].concat(Object(ce.a)(a),[e]);return{labels:i.length>5?i.slice(1,6):i,datasets:[pe({},r,{data:l.length>5?l.slice(1,6):l})]}}(e.streamData,n)}))}),[e.streamData]),r.createElement(le.a,{height:e.height,width:e.width,data:a,options:xe({},be,{},e.options)})},ve=function(e){var n=Object(q.a)(e.firebase.database().ref("aVolt")),t=Object(h.a)(n,1)[0],a=Object(q.a)(e.firebase.database().ref("aAmp")),o=Object(h.a)(a,1)[0],i=r.useState(),l=Object(h.a)(i,2),c=l[0],u=l[1];return r.useEffect((function(){var e=t&&t.val(),n=o&&o.val();u(e*n)}),[t,o]),r.createElement(p,null,(function(e){return r.createElement(P,{flex:1,flexDirection:e?"row":"column",flexAlignItems:!e&&"center",style:{margin:"0 -4px"}},r.createElement(ee,{title:"Realtime Graph"},r.createElement(ge,{streamData:t&&t.val(),height:250,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,min:0,max:230,stepSize:10}}]}}})),r.createElement(ee,{title:"Realtime Graph"},r.createElement(ge,{streamData:o&&o.val(),height:250,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,min:0,max:1.5,stepSize:.15}}]}}})),r.createElement(ee,{title:"Realtime Graph"},r.createElement(ge,{streamData:c,height:250,options:{scales:{yAxes:[{ticks:{beginAtZero:!0,min:0,max:345,stepSize:15}}]}}})))}))};function he(){var e=Object(l.a)(["\n  flex-direction: column;\n\n  padding: 16px;\n\n  height: ",";\n\n  overflow: auto;\n"]);return he=function(){return e},e}function ye(){var e=Object(l.a)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n\n  margin-top: ",";\n"]);return ye=function(){return e},e}function Ee(){var e=Object(l.a)(["\n  flex-grow: 1;\n  display: flex;\n  flex-direction: row;\n\n  background-color: ",";\n  border: 4px solid ",";\n"]);return Ee=function(){return e},e}function Oe(){var e=Object(l.a)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n\n  min-height: 100%;\n  max-width: 100vw;\n"]);return Oe=function(){return e},e}s.a.initializeApp({apiKey:"AIzaSyBrcxJwGpbVCW4UvMXBTYTCd9AAbTFo7k8",databaseURL:"https://monitoringdaya-3d2e9.firebaseio.com/",projectId:"monitoringdaya-3d2e9"});var we=c.a.div(Oe()),je=c.a.div(Ee(),m.gray,m.navy),ke=c.a.div(ye(),(function(e){return e.isDesktopOrLaptop?"56px":"81px"})),Re=c.a.div(he(),(function(e){return e.isDesktopOrLaptop?"calc(100vh - 96px);":"calc(100vh - 120px);"})),Se=function(){return a.a.createElement(p,null,(function(e){return a.a.createElement(we,null,a.a.createElement(v,{firebase:s.a}),a.a.createElement(je,null,e&&a.a.createElement(V,null),a.a.createElement(ke,{isDesktopOrLaptop:e},a.a.createElement(Re,{isDesktopOrLaptop:e},a.a.createElement(oe,{firebase:s.a}),a.a.createElement(D,null),a.a.createElement(ve,{firebase:s.a}),a.a.createElement(D,null),a.a.createElement(ve,{firebase:s.a}),a.a.createElement(D,null),a.a.createElement(ve,{firebase:s.a}),a.a.createElement(D,null),a.a.createElement(ve,{firebase:s.a}),a.a.createElement(D,null),a.a.createElement(ve,{firebase:s.a}),a.a.createElement(D,null),a.a.createElement(ve,{firebase:s.a}),a.a.createElement(D,null),a.a.createElement(ve,{firebase:s.a}),a.a.createElement(D,null),a.a.createElement(ve,{firebase:s.a}),a.a.createElement(D,null),a.a.createElement(ve,{firebase:s.a}),a.a.createElement(D,null),a.a.createElement(ve,{firebase:s.a})))))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(Se,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e,n,t){e.exports=t(177)},72:function(e,n,t){}},[[67,1,2]]]);
//# sourceMappingURL=main.c94f9526.chunk.js.map