import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './buttons/buttons.component';
import { MaterialModule } from './material/material.module';
import { FormModule} from './form/form.module';
import { TypingComponent } from './typing/typing.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconsComponent } from './icons/icons.component';
import { BadgesComponent } from './badges/badges.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenusComponent } from './menus/menus.component';
import { ListsComponent } from './lists/lists.component';
import { GridsComponent } from './grids/grids.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardsComponent } from './cards/cards.component';
import { TabsComponent } from './tabs/tabs.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialoguesComponent } from './dialogues/dialogues.component';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatTableComponent } from './mat-table/mat-table.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TestComponent } from './test/test.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeListDetailsComponent } from './employee-list-details/employee-list-details.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    TypingComponent,
    ButtonToggleComponent,
    IconsComponent,
    BadgesComponent,
    ProgressSpinnerComponent,
    NavbarComponent,
    SidenavComponent,
    MenusComponent,
    ListsComponent,
    GridsComponent,
    ExpansionPanelComponent,
    CardsComponent,
    TabsComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutocompleteComponent,
    CheckboxComponent,
    DatePickerComponent,
    TooltipComponent,
    SnackbarComponent,
    DialoguesComponent,
    DialogExampleComponent,
    MatTableComponent,
    TwoWayBindingComponent,
    EmployeeListComponent,
    TestComponent,
    EmployeeListDetailsComponent
  ],
  entryComponents: [
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormModule,
    HttpClientModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent],
})
export class AppModule { }
