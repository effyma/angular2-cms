import Rest from 'rest'
import PathPrefix from 'rest/interceptor/pathPrefix'

export default Rest.wrap(PathPrefix, {
        // prefix: 'http://localhost:8080/gateway-module/rest/mock'
        prefix: 'http://demo.kooppi.com/mvno-ota-gw/api/'
    })