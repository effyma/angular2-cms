import {Component,OnInit,ElementRef,DynamicComponentLoader,provide,ComponentRef} from 'angular2/core';
import {ForgetPasswordModal} from '../modals/forgetpassword/forgetPasswordModal';
import {SignUpModal} from '../modals/signup/signUpModal';
import {LoginService} from '../../service/LoginService';
import {AccountRestClient} from '../../../clients/accountRestClient/AccountRestClient'
import {Interceptor} from '../../../common/RestUtil/Interceptor';
import {GlobalService} from '../../../services/global/GlobalService';
import {Router,Location} from 'angular2/router';


@Component({
	selector: 'login',
	styleUrls: ['app/login/components/login/login.css'],
	templateUrl: 'app/login/components/login/login.html',
	inputs:['email','password'],
	providers:[ElementRef,LoginService,AccountRestClient,Interceptor,Router]
})

export class LoginComponent implements OnInit{
	elementRef: ElementRef;
	componentLoader:DynamicComponentLoader;
    loginService:LoginService;
    router;
    globalService;
    location;
	constructor(elementRef:ElementRef,router:Router,componentLoader:DynamicComponentLoader,loginService:LoginService,globalService:GlobalService,location:Location){
		this.elementRef = elementRef;
		this.componentLoader = componentLoader;
        this.loginService = loginService;
        this.router = router;
        this.globalService = globalService;
        this.location = location;
	}
    ngOnInit(){
        // if(this.globalService.isLoggedIn()){
        // this.router.parent.navigateByUrl('/dashboard');
        // }
    }
	login(email,password,event){
        event.preventDefault();
	    console.log("email: "+email+" password: "+password);
        this.loginService.login(email,password);
       if(this.globalService.isLoggedIn()){
        this.location.replaceState('/');
        this.router.navigate(['Dashboard']);
        }
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