import { Component, OnInit } from '@angular/core';
declare var BMap: any;
declare var BMAP_ANIMATION_BOUNCE: any;
declare var BMAP_NAVIGATION_CONTROL_SMALL: any;
declare var BMAP_MAPTYPE_CONTROL_MAP: any;
declare var BMAP_ANCHOR_TOP_LEFT: any;
declare var BMapLib: any;

@Component({
  selector: 'app-baidu-map-for-js',
  templateUrl: './baidu-map-for-js.component.html',
  styleUrls: ['./baidu-map-for-js.component.less']
})
export class BaiduMapForJsComponent implements OnInit {
  map: any;
  point: any;
  scrollZoom: boolean = false;
  bDragg: boolean = false;
  overviewMap: any;
  openOverview: boolean = false;
  cityControl: any;
  showCityControl: boolean = false;
  marker: any;
  circle: any;
  showMarker: boolean = true;
  myDis: any;
  isCeju: boolean = false;

  isShowMsg: boolean = false;
  msgText: string = '';
  constructor() { }

  ngOnInit() {
    this.map = new BMap.Map("map-container");
    // 创建地图实例
    this.point = new BMap.Point(121.5097199, 31.2425584);
    // 初始化地图，设置中心点坐标和地图级别
    this.map.centerAndZoom(this.point, 15);

    this.addNavigationControl();
    //map.addControl(new BMap.ScaleControl());
    this.addMapGeolotion();

    this.map.addControl(new BMap.MapTypeControl({type: BMAP_MAPTYPE_CONTROL_MAP}));
    this.addCityList();
    this.addMaker();
    this.addInfoWindow();
  }

  addNavigationControl() {
    let opts = {type: BMAP_NAVIGATION_CONTROL_SMALL,enableGeolocation: true};
    this.map.addControl(new BMap.NavigationControl(opts));
  }

  addMapGeolotion() {
    let geolocationControl = new BMap.GeolocationControl({offset: new BMap.Size(10, 60)});
    geolocationControl.addEventListener("locationSuccess", (e) => {
      // 定位成功事件
      this.msgText = '';
      this.msgText += e.addressComponent.province;
      this.msgText += e.addressComponent.city;
      this.msgText += e.addressComponent.district;
      this.msgText += e.addressComponent.street;
      this.msgText += e.addressComponent.streetNumber;
      this.isShowMsg = true;
    });
    geolocationControl.addEventListener("locationError",(e) => {
      // 定位失败事件
      this.msgText = e.message;
      this.isShowMsg = true;
    });
    this.map.addControl(geolocationControl);
  }

  addCityList() {
    if(this.showCityControl) {
      let size = new BMap.Size(70, 10);
      this.cityControl = new BMap.CityListControl({
        anchor: BMAP_ANCHOR_TOP_LEFT,
        offset: size,
      });
      this.map.addControl(this.cityControl);
    }
  }

  addMaker() {
    this.circle = new BMap.Circle(this.point,500,{strokeColor:"blue", strokeWeight:2, strokeOpacity:0.3}); //创建圆
    this.map.addOverlay(this.circle);
    this.marker = new BMap.Marker(this.point);        // 创建标注
    this.map.addOverlay(this.marker);                     // 将标注添加到地图中
    this.marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
  }

  addInfoWindow() {
    var opts = {
      width : 150,     // 信息窗口宽度
      height: 80,     // 信息窗口高度
      title : "陆家嘴"  // 信息窗口标题
      //enableMessage:true,//设置允许信息窗发送短息
      //message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
    };
    var infoWindow = new BMap.InfoWindow("上海金融中心！！", opts);  // 创建信息窗口对象
    this.marker.addEventListener("click", () => {
      this.map.openInfoWindow(infoWindow,this.point); //开启信息窗口
    });
  }

  scrollWheelZoom() {
    this.scrollZoom = !this.scrollZoom;
    if(this.scrollZoom) {
      this.map.enableScrollWheelZoom();
    } else {
      this.map.disableScrollWheelZoom();
    }
  }

  dragg() {
    this.bDragg = !this.bDragg;
    if(this.bDragg) {
      this.map.enableDragging();
    } else {
      this.map.disableDragging();
    }
  }

  overview() {
    this.openOverview = !this.openOverview;
    this.map.removeControl(this.overviewMap);
    setTimeout(() => {
      this.overviewMap = new BMap.OverviewMapControl({isOpen:this.openOverview });
      this.map.addControl(this.overviewMap);
    },100);
  }

  cityList() {
    this.showCityControl = !this.showCityControl;
    if(this.showCityControl) {
      this.addCityList();
    } else {
      this.map.removeControl(this.cityControl);
    }
  }

  showLocMarker() {
    this.showMarker = !this.showMarker;
    if(this.showMarker) {
      this.circle.show();
      this.marker.show();
    } else {
      this.circle.hide();
      this.marker.hide();
    }
  }

  ceju() {
    if(!this.myDis) {
      this.myDis = new BMapLib.DistanceTool(this.map);
    }

    this.isCeju = !this.isCeju;
    if(this.isCeju) {
      this.map.addEventListener("load",() => {
        this.myDis.open();  //开启鼠标测距
      });
    } else {
      this.map.addEventListener("load",() => {
        this.myDis.close();  //关闭鼠标测距大
      });
    }
  }
}
