import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  model: FeedbackViewModel = {
    name: '',
    email: '',
    feedback: ''
  };

  constructor() {
  }

  ngOnInit(): void {
  }

  //Method to test input form;
  sendFeedback(): void {
    alert('Name ' + this.model.name + ',\nEmail ' + this.model.email + ',\nFeedback ' + this.model.feedback );
  }
}


export interface FeedbackViewModel {
  name: string;
  email: string;
  feedback: string;
}
