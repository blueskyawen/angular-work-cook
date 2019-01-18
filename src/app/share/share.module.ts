import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LibModule } from 'ng-shadow-cat-d';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [LibModule,CommonModule,FormsModule,RouterModule]
})
export class ShareModule { }
