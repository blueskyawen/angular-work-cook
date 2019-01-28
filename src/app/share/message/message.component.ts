import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../core/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.less']
})
export class MessageComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
