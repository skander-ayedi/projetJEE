package registerlogin.manger;

import registerlogin.dto.ThemeDto;
import registerlogin.model.Theme;

import java.util.List;

public interface ThemeManager {
    ThemeDto addTheme(ThemeDto themeDto);

    List<ThemeDto> getThemes();

    ThemeDto getTheme(Long idTheme);
}
