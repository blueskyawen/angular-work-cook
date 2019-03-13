import { Component, OnInit,Output,Input,EventEmitter, OnChanges, DoCheck, AfterContentInit,
    AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { Hero } from './hero';
import { HerosService } from './heros.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html'
})
export class AddHeroComponent implements OnInit {
  name : string = '';
  isShowAdd : boolean = true;
  @Input() type: string;
  @Output() heroAdded = new EventEmitter();

  constructor(private heroService: HerosService) { }

  ngOnChanges() {
    console.log('AddHeroComponent*****ngOnChanges');
  }

  ngOnInit() {
    console.log('AddHeroComponent*****ngOnInit');
  }


  ngDoCheck() {
    console.log('AddHeroComponent*****ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('AddHeroComponent*****ngAfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AddHeroComponent*****ngAfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AddHeroComponent*****ngAfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AddHeroComponent*****ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('AddHeroComponent*****ngOnDestroy');
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
