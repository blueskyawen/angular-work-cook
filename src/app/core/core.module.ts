import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { NotFoundComponent } from './not-found.component';

import { MessageService } from './message.service';

import { httpInterceptorProviders } from './interceptor/index';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [HttpClientModule],
  providers: [MessageService,httpInterceptorProviders]
})
export class CoreModule { }
