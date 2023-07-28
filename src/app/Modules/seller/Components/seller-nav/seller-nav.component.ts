import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-nav',
  templateUrl: './seller-nav.component.html',
  styleUrls: ['./seller-nav.component.css']
})
export class SellerNavComponent {

  constructor(private router:Router){}

  ngOnInit(){}

  logout(){
    this.router.navigate(['Seller']);
    sessionStorage.removeItem("sellerId");
  }

}
