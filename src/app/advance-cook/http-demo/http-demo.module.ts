import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';

import { HttpDemoRoutingModule } from './http-demo-routing.module';
import { HeaderConfigComponent } from './header-config/header-config.component';

import { HeadConfigService } from './header-config/head-config.service';

@NgModule({
  declarations: [HeaderConfigComponent],
  imports: [
    CommonModule,
    HttpDemoRoutingModule,ShareModule
  ],
  providers: [HeadConfigService]
})
export class HttpDemoModule {}
