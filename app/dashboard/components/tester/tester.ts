import {Component,Inject} from 'angular2/core';
import {TestRestClient} from '../../../clients/Test/testRest';
import {AccountRestClient} from '../../../clients/accountRestClient/AccountRestClient';
import {HTTP_PROVIDERS,Http} from 'angular2/http';
import {Interceptor} from '../../../common/RestUtil/Interceptor';
import {GlobalService} from '../../../services/global/GlobalService'
@Component({
	selector: 'test-container',
    template:`<h1>Testing page</h1>
    <button (click)="onClickGetToken($event)">getToken</button>
    <button (click)="onClickGetInfo($event)">getAccountInfo</button>
    <button (click)="onClickGetTokenByAC($event)">getToken</button>
    <button (click)="onClickGetInfoByAC($event)">getAccountInfo</button>
    <button (click)="onClickGetByAC($event)">getAccountInfo</button>
    `,
    providers:[TestRestClient,HTTP_PROVIDERS,Interceptor,AccountRestClient]
})

export class TesterComponent {
    testRestClient;
    accountRestClient;
    // token;
    // key;
    globalService;
	constructor(testRestClient:TestRestClient,accountRestClient:AccountRestClient,globalService:GlobalService){
        this.testRestClient = testRestClient;
        this.accountRestClient = accountRestClient;
        this.globalService = globalService;
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
   onClickGetTokenByAC(e){
        e.preventDefault();
        let email = 'test@kooppi.com' ;
        let password = '123456' ;
        this.accountRestClient.login({email:email,password:password});
    }
    onClickGetInfoByAC(e){
        e.preventDefault();
        this.accountRestClient.getAccountInfo('test@kooppi.com').subscribe(
            data => {
                    console.log('data:');
                    console.log(data);
                },
                err =>  {
                    console.log('err:');
                    console.log(err);
                },
                () => console.log('Complete'));
    }
    onClickGetByAC(e){
        e.preventDefault();
        console.log('getAccounttoken',this.globalService.getToken(),'accountkey',this.globalService.getKey());
    }
}

