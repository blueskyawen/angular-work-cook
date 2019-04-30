import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { BaiduMapRoutingModule } from './baidu-map-routing.module';
import { BaiduMapForJsComponent } from './baidu-map-for-js.component';
import { BaiduMapForModuleComponent } from './baidu-map-for-module.component';

@NgModule({
  declarations: [BaiduMapForJsComponent, BaiduMapForModuleComponent],
  imports: [
    ShareModule,
    BaiduMapRoutingModule
  ]
})
export class BaiduMapModule { }
