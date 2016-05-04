
import {Component, OnInit,Injector} from 'angular2/core';
import {Paginator} from './paginator/paginator';
import {Datatable} from './datatable/datatable';
import {Column} from './column/column'
import {UserListService} from '../dashboard/services/UserList/userListService'

@Component({
    selector: 'ui-component-test',
    template: `
    <datatable [value]="users" [lazy]="true" [paginator]="true" [rows]="10" [totalRecords]="totalRecords" [maxRowsOptions]="[5,10,15]" (onLazyLoad)="loadUserLazy($event)">
    <column *ngFor="#col of cols" [field]="col.field" [header]="col.header"></column>
    </datatable>
    `,
	directives: [Datatable,Column],
    providers: [UserListService]
})
export class ComponentTest implements OnInit{
    userListService;
    users;
    totalRecords;
    rows;
    cols;
    
    constructor(userListService:UserListService){
        this.userListService = userListService
    }
    ngOnInit(){
        this.userListService.getUsersLazyLoadList(0,10,'','','').then(users => this.users = users);
        this.userListService.getRowCount('','').subscribe(data => this.totalRecords = data.responseContent.total);
        this.cols = [
            {field:'userUid',header:'User Uid'},
            {field:'userType',header:'User Type'},
            {field:'email',header:'Email'},
            {field:'organization.name',header:'Organization name'}
            ]
    }
    loadUserLazy(event){
        console.log(event)
        this.rows = event.rows
        this.userListService.getUsersLazyLoadList(event.first,event.rows,event.sortColumn,'','').then(users => this.users = users);
    }
}
