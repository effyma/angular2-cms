import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES,RouterLink } from 'angular2/router';
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/components/dashboard';
@Component({
    selector: 'my-app',
    template: `
   <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES, LoginComponent],
	// providers: [ROUTER_PROVIDERS, HeroService]
})

@RouteConfig([
    { path: '/**', redirectTo: ['Dashboard'] },
    { path: '/',redirectTo:["Dashboard"] },
	{ path: '/dashboard/...', name: 'Dashboard', component: DashboardComponent,useAsDefault:true }
])


export class AppComponent  {

}
