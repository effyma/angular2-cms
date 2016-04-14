System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var GlobalService;
    return {
        setters:[],
        execute: function() {
            GlobalService = (function () {
                function GlobalService() {
                    this.loggedIn = false;
                }
                GlobalService.prototype.setKey = function (key) {
                    window.sessionStorage.setItem('key', key);
                    // this.key = key;
                };
                GlobalService.prototype.setToken = function (token) {
                    window.sessionStorage.setItem('token', token);
                    // this.token = token;
                };
                GlobalService.prototype.getKey = function () {
                    return window.sessionStorage.getItem('key');
                    // return this.key;
                };
                GlobalService.prototype.getToken = function () {
                    return window.sessionStorage.getItem('token');
                    // return this.token;
                };
                GlobalService.prototype.isLoggedIn = function () {
                    console.log('isLoggedIn? ', this.loggedIn);
                    return this.loggedIn;
                };
                GlobalService.prototype.login = function () {
                    this.loggedIn = true;
                    console.log('global service: login');
                };
                GlobalService.prototype.logout = function () {
                    window.sessionStorage.removeItem('key');
                    window.sessionStorage.removeItem('token');
                    this.loggedIn = false;
                };
                return GlobalService;
            }());
            exports_1("GlobalService", GlobalService);
        }
    }
});
//# sourceMappingURL=GlobalService.js.map