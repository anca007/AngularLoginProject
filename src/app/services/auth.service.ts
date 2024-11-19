import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: any = null

  constructor() {
  }

  public connexion(login: String, password: String) {
    //contact api to authenticate
    this.user = {firstname: "Sly", lastname: "TROPEE", role: ['user', 'admin']}
    return this.isAuthenticated()
  }

  public isAuthenticated() {
    return this.user != null;
  }

  public getUser() {
    return this.user;
  }

  public hasRole(role: String)  {
    if (role == null || role == "") {
      return true
    }
    return this.user.role.includes(role);
  }

  public saveInStorage(){
    localStorage.setItem('user', JSON.stringify(this.user))
  }


}
