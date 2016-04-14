import {Component,Injector,ElementRef,DynamicComponentLoader,provide,ComponentRef} from 'angular2/core';

import {ForgetPasswordModal} from '../login/modals/forgetpw/forgetpwmodal';
import {SignUpModal} from '../login/modals/signup/signupmodal';
import {UserService} from '../services/UserService';
import {UserRestClient} from '../clients/UserRestClient/UserRestClient';
// import {TestRestClient} from '../clients/test/testRest';


@Component({
	selector: 'login',
	styleUrls: ['app/login/login.css'],
	templateUrl: 'app/login/login.component.html',
	inputs:['email','password'],
	providers:[UserRestClient,UserService,ElementRef]
	// directives: []
})

export class Login {
	elementRef: ElementRef;
	componentLoader:DynamicComponentLoader;
    userService;
	constructor(elementRef:ElementRef, componentLoader:DynamicComponentLoader,userService:UserService){
		this.elementRef = elementRef;
		this.componentLoader = componentLoader;
        this.userService = userService;
	}
	// static get parameters(){
	// 	return [[UserService]]
	// }
	login(email,password,event){
        event.preventDefault();
	console.log("email: "+email+" password: "+password)
    this.userService.login(email,password);
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