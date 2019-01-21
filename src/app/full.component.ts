import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.less','./app.common.css']
})
export class FullComponent implements OnInit {
  menuNavs : any = {
    type: 'horizontal',
    place: 'down',
    navItems: [
      {title:'基本烹饪',
        icon:'fa fa-coffee',
        isActive:true,
        callback: () => {this.router.navigate(['/main/basic/heros']);}
      },
      {title:'进阶烹饪',
        icon:'fa fa-tree',
        isActive:false,
        callback: () => {this.router.navigate(['/main/advance']);}
      },
      {title:'其他',
        icon:'fa fa-smile-o',
        isActive:false,
        callback: () => {this.router.navigate(['/main/other']);}
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
        callback: () => {this.router.navigate(['/main/basic/heros/topHeros']);},
      },
      {title:'组件与模板',
        icon:'fa fa-wifi',
        isActive:false,
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'动态组件',icon:'',isActive:false,place: 'down',
              callback: () => {this.router.navigate(['/main/basic/comp/dynamic']);}},
            {title:'自定义元素',icon:'',isActive:false,place: 'down',
              callback: () => {this.router.navigate(['/main/basic/comp/customEle']);}},
            {title:'属性指令',icon:'',isActive:false,place: 'down',
              callback: () => {this.router.navigate(['/main/basic/comp/attrDirective']);}},
            {title:'结构指令',icon:'',isActive:false,place: 'down',
              callback: () => {this.router.navigate(['/main/basic/comp/structDirective']);}},
            {title:'管道',icon:'',isActive:false,place: 'down',
              callback: () => {this.router.navigate(['/main/basic/comp/pipe']);}}
          ]
        }
      },
      {title:'表单',
        icon:'fa fa-camera',
        isActive:false,
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'模板式表单',icon:'',isActive:false,place: 'down',
              callback: () => {this.router.navigate(['/main/basic/form/temple']);}},
            {title:'响应式表单',icon:'',isActive:false,place: 'down',
              callback: () => {this.router.navigate(['/main/basic/form/reactive']);}},
            {title:'动态表单',icon:'',isActive:false,place: 'down',
              callback: () => {this.router.navigate(['/main/basic/dynamicForm']);}}
          ]
        }
      }
    ]
  };
  isShowSideMenu : boolean = true;

  constructor(private route: ActivatedRoute,
              private router: Router) {

  }

  ngOnInit() {
  }

  showSideMenu() {
    this.isShowSideMenu = !this.isShowSideMenu;
  }
}
