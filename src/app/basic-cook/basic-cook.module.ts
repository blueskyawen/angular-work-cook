import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './heros/hero-detail.component';
import { DashboardComponent } from './heros/dashboard.component';
import { TopHerosComponent } from './heros/top-heros.component';
import { MessageComponent } from './message/message.component';

import { HerosService } from './heros/heros.service';
import { MessageService } from './message/message.service';

@NgModule({
  declarations: [HerosComponent, HeroDetailComponent, DashboardComponent, TopHerosComponent,
    MessageComponent],
  imports: [
    CommonModule,ShareModule
  ]
})
export class BasicCookModule { }
