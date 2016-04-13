import {Injectable} from 'angular2/core'
@Injectable()
export class DashboardService{
    private loggedIn = false;
    getSessionToken(){
        return Promise.resolve(true);   
    }
}