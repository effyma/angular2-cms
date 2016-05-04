import {Injectable} from 'angular2/core';

export class NavService{
    getAllNav(){
        return Promise.resolve(NavItems);
    }
    getNavItems(view){
        return Promise.resolve(NavItems).then(items => items.filter(item=>item.view === view));      
    }
}

export class Nav {
    'path';
    'name';
    'view';
}

export var NavItems:Nav[] = [
    {'path': '/home','name':'Home','view':'customer'},
    {'path': '/myprofile','name':'MyProfile','view':'customer'},
    {'path': '/products','name':'Products','view':'customer'},
    {'path': '/tester','name':'Tester','view':'admin'},
    {'path': '/users','name':'Users','view':'admin'},
    {'path': '/customers','name':'Customers','view':'admin'},
    {'path': '/services','name':'Services','view':'admin'}
]