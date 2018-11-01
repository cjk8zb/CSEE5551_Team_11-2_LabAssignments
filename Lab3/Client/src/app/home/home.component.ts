import {Component, OnInit} from '@angular/core';
import {ChatService} from '../chat.service';

interface TopicsInterface {
  [name: string]: { messages: any[], unread?: number };
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentMessage = '';

  topics: TopicsInterface = {};

  currentTopic = '';
  newTopic = '';

  constructor(private chat: ChatService) {
    this.chat.listener = json => {
      console.log('home json', json);
      if (json.message) {
        const key = json.message.topic;
        const topic = this.topics[key];
        topic.messages.push({sender: json.message.sender, text: json.message.text});
        if (this.currentTopic !== key) {
          topic.unread = (topic.unread || 0) + 1;
        }
      } else if (json.joined) {
        Object.values(this.topics).forEach(topic => {
          topic.messages.push({sender: json.joined, joined: true});
        });
      } else if (json.topic) {
        this.topics[json.topic] = {messages: []};
      } else if (json.deleteTopic) {
        const key = json.deleteTopic;
        if (this.currentTopic === key) {
          this.currentTopic = '';
        }
        delete this.topics[key];
      }
    };

    this.chat.getTopics().subscribe((topics: TopicsInterface) => {
      this.topics = topics;
    });
  }

  mine(message) {
    return message.sender.uuid === this.chat.me.uuid;
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.currentMessage.length || !this.currentTopic.length) {
      return;
    }

    this.chat.send(this.currentTopic, this.currentMessage);
    this.currentMessage = '';
  }

  addTopic() {
    if (!this.newTopic.length) {
      return;
    }

    this.chat.addTopic(this.newTopic);
    this.newTopic = '';
  }

  styled(message) {

    if (message.typing || message.joined) {
      return this.mine(message) ? 'd-none' : '';
    }

    if (this.mine(message)) {
      return 'rounded-left bg-gradient-primary ml-5 text-white rounded-top';
    }

    return 'rounded-right bg-gradient-dark mr-5 text-white rounded-top';
  }

  changeTopic(key: any) {
    this.currentTopic = key;
    this.topics[key].unread = 0;
  }

  deleteTopic(key: any) {
    this.chat.deleteTopic(key);
  }
}
