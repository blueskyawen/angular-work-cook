import { Component,ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { createCustomElement,NgElement, WithProperties } from '@angular/elements';
import { PopupComponent } from './popup.component';

@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['./custom-element.component.less']
})
export class CustomElementComponent {
  message : string = 'AAAAA';
  show : boolean = false;

  constructor(public injector: Injector, private applicationRef: ApplicationRef,
              private componentFactoryResolver: ComponentFactoryResolver) {
    // Convert `PopupComponent` to a custom element.
    //const PopupElement = createCustomElement(PopupComponent, {injector: this.injector});
    // Register the custom element with the browser.
    //customElements.define('popup-element', PopupElement);
  }

  showAsComponent() {
    // Create element
    const popup = document.createElement('popup-component');

    // Create the component and wire it up with the element
    const factory = this.componentFactoryResolver.resolveComponentFactory(PopupComponent);
    const popupComponentRef = factory.create(this.injector, [], popup);

    // Attach to the view so that the change detector knows to run
    this.applicationRef.attachView(popupComponentRef.hostView);

    // Listen to the close event
    popupComponentRef.instance.closed.subscribe(() => {
      document.getElementById('customEle').removeChild(popup);
      this.applicationRef.detachView(popupComponentRef.hostView);
    });

    // Set the message
    popupComponentRef.instance.message = 'Popup by 动态组件: ' + this.message;

    // Add to the DOM
    document.getElementById('customEle').appendChild(popup);
  }

  // This uses the new custom-element method to add the popup to the DOM.
  showAsElement() {
    // Create element
    const popupEl: NgElement & WithProperties<PopupComponent> = document.createElement('popup-element') as any;

    // Listen to the close event
    popupEl.addEventListener('closed', () => document.getElementById('customEle').removeChild(popupEl));

    // Set the message
    popupEl.message = 'Popup by 自定义元素: ' + this.message;

    // Add to the DOM
    document.getElementById('customEle').appendChild(popupEl);
  }

  showIt() {
    this.show = !this.show;
  }

}

