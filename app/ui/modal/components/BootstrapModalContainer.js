System.register(['angular2/core', '../models/ModalDialogInstance'], function(exports_1, context_1) {
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
    var core_1, ModalDialogInstance_1;
    var BootstrapModalContainer;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ModalDialogInstance_1_1) {
                ModalDialogInstance_1 = ModalDialogInstance_1_1;
            }],
        execute: function() {
            BootstrapModalContainer = (function () {
                function BootstrapModalContainer(dialogInstance) {
                    this.dialogInstance = dialogInstance;
                    this.position = 'absolute';
                }
                BootstrapModalContainer.prototype.onContainerClick = function ($event) {
                    $event.stopPropagation();
                };
                BootstrapModalContainer.prototype.onClick = function () {
                    return this.dialogInstance.dismiss();
                };
                BootstrapModalContainer = __decorate([
                    core_1.Component({
                        selector: 'bootstrap-modal',
                        host: {
                            'tabindex': '0',
                            'role': 'dialog',
                            'class': 'in modal',
                            'style': 'display: block',
                            '[style.position]': 'position',
                            '(click)': 'onClick()'
                        },
                        template: "<div class=\"modal-dialog modal-sm\">\n         <div class=\"modal-content\" (click)=\"onContainerClick($event)\" style=\"display: block\">\n            <div style=\"display: none\" #modalDialog></div>\n         </div>\n    </div>"
                    }), 
                    __metadata('design:paramtypes', [ModalDialogInstance_1.ModalDialogInstance])
                ], BootstrapModalContainer);
                return BootstrapModalContainer;
            }());
            exports_1("BootstrapModalContainer", BootstrapModalContainer);
        }
    }
});
//# sourceMappingURL=BootstrapModalContainer.js.map