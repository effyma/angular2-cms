System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ConfigRequest, Config;
    function formatLocalDate() {
        var now = new Date(), tzo = -now.getTimezoneOffset(), dif = tzo >= 0 ? '+' : '-', pad = function (num) {
            var norm = Math.abs(Math.floor(num));
            return (norm < 10 ? '0' : '') + norm;
        };
        return now.getFullYear()
            + '-' + pad(now.getMonth() + 1)
            + '-' + pad(now.getDate())
            + 'T' + pad(now.getHours())
            + ':' + pad(now.getMinutes())
            + ':' + pad(now.getSeconds())
            + dif + pad(tzo / 60)
            + ':' + pad(tzo % 60);
    }
    exports_1("formatLocalDate", formatLocalDate);
    return {
        setters:[],
        execute: function() {
            ConfigRequest = (function () {
                function ConfigRequest() {
                    this.headers = [];
                    this.signedHeaders = [];
                }
                return ConfigRequest;
            }());
            exports_1("ConfigRequest", ConfigRequest);
            Config = (function () {
                function Config() {
                    this.signedHeaders = [];
                }
                return Config;
            }());
            exports_1("Config", Config);
        }
    }
});
//# sourceMappingURL=Config.js.map