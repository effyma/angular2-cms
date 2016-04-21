import {Injectable} from 'angular2/core';
import * as Rx from 'rxjs';

@Injectable()
export class LoginStore{
    login = new Rx.Subject;
    logout = new Rx.Subject;
    validateLogin = new Rx.Subject;
}