import {Injectable} from 'angular2/core';
import {Http,Headers} from 'angular2/http';

@Injectable()
export class AuthService{
    
    headers;
    uri;
    queryParams; 
    // private loggedIn = false;
    // private baseUrl = "http://demo.kooppi.com/mvno-ota-gw/api/sessions";
    constructor(http:Http){ 
        // this.http = http;
        // this.loggedIn = !!localStorage.getItem('token');
    }
    getHeaders(){
         this.headers.append('x-request-timestamp',new Date().toISOString());
    }
    

    // login(email,password){
    //     let headers = new Headers();
    //     headers.append('Content-Type','application/json');
    //     return this.http.post(this.baseUrl,JSON.stringify(email,password),headers).map(
    //         res=> res.json()
    //     ).map()
    // }
}
