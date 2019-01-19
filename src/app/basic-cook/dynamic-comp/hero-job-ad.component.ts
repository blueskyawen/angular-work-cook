import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-job-ad',
  template: `
    <div class="job-ad">
      <h4>{{data.headline}}</h4>

      {{data.body}}
    </div>
  `,
  styles: []
})
export class HeroJobAdComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
