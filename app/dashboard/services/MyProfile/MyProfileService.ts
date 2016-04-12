import {ProfileRestClient} from '../../../clients/ProfileRestClient/ProfileRestClient';
import {Injectable, Inject,Injector} from 'angular2/core';

@Injectable()
export class MyProfileService{
    profileRestClient;
    constructor(profileRestClient:ProfileRestClient){
        this.profileRestClient = profileRestClient;
    }
    getMyProfile(param){
        let result = this.profileRestClient.getAccountInfo('test@kooppi.com');
        console.log(result)
        return result
    }

}
