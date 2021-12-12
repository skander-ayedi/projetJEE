package registerlogin.security.services;

import registerlogin.model.Theme;
import org.springframework.stereotype.Service;

import registerlogin.model.Level;

@Service
public interface LevelService {
	
	Level addLevel(Level level, Theme theme);

}
