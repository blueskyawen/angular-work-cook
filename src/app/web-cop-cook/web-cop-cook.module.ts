import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';

import { WebCopCookRoutingModule } from './web-cop-cook-routing.module';
import { CopHeartComponent } from './cop-project/cop-heart.component';
import { CopTaijiTuComponent } from './cop-project/cop-taiji-tu.component';
import { CopUdsComponent } from './cop-project/cop-uds.component';
import { CopApplePcComponent } from './cop-project/cop-apple-pc.component';
import { CopParrotComponent } from './cop-project/cop-parrot.component';
import { CopMinionsComponent } from './cop-project/cop-minions.component';
import { FanClockComponent } from './fan-project/fan-clock.component';
import { RotatePhotoWallComponent } from './fan-project/rotate-photo-wall.component';
import { RotateCubeComponent } from './fan-project/rotate-cube.component';
import { ConanDoorComponent } from './fan-project/conan-door.component';
import { StartCardsComponent } from './start-project/start-cards.component';
import { StartCardsMoreComponent } from './start-project/start-cards-more.component';
import { StartNotFindComponent } from './start-project/start-not-find.component';

@NgModule({
  declarations: [CopHeartComponent, CopTaijiTuComponent, CopUdsComponent, CopApplePcComponent,
    CopParrotComponent, CopMinionsComponent, FanClockComponent, RotatePhotoWallComponent, RotateCubeComponent,
    ConanDoorComponent, StartCardsComponent, StartCardsMoreComponent, StartNotFindComponent],
  imports: [
    ShareModule,
    WebCopCookRoutingModule
  ]
})
export class WebCopCookModule { }
