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
        lat: 30.241628,
        lng: 120.138121,
        zoom: 13
      },
      enableKeyboard: true
    }
  }

}
