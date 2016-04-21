import {Injectable, Inject,Optional,EventEmitter} from 'angular2/core';
import {Http,Headers,Request,RequestMethod,RequestOptions} from 'angular2/http';
import {Interceptor} from '../../common/RestUtil/Interceptor';
import {Config,ConfigRequest,formatLocalDate} from '../../common/RestUtil/Config';
import {GlobalService} from '../../services/global/GlobalService'

@Injectable()
export class AccountRestClient{
    http;
    interceptor;
    globalService;
    // headers;
    // requestoptions;
    // baseUrl = 'http://demo.kooppi.com/mvno-ota-gw/api/';
    baseUrl = 'http://localhost:8080/mvno-ota-gw/api/';
    
    constructor(http:Http,interceptor:Interceptor,globalService:GlobalService){
        this.http = http;
        this.interceptor = interceptor;
        this.globalService = globalService;
    }
    
    login(params){
        let url = this.baseUrl+'sessions';
        let body = params;
        let headers = new Headers();
            headers.append("Content-Type", 'application/json');
        let requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: url,
            headers: headers,
            body: JSON.stringify(body)
        });
        return this.http.request(new Request(requestoptions)).map(
            res => res.json()
            );
    }
    
    getAccountInfo(pathParam,key,token){
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
