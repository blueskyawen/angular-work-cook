import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cop-apple-pc',
  templateUrl: './cop-apple-pc.component.html',
  styleUrls: ['./cop-apple-pc.component.less']
})
export class CopApplePcComponent implements OnInit {
  cmputerDom: any;
  powerButton: any;
  constructor() { }

  ngOnInit() {
    this.cmputerDom = document.getElementById('mycomputer');
    this.powerButton = document.getElementById('power-oper');
    this.addEvent();
    setTimeout(() => {
      this.powerButton.classList.add('text-show');
    },500);
  }

  addEvent() {
    this.powerButton.addEventListener("click",() => {
      if(this.powerButton.classList.contains('text-show')) {
        this.powerButton.classList.remove('text-show');
      }
      if(this.cmputerDom.classList.contains('power-on') || this.cmputerDom.classList.contains('start-work')) {
        this.cmputerDom.classList.remove('power-on','start-work');
        this.cmputerDom.classList.add('compt-power-off');
        setTimeout(() => {
          this.cmputerDom.classList.remove('compt-power-off');
        },3000);
      } else {
        this.cmputerDom.classList.add('power-on');
        setTimeout(() => {
          this.cmputerDom.classList.remove('power-on');
          this.cmputerDom.classList.add('start-work');
        },4500);
      }
    });
  }

}

