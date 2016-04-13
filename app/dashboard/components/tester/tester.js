System.register(['angular2/core', '../../../clients/Test/testRest', 'angular2/http', '../../../common/RestUtil/Interceptor'], function(exports_1, context_1) {
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
    var core_1, testRest_1, http_1, Interceptor_1;
    var TesterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (testRest_1_1) {
                testRest_1 = testRest_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Interceptor_1_1) {
                Interceptor_1 = Interceptor_1_1;
            }],
        execute: function() {
            TesterComponent = (function () {
                function TesterComponent(testRestClient) {
                    this.testRestClient = testRestClient;
                }
                TesterComponent.prototype.onClickGetToken = function (e) {
                    e.preventDefault();
                    var email = 'test@kooppi.com';
                    var password = '123456';
                    this.testRestClient.login({ email: email, password: password });
                };
                TesterComponent.prototype.onClickGetInfo = function (e) {
                    e.preventDefault();
                    this.testRestClient.getSession('test@kooppi.com');
                };
                TesterComponent.prototype.onClickGetTokenByAC = function (e) {
                    e.preventDefault();
                    var email = 'test@kooppi.com';
                    var password = '123456';
                    this.testRestClient.login({ email: email, password: password });
                };
                TesterComponent.prototype.onClickGetInfoByAC = function (e) {
                    e.preventDefault();
                    this.testRestClient.getSession('test@kooppi.com');
                };
                TesterComponent = __decorate([
                    core_1.Component({
                        selector: 'test-container',
                        template: "<h1>Testing page</h1>\n    <button (click)=\"onClickGetToken($event)\">getToken</button>\n    <button (click)=\"onClickGetInfo($event)\">getAccountInfo</button>\n    <button (click)=\"onClickGetTokenByAC($event)\">getToken</button>\n    <button (click)=\"onClickGetInfoByAC($event)\">getAccountInfo</button>\n    ",
                        providers: [testRest_1.TestRestClient, http_1.HTTP_PROVIDERS, Interceptor_1.Interceptor]
                    }), 
                    __metadata('design:paramtypes', [testRest_1.TestRestClient])
                ], TesterComponent);
                return TesterComponent;
            }());
            exports_1("TesterComponent", TesterComponent);
        }
    }
});
//# sourceMappingURL=tester.js.map