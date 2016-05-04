System.register(['angular2/core', '../paginator/paginator', '../column/column'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, paginator_1, column_1;
    var Datatable;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (paginator_1_1) {
                paginator_1 = paginator_1_1;
            },
            function (column_1_1) {
                column_1 = column_1_1;
            }],
        execute: function() {
            Datatable = (function () {
                function Datatable(differs, cols) {
                    var _this = this;
                    this.pageLinks = 5;
                    this.onLazyLoad = new core_1.EventEmitter();
                    this.first = 0;
                    this.page = 0;
                    this.differ = differs.find([]).create(null);
                    cols.changes.subscribe(function (_) {
                        _this.columns = cols.toArray();
                        // this.columnsUpdated = true;
                    });
                }
                Datatable.prototype.ngOnInit = function () {
                    if (this.lazy) {
                        this.onLazyLoad.emit({
                            first: this.first,
                            rows: this.rows,
                            sortColumn: { 'key': this.sortField, 'order': this.sortOrder },
                            // sortField: this.sortField,
                            // sortOrder: this.sortOrder,
                            filters: null
                        });
                    }
                };
                Datatable.prototype.ngAfterViewChecked = function () {
                    // console.log(this.rows,this.totalRecords,this.maxRowsOptions)
                };
                Datatable.prototype.ngDoCheck = function () {
                    var changes = this.differ.diff(this.value);
                    if (changes) {
                        if (this.paginator) {
                            this.updatePaginator();
                        }
                        this.updateDataToRender(this.filteredValue || this.value);
                    }
                };
                Datatable.prototype.resolveFieldData = function (data, field) {
                    if (data && field) {
                        if (field.indexOf('.') == -1) {
                            return data[field];
                        }
                        else {
                            var fields = field.split('.');
                            var value = data;
                            for (var i = 0, len = fields.length; i < len; ++i) {
                                value = value[fields[i]];
                            }
                            return value;
                        }
                    }
                    else {
                        return null;
                    }
                };
                Datatable.prototype.updatePaginator = function () {
                    //total records
                    this.totalRecords = this.lazy ? this.totalRecords : (this.value ? this.value.length : 0);
                    //first
                    if (this.totalRecords && this.first >= this.totalRecords) {
                        var numberOfPages = Math.ceil(this.totalRecords / this.rows);
                        this.first = Math.max((numberOfPages - 1) * this.rows, 0);
                    }
                };
                Datatable.prototype.paginate = function (event) {
                    this.first = event.first;
                    this.rows = event.rows;
                    if (this.lazy)
                        this.onLazyLoad.emit(this.createLazyLoadMetadata());
                    else
                        this.updateDataToRender(this.filteredValue || this.value);
                };
                Datatable.prototype.updateDataToRender = function (datasource) {
                    if (this.paginator && datasource) {
                        this.dataToRender = [];
                        var startIndex = this.lazy ? 0 : this.first;
                        for (var i = startIndex; i < (startIndex + this.rows); i++) {
                            if (i >= datasource.length) {
                                break;
                            }
                            this.dataToRender.push(datasource[i]);
                        }
                    }
                    else {
                        this.dataToRender = datasource;
                    }
                };
                Datatable.prototype.createLazyLoadMetadata = function () {
                    return {
                        first: this.first,
                        rows: this.rows,
                        sortColumn: { 'key': this.sortField, 'order': this.sortOrder },
                        // sortField: this.sortField,
                        // sortOrder: this.sortOrder,
                        filters: this.filters
                    };
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Datatable.prototype, "value", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Datatable.prototype, "rows", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Datatable.prototype, "totalRecords", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Datatable.prototype, "pageLinks", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Datatable.prototype, "maxRowsOptions", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Datatable.prototype, "style", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Datatable.prototype, "lazy", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Datatable.prototype, "paginator", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Datatable.prototype, "onLazyLoad", void 0);
                Datatable = __decorate([
                    core_1.Component({
                        selector: 'datatable',
                        template: "\n    <div class=\"ui-datatable ui-widget\">\n    <div class=\"ui-datatable-wrapper\">\n    <table>\n    <thead>\n    <tr class=\"ui-state-default\">\n    <th *ngFor=\"#col of columns\">\n    <span class=\"ui-column-title\">{{col.header}}</span>\n    </th>\n    </tr>\n    </thead>\n    <tbody class=\"ui-datatable-data ui-widget-content\">\n    <tr #rowElement *ngFor=\"#rowData of dataToRender\" class=\"ui-widget-content\" (mouseenter)=\"hoveredRow = $event.target\" (mouseleave)=\"hoveredRow = null\">\n    <td *ngFor=\"#col of columns\">\n    <span class=\"ui-cell-data\">{{resolveFieldData(rowData,col.field)}}</span>\n    </td>\n    </tr>\n    </tbody>\n    </table>\n    <paginator class=\"ui-paginator-bottom\" [maxRowsOptions]=\"maxRowsOptions\" [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" (onPageChange)=\"paginate($event)\" *ngIf=\"paginator\"></paginator>\n    </div>\n    </div>\n    ",
                        styles: ["\n    .ui-datatable table{\n        border-collapse: collapse;\n        width: 100%;\n        table-layout: fixed;\n    }\n    .ui-column-title{\n        font-weight:300;\n    }\n    .ui-datatable thead th, .ui-datatable tbody td, .ui-datatable tfoot td, .ui-datatable tfoot th {\n    padding: 4px 10px;\n    overflow: hidden;\n    border: 0.5px solid #d3d3d3;\n    }\n    .ui-datatable .ui-paginator-bottom{\n        border-top: 0 none;\n    }\n    "],
                        directives: [paginator_1.Paginator]
                    }),
                    __param(1, core_1.Query(column_1.Column)), 
                    __metadata('design:paramtypes', [core_1.IterableDiffers, core_1.QueryList])
                ], Datatable);
                return Datatable;
            }());
            exports_1("Datatable", Datatable);
        }
    }
});
//# sourceMappingURL=datatable.js.map