import { Component, OnInit } from '@angular/core';
import { MapOptions } from 'angular2-baidu-map';

@Component({
  selector: 'app-baidu-map-for-module',
  templateUrl: './baidu-map-for-module.component.html',
  styleUrls: ['./baidu-map-for-module.component.less']
})
export class BaiduMapForModuleComponent implements OnInit {
  options: MapOptions;

  constructor() { }

  ngOnInit() {
    this.options = {
      centerAndZoom: {
        lat: 39.920116,
        lng: 116.403703,
        zoom: 16
      },
      enableKeyboard: true
    }
  }

}
