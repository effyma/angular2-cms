import {Injectable, Inject,Optional} from 'angular2/core';
import {Http,Headers,Request,RequestMethod,RequestOptions} from 'angular2/http';

@Injectable()
export class UserRestClient{
    http;
    // headers;
    // requestoptions;
    baseUrl = "http://demo.kooppi.com/mvno-ota-gw/api/";
    constructor(http:Http){
        this.http = http;
    }

    forgetPassword(param){
        var http = this.http;
        console.log("UserRestClient param :", param)
        let url = this.baseUrl+"accounts/"+param+"/forgetPassword"
        return this.http.post(url,'').map(
            res => res.json()
            )
    }

    signUp(email,password){
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        console.log("param:");
        let body = JSON.stringify(email,password);
        console.log(body)
        let url = this.baseUrl+"accounts";
        let options = new RequestOptions({
            headers: headers
        });
        return this.http.post(url,body,options).map(
            res => res.json()
            )
    }
}
    // logError(err){
    //   console.log(err);
    //   }
    // logSuccess(@Optional()data){
    //     console.log("success");
    //     if(data){
    //         console.log(data);
    //     }
    //   }
    // saveJwt(jwt) {
    //     if(jwt) {
    //         localStorage.setItem('id_token', jwt)
    //     }
    //  }