export type NgxTableHeaders = string[];
export type NgxTablePlaceholders = string[];
export type NgxTableOrder = { field: string, direction: 1 | -1 };
export type NgxTableFilter = { [key: string]: { operator: string, value: string } };
export type NgxTableConfig = {
    placeholders?: NgxTablePlaceholders,
    order?: {
        enable?: boolean
    },
    filter?: {
        enable?: boolean,
        debounceTime?: number,
        validations?: {
            [key: string]: {
                regex: string,
                errorMsg: string
            }
        }
    }
};