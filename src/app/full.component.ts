import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from './core/auth.service';
import { AppService } from './app.service';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.less','./app.common.css']
})
export class FullComponent implements OnInit, OnDestroy {
  menuNavs : any = {
    type: 'horizontal',
    place: 'down',
    navItems: [
      {title:'基本烹饪',
        icon:'fa fa-coffee',
        url:'/main/basic/heros/topHeros',
        callback: () => {this.router.navigate(['/main/basic/heros']);
          this.appService.setTitle(this.translate.instant('menu.basic'));}
      },
      {title:'进阶烹饪',
        icon:'fa fa-tree',
        url:'/main/advance/http/config',
        callback: () => {this.router.navigate(['/main/advance/http/config']);
          this.appService.setTitle(this.translate.instant('menu.advance'));}
      },
      {title:'前端COP',
        icon:'fa fa-envira',
        url:'/main/webcop/cop-project/heart',
        callback: () => {this.router.navigate(['/main/webcop/cop-project/heart']);
          this.appService.setTitle(this.translate.instant('menu.cop'));}
      },
      {title:'其他',
        icon:'fa fa-smile-o',
        url:'/main/other/baiduMap/usejs',
        callback: () => {this.router.navigate(['/main/other/baiduMap/usejs']);
          this.appService.setTitle(this.translate.instant('menu.other'));}
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
      {title:'Http',
        icon:'fa fa-coffee',
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'头配置',icon:'',place: 'down',
              url:'/main/advance/http/config',
              callback: () => {this.router.navigate(['/main/advance/http/config']);}},
            {title:'Text下载',icon:'',place: 'down',
              url:'/main/advance/http/textloader',
              callback: () => {this.router.navigate(['/main/advance/http/textloader']);}},
            {title:'上传',icon:'',place: 'down',
              url:'/main/advance/http/uploader',
              callback: () => {this.router.navigate(['/main/advance/http/uploader']);}},
            {title:'包搜索',icon:'',place: 'down',
              url:'/main/advance/http/npmsearch',
              callback: () => {this.router.navigate(['/main/advance/http/npmsearch']);}}
          ]
        }
      },
      {title:'Service-Worker',
        icon:'fa fa-wifi',
        url:'/main/advance/sw',
        callback: () => {this.router.navigate(['/main/advance/sw']);}
      },
      {title:'Rxjs',
        icon:'fa fa-coffee',
        url:'/main/advance/rxjs',
        callback: () => {this.router.navigate(['/main/advance/rxjs']);},
      }
    ]
  };
  sidebarNavs_other : any = {
    type: 'vertical',
    place: 'down',
    navItems: [
      {title:'百度地图',
        icon:'fa fa-map',
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'使用js-api',icon:'',place: 'down',
              url:'/main/other/baiduMap/usejs',
              callback: () => {this.router.navigate(['/main/other/baiduMap/usejs']);}},
            {title:'使用模块',icon:'',place: 'down',
              url:'/main/other/baiduMap/usemodule',
              callback: () => {this.router.navigate(['/main/other/baiduMap/usemodule']);}}
          ]
        }
      },
      {title:'边框阴影',
        icon:'fa fa-music',
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'外侧阴影',icon:'',place: 'down',
              url:'/main/other/boxShadow/lizi',
              callback: () => {this.router.navigate(['/main/other/boxShadow/lizi']);}},
            {title:'内侧阴影',icon:'',place: 'down',
              url:'/main/other/boxShadow/demo',
              callback: () => {this.router.navigate(['/main/other/boxShadow/demo']);}},
            {title:'Demo',icon:'',place: 'down',
              url:'/main/other/boxShadow/demos',
              callback: () => {this.router.navigate(['/main/other/boxShadow/demos']);}}
          ]
        }
      },
      {title:'Css3 Demo',
        icon:'fa fa-telegram',
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'文本和边框',icon:'',place: 'down',
              url:'/main/other/css3/text-box/border-radius',
              callback: () => {this.router.navigate(['/main/other/css3/text-box/border-radius']);}},
            {title:'盒子背景',icon:'',place: 'down',
              url:'/main/other/css3/box-back',
              callback: () => {this.router.navigate(['/main/other/css3/box-back/background']);}},
            {title:'2D变换',icon:'',place: 'down',
              url:'/main/other/css3/2d/translate',
              callback: () => {this.router.navigate(['/main/other/css3/2d/translate']);}},
            {title:'3D变换',icon:'',place: 'down',
              url:'/main/other/css3/3d',
              callback: () => {this.router.navigate(['/main/other/css3/3d']);}},
            {title:'多列',icon:'',place: 'down',
              url:'/main/other/css3/column',
              callback: () => {this.router.navigate(['/main/other/css3/column']);}}
          ]
        }
      }
    ]
  };
  sidebarNavs_webcop : any = {
    type: 'vertical',
    place: 'down',
    navItems: [
      {title:'cop项目',
        icon:'fa fa-glide',
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'怦然心动',icon:'',place: 'down',
              url:'/main/webcop/cop-project/heart',
              callback: () => {this.router.navigate(['/main/webcop/cop-project/heart']);}},
            {title:'旋转太极',icon:'',place: 'down',
              url:'/main/webcop/cop-project/taiji',
              callback: () => {this.router.navigate(['/main/webcop/cop-project/taiji']);}},
            {title:'UDS',icon:'',place: 'down',
              url:'/main/webcop/cop-project/uds',
              callback: () => {this.router.navigate(['/main/webcop/cop-project/uds']);}},
            {title:'PC开关机',icon:'',place: 'down',
              url:'/main/webcop/cop-project/pc',
              callback: () => {this.router.navigate(['/main/webcop/cop-project/pc']);}},
            {title:'鹦鹉',icon:'',place: 'down',
              url:'/main/webcop/cop-project/parrot',
              callback: () => {this.router.navigate(['/main/webcop/cop-project/parrot']);}},
            {title:'小黄人',icon:'',place: 'down',
              url:'/main/webcop/cop-project/minion',
              callback: () => {this.router.navigate(['/main/webcop/cop-project/minion']);}}
          ]
        }
      },
      {title:'Fan项目',
        icon:'fa fa-ship',
        childs: {
          place: 'down',isShow:false,
          navItems: [
            {title:'时钟 ',icon:'',place: 'down',
              url:'/main/webcop/fan-project/clock',
              callback: () => {this.router.navigate(['/main/webcop/fan-project/clock']);}},
            {title:'旋转正反体 ',icon:'',place: 'down',
              url:'/main/webcop/fan-project/cube',
              callback: () => {this.router.navigate(['/main/webcop/fan-project/cube']);}},
            {title:'旋转照片墙 ',icon:'',place: 'down',
              url:'/main/webcop/fan-project/photoWall',
              callback: () => {this.router.navigate(['/main/webcop/fan-project/photoWall']);}},
            {title:'侦探推理门 ',icon:'',place: 'down',
              url:'/main/webcop/fan-project/conanDoor',
              callback: () => {this.router.navigate(['/main/webcop/fan-project/conanDoor']);}}
          ]
        }
      }
    ]
  };
  sidebarNav : any = this.sidebarNavs_basic;
  sidebarNavs : any[] = [];
  isShowSideMenu : boolean = true;
  curUrl : string;
  menuIndex : any = {
    basic: 0,advance:1,webcop:2,other:3
  };
  curMenuIndex : number = -1;
  isShowSider : boolean = true;

  userOper : any = {
    register: false,
    loginOn: false,
    loginOff: false
  };
  userOptions : any[] = [
    {name:'注册',disable:false,callback: () => {this.cleanRegisterData();this.userOper.register = true;}},
    {name:'登录',disable:false,callback: () => {this.cleanLoginData();this.userOper.loginOn = true;}},
    {name:'注销',disable:false,callback: () => {this.userOper.loginOff = true;}}
  ];
  userLoginData : any = {
    name:'',
    password:''
  };
  registerData : any = {
    user:'',
    password:'',
    name:'',
    sexs:[{label: '男', value: 'man',disabled:false},{label: '女', value: 'women',disabled:false}],
    sex:'man',
    age:18,
    phone:'',
    phonePreffixs:[{label:'+86',value:'+86'}],
    likeOptions:[{label: '读书', value: 'dushu',disable: false},{label: '旅游', value: 'lvyou',disable: false},
      {label: '跑步', value: 'run',disable: false},{label: '徒步', value: 'tubu',disable: false},
      {label: '爬山',value: 'pashan',disable: false},{label: '投资',value: 'touzhi',disable: false},
      {label: '美食',value: 'meishi',disable: false},{label: '睡觉', value: 'sleep',disable: false},
      {label: '音乐', value: 'mousic',disable: false}],
    likes:[],
    checkFlag: 0,
    loading:false,
    disabled:true
  };
  isShowMsg : boolean = false;
  loginOperMsg : string = '操作成功,2s后自动消失';
  isUserLogined : boolean = false;
  subAuthText: any;
  isShowErrorMsg : boolean = false;
  authErrorMsg : string = '';
  langOptions: any[] = [
    {label: this.translate.instant('lang.chinese'), value: 'zh-cn'},
    {label: this.translate.instant('lang.english'), value: 'en'}
  ];
  lang: string = '';
  showLang: boolean = false;
  langTitle: string = '';
  showFull : boolean = false;

  constructor(private route: ActivatedRoute,private appService : AppService,
              private router: Router,public authService : AuthService,
              private translate: TranslateService) {
    this.sidebarNavs.push(this.sidebarNavs_basic);
    this.sidebarNavs.push(this.sidebarNavs_advance);
    this.sidebarNavs.push(this.sidebarNavs_webcop);
    this.sidebarNavs.push(this.sidebarNavs_other);
    this.initLang();
  }

  ngOnInit() {
    this.subAuthText = this.authService.getAuthText()
        .subscribe(message => {
          this.authErrorMsg = message;
          this.isShowErrorMsg = true;
          this.cleanLoginData();
          setTimeout(() => {
            this.userOper.loginOn = true;
          },1000);
        });
    setTimeout(() => {
      this.setTranslate();
      this.checkActiveNav();
      this.langTitle = this.translate.instant('selectLang');
      this.showFull = true;
    },1000);
  }

  ngOnDestroy() {
    this.subAuthText.unsubscribe();
  }

  initLang() {
    if(!localStorage.getItem('app_lang')) {
      this.lang = 'zh-cn';
      localStorage.setItem('app_lang', this.lang);
    } else {
      this.lang = localStorage.getItem('app_lang');
    }
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
  }

  setTranslate() {
    this.langOptions = [
      {label: this.translate.instant('lang.chinese'), value: 'zh-cn'},
      {label: this.translate.instant('lang.english'), value: 'en'}
    ];
    this.userOptions[0].name = this.translate.instant('user.register');
    this.userOptions[1].name = this.translate.instant('user.login');
    this.userOptions[2].name = this.translate.instant('user.cancel');
    this.menuNavs.navItems[0].title = this.translate.instant('menu.basic');
    this.menuNavs.navItems[1].title = this.translate.instant('menu.advance');
    this.menuNavs.navItems[2].title = this.translate.instant('menu.cop');
    this.menuNavs.navItems[3].title = this.translate.instant('menu.other');
    this.setSiderBasicTranslate();
    this.setSiderAdvanceTranslate();
    this.setSiderCopTranslate();
    this.setSiderOtherTranslate();
  }

  setSiderBasicTranslate() {
    this.sidebarNavs_basic.navItems[0].title = this.translate.instant('sidBar.heros');
    this.sidebarNavs_basic.navItems[1].title = this.translate.instant('sidBar.comp');
    this.sidebarNavs_basic.navItems[1].childs.navItems[0].title = this.translate.instant('sidBar.dyncomp');
    this.sidebarNavs_basic.navItems[1].childs.navItems[1].title = this.translate.instant('sidBar.customEle');
    this.sidebarNavs_basic.navItems[1].childs.navItems[2].title = this.translate.instant('sidBar.attrDirective');
    this.sidebarNavs_basic.navItems[1].childs.navItems[3].title = this.translate.instant('sidBar.structDirective');
    this.sidebarNavs_basic.navItems[1].childs.navItems[4].title = this.translate.instant('sidBar.pipe');
    this.sidebarNavs_basic.navItems[2].title = this.translate.instant('sidBar.form');
    this.sidebarNavs_basic.navItems[2].childs.navItems[0].title = this.translate.instant('sidBar.templeF');
    this.sidebarNavs_basic.navItems[2].childs.navItems[1].title = this.translate.instant('sidBar.reactiveF');
    this.sidebarNavs_basic.navItems[2].childs.navItems[2].title = this.translate.instant('sidBar.dynamicF');
  }

  setSiderAdvanceTranslate() {
    this.sidebarNavs_advance.navItems[0].title = this.translate.instant('sidBar.http');
    this.sidebarNavs_advance.navItems[0].childs.navItems[0].title = this.translate.instant('sidBar.headconfig');
    this.sidebarNavs_advance.navItems[0].childs.navItems[1].title = this.translate.instant('sidBar.textloader');
    this.sidebarNavs_advance.navItems[0].childs.navItems[2].title = this.translate.instant('sidBar.uploader');
    this.sidebarNavs_advance.navItems[0].childs.navItems[3].title = this.translate.instant('sidBar.npmsearch');
    this.sidebarNavs_advance.navItems[1].title = this.translate.instant('sidBar.servicework');
    this.sidebarNavs_advance.navItems[2].title = this.translate.instant('sidBar.rxjs');
  }

  setSiderCopTranslate() {
    this.sidebarNavs_webcop.navItems[0].title = this.translate.instant('sidBar.cop-project');
    this.sidebarNavs_webcop.navItems[0].childs.navItems[0].title = this.translate.instant('sidBar.heart');
    this.sidebarNavs_webcop.navItems[0].childs.navItems[1].title = this.translate.instant('sidBar.taiji');
    this.sidebarNavs_webcop.navItems[0].childs.navItems[2].title = this.translate.instant('sidBar.uds');
    this.sidebarNavs_webcop.navItems[0].childs.navItems[3].title = this.translate.instant('sidBar.pc');
    this.sidebarNavs_webcop.navItems[0].childs.navItems[4].title = this.translate.instant('sidBar.parrot');
    this.sidebarNavs_webcop.navItems[0].childs.navItems[5].title = this.translate.instant('sidBar.minion');
    this.sidebarNavs_webcop.navItems[1].title = this.translate.instant('sidBar.fan-project');
    this.sidebarNavs_webcop.navItems[1].childs.navItems[0].title = this.translate.instant('sidBar.clock');
    this.sidebarNavs_webcop.navItems[1].childs.navItems[1].title = this.translate.instant('sidBar.cube');
    this.sidebarNavs_webcop.navItems[1].childs.navItems[2].title = this.translate.instant('sidBar.photoWall');
    this.sidebarNavs_webcop.navItems[1].childs.navItems[3].title = this.translate.instant('sidBar.conanDoor');
  }

  setSiderOtherTranslate() {
    this.sidebarNavs_other.navItems[0].title = this.translate.instant('sidBar.baidumap');
    this.sidebarNavs_other.navItems[0].childs.navItems[0].title = this.translate.instant('sidBar.mapjs');
    this.sidebarNavs_other.navItems[0].childs.navItems[1].title = this.translate.instant('sidBar.mapmodule');
    this.sidebarNavs_other.navItems[1].title = this.translate.instant('sidBar.bordshadow');
    this.sidebarNavs_other.navItems[1].childs.navItems[0].title = this.translate.instant('sidBar.outshadow');
    this.sidebarNavs_other.navItems[1].childs.navItems[1].title = this.translate.instant('sidBar.inshadow');
    this.sidebarNavs_other.navItems[1].childs.navItems[2].title = this.translate.instant('sidBar.shadowdemo');
    this.sidebarNavs_other.navItems[2].title = this.translate.instant('sidBar.css3');
    this.sidebarNavs_other.navItems[2].childs.navItems[0].title = this.translate.instant('sidBar.css3textbord');
    this.sidebarNavs_other.navItems[2].childs.navItems[1].title = this.translate.instant('sidBar.box-back');
    this.sidebarNavs_other.navItems[2].childs.navItems[2].title = this.translate.instant('sidBar.2dtranslate');
    this.sidebarNavs_other.navItems[2].childs.navItems[3].title = this.translate.instant('sidBar.3dtranslate');
    this.sidebarNavs_other.navItems[2].childs.navItems[4].title = this.translate.instant('sidBar.column');
  }

  swithLang(value : string) {
    if(this.lang === value) {
      return;
    }
    this.lang = value;
    localStorage.setItem('app_lang', this.lang);
    setTimeout(() => {location.reload(true);},100);
  }

  goGithub() {
    window.open('https://github.com/blueskyawen/angular-work-cook','_blank');
  }

  cleanLoginData() {
    this.userLoginData = {
      name:'',
      password:''
    };
  }

  cleanRegisterData() {
    this.registerData = {
      user:'',
      password:'',
      name:'',
      sexs:[{label: '男', value: 'man',disabled:false},{label: '女', value: 'women',disabled:false}],
      sex:'man',
      age:18,
      phone:'',
      phonePreffixs:[{label:'+86',value:'+86'}],
      likeOptions:[{label: '读书', value: 'dushu',disable: false},{label: '旅游', value: 'lvyou',disable: false},
        {label: '跑步', value: 'run',disable: false},{label: '徒步', value: 'tubu',disable: false},
        {label: '爬山',value: 'pashan',disable: false},{label: '投资',value: 'touzhi',disable: false},
        {label: '美食',value: 'meishi',disable: false},{label: '睡觉', value: 'sleep',disable: false},
        {label: '音乐', value: 'mousic',disable: false}],
      likes:[],
      checkFlag: 0,
      loading:false,
      disabled:true
    };
  }

  checkActiveNav() {
    this.curUrl = '/main/' + location.pathname.split('main/')[1];
    if(this.menuIndex[this.curUrl.split('/')[2]] !== this.curMenuIndex) {
      this.curMenuIndex = this.menuIndex[this.curUrl.split('/')[2]];
      this.sidebarNav = this.sidebarNavs[this.curMenuIndex];
    }
    this.menuNavs.navItems[this.curMenuIndex].url = this.curUrl;
    this.appService.setTitle(this.menuNavs.navItems[this.curMenuIndex].title);
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

  loginOn() {
    this.authService.loginOnUser(this.userLoginData).subscribe(res => {
      this.isUserLogined = res;
      if(this.isUserLogined) {
        this.authService.curUser = this.userLoginData;
        this.setLoginDisable(true);
        this.loginOperMsg = '操作成功,2s后自动消失';
        this.reDirectRoute();
      } else {
        this.loginOperMsg = '操作失败!';
      }
      this.isShowMsg = true;
      this.userOper.loginOn = false;
    });
  }

  reDirectRoute() {
    if(this.isShowErrorMsg && this.authService.redirectUrl) {
      this.isShowErrorMsg = false;
      this.router.navigate([this.authService.redirectUrl]);
    }
  }

  isDisableLogin() {
    return !this.userLoginData.name || !this.userLoginData.password;
  }

  register() {
    if(this.registerData.disabled) {return false;}
    this.loginOperMsg = '操作成功,2s后自动消失';
    this.registerData.loading = true;
    this.authService.registerUser('/add/user',this.registerData).subscribe(res => {
      this.registerData.loading = false;
      this.isShowMsg = true;
      this.userOper.register = false;
    });
    return false;
  }

  loginOff() {
    this.loginOperMsg = '操作成功,2s后自动消失';
    if(this.authService.curUser) {
      this.authService.loginOffUser().subscribe(res => {
        this.authService.curUser = null;
        this.userOper.loginOff = false;
        this.isUserLogined = false;
        this.isShowMsg = true;
      });
    } else {
      this.userOper.loginOff = false;
    }
    this.setLoginDisable(false);
  }

  isDisableRegister() {
    this.registerData.disabled = (this.registerData.checkFlag == 0) || !this.registerData.user ||
        !this.registerData.password || !this.registerData.name || !this.registerData.phone ||
        !this.registerData.sex;
    return this.registerData.disabled;
  }

  setLoginDisable(flag : boolean) {
    this.userOptions[1].disable = flag;
  }

  checkIt(checked : number) {
    if(checked === 1) {
      checked = 0;
    }
    if(checked === 0) {
      checked = 1;
    }
  }
}
