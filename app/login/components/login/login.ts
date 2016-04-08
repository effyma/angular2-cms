import {Component,Injector,ElementRef,DynamicComponentLoader,provide,ComponentRef} from 'angular2/core';
import {ForgetPasswordModal} from '../modals/forgetpassword/forgetPasswordModal';
import {SignUpModal} from '../modals/signup/signUpModal';
import {LoginService} from '../../service/LoginService';
import {UserRestClient} from '../../../clients/userRestClient/userRestClient'

@Component({
	selector: 'login',
	styleUrls: ['app/login/components/login/login.css'],
	templateUrl: 'app/login/components/login/login.html',
	inputs:['email','password'],
	// providers:[ElementRef,LoginService,UserRestClient]

})

export class LoginComponent {
	elementRef: ElementRef;
	componentLoader:DynamicComponentLoader;

	constructor(elementRef:ElementRef, componentLoader:DynamicComponentLoader){
		this.elementRef = elementRef;
		this.componentLoader = componentLoader;
	}
    
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

	}

}