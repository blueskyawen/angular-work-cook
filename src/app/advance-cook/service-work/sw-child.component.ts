import { Component, OnInit } from '@angular/core';
import { ServiceWorkService } from './service-work.service';
import { AdvanceCookService } from '../advance-cook.service';

@Component({
  selector: 'app-sw-child',
  template: `
  <p>*********************</p>
  <p>SwChildComponent::: {{serviceWorkService.getMessage()}}</p>
  <p>*********************</p>
  <p>SwChildComponent::: {{advanceCookService.getMessage()}}</p>
  `,
  styles: []
})
export class SwChildComponent implements OnInit {

  constructor(public serviceWorkService : ServiceWorkService,
              public advanceCookService : AdvanceCookService) { }

  ngOnInit() {
  }

}
