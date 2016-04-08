System.register(['../../clients/userRestClient/userRestClient', 'angular2/core'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var userRestClient_1, core_1;
    var LoginService;
    return {
        setters:[
            function (userRestClient_1_1) {
                userRestClient_1 = userRestClient_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(userRestClient) {
                    this.userRestClient = userRestClient;
                }
                LoginService.prototype.sendForgetPassword = function (param) {
                    var result = this.userRestClient.forgetPassword(param);
                    console.log("UserService:");
                    console.log(result);
                    return result;
                };
                LoginService.prototype.signUp = function (email, password) {
                    var result = this.userRestClient.signUp(email, password);
                    console.log("UserService:");
                    console.log(result);
                    return result;
                };
                LoginService = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(userRestClient_1.UserRestClient)), 
                    __metadata('design:paramtypes', [userRestClient_1.UserRestClient])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=LoginService.js.map