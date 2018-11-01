import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  topics = [
    {name: 'Sports'},
    {name: 'Before & After', messages: [
        {sender: 'Cameron', timestamp: Date.now(), text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur beatae blanditiis eius explicabo ipsa iste iusto laudantium maiores minus nulla perferendis placeat quaerat, quam quasi recusandae saepe velit.'},
        {sender: 'Cam', timestamp: Date.now(), text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur beatae blanditiis eius explicabo ipsa iste iusto laudantium maiores minus nulla perferendis placeat quaerat, quam quasi recusandae saepe velit.'},
        {sender: 'Cameron', timestamp: Date.now(), text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur beatae blanditiis eius explicabo ipsa iste iusto laudantium maiores minus nulla perferendis placeat quaerat, quam quasi recusandae saepe velit.'},
        {sender: 'Cameron', timestamp: Date.now(), text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur beatae blanditiis eius explicabo ipsa iste iusto laudantium maiores minus nulla perferendis placeat quaerat, quam quasi recusandae saepe velit.'},
        {sender: 'Cameron', timestamp: Date.now(), text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur beatae blanditiis eius explicabo ipsa iste iusto laudantium maiores minus nulla perferendis placeat quaerat, quam quasi recusandae saepe velit.'},
        {sender: 'Cam', timestamp: Date.now(), text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur beatae blanditiis eius explicabo ipsa iste iusto laudantium maiores minus nulla perferendis placeat quaerat, quam quasi recusandae saepe velit.'},
        {sender: 'Cam', timestamp: Date.now(), text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur beatae blanditiis eius explicabo ipsa iste iusto laudantium maiores minus nulla perferendis placeat quaerat, quam quasi recusandae saepe velit.'},
        {sender: 'Cameron', timestamp: Date.now(), text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores aspernatur beatae blanditiis eius explicabo ipsa iste iusto laudantium maiores minus nulla perferendis placeat quaerat, quam quasi recusandae saepe velit.'}
        {sender: 'Cameron', timestamp: Date.now(), typing: true},
        {sender: 'Cam', timestamp: Date.now(), typing: true},
      ], unread: 14},
    {name: 'Potpourri'},
    {name: 'Porta ac consectetur ac'},
    {name: 'Islands'},
  ];

  currentTopic = this.topics[1];

  mine(message) {
    return message.sender === 'Cam';
  }
  constructor() { }

  ngOnInit() {
  }

  styled(message) {

    if (message.typing) {
      return this.mine(message) ? 'd-none' : '';
    }

    if (this.mine(message)) {
      return 'rounded-left bg-gradient-primary ml-5 text-white rounded-top';
    }

    return 'rounded-right bg-gradient-dark mr-5 text-white rounded-top';
  }
}
