import {UserRestClient} from '../clients/UserRestClient/UserRestClient';
import {Injector,Inject,Injectable,provide} from 'angular2/core';
import {Http,HTTP_PROVIDERS} from 'angular2/http'

@Injectable()
export class UserService{
    userRestClient;
   constructor(userRestClient:UserRestClient){
        this.userRestClient = userRestClient;
     }
	// forgetPassword(param){
	// 	var result = this.userRestClient.forgetPassword(param);
    //     console.log("UserService:");
    //     console.log(result);
    //     return result
	// }
    // signUp(email,password){
    //     var result = this.userRestClient.signUp(email,password);
    //     console.log("UserService:");
    //     console.log(result);
    //     return result;
    // }
    // login(email,password){
    //     console.log(email,password);
    // }
    // getSession(){
    //     this.testRestClient.getSession();
    // }
    
}

