import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transform3-d',
  templateUrl: './transform3-d.component.html',
  styleUrls: ['./transform3-d.component.less']
})
export class Transform3DComponent implements OnInit {
  data3dfath: any = {
    stylez: 'preserve-3d',
    perspec: '0',
    transOrigin: {x: 50, y: 50, type: 'percentage', xx: 'left', yy: 'top'}
  };
  selectFather: any = {stylez: '', perspec: '', originzz: ''};
  data3dList: any[] = [
    {
      trans: {x:'0',y:'0',z:'0'},
      scal: {x:'1',y:'1',z:'1'},
      rotat: {x:'0',y:'0',z:'1',deg:'45'},
      visib: 'visible',
      originz: {x: 50, y: 50, type: 'percentage', xx: 'left', yy: 'top'}
    }
  ];
  data3d2: any = {
    trans: {x:'0',y:'0',z:'0'},
    scal: {x:'1',y:'1',z:'1'},
    rotat: {x:'0',y:'0',z:'1',deg:'45'},
    visib: 'visible',
    originz: {x: 50, y: 50, type: 'percentage', xx: 'left', yy: 'top'}
  };
  numReg1 : any = new RegExp("^[-]?\\d+$");
  numReg2 : any = new RegExp("^\\d+$");
  numReg3 : any = new RegExp("^\\d+(\\.\\d+)?$");
  numReg4 : any = new RegExp("^([0-1]{1})|(0\\.\\d+)$");

  @ViewChild('translate3dout1')
      Translate3doutRef1: ElementRef;
  selectTransform1: any = {trans: '', visib: '', originz: ''};
  @ViewChild('translate3dout2')
      Translate3doutRef2: ElementRef;
  selectTransform2: any = {trans: '', visib: '', originz: ''};
  @ViewChild('translate3dContainer')
      Translate3dContainer: ElementRef;
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

  checkedChange() {
    if(this.isShow3d02 === 1) {
      this.data3dList.push(this.data3d2);
    } else {
      this.data3dList.pop();
    }
  }

  make3DTransformOut1() {
    for(var i=0;i<this.data3dList.length;i++) {
      let dataItem = this.data3dList[i];
      if(i === 0) {
        this.selectTransform1.trans = '';
        this.selectTransform1.trans = `translate3d(${this.getValue(dataItem.trans.x,0)}px,${this.getValue(dataItem.trans.y,0)}px ,${this.getValue(dataItem.trans.z,0)}px) ` +
            `scale3d(${+this.getValue(dataItem.scal.x,2)},${+this.getValue(dataItem.scal.y,2)},${+this.getValue(dataItem.scal.y,2)}) ` +
            `rotate3d(${this.getValue(dataItem.rotat.x,3)},${this.getValue(dataItem.rotat.y,3)},${this.getValue(dataItem.rotat.z,3)},${this.getValue(dataItem.rotat.deg,0)}deg)`;
        this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'transform', this.selectTransform1.trans);
      }
      if(i === 1) {
        this.selectTransform2.trans = '';
        this.selectTransform2.trans = `translate3d(${this.getValue(dataItem.trans.x,0)}px,${this.getValue(dataItem.trans.y,0)}px ,${this.getValue(dataItem.trans.z,0)}px) ` +
            `scale3d(${+this.getValue(dataItem.scal.x,2)},${+this.getValue(dataItem.scal.y,2)},${+this.getValue(dataItem.scal.y,2)}) ` +
            `rotate3d(${this.getValue(dataItem.rotat.x,3)},${this.getValue(dataItem.rotat.y,3)},${this.getValue(dataItem.rotat.z,3)},${this.getValue(dataItem.rotat.deg,0)}deg)`;
        this.renderer.setStyle(this.Translate3doutRef2.nativeElement, 'transform', this.selectTransform2.trans);
      }
    }

    this.makebackfaceVisibilityOut();
    this.maketransformOriginOut();
    this.make3DTransformOutFather();
  }

  makebackfaceVisibilityOut() {
    for(var i=0;i<this.data3dList.length;i++) {
      if(i === 0) {
        this.selectTransform1.visib = this.data3dList[i].visib;
        this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'backfaceVisibility', this.selectTransform1.visib);
      }
      if(i === 1) {
        this.selectTransform2.visib = this.data3dList[i].visib;
        this.renderer.setStyle(this.Translate3doutRef2.nativeElement, 'backfaceVisibility', this.selectTransform2.visib);
      }
    }
  }

  maketransformOriginOut() {
    for(var i=0;i<this.data3dList.length;i++) {
      let data3d = this.data3dList[i];
      if(i === 0) {
        this.selectTransform1.originz = data3d.originz.type === 'fangwei' ? `${data3d.originz.xx} ${data3d.originz.yy}` :
            data3d.originz.type === 'percentage' ? `${data3d.originz.x}% ${data3d.originz.y}%` :
                `${data3d.originz.x}px ${data3d.originz.y}px`;
        this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'transformOrigin', this.selectTransform1.originz);
      }
      if(i === 1) {
        this.selectTransform2.originz = data3d.originz.type === 'fangwei' ? `${data3d.originz.xx} ${data3d.originz.yy}` :
            data3d.originz.type === 'percentage' ? `${data3d.originz.x}% ${data3d.originz.y}%` :
                `${data3d.originz.x}px ${data3d.originz.y}px`;
        this.renderer.setStyle(this.Translate3doutRef2.nativeElement, 'transformOrigin', this.selectTransform2.originz);
      }
    }
  }

  make3DTransformOutFather() {
    this.makePerspectiveOut();
    this.makePerspectiveOriginOut();
    this.maketransformStyleOut();
  }

  makePerspectiveOut() {
    this.selectFather.perspec = this.data3dfath.perspec+'px';
    this.renderer.setStyle(this.Translate3dContainer.nativeElement, 'perspective', this.selectFather.perspec);
  }

  makePerspectiveOriginOut() {
    this.selectFather.originzz = '';
    this.selectFather.originzz = this.data3dfath.transOrigin.type === 'fangwei' ? `${this.data3dfath.transOrigin.xx} ${this.data3dfath.transOrigin.yy}` :
        this.data3dfath.transOrigin.type === 'percentage' ? `${this.data3dfath.transOrigin.x}% ${this.data3dfath.transOrigin.y}%` :
            `${this.data3dfath.transOrigin.x}px ${this.data3dfath.transOrigin.y}px`;
    this.renderer.setStyle(this.Translate3dContainer.nativeElement, 'perspectiveOrigin', this.selectFather.originzz);
  }

  maketransformStyleOut() {
    this.selectFather.stylez = this.data3dfath.stylez;
    this.renderer.setStyle(this.Translate3dContainer.nativeElement, 'transformStyle', this.selectFather.stylez);
  }

  getValue(value : string, type : number) {
    return type === 0 ? (this.numReg1.test(value) ? value : '0') :
      type === 1 ? (this.numReg2.test(value) ? value : '1') :
      type === 2 ? (this.numReg3.test(value) ? value : '1') : (this.numReg4.test(value) ? value : '1');
  }
}
