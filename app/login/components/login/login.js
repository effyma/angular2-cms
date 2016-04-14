System.register(['angular2/core', '../modals/forgetpassword/forgetPasswordModal', '../modals/signup/signUpModal', '../../service/LoginService', '../../../clients/accountRestClient/AccountRestClient', '../../../common/RestUtil/Interceptor', '../../../services/global/GlobalService', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, forgetPasswordModal_1, signUpModal_1, LoginService_1, AccountRestClient_1, Interceptor_1, GlobalService_1, router_1;
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
            function (AccountRestClient_1_1) {
                AccountRestClient_1 = AccountRestClient_1_1;
            },
            function (Interceptor_1_1) {
                Interceptor_1 = Interceptor_1_1;
            },
            function (GlobalService_1_1) {
                GlobalService_1 = GlobalService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(elementRef, router, componentLoader, loginService, globalService) {
                    this.elementRef = elementRef;
                    this.componentLoader = componentLoader;
                    this.loginService = loginService;
                    this.globalService = globalService;
                    this.router = router;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    console.log('login component ngOnInit: isLoggedIn? ', this.globalService.isLoggedIn());
                    if (this.globalService.isLoggedIn()) {
                        this.router.parent.navigateByUrl('/dashboard');
                    }
                };
                LoginComponent.prototype.login = function (email, password, event) {
                    event.preventDefault();
                    console.log('login : ', "email: " + email + " password: " + password);
                    this.loginService.login(email, password, function (result) {
                        var errMsg = result.message;
                        console.log(errMsg);
                        this.loginErr = errMsg;
                    });
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
                        providers: [core_1.ElementRef, LoginService_1.LoginService, AccountRestClient_1.AccountRestClient, Interceptor_1.Interceptor]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, core_1.DynamicComponentLoader, LoginService_1.LoginService, GlobalService_1.GlobalService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.js.map