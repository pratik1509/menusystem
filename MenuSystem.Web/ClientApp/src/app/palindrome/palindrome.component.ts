import { Component, OnInit } from '@angular/core';
import { PalindromeService } from '../services/palindromeService';

@Component({
    selector: 'palindrome-str',
    templateUrl: 'palindrome.component.html'
})

export class PalindromeComponent implements OnInit {
    private inputStr: string;
    private isPalindrome: boolean;

    constructor(private _palindromeStr: PalindromeService) { }

    ngOnInit() { }

    checkIsPalindrome () {
        this._palindromeStr.checkIsPalindrome(this.inputStr).subscribe(
            (res: object) => this.isPalindrome = Boolean(res)
        );
    }
}