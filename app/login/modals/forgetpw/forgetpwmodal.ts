import { Component,ComponentRef } from 'angular2/core';
import {UserService} from '../../../services/UserService';

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
        <div class="forget-content-err">{{errMsg}}</div>
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
    errMsg ;
    userService;
	constructor(userService: UserService){
        this.userService = userService;
        this.errMsg=" ";
	}

	beforeDismiss(){
		return false;
	}
    beforeClose(){
    	return false;
    }
    close(event){
    	event.preventDefault();
    	this._ref.dispose();
        this.errMsg = '';
    }
    send(event,email){
    	event.preventDefault();
        let result = this.userService.forgetPassword(email);
        // console.log(result.subscribe)
        result.subscribe(
            next => {},
             err => {
                 console.log("err")
                 if(!err._body){this._ref.dispose();
                     this.errMsg = " ";
                     }else{
                         this.errMsg = JSON.parse(err._body).message;
                     }
                    },
             () => {console.log('Complete');}
        );
        
  		// this._ref.dispose();
  		//sendEmail(email).then(this.close);
  		// this.dialog.dispose();
    }
}