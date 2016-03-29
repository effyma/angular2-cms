import { Component } from 'angular2/core';
import {ModalDialogInstance} from 'app/ui/modal/models/ModalDialogInstance';

@Component({
	// selector:'signup-modal-content',
	template: `<div>SignupContent</div>`,
	providers: [ModalDialogInstance]
})

export class SignupContent{
	constructor(dialogInstance:ModalDialogInstance){
		this.dialogInstance = dialogInstance;
	}
	beforeDismiss(){
		return false;
	}
    beforeClose(){
    	return false;
    }
}