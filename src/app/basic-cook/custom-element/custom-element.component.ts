import { Component, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup.component';

@Component({
  selector: 'app-custom-element',
  templateUrl: './custom-element.component.html',
  styleUrls: ['./custom-element.component.less']
})
export class CustomElementComponent {
  message : string = 'AAAAA';

  constructor(public injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector: this.injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }


}
