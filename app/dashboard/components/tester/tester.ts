import {Component,Inject} from 'angular2/core';
import {TestRestClient} from '../../../clients/Test/testRest';
import {HTTP_PROVIDERS,Http} from 'angular2/http';
import {Interceptor} from '../../../common/RestUtil/Interceptor';

@Component({
	selector: 'test-container',
    template:`<h1>Testing page</h1>
    <button (click)="onClickGetToken($event)">encodeUri</button>
    <button (click)="onClickGetInfo($event)">getInfo</button>
    `,
    providers:[TestRestClient,HTTP_PROVIDERS,Interceptor]
})

export class TesterComponent {
    testRestClient;
	constructor(testRestClient:TestRestClient){
        this.testRestClient = testRestClient;
	}
    
    onClickGetToken(e){
        e.preventDefault();
        let email = 'test@kooppi.com' ;
        let password = '123456' ;
        this.testRestClient.login({email:email,password:password});
    }
    onClickGetInfo(e){
        e.preventDefault();
        this.testRestClient.getSession('test@kooppi.com');

    }
}

