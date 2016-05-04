import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {provide, ComponentRef} from 'angular2/core';
import {ROUTER_PROVIDERS,LocationStrategy, PathLocationStrategy } from 'angular2/router';
import {GlobalService,appInjector} from './services/global/GlobalService';
import {AccountRestClient} from './clients/accountRestClient/AccountRestClient';
import {Interceptor} from './common/RestUtil/Interceptor';

import 'rxjs/add/operator/map';
import 'rxjs/Rx';

bootstrap(AppComponent,[HTTP_PROVIDERS,ROUTER_PROVIDERS,GlobalService,AccountRestClient,Interceptor]).then(
    (appRef: ComponentRef) => {
  appInjector(appRef.injector)});