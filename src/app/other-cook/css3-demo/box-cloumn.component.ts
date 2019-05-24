import { Component, OnInit, ElementRef, Renderer2, ViewChild  } from '@angular/core';

@Component({
  selector: 'app-box-cloumn',
  templateUrl: './box-cloumn.component.html',
  styleUrls: ['./box-cloumn.component.less']
})
export class BoxCloumnComponent implements OnInit {
  @ViewChild('columnh2')
    Columnh2Ref: ElementRef;
  colomnStr1: string = '';
  @ViewChild('columnh3')
    Columnh3Ref: ElementRef;
  colomnStr2: string = '';
  @ViewChild('columnsss')
    ColumnsssRef: ElementRef;
  colomnStr3: string = '';

  data: any = {
    count: 3,grap:20,rule:{color:'#ccc',stylez:'solid',widthz:5},colspan:'all'
  };
  spanOptions: any[] = [
    {label: '1',value: '1',disable: false},
    {label: 'all',value: 'all',disable: false}
  ];
  styleOptions: any[] = [
    {label: 'none',value: 'none',disable: false},
    {label: 'hidden',value: 'hidden',disable: false},
    {label: 'dotted',value: 'dotted',disable: false},
    {label: 'dashed',value: 'dashed',disable: false},
    {label: 'solid',value: 'solid',disable: false},
    {label: 'double',value: 'double',disable: false},
    {label: 'groove',value: 'groove',disable: false},
    {label: 'ridge',value: 'ridge',disable: false},
    {label: 'inset',value: 'inset',disable: false},
    {label: 'outset',value: 'outset',disable: false}
  ];

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  makecolumnOut() {
    this.colomnStr2 = this.data.colspan;
    this.renderer.setStyle(this.Columnh3Ref.nativeElement, 'columnSpan', this.colomnStr2);
    this.colomnStr3 = `${this.data.rule.widthz}px ${this.data.rule.stylez} ${this.data.rule.color}`;
    this.renderer.setStyle(this.ColumnsssRef.nativeElement, 'columnRule', this.colomnStr3);
    this.renderer.setStyle(this.ColumnsssRef.nativeElement, 'columnCount', this.data.count);
    this.renderer.setStyle(this.ColumnsssRef.nativeElement, 'columnGap', `${this.data.grap}px`);
  }

}
