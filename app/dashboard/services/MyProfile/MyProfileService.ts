import {AccountRestClient} from '../../../clients/accountRestClient/AccountRestClient';
import {Injectable, Inject,Injector} from 'angular2/core';

@Injectable()
export class MyProfileService{

    accountRestClient;
    constructor( accountRestClient:AccountRestClient){

        this.accountRestClient = accountRestClient;
    }
    getMyProfile(param,key,token){
        let result = this.accountRestClient.getAccountInfo(param,key,token);
        console.log(result)
        return result
    }
    
    //edit profile

}
