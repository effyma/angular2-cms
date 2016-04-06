System.register(['../clients/UserRestClient/UserRestClient', 'angular2/core', '../clients/Test/testRest'], function(exports_1, context_1) {
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
    var UserRestClient_1, core_1, testRest_1;
    var UserService, injector;
    return {
        setters:[
            function (UserRestClient_1_1) {
                UserRestClient_1 = UserRestClient_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testRest_1_1) {
                testRest_1 = testRest_1_1;
            }],
        execute: function() {
            // import AccountRestClient from 'AccountRestClient';
            UserService = (function () {
                // accountRestClient = new AccountRestClient.AccountRestClient();
                function UserService(userRestClient) {
                    this.userRestClient = userRestClient;
                    var testRestClient = injector.get(testRest_1.TestRestClient);
                    this.testRestClient = testRestClient;
                }
                UserService.prototype.forgetPassword = function (param) {
                    var result = this.userRestClient.forgetPassword(param);
                    console.log("UserService:");
                    console.log(result);
                    return result;
                    // this.accountRestClient.forgetPassword(param,
                    // 	function(data){
                    // 		console.log(data.entity);
                    // 	},
                    // 	function(err){
                    // 		console.log(err.entity);
                    // 	});
                };
                UserService.prototype.signUp = function (email, password) {
                    var result = this.userRestClient.signUp(email, password);
                    console.log("UserService:");
                    console.log(result);
                    return result;
                };
                UserService.prototype.getSession = function () {
                    this.testRestClient.getSession();
                };
                UserService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [UserRestClient_1.UserRestClient])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
            injector = core_1.Injector.resolveAndCreate([core_1.provide(testRest_1.TestRestClient, { useClass: testRest_1.TestRestClient })]);
        }
    }
});
//# sourceMappingURL=UserService.js.map