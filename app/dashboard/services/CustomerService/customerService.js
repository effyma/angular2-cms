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
    var CustomerService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            CustomerService = (function () {
                function CustomerService(http) {
                    var _this = this;
                    this.dataUrl = 'http://192.168.1.4:8080/ProfileManagementWS/rest/v2.0/customer/';
                    this.rowCountUrl = 'http://192.168.1.4:8080/ProfileManagementWS/rest/v1.0/customer/count';
                    this.http = http;
                    var sortedColumn = [];
                    this.getRowCount('', '').then(function (rowCount) {
                        _this.rowCount = rowCount;
                        _this.getCustomerLazyLoadList(0, rowCount, sortedColumn, '', '').then(function (customers) { return _this.customers = customers; });
                    });
                }
                CustomerService.prototype.getCustomerLazyLoadList = function (offset, maxRows, sortedColumn, filter, orFilter) {
                    var _this = this;
                    var dataUrl = this.dataUrl;
                    dataUrl = dataUrl + '?' +
                        'offset=' + offset +
                        '&' +
                        'maxRows=' + maxRows +
                        '&' +
                        'sort=' + sortedColumn['key'] + '=' + sortedColumn['order'] +
                        '&' + this.filterOr(orFilter).toString() +
                        '&' + this.filter(filter).toString();
                    console.log(dataUrl);
                    return this.http.get(dataUrl).toPromise().then(function (res) { return res.json(); }).then(function (res) {
                        _this.customers = res.responseContent.customerItems;
                        return _this.customers;
                    });
                };
                CustomerService.prototype.getCustomerById = function (id) {
                    return this.getCustomerLazyLoadList('', '', '', '', '');
                };
                CustomerService.prototype.getRowCount = function (filter, orFilter) {
                    var _this = this;
                    var rowCountUrl = this.rowCountUrl;
                    rowCountUrl = rowCountUrl + '?' +
                        filter +
                        '&' + orFilter;
                    return this.http.get(rowCountUrl).toPromise().then(function (res) { return res.json(); }).then(function (res) {
                        _this.rowCount = res.responseContent.total;
                        return _this.rowCount;
                    });
                };
                // filter(filter){
                //     var target = filter;
                //     var params = new URLSearchParams()
                //     for (var k in target){
                //     if (target.hasOwnProperty(k)) {
                //         params.set(k,target[k]);
                //     }
                //     }
                //     return params
                // }
                // filterOr(filter){
                //     var target = filter;
                //     var params = new URLSearchParams()
                //     for (var k in target){
                //     if (target.hasOwnProperty(k)) {
                //         params.set(k+'Or',target[k]);
                //     }
                //     }
                //     return params
                // }
                CustomerService.prototype.enableCustomer = function (customerUid) {
                    var dataUrl = this.dataUrl;
                    dataUrl = dataUrl + 'enable' + '?' +
                        'customerUid=' + customerUid;
                    console.log(dataUrl);
                    return this.http.put(dataUrl, '').map(function (res) { return res.json(); }).subscribe(function (data) {
                        console.log(data.responseContent.customerItems[0]);
                        return data;
                    }, function (err) {
                        return err;
                    }, function () { return console.log('Complete'); });
                };
                CustomerService.prototype.disableCustomer = function (customerUid) {
                    var dataUrl = this.dataUrl;
                    dataUrl = dataUrl + 'disable' + '?' +
                        'customerUid=' + customerUid;
                    console.log(dataUrl);
                    return this.http.put(dataUrl, '').map(function (res) { res.json(); console.log(res.json()); }).subscribe(function (data) {
                        console.log(data.responseContent.customerItems[0]);
                        return data;
                    }, function (err) {
                        return err;
                    }, function () { return console.log('Complete'); });
                };
                CustomerService.prototype.deleteCustomer = function () {
                };
                CustomerService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CustomerService);
                return CustomerService;
            }());
            exports_1("CustomerService", CustomerService);
        }
    }
});
// var customers = [];
// export function initCustomer(offset,maxRows,sortedColumn,filter,orFilter){
//         var dataUrl = 'http://192.168.1.4:8080/ProfileManagementWS/rest/v2.0/customer/';
//         dataUrl = dataUrl + '?' +
//         'offset=' + offset +
//         '&' +
//         'maxRows=' + maxRows +
//         '&' +
//         'sort=' + sortedColumn['key'] + '=' + sortedColumn['order'] +
//         '&' + orFilter;
//         console.log(dataUrl);
//         Http.prototype.get(dataUrl).toPromise().then(
//             res => res.json()
//         ).then(
//             res => {
//                 customers=res.responseContent.customerItems;
//                 console.log(res.responseContent.customerItems)
//             });
// } 
//# sourceMappingURL=customerService.js.map