import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReportComponent } from './report/report.component';
import { AdminComponent } from './admin/admin.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { CallsComponent } from './admin/calls/calls.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    AdminComponent,
    ReportsComponent,
    CallsComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    ToastrModule.forRoot(),

    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
