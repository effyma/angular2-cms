import {Http,Headers,Request,RequestMethod,RequestOptions} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Interceptor} from '../../common/RestUtil/Interceptor';

@Injectable()
export class TestRestClient{
    http;
    interceptor;
    requestoptions;
    baseUrl = "http://demo.kooppi.com/mvno-ota-gw/api/";
    constructor(http:Http,interceptor:Interceptor){
        this.http = http;
        this.interceptor = interceptor;
    }
    getSession(){
        let request,config;
        let headers = new Headers();
        let signedHeaders = new Headers();
        headers.append("x-auth-user-token",localStorage.getItem('token')); // public key
        signedHeaders.append('x-request-timestamp', new Date().toISOString());
        console.log(headers);
        request.headers = headers;
        config.signedHeaders = signedHeaders;
        request.path = 'accounts';
        config.key = localStorage.getItem('signingKey');
        let filterHeader = this.interceptor.getRestFilter(request,config);
        console.log(filterHeader);
    }
}
