package registerlogin.security.services;

import org.springframework.stereotype.Service;

import registerlogin.model.Theme;

import java.util.List;

@Service
public interface ThemeService {

    Theme addTheme(Theme theme);


}
