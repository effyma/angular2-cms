import {Component, OnInit,Injector} from 'angular2/core';
import {CustomerService} from '../../../services/CustomerService/customerService';
import {Router} from 'angular2/router';
@Component({
	selector: 'customer-detail',
    template:`<div>customer detail</div>`
})

export class CustomerDetailComponent{
    customer;
    customerService;
    router
    constructor(customerService:CustomerService,router:Router){
        this.customerService = customerService
        this.router = router
        this.customerService.getCustomerById(1).then(customer=> {this.customer = customer;console.log(this.customer);})
    }
}