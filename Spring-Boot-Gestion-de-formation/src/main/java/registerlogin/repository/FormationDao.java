package registerlogin.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import registerlogin.model.Formation;


@Repository
public interface FormationDao extends JpaRepository<Formation,Long> {

	

	


}
