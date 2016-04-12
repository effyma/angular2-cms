import {UserRestClient} from '../../clients/userRestClient/userRestClient';
import {Http,HTTP_PROVIDERS} from 'angular2/http'
import {Injectable} from 'angular2/core';

@Injectable()
export class LoginService{
    userRestClient;
    constructor(userRestClient:UserRestClient){
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
}
