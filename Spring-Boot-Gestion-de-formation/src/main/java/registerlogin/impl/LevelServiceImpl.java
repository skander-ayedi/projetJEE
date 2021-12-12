package registerlogin.impl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import registerlogin.dao.LevelDao;
import registerlogin.dao.ThemeDao;
import registerlogin.model.Level;
import registerlogin.model.Theme;
import registerlogin.security.services.LevelService;

@Component
@Transactional
public class LevelServiceImpl implements LevelService {
	
	@Autowired
	private LevelDao levelDao;

	@Autowired
	private ThemeDao themeDao;
	
  
	@Override
	public Level addLevel(Level level, Theme theme) {
		theme.addLevel(level);
		return levelDao.save(level);
	}

}
