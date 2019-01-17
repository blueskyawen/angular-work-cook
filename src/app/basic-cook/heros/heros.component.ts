import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.less']
})
export class HerosComponent implements OnInit {
  isShowList : any[] = [false,false,false,false,false,false,false];
  items : any[] = [
    {label: '何炅', checked: 1, Disable: true,partial:true},
    {label: '黄磊', checked: 0, Disable: true,partial:true},
    {label: '大华', checked: 0, Disable: false,partial:true},
    {label: '大彭', checked: 2, Disable: true,partial:true},
    {label: 'H', checked: 0, Disable: false,partial:false},
  ];

  constructor() { }

  ngOnInit() {
  }

}
