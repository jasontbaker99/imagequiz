(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{20:function(e,t,n){e.exports=n(35)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t){function n(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=28},34:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),l=(n(25),n(26),n(7)),c=n(1),s=n(9),u=n(10),m=n(12),h=n(11),p=(n(27),function(e){Object(m.a)(a,e);var t=Object(h.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var e=function e(t,n){Object(s.a)(this,e),this.name=t,this.picture=n},t=[new e("Daffodil","daffodil.png"),new e("Cherry blossom","cherryblossom.png"),new e("Lily","lily.jpg"),new e("Daisy","daisy.jpg"),new e("Sunflower","sunflower.png"),new e("Tulip","tulip.png"),new e("Rose","rose.png"),new e("Water lily","waterlily.png")];function a(e){var t="../images/"+e.picture;return r.a.createElement("div",null,r.a.createElement("img",{className:"image",src:n(28)(t),alt:""}),r.a.createElement("br",null),e.name)}var o="";return this.props.location&&this.props.location.state&&this.props.location.state.userN&&(o=this.props.location.state.userN),r.a.createElement("div",null,r.a.createElement("div",{className:"TopRight"},o.length>0?r.a.createElement("div",null,o,r.a.createElement("br",null),r.a.createElement(l.b,{to:"/"}," Logout")):r.a.createElement(l.b,{to:"/login"},"Login")),r.a.createElement("div",{className:"Pics"},a(t[0]),a(t[1]),a(t[2]),a(t[3]),a(t[4]),a(t[5]),a(t[6]),a(t[7])))}}]),a}(r.a.Component)),f=(n(34),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){a.state.user.trim().length>0&&a.setState({userGood:!0}),e.preventDefault()},a.whenChanged=function(e){var t=e.target.value;a.setState({user:t})},a.state={user:"",userGood:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e={pathname:"/",state:{userN:this.state.user}};return this.state.userGood?r.a.createElement(c.a,{to:e}):r.a.createElement("form",{className:"TopRight",onSubmit:this.onSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{value:this.state.user,type:"text",name:"username",onChange:this.whenChanged}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Login"))}}]),n}(r.a.Component));var g=function(){return r.a.createElement(l.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/login"},r.a.createElement(f,null)),r.a.createElement(c.b,{path:"/",render:function(e){return r.a.createElement(p,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.62bf3a40.chunk.js.map