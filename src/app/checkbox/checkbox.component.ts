import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  public fw = ['Angular', 'React', 'Vue'];

  constructor() { }

  ngOnInit() {
  }

}
