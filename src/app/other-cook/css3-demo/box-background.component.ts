import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-box-background',
  templateUrl: './box-background.component.html',
  styleUrls: ['./box-background.component.less']
})
export class BoxBackgroundComponent implements OnInit {
  tabItems = [{name:'背景',label:'background',isActive:false,isDisable:false},
    {name:'渐变',label:'gradient',isActive:false,isDisable:false}];
  currentTab = this.tabItems[0].label;
  backBox: any = {
    color: '#ffff99',
    useImg: 0,
    img: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2376028164,313974037&fm=26&gp=0.jpg',
    position: {x: 0, y: 0, type: 'percentage', xx: 'left', yy: 'top',},
    size: {x: 50, y: 50, type: 'contain'},
    repeat: 'repeat',
    origin: 'border-box',
    clipz: 'border-box',
    attach: 'scroll',
    blend: 'normal'
  };
  clipOptions : any[] = [{label: 'border-box',value: 'border-box',disable: false},
    {label: 'padding-box',value: 'padding-box',disable: false},
    {label: 'content-box',value: 'content-box',disable: false}];
  positionTypes : any[] = [{label: '百分比',value: 'percentage',disable: false},
    {label: 'px',value: 'length',disable: false},
    {label: '方位',value: 'fangwei',disable: false}];
  fanwei: any = {
    x: [{label: 'left',value: 'left',disable: false},{label: 'right',value: 'right',disable: false},
      {label: 'center',value: 'center',disable: false}],
    y: [{label: 'top',value: 'top',disable: false},{label: 'bottom',value: 'bottom',disable: false},
      {label: 'center',value: 'center',disable: false}]
  };
  sizeOptions: any[] = [
    {label: 'length',value: 'length',disable: false},{label: 'percentage',value: 'percentage',disable: false},
    {label: 'cover',value: 'cover',disable: false},{label: 'contain',value: 'contain',disable: false}
  ];
  repeatOptions: any[] = [
    {label: 'repeat',value: 'repeat',disable: false},{label: 'repeat-x',value: 'repeat-x',disable: false},
    {label: 'repeat-y',value: 'repeat-y',disable: false},{label: 'no-repeat',value: 'no-repeat',disable: false}
  ];
  attchOptions: any[] = [
    {label: 'scroll',value: 'scroll',disable: false},{label: 'fixed',value: 'fixed',disable: false}
  ];
  blendOptions: any[] = [{label: 'normal',value: 'normal',disable: false},{label: 'multiply',value: 'multiply',disable: false},
    {label: 'screen',value: 'screen',disable: false},{label: 'overlay',value: 'overlay',disable: false},
    {label: 'darken',value: 'darken',disable: false},{label: 'lighten',value: 'lighten',disable: false},
    {label: 'color-dodge',value: 'color-dodge',disable: false},{label: 'saturation',value: 'saturation',disable: false},
    {label: 'color',value: 'color',disable: false},{label: 'luminosity',value: 'luminosity',disable: false}
  ];
  @ViewChild('backboxout')
      BackboxoutRef: ElementRef;
  selectBoxBack: string = '';

  linerGrad: any = {
    type: 'liner',
    direct: {type: 'direct1',direct1:'top',direct2: 'top',direct3: 'right',deg: '90'},
    colors: [
      {color: '#ff3333', stop: 30}, {color: '#009933', stop: 100}
    ]
  };
  linerOptions: any[] = [
    {label: '线性渐变',value: 'liner',disable: false},{label: '重复线性渐变',value: 'repeat-liner',disable: false}
  ];
  directOptions: any[] = [
    {label: '线性方向1个',value: 'direct1',disable: false},{label: '线性方向2个',value: 'direct2',disable: false},
    {label: 'deg',value: 'deg',disable: false}
  ];
  direct1Options: any[] = [
    {label: 'top',value: 'top',disable: false},{label: 'bottom',value: 'bottom',disable: false},
    {label: 'left',value: 'left',disable: false},{label: 'right',value: 'right',disable: false}
  ];
  direct2Options: any[] = [
    {label: 'top',value: 'top',disable: false},{label: 'bottom',value: 'bottom',disable: false}
  ];
  direct3Options: any[] = [
    {label: 'left',value: 'left',disable: false},{label: 'right',value: 'right',disable: false}
  ];
  @ViewChild('linerGradientout')
    LinerGradientoutRef: ElementRef;
  selectLinerGrad: string = '';
  radialGrad: any = {
    type: 'radial',
    posit: {type: 'keyword',x: 'center',y: 'center',xx: 50,yy: 50},
    shape: 'ellipse',
    size1: 'closest-side',
    colors: [
      {color: '#ff3333', stop: 50}, {color: '#009933', stop: 100}
    ]
  };
  radialOptions: any[] = [
    {label: '径向渐变',value: 'radial',disable: false},{label: '重复径向渐变',value: 'repeat-radial',disable: false}
  ];
  positOptions: any[] = [
    {label: '关键字',value: 'keyword',disable: false},{label: '百分比',value: 'pentage',disable: false},
    {label: 'px',value: 'px',disable: false}
  ];
  posit1Options: any[] = [
    {label: 'left',value: 'left',disable: false},{label: 'right',value: 'right',disable: false},
    {label: 'center',value: 'center',disable: false}
  ];
  posit2Options: any[] = [
    {label: 'top',value: 'top',disable: false},{label: 'bottom',value: 'bottom',disable: false},
    {label: 'center',value: 'center',disable: false}
  ];
  shapeOptions: any[] = [
    {label: 'circle',value: 'circle',disable: false},{label: 'ellipse',value: 'ellipse',disable: false}
  ];
  size22Options: any[] = [
    {label: 'closest-side',value: 'closest-side',disable: false},{label: 'closest-corner',value: 'closest-corner',disable: false},
    {label: 'farthest-side',value: 'farthest-side',disable: false},{label: 'farthest-corner',value: 'farthest-corner',disable: false}
  ];
  selectradiusGrad: string = '';
  @ViewChild('radiusGradientout')
    RadiusGradientoutRef: ElementRef;

  showOpers: boolean = true;
  showOpers1: boolean = true;
  showOpers2: boolean = true;

  constructor(private renderer: Renderer2,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentTab = params.get('type');
      for(let tabz of this.tabItems) {
        if(tabz.label === this.currentTab) {
          tabz.isActive = true;
          break;
        }
      }
    });
  }

  makeBackgroundOut() {
    this.selectBoxBack = `${this.backBox.color} ${this.backBox.clipz}`;
    if(!!this.backBox.useImg) {
      console.log(this.backBox.useImg);
      this.selectBoxBack += ` url(${this.backBox.img}) ${this.getBackPosition()} / ${this.getBackSize()} ${this.backBox.repeat} ${this.backBox.origin} ${this.backBox.attach}`;
    }
    this.renderer.setStyle(this.BackboxoutRef.nativeElement, 'background', this.selectBoxBack);
    this.renderer.setStyle(this.BackboxoutRef.nativeElement, 'backgroundBlendMode', this.backBox.blend);
  }

  getBackPosition() {
    return this.backBox.position.type === 'px' ? `${this.backBox.position.x}px ${this.backBox.position.y}px` :
      this.backBox.position.type === 'percentage' ? `${this.backBox.position.x}% ${this.backBox.position.y}%` :
          `${this.backBox.position.xx} ${this.backBox.position.yy}`;
  }

  getBackSize() {
    return this.backBox.size.type === 'length' ? `${this.backBox.size.x}px ${this.backBox.size.y}px` :
        this.backBox.position.type === 'percentage' ? `${this.backBox.size.x}% ${this.backBox.size.y}%` :
            this.backBox.position.type;
  }

  delColor() {
    if(this.linerGrad.colors.length === 2) {
      return;
    }
    this.linerGrad.colors.pop();
  }

  addColor() {
    this.linerGrad.colors.push({color: '#009933', stop: 100});
  }

  makelinergradiutOut() {
    let tmpColor : string = '';
    for(let index=0;index < this.linerGrad.colors.length;index++) {
      if(index !== 0) {
        tmpColor += ', ';
      }
      tmpColor += `${this.linerGrad.colors[index].color} ${this.linerGrad.colors[index].stop}%`;
    }
    tmpColor += ')';
    this.selectLinerGrad = this.getLinerType('') + this.getLinerDirect('to') + ', ' + tmpColor;
    this.renderer.setStyle(this.LinerGradientoutRef.nativeElement, 'background',
        this.getLinerType('-moz-') + this.getLinerDirect() + ', ' + tmpColor);
    this.renderer.setStyle(this.LinerGradientoutRef.nativeElement, 'background', this.selectLinerGrad);
  }

  getLinerType(type: string) {
    return this.linerGrad.type === 'liner' ? `${type}linear-gradient(` : `${type}repeating-linear-gradient(`;
  }

  getLinerDirect(type?: string) {
    if(type) {
      return this.linerGrad.direct.type === 'direct1' ? `to ${this.linerGrad.direct.direct1}` :
          this.linerGrad.direct.type === 'direct2' ? `to ${this.linerGrad.direct.direct2} ${this.linerGrad.direct.direct3}`
              : `${this.linerGrad.direct.deg}deg`;
    } else {
      return this.linerGrad.direct.type === 'direct1' ? this.linerGrad.direct.direct1 :
          this.linerGrad.direct.type === 'direct2' ? `${this.linerGrad.direct.direct2} ${this.linerGrad.direct.direct3}`
              : `${this.linerGrad.direct.deg}deg`;
    }
  }

  delColor2() {
    if(this.radialGrad.colors.length === 2) {
      return;
    }
    this.radialGrad.colors.pop();
  }

  addColor2() {
    this.radialGrad.colors.push({color: '#009933', stop: 100});
  }

  makeradiusgradiutOut() {
    let tmpColor : string = '';
    for(let index=0;index < this.radialGrad.colors.length;index++) {
      if(index !== 0) {
        tmpColor += ', ';
      }
      tmpColor += `${this.radialGrad.colors[index].color} ${this.radialGrad.colors[index].stop}%`;
    }
    tmpColor += ')';
    this.selectradiusGrad = this.getRadiusType('') +
        `${this.radialGrad.shape} ${this.radialGrad.size1} ` + this.getRadiusDirect() + ', ' + tmpColor;
    this.renderer.setStyle(this.RadiusGradientoutRef.nativeElement, 'background',
        this.getRadiusType('-moz-') + `${this.radialGrad.shape} ${this.radialGrad.size1} ` + this.getRadiusDirect() + ', ' + tmpColor);
    this.renderer.setStyle(this.RadiusGradientoutRef.nativeElement, 'background', this.selectradiusGrad);
  }

  getRadiusType(type: string) {
    return this.radialGrad.type === 'radial' ? `${type}radial-gradient(` : `${type}repeating-radial-gradient(`;
  }

  getRadiusDirect() {
    return this.radialGrad.posit.type === 'keyword' ? `at ${this.radialGrad.posit.x} ${this.radialGrad.posit.y}` :
        this.radialGrad.posit.type  === 'px' ? `at ${this.radialGrad.posit.xx}px ${this.radialGrad.posit.yy}px`
            : `at ${this.radialGrad.posit.xx}% ${this.radialGrad.posit.yy}%`;
  }
}
