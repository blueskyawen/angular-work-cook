import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { HerosComponent } from './heros/heros.component';

@NgModule({
  declarations: [HerosComponent],
  imports: [
    CommonModule,ShareModule
  ]
})
export class BasicCookModule { }
