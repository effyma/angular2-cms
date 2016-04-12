System.register(['crypto-js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var crypto_js_1;
    // declare var CryptoJS
    function uriEncode(input, encodeSlash) {
        if (typeof input !== 'string') {
            input = String(input);
        }
        var result = '';
        for (var i = 0; i < input.length; i++) {
            var ch = input[i];
            if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9') || ch == '_' || ch == '-' || ch == '~' || ch == '.') {
                result += ch;
            }
            else if (ch == '/') {
                result += (encodeSlash ? '%2F' : ch);
            }
            else {
                result += ('%' + ch.charCodeAt(0).toString(16).toUpperCase());
            }
        }
        return result;
    }
    exports_1("uriEncode", uriEncode);
    function getCanonicalRequest(method, path, params, headers, payload) {
        var result = '';
        result += method;
        result += '\n';
        if (!path.startsWith('/')) {
            path = '/' + path;
        }
        result += uriEncode(path, false);
        // result +='/mvno-ota-gw/api/accounts/test@kooppi.com';
        result += '\n';
        var paramString = '';
        for (var key in params) {
            if (params.hasOwnProperty(key)) {
                paramString += (uriEncode(key, true) + '=' + uriEncode(params[key], true) + '&');
            }
        }
        result += paramString.slice(0, -1);
        result += '\n';
        var headerString = '';
        var signedHeaderString = '';
        var headerKey = [];
        for (var key in headers) {
            if (headers.hasOwnProperty(key)) {
                headerKey.push(key);
            }
        }
        headerKey.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        for (var i = 0; i < headerKey.length; i++) {
            headerString += (headerKey[i].toLowerCase() + ":" + headers[headerKey[i]].trim() + '\n');
            signedHeaderString += (headerKey[i].toLowerCase() + ';');
        }
        result += headerString;
        result += '\n';
        result += signedHeaderString.slice(0, -1);
        if (payload) {
            result += '\n';
            var md = crypto_js_1.default.SHA256(payload).toString(CryptoJS.enc.Hex);
            result += md;
        }
        return result;
    }
    exports_1("getCanonicalRequest", getCanonicalRequest);
    function getSignature(key, method, path, params, headers, payload) {
        var canonicalRequest = getCanonicalRequest(method, path, params, headers, payload);
        console.log('canonicalRequest:', '\n', canonicalRequest);
        console.log(crypto_js_1.default.SHA256(canonicalRequest, key));
        console.log(crypto_js_1.default.SHA256(canonicalRequest, key).toString(CryptoJS.enc.Hex));
        var hmac = crypto_js_1.default.SHA256(canonicalRequest, key).toString(CryptoJS.enc.Hex);
        return hmac;
    }
    exports_1("getSignature", getSignature);
    return {
        setters:[
            function (crypto_js_1_1) {
                crypto_js_1 = crypto_js_1_1;
            }],
        execute: function() {
        }
    }
});
//# sourceMappingURL=Util.js.map