import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('parentData') public name: string;
  @Output() public childEvent = new EventEmitter();

  public message: string;
  public person: any;
  public num: number;
  public perc: number;

  public date: Date;

  constructor() {
    this.message = 'Welcome to my App!!';
    this.person = {
      firstName: 'Elena',
      lastName: 'Sesoldi'
    };

    this.num = 5.679;
    this.perc = 0.25;
    this.date = new Date();

  }

  ngOnInit() {
  }

  fireEvent(): void {
    this.childEvent.emit(this.message);
  }

}
