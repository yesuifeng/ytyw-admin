import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{d as t,N as a,al as i}from"./index.fce40114.js";const l=i('<div class="containers" data-v-041fd800><div id="container" data-v-041fd800></div></div><div id="toolControl" data-v-041fd800><div class="toolItem active" id="marker" title="点标记" data-v-041fd800></div><div class="toolItem" id="polyline" title="折线" data-v-041fd800></div><div class="toolItem" id="polygon" title="多边形" data-v-041fd800></div><div class="toolItem" id="circle" title="圆形" data-v-041fd800></div><div class="toolItem" id="rectangle" title="矩形" data-v-041fd800></div><div class="toolItem" id="ellipse" title="椭圆" data-v-041fd800></div></div>',2);var o=e(t({setup(e){var t,i,o="marker";return a((()=>{new Promise((e=>{if(void 0!==window.TMap)return e(window.TMap),!0;window.onMapCallback=function(){e(window.TMap)};const t=document.createElement("script");t.setAttribute("type","text/javascript"),t.setAttribute("src","https://map.qq.com/api/gljs?v=1.exp&libraries=tools,service&key=UT7BZ-GOW3X-QF74M-TFKP5-L2453-4PBUD&callback=onMapCallback"),document.body.appendChild(t)})).then((e=>{i=new e.Map("container",{zoom:15,viewMode:"3D",baseMap:{type:"satellite"}});var a=new TMap.MultiMarker({map:i}),l=new TMap.MultiPolyline({map:i}),o=new TMap.MultiPolygon({map:i}),d=new TMap.MultiCircle({map:i}),r=new TMap.MultiRectangle({map:i}),n=new TMap.MultiEllipse({map:i});(t=new TMap.tools.GeometryEditor({map:i,overlayList:[{overlay:a,id:"marker"},{overlay:l,id:"polyline"},{overlay:o,id:"polygon"},{overlay:d,id:"circle"},{overlay:r,id:"rectangle"},{overlay:n,id:"ellipse"}],actionMode:TMap.tools.constants.EDITOR_ACTION.DRAW,activeOverlayId:"marker",snappable:!0})).on("draw_complete",(e=>{if("rectangle"===t.getActiveOverlay().id){var a=e.id;r.geometries.filter((function(e){return e.id===a}))}}))})),document.getElementById("toolControl").addEventListener("click",(e=>{var a=e.target.id;"toolControl"!==a&&(document.getElementById(o).className="toolItem",document.getElementById(a).className="toolItem active",o=a,t.setActiveOverlay(a))}))})),(e,t)=>l}}),[["__scopeId","data-v-041fd800"]]);export{o as default};
