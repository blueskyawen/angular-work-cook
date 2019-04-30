import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { BaiduMapRoutingModule } from './baidu-map-routing.module';
import { BaiduMapForJsComponent } from './baidu-map-for-js.component';
import { BaiduMapForModuleComponent } from './baidu-map-for-module.component';
import { BaiduMapModule } from 'angular2-baidu-map';
@NgModule({
  declarations: [BaiduMapForJsComponent, BaiduMapForModuleComponent],
  imports: [
    ShareModule,BaiduMapModule,
    BaiduMapRoutingModule
  ]
})
export class BaiduMapCookModule { }
