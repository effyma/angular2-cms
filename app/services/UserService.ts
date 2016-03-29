import {AccountRestClient} from 'app/clients/AccountRestClient/AccountRestClient';
import {Injector,Inject} from 'angular2/core';

export class UserService{
	constructor(@Inject(AccountRestClient)account){ }
	forgetPassword(param){
		this.account.forgetPassword(param,
			function(data){
				console.log(data.entity);
			},
			function(err){
				console.log(err.entity);
			})
	}
}

// var injector = Injector.resolveAndCreate([AccountRestClient]);
// var AccountRestClient = injector.get(AccountRestClient);