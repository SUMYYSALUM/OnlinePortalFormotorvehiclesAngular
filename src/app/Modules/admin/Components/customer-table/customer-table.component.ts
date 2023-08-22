import { Component } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Customer } from '../../Services/Customer/Customer';
import { CustomerService } from '../../Services/Customer/customer.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css']
})
export class CustomerTableComponent {
	customer!: Customer[];

  page = 1;
	pageSize = 4;
	// collectionSize = COUNTRIES.length;
	// countries: Country[];
	Customersform:FormGroup=new FormGroup({
		firstname: new FormControl('', [Validators.required]),
		lastname: new FormControl('', [Validators.required]),
		username: new FormControl('', [Validators.required]),
		email:new FormControl('', [Validators.required]),
		password:new FormControl('', [Validators.required]),
		phonenumber:new FormControl('', [Validators.required]),
		region:new FormControl('', [Validators.required]),
		district:new FormControl('', [Validators.required]),
		ward:new FormControl('', [Validators.required]),

	})

	updateCustomerform:FormGroup=new FormGroup({
		firstname: new FormControl('', [Validators.required]),
		lastname: new FormControl('', [Validators.required]),
		username: new FormControl('', [Validators.required]),
		email:new FormControl('', [Validators.required]),
		password:new FormControl('', [Validators.required]),
		phonenumber:new FormControl('', [Validators.required]),
		region:new FormControl('', [Validators.required]),
		district:new FormControl('', [Validators.required]),
		ward:new FormControl('', [Validators.required]),

	
	})



	
	ngOnInit(): void {
		this.getcustomer(); 
	}



	constructor(private customerService:CustomerService,
		config: NgbModalConfig, private modalService: NgbModal) {
		// customize default values of modals used by this component tree
		config.backdrop = 'static';
		config.keyboard = false;
	}

	openToPost(postModal:any) {
		this.modalService.open(postModal,{size:'lg'});
	}

	openToUpdate(updateModal:any) {
		this.modalService.open(updateModal,{size:'lg'});
	}

	openToDelete(deleteModal:any) {
		this.modalService.open(deleteModal,{size:'sm'});
	}

	public getcustomer(){
		this.customerService.getcustomer().subscribe(data =>
			{
			this.customer=data
			console.log(data)
		})
	}

	public newCustomers(){
		this.customerService.addcustomer(this.Customersform.value).subscribe(
			(data)=>{
				alert('Saved')
				this.Customersform.reset()
				this.getcustomer();
			},
			(error)=>{
				alert('Failed')
			}
		)
	}

	public DeletCustomer(id:number){
		this.customerService.Deletecustomer(id).subscribe(
			(data)=>{
				alert('Deleted')
				this.getcustomer();
			},
			(error)=>{
				alert('Failed')
			}
		)
	}

	editCustomer(customer:Customer){
		this.updateCustomerform = new FormGroup({
				customerId: new FormControl(customer.customerId, [Validators.required]),
				firstname: new FormControl(customer.firstname, [Validators.required]),
				lastname: new FormControl(customer.lastname, [Validators.required]),
				username: new FormControl(customer.username, [Validators.required]),
				email:new FormControl(customer.email, [Validators.required]),
				password:new FormControl('', [Validators.required]),
				phonenumber:new FormControl(customer.phonenumber, [Validators.required]),
				region:new FormControl(customer.region, [Validators.required]),
				district:new FormControl(customer.district, [Validators.required]),
				ward:new FormControl(customer.ward, [Validators.required]),


		})
	}

	updateCustomer(){
		this.customerService.Updatecustomer(this.updateCustomerform.controls["customerId"].value, 
		this.updateCustomerform.value).subscribe(response=>{
			alert('Updated')
			this.getcustomer();
		},
		(error)=>{
			alert('Failed')
		})
	}
	
}





