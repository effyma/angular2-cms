declare var System:any;
import {Component, OnInit} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES,AsyncRoute} from 'angular2/router';
import {HomeComponent} from './Home/home';
// import {ProductComponent} from './Products/products';
import {TesterComponent} from './tester/tester';
import {componentProxyFactory} from '../../common/Proxy/ComponentProxyFactory'
// import {DashboardService} from '../../services/dashboardService';
@Component({
	selector: 'dashboard-container',
    directives: [ROUTER_DIRECTIVES,CORE_DIRECTIVES],
	styleUrls: ['app/dashboard/components/dashboard.css'],
	templateUrl: 'app/dashboard/components/dashboard.html'
    
})

@RouteConfig([
    { path: '/**',redirectTo:['Home'] },
    new AsyncRoute({name:'Products',path:'/products',loader:()=> System.import('../../../app/dashboard/components/Products/products').then(p=>p.ProductComponent)}),
    new AsyncRoute({name:'Tester',path:'/test',loader:()=> System.import('../../../app/dashboard/components/tester/tester').then(t=>t.TesterComponent)}),
    new AsyncRoute({name:'Users',path:'/users',loader:()=> System.import('../../../app/dashboard/components/Users/users').then(u=>u.UserListComponent)}),
    new AsyncRoute({name:'MyProfile',path:'/myprofile',loader:()=> System.import('../../../app/dashboard/components/MyProfile/MyProfile').then(u=>u.MyProfileComponent)}),
    
    // { path: '/products', component:componentProxyFactory({path:'../../../app/dashboard/components/Products/products',provide:p => p.ProductComponent}),name:'Products'},
	// { path: '/test', component:componentProxyFactory({path:'../../../app/dashboard/components/tester/tester',provide:t => t=>t.TesterComponent}),name:'Tester'},
	// { path: '/products', component:componentProxyFactory({path:'../../../app/dashboard/components/Products/products',provide:p => p.ProductComponent}),name:'Products'},
	
    { path: '/home', name: 'Home', component: HomeComponent,useAsDefault:true},
    // { path: '/products', name: 'Products', component: ProductComponent },
    // { path: '/test', name: 'Tester', component: TesterComponent }
])

export class DashboardComponent implements OnInit{
    isVisible = false;
    ngOnInit(){
    this.isVisible = false;
    }
    
    onClickToggleMenu(){
        this.isVisible = !this.isVisible;
    }
    
    onClickLogout(e){
        e.preventDefault();
    }

	// constructor(dashboardService:DashboardService){
    //     this.dashboardService = dashboardService;
	// }

}
