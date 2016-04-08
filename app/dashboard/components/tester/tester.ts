import {Component,Inject} from 'angular2/core';
import {UserService} from '../../../services/UserService';
import {TestRestClient} from '../../../clients/Test/testRest';
import {TestGetClient} from '../../../clients/Test/testGet';
import {UserRestClient} from '../../../clients/UserRestClient/UserRestClient';
import {HTTP_PROVIDERS,Http} from 'angular2/http';
import {Interceptor} from '../../../common/RestUtil/Interceptor';
// import {uriEncode , getSignatureKey} from '../../../common/RestUtil/Util'

@Component({
	selector: 'test-container',
    template:`<h1>Testing page</h1>
    <button (click)="onClickEncode($event)">encodeUri</button>
    <button (click)="onClickGetInfo($event)">getInfo</button>
    `,
    providers:[UserService,TestGetClient,TestRestClient,HTTP_PROVIDERS,Interceptor,UserRestClient]
})

export class TesterComponent {
    userService;
	constructor(userService:UserService,testRestClient:TestRestClient,testGetClient:TestGetClient){
        this.userService = UserService;
        this.testRestClient = testRestClient;
        this.testGetClient = testGetClient;
	}
    
    onClickEncode(e){
        e.preventDefault();
        // this.userService.getSession();
        let email = 'effy.ma@kooppi.com' ;
        let password = '123456' ;
        this.testRestClient.login({email:email,password:password});
        // this.getInfo();
        // this.testRestClient.getSession();
        // var result = uriEncode('/123-._~ *`!#$%^&*()+=` ',false);
    }
    onClickGetInfo(){
        this.testGetClient.getSession('effy.ma@kooppi.com');

    }
}

