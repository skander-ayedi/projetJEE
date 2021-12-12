import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { ProfileComponent } from './auth/profile/profile.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSliderModule} from '@angular/material/slider';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { QuizzComponent } from './quizz/quizz.component';
import { ThemeContentComponent } from './theme-content/theme-content.component';
import { HeaderComponent } from './header/header.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { HistoriqueComponent } from './historique/historique.component';
import { ThemeComponent } from './theme/theme.component';
import { ResultComponent } from './result/result.component';

import { QuestionsComponent } from './questions/questions.component';
import { ResponsesComponent } from './responses/responses.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { LevelComponent } from './level/level.component';
import { QuestionContentComponent } from './question-content/question-content.component';
import { AddLevelComponent } from './level/add-level/add-level.component';
import { AddGroupComponent } from './add-group/add-group.component';

import { MatDialogModule } from '@angular/material/dialog';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { FormationDetailsComponent } from './formation-details/formation-details.component';
import { FormationListComponent } from './formation-list/formation-list.component';

         
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { Welcome2Component } from './welcome2/welcome2.component';
import { AddCommentComponent } from './add-comment/add-comment.component';

import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentDetailsComponent } from './comment-details/comment-details.component';

import { UserinterfaceComponent } from './userinterface/userinterface.component';
import { UsercommentComponent } from './usercomment/usercomment.component';
import { UserformationComponent } from './userformation/userformation.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AppComponent,
    AddQuestionComponent,
    HistoriqueComponent,
    
    HeaderComponent,
    RegisterComponent, 
    LoginComponent,
    ProfileComponent,
    QuizzComponent,
    ThemeComponent,
    ThemeContentComponent,
    
    AddGroupComponent,
    ResultComponent,
    QuestionsComponent,
    QuestionContentComponent,
    ResponsesComponent,
    AddThemeComponent,
    LevelComponent,
    AddLevelComponent,
    AddGroupComponent,
    
   

    AddFormationComponent,
    FormationDetailsComponent,
    FormationListComponent,
    
    TeamDetailsComponent,
    TeamsListComponent,
    Welcome2Component,
    AddCommentComponent,
   
    CommentListComponent,
   
    CommentDetailsComponent,
   
   
   
    UserinterfaceComponent,
   
   
   
    UsercommentComponent,
   
   
   
    UserformationComponent
  ],
  imports: [
    BrowserModule,
  
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatProgressBarModule,
    MatStepperModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDialogModule,
    
    MatDialogModule,
    BrowserAnimationsModule,
  
   
    HttpClientModule,
    FormsModule,
    MatRadioModule,
    
    MatIconModule,
    MatFormFieldModule,
   
    BrowserAnimationsModule,
    
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatProgressBarModule,
    MatStepperModule,
    MatRadioModule,
    MatFormFieldModule,
    
    
    MatDialogModule,
    BrowserAnimationsModule,
    AppRoutingModule,
   
    HttpClientModule,
    FormsModule,
    MatRadioModule,
  
    MatIconModule,
    MatFormFieldModule,
   
    BrowserAnimationsModule,
    
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatSliderModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatProgressBarModule,
    MatStepperModule,
    MatRadioModule,
    MatFormFieldModule,
    AppRoutingModule

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
  entryComponents: [
    AddQuestionComponent,
    AddThemeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
