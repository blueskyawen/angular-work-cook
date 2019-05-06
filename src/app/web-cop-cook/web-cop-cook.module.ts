import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { WebCopCookRoutingModule } from './web-cop-cook-routing.module';
import { CopHeartComponent } from './cop-project/cop-heart.component';
import { CopTaijiTuComponent } from './cop-project/cop-taiji-tu.component';
import { CopUdsComponent } from './cop-project/cop-uds.component';
import { CopApplePcComponent } from './cop-project/cop-apple-pc.component';
import { CopParrotComponent } from './cop-project/cop-parrot.component';

@NgModule({
  declarations: [CopHeartComponent, CopTaijiTuComponent, CopUdsComponent, CopApplePcComponent,
    CopParrotComponent],
  imports: [
    ShareModule,
    WebCopCookRoutingModule
  ]
})
export class WebCopCookModule { }
