export type NgxTableHeaders = string[];
export type NgxTablePlaceholders = string[];
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
    order?: {
        enable?: boolean
    };
    filter?: {
        enable?: boolean,
        debounceTime?: number,
        validations?: {
            [key: string]: {
                regex: string,
                errorMsg: string
            }
        }
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
}
