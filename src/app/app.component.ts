import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less','./app.common.css']
})
export class AppComponent {
  menuNavs : any = {
    type: 'horizontal',
    place: 'down',
    navItems: [
      {title:'基本烹饪',
        icon:'fa fa-coffee',
        isActive:true,
        callback: () => {console.log('click menu item!');}
      },
      {title:'进阶烹饪',
        icon:'fa fa-tree',
        isActive:false,
        callback: () => {console.log('click menu item!');}
      },
      {title:'其他',
        icon:'fa fa-smile-o',
        isActive:false,
        callback: () => {console.log('click menu item!');}
      }
    ]
  };
  sidebarNavs : any = {
    type: 'vertical',
    place: 'down',
    navItems: [
      {title:'英雄指南',
        icon:'fa fa-coffee',
        isActive:true,
        callback: () => {console.log('click menu item!');},
      },
      {title:'英雄指南',
        icon:'fa fa-car',
        isActive:false,
        callback: () => {console.log('click menu item!');},
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'option1',icon:'fa fa-wifi',isActive:false,place: 'down',
              callback: () => {console.log('click menu item!');}},
            {title:'option2',icon:'fa fa-wifi',isActive:false,place: 'down',
              callback: () => {console.log('click menu item!');},
              childs: {
                type:'vertical',place: 'down',isShow:false,
                navItems: [
                  {title:'option3',icon:'fa fa-wifi',isActive:false,place: 'down',
                    callback: () => {console.log('click menu item!');}},
                  {title:'option4',icon:'fa fa-wifi',isActive:false,place: 'down',
                    callback: () => {console.log('click menu item!');}}
                ]
              }
            }
          ]
        }
      },
      {title:'Navigation Two',
        icon:'fa fa-camera',
        isActive:false,
        callback: () => {console.log('click menu item!');},
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'option5',icon:'fa fa-wifi',isActive:false,place: 'down',
              callback: () => {console.log('click menu item!');}},
            {title:'option6',icon:'fa fa-wifi',isActive:false,place: 'down',
              callback: () => {console.log('click menu item!');}}
          ]
        }
      }
    ]
  };

  isShowSideMenu : boolean = true;

  constructor() {}

  showSideMenu() {
    this.isShowSideMenu = !this.isShowSideMenu;
  }

}
