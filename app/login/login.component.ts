import {Component,Injector,ElementRef,DynamicComponentLoader,provide,ComponentRef} from 'angular2/core';

import {ModalDialogInstance} from '../ui/modal/models/ModalDialogInstance';
import {ModalComponent} from '../ui/modal/components/ModalComponent';
import {ForgetPasswordModal} from '../login/modals/forgetpw/forgetpwmodal';
import {SignUpModal} from '../login/modals/signup/signupmodal';
import {UserService} from '../services/UserService';
import {UserRestClient} from '../clients/UserRestClient/UserRestClient';
import {TestRestClient} from '../clients/test/testRest';
import {Interceptor} from '../common/restUtil/Interceptor'
@Component({
	selector: 'login',
	styleUrls: ['app/login/login.css'],
	templateUrl: 'app/login/login.component.html',
	inputs:['email','password'],
	providers:[UserRestClient,UserService,ElementRef,ModalDialogInstance],
	directives: [ModalComponent]
})

export class LoginComponent {
	elementRef: ElementRef;
	componentLoader:DynamicComponentLoader;

	constructor(userService:UserService,elementRef:ElementRef, componentLoader:DynamicComponentLoader){

		this.elementRef = elementRef;
		this.componentLoader = componentLoader;
	}
	// static get parameters(){
	// 	return [[UserService]]
	// }
	login(email,password){
	console.log("email: "+email+" password: "+password)

}
	toggleForgetPwModal(event){
		event.preventDefault();
		this.componentLoader.loadIntoLocation(ForgetPasswordModal,this.elementRef,'mymodal')
        .then((ref) => {ref.instance._ref = ref;});
	}
	toggleSignUpModal(event){
		event.preventDefault();
        this.componentLoader.loadIntoLocation(SignUpModal,this.elementRef,'mymodal')
        .then((ref) => {ref.instance._ref = ref;});
		// let dialog = {};
		// let component = this.modal.modalData[dialogType];
		// console.log(component);
		//  console.log(this.elementRef)
		// let bindings = Injector.resolve([ provide(ModalDialogInstance, {useValue: dialog}) ]);
		// createModal()
		// dialog=this.modal.open(component,this.elementRef,bindings,'mymodal');
	}

}


// var injector = Injector.resolveAndCreate([DynamicComponentLoader]);
// var componentLoader = injector.get(DynamicComponentLoader);

// var injector = Injector.resolveAndCreate([UserService]);
// var userService = injector.get(UserService);

// export class ForgotPasswordModal{
// 	isOpen = false;
// 	toggleOpen(){
// 		isOpen=!isOpen;
// 	}
// }
// export class SignUpModal{
// 	isOpen = false;
// 	toggleOpen(){
// 		isOpen=!isOpen;
// 	}
// }