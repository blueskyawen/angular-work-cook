import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { FullComponent } from './full.component';
import {HerosComponent} from './basic-cook/index';

const routes: Routes = [
  { path: 'main',component: FullComponent,
    children: [
      { path: '', component: HerosComponent },
      { path: 'basic/heros', component: HerosComponent }
    ]
  },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
