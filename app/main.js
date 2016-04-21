System.register(['angular2/platform/browser', './app.component', 'angular2/http', 'angular2/router', './services/global/GlobalService', './clients/userRestClient/UserRestClient', './common/RestUtil/Interceptor', 'rxjs/add/operator/map', 'rxjs/Rx'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, app_component_1, http_1, router_1, GlobalService_1, UserRestClient_1, Interceptor_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (GlobalService_1_1) {
                GlobalService_1 = GlobalService_1_1;
            },
            function (UserRestClient_1_1) {
                UserRestClient_1 = UserRestClient_1_1;
            },
            function (Interceptor_1_1) {
                Interceptor_1 = Interceptor_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, GlobalService_1.GlobalService, UserRestClient_1.UserRestClient, Interceptor_1.Interceptor]);
        }
    }
});
//# sourceMappingURL=main.js.map