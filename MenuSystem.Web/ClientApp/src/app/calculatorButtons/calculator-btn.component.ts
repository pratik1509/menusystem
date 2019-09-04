import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'calculator-btn',
    templateUrl: 'calculator-btn.component.html',
    styleUrls: ['./calculator-btn.component.css']
})

export class CalculatorButtonsComponent implements OnInit {
    private input: string = '0';
    @Output() inputAdded = new EventEmitter<string>();


    constructor() { }

    ngOnInit() { }

    btnClick (value: string) {        
        this.inputAdded.emit(value);
    }
}