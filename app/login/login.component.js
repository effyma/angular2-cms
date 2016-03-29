System.register(['angular2/core', 'app/ui/modal/service/modalService', 'app/ui/modal/models/ModalDialogInstance', 'app/ui/modal/components/ModalComponent', 'app/login/modals/forgetpwmodal', 'app/services/UserService'], function(exports_1, context_1) {
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
    var core_1, modalService_1, ModalDialogInstance_1, ModalComponent_1, forgetpwmodal_1, UserService_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (modalService_1_1) {
                modalService_1 = modalService_1_1;
            },
            function (ModalDialogInstance_1_1) {
                ModalDialogInstance_1 = ModalDialogInstance_1_1;
            },
            function (ModalComponent_1_1) {
                ModalComponent_1 = ModalComponent_1_1;
            },
            function (forgetpwmodal_1_1) {
                forgetpwmodal_1 = forgetpwmodal_1_1;
            },
            function (UserService_1_1) {
                UserService_1 = UserService_1_1;
            }],
        execute: function() {
            // import {ForgetPasswordContent} from 'app/ui/modal/components/ForgetPasswordContent';
            // import {SignupContent} from 'app/ui/modal/components/SignupContent';
            LoginComponent = (function () {
                function LoginComponent(userService, modal, elementRef, componentLoader) {
                    this.modal = modal;
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
                    var dialog = new ModalDialogInstance_1.ModalDialogInstance;
                    var bindings = core_1.Injector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, { useValue: dialog })]);
                    this.componentLoader.loadIntoLocation(forgetpwmodal_1.ForgetPasswordModal, this.elementRef, 'mymodal', bindings).
                        then(function (ref) {
                        ref.instance._ref = ref;
                        // dialog.ref = ref;}
                    });
                };
                LoginComponent.prototype.toggleSignUpModal = function (event) {
                    event.preventDefault();
                    var dialog = {};
                    var component = this.modal.modalData[dialogType];
                    console.log(component);
                    console.log(this.elementRef);
                    var bindings = core_1.Injector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, { useValue: dialog })]);
                    createModal();
                    dialog = this.modal.open(component, this.elementRef, bindings, 'mymodal');
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login',
                        styleUrls: ['app/login/login.css'],
                        templateUrl: ['app/login/login.component.html'],
                        inputs: ['email', 'password'],
                        providers: [UserService_1.UserService, modalService_1.ModalService, core_1.ElementRef, ModalDialogInstance_1.ModalDialogInstance],
                        directives: [ModalComponent_1.ModalComponent]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof UserService_1.UserService !== 'undefined' && UserService_1.UserService) === 'function' && _a) || Object, (typeof (_b = typeof modalService_1.ModalService !== 'undefined' && modalService_1.ModalService) === 'function' && _b) || Object, core_1.ElementRef, core_1.DynamicComponentLoader])
                ], LoginComponent);
                return LoginComponent;
                var _a, _b;
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