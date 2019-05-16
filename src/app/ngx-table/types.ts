export type NgxTableConfig = { order?: { enable?: boolean }, filter?: { enable?: boolean, debounceTime?: number } };
export type NgxTableHeaders = string[];
export type NgxTableOrder = { field: string, direction: 1 | -1 };
export type NgxTableFilter = { field: string, operator: string, value: string };