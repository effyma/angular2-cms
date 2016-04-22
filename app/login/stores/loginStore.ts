import {Injectable} from 'angular2/core';
import * as Rx from 'rxjs';

@Injectable()
export class LoginStore{
    loginAc = new Rx.Subject;
    // account = new Rx.Subject;
    // logout = new Rx.Subject;
    // validateLogin = new Rx.Subject;
    constructor(){
    }
    login(email,password){
        this.loginAc.map((email,password) => {
            return (state) => {
            }
        })
    }
    
}

var LoginProfile = {
    
}