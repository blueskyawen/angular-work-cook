import { NgModule,Injector,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';
import { HerosComponent } from './heros/heros.component';
import { HeroDetailComponent } from './heros/hero-detail.component';
import { DashboardComponent } from './heros/dashboard.component';
import { TopHerosComponent } from './heros/top-heros.component';
import { MessageComponent } from './message/message.component';

import { HerosService } from './heros/heros.service';
import { MessageService } from './message/message.service';
import { AddHeroComponent } from './heros/add-hero.component';
import { HeroSearchComponent } from './heros/hero-search.component';
import { DynamicCompComponent } from './dynamic-comp/dynamic-comp.component';
import { HeroJobAdComponent } from './dynamic-comp/hero-job-ad.component';
import { HeroPrpfileComponent } from './dynamic-comp/hero-prpfile.component';
import { AdDirective } from './dynamic-comp/ad.directive';
import { CustomElementComponent } from './custom-element/custom-element.component';
import { PopupComponent } from './custom-element/popup.component';

import { createCustomElement} from '@angular/elements';

@NgModule({
  declarations: [HerosComponent, HeroDetailComponent, DashboardComponent, TopHerosComponent,
    MessageComponent,AddHeroComponent, HeroSearchComponent, DynamicCompComponent,
    HeroJobAdComponent, HeroPrpfileComponent, AdDirective, CustomElementComponent,
    PopupComponent],
  imports: [
    CommonModule,ShareModule
  ],
  entryComponents: [ HeroJobAdComponent, HeroPrpfileComponent,PopupComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class BasicCookModule {
  constructor(public injector: Injector) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector: this.injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }
}
