import {Component,Input,Output,EventEmitter,OnInit,IterableDiffers,Query,QueryList} from 'angular2/core';
import {Paginator} from '../paginator/paginator';
import {Column} from '../column/column';

@Component({
    selector: 'datatable',
    template:`
    <div class="ui-datatable ui-widget">
    <div class="ui-datatable-wrapper">
    <table>
    <thead>
    <tr class="ui-state-default">
    <th *ngFor="#col of columns">
    <span class="ui-column-title">{{col.header}}</span>
    </th>
    </tr>
    </thead>
    <tbody class="ui-datatable-data ui-widget-content">
    <tr #rowElement *ngFor="#rowData of dataToRender" class="ui-widget-content" (mouseenter)="hoveredRow = $event.target" (mouseleave)="hoveredRow = null">
    <td *ngFor="#col of columns">
    <span class="ui-cell-data">{{resolveFieldData(rowData,col.field)}}</span>
    </td>
    </tr>
    </tbody>
    </table>
    <paginator class="ui-paginator-bottom" [maxRowsOptions]="maxRowsOptions" [rows]="rows" [first]="first" [totalRecords]="totalRecords" [pageLinkSize]="pageLinks" (onPageChange)="paginate($event)" *ngIf="paginator"></paginator>
    </div>
    </div>
    `,
    styles:[`
    .ui-datatable table{
        border-collapse: collapse;
        width: 100%;
        table-layout: fixed;
    }
    .ui-column-title{
        font-weight:300;
    }
    .ui-datatable thead th, .ui-datatable tbody td, .ui-datatable tfoot td, .ui-datatable tfoot th {
    padding: 4px 10px;
    overflow: hidden;
    border: 0.5px solid #d3d3d3;
    }
    .ui-datatable .ui-paginator-bottom{
        border-top: 0 none;
    }
    `],
    directives: [Paginator]
})

export class Datatable implements OnInit{
    @Input() value;
    @Input() rows;
    @Input() totalRecords;
    @Input() pageLinks = 5;
    @Input() maxRowsOptions;
    @Input() style;
    @Input() lazy;
    @Input() paginator;
    
    @Output() onLazyLoad = new EventEmitter();
    
    first = 0;
    page = 0;
    columns;
    // columnsUpdated = false;
    sortColumn;
    sortField;
    sortOrder;
    filters;
    filteredValue;
    dataToRender;
    differ;
    
    constructor(differs: IterableDiffers, @Query(Column) cols: QueryList<Column>){
        this.differ = differs.find([]).create(null);
        cols.changes.subscribe(_ => {
            this.columns = cols.toArray();
            // this.columnsUpdated = true;
        });
        
    }
    ngOnInit(){
        if(this.lazy){
            this.onLazyLoad.emit({
                first: this.first,
                rows: this.rows,
                sortColumn:{'key':this.sortField,'order':this.sortOrder},
                // sortField: this.sortField,
                // sortOrder: this.sortOrder,
                filters: null
            })
        }
    }
    ngAfterViewChecked(){
        // console.log(this.rows,this.totalRecords,this.maxRowsOptions)
    }
    ngDoCheck(){
       let changes = this.differ.diff(this.value);
       if(changes){
          if(this.paginator){
              this.updatePaginator();
          }
          this.updateDataToRender(this.filteredValue||this.value);
       }
    }
    resolveFieldData(data,field){
        if(data && field){
            if(field.indexOf('.') == -1) {
                    return data[field];
                }
                else {
                    let fields: string[] = field.split('.');
                    let value = data;
                    for(var i = 0, len = fields.length; i < len; ++i) {
                        value = value[fields[i]];
                    }
                    return value;
                }
            }
            else {
                return null;
        }
    }
    updatePaginator() {
        //total records
        this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length: 0);

        //first
        if(this.totalRecords && this.first >= this.totalRecords) {
            let numberOfPages = Math.ceil(this.totalRecords/this.rows);
            this.first = Math.max((numberOfPages-1) * this.rows, 0);
        }
    }
    paginate(event){
        this.first = event.first;
        this.rows = event.rows;
        
        if(this.lazy)
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        else
            this.updateDataToRender(this.filteredValue||this.value);
        
    }
    updateDataToRender(datasource) {
        if(this.paginator && datasource) {
            this.dataToRender = [];
            let startIndex = this.lazy ? 0 : this.first;
            for(let i = startIndex; i < (startIndex+ this.rows); i++) {
                if(i >= datasource.length) {
                    break;
                }
                this.dataToRender.push(datasource[i]);
            }
        }
        else {
            this.dataToRender = datasource;
        }
    }
    createLazyLoadMetadata(){
        return {
            first: this.first,
            rows: this.rows,
            sortColumn:{'key':this.sortField,'order':this.sortOrder},
            // sortField: this.sortField,
            // sortOrder: this.sortOrder,
            filters: this.filters
        };
    }
}