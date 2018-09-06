import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  subscribers: string[];

  constructor() {
    this.subscribers = [];
  }

  ngOnInit() {
  }

  saveSubscriber(subscriber) {
    console.log(subscriber.value);
    this.subscribers.push(subscriber.value);
    console.log(this.subscribers);
    subscriber.value = "";
    subscriber.focus();
    return false;
  }

}
