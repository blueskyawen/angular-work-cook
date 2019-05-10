import { Component, OnInit, ElementRef, AfterViewInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-box-shadow-demo',
  templateUrl: './box-shadow-demo.component.html',
  styleUrls: ['./box-shadow-demo.component.less']
})
export class BoxShadowDemoComponent implements OnInit {
  numReg1 : any = new RegExp("^[-]?\\d+$");
  numReg2 : any = new RegExp("^\\d+$");
  selectInset: string = '';
  @ViewChild('boxshadowinset')
  BoxInsetRef: ElementRef;
  @ViewChild('shadowColor')
  BoxColorRef: ElementRef;
  shadowInsetList: any[] = [
    {
      color: '#ffcc66',
      x_offset: 0,
      y_offset: 0,
      blur_ju: 0,
      spread: 20
    }
  ];
  operTitle: string = '开始演示';
  stepIndex: number = 0;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  startShow() {
    if(this.stepIndex !== 0) {
      return;
    }
    this.nextStep();
  }

  nextStep() {
    this.stepIndex++;
    if(this.stepIndex < 6) {
      setTimeout(() => {
        this.nextStep();
      },2000);
    } else {
      this.stepIndex = 0;
    }
  }

  makeShadowInset() {
    this.selectInset = '';
    for (let index=0;index < this.shadowInsetList.length;index++) {
      if(index !== 0) {
        this.selectInset += ',';
      }
      this.selectInset += `${this.getCheckValue(this.shadowInsetList[index].x_offset, 0)} ${this.getCheckValue(this.shadowInsetList[index].y_offset, 0)}
    ${this.getCheckValue(this.shadowInsetList[index].blur_ju, 1)} ${this.getCheckValue(this.shadowInsetList[index].spread, 0)} ${this.shadowInsetList[index].color} inset`;
    }
    this.renderer.setStyle(this.BoxInsetRef.nativeElement, 'boxShadow', this.selectInset);
  }

  getCheckValue(value: any,flag: number) {
    let regexp = flag === 0 ? this.numReg1 : this.numReg2;
    return regexp.test(value) ? `${value}px` : 0;
  }

  delShadowItem(index: number) {
    this.shadowInsetList.splice(index, 1);
  }

  addShadowItem() {
    this.shadowInsetList.push({
      color: '#ffcc66',
      x_offset: 0,
      y_offset: 0,
      blur_ju: 0,
      spread: 20
    });
  }
}
