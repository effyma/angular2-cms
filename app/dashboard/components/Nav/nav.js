System.register(['../../services/NavService/NavService', 'angular2/core', 'angular2/router'], function(exports_1, context_1) {
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
    var NavService_1, core_1, router_1;
    var NavComponent;
    return {
        setters:[
            function (NavService_1_1) {
                NavService_1 = NavService_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            NavComponent = (function () {
                function NavComponent(navService) {
                    this.navService = navService;
                }
                NavComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.navService.getAllNav().then(function (navItems) { return _this.navItems = navItems; });
                };
                NavComponent = __decorate([
                    core_1.Component({
                        selector: 'nav-items',
                        template: "\n    <div *ngFor=\"#item of navItems\" class=\"layout-menu-item\" [routerLink]=\"[item.name]\">\n    <span>{{item.name}}</span>\n    </div>\n    ",
                        styles: ["\n    .layout-menu-item{\n    cursor: pointer;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: -webkit-box;\n    display: -moz-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-justify-content: flex-start;\n    -webkit-justify-content: flex-start;\n    justify-content: flex-start;\n    -webkit-align-items: center;\n    -webkit-align-items: center;\n    align-items: center;\n    }\n    .layout-menu-item span{\n        font-family: \"Helvetica Neue\",Helvetica,Arial,sans-serif;\n        font-size: 20px;\n        padding: 15px;\n    }\n    .layout-menu-item:hover{\n        background-color: rgba(0,0,0,.05);\n    }"],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [NavService_1.NavService]
                    }), 
                    __metadata('design:paramtypes', [NavService_1.NavService])
                ], NavComponent);
                return NavComponent;
            }());
            exports_1("NavComponent", NavComponent);
        }
    }
});
//# sourceMappingURL=nav.js.map