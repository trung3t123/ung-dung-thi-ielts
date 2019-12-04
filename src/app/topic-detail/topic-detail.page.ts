import { Component, OnInit } from '@angular/core';
import {AlertController} from '@ionic/angular'
import {QuestionServiceService} from 'src/app/service/question-service.service'
import { HttpClient,HttpHeaders, HttpClientModule} from '@angular/common/http';
import {Question} from 'src/app/models/question'


@Component({
  selector: 'app-topic-detail',
  templateUrl: './topic-detail.page.html',
  styleUrls: ['./topic-detail.page.scss'],
})
export class TopicDetailPage implements OnInit {
  selectedQuestion :Question;
  questions: Question[];
  question : any;

  constructor(private alertCtrl: AlertController,private questionService: QuestionServiceService,private http: HttpClient) { }
  public i = 0;
  public result ;

  loadQuestionFromService(): void {
    this.questionService.getQuestionDetails().subscribe(
      (updatedQuestion) => { 
        this.questions = updatedQuestion;
        console.log(`this.question =  ${JSON.stringify(this.questions)}`)
      }
    );
  }
  ngOnInit() {
    this.loadQuestionFromService();
  }

  

  // public question = [
  //   {
  //     question: 'question 1 question 1question 1question 1question 1question 1question  ',
  //     a: 'là A1 Đáp án là A1 Đáp án là A1 Đáp án là A1 Đáp án là A1 Đáp án là A1',
  //     b: 'B1',
  //     c: 'C1',
  //     d: 'D1',
  //     correctanswer: 'B1'
  //   },
  //   {
  //       question: 'question 2',
  //       a: 'A2',
  //       b: 'B2',
  //       c: 'C2',
  //       d: 'D',
  //       correctanswer: 'C2'
  //   },
  //   {
  //       question: 'question 3',
  //       a: 'A3',
  //       b: 'B3',
  //       c: 'C3',
  //       d: 'D3',
  //       correctanswer: 'D3'
  //   },
  //   {
  //       question: 'question 4',
  //       a: 'A4',
  //       b: 'B4',
  //       c: 'C4',
  //       d: 'D4',
  //       correctanswer: 'A4'
  //   },  
  // ];
  next() {
      if(this.i < this.question.length - 1) {
        this.i++;
      }
      
  }
  back() {
      if(this.i > 0) {
          this.i--;
      }
  }
  changeBackground(id: string) {
      console.log(id);
      for(var i = 0; i < document.getElementsByClassName('answer').length; ++i) {  
      document.getElementsByName('answer')[i].style.background='#E6E6E6';
    }
    document.getElementById(id).style.background='#01DF01';
    //get answer from user
    this.result = document.getElementById(id).innerHTML.trim();
    
  }
  async checkAnswer() {
    // console.log(this.question[this.i].correctanswer);
    console.log(this.question[this.i].correctanswer);
    if(this.result === this.question[this.i].correctanswer) {
      console.log(this.result);
        let alert = this.alertCtrl.create({
            header: 'Chính xác!',
            message: 'Bạn làm tốt lắm',
            buttons: [
                {
                text: 'OK',
                handler: () => {
                console.log('OK clicked');
                
                  }
                }
            ]
            });
            (await alert).present();
        
    } else {
      console.log(this.result); 
      let alert = this.alertCtrl.create({
        header: 'Sai rồi!',
        message: 'Bạn hãy làm lại nhé',
        buttons: [
            {
            text: 'OK',
            handler: () => {
            console.log('OK clicked');
              }
            }
        ]
        });
        (await alert).present();
    }
  }

}
