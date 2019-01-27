import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpDemoRoutingModule } from './http-demo-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { HeaderConfigComponent } from './header-config/header-config.component';

@NgModule({
  declarations: [MessagesComponent, HeaderConfigComponent],
  imports: [
    CommonModule,
    HttpDemoRoutingModule
  ]
})
export class HttpDemoModule { }
