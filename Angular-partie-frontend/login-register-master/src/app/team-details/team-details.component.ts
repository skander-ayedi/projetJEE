import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  
  currentTeam = null;
  message = '';

  constructor(
    private groupService: GroupService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getTeam(this.route.snapshot.paramMap.get('id'));
  }

  getTeam(id): void {
    this.groupService.getGroupsbyid(id)
      .subscribe(
        data => {
          this.currentTeam = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }



  updateTeam(): void {
    this.groupService.updateGroup(this.currentTeam.id, this.currentTeam)                          
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The team was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTeam(): void {
    this.groupService.deleteGroup(this.currentTeam.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['questions/teams']);
        },
        error => {
          console.log(error);
        });
  }
}

  


