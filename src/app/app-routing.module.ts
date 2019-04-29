import { NgModule } from '@angular/core';
import { Routes, RouterModule,PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './core/not-found.component';
import { FullComponent } from './full.component';
import {DashboardComponent,HerosComponent,TopHerosComponent, HeroDetailComponent,DynamicCompComponent,
  CustomElementComponent,TempleFormComponent,ReactiveFormComponent,AttrDirectiveComponent,
  StructDirectiveComponent,PipeComponent,DynamicFormComponent} from './basic-cook/index';

import {AuthGuard} from './core/guard/auth.guard';
import {DeactiveGuardService} from './core/guard/deactive-guard.service';
import {HeroDetailResolverService} from './core/guard/hero-detail-resolver.service';
import {SelectivePreloadingStrategyService} from './core/selective-preloading-strategy.service';

const routes: Routes = [
  { path: 'main',component: FullComponent,
    children: [
      { path: 'basic/heros', component: DashboardComponent,
        children: [
          { path: '', component: TopHerosComponent },
          { path: 'topHeros', component: TopHerosComponent },
          { path: 'list', component: HerosComponent },
          { path: 'detail/:id',
            component: HeroDetailComponent,
            resolve:{hero: HeroDetailResolverService}
          }
        ]
      },
      { path: 'basic/comp',canActivate:[AuthGuard],
        children: [
          {
            path: '',
            canActivateChild: [AuthGuard],
            children: [
              { path: 'dynamic', component: DynamicCompComponent },
              { path: 'customEle', component: CustomElementComponent },
              { path: 'attrDirective', component: AttrDirectiveComponent },
              { path: 'structDirective', component: StructDirectiveComponent },
              { path: 'pipe', component: PipeComponent }
            ]
          }
        ]
      },
      { path: 'basic/form',
        children: [
          { path: 'temple', component: TempleFormComponent },
          { path: 'reactive', component: ReactiveFormComponent,canDeactivate: [DeactiveGuardService]},
          { path: 'dynamic', component: DynamicFormComponent }
        ]
      },
      {
        path: 'advance',canLoad:[AuthGuard],data: { preload: true },
        loadChildren: './advance-cook/advance-cook.module#AdvanceCookModule'
      },
      {
        path: 'other',
        loadChildren: './other-cook/other-cook.module#OtherCookModule'
      }
    ]
  },
  { path: '', redirectTo: '/main/basic/heros/topHeros', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: SelectivePreloadingStrategyService})],
  exports: [RouterModule],
  providers: [SelectivePreloadingStrategyService]
})
export class AppRoutingModule { }
