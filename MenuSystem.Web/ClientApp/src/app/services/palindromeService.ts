import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})

export class PalindromeService {
    private baseUrl: string = "https://localhost:5001/api";
    private checkIfPalindrome: string = "/Palindrome/CheckPalindrome";

    constructor(private httpClient: HttpClient) { }

    checkIsPalindrome (stringToCheck: string) : Observable<Object> {
        return this.httpClient.post(this.baseUrl + this.checkIfPalindrome, {
            InputStr: stringToCheck
        })
    }
    
}
