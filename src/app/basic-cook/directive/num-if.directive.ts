import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[numIf]'
})
export class NumIfDirective {
  private hasView = false;

  constructor(private templateRef: TemplateRef<any>,
              private viewContainer: ViewContainerRef) {

  }

  @Input() set numIf(condition: any) {
    if (condition && !isNaN(condition) && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (isNaN(condition) && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }


}
