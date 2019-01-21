import { Directive, ElementRef,HostListener,Input  } from '@angular/core';

@Directive({
  selector: '[appInputNumber]'
})
export class InputNumberDirective {
  @Input('appInputNumber') min_number: any;

  constructor(private el: ElementRef) {
  }

  @HostListener('focusin') onFocusIn() {
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('focusout') onFocusOut() {
    this.el.nativeElement.style.backgroundColor = '#ffffff';
  }

  @HostListener('keyup') onkeyup() {
    if(!Number(this.el.nativeElement.value) ||
        (Number(this.el.nativeElement.value) < this.min_number)) {
      this.el.nativeElement.value = this.min_number;
    }
  }

  @HostListener('paste') onPaste() {
    return false;
  }

  @HostListener('keypress') onkeypress() {
    return true;
  }

  @HostListener('keydown') onkeydown() {
    return true;
  }
}
