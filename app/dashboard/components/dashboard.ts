import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HomeComponent} from './Home/home';
import {ProductComponent} from './Products/products';
// import {DashboardService} from '../../services/dashboardService';
@Component({
	selector: 'dashboard-container',
    directives: [ROUTER_DIRECTIVES,CORE_DIRECTIVES],
	styleUrls: ['app/dashboard/components/dashboard.css'],
	templateUrl: 'app/dashboard/components/dashboard.html'
})

@RouteConfig([
    { path: '/**',redirectTo:['Home'] },
	{ path: '/home', name: 'Home', component: HomeComponent,useAsDefault:true},
    { path: '/products', name: 'Products', component: ProductComponent }
])

export class DashboardComponent implements OnInit{
    isVisible = false;
    ngOnInit(){
    this.isVisible = false;
    }
    
    onClickToggleMenu(){
        this.isVisible = !this.isVisible;
    }
    

	// constructor(dashboardService:DashboardService){
    //     this.dashboardService = dashboardService;
	// }

}
