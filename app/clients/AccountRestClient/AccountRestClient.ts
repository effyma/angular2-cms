import {Injectable, Injector} from 'angular2/core';
import {Http, Request, RequestMethod} from 'angular2/http';

@Injectable()
export class AccountRestClient{
    constructor(http:Http){}
    request(url:string) {
    return this.http.request(new Request({
      method: RequestMethod.Get,
      url: url,
      search: 'password=123'
    }));
  }
}

var injector = Injector.resolveAndCreate([AccountRestClient]);
var AccountRestClient = injector.get(AccountRestClient);