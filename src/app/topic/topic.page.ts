import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.page.html',
  styleUrls: ['./topic.page.scss'],
})
export class TopicPage implements OnInit {

  constructor( private location:Location) { }
  goBack() {
    this.location.back();
  }
  ngOnInit() {
  }

}
