import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Notebook} from "../notes/model/notebook";
import {Observable} from "rxjs";
import {FeedbackComponent, FeedbackViewModel} from "../feedback/feedback.component";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private BASE_URL =
    // window["cfgApiBaseUrl"] +
    "http://localhost:8082/api";
  public ALL_NOTEBOOKS_URL = `${this.BASE_URL}/notebooks/all`;
  private SEND_FEEDBACK_URL = `${this.BASE_URL}/feedback`;
  private SAVE_UPDATE_NOTEBOOK = `${this.BASE_URL}/notebooks`;
  private DELETE_NOTEBOOK_URL = `${this.BASE_URL}/notebooks/`;
  private ALL_NOTES_URL = `${this.BASE_URL}/notes/all`;
  private NOTES_BY_NOTEBOOK_URL = `${this.BASE_URL}/notes/byNotebook/`;
  private SAVE_UPDATE_NOTE_URL = `${this.BASE_URL}/notes`;
  private DELETE_NOTE_URL = `${this.BASE_URL}/notes/`;

  constructor(private http: HttpClient) {
  }

  getAllNotebooks(): Observable<Notebook[]> {
    return this.http.get<Notebook[]>(this.ALL_NOTEBOOKS_URL);
  }

  postFeedback(feedback: FeedbackViewModel): Observable<any> {
    return this.http.post(this.SEND_FEEDBACK_URL, feedback);
  }
}
