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

  constructor(private heroService: HerosService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
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
