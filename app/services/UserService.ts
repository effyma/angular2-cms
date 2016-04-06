import {UserRestClient} from '../clients/UserRestClient/UserRestClient';
import {Injector,Inject,Injectable,provide} from 'angular2/core';
import {TestRestClient} from '../clients/Test/testRest';
// import AccountRestClient from 'AccountRestClient';

@Injectable()
export class UserService{
    userRestClient;
    testRestClient;
    // accountRestClient = new AccountRestClient.AccountRestClient();
	constructor(userRestClient:UserRestClient){
        this.userRestClient = userRestClient;
        let testRestClient = injector.get(TestRestClient)
        this.testRestClient = testRestClient;
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
    signUp(email,password){
        var result = this.userRestClient.signUp(email,password);
        console.log("UserService:");
        console.log(result);
        return result;
    }
        getSession(){
        this.testRestClient.getSession();
    }
    
}

var injector = Injector.resolveAndCreate([provide(TestRestClient, {useClass: TestRestClient})]);