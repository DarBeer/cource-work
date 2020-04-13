import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { AdminComponent } from './admin/admin.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { CallsComponent } from './admin/calls/calls.component';


const routes: Routes = [
  { path: 'report', component: ReportComponent },
  { path: '', redirectTo: 'report', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent, children: [
    { path: 'reports', component: ReportsComponent },
    { path: 'calls', component: CallsComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
