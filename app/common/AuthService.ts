import {Injectable} from 'angular2/core';
import {Http,Headers} from 'angular2/http';
// import localStorage from 'localStorage';

@Injectable()
export class AuthService{
    private loggedIn = false;
    http;
    private baseUrl = "http://demo.kooppi.com/mvno-ota-gw/api/sessions";
    constructor(http:Http){
        this.http = http;
        // this.loggedIn = !!localStorage.getItem('token');
    }
    login(email,password){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        return this.http.post(this.baseUrl,JSON.stringify({email,password}))
    }
}
