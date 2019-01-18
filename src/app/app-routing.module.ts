import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { FullComponent } from './full.component';
import {DashboardComponent,HerosComponent,TopHerosComponent,
    HeroDetailComponent} from './basic-cook/index';

const routes: Routes = [
  { path: 'main',component: FullComponent,
    children: [
      { path: 'basic/heros', component: DashboardComponent,
        children: [
          { path: '', component: TopHerosComponent },
          { path: 'topHeros', component: TopHerosComponent },
          { path: 'list', component: HerosComponent },
          { path: 'detail/:id', component: HeroDetailComponent }
        ]
      }
    ]
  },
  { path: '', redirectTo: '/main/basic/heros', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
