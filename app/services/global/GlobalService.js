System.register(['../../clients/userRestClient/UserRestClient', 'angular2/core'], function(exports_1, context_1) {
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
    var UserRestClient_1, core_1;
    var GlobalService;
    return {
        setters:[
            function (UserRestClient_1_1) {
                UserRestClient_1 = UserRestClient_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            GlobalService = (function () {
                function GlobalService(userRestClient) {
                    this.userProfile = { loginId: '' };
                    this.loggedIn = false;
                    this.userRestClient = userRestClient;
                }
                GlobalService.prototype.init = function () {
                    console.log('GlobalService init...');
                    this.validateLogin();
                };
                GlobalService.prototype.setKey = function (key) {
                    window.sessionStorage.setItem('key', key);
                    this.key = key;
                };
                GlobalService.prototype.setToken = function (token) {
                    window.sessionStorage.setItem('token', token);
                    this.token = token;
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
                    window.sessionStorage.setItem('user', this.userProfile.loginId);
                };
                GlobalService.prototype.getUserId = function () {
                    return this.userProfile.loginId;
                };
                GlobalService.prototype.validateLogin = function () {
                    var _this = this;
                    console.log('validateLogin');
                    console.log(this.userProfile.isLoggedIn);
                    console.log(this.loginId !== null && this.loginId !== undefined);
                    if (!this.isLoggedIn() && window.sessionStorage.getItem('user') !== null && window.sessionStorage.getItem('user') !== 'undefined' && window.sessionStorage.getItem('key') !== null && window.sessionStorage.getItem('key') !== 'undefined' && window.sessionStorage.getItem('token') !== null && window.sessionStorage.getItem('token') !== 'undefined') {
                        // if(!this.isLoggedIn() && this.loginId!==null && this.loginId!=='undefined'&& this.loginId!==undefined && this.key!==null && this.key!=='undefined' && this.key!==undefined && this.token!==null && this.token!=='undefined'&& this.token!==undefined){ 
                        console.log('sessionStorage has Items');
                        var loginId = window.sessionStorage.getItem('user');
                        var key = window.sessionStorage.getItem('key');
                        var token = window.sessionStorage.getItem('token');
                        this.userRestClient.validateIsLoggedin(this.loginId, this.key, this.token).subscribe(function (data) {
                            console.log('login success', data);
                            _this.login(data, loginId);
                        }, function (err) {
                            console.log('invalid session items');
                            console.log(err);
                            // this.logout();
                        }, function () { return console.log('Complete'); });
                    }
                    else {
                        console.log('not enough info to get session');
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
                GlobalService.prototype.loginSuccess = function () {
                };
                GlobalService.prototype.loginFaile = function () {
                };
                GlobalService.prototype.logout = function () {
                    this.setToken();
                    this.setKey();
                    this.setUserId();
                    // window.sessionStorage.removeItem('key');
                    // window.sessionStorage.removeItem('token');
                    // window.sessionStorage.removeItem('user');
                    this.loggedIn = false;
                };
                GlobalService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [UserRestClient_1.UserRestClient])
                ], GlobalService);
                return GlobalService;
            }());
            exports_1("GlobalService", GlobalService);
        }
    }
});
// var UserProfile{
//     isLoggedIn;
//     loginId;
//     key;
//     token;
//     UserProfile(loginId, key, token){
//         this.loginId = loginId;
//         this.key = key;
//         this.token = token;
//     }
//     setKey(key){
//         window.sessionStorage.setItem('key',key);
//         this.key = key;
//     }
//     setToken(token){
//         window.sessionStorage.setItem('token',token);
//         this.token = token;
//     }
//     getKey(){
//         return this.key;
//     }
//     getToken(){
//         return this.token;
//     }
// }
// export class AppState{
//     loggedIn;message;
//     login(initState,actions){
//         return actions.scan((state)=>{
//             state = true;
//             return state;},initState);
//     }
//     updateMessage(actions){
//         return actions.scan((action)=>{
//              if(action instanceof SayHello){
//                 var message = 'Hello';
//                 console.log(message);
//                 return message
//             }else if(action instanceof SayBye){
//                 var message = 'Bye';
//                 console.log(message);
//                 return message
//             }
//         }) 
//     }
//     logout(initState,actions){
//         return actions.scan((state)=>{
//             state = false;
//             return state;
//             },initState);
//     }
// }
// class Login{constructor(loggedIn){}}
// class Logout{constructor(loggedIn){}}
// class SayHello{constructor(message){}}
// class SayBye{constructor(message){}}
// type AppAction = Login|Logout|SayHello|SayBye;
// function stateFn(initState: AppState,actions: Observable<AppAction>):Observable<AppState> {
//     return new Observable
// } 
//# sourceMappingURL=GlobalService.js.map