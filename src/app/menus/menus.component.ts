import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.scss']
})
export class MenusComponent implements OnInit {

  vishwasData: any;
  codevolutionData: any;

  constructor() {
    this.vishwasData = {
      name: 'Vishwas',
      hobby: 'Footbal'
    };

    this.codevolutionData = {
      name: 'Codevolution',
      hobby: 'Teaching'
    };
   }

  ngOnInit() {
  }

}
