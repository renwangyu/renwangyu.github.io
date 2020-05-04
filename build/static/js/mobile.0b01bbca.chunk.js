(this["webpackJsonprenwangyu.github.io"]=this["webpackJsonprenwangyu.github.io"]||[]).push([[2],{17:function(e,t){e.exports=function(e){function t(t,n){this.object=t,this.domElement=void 0!==n?n:document,this.enabled=!0,this.target=new e.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.25,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={ORBIT:e.MOUSE.LEFT,ZOOM:e.MOUSE.MIDDLE,PAN:e.MOUSE.RIGHT},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.reset=function(){o.target.copy(o.target0),o.object.position.copy(o.position0),o.object.zoom=o.zoom0,o.object.updateProjectionMatrix(),o.dispatchEvent(a),o.update(),c=s.NONE},this.update=function(){var n=new e.Vector3,i=(new e.Quaternion).setFromUnitVectors(t.up,new e.Vector3(0,1,0)),r=i.clone().inverse(),b=new e.Vector3,f=new e.Quaternion;return function(){var e=o.object.position;return n.copy(e).sub(o.target),n.applyQuaternion(i),l.setFromVector3(n),o.autoRotate&&c===s.NONE&&T(2*Math.PI/60/60*o.autoRotateSpeed),l.theta+=u.theta,l.phi+=u.phi,l.theta=Math.max(o.minAzimuthAngle,Math.min(o.maxAzimuthAngle,l.theta)),l.phi=Math.max(o.minPolarAngle,Math.min(o.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=m,l.radius=Math.max(o.minDistance,Math.min(o.maxDistance,l.radius)),o.target.add(h),n.setFromSpherical(l),n.applyQuaternion(r),e.copy(o.target).add(n),o.object.lookAt(o.target),!0===o.enableDamping?(u.theta*=1-o.dampingFactor,u.phi*=1-o.dampingFactor):u.set(0,0,0),m=1,h.set(0,0,0),!!(p||b.distanceToSquared(o.object.position)>d||8*(1-f.dot(o.object.quaternion))>d)&&(o.dispatchEvent(a),b.copy(o.object.position),f.copy(o.object.quaternion),p=!1,!0)}}(),this.dispose=function(){o.domElement.removeEventListener("contextmenu",F,!1),o.domElement.removeEventListener("mousedown",N,!1),o.domElement.removeEventListener("wheel",A,!1),o.domElement.removeEventListener("touchstart",z,!1),o.domElement.removeEventListener("touchend",D,!1),o.domElement.removeEventListener("touchmove",U,!1),document.removeEventListener("mousemove",L,!1),document.removeEventListener("mouseup",H,!1),window.removeEventListener("keydown",k,!1)};var o=this,a={type:"change"},i={type:"start"},r={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_DOLLY:4,TOUCH_PAN:5},c=s.NONE,d=1e-6,l=new e.Spherical,u=new e.Spherical,m=1,h=new e.Vector3,p=!1,b=new e.Vector2,f=new e.Vector2,v=new e.Vector2,g=new e.Vector2,w=new e.Vector2,E=new e.Vector2,y=new e.Vector2,M=new e.Vector2,P=new e.Vector2;function O(){return Math.pow(.95,o.zoomSpeed)}function T(e){u.theta-=e}function x(e){u.phi-=e}var C=function(){var t=new e.Vector3;return function(e,n){t.setFromMatrixColumn(n,0),t.multiplyScalar(-e),h.add(t)}}(),j=function(){var t=new e.Vector3;return function(e,n){t.setFromMatrixColumn(n,1),t.multiplyScalar(e),h.add(t)}}(),R=function(){var t=new e.Vector3;return function(n,a){var i=o.domElement===document?o.domElement.body:o.domElement;if(o.object instanceof e.PerspectiveCamera){var r=o.object.position;t.copy(r).sub(o.target);var s=t.length();s*=Math.tan(o.object.fov/2*Math.PI/180),C(2*n*s/i.clientHeight,o.object.matrix),j(2*a*s/i.clientHeight,o.object.matrix)}else o.object instanceof e.OrthographicCamera?(C(n*(o.object.right-o.object.left)/o.object.zoom/i.clientWidth,o.object.matrix),j(a*(o.object.top-o.object.bottom)/o.object.zoom/i.clientHeight,o.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),o.enablePan=!1)}}();function S(t){o.object instanceof e.PerspectiveCamera?m/=t:o.object instanceof e.OrthographicCamera?(o.object.zoom=Math.max(o.minZoom,Math.min(o.maxZoom,o.object.zoom*t)),o.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),o.enableZoom=!1)}function V(t){o.object instanceof e.PerspectiveCamera?m*=t:o.object instanceof e.OrthographicCamera?(o.object.zoom=Math.max(o.minZoom,Math.min(o.maxZoom,o.object.zoom/t)),o.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),o.enableZoom=!1)}function N(e){if(!1!==o.enabled){if(e.preventDefault(),e.button===o.mouseButtons.ORBIT){if(!1===o.enableRotate)return;!function(e){b.set(e.clientX,e.clientY)}(e),c=s.ROTATE}else if(e.button===o.mouseButtons.ZOOM){if(!1===o.enableZoom)return;!function(e){y.set(e.clientX,e.clientY)}(e),c=s.DOLLY}else if(e.button===o.mouseButtons.PAN){if(!1===o.enablePan)return;!function(e){g.set(e.clientX,e.clientY)}(e),c=s.PAN}c!==s.NONE&&(document.addEventListener("mousemove",L,!1),document.addEventListener("mouseup",H,!1),o.dispatchEvent(i))}}function L(e){if(!1!==o.enabled)if(e.preventDefault(),c===s.ROTATE){if(!1===o.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),v.subVectors(f,b);var t=o.domElement===document?o.domElement.body:o.domElement;T(2*Math.PI*v.x/t.clientWidth*o.rotateSpeed),x(2*Math.PI*v.y/t.clientHeight*o.rotateSpeed),b.copy(f),o.update()}(e)}else if(c===s.DOLLY){if(!1===o.enableZoom)return;!function(e){M.set(e.clientX,e.clientY),P.subVectors(M,y),P.y>0?S(O()):P.y<0&&V(O()),y.copy(M),o.update()}(e)}else if(c===s.PAN){if(!1===o.enablePan)return;!function(e){w.set(e.clientX,e.clientY),E.subVectors(w,g),R(E.x,E.y),g.copy(w),o.update()}(e)}}function H(e){!1!==o.enabled&&(document.removeEventListener("mousemove",L,!1),document.removeEventListener("mouseup",H,!1),o.dispatchEvent(r),c=s.NONE)}function A(e){!1===o.enabled||!1===o.enableZoom||c!==s.NONE&&c!==s.ROTATE||(e.preventDefault(),e.stopPropagation(),function(e){e.deltaY<0?V(O()):e.deltaY>0&&S(O()),o.update()}(e),o.dispatchEvent(i),o.dispatchEvent(r))}function k(e){!1!==o.enabled&&!1!==o.enableKeys&&!1!==o.enablePan&&function(e){switch(e.keyCode){case o.keys.UP:R(0,o.keyPanSpeed),o.update();break;case o.keys.BOTTOM:R(0,-o.keyPanSpeed),o.update();break;case o.keys.LEFT:R(o.keyPanSpeed,0),o.update();break;case o.keys.RIGHT:R(-o.keyPanSpeed,0),o.update()}}(e)}function z(e){if(!1!==o.enabled){switch(e.touches.length){case 1:if(!1===o.enableRotate)return;!function(e){b.set(e.touches[0].pageX,e.touches[0].pageY)}(e),c=s.TOUCH_ROTATE;break;case 2:if(!1===o.enableZoom)return;!function(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);y.set(0,o)}(e),c=s.TOUCH_DOLLY;break;case 3:if(!1===o.enablePan)return;!function(e){g.set(e.touches[0].pageX,e.touches[0].pageY)}(e),c=s.TOUCH_PAN;break;default:c=s.NONE}c!==s.NONE&&o.dispatchEvent(i)}}function U(e){if(!1!==o.enabled)switch(e.preventDefault(),e.stopPropagation(),e.touches.length){case 1:if(!1===o.enableRotate)return;if(c!==s.TOUCH_ROTATE)return;!function(e){f.set(e.touches[0].pageX,e.touches[0].pageY),v.subVectors(f,b);var t=o.domElement===document?o.domElement.body:o.domElement;T(2*Math.PI*v.x/t.clientWidth*o.rotateSpeed),x(2*Math.PI*v.y/t.clientHeight*o.rotateSpeed),b.copy(f),o.update()}(e);break;case 2:if(!1===o.enableZoom)return;if(c!==s.TOUCH_DOLLY)return;!function(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,a=Math.sqrt(t*t+n*n);M.set(0,a),P.subVectors(M,y),P.y>0?V(O()):P.y<0&&S(O()),y.copy(M),o.update()}(e);break;case 3:if(!1===o.enablePan)return;if(c!==s.TOUCH_PAN)return;!function(e){w.set(e.touches[0].pageX,e.touches[0].pageY),E.subVectors(w,g),R(E.x,E.y),g.copy(w),o.update()}(e);break;default:c=s.NONE}}function D(e){!1!==o.enabled&&(o.dispatchEvent(r),c=s.NONE)}function F(e){e.preventDefault()}o.domElement.addEventListener("contextmenu",F,!1),o.domElement.addEventListener("mousedown",N,!1),o.domElement.addEventListener("wheel",A,!1),o.domElement.addEventListener("touchstart",z,!1),o.domElement.addEventListener("touchend",D,!1),o.domElement.addEventListener("touchmove",U,!1),window.addEventListener("keydown",k,!1),this.update()}return t.prototype=Object.create(e.EventDispatcher.prototype),t.prototype.constructor=t,Object.defineProperties(t.prototype,{center:{get:function(){return console.warn("THREE.OrbitControls: .center has been renamed to .target"),this.target}},noZoom:{get:function(){return console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),!this.enableZoom},set:function(e){console.warn("THREE.OrbitControls: .noZoom has been deprecated. Use .enableZoom instead."),this.enableZoom=!e}},noRotate:{get:function(){return console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),!this.enableRotate},set:function(e){console.warn("THREE.OrbitControls: .noRotate has been deprecated. Use .enableRotate instead."),this.enableRotate=!e}},noPan:{get:function(){return console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),!this.enablePan},set:function(e){console.warn("THREE.OrbitControls: .noPan has been deprecated. Use .enablePan instead."),this.enablePan=!e}},noKeys:{get:function(){return console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),!this.enableKeys},set:function(e){console.warn("THREE.OrbitControls: .noKeys has been deprecated. Use .enableKeys instead."),this.enableKeys=!e}},staticMoving:{get:function(){return console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),!this.enableDamping},set:function(e){console.warn("THREE.OrbitControls: .staticMoving has been deprecated. Use .enableDamping instead."),this.enableDamping=!e}},dynamicDampingFactor:{get:function(){return console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor},set:function(e){console.warn("THREE.OrbitControls: .dynamicDampingFactor has been renamed. Use .dampingFactor instead."),this.dampingFactor=e}}}),t}},5:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},6:function(e,t,n){e.exports=n.p+"static/media/bb.ec62a105.png"},78:function(e,t,n){},79:function(e,t,n){},8:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);n(8);var o,a,i,r,s,c,d,l,u,m,h,p,b=n(0),f=n.n(b),v=n(7),g=n.n(v),w=(n(78),n(79),n(4)),E=n(1),y=n(17),M=function(e,t){for(var n=new E.Group,o=0,a=t.length;o<a;o++)n.add(new E.Mesh(e,t[o]));return n},P=n.n(y)()(E),O={uniforms:{offset:{type:"f",value:.3},color:{type:"v3",value:new E.Color("#000000")},alpha:{type:"f",value:1}},vertexShader:["uniform float offset;","void main() {","  vec4 pos = modelViewMatrix * vec4( position + normal * offset, 1.0 );","  gl_Position = projectionMatrix * pos;","}"].join("\n"),fragmentShader:["uniform vec3 color;","uniform float alpha;","void main() {","  gl_FragColor = vec4( color, alpha );","}"].join("\n")};function T(){var e=document.getElementById("container");(m=new E.WebGLRenderer({antialias:!0})).setPixelRatio(window.devicePixelRatio),m.setSize(window.innerWidth,window.innerHeight),e.appendChild(m.domElement),m.domElement.style.cursor="pointer",(l=new E.PerspectiveCamera(60,window.innerWidth/window.innerHeight,.1,1e5)).position.set(0,-6,3),(o=new P(l,m.domElement)).target.y=1,o.enableDamping=!0,o.enabled=!1,(h=new E.Scene).background=new E.Color(79691),h.fog=new E.Fog(h.background,10,20);var t=new E.AmbientLight(5592405);h.add(t);var n=new E.DirectionalLight(16777215,.4);n.position.set(.7,1,1),h.add(n),a=new E.Group,h.add(a);var b=new E.Group;b.position.y=-1.5,a.add(b);var f=[];f.push(new E.Vector2(0,0));for(var v=0;v<11;v++){var g=new E.Vector2(8*Math.cos(.227*v-.75),4*v);f.push(g)}f.push(new E.Vector2(0,40));var w=new E.LatheGeometry(f,32),y=new E.MeshToonMaterial({color:13421772,shininess:1}),T=new E.ShaderMaterial({uniforms:E.UniformsUtils.clone(O.uniforms),vertexShader:O.vertexShader,fragmentShader:O.fragmentShader,side:E.BackSide}),C=M(w,[y,T]);C.scale.setScalar(.1),b.add(C);var j=new E.CylinderBufferGeometry(.26,.26,1.6,32),N=new E.MeshToonMaterial({color:9493759}),L=T.clone();L.uniforms.offset.value=.03;var H=M(j,[N,L]);H.position.y=2,H.rotation.x=Math.PI/2,b.add(H);var A=new E.Shape;A.absarc(0,0,3.5,0,2*Math.PI);var k=new E.Path;k.absarc(0,0,3,0,2*Math.PI),A.holes.push(k);var z=new E.ExtrudeGeometry(A,{amount:17,steps:1,bevelEnabled:!1});z.computeVertexNormals(),z.center();var U=new E.MeshToonMaterial({color:16711680,shininess:1}),D=T.clone();D.uniforms.offset.value=.2;var F=M(z,[U,D]);F.position.y=2,F.scale.setScalar(.1),b.add(F);var I=new E.Shape;I.moveTo(3,0),I.quadraticCurveTo(25,-8,15,-37),I.quadraticCurveTo(13,-21,0,-20),I.lineTo(3,0);var Y=new E.Group;b.add(Y);var Z=new E.ExtrudeGeometry(I,{steps:1,amount:4,bevelEnabled:!0,bevelThickness:2,bevelSize:2,bevelSegments:5});Z.computeVertexNormals();var G=new E.MeshToonMaterial({color:16711680,shininess:1}),W=T.clone();W.uniforms.offset.value=1;var X=M(Z,[G,W]);X.scale.setScalar(.03),X.position.set(.6,.9,0),Y.add(X);var B=Y.clone();B.rotation.y=Math.PI,b.add(B);var _=Y.clone();_.rotation.y=Math.PI/2,b.add(_);var K=Y.clone();K.rotation.y=-Math.PI/2,b.add(K),i=new x({color:16734720,size:.4,rangeH:.8,rangeV:2.5,pointCount:50}),b.add(i),r=new x({color:16760832,size:.6,rangeH:.5}),b.add(r),(s=new x({color:16777215,size:.6,rangeH:20,rangeV:20,pointCount:400,speed:.1})).points.position.y=0,h.add(s),d=new E.Plane(new E.Vector3(0,0,1),0),c=new E.Vector3,(u=new E.Vector3).copy(l.position),p=new E.Mesh(new E.SphereBufferGeometry(.2),new E.MeshPhongMaterial({color:65280})),h.add(p),m.domElement.addEventListener("mousemove",R,!1),m.domElement.addEventListener("touchmove",S,!1),window.addEventListener("resize",V,!1)}var x=function(e){var t=this.color=e.color||3355443,n=this.size=e.size||.4,o=this.pointCount=e.pointCount||40,a=this.rangeV=e.rangeV||2,i=this.rangeH=e.rangeH||1,r=this.speed=this.speedTarget=e.speed||5e-4;E.Group.call(this);var s=document.createElement("canvas");s.width=s.height=128;var c=s.getContext("2d"),d=s.width/2,l=s.height/2,u=s.width/3;c.beginPath(),c.arc(d,l,u,0,2*Math.PI,!1),c.fillStyle="#fff",c.fill();var m=new E.Texture(s);m.premultiplyAlpha=!0,m.needsUpdate=!0;for(var h=new E.Geometry,p=new E.PointsMaterial({color:t,size:n,map:m,transparent:!0,depthWrite:!1}),b=0;b<o;b++){var f=new E.Vector3(E.Math.randFloatSpread(i),E.Math.randFloatSpread(a),E.Math.randFloatSpread(i));f.velocity=new E.Vector3(0,-Math.random()*r*100,0),h.vertices.push(f)}var v=this.points=new E.Points(h,p);v.position.y=-a/2,v.sortParticles=!0,this.add(v)};x.prototype=Object.create(E.Group.prototype),x.prototype.constructor=x,x.prototype.update=function(){for(var e=this.pointCount;e--;){var t=this.points.geometry.vertices[e];t.y<-this.rangeV/2&&(t.y=this.rangeV/2,t.velocity.y=0),t.velocity.y-=Math.random()*this.speed,t.add(t.velocity)}this.points.geometry.verticesNeedUpdate=!0},x.prototype.updateConstant=function(){for(var e=this.pointCount;e--;){var t=this.points.geometry.vertices[e];t.y<-this.rangeV/2&&(t.y=this.rangeV/2),t.y-=this.speed}this.points.geometry.verticesNeedUpdate=!0};var C=new E.Raycaster,j=new E.Vector2;function R(e){j.x=e.clientX/window.innerWidth*2-1,j.y=-e.clientY/window.innerHeight*2+1,u.x=1*-j.x,u.z=3+1*j.y,C.setFromCamera(j,l),C.ray.intersectPlane(d,c),p.position.copy(c)}function S(e){var t=e.changedTouches,n=Object(w.a)(t,1)[0],o=n.clientX,a=n.clientY;j.x=o/window.innerWidth*2-1,j.y=-a/window.innerHeight*2+1,u.x=1*-j.x,u.z=3+1*j.y,C.setFromCamera(j,l),C.ray.intersectPlane(d,c)}function V(){l.aspect=window.innerWidth/window.innerHeight,l.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)}var N=new E.Clock,L=0,H=E.Math.degToRad(3);function A(){requestAnimationFrame(A),o.update(),L+=N.getDelta(),a.rotation.y=Math.cos(8*L)*H,i.update(),r.update(),s.updateConstant(),k(a.position,"y",c.y),k(a.position,"x",c.x),k(l.position,"x",u.x),k(l.position,"z",u.z),k(s,"speed",s.speedTarget),m.render(h,l)}function k(e,t,n){e&&e[t]!==n&&(e[t]+=.1*(n-e[t]),Math.abs(n-e[t])<.01&&(e[t]=n))}var z=n(6),U=n.n(z);var D=function(){return Object(b.useEffect)((function(){T(),A()}),[]),f.a.createElement("article",{className:"mobile-page-prompt"},f.a.createElement("div",{className:"mobile-page-prompt_head"},f.a.createElement("img",{src:U.a,alt:"avatar"}),f.a.createElement("div",{className:"mobile-page-prompt_head--tip"},f.a.createElement("div",null,"\u8bf7\u5728pc\u7aef\u6253\u5f00\u94fe\u63a5"),f.a.createElement("div",null,"\u8ba9\u6211\u4eec\u51fa\u53d1\u5427~"))),f.a.createElement("div",{id:"container"}))};var F=function(){return f.a.createElement("article",{className:"mobile-stage"},f.a.createElement(D,null))},I=n(5);g.a.render(f.a.createElement(f.a.StrictMode,null,f.a.createElement(F,null)),document.getElementById("mobile")),I.a()}},[[81,4,0]]]);
//# sourceMappingURL=mobile.0b01bbca.chunk.js.map