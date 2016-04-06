System.register(['angular2/http', 'angular2/core', '../../common/RestUtil/Interceptor'], function(exports_1, context_1) {
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
    var http_1, core_1, Interceptor_1;
    var TestRestClient;
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Interceptor_1_1) {
                Interceptor_1 = Interceptor_1_1;
            }],
        execute: function() {
            TestRestClient = (function () {
                function TestRestClient(http, interceptor) {
                    this.baseUrl = "http://demo.kooppi.com/mvno-ota-gw/api/";
                    this.http = http;
                    this.interceptor = interceptor;
                }
                TestRestClient.prototype.getSession = function () {
                    var request, config;
                    var headers = new http_1.Headers();
                    var signedHeaders = new http_1.Headers();
                    headers.append("x-auth-user-token", localStorage.getItem('token')); // public key
                    signedHeaders.append('x-request-timestamp', new Date().toISOString());
                    console.log(headers);
                    request.headers = headers;
                    config.signedHeaders = signedHeaders;
                    request.path = 'accounts';
                    config.key = localStorage.getItem('signingKey');
                    var filterHeader = this.interceptor.getRestFilter(request, config);
                    console.log(filterHeader);
                };
                TestRestClient = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, Interceptor_1.Interceptor])
                ], TestRestClient);
                return TestRestClient;
            }());
            exports_1("TestRestClient", TestRestClient);
        }
    }
});
//# sourceMappingURL=testRest.js.map