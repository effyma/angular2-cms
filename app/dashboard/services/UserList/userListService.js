System.register(['angular2/core', 'angular2/http'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var UserListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            UserListService = (function () {
                function UserListService(http) {
                    this.dataUrl = 'http://192.168.1.4:8080/ProfileManagementWS/rest/v2.0/user/';
                    this.rowCountUrl = 'http://192.168.1.4:8080/ProfileManagementWS/rest/v1.0/user/count';
                    this.http = http;
                }
                UserListService.prototype.getUsersLazyLoadList = function (offset, maxRows, sortedColumn, filter, orFilter) {
                    var _this = this;
                    var dataUrl = this.dataUrl;
                    dataUrl = dataUrl + '?' +
                        'offset=' + offset +
                        '&' +
                        'maxRows=' + maxRows +
                        '&' +
                        'sort=' + sortedColumn['key'] + '=' + sortedColumn['order'] +
                        '&' + orFilter;
                    console.log(dataUrl);
                    return this.http.get(dataUrl).toPromise().then(function (res) { return res.json(); }).then(function (res) {
                        _this.users = res.responseContent.userItems;
                        console.log(_this.users);
                        return _this.users;
                    });
                };
                UserListService.prototype.getUser = function (id) {
                    return Promise.resolve(this.users).then(function (users) { return users.filter(function (users) { return users.id === id; })[0]; });
                };
                UserListService.prototype.getRowCount = function (filter, orFilter) {
                    var rowCountUrl = this.rowCountUrl;
                    rowCountUrl = rowCountUrl + '?' +
                        filter +
                        '&' + orFilter;
                    return this.http.get(rowCountUrl).map(function (res) { return res.json(); });
                };
                UserListService.prototype.filter = function () {
                };
                UserListService.prototype.filterOr = function () {
                };
                UserListService.prototype.editUser = function () {
                };
                UserListService.prototype.enableUser = function (userUid) {
                    var dataUrl = this.dataUrl;
                    dataUrl = dataUrl + 'enable' + '?' +
                        'userUid=' + userUid;
                    console.log(dataUrl);
                    return this.http.put(dataUrl, '').map(function (res) { return res.json(); }).subscribe(function (data) {
                        console.log(data.responseContent.userItems[0]);
                        return data;
                    }, function (err) {
                        return err;
                    }, function () { return console.log('Complete'); });
                };
                UserListService.prototype.disableUser = function (userUid) {
                    var dataUrl = this.dataUrl;
                    dataUrl = dataUrl + 'disable' + '?' +
                        'userUid=' + userUid;
                    console.log(dataUrl);
                    return this.http.put(dataUrl, '').map(function (res) { res.json(); console.log(res.json()); }).subscribe(function (data) {
                        console.log(data.responseContent.userItems[0]);
                        return data;
                    }, function (err) {
                        return err;
                    }, function () { return console.log('Complete'); });
                    // $.ajax({
                    //     url: dataUrl,
                    //     dataType:'json',
                    //     cache:false,
                    //     success: function(data){
                    //         console.log(data)
                    //     },
                    //     error: function(xhr,status,err){
                    //         console.log(xhr,status,err)
                    //     }
                    // })
                };
                UserListService.prototype.deleteUser = function () {
                };
                UserListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], UserListService);
                return UserListService;
            }());
            exports_1("UserListService", UserListService);
        }
    }
});
//# sourceMappingURL=userListService.js.map