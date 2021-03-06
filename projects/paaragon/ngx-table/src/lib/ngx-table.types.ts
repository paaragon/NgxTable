export type NgxTableHeaders = string[];
export type NgxTablePlaceholders = string[];
export interface NgxTableAutocomplete {
    [key: string]: string[];
}
export interface NgxTableEdition {
    numrow: number;
    row: any;
}
export interface NgxTableSort {
    field: string;
    direction: 1 | -1;
}
export interface NgxTableOperator {
    name: string;
    symbol: string;
}
export interface NgxTableFilter {
    [key: string]: { operator: NgxTableOperator, value: string };
}
export interface NgxTableNew {
    [key: string]: any;
}
export interface NgxTableDelete {
    numrow: number;
    row: any;
}
export interface NgxTableClick {
    key: string;
    value: any;
    row: any;
}
export interface NgxTableConfig {
    placeholders?: NgxTablePlaceholders;
    enumerate?: boolean;
    sort?: {
        enable?: boolean
    };
    filter?: {
        enable: boolean,
        debounceTime?: number,
        validations?: {
            [key: string]: {
                regex: string,
                errorMsg?: string
            }
        },
        lock?: string[],
        operators?: NgxTableOperator[]
    };
    create?: {
        enable: boolean,
        validations?: {
            [key: string]: {
                regex: string,
                errorMsg?: string,
                optional?: boolean
            }
        },
        lock?: string[]
    };
    delete?: {
        enable: boolean
    };
    edit?: {
        enable: boolean,
        longContent?: number,
        lock?: string[],
        validations?: {
            [key: string]: {
                regex: string,
                errorMsg?: string,
                optional?: boolean
            }
        },
    };
    paginator?: {
        enable: boolean,
        elementsPerPage?: number,
        visiblePages?: number
    };
    click?: {
        enable: boolean
    };
}
