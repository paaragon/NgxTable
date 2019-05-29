/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
export class NgxTableFilterComponent {
    constructor() {
        this.faFilter = faFilter;
        this.sub = null;
        this.filters = {};
        this.errors = {};
        this.filter = new EventEmitter();
        this.debouncer = new Subject();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    set config(config) {
        this.configBK = config;
        this.buildPlaceholders();
        this.subscribeDebounce();
    }
    /**
     * @return {?}
     */
    get config() {
        return this.configBK;
    }
    /**
     * @param {?} headers
     * @return {?}
     */
    set headers(headers) {
        this.headersBK = headers;
        this.initFilters();
    }
    /**
     * @return {?}
     */
    get headers() {
        return this.headersBK;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    onFilter() {
        /** @type {?} */
        const f = {};
        for (const attr in this.filters) {
            if (this.filters[attr].value) {
                f[attr] = this.filters[attr];
            }
        }
        if (!this.validateFilters(f)) {
            return;
        }
        this.debouncer.next(f);
    }
    /**
     * @param {?} header
     * @return {?}
     */
    hasValidationError(header) {
        return this.errors && this.errors[header] && this.errors[header].error;
    }
    /**
     * @return {?}
     */
    cleanFilters() {
        for (const attr in this.filters) {
            if (this.filters[attr]) {
                this.filters[attr].value = null;
            }
        }
        this.onFilter();
    }
    /**
     * @private
     * @param {?} f
     * @return {?}
     */
    validateFilters(f) {
        this.errors = {};
        /** @type {?} */
        const validations = this.config.filter.validations;
        if (Object.keys(validations).length === 0) {
            return true;
        }
        for (const attr in f) {
            if (!validations[attr]) {
                continue;
            }
            /** @type {?} */
            const text = f[attr].value;
            /** @type {?} */
            const regex = new RegExp(validations[attr].regex);
            if (!regex.test(text)) {
                this.errors[attr] = {
                    error: true,
                    errorMsg: validations[attr].errorMsg
                };
                return false;
            }
        }
        return true;
    }
    /**
     * @private
     * @return {?}
     */
    initFilters() {
        if (this.filters && Object.keys(this.filters).length > 0) {
            return;
        }
        for (const header of this.headers) {
            this.filters[header] = {
                operator: null,
                value: null
            };
        }
    }
    /**
     * @private
     * @return {?}
     */
    subscribeDebounce() {
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this.sub = this.debouncer
            .pipe(debounceTime(this.config.filter.debounceTime))
            .subscribe((/**
         * @param {?} val
         * @return {?}
         */
        (val) => {
            console.log(val);
            this.filter.emit(val);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    buildPlaceholders() {
        if (this.config.placeholders) {
            this.placeholders = this.config.placeholders;
        }
        else {
            this.placeholders = this.headers;
        }
    }
}
NgxTableFilterComponent.decorators = [
    { type: Component, args: [{
                selector: '[ngx-table-filter]',
                template: "<th class=\"first-cell\">\n    <fa-icon [icon]=\"faFilter\"></fa-icon>\n</th>\n<th *ngFor=\"let header of headers; let i = index\">\n  <input class=\"form-control\" [ngClass]=\"{'is-invalid': hasValidationError(header)}\" placeholder=\"{{placeholders[i]}}\"\n    (keyup)=\"onFilter()\" [(ngModel)]=\"filters[header].value\">\n    <p class=\"validation-error text-danger\" *ngIf=\"errors[header]?.error\">{{errors[header]?.errorMsg}}</p>\n</th>\n<th><button type=\"button\" class=\"btn btn-warning\" (click)=\"cleanFilters()\">Clean filters</button></th>\n",
                styles: ["th{vertical-align:top!important}th .validation-error{margin-top:.75rem;margin-bottom:0;font-size:.75rem}th button{font-size:.75rem;width:100%}.first-cell{font-size:.75rem}.first-cell fa-icon{margin-top:.75rem}input{font-size:.75rem}"]
            }] }
];
/** @nocollapse */
NgxTableFilterComponent.ctorParameters = () => [];
NgxTableFilterComponent.propDecorators = {
    config: [{ type: Input }],
    headers: [{ type: Input }],
    filter: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    NgxTableFilterComponent.prototype.faFilter;
    /** @type {?} */
    NgxTableFilterComponent.prototype.sub;
    /** @type {?} */
    NgxTableFilterComponent.prototype.filters;
    /** @type {?} */
    NgxTableFilterComponent.prototype.errors;
    /** @type {?} */
    NgxTableFilterComponent.prototype.configBK;
    /** @type {?} */
    NgxTableFilterComponent.prototype.placeholders;
    /**
     * @type {?}
     * @private
     */
    NgxTableFilterComponent.prototype.headersBK;
    /** @type {?} */
    NgxTableFilterComponent.prototype.filter;
    /** @type {?} */
    NgxTableFilterComponent.prototype.debouncer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXRhYmxlLWZpbHRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcGFhcmFnb24vbmd4LXRhYmxlLyIsInNvdXJjZXMiOlsibGliL25neC10YWJsZS1maWx0ZXIvbmd4LXRhYmxlLWZpbHRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBTzdELE1BQU0sT0FBTyx1QkFBdUI7SUFxQ2xDO1FBbkNBLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFFcEIsUUFBRyxHQUFHLElBQUksQ0FBQztRQUVYLFlBQU8sR0FBbUIsRUFBRSxDQUFDO1FBQzdCLFdBQU0sR0FBNEQsRUFBRSxDQUFDO1FBMkIzRCxXQUFNLEdBQWlDLElBQUksWUFBWSxFQUFrQixDQUFDO1FBQ3BGLGNBQVMsR0FBNEIsSUFBSSxPQUFPLEVBQWtCLENBQUM7SUFHbkUsQ0FBQzs7Ozs7SUEzQkQsSUFDSSxNQUFNLENBQUMsTUFBc0I7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7UUFDdkIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7OztJQUlELElBQ0ksT0FBTyxDQUFDLE9BQXdCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFRRCxRQUFRO0lBQ1IsQ0FBQzs7OztJQUVELFFBQVE7O2NBQ0EsQ0FBQyxHQUFtQixFQUFFO1FBQzVCLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMvQixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO2dCQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM5QjtTQUNGO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDNUIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxNQUFjO1FBQy9CLE9BQU8sSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ3pFLENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2pDO1NBQ0Y7UUFDRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7O0lBRU8sZUFBZSxDQUFDLENBQWlCO1FBRXZDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDOztjQUNYLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1FBRWxELElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQ3pDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFFRCxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUN0QixTQUFTO2FBQ1Y7O2tCQUNLLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSzs7a0JBRXBCLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1lBRWpELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHO29CQUNsQixLQUFLLEVBQUUsSUFBSTtvQkFDWCxRQUFRLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVE7aUJBQ3JDLENBQUM7Z0JBQ0YsT0FBTyxLQUFLLENBQUM7YUFDZDtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7OztJQUVPLFdBQVc7UUFDakIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEQsT0FBTztTQUNSO1FBQ0QsS0FBSyxNQUFNLE1BQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUc7Z0JBQ3JCLFFBQVEsRUFBRSxJQUFJO2dCQUNkLEtBQUssRUFBRSxJQUFJO2FBQ1osQ0FBQztTQUNIO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1osSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVM7YUFDdEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNuRCxTQUFTOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFBQyxDQUFDO0lBQ1AsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtZQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO1NBQzlDO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7U0FDbEM7SUFDSCxDQUFDOzs7WUFwSUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHVqQkFBZ0Q7O2FBRWpEOzs7OztxQkFZRSxLQUFLO3NCQWFMLEtBQUs7cUJBVUwsTUFBTTs7OztJQWhDUCwyQ0FBb0I7O0lBRXBCLHNDQUFXOztJQUVYLDBDQUE2Qjs7SUFDN0IseUNBQXFFOztJQUVyRSwyQ0FBeUI7O0lBQ3pCLCtDQUFtQzs7Ozs7SUFZbkMsNENBQWtCOztJQVlsQix5Q0FBb0Y7O0lBQ3BGLDRDQUFtRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5neFRhYmxlSGVhZGVycywgTmd4VGFibGVGaWx0ZXIsIE5neFRhYmxlQ29uZmlnLCBOZ3hUYWJsZVBsYWNlaG9sZGVycyB9IGZyb20gJy4uL25neC10YWJsZS50eXBlcyc7XG5pbXBvcnQgeyBmYUZpbHRlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ1tuZ3gtdGFibGUtZmlsdGVyXScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uZ3gtdGFibGUtZmlsdGVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LXRhYmxlLWZpbHRlci5jb21wb25lbnQuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIE5neFRhYmxlRmlsdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBmYUZpbHRlciA9IGZhRmlsdGVyO1xuXG4gIHN1YiA9IG51bGw7XG5cbiAgZmlsdGVyczogTmd4VGFibGVGaWx0ZXIgPSB7fTtcbiAgZXJyb3JzOiB7IFtrZXk6IHN0cmluZ106IHsgZXJyb3I6IGJvb2xlYW4sIGVycm9yTXNnOiBzdHJpbmcgfSB9ID0ge307XG5cbiAgY29uZmlnQks6IE5neFRhYmxlQ29uZmlnO1xuICBwbGFjZWhvbGRlcnM6IE5neFRhYmxlUGxhY2Vob2xkZXJzO1xuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKGNvbmZpZzogTmd4VGFibGVDb25maWcpIHtcbiAgICB0aGlzLmNvbmZpZ0JLID0gY29uZmlnO1xuICAgIHRoaXMuYnVpbGRQbGFjZWhvbGRlcnMoKTtcbiAgICB0aGlzLnN1YnNjcmliZURlYm91bmNlKCk7XG4gIH1cblxuICBnZXQgY29uZmlnKCkge1xuICAgIHJldHVybiB0aGlzLmNvbmZpZ0JLO1xuICB9XG5cbiAgcHJpdmF0ZSBoZWFkZXJzQks7XG5cbiAgQElucHV0KClcbiAgc2V0IGhlYWRlcnMoaGVhZGVyczogTmd4VGFibGVIZWFkZXJzKSB7XG4gICAgdGhpcy5oZWFkZXJzQksgPSBoZWFkZXJzO1xuICAgIHRoaXMuaW5pdEZpbHRlcnMoKTtcbiAgfVxuXG4gIGdldCBoZWFkZXJzKCk6IE5neFRhYmxlSGVhZGVycyB7XG4gICAgcmV0dXJuIHRoaXMuaGVhZGVyc0JLO1xuICB9XG5cbiAgQE91dHB1dCgpIGZpbHRlcjogRXZlbnRFbWl0dGVyPE5neFRhYmxlRmlsdGVyPiA9IG5ldyBFdmVudEVtaXR0ZXI8Tmd4VGFibGVGaWx0ZXI+KCk7XG4gIGRlYm91bmNlcjogU3ViamVjdDxOZ3hUYWJsZUZpbHRlcj4gPSBuZXcgU3ViamVjdDxOZ3hUYWJsZUZpbHRlcj4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25GaWx0ZXIoKSB7XG4gICAgY29uc3QgZjogTmd4VGFibGVGaWx0ZXIgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gdGhpcy5maWx0ZXJzKSB7XG4gICAgICBpZiAodGhpcy5maWx0ZXJzW2F0dHJdLnZhbHVlKSB7XG4gICAgICAgIGZbYXR0cl0gPSB0aGlzLmZpbHRlcnNbYXR0cl07XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghdGhpcy52YWxpZGF0ZUZpbHRlcnMoZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kZWJvdW5jZXIubmV4dChmKTtcbiAgfVxuXG4gIGhhc1ZhbGlkYXRpb25FcnJvcihoZWFkZXI6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmVycm9ycyAmJiB0aGlzLmVycm9yc1toZWFkZXJdICYmIHRoaXMuZXJyb3JzW2hlYWRlcl0uZXJyb3I7XG4gIH1cblxuICBjbGVhbkZpbHRlcnMoKSB7XG4gICAgZm9yIChjb25zdCBhdHRyIGluIHRoaXMuZmlsdGVycykge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyc1thdHRyXSkge1xuICAgICAgICB0aGlzLmZpbHRlcnNbYXR0cl0udmFsdWUgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9uRmlsdGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlRmlsdGVycyhmOiBOZ3hUYWJsZUZpbHRlcik6IGJvb2xlYW4ge1xuXG4gICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICBjb25zdCB2YWxpZGF0aW9ucyA9IHRoaXMuY29uZmlnLmZpbHRlci52YWxpZGF0aW9ucztcblxuICAgIGlmIChPYmplY3Qua2V5cyh2YWxpZGF0aW9ucykubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGF0dHIgaW4gZikge1xuICAgICAgaWYgKCF2YWxpZGF0aW9uc1thdHRyXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRleHQgPSBmW2F0dHJdLnZhbHVlO1xuXG4gICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAodmFsaWRhdGlvbnNbYXR0cl0ucmVnZXgpO1xuXG4gICAgICBpZiAoIXJlZ2V4LnRlc3QodGV4dCkpIHtcbiAgICAgICAgdGhpcy5lcnJvcnNbYXR0cl0gPSB7XG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgICAgZXJyb3JNc2c6IHZhbGlkYXRpb25zW2F0dHJdLmVycm9yTXNnXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBwcml2YXRlIGluaXRGaWx0ZXJzKCkge1xuICAgIGlmICh0aGlzLmZpbHRlcnMgJiYgT2JqZWN0LmtleXModGhpcy5maWx0ZXJzKS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgaGVhZGVyIG9mIHRoaXMuaGVhZGVycykge1xuICAgICAgdGhpcy5maWx0ZXJzW2hlYWRlcl0gPSB7XG4gICAgICAgIG9wZXJhdG9yOiBudWxsLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZURlYm91bmNlKCkge1xuICAgIGlmICh0aGlzLnN1Yikge1xuICAgICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gICAgdGhpcy5zdWIgPSB0aGlzLmRlYm91bmNlclxuICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKHRoaXMuY29uZmlnLmZpbHRlci5kZWJvdW5jZVRpbWUpKVxuICAgICAgLnN1YnNjcmliZSgodmFsKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgICAgIHRoaXMuZmlsdGVyLmVtaXQodmFsKTtcbiAgICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZFBsYWNlaG9sZGVycygpIHtcbiAgICBpZiAodGhpcy5jb25maWcucGxhY2Vob2xkZXJzKSB7XG4gICAgICB0aGlzLnBsYWNlaG9sZGVycyA9IHRoaXMuY29uZmlnLnBsYWNlaG9sZGVycztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGFjZWhvbGRlcnMgPSB0aGlzLmhlYWRlcnM7XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==