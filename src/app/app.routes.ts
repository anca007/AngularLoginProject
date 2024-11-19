import {Routes} from '@angular/router';
import {LoginPageComponent} from "./components/login-page/login-page.component";
import {HomePageComponent} from "./components/home-page/home-page.component";
import {authGuard} from "./guards/auth.guard";
import {AdminPageComponent} from "./components/admin-page/admin-page.component";

export const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'admin', component: AdminPageComponent, canActivate: [authGuard], data: {role: 'admin'}},
  {path: '**', component: HomePageComponent, canActivate: [authGuard]},
];
