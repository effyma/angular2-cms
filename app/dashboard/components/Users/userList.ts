declare var System:any;
import {Component,OnInit} from 'angular2/core';
import {UserListService} from '../../services/UserList/userListService';
import {Router} from 'angular2/router';
import {UserDetailComponent} from './detail/detail';

@Component({
    template:`
    <h1>Users</h1>
    <div class="select-view-bottons">
    <div (click)='onClickCardView($event)' class="select-view-botton">Card view</div>
    <div (click)='onClickListView($event)' class="select-view-botton">List view</div>
    </div>
    <div *ngIf="users" class="user-item-container">


    <span *ngIf="cardView===true">
    <span *ngFor="#user of users">
    <div *ngIf="user" class="user-item-card" >
    
    <div class="{{cardView? 'card':''}} item-header">{{i}} {{user.email}}</div>
    <div class="{{cardView? 'card':''}} item-content-column">
    User Id: {{user.userUid}}</div>
    <div class="{{cardView? 'card':''}} item-content-column">
    Status: {{user.status}}</div>
    <div class="{{cardView? 'card':''}} item-content-column">
    Login Id: {{user.loginId}}</div>
    <div class="{{cardView? 'card':''}} item-content-column">
    FirstName: {{user.firstName}}</div>
    <div class="{{cardView? 'card':''}} item-content-column">
    LastName: {{user.lastName}}</div>
    <div class="{{cardView? 'card':''}} item-content-column">
    Organization Type: {{user.organization.organizationType}}</div>
    
    <div class="{{cardView? 'card':''}} item-content-column">
    <button *ngIf='user.status==="INACTIVE"' (click)='onClickEnableUser(user)'>Enable</button>
    <button *ngIf='user.status==="ACTIVE"' (click)='onClickDisableUser(user)'>Disable</button>
    <button (click)='onClickEditUser(user.userUid)'>Edit</button>
    </div>
    
    </div>
    </span>
    </span>

    <div *ngIf="cardView===false" class="user-item-datatable">
    list view
    <div  *ngFor="#user of users; #i=index">

    </div>
    </div>
    </div>
    
    `,
    styles:[`
    .select-view-bottons{
    width: 100%;
    margin: 10px;
    }
    .select-view-botton{
    cursor: pointer;
    display: inline;
    border: black 0.1px solid;
    padding: 4px;
    margin-right: 5px;
    border-radius: 3px;
    }
    .user-item-container{
    width:100%;
    margin:auto;
    }
    .user-item-card{
    display: inline-block;
    width: 33%;
    padding: 5px;
    border-radius: 3px;
    }
    .card.item-header {
    background: #0070ba;
    color: white;
    font-size: 16px;
    width: 100%;
    padding: 6px;
    display: block;
    border-radius: 3px 3px 0 0;
    }
    .card.item-content-column {
    padding: 5 10 5 10;
    font-size: 14px;
    width: 100%;
    background-color: #fafafa
    }
    .user-item-datatable{ 
    }
    `]
    ,
    providers: [UserListService]
})

export class UserListComponent implements OnInit{
    users;
    rowCount;
    router;
    userListService;
    cardView = true;
    constructor(userListService:UserListService, router:Router){
        this.userListService = userListService;
        this.router = router;
        // router.config([
        //     {path:'/detail', component:UserDetailComponent, as:'Detail', data:{id:'id'}}
        // ])
    }
    ngOnInit(){
        this.getUsersLazyLoadData();
        this.getRowCount();
    }
   
    getUsersLazyLoadData(){
        var sortedColumn =[];
        sortedColumn['loginId'] = 'ASC';    
        this.userListService.getUsersLazyLoadList(0,10,sortedColumn).then(users=> this.users = users)
    }
    getRowCount(){
        this.userListService.getRowCount().subscribe(
            data =>{
                this.rowCount = data.responseContent.total;
                console.log(this.rowCount)
            },
            err =>{
                console.log(err)
            },
            () => console.log('Complete'));
    }
    onClickEditUser(id){
        let link = ['Detail'];
        this.router.navigate(link)
        // this.userListService.getUser(id).then(user=>console.log(user))
    }
    onClickEnableUser(user){
       console.log(this.userListService.enableUser(user.userUid));
    }
    onClickDisableUser(user){
        console.log(this.userListService.disableUser(user.userUid));
    }
    onClickCardView(){
        this.cardView = true;
    }
    onClickListView(){
        this.cardView = false;
    }
}