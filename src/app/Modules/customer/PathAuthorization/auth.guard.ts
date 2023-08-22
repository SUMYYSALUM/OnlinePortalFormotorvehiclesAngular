import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate(): boolean {
    // Check if the customerId is present in sessionStorage
    const customerId = sessionStorage.getItem('customerId');

    if (customerId) {
      // If customerId is present, allow the user to access the path
      return true;
    } else {
      // If customerId is not present, redirect to the home path (you can change 'home' to the desired path)
      this.router.navigate(['']); // Replace '' with your desired home path
      return false;
    }
  }
  
}
