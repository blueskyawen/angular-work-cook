import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-start-cards',
    templateUrl: './start-cards.component.html',
    styleUrls: ['./start-cards.component.less']
})
export class StartCardsComponent implements OnInit {
    cardItems: any[] = [
        {name: 'Rack-1', count: 1, dc: 'DC-01', env: 'Cloud-1', city: '上海', area: '浦东'},
        {name: 'Rack-2', count: 2, dc: 'DC-01', env: 'Cloud-2', city: '上海', area: '徐汇'},
        {name: 'Rack-3', count: 3, dc: 'DC-01', env: 'Cloud-3', city: '上海', area: '陆家嘴'},
        {name: 'Rack-4', count: 4, dc: 'DC-01', env: 'Cloud-4', city: '上海', area: '张江'},
        {name: 'Rack-5', count: 5, dc: 'DC-01', env: 'Cloud-5', city: '杭州', area: '西湖'},
        {name: 'Rack-6', count: 6, dc: 'DC-01', env: 'Cloud-6', city: '杭州', area: '滨江'},
        {name: 'Rack-7', count: 7, dc: 'DC-01', env: 'Cloud-7', city: '杭州', area: '下沙'},
        {name: 'Rack-8', count: 8, dc: 'DC-01', env: 'Cloud-8', city: '南京', area: '鼓楼'},
        {name: 'Rack-9', count: 5, dc: 'DC-01', env: 'Cloud-9', city: '南京', area: '雨花台'},
        {name: 'Rack-10', count: 9, dc: 'DC-01', env: 'Cloud-10', city: '南京', area: '河西'}
    ];
    constructor() { }

    ngOnInit() {
        this.cardItems.forEach(card => {
           card.countArr = [1,2,3,4,5,6];
        });
    }

}
