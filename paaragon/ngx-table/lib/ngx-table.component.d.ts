import { OnInit, EventEmitter } from '@angular/core';
import { NgxTableHeaders, NgxTableConfig, NgxTableOrder, NgxTableFilter, NgxTableNew } from './ngx-table.types';
export declare class NgxTableComponent implements OnInit {
    humanHeaders: NgxTableHeaders;
    headers: NgxTableHeaders;
    /**
     * Data of the table. Array of content
     */
    content: any[];
    data: any[];
    /**
     * Config of the table
     */
    configBK: NgxTableConfig;
    mergedConfig: NgxTableConfig;
    config: NgxTableConfig;
    order: EventEmitter<NgxTableOrder>;
    filter: EventEmitter<NgxTableFilter>;
    create: EventEmitter<NgxTableNew>;
    constructor();
    ngOnInit(): void;
    onOrder(orderObj: NgxTableOrder): void;
    onFilter(filterObj: NgxTableFilter): void;
    onCreate(newObj: NgxTableNew): void;
    enableFilter(): boolean;
    enableCreate(): boolean;
    enableBody(): boolean;
    private getHeadersFromData;
}
