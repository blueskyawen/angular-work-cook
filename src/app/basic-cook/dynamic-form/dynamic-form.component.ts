import { Component, OnInit } from '@angular/core';
import { FormControlBase } from './form-control-base';
import { DynamicFormService } from './dynamic-form.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less']
})
export class DynamicFormComponent implements OnInit {
  questions: FormControlBase<any>[];
  payLoad : string = '';
  form : FormGroup;


  constructor(private dynamicFormService : DynamicFormService) {
    this.questions = this.dynamicFormService.getQuestions();
  }

  ngOnInit() {
    this.form = this.dynamicFormService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
