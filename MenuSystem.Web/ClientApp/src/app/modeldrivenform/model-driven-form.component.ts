import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'model-driven-form',
    templateUrl: './model-driven-form.component.html',
    styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
    private registrationForm: FormGroup;

    ngOnInit () {
        this.registrationForm = new FormGroup({
            name: new FormGroup({
                firstName: new FormControl('', [Validators.required]),
                lastName: new FormControl('', [Validators.required])
            }),
            email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
            language: new FormControl('', [Validators.required])
        });
    }
}