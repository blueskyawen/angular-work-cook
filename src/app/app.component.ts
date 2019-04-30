import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { MapOptions } from 'angular2-baidu-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  options: MapOptions;
  constructor() {
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
