package registerlogin.manger;

import registerlogin.dao.ThemeDao;
import registerlogin.dto.ThemeDto;
import registerlogin.model.OrikaBeanMapper;
import registerlogin.model.Theme;
import registerlogin.security.services.ThemeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
@Service
public class ThemeManagerImpl implements ThemeManager {

    private OrikaBeanMapper orikaBeanMapper;

    private ThemeService themeService;

    private ThemeDao themeDao;

    @Autowired
    public ThemeManagerImpl(OrikaBeanMapper orikaBeanMapper, ThemeService themeService,
                            ThemeDao themeDao) {
        this.orikaBeanMapper = orikaBeanMapper;
        this.themeService = themeService;
        this.themeDao = themeDao;
    }

    @Override
    public ThemeDto addTheme(ThemeDto themeDto) {
        Theme theme = orikaBeanMapper.map(themeDto, Theme.class);
        return orikaBeanMapper.convertDTO(themeService.addTheme(theme), ThemeDto.class);
    }

    @Override
    public List<ThemeDto> getThemes() {
        List<Theme> themes = themeDao.findAll();
        return orikaBeanMapper.convertListDTO(themes, ThemeDto.class);
    }

    @Override
    public ThemeDto getTheme(Long idTheme) {
        return orikaBeanMapper.convertDTO(themeDao.getOne(idTheme), ThemeDto.class);
    }
}
