import { Component, OnInit } from '@angular/core';
import {LoginInfo} from '../LoginInfo';
import {AuthService} from '../AuthService';
import {Router} from '@angular/router';
import {TokenStorageService} from '../TokenStorageService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {};
  roles: string[] = [];
  i:number;
  isLoggedIn = false;
  isLoginFailed = false;
  loginInfo: LoginInfo;
  showSpinner = false;

  constructor(private authService: AuthService, private router: Router,
              private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.showSpinner = true;
    this.loginInfo = new LoginInfo(
      this.form.username,
      this.form.password
    );

    this.authService.login(this.loginInfo).subscribe(data => {
      this.tokenStorageService.saveToken(data.accessToken);
      this.tokenStorageService.saveUsername(data.username);
      this.tokenStorageService.saveAuthorities(data.authorities);
      this.roles = this.tokenStorageService.getAuthorities();
      this.isLoggedIn = true;
      this.isLoginFailed = false;
      console.log('object',this.roles)

     
     
      const deepArray2 = [{authority: 'ROLE_ADMIN'}]
      
     
      // Returns false due to referential equality
    

    if (  JSON.stringify(this.roles) === JSON.stringify(deepArray2)){
        window.location.replace("/questions");
       
      }else{
        window.location.replace(`/historique/${this.form.username}`);
      }
   /*this.router.navigate(['/profile/' + this.form.username]); */

    }, error => {
      this.isLoginFailed = true;
      this.showSpinner = false;
    });
  }

}
