(this.webpackJsonpconfusion=this.webpackJsonpconfusion||[]).push([[0],{22:function(e,a,t){},31:function(e,a,t){e.exports=t(48)},36:function(e,a,t){},42:function(e,a,t){},43:function(e,a,t){},44:function(e,a,t){},48:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(27),c=t.n(i),s=(t(36),t(11)),l=t(12),o=t(13),m=t(14),d=(t(22),t(15)),u=t(62),p=t(65),h=Object(u.a)((function(e){return{root:{display:"flex","& > *":{margin:e.spacing(1)}},large:{width:e.spacing(7),height:e.spacing(7)}}})),g=function(){var e=h();return r.a.createElement("nav",null,r.a.createElement("div",{className:e.root},r.a.createElement(p.a,{alt:"Remy Sharp",src:"images/Peace.jpeg",className:e.large})),r.a.createElement("ul",{className:"nav-Link"},r.a.createElement(d.b,{className:"navstyle",to:"/"},r.a.createElement("li",null," Home")),r.a.createElement(d.b,{className:"navstyle",to:"ContactUs"},r.a.createElement("li",null," Contact US")),r.a.createElement(d.b,{className:"navstyle",to:"/About"},r.a.createElement("li",null," About me"))))},w=(t(42),function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monster",src:e.monster.image,style:{width:200,height:300}}),r.a.createElement("h2",null,e.monster.name),r.a.createElement("p",null,e.monster.email))}),f=(t(43),function(e){return console.log(e),r.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return r.a.createElement(w,{key:e.id,monster:e})})))}),b=[{id:0,name:"Cafe ",image:"images/Cafe.jpeg",category:"mains",label:"Hot",price:"4.99",description:"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer."},{id:1,name:"Cafe2",image:"images/cafe2.jpeg",category:"appetizer",label:"",price:"1.99",description:"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce"},{id:2,name:"Cafe3",image:"images/cafe3.jpeg",category:"appetizer",label:"New",price:"1.99",description:"A quintessential ConFusion experience, is it a vada or is it a donut?"},{id:3,name:"friendShip",image:"images/friendShip.jpeg",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"},{id:4,name:"Moonlight",image:"images/Moonlight.jpeg",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"},{id:5,name:"Peace",image:"images/Peace.jpeg",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"},{id:6,name:"Landscape",image:"images/Landscape.jpeg",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"},{id:7,name:"watchtower",image:"images/watchtower.jpeg",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"},{id:8,name:"jungle&NorthStar",image:"images/jungle&NorthStar.jpeg",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"},{id:9,name:"Alienation",image:"images/Alienation.jpeg",category:"dessert",label:"",price:"2.99",description:"A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms"}],y=(t(44),function(e){var a=e.placeholder,t=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:a,onChange:t})}),E=t(28),C=t.n(E),j=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("diV",{style:{width:595,display:"grid",position:"relative",left:393,top:-10,border:"solid",height:447}},r.a.createElement(C.a,{width:"100%",height:"100%",images:[{url:"images/cafe.jpeg"},{url:"images/Landscape.jpeg"},{url:"images/cafe3.jpeg"},{url:"images/jungle&NorthStar.jpeg"},{url:"images/images/Alienation.jpeg"}]}))}}]),t}(r.a.Component),k=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={monsters:b,searchField:""},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,a=this.state,t=a.monsters,n=a.searchField,i=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement(y,{placeholder:"search ",handleChange:function(a){return e.setState({searchField:a.target.value})}}),r.a.createElement(j,null),r.a.createElement(f,{monsters:i}))}}]),t}(n.Component);var v=function(){return r.a.createElement("div",null,r.a.createElement("h1",null," Conatct us"))},N=t(2),A=function(e){Object(m.a)(t,e);var a=Object(o.a)(t);function t(){return Object(s.a)(this,t),a.call(this)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/",exact:!0,component:k}),r.a.createElement(N.a,{path:"/ContactUs",component:v}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.3b7c6dec.chunk.js.map