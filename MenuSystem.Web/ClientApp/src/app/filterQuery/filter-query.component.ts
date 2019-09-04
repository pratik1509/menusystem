import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Observer, Observable } from 'rxjs';

@Component({
    selector: 'filter-query',
    templateUrl: 'filter-query.component.html'
})

export class FilterQueryComponent implements OnInit {
    private searchInput = '';

    @Input() observer: Observer<any>;

    constructor() { }

    ngOnInit() { 
        Observable.create(this.observer);
    }

    onSearch () {
       this.observer.next(this.searchInput);
    }
}