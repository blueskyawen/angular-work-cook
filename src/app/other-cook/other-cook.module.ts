import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { BaiduMapCookModule  }   from './baidu-map/baidu-map.module';

import { OtherCookRoutingModule } from './other-cook-routing.module';

@NgModule({
  declarations: [],
  imports: [
    ShareModule,BaiduMapCookModule,
    OtherCookRoutingModule
  ]
})
export class OtherCookModule { }
