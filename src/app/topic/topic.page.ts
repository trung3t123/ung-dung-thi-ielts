import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.scss'],
})
export class TopicPage implements OnInit {

  constructor( private location:Location, private router: Router) { }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
  }
  navigateActivePassive(){
    this.router.navigate(['/topic-detail'])
  }
  
  navigateDirect(){
    this.router.navigate(['/topic-detail'])
  }
  navigateCompare(){
    this.router.navigate(['/topic-detail'])
  }
}
