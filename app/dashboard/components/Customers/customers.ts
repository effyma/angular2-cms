import {Component,OnInit} from 'angular2/core';
import {CustomerService} from '../../services/CustomerService/customerService';
import { RouteConfig,Router,ROUTER_DIRECTIVES} from 'angular2/router';
import {CustomerListComponent} from './list/customerList'
import {CustomerDetailComponent} from './detail/customerDetail'
@Component({
	selector: 'customers-container',
    template:`
    <div>Customers</div>
    <router-outlet ></router-outlet>
    `,
    directives:[ROUTER_DIRECTIVES],
    providers:[CustomerService]
})

@RouteConfig([
    { path: '/**',redirectTo:['CustomerList'] },
    { path: '/', name: 'CustomerList', component: CustomerListComponent, useAsDefault:true},
    { path: '/detail', name: 'Detail', component: CustomerDetailComponent}
])

export class CustomersComponent implements OnInit{
customers;
selectedCustomer;
rowCount;
customerService;
constructor(customerService:CustomerService){
    this.customerService = customerService;
}
ngOnInit(){
    this.getCustomers();
    this.getRowCount();
}
getCustomers(){
    var sortedColumn =[];
    this.customerService.getCustomerLazyLoadList(0,10,sortedColumn,'','').then(customers=> this.customers=customers);
}
getRowCount(){
    this.customerService.getRowCount().then(rowCount=> this.rowCount = rowCount)
}
}
