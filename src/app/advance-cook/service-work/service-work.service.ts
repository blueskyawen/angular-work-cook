import { Injectable } from '@angular/core';

@Injectable()
export class ServiceWorkService {

  constructor() { }

  getMessage() {
    return 'message from service providedIn AdvanceCookModule at LazyLoad module!'
  }
}
