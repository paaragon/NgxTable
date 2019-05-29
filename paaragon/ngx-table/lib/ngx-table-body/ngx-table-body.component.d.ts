import { OnInit } from '@angular/core';
import { NgxTableHeaders, NgxTableConfig } from '../ngx-table.types';
export declare class NgxTableBodyComponent implements OnInit {
    config: NgxTableConfig;
    data: any[];
    headers: NgxTableHeaders;
    constructor();
    ngOnInit(): void;
    showLastColumn(): boolean;
}
