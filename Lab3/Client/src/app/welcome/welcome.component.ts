import {Component, OnInit} from '@angular/core';
import {ChatService} from '../chat.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  nickname = '';

  constructor(private chat: ChatService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.nickname.length) {
      return;
    }

    this.chat.join(this.nickname);
  }
}
