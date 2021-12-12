package registerlogin.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import registerlogin.model.Comment;
import registerlogin.model.Team;
import registerlogin.repository.CommentRepository;
import registerlogin.repository.FormationDao;





import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;
@RequestMapping("/api/")
@CrossOrigin(origins = "*")
@RestController
public class CommentController {
	
	 @Autowired
	    private CommentRepository commentRepository;

	
		/* CommentController (APIs to  retrieve Comments)*/
	    
	    @GetMapping("/Allcomments")
	    public List<Comment> getAllComments() {
	        return commentRepository.findAll();
	    }
	    
	    @GetMapping("/comments/{id}")
	    public Optional<Comment> getcommentbyid(@PathVariable Long id) {
	        return commentRepository.findById(id);
	    }
	    
	    @PostMapping("/comments/create")
	    public Comment createComment(@Valid @RequestBody Comment comment) {
	            return commentRepository.save(comment);
	        }

	   /* CommentController (APIs to  update Comments)*/
	    @PutMapping("/comments/{commentId}")
	    public Comment updateComment( @PathVariable (value = "commentId") Long commentId,
	                                 @Valid @RequestBody Comment commentRequest) {
	        return commentRepository.findById(commentId).map(comment -> {
	            comment.setText(commentRequest.getText());
	            return commentRepository.save(comment);
	        }).orElseThrow(() -> new ResourceNotFoundException("CommentId " + commentId + "not found"));
	    }
	    /* CommentController (APIs to delete Comments)*/
	    
	    /**/
	    @DeleteMapping("/comments/{commentId}")
	    public ResponseEntity<?> deleteComment(
	                              @PathVariable (value = "commentId") Long commentId) {
	        return commentRepository.findById(commentId).map(comment -> {
	            commentRepository.delete(comment);
	            return ResponseEntity.ok().build();
	        }).orElseThrow(() -> new ResourceNotFoundException("Comment not found with id " + commentId ));
	    }
	
	
}

  


