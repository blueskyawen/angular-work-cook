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
    {name:'文本阴影',label:'text-shadow',isActive:false,isDisable:false},
    {name:'文本换行',label:'text-break',isActive:false,isDisable:false}];
  currentTab = this.tabItems[0].label;

  radiusData: any = {
    vertifys: [{value: 10}],
    aligns: []
  };

  @ViewChild('borderradiusout')
      BorderRadiusRef: ElementRef;
  selectBorderRadius: string = '';

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
    console.log(this.radiusData);
    this.selectBorderRadius = '';
    if(this.radiusData.vertifys.length === 0) {
      this.selectBorderRadius += '0';
    } else {
      let tempVerts = this.radiusData.vertifys.map(item => item.value+'px');
      this.selectBorderRadius += tempVerts.join(' ');
    }
    if(this.radiusData.aligns.length !== 0) {
      this.selectBorderRadius += '/ ';
      let tempAligns = this.radiusData.aligns.map(item => item.value+'px');
      this.selectBorderRadius += tempAligns.join(' ');
    }

    this.renderer.setStyle(this.BorderRadiusRef.nativeElement, 'borderRadius', this.selectBorderRadius);
  }

}
