System.register(['angular2/src/facade/async'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var async_1;
    var ModalDialogInstance;
    return {
        setters:[
            function (async_1_1) {
                async_1 = async_1_1;
            }],
        execute: function() {
            ModalDialogInstance = (function () {
                function ModalDialogInstance() {
                    this._resultDefered = async_1.PromiseWrapper.completer();
                }
                Object.defineProperty(ModalDialogInstance.prototype, "result", {
                    // set bootstrapRef(value:ComponentRef){
                    //     this._bootstrapRef = value;
                    // }
                    get: function () {
                        return this._resultDefered.promise;
                    },
                    enumerable: true,
                    configurable: true
                });
                /**
                 *  Close the modal with a return value, i.e: result.
                 */
                ModalDialogInstance.prototype.close = function (result) {
                    if (result === void 0) {
                        result = null;
                    }
                    if (this.contentRef.instance.beforeClose &&
                        this.contentRef.instance.beforeClose() === true)
                        return;
                    this.dispose();
                    this._resultDefered.resolve(result);
                };
                /**
                 *  Close the modal without a return value, i.e: cancelled.
                 *  This call is automatically invoked when a user either:
                 *  - Presses an exit keyboard key (if configured).
                 *  - Clicks outside of the modal window (if configured).
                 *  Usually, dismiss represent a Cancel button or a X button.
                 */
                ModalDialogInstance.prototype.dismiss = function () {
                    if (this.contentRef.instance.beforeDismiss && this.contentRef.instance.beforeDismiss() === true)
                        return;
                    this.dispose();
                    this._resultDefered.reject();
                };
                ModalDialogInstance.prototype.dispose = function () {
                    // this._bootstrapRef.dispose();
                    this.contentRef.dispose();
                };
                return ModalDialogInstance;
            }());
            exports_1("ModalDialogInstance", ModalDialogInstance);
        }
    }
});
//# sourceMappingURL=ModalDialogInstance.js.map