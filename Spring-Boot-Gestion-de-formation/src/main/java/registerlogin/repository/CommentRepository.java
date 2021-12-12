package registerlogin.repository;


import java.util.List;
import java.util.Optional;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import registerlogin.model.Comment;
@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    
    

}
