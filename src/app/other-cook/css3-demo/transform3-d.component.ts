import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-transform3-d',
  templateUrl: './transform3-d.component.html',
  styleUrls: ['./transform3-d.component.less']
})
export class Transform3DComponent implements OnInit {
  data3d1: any = {
    trans: {x:'0',y:'0',z:'0'},
    scal: {x:'1',y:'1',z:'1'},
    rotat: {x:'0',y:'0',z:'1',deg:'45'},
    stylez: 'preserve-3d',
    visib: 'visible',
    perspec: '0',
    originz: {x: 50, y: 50, type: 'percentage', xx: 'left', yy: 'top'},
    transOrigin: {x: 50, y: 50, type: 'percentage', xx: 'left', yy: 'top'}
  };
  data3d2: any;
  data3dList: any[] = [];
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
  selectTransform2: any = {
    trans: '', stytez: '', visib: '', perspec: '', originz: '', peroriginz: ''
  };
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
    this.data3dList.push(this.data3d1);
    this.data3d2 = JSON.parse(JSON.stringify(this.data3d1));
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
    this.makePerspectiveOut();
    this.makePerspectiveOriginOut();
    this.makebackfaceVisibilityOut();
    this.maketransformStyleOut();
    this.maketransformOriginOut();
  }

  makePerspectiveOut() {
    for(var i=0;i<this.data3dList.length;i++) {
      if(i === 0) {
        this.selectTransform1.perspec = this.data3dList[i].perspec;
        this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'perspective', this.selectTransform1.perspec);
      }
      if(i === 1) {
        this.selectTransform2.perspec = this.data3dList[i].perspec;
        this.renderer.setStyle(this.Translate3doutRef2.nativeElement, 'perspective', this.selectTransform2.perspec);
      }
    }
  }

  makePerspectiveOriginOut() {
    for(var i=0;i<this.data3dList.length;i++) {
      let data3d = this.data3dList[i];
      if(i === 0) {
        this.selectTransform1.perspec = data3d.transOrigin.type === 'fangwei' ? `${data3d.transOrigin.xx} ${data3d.transOrigin.yy}` :
            data3d.transOrigin.type === 'percentage' ? `${data3d.transOrigin.x}% ${data3d.transOrigin.y}%` :
                `${data3d.transOrigin.x}px ${data3d.transOrigin.y}px`;
        this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'perspectiveOrigin', this.selectTransform1.perspec);
      }
      if(i === 1) {
        this.selectTransform2.perspec = data3d.transOrigin.type === 'fangwei' ? `${data3d.transOrigin.xx} ${data3d.transOrigin.yy}` :
            data3d.transOrigin.type === 'percentage' ? `${data3d.transOrigin.x}% ${data3d.transOrigin.y}%` :
                `${data3d.transOrigin.x}px ${data3d.transOrigin.y}px`;
        this.renderer.setStyle(this.Translate3doutRef2.nativeElement, 'perspectiveOrigin', this.selectTransform2.perspec);
      }
    }
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

  maketransformStyleOut() {
    for(var i=0;i<this.data3dList.length;i++) {
      if(i === 0) {
        this.selectTransform1.stylez = this.data3dList[i].stylez;
        this.renderer.setStyle(this.Translate3doutRef1.nativeElement, 'transformStyle', this.selectTransform1.stylez);
      }
      if(i === 1) {
        this.selectTransform2.stylez = this.data3dList[i].stylez;
        this.renderer.setStyle(this.Translate3doutRef2.nativeElement, 'transformStyle', this.selectTransform2.stylez);
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

  getValue(value : string, type : number) {
    return type === 0 ? (this.numReg1.test(value) ? value : '0') :
      type === 1 ? (this.numReg2.test(value) ? value : '1') :
      type === 2 ? (this.numReg3.test(value) ? value : '1') : (this.numReg4.test(value) ? value : '1');
  }
}
