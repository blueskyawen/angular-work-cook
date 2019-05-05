import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopHeartComponent } from './cop-project/cop-heart.component';

const routes: Routes = [
  {
    path: 'cop-project',
    children: [
      {
        path: 'heart',
        component: CopHeartComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebCopCookRoutingModule { }
