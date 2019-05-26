import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotate-cube',
  templateUrl: './rotate-cube.component.html',
  styleUrls: ['./rotate-cube.component.less']
})
export class RotateCubeComponent implements OnInit {
  photos: string[] = [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558875566438&di=60db2803401e27309de81e33aa2fc051&imgtype=0&src=http%3A%2F%2Fimg845.ph.126.net%2FELvQa5h9rwt9uwvGEM_g8A%3D%3D%2F911697449567495419.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558875730972&di=01f34db6b7f803e59ad553dbcaeba07f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201306%2F08%2F20130608132357_EaLkY.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558875779830&di=8008bd205e46d98b516685a404ad65fa&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Fa33090f0a3b65d16045d69cd52753e354ba1c5772bdcd-DVa5yX_fw658',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558875816093&di=17116fd3d5148bbeadb5e6b2e24f05b8&imgtype=0&src=http%3A%2F%2Fimgtu.5011.net%2Fuploads%2Fcontent%2F20160811%2F2912771470885594.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558875833971&di=cafdf4885316dcffdd6edb463f620ddc&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201604%2F21%2F20160421160436_5TsmE.thumb.700_0.jpeg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558875890920&di=e77fc54b5c6380c9475f7403ec553188&imgtype=0&src=http%3A%2F%2Fdmimg.5054399.com%2Fallimg%2F110618%2F11_110618152415_1.jpg'
  ];
  photos2: string[] = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558875566438&di=60db2803401e27309de81e33aa2fc051&imgtype=0&src=http%3A%2F%2Fimg845.ph.126.net%2FELvQa5h9rwt9uwvGEM_g8A%3D%3D%2F911697449567495419.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
