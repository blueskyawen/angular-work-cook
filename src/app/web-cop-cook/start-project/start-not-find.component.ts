import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-start-not-find',
    template: '<h1 class="noRight">暂时无权访问！</h1>',
    styles: ['.noRight {text-align: center;margin-top: 120px;font-size: 30px;}']
})
export class StartNotFindComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }

}
