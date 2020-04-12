import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import { HeaderComponent } from './web/header/header.component';
import { FooterComponent } from './web/footer/footer.component';
import { HomeComponent } from './web/home/home.component';
import { ReportComponent } from './web/report/report.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminReportsComponent } from './admin/admin-reports/admin-reports.component';
import { AdminCallsComponent } from './admin/admin-calls/admin-calls.component';

@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ReportComponent,
    AdminComponent,
    LoginComponent,
    NotFoundComponent,
    AdminReportsComponent,
    AdminCallsComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),

    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
