import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { BasicCookModule } from './basic-cook/basic-cook.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,BasicCookModule,AppRoutingModule,CoreModule,ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
