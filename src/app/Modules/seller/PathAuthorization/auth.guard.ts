import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router:Router){}

  canActivate(): boolean {
    // Check if the sellerId is present in sessionStorage
    const sellerId = sessionStorage.getItem('sellerId');

    if (sellerId) {
      // If sellerId is present, allow the user to access the path
      return true;
    } else {
      // If sellerId is not present, redirect to the home path (you can change 'home' to the desired path)
      this.router.navigate(['']); // Replace '' with your desired home path
      return false;
    }
  }
  
}
