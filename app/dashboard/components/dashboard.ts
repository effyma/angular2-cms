declare var System:any;
import {Component, OnInit,Injector} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES,AsyncRoute,CanActivate,Router} from 'angular2/router';
import {HomeComponent} from './Home/home';
import {TesterComponent} from './tester/tester';
import {componentProxyFactory} from '../../common/Proxy/ComponentProxyFactory'
import {DashboardService} from '../services/dashboardService';
import {GlobalService} from '../../services/global/GlobalService';

@Component({
	selector: 'dashboard-container',
    directives: [ROUTER_DIRECTIVES,CORE_DIRECTIVES],
	styleUrls: ['app/dashboard/components/dashboard.css'],
	templateUrl: 'app/dashboard/components/dashboard.html',
    providers:[DashboardService]    
})

@RouteConfig([
    { path: '/**',redirectTo:['Home'] },
    new AsyncRoute({name:'Products',path:'/products',loader:()=> System.import('../../../app/dashboard/components/Products/products').then(p=>p.ProductComponent)}),
    new AsyncRoute({name:'Tester',path:'/test',loader:()=> System.import('../../../app/dashboard/components/tester/tester').then(t=>t.TesterComponent)}),
    new AsyncRoute({name:'Users',path:'/users',loader:()=> System.import('../../../app/dashboard/components/Users/userList').then(u=>u.UserListComponent)}),
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
    dashboardService;
    globalService;router;
    constructor(dashboardService:DashboardService,globalService:GlobalService,injector:Injector,router:Router){
        this.dashboardService = dashboardService
        this.globalService = injector.get(GlobalService);
        this.router = router;
    }
    ngOnInit(){
    this.isVisible = false;
    if(!this.globalService.isLoggedIn()){
        console.log('dashboard component: isLoggedIn false')
       this.router.navigate(['Login'])
    }
    }
    
    canActivate(){
        this.globalService.isLoggedin();
    }
    
    onClickToggleMenu(){
        this.isVisible = !this.isVisible;
    }
    
    onClickLogout(e){
        e.preventDefault();
        this.globalService.logout();
    }

}
