import { Injectable }           from '@angular/core';

import { HeroJobAdComponent }   from './hero-job-ad.component';
import { HeroPrpfileComponent } from './hero-prpfile.component';
import { AdItem }               from './ad-item';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  constructor() { }

  getAds() {
    return [
      new AdItem(HeroPrpfileComponent, {name: 'Bombasto', bio: 'Brave as they come'}),

      new AdItem(HeroPrpfileComponent, {name: 'Dr IQ', bio: 'Smart as they come'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Hiring for several positions',
        body: 'Submit your resume today!'}),

      new AdItem(HeroJobAdComponent,   {headline: 'Openings in all departments',
        body: 'Apply today'}),
    ];
  }
}
