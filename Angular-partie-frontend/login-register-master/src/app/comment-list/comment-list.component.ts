import { Component, OnInit } from '@angular/core';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments: any;
  currentComment = null;
  currentIndex = -1;
  text = '';

  constructor(private commentService: CommentService) { }
  
  ngOnInit() {
    this.reloadData();
  }
 
  reloadData():void {
    this.comments = this.commentService.getAllComment().subscribe(
      data=> {
        this.comments=data;
        console.log(data);
      },
      error =>{
        console.log(error);
        
      });
  }
  setActiveComment(comment, index): void {
    this.currentComment = comment;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.reloadData();
    this.currentComment = null;
    this.currentIndex = -1;
  }
}
