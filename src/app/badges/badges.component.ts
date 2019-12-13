import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  public notifications: number;

  constructor() {
    this.notifications = 2;
  }

  ngOnInit() {
  }

  addNotification() {
    this.notifications++;
  }

  removeNotification() {
    this.notifications--;
  }

}
