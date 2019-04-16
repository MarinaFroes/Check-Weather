(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,n,t){e.exports=t(34)},25:function(e,n,t){},28:function(e,n,t){},34:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(3),c=t.n(i),o=(t(25),t(4)),u=t.n(o),l=t(10),d=t(11),m=t(12),s=t(16),f=t(13),p=t(17),h=t(1),v=(t(28),t(2));function y(){var e=Object(h.a)(["\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 15rem;\n  padding: 2rem;\n\n  @media only screen and (min-width: 600px){\n    width: 50%;\n    height: 30rem;\n  }\n"]);return y=function(){return e},e}var g=v.a.div(y()),b=function(e){var n=e.title,t=e.text;return a.a.createElement(g,null,a.a.createElement("h1",null,n),a.a.createElement("p",null,t))};function w(){var e=Object(h.a)(["\n  background-color: black;\n  padding: 5px 15px;\n  border-radius: 3px;\n  color: white;\n  text-align: center;\n  align-self: center;\n  font-size: 1.2rem;\n  margin: 1rem;\n"]);return w=function(){return e},e}function x(){var e=Object(h.a)(["\n  font-size: 1.2rem;\n  margin: 1rem;\n  border: none;\n  border-radius: 3px;\n  padding: 4px;\n"]);return x=function(){return e},e}function E(){var e=Object(h.a)(["\n  background-color: ",";\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  padding: 3rem;\n  height: 50%;\n"]);return E=function(){return e},e}var j=v.a.form(E(),function(e){return e.color}),k=v.a.input(x()),O=v.a.input(w()),W=function(e){var n=e.getWeather;return a.a.createElement(j,{onSubmit:n},a.a.createElement(k,{type:"text",name:"city",placeholder:"City..."}),a.a.createElement(k,{type:"text",name:"country",placeholder:"Country..."}),a.a.createElement(O,{type:"submit",value:"Get Weather"}))},C=t(8);function z(){var e=Object(h.a)(["\n  color: silver;\n  font-size: 2rem;\n  margin: 0 1rem;\n"]);return z=function(){return e},e}function F(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return F=function(){return e},e}function S(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n"]);return S=function(){return e},e}var A=v.a.footer(S()),B=v.a.div(F()),J=v.a.a(z()),M=function(){return a.a.createElement(A,null,a.a.createElement("p",null,"Page written by Marina Froes A. Costa"),a.a.createElement(B,null,a.a.createElement(J,{href:"https://github.com/MarinaFroes",target:"_blank"},a.a.createElement(C.a,null)),a.a.createElement(J,{href:"https://www.linkedin.com/in/marina-froes-a-costa/",target:"_blank"},a.a.createElement(C.b,null))))};function P(){var e=Object(h.a)(["\n  background-color: white;\n  padding: 10px;\n  color: red;\n  font-weight: bold;\n"]);return P=function(){return e},e}function _(){var e=Object(h.a)(["\n  font-size: 1.1rem;\n  text-align: center;\n  height: 50%;\n"]);return _=function(){return e},e}var q=v.a.div(_()),D=v.a.p(P()),G=function(e){var n=e.city,t=e.country,r=e.temperature,i=e.humidity,c=e.description,o=e.error;return a.a.createElement(q,null,n&&t&&a.a.createElement("p",null,"Location: ",n,", ",t),r&&a.a.createElement("p",null,"Temperature: ",r,"\xb0C"),i&&a.a.createElement("p",null,"Humidity: ",i,"% "),c&&a.a.createElement("p",null,"Conditions: ",c),o&&a.a.createElement(D,null,o))};function H(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  background-color: ",";\n  height: 30rem;\n  width: 100%;\n\n  @media only screen and (min-width: 600px){\n    width: 50%;\n  }\n"]);return H=function(){return e},e}function I(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n\n  @media only screen and (min-width: 600px){\n    flex-direction: row;\n    margin: 2rem;\n    justify-content: center;\n    align-items: center;\n    width: 35rem;\n    height: 30rem;\n    box-shadow: 3px 3px 10px grey;\n  }\n"]);return I=function(){return e},e}function L(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  width: 100vw;\n\n  @media only screen and (min-width: 600px){\n    background-color: snow;\n  }\n"]);return L=function(){return e},e}var T=v.a.main(L()),$=v.a.div(I()),K=v.a.div(H(),function(e){return e.color}),N="f6d3ccc3be4411b42258113ccd95bfec",Q=function(e){function n(){var e,t;Object(d.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(t=Object(s.a)(this,(e=Object(f.a)(n)).call.apply(e,[this].concat(a)))).state={temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:void 0},t.getWeather=function(){var e=Object(l.a)(u.a.mark(function e(n){var r,a,i,c;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=n.target.elements.city.value,a=n.target.elements.country.value,e.next=5,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(r,",").concat(a,"&appid=").concat(N,"&units=metric"));case 5:return i=e.sent,e.next=8,i.json();case 8:c=e.sent,r&&a?(console.log(c),t.setState({temperature:c.main.temp,city:c.name,country:c.sys.country,humidity:c.main.humidity,description:c.weather[0].description,error:""})):t.setState({temperature:void 0,city:void 0,country:void 0,humidity:void 0,description:void 0,error:"Please enter valid values."});case 10:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),t}return Object(p.a)(n,e),Object(m.a)(n,[{key:"render",value:function(){return a.a.createElement(T,null,a.a.createElement($,null,a.a.createElement(b,{title:"Weather Checker",text:"Find out temperature, conditions and more..."}),a.a.createElement(K,{color:"palevioletred"},a.a.createElement(W,{color:"palevioletred",getWeather:this.getWeather}),a.a.createElement(G,{temperature:this.state.temperature,city:this.state.city,country:this.state.country,humidity:this.state.humidity,description:this.state.description,error:this.state.error}))),a.a.createElement(M,null))}}]),n}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.1c099fab.chunk.js.map