System.register(['angular2/core', 'rxjs'], function(exports_1, context_1) {
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
    var core_1, Rx;
    var LoginStore, LoginProfile;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Rx_1) {
                Rx = Rx_1;
            }],
        execute: function() {
            LoginStore = (function () {
                // account = new Rx.Subject;
                // logout = new Rx.Subject;
                // validateLogin = new Rx.Subject;
                function LoginStore() {
                    this.loginAc = new Rx.Subject;
                }
                LoginStore.prototype.login = function (email, password) {
                    this.loginAc.map(function (email, password) {
                        return function (state) {
                        };
                    });
                };
                LoginStore = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], LoginStore);
                return LoginStore;
            }());
            exports_1("LoginStore", LoginStore);
            LoginProfile = {};
        }
    }
});
//# sourceMappingURL=loginStore.js.map