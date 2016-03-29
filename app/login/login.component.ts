import {Component,Injector,ElementRef,DynamicComponentLoader,provide,ComponentRef} from 'angular2/core';
import {ModalService} from 'app/ui/modal/service/modalService';
import {ModalDialogInstance} from 'app/ui/modal/models/ModalDialogInstance';
import {ModalComponent} from 'app/ui/modal/components/ModalComponent';
import {ForgetPasswordModal} from 'app/login/modals/forgetpwmodal';
import {UserService} from 'app/services/UserService';
// import {ForgetPasswordContent} from 'app/ui/modal/components/ForgetPasswordContent';
// import {SignupContent} from 'app/ui/modal/components/SignupContent';

@Component({
	selector: 'login',
	styleUrls: ['app/login/login.css'],
	templateUrl: ['app/login/login.component.html'],
	inputs:['email','password'],
	providers:[UserService,ModalService,ElementRef,ModalDialogInstance],
	directives: [ModalComponent]
})

export class LoginComponent {
	elementRef: ElementRef;
	componentLoader:DynamicComponentLoader;

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
		this.componentLoader.loadIntoLocation(ForgetPasswordModal,this.elementRef,'mymodal',bindings).
		then((ref) => {
			ref.instance._ref = ref;
			// dialog.ref = ref;}
			);
	}
	toggleSignUpModal(event){
		event.preventDefault();
		let dialog = {};
		let component = this.modal.modalData[dialogType];
		console.log(component);
		 console.log(this.elementRef)
		let bindings = Injector.resolve([ provide(ModalDialogInstance, {useValue: dialog}) ]);
		createModal()
		dialog=this.modal.open(component,this.elementRef,bindings,'mymodal');
	}
	// createModal(component,elementRef,anchorName,dialogBindings) : Promise<ComponentRef>{
 //        this.elementRef = elementRef;
 //        this.anchorName = anchorName;
 //        this.dialogBindings = dialogBindings;
 //        return this.componentLoader.loadIntoLocation(component, elementRef,anchorName,dialogBindings);
 //    }
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