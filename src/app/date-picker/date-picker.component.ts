import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  public minDate: Date;
  public maxDate: Date;

  public dateFilter = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  }
  constructor() {
    this.minDate = new Date();
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.minDate.getFullYear() + 10);

    console.log(this.minDate, this.maxDate);
   }

  ngOnInit() {
  }

}
