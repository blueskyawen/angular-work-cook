import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  template: `
    <h2>改变属性</h2>
    <p appHighlight>Highlight me!</p>
    <div style="margin-top: 20px;">
      <span>请选择底色： </span>
      <nc-radio [options]="colors" [(value)]="selectColor"></nc-radio>
    </div>
    <p [appHighlight]="selectColor">Highlight me!</p>

    <h2>改变行为</h2>
    <div class="form-group">
      <label class="form-input-label">最小值： </label>
      <div class="form-input-content">
        <input type="text" name="inutMinNumber" [(ngModel)]="minNumber">
      </div>
    </div>
    <div class="form-group">
      <label class="form-input-label">请输入： </label>
      <div class="form-input-content">
        <input type="text" [appInputNumber]="minNumber" name="inutNumber" [(ngModel)]="number">
        <button class="button" (click)="add()">增加</button>
        <button class="button" (click)="des()">减少</button>
      </div>
    </div>

    <h2>Greet指令</h2>
    <h4 [greet]="'Hello, Semlinker!'" author="semlinker22">Hello, Angular</h4>
  `,
  styles: ['input {height:30px;width:200px;border:solid 1px #ccc;border-radius:3px;}']
})
export class AttrDirectiveComponent implements OnInit {
  minNumber : any = 1;
  number : any = 2;
  colors : any[] = [
    {label: 'Gold', value: '#FFD700',disabled:false},
    {label: 'PowderBlue', value: '#B0E0E6',disabled:false},
    {label: 'Wheat', value: '#F5DEB3',disabled:false}
  ];
  selectColor : string = '#FFD700';

  constructor() { }

  ngOnInit() {
  }

  add() {
    this.number++;
  }

  des() {
    this.number--;
  }
}
