import { Component, OnInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.less']
})
export class TextBoxComponent implements OnInit {
  tabItems = [{name:'圆角',label:'border-radius',isActive:true,isDisable:false},
    {name:'边框图片',label:'border-image',isActive:false,isDisable:false},
    {name:'文本阴影',label:'text-shadow',isActive:false,isDisable:false}];
  currentTab = this.tabItems[0].label;

  radiusData: any = {
    vertifys: [{value: 10}],
    aligns: []
  };

  @ViewChild('borderradiusout')
      BorderRadiusRef: ElementRef;
  selectBorderRadius: string = '';

  borderImageData: any = {
    slices: [{value: 170}],
    widths: [{value: 20}],
    outsets: [{value: 20}],
    repeatzz: 'stretch'
  };
  repeatzzOptions: any[] = [
    {label: 'stretch',value: 'stretch',disable: false},
    {label: 'repeat',value: 'repeat',disable: false},
    {label: 'round',value: 'round',disable: false},
    {label: 'space',value: 'space',disable: false},
    {label: 'initial',value: 'initial',disable: false},
    {label: 'inherit',value: 'inherit',disable: false}
  ];

  @ViewChild('borderImageout')
      BorderImageRef: ElementRef;
  selectBorderImage: string = '';

  @ViewChild('textShadowout')
      TextShadowRef: ElementRef;
  textShadowList: any[] = [
    {
      color: '#FF6B66',
      x_offset: 5,
      y_offset: 5,
      blur_ju: 1
    }
  ];
  selectTextShadow: string = '';
  numReg1 : any = new RegExp("^[-]?\\d+$");
  numReg2 : any = new RegExp("^\\d+$");

  constructor(private renderer: Renderer2,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.currentTab = params.get('type');
    });
  }

  operVertifyItem(type: string) {
    if(type === 'add') {
      if(this.radiusData.vertifys.length === 4) {
        return;
      }
      this.radiusData.vertifys.push({value: 10});
    } else {
      if(this.radiusData.vertifys.length === 1) {
        return;
      }
      this.radiusData.vertifys.pop();
    }
  }

  operAlignItem(type: string) {
    if(type === 'add') {
      if(this.radiusData.aligns.length === 4) {
        return;
      }
      this.radiusData.aligns.push({value: 10});
    } else {
      if(this.radiusData.aligns.length === 0) {
        return;
      }
      this.radiusData.aligns.pop();
    }
  }

  makeBorderRadiusOut() {
    this.selectBorderRadius = '';
    if(this.radiusData.vertifys.length === 0) {
      this.selectBorderRadius += '0';
    } else {
      let tempVerts = this.radiusData.vertifys.map(item => item.value+'px');
      this.selectBorderRadius += tempVerts.join(' ');
    }
    if(this.radiusData.aligns.length !== 0) {
      this.selectBorderRadius += ' / ';
      let tempAligns = this.radiusData.aligns.map(item => item.value+'px');
      this.selectBorderRadius += tempAligns.join(' ');
    }

    this.renderer.setStyle(this.BorderRadiusRef.nativeElement, 'borderRadius', this.selectBorderRadius);
  }

  makeBorderImageOut() {
    this.selectBorderImage = 'url("https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3721390607,2141480961&fm=26&gp=0.jpg") ';
    let tempSlices = this.borderImageData.slices.map(item => item.value);
    this.selectBorderImage += tempSlices.join(' ');
    this.selectBorderImage += ' / ';
    let tempWidths = this.borderImageData.widths.map(item => item.value+'px');
    this.selectBorderImage += tempWidths.join(' ');
    this.selectBorderImage += ' / ';
    let tempOutsets = this.borderImageData.outsets.map(item => item.value+'px');
    this.selectBorderImage += tempOutsets.join(' ');
    this.selectBorderImage += ' ' + this.borderImageData.repeatzz;

    this.renderer.setStyle(this.BorderImageRef.nativeElement, 'borderImage', this.selectBorderImage);
  }

  operSliceItem(type: string) {
    if(type === 'add') {
      if(this.borderImageData.slices.length === 4) {
        return;
      }
      this.borderImageData.slices.push({value: 170});
    } else {
      if(this.borderImageData.slices.length === 1) {
        return;
      }
      this.borderImageData.slices.pop();
    }
  }

  operWidthItem(type: string) {
    if(type === 'add') {
      if(this.borderImageData.widths.length === 4) {
        return;
      }
      this.borderImageData.widths.push({value: 170});
    } else {
      if(this.borderImageData.widths.length === 1) {
        return;
      }
      this.borderImageData.widths.pop();
    }
  }

  operOutsetItem(type: string) {
    if(type === 'add') {
      if(this.borderImageData.outsets.length === 4) {
        return;
      }
      this.borderImageData.outsets.push({value: 170});
    } else {
      if(this.borderImageData.outsets.length === 1) {
        return;
      }
      this.borderImageData.outsets.pop();
    }
  }

  makeTextShadowOut() {
    this.selectTextShadow = '';
    for (let index=0;index < this.textShadowList.length;index++) {
      if(index !== 0) {
        this.selectTextShadow += ',';
      }
      this.selectTextShadow += `${this.getCheckValue(this.textShadowList[index].x_offset, 0)} ${this.getCheckValue(this.textShadowList[index].y_offset, 0)}
      ${this.getCheckValue(this.textShadowList[index].blur_ju, 1)} ${this.textShadowList[index].color}`;
    }
    this.renderer.setStyle(this.TextShadowRef.nativeElement, 'textShadow', this.selectTextShadow);
  }

  getCheckValue(value: any,flag: number) {
    let regexp = flag === 0 ? this.numReg1 : this.numReg2;
    return regexp.test(value) ? `${value}px` : 0;
  }

  delShadowItem(index: number) {
    this.textShadowList.splice(index, 1);
  }

  addShadowItem() {
    this.textShadowList.push({
      color: '#FF6B66',
      x_offset: 5,
      y_offset: 5,
      blur_ju: 1
    });
  }

}
