import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-struct-directive',
  template: `
    <p>接受源字符串，当输入是数字时添加；输入是非数字或空串，移除宿主元素</p>
    <div>
      <label>请输入： </label>
      <input type="text" name="input" [(ngModel)]="myValue">
    </div>
    <p *numIf="myValue">输入的值是： {{myValue}}</p>
  `,
  styles: ['input {height:30px;width:200px;border:solid 1px #ccc;border-radius:3px;}']
})
export class StructDirectiveComponent implements OnInit {
  myValue : any = 2;

  constructor() { }

  ngOnInit() {
  }

}
