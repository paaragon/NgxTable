export type NgxTableHeaders = string[];
export type NgxTablePlaceholders = string[];
export interface NgxTableEdition {
    index: number;
    row: any;
}
export interface NgxTableOrder {
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
export interface NgxTableConfig {
    placeholders?: NgxTablePlaceholders;
    sort?: {
        enable?: boolean
    };
    filter?: {
        enable: boolean,
        debounceTime?: number,
        validations?: {
            [key: string]: {
                regex: string,
                errorMsg: string
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
                errorMsg: string
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
        lock?: string[]
    };
}
