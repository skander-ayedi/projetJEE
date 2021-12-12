package registerlogin.security.services;

import registerlogin.model.Level;
import registerlogin.model.Question;
import org.springframework.stereotype.Service;

@Service
public interface QuestionService {
  Question addQuestion(Question question, Level level);
}
