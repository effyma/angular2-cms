import {Injectable} from 'angular2/core'
import {Http,Headers,Request,RequestMethod,RequestOptions,URLSearchParams} from 'angular2/http';
import {filter,filterOr} from '../../../common/restUtil/Util'

@Injectable()
export class CustomerService{
    http;
    dataUrl = 'http://192.168.1.4:8080/ProfileManagementWS/rest/v2.0/customer/';
    rowCountUrl = 'http://192.168.1.4:8080/ProfileManagementWS/rest/v1.0/customer/count'
    customers;
    rowCount;
    constructor(http:Http){
        this.http = http;
        var sortedColumn =[]
        this.getRowCount('','').then(rowCount=> {
            this.rowCount = rowCount
            this.getCustomerLazyLoadList(0,rowCount,sortedColumn,'','').then(customers=> this.customers=customers)
    });
    }
    
    getCustomerLazyLoadList(offset,maxRows,sortedColumn,filter,orFilter){
        var dataUrl = this.dataUrl;
        dataUrl = dataUrl + '?' +
        'offset=' + offset +
        '&' +
        'maxRows=' + maxRows +
        '&' +
        'sort=' + sortedColumn['key'] + '=' + sortedColumn['order'] +
        '&' + this.filterOr(orFilter).toString() + 
        '&' + this.filter(filter).toString();
        console.log(dataUrl);

        return this.http.get(dataUrl).toPromise().then(
            res => res.json()
        ).then(
            res => {
                this.customers = res.responseContent.customerItems
                return this.customers}
            );

    }

    getCustomerById(id){
        return this.getCustomerLazyLoadList('','','','','')
    }
    getRowCount(filter,orFilter){
        var rowCountUrl = this.rowCountUrl;
        rowCountUrl = rowCountUrl + '?' +
        filter +
        '&' + orFilter;
        return this.http.get(rowCountUrl).toPromise().then(
            res => res.json()
        ).then(
            res => {
                this.rowCount = res.responseContent.total
                return this.rowCount
            });
    }

    // filter(filter){
    //     var target = filter;
    //     var params = new URLSearchParams()
    //     for (var k in target){
    //     if (target.hasOwnProperty(k)) {
    //         params.set(k,target[k]);
    //     }
    //     }
    //     return params
    // }
    // filterOr(filter){
    //     var target = filter;
    //     var params = new URLSearchParams()
    //     for (var k in target){
    //     if (target.hasOwnProperty(k)) {
    //         params.set(k+'Or',target[k]);
    //     }
    //     }
    //     return params
    // }

    enableCustomer(customerUid){
        var dataUrl = this.dataUrl;
        dataUrl = dataUrl + 'enable' + '?' +
        'customerUid=' + customerUid;
        console.log(dataUrl);
        return this.http.put(dataUrl,'').map(
            res => res.json()
            ).subscribe(
            data =>{
               console.log(data.responseContent.customerItems[0])
               return data
            },
            err =>{
                return err
            },
            () => console.log('Complete'));
    }
    disableCustomer(customerUid){
        var dataUrl = this.dataUrl;
        dataUrl = dataUrl + 'disable' + '?' +
        'customerUid=' + customerUid;
        console.log(dataUrl);
        return this.http.put(dataUrl,'').map(
            res => {res.json();console.log(res.json())}
        ).subscribe(
            data =>{
               console.log(data.responseContent.customerItems[0])
               return data
            },
            err =>{
                return err
            },
            () => console.log('Complete'));
    }
    deleteCustomer(){
        
    }
}

// var customers = [];

// export function initCustomer(offset,maxRows,sortedColumn,filter,orFilter){
//         var dataUrl = 'http://192.168.1.4:8080/ProfileManagementWS/rest/v2.0/customer/';
//         dataUrl = dataUrl + '?' +
//         'offset=' + offset +
//         '&' +
//         'maxRows=' + maxRows +
//         '&' +
//         'sort=' + sortedColumn['key'] + '=' + sortedColumn['order'] +
//         '&' + orFilter;
//         console.log(dataUrl);
//         Http.prototype.get(dataUrl).toPromise().then(
//             res => res.json()
//         ).then(
//             res => {
//                 customers=res.responseContent.customerItems;
//                 console.log(res.responseContent.customerItems)
//             });
// }