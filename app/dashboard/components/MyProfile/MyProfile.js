System.register(['angular2/core', '../../services/MyProfile/MyProfileService', '../../../clients/Test/testRest', '../../../common/RestUtil/Interceptor'], function(exports_1, context_1) {
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
    var core_1, MyProfileService_1, testRest_1, Interceptor_1;
    var MyProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (MyProfileService_1_1) {
                MyProfileService_1 = MyProfileService_1_1;
            },
            function (testRest_1_1) {
                testRest_1 = testRest_1_1;
            },
            function (Interceptor_1_1) {
                Interceptor_1 = Interceptor_1_1;
            }],
        execute: function() {
            MyProfileComponent = (function () {
                function MyProfileComponent(myProfileServie) {
                    this.myProfileServie = myProfileServie;
                }
                MyProfileComponent.prototype.ngOnInit = function () {
                    console.log('ngOnInit');
                    this.profile = this.getProfile();
                };
                MyProfileComponent.prototype.getProfile = function () {
                    var _this = this;
                    this.myProfileServie.getMyProfile().subscribe(function (data) {
                        console.log('data:');
                        console.log(data);
                        _this.profile = data;
                    }, function (err) {
                        console.log('err:');
                        console.log(err);
                        _this.err = err;
                    }, function () { return console.log('Complete'); });
                };
                MyProfileComponent.prototype.getInfo = function () {
                    console.log(this.profile);
                };
                MyProfileComponent = __decorate([
                    core_1.Component({
                        template: "\n    <div>MyProfile</div>\n    <div *ngIf=\"profile\">\n    <div> <label>email: </label>{{profile.email}}</div>\n    <div> <label>firstName: </label>{{profile.firstName}}</div>\n    <div> <label>lastName: </label> {{profile.lastName}}</div>\n    <div> <label>sims: </label> {{profile.sims}}</div>\n    </div>",
                        providers: [MyProfileService_1.MyProfileService, testRest_1.TestRestClient, Interceptor_1.Interceptor]
                    }), 
                    __metadata('design:paramtypes', [MyProfileService_1.MyProfileService])
                ], MyProfileComponent);
                return MyProfileComponent;
            }());
            exports_1("MyProfileComponent", MyProfileComponent);
        }
    }
});
//# sourceMappingURL=MyProfile.js.map