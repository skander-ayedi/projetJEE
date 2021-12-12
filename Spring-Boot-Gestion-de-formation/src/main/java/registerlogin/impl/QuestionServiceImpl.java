package registerlogin.impl;

import registerlogin.dao.LevelDao;
import registerlogin.dao.QuestionDao;
import registerlogin.model.Level;
import registerlogin.model.Question;
import registerlogin.security.services.QuestionService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class QuestionServiceImpl implements QuestionService {

    private QuestionDao questionDao;

    private LevelDao levelDao;

    @Autowired
    public QuestionServiceImpl(QuestionDao questionDao, LevelDao levelDao) {
        this.questionDao = questionDao;
        this.levelDao = levelDao;
    }

    @Override
    public Question addQuestion(Question question, Level level) {
        level.addQuestion(question);
        return questionDao.save(question);
    }
}
