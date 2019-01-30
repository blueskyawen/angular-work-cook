import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../../share/share.module';

import { HttpDemoRoutingModule } from './http-demo-routing.module';
import { HeaderConfigComponent } from './header-config/header-config.component';

import { HeadConfigService } from './header-config/head-config.service';
import { TextLoaderComponent } from './text-loader/text-loader.component';
import { TextLoadService } from './text-loader/text-load.service';
import { PkgSearchComponent } from './pkg-search/pkg-search.component';
import { PkgSearchService } from './pkg-search/pkg-search.service';

@NgModule({
  declarations: [HeaderConfigComponent, TextLoaderComponent, PkgSearchComponent],
  imports: [
    CommonModule,
    HttpDemoRoutingModule,ShareModule
  ],
  providers: [HeadConfigService,TextLoadService,PkgSearchService]
})
export class HttpDemoModule {}
