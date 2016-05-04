System.register(['../../clients/accountRestClient/AccountRestClient', 'angular2/core', 'angular2/router', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var AccountRestClient_1, core_1, router_1, Observable_1;
    var GlobalService, appInjectorRef, appInjector, isLoggedIn;
    return {
        setters:[
            function (AccountRestClient_1_1) {
                AccountRestClient_1 = AccountRestClient_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            GlobalService = (function () {
                function GlobalService(accountRestClient) {
                    this.userProfile = {
                        'isLoggedIn': false,
                        'userType': 'admin',
                        'loginId': '',
                        'token': '',
                        'key': '' };
                    this.loggedIn = false;
                    this.accountRestClient = accountRestClient;
                    this.init();
                }
                GlobalService.prototype.init = function () {
                    console.log('GlobalService init...');
                    // this.loadData();
                    this.validateLogin();
                };
                GlobalService.prototype.setKey = function (key) {
                    window.sessionStorage.setItem('key', key);
                    this.key = key;
                    this.userProfile.key = key;
                };
                GlobalService.prototype.setToken = function (token) {
                    window.sessionStorage.setItem('token', token);
                    this.token = token;
                    this.userProfile.token = token;
                };
                GlobalService.prototype.getKey = function () {
                    return window.sessionStorage.getItem('key');
                    // return this.key;
                };
                GlobalService.prototype.getToken = function () {
                    return window.sessionStorage.getItem('token');
                    // return this.token;
                };
                GlobalService.prototype.setUserId = function (id) {
                    this.userProfile.loginId = id;
                    window.sessionStorage.setItem('id', this.userProfile.loginId);
                };
                GlobalService.prototype.getUserId = function () {
                    return this.userProfile.loginId;
                };
                GlobalService.prototype.validateLogin = function () {
                    var _this = this;
                    var token = window.sessionStorage.getItem('token');
                    var key = window.sessionStorage.getItem('key');
                    var id = window.sessionStorage.getItem('id');
                    if (!(token === '' || token === null || token === undefined || token === 'null' || token === 'undefined' ||
                        key === '' || key === null || key === undefined || key === 'null' || key === 'undefined' ||
                        id === '' || id === null || id === undefined || id === 'null' || id === 'undefined')) {
                        console.log('sessionStorage has Items');
                        return this.accountRestClient.getAccountInfo(id, key, token).subscribe(
                        // this.userRestClient.validateIsLoggedin(id,key,token).subscribe(
                        function (data) {
                            console.log('validate login true', data);
                            _this.loggedIn = true;
                            _this.userProfile['isLoggedIn'] = true;
                            // this.userProfile['userType']=data.userType;
                            _this.setUserId(data.email);
                            _this.setKey(key);
                            _this.setToken(token);
                            return true;
                        }, function (err) {
                            console.log('invalid session items');
                            console.log(err);
                            return false;
                            // this.logout();
                        }, function () { return console.log('Complete'); });
                    }
                    else {
                        console.log('not enough info to get session');
                        return false;
                    }
                };
                GlobalService.prototype.isLoggedIn = function () {
                    return this.loggedIn;
                };
                GlobalService.prototype.login = function (data, email) {
                    this.loggedIn = true;
                    this.setKey(data.signingKey);
                    this.setToken(data.token);
                    this.setUserId(email);
                    console.log('global service: login');
                };
                GlobalService.prototype.logout = function () {
                    var _this = this;
                    return new Promise(function (resolve) {
                        _this.setToken('');
                        _this.setKey('');
                        _this.setUserId('');
                        _this.loggedIn = false;
                        resolve(true);
                    });
                };
                GlobalService.prototype.check = function () {
                    if (this.isLoggedIn) {
                        return Observable_1.Observable.of(this.isLoggedIn);
                    }
                    else {
                        return Observable_1.Observable.of(this.validateLogin());
                    }
                };
                GlobalService.prototype.getUserType = function () {
                    return this.userProfile.userType;
                };
                GlobalService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [AccountRestClient_1.AccountRestClient])
                ], GlobalService);
                return GlobalService;
            }());
            exports_1("GlobalService", GlobalService);
            exports_1("appInjector", appInjector = function (injector) {
                if (injector) {
                    appInjectorRef = injector;
                }
                return appInjectorRef;
            });
            exports_1("isLoggedIn", isLoggedIn = function (next, previous) {
                var injector = appInjector();
                var auth = injector.get(GlobalService);
                var router = injector.get(router_1.Router);
                console.log('is loggedIn?');
                return new Promise(function (resolve) {
                    auth.check()
                        .subscribe(function (result) {
                        if (result) {
                            console.log('true');
                            router.navigate(['Dashboard']);
                            resolve(true);
                        }
                        else {
                            console.log('false');
                            router.navigate(['Login']);
                            resolve(false);
                        }
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=GlobalService.js.map