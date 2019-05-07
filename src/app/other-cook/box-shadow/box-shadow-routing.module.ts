import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxShadowLiziComponent } from './box-shadow-lizi.component';
import { BoxShadowDemoComponent } from './box-shadow-demo.component';
import { BoxShadowDemosComponent } from './box-shadow-demos.component';

const routes: Routes = [
    {
        path: 'boxShadow/lizi',
        component: BoxShadowLiziComponent
    },
    {
        path: 'boxShadow/demo',
        component: BoxShadowDemoComponent
    },
    {
        path: 'boxShadow/demos',
        component: BoxShadowDemosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoxShadowRoutingModule { }
