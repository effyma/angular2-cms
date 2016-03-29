System.register(['angular2/core', 'app/ui/modal/models/ModalDialogInstance'], function(exports_1, context_1) {
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
    var ModalComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (ModalDialogInstance_1_1) {
                ModalDialogInstance_1 = ModalDialogInstance_1_1;
            }],
        execute: function() {
            ModalComponent = (function () {
                function ModalComponent(dialogInstance) {
                    this.dialogInstance = dialogInstance;
                }
                ModalComponent = __decorate([
                    core_1.Component({
                        selector: 'modal-content',
                        styles: "\n\t.modal-backdrop.in {\n    filter: alpha(opacity=50);\n    opacity: .5;\n\t}\n\t.modal-backdrop {\n\t    position: fixed;\n\t    top: 0;\n\t    right: 0;\n\t    bottom: 0;\n\t    left: 0;\n\t    z-index: 1040;\n\t    background-color: #000;\n\t}",
                        template: "\n\t<div class=\"in modal-backdrop\" ></div>\n\t<div class=\"in modal\" role=\"dialog\" style=\"display: block\" tabindex=\"0\">\n\t\t<div class=\"modal-dialog modal-sm\">\n\t\t<div class=\"modal-content\" style=\"display: block;\">\n\t\t<div #modalcontent></div>\n\n\t\t</div>\n\t\t</div>\n\t</div>"
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof ModalDialogInstance_1.ModalDialogInstance !== 'undefined' && ModalDialogInstance_1.ModalDialogInstance) === 'function' && _a) || Object])
                ], ModalComponent);
                return ModalComponent;
                var _a;
            }());
            exports_1("ModalComponent", ModalComponent);
        }
    }
});
//# sourceMappingURL=ModalContent.js.map