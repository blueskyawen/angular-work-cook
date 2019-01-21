import { Component, OnInit, Input } from '@angular/core';
import { FormControlBase } from './form-control-base';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.less']
})
export class DynamicControlComponent implements OnInit {
  @Input() question: FormControlBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
}
