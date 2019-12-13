import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const FormComponents = [
  FormsModule,
  ReactiveFormsModule
];

@NgModule({
  imports: FormComponents,
  exports: FormComponents
})

export class FormModule { }
