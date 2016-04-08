import {UserRestClient} from '../../clients/userRestClient/userRestClient';
import {Injectable,Inject} from 'angular2/core';

@Injectable()
export class LoginService{
    userRestClient;
    constructor(@Inject(UserRestClient)userRestClient:UserRestClient){
        this.userRestClient = userRestClient;
    }
    
    public sendForgetPassword(param){
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
