import { Injectable } from '@angular/core';
import {Router, Resolve,RouterStateSnapshot,ActivatedRouteSnapshot} from '@angular/router';
import { Observable, of, EMPTY }  from 'rxjs';
import { mergeMap, take } from 'rxjs/operators';
import { HerosService } from '../../basic-cook/heros/heros.service';
import { Hero } from '../../basic-cook/heros/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroDetailResolverService implements Resolve<Hero> {

  constructor(private heroService: HerosService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<Hero> | Observable<never> {
    let id = +route.paramMap.get('id');

    return this.heroService.getHero(id).pipe(
        take(1),
        mergeMap(hero => {
          if (hero) {
            return of(hero);
          } else {
            this.router.navigate(['/main/basic/heros/list']);
            return EMPTY;
          }
        })
    );
  }
}

