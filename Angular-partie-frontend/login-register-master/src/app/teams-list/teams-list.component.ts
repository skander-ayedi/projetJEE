import { Component, OnInit } from '@angular/core';
import { GroupService } from '../service/group.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.css']
})
export class TeamsListComponent implements OnInit {

  teams: any;
  currentTeam = null;
  currentIndex = -1;
  teamName = '';

  constructor(private groupService: GroupService) { }

    ngOnInit(): void {
      this.retrieveTeams();
    }
    retrieveTeams(): void {
      this.groupService.getGroupList()
        .subscribe(
          data => {
            this.teams = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
    setActiveTeam(team, index): void {
      this.currentTeam = team;
      this.currentIndex = index;
    }

    refreshList(): void {
      this.retrieveTeams();
      this.currentTeam = null;
      this.currentIndex = -1;
    }


}
