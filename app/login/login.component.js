System.register(['angular2/core', '../login/modals/forgetpw/forgetpwmodal', '../login/modals/signup/signupmodal', '../services/UserService', '../clients/UserRestClient/UserRestClient'], function(exports_1, context_1) {
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
    var core_1, forgetpwmodal_1, signupmodal_1, UserService_1, UserRestClient_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forgetpwmodal_1_1) {
                forgetpwmodal_1 = forgetpwmodal_1_1;
            },
            function (signupmodal_1_1) {
                signupmodal_1 = signupmodal_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            },
            function (UserRestClient_1_1) {
                UserRestClient_1 = UserRestClient_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(elementRef, componentLoader) {
                    this.elementRef = elementRef;
                    this.componentLoader = componentLoader;
                }
                // static get parameters(){
                // 	return [[UserService]]
                // }
                LoginComponent.prototype.login = function (email, password) {
                    console.log("email: " + email + " password: " + password);
                };
                LoginComponent.prototype.toggleForgetPwModal = function (event) {
                    event.preventDefault();
                    this.componentLoader.loadIntoLocation(forgetpwmodal_1.ForgetPasswordModal, this.elementRef, 'mymodal')
                        .then(function (ref) { ref.instance._ref = ref; });
                };
                LoginComponent.prototype.toggleSignUpModal = function (event) {
                    event.preventDefault();
                    this.componentLoader.loadIntoLocation(signupmodal_1.SignUpModal, this.elementRef, 'mymodal')
                        .then(function (ref) { ref.instance._ref = ref; });
                    // let dialog = {};
                    // let component = this.modal.modalData[dialogType];
                    // console.log(component);
                    //  console.log(this.elementRef)
                    // let bindings = Injector.resolve([ provide(ModalDialogInstance, {useValue: dialog}) ]);
                    // createModal()
                    // dialog=this.modal.open(component,this.elementRef,bindings,'mymodal');
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        styleUrls: ['app/login/login.css'],
                        templateUrl: 'app/login/login.component.html',
                        inputs: ['email', 'password'],
                        providers: [UserRestClient_1.UserRestClient, UserService_1.UserService, core_1.ElementRef]
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef, core_1.DynamicComponentLoader])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
// var injector = Injector.resolveAndCreate([DynamicComponentLoader]);
// var componentLoader = injector.get(DynamicComponentLoader);
// var injector = Injector.resolveAndCreate([UserService]);
// var userService = injector.get(UserService);
// export class ForgotPasswordModal{
// 	isOpen = false;
// 	toggleOpen(){
// 		isOpen=!isOpen;
// 	}
// }
// export class SignUpModal{
// 	isOpen = false;
// 	toggleOpen(){
// 		isOpen=!isOpen;
// 	}
// } 
//# sourceMappingURL=login.component.js.map