import {Component,Inject} from 'angular2/core';
import {AccountRestClient} from '../../../clients/accountRestClient/AccountRestClient';
import {HTTP_PROVIDERS,Http} from 'angular2/http';
import {Interceptor} from '../../../common/RestUtil/Interceptor';
import {GlobalService} from '../../../services/global/GlobalService'
@Component({
	selector: 'test-container',
    template:`<h1>Testing page</h1>
    <button (click)="onClickGetTokenByAC($event)">getToken</button>
    <button (click)="onClickGetInfoByAC($event)">getAccountInfo</button>
    <button (click)="onClickGetByAC($event)">getAccountInfo</button>
    `,
    providers:[HTTP_PROVIDERS,Interceptor,AccountRestClient]
})

export class TesterComponent {
    accountRestClient;
    // token;
    // key;
    globalService;
	constructor(accountRestClient:AccountRestClient,globalService:GlobalService){
        this.accountRestClient = accountRestClient;
        this.globalService = globalService;
	}

   onClickGetTokenByAC(e){
        e.preventDefault();
        let email = 'test@kooppi.com' ;
        let password = '123456' ;
        this.accountRestClient.login({email:email,password:password}).subscribe(
            data => {
                console.log('test get data',data)
                    this.globalService.login(data,email)
                },
                err =>  {
                    console.log('err:');
                    console.log(err);
                },
                () => console.log('Complete'));
    }
    onClickGetInfoByAC(e){
        e.preventDefault();
        this.accountRestClient.getAccountInfo('test@kooppi.com',this.globalService.getKey(),this.globalService.getToken()).subscribe(
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

