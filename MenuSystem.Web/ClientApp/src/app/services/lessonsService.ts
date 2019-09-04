import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Lesson } from "../models/lessons";
import { Observable, } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LessonsService
{
    private _baseUrl = 'https://localhost:5001/api';
    private getLessonsApi = '/lessons/Get';
    
    constructor (private _httpClient: HttpClient){}

    getLessons () : Observable<Lesson[]> {
        return this._httpClient.get<Lesson[]>(this._baseUrl + this.getLessonsApi);
    }
}