import { Component } from 'angular2/core';
import {ModalDialogInstance} from '../models/ModalDialogInstance';


@Component({
    selector: 'bootstrap-modal',
    host: {
        'tabindex': '0',
        'role': 'dialog',
        'class': 'in modal',
        'style': 'display: block',
        '[style.position]': 'position',
        '(click)': 'onClick()'
    },
    template:
    `<div class="modal-dialog modal-sm">
         <div class="modal-content" (click)="onContainerClick($event)" style="display: block">
            <div style="display: none" #modalDialog></div>
         </div>
    </div>`
})
export class BootstrapModalContainer {
    dialogInstance: ModalDialogInstance;
    position: String;
    constructor(dialogInstance:ModalDialogInstance) {
        this.dialogInstance= dialogInstance;
        this.position = 'absolute';
    }
    onContainerClick($event) {
        $event.stopPropagation();
    }
    onClick() {
        return this.dialogInstance.dismiss();
    }
}