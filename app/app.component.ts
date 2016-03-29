import {Component, OnInit} from 'angular2/core';
// import {HeroesComponent} from './heroes.component';
// import {DashboardComponent} from './dashboard.component'
// import {HeroDetailComponent} from './hero-detail.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {HeroService} from './hero.service';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { LoginComponent } from './login/login.component';

@Component({
    selector: 'my-app',
    template: `
    <login> </login>
    `,
    styleUrls: ['app/app.component.css'],
    providers:[HTTP_PROVIDERS],
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
	constructor(HTTP_PROVIDERS: HTTP_PROVIDERS){}
}
