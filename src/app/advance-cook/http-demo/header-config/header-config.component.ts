import { Component, OnInit } from '@angular/core';
import { HeadConfigService } from './head-config.service';
import { Config } from './config';

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
          name: data['name'],
          city:  data['city'],
          skill:  data['skill']
        });
  }

  showConfig_2() {
    this.headConfigService.getConfig_2()
        .subscribe((data: Config) => this.config = { ...data });
  }

  showError() {
    this.headConfigService.getConfigWithError()
        .subscribe(null,error => {
          this.error = error;
        });
  }

  showConfig_3() {
    this.headConfigService.getConfigWithResponse()
        .subscribe((resp : any) => {
          const keys = resp.headers.keys();
          this.headers = keys.map(key =>
              `${key}: ${resp.headers.get(key)}`);

          this.config = {...resp.body};
    });
  }


}
