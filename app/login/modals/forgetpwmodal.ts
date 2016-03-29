import { Component,ComponentRef } from 'angular2/core';
import {ModalDialogInstance} from 'app/ui/modal/models/ModalDialogInstance'

@Component({
	// selector:'forgetpw-modal-content',
	template: `
	<div class="in modal-backdrop" (click)="close($event)"></div>
	<div class="modal" style="display: block" tabindex="0">
	<div class="modal-dialog modal-sm">
		<div class="modal-content">
			<div class="modal-header-bar">
			<div class="modal-close">
			<span (click)="close($event)">X</span>
			</div></div>
		<div class="modal-main">
		<header>Forgotten your password?</header>
		<div class="forget-content">Enter your email address and we'll help you reset your password.</div>
			<div class="textInput">
			<div class="fieldWrapper">
			<input #email type="email" placeholder="Email" />
			</div>
			</div>
			<button class="login-btn button" (click)="send($event,email.value)">Send</button>
		</div>
		</div>
	</div>
	</div>`
})

export class ForgetPasswordModal{
	// dialog : ModalDialogInstance;
	_ref: ComponentRef;

	// constructor(dialog: ModalDialogInstance){
	// 	this.dialog = dialog;
	// }

	beforeDismiss(){
		return false;
	}
    beforeClose(){
    	return false;
    }
    close(event){
    	event.preventDefault();
    	// console.log(dialog);
    	// this.dialog.close();
    	this._ref.dispose();
    }
    send(event,email){
    	event.preventDefault();
  		console.log(email);
  		this._ref.dispose();
  		//sendEmail(email).then(this.close);
  		// this.dialog.dispose();
    }
}