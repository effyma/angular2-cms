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
    var TestGetClient, ConfigRequest, Config;
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
            TestGetClient = (function () {
                function TestGetClient(http, interceptor) {
                    this.baseUrl = "http://localhost:8080/mvno-ota-gw/api/";
                    this.http = http;
                    this.interceptor = interceptor;
                }
                TestGetClient.prototype.getSession = function (pathParam) {
                    var request = new ConfigRequest;
                    var config = new Config;
                    var now = this.formatLocalDate();
                    var url = this.baseUrl + 'accounts/' + pathParam;
                    // let url = 'http://localhost:8080/mvno-ota-gw/api/continents?localization=zh-tw';
                    var headers = new http_1.Headers;
                    headers.append("Content-Type", "application/json");
                    headers.append('x-auth-request-timestamp', now);
                    if (localStorage.getItem('token')) {
                        headers.append('x-auth-user-token', localStorage.getItem('token'));
                        request.headers['x-auth-user-token'] = localStorage.getItem('token');
                    }
                    request.headers['x-auth-request-timestamp'] = now;
                    request.path = 'accounts/' + pathParam;
                    config.signedHeaders = ['x-auth-user-token', 'x-auth-request-timestamp'];
                    config.key = localStorage.getItem('signingKey');
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
                    this.http.get(url, requestoptions).map(function (res) { return res.json(); }).subscribe(function (data) {
                        console.log('data:');
                        console.log(data);
                    }, function (err) {
                        console.log('err:');
                        console.log(err);
                    }, function () { return console.log('Complete'); });
                };
                // getSession2(){
                //     let request= new ConfigRequest;
                //     let config= new Config;
                //     let headers = new Headers();
                //     let pathParams = 'effy.ma@kooppi.com';
                //     // let url = this.baseUrl+'accounts/'+pathParams;
                //     request.path = 'accounts/'+pathParams;
                //     var now =  this.formatLocalDate();
                //     headers.append('x-auth-request-timestamp', now);
                //    if(localStorage.getItem('token')){ // public key
                //     headers.append('x-auth-user-token',localStorage.getItem('token'));
                //     request.headers['x-auth-user-token'] = localStorage.getItem('token');
                //     }
                //     request.headers['x-auth-request-timestamp'] = now;
                //     config.signedHeaders = ['x-auth-user-token','x-auth-request-timestamp'];
                //     // request.path = 'accounts';
                //     config.key = localStorage.getItem('signingKey');
                //     let filterHeader = this.interceptor.getRestFilter(request,config);
                //     console.log('filterHeader :');
                //     console.log(filterHeader);
                //     headers.append('x-auth-signature',filterHeader['x-auth-signature']);
                //     headers.append('x-auth-signed-headers',filterHeader['x-auth-signed-headers']);
                //     let url = this.baseUrl+request.path;
                //     let requestoptions = new RequestOptions({
                //         method: RequestMethod.Get,
                //         url: url,
                //         headers: headers
                //     });
                //     console.log(requestoptions);
                //      this.http.get(url,requestoptions).map(
                //         res => res.json()
                //         ).subscribe(
                //             data => {
                //                 console.log('data:');
                //                 console.log(data);
                //             },
                //             err =>  {
                //                 console.log('err:');
                //                 console.log(err);
                //             },
                //             () => console.log('Complete'));       
                // }
                TestGetClient.prototype.formatLocalDate = function () {
                    var now = new Date(), tzo = -now.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
                        var norm = Math.abs(Math.floor(num));
                        return (norm < 10 ? '0' : '') + norm;
                    };
                    return now.getFullYear()
                        + '-' + pad(now.getMonth() + 1)
                        + '-' + pad(now.getDate())
                        + 'T' + pad(now.getHours())
                        + ':' + pad(now.getMinutes())
                        + ':' + pad(now.getSeconds())
                        + dif + pad(tzo / 60)
                        + ':' + pad(tzo % 60);
                };
                TestGetClient = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, Interceptor_1.Interceptor])
                ], TestGetClient);
                return TestGetClient;
            }());
            exports_1("TestGetClient", TestGetClient);
            ConfigRequest = (function () {
                function ConfigRequest() {
                    this.headers = [];
                    this.signedHeaders = [];
                }
                return ConfigRequest;
            }());
            Config = (function () {
                function Config() {
                }
                return Config;
            }());
        }
    }
});
//# sourceMappingURL=testGet.js.map