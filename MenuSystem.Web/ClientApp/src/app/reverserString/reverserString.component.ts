import { Component, OnInit } from '@angular/core';
import { ReverseStringService } from '../services/reverserStrService';


@Component({
    selector: 'reverse-str',
    templateUrl: 'reverserString.component.html'
})

export class ReverserStringComponent implements OnInit {
    private strToReverse: string; 
    private reversedStr: string;

    constructor(private _reverStr: ReverseStringService) { }

    ngOnInit() { 
        
    }

    reverseString() {
        this._reverStr.reverserString(this.strToReverse)
        .subscribe((res: object) => this.reversedStr = res.toString());
    }

    reverseStringEfficient() {
        this._reverStr.reverserStringEfficient(this.strToReverse)
        .subscribe((res: object) => this.reversedStr = res.toString());
    }
}