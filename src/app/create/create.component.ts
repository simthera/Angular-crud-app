import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit {

title = 'Add Employee';
angForm: FormGroup;
  constructor(private employeeservice: EmployeeService, private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      age: ['', Validators.required ],
      id: ['', Validators.required ]
    });
  }
  addEmployee(name, id,age) {
    this.employeeservice.addEmployee(name, id, age);
  }
ngOnInit() {

}

}
