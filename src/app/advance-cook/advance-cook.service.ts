import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdvanceCookService {

  constructor() { }

  getMessage() {
    return 'message from service providedIn root at LazyLoad module!'
  }
}
