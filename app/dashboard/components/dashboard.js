System.register(['angular2/core', 'angular2/common', 'angular2/router', './Home/home', './Products/products', './tester/tester'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, home_1, products_1, tester_1;
    var DashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (products_1_1) {
                products_1 = products_1_1;
            },
            function (tester_1_1) {
                tester_1 = tester_1_1;
            }],
        execute: function() {
            // import {DashboardService} from '../../services/dashboardService';
            DashboardComponent = (function () {
                function DashboardComponent() {
                    this.isVisible = false;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    this.isVisible = false;
                };
                DashboardComponent.prototype.onClickToggleMenu = function () {
                    this.isVisible = !this.isVisible;
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'dashboard-container',
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.CORE_DIRECTIVES],
                        styleUrls: ['app/dashboard/components/dashboard.css'],
                        templateUrl: 'app/dashboard/components/dashboard.html'
                    }),
                    router_1.RouteConfig([
                        { path: '/**', redirectTo: ['Home'] },
                        { path: '/home', name: 'Home', component: home_1.HomeComponent, useAsDefault: true },
                        { path: '/products', name: 'Products', component: products_1.ProductComponent },
                        { path: '/test', name: 'Tester', component: tester_1.TesterComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.js.map