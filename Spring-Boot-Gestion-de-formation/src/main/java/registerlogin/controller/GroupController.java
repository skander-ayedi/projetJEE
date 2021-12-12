package registerlogin.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;



import registerlogin.model.Team;

import registerlogin.repository.TeamRepository;


@RequestMapping("/api/teams")
@ResponseBody
@CrossOrigin(origins = "*")
@RestController
public class GroupController {
	@Autowired
    private TeamRepository GroupManager;
	
	 @GetMapping("/all")
	    public List<Team> getAllGroups() {
	        return GroupManager.findAll();
	    }
	 @GetMapping("/{id}")
	    public Optional<Team> getgroupbyid(@PathVariable Long id) {
	        return GroupManager.findById(id);
	    }
	 @PostMapping("/create")
	    public Team createTeam(@Valid @RequestBody Team group) {
	        return GroupManager.save(group);
	    }

	    @PutMapping("/update/{groupId}")
	    public Team updateGroup(@PathVariable Long groupId, @Valid @RequestBody Team groupRequest) {
	        return GroupManager.findById(groupId).map(group -> {
	        	group.setTeamName(groupRequest.getTeamName());
	        	group.setTeamScore(groupRequest.getTeamScore());
	            return GroupManager.save(group);
	        }).orElseThrow(() -> new ResourceNotFoundException("groupId " + groupId + " not found"));
	    }
	    @DeleteMapping("/delete/{groupId}")
	    public ResponseEntity<?> deleteTeam(@PathVariable Long groupId) {
	        return GroupManager.findById(groupId).map(group -> {
	        	GroupManager.delete(group);
	            return ResponseEntity.ok().build();
	        }).orElseThrow(() -> new ResourceNotFoundException("groupId " + groupId + " not found"));
	    }
	
}
