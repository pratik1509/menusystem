import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'calculator',
    templateUrl: 'calculator.component.html'
})
export class calculatorComponent implements OnInit {
     
    private totalAnswer: number = 0;
    private newNumber: number = 0;
    private input: string = ''; 
    private lastOperation: string = '';  
    
    constructor() {

    }

    ngOnInit() {

    }

    addDigit(value: string) {
        this.input = this.input.length < 8 ? 
        (this.input == '0' ? value : this.input + value)
         : this.input;
    }

    addOperation(value: string) {
        this.newNumber =  +this.input; // converting string to number
        switch(value) {            
            case '+': {
                this.totalAnswer = this.totalAnswer + this.newNumber;
                this.input = '';
                break;
            }
            case '-': {
                this.totalAnswer = this.totalAnswer == 0 ?  this.newNumber : (this.totalAnswer - this.newNumber);
                this.input = '';
                break;
            }            
            case '*': {
                
                this.totalAnswer = this.totalAnswer == 0 ?  this.newNumber : (this.totalAnswer * this.newNumber);
                this.input = '';
                break;
            }
            case '/': {
                this.totalAnswer = this.totalAnswer == 0 ?  this.newNumber : (this.totalAnswer / this.newNumber);
                this.input = '';
                break;
            }
        }
            
        this.lastOperation = value;

    }

    getTotal () {
        this.addOperation(this.lastOperation);
        this.input = this.totalAnswer.toString();

        this.totalAnswer = 0; 
        this.newNumber = 0;
        this.lastOperation = '';  
    }

    resetAll () {
        this.totalAnswer = 0; 
        this.newNumber = 0;
        this.input = ''; 
        this.lastOperation = '';  
    }
}
