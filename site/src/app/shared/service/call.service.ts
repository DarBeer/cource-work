import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

import { Call } from "../data/call";

import { catchError, map, first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CallService {

  constructor(private http: HttpClient) { }

    // GET calls
    getCalls(): Observable<Call[]> {
        const uri = 'http://localhost:3000/data/calls';
        return this
            .http
            .get<Call[]>(uri)
            .pipe(map(res => {
              return res;
            }));
    }

    // GET Call
    getCall(id:any): Observable<Call> {
        const uri = 'http://localhost:3000/data/calls/get-one/' + id;
        return this
            .http
            .get<Call>(uri)
            .pipe(map(res => {
              return res;
            }));
    }

    getCallsLast(): Observable<Call[]> {
        const uri = 'http://localhost:3000/data/calls/last';
        return this
            .http
            .get<Call[]>(uri)
            .pipe(map(res => {
              return res;
            }));
    }

    // ADD Call
    addCall(firtsname, lastname, phone): Observable<Call> {
        const uri = 'http://localhost:3000/data/calls/add';
        const headers = new HttpHeaders();
        const obj = {
              firtsname: firtsname,
              lastname: lastname,
              phone: phone,
              date: Date.now()
        };
        return this.http
            .post<Call>(uri, obj,{headers:headers})
            .pipe(map(res => {
              return res;
            }))
    }

    // DELETE Call
    delCall(id:any) {
        const uri = 'http://localhost:3000/data/calls/delete/' + id;
        return this
            .http
            .get(uri)
            .pipe(map(res => {
                return res;
            }));
    }

}
