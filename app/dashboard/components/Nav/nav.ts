import {NavService} from '../../services/NavService/NavService';
import {Component,OnInit} from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
    selector: 'nav-items',
    template: `
    <div *ngFor="#item of navItems" class="layout-menu-item" [routerLink]="[item.name]">
    <span>{{item.name}}</span>
    </div>
    `,
    styles: [`
    .layout-menu-item{
    cursor: pointer;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box;
    display: -moz-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: flex-start;
    -webkit-justify-content: flex-start;
    justify-content: flex-start;
    -webkit-align-items: center;
    -webkit-align-items: center;
    align-items: center;
    }
    .layout-menu-item span{
        font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 20px;
        padding: 15px;
    }
    .layout-menu-item:hover{
        background-color: rgba(0,0,0,.05);
    }`],
    directives: [ROUTER_DIRECTIVES],
    providers: [NavService]
})
export class NavComponent implements OnInit{
    navItems;
    navService;
    constructor(navService:NavService){
        this.navService = navService;
    }
    ngOnInit(){
        this.navService.getAllNav().then(navItems => this.navItems = navItems)
    }
}