import {Component, ElementRef, OnInit, AfterViewInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-box-shadow-lizi',
  templateUrl: './box-shadow-lizi.component.html',
  styleUrls: ['./box-shadow-lizi.component.less']
})
export class BoxShadowLiziComponent implements OnInit {
  operTitle: string = '下一步';
  stepIndex: number = 0;
  selectOut: string = '';
  @ViewChild('boxshadowout')
  BoxOutRef: ElementRef;
  shadowOut: any = {
    x_offset: 0,
    y_offset: 0,
    blur_ju: 0,
    spread: 20
  };
  numReg1 : any = new RegExp("^[-]?\\d+$");
  numReg2 : any = new RegExp("^\\d+$");
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  nextStep() {
    if(this.stepIndex === 3) {
      this.operTitle = '下一步';
      this.stepIndex = 0;
    } else {
      this.stepIndex++;
    }
    if(this.stepIndex === 3) {
      this.operTitle = '重新开始';
    }
  }

  makeShadowOut() {
    this.selectOut = `${this.getCheckValue(this.shadowOut.x_offset, 0)} ${this.getCheckValue(this.shadowOut.y_offset, 0)} 
    ${this.getCheckValue(this.shadowOut.blur_ju, 1)} ${this.getCheckValue(this.shadowOut.spread, 0)} #ffcc66`;
    this.renderer.setStyle(this.BoxOutRef.nativeElement, 'boxShadow', this.selectOut);
  }

  getCheckValue(value: any,flag: number) {
    let regexp = flag === 0 ? this.numReg1 : this.numReg2;
    return regexp.test(value) ? `${value}px` : 0;
  }

}
