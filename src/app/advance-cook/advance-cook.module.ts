import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpDemoModule } from './http-demo/http-demo.module';

import { AdvanceCookRoutingModule } from './advance-cook-routing.module';
import { ServiceWorkComponent } from './service-work/service-work.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { SwChildComponent } from './service-work/sw-child.component';
import { ServiceWorkService } from './service-work/service-work.service'

@NgModule({
  declarations: [ServiceWorkComponent, RxjsComponent, SwChildComponent],
  imports: [
    CommonModule,
    AdvanceCookRoutingModule,HttpDemoModule
  ],
  providers: [ServiceWorkService]
})
export class AdvanceCookModule { }
