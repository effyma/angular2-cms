import {Component} from 'angular2/core';
import {UserService} from '../../../services/UserService'
// import {uriEncode , getSignatureKey} from '../../../common/RestUtil/Util'

@Component({
	selector: 'test-container',
    template:`<h1>Testing page</h1>
    <button (click)="onClickEncode()">encodeUri</button>
    `,
    providers:[UserService]
})

export class TesterComponent {
userService;
	constructor(userService:UserService){
        this.userService = UserService;
	}
    
    onClickEncode(){
        this.userService.getSession();
        // var result = uriEncode('/123-._~ *`!#$%^&*()+=` ',false);
    }
}
