export class GlobalService{
    key;
    token;
    loggedIn = true;
    constructor(){

    }
    setKey(key){
        window.sessionStorage.setItem('key',key);
        // this.key = key;
    }
    setToken(token){
        window.sessionStorage.setItem('token',token);
        // this.token = token;
    }
    getKey(){
        return window.sessionStorage.getItem('key');
        // return this.key;
    }
    getToken(){
        return window.sessionStorage.getItem('token');
        // return this.token;
    }
    isLoggedIn(){
        return this.loggedIn;
    }
    login(){
        this.loggedIn = true;
    }
    logout(){
        window.sessionStorage.removeItem('key');
        window.sessionStorage.removeItem('token');
        this.loggedIn = false;
    }
    // validateLoggedIn(){
    //     // if(this.isLoggedIn==false&&(this.getKey!==undefined && this.getToken!==undefined)){
    //     // }
    //     return this.loggedIn;
    // }
}