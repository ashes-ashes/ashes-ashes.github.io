(window["webpackJsonpredux-cra"]=window["webpackJsonpredux-cra"]||[]).push([[0],{23:function(e,t,a){e.exports=a(37)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(20),r=a.n(o),c=(a(28),a(29),a(8)),s=(a(30),a(10)),u=a(11),i=a(13),h=a(12),m=a(6),v=a(14),d=a(5);a(31);function O(){return l.a.createElement("div",{className:"about-container"},l.a.createElement("h3",null,"ash todd \u2022 san francisco \u2022 software developer"),l.a.createElement("p",null,"lorem ipsums"))}var f=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).handleMouseOver=a.handleMouseOver.bind(Object(m.a)(a)),a.handleMouseOut=a.handleMouseOut.bind(Object(m.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"handleMouseOver",value:function(e){this.props.setStyle(e)}},{key:"handleMouseOut",value:function(){this.props.setStyle(null)}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("ul",{className:"projects-nav"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://enyo-chat.herokuapp.com/",onMouseOver:function(){return e.handleMouseOver("enyo")},onMouseOut:this.handleMouseOut},"enyo")),l.a.createElement("li",null,l.a.createElement("a",{href:"http://offshoots.herokuapp.com/",onMouseOver:function(){return e.handleMouseOver("offshoot")},onMouseOut:this.handleMouseOut},"offshoot")),l.a.createElement("li",null,l.a.createElement("a",{href:"https://ashes-ashes.github.io/vivari/",onMouseOver:function(){return e.handleMouseOver("vivari")},onMouseOut:this.handleMouseOut},"vivari"))))}}]),t}(l.a.Component),E=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(i.a)(this,Object(h.a)(t).call(this,e))).state={hoverStyle:null},a.setStyle=a.setStyle.bind(Object(m.a)(a)),a}return Object(v.a)(t,e),Object(u.a)(t,[{key:"setStyle",value:function(e){this.setState({hoverStyle:e})}},{key:"render",value:function(){var e=this,t="main";return null!==this.state.hoverStyle&&(t="main ".concat(this.state.hoverStyle)),l.a.createElement("div",{className:t},l.a.createElement("div",{className:"navbox"},l.a.createElement("h1",null,"ashen.works"),l.a.createElement("ul",{className:"nav"},l.a.createElement("li",null,l.a.createElement("h2",null,l.a.createElement(c.b,{to:"/about",activeClassName:"active"},"about"))),l.a.createElement("li",null,l.a.createElement("h2",null,l.a.createElement(c.b,{to:"/projects",activeClassName:"active"},"projects"))),l.a.createElement("li",null,l.a.createElement("h2",null,l.a.createElement(c.b,{to:"/links",activeClassName:"active"},"links")))),l.a.createElement(d.a,{path:"/about",component:O}),l.a.createElement(d.a,{path:"/projects",render:function(t){return l.a.createElement(f,Object.assign({},t,{setStyle:e.setStyle}))}})))}}]),t}(l.a.Component),p=Object(d.e)(E);var b=function(){return l.a.createElement("div",{className:"app"},l.a.createElement(c.a,null,l.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b6d6f980.chunk.js.map