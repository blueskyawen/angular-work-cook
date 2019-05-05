import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { WebCopCookRoutingModule } from './web-cop-cook-routing.module';
import { CopHeartComponent } from './cop-project/cop-heart.component';

@NgModule({
  declarations: [CopHeartComponent],
  imports: [
    ShareModule,
    WebCopCookRoutingModule
  ]
})
export class WebCopCookModule { }
