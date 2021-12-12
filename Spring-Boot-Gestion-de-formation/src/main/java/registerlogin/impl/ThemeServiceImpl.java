package registerlogin.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import registerlogin.dao.ThemeDao;
import registerlogin.model.Theme;
import registerlogin.security.services.ThemeService;

import java.util.List;

@Component
@Transactional
public class ThemeServiceImpl implements ThemeService {
	
	@Autowired
	private ThemeDao themeDao;

	@Override
	public Theme addTheme(Theme theme) {
		return themeDao.save(theme);
	}

}
