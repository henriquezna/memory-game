(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{150:function(e,c,t){},151:function(e,c,t){},457:function(e,c,t){"use strict";t.r(c);var n,r=t(1),i=t.n(r),a=t(20),d=t.n(a),u=(t(150),t(31)),b=(t(151),t(146)),l=(t(152),t(141)),m=t(142).a.button(n||(n=Object(l.a)(["\n    height: 500px;\n    width: 500px;\n    border: none;\n"]))),s=t.p+"static/media/Great_Barrier_Reef.e2bd7e52.jpg",j=t.p+"static/media/Christ_the_Redeemer.4a0ab768.jpg",o=t.p+"static/media/Egypt.fe2dfd3e.jpg",p=t.p+"static/media/Grand_Canyon.a2c349ec.jpg",h=t.p+"static/media/Great_Wall.778d9e60.jpg",k=t.p+"static/media/Machu_Picchu_Peru.dab40a5b.jpg",f=t.p+"static/media/Mt_Fuji.5b86463a.jpg",g=t.p+"static/media/Mt_Everest.f4f69281.jpg",O=t.p+"static/media/Niagara_Falls.db325c23.jpg",v=t.p+"static/media/Statue-of-Liberty.04fe2905.jpg",x=t.p+"static/media/Taj_Mahal.03def6b8.jpg",S=t.p+"static/media/Victoria_Falls.0bdd31a2.jpg",_=t(4),C=[s,j,o,p,h,k,f,g,O,v,x,S];var F=function(e){return Object(_.jsx)(m,{onClick:function(){return e.cardClicked(e.number)},children:Object(_.jsx)("img",{src:C[e.number-1],height:"500",width:"500",alt:e.number})})};var M=function(e){var c=Object(r.useState)([{number:1,clicked:!1},{number:2,clicked:!1},{number:3,clicked:!1},{number:4,clicked:!1},{number:5,clicked:!1},{number:6,clicked:!1},{number:7,clicked:!1},{number:8,clicked:!1},{number:9,clicked:!1},{number:10,clicked:!1},{number:11,clicked:!1},{number:12,clicked:!1}]),t=Object(u.a)(c,2),n=t[0],i=t[1];function a(c){if(!0===n.find((function(e){return e.number===c})).clicked)return e.updateScore(0),void i([{number:1,clicked:!1},{number:2,clicked:!1},{number:3,clicked:!1},{number:4,clicked:!1},{number:5,clicked:!1},{number:6,clicked:!1},{number:7,clicked:!1},{number:8,clicked:!1},{number:9,clicked:!1},{number:10,clicked:!1},{number:11,clicked:!1},{number:12,clicked:!1}]);n[c-1].clicked=!0,i(Object(b.a)(function(){for(var e,c,t=n.length;t;)c=Math.floor(Math.random()*t--),e=n[t],n[t]=n[c],n[c]=e;return n}())),e.updateScore()}return Object(_.jsx)("div",{children:n.map((function(e){return Object(_.jsx)(F,{number:e.number,clicked:e.clicked,cardClicked:a})}))})};var y=function(e){var c=e.score,t=e.highScore;return Object(_.jsxs)("div",{children:[Object(_.jsx)("h1",{children:"SCORE"}),Object(_.jsxs)("h2",{children:["Current Score: ",c]}),Object(_.jsxs)("h2",{children:["Highscore: ",t]})]})};var E=function(){var e=function(){var e=Object(r.useState)(0),c=Object(u.a)(e,2),t=c[0],n=c[1],i=Object(r.useState)(0),a=Object(u.a)(i,2),d=a[0],b=a[1],l=function(){n(0)};return[t,d,function(e){return console.log("UPDATE SCORE"),0===e?(l(),t):(n(t+1),t+1>d&&b(t+1),t)}]}(),c=Object(u.a)(e,3),t=c[0],n=c[1],i=c[2];return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("header",{className:"App-header",children:Object(_.jsx)(y,{score:t,highScore:n})}),Object(_.jsx)(M,{updateScore:i})]})},P=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,458)).then((function(c){var t=c.getCLS,n=c.getFID,r=c.getFCP,i=c.getLCP,a=c.getTTFB;t(e),n(e),r(e),i(e),a(e)}))};d.a.render(Object(_.jsx)(i.a.StrictMode,{children:Object(_.jsx)(E,{})}),document.getElementById("root")),P()}},[[457,1,2]]]);
//# sourceMappingURL=main.4c777d9f.chunk.js.map