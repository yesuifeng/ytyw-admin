<!-- 司机管理 -->
<template>
  <div class="containers">
    <div id="container"></div>
  </div>
  <div id="toolControl">
    <div class="toolItem active" id="marker" title="点标记"></div>
    <div class="toolItem" id="polyline" title="折线"></div>
    <div class="toolItem" id="polygon" title="多边形"></div>
    <div class="toolItem" id="circle" title="圆形"></div>
    <div class="toolItem" id="rectangle" title="矩形"></div>
    <div class="toolItem" id="ellipse" title="椭圆"></div>
  </div>
</template>

<script setup lang="ts">
import { initTMap } from '@/utils/TMapUtils'
import { onMounted } from 'vue'
var activeType = 'marker',
  editor,
  tMap
onMounted(() => {
  initTMap().then((map) => {
    tMap = new map.Map('container', {
      zoom: 15, //设置地图缩放级别
      viewMode: '3D',
      baseMap: {
        // 设置卫星地图
        type: 'satellite'
      }
    })

    // tMap.addListener('mousemove', function (event) {
    //   var latLng = event.latLng
    //   console.log('latLng: ', latLng)
    //   marker.setPositon(latLng)
    // })

    // 初始化几何图形及编辑器
    var marker = new TMap.MultiMarker({
      map: tMap
    })
    var polyline = new TMap.MultiPolyline({
      map: tMap
    })
    var polygon = new TMap.MultiPolygon({
      map: tMap
    })
    var circle = new TMap.MultiCircle({
      map: tMap
    })
    var rectangle = new TMap.MultiRectangle({
      map: tMap
    })
    var ellipse = new TMap.MultiEllipse({
      map: tMap
    })
    editor = new TMap.tools.GeometryEditor({
      // TMap.tools.GeometryEditor 文档地址：https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor
      map: tMap, // 编辑器绑定的地图对象
      overlayList: [
        // 可编辑图层 文档地址：https://lbs.qq.com/webApi/javascriptGL/glDoc/glDocEditor#4
        {
          overlay: marker,
          id: 'marker'
        },
        {
          overlay: polyline,
          id: 'polyline'
        },
        {
          overlay: polygon,
          id: 'polygon'
        },
        {
          overlay: circle,
          id: 'circle'
        },
        {
          overlay: rectangle,
          id: 'rectangle'
        },
        {
          overlay: ellipse,
          id: 'ellipse'
        }
      ],
      actionMode: TMap.tools.constants.EDITOR_ACTION.DRAW, // 编辑器的工作模式
      activeOverlayId: 'marker', // 激活图层
      snappable: true // 开启吸附
    })
    // 监听绘制结束事件，获取绘制几何图形
    editor.on('draw_complete', (geometry) => {
      // 判断当前处于编辑状态的图层id是否是overlayList中id为rectangle（矩形）图层
      if (editor.getActiveOverlay().id === 'rectangle') {
        // 获取矩形顶点坐标
        var id = geometry.id
        var geo = rectangle.geometries.filter(function (item) {
          return item.id === id
        })
        console.log('绘制的矩形定位的坐标：', geo[0].paths)
      }
    })
  })
  document.getElementById('toolControl').addEventListener('click', (e) => {
    var id = e.target.id
    if (id !== 'toolControl') {
      document.getElementById(activeType).className = 'toolItem'
      document.getElementById(id).className = 'toolItem active'
      activeType = id

      editor.setActiveOverlay(id)
    }
  })
})
</script>
<style lang="less" scoped>
#container {
  width: 100%;
  height: 100%;
}

#toolControl {
  position: absolute;
  top: 10px;
  left: 0px;
  right: 0px;
  margin: auto;
  width: 252px;
  z-index: 1001;
}

.toolItem {
  width: 40px;
  height: 40px;
  float: left;
  margin: 1px;
  padding: 4px;
  border-radius: 3px;
  background-size: 30px 30px;
  background-position: 4px 4px;
  background-repeat: no-repeat;
  box-shadow: 0 1px 2px 0 #e4e7ef;
  background-color: #ffffff;
  border: 1px solid #ffffff;
}

.toolItem:hover {
  border-color: #789cff;
}

.active {
  border-color: #d5dff2;
  background-color: #d5dff2;
  cursor: text;
}

#marker {
  background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/marker_editor.png');
}

#polyline {
  background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/polyline.png');
}

#polygon {
  background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/polygon.png');
}

#circle {
  background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/circle.png');
}

#rectangle {
  background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/rectangle.png');
}

#ellipse {
  background-image: url('https://mapapi.qq.com/web/lbs/javascriptGL/demo/img/ellipse.png');
}
</style>
