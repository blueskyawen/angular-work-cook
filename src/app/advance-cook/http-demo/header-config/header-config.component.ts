import { Component, OnInit } from '@angular/core';
import { HeadConfigService } from './head-config.service';

@Component({
  selector: 'app-header-config',
  templateUrl: './header-config.component.html',
  styleUrls: ['./header-config.component.less']
})
export class HeaderConfigComponent implements OnInit {
  config : any;
  error: any;
  headers: string[];

  constructor(private headConfigService : HeadConfigService) { }

  ngOnInit() {
  }

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  showConfig() {
    this.headConfigService.getConfig()
        .subscribe((data: any) => this.config = {
          heroesUrl: data['heroesUrl'],
          textfile:  data['textfile']
        });
  }

}
