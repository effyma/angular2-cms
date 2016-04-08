import { Component,ComponentRef } from 'angular2/core';
import {LoginService} from '../../../service/LoginService';
import {UserRestClient} from '../../../../clients/userRestClient/userRestClient';
import {Interceptor} from '../../../../common/RestUtil/Interceptor';

@Component({
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
		<header>Sign Up New Account</header>
        <div class="signup-content-err">{{errMsg}}</div>
			<div class="textInput">
			<div class="fieldWrapper">
			<input #email type="email" placeholder="Email" />
			</div>
			</div>
            <div class="textInput">
			<div class="fieldWrapper">
			<input #password type="password" placeholder="Password" />
			</div>
			</div>
			<button class="login-btn button" (click)="send($event,email.value,password.value)">Confirm</button>
		</div>
		</div>
	</div>
	</div>`,
    providers:[LoginService,UserRestClient]
})

export class SignUpModal{
	_ref: ComponentRef;
    errMsg ;
    loginService;
	constructor(loginService: LoginService){
        this.loginService = loginService;
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

    send(event,email,password){
    	event.preventDefault();
        let result = this.loginService.signUp({email,password});
        result.subscribe(
            next => {},
             err => {
                 console.log(err)
                 if(!err._body){
                     this._ref.dispose();
                     this.errMsg = '';
                     }else{
                         this.errMsg = JSON.parse(err._body).message;
                     }
                    },
             () => {console.log('Complete');}
        );
    }

