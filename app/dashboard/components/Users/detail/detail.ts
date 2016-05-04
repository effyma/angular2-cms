import { Component, OnInit } from 'angular2/core';
import { RouteData } from 'angular2/router';
import {UserListService} from '../../../services/UserList/userListService'

@Component({
    template:`<div>Users Detail</div>`,
    providers:[UserListService]
})
export class UserDetailComponent implements OnInit{
    user;
    data;
    userListService;
    constructor(data:RouteData,userListService:UserListService){
        this.data = data.get('id')
        console.log(data)
        // this.userListService = userListService;
    }
    ngOnInit(){

    }
    goBack() {
        window.history.back();
    }
}