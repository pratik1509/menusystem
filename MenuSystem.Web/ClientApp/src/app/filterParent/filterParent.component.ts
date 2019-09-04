import { Component } from "@angular/core";
import { filter } from '../models/filter';
import { PartialObserver, Observer, Observable, Subject, AsyncSubject } from 'rxjs';
import { FilterService } from "../services/filterService";
import { distinctUntilChanged, debounceTime } from "rxjs/operators";

@Component({
    selector: 'filter-parent',
    templateUrl: './filterParent.component.html'
})
export class FilterParentComponent {
    // public observer: PartialObserver<any>;
    private allData$ : Observable<filter[]>;
    private subject : Subject<any>;
    private asyncSubject : AsyncSubject<any>;

    //private lastSearch: string;

    constructor(private _filterService : FilterService) {
        let self = this;

        // subject
        this.subject = new Subject<any>();
        this.subject.pipe(
            debounceTime(1000),
            distinctUntilChanged()
        ).subscribe(value => {
            self.allData$ = self._filterService.getAllData(value)            
        });

        //this.observer = this.subject;


        // async subject
        // this.asyncSubject = new AsyncSubject<any>();
        // this.asyncSubject
        // .subscribe(value => {
        //     self.lastSearch = value;
        // });

        // this.observer = this.asyncSubject;
    }
}