System.register(['angular2/core', 'angular2/router', './login/components/login/login', './login/login.component', './services/global/GlobalService'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, login_1, login_component_1, GlobalService_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_1_1) {
                login_1 = login_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (GlobalService_1_1) {
                GlobalService_1 = GlobalService_1_1;
            }],
        execute: function() {
            // import {UserRestClient} from './clients/userRestClient/UserRestClient';
            // import {LoggedInRouterOutlet} from './services/routeService/RouterOutlet';
            AppComponent = (function () {
                function AppComponent(injector, globalService) {
                    // injector = Injector.resolveAndCreate([UserRestClient]);
                    this.globalService = injector.parent.get(GlobalService_1.GlobalService);
                    this.globalService.init();
                }
                AppComponent.prototype.ngOnInit = function () {
                    console.log(this.globalService);
                    console.log('app component ngOnInit :', this.globalService.isLoggedIn());
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   <router-outlet></router-outlet>\n    ",
                        styleUrls: ['app/app.component.css'],
                        directives: [login_1.LoginComponent, login_component_1.Login, router_1.ROUTER_DIRECTIVES],
                    }),
                    router_1.RouteConfig([
                        // { path: '/**', redirectTo: ['Dashboard'] },
                        // { path: '/', redirectTo: ['Dashboard']},
                        { path: '/', name: 'Login', component: login_1.LoginComponent },
                        new router_1.AsyncRoute({ name: 'Dashboard', path: '/dashboard/...', loader: function () { return System.import('../../../app/dashboard/components/dashboard').then(function (p) { return p.DashboardComponent; }); } })
                    ]), 
                    __metadata('design:paramtypes', [core_1.Injector, GlobalService_1.GlobalService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map