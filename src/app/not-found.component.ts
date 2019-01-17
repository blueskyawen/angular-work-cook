import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <div>
      <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1236557510,3858779538&fm=27&gp=0.jpg" />
    </div>
  `,
  styles: ['div {height:100%;width:100%;} div img {height:50%;width:60%;position: fixed;top:50%;left:50%;transform: translateX(-50%) translateY(-50%);}']
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
