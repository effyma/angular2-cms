import {TestRestClient} from '../../../clients/Test/testRest';
import {Injectable} from 'angular2/core';

@Injectable()
export class MyProfileService{
    testRestClient;
    constructor(testRestClient:TestRestClient){
        this.testRestClient = testRestClient;
    }
    getMyProfile(_data, _err){
        let result = this.testRestClient.getSession();
        return result
    }

}