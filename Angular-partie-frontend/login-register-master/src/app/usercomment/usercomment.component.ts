import { Component, OnInit } from '@angular/core';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-usercomment',
  templateUrl: './usercomment.component.html',
  styleUrls: ['./usercomment.component.css']
})
export class UsercommentComponent implements OnInit {

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

}
