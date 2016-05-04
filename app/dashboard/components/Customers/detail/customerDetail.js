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
    var CustomerDetailComponent;
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
            CustomerDetailComponent = (function () {
                function CustomerDetailComponent(customerService, router) {
                    var _this = this;
                    this.customerService = customerService;
                    this.router = router;
                    this.customerService.getCustomerById(1).then(function (customer) { _this.customer = customer; console.log(_this.customer); });
                }
                CustomerDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'customer-detail',
                        template: "<div>customer detail</div>"
                    }), 
                    __metadata('design:paramtypes', [customerService_1.CustomerService, router_1.Router])
                ], CustomerDetailComponent);
                return CustomerDetailComponent;
            }());
            exports_1("CustomerDetailComponent", CustomerDetailComponent);
        }
    }
});
//# sourceMappingURL=customerDetail.js.map