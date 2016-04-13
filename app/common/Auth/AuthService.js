System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AuthService;
    return {
        setters:[],
        execute: function() {
            AuthService = (function () {
                function AuthService(accountRestClient) {
                    this.accountRestClient = accountRestClient;
                }
                AuthService.prototype.ngOnInit = function () {
                    this.getProfile();
                };
                AuthService.prototype.getProfile = function () {
                    var _this = this;
                    this.accountRestClient.getAccountInfo().subscribe(function (data) {
                        console.log('data:');
                        console.log(data);
                        _this.account = data;
                        _this.auth = true;
                    }, function (err) {
                        console.log('err:');
                        console.log(err);
                        _this.auth = false;
                    }, function () { return console.log('Complete'); });
                };
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=AuthService.js.map