(this["webpackJsonpr3f-examples"]=this["webpackJsonpr3f-examples"]||[]).push([[0],{55:function(e,t,r){},62:function(e,t,r){"use strict";r.r(t);var n=r(2),c=r(1),o=r.n(c),a=r(45),i=r.n(a),s=(r(55),r(24)),j=r(12),b=r(3),l=r(6),u=r(15),h=r(4),O=r(5),d=r(0),m=r(21),x=function(e){Object(h.a)(r,e);var t=Object(O.a)(r);function r(){var e;Object(b.a)(this,r);for(var n=arguments.length,o=new Array(n),a=0;a<n;a++)o[a]=arguments[a];return(e=t.call.apply(t,[this].concat(o))).ref=Object(c.createRef)(),e.animate=function(){var t=Object(u.a)(e),r=t.animate,n=t.camera,c=t.exampleObject,o=t.renderer,a=t.scene;requestAnimationFrame(r),c.rotation.x+=.01,c.rotation.y+=.011,o.render(a,n)},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fov,r=e.near,n=e.far,c=e.color;this.scene=new d.Scene,this.camera=new d.PerspectiveCamera(t,window.innerWidth/window.innerHeight,r,n),this.renderer=new d.WebGLRenderer,this.renderer.setSize(window.innerWidth,window.innerHeight),this.geometry=new d.TorusKnotGeometry,this.material=new d.MeshBasicMaterial({color:c}),this.exampleObject=new d.Mesh(this.geometry,this.material),this.scene.add(this.exampleObject),this.controls=new m.a(this.camera,this.renderer.domElement),this.scene.add(new d.AxesHelper(2)),this.camera.position.z=5,this.ref.current.appendChild(this.renderer.domElement),this.animate()}},{key:"componentWillUnmount",value:function(){this.controls.dispose(),this.renderer.dispose()}},{key:"render",value:function(){return Object(n.jsx)("div",{ref:this.ref})}}]),r}(c.Component);x.defaultProps={fov:75,near:.1,far:1e3,color:65280};var p=r(10);function f(e){var t=e.color,r=void 0===t?65280:t,o=Object(c.useRef)();Object(p.f)((function(){o.current.rotation.x+=.01,o.current.rotation.y+=.011}));var a=Object(p.h)(),i=a.camera,s=a.gl.domElement;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("orbitControls",{args:[i,s]}),Object(n.jsxs)("mesh",{ref:o,children:[Object(n.jsx)("torusKnotGeometry",{attach:"geometry"}),Object(n.jsx)("meshBasicMaterial",{attach:"material",color:r})]}),Object(n.jsx)("axesHelper",{args:[2]})]})}function v(e){var t=e.fov,r=void 0===t?75:t,c=e.near,o=void 0===c?.1:c,a=e.far,i=void 0===a?1e3:a,s=e.cameraPos,j=void 0===s?[0,0,5]:s;return Object(n.jsxs)(p.a,{style:{height:"100vh"},camera:{fov:r,near:o,far:i,position:j},children:[Object(n.jsx)("color",{attach:"background",args:[0]}),Object(n.jsx)(f,{})]})}Object(p.d)({OrbitControls:m.a});var g=r(9),w=r(11),y=r(36);function C(e){var t=Object(c.useRef)(),r=Object(c.useState)(!1),o=Object(w.a)(r,2),a=o[0],i=o[1],s=Object(c.useState)(!1),j=Object(w.a)(s,2),b=j[0],l=j[1];Object(p.f)((function(){t.current.rotation.x=t.current.rotation.y+=.01}));var u=Object(y.b)({color:a?"red":"blue",scale:b?[1.5,1.5,1.5]:[1,1,1]}),h=u.color,O=u.scale;return Object(n.jsxs)(y.a.mesh,Object(g.a)(Object(g.a)({},e),{},{scale:O,ref:t,onClick:function(){return l(!b)},onPointerOver:function(){return i(!0)},onPointerOut:function(){return i(!1)},children:[Object(n.jsx)("boxBufferGeometry",{args:[1,1,1]}),Object(n.jsx)(y.a.meshPhongMaterial,{color:h})]}))}function P(){var e=Object(p.h)(),t=e.camera,r=e.gl.domElement;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("orbitControls",{args:[t,r]}),Object(n.jsx)("ambientLight",{}),Object(n.jsx)("spotLight",{position:[10,10,0]}),Object(n.jsx)("pointLight",{position:[10,10,10]}),[-2,0,2].map((function(e){return[-2,0,2].map((function(t){return Object(n.jsx)(C,{position:[e,0,t]},"".concat(e,"-").concat(t))}))}))]})}function S(e){var t=e.fov,r=void 0===t?75:t,c=e.near,o=void 0===c?.1:c,a=e.far,i=void 0===a?1e3:a,s=e.cameraPos,j=void 0===s?[0,0,5]:s;return Object(n.jsxs)(p.a,{style:{height:"100vh"},camera:{fov:r,near:o,far:i,position:j},children:[Object(n.jsx)("color",{attach:"background",args:[0]}),Object(n.jsx)(P,{})]})}Object(p.d)({OrbitControls:m.a});var M=r(13),A=r.p+"static/media/sprite.56b67e27.png",z=r(49),F=r.n(z);function E(){var e=Object(c.useState)((function(){return new F.a})),t=Object(w.a)(e,1)[0];return Object(c.useEffect)((function(){return t.showPanel(0),document.body.appendChild(t.dom),function(){return document.body.removeChild(t.dom)}}),[t]),Object(p.f)((function(e){t.begin(),e.gl.render(e.scene,e.camera),t.end()}),1)}function V(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return e+t*Object(M.sum)(Object(M.times)(r,(function(){return Object(M.random)(-.5,.5,!0)})))/r}function k(e){var t=e.pointCount,r=void 0===t?4e3:t,o=e.maxSpeed,a=void 0===o?2:o,i=e.maxHeight,s=void 0===i?400:i,j=e.wide,b=void 0===j?10:j,l=Object(p.h)(),u=l.camera,h=l.gl.domElement,O=Object(p.g)(d.TextureLoader,A),m=Object(c.useMemo)((function(){return[new Float32Array(Object(M.times)(3*r,Object(M.constant)(0))),new Float32Array(Object(M.times)(3*r,Object(M.constant)(1))),new Float32Array(Object(M.times)(r,Object(M.constant)(.5))),new Float32Array(Object(M.times)(r,Object(M.constant)(1))),Object(M.times)(r,(function(){return{x:V(0,b),y:Object(M.random)(1,a,!0),z:V(0,b)}})),Object(M.times)(r,(function(){return Object(M.random)(.1,s,!0)}))]}),[r,a,s,b]),x=Object(w.a)(m,6),f=x[0],v=x[1],g=x[2],y=x[3],C=x[4],P=x[5],S=Object(c.useRef)();return Object(p.f)((function(){for(var e=new d.Color,t=0;t<r;t++)f[3*t+0]+=C[t].x,f[3*t+1]+=C[t].y,f[3*t+2]+=C[t].z,e.setHSL(Object(M.random)(0,.1),1,.5+.5*Math.pow(1-f[3*t+1]/P[t],2)),e.toArray(v,3*t),f[3*t+1]>P[t]&&(f[3*t+0]=f[3*t+1]=f[3*t+2]=0),g[t]=Math.pow(1-f[3*t+1]/P[t],2),y[t]=1+40*Math.pow(f[3*t+1]/P[t],3);Object(M.forIn)(S.current.attributes,(function(e){return e.needsUpdate=!0})),S.current.computeBoundingSphere()})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("orbitControls",{args:[u,h]}),Object(n.jsxs)("points",{children:[Object(n.jsxs)("bufferGeometry",{ref:S,attach:"geometry",children:[Object(n.jsx)("bufferAttribute",{attachObject:["attributes","position"],array:f,itemSize:3,count:r}),Object(n.jsx)("bufferAttribute",{attachObject:["attributes","customColor"],array:v,itemSize:3,count:r}),Object(n.jsx)("bufferAttribute",{attachObject:["attributes","alpha"],array:g,itemSize:1,count:r}),Object(n.jsx)("bufferAttribute",{attachObject:["attributes","size"],array:y,itemSize:1,count:r})]}),Object(n.jsx)("shaderMaterial",{transparent:!0,attach:"material",uniforms:{pointTexture:{value:O}},vertexShader:"\nattribute float alpha;\nattribute float size;\nattribute vec3 customColor;\nvarying vec3 vColor;\nvarying float vAlpha;\nvoid main() {\n    vColor = customColor;\n    vAlpha = alpha;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_PointSize = size;\n    gl_Position = projectionMatrix * mvPosition;\n}\n",fragmentShader:"\nuniform sampler2D pointTexture;\nvarying float vAlpha;\nvarying vec3 vColor;\nvoid main() {\n    gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);\n}\n",blending:d.AdditiveBlending,depthTest:!1})]})]})}function B(e){var t=e.sceneSize,r=void 0===t?200:t,o=e.cameraPos,a=void 0===o?[0,0,5]:o;return Object(n.jsxs)(p.a,{orthographic:!0,style:{height:"100vh"},camera:{left:-r,right:r,top:r,bottom:-r,near:-r,far:r,position:a},children:[Object(n.jsx)(E,{}),Object(n.jsxs)(c.Suspense,{fallback:null,children:[Object(n.jsx)("color",{attach:"background",args:[0]}),Object(n.jsx)("group",{position:[0,-300,0],children:Object(n.jsx)(k,{})})]})]})}Object(p.d)({OrbitControls:m.a});var L=r(39),G=r.p+"static/media/router.d4d02fe9.glb",H=r.p+"static/media/rack.ebc2ecbb.glb";function T(e){e.color,Object(c.useRef)();var t=Object(p.g)(L.a,G),r=Object(p.g)(L.a,H),o=Object(p.h)(),a=o.camera,i=o.gl.domElement,s=Object(c.useMemo)((function(){return[new d.CubicBezierCurve3(new d.Vector3(-3.1,.1,-.7),new d.Vector3(-3,0,-3),new d.Vector3(-.4,3,-3),new d.Vector3(-.4,4,-2)),new d.CubicBezierCurve3(new d.Vector3(-3.3,.1,-.7),new d.Vector3(-3,0,-3),new d.Vector3(-1,4.5,-3),new d.Vector3(-1,4.5,-2)),new d.CubicBezierCurve3(new d.Vector3(-3.5,.1,-.7),new d.Vector3(-3.5,0,-3),new d.Vector3(-1,3.2,-3),new d.Vector3(-1,3.2,-2))]}),[]),j=Object(w.a)(s,3),b=j[0],l=j[1],u=j[2];return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("orbitControls",{args:[a,i]}),Object(n.jsx)("ambientLight",{intensity:1}),Object(n.jsx)("spotLight",{position:[20,20,20]}),Object(n.jsx)("group",{scale:[10,10,10],position:[-3,-.8,0],children:Object(n.jsx)("primitive",{object:t.scene})}),Object(n.jsx)("group",{scale:[3,3,3],rotation:[0,Math.PI,0],position:[0,0,-2],children:Object(n.jsx)("primitive",{object:r.scene})}),Object(n.jsxs)("mesh",{children:[Object(n.jsx)("tubeGeometry",{args:[b,64,.02]}),Object(n.jsx)("meshPhongMaterial",{color:"red"})]}),Object(n.jsxs)("mesh",{children:[Object(n.jsx)("tubeGeometry",{args:[l,64,.02]}),Object(n.jsx)("meshPhongMaterial",{color:"green"})]}),Object(n.jsxs)("mesh",{children:[Object(n.jsx)("tubeGeometry",{args:[u,64,.02]}),Object(n.jsx)("meshPhongMaterial",{color:"yellow"})]}),Object(n.jsx)("gridHelper",{}),Object(n.jsx)("axesHelper",{args:[2]})]})}function R(e){var t=e.fov,r=void 0===t?75:t,o=e.near,a=void 0===o?.1:o,i=e.far,s=void 0===i?1e3:i,j=e.cameraPos,b=void 0===j?[0,0,-5]:j;return Object(n.jsx)(p.a,{style:{height:"100vh"},camera:{fov:r,near:a,far:s,position:b},children:Object(n.jsx)(c.Suspense,{fallback:null,children:Object(n.jsx)(T,{})})})}Object(p.d)({OrbitControls:m.a});var D=function(){return Object(n.jsx)(s.a,{children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/example01",children:Object(n.jsx)(x,{})}),Object(n.jsx)(j.a,{path:"/example02",children:Object(n.jsx)(v,{})}),Object(n.jsx)(j.a,{path:"/example03",children:Object(n.jsx)(S,{})}),Object(n.jsx)(j.a,{path:"/example04",children:Object(n.jsx)(B,{})}),Object(n.jsx)(j.a,{path:"/example05",children:Object(n.jsx)(R,{})}),Object(n.jsx)(j.a,{path:"/",children:Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"/example01",children:"Example #1"})}),Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"/example02",children:"Example #2"})}),Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"/example03",children:"Example #3"})}),Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"/example04",children:"Example #4"})}),Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"/example05",children:"Example #5"})})]})})})]})})},I=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,63)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;r(e),n(e),c(e),o(e),a(e)}))};i.a.render(Object(n.jsx)(o.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root")),I()}},[[62,1,2]]]);
//# sourceMappingURL=main.3758f0da.chunk.js.map