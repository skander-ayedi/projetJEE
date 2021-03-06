package registerlogin.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import registerlogin.model.Level;

@Repository
public interface LevelDao extends JpaRepository<Level, Long>{

}
