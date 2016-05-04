System.register(['angular2/core', '../../../clients/accountRestClient/AccountRestClient', 'angular2/http', '../../../common/RestUtil/Interceptor', '../../../services/global/GlobalService'], function(exports_1, context_1) {
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
    var core_1, AccountRestClient_1, http_1, Interceptor_1, GlobalService_1;
    var TesterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (AccountRestClient_1_1) {
                AccountRestClient_1 = AccountRestClient_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Interceptor_1_1) {
                Interceptor_1 = Interceptor_1_1;
            },
            function (GlobalService_1_1) {
                GlobalService_1 = GlobalService_1_1;
            }],
        execute: function() {
            TesterComponent = (function () {
                function TesterComponent(accountRestClient, globalService) {
                    this.accountRestClient = accountRestClient;
                    this.globalService = globalService;
                }
                TesterComponent.prototype.onClickGetTokenByAC = function (e) {
                    var _this = this;
                    e.preventDefault();
                    var email = 'test@kooppi.com';
                    var password = '123456';
                    this.accountRestClient.login({ email: email, password: password }).subscribe(function (data) {
                        console.log('test get data', data);
                        _this.globalService.login(data, email);
                    }, function (err) {
                        console.log('err:');
                        console.log(err);
                    }, function () { return console.log('Complete'); });
                };
                TesterComponent.prototype.onClickGetInfoByAC = function (e) {
                    e.preventDefault();
                    this.accountRestClient.getAccountInfo('test@kooppi.com', this.globalService.getKey(), this.globalService.getToken()).subscribe(function (data) {
                        console.log('data:');
                        console.log(data);
                    }, function (err) {
                        console.log('err:');
                        console.log(err);
                    }, function () { return console.log('Complete'); });
                };
                TesterComponent.prototype.onClickGetByAC = function (e) {
                    e.preventDefault();
                    console.log('getAccounttoken', this.globalService.getToken(), 'accountkey', this.globalService.getKey());
                };
                TesterComponent = __decorate([
                    core_1.Component({
                        selector: 'test-container',
                        template: "<h1>Testing page</h1>\n    <button (click)=\"onClickGetTokenByAC($event)\">getToken</button>\n    <button (click)=\"onClickGetInfoByAC($event)\">getAccountInfo</button>\n    <button (click)=\"onClickGetByAC($event)\">getAccountInfo</button>\n    ",
                        providers: [http_1.HTTP_PROVIDERS, Interceptor_1.Interceptor, AccountRestClient_1.AccountRestClient]
                    }), 
                    __metadata('design:paramtypes', [AccountRestClient_1.AccountRestClient, GlobalService_1.GlobalService])
                ], TesterComponent);
                return TesterComponent;
            }());
            exports_1("TesterComponent", TesterComponent);
        }
    }
});
//# sourceMappingURL=tester.js.map