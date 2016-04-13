declare var System:any;
import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import { RouterOutlet,RouteConfig,AsyncRoute,Router} from 'angular2/router';
import { LoginComponent } from './login/components/login/login';
import { Login } from './login/login.component';
import {DashboardComponent} from './dashboard/components/dashboard';
// import {LoggedInRouterOutlet} from './services/routeService/RouterOutlet';

@Component({
    selector: 'my-app',
    template: `
   <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
	directives: [ LoginComponent,Login,RouterOutlet],
	providers: [ HTTP_PROVIDERS]
})

@RouteConfig([
    // { path: '/**', redirectTo: ['Dashboard'] },
    { path: '/',redirectTo:["Dashboard"] },
    { path: '/login',name:'Login',component:LoginComponent },
    // new AsyncRoute({name:'Dashboard',path:'/dashboard/...',loader:()=>System.import('../../../app/dashboard/components/dashboard').then(p=>p.DashboardComponent)})   
	{ path: '/dashboard/...', name: 'Dashboard', component: DashboardComponent,useAsDefault:true }
])


export class AppComponent  {
}
