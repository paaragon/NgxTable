import { OnInit, EventEmitter } from '@angular/core';
import { NgxTableConfig, NgxTablePlaceholders, NgxTableHeaders, NgxTableNew } from '../ngx-table.types';
export declare class NgxTableCreateComponent implements OnInit {
    faPlus: import("@fortawesome/fontawesome-common-types").IconDefinition;
    errors: {
        [key: string]: {
            error: boolean;
            errorMsg: string;
        };
    };
    newObj: NgxTableNew;
    buttonEnable: boolean;
    headers: NgxTableHeaders;
    placeholders: NgxTablePlaceholders;
    configBK: NgxTableConfig;
    config: NgxTableConfig;
    create: EventEmitter<NgxTableNew>;
    constructor();
    ngOnInit(): void;
    validate(): boolean;
    hasValidationError(header: string): boolean;
    onCreate(): void;
    private buildPlaceholders;
}
