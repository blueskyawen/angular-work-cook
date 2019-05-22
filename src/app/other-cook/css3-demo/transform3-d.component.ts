import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transform3-d',
  templateUrl: './transform3-d.component.html',
  styleUrls: ['./transform3-d.component.less']
})
export class Transform3DComponent implements OnInit {
  data3d: any = {
    trans: {x:'0',y:'0',z:'0'},
    scal: {x:'1',y:'1',z:'1'},
    rotat: {x:'0',y:'0',z:'1',deg:'45'},
    stylez: 'preserve-3d',
    visib: 'visible',
    perspec: '0',
    originz: {x: 50, y: 50, type: 'percentage', xx: 'left', yy: 'top'},
    transOrigin: {x: 50, y: 50, type: 'percentage', xx: 'left', yy: 'top'}
  };
  numReg1 : any = new RegExp("^[-]?\\d+$");
  numReg2 : any = new RegExp("^\\d+$");
  numReg3 : any = new RegExp("^\\d+(\\.\\d+)?$");
  numReg4 : any = new RegExp("^([0-1]{1})|(0\\.\\d+)$");

  @ViewChild('translate3dout1')
      Translate3doutRef1: ElementRef;
  selectTransform1: any = {
    trans: '', stytez: '', visib: '', perspec: '', originz: '', peroriginz: ''
  };
  @ViewChild('translate3dout2')
      Translate3doutRef2: ElementRef;
  selectTransform2: string = '';

  styleOptions: any[] = [
    {label: 'flat',value: 'flat',disable: false},
    {label: 'preserve-3d',value: 'preserve-3d',disable: false}
  ];
  visibOptions: any[] = [
    {label: 'visible',value: 'visible',disable: false},
    {label: 'hidden',value: 'hidden',disable: false}
  ];
  originTypes : any[] = [{label: '百分比',value: 'percentage',disable: false},
    {label: 'px',value: 'length',disable: false},
    {label: '方位',value: 'fangwei',disable: false}];
  fanwei: any = {
    x: [{label: 'left',value: 'left',disable: false},{label: 'right',value: 'right',disable: false},
      {label: 'center',value: 'center',disable: false}],
    y: [{label: 'top',value: 'top',disable: false},{label: 'bottom',value: 'bottom',disable: false},
      {label: 'center',value: 'center',disable: false}]
  };

  isShow3d02: number = 0;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  make3DTransformOut1(index: string) {
    if(index === '1') {
      this.selectTransform1.trans = '';
      this.selectTransform1.trans = `translate3d(${this.getValue(this.data3d.trans.x,0)}px,${this.getValue(this.data3d.trans.y,0)}px ,${this.getValue(this.data3d.trans.z,0)}px) ` +
          `scale3d(${+this.getValue(this.data3d.scal.x,2)},${+this.getValue(this.data3d.scal.y,2)},${+this.getValue(this.data3d.scal.y,2)}) ` +
          `rotate3d(${this.getValue(this.data3d.rotat.x,3)},${this.getValue(this.data3d.rotat.y,3)},${this.getValue(this.data3d.rotat.z,3)},${this.getValue(this.data3d.rotat.deg,0)}deg)`;
      this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'transform', this.selectTransform1.trans);
    }

    this.makePerspectiveOut(index);
    this.makePerspectiveOriginOut(index);
    this.makebackfaceVisibilityOut(index);
    this.maketransformStyleOut(index);
    this.maketransformOriginOut(index);
  }

  makePerspectiveOut(index: string) {
    if(index === '1') {
      this.selectTransform1.perspec = this.data3d.perspec;
      this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'perspective', this.selectTransform1.perspec);
    }
  }

  makePerspectiveOriginOut(index: string) {
    if(index === '1') {
      this.selectTransform1.peroriginz = this.data3d.transOrigin.type === 'fangwei' ? `${this.data3d.transOrigin.xx} ${this.data3d.transOrigin.yy}` :
      this.data3d.transOrigin.type === 'percentage' ? `${this.data3d.transOrigin.x}% ${this.data3d.transOrigin.y}%` :
          `${this.data3d.transOrigin.x}px ${this.data3d.transOrigin.y}px`;
      this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'perspectiveOrigin', this.selectTransform1.peroriginz);
    }
  }

  makebackfaceVisibilityOut(index: string) {
    if(index === '1') {
      this.selectTransform1.visib = this.data3d.visib;
      this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'backfaceVisibility', this.selectTransform1.visib);
    }
  }

  maketransformStyleOut(index: string) {
    if(index === '1') {
      this.selectTransform1.stylez = this.data3d.stytez;
      this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'transformStyle', this.selectTransform1.stylez);
    }
  }

  maketransformOriginOut(index: string) {
    if(index === '1') {
      this.selectTransform1.originz = this.data3d.originz.type === 'fangwei' ? `${this.data3d.originz.xx} ${this.data3d.originz.yy}` :
          this.data3d.originz.type === 'percentage' ? `${this.data3d.originz.x}% ${this.data3d.originz.y}%` :
              `${this.data3d.originz.x}px ${this.data3d.originz.y}px`;
      this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'transformOrigin', this.selectTransform1.originz);
    }
  }

  getValue(value : string, type : number) {
    return type === 0 ? (this.numReg1.test(value) ? value : '0') :
      type === 1 ? (this.numReg2.test(value) ? value : '1') :
      type === 2 ? (this.numReg3.test(value) ? value : '1') : (this.numReg4.test(value) ? value : '1');
  }
}
