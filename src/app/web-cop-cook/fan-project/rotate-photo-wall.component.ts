import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotate-photo-wall',
  templateUrl: './rotate-photo-wall.component.html',
  styleUrls: ['./rotate-photo-wall.component.less']
})
export class RotatePhotoWallComponent implements OnInit {
  images: string[] = [
    'http://5b0988e595225.cdn.sohucs.com/images/20181112/eea860f482ef42d29e38aac6c0227ef6.jpeg',
    'http://images.3158.cn/data/attachment/zhifu/article/2017/12/15/9ac5ca22fd399f294b291fb0f4f5b87a.jpg',
    'http://pic3.16pic.com/00/04/57/16pic_457652_b.jpg',
    'http://b-ssl.duitang.com/uploads/item/201704/08/20170408163234_kHvAt.jpeg',
    'http://b-ssl.duitang.com/uploads/item/201503/22/20150322122457_EQ3NP.thumb.700_0.jpeg',
    'http://img.zcool.cn/community/0192235b57e897a801215c8f787d52.png',
    'https://img0.utuku.china.com/650x0/ent/20181115/2adda3d1-03a9-47a5-bba4-58c95be453a5.jpg',
    'http://s10.sinaimg.cn/bmiddle/4e23be52e4697d4f62459',
    'http://images.3158.cn/data/attachment/zhifu/article/2017/12/15/9ac5ca22fd399f294b291fb0f4f5b87a.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
