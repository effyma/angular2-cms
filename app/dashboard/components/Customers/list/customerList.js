System.register(['angular2/core', '../../../services/CustomerService/customerService', 'angular2/router'], function(exports_1, context_1) {
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
    var core_1, customerService_1, router_1;
    var CustomerListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customerService_1_1) {
                customerService_1 = customerService_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            CustomerListComponent = (function () {
                function CustomerListComponent(customerService, router) {
                    this.customers = customerService.customers;
                    this.rowCount = customerService.rowCount;
                    this.router = router;
                }
                CustomerListComponent.prototype.ngOnInit = function () {
                    // this.getCustomers();
                    // this.getRowCount();
                };
                // getCustomers(){
                //      this.customerService.getCustomers().then(customers=>this.customers = customers).then(console.log(this.customers))
                // }
                // getRowCount(){
                //     this.customerService.getRowCount().then(rowCount=> this.rowCount = rowCount)
                // }
                CustomerListComponent.prototype.getCustomers = function () {
                    var _this = this;
                    var sortedColumn = [];
                    this.customerService.getCustomerLazyLoadList(0, 10, sortedColumn, '', '').then(function (customers) { return _this.customers = customers; });
                };
                CustomerListComponent.prototype.getRowCount = function () {
                    var _this = this;
                    this.customerService.getRowCount().then(function (rowCount) { return _this.rowCount = rowCount; });
                };
                CustomerListComponent.prototype.onClickEditUser = function () {
                    console.log(this.customers, this.rowCount);
                    // this.customerService.getCustomerLazyLoadList('','','',{'customerUid':'3','name':'customer1'});
                    // this.router.parent.navigate(['Detail'])
                };
                CustomerListComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-list',
                        template: "\n    <div>\n    customer list\n    </div>\n    <button (click)=\"onClickEditUser({'name':'abc'})\">Edit</button>\n    "
                    }), 
                    __metadata('design:paramtypes', [customerService_1.CustomerService, router_1.Router])
                ], CustomerListComponent);
                return CustomerListComponent;
            }());
            exports_1("CustomerListComponent", CustomerListComponent);
        }
    }
});
//# sourceMappingURL=customerList.js.map