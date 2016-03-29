System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var ForgetPasswordModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ForgetPasswordModal = (function () {
                function ForgetPasswordModal() {
                }
                // constructor(dialog: ModalDialogInstance){
                // 	this.dialog = dialog;
                // }
                ForgetPasswordModal.prototype.beforeDismiss = function () {
                    return false;
                };
                ForgetPasswordModal.prototype.beforeClose = function () {
                    return false;
                };
                ForgetPasswordModal.prototype.close = function (event) {
                    event.preventDefault();
                    // console.log(dialog);
                    // this.dialog.close();
                    this._ref.dispose();
                };
                ForgetPasswordModal.prototype.send = function (event, email) {
                    event.preventDefault();
                    console.log(email);
                    this._ref.dispose();
                    //sendEmail(email).then(this.close);
                    // this.dialog.dispose();
                };
                ForgetPasswordModal = __decorate([
                    core_1.Component({
                        // selector:'forgetpw-modal-content',
                        template: "\n\t<div class=\"in modal-backdrop\" (click)=\"close($event)\"></div>\n\t<div class=\"modal\" style=\"display: block\" tabindex=\"0\">\n\t<div class=\"modal-dialog modal-sm\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header-bar\">\n\t\t\t<div class=\"modal-close\">\n\t\t\t<span (click)=\"close($event)\">X</span>\n\t\t\t</div></div>\n\t\t<div class=\"modal-main\">\n\t\t<header>Forgotten your password?</header>\n\t\t<div class=\"forget-content\">Enter your email address and we'll help you reset your password.</div>\n\t\t\t<div class=\"textInput\">\n\t\t\t<div class=\"fieldWrapper\">\n\t\t\t<input #email type=\"email\" placeholder=\"Email\" />\n\t\t\t</div>\n\t\t\t</div>\n\t\t\t<button class=\"login-btn button\" (click)=\"send($event,email.value)\">Send</button>\n\t\t</div>\n\t\t</div>\n\t</div>\n\t</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], ForgetPasswordModal);
                return ForgetPasswordModal;
            }());
            exports_1("ForgetPasswordModal", ForgetPasswordModal);
        }
    }
});
//# sourceMappingURL=forgetpwmodal.js.map