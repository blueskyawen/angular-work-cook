import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temple-form',
  templateUrl: './temple-form.component.html',
  styleUrls: ['./temple-form.component.less']
})
export class TempleFormComponent implements OnInit {
  name : any;
  sexs : any[] = [{'name':'女','value':'famale'},{'name':'男','value':'male'}];
  selectSex : any = 'male';
  shengri : any = '1990-01-01';
  password : any;
  address : any = {'country': '','city': ''};
  likes : any[] = [{'name':'看电视','value':'Watch Tv','isChecked':false},
    {'name':'读书','value':'Book','isChecked':false}];
  selectLike : any = '';
  skills : any[] = [{'value':'','isChecked':false}];
  baocuns : any[] = [{'name':'是','value':'Yes','isChecked':false},{'name':'否','value':'No','isChecked':false}];
  selectbao : any;

  constructor() {

  }

  ngOnInit() {
  }

  selectLikes() {
    this.selectLike = '';
    this.likes.forEach((like) => {
      if(like.isChecked) {
        this.selectLike += like.value + '; ';
      }
    });
  }

  addSkill() {
    let temp = {'value':'','isChecked':false};
    this.skills.push(temp);
  }

  delSkill(item : any) {
    let index = this.skills.indexOf(item);
    if(index !== -1) {
      this.skills.splice(index,1);
    }
  }

  save() {
    console.log('===save===');
  }

}
