import {UserRestClient} from '../clients/UserRestClient/UserRestClient';
import {Injector,Inject,Injectable} from 'angular2/core';
// import AccountRestClient from 'AccountRestClient';

@Injectable()
export class UserService{
    userRestClient;
    // accountRestClient = new AccountRestClient.AccountRestClient();
	constructor(userRestClient:UserRestClient){
        this.userRestClient = userRestClient;
     }
	forgetPassword(param){
		var result = this.userRestClient.forgetPassword(param);
        console.log("UserService:");
        console.log(result);
        return result
        // this.accountRestClient.forgetPassword(param,
        // 	function(data){
		// 		console.log(data.entity);
		// 	},
		// 	function(err){
		// 		console.log(err.entity);
		// 	});
	}
}
