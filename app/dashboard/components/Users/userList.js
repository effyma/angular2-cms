System.register(['angular2/core', '../../services/UserList/userListService', 'angular2/router'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, userListService_1, router_1;
    var UserListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (userListService_1_1) {
                userListService_1 = userListService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            UserListComponent = (function () {
                function UserListComponent(userListService, router) {
                    this.cardView = true;
                    this.userListService = userListService;
                    this.router = router;
                    // router.config([
                    //     {path:'/detail', component:UserDetailComponent, as:'Detail', data:{id:'id'}}
                    // ])
                }
                UserListComponent.prototype.ngOnInit = function () {
                    this.getUsersLazyLoadData();
                    this.getRowCount();
                };
                UserListComponent.prototype.getUsersLazyLoadData = function () {
                    var _this = this;
                    var sortedColumn = [];
                    sortedColumn['loginId'] = 'ASC';
                    this.userListService.getUsersLazyLoadList(0, 10, sortedColumn).then(function (users) { return _this.users = users; });
                };
                UserListComponent.prototype.getRowCount = function () {
                    var _this = this;
                    this.userListService.getRowCount().subscribe(function (data) {
                        _this.rowCount = data.responseContent.total;
                        console.log(_this.rowCount);
                    }, function (err) {
                        console.log(err);
                    }, function () { return console.log('Complete'); });
                };
                UserListComponent.prototype.onClickEditUser = function (id) {
                    var link = ['Detail'];
                    this.router.navigate(link);
                    // this.userListService.getUser(id).then(user=>console.log(user))
                };
                UserListComponent.prototype.onClickEnableUser = function (user) {
                    console.log(this.userListService.enableUser(user.userUid));
                };
                UserListComponent.prototype.onClickDisableUser = function (user) {
                    console.log(this.userListService.disableUser(user.userUid));
                };
                UserListComponent.prototype.onClickCardView = function () {
                    this.cardView = true;
                };
                UserListComponent.prototype.onClickListView = function () {
                    this.cardView = false;
                };
                UserListComponent = __decorate([
                    core_1.Component({
                        template: "\n    <h1>Users</h1>\n    <div class=\"select-view-bottons\">\n    <div (click)='onClickCardView($event)' class=\"select-view-botton\">Card view</div>\n    <div (click)='onClickListView($event)' class=\"select-view-botton\">List view</div>\n    </div>\n    <div *ngIf=\"users\" class=\"user-item-container\">\n\n\n    <span *ngIf=\"cardView===true\">\n    <span *ngFor=\"#user of users\">\n    <div *ngIf=\"user\" class=\"user-item-card\" >\n    \n    <div class=\"{{cardView? 'card':''}} item-header\">{{i}} {{user.email}}</div>\n    <div class=\"{{cardView? 'card':''}} item-content-column\">\n    User Id: {{user.userUid}}</div>\n    <div class=\"{{cardView? 'card':''}} item-content-column\">\n    Status: {{user.status}}</div>\n    <div class=\"{{cardView? 'card':''}} item-content-column\">\n    Login Id: {{user.loginId}}</div>\n    <div class=\"{{cardView? 'card':''}} item-content-column\">\n    FirstName: {{user.firstName}}</div>\n    <div class=\"{{cardView? 'card':''}} item-content-column\">\n    LastName: {{user.lastName}}</div>\n    <div class=\"{{cardView? 'card':''}} item-content-column\">\n    Organization Type: {{user.organization.organizationType}}</div>\n    \n    <div class=\"{{cardView? 'card':''}} item-content-column\">\n    <button *ngIf='user.status===\"INACTIVE\"' (click)='onClickEnableUser(user)'>Enable</button>\n    <button *ngIf='user.status===\"ACTIVE\"' (click)='onClickDisableUser(user)'>Disable</button>\n    <button (click)='onClickEditUser(user.userUid)'>Edit</button>\n    </div>\n    \n    </div>\n    </span>\n    </span>\n\n    <div *ngIf=\"cardView===false\" class=\"user-item-datatable\">\n    list view\n    <div  *ngFor=\"#user of users; #i=index\">\n\n    </div>\n    </div>\n    </div>\n    \n    ",
                        styles: ["\n    .select-view-bottons{\n    width: 100%;\n    margin: 10px;\n    }\n    .select-view-botton{\n    cursor: pointer;\n    display: inline;\n    border: black 0.1px solid;\n    padding: 4px;\n    margin-right: 5px;\n    border-radius: 3px;\n    }\n    .user-item-container{\n    width:100%;\n    margin:auto;\n    }\n    .user-item-card{\n    display: inline-block;\n    width: 33%;\n    padding: 5px;\n    border-radius: 3px;\n    }\n    .card.item-header {\n    background: #0070ba;\n    color: white;\n    font-size: 16px;\n    width: 100%;\n    padding: 6px;\n    display: block;\n    border-radius: 3px 3px 0 0;\n    }\n    .card.item-content-column {\n    padding: 5 10 5 10;\n    font-size: 14px;\n    width: 100%;\n    background-color: #fafafa\n    }\n    .user-item-datatable{ \n    }\n    "],
                        providers: [userListService_1.UserListService]
                    }), 
                    __metadata('design:paramtypes', [userListService_1.UserListService, router_1.Router])
                ], UserListComponent);
                return UserListComponent;
            }());
            exports_1("UserListComponent", UserListComponent);
        }
    }
});
//# sourceMappingURL=userList.js.map