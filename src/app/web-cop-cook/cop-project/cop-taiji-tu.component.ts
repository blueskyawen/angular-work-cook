import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cop-taiji-tu',
  templateUrl: './cop-taiji-tu.component.html',
  styleUrls: ['./cop-taiji-tu.component.less']
})
export class CopTaijiTuComponent implements OnInit {
  count: number = 0;
  defautNum = 200;
  taijiDom: any;
  buttonSmaller: any;
  buttonBigger: any;
  constructor() { }

  ngOnInit() {
    this.taijiDom = document.getElementById('taijitu');
    this.buttonSmaller = document.getElementById('button-group2').getElementsByTagName('BUTTON')[0];
    this.buttonBigger = document.getElementById('button-group2').getElementsByTagName('BUTTON')[1];
    this.setDomEvent();
  }

  setDomEvent() {
    this.taijiDom.addEventListener("click",() => {
      if(this.taijiDom.classList.contains('animaltion-stop')) {
        this.taijiDom.classList.remove('animaltion-stop');
      } else {
        this.taijiDom.classList.add('animaltion-stop');
      }
    });
    this.taijiDom.addEventListener("animationiteration",() => {
      this.count++;
    });
    this.buttonSmaller.addEventListener("click",() => {
      if(this.defautNum > 110) {
        this.defautNum -= 50;
        this.taijiDom.style.width = this.defautNum + 'px';
        this.taijiDom.style.height = this.defautNum + 'px';
      }
    });
    this.buttonBigger.addEventListener("click",() => {
      this.defautNum += 50;
      this.taijiDom.style.width = this.defautNum + 'px';
      this.taijiDom.style.height = this.defautNum + 'px';
    });
  }

}

