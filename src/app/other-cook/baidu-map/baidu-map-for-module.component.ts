import { Component, OnInit } from '@angular/core';
import {
  ControlAnchor,
  MapOptions,
  MapTypeControlOptions,
  MapTypeControlType,
  NavigationControlOptions,
  NavigationControlType,
  OverviewMapControlOptions,
  ScaleControlOptions,
  BNavigationControl,
  MapTypeEnum
} from 'angular2-baidu-map'

@Component({
  selector: 'app-baidu-map-for-module',
  templateUrl: './baidu-map-for-module.component.html',
  styleUrls: ['./baidu-map-for-module.component.less']
})
export class BaiduMapForModuleComponent implements OnInit {
  options: MapOptions;
  public controlOpts: NavigationControlOptions
  public overviewmapOpts: OverviewMapControlOptions
  public scaleOpts: ScaleControlOptions
  public mapTypeOpts: MapTypeControlOptions
  private BMAP_NAVIGATION_CONTROL_SMALL: any;

  constructor() { }

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
  }

  addNavigationControl() {
    this.controlOpts = {
      anchor: ControlAnchor.BMAP_ANCHOR_TOP_LEFT,
      type: NavigationControlType.BMAP_NAVIGATION_CONTROL_SMALL,
      enableGeolocation: true
    };
  }

  scrollWheelZoom() {

  }

  dragg() {

  }

  overview() {

  }

  cityList() {

  }

  showLocMarker() {
    
  }
}
