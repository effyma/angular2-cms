import Mime from 'rest/interceptor/mime';
import ErrorCode from 'rest/interceptor/errorCode';
import Client from '../clients/RestClient';

export class AccountRestClient{
login(params, _success, _fail) {
    let entity = { 'email': params.email, 'password': params.password }
    let client = Client.wrap(Mime, {
        mime: 'application/json'
    }).wrap(ErrorCode, {
        code: 400
    })
    client({
        method: 'POST',
        path: 'sessions',
        entity: entity
    }).then(function(response) {
        console.log(response)
        _success(response)
    }, function(err) {
        console.log(err)
        _fail(err)
    })
}

getAccountInfo(params,_success, _fail) {
	let pathParam = params
    let signingkey = key
    let client = Client.wrap(Mime, {
        mime: 'application/json'
    }).wrap(ErrorCode, {
        code: 400
    })
    client({
        method: 'GET',
        path: 'accounts/'+pathParam,
    }).then(function(response) {
        console.log(response)
        _success(response)
    }, function(err) {
        console.log(err)
        _fail(err)
    })
}

createAccount(params, _success, _fail) {
    let entity = { 'email': params.email, 'password': params.password }
    let client = Client.wrap(Mime, {
        mime: 'application/json'
    }).wrap(ErrorCode, {
        code: 400
    })
    client({
        method: 'POST',
        path: 'accounts',
        entity: entity
    }).then(function(response) {
        console.log(response)
        _success(response)
    }, function(err) {
        console.log(err)
        _fail(err)
    })
}

forgetPassword(params, _success, _fail) {
    let pathParam = params
    let client = Client.wrap(Mime, {
        mime: 'application/json'
    }).wrap(ErrorCode, {
        code: 400
    })
    client({
        method: 'POST',
        path: 'accounts/'+pathParam+'/forgetPassword'
    }).then(function(response) {
        console.log(response)
        _success(response)
    }, function(err) {
        console.log(err)
        _fail(err)
    })
}

}

// module.export = AccountRestClient;