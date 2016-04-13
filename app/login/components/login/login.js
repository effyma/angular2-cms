System.register(['angular2/core', '../modals/forgetpassword/forgetPasswordModal', '../modals/signup/signUpModal', '../../service/LoginService', '../../../clients/userRestClient/userRestClient'], function(exports_1, context_1) {
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
    var core_1, forgetPasswordModal_1, signUpModal_1, LoginService_1, userRestClient_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forgetPasswordModal_1_1) {
                forgetPasswordModal_1 = forgetPasswordModal_1_1;
            },
            function (signUpModal_1_1) {
                signUpModal_1 = signUpModal_1_1;
            },
            function (LoginService_1_1) {
                LoginService_1 = LoginService_1_1;
            },
            function (userRestClient_1_1) {
                userRestClient_1 = userRestClient_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(elementRef, componentLoader, loginService) {
                    this.elementRef = elementRef;
                    this.componentLoader = componentLoader;
                    this.loginService = loginService;
                }
                LoginComponent.prototype.login = function (email, password, event) {
                    event.preventDefault();
                    console.log("email: " + email + " password: " + password);
                    this.loginService.login(email, password);
                };
                LoginComponent.prototype.toggleForgetPwModal = function (event) {
                    event.preventDefault();
                    this.componentLoader.loadIntoLocation(forgetPasswordModal_1.ForgetPasswordModal, this.elementRef, 'mymodal')
                        .then(function (ref) { ref.instance._ref = ref; });
                };
                LoginComponent.prototype.toggleSignUpModal = function (event) {
                    event.preventDefault();
                    this.componentLoader.loadIntoLocation(signUpModal_1.SignUpModal, this.elementRef, 'mymodal')
                        .then(function (ref) { ref.instance._ref = ref; });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        styleUrls: ['app/login/components/login/login.css'],
                        templateUrl: 'app/login/components/login/login.html',
                        inputs: ['email', 'password'],
                        providers: [core_1.ElementRef, LoginService_1.LoginService, userRestClient_1.UserRestClient]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader, LoginService_1.LoginService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.js.map