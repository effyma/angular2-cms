System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1;
    var Paginator;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            Paginator = (function () {
                function Paginator() {
                    this.rows = 0;
                    this.first = 0;
                    this.pageLinkSize = 5;
                    this.onPageChange = new core_1.EventEmitter();
                    this._totalRecords = 0;
                    console.log(this._totalRecords);
                }
                Object.defineProperty(Paginator.prototype, "totalRecords", {
                    get: function () {
                        return this._totalRecords;
                    },
                    set: function (val) {
                        this._totalRecords = val;
                        this.updatePageLinks();
                    },
                    enumerable: true,
                    configurable: true
                });
                Paginator.prototype.isFirstPage = function () {
                    return this.getPage() === 0;
                };
                Paginator.prototype.isLastPage = function () {
                    return this.getPage() === this.getPageCount() - 1;
                };
                Paginator.prototype.getPageCount = function () {
                    return Math.ceil(this.totalRecords / this.rows) || 1;
                };
                Paginator.prototype.getPage = function () {
                    return Math.floor(this.first / this.rows);
                };
                Paginator.prototype.calculatePageLinkBoundaries = function () {
                    var numberOfPages = this.getPageCount(), visiblePages = Math.min(this.pageLinkSize, numberOfPages);
                    var start = Math.max(0, Math.ceil(this.getPage() - ((visiblePages) / 2))), end = Math.min(numberOfPages - 1, start + visiblePages - 1);
                    var delta = this.pageLinkSize - (end - start + 1);
                    start = Math.max(0, start - delta);
                    return [start, end];
                };
                Paginator.prototype.updatePageLinks = function () {
                    this.pageLinks = [];
                    var boundaries = this.calculatePageLinkBoundaries(), start = boundaries[0], end = boundaries[1];
                    for (var i = start; i <= end; i++) {
                        this.pageLinks.push(i + 1);
                    }
                };
                Paginator.prototype.changePage = function (val) {
                    var pageCount = this.getPageCount();
                    if (val >= 0 && val <= pageCount) {
                        this.first = this.rows * val;
                        var state = {
                            first: this.first,
                            rows: this.rows,
                            pageCount: pageCount
                        };
                        this.updatePageLinks();
                        this.onPageChange.emit(state);
                    }
                };
                Paginator.prototype.changePageToFirst = function () {
                    this.changePage(0);
                };
                Paginator.prototype.changePageToPrev = function () {
                    if (!this.isFirstPage()) {
                        this.changePage(this.getPage() - 1);
                    }
                };
                Paginator.prototype.changePageToNext = function () {
                    if (!this.isLastPage()) {
                        this.changePage(this.getPage() + 1);
                    }
                };
                Paginator.prototype.changePageToLast = function () {
                    this.changePage(this.getPageCount() - 1);
                };
                Paginator.prototype.onMaxRowsChange = function (event) {
                    this.rows = this.maxRowsOptions[event.target.selectedIndex];
                    this.changePageToFirst();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Paginator.prototype, "rows", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Paginator.prototype, "first", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Paginator.prototype, "style", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Paginator.prototype, "maxRowsOptions", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Paginator.prototype, "pageLinkSize", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], Paginator.prototype, "onPageChange", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], Paginator.prototype, "totalRecords", null);
                Paginator = __decorate([
                    core_1.Component({
                        selector: 'paginator',
                        template: "\n    <div class=\"ui-paginator ui-widget-header\">\n    <span class=\"ui-paginator-first ui-corner-all ui-state-default\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" disabled=\"isFirstPage()\" (click)=\"changePageToFirst()\"><i class=\"fa fa-angle-double-left\" aria-hidden=\"true\"></i></span>\n    <span class=\"ui-paginator-prev ui-corner-all ui-state-default\" [ngClass]=\"{'ui-state-disabled':isFirstPage()}\" disabled=\"isFirstPage()\" (click)=\"changePageToPrev()\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></span>\n    <span class=\"ui-paginator-pages\">\n    <span *ngFor=\"#pageLink of pageLinks\" class=\"ui-paginator-page ui-corner-all ui-state-default\" [ngClass]=\"{'ui-state-active': (pageLink-1 == getPage())}\" (click)=\"changePage(pageLink-1)\">\n    {{pageLink}}\n    </span>\n    </span>\n    <span class=\"ui-paginator-next ui-corner-all ui-state-default\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" disabled=\"isLastPage()\" (click)=\"changePageToNext()\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></span>\n    <span class=\"ui-paginator-last ui-corner-all ui-state-default\" [ngClass]=\"{'ui-state-disabled':isLastPage()}\" disabled=\"isLastPage()\" (click)=\"changePageToLast()\"><i class=\"fa fa-angle-double-right\" aria-hidden=\"true\"></i></span>\n    <select class=\"ui-paginator-pages-selector ui-corner-all ui-state-default\" *ngIf=\"maxRowsOptions\" (change)=\"onMaxRowsChange($event)\">\n                <option *ngFor=\"#options of maxRowsOptions\" [value]=\"options\" [selected]=\"rows == options\">{{options}}</option>\n            </select>\n    </div>",
                        styles: ["\n    .ui-paginator{\n        margin: 0;\n        text-align: center;\n        padding: 2px;\n    }\n    .ui-widget-header{\n        border: 1px solid #d9d9d9;\n    }\n    .ui-paginator .ui-paginator-page, .ui-paginator .ui-paginator-pages, .ui-paginator .ui-paginator-next, .ui-paginator .ui-paginator-last, .ui-paginator .ui-paginator-first, .ui-paginator .ui-paginator-prev, .ui-paginator .ui-paginator-current {\n        display: inline-block;\n        padding: 2px 6px;\n        zoom: 1;\n        margin-left: 1px;\n        margin-right: 1px;\n        text-decoration: none;\n        outline: 0;\n        cursor: pointer;\n    }\n    .ui-state-default, .ui-widget-content .ui-state-default, .ui-widget-header .ui-state-default {\n        border: 1px solid #d3d3d3;\n        background: #ffffff;\n        font-weight: normal;\n        color: #555555;\n    }\n    .ui-corner-all, .ui-corner-bottom, .ui-corner-right, .ui-corner-br {\n        -moz-border-radius-bottomright: 4px;\n        -webkit-border-bottom-right-radius: 4px;\n        -khtml-border-bottom-right-radius: 4px;\n        border-bottom-right-radius: 4px;\n    }\n    .ui-corner-all, .ui-corner-bottom, .ui-corner-left, .ui-corner-bl {\n        -moz-border-radius-bottomleft: 4px;\n        -webkit-border-bottom-left-radius: 4px;\n        -khtml-border-bottom-left-radius: 4px;\n        border-bottom-left-radius: 4px;\n    }\n    .ui-corner-all, .ui-corner-top, .ui-corner-right, .ui-corner-tr {\n        -moz-border-radius-topright: 4px;\n        -webkit-border-top-right-radius: 4px;\n        -khtml-border-top-right-radius: 4px;\n        border-top-right-radius: 4px;\n    }\n    .ui-corner-all, .ui-corner-top, .ui-corner-left, .ui-corner-tl {\n        -moz-border-radius-topleft: 4px;\n        -webkit-border-top-left-radius: 4px;\n        -khtml-border-top-left-radius: 4px;\n        border-top-left-radius: 4px;\n    }\n    .ui-paginator .ui-paginator-page.ui-state-active {\n        background: #27abff;\n        color: #ffffff;\n        border-color: #168dd9;\n    }\n    .ui-state-disabled{\n        opacity: .35;\n        filter: Alpha(Opacity=35);\n        background-image: none;\n        cursor: default !important;\n    }\n    "]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Paginator);
                return Paginator;
            }());
            exports_1("Paginator", Paginator);
        }
    }
});
//# sourceMappingURL=paginator.js.map