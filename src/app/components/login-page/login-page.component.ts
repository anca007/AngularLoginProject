import {Component} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  public login: String
  public password: String

  constructor(private auth: AuthService, private router: Router) {
    this.login = "";
    this.password = ""
  }

  public authenticate() {
    if (this.auth.connexion(this.login, this.password)) {
      this.router.navigate(["home"])
    }
  }

}
