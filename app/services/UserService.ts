import {UserRestClient} from '../clients/UserRestClient/UserRestClient';
import {Injector,Inject,Injectable,provide} from 'angular2/core';
import {TestRestClient} from '../clients/Test/testRest';
import {Http,HTTP_PROVIDERS} from 'angular2/http'
// import AccountRestClient from 'AccountRestClient';

@Injectable()
export class UserService{
    userRestClient;
    testRestClient;
   constructor(userRestClient:UserRestClient){
        // this.testRestClient = testRestClient;
        this.userRestClient = userRestClient;
     }
	forgetPassword(param){
		var result = this.userRestClient.forgetPassword(param);
        console.log("UserService:");
        console.log(result);
        return result
	}
    signUp(email,password){
        var result = this.userRestClient.signUp(email,password);
        console.log("UserService:");
        console.log(result);
        return result;
    }
    login(email,password){
        console.log(email,password);
    }
    // getSession(){
    //     this.testRestClient.getSession();
    // }
    
}

