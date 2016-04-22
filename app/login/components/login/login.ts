import {Component,OnInit,ElementRef,DynamicComponentLoader,ComponentRef,Injector} from 'angular2/core';
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
	providers:[ElementRef,LoginService,AccountRestClient,Interceptor]
})

export class LoginComponent implements OnInit{
	elementRef: ElementRef;
	componentLoader:DynamicComponentLoader;
    loginService:LoginService;
    globalService;
    router;
    loginErr;
	constructor(elementRef:ElementRef,injector:Injector,router:Router,componentLoader:DynamicComponentLoader,loginService:LoginService,globalService:GlobalService){
		this.elementRef = elementRef;
		this.componentLoader = componentLoader;
        this.loginService = loginService;
        this.globalService = injector.parent.get(GlobalService);
        console.log(this.globalService)
        // this.globalService = globalService;
        this.router = router;
	}
    ngOnInit(){
        console.log('login page', this.globalService)
        if(this.globalService.isLoggedIn()){
        this.router.parent.navigateByUrl('/dashboard');
        }
    }
	login(email,password,event){
        event.preventDefault();
        this.loginService.login(email,password).subscribe(
            data => {
                console.log('login success',data)
                    this.globalService.login(data,email);
                    this.router.navigateByUrl('/dashboard');
                    console.log('this.router.navigateByUrl()');
                },
                err =>  {
                    this.loginErr = JSON.parse(err._body).message;
                    console.log('err:',this.loginErr);
                },
                () => console.log('Complete'))
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