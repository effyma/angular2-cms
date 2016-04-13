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
                    // headers;
                    // requestoptions;
                    this.baseUrl = "http://demo.kooppi.com/mvno-ota-gw/api/";
                    this.http = http;
                }
                UserRestClient.prototype.forgetPassword = function (param) {
                    var http = this.http;
                    console.log("UserRestClient param :", param);
                    var url = this.baseUrl + "accounts/" + param + "/forgetPassword";
                    return this.http.post(url, '').map(function (res) { return res.json(); });
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
                UserRestClient = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
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