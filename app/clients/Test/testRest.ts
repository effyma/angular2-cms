import {Http,Headers,Request,RequestMethod,RequestOptions} from 'angular2/http';
import {Injectable,provide,Injector,Inject} from 'angular2/core';
import {Interceptor} from '../../common/RestUtil/Interceptor';

@Injectable()
export class TestRestClient{
    http;
    interceptor;
    baseUrl = "http://localhost:8080/mvno-ota-gw/api/";
    constructor(http:Http,interceptor:Interceptor){
        this.http = http;
        this.interceptor = interceptor; 
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
            ).subscribe(
                data => {
                    localStorage.setItem('token',data.token);
                    localStorage.setItem('signingKey',data.signingKey)
                    console.log(data);
                    this.getSession();
                },
                err =>  {
                    console.log('err:');
                    console.log(err);
                },
                () => console.log('Complete'));
    }
    
    getSession(){
        let request= new ConfigRequest;
        let config= new Config;
        
        let headers = new Headers();
        let pathParams = 'effy.ma@kooppi.com';
        // let url = this.baseUrl+'accounts/'+pathParams;
        
        request.path = 'accounts/'+pathParams;
        // request.method = 'GET';
        var now =  this.formatLocalDate();
        headers.append('x-auth-request-timestamp', now);

       if(localStorage.getItem('token')){ // public key
        headers.append('x-auth-user-token',localStorage.getItem('token'));
        request.headers['x-auth-user-token'] = localStorage.getItem('token');
        }
        request.headers['x-auth-request-timestamp'] = now;
        config.signedHeaders = ['x-auth-user-token','x-auth-request-timestamp'];
        // request.path = 'accounts';
        config.key = localStorage.getItem('signingKey');
        
        let filterHeader = this.interceptor.getRestFilter(request,config);
        
        console.log('filterHeader :');
        console.log(filterHeader);
        
        headers.append('x-auth-signature',filterHeader['x-auth-signature']);
        headers.append('x-auth-signed-headers',filterHeader['x-auth-signed-headers']);
        
        let url = this.baseUrl+request.path;
        let requestoptions = new RequestOptions({
            method: RequestMethod.Get,
            url: url,
            headers: headers
        });
        
        console.log(requestoptions);
        
        return this.http.request(new Request(requestoptions)).map(
            res => res.json()
            );
    }
    
    formatLocalDate() {
    var now = new Date(),
        tzo = -now.getTimezoneOffset(),
        dif = tzo >= 0 ? '+' : '-',
        pad = function(num) {
            var norm = Math.abs(Math.floor(num));
            return (norm < 10 ? '0' : '') + norm;
        };
    return now.getFullYear() 
        + '-' + pad(now.getMonth()+1)
        + '-' + pad(now.getDate())
        + 'T' + pad(now.getHours())
        + ':' + pad(now.getMinutes()) 
        + ':' + pad(now.getSeconds()) 
        + dif + pad(tzo / 60) 
        + ':' + pad(tzo % 60);
    }
}
export class ConfigRequest{
    headers=[];
    signedHeaders=[];
    path;
    method;
    params;
    entity;
}
export class Config{
    key;
    signedHeaders;
}