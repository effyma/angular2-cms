System.register(['angular2/core', 'angular2/router', './login/components/login/login', './services/global/GlobalService', './ui/componentTest'], function(exports_1, context_1) {
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
    var core_1, router_1, login_1, GlobalService_1, componentTest_1;
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
            function (GlobalService_1_1) {
                GlobalService_1 = GlobalService_1_1;
            },
            function (componentTest_1_1) {
                componentTest_1 = componentTest_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(injector, globalService, router) {
                    // console.log('construct app component')
                    // this.globalService = injector.parent.get(GlobalService);
                    // this.router = router;
                }
                AppComponent.prototype.ngOnInit = function () {
                    // console.log('app component ngOnInit');
                    // console.log('app:',this.globalService.isLoggedIn())
                    // if(this.globalService.validateLogin()){
                    //     console.log('redirect to dashboard')
                    //     this.router.navigateByUrl('/dashboard')
                    // }else{
                    //     this.router.navigateByUrl('/login')
                    // }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <ui-component-test></ui-component-test>\n    ",
                        // template: `
                        // <router-outlet></router-outlet>
                        // `,
                        styleUrls: ['app/app.component.css'],
                        directives: [login_1.LoginComponent, router_1.ROUTER_DIRECTIVES, componentTest_1.ComponentTest]
                    }),
                    router_1.RouteConfig([
                        // { path: '/**', redirectTo: ['Dashboard'] },
                        // { path: '/', redirectTo: ['Dashboard']},
                        // { path: '/',name:'Login',component:LoginComponent },
                        new router_1.AsyncRoute({ name: 'Login', path: '/login', loader: function () { return System.import('../../../app/login/components/login/login').then(function (p) { return p.LoginComponent; }); } }),
                        new router_1.AsyncRoute({ name: 'Dashboard', path: '/dashboard/...', data: { type: 'admin' }, loader: function () { return System.import('../../../app/dashboard/components/dashboard').then(function (p) { return p.DashboardComponent; }); } })
                    ]), 
                    __metadata('design:paramtypes', [core_1.Injector, GlobalService_1.GlobalService, router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map