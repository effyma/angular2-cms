import {ProfileRestClient} from '../../../clients/ProfileRestClient/ProfileRestClient';
import {Injectable, Inject,Injector} from 'angular2/core';

@Injectable()
export class MyProfileService{
    profileRestClient;
    constructor(profileRestClient:ProfileRestClient){
        this.profileRestClient = profileRestClient;
    }
    getMyProfile(param,key,token){
        let result = this.profileRestClient.getAccountInfo('test@kooppi.com',key,token);
        console.log(result)
        return result
    }
    
    //edit profile

}
