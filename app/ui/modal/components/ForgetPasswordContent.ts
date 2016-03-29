import { Component } from 'angular2/core';
import {ModalDialogInstance} from 'app/ui/modal/models/ModalDialogInstance';

@Component({
	// selector:'forgetpw-modal-content',
	template: `<div>ForgetPasswordContent</div>`,
	providers:[ModalDialogInstance]
})

export class ForgetPasswordContent{
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