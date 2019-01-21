import { NgModule } from '@angular/core';
import { ShareModule } from '../../share/share.module';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicControlComponent } from './dynamic-control.component';

@NgModule({
  declarations: [DynamicFormComponent, DynamicControlComponent],
  imports: [
    ShareModule
  ],
  exports: [DynamicFormComponent]
})
export class DynamicFormModule { }
