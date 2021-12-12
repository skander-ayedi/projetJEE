package registerlogin.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import registerlogin.model.Theme;

@Repository
public interface ThemeDao extends JpaRepository<Theme, Long> {

}
