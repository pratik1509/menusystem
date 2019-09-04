import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators"; 

@Injectable({providedIn: 'root'})

export class ReverseStringService {
    private baseUrl: string = "https://localhost:5001/api";
    private reverseStr: string = "/ReverseString/ReverseString";
    private reverseStrEfficient: string = "/ReverseString/ReverseStringEfficient";

    constructor(private httpClient: HttpClient) { }

    reverserString (stringToBeReversed: string) : Observable<object> {
        return this.httpClient.post(this.baseUrl + this.reverseStr, {
            stringToBeReversed: stringToBeReversed
        });
    }  

    reverserStringEfficient (stringToBeReversed: string) : Observable<object> {
        return this.httpClient.post(this.baseUrl + this.reverseStrEfficient, {
            stringToBeReversed: stringToBeReversed
        });
    }     
    
}
