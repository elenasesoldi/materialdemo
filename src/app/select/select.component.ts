import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  public webOptions = [
    {
      name: 'Angular',
      description: 'Angular is a platform for building mobile and desktop web applications.'
    },
    {
      name: 'React',
      description: 'React is a JavaScript library for building user interfaces.'
    },
    {
      name: 'Vue',
      // tslint:disable-next-line:max-line-length
      description: 'Vue.js is an open-source Model–view–viewmodel JavaScript framework for building user interfaces and single-page applications.'
    }
  ];

  public mobileOptions = [
    {
      name: 'Ionic',
      // tslint:disable-next-line:max-line-length
      description: 'Ionic Framework is the free, open source mobile UI toolkit for developing high-quality cross-platform apps for native iOS, Android, and the web—all from a single codebase.'
    },
    {
      name: 'React Native',
      // tslint:disable-next-line:max-line-length
      description: 'React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces.'}
  ];

  public selectedWebOption: any;
  public selectedWebOption2: any;

  public selectedOption3: any;

  constructor() { }

  ngOnInit() {
  }

}
