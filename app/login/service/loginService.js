System.register(['../../clients/accountRestClient/AccountRestClient', 'angular2/core'], function(exports_1, context_1) {
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
    var AccountRestClient_1, core_1;
    var LoginService;
    return {
        setters:[
            function (AccountRestClient_1_1) {
                AccountRestClient_1 = AccountRestClient_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(accountRestClient) {
                    this.accountRestClient = accountRestClient;
                }
                LoginService.prototype.forgetPassword = function (param) {
                    var result = this.accountRestClient.forgetPassword(param);
                    console.log(result);
                    return result;
                };
                LoginService.prototype.signUp = function (email, password) {
                    var result = this.accountRestClient.signUp(email, password);
                    console.log(result);
                    return result;
                };
                LoginService.prototype.login = function (email, password) {
                    console.log(email, password);
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [AccountRestClient_1.AccountRestClient])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=LoginService.js.map