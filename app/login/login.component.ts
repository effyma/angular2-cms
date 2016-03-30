import {Component,Injector,ElementRef,DynamicComponentLoader,provide,ComponentRef} from 'angular2/core';
import {ModalService} from '../ui/modal/service/modalService';
import {ModalDialogInstance} from '../ui/modal/models/ModalDialogInstance';
import {ModalComponent} from '../ui/modal/components/ModalComponent';
import {ForgetPasswordModal} from '../login/modals/forgetpw/forgetpwmodal';
import {SignUpModal} from '../login/modals/signup/signupmodal';
import {UserService} from '../services/UserService';
import {UserRestClient} from '../clients/UserRestClient/UserRestClient';

@Component({
	selector: 'login',
	styleUrls: ['app/login/login.css'],
	templateUrl: 'app/login/login.component.html',
	inputs:['email','password'],
	providers:[UserRestClient,UserService,ModalService,ElementRef,ModalDialogInstance],
	directives: [ModalComponent]
})

export class LoginComponent {
	elementRef: ElementRef;
	componentLoader:DynamicComponentLoader;
    modal;
	constructor(userService:UserService, modal:ModalService, elementRef:ElementRef, componentLoader:DynamicComponentLoader){
		this.modal = modal;
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
		let dialog = new ModalDialogInstance;
		let bindings = Injector.resolve([ provide(ModalDialogInstance, {useValue: dialog}) ]);
		this.componentLoader.loadIntoLocation(ForgetPasswordModal,this.elementRef,'mymodal',bindings)
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