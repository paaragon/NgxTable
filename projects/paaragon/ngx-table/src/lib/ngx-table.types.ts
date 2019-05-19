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
export interface NgxTableFilter {
    [key: string]: { operator: string, value: string };
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
        locked?: string[]
    };
    create?: {
        enable: boolean,
        validations?: {
            [key: string]: {
                regex: string,
                errorMsg: string
            }
        }
    };
    delete?: {
        enable: boolean
    };
    edit?: {
        enable: boolean,
        longContent?: number
    };
}
