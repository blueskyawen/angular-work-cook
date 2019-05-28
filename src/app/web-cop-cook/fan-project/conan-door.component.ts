import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conan-door',
  templateUrl: './conan-door.component.html',
  styleUrls: ['./conan-door.component.less']
})
export class ConanDoorComponent implements OnInit {
  light: any = {active: false, show: false};
  doorOpen: boolean = false;
  imageShow: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openTheDoor() {
    this.light.show = true;
    this.light.active = true;
    this.imageShow = true;
    this.doorOpen = true;
    setTimeout(() => {
      this.light.show = false;
      this.light.active = false;
      this.imageShow = false;
      this.doorOpen = false;
    },4000);
  }
}

