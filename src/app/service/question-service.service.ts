import { Injectable } from '@angular/core';
import {Question} from 'src/app/models/question'
import { HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http';
import { Observable,of} from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class QuestionServiceService {
  private url ='https://server-ielts-app.herokuapp.com/showquestion';
  
  getQuestionDetails() : Observable<Question[]> { 
    return this.http.get<Question[]>(this.url).pipe(
      tap(recievedQuestion => console.log(`recivedQuestion = ${JSON.stringify(recievedQuestion)}`)),
      catchError (error => of([]))
    )
  }



  constructor(private http: HttpClient) { }
}
