(this.webpackJsonpimagequiz=this.webpackJsonpimagequiz||[]).push([[0],{20:function(e,t,n){e.exports=n(34)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),l=(n(25),n(26),n(7)),c=n(1),s=n(9),u=n(10),m=n(12),h=n(11),p=(n(27),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=function e(t,n){Object(s.a)(this,e),this.name=t,this.picture=n},t=[new e("Daffodil","daffodil.png"),new e("Cherry blossom","cherryblossom.png"),new e("Lily","lily.jpg"),new e("Daisy","daisy.jpg"),new e("Sunflower","sunflower.png"),new e("Tulip","tulip.png"),new e("Rose","rose.png"),new e("Water lily","waterlily.png")];function n(e){var t="images/"+e.picture;return r.a.createElement("div",null,r.a.createElement("img",{src:t}),r.a.createElement("br",null),e.name+" and "+t)}var a="";return this.props.location&&this.props.location.state&&this.props.location.state.userN&&(a=this.props.location.state.userN),r.a.createElement("div",null,r.a.createElement("div",{className:"TopRight"},a.length>0?r.a.createElement("div",null,a,r.a.createElement("br",null),r.a.createElement(l.b,{to:"/"}," Logout")):r.a.createElement(l.b,{to:"/login"},"Login")),r.a.createElement("div",{className:"Pics"},n(t[0]),n(t[1]),n(t[2]),n(t[3]),n(t[4]),n(t[5]),n(t[6]),n(t[7])))}}]),n}(r.a.Component)),g=(n(33),function(e){Object(m.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onSubmit=function(e){a.state.user.trim().length>0&&a.setState({userGood:!0}),e.preventDefault()},a.whenChanged=function(e){var t=e.target.value;a.setState({user:t})},a.state={user:"",userGood:!1},a}return Object(u.a)(n,[{key:"render",value:function(){var e={pathname:"/",state:{userN:this.state.user}};return this.state.userGood?r.a.createElement(c.a,{to:e}):r.a.createElement("form",{className:"TopRight",onSubmit:this.onSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{value:this.state.user,type:"text",name:"username",onChange:this.whenChanged}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Login"))}}]),n}(r.a.Component));var f=function(){return r.a.createElement(l.a,null,r.a.createElement(c.d,null,r.a.createElement(c.b,{path:"/login"},r.a.createElement(g,null)),r.a.createElement(c.b,{path:"/",render:function(e){return r.a.createElement(p,e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.d407afc9.chunk.js.map