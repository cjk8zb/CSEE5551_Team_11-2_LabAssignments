import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as uuidv4 from 'uuid/v4';
import {Router} from '@angular/router';

type ChatCallback = (json: any) => void;

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public isConnected = false;
  public listener: ChatCallback = (json => {
    console.log('json', json);
  });
  public me;
  private webSocket: WebSocket;

  constructor(private http: HttpClient, private router: Router) {
  }

  public join(nickname: String) {
    const uuid = uuidv4();
    this.webSocket = new WebSocket('ws://localhost:8081');
    this.webSocket.onopen = (event: Event) => {
      console.log('event', event);
      this.me = {nickname, uuid};
      this.webSocket.send(JSON.stringify({join: this.me}));
    };
    this.webSocket.onmessage = (message: MessageEvent) => {
      const json = JSON.parse(message.data);
      if (json.joined && json.joined.uuid && json.joined.uuid === uuid) {
        this.isConnected = true;
        this.router.navigate(['/']);
      } else {
        this.listener(json);
      }
    };
  }

  public send(topic: string, text: string) {
    const sender = this.me;
    this.webSocket.send(JSON.stringify({send: {topic, text, sender}}));
  }

  getTopics() {
    const sender = this.me;
    return this.http.get('http://localhost:8081/chatroom');
  }

  addTopic(topic: string) {
    const sender = this.me;
    return this.http.post('http://localhost:8081/chatroom', {topic, sender}).subscribe(results => {
      console.log(results);
    }, error => {
      console.log(error);
    });
  }

  deleteTopic(topic: any) {
    const sender = this.me;
    return this.http.delete('http://localhost:8081/chatroom', {params: {topic, sender}}).subscribe(results => {
      console.log(results);
    }, error => {
      console.log(error);
    });
  }
}
