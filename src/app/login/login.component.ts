import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  user = new User();
  erreur=0;

  constructor(private _authService : AuthService,
               private _router: Router) { }

  ngOnInit() {
  }

  onLoggedin()
{
console.log(this.user);
let isValidUser: Boolean = this._authService.SignIn(this.user);
if (isValidUser)
  this._router.navigate(['/']);
else
  //alert('Login ou mot de passe incorrecte!');
this.erreur=1;
}

}
function ngOnInit() {
  throw new Error('Function not implemented.');
}

function onLoggedin() {
  throw new Error('Function not implemented.');
}

