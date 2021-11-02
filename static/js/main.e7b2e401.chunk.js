(this["webpackJsonpvending-machine-router-app"]=this["webpackJsonpvending-machine-router-app"]||[]).push([[0],{24:function(e,c,t){},25:function(e,c,t){},35:function(e,c,t){},36:function(e,c,t){},37:function(e,c,t){},38:function(e,c,t){},39:function(e,c,t){},40:function(e,c,t){"use strict";t.r(c);var a=t(0),n=t.n(a),s=t(16),i=t.n(s),r=t(3),o=(t(24),t(2)),d=t(6),j=t(7),l=t(9),h=t(8),b=(t(25),t(1)),p=function(e){Object(l.a)(t,e);var c=Object(h.a)(t);function t(){return Object(d.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"VendingMachine-container",children:[Object(b.jsx)("div",{className:"VendingMachine-welcome",children:Object(b.jsx)("h1",{children:"HELLO I AM A VENDING MACHINE WHAT WOULD YOU LIKE TO HAVE?"})}),Object(b.jsxs)("nav",{className:"VendingMachine-nav",children:[Object(b.jsx)(r.b,{exact:!0,to:"/soda",children:"SODA"}),Object(b.jsx)(r.b,{exact:!0,to:"/chips",children:"CHIPS"}),Object(b.jsx)(r.b,{exact:!0,to:"/sardines",children:"SARDINES"})]})]})}}]),t}(a.Component),u=p,O=(t(35),function(e){Object(l.a)(t,e);var c=Object(h.a)(t);function t(){return Object(d.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"Soda-container",children:[Object(b.jsx)("img",{className:"Soda-can-one",src:"https://purepng.com/public/uploads/large/purepng.com-coca-cola-cancoca-colacokecarbonated-soft-drinksoft-drinkcoke-can-1411527233399fihip.png",alt:"coca-cola-can"}),Object(b.jsxs)("div",{className:"Soda-back-container",children:[Object(b.jsx)(r.b,{className:"Soda-go-back",to:"/",children:"Go Back"}),Object(b.jsx)("h2",{children:"GULP GULP GULP"})]}),Object(b.jsx)("img",{className:"Soda-can-two",src:"https://purepng.com/public/uploads/large/purepng.com-coca-cola-cancoca-colacokecarbonated-soft-drinksoft-drinkcoke-can-1411527233399fihip.png",alt:"coca-cola-can"})]})}}]),t}(a.Component)),x=O,f=t(19),m=t(11),v=t(42),g=(t(36),function(e){Object(l.a)(t,e);var c=Object(h.a)(t);function t(){return Object(d.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(b.jsx)("img",{src:this.props.src,alt:this.props.altText,className:"Chip",style:{position:"absolute",top:"".concat(this.props.yCoord,"px"),left:"".concat(this.props.xCoord,"px"),zIndex:this.props.zIdx}})}}]),t}(a.Component)),C=g,N=(t(37),function(e){Object(l.a)(t,e);var c=Object(h.a)(t);function t(e){var a;return Object(d.a)(this,t),(a=c.call(this,e)).state={chips:[],count:0},a.addChips=a.addChips.bind(Object(m.a)(a)),a}return Object(j.a)(t,[{key:"addChips",value:function(){var e=this;this.setState((function(c){return console.log(e.props.imgSrc),{chips:[].concat(Object(f.a)(c.chips.slice()),[{url:"https://www.gogetdelivery.com/media/catalog/product/cache/1/image/1252x1252/9df78eab33525d08d6e5fb8d27136e95/2/8/2840019914cf.gif",xCoord:-300+Math.floor(900*Math.random()),yCoord:Math.floor(-300*Math.random())}]),count:c.count+1}}))}},{key:"render",value:function(){var e=this.state.chips.map((function(e,c){var t=e.url,a=e.yCoord,n=e.xCoord;return Object(b.jsx)(C,{src:t,yCoord:a,xCoord:n,zIdx:-c,altText:"lays-bag-of-chips"},Object(v.a)())}));return Object(b.jsxs)("div",{className:"Chips-container",children:[e,Object(b.jsxs)("div",{className:"count-container",children:[Object(b.jsx)(r.b,{className:"Chips-go-back",to:"/",children:"Go Back"}),Object(b.jsxs)("h1",{children:["Bags Eaten: ",this.state.count]})]}),Object(b.jsx)("button",{onClick:this.addChips,children:"Eat a Bag Of Chips!"})]})}}]),t}(a.Component)),k=(t(38),function(e){Object(l.a)(t,e);var c=Object(h.a)(t);function t(){return Object(d.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"Sardines-container",children:Object(b.jsxs)("div",{className:"Sardines-back-container",children:[Object(b.jsx)(r.b,{className:"Sardines-go-back",to:"/",children:"Go Back"}),Object(b.jsx)("h2",{children:"HA! YOU DIDNT EXPECT THIS!"})]})})}}]),t}(a.Component)),y=k;t(39);var S=function(){return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsxs)("nav",{className:"VendingMachine-top-nav",children:[Object(b.jsx)(r.c,{activeClassName:"Active-page",exact:!0,to:"/",children:"Vending Machine"}),Object(b.jsx)(r.c,{activeClassName:"Active-page",exact:!0,to:"/soda",children:"Soda"}),Object(b.jsx)(r.c,{activeClassName:"Active-page",exact:!0,to:"/chips",children:"Chips"}),Object(b.jsx)(r.c,{activeClassName:"Active-page",exact:!0,to:"/sardines",children:"Sardines"})]}),Object(b.jsxs)(o.c,{children:[Object(b.jsx)(o.a,{exact:!0,path:"/",render:function(){return Object(b.jsx)(u,{})}}),Object(b.jsx)(o.a,{exact:!0,path:"/soda",render:function(){return Object(b.jsx)(x,{})}}),Object(b.jsx)(o.a,{exact:!0,path:"/chips",render:function(){return Object(b.jsx)(N,{})}}),Object(b.jsx)(o.a,{exact:!0,path:"/sardines",render:function(){return Object(b.jsx)(y,{})}})]})]})};i.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(r.a,{children:Object(b.jsx)(S,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.e7b2e401.chunk.js.map