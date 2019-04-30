import { Component, OnInit } from '@angular/core';
declare var BMap: any;
declare var BMAP_ANIMATION_BOUNCE: any;

@Component({
  selector: 'app-baidu-map-for-js',
  templateUrl: './baidu-map-for-js.component.html',
  styleUrls: ['./baidu-map-for-js.component.less']
})
export class BaiduMapForJsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var map = new BMap.Map("map-container");
    // 创建地图实例
    var point = new BMap.Point(121.5097199, 31.2425584);
    // 创建点坐标
    map.centerAndZoom(point, 15);
    // 初始化地图，设置中心点坐标和地图级别
    map.addControl(new BMap.NavigationControl());
    //map.addControl(new BMap.ScaleControl());
    map.addControl(new BMap.OverviewMapControl());
    map.addControl(new BMap.MapTypeControl());
    map.addControl(new BMap.GeolocationControl({offset: new BMap.Size(10, 60)}));
    var marker = new BMap.Marker(point);        // 创建标注
    map.addOverlay(marker);                     // 将标注添加到地图中
    marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
    var circle = new BMap.Circle(point,500,{strokeColor:"blue", strokeWeight:2, strokeOpacity:0.3}); //创建圆
    map.addOverlay(circle);
  }

}
