System.register(['angular2/core', '../../services/CustomerService/customerService', 'angular2/router', './list/customerList', './detail/customerDetail'], function(exports_1, context_1) {
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
    var core_1, customerService_1, router_1, customerList_1, customerDetail_1;
    var CustomersComponent;
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
            },
            function (customerList_1_1) {
                customerList_1 = customerList_1_1;
            },
            function (customerDetail_1_1) {
                customerDetail_1 = customerDetail_1_1;
            }],
        execute: function() {
            CustomersComponent = (function () {
                function CustomersComponent(customerService) {
                    this.customerService = customerService;
                }
                CustomersComponent.prototype.ngOnInit = function () {
                    this.getCustomers();
                    this.getRowCount();
                };
                CustomersComponent.prototype.getCustomers = function () {
                    var _this = this;
                    var sortedColumn = [];
                    this.customerService.getCustomerLazyLoadList(0, 10, sortedColumn, '', '').then(function (customers) { return _this.customers = customers; });
                };
                CustomersComponent.prototype.getRowCount = function () {
                    var _this = this;
                    this.customerService.getRowCount().then(function (rowCount) { return _this.rowCount = rowCount; });
                };
                CustomersComponent = __decorate([
                    core_1.Component({
                        selector: 'customers-container',
                        template: "\n    <div>Customers</div>\n    <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [customerService_1.CustomerService]
                    }),
                    router_1.RouteConfig([
                        { path: '/**', redirectTo: ['CustomerList'] },
                        { path: '/', name: 'CustomerList', component: customerList_1.CustomerListComponent, useAsDefault: true },
                        { path: '/detail', name: 'Detail', component: customerDetail_1.CustomerDetailComponent }
                    ]), 
                    __metadata('design:paramtypes', [customerService_1.CustomerService])
                ], CustomersComponent);
                return CustomersComponent;
            }());
            exports_1("CustomersComponent", CustomersComponent);
        }
    }
});
//# sourceMappingURL=customers.js.map