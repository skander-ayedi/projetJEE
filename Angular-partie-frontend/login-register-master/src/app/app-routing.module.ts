import { RegisterComponent } from './auth/register/register.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import {ProfileComponent} from './auth/profile/profile.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ThemeComponent } from './theme/theme.component';
import { LevelComponent } from './level/level.component';
import { QuestionContentComponent } from './question-content/question-content.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ResponsesComponent } from './responses/responses.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';


import { AddGroupComponent } from './add-group/add-group.component';

import { AddFormationComponent } from './add-formation/add-formation.component';
import { FormationListComponent } from './formation-list/formation-list.component';

import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { UserformationComponent } from './userformation/userformation.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile/:username',
    component: ProfileComponent
  },
 
 
  


  { path: 'historique/:userUsername', component: HistoriqueComponent },
  {path: 'theme', component: ThemeComponent,
   children: [
    {path: 'quizz/:idLevel', component: QuizzComponent},
    {path: 'themeContent/:id', component: ThemeContentComponent},
    
   ]
  },
  {path: 'userformation', component: UserformationComponent},
 
  {
    path: 'questions',
    component: QuestionsComponent,
   children: [
     {path: 'addTeam', component: AddGroupComponent},
     {path: 'addformation', component: AddFormationComponent},
     {path: 'addcomment', component: AddCommentComponent },
    {path: 'teams', component: TeamsListComponent },
    {path: 'teams/:id', component: TeamDetailsComponent },
    {path: 'comment', component: CommentListComponent},
    {path:  'comment/:id' , component: CommentDetailsComponent},{path: 'formation', component: FormationListComponent},
    {path: 'formation/:id ', component: FormationDetailsComponent},
 
    {path: 'level/:id', component: LevelComponent,
      children: [
        {path: 'questionContent/:id', component: QuestionContentComponent}
      ]},
     {
       path: 'responses/:id', component: ResponsesComponent
     }

   ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
