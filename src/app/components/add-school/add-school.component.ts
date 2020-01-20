import { Component, OnInit } from '@angular/core';
import { SchoolsService } from '../../services/schools.service'

@Component({
  selector: 'app-add-school',
  templateUrl: './add-school.component.html',
  styleUrls: ['./add-school.component.scss']
})
export class AddSchoolComponent implements OnInit {

    school = {
        name: '',
        address: {
            street: '',
            suburb: '',
            postcode: '',
            state: ''
        },
        students: ''
    }

    show: boolean = false;
    schoolAdded: boolean = false;

    nameError: boolean = false;
    streetError: boolean = false;
    suburbError: boolean = false;
    postError: boolean = false;
    stateError: boolean = false;
    studentsError: boolean = false;

    constructor(private schools: SchoolsService) { }

    saveSchool() {
        let allGood = true;

        // input validation - start
        if(this.school.name == '') {
            this.nameError = true;
            allGood = false;
        } else {
            this.nameError = false;
        }

        if(this.school.address.street == '') {
            this.streetError = true;
            allGood = false;
        } else {
            this.streetError = false;
        }

        if(this.school.address.suburb == '') {
            this.suburbError = true;
            allGood = false;
        } else {
            this.suburbError = false;
        }

        if(this.school.address.postcode == '' || isNaN(Number(this.school.address.postcode))) {
            this.postError = true;
            allGood = false;
        } else {
            this.postError = false;
        }

        if(this.school.address.state == '') {
            this.stateError = true;
            allGood = false;
        } else {
            this.stateError = false;
        }

        if(this.school.students == '' || isNaN(Number(this.school.students))) {
            this.studentsError = true;
            allGood = false;
        } else {
            this.studentsError = false;
        }
        // input validation - end
        if(allGood) {
            this.schools.addSchool(this.school).subscribe((data) => {
                this.schools.schoolsUpdated.emit();
                this.schoolAdded = true;
                setTimeout(() => {
                    this.schoolAdded = false;
                }, 4000);
            });
        }

    }

    get showHide() {
        if(this.show) {
            return 'Hide';
        } else {
            return 'Create new school'
        }
    }

    ngOnInit() {

    }

}
