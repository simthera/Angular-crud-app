import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeService } from '../employee.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

// import { IndexComponent } from './index.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  employees: any;

  constructor(private http: HttpClient, private service: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.service.getEmployees().subscribe(res => {
      this.employees = res;
    });
  }
}

// describe('IndexComponent', () => {
//   let component: IndexComponent;
//   let fixture: ComponentFixture<IndexComponent>;

//   beforeEach(async(() => {
//     TestBed.configureTestingModule({
//       declarations: [ IndexComponent ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     fixture = TestBed.createComponent(IndexComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should be created', () => {
//     expect(component).toBeTruthy();
//   });
// });
