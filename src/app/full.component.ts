import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from './core/auth.service';

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
        callback: () => {this.router.navigate(['/main/basic/heros']);}
      },
      {title:'进阶烹饪',
        icon:'fa fa-tree',
        url:'/main/advance/http/config',
        callback: () => {this.router.navigate(['/main/advance/http/config']);}
      },
      {title:'前端COP',
        icon:'fa fa-envira',
        url:'/main/webcop/cop-project/heart',
        callback: () => {this.router.navigate(['/main/webcop/cop-project/heart']);}
      },
      {title:'其他',
        icon:'fa fa-smile-o',
        url:'/main/other/baiduMap/usejs',
        callback: () => {this.router.navigate(['/main/other/baiduMap/usejs']);}
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
              callback: () => {this.router.navigate(['/main/other/boxShadow/demo']);}}
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
              callback: () => {this.router.navigate(['/main/webcop/cop-project/parrot']);}}
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

  constructor(private route: ActivatedRoute,
              private router: Router,public authService : AuthService) {
    this.sidebarNavs.push(this.sidebarNavs_basic);
    this.sidebarNavs.push(this.sidebarNavs_advance);
    this.sidebarNavs.push(this.sidebarNavs_webcop);
    this.sidebarNavs.push(this.sidebarNavs_other);
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
    this.checkActiveNav();
  }

  ngOnDestroy() {
    this.subAuthText.unsubscribe();
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
