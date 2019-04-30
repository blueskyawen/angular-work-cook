import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { ShareModule } from './share/share.module';
import { BasicCookModule } from './basic-cook/basic-cook.module';
import { BaiduMapModule } from 'angular2-baidu-map';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FullComponent } from './full.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './core/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent
  ],
  imports: [
    BrowserModule,BasicCookModule,AppRoutingModule,CoreModule,ShareModule,
    HttpClientInMemoryWebApiModule.forRoot(
        InMemoryDataService, { dataEncapsulation: false,passThruUnknownUrl: true }
    ),
    BrowserAnimationsModule,
    BaiduMapModule.forRoot({ak:'je9h7EOx3mZk3HwLOUZBRr59yGpYUvY1'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
