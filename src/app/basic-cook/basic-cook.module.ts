import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { HerosComponent } from './heros/heros.component';

import { BasicCookRoutingModule } from './basic-cook-routing.module';

@NgModule({
  declarations: [HerosComponent],
  imports: [
    CommonModule,BasicCookRoutingModule,ShareModule
  ]
})
export class BasicCookModule { }
