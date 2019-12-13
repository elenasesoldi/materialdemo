import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs';
import { map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  public options: string[] = ['Angular', 'React', 'Vue', 'Ionic', 'Native React'];
  public objectOptions = [
    { name: 'Angular'},
    { name: 'Angular Material'},
    { name: 'React'},
    { name: 'Vue'}
  ];

  public myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter( o => o.toLowerCase().includes(filterValue));
  }

  displayFn(subject: {name: string}): string {
    return subject ? subject.name : undefined;
  }
}
