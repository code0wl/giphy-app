import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    const { offset } = route.params;
    if (offset >= 0) {
      return true;
    }
    this.router.navigateByUrl('/');
  }
}
