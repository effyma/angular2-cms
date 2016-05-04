System.register(['angular2/core', './datatable/datatable', './column/column', '../dashboard/services/UserList/userListService'], function(exports_1, context_1) {
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
    var core_1, datatable_1, column_1, userListService_1;
    var ComponentTest;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (datatable_1_1) {
                datatable_1 = datatable_1_1;
            },
            function (column_1_1) {
                column_1 = column_1_1;
            },
            function (userListService_1_1) {
                userListService_1 = userListService_1_1;
            }],
        execute: function() {
            ComponentTest = (function () {
                function ComponentTest(userListService) {
                    this.userListService = userListService;
                }
                ComponentTest.prototype.ngOnInit = function () {
                    var _this = this;
                    this.userListService.getUsersLazyLoadList(0, 10, '', '', '').then(function (users) { return _this.users = users; });
                    this.userListService.getRowCount('', '').subscribe(function (data) { return _this.totalRecords = data.responseContent.total; });
                    this.cols = [
                        { field: 'userUid', header: 'User Uid' },
                        { field: 'userType', header: 'User Type' },
                        { field: 'email', header: 'Email' },
                        { field: 'organization.name', header: 'Organization name' }
                    ];
                };
                ComponentTest.prototype.loadUserLazy = function (event) {
                    var _this = this;
                    console.log(event);
                    this.rows = event.rows;
                    this.userListService.getUsersLazyLoadList(event.first, event.rows, event.sortColumn, '', '').then(function (users) { return _this.users = users; });
                };
                ComponentTest = __decorate([
                    core_1.Component({
                        selector: 'ui-component-test',
                        template: "\n    <datatable [value]=\"users\" [lazy]=\"true\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" [maxRowsOptions]=\"[5,10,15]\" (onLazyLoad)=\"loadUserLazy($event)\">\n    <column *ngFor=\"#col of cols\" [field]=\"col.field\" [header]=\"col.header\"></column>\n    </datatable>\n    ",
                        directives: [datatable_1.Datatable, column_1.Column],
                        providers: [userListService_1.UserListService]
                    }), 
                    __metadata('design:paramtypes', [userListService_1.UserListService])
                ], ComponentTest);
                return ComponentTest;
            }());
            exports_1("ComponentTest", ComponentTest);
        }
    }
});
//# sourceMappingURL=componentTest.js.map