import {AccountRestClient} from '../../clients/accountRestClient/AccountRestClient';
import {Injector,Inject,Injectable,provide} from 'angular2/core';

@Injectable()
export class LoginService{
    accountRestClient;
    constructor(accountRestClient:AccountRestClient){
        this.accountRestClient = accountRestClient;
    }
    forgetPassword(param){
		var result = this.accountRestClient.forgetPassword(param);
        console.log(result);
        return result
    }
    signUp(email,password){
        var result = this.accountRestClient.signUp(email,password);
        console.log(result);
        return result;
    }
    login(email,password){
        this.accountRestClient.login({email:email,password:password});
    }
    
}