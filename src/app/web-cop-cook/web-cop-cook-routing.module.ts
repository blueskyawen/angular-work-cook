import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CopHeartComponent } from './cop-project/cop-heart.component';
import { CopTaijiTuComponent } from './cop-project/cop-taiji-tu.component';
import { CopUdsComponent } from './cop-project/cop-uds.component';
import { CopApplePcComponent } from './cop-project/cop-apple-pc.component';
import { CopParrotComponent } from './cop-project/cop-parrot.component';
import { CopMinionsComponent } from './cop-project/cop-minions.component';
import { FanClockComponent } from './fan-project/fan-clock.component';
import { RotatePhotoWallComponent } from './fan-project/rotate-photo-wall.component';

const routes: Routes = [
  {
    path: 'cop-project',
    children: [
      {
        path: 'heart',
        component: CopHeartComponent
      },
      {
        path: 'taiji',
        component: CopTaijiTuComponent
      },
      {
        path: 'uds',
        component: CopUdsComponent
      },
      {
        path: 'pc',
        component: CopApplePcComponent
      },
      {
        path: 'parrot',
        component: CopParrotComponent
      },
      {
        path: 'minion',
        component: CopMinionsComponent
      }
    ]
  },
  {
    path: 'fan-project',
    children: [
      {
        path: 'clock',
        component: FanClockComponent
      },
      {
        path: 'rotatePhoto',
        component: RotatePhotoWallComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebCopCookRoutingModule { }
