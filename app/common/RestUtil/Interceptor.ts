import {getSignature} from './Util';

export class Interceptor{
    getRestFilter(request, config){
        var path, method, params, headers, signedHeaders, key, entity
        path = request.path || '/'
        method = request.method || 'GET'
        params = request.params || {}
        headers = request.headers || (request.headers = {})
        signedHeaders = config.signedHeaders || []
        key = config.key || ''
        entity = request.entity || ''

        signedHeaders.sort(function(a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase())
        })

        var authSignedHeaders = ''
        var headerToUse = {}
        for (let i = 0; i < signedHeaders.length; i++) {
            headerToUse[signedHeaders[i]] = headers[signedHeaders[i]]
            authSignedHeaders += (signedHeaders[i].toLowerCase() + ';')
        }
        authSignedHeaders = authSignedHeaders.slice(0, -1)
        var authSignature = getSignature(key, method, path, params, headerToUse, entity)

        headers['x-auth-signature'] = authSignature
        headers['x-auth-signed-headers'] = authSignedHeaders
        
        return request.headers;
    }
}