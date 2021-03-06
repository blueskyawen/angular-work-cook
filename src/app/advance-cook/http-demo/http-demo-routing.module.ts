import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderConfigComponent } from './header-config/header-config.component';
import { TextLoaderComponent } from './text-loader/text-loader.component';
import { PkgSearchComponent } from './pkg-search/pkg-search.component';
import { UnloaderComponent } from './unloader/unloader.component';
import {AuthGuard} from '../../core/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'http/config',
        component: HeaderConfigComponent
      },
      {
        path: 'http/textloader',
        component: TextLoaderComponent
      },
      {
        path: 'http/uploader',
        component: UnloaderComponent
      },
      {
        path: 'http/npmsearch',
        component: PkgSearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HttpDemoRoutingModule { }
