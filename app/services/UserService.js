System.register(['app/clients/AccountRestClient/AccountRestClient', 'angular2/core'], function(exports_1, context_1) {
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
    var AccountRestClient_1, core_1;
    var UserService;
    return {
        setters:[
            function (AccountRestClient_1_1) {
                AccountRestClient_1 = AccountRestClient_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            UserService = (function () {
                function UserService(account) {
                }
                UserService.prototype.forgetPassword = function (param) {
                    this.account.forgetPassword(param, function (data) {
                        console.log(data.entity);
                    }, function (err) {
                        console.log(err.entity);
                    });
                };
                UserService = __decorate([
                    __param(0, core_1.Inject(AccountRestClient_1.AccountRestClient)), 
                    __metadata('design:paramtypes', [Object])
                ], UserService);
                return UserService;
            }());
            exports_1("UserService", UserService);
        }
    }
});
// var injector = Injector.resolveAndCreate([AccountRestClient]);
// var AccountRestClient = injector.get(AccountRestClient); 
//# sourceMappingURL=UserService.js.map