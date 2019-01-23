import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './core/not-found.component';
import { FullComponent } from './full.component';
import {DashboardComponent,HerosComponent,TopHerosComponent, HeroDetailComponent,DynamicCompComponent,
  CustomElementComponent,TempleFormComponent,ReactiveFormComponent,AttrDirectiveComponent,
  StructDirectiveComponent,PipeComponent,DynamicFormComponent} from './basic-cook/index';

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
      },
      { path: 'basic/comp',
        children: [
          { path: 'dynamic', component: DynamicCompComponent },
          { path: 'customEle', component: CustomElementComponent },
          { path: 'attrDirective', component: AttrDirectiveComponent },
          { path: 'structDirective', component: StructDirectiveComponent },
          { path: 'pipe', component: PipeComponent }
        ]
      },
      { path: 'basic/form',
        children: [
          { path: 'temple', component: TempleFormComponent },
          { path: 'reactive', component: ReactiveFormComponent },
          { path: 'dynamic', component: DynamicFormComponent }
        ]
      },
      {
        path: 'advance',
        loadChildren: './advance-cook/advance-cook.module#AdvanceCookModule'
      }
    ]
  },
  { path: '', redirectTo: '/main/basic/heros/topHeros', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
