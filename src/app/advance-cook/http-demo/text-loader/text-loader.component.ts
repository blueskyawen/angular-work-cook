import { Component, OnInit } from '@angular/core';
import { TextLoadService } from './text-load.service';

@Component({
  selector: 'app-text-loader',
  templateUrl: './text-loader.component.html',
  styleUrls: ['./text-loader.component.less']
})
export class TextLoaderComponent implements OnInit {
  contents : string;

  constructor(private textLoadService : TextLoadService) { }

  ngOnInit() {
  }

  clear() {
    this.contents = undefined;
  }

  download() {
    this.textLoadService.getTextFile('assets/not-json.txt')
        .subscribe(data => this.contents = data);
  }
}
