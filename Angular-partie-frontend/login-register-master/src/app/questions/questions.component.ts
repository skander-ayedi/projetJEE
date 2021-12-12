import { AddThemeComponent } from './../add-theme/add-theme.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Theme} from "../model/Theme";
import {ThemeService} from "../service/theme.service";
import {AddLevelComponent} from "../level/add-level/add-level.component";
import { GroupService } from '../service/group.service';
import { Team } from '../model/Team';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  dialogRef: any;
  themes: Theme[];
  teams: Team[];

  constructor(private dialog: MatDialog, private themeService: ThemeService,private groupService: GroupService) {}

  ngOnInit(): void {
    this.themeService.getThemes().subscribe(themes => {
      this.themes = themes;
     
    });

  }
  
 
  public openRegister() {
    this.dialogRef = this.dialog.open(AddThemeComponent, {
      width: '420px'
    });
  }

  addLevel(id: number) {
    this.dialogRef = this.dialog.open(AddLevelComponent, {
      width: '420px',
      data: {id}
    });
  }
}
