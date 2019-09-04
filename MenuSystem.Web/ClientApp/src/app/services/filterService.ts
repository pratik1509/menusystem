import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from '../models/filter';
import { Observable }  from 'rxjs';
import { pluck, map, tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class FilterService {
    constructor (private _http : HttpClient) {}

    getAllData (searchKey: string) : Observable<filter[]> {
        return this._http.get<filter[]>('https://api.github.com/users/mralexgray/repos')
        .pipe(map(m=> m.map(x => x).filter(x => x.name.toLowerCase().includes(searchKey.toLowerCase()))));        
    }
}