package registerlogin.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import registerlogin.model.Question;


public interface QuestionDao extends JpaRepository<Question, Long> {

}
