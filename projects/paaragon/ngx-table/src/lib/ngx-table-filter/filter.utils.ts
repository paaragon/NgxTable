import { NgxTableFilter, NgxTableHeaders, NgxTableConfig } from '../ngx-table.types';

export default class FilterUtils {

    public static initFilters(filters: NgxTableFilter, headers: NgxTableHeaders, config: NgxTableConfig) {
        const retFilters: NgxTableFilter = filters;
        for (const header of headers) {
            if (retFilters[header]) {
                continue;
            }
            let operator = null;
            if (config && config.filter.operators && config.filter.operators.length > 0) {
                operator = config.filter.operators[0];
            }
            retFilters[header] = {
                operator,
                value: null
            };
        }
        return retFilters;
    }

    public static validateFilters(f: NgxTableFilter, validations): any {

        const errors = {};

        if (Object.keys(validations).length === 0) {
            return errors;
        }

        for (const attr in f) {
            if (!validations[attr]) {
                continue;
            }
            const text = f[attr].value;

            const regex = new RegExp(validations[attr].regex);

            if (!regex.test(text)) {
                errors[attr] = {
                    error: true,
                    errorMsg: validations[attr].errorMsg
                };
                return errors;
            }
        }
        return errors;
    }
}
