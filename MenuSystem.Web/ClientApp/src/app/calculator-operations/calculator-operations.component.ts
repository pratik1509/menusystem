import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'calculator-operations',
    templateUrl: 'calculator-operations.component.html',
    styleUrls: ['./calculator-operations.component.css']
})

export class CalculatorOperationsComponent implements OnInit {
    @Output() operationEvent = new EventEmitter<string>();
    @Output() getTotalEvent = new EventEmitter();
    @Output() resetAllEvent = new EventEmitter();

    constructor() { }

    ngOnInit() { }

    operation (event: string) {
        this.operationEvent.emit(event);
    }

    getTotal () {
        this.getTotalEvent.emit();
    }

    resetAll () {
        this.resetAllEvent.emit();
    }
}