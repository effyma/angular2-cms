import {Component, OnInit,Injector} from 'angular2/core';
import {CustomerService} from '../../../services/CustomerService/customerService';
import {Router} from 'angular2/router';
@Component({
	selector: 'customer-list',
    template:`
    <div>
    customer list
    </div>
    <button (click)="onClickEditUser({'name':'abc'})">Edit</button>
    `
})

export class CustomerListComponent implements OnInit{
    customers;
    rowCount;
    customerService;
    router;
    constructor(customerService:CustomerService,router:Router){
        this.customers = customerService.customers
        this.rowCount = customerService.rowCount
        this.router = router
    }
    ngOnInit(){
    this.getCustomers();
    this.getRowCount();
    }
    // getCustomers(){
    //      this.customerService.getCustomers().then(customers=>this.customers = customers).then(console.log(this.customers))
    // }
    // getRowCount(){
    //     this.customerService.getRowCount().then(rowCount=> this.rowCount = rowCount)
    // }
    
    getCustomers(){
    var sortedColumn =[];
    this.customerService.getCustomerLazyLoadList(0,10,sortedColumn,'','').then(customers=> this.customers=customers);
    }
    getRowCount(){
        this.customerService.getRowCount().then(rowCount=> this.rowCount = rowCount)
    }

    onClickEditUser(){
        // console.log(this.customers,this.rowCount)
        this.customerService.getCustomerLazyLoadList('','','',{'customerUid':'3','name':'customer1'});
        this.router.parent.navigate(['Detail'])
    }
}