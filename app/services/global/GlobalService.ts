import {AccountRestClient} from '../../clients/accountRestClient/AccountRestClient';
import {Injectable, Injector,Inject} from 'angular2/core';
import {ComponentInstruction, Router} from 'angular2/router';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class GlobalService{
    key;
    token;
    accountRestClient;

    userProfile = {
        'isLoggedIn':false,
        'userType':'admin',
        'loginId':'',
        'token':'',
        'key':''}
    
    constructor(accountRestClient:AccountRestClient){
        this.loggedIn = false;
        this.accountRestClient = accountRestClient;
        this.init();
    }

    init(){
        console.log('GlobalService init...');
        // this.loadData();
        this.validateLogin();
    }
    setKey(key){
        window.sessionStorage.setItem('key',key);
        this.key = key;
        this.userProfile.key = key;
    }
    setToken(token){
        window.sessionStorage.setItem('token',token);
        this.token = token;
        this.userProfile.token = token;
    }
    getKey(){
        return window.sessionStorage.getItem('key');
        // return this.key;
    }
    getToken(){
        return window.sessionStorage.getItem('token');
        // return this.token;
    }
    setUserId(id){
        this.userProfile.loginId = id;
        window.sessionStorage.setItem('id', this.userProfile.loginId);
    }
    getUserId(){
        return this.userProfile.loginId;
    }

    validateLogin(){
        var token = window.sessionStorage.getItem('token');
        var key = window.sessionStorage.getItem('key');
        var id = window.sessionStorage.getItem('id');

        if( !(
           token===''||token===null||token===undefined||token==='null'||token==='undefined'||
           key===''||key===null||key===undefined || key==='null'||key==='undefined'||
           id===''||id===null||id===undefined || id==='null'||id==='undefined')
         ){
        console.log('sessionStorage has Items');
        return this.accountRestClient.getAccountInfo(id,key,token).subscribe(
        // this.userRestClient.validateIsLoggedin(id,key,token).subscribe(
            data => {
                console.log('validate login true',data);
                this.loggedIn = true;
                this.userProfile['isLoggedIn']=true;
                // this.userProfile['userType']=data.userType;
                this.setUserId(data.email);
                this.setKey(key);
                this.setToken(token);
                return true
                },
                err =>  {
                    console.log('invalid session items')
                    console.log(err)
                return false
                    // this.logout();
                },
                () => console.log('Complete'));
        }else{
            console.log('not enough info to get session')
            return false
            // this.logout();
        }
    }
    
    isLoggedIn(){
        return this.loggedIn
    }
    login(data,email){
        this.loggedIn = true;
        this.setKey(data.signingKey);
        this.setToken(data.token);
        this.setUserId(email);
        console.log('global service: login')
    }

    logout(){
        return new Promise((resolve)=>{
        this.setToken('');
        this.setKey('');
        this.setUserId('');
        this.loggedIn = false;
        resolve(true);
        })
    }
    
    check(){
        if(this.isLoggedIn){
            return Observable.of(this.isLoggedIn)
        }else{
            return Observable.of(this.validateLogin()) 
        }
    }
    
    getUserType(){
        return this.userProfile.userType
    }

}

let appInjectorRef: Injector;
export const appInjector = (injector?: Injector):Injector => {
	if (injector) {
	  appInjectorRef = injector;
	}
	return appInjectorRef;
};

export const isLoggedIn = (next: ComponentInstruction, previous: ComponentInstruction) => {
	let injector: Injector = appInjector();
    let auth = injector.get(GlobalService);
	let router: Router = injector.get(Router);
    console.log('is loggedIn?')
	return new Promise((resolve) => {
	  auth.check()
	      .subscribe((result) => {
					if (result) {
                        console.log('true')
                        router.navigate(['Dashboard']);
						resolve(true);
					} else {
                        console.log('false')
						router.navigate(['Login']);
						resolve(false);
					}
				});
  });
};