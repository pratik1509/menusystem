import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { calculatorComponent } from './calculator/calculator.component';
import { CalculatorButtonsComponent } from './calculatorButtons/calculator-btn.component';
import { CalculatorOperationsComponent } from './calculator-operations/calculator-operations.component';
import { ReverserStringComponent } from './reverserString/reverserString.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { ModelDrivenFormComponent } from './modeldrivenform/model-driven-form.component';
import { ReactiveModelDrivenComponent } from './reactivemodeldrivenform/reactivemodeldrivenform.component';
import { LessonsComponent } from './lessons/lessons.component';
import { FilterParentComponent } from './filterParent/filterParent.component';
import { FilterQueryComponent } from './filterQuery/filter-query.component';
import { FilterComponent } from './filterResult/filter-result.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    calculatorComponent,
    CalculatorButtonsComponent,
    CalculatorOperationsComponent,
    ReverserStringComponent,
    PalindromeComponent,
    ModelDrivenFormComponent,
    ReactiveModelDrivenComponent,
    LessonsComponent,
    FilterComponent,
    FilterParentComponent,
    FilterQueryComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },      
      { path: 'calculator', component: calculatorComponent },
      { path: 'reverse', component: ReverserStringComponent },
      { path: 'palindrome', component: PalindromeComponent },
      { path: 'modeldriven', component: ModelDrivenFormComponent },
      { path: 'reactivemodel', component: ReactiveModelDrivenComponent },
      { path: 'lessons', component: LessonsComponent },
      { path: 'filter', component: FilterParentComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
