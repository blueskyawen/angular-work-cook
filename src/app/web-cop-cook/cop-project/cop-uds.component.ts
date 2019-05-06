import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cop-uds',
  templateUrl: './cop-uds.component.html',
  styleUrls: ['./cop-uds.component.less']
})
export class CopUdsComponent implements OnInit {
  time = 60;
  kouling = '782630';
  appButton : any;
  appCon : any;
  appDom1 : any;
  appDom2 : any;
  appDom3 : any;
  mimaOperDom : any;
  saomaDom : any;
  closeDom : any;
  backDom : any;
  constructor() { }

  ngOnInit() {
    this.getELeDoms();
    this.addEvent();
    setTimeout(() => {
      this.appButton.classList.add('text-show');
    },500);
  }

  getELeDoms() {
    this.appButton = document.getElementById('appid');
    this.appCon = document.getElementById('appContain');
    this.appDom1 = this.appCon.getElementsByClassName("uds-app-content")[0];
    this.appDom2 = this.appCon.getElementsByClassName("uds-app-content")[1];
    this.appDom3 = this.appCon.getElementsByClassName("uds-app-content")[2];
    this.mimaOperDom = this.appDom2.getElementsByClassName("app-body-oper")[0];
    this.saomaDom = this.appDom2.getElementsByClassName("app-foot-saoma")[0].getElementsByClassName("app-foot-sao1")[0];
    this.closeDom = this.appDom2.getElementsByClassName("uds-app-head")[0].getElementsByClassName("close")[0];
    this.backDom = this.appDom3.getElementsByClassName("uds-app-head")[0].getElementsByClassName("backTo")[0];
  }

  addEvent() {
    this.appButton.addEventListener("click",() => {
      if(this.appButton.classList.contains('text-show')) {
        this.appButton.classList.remove('text-show');
      }
      this.appCon.classList.add('showApp');
      setTimeout(() => {
        this.appDom1.classList.remove('app-content-show');
        this.appDom2.classList.add('app-content-show');
        this.daojishi();
      },1000);
    });
    this.closeDom.addEventListener("click",() => {
      this.appCon.classList.remove('showApp');
    });
    this.mimaOperDom.addEventListener("click",() => {
      this.time = 60;
      this.updateMima();
    });
    this.backDom.addEventListener("click",() => {
      this.appDom3.classList.remove('app-content-show');
      setTimeout(() => {
        this.appDom2.classList.add('app-content-show');
      },100);
    });
    this.saomaDom.addEventListener("click",() => {
      this.appDom2.classList.remove('app-content-show');
      setTimeout(() => {
        this.appDom3.classList.add('app-content-show');
      },100);
    });
  }

  daojishi() {
    this.time--;
    if(this.time === 0) {
      this.time = 60;
      this.updateMima();
    }
    setTimeout(() => {this.daojishi();}, 1000);
  }

  updateMima() {
    this.kouling = '' + Math.round(1000000*Math.random());
  }
}
