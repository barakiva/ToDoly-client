import { Component, OnInit } from '@angular/core';
import {NoteFetchService} from "../../services/note-fetch.service";
import {Post} from "./post";
import {Observable} from "rxjs";
import {Note} from "../../note";

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit{

  // posts : Observable<Note[]>;
  // newPost: Observable<any>;
  note : Observable<Note>;
  noteList : Observable<Note[]>;

  constructor(
    private noteFetchService : NoteFetchService
    ) {}

  ngOnInit(): void {
  }
  fetchNote(){
    this.note = this.noteFetchService.getNote();
  }



  // fetchPosts(){
  //   this.posts = this.noteFetchService.getNotes();
  // }
  // deliverPost(){
  //   this.newPost = this.noteFetchService.createNote();
  // }


}
