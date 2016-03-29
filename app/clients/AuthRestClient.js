import {Injectable} from 'angular2/core';
import Mime from 'rest/interceptor/mime'
import ErrorCode from 'rest/interceptor/errorCode'
import Client from './RestClient'


export function login(params, _success, _fail) {
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