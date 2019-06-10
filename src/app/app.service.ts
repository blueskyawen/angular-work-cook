import { Injectable } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(public title: Title) { }

  setTitle(title: string) {
    this.title.setTitle(title);
  }

  getTitle() {
    return this.title.getTitle();
  }
}
