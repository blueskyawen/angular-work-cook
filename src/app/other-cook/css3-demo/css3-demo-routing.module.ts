import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TextBoxComponent } from './text-box.component';
import { BoxBackgroundComponent } from './box-background.component';
import { Transform2DComponent } from './transform2-d.component';
import { Transform3DComponent } from './transform3-d.component';
import { BoxCloumnComponent } from './box-cloumn.component';

const routes: Routes = [
  {
    path: 'css3/text-box/:type',
    component: TextBoxComponent
  },
  {
    path: 'css3/box-back/:type',
    component: BoxBackgroundComponent
  },
  {
    path: 'css3/2d',
    component: Transform2DComponent
  },
  {
    path: 'css3/3d',
    component: Transform3DComponent
  },
  {
    path: 'css3/column',
    component: BoxCloumnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Css3DemoRoutingModule { }
