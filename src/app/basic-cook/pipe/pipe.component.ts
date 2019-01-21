import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  template: `
  <div>
    <label>请输入： </label>
    <input type="text" name="input" [(ngModel)]="inputValue">
    <span>MB</span>
  </div>
  <p>使用管道转换后： {{inputValue | transverter}}</p>
  `,
  styles: []
})
export class PipeComponent implements OnInit {
  inputValue : any = 1024;

  constructor() { }

  ngOnInit() {
  }

}
