declare var System:any;
import {Component, OnInit,Injector} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import { ROUTER_DIRECTIVES,ROUTER_PROVIDERS,RouteConfig,AsyncRoute,Router} from 'angular2/router';
import { LoginComponent } from './login/components/login/login';
import { Login } from './login/login.component';
import {DashboardComponent} from './dashboard/components/dashboard';
import {GlobalService} from './services/global/GlobalService';
// import {LoggedInRouterOutlet} from './services/routeService/RouterOutlet';

@Component({
    selector: 'my-app',
    template: `
   <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
	directives: [ LoginComponent,Login,ROUTER_DIRECTIVES],
	// providers: [ Router]
})

@RouteConfig([
    // { path: '/**', redirectTo: ['Dashboard'] },
    { path: '/', redirectTo: ['Login']},
    { path: '/login',name:'Login',component:LoginComponent },
    new AsyncRoute({name:'Dashboard',path:'/dashboard/...',loader:()=>System.import('../../../app/dashboard/components/dashboard').then(p=>p.DashboardComponent)})   
	// { path: '/dashboard/...', name: 'Dashboard', component: DashboardComponent,useAsDefault:true }
])

export class AppComponent implements OnInit{
    globalService;
    router;
    constructor(injector:Injector,router:Router,globalService:GlobalService){
        this.globalService = injector.parent.get(GlobalService);
        this.router = router;
    }
    ngOnInit(){
        console.log(this.globalService.isLoggedIn())
        console.log(this.router)
        // if(this.globalService.isLoggedIn()){
        //  this.router.navigateByUrl('/dashboard');
        // }
    }
}
