import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";

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

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
  }

  //Method to test input form;
  sendFeedback(): void {
    // alert('Name ' + this.model.name + ',\nEmail ' + this.model.email + ',\nFeedback ' + this.model.feedback );
    let url = "http://localhost:8082/api/feedback";
    this.http.post(url, this.model).subscribe(
      result => {
        location.reload();
      },
      error => {
        alert("An error has occurred while setting feedback");
      }
    );
  }
}

export interface FeedbackViewModel {
  name: string;
  email: string;
  feedback: string;
}
