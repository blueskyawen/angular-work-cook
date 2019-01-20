import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LibModule } from 'ng-shadow-cat-d';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [LibModule,CommonModule,FormsModule,RouterModule,ReactiveFormsModule]
})
export class ShareModule { }
