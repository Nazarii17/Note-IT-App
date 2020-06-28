import {Component, OnInit} from '@angular/core';
import {Notebook} from "./model/notebook";
import {HttpClient} from "@angular/common/http";
import {ApiService} from "../shared/api.service";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notebooks: Notebook[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.getAllNotebooks();
  }

  public getAllNotebooks() {
    this.apiService.getAllNotebooks().subscribe(
      response => {
        this.notebooks = response;
      },
      error => {
        alert("An error has occurred")
      }
    )
  }

  createNotebook() {
    let newNotebook: Notebook = {
      id: null,
      name: "New notebook",
      nbOfNotes: 0
    };
    this.apiService.postNotebook(newNotebook).subscribe(
      result => {
        newNotebook.id = result.id;
        this.notebooks.push(newNotebook);
      },
      error => {
        alert("An error has occurred while saving the notebook");
      }
    )
  }

  updateNotebook(updatedNotebook: Notebook) {
    this.apiService.postNotebook(updatedNotebook).subscribe(
      result => {

      }, error => {
        alert("An error has occurred while saving the notebook");
      })
  }

}
