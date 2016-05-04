System.register(['angular2/core', '../../services/MyProfile/MyProfileService', '../../../common/RestUtil/Interceptor', '../../../clients/accountRestClient/AccountRestClient', '../../../services/global/GlobalService'], function(exports_1, context_1) {
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
    var core_1, MyProfileService_1, Interceptor_1, AccountRestClient_1, GlobalService_1;
    var MyProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MyProfileService_1_1) {
                MyProfileService_1 = MyProfileService_1_1;
            },
            function (Interceptor_1_1) {
                Interceptor_1 = Interceptor_1_1;
            },
            function (AccountRestClient_1_1) {
                AccountRestClient_1 = AccountRestClient_1_1;
            },
            function (GlobalService_1_1) {
                GlobalService_1 = GlobalService_1_1;
            }],
        execute: function() {
            MyProfileComponent = (function () {
                function MyProfileComponent(myProfileService, accountRestClient, globalService) {
                    this.myProfileService = myProfileService;
                    this.accountRestClient = accountRestClient;
                    this.globalService = globalService;
                }
                MyProfileComponent.prototype.ngOnInit = function () {
                    console.log('ngOnInit');
                    this.profile = this.getProfile();
                };
                MyProfileComponent.prototype.getProfile = function () {
                    var _this = this;
                    var token = this.globalService.getToken();
                    var key = this.globalService.getKey();
                    console.log(key, token);
                    // this.accountRestClient.getAccountInfo('test@kooppi.com',key,token).subscribe(
                    this.myProfileService.getMyProfile('test@kooppi.com', key, token).subscribe(function (data) {
                        console.log('data:');
                        console.log(data);
                        _this.profile = data;
                    }, function (err) {
                        console.log('err:');
                        console.log(err);
                        _this.err = err;
                    }, function () { return console.log('Complete'); });
                };
                MyProfileComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div>MyProfile</div>\n    <div *ngIf=\"profile\">\n    <div> <label>email: </label>{{profile.email}}</div>\n    <div> <label>firstName: </label>{{profile.firstName}}</div>\n    <div> <label>lastName: </label> {{profile.lastName}}</div>\n    <div> <label>sims: </label> {{profile.sims}}</div>\n    </div>",
                        providers: [MyProfileService_1.MyProfileService, Interceptor_1.Interceptor, AccountRestClient_1.AccountRestClient]
                    }), 
                    __metadata('design:paramtypes', [MyProfileService_1.MyProfileService, AccountRestClient_1.AccountRestClient, GlobalService_1.GlobalService])
                ], MyProfileComponent);
                return MyProfileComponent;
            }());
            exports_1("MyProfileComponent", MyProfileComponent);
        }
    }
});
//# sourceMappingURL=MyProfile.js.map