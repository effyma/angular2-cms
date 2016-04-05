System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var UserFacade;
    return {
        setters:[],
        execute: function() {
            UserFacade = (function () {
                function UserFacade() {
                }
                UserFacade.prototype.getLazyLoadDataTable = function () {
                    //default: offset=0, sort=name=Id=ASC,searchCondition=Or
                };
                //get only one user
                UserFacade.prototype.getUser = function (userId) {
                };
                UserFacade.prototype.createUser = function (user) {
                    //body= user
                };
                UserFacade.prototype.updateUser = function (user) {
                    //body= user
                };
                UserFacade.prototype.enableUser = function (userId) {
                };
                UserFacade.prototype.disableUser = function (userId) {
                };
                UserFacade.prototype.deleteUser = function (userId) {
                };
                return UserFacade;
            }());
            exports_1("UserFacade", UserFacade);
        }
    }
});
//# sourceMappingURL=userFacade.js.map