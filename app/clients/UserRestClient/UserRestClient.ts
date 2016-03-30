import {Injectable, Injector,Optional} from 'angular2/core';
import {HTTP_PROVIDERS,Http,Headers,Request,RequestMethod,RequestOptions} from 'angular2/http';

@Injectable()
export class UserRestClient{
    http;
    headers;
    requestoptions;
    baseUrl = "http://demo.kooppi.com/mvno-ota-gw/api/";
    constructor(http:Http){
        this.http = http;
    }
    // PostRequest(url,data) {
    //     this.headers = new Headers();
    //     this.headers.append("Content-Type", 'application/json');
    //     this.headers.append("Authorization", 'Bearer ' + localStorage.getItem('id_token'))

    //     this.requestoptions = new RequestOptions({
    //         method: RequestMethod.Post,
    //         url: url,
    //         headers: this.headers,
    //         body: JSON.stringify(data)
    //     })

    //     return this.http.request(new Request(this.requestoptions))
    //         .map((res: Response) => {
    //             if (res) {
    //                 return [{ status: res.status, json: res.json() }]
    //             }
    //         });
    // }
    forgetPassword(param){
        console.log("UserRestClient param :", param)
        this.headers = new Headers();
        // this.headers.append("Content-Type", 'application/json');
        this.requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: this.baseUrl+"accounts/"+param+"/forgetPassword",
            // headers: this.headers
        });
        // console.log("UserRestClient headers :", this.headers);
        // console.log("UserRestClient requestoptions :", this.requestoptions);
        return this.http.request(new Request(this.requestoptions)).map(
            res => res.json()
            )
            // .subscribe(
            //     data => this.logSuccess(data),
            //     err =>  this.logError(err),
            //     () => console.log('Complete')
            //     );
    }
    
    signup(param){
        this.headers = new Headers();
        this.headers.append("Content-Type", 'application/json');
        this.requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: this.baseUrl+"accounts/",
            headers: this.headers,
            body : param
        });
        this.http.request(new Request(this.requestoptions)).map(
            res => res.json()).subscribe(
                data => this.logSuccess(data),
                err =>  this.logError(err),
                () => console.log('Complete')
            )
        
    }

    logError(err){
      console.log(err);
      }
    logSuccess(@Optional()data){
        console.log("success");
        if(data){
            console.log(data);
        }
      }
    saveJwt(jwt) {
        if(jwt) {
            localStorage.setItem('id_token', jwt)
        }
     }
}
