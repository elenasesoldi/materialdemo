import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {

  public showSpinner: boolean;

  constructor() {
    this.showSpinner = false;
   }

  ngOnInit() {
  }

  loadData() {
    this.showSpinner = true;
    setTimeout( () => this.showSpinner = false, 3000);
  }

}
