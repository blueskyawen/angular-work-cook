import { Component, OnInit } from '@angular/core';
import { UnloaderService } from './unloader.service';

@Component({
  selector: 'app-unloader',
  templateUrl: './unloader.component.html',
  styleUrls: ['./unloader.component.less']
})
export class UnloaderComponent implements OnInit {
  message: string;

  constructor(private uploaderService : UnloaderService) { }

  ngOnInit() {
  }

  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
          msg => {
            input.value = null;
            this.message = msg;
          }
      );
    }
  }
}
