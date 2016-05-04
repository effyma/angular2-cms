import {Component,Input,Output,EventEmitter} from 'angular2/core';

@Component({
    selector:'paginator',
    template:`
    <div class="ui-paginator ui-widget-header">
    <span class="ui-paginator-first ui-corner-all ui-state-default" [ngClass]="{'ui-state-disabled':isFirstPage()}" disabled="isFirstPage()" (click)="changePageToFirst()"><i class="fa fa-angle-double-left" aria-hidden="true"></i></span>
    <span class="ui-paginator-prev ui-corner-all ui-state-default" [ngClass]="{'ui-state-disabled':isFirstPage()}" disabled="isFirstPage()" (click)="changePageToPrev()"><i class="fa fa-angle-left" aria-hidden="true"></i></span>
    <span class="ui-paginator-pages">
    <span *ngFor="#pageLink of pageLinks" class="ui-paginator-page ui-corner-all ui-state-default" [ngClass]="{'ui-state-active': (pageLink-1 == getPage())}" (click)="changePage(pageLink-1)">
    {{pageLink}}
    </span>
    </span>
    <span class="ui-paginator-next ui-corner-all ui-state-default" [ngClass]="{'ui-state-disabled':isLastPage()}" disabled="isLastPage()" (click)="changePageToNext()"><i class="fa fa-angle-right" aria-hidden="true"></i></span>
    <span class="ui-paginator-last ui-corner-all ui-state-default" [ngClass]="{'ui-state-disabled':isLastPage()}" disabled="isLastPage()" (click)="changePageToLast()"><i class="fa fa-angle-double-right" aria-hidden="true"></i></span>
    <select class="ui-paginator-pages-selector ui-corner-all ui-state-default" *ngIf="maxRowsOptions" (change)="onMaxRowsChange($event)">
                <option *ngFor="#options of maxRowsOptions" [value]="options" [selected]="rows == options">{{options}}</option>
            </select>
    </div>`,
    styles:[`
    .ui-paginator{
        margin: 0;
        text-align: center;
        padding: 2px;
    }
    .ui-widget-header{
        border: 1px solid #d9d9d9;
    }
    .ui-paginator .ui-paginator-page, .ui-paginator .ui-paginator-pages, .ui-paginator .ui-paginator-next, .ui-paginator .ui-paginator-last, .ui-paginator .ui-paginator-first, .ui-paginator .ui-paginator-prev, .ui-paginator .ui-paginator-current {
        display: inline-block;
        padding: 2px 6px;
        zoom: 1;
        margin-left: 1px;
        margin-right: 1px;
        text-decoration: none;
        outline: 0;
        cursor: pointer;
    }
    .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {
        border: 1px solid #d3d3d3;
        background: #ffffff;
        font-weight: normal;
        color: #555555;
    }
    .ui-corner-all, .ui-corner-bottom, .ui-corner-right, .ui-corner-br {
        -moz-border-radius-bottomright: 4px;
        -webkit-border-bottom-right-radius: 4px;
        -khtml-border-bottom-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
    .ui-corner-all, .ui-corner-bottom, .ui-corner-left, .ui-corner-bl {
        -moz-border-radius-bottomleft: 4px;
        -webkit-border-bottom-left-radius: 4px;
        -khtml-border-bottom-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .ui-corner-all, .ui-corner-top, .ui-corner-right, .ui-corner-tr {
        -moz-border-radius-topright: 4px;
        -webkit-border-top-right-radius: 4px;
        -khtml-border-top-right-radius: 4px;
        border-top-right-radius: 4px;
    }
    .ui-corner-all, .ui-corner-top, .ui-corner-left, .ui-corner-tl {
        -moz-border-radius-topleft: 4px;
        -webkit-border-top-left-radius: 4px;
        -khtml-border-top-left-radius: 4px;
        border-top-left-radius: 4px;
    }
    .ui-paginator .ui-paginator-page.ui-state-active {
        background: #27abff;
        color: #ffffff;
        border-color: #168dd9;
    }
    .ui-state-disabled{
        opacity: .35;
        filter: Alpha(Opacity=35);
        background-image: none;
        cursor: default !important;
    }
    `]
})

export class Paginator{
    @Input() rows = 0;
    @Input() first = 0;
    @Input() style;
    @Input() maxRowsOptions;
    @Input() pageLinkSize = 5;
    @Output() onPageChange = new EventEmitter();
    pageLinks;
    _totalRecords = 0;
    
    @Input() get totalRecords(){
        return this._totalRecords
    }
    set totalRecords(val){
        this._totalRecords = val;
        this.updatePageLinks();
    }
    
    constructor(){
        console.log(this._totalRecords)     
    }
    
    isFirstPage(){
        return this.getPage() === 0;
    }
    isLastPage(){
        return this.getPage() === this.getPageCount()-1;
    }
    getPageCount(){
        return Math.ceil(this.totalRecords/this.rows)||1;
    }
    getPage(){
        return Math.floor(this.first/this.rows);
    }
    calculatePageLinkBoundaries(){
        let numberOfPages = this.getPageCount(),
        visiblePages = Math.min(this.pageLinkSize, numberOfPages);
        let start = Math.max(0,Math.ceil(this.getPage()-((visiblePages)/2))),
        end = Math.min(numberOfPages-1,start+visiblePages-1);
        var delta = this.pageLinkSize - (end - start + 1);
        start = Math.max(0, start - delta);

        return [start, end];
    }
    updatePageLinks(){
        this.pageLinks = [];
        let boundaries = this.calculatePageLinkBoundaries(),
        start = boundaries[0],
        end = boundaries[1];

        for(let i = start; i <= end; i++) {
            this.pageLinks.push(i + 1);
        }
    }
    changePage(val){
        var pageCount = this.getPageCount();
        if(val >=0 && val <= pageCount){
            this.first = this.rows * val;
            var state ={
                first: this.first,
                rows: this.rows,
                pageCount: pageCount
            };
            this.updatePageLinks()
            this.onPageChange.emit(state)
        }
    }
    changePageToFirst(){
        this.changePage(0);
    }
    changePageToPrev(){
        if(!this.isFirstPage()){
            this.changePage(this.getPage()-1);
        }
    }
    changePageToNext(){
        if(!this.isLastPage()){
            this.changePage(this.getPage()+1);
        }
    }
    changePageToLast(){
        this.changePage(this.getPageCount()-1);
    }
    onMaxRowsChange(event){
        this.rows = this.maxRowsOptions[event.target.selectedIndex];
        this.changePageToFirst();
    }
}