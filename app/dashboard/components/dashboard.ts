declare var System:any;
import {Component, OnInit,Injector,ComponentRef} from 'angular2/core';
import {CORE_DIRECTIVES} from 'angular2/common';
import { RouteConfig, ROUTER_DIRECTIVES,AsyncRoute,CanActivate,Router,ComponentInstruction,RouteData} from 'angular2/router';
import {HomeComponent} from './Home/home';
import {TesterComponent} from './tester/tester';
import {NavComponent} from './Nav/nav';
import {componentProxyFactory} from '../../common/Proxy/ComponentProxyFactory'
import {GlobalService,isLoggedIn} from '../../services/global/GlobalService';

@Component({
	selector: 'dashboard-container',
    directives: [ROUTER_DIRECTIVES,CORE_DIRECTIVES,NavComponent],
	styleUrls: ['app/dashboard/components/dashboard.css'],
	templateUrl: 'app/dashboard/components/dashboard.html',
})

@RouteConfig([
    { path: '/**',redirectTo:['Home'] },
    new AsyncRoute({name:'Products',path:'/products',loader:()=> System.import('../../../app/dashboard/components/Products/products').then(p=>p.ProductComponent)}),
    new AsyncRoute({name:'Tester',path:'/test',loader:()=> System.import('../../../app/dashboard/components/tester/tester').then(t=>t.TesterComponent)}),
    new AsyncRoute({name:'Users',path:'/users',loader:()=> System.import('../../../app/dashboard/components/Users/userList').then(u=>u.UserListComponent)}),
    new AsyncRoute({name:'Customers',path:'/customers/...',loader:()=> System.import('../../../app/dashboard/components/Customers/customers').then(c=>c.CustomersComponent)}),
    // new AsyncRoute({name:'UserDetail',path:'/detail/:id',loader:()=> System.import('../../../app/dashboard/components/Users/detail/detail').then(u=>u.UserDetailComponent)}),
    new AsyncRoute({name:'MyProfile',path:'/myprofile',loader:()=> System.import('../../../app/dashboard/components/MyProfile/MyProfile').then(u=>u.MyProfileComponent)}),
    new AsyncRoute({name:'Services',path:'/services',loader:()=> System.import('../../../app/dashboard/components/Services/services').then(s=>s.ServicesListComponent)}),
    // { path: '/products', component:componentProxyFactory({path:'../../../app/dashboard/components/Products/products',provide:p => p.ProductComponent}),name:'Products'},
	// { path: '/test', component:componentProxyFactory({path:'../../../app/dashboard/components/tester/tester',provide:t => t=>t.TesterComponent}),name:'Tester'},
	// { path: '/products', component:componentProxyFactory({path:'../../../app/dashboard/components/Products/products',provide:p => p.ProductComponent}),name:'Products'},
    { path: '/home', name: 'Home', component: HomeComponent,useAsDefault:true}
])

@CanActivate((next: ComponentInstruction, previous: ComponentInstruction) => {
  return isLoggedIn(next, previous);
})
export class DashboardComponent implements OnInit{
    isVisible = false;
    globalService;router;
    constructor(globalService:GlobalService,injector:Injector,router:Router,data:RouteData, componentRef:ComponentRef){
        console.log(injector)
        // this.globalService = globalService;
        this.globalService = injector.parent.get(GlobalService);
        this.router = router;
        this.data = data.get('type')
        // this.componentRef = componentRef;
        console.log(this.data)
    }
    ngOnInit(){
    this.isVisible = false;
    // if(!this.globalService.isLoggedIn()){
    //    this.router.navigate(['Login'])
    // }
    }
    
    onClickToggleMenu(){
        this.isVisible = !this.isVisible;
    }
    
    onClickLogout(e){
        e.preventDefault();
        this.globalService.logout().then(
            this.router.navigate(['Login'])
        );
        // .then(this.componentRef.destroy());
    }

}
