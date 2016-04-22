import {UserRestClient} from '../../clients/userRestClient/UserRestClient'
import {Injectable,Injector,Inject} from 'angular2/core'

@Injectable()
export class GlobalService{
    key;
    token;
    userRestClient;
    userProfile = {
        'isLoggedIn':false;
        'loginId':'';
        'token':'';
        'key':''}
    loggedIn = false;
    
    constructor(userRestClient:UserRestClient){
        this.userRestClient = userRestClient;
    }

    init(){
        console.log('GlobalService init...');
        this.loadData();
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
    loadData(){
        var token = window.sessionStorage.getItem('token');
        var key = window.sessionStorage.getItem('key');
        var id = window.sessionStorage.getItem('id');


       if(!(
           token===null||token===undefined||token==='null'||token==='undefined' ||
           key===null||key===undefined || key==='null'||key==='undefined'||
           id===null||id===undefined || id==='null'||id==='undefined')
         ){
            this.setKey(window.sessionStorage.getItem('key'));
            this.setToken(window.sessionStorage.getItem('token'));
            this.setUserId(window.sessionStorage.getItem('id'));
        }
        
    }
    validateLogin(){
        var token = window.sessionStorage.getItem('token');
        var key = window.sessionStorage.getItem('key');
        var id = window.sessionStorage.getItem('id');
        if( !(
           token===null||token===undefined||token==='null'||token==='undefined'||
           key===null||key===undefined || key==='null'||key==='undefined'||
           id===null||id===undefined || id==='null'||id==='undefined')
         ){
        // if(!this.isLoggedIn() && window.sessionStorage.getItem('user')!==null &&window.sessionStorage.getItem('user')!=='undefined' && window.sessionStorage.getItem('key')!==null&&window.sessionStorage.getItem('key')!=='undefined'&& window.sessionStorage.getItem('token')!==null&&window.sessionStorage.getItem('token')!=='undefined'){
       
        // if(!this.isLoggedIn() && this.loginId!==null && this.loginId!=='undefined'&& this.loginId!==undefined && this.key!==null && this.key!=='undefined' && this.key!==undefined && this.token!==null && this.token!=='undefined'&& this.token!==undefined){ 
        console.log('sessionStorage has Items');
        this.userRestClient.validateIsLoggedin(id,key,token).subscribe(
            data => {
                console.log('validate login true',data);
                this.loggedIn = true;
                this.userProfile['isLoggedIn']=true;
                this.setUserId(data.email);
                this.setKey(key);
                this.setToken(token);        
                },
                err =>  {
                    console.log('invalid session items')
                    console.log(err)
                    // this.logout();
                },
                () => console.log('Complete'));
        }else{
            console.log('not enough info to get session')
            // this.logout();
        }
    }
    
    isLoggedIn(){
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
        this.setToken();
        this.setKey();
        this.setUserId();
        this.loggedIn = false;
    }

}


// var UserProfile={
//     'isLoggedIn':false;
//     'loginId':'';
//     'key':'';
//     'token':'';
// };

// var UserProfileFunc={
//     'loadParam':function(){
//         var param = window.localStorage.getItem('id');
//         if(!(param===undefined||param===null||param=="undefined"||param=="null") && param.length){
//             return JSON.parse(param);
//         }
//     },
//     'saveParam':function(){
//         window.localStorage.setItem('id',JSON.stringify(UserProfile.loginId));
//     },
//     'getAccount':function(){
//         return UserProfile.loginId;
//     },
//     'getKey':function(){
//         return {
//             'token':UserProfile.token,
//             'key':UserProfile.key
//         }
//     }
// };

// UserProfile.loadParam = UserProfileFunc.loadParam;
// UserProfile.saveParam = UserProfileFunc.saveParam;
// UserProfile.getAccount = UserProfileFunc.getAccount;
// UserProfile.getKey = UserProfileFunc.getkey;

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