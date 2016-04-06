System.register(['angular2/core', '../../../services/UserService'], function(exports_1, context_1) {
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
    var core_1, UserService_1;
    var TesterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            }],
        execute: function() {
            // import {uriEncode , getSignatureKey} from '../../../common/RestUtil/Util'
            TesterComponent = (function () {
                function TesterComponent(userService) {
                    this.userService = UserService_1.UserService;
                }
                TesterComponent.prototype.onClickEncode = function () {
                    this.userService.getSession();
                    // var result = uriEncode('/123-._~ *`!#$%^&*()+=` ',false);
                };
                TesterComponent = __decorate([
                    core_1.Component({
                        selector: 'test-container',
                        template: "<h1>Testing page</h1>\n    <button (click)=\"onClickEncode()\">encodeUri</button>\n    ",
                        providers: [UserService_1.UserService]
                    }), 
                    __metadata('design:paramtypes', [UserService_1.UserService])
                ], TesterComponent);
                return TesterComponent;
            }());
            exports_1("TesterComponent", TesterComponent);
        }
    }
});
//# sourceMappingURL=tester.js.map