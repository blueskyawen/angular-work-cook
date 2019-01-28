import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';
import { NotFoundComponent } from './not-found.component';

import { MessageService } from './message.service';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [
    CommonModule
  ],
  exports: [HttpClientModule],
  providers: [MessageService]
})
export class CoreModule { }
