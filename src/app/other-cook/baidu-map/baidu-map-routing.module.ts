import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaiduMapForJsComponent } from './baidu-map-for-js.component';
import { BaiduMapForModuleComponent } from './baidu-map-for-module.component';

const routes: Routes = [
  {
    path: 'baiduMap/usejs',
    component: BaiduMapForJsComponent
  },
  {
    path: 'baiduMap/usemodule',
    component: BaiduMapForModuleComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaiduMapRoutingModule { }
