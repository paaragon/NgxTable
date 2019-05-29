import { OnInit, EventEmitter } from '@angular/core';
import { NgxTableHeaders, NgxTableOrder, NgxTableConfig } from '../ngx-table.types';
export declare class NgxTableHeaderComponent implements OnInit {
    orderObj: NgxTableOrder;
    faHashtag: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faCaretDown: import("@fortawesome/fontawesome-common-types").IconDefinition;
    faCaretUp: import("@fortawesome/fontawesome-common-types").IconDefinition;
    headers: NgxTableHeaders;
    humanHeaders: NgxTableHeaders;
    config: NgxTableConfig;
    order: EventEmitter<NgxTableOrder>;
    constructor();
    ngOnInit(): void;
    onOrder(header: string): void;
    isAsc(header: string): boolean;
    isDesc(header: string): boolean;
    showLastColumn(): boolean;
}
