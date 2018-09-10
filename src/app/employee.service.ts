import { Injectable } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Http,Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addEmployee(name, id, age) {
    const uri =  'http://localhost:4000/employees/add';
    const obj = {
      name: name,
      id: id,
      age: age
    };
    
    this.http.post(uri, obj)
        .subscribe(res => console.log('Done'));
  }

  getEmployees() {
    const uri = 'http://localhost:4000/employees/';
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this 
        .http 
        .get(uri)
        .map(res => {
        return res;
      
        });
       
  }

  editEmployee(id) {
    const uri = 'http://localhost:4000/employees/edit/' + id;
    var headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this
            .http
            .get(uri)
            .map(res => {
              return res;
            });
  }
}
