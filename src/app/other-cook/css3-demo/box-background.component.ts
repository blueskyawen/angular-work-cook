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

}
