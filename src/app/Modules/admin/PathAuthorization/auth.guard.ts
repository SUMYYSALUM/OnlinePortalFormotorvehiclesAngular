import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(): boolean {
    // Check if the adminId is present in sessionStorage
    const adminId = sessionStorage.getItem('adminId');

    if (adminId) {
      // If adminId is present, allow the user to access the path
      return true;
    } else {
      // If adminId is not present, redirect to the home path (you can change 'home' to the desired path)
      this.router.navigate(['']); // Replace '' with your desired home path
      return false;
    }
  }
}
