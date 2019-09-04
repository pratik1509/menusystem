import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../services/lessonsService';
import { Observable } from 'rxjs';
import { Lesson } from '../Models/lessons';

@Component ({
    selector: 'lesson-card',
    templateUrl: './lessons.component.html'
})
export class LessonsComponent implements OnInit {
    lessons$ : Observable<Lesson[]>;
    
    constructor (private __lessonService: LessonsService) {}

    ngOnInit () {
        this.lessons$ = this.__lessonService.getLessons();        
    }
}