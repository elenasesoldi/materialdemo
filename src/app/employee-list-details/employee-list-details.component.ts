import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from 'src/assets/model/employee';

@Component({
  selector: 'app-employee-list-details',
  templateUrl: './employee-list-details.component.html',
  styleUrls: ['./employee-list-details.component.scss']
})

export class EmployeeListDetailsComponent implements OnInit {

  public employees: IEmployee[];
  public errorMsg: any;

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(data => this.employees = data, error => this.errorMsg = error);
  }

}
