import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HerosService } from './heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.less']
})
export class HerosComponent implements OnInit {
  heroes: Hero[];
  isShowAdd : boolean = false;
  headers : any[] = [];

  constructor(private heroService: HerosService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(resp => {
          const keys = resp.headers.keys();
          this.headers = keys.map(key =>
              `${key}: ${resp.headers.get(key)}`);
          this.heroes = resp.body;
        });
  }

  AddHero() {
    this.isShowAdd = true;
  }

  heroAdded(hero : any) {
    if(hero) {
      this.heroes.push(hero);
    }
    this.isShowAdd = false;
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
