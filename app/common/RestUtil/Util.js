System.register(['crypto-js'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var crypto_js_1;
    // export function getSignatureKey(key, dateStamp, regionName, serviceName) {
    // key = 'wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY'
    // dateStamp = '20120215'
    // regionName = 'us-east-1'
    // serviceName = 'iam'
    //    var kDate= Crypto.HmacSHA256(dateStamp, "AWS4" + key, { asBytes: true})
    //    var kRegion= Crypto.HmacSHA256( regionName, kDate, { asBytes: true });
    //    var kService=Crypto.HmacSHA256( serviceName, kRegion, { asBytes: true });
    //    var kSigning= Crypto.HmacSHA256( "aws4_request", kService, { asBytes: true });
    // var kkDate= Crypto.HmacSHA256(dateStamp, "AWS4" + key); 
    //    console.log(kSigning.toString(CryptoJS.enc.Hex));
    //    return kSigning;
    // }
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
        result += method + '\n';
        if (!path.startsWith('/')) {
            path = '/' + path;
        }
        result += uriEncode(path, false) + '\n';
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
        result += headerString + '\n';
        result += signedHeaderString.slice(0, -1) + '\n';
        var md = crypto_js_1.default.SHA256(payload).toString(CryptoJS.enc.Hex);
        result += md;
        return result;
    }
    exports_1("getCanonicalRequest", getCanonicalRequest);
    function getSignature(key, method, path, params, headers, payload) {
        var canonicalRequest = getCanonicalRequest(method, path, params, headers, payload);
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