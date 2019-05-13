import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';

import { Css3DemoRoutingModule } from './css3-demo-routing.module';
import { TextBoxComponent } from './text-box.component';
import { BoxBackgroundComponent } from './box-background.component';
import { Transform2DComponent } from './transform2-d.component';
import { Transform3DComponent } from './transform3-d.component';
import { BoxCloumnComponent } from './box-cloumn.component';

@NgModule({
  declarations: [TextBoxComponent, BoxBackgroundComponent, Transform2DComponent, Transform3DComponent, BoxCloumnComponent],
  imports: [
    ShareModule,
    Css3DemoRoutingModule
  ]
})
export class Css3DemoModule { }
