import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoxShadowLiziComponent } from './box-shadow-lizi.component';
import { BoxShadowDemoComponent } from './box-shadow-demo.component';

const routes: Routes = [
    {
        path: 'boxShadow/lizi',
        component: BoxShadowLiziComponent
    },
    {
        path: 'boxShadow/demo',
        component: BoxShadowDemoComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BoxShadowRoutingModule { }
