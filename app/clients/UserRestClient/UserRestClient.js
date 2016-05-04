System.register(['angular2/core', 'angular2/http', '../../common/RestUtil/Config', '../../common/RestUtil/Interceptor'], function(exports_1, context_1) {
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
    var core_1, http_1, Config_1, Interceptor_1;
    var UserRestClient;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Config_1_1) {
                Config_1 = Config_1_1;
            },
            function (Interceptor_1_1) {
                Interceptor_1 = Interceptor_1_1;
            }],
        execute: function() {
            UserRestClient = (function () {
                function UserRestClient(http, interceptor) {
                    this.baseUrl = "http://demo.kooppi.com/mvno-ota-gw/api/";
                    this.http = http;
                    this.interceptor = interceptor;
                }
                UserRestClient.prototype.validateIsLoggedin = function (pathParam, key, token) {
                    var request = new Config_1.ConfigRequest;
                    var config = new Config_1.Config;
                    var now = Config_1.formatLocalDate();
                    var url = this.baseUrl + 'accounts/' + pathParam;
                    var headers = new http_1.Headers;
                    headers.append("Content-Type", "application/json");
                    headers.append('x-auth-request-timestamp', now);
                    request.headers['x-auth-request-timestamp'] = now;
                    config.signedHeaders.push('x-auth-request-timestamp');
                    console.log('globalService get token', token);
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
                UserRestClient = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, Interceptor_1.Interceptor])
                ], UserRestClient);
                return UserRestClient;
            }());
            exports_1("UserRestClient", UserRestClient);
        }
    }
});
// logError(err){
//   console.log(err);
//   }
// logSuccess(@Optional()data){
//     console.log("success");
//     if(data){
//         console.log(data);
//     }
//   }
// saveJwt(jwt) {
//     if(jwt) {
//         localStorage.setItem('id_token', jwt)
//     }
//  } 
//# sourceMappingURL=UserRestClient.js.map