import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'

export interface School {
    _id: string,
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

    baseURL = 'http://167.99.67.1:8000/';
    public schoolsUpdated: EventEmitter<boolean> = new EventEmitter();
    public inputsReset: EventEmitter<boolean> = new EventEmitter();
    
    constructor(private http: HttpClient) { }

    addSchool(school) {
        return this.http.post<School>(this.baseURL + 'api/schools', school);
    }

    getSchools() {
        return this.http.get<School[]>(this.baseURL + 'api/schools');
    }

    deleteSchool(id) {
        return this.http.delete(this.baseURL + 'api/schools/' + id);
    }

}
