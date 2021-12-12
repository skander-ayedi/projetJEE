package registerlogin.controller;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;

import registerlogin.model.Formation;
import registerlogin.repository.FormationDao;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RequestMapping("/api/")
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
public class FormationRestController {
	
	@Autowired
    private FormationDao formationRepository;

    @GetMapping("/formations")
    public List<Formation> getAllFormations() {
        return formationRepository.findAll();
    }

    @GetMapping("/formation/{id}")
    public Optional<Formation> getFormation(@PathVariable Long id) {
        return formationRepository.findById(id);
    }

    
    @PostMapping("/formation/create")
    public Formation createFormation(@Valid @RequestBody Formation formation) {
        return formationRepository.save(formation);
    }

    @PutMapping("/formation/update/{formationId}")
    public Formation updateFormation(@PathVariable Long formationId, @Valid @RequestBody Formation formationRequest) {
        return formationRepository.findById(formationId).map(formation -> {
        	formation.setTitle(formationRequest.getTitle());
        	formation.setDescription(formationRequest.getDescription());
        	formation.setContent(formationRequest.getContent());
            return formationRepository.save(formation);
        }).orElseThrow(() -> new ResourceNotFoundException("FormationId " + formationId + " not found"));
    }


    @DeleteMapping("/formation/delete/{formationId}")
    public ResponseEntity<?> deleteFormation(@PathVariable Long formationId) {
        return formationRepository.findById(formationId).map(formation -> {
        	formationRepository.delete(formation);
            return ResponseEntity.ok().build();
        }).orElseThrow(() -> new ResourceNotFoundException("FormationId " + formationId + " not found"));
    }
    
  


}
