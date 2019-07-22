import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-start-cards-more',
    templateUrl: './start-cards-more.component.html',
    styleUrls: ['./start-cards-more.component.less']
})
export class StartCardsMoreComponent implements OnInit {
    cardItems: any[] = [
        {id: 1, name: 'Rack-1', count: 1, city: '上海', area: '浦东', env: 'Cloud-1'},
        {id: 2, name: 'Rack-2', count: 2, city: '上海', area: '徐汇', env: 'Cloud-2'},
        {id: 3, name: 'Rack-3', count: 3, city: '上海', area: '陆家嘴', env: 'Cloud-3'},
        {id: 4, name: 'Rack-4', count: 4, city: '上海', area: '张江', env: 'Cloud-4'},
        {id: 5, name: 'Rack-5', count: 5, city: '杭州', area: '西湖', env: 'Cloud-5'},
        {id: 6, name: 'Rack-6', count: 6, city: '杭州', area: '滨江', env: 'Cloud-6'},
        {id: 7, name: 'Rack-7', count: 5, city: '杭州', area: '下沙', env: 'Cloud-7'}
    ];
    constructor() { }

    ngOnInit() {
        this.cardItems.forEach(card => {
            card.countArr = [1,2,3,4,5,6];
        });
    }

    delItem(item: any) {
        let index = this.cardItems.findIndex(card => card.id === item.id);
        this.cardItems.splice(index, 1);
    }

    addItem() {
        this.cardItems.push({
            id: this.cardItems[this.cardItems.length - 1].id + 1,
            name: 'Rack-1',
            count: Math.round(Math.random() * 7),
            city: '上海',
            area: '浦东',
            countArr: [1,2,3,4,5,6]
        });
    }

}
