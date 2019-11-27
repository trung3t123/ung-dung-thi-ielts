
import {Component, Input} from '@angular/core';
import {ITimer} from './itimer';
@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.page.html',
  styleUrls: ['./question-detail.page.scss'],
})
export class TimerComponent {
 
  @Input() timeInSeconds: number;
  public timer: ITimer;
  public i = 0;

  constructor() {
  }

  ngOnInit() {
    this.initTimer();
    this. startTimer();
  }

  hasFinished() {
      return this.timer.hasFinished;
  }

  initTimer() {
      if(!this.timeInSeconds) { this.timeInSeconds = 3000; }

      this.timer = <ITimer>{
          seconds: this.timeInSeconds,
          runTimer: false,
          hasStarted: false,
          hasFinished: false,
          secondsRemaining: this.timeInSeconds
      };

      this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
  }

  startTimer() {
      this.timer.hasStarted = true;
      this.timer.runTimer = true;
      this.timerTick();
  }

  pauseTimer() {
      this.timer.runTimer = false;
  }

  resumeTimer() {
      this.startTimer();
  }

  timerTick() {
      setTimeout(() => {
          if (!this.timer.runTimer) { return; }
          this.timer.secondsRemaining--;
          this.timer.displayTime = this.getSecondsAsDigitalClock(this.timer.secondsRemaining);
          if (this.timer.secondsRemaining > 0) {
              this.timerTick();
          }
          else {
              this.timer.hasFinished = true;
          }
      }, 1000);
  }

  getSecondsAsDigitalClock(inputSeconds: number) {
      var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
      var hours   = Math.floor(sec_num / 3600);
      var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
      var seconds = sec_num - (hours * 3600) - (minutes * 60);
      var hoursString = '';
      var minutesString = '';
      var secondsString = '';
      hoursString = (hours < 10) ? "0" + hours : hours.toString();
      minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
      secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
      return hoursString + ':' + minutesString + ':' + secondsString;
  }
  public question = [
    {
      question: 'question 1 question 1question 1question 1question 1question 1question 1question 1question 1question 1question 1question 1question 1question 1question 1question 1question 1question 1question 1question 1 ',
      a: 'Đáp án là A1 Đáp án là A1 Đáp án là A1 Đáp án là A1 Đáp án là A1 Đáp án là A1',
      b: 'B1',
      c: 'C1',
      d: 'D1'
    },
    {
        question: 'question 2',
        a: 'A2',
        b: 'B2',
        c: 'C2',
        d: 'D'
    },
    {
        question: 'question 3',
        a: 'A3',
        b: 'B3',
        c: 'C3',
        d: 'D3'
    },
    {
        question: 'question 4',
        a: 'A4',
        b: 'B4',
        c: 'C4',
        d: 'D4'
    },  
  ];
  next() {
      if(this.i < this.question.length - 1) {
        this.i++;
        console.log(this.question.length)
        console.log(this.i);
      var q = this.question[this.i].question;
      var a = this.question[this.i].a;
      var b = this.question[this.i].b;
      var c = this.question[this.i].c;
      var d = this.question[this.i].d;
      console.log(q);
      console.log(a);
      console.log(b);
      console.log(c);
      console.log(d);
      }
      
  }
  back() {
      if(this.i > 0) {
          this.i--;
      }
  }
 
}
