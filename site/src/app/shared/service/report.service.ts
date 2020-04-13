import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { Report } from '../data/report';

import { catchError, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http: HttpClient) { }

    // GET Reports
    getReports(): Observable<Report[]> {
        const uri = 'http://localhost:3000/data/reports';
        return this
            .http
            .get<Report[]>(uri)
            .pipe(map(res => {
              return res;
            }));
    }

    // GET Report
    getReport(id:any): Observable<Report> {
        const uri = 'http://localhost:3000/data/reports/get-one/' + id;
        return this
            .http
            .get<Report>(uri)
            .pipe(map(res => {
              return res;
            }));
    }

    getReportsLast(): Observable<Report[]> {
        const uri = 'http://localhost:3000/data/reports/last';
        return this
            .http
            .get<Report[]>(uri)
            .pipe(map(res => {
              return res;
            }));
    }

    // ADD Report
    addReport(heading, description, firtsname, lastname, email): Observable<Report> {
        const uri = 'http://localhost:3000/data/reports/add';
        const headers = new HttpHeaders();
        const obj = {
            heading: heading,
            description: description,
            user: {
              firtsname: firtsname,
              lastname: lastname,
              email: email
            },
            date: Date.now()
        };
        return this.http
            .post<Report>(uri, obj,{headers:headers})
            .pipe(map(res => {
              return res;
            }))
    }

    // DELETE Report
    delReport(id:any) {
        const uri = 'http://localhost:3000/data/reports/delete/' + id;
        return this
            .http
            .get(uri)
            .pipe(map(res => {
                return res;
            }));
    }
  
}
