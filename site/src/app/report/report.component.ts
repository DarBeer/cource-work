import { Component, OnInit } from '@angular/core';

import { FormGroup,  FormBuilder,  Validators } from "@angular/forms";

import { ReportService } from '../shared/service/report.service';
import { Report } from '../shared/data/report';

import { ToastrService } from 'ngx-toastr';
import { CallService } from '../shared/service/call.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  private errorMessage: String;
  report: Report;

  reportForm: FormGroup;
  callForm: FormGroup;

  constructor(private reportService: ReportService, private callService: CallService, private form: FormBuilder, private toastr: ToastrService) {
    this.createForms();
  }

  ngOnInit(): void {
  }

  createForms(): void {
    this.reportForm = this.form.group({
      header: ['', Validators.required ],
      desctiprion: ['', Validators.required ],
      firstname: ['', Validators.required ],
      lastname: ['', Validators.required ],
      email: ['', Validators.required ]
    });

    this.callForm = this.form.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required ],
      phone: ['', Validators.required]
    });
  }

  addReport(heading, description, firtsname, lastname, email): void {
    
      this.reportService.addReport(heading, description, firtsname, lastname, email)
          .subscribe(
              report => {
                  this.toastr.success('Статья добавлена');
                  this.reportForm.reset();
              },
              error => this.errorMessage = error
          );
  }

  addCall(firtsname, lastname, phone): void {
    this.callService.addCall(firtsname, lastname, phone)
          .subscribe(
              call => {
                  this.toastr.success('Статья добавлена');
                  this.callForm.reset();
              },
              error => this.errorMessage = error
          );
  }    
}