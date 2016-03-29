System.register(['angular2/core', 'app/ui/modal/components/ForgetPasswordContent', 'app/ui/modal/components/SignupContent', 'app/ui/modal/components/ModalComponent', 'app/ui/modal/models/ModalDialogInstance'], function(exports_1, context_1) {
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
    var core_1, ForgetPasswordContent_1, SignupContent_1, ModalComponent_1, ModalDialogInstance_1;
    var ModalService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ForgetPasswordContent_1_1) {
                ForgetPasswordContent_1 = ForgetPasswordContent_1_1;
            },
            function (SignupContent_1_1) {
                SignupContent_1 = SignupContent_1_1;
            },
            function (ModalComponent_1_1) {
                ModalComponent_1 = ModalComponent_1_1;
            },
            function (ModalDialogInstance_1_1) {
                ModalDialogInstance_1 = ModalDialogInstance_1_1;
            }],
        execute: function() {
            ModalService = (function () {
                function ModalService(componentLoader, elementRef) {
                    this.componentLoader = componentLoader;
                    this.modalData = {
                        'forgetpw': new ForgetPasswordContent_1.ForgetPasswordContent(),
                        'signup': new SignupContent_1.SignupContent()
                    };
                }
                ModalService.prototype.open = function (componentType, elementRef, anchorName) {
                    var _this = this;
                    // console.log(bindings)
                    console.log(anchorName);
                    this.componentType = componentType;
                    var dialog = new ModalDialogInstance_1.ModalDialogInstance();
                    var dialogBindings = core_1.Injector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, { useValue: dialog })]);
                    return this.createModal(elementRef, anchorName, dialogBindings)
                        .then(function (modalRef) {
                        console.log(modalRef);
                        dialog.modalRef = modalRef;
                        var modalDataBindings = core_1.Injector.resolve([core_1.provide(ModalDialogInstance_1.ModalDialogInstance, { useValue: dialog })]);
                        console.log(modalDataBindings);
                        return _this.componentLoader.loadIntoLocation(_this.componentType, modalRef.location, 'modalcontent', modalDataBindings)
                            .then(function (contentRef) {
                            dialog.contentRef = contentRef;
                            return dialog;
                        });
                    });
                };
                ModalService.prototype.createModal = function (elementRef, anchorName, dialogBindings) {
                    this.elementRef = elementRef;
                    this.anchorName = anchorName;
                    this.dialogBindings = dialogBindings;
                    return this.componentLoader.loadIntoLocation(ModalComponent_1.ModalComponent, elementRef, anchorName, dialogBindings);
                };
                ModalService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.ElementRef])
                ], ModalService);
                return ModalService;
            }());
            exports_1("ModalService", ModalService);
        }
    }
});
//# sourceMappingURL=modalService.js.map