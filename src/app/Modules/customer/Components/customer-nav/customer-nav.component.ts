import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-nav',
  templateUrl: './customer-nav.component.html',
  styleUrls: ['./customer-nav.component.css']
})
export class CustomerNavComponent {

  constructor(private router:Router){}

  ngOnInit(){}

  logOut(){
    sessionStorage.removeItem("customerId");
    this.router.navigate(['Customer'])

  }

}
