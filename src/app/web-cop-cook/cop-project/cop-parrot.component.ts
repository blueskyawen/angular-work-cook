import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cop-parrot',
  templateUrl: './cop-parrot.component.html',
  styleUrls: ['./cop-parrot.component.less']
})
export class CopParrotComponent implements OnInit {
  showIt: boolean = false;
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showIt = true;
    },100);
  }

}
