import {OnInit} from 'angular2/core';
import {AccountRestClient} from '../../clients/accountRestClient/AccountRestClient';
export class AuthService implements OnInit{
    accountRestClient;
    account;
    auth;
    key;
    constructor(accountRestClient:AccountRestClient){
        this.accountRestClient = accountRestClient;
    }
    ngOnInit(){
        this.getProfile();
    }
    getProfile(){
        this.accountRestClient.getAccountInfo().subscribe(
            data => {
                    console.log('data:');
                    console.log(data);
                    this.account = data;
                    this.auth = true;
                },
                err =>  {
                    console.log('err:');
                    console.log(err);
                    this.auth = false;           
                },
                () => console.log('Complete'));
        
    }
}