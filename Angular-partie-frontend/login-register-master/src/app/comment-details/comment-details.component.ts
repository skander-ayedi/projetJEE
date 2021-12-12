import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from '../service/comment.service';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent implements OnInit {

  currentComment = null;
  message = '';


  constructor(private commentService: CommentService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void { 
    this.message = '';
    this.getComment(this.route.snapshot.paramMap.get('id'));

  }
  getComment(id): void {
    this.commentService.getCommentbyid(id)
      .subscribe(
        data => {
          this.currentComment = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateComment(): void {
    this.commentService.updateComment(this.currentComment.id, this.currentComment)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The comment was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteComment(): void {
    this.commentService.deleteComment(this.currentComment.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/questions']);
        },
        error => {
          console.log(error);
        });
  }
}
