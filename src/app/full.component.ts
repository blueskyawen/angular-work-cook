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
        url:'/main/basic/heros',
        callback: () => {this.router.navigate(['/main/basic/heros']);}
      },
      {title:'进阶烹饪',
        icon:'fa fa-tree',
        url:'/main/advance',
        callback: () => {this.router.navigate(['/main/advance']);}
      },
      {title:'其他',
        icon:'fa fa-smile-o',
        url:'/main/other',
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
        url:'/main/basic/heros/topHeros',
        callback: () => {this.router.navigate(['/main/basic/heros/topHeros']);},
      },
      {title:'组件与模板',
        icon:'fa fa-wifi',
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'动态组件',icon:'',place: 'down',
              url:'/main/basic/comp/dynamic',
              callback: () => {this.router.navigate(['/main/basic/comp/dynamic']);}},
            {title:'自定义元素',icon:'',place: 'down',
              url:'/main/basic/comp/customEle',
              callback: () => {this.router.navigate(['/main/basic/comp/customEle']);}},
            {title:'属性指令',icon:'',place: 'down',
              url:'/main/basic/comp/attrDirective',
              callback: () => {this.router.navigate(['/main/basic/comp/attrDirective']);}},
            {title:'结构指令',icon:'',place: 'down',
              url:'/main/basic/comp/structDirective',
              callback: () => {this.router.navigate(['/main/basic/comp/structDirective']);}},
            {title:'管道',icon:'',place: 'down',
              url:'/main/basic/comp/pipe',
              callback: () => {this.router.navigate(['/main/basic/comp/pipe']);}}
          ]
        }
      },
      {title:'表单',
        icon:'fa fa-camera',
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'模板式表单',icon:'',place: 'down',
              url:'/main/basic/form/temple',
              callback: () => {this.router.navigate(['/main/basic/form/temple']);}},
            {title:'响应式表单',icon:'',place: 'down',
              url:'/main/basic/form/reactive',
              callback: () => {this.router.navigate(['/main/basic/form/reactive']);}},
            {title:'动态表单',icon:'',place: 'down',
              url:'/main/basic/form/dynamic',
              callback: () => {this.router.navigate(['/main/basic/form/dynamic']);}}
          ]
        }
      }
    ]
  };
  isShowSideMenu : boolean = true;
  curUrl : string;
  menuIndex : any = {
    basic: 0,advance:1,other:2
  };

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.curUrl = location.pathname;
    this.menuNavs.navItems[this.menuIndex[this.curUrl.split('/')[2]]].url = this.curUrl;
  }

  ngOnInit() {
  }

  checkActiveNav() {

  }

  showSideMenu() {
    this.isShowSideMenu = !this.isShowSideMenu;
  }
}
