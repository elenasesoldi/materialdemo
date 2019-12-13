import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent implements OnInit {

  private firstFormGroup: FormGroup;
  @ViewChild('stepper', {static: false}) stepper: MatStepper;

  public steppers = [
    {
    label: 'Shipping Address',
    completed: false,
    optional: false
    },
    {
    label: 'Billing Address',
    completed: false,
    optional: true
    },
    {
      label: 'Place Order',
      completed: false,
      optional: false
    }];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
  }

  completa(s: {label: string, completed: boolean}): void {
    s.completed = true;
    setTimeout( () => this.stepper.next(), 200);
  }

}
