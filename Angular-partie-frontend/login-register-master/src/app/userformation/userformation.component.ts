import { Component, OnInit } from '@angular/core';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-userformation',
  templateUrl: './userformation.component.html',
  styleUrls: ['./userformation.component.css']
})
export class UserformationComponent implements OnInit {

 
  formations: any ; 
  currentFormation = null;
  currentIndex = -1;
  title = '';

  constructor(private formationService: FormationService) { }
  
  ngOnInit():void {
    this.reloadData();
  }
 
  reloadData():void {
    this.formations =  this.formationService.getFormations().subscribe(
      data=> {
        this.formations=data;
        console.log(data);
      },
      error =>{
        console.log(error);
        
      });
  }
  setActiveFormation(formation, index): void {
    this.currentFormation = formation;
    this.currentIndex = index;
  }

  refreshList(): void {
    this.reloadData();
    this.currentFormation = null;
    this.currentIndex = -1;
  }
}
