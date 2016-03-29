import Rest from 'rest'
import PathPrefix from 'rest/interceptor/pathPrefix'
import DefaultRequest from 'rest/interceptor/defaultRequest'
import SignatureInterceptor from '../utils/SignatureInterceptor'

export default Rest.wrap(PathPrefix, {
        // prefix: 'http://localhost:8080/gateway-module/rest/mock'
        prefix: 'http://demo.kooppi.com/mvno-ota-gw/api/'
    }).wrap(SignatureInterceptor, {
    	signedHeaders: ['x-request-timestamp']
	}).wrap(DefaultRequest, {
    	headers: {
        	'x-request-timestamp': new Date().toISOString()
    	}
	})