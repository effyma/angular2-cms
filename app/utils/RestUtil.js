import forge from 'node-forge'

export function uriEncode(input, encodeSlash) {
    if (typeof input !== 'string') {
        input = String(input)
    }
    var result = ''
    for (let i = 0; i < input.length; i++) {
        var ch = input[i]
        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9') || ch == '_' || ch == '-' || ch == '~' || ch == '.') {
            result += ch;
        } else if (ch == '/') {
            result += (encodeSlash ? '%2F' : ch)
        } else {
            result += ('%' + ch.charCodeAt(0).toString(16).toUpperCase())
        }
    }
    return result
}

export function getCanonicalRequest(method, path, params, headers, payload) {
    var result = ''

    result += method
    result += '\n'
    if (!path.startsWith('/'))
        path = '/' + path
    result += uriEncode(path, false)
    result += '\n'

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
        headerString += (headerKey[i].toLowerCase() + ":" + headers[headerKey[i]].trim() + '\n')
        signedHeaderString += (headerKey[i].toLowerCase() + ';')
    }

    result += headerString
    result += '\n'

    result += signedHeaderString.slice(0, -1)
    result += '\n'

    var md = forge.md.sha256.create()
    md.update(payload)

    result += md.digest().toHex()

    return result;
}

export function getApiSignature(key, method, path, params, headers, payload) {
    var canonicalRequest = getCanonicalRequest(method, path, params, headers, payload)
    var hmac = forge.hmac.create()
    hmac.start('sha256', key)
    hmac.update(canonicalRequest)
    return hmac.digest().toHex()
}