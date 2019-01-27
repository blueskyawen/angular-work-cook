import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderConfigComponent } from './header-config/header-config.component';

const routes: Routes = [
  {
    path: 'http/config',
    component: HeaderConfigComponent
  },
  {
    path: 'http/intercept',
    component: HeaderConfigComponent
  },
  {
    path: 'http/downloader',
    component: HeaderConfigComponent
  },
  {
    path: 'http/uploader',
    component: HeaderConfigComponent
  },
  {
    path: 'http/npmsearch',
    component: HeaderConfigComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpDemoRoutingModule { }