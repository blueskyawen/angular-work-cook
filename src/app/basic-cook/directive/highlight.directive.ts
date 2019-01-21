import { Directive,ElementRef,HostListener,Input  } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  exportAs: 'myHighlight'
})
export class HighlightDirective {
  @Input('appHighlight') highlightColor : string;

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
