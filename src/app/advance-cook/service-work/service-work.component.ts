import { Component, OnInit } from '@angular/core';
import { AdvanceCookService } from '../advance-cook.service';
import { SwChildComponent } from './sw-child.component';

@Component({
  selector: 'app-service-work',
  templateUrl: './service-work.component.html',
  styleUrls: ['./service-work.component.less'],
})
export class ServiceWorkComponent implements OnInit {

  constructor(public advanceCookService : AdvanceCookService) { }

  ngOnInit() {
  }

}
