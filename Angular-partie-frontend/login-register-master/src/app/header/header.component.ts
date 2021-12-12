import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor( ) {}

    // tslint:disable-next-line: typedef
    public openRegister() {
    window.location.replace(`/register/`);
  }
  ngOnInit(): void {
  }
  public signOut() {
    window.sessionStorage.clear();
    window.location.replace('/')
  }
}
