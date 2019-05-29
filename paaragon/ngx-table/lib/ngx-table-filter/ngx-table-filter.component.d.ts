import { OnInit, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { NgxTableHeaders, NgxTableFilter, NgxTableConfig, NgxTablePlaceholders } from '../ngx-table.types';
export declare class NgxTableFilterComponent implements OnInit {
    faFilter: import("@fortawesome/fontawesome-common-types").IconDefinition;
    sub: any;
    filters: NgxTableFilter;
    errors: {
        [key: string]: {
            error: boolean;
            errorMsg: string;
        };
    };
    configBK: NgxTableConfig;
    placeholders: NgxTablePlaceholders;
    config: NgxTableConfig;
    private headersBK;
    headers: NgxTableHeaders;
    filter: EventEmitter<NgxTableFilter>;
    debouncer: Subject<NgxTableFilter>;
    constructor();
    ngOnInit(): void;
    onFilter(): void;
    hasValidationError(header: string): boolean;
    cleanFilters(): void;
    private validateFilters;
    private initFilters;
    private subscribeDebounce;
    private buildPlaceholders;
}
