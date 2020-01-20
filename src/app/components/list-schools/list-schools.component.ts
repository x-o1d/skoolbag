import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../../services/schools.service'

@Component({
    selector: 'app-list-schools',
    templateUrl: './list-schools.component.html',
    styleUrls: ['./list-schools.component.scss']
})
export class ListSchoolsComponent implements OnInit {

    schoolsList = [];

    filterInput: String = '';
    filteredSchoolsList = [];
    filterSelector: String = 'Name';

    constructor(private schools: SchoolsService) { }

    ngOnInit() {
        this.schools.getSchools().subscribe((schools) => {
            this.schoolsList = schools;
            this.filter('');
        })
    }

    filter(input) {
        if(this.filterSelector == 'Name') {
            this.filteredSchoolsList = this.schoolsList.filter((school) => {
                return school.name.toLowerCase().startsWith(input.toLowerCase());
            })
        }
        if(this.filterSelector == 'Address') {
            this.filteredSchoolsList = this.schoolsList.filter((school) => {
                let address = school.address.street + ' ' +
                                school.address.suburb + ' ' +
                                school.address.postcode + ' ' +
                                school.address.state;
                return address.toLowerCase().includes(input.toLowerCase());
            })
        }
    }

}
