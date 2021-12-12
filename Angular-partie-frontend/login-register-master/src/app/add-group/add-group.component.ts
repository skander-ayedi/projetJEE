import { Component, OnInit } from '@angular/core';
import {GroupService} from "../service/group.service";



@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html',
  styleUrls: ['./add-group.component.css'],

})
export class AddGroupComponent implements OnInit {
  
  team = {
    teamName:'',
    teamScore:''
  };
  submitted = false;
  

 constructor(private groupService: GroupService) { }

 ngOnInit() {}

 save():void{
  const data = {
    teamName: this.team.teamName,
    teamScore: this.team.teamScore
  };
  
  this.groupService.createGroup(data).subscribe(reponse => {
     console.log(reponse); 
     this.submitted = true;
   });
   
  }
  newTeam(): void {
    this.submitted = false;
    this.team = {
      teamName: '',
      teamScore: ''
    };
  }

}
