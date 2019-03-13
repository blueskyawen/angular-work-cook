import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
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

  ngOnChanges() {
    console.log('HerosComponent*****ngOnChanges');
  }

  ngOnInit() {
    console.log('HerosComponent*****ngOnInit');
    this.getHeroes();
  }

  ngDoCheck() {
    console.log('HerosComponent*****ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('HerosComponent*****ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('HerosComponent*****ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('HerosComponent*****ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('HerosComponent*****ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('HerosComponent*****ngOnDestroy');
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
