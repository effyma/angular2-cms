System.register(['angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, router_1;
    var HomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            // import {DashboardService} from '../../services/dashboardService';
            HomeComponent = (function () {
                function HomeComponent(router) {
                    this.router = router;
                }
                HomeComponent.prototype.onClickRedirect = function (route, e) {
                    e.preventDefault();
                    console.log(this.router, route);
                    this.router.navigate([route]);
                };
                HomeComponent = __decorate([
                    core_1.Component({
                        selector: 'home-container',
                        template: "<div>Home</div>\n    <button (click)=\"onClickRedirect('MyProfile',$event)\">profile</button>\n    <button (click)=\"onClickRedirect('Products',$event)\">products</button>\n    <button (click)=\"onClickRedirect('Tester',$event)\">tester</button>\n    ",
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], HomeComponent);
                return HomeComponent;
            }());
            exports_1("HomeComponent", HomeComponent);
        }
    }
});
//# sourceMappingURL=home.js.map