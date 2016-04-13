System.register(['../clients/UserRestClient/UserRestClient', 'angular2/core'], function(exports_1, context_1) {
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
    var UserRestClient_1, core_1;
    var UserService;
    return {
        setters:[
            function (UserRestClient_1_1) {
                UserRestClient_1 = UserRestClient_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            // import AccountRestClient from 'AccountRestClient';
            UserService = (function () {
                function UserService(userRestClient) {
                    // this.testRestClient = testRestClient;
                    this.userRestClient = userRestClient;
                }
                UserService.prototype.forgetPassword = function (param) {
                    var result = this.userRestClient.forgetPassword(param);
                    console.log("UserService:");
                    console.log(result);
                    return result;
                };
                UserService.prototype.signUp = function (email, password) {
                    var result = this.userRestClient.signUp(email, password);
                    console.log("UserService:");
                    console.log(result);
                    return result;
                };
                UserService.prototype.login = function (email, password) {
                    console.log(email, password);
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [UserRestClient_1.UserRestClient])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
//# sourceMappingURL=UserService.js.map