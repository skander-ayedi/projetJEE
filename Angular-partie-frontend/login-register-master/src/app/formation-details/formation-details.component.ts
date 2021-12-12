import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from '../service/formation.service';


@Component({
  selector: 'app-formation-details',
  templateUrl: './formation-details.component.html',
  styleUrls: ['./formation-details.component.css']
})
export class FormationDetailsComponent implements OnInit {
  currentFormation = null;
  idformation:number;
  message = '';


  constructor(private formationService: FormationService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void { 
    this.message = '';
    this.idformation =this.route.snapshot.params.id;
    this.getFormation(this.idformation);
    

  }
  getFormation(id): void {
    this.formationService.getFormation(id)
      .subscribe(
        data => {
          this.currentFormation = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  updateFormation(): void {
    this.formationService.updateFormation(this.currentFormation.id, this.currentFormation)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The formation was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteFormation(): void {
    this.formationService.deleteFormation(this.currentFormation.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/questions']);
        },
        error => {
          console.log(error);
        });
  }


}
