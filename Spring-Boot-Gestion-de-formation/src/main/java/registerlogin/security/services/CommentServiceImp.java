package registerlogin.security.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import registerlogin.model.Comment;
import registerlogin.repository.CommentRepository;

@Service
public class CommentServiceImp implements CommentService {

    private final CommentRepository commentRepository;

    @Autowired
    public CommentServiceImp(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    @Override
    public Comment save(Comment comment) {
        return commentRepository.saveAndFlush(comment);
    }


}
