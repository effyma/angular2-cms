System.register(['angular2/core', 'angular2/http', '../../common/RestUtil/Interceptor', '../../common/RestUtil/Config'], function(exports_1, context_1) {
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
    var core_1, http_1, Interceptor_1, Config_1;
    var AccountRestClient;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Interceptor_1_1) {
                Interceptor_1 = Interceptor_1_1;
            },
            function (Config_1_1) {
                Config_1 = Config_1_1;
            }],
        execute: function() {
            AccountRestClient = (function () {
                // baseUrl = 'http://localhost:8080/mvno-ota-gw/api/';
                function AccountRestClient(http, interceptor) {
                    // headers;
                    // requestoptions;
                    this.baseUrl = 'http://demo.kooppi.com/mvno-ota-gw/api/';
                    this.http = http;
                    this.interceptor = interceptor;
                    // this.globalService = globalService;
                }
                AccountRestClient.prototype.login = function (params) {
                    var url = this.baseUrl + 'sessions';
                    var body = params;
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", 'application/json');
                    var requestoptions = new http_1.RequestOptions({
                        method: http_1.RequestMethod.Post,
                        url: url,
                        headers: headers,
                        body: JSON.stringify(body)
                    });
                    return this.http.request(new http_1.Request(requestoptions)).map(function (res) { return res.json(); });
                };
                AccountRestClient.prototype.getAccountInfo = function (pathParam, key, token) {
                    console.log('get account info : ', pathParam, key, token);
                    var request = new Config_1.ConfigRequest;
                    var config = new Config_1.Config;
                    var now = Config_1.formatLocalDate();
                    var url = this.baseUrl + 'accounts/' + pathParam;
                    var headers = new http_1.Headers;
                    headers.append("Content-Type", "application/json");
                    headers.append('x-auth-request-timestamp', now);
                    request.headers['x-auth-request-timestamp'] = now;
                    config.signedHeaders.push('x-auth-request-timestamp');
                    if (token !== undefined && token !== null) {
                        headers.append('x-auth-user-token', token);
                        request.headers['x-auth-user-token'] = token;
                        config.signedHeaders.push('x-auth-user-token');
                    }
                    else {
                    }
                    if (key !== undefined && key !== null) {
                        config.key = key;
                    }
                    else {
                    }
                    var filterHeader = this.interceptor.getRestFilter(request, config);
                    headers.append('x-auth-signature', filterHeader['x-auth-signature']);
                    headers.append('x-auth-signed-headers', filterHeader['x-auth-signed-headers']);
                    console.log(request);
                    console.log(config);
                    var requestoptions = new http_1.RequestOptions({
                        headers: headers,
                        url: url
                    });
                    console.log(requestoptions);
                    return this.http.get(url, requestoptions).map(function (res) { return res.json(); });
                };
                AccountRestClient.prototype.forgetPassword = function (param) {
                    var http = this.http;
                    console.log("UserRestClient param :", param);
                    var url = this.baseUrl + "accounts/" + param + "/forgetPassword";
                    return this.http.post(url, '').map(function (res) { return res.json(); });
                };
                AccountRestClient.prototype.signUp = function (email, password) {
                    var headers = new http_1.Headers();
                    headers.append("Content-Type", "application/json");
                    console.log("param:");
                    var body = JSON.stringify(email, password);
                    console.log(body);
                    var url = this.baseUrl + "accounts";
                    var options = new http_1.RequestOptions({
                        headers: headers
                    });
                    return this.http.post(url, body, options).map(function (res) { return res.json(); });
                };
                AccountRestClient = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, Interceptor_1.Interceptor])
                ], AccountRestClient);
                return AccountRestClient;
            }());
            exports_1("AccountRestClient", AccountRestClient);
        }
    }
});
//# sourceMappingURL=AccountRestClient.js.map