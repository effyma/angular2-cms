declare var System:any;
import {Component, OnInit,Injector} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import { ROUTER_DIRECTIVES,ROUTER_PROVIDERS,RouteConfig,AsyncRoute,Router} from 'angular2/router';
import { LoginComponent } from './login/components/login/login';
// import { Login } from './login/login.component';
import {DashboardComponent} from './dashboard/components/dashboard';
import {GlobalService} from './services/global/GlobalService';
import UserProfile from './services/global/GlobalService';
// import {UserRestClient} from './clients/userRestClient/UserRestClient';
// import {LoggedInRouterOutlet} from './services/routeService/RouterOutlet';
import {ComponentTest} from './ui/componentTest';

@Component({
    selector: 'my-app',
    // template: `
    // <ui-component-test></ui-component-test>
    // `,
    template: `
    <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
	directives: [LoginComponent,ROUTER_DIRECTIVES,ComponentTest]
})

@RouteConfig([
    // { path: '/**', redirectTo: ['Dashboard'] },
    // { path: '/', redirectTo: ['Dashboard']},
    // { path: '/',name:'Login',component:LoginComponent },
     new AsyncRoute({name:'Login',path:'/login', loader:()=>System.import('../../../app/login/components/login/login').then(p=>p.LoginComponent)}),
    new AsyncRoute({name:'Dashboard',path:'/dashboard/...',data:{type:'admin'},loader:()=>System.import('../../../app/dashboard/components/dashboard').then(p=>p.DashboardComponent)})   
	// { path: '/dashboard/...', name: 'Dashboard', component: DashboardComponent }
])

export class AppComponent implements OnInit{
    globalService;
    router;
    constructor(injector:Injector,globalService:GlobalService,router:Router){
        // console.log('construct app component')
        // this.globalService = injector.parent.get(GlobalService);
        // this.router = router;
    }
    ngOnInit(){
        // console.log('app component ngOnInit');
        // console.log('app:',this.globalService.isLoggedIn())
        // if(this.globalService.validateLogin()){
        //     console.log('redirect to dashboard')
        //     this.router.navigateByUrl('/dashboard')
        // }else{
        //     this.router.navigateByUrl('/login')
        // }
    }
}
