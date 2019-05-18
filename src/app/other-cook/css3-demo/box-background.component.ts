import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-box-background',
  templateUrl: './box-background.component.html',
  styleUrls: ['./box-background.component.less']
})
export class BoxBackgroundComponent implements OnInit {
  tabItems = [{name:'背景',label:'background',isActive:true,isDisable:false},
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
    type: 'liner'
  };
  radialOptions: any[] = [
    {label: '径向渐变',value: 'radial',disable: false},{label: '重复径向渐变',value: 'repeat-radial',disable: false}
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
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

    this.renderer.setStyle(this.LinerGradientoutRef.nativeElement, 'background',
        this.getLinerType('') + this.getLinerDirect('to') + ', ' + tmpColor);

  }

  getLinerType(type: string) {
    return this.linerGrad.type === 'liner' ? `${type}linear-gradient(` : `${type}repeating-linear-gradient(`;
  }

  getLinerDirect(type: string) {
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

}
