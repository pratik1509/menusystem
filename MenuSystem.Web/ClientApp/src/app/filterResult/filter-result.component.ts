import { Component, OnInit, Input } from '@angular/core';
import { filter } from '../models/filter';
import { Observable } from 'rxjs';


@Component({
    selector: 'filter-result',
    templateUrl: 'filter-result.component.html'
})

export class FilterComponent implements OnInit {
    
    @Input() allData$ : Observable<filter[]>;

    constructor() { }

    ngOnInit() {
        
     }
}