import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public opened: boolean;

  constructor() {
    this.opened = false;
   }

  ngOnInit() {
  }

  public log(state: string): void {
    console.log(state);
  }

}
