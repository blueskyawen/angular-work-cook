import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';
import { AdDirective } from './ad.directive';

@Component({
  selector: 'app-dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.less']
})
export class DynamicCompComponent implements OnInit {
  ads: AdItem[];
  currentAdIndex = -1;
  @ViewChild(AdDirective) adHost: AdDirective;
  interval: any;

  constructor(private adService: AdService,
              private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
    this.loadComponent();
    this.startAdInterval();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    let adItem = this.ads[this.currentAdIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    let viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance).data = adItem.data;
  }

  startAdInterval() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
