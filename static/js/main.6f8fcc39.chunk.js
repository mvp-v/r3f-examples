(this["webpackJsonpr3f-examples"]=this["webpackJsonpr3f-examples"]||[]).push([[0],{54:function(e,t,r){},61:function(e,t,r){"use strict";r.r(t);var n=r(2),a=r(0),c=r.n(a),o=r(44),i=r.n(o),s=(r(54),r(25)),j=r(12),b=r(1),l=r(6),u=r(15),h=r(4),d=r(5),O=r(3),m=r(21),f=function(e){Object(h.a)(r,e);var t=Object(d.a)(r);function r(){var e;Object(b.a)(this,r);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).ref=Object(a.createRef)(),e.animate=function(){var t=Object(u.a)(e),r=t.animate,n=t.camera,a=t.exampleObject,c=t.renderer,o=t.scene;requestAnimationFrame(r),a.rotation.x+=.01,a.rotation.y+=.011,c.render(o,n)},e}return Object(l.a)(r,[{key:"componentDidMount",value:function(){var e=this.props,t=e.fov,r=e.near,n=e.far,a=e.color;this.scene=new O.Scene,this.camera=new O.PerspectiveCamera(t,window.innerWidth/window.innerHeight,r,n),this.renderer=new O.WebGLRenderer,this.renderer.setSize(window.innerWidth,window.innerHeight),this.geometry=new O.TorusKnotGeometry,this.material=new O.MeshBasicMaterial({color:a}),this.exampleObject=new O.Mesh(this.geometry,this.material),this.scene.add(this.exampleObject),this.controls=new m.a(this.camera,this.renderer.domElement),this.scene.add(new O.AxesHelper(2)),this.camera.position.z=5,this.ref.current.appendChild(this.renderer.domElement),this.animate()}},{key:"componentWillUnmount",value:function(){this.controls.dispose(),this.renderer.dispose()}},{key:"render",value:function(){return Object(n.jsx)("div",{ref:this.ref})}}]),r}(a.Component);f.defaultProps={fov:75,near:.1,far:1e3,color:65280};var x=r(10);function p(e){var t=e.color,r=void 0===t?65280:t,c=Object(a.useRef)();Object(x.f)((function(){c.current.rotation.x+=.01,c.current.rotation.y+=.011}));var o=Object(x.h)(),i=o.camera,s=o.gl.domElement;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("orbitControls",{args:[i,s]}),Object(n.jsxs)("mesh",{ref:c,children:[Object(n.jsx)("torusKnotGeometry",{attach:"geometry"}),Object(n.jsx)("meshBasicMaterial",{attach:"material",color:r})]}),Object(n.jsx)("axesHelper",{args:[2]})]})}function v(e){var t=e.fov,r=void 0===t?75:t,a=e.near,c=void 0===a?.1:a,o=e.far,i=void 0===o?1e3:o,s=e.cameraPos,j=void 0===s?[0,0,5]:s;return Object(n.jsxs)(x.a,{style:{height:"100vh"},camera:{fov:r,near:c,far:i,position:j},children:[Object(n.jsx)("color",{attach:"background",args:[0]}),Object(n.jsx)(p,{})]})}Object(x.d)({OrbitControls:m.a});var g=r(9),y=r(11),w=r(36);function C(e){var t=Object(a.useRef)(),r=Object(a.useState)(!1),c=Object(y.a)(r,2),o=c[0],i=c[1],s=Object(a.useState)(!1),j=Object(y.a)(s,2),b=j[0],l=j[1];Object(x.f)((function(){t.current.rotation.x=t.current.rotation.y+=.01}));var u=Object(w.b)({color:o?"red":"blue",scale:b?[1.5,1.5,1.5]:[1,1,1]}),h=u.color,d=u.scale;return Object(n.jsxs)(w.a.mesh,Object(g.a)(Object(g.a)({},e),{},{scale:d,ref:t,onClick:function(){return l(!b)},onPointerOver:function(){return i(!0)},onPointerOut:function(){return i(!1)},children:[Object(n.jsx)("boxBufferGeometry",{args:[1,1,1]}),Object(n.jsx)(w.a.meshPhongMaterial,{color:h})]}))}function S(){var e=Object(x.h)(),t=e.camera,r=e.gl.domElement;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("orbitControls",{args:[t,r]}),Object(n.jsx)("ambientLight",{}),Object(n.jsx)("spotLight",{position:[10,10,0]}),Object(n.jsx)("pointLight",{position:[10,10,10]}),[-2,0,2].map((function(e){return[-2,0,2].map((function(t){return Object(n.jsx)(C,{position:[e,0,t]},"".concat(e,"-").concat(t))}))}))]})}function A(e){var t=e.fov,r=void 0===t?75:t,a=e.near,c=void 0===a?.1:a,o=e.far,i=void 0===o?1e3:o,s=e.cameraPos,j=void 0===s?[0,0,5]:s;return Object(n.jsxs)(x.a,{style:{height:"100vh"},camera:{fov:r,near:c,far:i,position:j},children:[Object(n.jsx)("color",{attach:"background",args:[0]}),Object(n.jsx)(S,{})]})}Object(x.d)({OrbitControls:m.a});var P=r(13),M=r.p+"static/media/sprite.56b67e27.png",z=r(48),F=r.n(z);function E(){var e=Object(a.useState)((function(){return new F.a})),t=Object(y.a)(e,1)[0];return Object(a.useEffect)((function(){return t.showPanel(0),document.body.appendChild(t.dom),function(){return document.body.removeChild(t.dom)}}),[t]),Object(x.f)((function(e){t.begin(),e.gl.render(e.scene,e.camera),t.end()}),1)}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:100;return e+t*Object(P.sum)(Object(P.times)(r,(function(){return Object(P.random)(-.5,.5,!0)})))/r}function L(e){var t=e.pointCount,r=void 0===t?4e3:t,c=e.maxSpeed,o=void 0===c?2:c,i=e.maxHeight,s=void 0===i?400:i,j=e.wide,b=void 0===j?10:j,l=Object(x.h)(),u=l.camera,h=l.gl.domElement,d=Object(x.g)(O.TextureLoader,M),m=Object(a.useMemo)((function(){return[new Float32Array(Object(P.times)(3*r,Object(P.constant)(0))),new Float32Array(Object(P.times)(3*r,Object(P.constant)(1))),new Float32Array(Object(P.times)(r,Object(P.constant)(.5))),new Float32Array(Object(P.times)(r,Object(P.constant)(1))),Object(P.times)(r,(function(){return{x:k(0,b),y:Object(P.random)(1,o,!0),z:k(0,b)}})),Object(P.times)(r,(function(){return Object(P.random)(.1,s,!0)}))]}),[r,o,s,b]),f=Object(y.a)(m,6),p=f[0],v=f[1],g=f[2],w=f[3],C=f[4],S=f[5],A=Object(a.useRef)();return Object(x.f)((function(){for(var e=new O.Color,t=0;t<r;t++)p[3*t+0]+=C[t].x,p[3*t+1]+=C[t].y,p[3*t+2]+=C[t].z,e.setHSL(Object(P.random)(0,.1),1,.5+.5*Math.pow(1-p[3*t+1]/S[t],2)),e.toArray(v,3*t),p[3*t+1]>S[t]&&(p[3*t+0]=p[3*t+1]=p[3*t+2]=0),g[t]=Math.pow(1-p[3*t+1]/S[t],2),w[t]=1+40*Math.pow(p[3*t+1]/S[t],3);Object(P.forIn)(A.current.attributes,(function(e){return e.needsUpdate=!0})),A.current.computeBoundingSphere()})),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("orbitControls",{args:[u,h]}),Object(n.jsxs)("points",{children:[Object(n.jsxs)("bufferGeometry",{ref:A,attach:"geometry",children:[Object(n.jsx)("bufferAttribute",{attachObject:["attributes","position"],array:p,itemSize:3,count:r}),Object(n.jsx)("bufferAttribute",{attachObject:["attributes","customColor"],array:v,itemSize:3,count:r}),Object(n.jsx)("bufferAttribute",{attachObject:["attributes","alpha"],array:g,itemSize:1,count:r}),Object(n.jsx)("bufferAttribute",{attachObject:["attributes","size"],array:w,itemSize:1,count:r})]}),Object(n.jsx)("shaderMaterial",{transparent:!0,attach:"material",uniforms:{pointTexture:{value:d}},vertexShader:"\nattribute float alpha;\nattribute float size;\nattribute vec3 customColor;\nvarying vec3 vColor;\nvarying float vAlpha;\nvoid main() {\n    vColor = customColor;\n    vAlpha = alpha;\n    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n    gl_PointSize = size;\n    gl_Position = projectionMatrix * mvPosition;\n}\n",fragmentShader:"\nuniform sampler2D pointTexture;\nvarying float vAlpha;\nvarying vec3 vColor;\nvoid main() {\n    gl_FragColor = vec4(vColor, vAlpha) * texture2D(pointTexture, gl_PointCoord);\n}\n",blending:O.AdditiveBlending,depthTest:!1})]})]})}function T(e){var t=e.sceneSize,r=void 0===t?200:t,c=e.cameraPos,o=void 0===c?[0,0,5]:c;return Object(n.jsxs)(x.a,{orthographic:!0,style:{height:"100vh"},camera:{left:-r,right:r,top:r,bottom:-r,near:-r,far:r,position:o},children:[Object(n.jsx)(E,{}),Object(n.jsxs)(a.Suspense,{fallback:null,children:[Object(n.jsx)("color",{attach:"background",args:[0]}),Object(n.jsx)("group",{position:[0,-300,0],children:Object(n.jsx)(L,{})})]})]})}Object(x.d)({OrbitControls:m.a});var B=function(){return Object(n.jsx)(s.a,{children:Object(n.jsxs)(j.c,{children:[Object(n.jsx)(j.a,{path:"/example01",children:Object(n.jsx)(f,{})}),Object(n.jsx)(j.a,{path:"/example02",children:Object(n.jsx)(v,{})}),Object(n.jsx)(j.a,{path:"/example03",children:Object(n.jsx)(A,{})}),Object(n.jsx)(j.a,{path:"/example04",children:Object(n.jsx)(T,{})}),Object(n.jsx)(j.a,{path:"/",children:Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"/example01",children:"Example #1"})}),Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"/example02",children:"Example #2"})}),Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"/example03",children:"Example #3"})}),Object(n.jsx)("li",{children:Object(n.jsx)(s.b,{to:"/example04",children:"Example #4"})})]})})})]})})},H=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,62)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),c(e),o(e)}))};i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(B,{})}),document.getElementById("root")),H()}},[[61,1,2]]]);
//# sourceMappingURL=main.6f8fcc39.chunk.js.map