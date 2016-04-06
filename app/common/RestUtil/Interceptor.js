System.register(['./Util'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Util_1;
    var Interceptor;
    return {
        setters:[
            function (Util_1_1) {
                Util_1 = Util_1_1;
            }],
        execute: function() {
            Interceptor = (function () {
                function Interceptor() {
                }
                Interceptor.prototype.getRestFilter = function (request, config) {
                    var path, method, params, headers, signedHeaders, key, entity;
                    path = request.path || '/';
                    method = request.method || 'GET';
                    params = request.params || {};
                    headers = request.headers || (request.headers = {});
                    signedHeaders = config.signedHeaders || [];
                    key = config.key || '';
                    entity = request.entity || '';
                    signedHeaders.sort(function (a, b) {
                        return a.toLowerCase().localeCompare(b.toLowerCase());
                    });
                    var authSignedHeaders = '';
                    var headerToUse = {};
                    for (var i = 0; i < signedHeaders.length; i++) {
                        headerToUse[signedHeaders[i]] = headers[signedHeaders[i]];
                        authSignedHeaders += (signedHeaders[i].toLowerCase() + ';');
                    }
                    authSignedHeaders = authSignedHeaders.slice(0, -1);
                    var authSignature = Util_1.getSignature(key, method, path, params, headerToUse, entity);
                    headers['x-auth-signature'] = authSignature;
                    headers['x-auth-signed-headers'] = authSignedHeaders;
                    return request.headers;
                };
                return Interceptor;
            }());
            exports_1("Interceptor", Interceptor);
        }
    }
});
//# sourceMappingURL=Interceptor.js.map