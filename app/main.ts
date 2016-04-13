import {bootstrap}    from 'angular2/platform/browser';
import {AppComponent} from './app.component';
import {HTTP_PROVIDERS} from 'angular2/http';
import {ROUTER_PROVIDERS } from 'angular2/router';
import {GlobalService} from './services/global/GlobalService';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

bootstrap(AppComponent,[HTTP_PROVIDERS,ROUTER_PROVIDERS,GlobalService]);