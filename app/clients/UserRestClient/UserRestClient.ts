import {Injectable, Inject,Optional} from 'angular2/core';
import {Http,Headers,Request,RequestMethod,RequestOptions} from 'angular2/http';
import {Config,ConfigRequest,formatLocalDate} from '../../common/RestUtil/Config';
import {Interceptor} from '../../common/RestUtil/Interceptor';
@Injectable()
export class UserRestClient{
    http;
    // headers;
    // requestoptions;
    baseUrl = "http://demo.kooppi.com/mvno-ota-gw/api/";
    constructor(http:Http,interceptor:Interceptor){
        this.http = http;
        this.interceptor = interceptor
    }
    
    validateIsLoggedin(pathParam,key,token){
         let request= new ConfigRequest;
        let config= new Config;
        let now =  formatLocalDate();
        let url = this.baseUrl+'accounts/'+pathParam;
        let headers = new Headers;
        headers.append("Content-Type", "application/json");
        headers.append('x-auth-request-timestamp', now);
        request.headers['x-auth-request-timestamp'] = now;
        config.signedHeaders.push('x-auth-request-timestamp');
        console.log('globalService get token',token)
        
        if(token!==undefined && token!==null){
        headers.append('x-auth-user-token',token);
        request.headers['x-auth-user-token'] = token;
        config.signedHeaders.push('x-auth-user-token');
        }else{
            // return ("missing token")
        }
        if(key!== undefined && key!==null){
        config.key = key;
        }else{
            // return ("missing key")
        }
        
        let filterHeader = this.interceptor.getRestFilter(request,config);
        
        headers.append('x-auth-signature',filterHeader['x-auth-signature']);
        headers.append('x-auth-signed-headers',filterHeader['x-auth-signed-headers']);
        console.log(request);
        console.log(config);
        let requestoptions = new RequestOptions({
            headers: headers,
            url: url
        });
        console.log(requestoptions);
        return this.http.get(url,requestoptions).map(
            res => res.json()
            );
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