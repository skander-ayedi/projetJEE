import { Component, OnInit } from '@angular/core';
import {AuthService} from '../AuthService';
import {Router} from '@angular/router';
import {LoginInfo} from '../LoginInfo';
import {RegisterInfo} from '../RegisterInfo';
import {TokenStorageService} from '../TokenStorageService';
import {ProfileInfo} from '../ProfileInfo';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {};
  isSignedUp = false;
  signUpInfo: RegisterInfo;
  showSpinner = false;
  isSignUpFailed = false;
  errorMessage = false;
  gender: any = {};
  roles: string[] = [];
  loginInfo: LoginInfo;
  profileInfo: ProfileInfo[];


  constructor(private authService: AuthService, private router: Router, private tokenStorageService: TokenStorageService) {
  }

  ngOnInit(): void {
    this.gender = 'female';
    this.authService.findAllUsers().subscribe(roles => {
      this.profileInfo = roles;
    });
  }
  setGender() {
   this.form.gender = this.gender;
  }

  
  onSubmit() {
    this.showSpinner = true;
    this.signUpInfo = new RegisterInfo(
      this.form.name,
      this.form.username,
      this.form.email,
      this.form.password,
      this.form.gender,
      this.form.birthdate,
      this.form.rolebase
     
    );

   if (this.form.rolebase==22){
      this.signUpInfo.role = ['admin'];}

    console.log('object',this.form.rolebase)

    this.authService.register(this.signUpInfo).subscribe(signUpInfo => {
    this.signUpInfo = signUpInfo;
      this.loginInfo = new LoginInfo(
        this.form.username,
        this.form.password
      );

      this.authService.login(this.loginInfo).subscribe(loginInfo => {
        this.tokenStorageService.saveToken(loginInfo.accessToken);
        this.tokenStorageService.saveUsername(loginInfo.username);
        this.tokenStorageService.saveAuthorities(loginInfo.authorities);
        this.roles = this.tokenStorageService.getAuthorities();
        /*console.log("object",this.roles);*/
        this.isSignedUp = true;
        this.showSpinner = false;
        this.isSignedUp = true;
        this.isSignUpFailed = false;
        
       // this.router.navigate(['/profile/' + this.form.username]);
      });
    }, error => {
      this.errorMessage = error.error.message;
      this.isSignUpFailed = true;
    });
  }



  reset() {
    this.form.name = '';
    this.form.username = '';
    this.form.email = '';
    this.form.password = '';
    this.form.gender = '';
    this.form.birthdate = '';
    this.form.RoleBase = '';
   
  }
}
