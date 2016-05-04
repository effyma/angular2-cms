import {Injectable} from 'angular2/core'
import {Http,Headers,Request,RequestMethod,RequestOptions} from 'angular2/http';

@Injectable()
export class UserListService{
    http;
    dataUrl = 'http://192.168.1.4:8080/ProfileManagementWS/rest/v2.0/user/';
    rowCountUrl = 'http://192.168.1.4:8080/ProfileManagementWS/rest/v1.0/user/count'
    users;
    constructor(http:Http){
        this.http = http;
    }
    getUsersLazyLoadList(offset,maxRows,sortedColumn,filter,orFilter){
        var dataUrl = this.dataUrl;
        dataUrl = dataUrl + '?' +
        'offset=' + offset +
        '&' +
        'maxRows=' + maxRows +
        '&' +
        'sort=' + sortedColumn['key'] + '=' + sortedColumn['order'] +
        '&' + orFilter;
        console.log(dataUrl);

        return this.http.get(dataUrl).toPromise().then(
            res => res.json()
        ).then(
            res => {
                this.users = res.responseContent.userItems
                console.log(this.users)
                return this.users}
            );

    }
    getUser(id){
        return Promise.resolve(this.users).then( users => users.filter(users => users.id === id)[0])
    }
    getRowCount(filter,orFilter){
        var rowCountUrl = this.rowCountUrl;
        rowCountUrl = rowCountUrl + '?' +
        filter +
        '&' + orFilter;
        return this.http.get(rowCountUrl).map(
            res => res.json()
        );
    }
    
    filter(){
        
    }
    filterOr(){
        
    }
    editUser(){
        
    }
    enableUser(userUid){
        var dataUrl = this.dataUrl;
        dataUrl = dataUrl + 'enable' + '?' +
        'userUid=' + userUid;
        console.log(dataUrl);
        return this.http.put(dataUrl,'').map(
            res => res.json()
            ).subscribe(
            data =>{
               console.log(data.responseContent.userItems[0])
               return data
            },
            err =>{
                return err
            },
            () => console.log('Complete'));
    }
    disableUser(userUid){
        var dataUrl = this.dataUrl;
        dataUrl = dataUrl + 'disable' + '?' +
        'userUid=' + userUid;
        console.log(dataUrl);
        return this.http.put(dataUrl,'').map(
            res => {res.json();console.log(res.json())}
        ).subscribe(
            data =>{
               console.log(data.responseContent.userItems[0])
               return data
            },
            err =>{
                return err
            },
            () => console.log('Complete'));
        // $.ajax({
        //     url: dataUrl,
        //     dataType:'json',
        //     cache:false,
        //     success: function(data){
        //         console.log(data)
        //     },
        //     error: function(xhr,status,err){
        //         console.log(xhr,status,err)
        //     }
        // })
    }
    deleteUser(){
        
    }
}