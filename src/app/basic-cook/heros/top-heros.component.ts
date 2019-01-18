import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HerosService } from './heros.service';

@Component({
  selector: 'app-top-heros',
  templateUrl: './top-heros.component.html',
  styleUrls: ['./top-heros.component.less']
})
export class TopHerosComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HerosService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
