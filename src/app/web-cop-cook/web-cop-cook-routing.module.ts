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
import { RotateCubeComponent } from './fan-project/rotate-cube.component';
import { ConanDoorComponent } from './fan-project/conan-door.component';
import { StartCardsComponent } from './start-project/start-cards.component';
import { StartCardsMoreComponent } from './start-project/start-cards-more.component';
import { StartNotFindComponent } from './start-project/start-not-find.component';
import {AuthGuard} from '../core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'cop-project',
    canActivate: [AuthGuard],
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
        component: CopUdsComponent,
        data: {keep: true}
      },
      {
        path: 'pc',
        component: CopApplePcComponent,
        data: {keep: true}
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
    canActivate: [AuthGuard],
    children: [
      {
        path: 'clock',
        component: FanClockComponent
      },
      {
        path: 'photoWall',
        component: RotatePhotoWallComponent
      },
      {
        path: 'cube',
        component: RotateCubeComponent
      },
      {
        path: 'conanDoor',
        component: ConanDoorComponent
      }
    ]
  },
  {
    path: 'web-start',
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'cards',
            component: StartCardsComponent
          }
        ]
      },
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          {
            path: 'cardsMore',
            component: StartCardsMoreComponent,
            data: {keep: true}
          }
        ]
      }
    ]
  },
  {
    path: 'web-start/no-right',
    component: StartNotFindComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebCopCookRoutingModule { }
