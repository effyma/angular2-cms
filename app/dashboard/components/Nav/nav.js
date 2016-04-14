System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NavItem, NavComponent;
    return {
        setters:[],
        execute: function() {
            exports_1("NavItem", NavItem = [
                { 'path': 'home', 'name': 'Home' },
                { 'path': 'products', 'name': 'Products' },
                { 'path': 'tester', 'name': 'Tester' }
            ]);
            NavComponent = (function () {
                function NavComponent() {
                }
                NavComponent.prototype.getNavItems = function () {
                };
                return NavComponent;
            }());
            exports_1("NavComponent", NavComponent);
        }
    }
});
//# sourceMappingURL=nav.js.map