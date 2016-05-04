import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector:'column',
    template:``
})

export class Column{
    @Input() field;
    @Input() header;
    // @Output() sortFunction = new EventEmitter();
}