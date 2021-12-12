package registerlogin.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity

public class Team {
	  @Id
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private Long id;
	  @Column(name = "team_name", length = 20)
	  private String TeamName;
	  @Column(name = "team_score", length = 3)
	  private float TeamScore;
	  

	public Team() {
		
	}

	public Team(Long id, String TeamName, float TeamScore) {
		
		this.id = id;
		this.TeamName = TeamName;
		this.TeamScore = TeamScore;
	
	}



	public String getTeamName() {
		return TeamName;
	}



	public void setTeamName(String teamName) {
		TeamName = teamName;
	}



	public float getTeamScore() {
		return TeamScore;
	}



	public void setTeamScore(float teamScore) {
		TeamScore = teamScore;
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	


	

	

	   
	 
	



}
