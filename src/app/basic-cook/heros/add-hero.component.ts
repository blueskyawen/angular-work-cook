import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { Hero } from './hero';
import { HerosService } from './heros.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html'
})
export class AddHeroComponent implements OnInit {
  name : string = '';
  isShowAdd : boolean = true;
  @Output() heroAdded = new EventEmitter();

  constructor(private heroService: HerosService) { }

  ngOnInit() {
  }

  add(): void {
    this.name = this.name.trim();
    if (!this.name ) { return; }
    this.heroService.addHero({name:this.name} as Hero).subscribe(hero => {
      this.heroAdded.emit(hero);
    });
  }

  cancel() {
    this.heroAdded.emit(null);
    this.isShowAdd = false;
  }
}
