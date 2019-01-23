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
        url:'/main/basic/heros/topHeros',
        callback: () => {this.router.navigate(['/main/basic/heros']);}
      },
      {title:'进阶烹饪',
        icon:'fa fa-tree',
        url:'/main/advance/rxjs',
        callback: () => {this.router.navigate(['/main/advance/rxjs']);}
      },
      {title:'其他',
        icon:'fa fa-smile-o',
        url:'/main/other',
        callback: () => {this.router.navigate(['/main/other']);}
      }
    ]
  };
  sidebarNavs_basic : any = {
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
  sidebarNavs_advance : any = {
    type: 'vertical',
    place: 'down',
    navItems: [
      {title:'Rxjs',
        icon:'fa fa-coffee',
        url:'/main/advance/rxjs',
        callback: () => {this.router.navigate(['/main/advance/rxjs']);},
      },
      {title:'Service-Worker',
        icon:'fa fa-wifi',
        url:'/main/advance/sw',
        callback: () => {this.router.navigate(['/main/advance/sw']);}
      }
    ]
  };
  sidebarNav : any = this.sidebarNavs_basic;
  sidebarNavs : any[] = [];
  isShowSideMenu : boolean = true;
  curUrl : string;
  menuIndex : any = {
    basic: 0,advance:1,other:2
  };
  curMenuIndex : number = -1;
  isShowSider : boolean = true;

  constructor(private route: ActivatedRoute,
              private router: Router) {
    this.sidebarNavs.push(this.sidebarNavs_basic);
    this.sidebarNavs.push(this.sidebarNavs_advance);
  }

  ngOnInit() {
    this.checkActiveNav();
  }

  checkActiveNav() {
    this.curUrl = '/main/' + location.pathname.split('main/')[1];
    if(this.menuIndex[this.curUrl.split('/')[2]] !== this.curMenuIndex) {
      this.curMenuIndex = this.menuIndex[this.curUrl.split('/')[2]];
      this.sidebarNav = this.sidebarNavs[this.curMenuIndex];
    }
    this.menuNavs.navItems[this.curMenuIndex].url = this.curUrl;
  }

  showSideMenu() {
    this.isShowSideMenu = !this.isShowSideMenu;
  }

  menuSelected(url : any) {
    this.curUrl = url;
    if(this.menuIndex[this.curUrl.split('/')[2]] !== this.curMenuIndex) {
      this.curMenuIndex = this.menuIndex[this.curUrl.split('/')[2]];
      this.sidebarNav = this.sidebarNavs[this.curMenuIndex];
      this.menuNavs.navItems[this.curMenuIndex].url = this.curUrl;
      this.isShowSider = false;
      setTimeout(() => {
        this.isShowSider = true;
      },50);
    }
  }
}
