System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NavService, Nav, NavItems;
    return {
        setters:[],
        execute: function() {
            NavService = (function () {
                function NavService() {
                }
                NavService.prototype.getAllNav = function () {
                    return Promise.resolve(NavItems);
                };
                NavService.prototype.getNavItems = function (view) {
                    return Promise.resolve(NavItems).then(function (items) { return items.filter(function (item) { return item.view === view; }); });
                };
                return NavService;
            }());
            exports_1("NavService", NavService);
            Nav = (function () {
                function Nav() {
                }
                return Nav;
            }());
            exports_1("Nav", Nav);
            exports_1("NavItems", NavItems = [
                { 'path': '/home', 'name': 'Home', 'view': 'customer' },
                { 'path': '/myprofile', 'name': 'MyProfile', 'view': 'customer' },
                { 'path': '/products', 'name': 'Products', 'view': 'customer' },
                { 'path': '/tester', 'name': 'Tester', 'view': 'admin' },
                { 'path': '/users', 'name': 'Users', 'view': 'admin' },
                { 'path': '/customers', 'name': 'Customers', 'view': 'admin' },
                { 'path': '/services', 'name': 'Services', 'view': 'admin' }
            ]);
        }
    }
});
//# sourceMappingURL=NavService.js.map