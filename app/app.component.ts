import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'my-app',
    template: `
    <login> </login>
    `,
    styleUrls: ['app/app.component.css'],
	directives: [ROUTER_DIRECTIVES, LoginComponent],
	// providers: [ROUTER_PROVIDERS, HeroService]
})

// @RouteConfig([
// 	{
// 	path: '/detail/:id',
// 	name: 'HeroDetail',
// 	component: HeroDetailComponent
// 	},
// 	{
// 	path: '/dashboard',
// 	name: 'Dashboard',
// 	component: DashboardComponent,
// 	useAsDefault: true
// 	},

// 	{
// 	path: '/heroes',
// 	name: 'Heroes',
// 	component: HeroesComponent
// 	}
// ])


export class AppComponent  {

}
