System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var UserRestClient;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UserRestClient = (function () {
                function UserRestClient(http) {
                    this.baseUrl = "http://demo.kooppi.com/mvno-ota-gw/api/";
                    this.http = http;
                }
                // forgetPassword(param){
                //     console.log("UserRestClient param :", param)
                //     this.headers = new Headers();
                //     this.requestoptions = new RequestOptions({
                //         method: RequestMethod.Post,
                //         url: this.baseUrl+"accounts/"+param+"/forgetPassword",
                //     });
                //     return this.http.request(new Request(this.requestoptions)).map(
                //         res => res.json()
                //         )
                // }
                UserRestClient.prototype.forgetPassword = function (param) {
                    var http = this.http;
                    console.log("UserRestClient param :", param);
                    var url = this.baseUrl + "accounts/" + param + "/forgetPassword";
                    return http_1.Http.prototype.post(url, '').map(function (res) { return res.json(); });
                };
                UserRestClient.prototype.signUp = function (email, password) {
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
                UserRestClient.prototype.logError = function (err) {
                    console.log(err);
                };
                UserRestClient.prototype.logSuccess = function (data) {
                    console.log("success");
                    if (data) {
                        console.log(data);
                    }
                };
                UserRestClient.prototype.saveJwt = function (jwt) {
                    if (jwt) {
                        localStorage.setItem('id_token', jwt);
                    }
                };
                __decorate([
                    __param(0, core_1.Optional()), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], UserRestClient.prototype, "logSuccess", null);
                UserRestClient = __decorate([
                    core_1.Injectable(),
                    __param(0, core_1.Inject(http_1.Http)), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserRestClient);
                return UserRestClient;
            }());
            exports_1("UserRestClient", UserRestClient);
        }
    }
});
//# sourceMappingURL=userRestClient.js.map