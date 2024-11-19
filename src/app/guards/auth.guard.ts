import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "../services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {

  let authService = inject(AuthService)
  let router = inject(Router)

  const requiredRole = route.data['role'] ?? null
  console.log("role : ", requiredRole )
  if (authService.isAuthenticated() && authService.hasRole(requiredRole)) {
    return true
  } else {
    router.navigate(['login']/*, {queryParams: {returnUrl: state.url}}*/);
    return false
  }
};
