import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderConfigComponent } from './header-config/header-config.component';
import { TextLoaderComponent } from './text-loader/text-loader.component';
import { PkgSearchComponent } from './pkg-search/pkg-search.component';

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
    path: 'http/textloader',
    component: TextLoaderComponent
  },
  {
    path: 'http/uploader',
    component: HeaderConfigComponent
  },
  {
    path: 'http/npmsearch',
    component: PkgSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpDemoRoutingModule { }