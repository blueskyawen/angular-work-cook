import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { BoxShadowLiziComponent } from './box-shadow-lizi.component';
import { BoxShadowDemoComponent } from './box-shadow-demo.component';
import { BoxShadowDemosComponent } from './box-shadow-demos.component';

import { BoxShadowRoutingModule } from './box-shadow-routing.module';

@NgModule({
  declarations: [BoxShadowLiziComponent, BoxShadowDemoComponent, BoxShadowDemosComponent],
  imports: [
    ShareModule, BoxShadowRoutingModule
  ]
})
export class BoxShadowModule { }
