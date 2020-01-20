import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SchoolsService } from '../../services/schools.service'

@Component({
    selector: 'app-text-input',
    templateUrl: './text-input.component.html',
    styleUrls: ['./text-input.component.scss']
})

export class TextInputComponent implements OnInit {

    @Input() defaultText: string;
    @Output() emitText: EventEmitter<string> = new EventEmitter<string>();
    default: boolean = true;
    inputText: string = '';

    constructor(private schools: SchoolsService) { }

    ngOnInit() {
        this.schools.inputsReset.subscribe(() => {
            this.inputText = '';
            this.inputBlur();
        })
    }

    ngOnChanges() {
        this.inputText = this.defaultText;
        this.default = true;
    }

    inputFocus() {
        if(this.default) {
            this.inputText = '';
        }
    }

    inputBlur() {
        if(this.inputText == '') {
            this.inputText = this.defaultText;
            this.default = true;
            this.emitText.emit('');
        }
    }

    inputChange() {
        this.emitText.emit(this.inputText);
        this.default = false;
    }
}
