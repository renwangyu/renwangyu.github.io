(this["webpackJsonprenwangyu.github.io"]=this["webpackJsonprenwangyu.github.io"]||[]).push([[0],[,,,,,,function(t,i){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAaZJREFUeNq0lWFvgjAQhkGKoBOdbvH//8FtThQBBXY1zy2XpvplmckbSWmf3r29K+k0TcmDXyZyyD+nIj95EN3QEFvoImMzUSkq0DwC7UUdakXjM2guWqIX0QKwY7ORCD3sIjqzphFdY9Ac0FpUoRXguYH2AE9smJPFWcHOpLwE+Cra8r9mo8JAOwBHxjMY3praz1FoCbQC+C7a8VzxPsPPlsWlCWogSq9GT7YgoooIPXAvehNt2FCh3r9v0k6Mx3ponZZMgXcrUt4C3PO8Yt7NeJkQWYsdZz1Uhc4NWCPeGCvWzOlJOwm8XZjyc5p+FsDVY418x3gHsOV9aWHKmlEOKaerim20iQGCdXfWjFKYKBfVYNpRu+eb/9606BCsu7PcA0DLKZ+Mh+rpkfFGTzvcyAUwbb2ayArjoT39L97XzL9YuAt6+UQkpanD7kGdfgDXyBV80/Q7U2eF6ZQr47GO8sBP0cFE3Gn6ml6OMtMprenxWO8fgNfG49+IRgZT08u6+NktVaMj68fw6tNUJ56tJc/u0ya8T9PI5+TPN3/6H9+oHwEGAHEl0JgodhzVAAAAAElFTkSuQmCC"},function(t,i,e){t.exports=e(17)},,,,,function(t,i,e){},function(t,i,e){},function(t,i,e){},function(t,i,e){},function(t,i,e){},function(t,i,e){"use strict";e.r(i);var s=e(0),n=e.n(s),a=e(5),h=e.n(a),o=(e(12),e(13),e(14),e(1)),r=e(2),c=e(3),u=function(){function t(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Object(o.a)(this,t),this.x=i,this.y=e}return Object(r.a)(t,[{key:"setX",value:function(t){this.x=t}},{key:"setY",value:function(t){this.y=t}},{key:"setCrood",value:function(t,i){this.setX(t),this.setY(i)}},{key:"copyCrood",value:function(){return new t(this.x,this.y)}},{key:"getCroodXY",value:function(){return[this.x,this.y]}}]),t}(),l=function(){},d=function(t,i){return Math.floor(Math.random()*(i-t+1)+t)},v=window.requestAnimationFrame||function(t){return setTimeout(t,0)},f=e(6),m=e.n(f),y=new Image;y.src=m.a;var g=function(){function t(i){Object(o.a)(this,t);var e=i.canvas,s=i.ctx,n=i.x,a=i.y,h=i.speed,r=void 0===h?50:h,c=i.scale,v=void 0===c?d(5,12)/10:c,f=i.dxRange,m=void 0===f?[0,0]:f,g=i.dyRange,w=void 0===g?[0,0]:g,p=i.cbDistroy,x=void 0===p?l:p;this.isDestroy=!1,this.canvas=e,this.ctx=s,this.pos=new u(n,a),this.speed=r,this.dxRange=m,this.dyRange=w,this.cbDistroy=x,this.img=y,this.imgWidth=20*v,this.imgHeight=20*v}return Object(r.a)(t,[{key:"draw",value:function(){var t=this.pos.getCroodXY(),i=Object(c.a)(t,2),e=i[0],s=i[1];this.ctx.clearRect(e-this.imgWidth/2,s-this.imgHeight/2,this.imgWidth,this.imgHeight);var n=e+this._randomDx()/this.speed,a=s+this._randomDy()/this.speed;if(this.pos.setCrood(n,a),this.isOutRange())return this.destroy();this.ctx.drawImage(this.img,this.pos.x-this.imgWidth/2,this.pos.y-this.imgHeight/2,this.imgWidth,this.imgHeight)}},{key:"_randomDx",value:function(){var t=Object(c.a)(this.dxRange,2),i=t[0],e=t[1];return d(i,e)}},{key:"_randomDy",value:function(){var t=Object(c.a)(this.dyRange,2),i=t[0],e=t[1];return d(i,e)}},{key:"isOutRange",value:function(){var t=this.pos.getCroodXY(),i=Object(c.a)(t,2),e=i[0],s=i[1];return e>=this.canvas.width||s<=0}},{key:"destroy",value:function(){this.isDestroy=!0,"function"===typeof this.cbDistroy&&this.cbDistroy()}}]),t}(),w=function(){function t(i){Object(o.a)(this,t);var e=i.canvas,s=i.ctx,n=i.total,a=void 0===n?12:n;this.canvas=e,this.ctx=s,this.total=a,this.balls=[],this.handle=null,this.running=!1,this.init()}return Object(r.a)(t,[{key:"init",value:function(){for(var t=0;t<this.total;t++)this.balls.push(this._createOneFloatBall())}},{key:"start",value:function(){this.running=!0,this.balls.forEach((function(t){!t.isDestroy&&t.draw()})),this.handle=v(this.start.bind(this))}},{key:"_createOneFloatBall",value:function(){var t=this,i=this.canvas,e=this.ctx,s=d(0,i.width),n=d(-10,0),a=d(40,60),h=d(-30,-20),o=d(-20,0),r=d(50,80);return new g({canvas:i,ctx:e,x:s,y:300,speed:r,dxRange:[n,a],dyRange:[h,o],cbDistroy:function(){t.balls=t.balls.filter((function(t){return!t.isDestroy})),t.balls.push(t._createOneFloatBall())}})}},{key:"stop",value:function(){this.running=!1,cancelAnimationFrame(this.handle)}}]),t}(),p=window.innerWidth;var x=function(){var t=Object(s.useRef)();return Object(s.useEffect)((function(){var i=t.current,e=i.getContext("2d");new w({canvas:i,ctx:e,total:9}).start()})),n.a.createElement("div",{className:"page-home"},n.a.createElement("div",null,"home"),n.a.createElement("canvas",{ref:t,id:"glass",width:p,height:300,className:"bottom-glass"}),n.a.createElement("div",{className:"bottom-glass"}))};e(15);var b=function(){return n.a.createElement("div",{className:"page-sky"},n.a.createElement("div",null,"sky"))},A=(e(16),Math.PI),k=function(){function t(i){Object(o.a)(this,t);var e=i.id,s=i.canvas,n=i.ctx,a=i.from,h=void 0===a?new u(0,0):a,r=i.to,c=void 0===r?new u(0,0):r,d=i.speed,v=void 0===d?1:d,f=i.delt,m=void 0===f?10:f,y=i.r,g=void 0===y?1:y,w=i.color,p=void 0===w?"rgba(250,250,250,1)":w,x=i.cbDistory,b=void 0===x?l:x;this.canvas=s,this.ctx=n,this.id=e,this.from=h,this.to=c,this.speed=v,this.delt=m,this.r=g,this.color=p,this.cbDistory=b,this.handle=null,this.isDistory=!1,this.dur=1e3*Math.sqrt(Math.pow(this.to.x-this.from.x,2)+Math.pow(this.to.y-this.from.y,2))/this.speed,this.pass=0,this.now=this.from.copyCrood()}return Object(r.a)(t,[{key:"draw",value:function(){this.pass=Math.min(this.pass+this.delt,this.dur);var t=this.pass/this.dur;if(1===t)return this.distory();this.now.setCrood(this.from.x+(this.to.x-this.from.x)*t,this.from.y+(this.to.y-this.from.y)*t),this.ctx.save(),this.ctx.beginPath(),this.ctx.arc(this.now.x,this.now.y,1*this.r,0,2*A,!0),this.ctx.fillStyle=this.color,this.ctx.fill(),this.ctx.restore()}},{key:"isOutRange",value:function(){var t=this.canvas,i=t.width,e=t.height;return this.now.x>=i||this.now.y>=e||this.now.x<=0||this.now.y<=0}},{key:"distory",value:function(){this.ctx.clearRect(this.now.x-this.r,this.now.y-this.r,2*this.r,2*this.r),cancelAnimationFrame(this.handle),this.isDistory=!0,"function"===typeof this.cbDistory&&this.cbDistory()}}]),t}(),O=function(){function t(i){var e=this;Object(o.a)(this,t);var s=i.canvas,n=i.ctx,a=i.num,h=void 0===a?100:a;this.canvas=s,this.ctx=n,this.num=h,this.handle=null,this.timer=null,this.rain=[],this.isStop=!1,this.generateRain(),this.timer=setInterval((function(){e.generateRain()}),2e3)}return Object(r.a)(t,[{key:"generateRain",value:function(){for(var t=0;t<this.num;t++)this.rain.push(this._createOneMeteor(t))}},{key:"launch",value:function(){if(this.rain.every((function(t){return t.isDistory})))return this.stop();this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.rain.forEach((function(t){!t.isDistory&&t.draw()})),this.handle=v(this.launch.bind(this))}},{key:"_createOneMeteor",value:function(t){var i=d(300,500),e=d(10,15),s=d(0,this.canvas.width),n=d(0,this.canvas.height);return new k({id:t,from:new u(this.canvas.width/2,this.canvas.height/2),to:new u(s,n),speed:i,delt:e,canvas:this.canvas,ctx:this.ctx})}},{key:"stop",value:function(){this.isStop=!0,clearInterval(this.handle)}}]),t}(),E=window.screen.availWidth,D=window.screen.availHeight;var R=function(){var t=Object(s.useRef)();return Object(s.useEffect)((function(){var i=t.current,e=i.getContext("2d");new O({canvas:i,ctx:e,num:100}).launch()})),n.a.createElement("div",{className:"page-universe"},n.a.createElement("canvas",{ref:t,id:"meteor",width:E,height:D}))};var j=function(){return n.a.createElement("div",{className:"stage"},n.a.createElement("div",{className:"my-story"},n.a.createElement(R,null),n.a.createElement(b,null),n.a.createElement(x,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));h.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.9637d887.chunk.js.map