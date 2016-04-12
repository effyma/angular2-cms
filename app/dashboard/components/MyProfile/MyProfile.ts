import {Component,Input,OnInit} from 'angular2/core';
import {MyProfileService} from '../../services/MyProfile/MyProfileService';
import {ProfileRestClient} from '../../../clients/ProfileRestClient/ProfileRestClient';
import {Interceptor} from '../../../common/RestUtil/Interceptor';
import {HTTP_PROVIDERS} from 'angular2/http';
@Component({
    template:`
    <div>MyProfile</div>
    <div *ngIf="profile">
    <div> <label>email: </label>{{profile.email}}</div>
    <div> <label>firstName: </label>{{profile.firstName}}</div>
    <div> <label>lastName: </label> {{profile.lastName}}</div>
    <div> <label>sims: </label> {{profile.sims}}</div>
    </div>`,
    providers: [MyProfileService,Interceptor,ProfileRestClient]
})

export class MyProfileComponent implements OnInit{
    profile;
    myProfileServie;
    err;
    constructor(myProfileServie:MyProfileService){
        this.myProfileServie = myProfileServie;
    }
    ngOnInit() {
    console.log('ngOnInit')
    this.profile = this.getProfile();
    }
    getProfile(){
       this.myProfileServie.getMyProfile().subscribe(
                data => {
                    console.log('data:');
                    console.log(data);
                    this.profile = data;
                },
                err =>  {
                    console.log('err:');
                    console.log(err);
                    this.err = err;           
                },
                () => console.log('Complete'));
    }
    getInfo(){
        console.log(this.profile)
    }
}