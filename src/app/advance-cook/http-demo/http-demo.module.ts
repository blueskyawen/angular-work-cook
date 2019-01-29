import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';

import { HttpDemoRoutingModule } from './http-demo-routing.module';
import { HeaderConfigComponent } from './header-config/header-config.component';

import { HeadConfigService } from './header-config/head-config.service';
import { TextLoaderComponent } from './text-loader/text-loader.component';
import { TextLoadService } from './text-loader/text-load.service';

@NgModule({
  declarations: [HeaderConfigComponent, TextLoaderComponent],
  imports: [
    CommonModule,
    HttpDemoRoutingModule,ShareModule
  ],
  providers: [HeadConfigService,TextLoadService]
})
export class HttpDemoModule {}
