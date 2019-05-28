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
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559073798838&di=3c0e189a0cea1892416a64793fc772f3&imgtype=0&src=http%3A%2F%2Fcdn.lizhi.fm%2Fradio_cover%2F2014%2F06%2F06%2F12095383830898052.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559073922191&di=2822aaabfaad688cecfa58a690060e7d&imgtype=0&src=http%3A%2F%2Fimg.popo.cn%2Fuploads%2F567%2F893%2F1531348627912934.jpg',
    'http://img.zcool.cn/community/0192235b57e897a801215c8f787d52.png',
    'https://img0.utuku.china.com/650x0/ent/20181115/2adda3d1-03a9-47a5-bba4-58c95be453a5.jpg',
    'http://s10.sinaimg.cn/bmiddle/4e23be52e4697d4f62459',
    'http://images.3158.cn/data/attachment/zhifu/article/2017/12/15/9ac5ca22fd399f294b291fb0f4f5b87a.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
