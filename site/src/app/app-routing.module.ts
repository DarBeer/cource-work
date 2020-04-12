import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebComponent } from './web/web.component';
import { HomeComponent } from './web/home/home.component';
import { ReportComponent } from './web/report/report.component';
import { AdminComponent } from './admin/admin.component';
import { AdminReportsComponent } from './admin/admin-reports/admin-reports.component';
import { AdminCallsComponent } from './admin/admin-calls/admin-calls.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: '', component: WebComponent, children: [
    { path: '', component: HomeComponent },
    { path: '/report', component: ReportComponent }
  ]},
  { path: '/admin', component: AdminComponent, children: [
    { path: '/reports', component: AdminReportsComponent },
    { path: '/calls', component: AdminCallsComponent }
  ]},
  { path: '/not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
