/// <reference path="../../../bower_components/crypto-js/crypto-js.d.ts" />
// declare var CryptoJS
// import Crypto from '../../../bower_components/crypto-js/crypto-js';
 import Crypto from 'crypto-js';

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
                
export function uriEncode (input,encodeSlash) {
    if (typeof input !== 'string') {
        input = String(input)
    }
    var result ='';
    for(let i=0; i<input.length;i++){
        var ch = input[i];
        if((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9') || ch == '_' || ch == '-' || ch == '~' || ch == '.'){
            result += ch;
        } else if (ch == '/') {
            result += (encodeSlash ? '%2F' : ch);
        } else {
            result += ('%' + ch.charCodeAt(0).toString(16).toUpperCase());
        }
    }
    return result
}
            
export function getCanonicalRequest(method,path,params,headers,payload){
    var result='';
    result += method + '\n';
    if(!path.startsWith('/')){path = '/'+path}
    result += uriEncode(path,false) + '\n';
    var headerString = ''
    var signedHeaderString = ''
    var headerKey = []
    for (let key in headers) {
        if (headers.hasOwnProperty(key)) {
            headerKey.push(key)
        }
    }
    headerKey.sort(function(a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase())
    })
    for (let i = 0; i < headerKey.length; i++) {
        headerString += (headerKey[i].toLowerCase() + ":" + headers[headerKey[i]].trim() + '\n')
        signedHeaderString += (headerKey[i].toLowerCase() + ';')
    }
    result += headerString + '\n'
    result += signedHeaderString.slice(0, -1) + '\n'
    var md = Crypto.SHA256(payload).toString(CryptoJS.enc.Hex);
    result += md;
    
    return result
}

export function getSignature(key,method,path,params,headers,payload){
    var canonicalRequest = getCanonicalRequest(method,path,params,headers,payload);
    var hmac = Crypto.SHA256(canonicalRequest,key).toString(CryptoJS.enc.Hex);
    return hmac;
}
