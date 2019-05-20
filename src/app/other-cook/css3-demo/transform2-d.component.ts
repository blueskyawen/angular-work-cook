import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-transform2-d',
  templateUrl: './transform2-d.component.html',
  styleUrls: ['./transform2-d.component.less']
})
export class Transform2DComponent implements OnInit {
  tabItems = [{name:'2D-translate',label:'translate',isActive:false,isDisable:false},
    {name:'2D-skew',label:'skew',isActive:false,isDisable:false}];
  currentTab = 'translate';
  transData: any = {
    x: '0',
    y: '0',
    deg: '0',
    scale_x: '1',
    scale_y: '1'
  };
  numReg1 : any = new RegExp("^[-]?\\d+$");
  numReg2 : any = new RegExp("^\\d+(.\\d+)?$");
  @ViewChild('translateout')
      TranslateoutRef: ElementRef;
  selectTransform: string = '';

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

  makeTransformOut() {
    this.selectTransform = '';
    this.selectTransform = 'translate('+`${this.getValue(this.transData.x,0)}px,${this.getValue(this.transData.y,0)}px) ` +
        `rotate(${this.getValue(this.transData.deg,0)}deg) ` +
        `scale(${this.getValue(this.transData.scale_x,1)},${this.getValue(this.transData.scale_y,1)})`;
    this.renderer.setStyle(this.TranslateoutRef.nativeElement, 'transform', this.selectTransform);
  }

  getValue(value : string, type : number) {
    return type === 0 ? (this.numReg1.test(value) ? value : '0') :
        (this.numReg2.test(value) ? value : '1');
  }

}
