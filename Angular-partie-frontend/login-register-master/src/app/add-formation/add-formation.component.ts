import { Component, OnInit } from '@angular/core';
import { Formation } from '../model/formation';
import { FormationService } from '../service/formation.service';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
  formation = {
    title:'',
    description:'',
    content:''
  }

  submitted = false;
  constructor(private formationService: FormationService) { }

  ngOnInit(): void {
  }
  saveformation(){
    const data ={
      title:this.formation.title,
      description:this.formation.description,
      content:this.formation.content
    };
    this.formationService.createFormation(data).subscribe(Response => {
      console.log(Response);
      this.submitted = true;
    });
}
newformation(): void {
  this.submitted = false;
  this.formation={
    title:'',
    description:'',
    content:''
  };
}
}
