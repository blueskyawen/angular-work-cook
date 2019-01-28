import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LibModule } from 'ng-shadow-cat-d';

import { MessageComponent } from './message/message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [
    CommonModule,LibModule
  ],
  exports: [LibModule,CommonModule,FormsModule,RouterModule,ReactiveFormsModule,
    MessageComponent]
})
export class ShareModule { }
