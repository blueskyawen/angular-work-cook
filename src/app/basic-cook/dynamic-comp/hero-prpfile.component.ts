import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hero-prpfile',
  template: `
    <div class="hero-profile">
      <h3>Featured Hero Profile</h3>
      <h4>{{data.name}}</h4>
      <p>{{data.bio}}</p>
      <strong>Hire this hero today!</strong>
    </div>
  `,
  styles: []
})
export class HeroPrpfileComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
