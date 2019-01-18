import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HerosService } from './heros.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.less']
})
export class HerosComponent implements OnInit {ssssss
  heroes: Hero[];

  constructor(private heroService: HerosService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

}
