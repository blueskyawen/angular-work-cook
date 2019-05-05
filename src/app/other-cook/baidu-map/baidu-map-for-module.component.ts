import { Component, OnInit, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import {
  ControlAnchor, MapOptions, MapTypeControlOptions, MapTypeControlType,
  NavigationControlOptions, NavigationControlType, OverviewMapControlOptions,
  ScaleControlOptions, BNavigationControl, BOverviewMapControl, MarkerOptions, Animation,
  MapTypeEnum, GeolocationControlOptions, CircleOptions, Point, BCircle, BMarker, BMapInstance
} from 'angular2-baidu-map'

@Component({
  selector: 'app-baidu-map-for-module',
  templateUrl: './baidu-map-for-module.component.html',
  styleUrls: ['./baidu-map-for-module.component.less']
})
export class BaiduMapForModuleComponent implements OnInit {
  options: MapOptions;
  public controlOpts: NavigationControlOptions;
  public overviewmapOpts: OverviewMapControlOptions;
  public scaleOpts: ScaleControlOptions;
  public mapTypeOpts: MapTypeControlOptions;
  public geolacOpts: GeolocationControlOptions;
  private BMAP_NAVIGATION_CONTROL_SMALL: any;
  showFlagss: any = {
    overview: true,
    scrollZoom: false,
    bDragg: true,
    maker: true
  };

  mapInstance: any;
  overviewControlInstance: any;

  @ViewChild('btn-over')
      BtnOverRef: ElementRef;

  public center: Point;
  public circleOptions: CircleOptions;
  circleIntance: any;

  public markers: Array<{ point: Point; options?: MarkerOptions }>;
  makerInstances: any[] = [];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
    this.options = {
      centerAndZoom: {
        lat: 30.241628,
        lng: 120.138121,
        zoom: 13
      },
      enableKeyboard: true
    };

    this.addNavigationControl();
    this.addMapTypes();
    this.addOverviewMap();
    this.addGeolocationControl();

    this.addCircle();
    this.addMarker();
  }

  addNavigationControl() {
    this.controlOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL,
      enableGeolocation: true
    };
  }

  addMapTypes() {
    this.mapTypeOpts = {
      type: MapTypeControlType.BMAP_MAPTYPE_CONTROL_MAP,
      mapTypes: [MapTypeEnum.BMAP_NORMAL_MAP, MapTypeEnum.BMAP_SATELLITE_MAP]
    }
  }

  addOverviewMap() {
    this.overviewmapOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_RIGHT,
      isOpen: this.showFlagss.overview
    }
  }

  addGeolocationControl() {
    this.geolacOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_BOTTOM_LEFT,
      offset: {height: 60, width: 10}
    }
  }

  addCircle() {
    this.center = {
      lat: 30.241628,
      lng: 120.138121
    };

    this.circleOptions = {
      strokeColor: 'blue',
      strokeWeight: 2,
      strokeOpacity:0.3
    };
  }

  addMarker() {
    this.markers = [
      {
        point: {
          lat: 30.241628,
          lng: 120.138121
        }
      },
      {
        options: {
          icon: {
            imageUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1557657361&di=f925e5791443e456b4858dafe3f52765&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.touxiangdaquan.net%2Fuploads%2Fallimg%2Fc150625%2F14351SD1043Z-4E3a.jpg',
            size: {
              height: 80,
              width: 50
            },
            imageSize: {
              height: 80,
              width: 50
            },
            imageOffset: {
              height: 0,
              width: 0
            }
          }
        },
        point: {
          lat: 30.3006,
          lng: 120.200
        }
      }
    ]
  }

  circleLoaded(circle: BCircle) {
    this.circleIntance = circle;
    if(!this.showFlagss.maker) {
      this.circleIntance.hide();
    }
  }

  mapLoaded(emap: any) {
    this.mapInstance = emap;
  }

  scrollWheelZoom() {
    this.showFlagss.scrollZoom = !this.showFlagss.scrollZoom;
    if(this.showFlagss.scrollZoom) {
      this.mapInstance.enableScrollWheelZoom();
    } else {
      this.mapInstance.disableScrollWheelZoom();
    }
  }

  dragg() {
    this.showFlagss.bDragg = !this.showFlagss.bDragg;
    if(this.showFlagss.bDragg) {
      this.mapInstance.enableDragging();
    } else {
      this.mapInstance.disableDragging();
    }
  }

  overviewLoaded(eoverview: any) {
    this.overviewControlInstance = eoverview;
    this.overviewControlInstance.addEventListener("viewchanged", (e) => {
      this.showFlagss.overview = e.isOpen;
      console.log(this.showFlagss);
    });
  }

  overview() {
    this.overviewControlInstance.changeView();
  }

  showWindow({marker, map}: {marker: BMarker, map: BMapInstance }) {
    let opts = {
      width : 150,     // 信息窗口宽度
      height: 120,     // 信息窗口高度
      title : "西湖-花港观鱼"  // 信息窗口标题
    };
    map.openInfoWindow(
        new window.BMap.InfoWindow('在苏堤映波桥西北197米处，介于小南湖与西里湖间，范围约0.25公顷。以赏花、观鱼为景观主题，体验自然的勃勃生机。', opts),
        marker.getPosition()
    );
  }

  markerLoaded(marker: BMarker) {
    this.makerInstances.push(marker);
    this.makerInstances[0].setAnimation(Animation.BMAP_ANIMATION_BOUNCE);
  }

  showLocMarker() {
    this.showFlagss.maker = !this.showFlagss.maker;
    if(this.showFlagss.maker) {
      this.circleIntance.show();
      this.makerInstances[0].show();
    } else {
      this.circleIntance.hide();
      this.makerInstances[0].hide();
    }
  }
}
