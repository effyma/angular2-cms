/// <reference path="../../../bower_components/crypto-js/crypto-js.d.ts" />
// import Crypto from 'crypto-js';
declare var Crypto:any;
declare var forge:any;
                
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
    result += method;
    result += '\n';
    if(!path.startsWith('/')){path = '/'+path}
    // result += uriEncode(path,false)
    result += path
    result += '\n';
    var paramString = ''
    for (let key in params) {
        if (params.hasOwnProperty(key)) {
            paramString += (uriEncode(key, true) + '=' + uriEncode(params[key], true) + '&')
        }
    }
    result += paramString.slice(0, -1)
    result += '\n'
    
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
        console.log('i',i,'headerKey',headerKey[i],':',headers[headerKey[i]])
        headerString += (headerKey[i].toLowerCase() + ":" + headers[headerKey[i]].trim() + '\n')
        signedHeaderString += (headerKey[i].toLowerCase() + ';')
    }
    result += headerString
    result += '\n'
    result += signedHeaderString.slice(0, -1)
  
    if(payload !==undefined || payload !== null){
    result +='\n'
    var md = forge.md.sha256.create()
    md.update(payload)
    result += md.digest().toHex()
    // var md = CryptoJS.hashes.SHA256(payload).toString(CryptoJS.hashes.enc.Hex);
    // result += md;
    }
    return result
}

export function getSignature(key,method,path,params,headers,payload){
    var canonicalRequest = getCanonicalRequest(method,path,params,headers,payload);
    console.log('canonicalRequest',canonicalRequest);
    var hmac = forge.hmac.create()
    hmac.start('sha256', key)
    hmac.update(canonicalRequest)
    // console.log(hmac.digest().toHex());
    return hmac.digest().toHex()

}

export function toByteArray(key){
var str = key;
var bytes = [];
for (var i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
}
return bytes
}

export function bytesToHex(bytes){
    var hex = [];
    for (var i = 0; i < bytes.length; i++) {
        hex.push((bytes[i] >>> 4).toString(16));
        hex.push((bytes[i] & 0xF).toString(16));
    }
    return hex.join("");
}