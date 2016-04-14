import {UserRestClient} from '../../clients/userRestClient/UserRestClient'
import {Injectable} from 'angular2/core'

@Injectable()
export class GlobalService{
    key;
    token;
    userRestClient;
    userProfile={loginId:''};
    loggedIn = false;
    constructor(userRestClient:UserRestClient){
        this.userRestClient = userRestClient;
    }

    init(){
        console.log('GlobalService init...');
        this.validateLogin();
    }
    setKey(key){
        window.sessionStorage.setItem('key',key);
        this.key = key;
    }
    setToken(token){
        window.sessionStorage.setItem('token',token);
        this.token = token;
    }
    getKey(){
        // return window.sessionStorage.getItem('key');
        return this.key;
    }
    getToken(){
        return window.sessionStorage.getItem('token');
        // return this.token;
    }
    setUserId(id){
        this.userProfile.loginId = id;
        window.sessionStorage.setItem('user', this.userProfile.loginId);
        console.log(this.userProfile)
    }
    getUserId(){
        return this.userProfile.loginId;
    }
    validateLogin(){
        if(!this.isLoggedIn() && window.sessionStorage.getItem('user')!==null && window.sessionStorage.getItem('key')!==null && window.sessionStorage.getItem('token')!==null){
            var loginId = window.sessionStorage.getItem('user');
            this.account.getAccountInfo(loginId).subscribe(
            data => {
                console.log('login success',data)
                this.login(data,loginId);
                },
                err =>  {
                    this.logout();
                },
                () => console.log('Complete'));
        }else{
            this.logout();
        }
    }
    
    isLoggedIn(){
        console.log('isLoggedIn? ', this.loggedIn)
        return this.loggedIn;
    }
    login(data,email){
        this.loggedIn = true;
        this.setKey(data.signingKey);
        this.setToken(data.token);
        this.setUserId(email);
        console.log('global service: login')
    }
    loginSuccess(){

    }
    loginFaile(){
        
    }
    logout(){
        window.sessionStorage.removeItem('key');
        window.sessionStorage.removeItem('token');
        window.sessionStorage.removeItem('user');
        this.loggedIn = false;
    }
}

// class UserProfile{
//     isLoggedIn;
//     loginId;
//     key;
//     token;
//     UserProfile(isLoggedIn, loginId, key, token){
//         this.isLoggedIn = isLoggedIn;
//         this.loginId = loginId;
//         this.key = key;
//         this.token = token;
//     }
//     setKey(key){
//         window.sessionStorage.setItem('key',key);
//         this.key = key;
//     }
//     setToken(token){
//         window.sessionStorage.setItem('token',token);
//         this.token = token;
//     }
//     getKey(){
//         return this.key;
//     }
//     getToken(){
//         return this.token;
//     }
// }


// export class AppState{
//     loggedIn;message;
//     login(initState,actions){
//         return actions.scan((state)=>{
//             state = true;
//             return state;},initState);
//     }
//     updateMessage(actions){
//         return actions.scan((action)=>{
//              if(action instanceof SayHello){
//                 var message = 'Hello';
//                 console.log(message);
//                 return message
//             }else if(action instanceof SayBye){
//                 var message = 'Bye';
//                 console.log(message);
//                 return message
//             }
//         }) 
//     }
//     logout(initState,actions){
//         return actions.scan((state)=>{
//             state = false;
//             return state;
//             },initState);
//     }
// }
// class Login{constructor(loggedIn){}}
// class Logout{constructor(loggedIn){}}
// class SayHello{constructor(message){}}
// class SayBye{constructor(message){}}
// type AppAction = Login|Logout|SayHello|SayBye;
// function stateFn(initState: AppState,actions: Observable<AppAction>):Observable<AppState> {
//     return new Observable
// }