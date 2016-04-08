System.register(['angular2/core', '../../../services/UserService', '../../../clients/Test/testRest', '../../../clients/Test/testGet', '../../../clients/UserRestClient/UserRestClient', 'angular2/http', '../../../common/RestUtil/Interceptor'], function(exports_1, context_1) {
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
    var core_1, UserService_1, testRest_1, testGet_1, UserRestClient_1, http_1, Interceptor_1;
    var TesterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (testRest_1_1) {
                testRest_1 = testRest_1_1;
            },
            function (testGet_1_1) {
                testGet_1 = testGet_1_1;
            },
            function (UserRestClient_1_1) {
                UserRestClient_1 = UserRestClient_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Interceptor_1_1) {
                Interceptor_1 = Interceptor_1_1;
            }],
        execute: function() {
            // import {uriEncode , getSignatureKey} from '../../../common/RestUtil/Util'
            TesterComponent = (function () {
                function TesterComponent(userService, testRestClient, testGetClient) {
                    this.userService = UserService_1.UserService;
                    this.testRestClient = testRestClient;
                    this.testGetClient = testGetClient;
                }
                TesterComponent.prototype.onClickEncode = function (e) {
                    e.preventDefault();
                    // this.userService.getSession();
                    var email = 'effy.ma@kooppi.com';
                    var password = '123456';
                    this.testRestClient.login({ email: email, password: password });
                    // this.getInfo();
                    // this.testRestClient.getSession();
                    // var result = uriEncode('/123-._~ *`!#$%^&*()+=` ',false);
                };
                TesterComponent.prototype.onClickGetInfo = function () {
                    this.testGetClient.getSession('effy.ma@kooppi.com');
                };
                TesterComponent = __decorate([
                    core_1.Component({
                        selector: 'test-container',
                        template: "<h1>Testing page</h1>\n    <button (click)=\"onClickEncode($event)\">encodeUri</button>\n    <button (click)=\"onClickGetInfo($event)\">getInfo</button>\n    ",
                        providers: [UserService_1.UserService, testGet_1.TestGetClient, testRest_1.TestRestClient, http_1.HTTP_PROVIDERS, Interceptor_1.Interceptor, UserRestClient_1.UserRestClient]
                    }), 
                    __metadata('design:paramtypes', [UserService_1.UserService, testRest_1.TestRestClient, testGet_1.TestGetClient])
                ], TesterComponent);
                return TesterComponent;
            }());
            exports_1("TesterComponent", TesterComponent);
        }
    }
});
//# sourceMappingURL=tester.js.map