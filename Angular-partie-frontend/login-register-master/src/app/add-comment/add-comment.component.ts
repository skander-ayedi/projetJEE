import { Component, OnInit } from '@angular/core';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent implements OnInit {

  comment = {
    text:''
  };

  submitted = false;
  constructor(private commentService: CommentService) { }

  ngOnInit() {}

  save():void{
    const data ={
      text:this.comment.text, 
      
    };
    this.commentService.addComment(data).subscribe(reponse => {
      console.log(reponse);
      this.submitted = true;
    });
}
newcomment(): void {
  this.submitted = false;
  this.comment={
    text:'',
    
  };
}

}
