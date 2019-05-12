import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { BaiduMapCookModule  }   from './baidu-map/baidu-map.module';
import { BoxShadowModule } from './box-shadow/box-shadow.module';
import { Css3DemoModule } from './css3-demo/css3-demo.module';

import { OtherCookRoutingModule } from './other-cook-routing.module';

@NgModule({
  declarations: [],
  imports: [
    ShareModule,BaiduMapCookModule,BoxShadowModule,Css3DemoModule,
    OtherCookRoutingModule
  ]
})
export class OtherCookModule { }
