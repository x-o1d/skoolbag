import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface School {
    name: string,
    address: {
        street: string,
        suburb: string,
        postcode: string,
        state: string
    },
    students: number
}

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  baseURL = 'http://localhost:8000/';

  constructor(private http: HttpClient) { }

  addSchool(school) {
      return this.http.post<School>(this.baseURL +'api/schools', school);
  }
}
