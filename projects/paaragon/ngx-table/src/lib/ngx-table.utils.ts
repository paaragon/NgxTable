import { NgxTableConfig } from './ngx-table.types';

export default class NgxTableUtils {

    public static showLastColumn(config: NgxTableConfig) {
        return config && (config.create && config.create.enable || config.filter && config.filter.enable || config.delete && config.delete.enable);
    }
}