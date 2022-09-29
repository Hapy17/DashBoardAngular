import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm = new User();

  constructor(private authService : AuthService) { }

  ngOnInit(): void {
  }

  connectUser():void{
    this.authService.signIn(this.userForm);
  }

}
